package workflows;

import extensions.UIActions;
import io.qameta.allure.Step;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.ExpectedConditions;
import utilities.CommonOps;

public class ElectronFlows extends CommonOps {

    @Step("Business flow : Add New Task To The List")
    public static void AddNewTask(String taskName,int colorIndex)  {
        UIActions.Click(TodoMain.txt_create); //in order to select color the textbox needs to be in focus
        UIActions.UpdateText(TodoMain.txt_create,taskName);
        UIActions.Click(TodoMain.btn_color);
        UIActions.Click(TodoMain.color_menu.get(colorIndex));
        UIActions.SendKeyPress(TodoMain.txt_create, Keys.RETURN);
    }

    @Step("Business flow : Count and return number of todo list items")
    public static int CountTasks() {
        try { return TodoMain.list_tasks.size();}
        catch(NullPointerException e) {return  0;}

    }

    @Step("Business flow : clear all items from list")
    public static void EmptyTaskList() {
        for (int i = 0; i < TodoMain.list_tasks.size(); i++) {
            UIActions.MouseHover(TodoMain.list_tasks.get(i));
            wait.until(ExpectedConditions.visibilityOf(TodoMain.x.get(i)));
            UIActions.Click((TodoMain.x.get(i)));
        }
    }
}
