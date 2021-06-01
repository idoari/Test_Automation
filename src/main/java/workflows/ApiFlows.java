package workflows;

import extensions.ApiActions;
import io.qameta.allure.Step;
import utilities.CommonOps;

public class ApiFlows extends CommonOps {

    @Step ("Business flow : return specific property from Json File")
    public static String getUserProperties (String jpath,String userNum) {
        System.out.println(getData("API_GET") + "/" + userNum);
        response = ApiActions.get(getData("API_GET") + "/" + userNum);
        return  ApiActions.extractFromJSON(response,jpath);
    }

    @Step ("Business flow : create new team")
    public static void postUser (String name,String salary,String age) {
        params.put("employee_name",name);
        params.put("employee_salary",salary);
        params.put("employee_age",age);
        ApiActions.post(params,getData("API_POST"));
    }

    @Step ("Business flow : update existing team")
    public static void updateUser (String name,String salary,String age,String id) {
        params.put("employee_name",name);
        params.put("employee_salary",salary);
        params.put("employee_age",age);
        ApiActions.put(params,getData("API_PUT") + id);
    }

    @Step ("Business flow : delete existing tean")
    public static void DeleteUser (String id) {
        ApiActions.delete(getData("API_DELETE"),id);
    }


}
