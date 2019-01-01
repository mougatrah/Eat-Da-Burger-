var orm = require("../config/orm");

var burger = {
    burgers: {},

     addBurger: function(name){
         burgers[name] = false;
        orm.insertOne(name);
        
    },

     updateBurger: function(name){
         burgers[name] = !burgers[name];
        orm.updateOne(name);
    },

     getAll: function(){
        orm.selectAll();
    },

     getBurger: function(name){
        orm.selectOne(name);
    },

    


}

module.exports = burger;