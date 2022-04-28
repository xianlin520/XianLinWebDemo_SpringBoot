package xyz.xianlin.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import xyz.xianlin.domain.UserData;

@SpringBootTest
public class UserServiceTest {
    @Autowired
    private UserService userService;
    
    @Test
    public void selectByUserQQTest() {
        UserData userData = userService.selectByUserQQ("10086");
        System.out.println(userData);
    }
}
