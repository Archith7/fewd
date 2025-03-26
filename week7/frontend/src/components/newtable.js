// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Newtable() {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/students");
//         setStudents(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchStudents();
//   }, []);

//   return (
//     <div className="max-w-2xl mx-auto">
//       <h2 className="text-xl font-bold mb-4">Student List</h2>
//       <table className="w-full border-collapse border">
//         <thead>
//           <tr>
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Roll No</th>
//             <th className="border p-2">Java</th>
//             <th className="border p-2">CPP</th>
//             <th className="border p-2">Python</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student, index) => (
//             <tr key={index}>
//               <td className="border p-2">{student.name}</td>
//               <td className="border p-2">{student.rollNo}</td>
//               <td className="border p-2">{student.scores.Java}</td>
//               <td className="border p-2">{student.scores.CPP}</td>
//               <td className="border p-2">{student.scores.Python}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Newtable() {
  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/students");
      setStudents(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditData({ ...students[index] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["Java", "CPP", "Python"].includes(name)) {
      setEditData({ ...editData, scores: { ...editData.scores, [name]: value } });
    } else {
      setEditData({ ...editData, [name]: value });
    }
  };

  const handleSubmit = async (id) => {
    try {
      await axios.put(`http://localhost:5000/students/${id}`, editData);
      alert("Success");
      setEditIndex(null);
      fetchStudents();
    } catch (err) {
      console.error(err);
      alert("Failed to update data");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/students/${id}`);
      alert("Deleted successfully");
      fetchStudents();
    } catch (err) {
      console.error(err);
      alert("Failed to delete data");
    }
  };

  return (
    <div>
      <h2>Student List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Java</th>
            <th>CPP</th>
            <th>Python</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              {editIndex === index ? (
                <>
                  <td><input type="text" name="name" value={editData.name} onChange={handleChange} /></td>
                  <td><input type="text" name="rollNo" value={editData.rollNo} onChange={handleChange} /></td>
                  <td><input type="number" name="Java" value={editData.scores.Java} onChange={handleChange} /></td>
                  <td><input type="number" name="CPP" value={editData.scores.CPP} onChange={handleChange} /></td>
                  <td><input type="number" name="Python" value={editData.scores.Python} onChange={handleChange} /></td>
                  <td>
                    <button onClick={() => handleSubmit(student._id)}>Submit</button>
                    <button onClick={() => setEditIndex(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{student.name}</td>
                  <td>{student.rollNo}</td>
                  <td>{student.scores.Java}</td>
                  <td>{student.scores.CPP}</td>
                  <td>{student.scores.Python}</td>
                  <td>
                    <button onClick={() => handleEditClick(index)}>Update</button>
                    <button onClick={() => handleDelete(student._id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
