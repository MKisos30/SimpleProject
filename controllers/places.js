const placeToTour = require('../data/placeToTour.json')
const places = placeToTour.data
const mainPage = require('../data/mainPage.json')

exports.places = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)

        const index = places.findIndex(object => {
            return object.id === id;
        });

        console.log(index)

        const place = places[index] // place[0]
        console.log(places[index])

        res.render('pages/placeID', {
            title: `${places.nameOfPlace}`,
            place,
            mainPage
        })
    } catch (error) {
        console.log(error)
    }
}