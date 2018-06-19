Feature: LoginPage

  @login
  Scenario: login
    Given open page
    When put user name and password
    Then click the login button
    
    @FlightFind
    Scenario: Flightfind
    Given select number of passengers
    When select departure location
    Then select arrival location
    Then select airline company
    Then click flightfind button

    @ReserveFlight
    Scenario: ReserveFlight
    Given click reservefliht button
    
    @BuyFlight
    Scenario: BuyFlight
    Given put first passenger's first name
    Then put first passenger's last name
    Then put second passenger's first name
    Then put second passenger's last name
    Then select credit card type
    Then put credit card type number
    Then select credit card expiration month
    Then select credit card expiration year
    Then click buyflight button
    