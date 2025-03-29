# Free Crypto Tax Calculator for Australia

A simple web application that allows users in Australia to calculate their crypto gains and tax liabilities based on their financial data. This project is designed to make it easier for individuals to estimate their tax obligations when dealing with cryptocurrency investments.

## Table of Contents

-  [Features](#features)
-  [Usage](#usage)
-  [Installation](#installation)

## Features

### Mandatory Features

1. **User Interface**: Implemented the UI as per the provided Figma design, excluding the navbar and footer section.

2. **Dropdowns**: Restricted the financial year and country dropdowns to the values specified in the design.

3. **Calculator Logic**:

   -  Users can enter purchase price, sale price, expenses, investment type, and annual income.
   -  The application calculates gains, tax rate, and taxes based on the following rules:
      -  Tax rate varies based on the annual income according to the provided image.
      -  Capital gains amount is calculated as (Sale Price - Purchase Price - Expenses).
      -  Long-term gains discount is applied if the investment type is "Long Term."
      -  Net capital gains are calculated as (Capital Gains Amount - Discount for Long Term Gains) for "Long Term" investments.
      -  Tax to be paid is calculated based on the provided image.

4. **Example Calculation**:

   -  Provided an example calculation with detailed results for users to understand the process.

      -  Purchase Price = 50
      -  Sale Price = 100
      -  Expenses = 20
      -  Investment Type = Long Term
      -  Annual Income = ($45001 - $120000).

   -  For the above inputs, calculation would be:
      -  Tax Rate = “$5092 + 32.5% of excess over $45000”
      -  Capital Gains Amount = 30
      -  Long Term Capital Gains Discount = 15
      -  Net Capital Gains Amount = 15
      -  Tax you need to pay = 4.875 (which is 32.5% of 15)

5. **GitHub Repository**: Hosted the project on GitHub.

6. **Deployment**: Deployed the project using Vercel.

### Optional Features

1. **FAQ Section**: Implemented an efficient FAQ section with data retrieved from an array.

2. **Responsive Design**: Made the UI responsive by converting rows into a single column for a better user experience on various devices.

## Usage

1. Enter the required financial data: purchase price, sale price, expenses, investment type, and annual income.

2. The application will calculate gains, tax rate, and taxes based on the provided logic.

3. Refer to the example calculation for a better understanding of the process.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/psapkale/placement-module.git

   ```

2. Navigate to the project directory:

   ```bash
   cd KoinX_Crypto_Tax_Calculator-Assignment
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will be accessible at http://localhost:3000 by default.
