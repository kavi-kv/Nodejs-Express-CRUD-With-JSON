const express = require("express");
const port = 3500;
const student = require("./router/studentRouter");

const app = express();
app.use(express.json()); 
app.use("/student", student);

app.listen(port, () => {
  console.log("Server is running on port ", port);
});
