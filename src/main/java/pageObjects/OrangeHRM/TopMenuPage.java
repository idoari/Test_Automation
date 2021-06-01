package pageObjects.OrangeHRM;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class TopMenuPage {

    @FindBy(how = How.XPATH, using = "//li[@class='main-menu-first-level-list-item'][1]")
    public WebElement btn_admin;

    @FindBy(how = How.XPATH, using = "//li[@class='main-menu-first-level-list-item'][2]")
    public WebElement btn_pim;

    @FindBy(how = How.XPATH, using = "//li[@class='main-menu-first-level-list-item'][3]")
    public WebElement btn_leave;

    @FindBy(how = How.XPATH, using = "//li[@class='main-menu-first-level-list-item'][4]")
    public WebElement btn_time;

    @FindBy(how = How.XPATH, using = "//li[@class='main-menu-first-level-list-item'][5]")
    public WebElement btn_recruitment;

    @FindBy(how = How.XPATH, using = "//li[@class='main-menu-first-level-list-item'][6]")
    public WebElement btn_MyInfo;

    @FindBy(how = How.XPATH, using = "//li[@class='main-menu-first-level-list-item'][7]")
    public WebElement btn_performance;

    @FindBy(how = How.XPATH, using = "//li[@class='main-menu-first-level-list-item'][8]")
    public WebElement btn_directory;

    @FindBy(how = How.XPATH, using = "//li[@class='main-menu-first-level-list-item'][9]")
    public WebElement btn_maintenance;

    @FindBy(how = How.XPATH, using = "//li[@class='main-menu-first-level-list-item'][10]")
    public WebElement btn_buzz;




}
