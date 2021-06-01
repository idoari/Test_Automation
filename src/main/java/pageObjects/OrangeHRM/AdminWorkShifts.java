package pageObjects.OrangeHRM;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

public class AdminWorkShifts {

    @FindBy(how = How.NAME, using = "btnAdd")
    public WebElement btn_add;

    @FindBy(how = How.NAME, using = "btnAdd")
    public WebElement btn_Delete;

    @FindBy(how = How.XPATH, using = "//td[@class='left']/a")
    public List<WebElement> table;

    @FindBy(how = How.XPATH, using = "//input[@name = 'chkSelectRow[]']")
    public List<WebElement> table_checkboxes;

    @FindBy(how = How.ID, using = "workShift_name")
    public WebElement txt_WorkShiftName;

    @FindBy(how = How.NAME, using = "workShift[workHours][from]")
    public WebElement comb_from_hour;

    @FindBy(how = How.NAME, using = "workShift[workHours][to]")
    public WebElement comb_to_hour;

    @FindBy(how = How.NAME, using = "btnSave")
    public WebElement btn_save;

    @FindBy(how = How.NAME, using = "btnCancel")
    public WebElement btn_cancel;




}
