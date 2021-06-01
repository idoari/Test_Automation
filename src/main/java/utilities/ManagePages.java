package utilities;

import org.openqa.selenium.support.PageFactory;


public class ManagePages extends Base {

    public static void initOranageHRM() {
        OrangeLogin = PageFactory.initElements(driver,pageObjects.OrangeHRM.LoginPage.class);
        OrangeTopMenu = PageFactory.initElements(driver,pageObjects.OrangeHRM.TopMenuPage.class);
        OrangeMainPage = PageFactory.initElements(driver,pageObjects.OrangeHRM.MainPage.class);
        OrangeViewBuzz = PageFactory.initElements(driver,pageObjects.OrangeHRM.ViewBuzzPage.class);
        OrangeAdminUsersManagement = PageFactory.initElements(driver,pageObjects.OrangeHRM.AdminUsersManagement.class);
        OrangeAdminAddNewUser = PageFactory.initElements(driver,pageObjects.OrangeHRM.AdminAddNewUser.class);
        OrangeAdminJobCategory = PageFactory.initElements(driver,pageObjects.OrangeHRM.AdminJobCategory.class);
        OrangeAdminTopMenu = PageFactory.initElements(driver,pageObjects.OrangeHRM.AdminTopMenu.class);
        OrangeAdminPayGrades = PageFactory.initElements(driver,pageObjects.OrangeHRM.AdminPayGrades.class);
        OrangeAdminAddNewPayGrade = PageFactory.initElements(driver,pageObjects.OrangeHRM.AdminAddNewPayGrade.class);
        OrangeConfirmWindow = PageFactory.initElements(driver,pageObjects.OrangeHRM.ConfirmWindow.class);
        OrangeEditPayGrade = PageFactory.initElements(driver,pageObjects.OrangeHRM.EditPayGrade.class);
        OrangeAdminWorkShifts = PageFactory.initElements(driver,pageObjects.OrangeHRM.AdminWorkShifts.class);
        OrangeEditWorkShift = PageFactory.initElements(driver,pageObjects.OrangeHRM.EditWorkShift.class);
        OrangePimEmployeeList = PageFactory.initElements(driver,pageObjects.OrangeHRM.PimEmployeeList.class);
        OrangeEditEmployeeList = PageFactory.initElements(driver,pageObjects.OrangeHRM.EditEmployeeList.class);
    }

    public static void initWhatsApp() {
        whatsappmain = new pageObjects.WhatsApp.MainPage(mobileDriver) ;
        whatsappSelectContact = new pageObjects.WhatsApp.NewMessageSelectContact(mobileDriver) ;
        whatsappSendMessage = new pageObjects.WhatsApp.TypeAndSendMessage(mobileDriver) ;
    }

    public static void initTodo() {
        TodoMain = PageFactory.initElements(driver,pageObjects.ToDoList.MainPage.class);
    }

    public static void initCalculator() {
        CalcMain = PageFactory.initElements(driver,pageObjects.Calculator.MainPage.class);
    }


}
