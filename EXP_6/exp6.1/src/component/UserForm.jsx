import { useState } from "react";

const UserForm = () => {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    address: "",
    state: "",
    skills: [],
  });

  const statesOfIndia = [
    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
    "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand",
    "Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur",
    "Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
    "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
    "Uttar Pradesh","Uttarakhand","West Bengal",
    "Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu",
    "Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({ ...formData, skills: [...formData.skills, value] });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
`First Name: ${formData.firstName}
Last Name: ${formData.lastName}
DOB: ${formData.dob}
Gender: ${formData.gender}
Address: ${formData.address}
State: ${formData.state}
Skills: ${formData.skills.join(", ")}`
    );
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      address: "",
      state: "",
      skills: [],
    });
  };

  return (
    <div className="card">
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          max={today}
          value={formData.dob}
          onChange={handleChange}
          required
        />

        {/* Gender */}
        <div className="form-group">
          <span className="label-title">Gender:</span>
          <label className="inline">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label className="inline">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        <textarea
          name="address"
          placeholder="Enter Address"
          rows="3"
          value={formData.address}
          onChange={handleChange}
          required
        />

        {/* State Dropdown */}
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value="">Select State / UT</option>
          {statesOfIndia.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>

        {/* Skills */}
        <div className="form-group">
          <span className="label-title">Skills:</span>

          <label className="inline">
            <input
              type="checkbox"
              value="Java"
              checked={formData.skills.includes("Java")}
              onChange={handleCheckbox}
            />
            Java
          </label>

          <label className="inline">
            <input
              type="checkbox"
              value="Python"
              checked={formData.skills.includes("Python")}
              onChange={handleCheckbox}
            />
            Python
          </label>

          <label className="inline">
            <input
              type="checkbox"
              value="React"
              checked={formData.skills.includes("React")}
              onChange={handleCheckbox}
            />
            React
          </label>
        </div>

        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel} className="cancel">
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default UserForm;