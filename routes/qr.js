const express = require('express');
var router = express.Router();
const QRCode = require('qrcode');

/* GET QR page. */
router.get('/', function(req, res, next) {
  res.render('qr', { title: 'QR Generator' });
});

router.get('/generator', (req, res) => {
  const { data } = req.query;
  if (!data) {
    return res.status(400).send('Data query param is required');
  }

  res.setHeader('Content-Type', 'image/png');
  QRCode.toBuffer(data, (err, buffer) => {
    if (err) {
      return res.status(500).send('Error generating QR code');
    }
    res.send(buffer);
  });
});

module.exports = router;