# :open_file_folder: Folder structure

The folder structure follows the next schema:

### Main site
`site/`: main site folder, containing the MVC structure  
 `site/model`: Database queries for the user site  
 `site/controller`: methods for the user site  
 `site/view`: containing the PHP templates + the JS/CSS files, it's also integrated with npm

### Admin
`admin/`: containing the administration site  
`admin/controller`: controller files for the administration site  
`admin/model`: model files site  
`admin/view`: templates + JS/CSS resources  
  
### System
`system/`: Containing all the needed for the correct working of the framework  
`system/config`: Includes all the configuration and routing files  
`system/libraries`: Composer libraries  
`system/logs`: Logs which stores the warnings and exceptions (if any)  
`system/upload`: Folder to upload content  
