package stepDefinition;

import cucumber.api.java.en.Given;
import helper.Log;
import pageobjects.FlightFindPage;
import pageobjects.LoginPage;
import pageobjects.ReserveFlightPage;

public class ReserveFlightPageStep {
	@Given("^click reservefliht button$")
	public void click_reservefliht_button() throws Throwable {
		LoginPage.Wait();
		FlightFindPage.btnClick(ReserveFlightPage.btn_reserveFlights());
		Log.info("ReserveFlight button clicked");
}
}
