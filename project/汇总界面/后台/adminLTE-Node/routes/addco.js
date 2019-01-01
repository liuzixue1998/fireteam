var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../model/config');
var pool = mysql.createPool(config.mysql);
router.get('/', function(req, res, next) {
    res.render('dashboard/addco');
});
router.post('/addcopost',function (req,res) {
    var time=req.body.time;
    var num=req.body.num;
    var pla=req.body.pla;
    var des=req.body.des;
    pool.getConnection(function (err,connection) {
        var $sql = 'INSERT INTO accompany(id, time,num,pla,des) VALUES(0, ?, ?, ?, ?)';
        connection.query($sql,[time,num,pla,des],function (err,result) {
            if(err)
            {result = {
                code: 300,
                msg: '写入数据失败'};
                console.log(err)
            }
            else
            {result = {
                code: 200,
                msg: '写入数据成功'}
            }
            res.json(result);
        });
        connection.release();
    })
});
module.exports = router;


