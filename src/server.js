const config = require('../config/config.json')
const logger = require('./utils/logger')

const express = require('express')
const cors = require('cors')
const compression = require('compression')
const bodyParser = require('body-parser')

const api = express()

api.use(cors());
api.use(compression());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.listen(config.server.port, err => {
    if (err) {
        logger.error(err)
        process.exit(1)
    }

    logger.info(`API is now running on port ${config.server.port} in ${config.env} mode`);
})

module.exports = api