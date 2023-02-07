export class LoginPage{
    enterusername(name){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(name)
    }
    enterpassword(password){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    }
    loginbutton(){
        cy.get('.oxd-button').click()
    }
}