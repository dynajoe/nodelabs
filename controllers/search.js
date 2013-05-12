var labs = require('../models/lab');

module.exports = function (app) {
   app.get('/', function (req, res) {
      labs.search({ query: "*:*", pageSize: "20" }, function (err, results) {
         res.render('search', { title: '', labs: results.labs });
      });
   });
};

