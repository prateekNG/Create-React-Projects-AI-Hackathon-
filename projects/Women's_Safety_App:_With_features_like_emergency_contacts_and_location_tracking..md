## Women's Safety App: A React Project Guide

**Project Title:** Women's Safety App

**Objective:** Build a React application for women's safety, featuring emergency contacts and location tracking.

**Phases and Tasks:**

**Phase 1: Setting Up the Development Environment**

**Objective:** Install necessary tools and set up the project structure.

**Tasks:**

* **Install Node.js and npm:** 
    * Task: Install Node.js and npm (Node Package Manager) on your computer.
    * Resources: Provide links to official installation guides for Node.js and npm.
* **Create a New React Project:**
    * Task: Use create-react-app to bootstrap a new React project.
    * Instructions: Open your terminal and run `npx create-react-app my-safety-app`.
    * Resources: Link to create-react-app documentation.
* **Project Structure Overview:**
    * Task: Familiarize yourself with the project structure created by create-react-app.
    * Activity: Identify and understand the purpose of key files and directories (e.g., `src`, `public`, `package.json`).

**Phase 2: Basic App Structure and Components**

**Objective:** Design the core layout and components of the app.

**Tasks:**

* **Create App Component:** 
    * Task: Create the main App component in `src/App.js`.
    * Instructions: Set up the basic structure for the app with:
        * Navigation Bar (e.g., "Home", "Contacts", "Tracking")
        * Main Content Area (for displaying different sections)
* **Navigation Component:**
    * Task: Create a Navigation component (`src/components/Navigation.js`) for the app's navigation bar.
    * Instructions:
        * Implement navigation links for the different app sections.
        * Use React Router for navigation between pages (if applicable). 
* **Home Component:**
    * Task: Create a Home component (`src/components/Home.js`).
    * Instructions: Display welcome message, potential app information, or basic usage instructions.
* **Contact List Component:**
    * Task: Create a ContactListComponent (`src/components/ContactList.js`) for managing emergency contacts.
    * Instructions:
        * Set up the structure for displaying a list of contacts (initially empty).

**Phase 3: Emergency Contacts Feature**

**Objective:** Implement functionality for adding and managing emergency contacts.

**Tasks:**

* **State Management:**
    * Task: Use `useState` to manage the list of emergency contacts in the ContactListComponent.
    * Instructions:
        * Initialize an empty array to hold contact data.
* **Add Contact Form:**
    * Task: Create a ContactForm component (`src/components/ContactForm.js`) to add new contacts.
    * Instructions:
        * Include input fields for contact name, phone number, and optional additional information.
        * Implement form submission logic to update the contact list state.
* **Display Contacts:**
    * Task: Render the contact list in the ContactListComponent using the managed state.
    * Instructions:
        * Use JSX to display each contact's information (name, phone number, etc.).
        * Consider adding functionality to edit or delete contacts.
* **Local Storage:**
    * Task: Use localStorage to persist the list of contacts when the user closes the app.
    * Instructions:
        * Save the contact data to localStorage when a new contact is added or existing ones are updated.
        * Load the data from localStorage when the app is launched.

**Phase 4: Location Tracking Feature**

**Objective:** Implement location tracking functionality for user safety.

**Tasks:**

* **Geolocation API:**
    * Task: Research and implement the Geolocation API in the app.
    * Instructions:
        * Request user permission to access location data.
        * Use the API to get the user's current location.
* **Location Display:**
    * Task: Create a Location component (`src/components/Location.js`) to display the current location.
    * Instructions:
        * Receive user location data as props from a higher-level component.
        * Display the location coordinates (latitude and longitude).
        * Optionally, use a map API (like Google Maps) to visually display the location.
* **Periodic Tracking:**
    * Task: Implement a mechanism to periodically track the user's location.
    * Instructions:
        * Use `setInterval` or other appropriate method to update location data at regular intervals.
        * Consider adding options to adjust the tracking frequency.

**Phase 5: SOS Feature**

**Objective:** Implement a feature that sends an SOS alert to emergency contacts.

**Tasks:**

* **SOS Button:**
    * Task: Create an SOSButton component (`src/components/SOSButton.js`) for triggering an SOS alert.
    * Instructions:
        * Design a visually prominent button.
        * Implement event handling for when the button is clicked.
* **Alert Logic:**
    * Task: Implement the logic for sending an SOS alert when the button is clicked.
    * Instructions:
        * Use the contact list to determine which contacts to alert.
        * Choose a method for sending alerts:
            * **SMS:** Use a third-party API for sending SMS messages.
            * **Phone Call:** Use the browser's built-in functionality for making phone calls (if available).
            * **Push Notifications:** Use a push notification service for immediate alerts.
* **Confirmation:**
    * Task: Provide confirmation to the user after sending an SOS alert.
    * Instructions:
        * Display a message indicating that the SOS has been sent.
        * Potentially include a way for the user to cancel or modify the alert.

**Phase 6: Additional Features (Optional)**

**Objective:** Implement advanced features to enhance the app's functionality.

**Tasks:**

* **Customizable Alerts:**
    * Task: Allow users to customize the SOS message and choose which contact methods to use (SMS, call, etc.).
* **Safe Zone Feature:**
    * Task: Implement a "safe zone" feature where the app doesn't track the user's location.
    * Instructions:
        * Allow users to define a safe zone radius around a specific location.
        * Only track location outside of the safe zone.
* **Emergency Message Sharing:**
    * Task: Allow the user to share a pre-defined emergency message with chosen contacts.
    * Instructions:
        * Provide a field for the user to write a custom message.
        * Integrate the message sharing functionality with the SOS button or a separate feature.
* **Panic Mode:**
    * Task: Implement a "panic mode" that immediately sends an SOS alert and potentially activates a loud alarm on the device.

**Final Project Submission:**

* **Combine All Phases:** Ensure all components and features are working together seamlessly.
* **Code Review and Feedback:** Submit your project for a code review session with peers or the instructor.
* **Project Presentation:** Prepare a brief presentation to demonstrate your React application and explain the development process.

**Assessment Criteria:**

* **Functionality:** The application works as expected and meets all the requirements.
* **Code Quality:** The code is clean, well-organized, and follows best practices.
* **User Interface:** The application is user-friendly and visually appealing.
* **Security:** The application handles user data and location information securely.
* **Understanding:** The student demonstrates a clear understanding of React concepts and can explain their code.

This scaffolded project guide will help students learn React by building a practical and impactful application for women's safety. 
