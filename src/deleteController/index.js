const db = require('../db').db

module.exports = {
    post: async ( req, res, next ) => {
        try{
            const { id } = req.params
            const userId = req.body.id
            const doc = await db.doc(userId).collection('posts').doc(id).delete()
            res.json({
                id,
                status: 'success',                
            }) 
        }catch(e) {
            res.status(500).json({success: false, msg: 'Server error', err: e.message})
        }
    }
}