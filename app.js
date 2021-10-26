/* jshint esversion: 6 */

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { response } = require("express");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000");
});

app.get("/resources", function (req, res) {
  res.sendFile(__dirname + "/resources.html");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/definitions", function (req, res) {
  res.sendFile(__dirname + "/definitions.html");
});

app.get("/task", function (req, res) {
  res.sendFile(__dirname + "/task.html");
});

app.get("/gallery", function (req, res) {
  res.sendFile(__dirname + "/gallery.html");
});

app.get("/who", function (req, res) {
  res.sendFile(__dirname + "/who.html");
});

app.get("/home", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us6.api.mailchimp.com/3.0/lists/887b210e19";

  const options = {
    method: "POST",
    auth: config.API_USERNAME + ":" + config.API_TOKEN,
  };
  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/fail.html");
    }

    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.post("/failure", function (req, res) {
  res.redirect("/");
});
