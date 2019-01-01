var connection = require("./connection.js");

var orm = {

    selectOne(name){
        connection.query(`SELECT * FROM burger WHERE burger_name = "${name}"`, function(err, res){
            if(err) throw err;
            console.table(res);
        })
    },

    selectAll(){
        

        connection.query(`SELECT * FROM burger`, function(err, res){
            if (err) throw err;
            console.table(res);
           
        });
    },
    insertOne(name){
        
        connection.query(`INSERT INTO burger (burger_name) VALUES ("${name}")`, function(err, res){
            if(err) throw err;
            console.log(res);
        });

    },
    updateOne(name){
        connection.query(`UPDATE burger SET devoured = !devoured WHERE burger_name = "${name}"`, function(err, res){
            if(err) throw err;
            console.log(res);
        })
    }
}

module.exports = orm;