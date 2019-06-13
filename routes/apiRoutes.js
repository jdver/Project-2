// Dependencies
const Example = require('../models/example')

/**
 * apiRoutes: This routes file returns data to the client/view
 * It differs from the htmlRoutes.js file in that it responds to the client/view requests with data
 * where the htmlRoutes.js responds with a handlebars page
 *
 */

module.exports = function (app) {
  // Get all examples
  app.get('/api/examples', function (req, res) {
    Example.findAll()
      .then(function (dbExamples) {
        res.json(dbExamples)
      })
  })
  // Get a single quote by typing the quote id into the url
  // adding a comment for the Travis CI build
  app.get('/api/examples/:id', function (req, res) {
    Example.findAll()
      .then(function (dbExamples) {
        var quoteID = req.params.id
        res.json(dbExamples[quoteID])
      })
  })

  // Create a new example
  app.post('/api/examples', function (req, res) {
    Example.create(req.body)
      .then(function (dbExample) {
        res.json(dbExample)
      })
  })

  // Delete an example by id
  app.delete('/api/examples/:id', function (req, res) {
    Example.destroy(req.params)
      .then(function (dbExample) {
        res.json(dbExample)
      })
  })
}
