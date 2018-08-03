import express from 'express';
// allows us to get the right data from the api
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/pmsRoutes';
 
// creates an express application 
const app = express();
// sets the port top 3000
const PORT = 3000;

// mongoose connection creation
mongoose.Promise = global.Promise; // You don't wait for it
// localhost is a local url, change if using an online connection
mongoose.connect('mongodb://localhost/PMSdb', {
    useMongoClient: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// passes the express module to the routes method to give access to the endpoints
routes(app);

// serving static files
app.use(express.static('public'))

// runs when endpoint / is hit
app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

// prints to the terminal that is running nodemon
app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);