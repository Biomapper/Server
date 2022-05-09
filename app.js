const express = require('express');
const app = express();
const port = 3000;

// import routes
const homeRouter = require('./routes/index');
const dataRouter = require('./routes/data');
const valRouter = require('./routes/val');

app.use('/', homeRouter);
app.use('/base-tiles', dataRouter);
app.use('/val', valRouter)

// running the server
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Example app listening at ${port}`);
});
