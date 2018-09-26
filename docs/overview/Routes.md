# :truck: Routes

All the routes are defined in `system/config/routes.php` this file consist in an array with all the seo-friendly routes.  
Every route is associated to one controller, following this structure `folder/class/method`, if the method is missing, Light-PHP will take `index()` function as default method.

`routes.php`
``` php
$routes["home"] = "info/info/welcome"  
$routes["product"] = "product/product"
```

### Examples

::: tip info/info/welcome
Method: `info/infoController->welcome()`  
File: `controller/info/info`
:::

::: tip product/product
Method: `product/productController->index()`  
File: `controller/product/product`
:::