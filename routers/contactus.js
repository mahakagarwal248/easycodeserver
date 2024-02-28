const router = require("express").Router();
const express = require("express")
const multer = require("multer");
const sendingmail = require("../controllers/sendingmail");
const storage = multer.memoryStorage();
const app = express();

var upload = multer({ storage: storage });
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

router.post("/mail", upload.single("file"), sendingmail);

module.exports = router;
