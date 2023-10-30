const express = require('express');
const router = express.Router();
const ArticlesController = require('./articles.controller');
const authenticationMiddleware = require('../middlewares/auth'); 
const UserController = require('./users/users.controller');


router.get('/:userId/articles', UserController.getUserArticles);

router.post('/', authenticationMiddleware, ArticlesController.createArticle);
router.put('/:id', authenticationMiddleware, ArticlesController.updateArticle);
router.delete('/:id', authenticationMiddleware, ArticlesController.deleteArticle);

module.exports = router;
