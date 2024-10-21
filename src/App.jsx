import React from 'react'; // Import React library for creating components
import Header from './Header'; // Import the Header component
import MainContent from './MainContent'; // Import the MainContent component
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome for icons

// Define the App component
function App() {
    return (
        <div> {/* The main container for the app */}
            <Header /> {/* Render the Header component */}
            <MainContent /> {/* Render the MainContent component */}
        </div>
    );
}

// Export the App component as the default export
export default App;
