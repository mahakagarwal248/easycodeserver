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
  var mail1 = false;
  const { username, email, number, msg } = req.body;
  const { name, data, encoding } = req.files.file;
  var mailOptions = {
    from: "easycoding2000@gmail.com",
    to: ["bhomickyadav786@gmail.com", "mahakagarwal248@gmail.com"],
    subject: "Details of user",
    text: `username:${username}\n userid:${email}\n usernumber:${number} \n usermsg:${msg}`,
    // attachments: {
    //   filename: req.files.file.name,
    //   content: new Buffer.alloc(
    //     req.files.file.size,
    //     req.files.file.data,
    //     req.files.file.encoding
    //   ),
    // },
    attachments: {
      filename: name,
      content: data,
      encoding: encoding,
    },
  };
  var mailOptions1 = {
    from: "easycoding2000@gmail.com",
    to: email,
    subject: "Welcome to EasyCoder!",
    html: `<p><h1>Welcome ${username} to EasyCoder!</h1> Thank you for contacting us. We'll get in touch with you soon. Have a nice day!<p/>
    <a href="https://easycoder.herokuapp.com/"> click here to visit our website </a>`,
  };

  transporter.sendMail(mailOptions1, function (error, info) {
    if (!error) {
      mail1 = true;
    }
  });
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.json({ err: error.message, result: false });
    } else if (mail1) {
      return res.json({
        resultinfo: info.response,
        result: true,
      });
    } else {
      return res.json({ err: error.message, result: false });
    }
  });
};
module.exports = sendingmail;
