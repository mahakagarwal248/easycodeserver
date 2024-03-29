var nodemailer = require("nodemailer");
const EMAIL = process.env.EMAIL_ID;
const PASS = process.env.EMAIL_PASS;
const sendingmail = (req, res, next) => {
  const { username, email, number, msg } = req.body;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASS,
    },
  });

  var mailOptions = {
    from: "easycoding2000@gmail.com",
    to: ["bhomickyadav786@gmail.com", "mahakagarwal248@gmail.com"],
    subject: "Details of user",
    text: `username:${username}\n userid:${email}\n usernumber:${number} \n usermsg:${msg}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.json({ err: error.message, result: false });
    } else {
      return res.json({
        result: "send",
        resultinfo: info.response,
        result: true,
      });
      n;
    }
  });
};
module.exports = sendingmail;
