// import React,{useState} from 'react'

// function Form() {

//     const [name, setName]= useState("");

//     const handleChange =(event)=>{ setName(event.target.value) } 


//   return (
//     <div>
//         <h1>Controlled input</h1>
//         <input type="text" value={name} onChange={handleChange} placeholder='Enter your name :' />
//         <p>your name is : {name}</p>
//     </div>
//   )
// }

// export default Form

//2nd one
// function Form() {
//     const [formData, setFormData] = useState({
//       name: "",
//       email: "",
//     });
  
//     const handleChange = (e) => {
//     //   const { name, value } = event.target; // Get input name and value
//       setFormData({ ...formData, [e.target.name]: e.target.value }); // Update specific field
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//     //   alert(`Name: ${formData.name}, Email: ${formData.email}`);
//       console.log(formData);
//     };

//     const resetFun =() =>{setFormData({name:'', email:''})}
  
//     return (
//       <div >
//         <h1>React Form with Multiple Inputs</h1>
//         <form onSubmit={handleSubmit}>
//             <label>Name:</label>
//           <input
//             type="text" required
//             name="name"
//              value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//           />
//           <br />
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//           />
//           <br />
//           <button type='button' onClick={resetFun}>Reset</button>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
  
//   export default Form;
  
import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password:"",
  });

  const [message, setMessage] = useState(""); // To display success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Send form data to the backend
      const response = await axios.post("http://192.168.149.70:5000/api/createuser", formData);
      
      console.log(response.data); // Debugging purpose
      
      // Update message state to display success
      setMessage("Form submitted successfully!");
      
      // Reset the form
      setFormData({ name: "", email: "",password:"" });
    } catch (error) {
      console.error("Error submitting form:", error);
  
      // Update message state to display error
      setMessage("Failed to submit the form. Please try again.");
    }
  };
  

  const resetFun = () => {
    setFormData({ name: "", email: "" });
    setMessage(""); // Clear any messages
  };

  return (
    <div>
      <h1>React Form with Multiple Inputs</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <br />
        <label>password:</label>
        <input
          type="text"
          required
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <br/>
        <button type="button" onClick={resetFun}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>} {/* Display success/error messages */}
    </div>
  );
}

export default Form;
