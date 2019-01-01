var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../model/config');
var pool = mysql.createPool(config.mysql);
router.get('/', function(req, res, next) {
    pool.getConnection(function (err,connection) {
        var sql1 = 'SELECT * FROM mate where show1=0';
        connection.query(sql1, function (err, result) {
            connection.release();
            var string=JSON.stringify(result);
            var result=JSON.parse(string);
            res.render('dashboard/guanli2', {mates:result});

        });
    })
});
router.post('/guanli2post',function (req,res,next) {
    var time = req.body.time;
    var user=req.body.user;
    var sex=req.body.sex;
    var place=req.body.place;
    var num=req.body.num;
    pool.getConnection(function (err,connection) {
        var $sql = 'INSERT INTO mate(id,user,time,place,num,sex, show1) VALUES( 0,?, ?,?,?, ?, 0)';
        connection.query($sql,[user,time,place,num,sex],function (err,result) {
        });
        connection.release();
    });
});
router.post('/guanli2post2',function (req) {
    var id2 = req.body.id2;
    pool.getConnection(function (err,connection) {
        var $sql1 = 'UPDATE mate SET show1=1 where id=?';
        connection.query($sql1,[id2],function (err,result) {
        });
        connection.release();
    });
});
router.post('/guanli2post3',function (req) {
    var time = req.body.time;
    var user=req.body.user;
    var sex=req.body.sex;
    var place=req.body.place;
    var num=req.body.num;
    pool.getConnection(function (err,connection) {
        var $sql2 = 'UPDATE person SET user=?,sex=?,time=?,place=?,num=?where id=?';
        connection.query($sql2,[user,time,place,num,sex]
            ,function (err,result) {
        });
        connection.release();
    });
});
module.exports = router;

