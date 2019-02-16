# :mag: Engine  

Here I explain how the engine works, and for what is used every class:

- `Config:` Class for Getting/setting values, this is used universal variables which are accesible through the framework (ex: emails account, ftp folder, database credentials...)
- `Controller:` Class which executes the main function (this function is based on the Url)
- `Database:` Class to abstract the database, is used to execute queries and other useful methods
- `Errors:` Defines how to act in case any Warning/Exception happens
- `Output:` Process and outputs the template. 
- `SecAdmin/SecController/SecModel:` Basic security class
- `Session:` Session management
- `SessionHandler:` Session handler (defines the session behavior)
- `Url:` Url parser
- `Util:` Useful functions (ex: generate token, delete empty spaces from a string, scape string etc)


All the engine files (Except secAdmin/secController/secModel) are static classes with static functions you can use along the framework (like `Output::load()`, `Database::query()` or `Util::generateToken()`).