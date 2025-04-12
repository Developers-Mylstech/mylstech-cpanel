import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";

const accessOptions = [
  { label: "Admin", value: "admin" },
  { label: "HR", value: "hr" },
  { label: "Sales", value: "sales" },
  { label: "Support", value: "support" },
  { label: "Manager", value: "manager" },
];

const EmployeeUpadateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    contact: "",
    accessRight: [],
    profilePic: null,
  });

  const handleInputChange = (e, name) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleMultiSelectChange = (e) => {
    setFormData({ ...formData, accessRight: e.value });
  };

  const handleProfilePicUpload = (e) => {
    setFormData({ ...formData, profilePic: e.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your API submission here
  };

  return (
    <div className="mx-auto bg-white">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Update Profile</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

 
        <div className="md:col-span-2 ">
          <label className="block mb-2 text-sm font-medium text-gray-600">Profile Picture</label>
          <FileUpload
            mode="basic"
            name="profilePic"
            accept="image/*"
            customUpload
            auto
            chooseLabel="Upload"
            onSelect={handleProfilePicUpload}
          />
        </div>

        {/* Name */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Name</label>
          <InputText
            value={formData.name}
            onChange={(e) => handleInputChange(e, "name")}
            placeholder="Enter name"
            className="w-full border-b rounded-none py-4 focus:outline-none focus:ring-0"
          />
        </div>

        {/* Designation */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Designation</label>
          <InputText
            value={formData.designation}
            onChange={(e) => handleInputChange(e, "designation")}
            placeholder="e.g. Software Engineer"
            className="w-full border-b rounded-none py-4 focus:outline-none focus:ring-0"
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Contact</label>
          <InputText
            value={formData.contact}
            onChange={(e) => handleInputChange(e, "contact")}
            placeholder="e.g. +91-9876543210"
            className="w-full border-b rounded-none py-4 focus:outline-none focus:ring-0"
          />
        </div>

        {/* Access Rights */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Access Rights</label>
          <MultiSelect
            value={formData.accessRight}
            options={accessOptions}
            onChange={handleMultiSelectChange}
            placeholder="Select Roles"
            className="w-full border-b rounded-none py-1 focus:outline-none focus:ring-0"

          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-right">
          <Button label="Update Profile" icon="pi pi-check" type="submit" className="px-4" />
        </div>
      </form>
    </div>
  );
};

export default EmployeeUpadateForm;
