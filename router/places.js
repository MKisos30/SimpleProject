const { Router } = require('express')
const router = Router()
const { places } = require('../controllers/places')


router.get('/:id', places)

module.exports = router;
