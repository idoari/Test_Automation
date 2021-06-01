package pageObjects.OrangeHRM;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import java.util.List;

public class AdminJobCategory {

    @FindBy(how = How.XPATH, using = "//td[@class='left']")
    public List<WebElement> table_rows;

    @FindBy(how = How.NAME, using = "btnAdd")
    public WebElement btn_add;

    @FindBy(how = How.NAME, using = "btnDelete")
    public WebElement btn_delete;

    @FindBy(how = How.CLASS_NAME, using = "formInput")
    public WebElement txt_category;

    @FindBy(how = How.CLASS_NAME, using = "addbutton")
    public WebElement btn_save;

    @FindBy(how = How.XPATH, using = "//input[@name = 'chkSelectRow[]']")
    public List<WebElement> checkboxes;


}
