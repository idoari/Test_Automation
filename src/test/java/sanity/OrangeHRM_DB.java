package sanity;

import extensions.Verifications;
import io.qameta.allure.Description;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;
import utilities.CommonOps;
import workflows.WebFlows;

@Listeners(utilities.Listeners.class)
public class OrangeHRM_DB extends CommonOps {

    @Test(description="test01 login from db")
    @Description("this test login from db and verify the header")
    public void test01_loginDB() {
        WebFlows.loginDb();
        Verifications.verifyTextInElement(OrangeMainPage.mainTitle,"Dashboard");
    }

}
