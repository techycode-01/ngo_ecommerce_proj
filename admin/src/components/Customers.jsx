import React from 'react';

const Customers = () => {
  const customerData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', contact: '1234567890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', contact: '9876543210' },
    { id: 3, name: 'Sam Wilson', email: 'sam@example.com', contact: '5554443333' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Customers</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border">Sr No</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Contact</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((customer, index) => (
            <tr key={customer.id} className="text-center">
              <td className="py-2 px-4 border">{index + 1}</td>
              <td className="py-2 px-4 border">{customer.name}</td>
              <td className="py-2 px-4 border">{customer.email}</td>
              <td className="py-2 px-4 border">{customer.contact}</td>
              <td className="py-2 px-4 border space-x-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                  View
                </button>
                <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
