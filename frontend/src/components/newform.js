// Newform.js
import React, { useState } from "react";
import axios from "axios";

export default function Newform() {
  const [formData, setFormData] = useState({ name: "", rollNo: "", scores: { Java: "", CPP: "", Python: "" } });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["Java", "CPP", "Python"].includes(name)) {
      setFormData({ ...formData, scores: { ...formData.scores, [name]: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/students", formData);
      alert("Student data submitted successfully!");
      setFormData({ name: "", rollNo: "", scores: { Java: "", CPP: "", Python: "" } });
    } catch (err) {
      console.error(err);
      alert("Failed to submit data");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Student Form</h2>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="block w-full mb-2 p-2 border rounded" />
      <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} placeholder="Roll No" required className="block w-full mb-2 p-2 border rounded" />
      <input type="number" name="Java" value={formData.scores.Java} onChange={handleChange} placeholder="Java Score" className="block w-full mb-2 p-2 border rounded" />
      <input type="number" name="CPP" value={formData.scores.CPP} onChange={handleChange} placeholder="CPP Score" className="block w-full mb-2 p-2 border rounded" />
      <input type="number" name="Python" value={formData.scores.Python} onChange={handleChange} placeholder="Python Score" className="block w-full mb-2 p-2 border rounded" />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
    </form>
  );
}
