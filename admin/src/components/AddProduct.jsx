import React, { useState, useRef } from 'react';

const AddProduct = ({ onClose, onAddProduct }) => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [sku, setSku] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');

  const overlayRef = useRef();

  // Close if click outside form
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };


  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleRemoveImage = (indexToRemove) => {
    setImages((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !sku || !category || !price || !stock) {
      alert('Please fill all required fields.');
      return;
    }

    const newProduct = {
      id: Date.now(),
      title,
      sku,
      category,
      description,
      price: Number(price),
      stock: Number(stock),
      images,
    };

    onAddProduct(newProduct);

    setTitle('');
    setSku('');
    setCategory('');
    setPrice('');
    setDescription('');
    setStock('');
    setImages([]);

    onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl relative overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>

        <form onSubmit={handleSubmit}>
          {/* ... form fields as before ... */}
          {/* Product Images Upload */}
          <div>
            <label className="block mb-1 font-medium">Product Images</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border px-3 py-2 rounded"
            />
            {images.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-3">
                {images.map((img, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`Preview ${index}`}
                      className="w-[80px] h-[80px] object-cover rounded border"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center hover:scale-110"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Title and SKU */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Title *</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">SKU *</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Category, Price, Stock */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block mb-1 font-medium">Category *</label>
              <select
                className="w-full border px-3 py-2 rounded"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option>Apparel</option>
                <option>Nutrition</option>
                <option>Equipment</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Price (INR) *</label>
              <input
                type="number"
                className="w-full border px-3 py-2 rounded"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="0"
                step="0.01"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Stock *</label>
              <input
                type="number"
                className="w-full border px-3 py-2 rounded"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                min="0"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              className="w-full border px-3 py-2 rounded"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
