const express = require('express');
const { default: mongoose } = require('mongoose');


const path = require('path');
const { config } = require('process');
const port = 8000;
const db = require('./config/mongoose');
const Contact = require('./models/contact');
const app = express();
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


var contactList = [
    {
        name: "suraj",
        phone: "9650809586"
    },
    {
        name: "jeet",
        phone: "8287983257"
    }];



app.get('/home', function (req, res) {
    return res.render('home', {
        title: "my contact_list",
        contact_list: contactList
    })
});

app.get('/practise', function (req, res) {
    return res.render('practise', { title: "my practise" })
})
app.post('/new-contact', function (req, res) {
    // its for without db
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    Contact.create({
        name:req.body.name,
        phone:req.body.name,
    },function(err,newcontact){
        if(err){console.log('there is a error')}
        console.log('******' ,newcontact);
        return res.redirect('back')

    })
    })
  


app.listen(port, function (err) {
    if (err) {
        console.log('err', err);
    }
    console.log('server is running', port);
});