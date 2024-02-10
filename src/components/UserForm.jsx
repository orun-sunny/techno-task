import { useState } from "react";

const UserForm = ({ onSubmit, toggleModal }) => {
  const [formData, setFormData] = useState({
    image: "",
    firstName: "",
    lastName: "",
    email: "",
    address: {
      street: "",
      city: "",
    },
    companyName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    // Clear the form data after click
    setFormData({
      image: "",
      firstName: "",
      lastName: "",
      email: "",
      address: {
        street: "",
        city: "",
      },
      companyName: "",
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-indigo-500"
        />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-indigo-500"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-indigo-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-indigo-500"
        />
        <input
          type="text"
          name="street"
          value={formData.address.street}
          onChange={handleAddressChange}
          placeholder="Street"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-indigo-500"
        />
        <input
          type="text"
          name="city"
          value={formData.address.city}
          onChange={handleAddressChange}
          placeholder="City"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-indigo-500"
        />
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-indigo-500"
        />
        <div className="flex justify-between">
          <button
            type="button"
            onClick={toggleModal} // Call toggleModal
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Close
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
