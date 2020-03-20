# :art: Template

Light-PHP comes with a tiny but useful template engine, it can output templates, replacing placeholders by variables, it can output the template directly to the end user, or returning as string, it can add JS and CSS files to one specific template and more.  

### Output template
For outputting the template, you use the `Output::load()` method, which receives a string path to the template file (normally, under `src/view/template` path).  

### Example 
To load the template with the variables you just use the `Output::load();`  
`Output::load("folder/templateName", $array_with_data);`

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
In case you want to get the template as string and don't output it, you can use the method `loadTemplate()` which returns the compiled template as string

### Adding JS and CSS
In case you want to add JS and CSS files from PHP (for dynamic pages for example) you can use `addJS()` and `addCSS()` before loading the template

[Template code](https://github.com/bakeiro/Light-PHP/blob/master/system/library/Output.php)
