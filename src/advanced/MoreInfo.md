# :scroll: More info

### Log files
All the warnings/errors stays in `system/logs` in 2 files, `errors.log` for errors and `notice.log` for warnings and errors, the function triggered when a exception happens it's in `system/engine/Errors.php`

### Debug whoops
Enabling this setting will launch the whoop debug info page anytime an exception happens

### Composer
Composer it's integrated in this framework, it only load the used libraries since uses autoload.

### NPM
This framework it's also integrated with npm

### Upload folder
The upload folder it's located in `system/upload` it's designed for uploading files, (by default, can't execute scripts from outside stored here)

### Engine
In the folder `system/engine` you can see the framework [engine](./Engine.html)

### Useful functions
You can use the functions inside engine/Util to do some common operation, examples are isSjaxRequest, sanitizeText, escape, generateSimpleToken, generateCSRFToken and so on

### Compressed resources
All the HTML, CSS, JavaScript, Text, XML and fonts resources are compressed (gzip) by default, this is done using the `.htaccess` file

### Cache control
You can define a version number for the `JS/CSS` resources, so, every time you make an update you just change the cache number, and the user's browser will make a fresh download of these resources.
(Basically, all the resources ends with `?v={%cache_number}`, changing this number makes the browser think it needs to download a different file)

### Escaped input values
The `$_GET`, `$_POST` are escaped by default, you can check `Util::cleanInput` (system/engine/Util->cleanInput()) for more details

### Security implementations:
- Session id fixation
- Session hijacking
- Xss attacks
- SQL injections
- Can't exec scripts outside the framework
- Only the JS/CSS/Images resources are accesible from outside
- Pass encryption in the Database
- Session data encryption
- CSRF token [You need to disable 'allow_forms_without_csrf_token' in the config file and implement manually the CSRF token in every form, you can use Session::get("CSRF_input")
- Easily enable/disable debug info (for disabling this in production environments)

# Roadmap

[Roadmap](https://github.com/bakeiro/Light-PHP/projects)