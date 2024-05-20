# Reusable Alert Component Documentation

## Overview

The Alert component is a versatile UI element designed to display different types of alerts, including default, info, warning, error, and success messages. It supports customization through props for type, icon, title, description, and custom content, making it a highly adaptable component for various alert scenarios.

## Features

### 1. Reusable Alert Component

- **Flexible Design**: The Alert component can display a variety of alert messages by accepting different props.
- **Customizable**: Props allow customization of the alert type, icon, title, description, and content.
- **Types of Alerts**: Supports multiple alert types such as default, info, warning, error, and success.

### 2. Dynamic Styling with SCSS

- **Custom SCSS Styles**: The component applies specific styles based on the alert type using SCSS.
- **Consistency and Maintainability**: Utilizes SCSS variables and mixins to ensure consistent styling across different alert types.
- **Styling Attributes**: Styles include background, border, and text colors specific to each alert type.

### 3. Type Safety with TypeScript

- **Type Enforcement**: The component uses TypeScript to enforce type safety, particularly for the type prop.
- **Predefined Types**: The type prop is restricted to predefined alert types, enhancing code reliability.
- **Error Reduction**: TypeScript reduces the likelihood of runtime errors by ensuring props are correctly typed.

### 4. Example Implementations in App Component

- **Demonstrations**: The App component includes multiple instances of the Alert component.
- **Versatility Showcase**: Examples illustrate various alert types with different icons, titles, descriptions, and custom content.

## Installation

To use the Alert component in your project, install the necessary dependencies and import the component.
```js
 yarn install
 yarn run dev