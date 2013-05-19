var data = require('../data/data')

var lab = {
   search: function (params, callback) {
      callback(null, {
         labs: data.labs,
         tags: ['intro', 'socket.io', 'express.js', 'real-time', 'jade']
      });
   }
};

module.exports = lab