package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"C:/Users/Audrey Tsang/Desktop/newTourDemoAuto-master/src/main/resources/feature/test.feature"},
		glue = {"stepDefinition"},
		plugin = {"pretty", "html:target/cucumber-reports"},
		tags = {"@login,@FlightFind,@ReserveFlight,@BuyFlight"})

public class TestRunner {

}
//Cucumber framework BDD framework
//major 3 component of this framework
//1. feature file 2. StepDefinition 3. Runner

//Gherkin syntax
//Given the class is started
//When Yali is in the room
//Then Class is dimissed

//Step Definition
//it is nothing but A Java class

//Runner
//is test started. It is like engine