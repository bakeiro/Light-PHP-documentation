# :earth_africa: Overview

### Light-PHP structure
Here I will show you how to understand and develop a simple MVC page using Light-PHP framework, and explaining how to organize the code.  
All the code it's located in the `src` folder, you will be working here the 99% percent of the time (unless you are modifying the core of the framework).  
The code it's organized in modules, and each of the modules it's divided in the `controller`, `model` and `view` folder respectivamente.  

### Modules example:  
```
   src/
    ├─ controller
    │  ├─ product
    │  │     ├─ productController.php
    │  │     └─ priceController.php
    │  └ user
    │       └─ userController.php
    |
    ├─ model
    │  └─ product
    │       ├─ productModel.php
    │       └─ priceModel.php
    └─ view
       └─ template
            └─ product
                └─ productView.php
```
In this example you can see 2 modules, `product` and `user` module. The most basic module it's made of a single file controller, but it can be a Controller and a Model (very common in API apps) or it can include a View, if you output the template from PHP.  
In every folder contains all the files needed to use that module, as you can see product need to files, this is done just simple organization.  

### Creating your first page:  

### Controller 
`src/controller/product/productController.php`

``` php
namespace Controller;

class ProductController
{
    public function getProduct()
    {
		$prod_id = $_GET["prod_id"]; // Already escaped

        $product_model = new Model\productModel(); // Autoload magic ;)

		$data = array();
		$data["prod"] = $product_model->getProd($prod_id);

		Output::load("product/productView", $data);
	}
}
```

### Model
`src/model/product/productModel.php`
``` php
namespace Model;

class ProductModel
{
    public function getProd($id)
    {
		return Database::query("SELECT * FROM `product` WHERE id = :id", array("id" => $id));
	}
}
```

### View
`src/view/template/product/productView.php`
``` html
<h1>Product info</h1>
<p>{{ prod["name"] }}</p>
<p>{{ prod["description"] }}</p>
```

### Routing
`system/config/routes.php`
``` php
$routes = array();
$routes["/product_info"] = "product/product/getProduct"
```

### Example:  
`yourpage.com/index.php?route=product/product/getProduct&prod_id=1`  
`yourpage.com/product_info&prod_id=1`  

### That's all!
There you go, you have just built a MCV page in less than 5 minutes.