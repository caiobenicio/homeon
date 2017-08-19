package org.test.home.on.utils;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.home.on.utils.AppConfig;

@Configuration
@Import(AppConfig.class)
public class AppTestConfig {
}
