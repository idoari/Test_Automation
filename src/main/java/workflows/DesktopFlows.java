package workflows;
import extensions.UIActions;
import io.qameta.allure.Step;
import utilities.CommonOps;

public class DesktopFlows extends CommonOps {

    @Step("simulate num click")
    public static void numClick(String num) {
        for (int i=0 ; i < num.length(); i++) {
            switch (num.charAt(i)) {
                case '0':
                    UIActions.Click(CalcMain.btn_0);
                    break;
                case '1':
                    UIActions.Click(CalcMain.btn_1);
                    break;
                case '2':
                    UIActions.Click(CalcMain.btn_2);
                    break;
                case '3':
                    UIActions.Click(CalcMain.btn_3);
                    break;
                case '4':
                    UIActions.Click(CalcMain.btn_4);
                    break;
                case '5':
                    UIActions.Click(CalcMain.btn_5);
                    break;
                case '6':
                    UIActions.Click(CalcMain.btn_6);
                    break;
                case '7':
                    UIActions.Click(CalcMain.btn_7);
                    break;
                case '8':
                    UIActions.Click(CalcMain.btn_8);
                    break;
                case '9':
                    UIActions.Click(CalcMain.btn_9);
                    break;
                default:
                    System.out.println("incorrect input");
                    break;
            }
        }
    }

    @Step("calculate Addition")
    public static String addition(String num1 , String num2) {
        UIActions.Click(CalcMain.btn_clear);
        numClick(num1);
        UIActions.Click(CalcMain.btn_plus);
        numClick(num2);
        UIActions.Click(CalcMain.btn_equals);
        return CalcMain.txt_results.getText();
    }

    @Step("calculate subtract")
    public static String subtract(String num1 , String num2) {
        UIActions.Click(CalcMain.btn_clear);
        numClick(num1);
        UIActions.Click(CalcMain.btn_minus);
        numClick(num2);
        UIActions.Click(CalcMain.btn_equals);
        return CalcMain.txt_results.getText();
    }

    @Step("calculate addition")
    public static String multiply(String num1 , String num2) {
        UIActions.Click(CalcMain.btn_clear);
        numClick(num1);
        UIActions.Click(CalcMain.btn_multiply);
        numClick(num2);
        UIActions.Click(CalcMain.btn_equals);
        return CalcMain.txt_results.getText();
    }

    @Step("calculate addition")
    public static String divide(String num1 , String num2) {
        UIActions.Click(CalcMain.btn_clear);
        numClick(num1);
        UIActions.Click(CalcMain.btn_divide);
        numClick(num2);
        UIActions.Click(CalcMain.btn_equals);
        return CalcMain.txt_results.getText();
    }

}
