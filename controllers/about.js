exports.about = async (req, res) => {
    res.render('pages/about', {
        title: "About page"
    })
}