var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../model/config');
var pool = mysql.createPool(config.mysql);
router.get('/', function(req, res, next) {
    res.render('dashboard/input1');
});
router.post('/input1post',function (req,res) {
    var title=req.body.title;
    var imgn=req.body.imgn;
    var url=req.body.url;
    var des=req.body.des;
    var date=req.body.date;
    pool.getConnection(function (err,connection) {
        var $sql = 'INSERT INTO note(id, title,imgn,url,des,date) VALUES(0, ?, ?, ?, ?, ?)';
        connection.query($sql,[title,imgn,url,des,date],function (err,result) {
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


