(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{215:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database","aria-hidden":"true"}},[t._v("#")]),t._v(" 💾 Database")]),t._v(" "),e("h3",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("Light-PHP comes with tiny database class, which abstracts the interaction with the database, making it easier to use. Database credentials are specified in the "),e("code",[t._v("system/config/config.php")]),t._v(" file, so you only specify there the credentials and you are ready to use the Database class!.")]),t._v(" "),e("h3",{attrs:{id:"executing-queries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executing-queries","aria-hidden":"true"}},[t._v("#")]),t._v(" Executing queries")]),t._v(" "),e("p",[t._v("To query the database, this class comes with the "),e("code",[t._v("Database::query()")]),t._v(" method, which allow you to perform UPDATE, SELECT, DELETE or INSERT queries, everything with one function."),e("br"),t._v(" "),e("code",[t._v("Database::query()")]),t._v(" has 2 arguments, where the first one (mandatory), it's the SQL query, and the second one it's an array to replace the placeholders in the query by the actual values.")]),t._v(" "),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" examples:")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Select")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$product")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"SELECT * FROM product WHERE id = :id"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('":id"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Delete")]),t._v("\nDatabase"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"DELETE FROM product WHERE id = :id"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('":id"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Update")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rows_modified")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"UPDATE product WHERE `name` like :name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('":name"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Insert")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$prod_id")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v("\"INSERT INTO `product` (`name`, `price`) VALUES (':name', ':price')\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('":name"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"Gold"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('":price"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("As you can see, one method, 2 arguments (in most of cases) it's enough for performing SQL queries, if you look carefully you see that insert and update queries return something.")]),t._v(" "),e("h3",{attrs:{id:"update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update","aria-hidden":"true"}},[t._v("#")]),t._v(" Update")]),t._v(" "),e("p",[t._v("For update queries you receive the number of rows modified, so you can check wether something was updated or not, not extra work needed!")]),t._v(" "),e("h3",{attrs:{id:"insert"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#insert","aria-hidden":"true"}},[t._v("#")]),t._v(" Insert")]),t._v(" "),e("p",[t._v("for insert queries you receive the id of the inserted value, in this case we would receive the id of the new inserted product, in case it's needed later.")]),t._v(" "),e("h3",{attrs:{id:"select"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#select","aria-hidden":"true"}},[t._v("#")]),t._v(" Select")]),t._v(" "),e("p",[t._v("You receive the array of results, in case you receive only 1 array, you get directly the 1st array result, instead of a nested array, how it's normally in plain PHP.")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("As long as you use the second parameter to pass variables, this it's completely protected against SQL injection, so you only care about writing the SQL queries, but never put the PHP variables in the 1st argument, since it's not secure!")])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("Remember to update "),e("code",[t._v("config.php")]),t._v(" to specify the database credentials")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/bakeiro/Light-PHP/blob/master/system/library/Database.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Database code"),e("OutboundLink")],1)])])},[],!1,null,null,null);a.default=r.exports}}]);