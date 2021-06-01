package pageObjects.OrangeHRM;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

public class AdminAddNewUser {

    @FindBy(how = How.ID, using = "systemUser_userType")
    public WebElement Drpbx_role;

    @FindBy(how = How.ID, using = "systemUser_employeeName_empName")
    public WebElement txt_empName;

    @FindBy(how = How.NAME, using = "systemUser[userName]")
    public WebElement txt_uName;

    @FindBy(how = How.NAME, using = "systemUser[status]")
    public WebElement Drpbx_enabled;

    @FindBy(how = How.NAME, using = "systemUser[password]")
    public WebElement txt_password;

    @FindBy(how = How.NAME, using = "systemUser[confirmPassword]")
    public WebElement txt_confirmPass;

    @FindBy(how = How.NAME, using = "btnSave")
    public WebElement btn_save;

    @FindBy(how = How.XPATH, using = "//span[@class='validation-error' and @generated='true']")
    public List<WebElement> lbl_required;



}
