var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("Burgers", function(res) {
            cb(res);
        });
    },
    update: function(id, cb) {
        orm.update("Burgers", id, cb);
    },
    create: function(burger_name, cb) {
    	orm.create("Burgers", burger_name, cb);
    }
}
module.exports = burger;
