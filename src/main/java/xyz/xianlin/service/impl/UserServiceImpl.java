package xyz.xianlin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xyz.xianlin.dao.UserDao;
import xyz.xianlin.domain.UserData;
import xyz.xianlin.service.UserService;

@Service // 标识为 Spring Bean
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;
    
    @Override
    public UserData selectByUserQQ(String userQQ) {
        return userDao.selectByUserQQ(userQQ);
    }
    
    @Override
    public UserData selectByUserQQAndUserPassword(UserData userData) {
        return userDao.selectByUserQQAndUserPassword(userData);
    }
    
    @Override
    public boolean insertUser(UserData userData) {
        boolean b = userDao.insertUser(userData);
        return b;
    }
}
