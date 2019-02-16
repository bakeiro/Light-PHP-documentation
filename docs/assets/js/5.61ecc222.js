(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{174:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"startup-process"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#startup-process","aria-hidden":"true"}},[t._v("#")]),t._v(" Startup process")]),t._v(" "),n("h3",{attrs:{id:"index-php"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#index-php","aria-hidden":"true"}},[t._v("#")]),t._v(" Index.php")]),t._v(" "),n("p",[t._v("Here you can see what does the entry point (index.php).")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("//Define routes")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("define")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'DIR_ROOT'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'C:/path/yourProjectName/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("define")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'SYSTEM'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("DIR_ROOT")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'system/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("define")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'MODEL'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("DIR_ROOT")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'site/model/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("define")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'CONTROLLER'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("DIR_ROOT")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'site/controller/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("define")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'VIEW'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("DIR_ROOT")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'site/view/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Require config files")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("SYSTEM")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"engine/Config.php"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("SYSTEM")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"config/config_data.php"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("SYSTEM")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"config/php_settings.php"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Import engine")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("SYSTEM")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'engine/Url.php'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("SYSTEM")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'engine/Controller.php'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("SYSTEM")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'engine/Session.php'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("SYSTEM")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'engine/SessionHandler.php'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("SYSTEM")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'engine/Output.php'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("SYSTEM")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'engine/Database.php'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("SYSTEM")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'engine/Util.php'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("SYSTEM")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'engine/Errors.php'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("SYSTEM")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'engine/SecModel.php'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("SYSTEM")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'engine/SecController.php'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Startup process")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("SYSTEM")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'start.php'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Execute main function")]),t._v("\n"),n("span",{attrs:{class:"token variable"}},[t._v("$Controller")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Controller")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token variable"}},[t._v("$Controller")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("execController")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("What does the index.php file?")]),t._v(" "),n("ul",[n("li",[t._v("Define the paths")]),t._v(" "),n("li",[t._v("Get the basic resources (config + engine)")]),t._v(" "),n("li",[t._v("Startup process (get the settings, load libraries etc)")]),t._v(" "),n("li",[t._v("Execute the main function (This is where the MCV happens)")])]),t._v(" "),n("h3",{attrs:{id:"system-startup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#system-startup","aria-hidden":"true"}},[t._v("#")]),t._v(" system/startup")]),t._v(" "),n("p",[t._v("The startup process it's located in "),n("code",[t._v("system/start.php")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("//Timezone")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("date_default_timezone_set")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Config"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"default_time_zone"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Composer")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("SYSTEM")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"libraries/vendor/autoload.php"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Error reporting")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("set_error_handler")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("array")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Errors")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"my_error_handler"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token constant"}},[t._v("E_ALL")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("error_reporting")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("E_ALL")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Database")]),t._v("\n"),n("span",{attrs:{class:"token variable"}},[t._v("$temp_con")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("PDO")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"mysql:host="')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"CONN_HOST"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('";port=3306;dbname="')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Config"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"CONN_DDBB"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Config"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"CONN_USER"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Config"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"CONN_PASS"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token variable"}},[t._v("$temp_con")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("setAttribute")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("PDO")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token constant"}},[t._v("ATTR_EMULATE_PREPARES")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//true prepare statements")]),t._v("\n\n"),n("span",{attrs:{class:"token variable"}},[t._v("$temp_con")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("exec")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v("\"SET NAMES 'utf8'\"")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token variable"}},[t._v("$temp_con")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("exec")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"SET CHARACTER SET utf8"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token variable"}},[t._v("$temp_con")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("exec")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"SET CHARACTER_SET_CONNECTION=utf8"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nDatabase"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token variable"}},[t._v("$CONN")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$temp_con")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Url")]),t._v("\nUrl"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("init")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Session")]),t._v("\nSession"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("init")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSession"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("start")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("Session"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("isValid")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tSession"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("forget")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//escape + strip tags + trim for $_POST,$_GET")]),t._v("\nUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("cleanInput")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Output files")]),t._v("\nConfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("set")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"output_styles"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("array")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nConfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("set")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"output_scripts"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("array")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Debug (whoops)")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Config"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"whoops"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{attrs:{class:"token variable"}},[t._v("$whoops")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Whoops"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Run")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{attrs:{class:"token variable"}},[t._v("$whoops")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("pushHandler")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Whoops"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Handler"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PrettyPageHandler")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{attrs:{class:"token variable"}},[t._v("$whoops")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("register")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Engine finished")]),t._v("\nConfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("set")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"loaded"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("In this process this is what happens")]),t._v(" "),n("ul",[n("li",[t._v("Loads composer libraries")]),t._v(" "),n("li",[t._v("Sets error handlers")]),t._v(" "),n("li",[t._v("Establishes the Database connection")]),t._v(" "),n("li",[t._v("Url parsing (routes)")]),t._v(" "),n("li",[t._v("Starts the session")]),t._v(" "),n("li",[t._v("Escape  and trim() the $_POST, $_GET data")]),t._v(" "),n("li",[t._v('Sets the "finished" flag (internal framework use)')])])])}],!1,null,null,null);o.options.__file="StartUpProcess.md";s.default=o.exports}}]);