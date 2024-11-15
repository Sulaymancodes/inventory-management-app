const express = require('express');
const path = require('node:path');
const app = express();
const itemsRouter = require('./routes/itemsRouter');
const categoryRouter = require('./routes/categoryRouter');

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use('/', itemsRouter);
app.use('/', categoryRouter);
app.use('/', (req, res) => {
    res.render('index');
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Your app is running on port:${PORT} successfully`);
})