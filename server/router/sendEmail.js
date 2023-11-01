const nodemailer = require('nodemailer')
const express = require('express')
const router = express.Router()
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "akv65345@gmail.com",
        pass: "ygpw iskz zynk etlb"
    }
});

router.post('/send-email', (req, res) => {
    const { subject, text, to } = req.body;
  
    if (!subject || !text || !to) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    const mailOptions = {
        from: "akv65345@gmail.com",
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error,info) => {
        if(error){
            console.log("Error.......: ",error);
            res.status(500).json({ message: "Error Sending Email" })
        }
        else{
            console.log("Email was sent",info.response);
            res.status(200).json({ message: "Email was send successfully" })
        }
    })
})




module.exports = router;