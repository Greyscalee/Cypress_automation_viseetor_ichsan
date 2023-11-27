const locator = require ('./locators/loginLocator');
class LoginPage {

    async url_visit () {
        cy.visit ('https://appstaging.viseetor.id/login')
    };

    async filluserMail (email) {
        Cy.xpath (locator.datatest.usermail_field).type(email);
    }
    async fillpassword (password) {
        Cy.xpath (locator.datatest.password_field).type(password);
    }
    async clickLoginbtn () {
        Cy.xpath (locator.datatest.login_btn).click();
    }
}
module.exports = new LoginPage();