
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const uri = 'mongodb+srv://prehansgupta:1b6sy0Hd9xRjXLsX@cluster0.tlqtwxl.mongodb.net/portfolio?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
       console.log('MongoDB Connected…')
     })
     .catch(err => console.log(err))

    const userSchema={
      name: String,
      email: String,
      number: String,
      subject: String,
      content:String

    } 
    const user =mongoose.model("user" , userSchema);

     
  // Your route definitions
  app.get('/public/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'style.css'));
  });

  app.get('/public/style1.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'style1.css'));
  });

  app.get('/public/mypic.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mypic.jpg'));
  });
  app.get('/public/favicon.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'favicon.png'));
  });

  app.get('/public/img1.jpeg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'img1.jpeg'));
  });
  app.get('/public/img2.jpeg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'img2.jpeg'));
  });
  app.get('/public/img3.jpeg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'img3.jpeg'));
  });
  app.get('/public/img4.jpeg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'img4.jpeg'));
  });
  app.get('/public/img5.jpeg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'img5.jpeg'));
  });
  app.get('/public/img6.jpeg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'img6.jpeg'));
  });

  app.get('/public/binary_rain.mp4', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'binary_rain.mp4'));
  });

  app.get('/public/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'script.js'));
  });
  
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  })
    app.post('/' , function(req, res){
       let newuser= new user({
      name: req.body.name,
      email: req.body.email,
      number:req.body.number,
      subject:req.body.subject,
      content:req.body.content
       })
       newuser.save();
       res.redirect('/');
    });
  app.get('/experience.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'experience.html'));
  });

  // Start the server after the MongoDB connection is established
 

app.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
  });


