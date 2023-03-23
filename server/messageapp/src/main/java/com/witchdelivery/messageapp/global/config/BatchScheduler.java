package com.witchdelivery.messageapp.global.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.JobParameter;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersInvalidException;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@Component
@RequiredArgsConstructor
public class BatchScheduler {

    private final JobLauncher jobLauncher;       // JobLauncher 생성자 주입

    @Autowired
    private BatchConfig batchConfig;             // BatchConfig는 @Autowired 주석과 함께 필드 주입을 통해 주입

    @Scheduled(cron = "0 0 9 * * *")      // 10초마다 실행되도록 예약.  매일 오전 09시 실행은, 0 0 9 * * *
    public void runJob() {         // 현재 타임스탬프를 매개변수로 사용하고 JobParameters 객체를 생성하고 작업을 시작한다. 오류 발생 시 오류 메시지를 기록한다

        Map<String, JobParameter> confMap = new HashMap<>();
        confMap.put("time", new JobParameter(System.currentTimeMillis()));       // time과 밀리초 단위의 현재 시스템 시간 값을 사용하는 JobParameter 개체 생성 및 추가
        JobParameters jobParameters = new JobParameters(confMap);

        try {
            jobLauncher.run(batchConfig.job(), jobParameters);   // jobLauncher는 batchConfig.job()에서 지정한 작업을 실행하고 이전에 생성한 JobParameters 객체를 매개변수로 전달하는 데 사용된다.
        } catch (JobExecutionAlreadyRunningException | JobInstanceAlreadyCompleteException
            | JobParametersInvalidException | org.springframework.batch.core.repository.JobRestartException e) {

            log.error(e.getMessage()); // 작업 실행 중 예외가 발생하면 log.error() 메서드를 사용하여 오류 메시지를 기록한다.
        }
    }
}
