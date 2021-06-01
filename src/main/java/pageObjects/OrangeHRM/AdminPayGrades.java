package pageObjects.OrangeHRM;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

public class AdminPayGrades {

    @FindBy(how = How.NAME, using = "btnAdd")
    public WebElement btn_add;

    @FindBy(how = How.NAME, using = "btnDelete")
    public WebElement btn_delete;

    @FindBy(how = How.XPATH, using = "//td[@class='left']/a")
    public List<WebElement> table_rows;

    @FindBy(how = How.XPATH, using = "//input[@name = 'chkSelectRow[]']")
    public List<WebElement> checkboxes;

}
