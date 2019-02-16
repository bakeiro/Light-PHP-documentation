# Startup process

### Index.php
Here you can see what does the entry point (index.php).

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

### system/startup

The startup process it's located in `system/start.php`:

``` php
//Timezone
date_default_timezone_set(Config::get("default_time_zone"));

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
Session::init();
Session::start();

if (!Session::isValid()){
	Session::forget();
}

//escape + strip tags + trim for $_POST,$_GET
Util::cleanInput();

//Output files
Config::set("output_styles", array());
Config::set("output_scripts", array());

//Debug (whoops)
if(Config::get("whoops")){
	$whoops = new \Whoops\Run;
	$whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler);
	$whoops->register();
}

//Engine finished
Config::set("loaded", true);
```

In this process this is what happens

- Loads composer libraries
- Sets error handlers
- Establishes the Database connection
- Url parsing (routes)
- Starts the session
- Escape  and trim() the $_POST, $_GET data
- Sets the "finished" flag (internal framework use)	
