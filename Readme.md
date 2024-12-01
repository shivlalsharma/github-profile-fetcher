# GitHub Profile Fetcher

## Overview
GitHub Profile Fetcher is a web application that allows users to search and display GitHub profiles based on a username. It fetches and shows the user's details such as their avatar, bio, followers, following, repositories, and more. The app also handles invalid or missing GitHub profiles with appropriate error messages.

---

## Deployment

This GitHub Profile Fecher is live and accessible online. You can try it out here: [Fetch Github Profile](https://github-profile-fetching.netlify.app/)

---

## Features
- Search for any GitHub user by their username.
- Displays user profile details, including:
  - Avatar
  - Name
  - Bio
  - Followers count
  - Following count
  - Public repositories count
- Displays repositories (up to 10) for the user.
- Handles errors gracefully, such as invalid usernames or unavailable profiles.
- Shows a loading indicator while fetching data.
- Responsive design that adapts to different screen sizes.

---

## Technologies Used
- **HTML** for the structure of the webpage.
- **CSS** for styling and responsive design.
- **JavaScript** for interacting with the GitHub API to fetch user data.
- **GitHub API** for fetching user profile data and repositories.

---

## How It Works
1. **User Input**: The user enters a GitHub username in the search bar.
2. **Fetching Profile Data**: Upon submitting the form, the app sends a request to the GitHub API to fetch the profile data.
3. **Displaying Profile**: Once the data is fetched successfully, it is displayed on the page, showing the user's avatar, bio, and other details.
4. **Repositories**: The app also fetches and displays up to 10 repositories of the user.
5. **Error Handling**: If the username is invalid or no data is found, an error message is shown to the user.

---

## Installation

follow these steps to run the Tic Tac Toe locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/shivlalsharma/github-profile-fetcher.git
    cd github-profile-fetcher
    ```

2. **Open the `index.html` file in your browser**.

   Alternatively, you can set up a local server (e.g., using **VS Code Live Server**) to view the game in your browser.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Created and deployed by **Shivlal Sharma**.  
- **GitHub**: [Shivlal Sharma's GitHub](https://github.com/shivlalsharma)
- **LinkedIn**: [Shivlal Sharma's LinkedIn](https://www.linkedin.com/in/shivlal-sharma-56ba5a284/)