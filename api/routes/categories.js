const express = require("express")
const router = express.Router() 

const {getAllCategories, postCategory, deleteCategory, patchCategory} = require('../controllers/categories')

router.get('/', getAllCategories)
router.post('/', postCategory)
router.delete('/:categoryId', deleteCategory)
router.patch('/:categoryId', patchCategory)

module.exports = router