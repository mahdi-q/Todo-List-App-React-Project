# Todo List App React Project

A web app for writing and managing your work, powered by React and styled in Bootstrap.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Key Concepts](#key-concepts)
- [Packages](#packages)
- [Contact Information](#contact-information)

## Installation

### Prerequisites

- Node.js and npm should be installed on your machine.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/mahdi-q/Todo-List-App-React-Project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Todo-List-App-React-Project
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the server:
   ```bash
   npm run server
   ```
5. Run the app:
   ```bash
   npm run dev
   ```
6. Click on the link provided in the terminal to open the app in your browser.

## Features

- **Fully responsive design styled with Bootstrap**
- **Change todo's status to completed or uncompleted**
- **Remove todo from todos list**

## Key Concepts

This project explores several important concepts from the React library and JS:

- **State Management**: Using `reduxjs/toolkit` and `react-redux`, manage and centralize the application’s state, making data consistent and accessible across components.
- **API Integration**: Utilize `axios` for making HTTP requests to external APIs, handling data retrieval, posting, and error management effectively.
- **Mock Backend for Development**: With `json-server`, set up a local REST API that serves mock data, which is useful for front-end testing without a full backend.
- **Data Fetching & Thunk Middleware**: Integrate asynchronous logic using thunks in `reduxjs/toolkit`, allowing you to fetch data with `axios` and store it in Redux for global access.
- **Error Handling**: Implement error-catching strategies for failed API requests or UI rendering issues, possibly by leveraging Redux to store error messages.

## Packages

Packages used in this project:

- **reduxjs/toolkit**: Simplifies state management in React with tools to reduce Redux boilerplate.
- **axios**: Makes HTTP requests and handles API calls easily in JavaScript.
- **bootstrap**: Provides responsive design components for building mobile-friendly UIs.
- **json-server**: Creates a mock REST API with a JSON file for quick backend prototyping.
- **react-dom**: Manages DOM rendering of React components in web applications.
- **react-redux**: Connects React components to the Redux store for efficient state management.

## Contact Information

For any questions or feedback, please contact me at [ghasemi84mahdi@gmail.com](mailto:ghasemi84mahdi@gmail.com).

---

Thank you for using the Todo List App React Project!
