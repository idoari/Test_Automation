package pageObjects.OrangeHRM;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

public class ViewBuzzPage {

    @FindBy(how = How.XPATH, using = "//div[@id='postEmployeeName']/label")
    public List<WebElement> user_list;



}
