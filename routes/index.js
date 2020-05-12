const {Router}=require('express')

const {
    newRegistry,
    consultUser,
    deleteRegistry,
    consultByAge
}=require('../controllers/index')

const router=Router();

router
.get('/',(req,res)=>res.status(200).send(`Api Ready`))
.post('/newRegistry',newRegistry)
.get('/consultUser/:userName',consultUser)
.get('/consultUser',consultUser)
.delete('/deleteRegistry/:_id',deleteRegistry)
.get('/consultByAge',consultByAge)

module.exports=router;