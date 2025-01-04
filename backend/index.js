const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 5002;
const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

app.get('/', (req, res) => {
    res.send("You are connected to Suraj's DataBase");
});
app.use(cors())
app.use(bodyParser.json());
app.use('/tasks', TaskRouter)

app.listen(PORT, () => {
    console.log(`Server is running on PORT=${PORT}`);
})