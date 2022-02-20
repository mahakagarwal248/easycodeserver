const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: "./config.env" });
const app = express();
const port = process.env.PORT;
app.use(express.json()); //this middleware used to get req.body

app.use("/contactus", require("./routers/contactus"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(port, () => {
  console.log(`server in runing :${port}`);
});
