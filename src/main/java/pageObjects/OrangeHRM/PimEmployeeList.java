package pageObjects.OrangeHRM;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

public class PimEmployeeList {
    @FindBy(how= How.NAME, using="btnAdd")
    public WebElement btn_add;

    @FindBy(how= How.NAME, using="btnDelete")
    public WebElement btn_delete;

    @FindBy(how= How.NAME, using="empsearch[employee_name][empName]")
    public WebElement txt_name;

    @FindBy(how= How.ID, using="searchBtn")
    public WebElement btn_search;

    @FindBy(how= How.XPATH, using="//tr[@class='odd' or @class='even']/td[1]")
    public List<WebElement> table_checkboxes;

    @FindBy(how= How.XPATH, using="//tr[@class='odd' or @class='even']")
    public List<WebElement> table;





}
