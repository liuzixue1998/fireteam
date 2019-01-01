var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../model/config');
var pool = mysql.createPool(config.mysql);
router.get('/', function(req, res, next) {
    pool.getConnection(function (err,connection) {
        var sql1 = 'SELECT * FROM note where show1=0';
        connection.query(sql1, function (err, result) {
            connection.release();
            var string=JSON.stringify(result);
            var result=JSON.parse(string);
            res.render('dashboard/post', {notes:result});

        });
    })
});
router.post('/postpost',function (req,res,next) {
    var title=req.body.title;
    var imgn=req.body.imgn;
    var url=req.body.url;
    var des=req.body.des;
    var date=req.body.date;
    pool.getConnection(function (err,connection) {
        var $sql = 'INSERT INTO note(id, title,imgn,url,des, show1) VALUES(0, ?, ?, ?, ?, 0)';
        connection.query($sql,[title,imgn,url,des],function (err,result) {
        });
        connection.release();
    });
});
router.post('/postpost2',function (req) {
    var id2 = req.body.id2;
    pool.getConnection(function (err,connection) {
        var $sql1 = 'UPDATE note SET show1=1 where id=?';
        connection.query($sql1,[id2],function (err,result) {
        });
        connection.release();
    });
});
router.post('/postpost3',function (req) {
    var title=req.body.title;
    var imgn=req.body.imgn;
    var url=req.body.url;
    var des=req.body.des;
    var date=req.body.date;
    pool.getConnection(function (err,connection) {
        var $sql2 = 'UPDATE note SET title=?,imgn=?,url=?,des=?where id=?';
        connection.query($sql2,[title,imgn,url,des, id2]
            ,function (err,result) {
        });
        connection.release();
    });
});
module.exports = router;
