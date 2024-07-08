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

      cy.get('.segment-button-checked')
      .click({ force: true });

      cy.window().then(win => {
      win.scrollBy(0, win.innerHeight);
    });

    
    cy.get(':nth-child(1) > .ion-color')
    .click({ force: true });

  });
});