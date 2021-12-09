const express = require("express");
const app = express();

require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));


const jokeRoutes = require('./routes/jokes.routes');
jokeRoutes(app);

app.listen( 8000, () => console.log("You have successfully connected to port 8000") );
