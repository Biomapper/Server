const express = require('express');
const app = express()
const port = 3000;

// import routes
const homeRouter = require('./routes/index');

app.use('/', homeRouter);

// running the server
app.listen(port, (err) => {
    if(err) {
        console.log(err);
    }
    console.log(`Example app listening at http://localhost:${port}`);
});
