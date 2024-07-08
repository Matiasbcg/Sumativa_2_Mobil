describe('Login Page', () => {
  it('should visit the login page, enter username and password, and click on register button', () => {
    
    cy.visit('http://localhost:8100/login');

    
    cy.contains('Login');

    
    cy.contains('Registrar').click();

    
    cy.contains('Registrar');


      cy.get('#ion-input-2')
      .should('be.visible')
      .type('usuarioejemplo', { force: true });



      cy.get('#ion-input-3')
      .should('be.visible')
      .type('contraseñaejemplo', { force: true });

    
    cy.get('.can-go-back > .content-ltr > .button')
      .click({ force: true });

    cy.get('.segment-button-after-checked')
      .click({ force: true });

    cy.get('#inputValoracion')
    .type('8', { force: true });

    cy.get('#inputComentario')
    .type('Excelente atencion al cliente, buena ubicación y buen deseáño laboral. El unico punto negativo son los sobrecupos', { force: true });

    cy.get('.needs-validation > .btn')
    .click({ force: true });

    cy.get(':nth-child(5) > .card-body > .d-flex > div > .btn-edit')
    .click({ force: true });
    

    cy.get('#editInputValoracion')
    .click({ force: true });

    cy.get('#editInputValoracion')
    .clear() 
    .type('10', { force: true });

    cy.get('#editInputComentario')
    .clear() 
    .type('Excelente atencion al cliente, buena ubicación y buen deseáño laboral. Mejoraron el sistema de cupos', { force: true });

    cy.get('#editForm > .card-body > .needs-validation > .btn-primary')
    .click({ force: true });

    cy.get(':nth-child(5) > .card-body > .d-flex > div > .btn-delete')
    .click({ force: true });

  });
});