# bamazon

## Bamazon Online store

This project is my first attempted at building an online store using JavaScript, Node.JS, and Mysql. Mysql serves as the database for all of the products, Node is the server and this application runs through terminal. I tried to make the experience as user-friendly as possible by listing all of the products with their price, deparment and quantity available before the user is ask to make a purchase. 
I also took some creative liberty in listing the products and then having the user choose an item by using the up and down arrows on the keyboard instead of having them type it in. I feel that this is easier for the user to make a purchase and thus be less frustrating. 

## Getting Started
For this program to run successfully, you must install two npm packages. Those packages are mysql(https://www.npmjs.com/package/mysql), and inquirer(https://www.npmjs.com/package/inquirer). Please use the links here to review these packages and how to install them into the folder where this application lives. 
Once you've made your folder(which you can create from the command line/terminal. 

The files you want to make and the commands you want to use are the following:
mkdir Bamazon (this folder will hold all of your files)
touch amazonCustomer.js -- creates this files (this file lives in the Bamazon folder and will be your main file. This file brings together all of the packages and software needed to make this application work correctly.
touch keys.js -- creates file (if you decide to push your own version to github or another open source platform, then this file will hold the keys and other information about your mysql database that you do not wish to share.) 
touch .gitignore -- creates file (This file tells github to ignore the names of any files listed in it. You will list your keys.js in here as well as your node modules. When you install the npm packages, that is when you'll see your node modules here. 

#### Dependencies
Once you've created where your application will be built, it is now time to install/download the applications needed to run this program. All of these applications are free to use. 
I used:
 * MAMP -- https://www.mamp.info/en/ *at the time this is written, MAMP Pro was still in Beta. Use regular MAMP to ensure consistency.  Here's the installation guide https://documentation.mamp.info/en/MAMP-Mac/How-Tos/
 * Mysql -- This will be installed via the MAMP installation.
 * Mysql workbench -- https://www.mysql.com/products/workbench/ 
 * Terminal (already installed on mac)
 * VS Code --https://code.visualstudio.com/

#### How it works video
Here's a quick video on how the application works + a brief review of the different applications needed for it to be successful. https://drive.google.com/file/d/1AkKjOc8iUwDh-QIlyOLd4wd4BTaUR3_Z/view

#### Test Code and Installing 
Once you have set up your machine to have all of the software needed for the application to run and the npm packages ready in your file, it's time to start coding! 

* Step 1
The first step isto make sure your file is connected to your mysql database. You will need to the following code to your bamazonCustomer.js(or whatever you decide to name this) file. 

![Code Screenshot](/screenshotcode.png)


* Step 2 
After you save this code. Open your terminal window and open your folder where this application lives. In this example, my code lives in a folder name bamazon. Once I'm in that file, I launch the application by typing the command "node bamazonCustomer.js". If the application is connected, you will see the phrase, "connected!" print to the command line. 

This means you have successfully connected to the mysql database from node and you should be able to continue implimenting your program. 

It should look like this:

![Executing Node in Terminal](/terminal.png)

* Step 3
Now that you are connected to Mysql, it's time to start building your database with some data! I manually entered the data here because the table is small. If you have a lot of data, it is possible in import that data quickly. 
In mysql, you can create a database using the command, "CREATE DATABASE NAME_DB;"

Then instruct mysql to use the database with the command USE NAME_DB;

The next sequence of commands builds a table in the database with the following columns:
"CREATE TABLE + tableName (
  id INT NOT NULL AUTO_INCREMENT, -- this gives each row its own identity which will be helpful for a later use)
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock INT default 0,
  PRIMARY KEY (id) ( -- this ensures the id is unique for every row. 
);

For this application, the table looks like this in mysql:

![Mysql](/mysql.png)

* Step 4

Now that you have built a table, it's time to start filling that table with data. 

You must use the, "INSERT INTO + Tablename command to let mysql know where the data is going. Then in parentheseis, write the key values/ column names that you are inputting data.  
The following line will be the actual data being inserted into the table. Below is an example of how I inserted my data. 
![Data Entry](/enterData.png)

Say what the step will be

Give the example
And repeat

until finished
End with an example of getting some data out of the system or using it for a little demo

Running the tests
Explain how to run the automated tests for this system

Break down into end to end tests
Explain what these tests test and why

Give an example
And coding style tests
Explain what these tests test and why

Give an example
Deployment
Add additional notes about how to deploy this on a live system

#### Built With
VS CODE
MAMP
NODE JS
NPM - Inquirer and Mysql
Mysql
Mysql Workbench

#### Version
This is the first version of this application.

#### Author
Megan Anthony Keogh

#### License
There is no license for this application. 

#### Acknowledgments
This application would not have been possible without the help of Angela Andrews https://github.com/angela-andrews, Guillermo Barila https://github.com/gui365, and Ed Brennan, Professor at University of Pennsylvania.  
