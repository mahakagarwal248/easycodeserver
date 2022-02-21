var nodemailer = require("nodemailer");
const EMAIL = process.env.EMAIL_ID;
const PASS = process.env.EMAIL_PASS;
const sendingmail = (req, res, next) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASS,
    },
  });
<<<<<<< HEAD

=======
>>>>>>> 147c271f02c60f22e9294001c003ff83b29d17ad
  var mailOptions = {
    from: "easycoding2000@gmail.com",
    to: ["bhomickyadav786@gmail.com", "mahakagarwal248@gmail.com"],
    subject: "Details of user",
    text: `username:${req.body.name}\n userid:${req.body.email}\n usernumber:${req.body.number} \n usermsg:${req.body.msg}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.json({ err: error.message, result: false });
    } else {
      return res.json({
<<<<<<< HEAD
        result: "send",
=======
>>>>>>> 147c271f02c60f22e9294001c003ff83b29d17ad
        resultinfo: info.response,
        result: true,
      });
      n;
    }
  });
};
module.exports = sendingmail;
