# Light-PHP
Light PHP it's an open-source minimal PHP framework that only includes what's necessary, avoiding big and complex structures, yet capable of building big and fully-featured API/Websites. 

### Modular structure
All the application code in Light-PHP it's divided by modules, this makes the code separated and decoupled also easier to maintain and modify. All the modules are located under the `src/` path.  
These modules it's what Light-PHP uses to run your application, so, you won't write any application code outside the `src/` (unless you want to change the framework's behavior).   
(more info here)  

### MVC structure
All the modules have a MVC structure, so, inside each module, it's divided by a `model/`, `view/`, `controller/` folders (dividing the module's responsibility).  
In some cases you create a module which don't return any template (i.e: returning a JSON), for this, you can create a module without the view folder (it's not mandatory). Same for Model folder, if your module doesn't needed you don't have to create it. (excepting controller folder, must be there always).

### Services
Light-PHP cames with a service container out of the box, this container holds useful services that are instantiated and ready to use in your module's controllers and models, being able to use $this->service_name (i.e: `$this->database`, `$this->session`...)  
(more info here)  

### Main folders
```
 /
 ├─ public
 ├─ src
 └─ system
    ├─ config
    ├─ logs
    └─ ...
```

`src`: Main folder, all the PHP application code it's located here (where you will spend 90% of the time)
`public`: Index.php and public files accesible from outside (JS, CSS, PDFs in case they exist)  
`system`: Stores the engine, services, composer and the framework configuration  
`system/config`: Config of database/email credentials, and framework settings  
`system/logs`: Logs (warning, exceptions) created  
