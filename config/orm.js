var connection = require("./connection.js");

var orm = {

    selectOne(name){
        return connection.query(`SELECT * FROM burger WHERE burger_name = "${name}"`, function(err, res){
            if(err) throw err;
            console.table(res);
        })
    },

    selectAll(){
        
        return new Promise(function(resolve, reject){
            connection.query(`SELECT * FROM burger`, function(err, res){
                if (err) throw err;
                    if(!res.length){
                        console.log("hello 1")
                        reject(new Error("Error no length"));
                    }else{
                        for(let i in res){
                            console.log(res[i]);
                        }

                        resolve(res);
                    }
               
            })
        })
      
    },
    insertOne(name){
        
        connection.query(`INSERT INTO burger (burger_name) VALUES ("${name}")`, function(err, res){
            if(err) throw err;
            console.log(res);
        });

    },
    updateOne(name , val){
        connection.query(`UPDATE burger SET devoured = ${val} WHERE burger_name = "${name}"`, function(err, res){
            if(err) throw err;
            console.log(res);
        })
    }
}

module.exports = orm;