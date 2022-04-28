package xyz.xianlin.domain;

public class UserData {
    private String userQQ;
    private String userName;
    private String userPassword;
    
    public UserData() {
    }
    
    public UserData(String userQQ, String userName, String userPassword) {
        this.userQQ = userQQ;
        this.userName = userName;
        this.userPassword = userPassword;
    }
    
    @Override
    public String toString() {
        return "User{" +
                "userQQ='" + userQQ + '\'' +
                ", userName='" + userName + '\'' +
                ", userPassword='" + userPassword + '\'' +
                '}';
    }
    
    public String getUserQQ() {
        return userQQ;
    }
    
    public void setUserQQ(String userQQ) {
        this.userQQ = userQQ;
    }
    
    public String getUserName() {
        return userName;
    }
    
    public void setUserName(String userName) {
        this.userName = userName;
    }
    
    public String getUserPassword() {
        return userPassword;
    }
    
    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }
}
