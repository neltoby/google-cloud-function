const jwt = require('jsonwebtoken');
module.exports = () => {
    return {
        authenticate: (req, res, next) => {
            const auth = req.headers['authorization']
            if(auth){
                const token = auth.split(' ')[1]
                req.token = token
                next()
            }else{
                res.status(401).json({success: false, msg: 'Authorization information is missing or invalid'})
            }
        }, 
        validate: (req, res, next) => {
            const token = req.token
            jwt.verify(token, process.env.SECRET, function(err, decoded) {
                if(err){
                    res.status(401).json({success: false, msg: 'invalid token'})
                }else{
                    if(decoded.id){
                        req.body.id = decoded.id
                        next()
                    }
                }
            });
        },
    }
}