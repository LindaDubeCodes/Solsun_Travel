var app = express();

var handlebars = require('handlebars')
.create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');


var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000); //we use this line to override the  port by setting an environment value
//before you start the server

//this is the  home page

app.get('/', function (req, res) {
    
    res.type('text/plain');

    res.send('Welcome to Solsun');

});


//this is the about page

app.get('/about', function (req, res) {
    res.type('text/plain');

    res.send('About Solsun');

});

//custom 404 page

app.use(function (req, res) {
    res.type('text/plain'); res.status(404); res.send('404 Not Found');
    
});

//custom 500 page  //cannot reach the server

app.use(function (err, req, res, next) {
    console.error(err.stack); res, type('type/plain'); res.status(500); res.send('500 - server error');

});



app.listen(app.get('port'), function () {
    
    console.log('express started on http://localhost:' +
    
        app.get('port') + '; press ctrl+c to exit.'
    );
});