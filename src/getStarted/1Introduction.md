

# :open_file_folder: Folder structure

The folder structure follows the next schema:

### Main folders
There are three main folders:  
`src`: Stores the customer's site (what the user can access)  
`system`: Stores the engine, the libraries, configuration files...

### MVC structure
This structure is repeated in the `admin` and in the `site` folders (I separate them for simplicity)   
`model`: Database queries for the user site  
`controller`: Controller functions for the user site  
`view`: containing the PHP templates + the JS/CSS/Images files  

### System
`system`: Containing all the needed for the correct working of the framework  
`system/config`: Includes all the configuration and routing files  
`system/engine`: Framework engine  
`system/libraries`: Composer libraries  
`system/logs`: Logs which stores the warnings and exceptions (if any)  


### System folder structure:  
```
 system/
    ├─ composer
    ├─ config
    ├─ engine
    ├─ library
    └─ writable
```

- `composer:` Folder that includes all the composer dependencies and libraries
- `config:` Here you can edit the routes, framework settings and the php ini settings
- `engine:` This folder includes all the basic php files for running the framework, without one of this files the framework can't run
- `library:` Here includes the dependencies that make everything easier, like database, session, template, useful functions etc
- `writable:` This folder it's designed to store all the files, that change dynamically, like logs, cache, session in files (if the case) and more.
