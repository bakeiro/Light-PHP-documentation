# Logger

### Error logging

Log files are located inside `system/writable/logs`, by default this directory is empty, but as soon as a new type of error happen, an specific log file for that kind of error will be created.
In light-PHP there are 4 types of errors: 

- Warnings
- Notice
- Fatal error & Exceptions
- Unknown

so, in total you can have 4 log files, one for an error type.

[Error handler code](https://github.com/bakeiro/Light-PHP/blob/master/system/engine/Errors.php)