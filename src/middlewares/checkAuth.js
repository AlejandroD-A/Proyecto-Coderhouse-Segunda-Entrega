const jwt = require('jsonwebtoken')
const { SECRETJWT } = require('../config')

const isAuth = ( (req,res,next)=>{
    if(req.isAuthenticated()) return next()

    let token = req.headers.authorization;
    if (!token) {
        return res.status(403).json({message: 'debe proveer el token' });
    }

    jwt.verify(token, SECRETJWT, (err, data) => {
        if (err) return res.status(403).json({message: 'Forbidden'});
        req.user = data.data;
        next();
    });
})

module.exports = isAuth

