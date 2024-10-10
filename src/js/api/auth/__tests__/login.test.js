import { login } from '../login.js'; // Import the login function to be tested
import { save } from '../../../storage/save.js'; // Import the save function from the storage module

// Mock the save function to isolate the test environment
jest.mock('../../../storage/save.js');

describe('Login Function', () => {
  beforeEach(() => {
    // Clear any previous mock calls before each test
    jest.clearAllMocks(); 
  });

  it('stores a token when provided with valid credentials', async () => {
    // Test data for the login function
    const email = 'test@example.com';
    const password = 'password123';
    const mockResponse = {
      accessToken: 'validAccessToken',
      name: 'Test User',
      age: 30,
    };

    // Mock the fetch function to simulate an API response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true, // Indicate that the response was successful
        json: () => Promise.resolve(mockResponse),
      })
    );

     // Call the login function with the test email and password
    const result = await login(email, password);

    // Verify that the save function is called with the token
    expect(save).toHaveBeenCalledWith('token', 'validAccessToken'); 
    // Verify that the save function is called with the user profile information
    expect(save).toHaveBeenCalledWith('profile', { name: 'Test User', age: 30 });
    // Verify that the login function returns the expected result
    expect(result).toEqual({ name: 'Test User', age: 30 });
  });
});
