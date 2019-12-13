const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shaistendercare.gmail.com",
    pass: "Shai12345"
  }
});

var mailOptions = {
  from: "shaistendercare.gmail.com",
  to: "shaimatlou@yahoo.com",
  cc: "sereetsikc@gmail.com",
  subject: "this is a test email",
  text: "testing email API kopano"
};

transporter.sendMail(
  mailOptions,
  data => {
    console.log(data.response);
  },
  error => {
    console.log(error);
  }
);
