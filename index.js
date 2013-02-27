var olinapps = require('olinapps')
  , express = require('express')
  , async = require('async')
  , request = require('request');

var app = express();
app.use(express.bodyParser());
app.use(express.cookieParser('hihi'));
app.use(express.session());

app.post('/login', olinapps.login);
app.all('/logout', olinapps.logout);
app.all('/*', olinapps.middleware);
app.all('/*', olinapps.loginRequired);

app.get('/', function (req, res) {
  res.send('<form action="list"><h1>Word count stats</h1> Search for these keywords on helpme@lists.olin.edu:<br><input name="keywords"><button>Submit</button></form>')
})

app.get('/list', function (req, res) {
  olinapps.lists.search(req, 'helpme', req.query.keywords, function (err, messages) {
    // Perform bad stats
    var stats = {};
    messages.forEach(function (m) {
      var words = m.text.toLowerCase().replace(/[^\w\s]/g, ' ').split(/\s+/).filter(function (w) {
        return w.length;
      });
      words.forEach(function (word) {
        stats[word] || (stats[word] = 0);
        stats[word]++;
      });
    });
    var sortedstats = {};
    Object.keys(stats).sort(function (a, b) {
      return stats[b] - stats[a];
    }).filter(function (key) {
      return !key.match(/^\d+$/);
    }).forEach(function (key) {
      sortedstats[key] = stats[key];
    });
    res.json(sortedstats);
  })
})

app.listen(3000);
console.log('Open this link: http://localhost:3000/');