const express = require('express');

const {path: fileRouterPath, router: fileRouter} = require('./file-router');

const router = express.Router();

router.use(fileRouterPath, fileRouter);

module.exports = router;