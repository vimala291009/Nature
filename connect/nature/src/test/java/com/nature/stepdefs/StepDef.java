package com.nature.stepdefs;

import com.nature.pageobjects.ChangePasswordPage;
import com.nature.pageobjects.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

public class StepDef {

    LoginPage login = new LoginPage();
    ChangePasswordPage pwd = new ChangePasswordPage();

    @Given("^I am an existing user of nature$")
    public void i_am_an_existing_user_of_nature() throws Throwable {
        login.opennature();
        login.submitlogindetails();
    }

    @Given("^I am on change password page$")
    public void i_am_on_change_password_page() throws Throwable {
        pwd.clickchangepassword();
    }

    @When("^I change the password as (.*)$")
    public void i_change_the_password_as_previouspass(String pass) throws Throwable {
        pwd.enternewpassword(pass);
    }

    @When("^I click on submit button$")
    public void i_click_on_submit_button() throws Throwable {
        pwd.submitnewpassword();
    }

    @Then("^I (.*) see a warning message$")
    public void i_should_see_a_warning_message(String behaviour) throws Throwable {
        if (behaviour.equals("should")) {
            assertFalse("No warning message", pwd.verifywarningmsg(behaviour));
        }
        else{
            assertTrue("Warning message displayed ", pwd.verifywarningmsg(behaviour));
        }
    }

    @Given("^I am a new user  of nature$")
    public void i_am_a_new_user_of_nature() throws Throwable {

    }

    @When("^registering with nature\\.com sites$")
    public void registering_with_nature_com_sites() throws Throwable {

    }

    @Then("^I should see list of security questions to choose and answer$")
    public void i_should_see_list_of_security_questions_to_choose_and_answer() throws Throwable {

    }


}