//var React = require('react');
var express = require ('express');
var bodyParser = require ('body-parser');
var Textinput = require ('./models/textinput');
var mongoose = require ('mongoose');
var fetch = require ('node-fetch');
var cors = require('cors');
var session = require ('express-session');
import router from './router';
const app = express();
const path = require('path');



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//use sessions for tracking logins
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
  }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

/*
router.get('/text', (req, res) => {
    res.send(data);
});
*/
/*
router.post('/text', (req, res)=> {
	let input = req.body.text;
    console.log(input);
    let inputSchema = new Textinput(input);
    inputSchema.save()
    .then(item => {
        res.send('activity sent to database');
    })
    .catch(err => {
        res.status(400).send('unable to save to database');
    })
})

router.get('/api', (req, res) => {
    console.log("fetching example data with authenticated user in Onet Database")

    fetch('https://services.onetcenter.org/ws/mnm/careers/13-2011.01/skills', { 
        headers: { 'Authorization': 'Basic c3RpbGxfdW5kZXJfY29uc3RydWM6NzI4MnJjeQ==', 'accept': 'application/json'},
        })
        .then(res => {
            res.json()
            .then(json => {
                console.log(json)
            })
        });
    res.send("got api call!")
})
*/


//mongoose.connect('mongodb://localhost/teamf', function(err) {
mongoose.connect('mongodb://admin:teamf@ds217350.mlab.com:17350/teamf', function(err) {
    console.log(`Listening on port ${process.env.PORT || 8888}`);
    app.listen(process.env.PORT || 8888);
})


