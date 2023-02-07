// POM => PAGE OBJECT MODEL
import { LoginPage } from "./Pages/login_page"

const login_page = new LoginPage()

it("Page Object Model",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    login_page.enterusername()
    login_page.enterpassword()
    login_page.loginbutton()
    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    // cy.get('.oxd-button').click()
})