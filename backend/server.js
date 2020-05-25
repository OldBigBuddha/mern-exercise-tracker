const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// Import Router
const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Configuration Route
app.use('/exercises', exercisesRouter);
app.use('/users', userRouter);

const DATABASE_URL = process.env.DATABASE_URI;
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Connection is successfully.");
});


app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
})
