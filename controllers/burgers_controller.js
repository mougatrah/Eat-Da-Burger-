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
        }).catch(function(err){
            console.log("UH OOOOOH " + err)
        });
      
    })

    app.post("/update", function(req, res){
        console.log(req.body);
        burger.updateBurger(req.body.id, 1).then(function(data){
            res.redirect("/");
        }).catch(function(err){
            console.log("update error " + err);
        });
      
    })

    app.post("/add", function(req, res){
        console.log(req.body);
        burger.addBurger(req.body.name).then(function(data){
          console.log(data);
    
          res.json(data.insertId);
        }).catch(function(err){
            console.log("add error " + err);
        });


    })
    
}