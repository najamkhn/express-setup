const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const path = require('path')

const app = express()
const port = process.argv.PORT || 3000

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('views', path.join(__dirname, '/views'))
app.get('/', routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
