import React, { useState } from 'react';
import AddProduct from './AddProduct'; // import the overlay component

const Products = () => {
    const [showAddForm, setShowAddForm] = useState(false);

    const productData = [
        {
            id: 1,
            title: 'Running T-Shirt',
            sku: 'APP001',
            category: 'Apparel',
            description: 'Breathable running t-shirt for men and women.',
            price: 1999,
            stock: 15
        },
        {
            id: 2,
            title: 'Protein Powder',
            sku: 'NUTR002',
            category: 'Nutrition',
            description: 'Whey protein powder with vanilla flavor.',
            price: 3999,
            stock: 20
        },
        {
            id: 3,
            title: 'Yoga Mat',
            sku: 'EQP003',
            category: 'Equipment',
            description: 'Non-slip yoga mat with extra cushioning.',
            price: 2499,
            stock: 45
        },
        {
            id: 4,
            title: 'Compression Shorts',
            sku: 'APP004',
            category: 'Apparel',
            description: 'Moisture-wicking compression shorts for workouts.',
            price: 1499,
            stock: 35
        },
        {
            id: 5,
            title: 'Creatine Monohydrate',
            sku: 'NUTR005',
            category: 'Nutrition',
            description: 'Micronized creatine for muscle strength and recovery.',
            price: 2999,
            stock: 38
        },
        {
            id: 6,
            title: 'Dumbbell Set',
            sku: 'EQP006',
            category: 'Equipment',
            description: 'Adjustable dumbbell set (5-50 lbs).',
            price: 8999,
            stock: 99
        }
    ];

    return (
        <div className="relative">
            {/* Add Product Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Products</h2>
                <button
                    onClick={() => setShowAddForm(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    + Add Product
                </button>
            </div>

            {/* Product Table */}
            <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-2 px-4 border">Sr No</th>
                        <th className="py-2 px-4 border">Title</th>
                        <th className="py-2 px-4 border">SKU</th>
                        <th className="py-2 px-4 border">Category</th>
                        <th className="py-2 px-4 border">Description</th>
                        <th className="py-2 px-4 border">Price</th>
                        <th className="py-2 px-4 border">Stock</th>
                        <th className="py-2 px-4 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.map((product, index) => (
                        <tr key={product.id} className="text-center">
                            <td className="py-2 px-4 border">{index + 1}</td>
                            <td className="py-2 px-4 border">{product.title}</td>
                            <td className="py-2 px-4 border">{product.sku}</td>
                            <td className="py-2 px-4 border">{product.category}</td>
                            <td className="py-2 px-4 border">{product.description}</td>
                            <td className="py-2 px-4 border">
                                {new Intl.NumberFormat('en-IN', {
                                    style: 'currency',
                                    currency: 'INR'
                                }).format(product.price)}
                            </td>
                            <td className="py-2 px-4 border">{product.stock}</td>

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

            {/* Overlay Add Product Form */}
            {showAddForm && <AddProduct onClose={() => setShowAddForm(false)} />}
        </div>
    );
};

export default Products;
