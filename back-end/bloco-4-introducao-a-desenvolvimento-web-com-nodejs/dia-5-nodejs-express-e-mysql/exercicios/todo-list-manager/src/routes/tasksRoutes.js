const express = require('express');
const tasksDB = require('../db/tasksDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const tasks = req.body;
  try {
    const [result] = await tasksDB.insert(tasks);
    res.status(201).json({ message: `Tarefa cadastrada com o id ${result.insertId}` });
  } catch (error) {
    res.status(500).json({ message: 'Não foi possível cadastrar a tarefa.' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const task = req.body;
    const [result] = await tasksDB.update(task, id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Tarefa de id ${id} atualizada com sucesso` });
    } else {
      res.status(404).json({ message: 'Tarefa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await tasksDB.remove(id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Pessoa de id ${id} excluída com sucesso` });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.sqlMessage });
  }
});

router.get('/', async (req, res) => {
  try {
    const [result] = await tasksDB.findALl();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await tasksDB.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Tarefa não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.sqlMessage });
  }
});

module.exports = router;
