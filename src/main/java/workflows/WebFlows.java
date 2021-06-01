package workflows;
import extensions.DbActions;
import extensions.UIActions;
import io.qameta.allure.Step;
import utilities.CommonOps;
import utilities.ManageDB;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;


public class WebFlows extends CommonOps {

    @Step("business flow : user login")
    public static void login(String user, String pass) {
        UIActions.UpdateText(OrangeLogin.txt_username,user);
        UIActions.UpdateText(OrangeLogin.txt_password,pass);
        UIActions.Click(OrangeLogin.btn_login);
    }

    @Step("business flow : login user from db")
    public static void loginDb() {
        List<String> ls = DbActions.getDBData("SELECT name,password FROM Employees Where id = 4");
        UIActions.UpdateText(OrangeLogin.txt_username,ls.get(0));
        UIActions.UpdateText(OrangeLogin.txt_password,ls.get(1));
        UIActions.Click(OrangeLogin.btn_login);
    }

  /*  @Step("adding new user to the system")
    public static void addNewUser(String username,String fullname) {
        OrangeAdminUsersManagement.btn_add.click();


    }*/

}
