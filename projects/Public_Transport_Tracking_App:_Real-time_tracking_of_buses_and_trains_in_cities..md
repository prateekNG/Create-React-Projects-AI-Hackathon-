## Project Title: Real-Time Public Transport Tracker

**Objective:**

By the end of this project, students will have built a basic React application that displays real-time location data for buses and trains in a city, using a mock API for data retrieval.

**Phases and Tasks:**

**Phase 1: Setting Up the Development Environment**

**Objective:** Install the necessary tools and set up the project structure.

* **Install Node.js and npm:**
    * Task: Install Node.js and npm (Node Package Manager) on your computer.
    * Resources: [https://nodejs.org/](https://nodejs.org/)
* **Create a New React Project:**
    * Task: Use create-react-app to bootstrap a new React project.
    * Instructions: Open your terminal and run `npx create-react-app my-transport-tracker`.
    * Resources: [https://create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started)
* **Project Structure Overview:**
    * Task: Familiarize yourself with the project structure created by create-react-app.
    * Activity: Identify and understand the purpose of key files and directories (e.g., `src`, `public`, `package.json`).

**Phase 2: Building the Basic Application Structure**

**Objective:** Create the core components for displaying transport data and handling user interactions.

* **Create `TransportList` Component:**
    * Task: Create a functional component called `TransportList` to display a list of available buses and trains.
    * Instructions: The component should render an unordered list (`<ul>`) with list items (`<li>`) for each transport vehicle.
    * Activity: Add placeholders for displaying vehicle ID, route, and estimated arrival time.
* **Create `TransportItem` Component:**
    * Task: Create a functional component called `TransportItem` to display individual transport vehicle details.
    * Instructions: The component should receive props for vehicle ID, route, and estimated arrival time, and render them accordingly.
* **Render Components in `App`:**
    * Task: Import `TransportList` and `TransportItem` into `App.js`.
    * Instructions: Render the `TransportList` component in the main `App` component.

**Phase 3: Fetching and Displaying Real-Time Data**

**Objective:** Implement data fetching from a mock API to populate the transport list.

* **Create a Mock API:**
    * Task:  Set up a mock API (using `json-server` or similar) to provide sample data for buses and trains.
    * Instructions: Define a JSON structure for the API response, including vehicle ID, route, and location coordinates.
    * Resources: [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)
* **Fetch Data in `TransportList`:**
    * Task: Add functionality to `TransportList` to fetch data from the mock API.
    * Instructions: Use the `useEffect` hook to make a GET request to the mock API URL when the component mounts.
    * Activity: Store the fetched data in state using `useState` to update the displayed transport list.
* **Display Data in `TransportItem`:**
    * Task: Modify `TransportItem` to display real-time location data from the fetched API response.
    * Instructions: Extract the relevant data from the API response and pass it as props to the `TransportItem` component.

**Phase 4: Integrating Maps and Real-Time Visualization**

**Objective:** Integrate a map component and visualize transport vehicle locations in real-time.

* **Install Map Library:**
    * Task: Choose and install a map library (e.g., `react-leaflet`) for displaying maps in the application.
    * Resources: [https://react-leaflet.js.org/](https://react-leaflet.js.org/)
* **Create `Map` Component:**
    * Task: Create a functional component called `Map` to display the map.
    * Instructions: Initialize the map using the chosen library and set an initial view of the city.
    * Activity: Add markers to the map based on the real-time location data from the API response.
* **Integrate Map with `TransportList`:**
    * Task: Import the `Map` component into `TransportList` and render it alongside the transport list.
    * Instructions: Pass the real-time location data from the fetched API to the `Map` component for marker display.

**Phase 5: Enhancing User Experience**

**Objective:** Improve the user interface and interactions within the application.

* **Add Filters and Sorting:**
    * Task: Implement filtering and sorting functionality for the transport list.
    * Instructions: Allow users to filter vehicles by route or type and sort them by estimated arrival time.
* **Create Search Functionality:**
    * Task: Add a search bar to the application to search for specific vehicles.
    * Instructions: Implement a search function that filters the transport list based on the user's input.
* **Visualize Vehicle Movement:**
    * Task: Add animation to the map markers to visually represent vehicle movement.
    * Instructions: Use the map library's capabilities to smoothly transition markers between locations as new data is received.

**Phase 6: Handling Data Updates and Refresh**

**Objective:** Implement mechanisms for updating transport data and refreshing the application periodically.

* **Implement Data Polling:**
    * Task: Set up a mechanism to periodically fetch updated data from the mock API.
    * Instructions: Use `setInterval` or similar to make repeated API calls at regular intervals.
    * Activity: Update the state with the new data and trigger a re-render of the components to reflect the changes.
* **Handle Data Errors:**
    * Task: Add error handling for API requests to handle potential network issues or server errors.
    * Instructions: Display error messages to the user if API calls fail or return unexpected responses.
* **Implement Caching:**
    * Task: Implement caching mechanisms to optimize data fetching and reduce API calls.
    * Instructions: Store data locally (e.g., in browser storage) to minimize requests and improve performance.

**Final Project Submission**

* **Combine All Phases:** Ensure all components and functionality are working together as expected.
* **Code Review and Feedback:** Submit your project for a code review session with peers or the instructor.
* **Project Presentation:** Prepare a brief presentation to demonstrate your React application and explain the development process.

**Assessment Criteria**

* **Functionality:** The application works as expected and meets all the requirements.
* **Code Quality:** The code is clean, well-organized, and follows best practices.
* **UI/UX:** The application is visually appealing and user-friendly.
* **Data Handling:** The application efficiently fetches, updates, and displays real-time data.
* **Understanding:** The student demonstrates a clear understanding of React concepts and can explain their code.

This scaffolded project guide helps students learn React by building a practical and engaging application that incorporates real-time data, maps, and user interactions. The project provides a structured approach to learning React fundamentals and helps students gain confidence in creating interactive web applications.