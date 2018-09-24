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

Browser url:  
![An image](./images/url.png)


system/config/routes.php:  

![An image](./images/routes.png)

info/info/welcome => controller/info/infoController->welcome().  


### Index.php
``` php

//Config
require('config.php');

//Engine
require(SYSTEM . 'engine/Config.php');
require(SYSTEM . 'engine/Url.php');
require(SYSTEM . 'engine/Controller.php');
require(SYSTEM . 'engine/Session.php');
require(SYSTEM . "engine/Output.php");
require(SYSTEM . 'engine/Connection.php');
require(SYSTEM . 'engine/Util.php');
require(SYSTEM . 'engine/Errors.php');
require(SYSTEM . 'engine/SecModel.php');
require(SYSTEM . 'engine/SecController.php');

//Bootstrap
require("config_data.php");
require(SYSTEM. "start.php");

set_error_handler( array(new Errors(),"my_error_handler") ,E_ALL);
error_reporting(E_ALL);

//escape $_POST,$_GET,$_COOKIE
Util::cleanInput();

//Composer
require(SYSTEM."libraries/vendor/autoload.php");

//Execute controller
$Controller = new Controller();
$Controller->execController();

//DB
Connection::$CONN->close();
```

