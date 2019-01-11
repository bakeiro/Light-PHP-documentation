(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{174:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"engine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine","aria-hidden":"true"}},[t._v("#")]),t._v(" 🔍 Engine")]),t._v(" "),n("p",[t._v("Here I explain how the engine works, and for what is used every class:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("Config:")]),t._v(" Class for Getting/setting values, this is used universal variables which are accesible through the framework (ex: emails account, ftp folder, database credentials...)")]),t._v(" "),n("li",[n("code",[t._v("Controller:")]),t._v(" Class which executes the main function (this function is based on the Url)")]),t._v(" "),n("li",[n("code",[t._v("Database:")]),t._v(" Class to abstract the database, is used to execute queries and other useful methods")]),t._v(" "),n("li",[n("code",[t._v("Errors:")]),t._v(" Defines how to act in case any Warning/Exception happens")]),t._v(" "),n("li",[n("code",[t._v("Output:")]),t._v(" Outputs and process the template.")]),t._v(" "),n("li",[n("code",[t._v("SecAdmin/SecController/SecModel:")]),t._v(" Basic security class")]),t._v(" "),n("li",[n("code",[t._v("Session:")]),t._v(" Session management")]),t._v(" "),n("li",[n("code",[t._v("SessionHandler:")]),t._v(" Session handler (defines the session behavior)")]),t._v(" "),n("li",[n("code",[t._v("Url:")]),t._v(" Url parser")]),t._v(" "),n("li",[n("code",[t._v("Util:")]),t._v(" Useful functions (ex: generate token, delete empty spaces from a string, scape string etc)")])]),t._v(" "),n("h3",{attrs:{id:"startup-process"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#startup-process","aria-hidden":"true"}},[t._v("#")]),t._v(" Startup process")]),t._v(" "),n("p",[t._v("The startup process it's located in "),n("code",[t._v("system/start.php")]),t._v(", in this process this is what happens.")]),t._v(" "),n("ul",[n("li",[t._v("Database connection is started")]),t._v(" "),n("li",[t._v("Url parsing (routes)")]),t._v(" "),n("li",[t._v("Starts the session")]),t._v(" "),n("li",[t._v("Sets error handlers")]),t._v(" "),n("li",[t._v("Loads composer libraries")]),t._v(" "),n("li",[t._v("Escape $_POST, $_GET, and $_COOKIE")]),t._v(" "),n("li",[t._v('Sets the "finished" flag (internal framework use)')])]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("//Composer")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("SYSTEM")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"libraries/vendor/autoload.php"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Error reporting")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("set_error_handler")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("array")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Errors")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"my_error_handler"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token constant"}},[t._v("E_ALL")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("error_reporting")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("E_ALL")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Database")]),t._v("\n"),n("span",{attrs:{class:"token variable"}},[t._v("$temp_con")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("PDO")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"mysql:host="')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"CONN_HOST"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('";port=3306;dbname="')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Config"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"CONN_DDBB"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Config"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"CONN_USER"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Config"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"CONN_PASS"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token variable"}},[t._v("$temp_con")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("setAttribute")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("PDO")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token constant"}},[t._v("ATTR_EMULATE_PREPARES")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//true prepare statements")]),t._v("\n\n"),n("span",{attrs:{class:"token variable"}},[t._v("$temp_con")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("exec")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v("\"SET NAMES 'utf8'\"")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token variable"}},[t._v("$temp_con")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("exec")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"SET CHARACTER SET utf8"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token variable"}},[t._v("$temp_con")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("exec")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"SET CHARACTER_SET_CONNECTION=utf8"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nDatabase"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token variable"}},[t._v("$CONN")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$temp_con")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Url")]),t._v("\nUrl"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("init")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Session")]),t._v("\n"),n("span",{attrs:{class:"token variable"}},[t._v("$sessionHandler")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("SecureSessionHandler")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'cheeseh31731gfks519fk1gz'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSession"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("init")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$sessionHandler")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//escape + strip tags + trim for $_POST,$_GET,$_COOKIE")]),t._v("\nUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("cleanInput")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Engine finished")]),t._v("\nConfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("set")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"loaded"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Finish script functions")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("register_shutdown_function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{attrs:{class:"token comment"}},[t._v("//Session::$handler->close(); //Closes session handler")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("register_shutdown_function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{attrs:{class:"token comment"}},[t._v("//Database::$CONN->close();//Closes db Database")]),t._v("\n\t"),n("span",{attrs:{class:"token comment"}},[t._v("//$pdo->query('SELECT pg_terminate_backend(pg_backend_pid());');")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="Engine.md";s.default=e.exports}}]);