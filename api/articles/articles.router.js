const express = require('express');
const router = express.Router();
const ArticlesController = require('./articles.controller');
const authenticationMiddleware = require('../middleware/authentication'); // Assuming you have an authentication middleware

router.post('/', authenticationMiddleware, ArticlesController.createArticle);
router.put('/:id', authenticationMiddleware, ArticlesController.updateArticle);
router.delete('/:id', authenticationMiddleware, ArticlesController.deleteArticle);

module.exports = router;
