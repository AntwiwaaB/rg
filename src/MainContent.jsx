import React from 'react'; // Import React library for creating components
import Card from './Card'; // Import Card component
import CustomerTable from './CustomerTable'; // Import CustomerTable component
import Pagination from './Pagination'; // Import Pagination component

// Define the MainContent component
function MainContent() {
    return (
        <div className="p-8"> {/* Main container with padding */}
            <nav className="flex space-x-4 mb-8"> {/* Navigation bar */}
                <a href="#" className="text-gray-500 hover:text-gray-900">Dashboard</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">Statistic</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">Product</a>
                <a href="#" className="text-gray-900 font-bold border-b-2 border-red-500">Customer</a> {/* Active link styled differently */}
                <a href="#" className="text-gray-500 hover:text-gray-900">Review</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">Settings</a>
            </nav>

            <div className="flex justify-between items-center mb-4"> {/* Header for the customer section */}
                <h2 className="text-2xl font-bold">Customer</h2> {/* Section title */}
                <div className="flex items-center"> {/* Container for action buttons */}
                    <i className="border fas fa-download ml-2 mr-2 rounded p-1.5"></i> {/* Download icon */}
                    <div className='border mr-2 rounded p-1.5'> {/* Date display container */}
                        <span className=" "> <strong>{new Date().toLocaleDateString()}</strong></span> {/* Current date */}
                        <i className="fas fa-calendar-alt ml-2"></i> {/* Calendar icon */}
                    </div>
                    <button className="border bg-red-500 text-white p-2 rounded flex items-center ml-4 "> {/* Add Customer button */}
                       Add Customer
                       <i className="fas fa-plus mr-1"></i> {/* Plus icon */}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8"> {/* Grid layout for cards */}
                <Card title="👥 Total Customer" count="470" percentage="3.90%" /> {/* Card component for total customers */}
                <Card title="☎ Team Plan" count="17" percentage="3.90%" /> {/* Card component for team plan */}
                <Card title="💲💲 Basic Plan" count="63" percentage="3.90%" /> {/* Card component for basic plan */}
                <Card title="👤 Pelanggan berhenti" count="4" percentage="2.90%" negative /> {/* Card component for stopped customers */}
            </div>

            <div className="flex justify-between items-center mb-4"> {/* Customer list header */}
                <h3 className="text-xl font-bold">Customer List</h3> {/* List title */}
                <div className="flex items-center space-x-4"> {/* Container for filter buttons and search */}
                    <button className="bg-gray-200 p-2 rounded">All time ⨉</button> {/* Filter button */}
                    <button className="bg-gray-200 p-2 rounded">Team plan ⨉</button> {/* Filter button */}
                    <button className="bg-gray-200 p-2 rounded">Active ⨉</button> {/* Filter button */}
                    <button className="bg-gray-200 p-2 rounded flex items-center space-x-4">
                        <img className="w-4 h-4" src='src/assets/3844475_filter_filters_icon.png' alt="Filter icon" /> {/* Filter icon */}
                        More filters
                    </button>
                    <input type="text" placeholder="⌕ Search" className="bg-gray-200 p-2 rounded" /> {/* Search input */}
                </div>
            </div>

            <CustomerTable /> {/* Component to display customer data in a table */}
            <Pagination /> {/* Component for pagination controls */}
        </div>
    );
}

// Export the MainContent component as the default export
export default MainContent;
