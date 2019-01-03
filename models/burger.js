var orm = require("../config/orm");

var burger = {
    

    getAll: function(){
        return new Promise(function(resolve, reject){
         orm.selectAll("burger").then(function(res){
                if(res){
                    console.log("in burger")
                    resolve(res);
                }else{
                    console.log("error")
                    reject(new Error("uh oh"))
                }
          });
        })
     },
 
     addBurger: function(name){

        orm.insertOne("burger", "burger_name", name);
        
    },

     updateBurger: function(name, val){
        orm.updateOne("burger", "devoured", val, "burger_name", name);
    },

    
     getBurger: function(name){
        orm.selectOne("burger", "burger_name", name);
    },

    


}

module.exports = burger;