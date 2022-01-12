const express = require('express');
const app = express();
const testJson = require('./test/test.json');

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.get('/', (req, res) => {
    // res.send("Hello NodeJS");
   // res.json(testJson);
   res.render('index', {name:'전병윤',
                         sex: 'male'   });
});


app.get('/test/:email', (req, res) => {
    // res.send("Hello NodeJS");
   // res.json(testJson);
   testJson.email = req.params.email; //cf. req.body, params, query
   testJson.aa = req.query.aa;
   res.json(testJson);
});



const server = app.listen(7000, function(){
    console.log("Express's started on port 7000");
});
