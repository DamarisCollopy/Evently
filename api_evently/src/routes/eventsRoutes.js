const {Router} = require('express')
const EventsControllers = require('../controllers/EventsControllers')

const router = Router()

router.get('/events', EventsControllers.read)

router.get('/events/:id', EventsControllers.findId)

router.post('/events', EventsControllers.create)

router.put('/events/:id', EventsControllers.update)

router.delete('/events/:id', EventsControllers.delete)

module.exports = router