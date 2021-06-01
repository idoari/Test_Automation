package pageObjects.OrangeHRM;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class EditEmployeeList {

    @FindBy(how = How.ID, using = "btnSave")
    public WebElement btn_Save;

    @FindBy(how = How.ID, using = "firstName")
    public WebElement txt_firstName;

    @FindBy(how = How.ID, using = "middleName")
    public WebElement txt_middleName;

    @FindBy(how = How.ID, using = "lastName")
    public WebElement txt_lastName;

    @FindBy(how = How.ID, using = "photofile")
    public WebElement btn_photo;

    @FindBy(how = How.ID, using = "chkLogin")
    public WebElement btn_chkLogin;


}
