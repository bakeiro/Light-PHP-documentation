# :gear: Configuration

All the framework configuration goes inside the `config.php` file, this is in the root directory

### config.php
This file defines the global variables that will be used later in the framework, examples are

- Enable/disable debug console
- Email credentials
- Database credentials
- Other settings

### php.ini
There is also the `php.ini` file in case you need to edit any server settings

- display_errors = On;
- session.cookie_lifetime = 0;
- session.gc_maxlifetime = 14400;