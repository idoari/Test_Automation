package extensions;

import com.google.common.util.concurrent.Uninterruptibles;
import io.qameta.allure.Step;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import utilities.CommonOps;
import java.util.concurrent.TimeUnit;

public class UIActions extends CommonOps {

    @Step("click on element")
    public static void Click(WebElement elem) {
        wait.until(ExpectedConditions.elementToBeClickable(elem));
        elem.click();
    }

    @Step("send text to element")
    public static void UpdateText(WebElement elem , String text) {
        wait.until(ExpectedConditions.visibilityOf(elem));
        elem.sendKeys(text);
    }

    @Step("send keyboard key press")
    public static void SendKeyPress(WebElement elem , Keys value) {
        elem.sendKeys(value);
    }

    @Step("select from dropdown")
    public static void UpdateDropDown(WebElement elem , String text) {
        wait.until(ExpectedConditions.visibilityOf(elem));
        Select dropdown = new Select(elem);
        dropdown.selectByVisibleText(text);
    }

    @Step("mouse hover over element")
    public static void MouseHover(WebElement elem1,WebElement elem2) {
        action.moveToElement(elem1).moveToElement(elem2).click().build().perform();
    }

    @Step("mouse hover over element")
    public static void MouseHover(WebElement elem1) {
        action.moveToElement(elem1).click().build().perform();
    }

    @Step("send text to element as human")
    public static void UpdateTextHuman(WebElement elem , String text) {
        wait.until(ExpectedConditions.visibilityOf(elem));
        for (char ch : text.toCharArray()) {
            Uninterruptibles.sleepUninterruptibly(500, TimeUnit.MILLISECONDS);
            elem.sendKeys(ch + "");
        }
    }


}
