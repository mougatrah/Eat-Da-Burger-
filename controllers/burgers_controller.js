var burger = require("../models/burger.js");


module.exports = function(app){

    app.get("/", function(req, res){
        console.log("burger 1 " + Object.keys(burger))
        burger.getAll().then(function(response){
            var eaten = [];
            var toEat = [];

            for(let i in response){
                if(response[i].devoured){
                    eaten.push(response[i]);
                }else{
                    toEat.push(response[i]);
                }
            }
            console.log("burger 2 " + Object.keys(burger));
                res.render("index", {burger: {eaten:eaten, toEat:toEat}});
        }

        ).catch(function(err){
            console.log("UH OOOOOH " + err)
        });
      
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