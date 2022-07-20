describe('Turing Cafe Homepage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Should be able to visit the homepage and render the header', () => {
        cy.contains('h1', 'Turing Cafe Reservations')

    })
    
    it('Should have all current reservations displayed', () => {
        cy.get('[data-cy="res-card"]').should('have.length', 9)
    })

    it('Should be able to select the name, date, time, and number of guest inputs and fill them with the corresponding values', () => {
        cy.get('input[type="name"]')
        .type('Amy')
        .should('have.value', 'Amy')
        .get('input[type="date"]')
        .type('2022-04-25')
        .should('have.value', '2022-04-25')
        .get('input[type="time"]')
        .type('05:30')
        .should('have.value', '05:30')
        .get('input[type="number"]')
        .type('4')
        .should('have.value', 4)


    
    })
})