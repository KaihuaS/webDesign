"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.update = exports.find = exports.save = exports.search = void 0;

var _sticky = _interopRequireDefault(require("../models/sticky"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var search = function search(params) {
  var promise = _sticky["default"].find(params).exec();

  return promise;
};

exports.search = search;

var save = function save(sticky) {
  var newSticky = new _sticky["default"](sticky);
  var promise = newSticky.save();
  return promise;
};

exports.save = save;

var find = function find(id) {
  var promise = _sticky["default"].findById(id).exec();

  return promise;
};

exports.find = find;

var update = function update(id, newValues) {
  newValues.lastModifiedDate = new Date();

  var promise = _sticky["default"].findOneAndUpdate({
    _id: id
  }, newValues, {
    "new": true
  }).exec();

  return promise;
};

exports.update = update;

var remove = function remove(id) {
  var promise = _sticky["default"].remove({
    _id: id
  });

  return promise;
};

exports.remove = remove;