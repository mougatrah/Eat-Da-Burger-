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

        
        return new Promise(function(resolve, reject){
            orm.insertOne("burger", "burger_name", name).then(function(res){
                   if(res){
                       console.log("in update burger")
                       resolve(res);
                   }else{
                       console.log("error")
                       reject(new Error("uh oh"))
                   }
             }).catch(function(err){
                 console.log(err);
             });
           })
        
    },

     updateBurger: function(name, val){
            return new Promise(function(resolve, reject){
                orm.updateOne("burger", "devoured", val, "id", name).then(function(res){
                    if(res){
                        console.log("in update burger")
                        resolve(res);
                    }else{
                        console.log("error")
                        reject(new Error("uh oh"))
                    }
                });
            })
            
    },

    
     getBurger: function(name){
        orm.selectOne("burger", "burger_name", name);
    },

    


}

module.exports = burger;