const express = require('express');
const app = express();
const port = 3000;

// import routes
const homeRouter = require('./routes/index');
const dataRouter = require('./routes/data');

app.use('/', homeRouter);
app.use('/base-tiles', dataRouter);

// running the server
app.listen(port, (err) => {
    if(err) {
        console.log(err);
    }
    console.log(`Example app listening at ${port}`);
});
