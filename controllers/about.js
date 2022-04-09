const about = require('../data/about.json')
const mainPage = require('../data/mainPage.json')

exports.about = async (req, res) => {
    res.render('pages/about', {
        title: "אודות",
        about,
        mainPage
    })
}