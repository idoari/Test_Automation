package pageObjects.ToDoList;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

public class MainPage {
    @FindBy(how = How.CSS, using = "input[placeholder='Create a task']")
    public WebElement txt_create;

    @FindBy(how = How.CLASS_NAME, using = "view_2Ow90")
    public List<WebElement> list_tasks;

    @FindBy(how = How.CLASS_NAME, using = "destroy_19w1q")
    public List<WebElement> x;

    @FindBy(how = How.CLASS_NAME, using = "downArrowIcon_3Zu5N")
    public WebElement btn_color;

    @FindBy(how = How.XPATH, using = "//div[@class = 'wrapper_3Kpfj vertical_di1oV tagList_2NRe0']/span")
    public List<WebElement> color_menu;







}
