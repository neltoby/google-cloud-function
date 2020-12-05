const db = require('../db').db

module.exports = {
    post: async ( req, res, next ) => {
        try{
            const { id } = req.params
            const { post, title } = req.body
            const userId = req.body.id
            if(post.trim().length && title.trim().length){
                const data = { post, title }
                const postRef = db.doc(userId).collection('posts').doc(id)
                const doc = await postRef.update(data)
                res.json({
                    id,
                    ...data
                })
            } else {
                res.status(400).json({success: false, msg: 'Bad request', err: e.message})
            }   
        }catch(e) {
            res.status(500).json({success: false, msg: 'Server error', err: e.message})
        }
    }
}