const db = require('../db').db

module.exports = {
    post: async ( req, res, next ) => {
        try{
            const { post, title, id } = req.body
            const data = { post, title }
            console.log(db)
            const doc = await db.doc(id).collection('posts').add(data)
            res.json({
                id: doc.id,
                ...data
            })
        }catch(e) {
            res.status(500).json({success: false, msg: 'Server error', err: e.message})
        }
    }, 
    create: async (req, res, next) => {
        try{
            const { fullname, email, password } = req.body
            const data = { fullname, email, password }
            const ref = await db.add(data)
            req.user = {
                id: ref.id,
                fullname, 
                email
            }
            next()        
        }catch(e) {
            res.status(500).json({success: false, msg: 'Server error', err: e.message})
        }
    }
}