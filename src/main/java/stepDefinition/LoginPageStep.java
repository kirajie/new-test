package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper.Credentials;
import helper.Log;
import pageobjects.LoginPage;

public class LoginPageStep {
	@Given("^open page$")
	public void open_page() throws Throwable {

		LoginPage.startAPP();
		
		Log.info("Application Started");
		
		LoginPage.Wait();}
	
	    @When("^put user name and password$")
	    public void put_user_name_and_password() throws Throwable {
	    LoginPage.txt_userName().sendKeys(Credentials.username);
			
			Log.info("userName inserted");
			
			LoginPage.txt_password().sendKeys(Credentials.password);
			
			Log.info("password inserted");}

	    @Then("^click the login button$")
	    public void click_the_login_button() throws Throwable {
	LoginPage.btn_login().click();
			
			Log.info("Login button clicked");
	    }
	    
}
