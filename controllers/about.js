const about = require('../data/about.json')
// console.log(about)

exports.about = async (req, res) => {
    res.render('pages/about', {
        title: "About page",
        about
    })
}