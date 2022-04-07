const { Router } = require('express')
const router = Router()
const { about } = require('../controllers/about')

router
    .get('/', about)

module.exports = router;
