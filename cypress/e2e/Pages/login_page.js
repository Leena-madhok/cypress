export class LoginPage{
    enterusername(){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    }
    enterpassword(){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    }
    loginbutton(){
        cy.get('.oxd-button').click()
    }
}