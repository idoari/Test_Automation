package workflows;

import com.google.common.util.concurrent.Uninterruptibles;
import extensions.UIActions;
import io.qameta.allure.Step;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.ExpectedConditions;
import utilities.CommonOps;

import java.util.concurrent.TimeUnit;

public class ElectronFlows extends CommonOps {

    @Step("Add New Task To The List")
    public static void AddNewTask(String taskName) {
        UIActions.UpdateText(TodoMain.txt_create,taskName);
        UIActions.SendKeyPress(TodoMain.txt_create, Keys.RETURN);
    }

    @Step("Count and return number of todo list items")
    public static int CountTasks() {
        try { return TodoMain.list_tasks.size();}
        catch(NullPointerException e) {return  0;}

    }

    @Step("clear all items from list")
    public static void EmptyTaskList() {
        for (int i = 0; i < TodoMain.list_tasks.size(); i++) {
            UIActions.MouseHover(TodoMain.list_tasks.get(i));
            wait.until(ExpectedConditions.visibilityOf(TodoMain.x.get(i)));
            UIActions.Click((TodoMain.x.get(i)));
        }
    }
}
