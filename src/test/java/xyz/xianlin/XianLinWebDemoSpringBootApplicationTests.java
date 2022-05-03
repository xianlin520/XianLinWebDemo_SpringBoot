package xyz.xianlin;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import xyz.xianlin.dao.UserDao;
import xyz.xianlin.domain.UserData;

import java.util.List;

@SpringBootTest
class XianLinWebDemoSpringBootApplicationTests {
    @Autowired
    private UserDao userDao;
    
    @Test
    void contextLoads() {
        String name = "xianlin", name2 = "xianlin2";
        name2 += name;
        System.out.println(name2);
    }
    
}
