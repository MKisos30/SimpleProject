"use strict";

var about = require('../data/about.json');

var mainPage = require('../data/mainPage.json');

exports.about = function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.render('pages/about', {
            title: "אודות",
            about: about,
            mainPage: mainPage
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};