import React, { useState } from 'react';

export default function ProfileUpdateForm() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    contact: '',
    profilePic: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, profilePic: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Profile:', formData);
    // Handle API call or dispatch here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 ">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Update Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-5">

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 mb-2 rounded-full overflow-hidden border-2 border-gray-300">
            <img
              src={preview || 'https://via.placeholder.com/100'}
              alt="Profile Preview"
              className="w-full h-full object-cover"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm text-gray-600"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="City, Country"
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+1 234 567 890"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
