


var express = require('express');

var app = express();


var handlebars = require('express3-handlebars')
    .create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000); //we use this line to override the  port by setting an environment value
//before you start the server

//this is the  home page

app.get('/', function (req, res) {
    
   res.render('home')

});


//this is the about page

app.get('/about', function (req, res) {
    
    res.render('about')

});

//custom 404 page

app.use(function (req, res) {
    res.status(404);
     res.render('404');
    
});

//custom 500 page  //cannot reach the server

app.use(function (err, req, res, next) {
    console.error(err.stack);
     res.status(500); 
     res.render('500');

});



app.listen(app.get('port'), function () {
    
    console.log('express started on http://localhost:' +
    
        app.get('port') + '; press ctrl+c to exit.'
    );
});

