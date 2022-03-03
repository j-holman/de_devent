const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { errHandler } = require("./middleware/errHandler");
const connectDB = require("./config/db");
connectDB();

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use(errHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
