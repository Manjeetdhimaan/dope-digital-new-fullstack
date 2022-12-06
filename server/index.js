// newUser
//0rQfUS6zuvCjbcEA
require('dotenv').config();
const express = require('express');
const  compression = require('compression');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;

const MONGODB_URI = 'mongodb+srv://dopedigital:dopedigital@cluster0.v2nfoxa.mongodb.net/dopedigitalBlogs?retryWrites=true&w=majority';
const app = express();
var path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.json());

 
// compress all responses
app.use(compression())
// Routes
const blogRoutes = require('./api/blogRoutes');

app.use('/api/Blogs', blogRoutes);

app.use(express.static(path.join(__dirname, 'www')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'www/index.html'));
});


//  mongodb+srv://newUser:<password>@cluster0.qcyjq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(process.env.MONGODB || MONGODB_URI, { useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`app running on port ${port} and connected with db`)
        })
    }).catch(err => console.log(err))