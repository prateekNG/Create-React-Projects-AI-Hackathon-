## Project Title: Public Toilet Finder

**Objective:** By the end of this project, students will have created a React application that displays a list of nearby public restrooms, providing users with essential information like location, accessibility features, and cleanliness ratings.

**Phases and Tasks:**

**Phase 1: Setting Up the Development Environment**

**Objective:** Install the necessary tools and set up the project structure.

* **Install Node.js and npm:**
    * **Task:** Install Node.js and npm (Node Package Manager) on your computer.
    * **Resources:** [https://nodejs.org/](https://nodejs.org/) 
* **Create a New React Project:**
    * **Task:** Use create-react-app to bootstrap a new React project.
    * **Instructions:** Open your terminal and run `npx create-react-app public-toilet-finder`.
    * **Resources:** [https://create-react-app.dev/docs/getting-started/](https://create-react-app.dev/docs/getting-started/)
* **Project Structure Overview:**
    * **Task:** Familiarize yourself with the project structure created by create-react-app.
    * **Activity:** Identify and understand the purpose of key files and directories (e.g., `src`, `public`, `package.json`).

**Phase 2: Building the Basic UI Structure**

**Objective:** Create the fundamental layout of the application, including components for displaying the restroom information.

* **Create a Map Component:**
    * **Task:** Create a new component called `Map` to display a map of the user's location.
    * **Instructions:** Use a mapping library (e.g., Google Maps API, Leaflet) to display a map and integrate it into the React component.
    * **Resources:** 
        * Google Maps API: [https://developers.google.com/maps/documentation/javascript/](https://developers.google.com/maps/documentation/javascript/)
        * Leaflet: [https://leafletjs.com/](https://leafletjs.com/)
* **Create a RestroomCard Component:**
    * **Task:** Create a new component called `RestroomCard` to display details about a single restroom.
    * **Instructions:**  This component should include elements for:
        * Restroom name
        * Address
        * Accessibility features (e.g., wheelchair accessible, baby changing station)
        * Cleanliness rating (e.g., stars, user reviews)
        * Distance from the user's location
        * Any additional relevant information (e.g., opening hours, website link).
* **Render Components:**
    * **Task:** Render the `Map` and `RestroomCard` components in the main `App` component.

**Phase 3: Fetching and Displaying Restroom Data**

**Objective:** Implement data fetching and display a list of restrooms on the map.

* **Set up Data Source:**
    * **Task:** Choose a source for restroom data (e.g., public API, local JSON file).
    * **Resources:**
        * Open Data Portals: [https://opendata.cityofnewyork.us/](https://opendata.cityofnewyork.us/) 
        * Public Restroom APIs: [https://www.programmableweb.com/apis/directory/restrooms](https://www.programmableweb.com/apis/directory/restrooms)
* **Fetch Data:**
    * **Task:**  Use the `useEffect` hook to fetch restroom data when the component mounts.
    * **Instructions:** Implement logic to handle data fetching and store the fetched data in the component's state.
* **Display Restrooms on Map:**
    * **Task:** Use the fetched data to place markers on the map representing each restroom.
    * **Instructions:** Use the appropriate map library functions to add markers and display information in infowindows or pop-ups when a marker is clicked.
* **Display Restroom Cards:**
    * **Task:** Dynamically render `RestroomCard` components based on the fetched data.
    * **Instructions:** Use a mapping function to create and display multiple `RestroomCard` components based on the list of restrooms.

**Phase 4: User Interaction and Filters**

**Objective:** Enable users to interact with the application, filtering and searching for restrooms.

* **User Location Retrieval:**
    * **Task:** Implement logic to get the user's current location using the browser's Geolocation API.
    * **Resources:** [https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
* **Search Functionality:**
    * **Task:** Add a search bar for users to input keywords and find restrooms nearby.
    * **Instructions:** Implement search functionality to filter the restrooms based on the search term. 
* **Filtering by Accessibility:**
    * **Task:** Add filter options (e.g., wheelchair accessible, baby changing facilities) to refine the search results.
    * **Instructions:** Implement logic to filter restrooms based on user-selected accessibility features.

**Phase 5: Styling and Enhancements**

**Objective:** Improve the application's appearance and user experience.

* **Styling:**
    * **Task:** Create a CSS file for the application and style the components.
    * **Instructions:** Use CSS to define styles for the map, markers, cards, and other elements.
* **Visual Feedback:**
    * **Task:**  Provide visual feedback to users during data loading and search.
    * **Instructions:**  Use loading spinners or indicators to show data loading progress and highlight search results.
* **Responsive Design:**
    * **Task:** Ensure the application is responsive on different screen sizes.
    * **Instructions:**  Use media queries and CSS frameworks (e.g., Bootstrap, Tailwind CSS) to create a responsive layout.

**Final Project Submission:**

* **Combine All Phases:** Ensure all components and functionality are working together as expected.
* **Code Review and Feedback:** Submit your project for a code review session with peers or the instructor.
* **Project Presentation:** Prepare a brief presentation to demonstrate your React application and explain the development process.

**Assessment Criteria:**

* **Functionality:** The application works as expected and meets all the requirements.
* **Code Quality:** The code is clean, well-organized, and follows best practices.
* **Styling:** The application is visually appealing and user-friendly.
* **Understanding:** The student demonstrates a clear understanding of React concepts and can explain their code.