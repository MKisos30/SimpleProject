exports.index = async (req, res) => {
    res.render('pages/index', {
        title: "Home page"
    })
}