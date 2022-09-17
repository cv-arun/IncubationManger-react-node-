const adminHelper = require('../helper/adminHelper');



module.exports = {
    login: (req, res, next) => {
        adminHelper.adminLogin(req.body).then((data) => {
            console.log(data)
            if (data.token) {
                res.json({ data })
            } else {
                res.json({ msg: 'invalid credential' })
            }
        })
    },
    getApplication: (req, res, next) => {
        adminHelper.getApplication().then((applicationData)=>{
            res.json({applicationData})
        }).catch((err)=>{
            res.json({err})
        })


    }
}