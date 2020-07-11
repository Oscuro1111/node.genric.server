var express = require('express');
var router = express.Router();
const http  = require('http');

/* GET users listing. */
router.get('/user', function(req, res, next) {
 var data = [];
  http.get('http://localhost:4000/posts',function(res_){
  
  res_.on("data",chunk=>{
    data.push(chunk);
  });

  res_.on('close',_=>{
         console.log('closing');
         var data_Bytes =  Buffer.concat(data);
         var  data_json  =JSON.parse(data_Bytes.toString());
         res.status(200).send(data_json);
  });

});
});

module.exports = router;
