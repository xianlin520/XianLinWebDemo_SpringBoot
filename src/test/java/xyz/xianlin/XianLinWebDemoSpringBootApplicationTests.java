package xyz.xianlin;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import xyz.xianlin.dao.UserDao;

@SpringBootTest
class XianLinWebDemoSpringBootApplicationTests {
    @Autowired
    private UserDao userDao;
    
    @Test
    void contextLoads() {
    
    }
    
}
