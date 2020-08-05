"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.update = exports.get = exports.save = exports.list = void 0;

var _express = require("express");

var stickyService = _interopRequireWildcard(require("../services/sticky-services"));

var _sticky = _interopRequireDefault(require("../models/sticky"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var renderErrorResponse = function renderErrorResponse(response) {
  var callback = function callback(error) {
    if (error) {
      response.status(500);
      response.json({
        message: error.message
      });
    }
  };

  return callback;
};

var list = function list(request, response) {
  var promise = stickyService.search({});
  promise.then(function (stickies) {
    response.status(200);
    response.json(stickies);
  })["catch"](renderErrorResponse(response));
};

exports.list = list;

var save = function save(request, response) {
  var newSticky = Object.assign({}, request.body);

  var resolve = function resolve(sticky) {
    response.status(200);
    response.json(sticky);
  };

  stickyService.save(newSticky).then(resolve)["catch"](renderErrorResponse(response));
};

exports.save = save;

var get = function get(request, response) {
  var stickyId = request.params.id;

  var resolve = function resolve(sticky) {
    response.status(200);
    response.json(sticky);
  };

  stickyService.find(stickyId).then(resolve)["catch"](renderErrorResponse(response));
};

exports.get = get;

var update = function update(request, response) {
  var stickyId = request.params.id;
  var newSticky = Object.assign({}, request.body);

  var resolve = function resolve(sticky) {
    response.status(200);
    response.json(sticky);
  };

  stickyService.update(stickyId, newSticky).then(resolve)["catch"](renderErrorResponse(response));
};

exports.update = update;

var remove = function remove(request, response) {
  var stickyId = request.params.id;

  var resolve = function resolve() {
    response.status(200);
    response.json({
      message: "Successfully Deleted!!!"
    });
  };

  stickyService.remove(stickyId).then(resolve)["catch"](renderErrorResponse(response));
};

exports.remove = remove;