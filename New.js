
var mysql = require("mysql");
//var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  launchStore();
});


function launchStore (){
connection.query("SELECT * FROM products", function(err, results) {
  if (err) throw err;
  var resultsOjb = results;
      // run the start function after the connection is made to prompt the user
    console.log("Welcome to Bamazon! We have all the best in Baby Products");
    console.log(Object.keys(resultsOjb[0]));
    resultsOjb.forEach(function(obj) {
        console.log(JSON.stringify(obj)+ "\n");
         })

   
    // var itemsArray = [];
    // for (var i = 0; i < results.length; i++) {
    // itemsArray.push(results[i]);
    // console.log(JSON.stringify(itemsArray[i]) + "\n");
    // }
    
    // start();

  });
}