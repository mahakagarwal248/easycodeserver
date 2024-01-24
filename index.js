const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: ".env" });
const app = express();
const port = process.env.PORT;
app.use(express.json()); //this middleware used to get req.body
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello bhomik!");
});
app.use("/node/api/easycoder/contactus", require("./routers/contactus"));

app.listen(port, () => {
  console.log(`server in runing :${port}`);
});
