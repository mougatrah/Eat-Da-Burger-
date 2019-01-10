var burger = require("../models/burger");

module.exports = function(app){

    app.get("/", function(req, res){
        console.log("burger 1 " + Object.keys(burger))
        burger.findAll().then(function(response){
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
        burger.update({
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
        burger.create({burger_name: req.body.name}).then(function(data){
            console.log(data);
                    });

    });
    
}