"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _stickyRoute = _interopRequireDefault(require("./sticky-route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(app) {
  //set routes
  app.use('/', _stickyRoute["default"]);
};

exports["default"] = _default;