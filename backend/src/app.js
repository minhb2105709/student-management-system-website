const express = require('express');
const cors = require('cors');

const JSend = require('./jsend');
const knex = require('./database/knex');

const {
    resourceNotFound,
    handleError,
} = require('./controllers/errors.controller');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/check-connection', async (req, res) => {
    try {
        await knex.raw('SELECT 1');
        res.json({ message: 'Kết nối thành công đến cơ sở dữ liệu!' });
    } catch (error) {
        res.status(500).json({ error: 'Không thể kết nối đến cơ sở dữ liệu', details: error.message });
    }
});


app.get('/', (req, res) => {
    return res.json(JSend.success());
});


// handle 404 response
app.use(resourceNotFound);
// global error handler
app.use(handleError);

module.exports = app;