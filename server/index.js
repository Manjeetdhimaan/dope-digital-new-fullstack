// newUser
//0rQfUS6zuvCjbcEA
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 4949;
const app = express();
var path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.json());
// Routes
const blogRoutes = require('./api/blogRoutes');

app.use('/getBlogs', blogRoutes);

app.use(express.static(path.join(__dirname, 'www')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'www/index.html'));
});


//  mongodb+srv://newUser:<password>@cluster0.qcyjq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(process.env.MONGODB, { useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`app running on port ${port} and connected with db`)
        })
    }).catch(err => console.log(err))