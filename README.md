# Age Calculator

This is a simple Age Calculator web application built using React and Tailwind CSS. The app allows users to input their birthdate (day, month, year), and it calculates their exact age in terms of years, months, and days.
Features

    Users can input their birth day, month, and year.
    The app calculates the age based on the current date.
    Displays results in years, months, and days.
    Shows a loading spinner while calculating the age.
    Basic input validation for day, month, and year.
    Responsive design using Tailwind CSS.

Demo

You can see the deployed version of the app on GitHub Pages:


Technologies Used

    React: Frontend library for building the user interface.
    Tailwind CSS: Utility-first CSS framework for styling the app.
    JavaScript: Core logic for calculating age and form validation.

Installation

To run this project locally, follow these steps:

    Clone the repository:

    bash

git clone https://github.com/your-github-username/age-calculator.git

Navigate to the project folder:

bash

cd age-calculator

Install the dependencies:

bash

npm install

Start the development server:

bash

    npm start

    The app should now be running at http://localhost:3000.

Usage

    Enter your birth date in the form (day, month, year).
    Click the "Calculate Age" button.
    Your age will be displayed in years, months, and days after the calculation.

Validations

    The day input should be between 1 and the number of days in the selected month (auto-validates based on leap years).
    The month input should be between 1 and 12.
    The year input should be between 1900 and the current year.