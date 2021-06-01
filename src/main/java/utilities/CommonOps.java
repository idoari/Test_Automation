package utilities;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.remote.MobileCapabilityType;
import io.appium.java_client.windows.WindowsDriver;
import io.github.bonigarcia.wdm.WebDriverManager;
import io.restassured.RestAssured;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.sikuli.script.Screen;
import org.testng.annotations.*;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.asserts.SoftAssert;
import org.w3c.dom.Document;
import workflows.ElectronFlows;
import java.lang.reflect.Method;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;



import static utilities.ManagePages.initCalculator;

public class CommonOps extends Base {



    public static String getData (String nodeName) //read from xml config file
    {
        DocumentBuilder dBuilder;
        Document doc = null;
        File fXmlFile = new File("./Configuration/DataConfig.xml");
        DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
        try {
            dBuilder = dbFactory.newDocumentBuilder();
            doc = dBuilder.parse(fXmlFile);
        }
        catch(Exception e) {
            System.out.println("Exception in reading XML file: " + e);
        }
        doc.getDocumentElement().normalize();
        return doc.getElementsByTagName(nodeName).item(0).getTextContent();
    }

    @BeforeClass
    @Parameters({"PlatformName"})
    public void startSession(String PlatformName)  {
        platform=PlatformName;
        if (platform.equalsIgnoreCase("web"))
            initBrowser(getData("BrowserName"));
        else if (platform.equalsIgnoreCase("mobile"))
            initMobile();
        else if (platform.equalsIgnoreCase("api"))
            initAPI();
        else if (platform.equalsIgnoreCase("electron"))
            initElectron();
        else if (platform.equalsIgnoreCase("desktop"))
            initDesktop();
        else
            throw new RuntimeException("invalid platform name.");
        //may use db in any platform -so initialize to all
        ManageDB.StartConnection(getData("db_URL"),getData("db_User"),getData("db_Pass"));
        softAssert = new SoftAssert();
        screen = new Screen();
    }

    public static void initDesktop() {
        dc.setCapability("app",getData("calc_app"));
        try {
            driver = new WindowsDriver(new URL(getData("AppiumServerDesktop")),dc);
        } catch (MalformedURLException e) {
            System.out.println("cannot connect to appium server. see details : " + e);
        }
        wait = new WebDriverWait(driver,Long.parseLong(getData("TimeOut")));
        action = new Actions(driver);
        initCalculator();
    }

    public static void initElectron() {
        System.setProperty("webdriver.chrome.driver", getData("ElectronDriverPath"));
         driver = new ChromeDriver();
/*
        ChromeOptions opt = new ChromeOptions();
        ChromeDriverService service = new ChromeDriverService.Builder().usingDriverExecutable(new File("./chromedriver.exe")).usingAnyFreePort().build();
        dc.setCapability("chromeOptions",opt);
        dc.setBrowserName("chrome");
        opt.setBinary(getData("ElectronAppPath"));
        opt.merge(dc);
        ChromeDriver driver = new ChromeDriver(service, opt);
        driver.manage().timeouts().implicitlyWait(Long.parseLong(getData("TimeOut")), TimeUnit.SECONDS);
        wait = new WebDriverWait(driver,Long.parseLong(getData("TimeOut")));
        action = new Actions(driver);

 */
        //ManagePages.initTodo();
    }

    private static void initAPI() {
        RestAssured.baseURI = getData("API_BASE");
        httpRequest = RestAssured.given().auth().preemptive().basic("username","password");
    }

    public static void initMobile() {

        dc.setCapability(MobileCapabilityType.UDID, getData("UDID"));
        dc.setCapability(AndroidMobileCapabilityType.APP_PACKAGE, getData("WhatsAPP_APPPackage"));
        dc.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY, getData("WhatsAPP_MS_APPActivity"));
        try {
            mobileDriver = new AndroidDriver<>(new URL(getData("AppiumServer")), dc);
        }
        catch (MalformedURLException e) {
            System.out.println("cannot connect to appium server, see details : " + e);
        }
        mobileDriver.manage().timeouts().implicitlyWait(Long.parseLong(getData("TimeOut")), TimeUnit.SECONDS);
        wait = new WebDriverWait(mobileDriver,Long.parseLong(getData("TimeOut")));


        candidate_list = ManageDDT.getDataFromCSV(getData("DDTFile")); //read all users list
        ManagePages.initWhatsApp();

    }

    public static void initBrowser (String browserType) {
        if (browserType.equalsIgnoreCase("chrome"))
            driver = initChromeDriver() ;
        else if (browserType.equalsIgnoreCase("firefox"))
            driver = initFirefoxDriver() ;
        else if (browserType.equalsIgnoreCase("ie"))
            driver = initIEDriver() ;
        else
            throw new RuntimeException("invalid browser type");

        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Long.parseLong(getData("TimeOut")), TimeUnit.SECONDS);
        wait = new WebDriverWait(driver,Long.parseLong(getData("TimeOut")));
        driver.get(getData("URL"));
        ManagePages.initOranageHRM(); //initialize the page objected with pagefactory
        action = new Actions(driver);

    }

    public static WebDriver initChromeDriver() {
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        return driver;
    }

    public static WebDriver initFirefoxDriver() {
        WebDriverManager.firefoxdriver().setup();
        WebDriver driver = new FirefoxDriver();
        return driver;
    }

    public static WebDriver initIEDriver() {
        WebDriverManager.iedriver().setup();
        WebDriver driver = new InternetExplorerDriver();
        return driver;
    }

    @AfterClass
    public void closeSession () {
        if (!platform.equalsIgnoreCase("api")) {
            if (!platform.equalsIgnoreCase("mobile"))
                driver.quit();
            else
                mobileDriver.quit();
        }
        ManageDB.CloseConnection();
    }

   @BeforeMethod
    public void beforeMethod(Method method) {
        if (!platform.equalsIgnoreCase("api")) {
            try {
                monteScreenRecorder.startRecord(method.getName());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
   }

    @AfterMethod
    public void afterMethod() { //return to main screen after every test
        if (platform.equalsIgnoreCase("web")) {
            driver.get(getData("URL"));
        }
        else if (platform.equalsIgnoreCase("electron")) {
            ElectronFlows.EmptyTaskList();
        }
    }

}
