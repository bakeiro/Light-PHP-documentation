# :truck: Routing

Light-PHP provides a simple routing system, it consist in put the controller's function to be executed in the ?route GET parameter, inside the url.  

This value follows an internal structure to point the file, class and method to execute (`folder/className/method`)
If the method argument is missing Light-PHP will take index() function as default method 

### Examples

::: tip index.php?route=info/info/welcome
Method: `info/infoController->welcome()`  
File: `controller/info/info`  
Class: `infoController`
:::

::: tip index.php?route=product/product
Method: `product/productController->index()`  
File: `controller/product/product`  
Class: `productController`  
:::

### Custom Urls

In case you want to define seo-friendly urls, you can define them in `system/config/routes.php`  
For every custom url is associated a method from one controller class.  

``` php
$routes = array();
$routes["welcome"] = "info/info/welcome"  
$routes["product"] = "product/product"
```

With this, `yourdomain.com/welcome` will execute `info/infoController->welcome()`

### Examples

::: tip domain/welcome  
`$routes["welcome"] = "info/info/welcome"`  
`info/infoController->welcome()`
:::

::: tip domain/product  
`$routes["product"] = "product/product"`  
`product/productController->index()`
:::