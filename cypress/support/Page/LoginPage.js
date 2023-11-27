const locator = require('../Locators/loginLocator');
let data_user = require('../dataTest/datauser');

class LoginPage {
    async visit(email){
        cy.visit (data_user.data_param.url);

    }

    async type_email(email){
        cy.xpath (locator.datatest.user_input).type(email);

    }

    async type_password(password){
        cy.xpath (locator.datatest.pass_input).type(password);

    }

    async loginbtn(){
        cy.xpath (locator.datatest.login_btn).click();

    }
}
module.exports = new LoginPage()
