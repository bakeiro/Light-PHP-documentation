# :art: Templates

Light-PHP uses a very tiny and simple [template engine](https://github.com/bakeiro/micro_php_template_engine/), this is how to use it:

- `{%variable_name%}` = `<?php echo $variable_name ?>`


``` php
	<p>{% user_name %}</p>
	<p>{% user_addresss %}</p>
```