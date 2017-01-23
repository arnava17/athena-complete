package com.barclays;

/**
 * Created by RAggarwal on 12/21/2016.
 */

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableMongoRepositories("com.barclays.repository")
@EnableSwagger2
public class App {

	public static void main(String[] args) {

		SpringApplication.run(App.class, args);
	}

	@Bean
	public Docket simpleDiffServiceApi() {

		return new Docket(DocumentationType.SWAGGER_2)
				.groupName("results")
				.apiInfo(apiInfo())
				.select()
				.apis(RequestHandlerSelectors.any())
				.paths(PathSelectors.any())
				.build()
				.pathMapping("/");
	}

	private ApiInfo apiInfo() {

		return new ApiInfoBuilder()
				.title("Barclaycard Athena Results Collector API")
				.version("1.0")
				.build();
	}

}