package utilities;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.json.simple.JSONObject;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.sikuli.script.Screen;
import org.testng.asserts.SoftAssert;
import pageObjects.OrangeHRM.*;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class Base {

    //general
    protected static WebDriverWait wait;
    protected static Actions action ;
    protected static SoftAssert softAssert ;
    protected static Screen screen;
    protected static String platform ;

    protected static String[][] candidate_list; //mobile - employees list

    //web
    protected static WebDriver driver; //used by electron,winappdriver as well (electron is a web base app)

    //mobile
    protected static AndroidDriver<AndroidElement> mobileDriver;
    protected static DesiredCapabilities dc = new DesiredCapabilities();

    //Rest API

    protected static RequestSpecification httpRequest;
    protected static Response response;
    protected static JSONObject params = new JSONObject();
    protected static JsonPath jp;
    protected static int total = 24;

    //Database
    protected static Connection con;
    protected static Statement stat;
    protected static ResultSet rs;



    //page objects - web
    protected static LoginPage OrangeLogin;
    protected static pageObjects.OrangeHRM.MainPage OrangeMainPage;
    protected static TopMenuPage OrangeTopMenu;
    protected static ViewBuzzPage OrangeViewBuzz;
    protected static AdminUsersManagement OrangeAdminUsersManagement;
    protected static AdminAddNewUser OrangeAdminAddNewUser;
    protected static AdminJobCategory OrangeAdminJobCategory;
    protected static AdminTopMenu OrangeAdminTopMenu;
    protected static AdminPayGrades OrangeAdminPayGrades;
    protected static AdminAddNewPayGrade OrangeAdminAddNewPayGrade;
    protected static ConfirmWindow OrangeConfirmWindow;
    protected static EditPayGrade OrangeEditPayGrade;
    protected static AdminWorkShifts OrangeAdminWorkShifts;
    protected static EditWorkShift OrangeEditWorkShift;
    protected static PimEmployeeList OrangePimEmployeeList;
    protected static EditEmployeeList OrangeEditEmployeeList;

    //page objects - mobile
    protected static pageObjects.WhatsApp.MainPage whatsappmain;
    protected static pageObjects.WhatsApp.NewMessageSelectContact whatsappSelectContact;
    protected static pageObjects.WhatsApp.TypeAndSendMessage whatsappSendMessage;

    //pageobjects - electron APP
    protected static pageObjects.ToDoList.MainPage TodoMain;

    //pageObjects - WinAppriver
    protected static pageObjects.Calculator.MainPage CalcMain;





}
