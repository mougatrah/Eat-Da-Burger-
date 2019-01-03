var orm = require("../config/orm");

var burger = {
    

    getAll: function(){
        return new Promise(function(resolve, reject){
         orm.selectAll().then(function(res){
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
         burgers[name] = false;
        orm.insertOne(name);
        
    },

     updateBurger: function(name){
         burgers[name] = ! burgers[name];
        orm.updateOne(name);
    },

    
     getBurger: function(name){
        orm.selectOne(name);
    },

    


}

module.exports = burger;