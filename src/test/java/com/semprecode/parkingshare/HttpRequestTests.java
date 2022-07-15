package com.semprecode.parkingshare;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class HttpRequestTests {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    private String getApplicationUrl() {
        return "http://localhost:" + port;
    }

    @Test
    void healthcheckEndpointShouldReturnOK() throws Exception {
        assertThat(restTemplate.getForObject(getApplicationUrl() + "/api/health", String.class))
                .containsIgnoringCase("ok");
    }


}
