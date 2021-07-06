const express = require('express');
const router = express.Router();

// Import Controllers
const { getTasks } = require('../controllers/tasks')

router.get('/', getTasks)

module.exports = router;