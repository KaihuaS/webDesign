"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StickySchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    required: "Title is required."
  },
  content: {
    type: String
  },
  createDate: {
    type: Date,
    "default": Date.now
  },
  lastModifiedDate: {
    type: Date,
    "default": Date.now
  }
}, {
  versionKey: false
}); // StickySchema.virtual('id').get(() => {
//     return this._id.toHexString();
// });
// StickySchema.set('toJSON', {virtuals: true});

StickySchema.virtual('id').get(function () {
  return this._id.toHexString();
});
StickySchema.set('toJSON', {
  virtuals: true
});

var _default = _mongoose["default"].model('Sticky', StickySchema);

exports["default"] = _default;