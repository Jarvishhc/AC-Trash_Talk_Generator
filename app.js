// Include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const generateTrashTalks = require('./generateTrashTalks')

// Alternative way to set up template engine
// const hbs = exphbs.create({
//   defaultLayout: 'main',
//   helpers: {
//     is: function (target, expectedTarget) {
//       return (target === expectedTarget) ? 'checked' : ''
//     }
//   }
// })

// app.engine('handlebars', hbs.engine)
// app.set('view engine', 'handlebars')

// Set up template engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: {
    is: function (target, expectedTarget) {
      return (target === expectedTarget) ? 'checked' : ''
    }
  }
}))
app.set('view engine', 'handlebars')

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// Use static files
app.use(express.static('public'))

// Set up routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log(req.body)
  const target = req.body.target
  const trashTalk = generateTrashTalks(target)

  res.render('index', { trashTalk, target })
})

app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})
