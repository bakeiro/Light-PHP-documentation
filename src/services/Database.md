# Database  

### Introduction
Light-PHP comes with tiny database class, which abstracts the interaction with the database, making it easier to use. Database credentials are specified in the `system/config/config.php` file, so you only specify there the credentials and you are ready to use the Database class!.  

### Executing queries  
To query the database, this class comes with the `Database::query()` method, which allow you to perform UPDATE, SELECT, DELETE or INSERT queries, everything with one function.  
`Database::query()` has 2 arguments, where the first one (mandatory), it's the SQL query, and the second one it's an array to replace the placeholders in the query by the actual values.

### examples:  
``` php  
// Select
$product = Database::query("SELECT * FROM product WHERE id = :id", array(":id" => $id));

// Delete
Database::query("DELETE FROM product WHERE id = :id", array(":id" => $id));

// Update
$rows_modified = Database::query("UPDATE product WHERE `name` like :name", array(":name" => $name));

// Insert
$prod_id = Database::query("INSERT INTO `product` (`name`, `price`) VALUES (':name', ':price')", array(":name" => "Gold", ":price" => 500));
```

As you can see, one method, 2 arguments (in most of cases) it's enough for performing SQL queries, if you look carefully you see that insert and update queries return something.

### Update
For update queries you receive the number of rows modified, so you can check wether something was updated or not, not extra work needed!  

### Insert
for insert queries you receive the id of the inserted value, in this case we would receive the id of the new inserted product, in case it's needed later.  

### Select
You receive the array of results, in case you receive only 1 array, you get directly the 1st array result, instead of a nested array, how it's normally in plain PHP.  

::: tip
As long as you use the second parameter to pass variables, this it's completely protected against SQL injection, so you only care about writing the SQL queries, but never put the PHP variables in the 1st argument, since it's not secure!  
:::

::: tip
Remember to update `config.php` to specify the database credentials
:::

[Database code](https://github.com/bakeiro/Light-PHP/blob/master/system/library/Database.php)
