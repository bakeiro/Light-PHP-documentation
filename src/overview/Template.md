# :art: Templates

Light-PHP uses a very tiny and simple [template engine](https://github.com/bakeiro/micro_php_template_engine/), this is how to use it:

Simply put the {{}} surrounding the variable name to output the value


### Before:
``` php
	<p><?php echo $user_name ?></p>
	<p><?php echo $user_address ?></p>
```


### After:
``` html
	<p>{{user_name}}</p>
	<p>{{user_addresss}}</p>
```

### Load template

To load the template with the variables you just use the `Output::load();`  
  
`Output::load("folder/templateName", $array_with_data);`