// POM => PAGE OBJECT MODEL
import { LoginPage } from "./Pages/login_page"

const login_page = new LoginPage()

describe("Login Page testcases",()=>{

    // beforeEach(()=>{
    //     // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // })

    // valid values
    it("Page Object Model test 1",()=>{
        login_page.enterusername("Admin")
        login_page.enterpassword("admin123")
        login_page.loginbutton()
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        // cy.get('.oxd-button').click()
        cy.contains('Buzz').click()
    })

    // invalid values
    it("Page Object Model test 2",()=>{
        login_page.enterusername("Admin121")
        login_page.enterpassword("admin123")
        login_page.loginbutton()
        cy.contains('Buzz').click()
    })
})