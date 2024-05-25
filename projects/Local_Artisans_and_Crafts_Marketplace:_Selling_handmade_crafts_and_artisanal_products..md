## Project Title: Local Artisans and Crafts Marketplace

**Objective:**

By the end of this project, students will have built a basic React application that displays a catalog of artisanal products, allowing users to browse and view details of each item. 

**Phases and Tasks:**

**Phase 1: Setting Up the Development Environment**

**Objective:** Install the necessary tools and set up the project structure.

**Install Node.js and npm:**

**Task:** Install Node.js and npm (Node Package Manager) on your computer.

**Resources:** 
* [Node.js Installation Guide](https://nodejs.org/en/download/)
* [npm Documentation](https://docs.npmjs.com/about-npm)

**Create a New React Project:**

**Task:** Use create-react-app to bootstrap a new React project.

**Instructions:** 
1. Open your terminal.
2. Run `npx create-react-app my-artisan-marketplace`. 
3. Navigate into the project directory: `cd my-artisan-marketplace`. 

**Resources:** 
* [create-react-app Documentation](https://create-react-app.dev/docs/getting-started)

**Project Structure Overview:**

**Task:** Familiarize yourself with the project structure created by create-react-app.

**Activity:** Identify and understand the purpose of key files and directories (e.g., src, public, package.json).

**Phase 2: Building the Product Catalog**

**Objective:** Create components to display a list of artisanal products.

**Create the Product Component:**

**Task:** Build a `Product` component to display information about a single product.

**Instructions:** 
* Create a `Product.js` file within the `src/components` directory.
* The `Product` component should receive product data as props (name, image, description, price).
* Render the product information using appropriate HTML elements (e.g., `img`, `h3`, `p`).

**Create the Product List Component:**

**Task:** Create a `ProductList` component to display a collection of `Product` components.

**Instructions:** 
* Create a `ProductList.js` file within the `src/components` directory.
* Define an array of product data (or fetch product data from an API in later phases).
* Map over the product data array and render a `Product` component for each item.

**Render the Product List:**

**Task:** Display the `ProductList` component in the main `App` component.

**Instructions:** 
* Import the `ProductList` component into `App.js`.
* Render the `ProductList` component within the `App` component.

**Phase 3: Adding Product Details View**

**Objective:** Implement a view to display detailed information about a selected product.

**Create the Product Details Component:**

**Task:** Build a `ProductDetails` component to display detailed information about a specific product.

**Instructions:** 
* Create a `ProductDetails.js` file within the `src/components` directory.
* The `ProductDetails` component should receive the selected product data as a prop.
* Display the product details using relevant HTML elements (e.g., `img`, `h2`, `p`).

**Handle Product Selection:**

**Task:** Add functionality to the `ProductList` to allow users to select a product and navigate to its details view.

**Instructions:** 
* Use a state variable in `ProductList` to track the currently selected product.
* Use a `Link` component (from `react-router-dom`) to navigate to the product details view when a product is clicked.

**Phase 4: Integrating Routing**

**Objective:** Implement routing to navigate between different views in the application.

**Install React Router:**

**Task:** Install the `react-router-dom` package.

**Instructions:** 
1. Open your terminal and run `npm install react-router-dom`.

**Set up Routing:**

**Task:** Configure routing for the `ProductList` and `ProductDetails` views.

**Instructions:** 
* Import the necessary components from `react-router-dom` in `App.js`.
* Use `BrowserRouter`, `Routes`, and `Route` components to define routes for `ProductList` and `ProductDetails`.

**Pass Product Data:**

**Task:** Pass the selected product data to the `ProductDetails` component when navigating to the details view.

**Instructions:** 
* Use the `useParams` hook in `ProductDetails` to access the product ID from the URL.
* Filter the product data array based on the product ID and pass the selected product as a prop to `ProductDetails`.

**Phase 5: Styling the Marketplace**

**Objective:** Style the application to create a visually appealing marketplace.

**Introduce Styling:**

**Task:** Choose a styling approach (CSS, inline styles, CSS-in-JS) and apply basic styles.

**Instructions:** 
* Create a CSS file for the `Product` component.
* Add CSS classes to the elements within `Product`, `ProductList`, and `ProductDetails`.
* Apply styles to create a visually appealing presentation of the product catalog and details.

**Enhance the User Interface:**

**Task:** Improve the layout, typography, and overall design of the marketplace.

**Instructions:** 
* Use CSS to create a consistent visual style for the marketplace.
* Apply styles to buttons, links, headers, and other elements to enhance the user experience.

**Final Project Submission:**

**Combine All Phases:** Ensure all components and functionality are working together as expected.

**Code Review and Feedback:** Submit your project for a code review session with peers or the instructor.

**Project Presentation:** Prepare a brief presentation to demonstrate your React application and explain the development process.

**Assessment Criteria:**

* **Functionality:** The application works as expected and meets all the requirements.
* **Code Quality:** The code is clean, well-organized, and follows best practices.
* **Styling:** The application is visually appealing and user-friendly.
* **Understanding:** The student demonstrates a clear understanding of React concepts and can explain their code. 
