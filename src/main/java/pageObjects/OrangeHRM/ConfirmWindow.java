package pageObjects.OrangeHRM;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ConfirmWindow {

    @FindBy(how = How.ID, using = "dialogDeleteBtn")
    public WebElement btn_confirm_del;
}
