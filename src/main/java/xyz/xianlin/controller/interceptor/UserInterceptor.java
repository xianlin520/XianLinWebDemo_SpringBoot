package xyz.xianlin.controller.interceptor;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import xyz.xianlin.domain.UserData;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// 设置拦截器
@Component // 设置为Spring的组件
public class UserInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        UserData user = (UserData) request.getSession().getAttribute("UserData"); // 读取session中的UserData数据
        // 打印日志
//        System.out.println("UserInterceptor.preHandle()==>"+user);
        if (null==user){
            response.sendRedirect(request.getContextPath()+"/pages/login.html"); // 跳转到登录页面
            return false;
        }
        return true;
    }
    
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
    
    }
    
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
    
    }
}
