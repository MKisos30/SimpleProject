const placeToTour = require('../data/placeToTour.json')
const places = placeToTour.data
const mainPage = require('../data/mainPage.json')

exports.index = async (req, res) => {
    res.render('pages/index', {
        title: "עמוד הבית",
        places,
        mainPage
    })
}