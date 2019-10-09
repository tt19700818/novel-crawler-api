const {pool,Result}=require('../utils/connect');
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    
    const book = req.query.book;
    pool.getConnection((err,conn)=>{
        conn.query(`SELECT * FROM book${book}`,(e,r)=>res.json(new Result({data:r})));
        conn.release();
    })
})

module.exports = router;

