const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('/places/new')
});

router.get('/', (req, res) => {
    res.send('GET /places/:id')
})

module.exports = router

// GET /places
app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/Thai.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Cat.jpg'
      }]      
    res.render('places/index', {places})
  })


