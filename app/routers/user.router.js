
const userController = require('../controllers/user.controller')

module.exports = async function userRouter(app) {
    app.post('/login', userController.login(req, res))
    app.post('/signin', userController.signin(req, res))
}