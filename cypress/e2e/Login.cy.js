const LoginPage = require ('./page/LoginPage');

describe('template spec', () => {
  it('passes', () => {
LoginPage.url_visit();
LoginPage.filluserMail('demo@viseetor.id');
LoginPage.fillpassword('password');
LoginPage.clickLoginbtn();
})
})