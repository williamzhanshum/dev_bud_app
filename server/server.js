const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = 'devBud';

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// --- CONNECT TO DB USING MONGOOSE ---
require('./config/mongoose.config')(DB);

// --- IMPORTS ROUTES after teh DB is connected ---
require('./routes/dev.routes')(app);

app.listen(PORT, () => console.log(`>> SERVER IS UP ON ${PORT} <<`));
