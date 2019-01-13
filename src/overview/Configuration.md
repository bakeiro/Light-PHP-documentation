# :gear: Configuration

There are 2 configuration files, these files are inside `system/config` folder:
- `config_data.php`
- `php_settings.php`

### config_data.php
This file defines the global variables that will be used later in the framework, examples are

- Enable/disable debug console
- Email credentials
- Database credentials
- Other settings

### php_settings
All the init_set functions, examples:

- ini_set('display_errors', 'On');
- ini_set('session.cookie_lifetime', 0);
- ini_set('session.gc_maxlifetime', 14400);