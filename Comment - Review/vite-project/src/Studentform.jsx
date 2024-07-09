import React, { useState } from 'react';
import './Form.css'

const StudentForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    grade: "",
    gender: ""

  });

  const { name, email, password, grade, gender } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="form-container">
      <h1>Student Form</h1>
      <form onSubmit={handleClick}>
        <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={handleChange} 
          placeholder="Enter Your Name" 
          className="input-field"
        /><br />
        <input 
          type="email" 
          name="email" 
          value={email} 
          onChange={handleChange} 
          placeholder="Enter Your Email" 
          className="input-field"
        /><br />
        <input 
          type="password" 
          name="password" 
          value={password} 
          onChange={handleChange} 
          placeholder="Enter Your Password" 
          className="input-field"
        /><br /><br />
        <select 
          name="grade" 
          value={grade} 
          onChange={handleChange} 
          className="select-field"
        >
          <option value="">Select Your Grade</option>
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select><br /><br />
        
        <input 
          type="radio" 
          name="gender" 
          value="Male" 
          checked={gender === "Male"} 
          onChange={handleChange}
        />
         Male
        
        <input 
          type="radio" 
          name="gender" 
          value="Female" 
          checked={gender === "Female"} 
          onChange={handleChange}
        /> Female
        <input 
          type="radio" 
          name="gender" 
          value="Female" 
          checked={gender === "Female"} 
          onChange={handleChange}
        /> Other<br /><br />
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;
