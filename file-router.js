const express = require('express');
const multer = require('multer');
const upload = multer();

const router = express.Router();

const fields = [{
  name: 'upload',
  maxCount: 3,
}];

router.post('/', upload.fields(fields), (req, res) => {
  try {
    const file = req.files.upload.find(Boolean);

    res.json({
      size: file.size,
    });
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
});

module.exports = {
  path: '/file-metadata',
  router,
};