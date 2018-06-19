package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import helper.Log;
import pageobjects.BuyFlightPage;
import pageobjects.FlightFindPage;
import pageobjects.LoginPage;

public class BuyFlightPageStep {
	@Given("^put first passenger's first name$")
	public void put_first_passenger_s_first_name() throws Throwable {
		LoginPage.Wait();
		BuyFlightPage.txt_passFirst0().sendKeys("mike");
		Log.info("First Passenger first name inserted");
	}

	@Then("^put first passenger's last name$")
	public void put_first_passenger_s_last_name() throws Throwable {
		BuyFlightPage.txt_passLast0().sendKeys("johns");
		Log.error("First Passenger last name inserted");
	}

	@Then("^put second passenger's first name$")
	public void put_second_passenger_s_first_name() throws Throwable {
		BuyFlightPage.txt_passFirst1().sendKeys("hasan");
		Log.warn("Second Passenger first name inserted");
	}

	@Then("^put second passenger's last name$")
	public void put_second_passenger_s_last_name() throws Throwable {
		BuyFlightPage.txt_passLast1().sendKeys("rehman");
		Log.fatal("Second Passenger last name inserted");
	}

	@Then("^select credit card type$")
	public void select_credit_card_type() throws Throwable {
		FlightFindPage.SelectItem(BuyFlightPage.slc_creditCard(), 1);
		Log.info("Credit Card Type is selected");
	}

	@Then("^put credit card type number$")
	public void put_credit_card_type_number() throws Throwable {
		BuyFlightPage.txt_creditnumber().sendKeys("1234567896541");
		Log.info("Credit Card number is inserted");
	}

	@Then("^select credit card expiration month$")
	public void select_credit_card_expiration_month() throws Throwable {
		FlightFindPage.SelectItem(BuyFlightPage.slc_creditMnth(), 10);
		Log.info("Credit Card Expiration month is selected");
	}

	@Then("^select credit card expiration year$")
	public void select_credit_card_expiration_year() throws Throwable {
		FlightFindPage.SelectItem(BuyFlightPage.slc_creditYear(), 7);
		Log.info("Credit Card Expiration year is selected");
	}

	@Then("^click buyflight button$")
	public void click_buyflight_button() throws Throwable {
		BuyFlightPage.btn_buyFlights().click();
		Log.info("Buy flight button clicked");
	
	}
}
