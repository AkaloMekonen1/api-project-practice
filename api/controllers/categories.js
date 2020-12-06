
module.exports = {
    getAllCategories: (req,res)=>{
        res.status(200).json({
            message: 'get all categories'
        })
    },
    postCategory: (req, res)=>{
        res.status(200).json({
            message: 'create categories'
        })
    },
    deleteCategory: (req,res)=>{
        const categoryId = req.params.categoryId
        res.status(200).json({
            message: `delete category ${categoryId}`
        })
    },
    patchCategory: (req,res)=>{
        const categoryId = req.params.categoryId
        res.status(200).json({
            message: `patch categories ${categoryId}`
        })
    }
}