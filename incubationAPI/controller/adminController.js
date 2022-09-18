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
        adminHelper.getApplication().then((applicationData) => {
            res.json({ applicationData })
        }).catch((err) => {
            res.json({ err })
        })


    },
    getApplicationData: (req, res, next) => {

        adminHelper.getApplicationData(req.body.id).then(data => {
            res.json(data)
        }).catch(err => res.json(err))
    },
    updateProcess: (req, res, next) => {
        adminHelper.updateApplication(req.body).then(response => {
            res.json(response)
        }).catch(err => res.json(err))


    }
}