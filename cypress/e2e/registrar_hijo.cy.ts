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

    cy.get('[value="datos"]')
      .click({ force: true });

    cy.get('#firstName')
      .should('be.visible')
      .type('Matias', { force: true });

    cy.get('#secondName')
      .should('be.visible')
      .type('Benjamin', { force: true });
    
    cy.get('#firstSurname')   
      .should('be.visible')
      .type('Cayuán', { force: true });
    
    cy.get('#secondSurname')  
      .should('be.visible')
      .type('George', { force: true });

      cy.get('#birthDate')
      .should('be.visible')
      .type('2006-06-12', { force: true });
    
    cy.get('#school')
    .should('be.visible')
    .type('Alicante de Maipú', { force: true });

    cy.get('.btn-success')
    .click({ force: true });

    cy.get('.ion-padding > .btn')
    .click({ force: true });




  });
});