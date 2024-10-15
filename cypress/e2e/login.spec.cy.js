describe('Login Form Tests', () => {
  beforeEach(() => {
    cy.visit('/'); // reset to main page before each test
  });

  // Verify successful login with valid credentials and proper functionality of the logout button
  it('should allow a user to log in with valid credentials', () => {
    cy.get('header').find('button[data-auth="login"]').click();
    cy.get('#loginForm').should('exist').and('be.visible');

    // Email field with check value
    cy.get('#loginForm input[name="email"]')
      .focus()
      .clear()
      .type('andgra00184@stud.noroff.no', { force: true })
      .should('have.value', 'andgra00184@stud.noroff.no');

    // Password field with check value
    cy.get('#loginForm input[name="password"]')
      .focus()
      .clear()
      .type('Leaf_Beef85', { force: true })
      .should('have.value', 'Leaf_Beef85');

    // Submit the form
    cy.get('#loginForm button[type="submit"]').click();
    cy.url().should('include', '?view=profile');

    // Get and click logout button
    cy.get('button[data-auth="logout"]').click();
    cy.url().should('not.include', '?view=profile');
  });

  // Verify that the user cannot log in with invalid credentials and receives an error message.
  it('should not allow submission with invalid credentials and show validation messages', () => {
    // Open the login modal
    cy.get('header').find('button[data-auth="login"]').click();

    // Enter invalid credentials
    cy.get('#loginForm input[name="email"]').type('invalidemail'); // Invalid email format
    cy.get('#loginForm input[name="password"]').type('short'); // Short password

    // Attempt to submit the form
    cy.get('#loginForm button[type="submit"]').click();

    // Check that the form is still visible, meaning it was not submitted
    cy.get('#loginForm').should('be.visible');

    // Check for messages
    cy.get('#loginEmail:invalid').should('exist'); // The email input should be invalid
    cy.get('.error-message'); // Check for a custom error message with a class
    cy.get('#loginPassword:invalid').should('exist'); // The password input should be invalid
    cy.get('.error-message'); // Check for password error message
  });
});
