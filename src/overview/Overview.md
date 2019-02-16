# :earth_africa: Overview

Here I display an example of how the MVC structure works in this framework

### Controller 
`site/controller/product/productController.php`

``` php
class productController{

	public function getProduct(){

		$prod_id = $_GET["prod_id"]; //Already escaped

		require(MODEL."product/productModel.php"); //MODEL constant is defined in index.php
		$product_model = new productModel();

		$data = array();
		$data["prod"] = $product_model->getProd($prod_id);

		Output::load("product/productView", $data);
	}
}
```

### Model
`site/model/product/productModel.php`
``` php
class productModel{

	public function getProd($id){
		return Database::query("SELECT * FROM `product` WHERE id = :id", array("id"=>$id));
	}
	
}
```

### View
`site/view/template/product/productView.php`
``` html
<h1>Product info</h1>
<p>{{ prod["name"] }}</p>
<p>{{ prod["description"] }}</p>
```

# Routing
Light-PHP provides a simple routing system by default, which consist in write the route in the GET parameter to define the controller's function to be executed.  
The value of the route follows an internal structure to point the file, class and method to execute. (`folder/className/method`)

Example:  
`yourpage.com/index.php?route=product/product/getProduct&prod_id=1`  
Will execute the the method getProduct, in the productController class, inside the site/controller/product folder.

In case you want to define seo-friendly urls, you can define them in `system/config/routes.php`.

More info [here](./Routing.html) 