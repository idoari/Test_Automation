package workflows;

import com.google.common.util.concurrent.Uninterruptibles;
import io.qameta.allure.Step;
import org.sikuli.script.Pattern;
import utilities.*;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class MobileFlows extends CommonOps {

    @Step("return candidates messages")
    public static List<String> returnCandidateMessages(){ // return user id and message
        candidate_list = ManageDDT.getDataFromCSV(getData("DDTFile")); //refresh the users array
        List<String> messageList = new ArrayList<String>();
        String message = ""; //variable save the message temporarily
        for (int i = 0 ; i < candidate_list.length; i++) {
            if (candidate_list[i][4].equals("no")) { //if a message wasn't sent
                message =  getData("WhatsAPP_message_" + candidate_list[i][2]); //add stage to the message
                message = message.replaceAll(" X", " " + candidate_list[i][1].split("\\s+")[0]);
                message= message.replaceAll(" Y"," " + candidate_list[i][3]);
                messageList.add(i + "@" + message); //add the index of the user (to update the state later) and the message
            }
        }
        return messageList;
    }

    @Step("Changing candidate stage")
    public static void ChangeCandidateStage(String candidate_ID,boolean drop) {
        candidate_list = ManageDDT.getDataFromCSV(getData("DDTFile")); //refresh the users array
        for (int i = 0 ; i < candidate_list.length; i++) {
            if (candidate_ID.equals(candidate_list[i][0])) { //if the id equal to the id in the file
                if (!candidate_list[i][2].equals("5")) { //check that the stage is less than 5
                    if (drop == true)
                        candidate_list[i][2] = "0"; // if decided to drop Candidate
                    else
                        candidate_list[i][2] = Integer.toString(Integer.parseInt(candidate_list[i][2]) + 1);

                    candidate_list[i][4] = "no";
                }
            }
        }
        ManageDDT.UpdateCSV(); //re-write the CSV form the array
    }

    @Step("Sending messages to candidates")
    public static void SendMessages() {
        List<String> messageList =  returnCandidateMessages(); //find all Candidates that needs to get a message

        for (int i = 0 ; i < messageList.size();i++) {
            whatsappmain.btn_newMessage.click();
            whatsappSelectContact.btn_search.click();
            //add candidate name to search field
            whatsappSelectContact.txt_search.sendKeys(candidate_list[Integer.parseInt(messageList.get(i).split("@")[0])][1]);
            //check that the candidate name NOT exist in the contact list of the mobile phone
            if (!whatsappSelectContact.contactList.get(0).getText().equals(candidate_list[Integer.parseInt(messageList.get(i).split("@")[0])][1])) {
                System.out.println("contact name"+  candidate_list[Integer.parseInt(messageList.get(i).split("@")[0])][1] + " not found.");
                continue;
            }
            whatsappSelectContact.contactList.get(0).click();
            whatsappSendMessage.txt_message.sendKeys(messageList.get(i).split("@")[1]);
            whatsappSendMessage.btn_send.click();
            Uninterruptibles.sleepUninterruptibly(3000,TimeUnit.MILLISECONDS);
            try {
                Pattern patern = new Pattern(System.getProperty("user.dir") + getData("Recieved_img")).similar(0.1); //blueV
                Pattern patern2 = new Pattern(System.getProperty("user.dir") + getData("Recieved_img2")).similar(0.1); //GreyV
                if ((screen.exists(patern, 5) != null) || (screen.exists(patern2, 5) != null)) {
                    //if two V exist , update the CSV file that the message was read
                    candidate_list[Integer.parseInt(messageList.get(i).split("@")[0])][4] = "yes"; //update the message status
                    ManageDDT.UpdateCSV(); //re-write the CSV form the array
                }
            }
            catch (Exception e) {
                System.out.println("An error occurred. see details :"+ e);
            }
            whatsappSendMessage.btn_home.click();

        }


    }
}

