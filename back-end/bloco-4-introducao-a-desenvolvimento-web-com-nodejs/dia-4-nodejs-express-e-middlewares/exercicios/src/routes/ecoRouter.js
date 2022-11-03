const express = require('express');
const {
  verifyDescription,
  verifyPrice,
  verifyDate,
  verifyRating,
} = require('../middleware/verifyBodyData');

const router = express.Router();

router.post('/activities',
  verifyDescription,
  verifyPrice,
  verifyDate,
  verifyRating, (_req, res) => {
  res.status(201).json({ 'message': "Atividade cadastrada com sucesso!"});
});

module.exports = router;