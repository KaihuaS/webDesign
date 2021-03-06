"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _routes = _interopRequireDefault(require("./routes"));

var _stickyRoute = _interopRequireDefault(require("./routes/sticky-route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//mongoose instace connection url connection
_mongoose["default"].connect('mongodb://localhost:27017/stickydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

_mongoose["default"].Promise = global.Promise;
var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));
(0, _routes["default"])(app);
var _default = app;
exports["default"] = _default;