// URL to fetch user data
const API_URL = "https://jsonplaceholder.typicode.com/users";

/**
 * Fetches user data from JSONPlaceholder API,
 * filters users based on company catchphrase containing "group" or "service",
 * and transforms them into formatted strings using object destructuring.
 */
async function fetchAndTransformUsers() {
  try {
    // 1. Fetch data from the API (native fetch available in modern Node.js)
    const response = await fetch(API_URL);

    // Check if the HTTP response is OK (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response body as JSON
    const users = await response.json();

    // 2. Regular expression for "group" or "service" (case-insensitive with 'i' flag)
    const filterRegex = /group|service/i;

    // 3. Filter users based on company catchPhrase
    const filteredUsers = users.filter((user) => {
      const catchPhrase = user.company?.catchPhrase || "";
      return filterRegex.test(catchPhrase);
    });

    // 4. Transform filtered data using ES6 Object Destructuring
    const formattedResult = filteredUsers.map((user) => {
      // Destructure name, email, and the nested city property from address
      const {
        name,
        email,
        address: { city } = {},
      } = user;

      // Return formatted string using ES6 Template Literals
      return `User: ${name} | Email: ${email} | City: ${city}`;
    });

    // 5. Output the result
    console.log("Transformed User List:\n");
    console.log(formattedResult);

    return formattedResult;
  } catch (error) {
    console.error("Error occurred while processing users:", error.message);
  }
}

// Execute the function
fetchAndTransformUsers();
