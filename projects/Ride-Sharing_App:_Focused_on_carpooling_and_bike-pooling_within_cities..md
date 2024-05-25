## Ride-Sharing App: Carpooling & Bike-Pooling

**Project Title:** Ride-Sharing App: Connecting Riders and Drivers

**Objective:** By the end of this project, students will create a functional React application that allows users to find or offer rides within a city, focusing on carpooling and bike-pooling.

**Phases and Tasks:**

**Phase 1: Setting Up the Development Environment**

**Objective:** Set up a React project and familiarize yourself with the basic project structure.

* **Install Node.js and npm:**
    * Task: Download and install Node.js from the official website.
    * Resources: [https://nodejs.org/](https://nodejs.org/)
* **Create a New React Project:**
    * Task: Use create-react-app to create a new React project.
    * Instructions: Open your terminal and run `npx create-react-app ride-sharing-app`.
    * Resources: [https://create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started)
* **Project Structure Overview:**
    * Task: Explore the project structure, understanding the purpose of key files and directories (e.g., `src`, `public`, `package.json`).

**Phase 2: Basic App Structure and Components**

**Objective:** Create the basic structure of the application with essential components.

* **App Component:**
    * Task: Create a main `App` component that acts as the root of your application.
    * Instructions: Inside `src/App.js`, create a functional component that returns a basic structure with a header, navigation, and a placeholder for content.
* **Navigation Component:**
    * Task: Create a `Navigation` component to handle navigation between different sections of the app.
    * Instructions: Define a functional component that returns a navigation bar with links for 'Find Ride', 'Offer Ride', and 'About Us'.
* **Placeholder Components for Content:**
    * Task: Create placeholder components for 'Find Ride', 'Offer Ride', and 'About Us' sections.
    * Instructions: Define functional components that simply display text labels like "Find Ride Section" or "Offer Ride Section" for now.

**Phase 3:  Displaying Ride Offers (Find Ride)**

**Objective:** Implement the 'Find Ride' section to display available rides.

* **Ride Data:**
    * Task: Create a temporary array of ride objects to represent available rides. Each object should have properties like `startLocation`, `destination`, `rideType` (carpool or bikepool), `time`, and `driverName`.
    * Instructions: Create an array of ride objects directly in the `FindRide` component for now.
* **Ride List Component:**
    * Task: Create a `RideList` component to display the list of rides.
    * Instructions: This component should accept an array of ride objects as props and iterate through them, displaying key details of each ride in a list format.
* **Ride Card Component:**
    * Task: Create a `RideCard` component to display the information for a single ride.
    * Instructions: This component should take a ride object as a prop and display the details of the ride in a visually appealing way, including information like location, ride type, time, and driver name.

**Phase 4: Adding Ride Offers (Offer Ride)**

**Objective:** Implement the 'Offer Ride' section for users to add new rides.

* **Ride Form Component:**
    * Task: Create a `RideForm` component for users to fill in details about their ride offer.
    * Instructions: Use form elements like input fields, dropdown menus, and date/time pickers for users to input information about their start location, destination, ride type, time, and driver name.
* **State Management for Ride Form:**
    * Task: Use React's `useState` hook to manage the values entered in the form.
    * Instructions: Store the form data in the component's state and update it whenever the user interacts with the form.
* **Submitting a Ride Offer:**
    * Task: Implement a submit button for the form that adds the new ride to the list of available rides.
    * Instructions: When the submit button is clicked, create a new ride object using the form data, add it to the ride array, and update the state. 

**Phase 5:  Styling the Application**

**Objective:** Apply styles to enhance the visual appearance of the application.

* **CSS Styling:**
    * Task: Create a CSS file (e.g., `App.css`) and import it into your `App` component.
    * Instructions: Apply styles to various components to make the application visually appealing and user-friendly.
    * Activity: Style the navigation bar, ride cards, form elements, and other sections as needed.

**Phase 6: Additional Functionality**

**Objective:** Add optional features to enhance the app's functionality.

* **User Authentication:**
    * Task: Implement basic user authentication (login and registration) using a library like Firebase.
    * Resources: [https://firebase.google.com/docs/auth](https://firebase.google.com/docs/auth)
* **Ride Filtering:**
    * Task: Add filters to the 'Find Ride' section to allow users to search for rides based on criteria like location, ride type, or time.
    * Instructions: Use dropdown menus or input fields to allow users to filter the list of rides.
* **Ride Communication:**
    * Task: Implement a feature for riders to contact drivers or vice versa, potentially using email, chat, or messaging service integration.

**Final Project Submission:**

* **Combine All Phases:** Ensure all components and functionality are working together.
* **Code Review:** Submit your project for a code review session with peers or the instructor.
* **Project Presentation:** Prepare a brief presentation to demonstrate your application and explain the development process.

**Assessment Criteria:**

* **Functionality:** The application works as expected and meets the project requirements.
* **Code Quality:** The code is clean, well-organized, and follows best practices.
* **User Interface:** The application has a visually appealing and user-friendly interface.
* **Understanding:** Students demonstrate a clear understanding of React concepts and can explain their code.

This scaffolded project provides a framework for students to learn React while building a practical ride-sharing application. They can choose to implement optional features based on their skill level and time constraints. 
