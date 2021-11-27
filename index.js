// import express library
const express = require('express');
// initiate express framework
const app = express();
// assign port
const port = 8000;
// import layout
const expressLayouts = require('express-ejs-layouts');

// use to setup the assets
app.use(express.static('./assets'));
// use to setup the layouts
app.use(expressLayouts);
// use express router
app.use('/', require('./routes/index'));

// setting up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port ${port}`);
});