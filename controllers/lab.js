var marked = require('marked');
var fs = require('fs');
var hljs = require('highlight.js');

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  langPrefix: 'language-',
  highlight: function (code, lang) {
   if (lang == 'js') lang = 'javascript';
   return hljs.highlight(lang, code).value;
  }
});

module.exports = function (app) {
   app.get('/lab/:lab', function (req, res) {
      fs.readFile('./labs/2012-11-1-repl.md', function (err, data) {
         var lab = { markdown: '', title: 'Lab title', markdown: data.toString() };
         res.render('lab', {marked:marked, lab:lab, title: 'Lab - ' + lab.title });
      });
   });
};