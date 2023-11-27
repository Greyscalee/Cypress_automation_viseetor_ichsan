const LoginPage = require ('../support/Page/LoginPage');
const userdata = require ('../support/dataTest/datauser');
const login_loc = require ('../support/Locators/loginLocator');
const dashboard_loc  = require ('../support/Locators/DashboardLocator');


describe('User should be able to login', () => {
  beforeEach(() => {
    LoginPage.visit (userdata.data_param.url);
})
    it('with valid data', () => {
  cy.xpath(login_loc.datatest.logo).should('be.visible');
  LoginPage.type_email(userdata.data_param.email);
  LoginPage.type_password(userdata.data_param.pass);
  LoginPage.loginbtn(), { timeout: 10000 };
  cy.xpath(dashboard_loc.datatest.logo).should('be.visible');
  cy.xpath(dashboard_loc.datatest.dash_logo).should('be.visible')
  
})
it('with invalid data', () => {
  cy.xpath(login_loc.datatest.logo).should('be.visible');
  LoginPage.type_email(userdata.data_param.email);
  LoginPage.type_password(userdata.data_param.pass);
  LoginPage.loginbtn(), { timeout: 10000 };
  cy.xpath(dashboard_loc.datatest.logo).should('be.visible');
  cy.xpath(dashboard_loc.datatest.dash_logo).should('be.visible')
  
})
})
