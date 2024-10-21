import React from 'react'; // Import React library for creating components

// Define the Pagination component
function Pagination() {
    return (
        <div className="flex justify-between items-center mt-4"> {/* Container for pagination controls with spacing */}
            <div>
                Result per page: {/* Label for the results per page selection */}
                <select className="bg-gray-200 p-2 rounded"> {/* Dropdown for selecting number of results per page */}
                    <option>6</option> {/* Option for 6 results */}
                    <option>12</option> {/* Option for 12 results */}
                    <option>24</option> {/* Option for 24 results */}
                </select>
            </div>
            <div className="flex items-center space-x-2"> {/* Container for pagination buttons with spacing between them */}
                <button className="bg-gray-200 p-2 rounded">Previous</button> {/* Button for going to the previous page */}
                <button className="bg-red-500 text-white p-2 rounded">1</button> {/* Active page button (1) styled differently */}
                <button className="bg-gray-200 p-2 rounded">2</button> {/* Button for page 2 */}
                <button className="bg-gray-200 p-2 rounded">3</button> {/* Button for page 3 */}
                <span>...</span> {/* Ellipsis indicating more pages are available */}
                <button className="bg-gray-200 p-2 rounded">8</button> {/* Button for page 8 */}
                <button className="bg-gray-200 p-2 rounded">9</button> {/* Button for page 9 */}
                <button className="bg-gray-200 p-2 rounded">Next</button> {/* Button for going to the next page */}
            </div>
        </div>
    );
}

// Export the Pagination component as the default export
export default Pagination;
