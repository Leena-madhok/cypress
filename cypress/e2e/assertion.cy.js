// Assertions are automatically retried until they pass or time out.


describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://example.cypress.io')
      cy.wait(1000)
      cy.contains('get').click()

      // 1. imiplict assertion =>> in-built assertions in cypress.
      cy.get('#query-btn').should("contain","Button")
      // check for the expect condition without having to use an assert or expect command separately

      // example of "and" and "should" :-
      cy.get('.query-button > .btn')
        .should("have.class","btn-default")
        .and("be.visible")
        .and("contain","Save Form")     //("contain",*name of the field*)
    
      cy.get('#root > a')
        .should("have.attr","href")
        .and("equal","https://on.cypress.io/root")


        //====================first the explicit resut will show than implicit=======================
      // 2. Explicit assertions ===>>> not in-built assertions in cypress.
      //example of "assert" and "expect" :-
      expect(true).to.be.true   //PASSED TESTCASE

      // passed cases will not be shown on cypress screen but the failed test error will be shown. LIKE:-
    //   expect(true).to.be.not.true   //FAILED TESTCASE

    // assert.equal(4, 5, "not equal")   //FAILS
    assert.equal(4, "4", "not equal")   //PASSES 
    // assert.strictEqual(4, "4", "not a number")  //FAILS
    
        
    })
  })