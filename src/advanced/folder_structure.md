# :open_file_folder: Folder structure

The folder structure follows the next schema:

### Main folders
There are two main folders, each of them with a MCV structure
`site`: Stores the customer's site (what the user can access)
`admin`: Stores the administration panel for admins

### MVC structure
This structure is repeated in the `admin` and in the `site` folders (just for clarity) 
`model`: Database queries for the user site  
`controller`: Controller functions for the user site  
`view`: containing the PHP templates + the JS/CSS/Images files  

### System
`system`: Containing all the needed for the correct working of the framework  
`system/config`: Includes all the configuration and routing files  
`system/engine`: Framework engine  
`system/libraries`: Composer libraries  
`system/logs`: Logs which stores the warnings and exceptions (if any)  
`system/upload`: Folder to upload content    