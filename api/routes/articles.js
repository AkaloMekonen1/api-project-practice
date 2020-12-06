const express = require("express")
const router = express.Router()

const {getAllArticles, postArticle, getArticle, patchArticle, deleteArticle} = require('../controllers/articles')

router.get('/', getAllArticles)
router.post('/', postArticle)
router.get('/:articleId', getArticle)
router.patch('/:articleId', patchArticle)
router.delete('/:articleId', deleteArticle)

module.exports = router