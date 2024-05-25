## Senior Citizen Support Platform: Services and Support Networks for the Elderly 

**Objective:**

By the end of this project, students will have created a React application that displays information about various services and support networks for senior citizens, including features like:

* Listing services categorized by type (e.g., healthcare, transportation, social activities).
* Displaying details about each service, including contact information and eligibility criteria.
* Enabling users to search for services based on keywords or location.
* Integrating a simple map feature to visualize service locations.

**Phases and Tasks:**

**Phase 1: Project Setup and Basic Structure**

**Objective:** Set up the development environment and establish the basic project structure.

* **Install Node.js and npm:**
    * Task: Install Node.js and npm on your computer.
    * Resources: [Node.js Installation Guide](https://nodejs.org/en/download/) 
* **Create a New React Project:**
    * Task: Use create-react-app to create a new React project.
    * Instructions: Open your terminal and run `npx create-react-app senior-citizen-support`.
    * Resources: [create-react-app Documentation](https://create-react-app.dev/)
* **Project Structure Overview:**
    * Task: Familiarize yourself with the project structure created by create-react-app.
    * Activity: Identify and understand the purpose of key files and directories (e.g., `src`, `public`, `package.json`).
* **Basic Layout Components:**
    * Task: Create basic React components for:
        * `Header`: Displays a navigation bar with links to different sections of the platform.
        * `Footer`: Contains copyright information and contact details.
        * `Main`: Represents the main content area of the application.

**Phase 2: Displaying Services Data**

**Objective:** Structure and display data about senior citizen services.

* **Service Data Structure:**
    * Task: Define a data structure for representing services, including properties like:
        * `name`: Name of the service.
        * `category`: Category of the service (e.g., healthcare, transportation, social activities).
        * `description`: Detailed description of the service.
        * `contact`: Contact information (phone number, email, website).
        * `location`: Address or coordinates of the service location.
        * `eligibility`: Eligibility criteria for accessing the service.
* **Create Service Components:**
    * Task: Create two components:
        * `ServiceCard`: Displays basic information about a single service (name, category, short description).
        * `ServiceDetails`: Displays detailed information about a service when clicked (name, category, description, contact, location, eligibility).
* **Displaying Services on the Homepage:**
    * Task: Create a `ServicesList` component to fetch and display a list of `ServiceCard` components on the homepage, grouped by category.
    * Instructions: Use state to store the service data and dynamically render the `ServiceCard` components based on the data.

**Phase 3: Navigation and Search Functionality**

**Objective:** Add navigation and search capabilities to the application.

* **Navigation Links:**
    * Task: Add navigation links in the `Header` component to navigate between different sections (e.g., homepage, about, contact).
    * Instructions: Use `Link` components from `react-router-dom` for seamless navigation between pages.
* **Implementing Search:**
    * Task: Add a search bar to the `Header` component.
    * Instructions: Use state to manage the search query. 
    * Task: Implement filtering of services based on the search query in the `ServicesList` component.
    * Instructions: Filter the service data using the search query and dynamically update the displayed services.

**Phase 4: Map Integration and Service Details**

**Objective:** Integrate a map feature and enhance service details display.

* **Map Integration:**
    * Task: Choose a map library (e.g., `react-leaflet`, `react-google-maps`) and integrate it into the `ServiceDetails` component.
    * Instructions: Display the service location on the map using its coordinates or address. 
* **Displaying Service Details:**
    * Task:  When a user clicks on a `ServiceCard`, navigate to a `ServiceDetails` page using `react-router-dom`.
    * Instructions: Pass the selected service data to the `ServiceDetails` component as a prop.
    * Task: In `ServiceDetails`, display all the detailed information about the selected service using the passed data.

**Phase 5: Additional Features and Styling**

**Objective:** Enhance the application with additional features and styling.

* **Add About Us Page:**
    * Task: Create an "About Us" page to provide information about the platform.
* **Contact Form:**
    * Task: Create a contact form on the "Contact" page.
    * Instructions: Implement form validation and send contact information using a backend service or a third-party library.
* **Styling:**
    * Task: Apply CSS styles to make the application visually appealing and user-friendly.
    * Instructions: Use CSS modules or a CSS-in-JS library (e.g., Styled Components) for styling.
    * Task: Consider accessibility guidelines to ensure the application is usable for people with disabilities.

**Final Project Submission**

* **Code Review and Feedback:** Submit your project for a code review session with peers or the instructor.
* **Project Presentation:** Prepare a brief presentation to demonstrate your React application and explain the development process.

**Assessment Criteria**

* **Functionality:** The application works as expected and meets all the requirements.
* **Code Quality:** The code is clean, well-organized, and follows best practices.
* **UI/UX:** The application is visually appealing, user-friendly, and accessible.
* **Data Management:** Effective handling and display of service data.
* **Understanding:** The student demonstrates a clear understanding of React concepts and can explain their code. 
