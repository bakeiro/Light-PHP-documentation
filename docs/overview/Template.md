# :art: Templates

Light-PHP uses a custom template engine, this template is hosted here [template engine](https://github.com/bakeiro/micro_php_template_engine/) this is a basic class supporting:

- `{%variable_name%}` = `<?php echo $variable_name ?>`
- `@if($var > 5){` = ` <?php if($var > 5) { ?>`  


``` php
	@if(user_info){
		<p>{% user_name %}</p>
		<p>{% user_addresss %}</p>
	@endif
```