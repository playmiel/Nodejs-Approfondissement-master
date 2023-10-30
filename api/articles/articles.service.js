const Article = require('./articles.model');

exports.createArticle = async (data) => {
    const article = new Article(data);
    return await article.save();
}

exports.updateArticle = async (id, data) => {
    return await Article.findByIdAndUpdate(id, data, { new: true });
}

exports.deleteArticle = async (id) => {
    return await Article.findByIdAndDelete(id);
}

exports.getArticlesByUserId = async (userId) => {
    return await Article.find({ user: userId }).populate({
        path: 'user',
        select: '-password'  // Excluding the password field
    });
}
