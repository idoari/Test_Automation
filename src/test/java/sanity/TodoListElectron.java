package sanity;


import extensions.Verifications;
import io.qameta.allure.Description;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;
import utilities.CommonOps;
import workflows.ElectronFlows;

@Listeners(utilities.Listeners.class)
public class TodoListElectron extends CommonOps {

    @Test(description="test01 - Add and verify new task")
    @Description("this test Adds and Verifies new task with color code")
    public void test01_AddAndVerifyNewTask() throws InterruptedException {
        int Listsize = ElectronFlows.CountTasks();
        ElectronFlows.AddNewTask("Learn Java",1);
        Verifications.VerifyNumber(ElectronFlows.CountTasks(),Listsize+1);
        Thread.sleep(3000);
    }


    @Test(description="test02 -Add and verify two tasks")
    @Description("this test Adds and Verifies two tasks with color codes")
    public void test02_test01_AddAndVerifyTwoTask() throws InterruptedException {
        int Listsize = ElectronFlows.CountTasks();
        ElectronFlows.AddNewTask("Learn VB",2);
        ElectronFlows.AddNewTask("Learn pascal",3);
        Verifications.VerifyNumber(ElectronFlows.CountTasks(),Listsize+2);
    }

}
