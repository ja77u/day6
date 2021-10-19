const { request } = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/eka', function(request, response){
  console.log("Ekaa kutsuttiin");
  response.send("Eka vastaa");

});
router.get('/toka/:fname', function(request, response){
console.log("Etunimi="+request.params.fname);
response.end("terve" +request.params.fname);



});

router.use(function(request, response, next){
console.log("olen middleware funktio");
next();

})

router.post('/', function(request, response){
  console.log(request.body);
  response.send(request.body);

});

router.post('/kolmas', function(reguest, response){
  console.log(request.body.firstname);
  response.send(request.body.firstname);
});

router.put('/:id', function(reguest,response){
  let id=request.params.id;
  console.log("kirjan "+id+ "uusi nimi: "+request.body.name);
  response.send("kirjan "+id+ "uusi nimi: "+request.body.name);
  
});





module.exports = router;





