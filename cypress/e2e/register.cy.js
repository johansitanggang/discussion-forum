/**
 * - Register spec
 *   - should display register page correctly
 *   - should display alert when name is empty
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email has been registered
 *   - should display login page when name, email, and password are correct
 */

describe('Register spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register');
  });

  it('should display register page correctly', () => {
    cy.get('input[placeholder="Name"]').should('be.visible');
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button')
      .contains(/^Register$/)
      .should('be.visible');
  });

  it('should display alert when name is empty', () => {
    cy
      .get('button')
      .contains(/^Register$/)
      .click() +
      cy.on('window:alert', (str) => {
        expect(str).to.equal('"name" is not allowed to be empty');
      });
  });

  it('should display alert when email is empty', () => {
    cy.get('input[placeholder="Name"]').type('johndoe');
    cy.get('button')
      .contains(/^Register$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Name"]').type('johndoe');
    cy.get('input[placeholder="Email"]').type('johndoe@gmail.com');

    cy.get('button')
      .contains(/^Register$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email has been registered', () => {
    cy.get('input[placeholder="Name"]').type('johndoe');
    cy.get('input[placeholder="Email"]').type('tes12345@gmail.com');
    cy.get('input[placeholder="Password"]').type('test123');

    cy.get('button')
      .contains(/^Register$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('email is already taken');
    });
  });

  it('should display login page when name, email, and password are correct', () => {
    cy.get('input[placeholder="Name"]').type('test2024');
    cy.get('input[placeholder="Email"]').type('test20245@gmail.com');
    cy.get('input[placeholder="Password"]').type('test2024');

    cy.get('button')
      .contains(/^Register$/)
      .click();

    cy.get('h2')
      .contains(/^Login$/)
      .should('be.visible');
    cy.get('button')
      .contains(/^Login$/)
      .should('be.visible');
  });
});
