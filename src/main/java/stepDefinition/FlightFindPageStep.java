package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper.Log;
import pageobjects.FlightFindPage;
import pageobjects.LoginPage;

public class FlightFindPageStep {
	@Given("^select number of passengers$")
	public void select_number_of_passengers() throws Throwable {
		LoginPage.Wait();
		FlightFindPage.SelectItem(FlightFindPage.slc_Pass(), 1);
		Log.info("Passenger count Selected");
	}
	    	

	@When("^select departure location$")
	public void select_departure_location() throws Throwable {
		FlightFindPage.SelectItem(FlightFindPage.slc_fromPort(), 6);
		Log.info("Departure port selected"); 
	}

	@Then("^select arrival location$")
	public void select_arrival_location() throws Throwable {
		FlightFindPage.SelectItem(FlightFindPage.slc_toPort(), 3);
		Log.info("Destination port selected");
	}

	@Then("^select airline company$")
	public void select_airline_company() throws Throwable {
		FlightFindPage.SelectItem(FlightFindPage.slc_airLines(), 1);
		Log.info("Airline Company Selected");
	}

	@Then("^click flightfind button$")
	public void click_flightfind_button() throws Throwable {
		FlightFindPage.btnClick(FlightFindPage.btn_findFlights());
		Log.info("Continue Button clicked");
}
}
