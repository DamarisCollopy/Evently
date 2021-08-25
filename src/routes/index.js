const bodyParser = require('body-parser')
const userRoutes = require('./usersRoutes')
const eventRoutes = require('./eventsRoutes')
const act = require('./activitiesRoutes')

module.exports = app => {
    app.use(bodyParser.json(),
    bodyParser.urlencoded({ extended: false})
    ,userRoutes
    ,eventRoutes
    ,act)
}
