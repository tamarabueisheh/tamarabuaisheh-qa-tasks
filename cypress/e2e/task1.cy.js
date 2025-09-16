/// <reference types= "cypress"/>

describe('TASK #1 - Selectors', () => {
  it('Finds all required elements', () => {
    cy.visit('/#/register');

    cy.get('h1.text-xs-center'); // Sign up
    cy.get('p.text-xs-center'); // Have an account?
    cy.get('a.navbar-brand[ui-sref="app.home"]'); // Conduit logo
    cy.get('a.nav-link[ui-sref="app.home"]:visible'); // Home (navbar)
    cy.get('a.nav-link[ui-sref="app.register"]'); // Sign up (navbar)
    cy.get('input[placeholder="Username"]'); // Username
    cy.get('input[placeholder="Email"]'); // Email
    cy.get('input[placeholder="Password"]'); // Password
    cy.get('button[type="submit"].btn-primary'); // Sign up Button
    cy.get('footer a.logo-font'); // Conduit Footer
    cy.get('footer span.attribution'); // Footer
  });
});
