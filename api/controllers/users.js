module.exports = {
    signUp: (req, res)=>{
        res.status(200).json({
            message: 'user signed up'
        })
    },
    login: (req,res)=>{
        res.status(200).json({
            message: 'user loged in'
        })
    }
}