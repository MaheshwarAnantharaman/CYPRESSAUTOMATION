describe("Booking Appointment",()=>{
    it("Login into the webpage",()=>{
       cy.visit("https://katalon-demo-cura.herokuapp.com/")
       cy.get("#menu-toggle").click()
       cy.get('a[href="profile.php#login"]').click()
       cy.url().should('include','login')
       cy.get('input[name="username"]').type('John Doe')
       cy.get('input[type="password"]').type('ThisIsNotAPassword')
       cy.get('#btn-login').click()
       cy.get("#btn-make-appointment").click()
       cy.get("#combo_facility").select("Tokyo CURA Healthcare Center")
       cy.get('input[type="checkbox"]').check().should('be.checked')
       cy.get('#radio_program_medicaid').check().should('be.checked')
       cy.get('#txt_visit_date').type('20/11/2024')
       cy.get('#txt_comment').click({force:true}).type('I will be available at 12:00pm')
    })
    it.skip("Passing The Credentials",()=>{
  
    })
    it.skip("Booking Appointment",()=>{

        cy.get("#btn-make-appointment").click()
        cy.get("#combo_facility").select("Tokyo CURA Healthcare Center")
        cy.get('input[type="checkbox"]').check().should('be.checked')
        cy.get('#radio_program_medicaid').check().should('be.checked')
        cy.get('#txt_visit_date').type('2024/11/20')
        cy.get('#txt_comment').type('I will be available at 12:00pm')
    })
})