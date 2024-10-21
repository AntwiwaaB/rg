import React from 'react'; // Import React library for creating components

// Define the Card component that takes in props: title, count, percentage, and negative
function Card({ title, count, percentage, negative }) {
    return (
        <div className="bg-white p-4 rounded shadow"> {/* Main card container with background, padding, rounded corners, and shadow */}
            <h4 className="text-gray-500">{title}</h4> {/* Title of the card with gray text */}

            <div className="flex items-center"> {/* Flex container for count and percentage */}
                <span className="text-2xl font-bold mr-2">{count}</span> {/* Count displayed in larger, bold font with right margin */}
                
                <span className={`text-sm ${negative ? 'text-red-500 bg-red-100 border border-red-500 p-1 mr-2' 
                    : 'text-green-500 bg-green-100 border border-green-500 p-1 mr-2'}`}>
                    {percentage} {/* Percentage with conditional styling based on the 'negative' prop */}
                </span>

                <span className="text-black">from last week</span> {/* Static text indicating the context of the percentage */}
            </div>
        </div>
    );
}

// Export the Card component as the default export
export default Card;
