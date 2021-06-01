package pageObjects.Calculator;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class MainPage {

    @FindBy(how = How.NAME, using = "One")
    public WebElement btn_1;

    @FindBy(how = How.NAME, using = "Two")
    public WebElement btn_2;

    @FindBy(how = How.NAME, using = "Three")
    public WebElement btn_3;

    @FindBy(how = How.NAME, using = "Four")
    public WebElement btn_4;

    @FindBy(how = How.NAME, using = "Five")
    public WebElement btn_5;

    @FindBy(how = How.NAME, using = "Six")
    public WebElement btn_6;

    @FindBy(how = How.NAME, using = "Seven")
    public WebElement btn_7;

    @FindBy(how = How.NAME, using = "Eight")
    public WebElement btn_8;

    @FindBy(how = How.NAME, using = "Nine")
    public WebElement btn_9;

    @FindBy(how = How.NAME, using = "Zero")
    public WebElement btn_0;

    @FindBy(how = How.XPATH, using = "//*[@AutomationId='clearEntryButton']")
    public WebElement btn_clear;

    @FindBy(how = How.NAME, using = "Plus")
    public WebElement btn_plus;

    @FindBy(how = How.NAME, using = "Minus")
    public WebElement btn_minus;

    @FindBy(how = How.XPATH, using = "//*[@AutomationId='multiplyButton']")
    public WebElement btn_multiply;

    @FindBy(how = How.XPATH, using = "//*[@AutomationId='divideButton']")
    public WebElement btn_divide;

    @FindBy(how = How.NAME, using = "Equals")
    public WebElement btn_equals;

    @FindBy(how = How.XPATH, using = "//*[@AutomationId='CalculatorResults']")
    public WebElement txt_results;


}
