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

connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  launchStore();
});

function launchStore() {
    connection.query("SELECT * FROM products", function (err, results) {
      if (err) throw err;
      var resultsOjb = results;
      // run the start function after the connection is made to prompt the user
      console.log("Welcome to Bamazon! Please see our items!");
      console.log("If you wish to purchase an item, select the brand/item from below.");
      console.log(Object.keys(resultsOjb[0]));

     // var itemsArray = [];
      for (var i = 0; i < results.length; i++) {
        //itemsArray.push(results[i]);
        console.log(results[i].id + ", " + results[i].product_name + ", "+ results[i].department_name+ ", for $"+ results[i].price + " and we have "+ results[i].stock + " in store" + "\n");
      }

      startBrowse();

    });
  }

  function startBrowse() {
    connection.query("SELECT * FROM products", function (err, results) {
      if (err) throw err;
      inquirer
        .prompt([{
            name: "choice",
            type: "list",
            choices: function () {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].product_name);
              }
              return (choiceArray);
            },
            message: "Please select an item to purchase"
          },
          {
            name: "stock",
            type: "input",
            message: "How many would you like to purchase?"
          }
        ])
        .then(function (answers) {
          // get the information of the chosen item
          var subtractQuant = answers.stock;
          var chosenItem;
          var price;
          for (var i = 0; i < results.length; i++) {
            if (results[i].product_name === answers.choice) {
              price = results[i].price;
              chosenItem = results[i];
            }
          }
          if (chosenItem.stock > parseInt(answers.stock)) {

            // bid was high enough, so update db, let the user know, and start over
            connection.query(
              "UPDATE products SET ? WHERE ?", [{
                  stock: chosenItem.stock - subtractQuant
                },
                {
                  id: chosenItem.id
                }
              ],
              function (error, res) {
                if (error) {
                  console.log("meg")
                  console.log(error)
                  // throw error;
                }

                console.log("You have successfully ordered " + answers.stock + " of " + chosenItem.product_name);
                console.log("Your total is $" + (answers.stock * price))
                startBrowse();
              }
            )
          } else {
            console.log("We do not have enough items for that amount. There's only " + chosenItem + "of that item left");
            startBrowse();
          }
        })
    })
  };