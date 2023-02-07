// Assertions are automatically retried until they pass or time out.


describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://example.cypress.io')
      cy.wait(1000)
      cy.contains('get').click()

      // 1. imiplict assertion =>> in-built assertions in cypress.
      cy.get('#query-btn').should("contain","Button")
      // check for the expect condition without having to use an assert or expect command separately

      // example of and and should assert:-
      cy.get('.query-button > .btn')
        .should("have.class","btn-default")
        .and("be.visible")
        .and("contain","Save Form")     //("contain",*name of the field*)
    
        cy.get('#root > a')
            .should("have.attr","href")
            .and("equal","https://on.cypress.io/root")
    })
  })