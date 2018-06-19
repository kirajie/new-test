$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Audrey Tsang/Desktop/newTourDemoAuto-master/src/main/resources/feature/test.feature");
formatter.feature({
  "line": 1,
  "name": "LoginPage",
  "description": "",
  "id": "loginpage",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "login",
  "description": "",
  "id": "loginpage;login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "open page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "put user name and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.open_page()"
});
formatter.result({
  "duration": 4664030049,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.put_user_name_and_password()"
});
formatter.result({
  "duration": 244038849,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.click_the_login_button()"
});
formatter.result({
  "duration": 3095206063,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Flightfind",
  "description": "",
  "id": "loginpage;flightfind",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@FlightFind"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "select number of passengers",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "select departure location",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select arrival location",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "select airline company",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click flightfind button",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightFindPageStep.select_number_of_passengers()"
});
formatter.result({
  "duration": 201168431,
  "status": "passed"
});
formatter.match({
  "location": "FlightFindPageStep.select_departure_location()"
});
formatter.result({
  "duration": 186454204,
  "status": "passed"
});
formatter.match({
  "location": "FlightFindPageStep.select_arrival_location()"
});
formatter.result({
  "duration": 198060683,
  "status": "passed"
});
formatter.match({
  "location": "FlightFindPageStep.select_airline_company()"
});
formatter.result({
  "duration": 199722111,
  "status": "passed"
});
formatter.match({
  "location": "FlightFindPageStep.click_flightfind_button()"
});
formatter.result({
  "duration": 374320942,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "ReserveFlight",
  "description": "",
  "id": "loginpage;reserveflight",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@ReserveFlight"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "click reservefliht button",
  "keyword": "Given "
});
formatter.match({
  "location": "ReserveFlightPageStep.click_reservefliht_button()"
});
formatter.result({
  "duration": 658106638,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "BuyFlight",
  "description": "",
  "id": "loginpage;buyflight",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@BuyFlight"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "put first passenger\u0027s first name",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "put first passenger\u0027s last name",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "put second passenger\u0027s first name",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "put second passenger\u0027s last name",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "select credit card type",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "put credit card type number",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "select credit card expiration month",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "select credit card expiration year",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "click buyflight button",
  "keyword": "Then "
});
formatter.match({
  "location": "BuyFlightPageStep.put_first_passenger_s_first_name()"
});
formatter.result({
  "duration": 189053901,
  "status": "passed"
});
formatter.match({
  "location": "BuyFlightPageStep.put_first_passenger_s_last_name()"
});
formatter.result({
  "duration": 179663515,
  "status": "passed"
});
formatter.match({
  "location": "BuyFlightPageStep.put_second_passenger_s_first_name()"
});
formatter.result({
  "duration": 133569881,
  "status": "passed"
});
formatter.match({
  "location": "BuyFlightPageStep.put_second_passenger_s_last_name()"
});
formatter.result({
  "duration": 114209641,
  "status": "passed"
});
formatter.match({
  "location": "BuyFlightPageStep.select_credit_card_type()"
});
formatter.result({
  "duration": 162266625,
  "status": "passed"
});
formatter.match({
  "location": "BuyFlightPageStep.put_credit_card_type_number()"
});
formatter.result({
  "duration": 301070113,
  "status": "passed"
});
formatter.match({
  "location": "BuyFlightPageStep.select_credit_card_expiration_month()"
});
formatter.result({
  "duration": 250052067,
  "status": "passed"
});
formatter.match({
  "location": "BuyFlightPageStep.select_credit_card_expiration_year()"
});
formatter.result({
  "duration": 205649798,
  "status": "passed"
});
formatter.match({
  "location": "BuyFlightPageStep.click_buyflight_button()"
});
formatter.result({
  "duration": 528564812,
  "status": "passed"
});
});