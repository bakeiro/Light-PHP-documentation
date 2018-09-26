# Overview
Here I display the most basic information to use this framework.  
Here you can see what the index.php does, how to write routes, and how to make a controller/model and a view.

### Entry point (index.php)
![An image](../images/index.png)

The entry point of this app consist in a few steps:
- Always get the basic resources for working (the engine)
- Startup the framework (getting the configuration, starting connection to the database etc)
- Execute the function (based on the url)
- Close the db connection


### Routes

The routes are defined in `system/config/routes.php`, here defines relation between url and controller:  

This means that for a custom-url route is associated to a method from one controller class (MVC structure).  
You can also don't write a custom url, and use index.php?route=info/info/welcome instead.

::: tip Example yourwebsite.com/home
routes.php:  `$routes["home"] = "info/info/welcome"`  
`info/info/welcome` = `controller/info/infoController->welcome()`
:::
 

# MVC Structure
Now I display how looks the basic MVC structure in this framework

### Controller

``` php
class productController{

	public function getProduct(){

		$prod_id = $_GET["prod_id"]; //Already escaped

		require(MODEL."product/product.php");
		$product_model = new productModel();

		$data = array();
		$data["prod"] = $product_model->getProd($prod_id);

		Output::load("product/productView", $data);
	}
}
```

### Model

``` php
class productModel{
	public function getProd($id){
		return Connection::query("SELECT * FROM `product` WHERE id = ".$id);
	}
}
```

### View

``` html
<h1>Product info</h1>
<p>{%prod["name"]%}</p>
```