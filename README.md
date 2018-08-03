# bamazon

Bamazon Online store

This project is my first attempted at building an online store using JavaScript, Node.JS, and Mysql. Mysql serves as the database for all of the products, Node is the server and this application runs through terminal. I tried to make the experience as user-friendly as possible by listing all of the products with their price, deparment and quantity available before the user is ask to make a purchase. 
I also took some creative liberty in listing the products and then having the user choose an item by using the up and down arrows on the keyboard instead of having them type it in. I feel that this is easier for the user to make a purchase and thus be less frustrating. 

Getting Started
For this program to run successfully, you must install two npm packages. Those packages are mysql(https://www.npmjs.com/package/mysql), and inquirer(https://www.npmjs.com/package/inquirer). Please use the links here to review these packages and how to install them into the folder where this application lives. 
Once you've made your folder(which you can create from the command line/terminal. 

The files you want to make and the commands you want to use are the following:
mkdir Bamazon (this folder will hold all of your files)
touch amazonCustomer.js -- creates this files (this file lives in the Bamazon folder and will be your main file. This file brings together all of the packages and software needed to make this application work correctly.
touch keys.js -- creates file (if you decide to push your own version to github or another open source platform, then this file will hold the keys and other information about your mysql database that you do not wish to share.) 
touch .gitignore -- creates file (This file tells github to ignore the names of any files listed in it. You will list your keys.js in here as well as your node modules. When you install the npm packages, that is when you'll see your node modules here. 

Once you've created where your application will be built, it is now time to install/download the applications needed to run this program. All of these applications are free to use. 
I used:
MAMP -- https://www.mamp.info/en/ *at the time this is written, MAMP Pro was still in Beta. Use regular MAMP to ensure consistency.  
Mysql -- This will be installed via the MAMP installation.
Mysql workbench -- https://www.mysql.com/products/workbench/ 
Terminal (already installed on mac)
VS Code --https://code.visualstudio.com/

Give examples
Installing
A step by step series of examples that tell you how to get a development env running

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

Built With
Dropwizard - The web framework used
Maven - Dependency Management
ROME - Used to generate RSS Feeds
Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

Authors
Billie Thompson - Initial work - PurpleBooth
See also the list of contributors who participated in this project.

License
This project is licensed under the MIT License - see the LICENSE.md file for details

Acknowledgments
Hat tip to anyone whose code was used
Inspiration
etc
