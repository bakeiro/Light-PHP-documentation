### Security implementations:
- Session id fixation
- Session hijacking
- Session encryption
- GET and POST filtered for XSS attacks
- GET and POST filtered for SQL injections
- PHP code it's only executable through index.php
- Only frontend resources (JS/CSS/Images/fonts...) are accesible from outside
- CSRF token implemented
- Easily implement error handler (more info [here](/advanced/ErrorLoggin.html))
- PHP ini settings to set limits and minor security settings (cookie_lifetime, expose_php, max_input_time...)

### CSRF Token: 
By default, CSRF token must be *always* passed in the POST request by default, to do that, only include the `$_SESSION['CSRF_input']` inside every form, for disabling that the CSRF must be always included, change it in `config`
