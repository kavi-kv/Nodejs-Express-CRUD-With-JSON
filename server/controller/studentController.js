// const stdData = require("../stdData.js");

// module.exports = {
//   getStdInfo: (req, res) => {
//     res.send(stdData.students);
//   },
//   createStd: (req, res) => {
//     try {
//       const { ID, name, Email } = req.body;
//       const newStudent = { ID, name, Email };

//       stdData.students.push(newStudent);

//       res.status(201).send("New student created successfully.");
//     } catch (err) {
//       res.status(400).json({ message: `Failed to create a user` });
//     }
//   },
// };
