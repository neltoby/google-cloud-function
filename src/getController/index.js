const db = require('../db').db

module.exports =  {
        getPostById: async (req, res, next) => {
            try{
                const { id } = req.params
                const userId = req.body.id
                const doc = await db.doc(userId).collection('posts').doc(id).get()
                if(doc.exists){
                    const data = doc.data()
                    res.json({id, ...data})
                }else{
                    res.json()
                }
            }catch(e) {
                res.status(500).json({success: false, msg: 'Server error', err: e.message})
            }
        },
        getAllPost: async (req, res, next) => {
            try{
                const userId = req.body.id
                const document = await db.doc(userId).collection('posts').get()
                const allpost = []
                document.forEach(item => {
                    allpost.push({
                        id: item.id,
                        ...item.data()
                    })
                })
                res.json(allpost)
            }catch(e) {
                res.status(500).json({success: false, msg: 'Server error', err: e.message})
            }
        }
}