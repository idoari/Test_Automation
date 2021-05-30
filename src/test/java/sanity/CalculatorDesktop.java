package sanity;

import extensions.Verifications;
import io.qameta.allure.Description;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;
import utilities.CommonOps;
import workflows.DesktopFlows;

@Listeners(utilities.Listeners.class)
public class CalculatorDesktop extends CommonOps {

    @Test(description="test01 - add numbers")
    @Description("this test adds and verifies two numbers")
    public static void test01_add() {

        Verifications.VerifyText(DesktopFlows.addition("1","2"),"Display is 3");
    }

    @Test(description="test01 - add numbers")
    @Description("this test subtracts and verifies two numbers")
    public static void test02_subtract() {
       Verifications.VerifyText(DesktopFlows.subtract("400","200"),"Display is 200");
    }

    @Test(description="test01 - add numbers")
    @Description("this test multiplies and verifies two numbers")
    public static void test03_multiply() {
        Verifications.VerifyText(DesktopFlows.multiply("6","6"),"Display is 36");
    }

    @Test(description="test04 - divide numbers")
    @Description("this test divides and verifies two numbers")
    public static void test04_divide() {
        Verifications.VerifyText(DesktopFlows.divide("48","8"),"Display is 6");
    }


}
