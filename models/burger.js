var orm = require("../config/orm.js");

var burgerModel = {
  selectAll: function(callBack) {
    orm.selectAll("burgers", function(response){
      callBack(response);
    });
  },
  insertOne: function(burgerColumnB, devouredColumnB, burgerNameB, devouredB, callBack) {
    orm.selectAll("burgers", tableNameB, burgerColumnB, devouredColumnB, burgerNameB, devouredB, function(response){
      callBack(response);
    });
  },
  updateOne: function(columnC, newColumnValueC, entryColumnC, entryIdC, callBack) {
    orm.updateOne("burgers", columnC, newColumnValueC, entryColumnC, entryIdC, function(response){
      callBack(response);
    });
  }
};

// Export the database functions for the controller
module.exports = burgerModel;
