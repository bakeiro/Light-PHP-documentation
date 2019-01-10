# :scroll: More info

### Log files
All the warnings/errors stays in `system/logs` in 2 files, `errors.log` for errors and `notice.log` for warnings and errors

### Debug
Enabling the debug feature (This can be done in `system/config/config_data.php` file) a debug console will pop up in every page, if any warning or exception is throw this will be show in the console (on the bottom of the page)

### Composer
Composer it's integrated in this framework, it only load the used libraries since uses autoload.

### NPM
This framework it's also integrated with npm

### Upload folder
The upload folder it's located in `system/upload` it's designed for uploading files, (by default, can't execute scripts from outside stored here)

### Engine
In the folder `system/engine` you can see the framework [engine](./engine_structure.html)

### Security implementations:
- Session id fixation
- Session hijacking
- Xss attacks
- SQL injections
- Can't exec scripts outside the framework
- Only the JS/CSS/Images resources are accesible from outside
- Pass encryption in the Database
- Session data encryption

### Cache
All the HTML, CSS, JavaScript, Text, XML and fonts resources are compressed by default using `.htaccess` file (apache)

### Cache control
You can define a version number for the `JS/CSS` resources, so, every time you make an update you just change the cache number, and the user's browser will make a fresh download of these resources.
(Basically, all the resources ends with `?v={%cache_number}`, changing this number makes the browser think it needs to download a different file)

