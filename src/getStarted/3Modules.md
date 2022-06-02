# Modules

### Light-PHP structure
All the application code in Light-PHP it's divided by modules, this makes the code separated and decoupled also easier to maintain and modify. All the modules are located under the `src/` path.  
All the code it's located in this folder, you will be working there most of the time (unless you update the config or the framework's code).  
The code it's organized in modules, and each of the modules it's divided in the `controller`, `model` and `view` folder respectively.  

### Modules example:  
```
   src/
    ├─ Product
    │  ├─ controller
    │  │     ├─ productController.php
    │  │     └─ priceController.php
    │  ├─ model
    │  │    ├─ priceModel.php
    │  │    └─ productModel.php
    |  └─ view
    │       └─ productView.php
    │
    └─ User
       └─ controller
            └─ userController.php
    
```
In this example you can see 2 modules, `product` and `user` module. The most basic module it's made of a single file controller, but it can be a Controller and a Model (very common in API apps) or it can include a View (in case you output templates from PHP).  

### Creating your first page:  

Since in Light-PHP all the application code it's contained in modules, we need to create one for our first page. Here you can see an example of how a fully-working MVC module is, and you can see how it works.  
Both in Controllers and Models, you always have to start with the namespace (which always should be the module's name), then the class and it should extend the Engine\Base class in order to access the service container.  

### Controller 
`src/product/controller/productController.php`

``` php
namespace Product;

class ProductController extends Engine\Base
{
    public function getProduct()
    {
		$prod_id = $_GET["prod_id"]; // Already escaped

        $product_model = new Model\productModel(); // PSR-4 Names ;)

		$data = array();
		$data["prod"] = $product_model->getProd($prod_id);

		$this->output->load("product/productView", $data);
	}
}
```

### Model
`src/product/model/productModel.php`
``` php
namespace Product;

class ProductModel extends Engine\Base
{
    public function getProd($id)
    {
		return $this->database->query("SELECT * FROM `product` WHERE id = :id", array("id" => $id));
	}
}
```

### View
`src/product/view/productView.php`
``` html
<h1>Product info</h1>
<p><?= $prod["name"] ?></p>
<p><?= $prod["description"] ?></p>
```

### Routing
`yourpage.com/index.php?route=product/product/getProduct&prod_id=1`  

### That's all!
There you go, you have just built a MCV page in less than 5 minutes.
