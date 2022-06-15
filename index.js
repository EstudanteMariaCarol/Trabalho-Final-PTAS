var express = require("express");
var app = express();
var{autor} = require("./models");
var{livro} = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", async function(req, res){
  var resultado = await autor.findAll();
  res.json(resultado);
})
app.get("/autores/:id", async function(req, res){
  var resultado = await autor.findByPk(req.params.id);
  res.json(resultado);
})
app.get("/autores/:id/livros", async function(req, res){
  var resultado = await autor.findByPk(req.params.id, {include:'livros'});
  res.json(resultado.livros)
})

app.get("/livros", async function(req, res){
  var resultado = await livro.findAll();
  res.json(resultado);
})

app.get("/livros/:id", async function(req, res){
  var resultado = await livro.findByPk(req.params.id)
  res.json(resultado);
})

app.get("/livros/:id/autor", async function(req, res){
  var resultado = await livro.findByPk(req.params.id, {include : 'autores'});
    res.json(resultado.autores);
})

app.post("/autores", async function(req, res){
  var resultado = await autor.create(req.body);
  res.json(resultado);
})

app.post("/livros", async function(req,res) {
  var resultado = await livro.create(req.body);
  res.json(resultado);
})

app.put("/autores/:id", async function(req, res){
  var resultado  = await autor.update(req.body, {where: {id: req.params.id}});
  res.json(resultado);
})

app.put("/livros/:id", async function(req, res) {
  var resultado = await livro.update(req.body, {where: {id: req.params.id} });
  res.json(resultado);
})

app.delete("/autores/:id", async function(req, res){
  var resultado = await autor.destroy({where: {id: req.params.id}});
  res.json(resultado);
})

app.delete("/livros/:id", async function(req, res){
  var resultado = livro.destroy({where: {id:req.params.id}});
  res.json(resultado);
})

app.listen(3000, function(){
  console.log("Ebaa!");
})

