var burger = require("../models/burger.js");

module.exports = function(app){

    app.get("/", function(req, res){
        console.log(Object.keys(burger));
        res.render("index");
        
    })

    app.get("/burger/", function(req, res){
       res.send();
    });
    
    app.post("/burger/:name", function(req, res){
        burger.addBurger(req.params.name);
    });

    app.get("/burger/:name", function(req, res){
        burger.getBurger(req.params.name);
    })
}