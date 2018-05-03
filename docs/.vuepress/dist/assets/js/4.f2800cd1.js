(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{52:function(t,n,s){"use strict";s.r(n);var a=s(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"text"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text","aria-hidden":"true"}},[t._v("#")]),t._v(" Text")]),s("iframe",{staticStyle:{width:"100vw",height:"75vw","max-width":"100%","max-height":"600px"},attrs:{src:"/builds/text/index.html",width:"800",height:"600",frameBorder:"0"}}),s("pre",{pre:!0,attrs:{class:"language-haxe"}},[s("code",[t._v("package"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gecko"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Color"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gecko"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Screen"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gecko"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("components"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("draw"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextComponent"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gecko"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Gecko"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gecko"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Assets"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gecko"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("systems"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("draw"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DrawSystem"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Game "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//add the draw system to the currentScene")]),t._v("\n        Gecko"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentScene"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addSystem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DrawSystem"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//load the fonts")]),t._v("\n        Assets"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("load")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{attrs:{class:"token string"}},[t._v('"Ubuntu-B.ttf"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token string"}},[t._v('"kenpixel_mini_square.ttf"')]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _onAssetsLoad"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("start")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("_onAssetsLoad")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//create an entity in the current scene")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" entity1 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Gecko"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentScene"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createEntity")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//set the entity position")]),t._v("\n        entity1"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("20")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("20")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//set the anchor to top-left")]),t._v("\n        entity1"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("anchor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//add a textComponent using ubuntu and the 50px as size")]),t._v("\n        entity1"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addComponent")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextComponent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"A basic line of text."')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Ubuntu-B.ttf"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("50")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//create an entity in the current scene")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" entity2 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Gecko"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentScene"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createEntity")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        entity2"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Screen"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("centerX"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Screen"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("centerY"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//add a textComponent using ubuntu and the 30px as size and return it")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" text2"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("TextComponent "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" entity2"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addComponent")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextComponent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"A basic line of text in other color."')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Ubuntu-B.ttf"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("30")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//change the color")]),t._v("\n        text2"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Color"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Red"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//multiline text")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" entity3 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Gecko"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentScene"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createEntity")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        entity3"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("150")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Screen"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("centerY "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//add a textComponent using ubuntu and the 20px as size and using \\n to split in lines the text")]),t._v("\n        entity3"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addComponent")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextComponent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("\"Hey! I'm other example,\\nbut, i'm a multiline\\nexample of text!!!\"")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"kenpixel_mini_square.ttf"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("20")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//multiline text aligned to center")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" entity4 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Gecko"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentScene"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createEntity")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        entity4"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("400")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Screen"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("centerY "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("150")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        entity4"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addComponent")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextComponent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("\"Hey! I'm the same example,\\nbut, i'm a multiline\\nand center aligned!\"")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"kenpixel_mini_square.ttf"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("20")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"center"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//multiline text aligned to right")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" entity5 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Gecko"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentScene"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createEntity")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        entity5"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("650")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Screen"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("centerY "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        entity5"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addComponent")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextComponent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("\"Hey! I'm the same example,\\nbut, i'm a multiline\\nand right aligned!\"")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"kenpixel_mini_square.ttf"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("20")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"right"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//multiline with line spacing")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" entity6 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Gecko"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentScene"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createEntity")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        entity6"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("650")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Screen"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("centerY "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("200")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" textToDraw "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'\nMultiline text,\nit\\'s stored in a variable\nusing \\'\\' in differents lines.\nAlso, i\\'m playing with line spacing.\n'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" text2"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("TextComponent "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" entity6"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addComponent")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextComponent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("textToDraw"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"kenpixel_mini_square.ttf"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("20")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"center"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        text2"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lineSpacing "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("20")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//multiline text wrapping in a 200px width")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" entity7 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Gecko"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentScene"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createEntity")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        entity7"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("200")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Screen"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("centerY "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" text3"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("TextComponent "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" entity7"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addComponent")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextComponent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("\"I'm a a text in a simple line, but wrapping with 'lineWidth' to 200px.\"")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Ubuntu-B.ttf"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("20")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        text3"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lineWidth "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("200")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[s("a",{attrs:{href:"https://github.com/Nazariglez/Gecko2D/tree/master/examples/text",target:"_blank",rel:"noopener noreferrer"}},[t._v("Source Code")])])])}],!1,null,null,null);n.default=o.exports}}]);