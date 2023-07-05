const { Router } = require('express');
const router = Router();
const{getUsers,createUser,getUsersbyid,deteleUser,updateUser}=require('../controllers/index.controller')

router.get('/users',getUsers);
router.get('/users/:id',getUsersbyid);
router.post('/users',createUser);
router.delete('/users/:id',deteleUser);
router.put('/users/:id',updateUser);

module.exports=router;