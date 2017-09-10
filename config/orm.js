var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function(table, condition, cb) {
        var queryString = "UPDATE " + table + 
            " SET devoured = true WHERE id = " + condition + ";";

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    create: function(table, val, cb) {
        var queryString = "SELECT *  FROM Customers WHERE cust_nm = 'UNKNOWN';";
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            console.log(result[0].id);
            console.log(result);
            if (result === null || result === undefined) {
                console.log("UNKNOWN row does not exist ...");
                queryString = "INSERT INTO Customers (cust_nm) VALUES('UNKNOWN');";
                console.log(queryString);
                connection.query(queryString, function(err, result) {
                    if (err) {
                        throw err;
                    }
                    queryString = "INSERT INTO " + table + " (burger_name, CustomerId) VALUES ('" + val + "', " + result[0].id + ");";
                    console.log(queryString);
                    connection.query(queryString, function(err, result) {
                        if (err) {
                            throw err;
                        }
                        cb(result);
                    });
                });
            }
            else {
                console.log("UNKNOWN row exists ...");
                queryString = "INSERT INTO " + table + " (burger_name, CustomerId) VALUES ('" + val + "', " + result[0].id + ");";
                console.log(queryString);
                connection.query(queryString, function(err, result) {
                    if (err) {
                        throw err;
                    }
                    cb(result);
                });
            }
        });
    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;