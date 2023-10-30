const ArticleService = require('./articles.service');
const UserService = require('../users/users.service'); // Assuming you have a users service

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
