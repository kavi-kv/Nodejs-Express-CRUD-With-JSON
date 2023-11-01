const express = require("express");
const port = 4100;
const student = require("./router/studentRouter");
const email = require('./router/sendEmail')

const app = express();
app.use(express.json()); 
app.use("/student", student);
app.use("/", email);

app.listen(port, () => {
  console.log("Server is running on port ", port);
});
