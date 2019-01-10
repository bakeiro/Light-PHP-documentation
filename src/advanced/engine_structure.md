# :mag: Engine  

### System/engine folder
Here I explain how the engine works, and for what is used every class:

- `Config:` Class for Getting/setting values, this is used universal variables which are accesible through the framework (ex: emails account, ftp folder, database credentials...)
- `Controller:` Class which executes the main function (this function is based on the Url)
- `Database:` Class to abstract the database, is used to execute queries and other useful methods
- `Errors:` Defines how to act in case any Warning/Exception happens
- `Output:` Outputs and process the template. 
- `SecAdmin/SecController/SecModel:` Basic security class
- `Session:` Session management
- `SessionHandler:` Session handler (defines the session behavior)
- `Url:` Url parser
- `Util:` Useful functions (ex: generate token, delete empty spaces from a string, scape string etc)


### Startup process
The startup process it's located in `system/start.php`, in this process this is what happens.

- Database connection is started
- Url parsing (routes)
- Starts the session
- Sets error handlers
- Loads composer libraries
- Escape $_POST, $_GET, and $_COOKIE
- Sets the "finished" flag (internal framework use)

``` php
//Composer
require(SYSTEM."libraries/vendor/autoload.php");

//Error reporting
set_error_handler( array(new Errors(),"my_error_handler") ,E_ALL);
error_reporting(E_ALL);

//Database
$temp_con = new PDO("mysql:host=" .Config::get("CONN_HOST"). ";port=3306;dbname=" . Config::get("CONN_DDBB"), Config::get("CONN_USER"), Config::get("CONN_PASS"));
$temp_con->setAttribute(PDO::ATTR_EMULATE_PREPARES, false); //true prepare statements

$temp_con->exec("SET NAMES 'utf8'");
$temp_con->exec("SET CHARACTER SET utf8");
$temp_con->exec("SET CHARACTER_SET_CONNECTION=utf8");

Database::$CONN = $temp_con;

//Url
Url::init();

//Session
$sessionHandler = new SecureSessionHandler('cheeseh31731gfks519fk1gz');
Session::init($sessionHandler);

//escape + strip tags + trim for $_POST,$_GET,$_COOKIE
Util::cleanInput();

//Engine finished
Config::set("loaded", true);

//Finish script functions
register_shutdown_function(function(){
	//Session::$handler->close(); //Closes session handler
});

register_shutdown_function(function(){
	//Database::$CONN->close();//Closes db Database
	//$pdo->query('SELECT pg_terminate_backend(pg_backend_pid());');
});
```
