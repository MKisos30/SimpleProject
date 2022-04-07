const placeToTour = require('../data/placeToTour.json')
const places = placeToTour.data
// console.log(places)

exports.index = async (req, res) => {
    res.render('pages/index', {
        title: "Home page"
    })
}