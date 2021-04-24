# Light-PHP

Light PHP it's an open-source minimal PHP framework that only includes what's necessary, avoiding big and complex structures, yet capable of building big and fully-featured API/Websites. 

### Modules structure
All the application code in Light-PHP it's divided by modules, this makes the code separated and decoupled also easier to maintain and modify. All the modules are located under the `src/` path.  
These modules it's what Light-PHP uses to run your application, so, you won't write any application code outside the `src/` (unless you want to change the framework's behavior).   
(more info here)  

### MVC structure
All the modules have a MVC structure, so, inside each module, it's divided by a `model/`, `view/`, `controller/` folders (dividing the module's responsibility).  
In some cases you create a module which don't return any template (i.e: returning a JSON), for this, you can create a module without the view folder (it's not mandatory). Same for Model folder, if your module doesn't needed you don't have to create it. (excepting controller folder, must be there always).

### Services
Light-PHP has a service container, this means, that you can access to services (useful classes already instantiated) from the controller and the model, being to use $this->service_name to use it. (i.e: $this->database, $this->session...).  
(more info here)  

### Folder structure

The folder structure follows the next schema:

### Main folders
 /
 ├─ public
 ├─ src
 └─ system

`src`:  Application modules  
`system`: Stores the engine, the libraries and configuration
`public`: Index.php and files that are accesible from outside

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
