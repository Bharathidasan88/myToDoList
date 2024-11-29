const userRouter = require('./user.router')

module.exports = async(app)=>{
    app.use('/user',userRouter(app))
    app.use('/todo',userRouter(app))
}