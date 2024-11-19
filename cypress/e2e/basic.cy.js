describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://commitquality.com/')
      // cy.get('[placeholder="Filter by product name"]').type('Product 2')
      // cy.get('[data-testid="filter-button"]').click()
      // var price=0
      // cy.get('table tr td:nth-child(3)').each(($cost1)=>{
      //   if(($cost1).text().includes('15')){
      //     cy.wrap($cost1).then((cellText)=>{
      //       const data=cellText.text()
      //       const num=parseInt(data)
      //       cy.log(num)
      //       price=price+num
      //       cy.log(price)
      //     })
      //   }
      // })
      // cy.get('[placeholder="Filter by product name"]').clear()
      // cy.get('[placeholder="Filter by product name"]').type('Product 1')
      // cy.get('[data-testid="filter-button"]').click()
      // var price1=0
      // cy.get('table tr td:nth-child(3)').each(($cost2)=>{
      //   if(($cost2).text().includes('10')){
      //     cy.wrap($cost2).then((cellText1)=>{
      //       const data1=cellText1.text()
      //       const num1=parseInt(data1)
      //       cy.log(num1)
      //       price1=price1+num1
      //       cy.log(price1)
      //     })
      //   }
      // })
      cy.contains('Practice').click()
      cy.url().should('include','practice')
      cy.contains('Contact Us Form').click()
      cy.get('[data-testid="name"]').type("Hello")
      cy.get('[data-testid="email"]').type("hello@gmail.com")
      cy.get('[data-testid="query-type"]').select('Technical')
      cy.get('[data-testid="dob"]').type('1999-10-06')
      cy.get('[data-testid="practice-checkbox"]').check().should('be.checked')
      cy.get('[data-testid="submit-button"]').type(`{shift}{alt}{enter}`)
    })
  })