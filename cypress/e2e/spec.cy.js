import 'cypress-iframe';

describe('Commit Quality ', () => {
  it('passes', () => {
    cy.visit('https://commitquality.com/')
    cy.get('[data-testid="navbar-practice"]').click()
    cy.url().should("include","https://commitquality.com/practice")
    cy.get('[data-testid="practice-general"]').click()
    cy.url().should("include","https://commitquality.com/practice-general-components")
    cy.get('[data-testid="basic-click"]').eq(0).click()
    cy.get('div> p').should("have.text","Button clicked")
    cy.get('[data-testid="double-click"]').dblclick()
    cy.get('div> p').eq(1).should("have.text","Button double clicked")
    cy.get('[data-testid="right-click"]').rightclick()
    //cy.wait(4000)
    cy.get('div> p').eq(2).should("have.text","Button right mouse clicked")
    cy.get('[data-testid="option1"]').check().should('be.checked')
    cy.get('div> p').eq(3).should("have.text","option1 clicked")
    cy.get("select").select("option2",{force:true}).should('have.value','option2')
    cy.get('[data-testid="checkbox1"]').check().should('be.checked')
    
    // cy.get('[data-testid="link-same-tab"]').click()
    // cy.get('[data-testid="link-newtab"]').invoke('removeAttr','target').click()
    //iframe
    cy.visit('https://commitquality.com/practice-iframe')
    cy.frameLoaded('[data-testid="iframe"]')
    cy.iframe().contains('Products').click()

  })
})