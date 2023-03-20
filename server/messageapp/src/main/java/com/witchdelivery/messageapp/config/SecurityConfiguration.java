package com.witchdelivery.messageapp.config;

import com.witchdelivery.messageapp.auth.filter.JwtAuthenticationFilter;
import com.witchdelivery.messageapp.auth.filter.JwtLogoutFilter;
import com.witchdelivery.messageapp.auth.filter.JwtReissueFilter;
import com.witchdelivery.messageapp.auth.filter.JwtVerificationFilter;
import com.witchdelivery.messageapp.auth.handler.MemberAccessDeniedHandler;
import com.witchdelivery.messageapp.auth.handler.MemberAuthenticationEntryPoint;
import com.witchdelivery.messageapp.auth.handler.MemberAuthenticationFailureHandler;
import com.witchdelivery.messageapp.auth.handler.MemberAuthenticationSuccessHandler;
import com.witchdelivery.messageapp.auth.jwt.JwtTokenizer;
import com.witchdelivery.messageapp.auth.service.RedisService;
import com.witchdelivery.messageapp.auth.userdetails.MemberUserDetailsService;
import com.witchdelivery.messageapp.auth.utils.CustomAuthorityUtils;
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
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@RequiredArgsConstructor
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final RedisService redisService;
    private final MemberUserDetailsService memberDetailsService; // final 없으니까 DI오류남 왜지??

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin() // 동일 출처로부터 들어오는 request만 페이지 렌더링 허용
                .and()
                .csrf().disable() // CSRF공격에 대한 Spring Security설정 비활성화
                .cors(withDefaults()) // corsConfigurationSource라는 이름으로 등록된 Bean 이용
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // 세션을 생성하지 않도록 설정
                .and()
                .formLogin().disable() // 폼 로그인 방식 비활성화
                .httpBasic().disable() // request를 전송할 때마다 Username/Password정보를 Header에 실어서 인증하는 방식 비활성화
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint()) // 예외처리
                .accessDeniedHandler(new MemberAccessDeniedHandler()) // 예외처리
                .and()
                .apply(new CustomFilterConfigurer()) // Custom Configurer를 추가해 커스터마이징된 Configuration을 추가
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST, "/*/users/**").permitAll() // 회원가입 누구나 접근
                        .antMatchers(HttpMethod.GET, "/*/users").hasRole("ADMIN") // 모든 회원 정보의 목록, 관리자(ADMIN) 권한을 가진 사용자만 접근
                        .antMatchers(HttpMethod.GET, "/*/users/**").hasAnyRole("USER", "ADMIN") // 특정 회원에 대한 정보 조회, 일반 사용자(USER)와 관리자(ADMIN)권한을 가진 사용자 모두 접근
                        .antMatchers(HttpMethod.PATCH, "/*/users/**").hasRole("USER") // 회원 정보 수정, 일반 사용자(USER)권한만 가진 사용자만 접근
                        .antMatchers(HttpMethod.DELETE, "/*/users/**").hasRole("USER") // 특정 회원 삭제(탈퇴), 일반 사용자(USER) 권한만 가진 사용자만 접근
                        .antMatchers(HttpMethod.POST, "/*/messages/**").hasRole("USER") // 편지 작성, 일반 사용자(USER) 권한만 가진 사용자만 접근
                        .antMatchers(HttpMethod.GET, "/*/messages").hasRole("USER") // 편지 목록 조회, 일반 사용자(USER) 권한만 가진 사용자만 접근
                        .antMatchers(HttpMethod.GET, "/*/messages/**").permitAll() // 특정 편지 조회, 누구나 접근(회원&비회원)
                        .antMatchers(HttpMethod.POST, "/*/auth/logout","/*/auth/reissue").permitAll() // 임시
                        .anyRequest().permitAll()); // 나머지는 리소스에 대한 요청은 모든 접근 가능
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
        configuration.setAllowedOrigins(Arrays.asList("*")); // 모든 출처(Origin)에 대해 스크립트 기반의 HTTP통신 허용
        configuration.setAllowedMethods(Arrays.asList("OPTIONS","GET","POST", "PATCH", "DELETE")); // 파라미터로 지정한 HTTP Method에 대한 HTTP통신 허용
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
                    .addFilterAfter(jwtLogoutFilter, JwtVerificationFilter.class);
        }
    }
}
