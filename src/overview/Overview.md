# :earth_africa: Overview
Here I display the basic information of this framework.  
Here you can see what does the entry point (index.php), MVC structure, and how the routes works.

### index.php  
  
``` php
//Define routes
define('DIR_ROOT', 'C:/path/yourProjectName/');
define('SYSTEM', DIR_ROOT.'system/');
define('MODEL', DIR_ROOT.'site/model/');
define('CONTROLLER', DIR_ROOT.'site/controller/');
define('VIEW', DIR_ROOT.'site/view/');

//Require config files
require(SYSTEM . "engine/Config.php");
require(SYSTEM . "config/config_data.php");
require(SYSTEM . "config/php_settings.php");

//Import engine
require(SYSTEM . 'engine/Url.php');
require(SYSTEM . 'engine/Controller.php');
require(SYSTEM . 'engine/Session.php');
require(SYSTEM . 'engine/SessionHandler.php');
require(SYSTEM . 'engine/Output.php');
require(SYSTEM . 'engine/Database.php');
require(SYSTEM . 'engine/Util.php');
require(SYSTEM . 'engine/Errors.php');
require(SYSTEM . 'engine/SecModel.php');
require(SYSTEM . 'engine/SecController.php');

//Startup process
require(SYSTEM. 'start.php');

//Execute main function
$Controller = new Controller();
$Controller->execController();
```  
  
What does the index.php file?
- Define the paths
- Get the basic resources (config + engine)
- Startup process (get the settings, load libraries etc)
- Execute the main function (This is where the MCV happens)

# MVC Structure
Here I display an example of how the structure works

### Controller 
`site/controller/product/productController.php`

``` php
class productController{

	public function getProduct(){

		$prod_id = $_GET["prod_id"]; //Already escaped

		require(MODEL."product/product.php"); //MODEL is defined in index.php
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
		return Database::query("SELECT * FROM `product` WHERE id = ".$id);
	}
}
```

### View
`site/view/template/product/productView.php`
``` html
<h1>Product info</h1>
<p>{% prod["name"] %}</p>
<p>{% prod["description"] %}</p>
```

# Routing
Light-PHP provides a simple routing system by default, which consist in write the route in the GET parameter to define the controller's function to be executed.  
The value of the route follows an internal structure to point the file, class and method to execute. (`folder/className/method`)

Example:  
`yourpage.com/index.php?route=product/product/getProduct&prod_id=1`  
Will execute the the method getProduct, in the productController class, inside the site/controller/product folder.

In case you want to define seo-friendly urls, you can define them in `system/config/routes.php`.

More info [here](./Routing.html) 