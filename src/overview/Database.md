# :package: Database  

### Query the database

To query the database simply use `Database::query` function, where the first argument it's the raw SQL query, and if any variables are needed inside the SQL query, they must be passed in the second argument as a key value array.  

example:  
``` php
$params = array(":prod_name"=>$prod_name);  
return Database::query("SELECT * FROM product WHERE product_name = :prod_name", $params);
```

### Sample database

The Light-PHP project come with a sample database (since it comes with a sample site), here is it's structure:


|    user   |    product    |   product_info  |
|:--------: |:-------------:|:---------------:|
| 	     id |    id         |       id        |
| first_name|   quantity    |    title        |
| last_name |    model      |short_description|
|  email    |    image      |   description   |
|  password |   enable      |
|    salt   |
|    role   |
|  address  |
