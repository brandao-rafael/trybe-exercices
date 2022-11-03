const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

const existingId = (req, res, next) => {
  if (teams.some((team) => team.id === Number(req.params.id))) {
    next();
  } else {
    res.sendStatus(400);
  }
};

module.exports = existingId;