const express = require("express");
const app = express();
const cors = require("cors");

// Utility Modules
const config = require('./utils/config')
const logger = require('./utils/logger')
const { requestLogger, errorHandler } = require("./utils/middleware")

// Contollers

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.get("*", (request, response) => {
  response.send("Hello World")
})
app.listen(config.PORT, () => {
    logger.info('Sever live on PORT ', config.PORT);
})