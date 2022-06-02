# Session
`$this->session->method()`  

### Introduction
Session in this framework, is managed by a global class included called `Session`, the reason for using this and not PHP's $_SESSION, it's that, using `Session` all the information is encrypted by default,  is protected against session hijacking, check wether the fingerprint it's always the same it's not expired and more!.  
Session it's always started by default and ready to use.  

### Set values
For setting values you use `$this->session->set()` function, where the first argument it's the key, and the second the value

### Get values
Use `$this->session->get()` and pass the key as argument for getting the value

### Delete session
Use `$this->session->forget()` to delete all session values and the session id.

[Session code](https://github.com/bakeiro/Light-PHP/blob/master/system/library/Session.php)