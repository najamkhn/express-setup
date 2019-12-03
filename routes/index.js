const routes = require('express').Router()

routes.get('/', (req, res) => res.render('index.html', {username: 'najam'}))
routes.get('/v1/api', (req, res) => res.status(200).json({ message: 'Connected!' }))

module.exports = routes;