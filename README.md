
```markdown
# My Bored App

My Bored App is a simple web application built with Vite, ReactJS, and the Bored API. It suggests fun activities for users when they're feeling bored.

## Features

- Fetch random activities from the Bored API
- Display the suggested activity on the web page
- Refresh the activity by clicking a button

## Technologies Used

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Bored API](https://www.boredapi.com/) - API for generating random activities

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version 14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/my-bored-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd my-bored-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Development Server

To start the development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Production Build

To create a production build, run:

```bash
npm run build
```

The optimized build files will be created in the `dist` directory.

## Project Structure

The project follows the Model-View-Controller (MVC) architecture pattern:

- **Models**: Contains the data models and API integration logic (`src/models`)
- **Views**: Contains the React components for rendering the user interface (`src/views`)
- **Controllers**: Contains the main application component that manages the application logic (`src/controllers`)

