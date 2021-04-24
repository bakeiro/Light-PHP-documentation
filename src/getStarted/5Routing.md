# Routing

Light-PHP provides a simple routing system, it consist in put the controller's function to be executed in the route GET parameter, like this:  
`yourdomain.com/index.php?route=product/price/showPrice`

Where the route value means the folder, then the controller class name and then the method (`Module/Controller/Method`) in this case the:  

`product` Module folder  
`price` priceController class  
`showPrice` showPrice() method  

### Examples

::: tip index.php?route=info/info/welcome
Method: `infoController->welcome()`  
File: `src/info/controller/infoController`  
Class: `infoController`
:::

::: tip index.php?route=product/product/showProductInfo
Method: `productController->showProductInfo()`  
File: `src/product/controller/productController`  
Class: `productController`  
:::

### Custom Urls

In case you want to define seo-friendly urls, you can define them in `system/config/routes.php`  
For every custom url is associated a method from one controller class.  

``` php
$routes = array();
$routes["/"] = "info/info/welcome" 
$routes["/welcome"] = "info/info/welcome"  
$routes["/product"] = "product/product/showProductInfo"
$routes["/product_price"] = "product/price/showPrice"
```

With this, `yourdomain.com/welcome` will execute `info/infoController->welcome()`

