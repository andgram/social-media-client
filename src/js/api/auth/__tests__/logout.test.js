const { logout } = require('../logout'); // Import the login function to be tested
const { remove } = require('../../../storage/remove'); // Import the rempve function from the storage module

jest.mock('../../../storage/remove.js'); // Mock the remove function to isolate the test environment

describe('Logout Function', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock data between tests
  });

  it('clears the token and profile from storage', () => {
    logout(); // Call the logout function

    // Check that both 'token' and 'profile' were removed from storage
    expect(remove).toHaveBeenCalledWith('token');
    expect(remove).toHaveBeenCalledWith('profile');
  });
});
