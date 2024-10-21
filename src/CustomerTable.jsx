import React from 'react'; // Import React library for creating components

// Sample customer data
const customers = [
    { name: "Caden Morse", email: "raines@live.com", date: "JUNE, 12 2023", plan: "TEAM", amount: "$5,000/year", users: "10 Users" },
    { name: "Santino Marsh", email: "whimsy@comcast.net", date: "JUNE, 12 2023", plan: "TEAM", amount: "$19,000/year", users: "44 Users" },
    { name: "Kristin Zavala", email: "garyjb@csglobal.net", date: "JUNE, 12 2023", plan: "TEAM", amount: "$14,000/year", users: "32 Users" },
    { name: "Kristin Williams", email: "evans@me.com", date: "JUNE, 12 2023", plan: "TEAM", amount: "$5,700/year", users: "12 Users" },
    { name: "Cannon Paul", email: "grothoff@icloud.com", date: "JUNE, 12 2023", plan: "TEAM", amount: "$7,200/year", users: "18 Users" },
    { name: "Marlee Merritt", email: "fitzchicklo@yahoo.ca", date: "JUNE, 12 2023", plan: "TEAM", amount: "$13,800/year", users: "30 Users" },
];

// Define the CustomerTable component
function CustomerTable() {
    return (
        <table className="min-w-full border border-gray-300"> {/* Table with minimum width and border */}
            <thead>
                <tr className="bg-gray-200"> {/* Table header row with background color */}
                    <th className="px-4 py-2 border">FULL NAME - MAIL</th> {/* Header for Full Name and Email */}
                    <th className="px-4 py-2 border">BILLING DATE ⇅</th> {/* Header for Billing Date */}
                    <th className="px-4 py-2 border">PLAN</th> {/* Header for Plan */}
                    <th className="px-4 py-2 border">AMOUNT</th> {/* Header for Amount */}
                    <th className="px-4 py-2 border">TOTAL USERS</th> {/* Header for Total Users */}
                    <th className="px-4 py-2 border">DETAILS</th> {/* Header for Details */}
                    <th className="px-4 py-2 border"></th> {/* Empty header for future use */}
                </tr>
            </thead>
            <tbody>
                {customers.map((customer, index) => ( // Map through customers array to generate table rows
                    <tr key={index} className="hover:bg-gray-100"> {/* Table row with hover effect */}
                        <td className="px-4 py-2 border"> {/* Cell for Full Name and Email */}
                            <div className='font-bold'>{customer.name}</div> {/* Customer's name in bold */}
                            <div className="text-gray-500">{customer.email}</div> {/* Customer's email in gray */}
                        </td>
                        <td className="px-4 py-2 border">{customer.date}</td> {/* Cell for Billing Date */}
                        <td className="px-4 py-2 border"> {/* Cell for Plan */}
                            <span className="inline-block px-2 py-1 border rounded-full text-center">{customer.plan}</span> {/* Plan displayed with styling */}
                        </td>
                        <td className="px-4 py-2 border">{customer.amount}</td> {/* Cell for Amount */}
                        <td className="px-4 py-2 border">{customer.users}</td> {/* Cell for Total Users */}
                        <td className="px-4 py-2 border flex items-center space-x-1"> {/* Cell for Details link */}
                            <a href="#" className="underline text-blue-500">View Detail</a> {/* Link to view details */}
                        </td>
                        <td className="px-4 py-2 border"> {/* Cell for ellipsis icon */}
                            <i className="fas fa-ellipsis-h cursor-pointer"></i> {/* Ellipsis icon for more options */}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

// Export the CustomerTable component as the default export
export default CustomerTable;
