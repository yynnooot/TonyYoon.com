const express = require('express');
const app = express();
const path = require('path')
const morgan = require('morgan');
const bodyParser = require('body-parser');

require('dotenv').config();


app.use(morgan('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')))

app.post('/',(req,res)=>{

  const mailgun = require('mailgun-js')({apiKey: process.env.API_KEY, domain: process.env.DOMAIN});

  const postmaster = `<postmaster@${process.env.DOMAIN}>`;

  var data = {
    from: `Mailgun/TYPortfolio ${postmaster}`,
    to: 'tony.t.yoon@gmail.com',
    subject: req.body.subject,
    html: `<html><p>name: ${req.body.name} <br/>email: ${req.body.email} <br/>message: ${req.body.message}</p></html>`
  };
 
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
})

app.use('*',(req,res) => {
  console.log(process.env.API_KEY)
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })



app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 3000; 
app.listen(port, function ()  {

  console.log(`Your server, listening on port ${port}`);
});