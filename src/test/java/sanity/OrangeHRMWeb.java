package sanity;

import extensions.UIActions;
import extensions.Verifications;
import io.qameta.allure.Description;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;
import utilities.CommonOps;
import workflows.WebFlows;


@Listeners(utilities.Listeners.class)
public class OrangeHRMWeb extends CommonOps {

    @Test(description="test01 - verify Header")
    @Description("this test login and verify the header")
    public void test01_verifyHeader() {
        WebFlows.login(getData("USERNAME"),getData("PASSWORD"));
        Verifications.verifyTextInElement(OrangeMainPage.mainTitle,"Dashboard");
    }

  @Test(description="test02 - verify require field in add new user page")
    @Description("this test verify the visibility of require field labales in dd new user page")
    public void test02_checkRequiredField_AddNewUser() {
        UIActions.Click(OrangeTopMenu.btn_admin);
        UIActions.Click(OrangeAdminUsersManagement.btn_add);
        UIActions.Click(OrangeAdminAddNewUser.btn_save);
        Verifications.visibilityOfElements(OrangeAdminAddNewUser.lbl_required);
    }

    @Test(description="test03 - add a new user")
    @Description("this test adds a new user")
    public void test03_AddNewUser()  {
        UIActions.Click(OrangeTopMenu.btn_admin);
        UIActions.Click(OrangeAdminUsersManagement.btn_add);
        UIActions.UpdateText(OrangeAdminAddNewUser.txt_empName,"Aaliyah Haq");
        UIActions.UpdateText(OrangeAdminAddNewUser.txt_uName,"idoari");
        UIActions.UpdateText(OrangeAdminAddNewUser.txt_password,"idoaricha");
        UIActions.UpdateText(OrangeAdminAddNewUser.txt_confirmPass,"idoaricha");
        UIActions.Click(OrangeAdminAddNewUser.btn_save);
    }

    @Test(description="test04 - verify new user addition")
    @Description("this test  verify a new user addition")
    public void test04_VerifyNewUserAdded() throws InterruptedException {
        UIActions.Click(OrangeTopMenu.btn_admin);
        wait.until(ExpectedConditions.visibilityOf(OrangeAdminUsersManagement.lbs_headline));
        Verifications.selectSpecificCheckbox(OrangeAdminUsersManagement.table_checkboxes,OrangeAdminUsersManagement.table_names,"idoari",1);
        UIActions.Click(OrangeAdminUsersManagement.btn_delete);
        Thread.sleep(500);
        UIActions.Click(OrangeConfirmWindow.btn_confirm_del);
    }

    @Test(description="test05 - add new category")
    @Description("this test add a new category")
    public void test05_addNewCategory() throws InterruptedException {
        UIActions.Click(OrangeTopMenu.btn_admin);
        UIActions.MouseHover(OrangeAdminTopMenu.lnk_admin,OrangeAdminTopMenu.lnk_jobCategory);
        UIActions.Click(OrangeAdminJobCategory.btn_add);
        UIActions.UpdateText(OrangeAdminJobCategory.txt_category,"ido");
        Thread.sleep(500);
        UIActions.Click(OrangeAdminJobCategory.btn_save);
    }

    @Test(description="test06 - Check And Print Duplicate Categories")
    @Description("this test check and print duplicate categories (it there is)")
    public void test06_CheckAndPrintDuplicateCateguries() {
        UIActions.Click(OrangeTopMenu.btn_admin);
        UIActions.MouseHover(OrangeAdminTopMenu.lnk_admin,OrangeAdminTopMenu.lnk_jobCategory);
        Verifications.checkDuplicateElements(OrangeAdminJobCategory.table_rows);
    }

    @Test(description="test07 - verify and delete added category")
    @Description("this test verify and delete added category")
    public void test07_verifyAmdDeleteAddedCategury() throws InterruptedException {
        UIActions.Click(OrangeTopMenu.btn_admin);
        UIActions.MouseHover(OrangeAdminTopMenu.lnk_admin,OrangeAdminTopMenu.lnk_jobCategory);
        Verifications.verifyTextInElements(OrangeAdminJobCategory.table_rows,"ido");
        Thread.sleep(500);
        Verifications.selectSpecificCheckbox(OrangeAdminJobCategory.checkboxes,OrangeAdminJobCategory.table_rows,"ido",1);
        UIActions.Click(OrangeAdminJobCategory.btn_delete);
        Thread.sleep(500);
        UIActions.Click(OrangeConfirmWindow.btn_confirm_del);
    }

    @Test(description="test08 - add new pay grade")
    @Description("this test adds a new pay grade")
    public void test08_addNewPayGrade() {
        UIActions.Click(OrangeTopMenu.btn_admin);
        UIActions.MouseHover(OrangeAdminTopMenu.lnk_admin,OrangeAdminTopMenu.lnk_payGrades);
        UIActions.Click(OrangeAdminPayGrades.btn_add);
        UIActions.UpdateText(OrangeAdminAddNewPayGrade.txt_payName,"Grade 6");
        UIActions.Click(OrangeAdminAddNewPayGrade.txt_save);
    }

    @Test(description="test09 - check and delete added pay grade")
    @Description("this test checks and deletes added pay grade")
    public void test09_CheckAmdDeleteAddedPayGrade() throws InterruptedException {
        UIActions.Click(OrangeTopMenu.btn_admin);
        UIActions.MouseHover(OrangeAdminTopMenu.lnk_admin,OrangeAdminTopMenu.lnk_payGrades);
        Verifications.verifyTextInElements(OrangeAdminPayGrades.table_rows,"Grade 6");
        Verifications.selectSpecificCheckbox(OrangeAdminPayGrades.checkboxes,OrangeAdminPayGrades.table_rows,"Grade 6",1);
        Thread.sleep(500);
        UIActions.Click(OrangeAdminPayGrades.btn_delete);
        Thread.sleep(500);
        UIActions.Click(OrangeConfirmWindow.btn_confirm_del);
    }

    @Test(description="test10 - check pay grades validity")
    @Description("this test checks pay grades validity")
    public void test10_checkPayGradesValidity() {
        UIActions.Click(OrangeTopMenu.btn_admin);
        UIActions.MouseHover(OrangeAdminTopMenu.lnk_admin,OrangeAdminTopMenu.lnk_payGrades);
        Verifications.CheckSalaries(OrangeAdminPayGrades.table_rows);
    }

    @Test(description="test11 - add and delete a work shift")
    @Description("this test adds and deletes a work shift")
    public void test11_AddAndDeleteWorkShift() throws InterruptedException {
        UIActions.Click(OrangeTopMenu.btn_admin);
        UIActions.MouseHover(OrangeAdminTopMenu.lnk_admin,OrangeAdminTopMenu.lnk_workShifts);
        UIActions.Click(OrangeAdminWorkShifts.btn_add);
        wait.until(ExpectedConditions.elementToBeClickable(OrangeAdminWorkShifts.btn_save));
        UIActions.UpdateText(OrangeAdminWorkShifts.txt_WorkShiftName,"Night Shift");
        UIActions.UpdateDropDown(OrangeAdminWorkShifts.comb_from_hour,"00:00");
        UIActions.UpdateDropDown(OrangeAdminWorkShifts.comb_to_hour,"08:00");
        UIActions.Click(OrangeAdminWorkShifts.btn_save);
        wait.until(ExpectedConditions.elementToBeClickable(OrangeAdminWorkShifts.btn_add));
        Verifications.verifyTextInElements(OrangeAdminWorkShifts.table,"Night Shift");
        Verifications.selectSpecificCheckbox(OrangeAdminWorkShifts.table_checkboxes,OrangeAdminWorkShifts.table,"Night Shift",1);
        Thread.sleep(1000);
        UIActions.Click(OrangeAdminWorkShifts.btn_Delete);
    }

    @Test(description="test12 - add new employee")
    @Description("this test adds a new employee")
    public void test12_AddNewEmployee() throws InterruptedException {
        UIActions.Click(OrangeTopMenu.btn_pim);
        Thread.sleep(500);
        UIActions.Click(OrangePimEmployeeList.btn_add);
        UIActions.UpdateText(OrangeEditEmployeeList.txt_firstName,"ido");
        UIActions.UpdateText(OrangeEditEmployeeList.txt_middleName,"");
        UIActions.UpdateText(OrangeEditEmployeeList.txt_lastName,"aricha");
        UIActions.UpdateText(OrangeEditEmployeeList.btn_photo,getData("imageRepository") + "1.jpg");
        UIActions.Click(OrangeEditEmployeeList.btn_Save);
    }

    @Test(description="test13 -  verify addition of new employee")
    @Description("this test verify addition of new employee")
    public void test13_verifyAddedEmployee() throws InterruptedException {
        UIActions.Click(OrangeTopMenu.btn_pim);
        UIActions.UpdateText(OrangePimEmployeeList.txt_name,"ido aricha");
        UIActions.Click(OrangePimEmployeeList.btn_search);
        Thread.sleep(1000);
        Verifications.selectSpecificCheckbox(OrangePimEmployeeList.table_checkboxes,OrangePimEmployeeList.table,"ido aricha",2);
        UIActions.Click(OrangePimEmployeeList.btn_delete);
        Thread.sleep(500);
        UIActions.Click(OrangeConfirmWindow.btn_confirm_del);
    }


}
