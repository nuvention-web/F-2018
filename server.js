//var React = require('react');
var express = require ('express');
var bodyParser = require ('body-parser');
var Textinput = require ('./models/textinput');
var mongoose = require ('mongoose');
var fetch = require ('node-fetch');
var cors = require('cors');
const router = express.Router();
const app = express();



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

/*
router.get('/text', (req, res) => {
    res.send(data);
});
*/

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


mongoose.connect('mongodb://localhost/teamf', function(err) {
    console.log(`Listening on port ${process.env.PORT || 8888}`);
    app.listen(process.env.PORT || 8888);
})


