/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should display login page correctly', () => {
    cy.get('input[placeholder="Email"]').should('be.visible');

    cy.get('input[placeholder="Password"]').should('be.visible');

    cy.get('button')
      .contains(/^Login$/)
      .should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.get('button')
      .contains(/^Login$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Email"]').type('test@gmail.com');

    cy.get('button')
      .contains(/^Login$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    cy.get('input[placeholder="Email"]').type('test@gmail.com');

    cy.get('input[placeholder="Password"]').type('test123');

    cy.get('button')
      .contains(/^Login$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    cy.get('input[placeholder="Email"]').type('tes12345@gmail.com');

    cy.get('input[placeholder="Password"]').type('123123');

    cy.get('button')
      .contains(/^Login$/)
      .click();

    cy.get('h1')
      .contains(/^Discussion available$/)
      .should('be.visible');
    cy.get('h1')
      .contains(/^Discussion Forum$/)
      .should('be.visible');

    cy.get('.flex.flex-col.space-y-4.rounded-lg.bg-white.p-4.shadow-md').should('be.visible');
    cy.get('.flex.flex-col.gap-y-2').should('be.visible');
  });
});
