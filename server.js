const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static('public'));

let parks = [];
let id = 0;

app.get('/api/parks', (req,res) => {
  res.send(parks);
});

app.post('/api/parks', (req,res) => {
  id = id + 1;
  let park = {id:id, message:req.body.message,one:req.body.one,two:req.body.two,three:req.body.three,four:req.body.four,five:req.body.five};
  parks.push(park);
  res.send(park);
});

app.put('/api/parks/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let parksMap = parks.map(park => { return park.id; });
  let index = parksMap.indexOf(id);
  let park = parks[index];
  park.message = req.body.message;
  park.five = req.body.five;
  park.four = req.body.four;
  park.three = req.body.three;
  park.two = req.body.two;
  park.one = req.body.one;
  // handle drag and drop re-ordering
  if (req.body.orderChange) {
    let indexTarget = parksMap.indexOf(req.body.orderTarget);
    parks.splice(index,1);
    parks.splice(indexTarget,0,park);
  }
  res.send(park);
}); //changed to handle drag and drop

app.delete('/api/parks/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let removeIndex = parks.map(park => { return park.id; }).indexOf(id);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that park doesn't exist");
    return;
  }
  parks.splice(removeIndex, 1);
  res.sendStatus(200);
});


app.listen(3000, () => console.log('Go to localhost:3000 to listen!!!'))
