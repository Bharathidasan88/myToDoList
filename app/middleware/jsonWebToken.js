const jwt = require('jsonwebtoken')

function jwt_sign(payload) {
    try {
        const token = {
            accessToken: jwt.sign(payload, process.env.jwtSecretKey, { algorithm: 'RS256', expiresIn: process.env.accessTokenExpireTime }),
            refereceToken: jwt.sign(payload, process.env.jwtSecretKey, { algorithm: 'RS256', expiresIn: process.env.referessTokenExpireTime }),
        }
        return { error: false, data: token }

    } catch (err) {
        return { error: true, data: err }
    }

}

function jwt_decoded(req, res,next) {
    try {
        const token = req.header('Authorization')
        console.log({ token });
        if (!token) {
            res.status(400).json({
                status: 0,
                message: "Access denied"
            })
        }
        const decoded = jwt.verify(token,process.env.jwtSecretKey)
        req.userId = decoded.userId;
        next()

    } catch (err) {
        res.status(400).json({
            status:0,
            message: "Invalid Token"
        })

    }

}