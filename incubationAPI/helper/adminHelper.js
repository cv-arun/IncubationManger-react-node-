const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const adminmodel = require('../model/adminSchema');
const applicationModel = require('../model/applicatonSchema');
const userModel = require('../model/userSchema')



const adminHelper = {
    adminLogin: (data) => {
        return new Promise(async (resolve, reject) => {
            let admin = await adminmodel.findOne({ email: data.email })
            if (!admin) {
                resolve({ invalidCredential: true })
            } else {
                bcrypt.compare(data.password, admin.password, (err, res) => {
                    if (err) { reject(err) }
                    if (!res) { resolve({ invalidCredential: true }) }
                    else {
                        const admin = {}
                        const token = jwt.sign(
                            {
                                adminId: admin._id,
                                email: admin.email
                            },
                            process.env.TOKEN_KEY,
                            {
                                expiresIn: "2h",
                            }
                        );
                        admin.token = token;
                        resolve(admin)
                    }

                })
            }

        })
    },
    getApplication: () => {
        return new Promise((resolve, reject) => {
            applicationModel.find({}).populate('user').then((response) => {
                resolve(response)
            }).catch(err => reject(err))
        })
    },
    getApplicationData: (applicationId) => {
        console.log(applicationId)
        return new Promise((resolve, reject) => {
            applicationModel.findById(applicationId).then(data => {
                applicationModel.findByIdAndUpdate(applicationId, { opened: true }).then(response => {
                    resolve(data)
                }).catch(err => reject(err))

            }).catch(err => reject(err))
        })
    },
    updateApplication: ({ action, id }) => {
        return new Promise((resolve, reject) => {
            applicationModel.findByIdAndUpdate(id, { approve: action }).then(data => {
                resolve(data)
            }).catch(err => reject(err))
        })
    },
    getApprovedCompanies: () => {
        return new Promise((resolve, reject) => {
            applicationModel.find({ approve: 'Approved' }, { Company: 1 }).then((data) => {
                applicationModel.find({ approve: 'Slote_alloted' }, { slot: 1 }).then((slot) => {
                    resolve([data, slot])
                })

            }).catch(err => reject(err))
        })
    },
    bookSlot: ({ slot, applicationId }) => {
        return new Promise((resolve, reject) => {
            applicationModel.findByIdAndUpdate(applicationId, { slot: slot, approve: 'Slote_alloted' }).then(response => {
                resolve(response)
            }).catch(err => reject(err))
        })
    },
    getOneApplication: ({ slot }) => {
        return new Promise((resolve, reject) => {
            applicationModel.findOne({ slot }, { Company: 1 }).then(data => {
                resolve(data)
            }).catch(err => reject(err))
        })
    },
    getUsers:()=>{
        return new Promise((resolve,reject)=>{
            userModel.find({}).then(data=>{
                resolve(data)
            }).catch(err=>reject(err))
        })
    },
    editUser:({fname,email,companyName,id})=>{
        return new Promise((resolve,reject)=>{
            userModel.findByIdAndUpdate(id,{fname,email,companyName}).then(data=>{
                resolve(data)
            }).catch(err=>reject(err))
        })
    }
}

module.exports = adminHelper;