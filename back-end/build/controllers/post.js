"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//contains all handlers for routes,for scalability purposes
var PostMessage = require("../models/postMessage.js");

var getPosts = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var postMessages;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return PostMessage.find();

          case 3:
            postMessages = _context.sent;

            console.log(postMessages);

            res.status(200).json(postMessages);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);

            res.status(404).json({ message: _context.t0.message });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 8]]);
  }));

  return function getPosts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var createPost = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var body, newPost;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            body = req.body;
            newPost = new PostMessage(post);
            _context2.prev = 2;
            _context2.next = 5;
            return newPost.save();

          case 5:

            res.status(201).json(newPost);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](2);

            res.status(409).json({ message: _context2.t0.message });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[2, 8]]);
  }));

  return function createPost(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = { getPosts: getPosts, createPost: createPost };