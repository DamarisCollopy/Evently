const {Router} = require('express')
const activitiesControllers = require('../controllers/ActivitiesControllers')

const router = Router()

router.get('/act', activitiesControllers.read)

router.get('/act/:name',  activitiesControllers.findName)

router.post('/act', activitiesControllers.create)

router.delete('/act/:id', activitiesControllers.delete)

module.exports = router