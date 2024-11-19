# User Management Dashboard

This project is a React-based User Management Dashboard that allows users to view, add, edit, and delete user information. It includes various components, custom hooks, and Redux for state management. The dashboard is styled using Tailwind CSS and includes a confirmation modal for critical actions like deleting users.

## Features

- View a list of users.
- Add, update, and delete user information.
- Pagination for user list.
- Modal confirmation for user deletion.
- Custom form handling using React hooks.
- Validation for user form inputs.

## Components

- **Home** ✅: The main dashboard that displays the list of users and navigates to other sections.
- **UserForm** ✅: A form to add or edit user details (name, email, etc.).
- **UsersContainer** ✅: Displays a list of users and handles pagination.
- **Loader** ✅: A spinner component to show loading state when fetching data.
- **Pagination** ✅: A component for navigating through the list of users with page controls.
- **FormInput** ✅: A reusable form input field component used in `UserForm` for different user details.
- **UserCard** ✅: A card component for displaying individual user information with options to edit or delete.
- **ConfirmationModal** ✅: A modal for confirming the deletion of a user.

## Custom Hooks

- **useForm** ✅: A custom hook to handle form state and validation logic for the user form.
- **useModal** ✅: A custom hook for handling modal visibility (open/close) in the app.
- **useUsersPagination** ✅: A custom hook to manage pagination logic for the users list.

## Utilities

- **validateUserForm** ✅: A utility function to validate the user input fields in the form (using `validator` library).

## Redux Store

The app uses Redux for state management with `@reduxjs/toolkit` for better structure and simpler configuration.

### Actions

- **addUser**: Adds a new user to the list.
- **deleteUser**: Deletes a user from the list after confirmation.
- **updateUser**: Updates an existing user's details.
- **fetchUsers**: Fetches the list of users from the API.

### Reducers

- **usersList** ✅: Handles the state related to the users (loading, error, data).

## Dependencies

- **react-router-dom**: For routing and navigation.
- **validator**: For validating form inputs.
- **react-toastify**: For displaying notifications like success or error messages.
- **tailwind css**: For styling the components using utility-first CSS framework.
- **react-spinners**: For loading spinners to indicate loading states.
- **axios**: For making API calls.
- **react-redux**: For state management using Redux.
- **@reduxjs/toolkit**: For setting up Redux and handling actions/reducers in a more efficient way.

## Setup and Run Instructions

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) for package management

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Anjnaeyulu143/user-management-dashboard.git
   cd user-management-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the development server:

```bash
npm start
```
