package pageObjects.WhatsApp;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class NewMessageSelectContact {

    private AndroidDriver<AndroidElement> mobileDriver;

    public NewMessageSelectContact(AndroidDriver<AndroidElement> mobileDriver) {
        this.mobileDriver = mobileDriver;
        PageFactory.initElements(new AppiumFieldDecorator(mobileDriver), this);
    }

    @AndroidFindBy(id="menuitem_search")
    public AndroidElement btn_search;

    @AndroidFindBy(id="search_src_text")
    public AndroidElement txt_search;

    @AndroidFindBy(id="contactpicker_row_name")
    public List<AndroidElement> contactList;

}
