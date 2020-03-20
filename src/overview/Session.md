# :computer: Session

Session in this framework, is managed by a global class included called `Session`, the reason for using this and not PHP's $_SESSION, it's that, using `Session` all the information is encrypted by default, plus is protected against session hijacking and .  
Through this class, you can set values, get values, start, delete, reload session and more, but it's better to

[Session code](https://github.com/bakeiro/Light-PHP/blob/master/system/library/Session.php)