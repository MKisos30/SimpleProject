const placeToTour = require('../data/placeToTour.json')
const places = placeToTour.data
// console.log(places)

exports.places = async (req, res) => {
    let index
    try {
        const { id } = req.params
        console.log(id)

        const index = places.findIndex(object => {
            return object.id === id;
        });

        console.log(index)

        const place = places[index]
        console.log(places[index])

        res.render('pages/placeID', {
            title: `${places.nameOfPlace}`,
            place
        })
    } catch (error) {
        console.log(error)
    }
}