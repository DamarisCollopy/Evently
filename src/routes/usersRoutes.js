const {Router} = require('express')
const UsersControllers = require('../controllers/UsersControllers')

const router = Router()

router.get('/users', UsersControllers.read)

router.get('/users/:id', UsersControllers.findId)

router.post('/users', UsersControllers.create)

router.put('/users/:id', UsersControllers.update)

router.delete('/users/:id', UsersControllers.delete)

module.exports = router