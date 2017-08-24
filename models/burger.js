var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    update: function(id, cb) {
        orm.update("burgers", id, cb);
    },
    create: function(burger_name, cb) {
    	orm.create("burgers", burger_name, cb);
    }
}
module.exports = burger;