package pageObjects.OrangeHRM;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

public class AdminUsersManagement {

    @FindBy(how = How.NAME, using = "btnAdd")
    public WebElement btn_add;

    @FindBy(how = How.NAME, using = "btnDelete")
    public WebElement btn_delete;

    @FindBy(how = How.ID, using = "resetBtn")
    public WebElement btn_reset;

    @FindBy(how = How.ID, using = "searchBtn")
    public WebElement btn_search;

    @FindBy(how = How.ID, using = "searchSystemUser_userName")
    public WebElement txt_username;

    @FindBy(how = How.XPATH, using = "//tr[@class='odd' or @class='even']/td/a")
    public List<WebElement> table_names;

    @FindBy(how = How.XPATH, using = "//input[@name = 'chkSelectRow[]']")
    public List<WebElement> table_checkboxes;

    @FindBy(how = How.XPATH, using = "//div[@class='head']")
    public WebElement lbs_headline;





}
