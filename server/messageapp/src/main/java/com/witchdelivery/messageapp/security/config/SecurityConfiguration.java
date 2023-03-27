package com.witchdelivery.messageapp.security.config;

import com.witchdelivery.messageapp.security.auth.filter.JwtAuthenticationFilter;
import com.witchdelivery.messageapp.security.auth.filter.JwtLogoutFilter;
import com.witchdelivery.messageapp.security.auth.filter.JwtReissueFilter;
import com.witchdelivery.messageapp.security.auth.filter.JwtVerificationFilter;
import com.witchdelivery.messageapp.security.auth.handler.MemberAccessDeniedHandler;
import com.witchdelivery.messageapp.security.auth.handler.MemberAuthenticationEntryPoint;
import com.witchdelivery.messageapp.security.auth.handler.MemberAuthenticationFailureHandler;
import com.witchdelivery.messageapp.security.auth.handler.MemberAuthenticationSuccessHandler;
import com.witchdelivery.messageapp.security.auth.jwt.JwtTokenizer;
import com.witchdelivery.messageapp.security.auth.service.RedisService;
import com.witchdelivery.messageapp.security.auth.service.MemberUserDetailsService;
import com.witchdelivery.messageapp.security.utils.CustomAuthorityUtils;
import com.witchdelivery.messageapp.domain.member.repository.MemberRepository;
import com.witchdelivery.messageapp.security.oauth.OAuth2MemberSuccessHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@RequiredArgsConstructor
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final RedisService redisService;
    private final MemberUserDetailsService memberDetailsService; // final 없으니까 DI오류남 왜지??
    private final MemberRepository memberRepository;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin() // 동일 출처(도메인)의 요청만 허용
                .and()

                .csrf().disable() // CSRF 보안 비활성화
                .cors(withDefaults()) // CorsConfigurationSource 사용
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // 세션 정책 미사용
                .and()

                .formLogin().disable() // formLogin 비활성화
                .httpBasic().disable() // httpBasic 비활성화

                .exceptionHandling()    // 예외처리
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .accessDeniedHandler(new MemberAccessDeniedHandler())
                .and()

                .apply(new CustomFilterConfigurer())    // CustomFilterConfigurer 사용
                .and()

                .authorizeHttpRequests(authorize -> authorize
                        // member
                        .antMatchers(HttpMethod.POST, "/*/users/**").permitAll()
                        .antMatchers(HttpMethod.GET, "/*/users").hasRole("ADMIN")
                        .antMatchers(HttpMethod.GET, "/*/users/**").hasAnyRole("USER", "ADMIN")
                        .antMatchers(HttpMethod.PATCH, "/*/users/**").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "/*/users/**").hasRole("USER")
                        // message
                        .antMatchers(HttpMethod.POST, "/*/messages/**").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/*/messages/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/*/messages").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/*/messages/**").permitAll()
                        // auth
                        .antMatchers(HttpMethod.POST, "/*/auth/logout","/*/auth/reissue").authenticated()
                        // mailbox
                        .antMatchers(HttpMethod.PATCH, "/*/mailbox/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/*/mailbox/**").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "/*/mailbox/**").hasRole("USER")
                        .anyRequest().permitAll())
                .oauth2Login(oauth2 -> oauth2
                        .successHandler(new OAuth2MemberSuccessHandler(jwtTokenizer, authorityUtils, memberRepository, redisService)));
        return http.build();
    }

    // PasswordEncoder Bean 객체 생성
    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    //  CorsConfigurationSource Bean 생성을 통해 구체적인 CORS 정책을 설정
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.setAllowedOrigins(Arrays.asList("*")); // 모든 출처(Origin)에 대해 스크립트 기반의 HTTP통신 허용
        // 허용할 Origins 골라서 넣어주려면 위에 꺼 써도 됨
        configuration.setAllowedOriginPatterns(List.of("*")); // setAllowCredentials(true)로 설정하면 setAllowedOrigins("*")를 사용할 수 없어서 대신 사용함
        configuration.setExposedHeaders(List.of("Authorization", "Refresh")); // 서버 -> 클라이언트로 보내는 response Header
        configuration.setAllowedHeaders(List.of("*")); // 클라이언트 -> 서버 허용할 request Header
        configuration.setAllowedMethods(List.of("OPTIONS","GET","POST", "PATCH", "DELETE", "HEAD")); // 파라미터로 지정한 HTTP Method에 대한 HTTP통신 허용
        configuration.setAllowCredentials(true); // 쿠키 요청 허용
        configuration.setMaxAge(3000L); // 원하는 시간만큼 pre-flight 리퀘스트를 캐싱

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource(); // CorsConfigurationSource 인터페이스의 구현 클래스인 UrlBasedCorsConfigurationSource 클래스의 객체를 생성
        source.registerCorsConfiguration("/**", configuration); // 모든 URL 앞에서 구성한 CORS정책(CorsConfiguration)을 적용
        return source;
    }

    // JwtAuthenticationFilter를 등록하는 역할
    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class); // AuthenticationManager의 객체를 얻음

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer, redisService);  // JwtAuthenticationFilter객체 생성 & DI
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler()); // 핸들러 등록
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler()); // 핸들러 등록
            jwtAuthenticationFilter.setFilterProcessesUrl("/sendy/auth/login"); // login URL

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils, redisService); // JwtVerificationFilter객체 생성 & DI

            JwtReissueFilter jwtReissueFilter = new JwtReissueFilter(redisService, jwtTokenizer, memberDetailsService);

            JwtLogoutFilter jwtLogoutFilter = new JwtLogoutFilter(jwtTokenizer, redisService);



            builder
                    .addFilter(jwtAuthenticationFilter) // JwtAuthenticationFilter를 Spring Security Filter Chain에 추가
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class) // jwtVerificationFilter가 JwtAuthenticationFilter가 수행된 바로 다음에 동작하도록 함
                    .addFilterAfter(jwtReissueFilter, JwtVerificationFilter.class)
//                    .addFilterAfter(jwtLogoutFilter, JwtVerificationFilter.class);
                    .addFilterAfter(jwtLogoutFilter, JwtVerificationFilter.class)
                    .addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class);
        }
    }
}
