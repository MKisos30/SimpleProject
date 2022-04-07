// const { about } = require('../data/about.json')
// const data = JSON.stringify(about)
// console.log(about)
// console.log(data)
exports.about = async (req, res) => {
    res.render('pages/about', {
        title: "About page",
        // about
    })
}