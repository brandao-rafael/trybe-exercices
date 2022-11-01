function verifyName(req, res, next) {
  const { name } = req.boby;
  if (name.length === 0) return res.status(400).json({ "message": "O campo name é obrigatório" });
  if (name.length < 4) return res.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" });
  next();
};

function verifyPrice(req, res, next) {
  const { price } = req.body;
  if(price === undefined) return res.status(400).json({ "message": "O campo price é obrigatório" });
  if(Number(price) < 0 || typeof price !== 'number') return res.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" });
  next();
};

function verifyDescription(req, res, next) {
  const { description } = req.body;
  const { createdAt, rating, difficulty } = description;

  switch (true) {
    case !description:
      res.status(400).json({ "message": "O campo description é obrigatório" });
      break;
    case !createdAt:
      res.status(400).json({ "message": "O campo createdAt é obrigatório" });
      break;
    case !rating:
      res.status(400).json({ "message": "O campo rating é obrigatório" });
      break;
    case !difficulty:
      res.status(400).json({ "message": "O campo difficulty é obrigatório" });
      break;
    default:
      next();
  };
};

function verifyDate(req, res, next) {
  const { createdAt } = req.body.description;
  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!isFormatDate.test(createdAt)) return res.status(400).json({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" });
  next();
};

function verifyRating(req, res, next) {
  const { rating } = req.body.description;
  if (Number(rating) > 5 || Number(rating) < 1) return res.status(400).json({ "message": "O campo precisa ser um número inteiro entre 1 e 5"});
  next();
};

function verifyDifficult(req, res, next) {
  const { difficulty } = req.body.description;
  const levels = ["Fácil", "Médio", "Difícil"];
  const validateDifficulty = levels.every((level) => level !== difficulty);
  if (validateDifficulty) return res.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'"  });
};

module.exports = {
  verifyName,
  verifyPrice,
  verifyDescription,
  verifyDate,
  verifyRating,
};