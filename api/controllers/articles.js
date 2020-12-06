
const mongoose = require('mongoose')
const Article = require('../models/articles')

module.exports = {
    getAllArticles: (req, res) => {
        Article.find().then((articles)=>{
            res.status(200).json({
                articles
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        })
    },
    postArticle: (req, res) => {      
        const {title, description, content} = req.body

        const article = new Article({       
            _id: new mongoose.Types.ObjectId(),
            title,
            description,
            content
        })
        
        article.save().then(()=>{
            res.status(200).json({
                message: 'created article'
            })
        }).catch(error =>{
            res.status(500).json({
                error
            })
        })
    },
    getArticle: (req, res) => {
        const articleId = req.params.articleId
        Article.findById(articleId).then(article => {
            res.status(200).json({
                article
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        })
    },
    patchArticle: (req, res) =>{
        const articleId = req.params.articleId
        res.status(200).json({
            message: `update article - ${articleId}`
        })
    },
    deleteArticle: (req, res) =>{
        const articleId = req.params.articleId
        res.status(200).json({
            message: `delete article - ${articleId}`
        })
    }
}