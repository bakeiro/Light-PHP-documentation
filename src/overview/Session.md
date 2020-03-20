# :computer: Session

Session in this framework, is managed by a global class included called `Session`, the reason for using this and not PHP's $_SESSION, it's that, using `Session` all the information is encrypted by default, plus is protected against session hijacking and more.  
Session it's started by default and ready to use.  

### Set values
For setting values you use `Session::set()` function, where the first argument it's the key, and the second the value

### Get values
Use `Session::get()` and pass the key as argument for getting the value

[Session code](https://github.com/bakeiro/Light-PHP/blob/master/system/library/Session.php)