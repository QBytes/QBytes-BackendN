var express    = require('express'),
    morgan     = require('morgan'),
    bodyParser = require('body-parser'),
    cors       = require('cors'),
    passport   = require('passport');

var app = express();
var port = process.env.PORT || 3000;

//mount middleware
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

process.on('uncaughtException', (err) => {
  console.log(err);
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info("=> 🌎  Listening on port 3000");
  }
});
