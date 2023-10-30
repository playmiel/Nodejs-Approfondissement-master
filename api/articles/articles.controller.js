const ArticleService = require('./articles.service');

exports.createArticle = async (req, res) => {
    const articleData = {
        title: req.body.title,
        content: req.body.content,
        user: req.user._id,
        status: 'draft' // Default status
    };
    const article = await ArticleService.createArticle(articleData);
    // Add real-time communication here if needed
    res.status(201).send(article);
}

exports.getUserArticles = async (req, res) => {
    const userId = req.params.userId;
    const articles = await ArticleService.getArticlesByUserId(userId);
    res.send(articles);
}

exports.updateArticle = async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).send({ message: 'Access denied. Only admin can update articles.' });
    }
    const updatedArticle = await ArticleService.updateArticle(req.params.id, req.body);
    res.send(updatedArticle);
}

exports.deleteArticle = async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).send({ message: 'Access denied. Only admin can delete articles.' });
    }
    await ArticleService.deleteArticle(req.params.id);
    res.send({ message: 'Article deleted successfully' });
}
