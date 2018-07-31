//require("dotenv").config();

var mysql = require("mysql");
var inquirer = require("inquirer");
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
    console.log("connected!");
    start();
  });

  function start(){
    inquirer
    .prompt({
      name: "Shop",
      type: "rawlist",
      message: "Would you like to [Search]for an item by its ID or [Browse] our current selection?",
      choices: ["SEARCH", "BROWSE"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.Shop.toUpperCase() === "SEARCH") {
          console.log("selected search");
        //startSearch();
      }
      else {
          console.log("selected browse");
        startBrowse();
      }
    });
    
}

function startBrowse() {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].product_name);
            }
            return choiceArray;
          },
          message: "Please select an item to purchase"
        },
        {
          name: "stock",
          type: "input",
          message: "How many would you like to purchase?"
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        var subtractQuant = answer.stock
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.choice) {
            chosenItem = results[i];
          }
        }
      
        if (chosenItem.stock > parseInt(answer.stock)) {
          // bid was high enough, so update db, let the user know, and start over
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [ 
              {
                stock: chosenItem.stock - subtractQuant
              },
             { 
              id: chosenItem.id
            }
          ],
          function(error) {
            if (error) throw err;
            console.log("You have successful order "+ answer.stock + " of " + chosenItem.product_name );
            start();
          }
        );
      }
      else {
        console.log("We do not have enough items for that amount. There's only " + chosenItem.stock + "of that item left" );
        start();
      }
    });

  })
};