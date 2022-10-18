const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../model/userSchema')
const applicationModel = require('../model/applicatonSchema')


const userHelper = {

    doSignup: ({ field }) => {
        return new Promise(async (resolve, reject) => {
            let user = await userModel.findOne({ email: field.email })
            if (!user) {
                field.password = await bcrypt.hash(field.password, 10)

                userModel.create(field
                ).then((response) => {
                    const user = {
                        userId: response._id,
                        name: response.fname
                    }

                    console.log(user)
                    resolve(user)
                }).catch(err => reject(err))
            }else{
                resolve({msg:'user Alredy Exist'})
            }


        })

    },
    dologin: ({ field }) => {
        console.log(field)
        return new Promise((resolve, reject) => {

            userModel.findOne({ email: field.email }).then((userData) => {

                if (userData) {
                    bcrypt.compare(field.password, userData.password, (err, res) => {
                        if (err) { reject(err) }
                        if (res) {

                            const user = {
                                userId: userData._id,
                                name: userData.fname
                            }
                            const token = jwt.sign(
                                {
                                    userId: userData._id,
                                    name: userData.fname,
                                    email:userData.email
                                },
                                process.env.TOKEN_KEY,
                                {
                                    expiresIn: "2h",
                                }
                            );

                            user.token = token;
                            console.log(user)
                            resolve(user)

                        } else {
                            resolve({ msg: 'user not found' })
                        }
                    })
                } else {
                    resolve({ msg: 'user not found' })
                }

            }).catch(err => reject(err))
        })

    },
    saveApplication: (data) => {
        console.log(data)
        return new Promise((resolve, reject) => {
            applicationModel.create(data).then((rsponse) => {
                resolve(rsponse)
            }).catch(err => reject(err))
        })
    },
    getappllicationStatus: (id) => {
        return new Promise((resolve, reject) => {
            applicationModel.find({ user: id }).then(data => {
                resolve(data)
            }).catch(err => reject(err))
        })

    }
}

module.exports = userHelper