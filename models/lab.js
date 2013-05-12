var lab = {
   search: function (params, callback) {
      callback(null, {
         labs: [
            { title: 'Introduction to Node.js', date: new Date(), description: 'An introduction to Node.js architecture and some examples.', duration: '1 hour' },
            { title: 'Express.js', date: new Date(), description: 'How to create an express.js application.', duration: '20 min' },
            { title: 'Socket.io', date: new Date(), description: 'Real-time web applications using socket.io.', duration: '15 min' },
         ],
         tags: ['intro', 'socket.io', 'express.js', 'real-time', 'jade']
      });
   }
};

module.exports = lab