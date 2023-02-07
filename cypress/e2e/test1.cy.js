/// < reference type="cypress" />

it("google search",()=>{

    // 1. opens the google site
    cy.visit("https://www.google.com/")

    // 2. shortcut for 3+4 steps
    cy.get('.gLFyf').type("github {enter}")

    // 3. gets the className and enter the text given in type
    // cy.get('.gLFyf').type("github")
    
    // 4. gets the classNmae element and clicks on it
    // cy.contains('Google Search').click()
    // cy.get('.MUFPAc > :nth-child(3) > a').click()

    // 5. timeout is used to increase the response time or reaction time. by default it is of 4000(4 secs)
    cy.get('.GOE98c', {timeout: 10000}).click()
})