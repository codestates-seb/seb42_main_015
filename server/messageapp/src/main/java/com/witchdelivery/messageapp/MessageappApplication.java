package com.witchdelivery.messageapp;

import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableBatchProcessing  // Spring Batch 활성화
@EnableScheduling       // 스케쥴러 활성화
@EnableJpaAuditing
@SpringBootApplication
public class MessageappApplication {

	static {
		System.setProperty("com.amazonaws.sdk.disableEc2Metadata", "true");
	}

	public static void main(String[] args) {
		SpringApplication.run(MessageappApplication.class, args);
	}

}
