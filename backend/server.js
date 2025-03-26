// const express = require('express');
// const app = express();
// const allroutes = require('./routes/allroutes');
// const { default: mongoose } = require('mongoose');
// const cors = require('cors');
// app.use(cors({
//     origin: 'http://localhost:3000', // Replace with your frontend's URL
// }));
// app.get('/hello',(req,res)=>{
//     res.send("HEllo there");
// })

// app.use(express.json());
// app.use('/api',allroutes);
// const port= 5000;


// app.listen(port,()=>{
//     mongoose.connect('mongodb+srv://archithsabbani14:archith0914@cluster0.7ow8zo6.mongodb.net/studentsDB?retryWrites=true&w=majority&appName=Cluster0c',{
//         useNewUrlParser: true,useUnifiedTopology: true,
//     })
//     console.log(`server is listening on port number ${port}`);
// })

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose
//     .connect("mongodb+srv://archithsabbani14:archith0914@cluster0.7ow8zo6.mongodb.net/studentsDBfs3?retryWrites=true&w=majority&appName=Cluster0c", { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("MongoDB Connected"))
//     .catch((err) => console.error("MongoDB connection error:", err));

// // Schema & Model
// const studentSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     rollNo: { type: String, required: true },
//     scores: {
//         Java: { type: Number, default: 0 },
//         CPP: { type: Number, default: 0 },
//         Python: { type: Number, default: 0 },
//     },
// });

// const Student = mongoose.model("Student", studentSchema);

// // Routes

// // 1️⃣ Get All Students
// app.get("/students", async (req, res) => {
//     try {
//         const students = await Student.find();
//         res.json(students);
//     } catch (err) {
//         res.status(500).json({ message: "Error fetching students", error: err });
//     }
// });

// // 2️⃣ Add a New Student
// app.post("/students", async (req, res) => {
//     try {
//         const newStudent = new Student(req.body);
//         console.log(newStudent);
//         const savedStudent = await newStudent.save();
//         res.status(201).json(savedStudent);
//     } catch (err) {
//         res.status(400).json({ message: "Error adding student", error: err });
//     }
// });

// // 3️⃣ Update Student by ID
// app.put("/students/:id", async (req, res) => {
//     try {
//         const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.json(updatedStudent);
//     } catch (err) {
//         res.status(400).json({ message: "Error updating student", error: err });
//     }
// });

// // 4️⃣ Delete Student by ID
// app.delete("/students/:id", async (req, res) => {
//     try {
//         await Student.findByIdAndDelete(req.params.id);
//         res.json({ message: "Student deleted successfully" });
//     } catch (err) {
//         res.status(400).json({ message: "Error deleting student", error: err });
//     }
// });

// // Start Server
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
    .connect("mongodb+srv://archithsabbani14:archith0914@cluster0.7ow8zo6.mongodb.net/studentsDBfs3?retryWrites=true&w=majority&appName=Cluster0c", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Schema & Model
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNo: { type: String, required: true },
    scores: {
        Java: { type: Number, default: 0 },
        CPP: { type: Number, default: 0 },
        Python: { type: Number, default: 0 },
    },
});

const Student = mongoose.model("Student", studentSchema);

// Routes

// 1️⃣ Get All Students
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        if (students.length === 0) {
            return res.status(404).json({ message: "No students found" });
        }
        res.status(200).json({ message: "Students fetched successfully", data: students });
    } catch (err) {
        res.status(500).json({ message: "Error fetching students", error: err.message });
    }
});

// 2️⃣ Add a New Student
app.post("/students", async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        const savedStudent = await newStudent.save();
        res.status(201).json({ message: "Student added successfully", data: savedStudent });
    } catch (err) {
        res.status(400).json({ message: "Error adding student", error: err.message });
    }
});

// 3️⃣ Update Student by ID
app.put("/students/:id", async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student updated successfully", data: updatedStudent });
    } catch (err) {
        res.status(400).json({ message: "Error updating student", error: err.message });
    }
});

// 4️⃣ Delete Student by ID
app.delete("/students/:id", async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student deleted successfully", data: deletedStudent });
    } catch (err) {
        res.status(400).json({ message: "Error deleting student", error: err.message });
    }
});

// 5️⃣ Get Student by ID
app.get("/students/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student found successfully", data: student });
    } catch (err) {
        res.status(400).json({ message: "Error fetching student by ID", error: err.message });
    }
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
