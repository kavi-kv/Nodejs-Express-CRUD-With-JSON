
const express = require("express");
const router = express.Router();
const stdDt = require("../std.json");

const fs = require("fs");

router.get("/info", async (req, res) => {
  res.send(stdDt);  
});

router.post("/create", (req, res) => {
  const { ID, name, Email } = req.body;
  const newStudent = { ID, name, Email };

  fs.readFile("std.json", (err, data) => {
    if (err) {
      console.log("File Reading Error: ", err);
      return res.status(500).json({ message: "Server error" });
    }

    let students = [];
    if (data) {
      students = JSON.parse(data);
    }

    students.push(newStudent);

    
    fs.writeFile("std.json", JSON.stringify(students), (err) => {
      if (err) {
        console.log("File Saving Error: ", err);
        return res.status(500).json({ message: "Server error" });
      }

      res.status(201).send(students);
    });
  });
});

router.delete("/delete/:ID", async (req, res) => {
    const studentId = req.params.ID;
    let students = stdDt; 
  
    const index = students.findIndex((std) => std.ID == studentId); 
  
    if (index !== -1) {
      students.splice(index, 1);
  
      fs.writeFile("std.json", JSON.stringify(students), (err) => {
        if (err) {
          console.error("Error writing the data file:", err);
          return res.status(500).json({ message: "Server error" });
        }
        res.status(200).json({ message: "Student deleted successfully" });
      });
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  });

  router.put("/update/:ID", (req, res) => {
    const studentId = req.params.ID;
    const { name, Email } = req.body;
    let students = stdDt;
  
    const index = students.findIndex((std) => std.ID == studentId);
  
    if (index !== -1) {
      students[index].name = name;
      students[index].Email = Email;
  
      fs.writeFile("std.json", JSON.stringify(students), (err) => {
        if (err) {
          console.error("Error writing the data file:", err);
          return res.status(500).json({ message: "Server error" });
        }
        res.status(200).json({ message: "Student updated successfully" });
      });
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  });

module.exports = router;
