# Light-PHP

The Micro framework PHP easy to understand, modify and ready to use!. The target it's to create a PHP framework which makes possible start working without reading in massive documentations of highly complex professional frameworks.  
This framework it's optimized for Apache web servers, and MySql servers. 

### Features

- Powerfull
- Fast
- Simple
- Shelf explained code
- Ready to deploy

### Routes

All the routes are defined in `system/config/routes.php`, here defines relation between url and controller:  

``` php
$routes["home"] = "info/info/welcome"
```

`yourwebsite.com/home` = `info/info/welcome`  
`info/info/welcome` = `controller/info/infoController->welcome()`


### Index.php

![An image](./images/index.png)

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