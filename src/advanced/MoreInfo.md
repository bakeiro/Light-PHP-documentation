# :scroll: More info

### Log files
Log files are inside `system/logs` folder, here you have one log file for every error type, in total, 4 files, `error.log`, `warning.log`, `notice.log` and `exception.log`, more info [here](/cookbook/ErrorHandler.html)

### Composer
Composer it's integrated in this framework, you can install this framework via composer, it has composer scripts, and external libraries are included through composer.

### NPM
All the frontend resources are in the `sr/view/www` folder, and there there is a package.json file from npm, where includes method for parsing the JS code, and other utilities

### CI
This framework it's integrated with github actions, so, in every commit parses the code to check if it follows the standars, more info [here](/cookbook/CI-CD.html) 

### Compressed resources
All the HTML, CSS, JavaScript, Text, XML and fonts resources are compressed (gzip) by default, this is done using the `.htaccess` file

### Cache control
You can define a version number for the `JS/CSS` resources, so, every time you make an update you just change the cache number, and the user's browser will make a fresh download of these resources.
(Basically, all the resources ends with `?v={%cache_number}`, changing this number makes the browser think it needs to download a different file)

### Escaped input values
The `$_GET`, `$_POST` are escaped by default, you can check `Util::cleanInput` (system/engine/Util->cleanInput()) for more details
