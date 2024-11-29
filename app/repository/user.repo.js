const { db } = require('../model/index')
module.exports = {
    login: async ({ }) => {
        try {
            const { email, password } = ''


        } catch (err) {

        }
    },
    signin: async ({ name, email, password }) => {
        try {
            await db.user.create({ name, email, hashedPassword: password })
            return { error: false, data: {} }
        } catch (err) {
            return { error: true, data: err }
        }
    },
}