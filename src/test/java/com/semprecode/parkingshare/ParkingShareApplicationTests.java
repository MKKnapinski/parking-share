package com.semprecode.parkingshare;

import com.semprecode.parkingshare.controller.HealthController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class ParkingShareApplicationTests {

    @Autowired
    HealthController healthController;

    @Test
    void contextLoads() {
        assertThat(healthController).isNotNull();
    }

}
