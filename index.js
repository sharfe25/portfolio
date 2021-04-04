const express = require('express');
const bodyParser=require('body-parser');
const app=express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

require('dotenv').config()
//settings
app.set('port', process.env.PORT);

//Motor de pplantillas 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'))
app.use('/Projects', require('./router/projects'))
//rutas  
app.use('/', require('./router/routes'))

app.use((req, res, next)=>{
    res.status(404).render("404")
})

//starting the server
app.listen(app.get('port'),()=>{
    console.log('Server on port ', app.get('port'))
})