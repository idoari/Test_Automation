package pageObjects.OrangeHRM;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class EditPayGrade {

    @FindBy(how = How.XPATH, using = "//tr[@class='odd']/td[2]")
    public WebElement lbl_currency_Name;

    @FindBy(how = How.XPATH, using = "//tr[@class='odd']/td[3]")
    public WebElement lbl_min_sallery;

    @FindBy(how = How.XPATH, using = "//tr[@class='odd']/td[4]")
    public WebElement lbl_max_sallery;

    @FindBy(how = How.ID, using = "payGrade_name")
    public WebElement txt_payGrade_name;

    @FindBy(how = How.NAME, using = "btnCancel")
    public WebElement btn_cancel;



}
