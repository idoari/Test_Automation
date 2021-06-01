package pageObjects.WhatsApp;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;

import java.util.concurrent.TimeUnit;

public class TypeAndSendMessage {

    private AndroidDriver<AndroidElement> mobileDriver;

    public TypeAndSendMessage(AndroidDriver<AndroidElement> mobileDriver) {
        this.mobileDriver = mobileDriver;
        PageFactory.initElements(new AppiumFieldDecorator(mobileDriver), this);
    }

    @AndroidFindBy(id = "entry")
    public AndroidElement txt_message;

    @AndroidFindBy(id = "send")
    public AndroidElement btn_send;

    @AndroidFindBy(id = "whatsapp_toolbar_home")
    public AndroidElement btn_home;





}
