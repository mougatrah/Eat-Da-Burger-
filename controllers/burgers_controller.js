var db = require("../models/");

module.exports = function(app){

    app.get("/", function(req, res){
        db.Burger.findAll().then(function(response){
            var eaten = [];
            var toEat = [];

            for(let i in response){
                if(response[i].devoured){
                    eaten.push(response[i]);
                }else{
                    toEat.push(response[i]);
                }
            }
                res.render("index", {burger: {eaten:eaten, toEat:toEat}});
        }).catch(function(err){
            console.log("error " + err);
        });
      
    })

    app.post("/update", function(req, res){
        db.Burger.update({
            devoured: true
        },{
            where:{
                id: req.body.id
            }
        });
      
    });

    app.post("/add", function(req, res){
        db.Burger.create({burger_name: req.body.name}).then(function(data){
            res.json(data)
                    });

    });

    app.delete("/DANGER", function(req,res){
        db.Burger.destroy({
            where: {
                id: req.body.id
            }
        });
    })
    
}