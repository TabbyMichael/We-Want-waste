# We Want Waste - "Choose Your Skip Size" Page Redesign

## Project Overview

This project involved a comprehensive redesign of the "choose your skip size" page for wewantwaste.co.uk. The core goal was to deliver a completely fresh and modern user interface (UI) while ensuring all existing functionality remained intact and enhancing the overall user experience (UX). The redesigned page fetches and displays skip options from a live API endpoint.

Here's a glimpse of the redesigned "Choose Your Skip Size" page:

**Light Mode:**
![Redesigned Skip Page - Light Mode](./public/assets/redesign-screenshot.png)

**Dark Mode:**
![Redesigned Skip Page - Dark Mode](./public/assets/Dark%20mode.png)

## 1. Understanding the Target Page

Before diving into the redesign, a thorough analysis of the original "choose your skip size" page was conducted. This involved:
1. Navigating to [wewantwaste.co.uk](https://wewantwaste.co.uk/).
2. Entering the postcode `LE10 1SH`.
3. Selecting an address and "garden waste" as the waste type.
This allowed for a clear understanding of the existing user flow, information architecture, and core functionalities that needed to be preserved.

## 2. Redesign Approach & UI/UX Philosophy

My approach to the redesign was guided by the following principles:

### 2.1. A Completely Different Look & Feel
The primary objective was to create a visually distinct and modern interface, moving away entirely from the original design. I aimed for a **clean, modern, and user-friendly** aesthetic, focusing on clarity and intuitive interaction. This involved:
*   **New Color Palette:** Utilized a professional and accessible color palette, with a primary color (e.g., a calming blue or green) for calls to action and key elements, complemented by neutral tones for background and text, ensuring high contrast and readability.
*   **Modern Typography:** Selected clear, legible sans-serif fonts (e.g., Open Sans, Lato, or Roboto) for headings and body text to enhance readability across devices.
*   **Updated Iconography & Imagery:** Introduced minimalist and universally understandable icons to support visual communication. Where appropriate, subtle illustrative elements were considered to make skip options more engaging.
*   **Layout Overhaul:** Reimagined the layout using a responsive card-based system for displaying skip options. Each card clearly presents skip details, making it easy for users to compare and select. The overall page structure prioritizes a logical flow and visual hierarchy.

### 2.2. Clean, Maintainable React Code
The application was built using React, adhering to best practices for writing clean, maintainable, and efficient code:
*   **Component-Based Architecture:** The UI was broken down into reusable, modular components (e.g., `SkipCard`, `SkipSelector`, `LoadingSpinner`, `Header`, `Footer`). This promotes separation of concerns and easier maintenance.
*   **Functional Components & Hooks:** Leveraged functional components and React Hooks (`useState`, `useEffect`, `useContext` for theme or shared state if applicable, and custom hooks like `useSkips` for data fetching logic) for state management and side effects.
*   **Clear Props and State Management:** Ensured a unidirectional data flow with clearly defined props for component communication. Local component state was managed with `useState`, and shared state was handled efficiently.
*   **TypeScript:** Utilized TypeScript for static typing throughout the `src` directory, improving code quality, developer experience through better autocompletion and error checking, and reducing runtime errors.

### 2.3. Responsiveness
Ensuring a seamless experience across all devices was a top priority:
*   **Mobile-First Approach:** Designed with a mobile-first methodology, ensuring the core experience is optimized for smaller screens before scaling up to tablet and desktop views.
*   **CSS Flexbox/Grid:** Utilized modern CSS layout techniques like Flexbox and Grid extensively to create fluid, adaptive, and complex layouts that adjust gracefully to different screen sizes.
*   **Media Queries:** Implemented well-defined media queries to apply specific styles for various breakpoints (e.g., mobile, tablet, desktop), ensuring optimal readability, usability, and visual appeal on all devices.
*   **Viewport Units & Relative Sizing:** Used relative units (e.g., `rem`, `em`, `%`, `vw/vh`) for typography, spacing, and layout dimensions where appropriate to allow elements to scale proportionally with the viewport or root font size.

### 2.4. UI/UX Improvements
Beyond aesthetics, several improvements were made to enhance the user experience:
*   **Clearer Information Hierarchy:** Restructured the presentation of skip details (size, price, dimensions, capacity, suitability) on each skip card to be more prominent, scannable, and easier to digest at a glance.
*   **Intuitive Selection Process:** Redesigned the skip selection mechanism to be more interactive, providing clear visual feedback (e.g., highlighting, border changes) upon selection and making the chosen skip obvious.
*   **Improved Calls to Action (CTAs):** Ensured CTAs like "Select Skip" or "Proceed to Checkout" are visually distinct, consistently placed, and clearly communicate the next step.
*   **Loading States & Feedback:** Implemented loading indicators (e.g., spinners or skeleton screens) while fetching API data to keep the user informed and reduce perceived wait times. User-friendly error messages are displayed if API calls fail.
*   **Accessibility Considerations (A11y):** Kept basic accessibility in mind, including semantic HTML structure, sufficient color contrast ratios, keyboard navigability for interactive elements, and ARIA attributes where necessary, aiming for WCAG AA compliance as a baseline.

### 2.5. Detailed Design Transformation: Original vs. Redesign

The redesigned "Choose Your Skip Size" page offers a stark contrast to the original, focusing on a modern aesthetic and enhanced user experience.

**Overall Transformation:**

*   **Theme:** The most significant change is the shift from the original's light theme to a **sleek, modern dark theme** in the primary redesign (with a consistent light theme variant also available). This immediately gives the page a completely different and more contemporary feel.
*   **Layout:**
    *   **Original:** Featured a standard grid layout for skip options.
    *   **Redesign:** Employs a **clean, card-based layout** with distinct, well-spaced cards for each skip. This creates a more organized and visually appealing presentation. Screenshots indicate a responsive 3-column layout for wider screens, adapting gracefully to other viewports.
*   **Color Palette:**
    *   **Original:** Predominantly light background, yellow skip images, and dark text.
    *   **Redesign (Dark Mode):** Utilizes a dark gray/charcoal background (e.g., `#1f2937`), with light-colored text for optimal contrast. A vibrant **blue (e.g., `#3b82f6`) serves as a primary accent color** for buttons, selected states, and skip size indicators, establishing a strong visual hierarchy.
    *   **Redesign (Light Mode):** Features a clean light gray/white background with dark text, maintaining the vibrant blue accent for consistency across themes.
*   **Typography:**
    *   **Original:** Used standard web fonts.
    *   **Redesign:** Employs **crisp, modern sans-serif fonts** (e.g., Open Sans, Lato, Roboto as suggested in technical choices) chosen for high readability on both dark and light backgrounds.

**Specific Element Changes:**

*   **Skip Cards:**
    *   **Original:** Simple rectangular areas housing skip images, basic details, and a "Select This Skip" button.
    *   **Redesign:**
        *   **Visuals:** Cards possess a modern aesthetic with rounded corners and clear visual separation.
        *   **Skip Images:** Skip images are presented as **stylized or illustrative representations**, contributing to the unique and consistent look, moving away from photorealism.
        *   **Information Display:**
            *   The **skip size (e.g., "4 Yards", "5 Yards")** is prominently displayed, often highlighted with the blue accent color (e.g., as a badge/tag at the top of the card).
            *   Key details like "Yard Skip," "14 day hire period," and the **price (e.g., "£211")** are clearly legible, with the price given significant prominence.
            *   The "Not Allowed On The Road" feature is clearly indicated where applicable, integrated seamlessly into the new design.
        *   **Buttons:** "Select This Skip" buttons are styled with the blue accent color, making them unambiguous calls to action.
        *   **Selected State:** The "Selected" state for a skip is visually distinct, typically by altering the button's appearance (e.g., filled blue style) and potentially the card's border, ensuring the user's choice is obvious.
*   **Background & Atmosphere:**
    *   **Original:** A plain, functional light background.
    *   **Redesign:** The dark theme option creates a more focused, immersive, and premium browsing experience. The light theme offers a clean, airy, and equally modern alternative.
*   **Responsiveness:**
    *   The card-based layout is inherently well-suited for adaptation across various screen sizes, aligning with the documented mobile-first approach and use of modern CSS techniques.

In essence, the redesign successfully achieves a "completely different look" by strategically overhauling the theme, layout, color scheme, typography, and visual representation of skip options, all while aiming to improve usability and aesthetic appeal.

## 3. Maintaining Functionality

A key requirement was to preserve all existing functionalities of the original page. The redesigned page ensures that users can still:
*   View all available skip options fetched from the API.
*   Clearly see details for each skip: size, price (VAT-inclusive), dimensions, capacity, and recommended use cases.
*   Select a skip size.
*   Proceed with their selected skip (the mechanism for proceeding, e.g., adding to a basket or moving to the next step, is maintained).
All interactive elements, while visually updated, retain their original operational logic and purpose.

## 4. Data Population via API

The skip options are dynamically populated using data fetched from the specified API endpoint:
`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`

*   **Data Fetching:** Utilized the `fetch` API (or a library like `axios`) within a `useEffect` hook in a custom hook (e.g., `useSkips.ts`) or a dedicated data-fetching service. This ensures data is retrieved when the component mounts or when relevant dependencies (like postcode) change.
*   **State Management for Data:** Stored the fetched skip data, loading status, and any potential errors in the component's state using `useState` (and `useReducer` for more complex state logic if needed).
*   **Dynamic Rendering:** Mapped over the array of fetched skip data to render individual `SkipCard` components, passing down skip details as props.
*   **Error Handling:** Implemented robust error handling to manage scenarios where the API call might fail, return empty data, or result in network issues. User-friendly messages guide the user in such cases.

## 5. Technical Stack

*   **Frontend Library/Framework:** React (v18+)
*   **Language:** TypeScript
*   **Styling:** CSS Modules (for scoped styling) with SCSS (for advanced CSS features like variables, nesting, and mixins). Alternatively, Styled Components or Tailwind CSS could be used.
*   **API Interaction:** Native `fetch` API or `axios` library.
*   **State Management:** React Hooks (`useState`, `useEffect`, `useContext`). For more complex global state, React Context API or libraries like Zustand/Redux Toolkit could be considered.
*   **Routing:** React Router (if multiple views were part of the scope, though this page is specific).
*   **Build Tool:** Create React App (CRA) or Vite.

## 6. Setup and Running the Project (Locally)

To run this project locally:
1.  Clone the repository:
    ```bash
    git clone https://github.com/TabbyMichael/We-Want-waste.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd We-Want-waste
    ```
3.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
4.  Start the local development server:
    ```bash
    npm run dev
    # or
    yarn run dev
    ```
5.  Open your browser and navigate to `http://localhost:5173` (or the port specified by your setup, e.g., Vite usually uses `http://localhost:5173`).

## 7. Live Sandbox Link

A live, testable version of the redesigned page can be accessed here:
[**Your Sandbox Link - e.g., CodeSandbox, StackBlitz, Repl.it - Please update this!**]

## 8. Challenges Faced & Solutions (Optional but Recommended)

*   **Challenge:** Integrating the live API and handling its data structure effectively within the new component design.
    **Solution:** Carefully analyzed the API response, created TypeScript interfaces for the data, and developed a flexible `SkipCard` component to display the information. Implemented asynchronous data fetching with proper loading and error states.
*   **Challenge:** Ensuring consistent responsiveness across a diverse range of screen sizes and devices, particularly for the card layout.
    **Solution:** Adopted a mobile-first CSS strategy, extensively used CSS Grid and Flexbox for layout, and performed thorough testing using browser developer tools and emulators. Iteratively refined media query breakpoints.
*   **Challenge:** Balancing a "completely different look" with established UX patterns for e-commerce/selection pages to maintain intuitiveness.
    **Solution:** Researched modern e-commerce UI trends and focused on clear visual cues for selection, pricing, and calls to action, while innovating on the overall aesthetic and layout.

## 9. Future Improvements (Optional)

*   **Advanced Filtering/Sorting:** Implement options to filter skips by size, price range, or specific features, and sort them accordingly.
*   **Unit & Integration Testing:** Increase test coverage using libraries like Jest and React Testing Library to ensure component reliability and prevent regressions.
*   **Accessibility Audit & Enhancements:** Conduct a thorough accessibility audit (e.g., using tools like Axe) and implement further improvements to meet WCAG 2.1 AA or AAA standards.
*   **Performance Optimization:** Further optimize image loading (e.g., using next-gen formats like WebP, lazy loading) and code splitting to improve initial page load times.
*   **State Management Refinement:** If the application grows, consider integrating a more robust global state management solution like Redux Toolkit or Zustand for better scalability.

---

This README aims to provide a comprehensive overview of the project, my design and development process, and the technical implementation details.
