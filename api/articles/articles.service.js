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
