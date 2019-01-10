# :earth_africa: Overview
Basic overview, here I display the basic information of this framework.  
Here you can see what does the entry point, how to write routes, and how the MVC structure works.

### index.php  
  
``` php
//Define routes
define('DIR_ROOT', 'C:/xampp/htdocs/framework_php/');
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
  
The basic working of the index.php file is:
- Always get the basic resources for working (the engine and composer)
- Startup the framework (getting the configuration, starting connection to the database etc)
- Execute the main function (based on the url)
- Close the db connection


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
<p>`{% prod["name"] %}`</p>
```

# Routes

The routes are defined in `system/config/routes.php`, here defines an array key value, the key it's the seo-url (if exist) and the value is the controller's function to be executed:  

This means that for a custom-url route is associated to a method from one controller class (MVC structure).  
You can also don't write a custom url, and use index.php?route=info/info/welcome instead.

::: tip Example yourwebsite.com/home
routes.php:  `$routes["home"] = "info/info/welcome"`  
`info/info/welcome` = `controller/info/infoController->welcome()`
:::

[Routes](./Routes.html) 