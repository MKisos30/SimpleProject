"use strict";

var placeToTour = require('../data/placeToTour.json');

var places = placeToTour.data;

var mainPage = require('../data/mainPage.json');

exports.places = function _callee(req, res) {
  var id, index, place;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            id = req.params.id;
            console.log(id);
            index = places.findIndex(function (object) {
              return object.id === id;
            });
            console.log(index);
            place = places[index]; // place[0]

            console.log(places[index]);
            res.render('pages/placeID', {
              title: "".concat(places.nameOfPlace),
              place: place,
              mainPage: mainPage
            });
          } catch (error) {
            console.log(error);
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};