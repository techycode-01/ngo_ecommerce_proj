import React from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaCcVisa,
  FaSignOutAlt
} from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 text-2xl font-bold text-blue-600 border-b border-gray-200">
          Ecommerce
        </div>

        <nav className="mt-4 flex flex-col space-y-2 px-4">
          <Link
            to="/"
            className="flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition"
          >
            <FaTachometerAlt className="mr-3" />
            Dashboard
          </Link>
          <Link
            to="/customers"
            className="flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition"
          >
            <FaUsers className="mr-3" />
            Customers
          </Link>
          <Link
            to="/products"
            className="flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition"
          >
            <FaBoxOpen className="mr-3" />
            Products
          </Link>
          <Link
            to="#"
            className="flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition"
          >
            <FaShoppingCart className="mr-3" />
            Orders
          </Link>
          <Link
            to="#"
            className="flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition"
          >
            <FaCcVisa className="mr-3" />
            Payments
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-700 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-md transition w-full text-left"
          >
            <FaSignOutAlt className="mr-3" />
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="p-8 flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
