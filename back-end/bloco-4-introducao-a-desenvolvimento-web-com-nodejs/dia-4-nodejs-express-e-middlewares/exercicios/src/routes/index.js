const express = require('express');

const router = express.Router();

const ecoRouter = require('./ecoRouter');

router.use(ecoRouter);

module.exports = router;