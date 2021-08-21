const bodyParser = require('body-parser')
const userRoutes = require('./usersRoutes')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(userRoutes)
}
