var burger = require("../models/burger.js");

module.exports = function(app){

    app.get("/", function(req, res){
        console.log(Object.keys(burger));
        res.send("Hello world");
        
    })

    app.get("/burger/", function(req, res){
       res.send(burger.getAll());
    });
    
    app.post("/burger/:name", function(req, res){
        burger.addBurger(req.params.name);
    });

    app.get("/burger/:name", function(req, res){
        burger.getBurger(req.params.name);
    })
}