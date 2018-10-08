# :scroll: more info

### Startup
The startup process it's located in `system/start.php`, in this process this is what happens.

- Database connection is started
- Url parsing (routes)
- Starts the session
- Sets error handlers
- Loads composer libraries
- Escape $_POST, $_GET, and $_COOKIE
- Sets the "finished" flag (internal framework use)

``` php

//Database
$temp_con = mysqli_connect(CONN_HOST, CONN_USER, CONN_PASS, CONN_DDBB);
mysqli_set_charset($temp_con,"utf8");
Connection::$CONN = $temp_con;

//Url
Url::init();

//Loader
Output::$scripts = array();
Output::$styles = array();

//Session
Session::start();

//Errors
set_error_handler( array(new Errors(),"my_error_handler") ,E_ALL);
error_reporting(E_ALL);

//Composer
require(SYSTEM."libraries/vendor/autoload.php");

//escape $_POST,$_GET,$_COOKIE
Util::cleanInput();

//Engine finished
Config::set("loaded", true);
```

### Dbug
All the warnings/errors stays in `system/logs` in 2 files, `errors.log` for errors and `notice.log` for warnings and errors

### Composer
Composer it's integrated in this framework, it only load the used libraries since uses autoload.

### Upload folder
The upload folder it's located in `system/upload` it's designed for uploading files for whatever use

### Engine
In the folder `system/engine` you can see the framework engine, the classes are quite simple, to could be editable (carefully...) to modify the behavior, the engine it's made from:

- Config class (to access globally to important variables)
- Connection, to define database connection, query function...
- Controller, class which executes all the methods
- Errors, class to manipulate exceptions
- Output, class to process templates and load files
- SecAdmin, SecController, SecModel are classes for the PHP security (basically, to not run any script before the engine is loaded, or not access the admin page without been logged)
- Session, session manipulation
- Url, for parsing the url and finding the routes
- Util, Usefull functions


### NPM
This framework also includes a npm