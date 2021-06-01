package pageObjects.OrangeHRM;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AdminAddNewPayGrade {

    @FindBy(how = How.ID, using = "payGrade_name")
    public WebElement txt_payName;

    @FindBy(how = How.NAME, using = "btnSave")
    public WebElement txt_save;



}
