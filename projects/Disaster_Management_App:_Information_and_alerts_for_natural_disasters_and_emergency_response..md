## Disaster Management App: Information and Alerts

**Objective:**

By the end of this project, students will have created a React application that displays information about natural disasters and emergency response procedures, and allows users to view alerts and subscribe to notifications.

**Phases and Tasks:**

**Phase 1: Setting Up the Development Environment**

**Objective:** Install the necessary tools and set up the project structure.

* **Install Node.js and npm:**
    * Task: Install Node.js and npm (Node Package Manager) on your computer.
    * Resources: Provide links to official installation guides for Node.js and npm.
* **Create a New React Project:**
    * Task: Use create-react-app to bootstrap a new React project.
    * Instructions: Open your terminal and run `npx create-react-app my-disaster-app`.
    * Resources: Link to create-react-app documentation.
* **Project Structure Overview:**
    * Task: Familiarize yourself with the project structure created by create-react-app.
    * Activity: Identify and understand the purpose of key files and directories (e.g., src, public, package.json).

**Phase 2: Building the Basic UI**

**Objective:** Create the basic UI structure for the application, including navigation and primary components.

* **Create Navigation Component:**
    * Task: Create a `Navigation` component that renders a navigation bar with links to different sections of the app (e.g., Home, Disasters, Alerts, Emergency Response).
    * Instructions: Use React Router to handle navigation between sections.
* **Create Home Component:**
    * Task: Create a `Home` component that displays a welcome message, a brief overview of the app, and potential links to other sections.
    * Instructions: Use HTML elements (e.g., `<p>`, `<h1>`, `<a>`) to create the content.
* **Create Disasters Component:**
    * Task: Create a `Disasters` component that will eventually display a list of common natural disasters.
    * Instructions: For now, render a placeholder message indicating the upcoming functionality.
* **Create Alerts Component:**
    * Task: Create an `Alerts` component that will display active alerts.
    * Instructions: Render a placeholder message for now.
* **Create Emergency Response Component:**
    * Task: Create an `EmergencyResponse` component to display emergency contact information and essential steps.
    * Instructions: Render a placeholder message for now.

**Phase 3: Fetching and Displaying Disaster Data**

**Objective:** Implement functionality to fetch data about natural disasters and display it on the app.

* **Introduction to Fetch API:**
    * Task: Read about the Fetch API and how to make API calls in JavaScript.
    * Resources: Provide a tutorial or documentation link on the Fetch API.
* **Find a Disaster Data API:**
    * Task: Research and select a public API that provides data about natural disasters (e.g., NOAA, USGS).
    * Resources: Provide guidance on finding and evaluating suitable APIs.
* **Create a Data Fetching Function:**
    * Task: Create a function in the `Disasters` component to fetch data from the API.
    * Instructions: Use the Fetch API to retrieve data from the chosen API endpoint.
* **Display Disaster Information:**
    * Task: Modify the `Disasters` component to display fetched data in a structured format (e.g., lists, cards).
    * Instructions: Use JSX to create a visually appealing layout for the disaster information.

**Phase 4: Managing and Displaying Alerts**

**Objective:** Implement functionality to display active alerts and manage subscriptions.

* **Create Alert Data Model:**
    * Task: Define a data model or structure for representing individual alerts (e.g., location, type, severity, date).
    * Instructions: Create an array or object to store alert data.
* **Create Alert Component:**
    * Task: Create an `Alert` component that displays information about a single alert.
    * Instructions: Pass individual alert data as props to this component.
* **Display Alerts in the `Alerts` Component:**
    * Task: Fetch alert data (either from the API or using mock data) and render a list of `Alert` components in the `Alerts` component.
    * Instructions: Use JSX to create a dynamic list of alerts.
* **Add Subscription Functionality (Optional):**
    * Task: Implement a feature that allows users to subscribe to alerts for specific locations or types of disasters.
    * Instructions: Use a form or other user interface elements to allow users to provide their location preferences and subscribe to notifications.

**Phase 5: Implementing Emergency Response Information**

**Objective:** Populate the `EmergencyResponse` component with relevant information.

* **Create Emergency Contact Data:**
    * Task: Define an array of objects containing emergency contact information (e.g., phone number, email, address).
    * Instructions: Store this data in the `EmergencyResponse` component.
* **Display Emergency Contact Information:**
    * Task: Modify the `EmergencyResponse` component to display the contact information in a user-friendly format (e.g., a list, table, contact cards).
    * Instructions: Use JSX to create the UI for the contact information.
* **Add Emergency Preparedness Steps:**
    * Task: Include a list of emergency preparedness steps (e.g., create an emergency kit, make a family plan, secure your home) in the `EmergencyResponse` component.
    * Instructions: Use HTML elements (e.g., `<ol>`, `<li>`) to create the list.

**Phase 6: Styling and User Experience Enhancement**

**Objective:** Apply styles to enhance the visual appearance and improve the user experience.

* **Introduction to Styling in React:**
    * Task: Read about different ways to style React components (CSS, inline styles, CSS-in-JS).
    * Resources: Provide a tutorial on styling methods in React.
* **Apply Basic CSS:**
    * Task: Create a CSS file for the main components (e.g., `Navigation`, `Home`, `Disasters`) and apply styles to the elements.
    * Instructions: Import the CSS file into the respective components and add class names for styling.
* **Use CSS Frameworks (Optional):**
    * Task: Explore using a CSS framework (e.g., Bootstrap, Material UI) to simplify styling and create a more consistent UI.
    * Instructions: Learn how to integrate a chosen framework into the React application.
* **Improve User Interface:**
    * Task: Enhance the user interface by improving the visual layout, color scheme, fonts, and spacing to create a more user-friendly experience.
    * Instructions: Use CSS to make the app more visually appealing and easy to navigate.

**Final Project Submission:**

* **Combine All Phases:** Ensure all components and functionality are working together as expected.
* **Code Review and Feedback:** Submit your project for a code review session with peers or the instructor.
* **Project Presentation:** Prepare a brief presentation to demonstrate your React application and explain the development process.

**Assessment Criteria:**

* **Functionality:** The application works as expected and meets all the requirements.
* **Code Quality:** The code is clean, well-organized, and follows best practices.
* **Styling:** The application is visually appealing and user-friendly.
* **Understanding:** The student demonstrates a clear understanding of React concepts and can explain their code.

This scaffolded project provides a step-by-step approach to learning React through building a real-world application with practical features, enhancing understanding and competence in developing web applications.
