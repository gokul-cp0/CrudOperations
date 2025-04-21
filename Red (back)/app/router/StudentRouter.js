const express=require('express');
const router=express.Router();
const StudentControl=require('../controller/StudentController');

router.post('/',StudentControl.create);
router.get('/',StudentControl.findAll);
router.get('/:id',StudentControl.findOne);
router.put('/:id',StudentControl.update);
router.delete('/:id',StudentControl.deleteOne);
router.delete('/',StudentControl.deleteAll);

module.exports=router;