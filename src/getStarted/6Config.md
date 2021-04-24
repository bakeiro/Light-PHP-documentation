# Configuration
The configuration of this framework it's located under the `system/config` directory, there you can modify the framework settings, php settings and the custom urls.  

### Framework settings
This can be modified inside the [`system/config/config.php`](https://github.com/bakeiro/Light-PHP/blob/master/system/config/config.php) file, this file consist in a bunch of global variables used by the framework, some settings are:

- Enable/disable debug console
- Email credentials
- Database credentials
- Other settings

### Php settings
Located in [`system/config/ini.php`](https://github.com/bakeiro/Light-PHP/blob/master/system/config/ini.php) file, here, you can modify the php ini setting (php_set()), by default, most common settings are sett for generic applications, some examples are:

- display_errors = On;
- session.auto_start = Off
- session.cookie_lifetime = 0;
- session.default_charset = UTF-8;

### Custom url
Inside the [`system/config/routes.php`](https://github.com/bakeiro/Light-PHP/blob/master/system/config/routes.php) file, you can create, edit and remove the custom url, in case you want to create a seo friendly urls, more info [here](/overview/Routing.html) 
