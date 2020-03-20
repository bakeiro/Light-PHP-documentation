# :gear: Engine  


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
