package sanity;

import extensions.Verifications;
import io.qameta.allure.Description;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;
import utilities.CommonOps;
import workflows.ApiFlows;

@Listeners(utilities.Listeners.class)
public class GrafanaRestAPI extends CommonOps {

    public static String name = "Ido";
    public static String email = "ido@walla.com";

    @Test(description = "Test01 - Add a new team")
    @Description("This Test Adds and verifies A new team")
    public static void Test01_AddTeamAndVerify() {
        ApiFlows.postTeam(name,email);
        Verifications.VerifyText(ApiFlows.getTeamProperties("teams[0].name",name),name);
    }

    @Test(description = "Test02 - get Team's property")
    @Description("this test gets and verifies team's property")
    public static void Test02_VerfiyTeamProperty()  {
        Verifications.VerifyText(ApiFlows.getTeamProperties("teams[0].email",name),email);
    }

    @Test(description = "Test03 - Update and verify a Team")
    @Description("This Test Updates and verifies a Team")
    public static void Test03_UpdateTeamAndVerify() {
        name = "ido_new";
        email = "ido_new@walla.com";
        total = Integer.parseInt(ApiFlows.getTeamProperties("teams[0].id",name));
        ApiFlows.updateTeam(name,email,String.valueOf(total));
        Verifications.VerifyText(ApiFlows.getTeamProperties("teams[0].email",name),email);
    }

    @Test(description = "Test04 - delete a Team and verify")
    @Description("This Test deletes and verifies a team")
    public static void Test04_DeleteTeamAndVerify() {
        ApiFlows.DeleteTeam(String.valueOf(total));
    }


}
