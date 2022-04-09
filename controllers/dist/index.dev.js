"use strict";

var placeToTour = require('../data/placeToTour.json');

var places = placeToTour.data;

var mainPage = require('../data/mainPage.json');

exports.index = function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.render('pages/index', {
            title: "עמוד הבית",
            places: places,
            mainPage: mainPage
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};