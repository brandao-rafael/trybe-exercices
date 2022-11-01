const express = require('express');
const {
  verifyDescription,
  verifyName,
  verifyPrice,
  verifyDate,
  verifyRating,
} = require('../middleware/verifyBodyData');

const router = express.Router();

router.post('/activities',
  verifyName,
  verifyDescription,
  verifyPrice,
  verifyDate,
  verifyRating, (_req, res) => {
  res.status(201).json({ 'message': "Atividade cadastrada com sucesso!"});
});

module.exports = router;