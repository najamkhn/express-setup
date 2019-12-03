const routes = require('express').Router()

routes.get('/', (req, res) => res.render('index.html', {bar: 'bar'}))
routes.get('/v1/api', (req, res) => res.status(200).json({status: 'Running!'}))

module.exports = routes