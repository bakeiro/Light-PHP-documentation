# Services

### Introduction
Services (Aka helpers) are common use classes that are already instantiated and ready to use, these services offer some useful methods to work with databases, session, logs, debugging etc.  
All these services are accesible from the controller & model, using the `$this->serviceName->methodName()` pattern, existing services that light-php offers:

- Config
- Database
- Console
- Logger
- Output
- Session
- Util

More services are possible to add, and all the services are loaded in the initialization process of the framework, so, not needed to do anything, are just ready to use.

More info services category