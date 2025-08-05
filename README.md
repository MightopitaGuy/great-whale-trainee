# Segundo AI Superday Dev Test -- ENGLISH

## Overview

This is an e-commerce application built with Next.js, React, and SQLite. The app displays a list of products with their details and provides various functionalities for browsing and managing items.

Read the instructions carefully

## Tech Stack

- **Frontend**: Next.js 15.4.5, React 19.1.0, TypeScript
- **Backend**: Next.js API Routes
- **Database**: SQLite with sqlite3 driver
- **Styling**: CSS Modules
- **Image Optimization**: Next.js Image component

## Considerations

- Styles are not part of the test, they can be safely ignored.
- API and DB as well are not part of the test, they should work and are to be ignored.
- Always speak your mind about your work, we would like to know your thought process, make sure the interviewer is aware of what you are thinking and doing all the time.
- Before writing code make sure to propperly understand, and also be capable of explaining:
  - **The requirements**
  - **The data structure to use**
  - **The implementation**
  - **The pseudocode**

## Evaluation Criteria

The interviewer will evaluate:

1. **Code Understanding**: Ability to analyze and explain the existing codebase
2. **Debugging Skills**: Systematic approach to identifying and fixing issues
3. **Planning**: Thorough discussion of requirements before implementation
4. **Implementation**: Clean, maintainable code with proper error handling
5. **User Experience**: Consideration of UX in feature implementation
6. **Documentation**: Clear explanation of decisions and approaches

## Submission Guidelines

Once the test is completed, you must submit the code to the repo in a branch containing your name, for example

`git checkout -b encino-lopez`

## Tips for Success

- **Start with exploration**: Understand the codebase thoroughly before making changes
- **Plan before coding**: Discuss requirements and approaches with the interviewer
- **Test incrementally**: Verify each feature works before moving to the next
- **Consider edge cases**: Handle error states and empty data scenarios
- **Focus on UX**: Make the application user-friendly and intuitive
- **Document decisions**: Explain why you chose specific approaches

## Recomended documentation

- [Next Image](https://nextjs.org/docs/pages/api-reference/components/image)
- [Next Config](https://nextjs.org/docs/app/api-reference/config/next-config-js)
- [React](https://react.dev/learn)
- [Typescript Cheat-sheet](https://www.typescriptlang.org/cheatsheets/)
- [Javascript Cheat-sheet](https://htmlcheatsheet.com/js/)

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser and navigate to:** [http://localhost:3000](http://localhost:3000)

## Dev Test Tasks

### 1. Code Exploration and Understanding

- **Objective**: Explore the codebase and understand how the application functions.

### 2. Debugging the Main Page

- **Objective**: The main page is misconfigured and won't work. Identify and fix the issue.

### 3. Product Data Analysis

- **Objective**: Explore the available product fields and determine what information would be pertinent to display.

### 4. Image Implementation

- **Objective**: Add product images using the Next.js Image component. Also skim the documentation, and explain the advantages and disadvantages of `next/image` over the `img` tag

### 5. Price Formatting

- **Objective**: Format product prices to Mexican Peso (MXN) currency. No hardcoding or playing with the substring or regex, find the propper library and way to do it.

### 6. Cart Functionality

- **Objective**: Implement a shopping cart feature, remember to discuss the requirements, data structure, implementation and pseudocode to the interviewer before writing a single line of code.

### 7. Extra Features

#### 7.1 Cart Sidebar

- **Objective**: Create a sidebar to display cart items with proper UI/HTML coding.

#### 7.2 Price Filtering

- **Objective**: Allow users to filter products by price range.

#### 7.3 Product Search

- **Objective**: Implement search functionality to find products by name.

## Good luck with your development test
