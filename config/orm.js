var connection = require("./connection.js");

var orm = {

    selectAll(table) {

        return new Promise(function (resolve, reject) {

            connection.query(`SELECT * FROM ${table}`, function (err, res) {
                if (err) throw err;
                if (!res.length) {
                    console.log("hello 1")
                    reject(new Error("Error no length"));
                } else {
                    for (let i in res) {
                        console.log(res[i]);
                    }
                    resolve(res);
                }

            })

        })

    },

    selectOne(table, col, val) {

        return Promise(function (resolve, reject) {

            connection.query(`SELECT * FROM ${table} WHERE ${col} = "${val}"`, function (err, res) {

                if (err) throw err;
                if (!res.length) {
                    console.log("hello 1")
                    reject(new Error("Error no length"));
                } else {
                    for (let i in res) {
                        console.log(res[i]);
                    }
                    resolve(res);
                }
            })

        })

    },

    insertOne(table, col, val) {

        return new Promise(function (resolve, reject) {

            connection.query(`INSERT INTO ${table} (${col}) VALUES ("${val}")`, function (err, res) {
                if (err) {
                    console.log("hello 1")
                    reject(new Error("Error no length"));
                } else {
                    for (let i in res) {
                        console.log(res[i]);
                    }
                    resolve(res);
                }
            })

        })

    },

    updateOne(table, setCol, setVal, whereCol, whereVal) {

        return new Promise(function (resolve, reject) {

            connection.query(`UPDATE ${table} SET ${setCol} = ${setVal} WHERE ${whereCol} = "${whereVal}"`, function (err, res) {
             
                if (err) {
                    console.log("hello 1")
                    reject(new Error("Error no length"));
                } else {
                    for (let i in res) {
                        console.log(res[i]);
                    }
                    resolve(res);
                }
            })

        })

    }

}

module.exports = orm;