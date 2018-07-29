DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Huggies", "Diapers", 5.00, 500);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Luvs", "Diapers", 4.00, 250);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Onesies", "Clothing", 10.00, 300);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Dr Brown's", "Bottles", 20.00, 1000);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Avent", "Bottles", 15.00, 600);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Babyganics", "Sunblock", 29.99, 50);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Beach Bum", "Sunblock", 26.99, 50);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Gerber Veggie Sticks", "Baby Food", 7.99, 400);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Honest Mixed Fruit Pouches", "Baby Food", 9.99, 325);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Newborn Caps", "Clothing", 4.99, 400);
