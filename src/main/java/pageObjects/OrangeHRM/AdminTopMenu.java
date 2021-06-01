package pageObjects.OrangeHRM;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AdminTopMenu {


    @FindBy(how = How.ID, using = "menu_admin_Job")
    public WebElement lnk_admin;

    @FindBy(how = How.ID, using = "menu_admin_jobCategory")
    public WebElement lnk_jobCategory;

    @FindBy(how = How.ID, using = "menu_admin_viewPayGrades")
    public WebElement lnk_payGrades;

    @FindBy(how = How.ID, using = "menu_admin_workShift")
    public WebElement lnk_workShifts;

}
