var db = require("../models/");

module.exports = function(app){

    app.get("/", function(req, res){
        console.log("burger 1 " + Object.keys(db.Burger))
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
            console.log("burger 2 " + Object.keys(response));
                res.render("index", {burger: {eaten:eaten, toEat:toEat}});
        }).catch(function(err){
            console.log("UH OOOOOH " + err)
        });
      
    })

    app.post("/update", function(req, res){
        console.log(req.body);
        db.Burger.update({
            devoured: true
        },{
            where:{
                id: req.body.id
            }
        }).then(function(data){
console.log(data);
        });
      
    });

    app.post("/add", function(req, res){
        console.log(req.body);
        db.Burger.create({burger_name: req.body.name}).then(function(data){
            console.log(Object.keys(data));
            res.json(data)
                    });

    });

    app.delete("/DANGER", function(req,res){
        console.log(req.body);
        db.Burger.destroy({
            where: {
                id: req.body.id
            }
        }).then(function(data){
            console.log(data);
        })
    })
    
}