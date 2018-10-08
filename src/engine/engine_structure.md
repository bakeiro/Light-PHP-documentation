# :mag: Engine structure  
The engine of this framework, is splited in the following parts:

- `Config:` The config class to get/set values
- `Connection:` Connection to the database, execute queries, get info etc
- `Controller:` Class which executes the method (based on the url)
- `Errors:` Stores the errors/warnings and executes a method if a error/exception happens
- `Output:` Outputs and process the template. 
- `SecAdmin/SecController/SecModel:` Basic security class
- `Session:` Session management
- `Url:` Url parser
- `Util:` Useful functions
