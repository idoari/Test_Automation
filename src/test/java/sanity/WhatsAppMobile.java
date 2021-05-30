package sanity;

import io.qameta.allure.Description;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;
import utilities.*;
import utilities.CommonOps;
import workflows.*;

@Listeners(utilities.Listeners.class)
public class WhatsAppMobile  extends CommonOps{

    @Test(description = "test01 - add a new candidate")
    @Description("this test adds a new candidate to CSV file")
    public void test01_addNewCandidate() {
        ManageDDT.WriteToCSV("Worker", "Automation Engineer");
    }

    @Test(description = "test02 - send a message by stage")
    @Description("this test sends and verifies candidate's message by stage")
    public void test02_SendMessages()  {
        MobileFlows.SendMessages();
    }

    @Test(description="test03 - promote a candidate to next stage")
    @Description("this test promotes the candidate to the next stage in the interviewing process")
    public void test03_AdvanceStageCandidate()  {
        MobileFlows.ChangeCandidateStage("1",false);
        MobileFlows.SendMessages();
    }

    @Test(description = "test04 - send message to a drop candidate")
    @Description("this test sends a message to candidate that wasn't found suitable for the position")
    public void test04_CandidateDrop() {
        MobileFlows.ChangeCandidateStage("1",true);
        MobileFlows.SendMessages();
    }

}