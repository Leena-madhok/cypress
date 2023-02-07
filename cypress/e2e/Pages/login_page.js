export class LoginPage{

    userName_input = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    userPassword_input = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button = '.oxd-button'

    enterusername(name){
        cy.get(this.userName_input).type(name)
    }
    enterpassword(password){
        cy.get(this.userPassword_input).type(password)
    }
    loginbutton(){
        cy.get(this.login_button).click()
    }
}