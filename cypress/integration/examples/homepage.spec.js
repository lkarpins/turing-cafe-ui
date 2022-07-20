describe('Turing Cafe Homepage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Should be able to visit the homepage and render the title', () => {
        cy.contains('h1', 'Turing Cafe Reservations')
    })
})