## Local Service Finder: Building a React App

**Project Title:** Local Service Finder

**Objective:** By the end of this project, students will have built a basic React application that allows users to search for local service providers (plumbers, electricians, carpenters, etc.) and display their contact information.

**Phases and Tasks:**

**Phase 1: Setting Up the Development Environment**

**Objective:** Install the necessary tools and set up the project structure.

**Install Node.js and npm:**

* **Task:** Install Node.js and npm (Node Package Manager) on your computer.
* **Resources:** Provide links to official installation guides for Node.js and npm.

**Create a New React Project:**

* **Task:** Use create-react-app to bootstrap a new React project.
* **Instructions:** Open your terminal and run `npx create-react-app my-service-finder`.
* **Resources:** Link to create-react-app documentation.

**Project Structure Overview:**

* **Task:** Familiarize yourself with the project structure created by create-react-app.
* **Activity:** Identify and understand the purpose of key files and directories (e.g., `src`, `public`, `package.json`).

**Phase 2: Building the Basic Structure**

**Objective:**  Create the basic layout and structure of the application.

**Create a Navigation Component:**

* **Task:** Create a component called `Navigation` to display navigation links (e.g., "Home", "Services", "About").
* **Instructions:** Design a simple navigation bar with links to different sections of the app.

**Create a Services List Component:**

* **Task:** Create a component called `ServicesList` to display a list of available services (e.g., "Plumber", "Electrician", "Carpenter").
* **Instructions:** Implement a basic structure with placeholders for service names and later to display provider details.

**Create a Provider Detail Component:**

* **Task:** Create a component called `ProviderDetail` to display information about a selected provider.
* **Instructions:**  Design a template with placeholders for the provider's name, contact information, and a brief description.

**Phase 3: Implementing State Management**

**Objective:** Understand and implement state management for dynamic data.

**Manage Service Data:**

* **Task:** Use `useState` hook to store an array of services in the `ServicesList` component.
* **Instructions:**  Initialize the state with an array containing the names of available services.

**Manage Provider Data:**

* **Task:**  Create state in `ProviderDetail` to store information about the selected provider.
* **Instructions:** Initialize the state with empty values to be filled later when a provider is selected.

**Pass Data Between Components:**

* **Task:** Pass the list of services from `ServicesList` to `Navigation` using props.
* **Instructions:**  Use props to pass the selected service from `ServicesList` to `ProviderDetail`.

**Phase 4: Implementing Search Functionality**

**Objective:** Allow users to search for specific services.

**Add Search Input:**

* **Task:**  Add a search input field in `Navigation`.
* **Instructions:** Use `useState` to manage the search input value.

**Filter Services:**

* **Task:** Implement filtering logic in `ServicesList` to display services matching the search input.
* **Instructions:** Filter the service data based on the search input and re-render the service list.

**Phase 5: Displaying Provider Details**

**Objective:** Fetch and display provider details based on user selection.

**Implement Provider Selection:**

* **Task:** Add an event handler to the service items in `ServicesList` to trigger provider selection.
* **Instructions:** When a service is clicked, update the `ProviderDetail` state with the corresponding provider data.

**Fetch Provider Data:**

* **Task:**  Simulate fetching provider data based on the selected service.
* **Instructions:** Use dummy data to populate the `ProviderDetail` component.

**Display Provider Information:**

* **Task:** Display the fetched provider information (name, contact details, description) in `ProviderDetail`.
* **Instructions:** Render the provider details in the template created in Phase 2.

**Phase 6: Styling and Enhancement**

**Objective:**  Style the application and enhance user experience.

**Apply Basic Styling:**

* **Task:**  Use CSS to style the application.
* **Instructions:**  Create a CSS file and apply styles to the components, ensuring consistent layout and visual appeal.

**Enhance User Experience:**

* **Task:** Add loading indicators and error handling to improve the user experience.
* **Instructions:** Display loading states while fetching data and handle potential errors gracefully.

**Final Project Submission:**

**Combine All Phases:** Ensure all components and functionality are working together as expected.

**Code Review and Feedback:** Submit your project for a code review session with peers or the instructor.

**Project Presentation:** Prepare a brief presentation to demonstrate your React application and explain the development process.

**Assessment Criteria:**

* **Functionality:** The application works as expected and meets all the requirements.
* **Code Quality:** The code is clean, well-organized, and follows best practices.
* **Styling:** The application is visually appealing and user-friendly.
* **Understanding:** The student demonstrates a clear understanding of React concepts and can explain their code. 
