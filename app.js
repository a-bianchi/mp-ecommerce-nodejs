var express = require("express");
var exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mercadopago = require("mercadopago");
var { setPreference } = require("./helpers.js");

mercadopago.configure({
  access_token:
    "APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398",
  integrator_id: "dev_24c65fb163bf11ea96500242ac130004",
});

var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/detail", function (req, res) {
  res.render("detail", req.query);
});

app.get("/success", function (req, res) {
  res.render("success", req.query);
});

app.get("/failure", function (req, res) {
  res.render("failure", req.query);
});

app.get("/pending", function (req, res) {
  res.render("pending", req.query);
});

app.post("/checkout", function (req, res) {
  const preference = setPreference(req.body);
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // Este valor reemplazará el string "$$init_point$$" en tu HTML
      global.init_point = response.body.init_point;
      res.redirect(global.init_point);
      //console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.post("/notifications", function (req, res) {
  console.log("===Webhook===");
  console.log(req.body);
  res.status(200).send("OK");
});

app.use(express.static("assets"));

app.use("/assets", express.static(__dirname + "/assets"));

app.listen(process.env.PORT || 5000);
