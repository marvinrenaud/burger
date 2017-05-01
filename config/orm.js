// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
  selectAll: function(tableNameA) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableNameA], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
  });
},
insertOne: function(tableNameB, burgerColumnB, devouredColumnB, burgerNameB, devouredB) {
  var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?);";
  connection.query(queryString, [tableNameB, burgerColumnB, devouredColumnB, burgerNameB, devouredB], function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
});
},
updateOne: function(tableNameC, columnC, newColumnValueC, entryColumnC, entryIdC) {
  var queryString = "UPDATE ?? SET ??=? WHERE ??=?;";
  connection.query(queryString, [tableNameC, columnC, newColumnValueC, entryColumnC, entryIdC], function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
});
}
};





module.exports = orm;
