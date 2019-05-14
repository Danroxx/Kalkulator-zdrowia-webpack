/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/arr-union/index.js":
/*!*****************************************!*\
  !*** ./node_modules/arr-union/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function union(init) {\n  if (!Array.isArray(init)) {\n    throw new TypeError('arr-union expects the first argument to be an array.');\n  }\n\n  var len = arguments.length;\n  var i = 0;\n\n  while (++i < len) {\n    var arg = arguments[i];\n    if (!arg) continue;\n\n    if (!Array.isArray(arg)) {\n      arg = [arg];\n    }\n\n    for (var j = 0; j < arg.length; j++) {\n      var ele = arg[j];\n\n      if (init.indexOf(ele) >= 0) {\n        continue;\n      }\n      init.push(ele);\n    }\n  }\n  return init;\n};\n\n\n//# sourceURL=webpack:///./node_modules/arr-union/index.js?");

/***/ }),

/***/ "./node_modules/assign-symbols/index.js":
/*!**********************************************!*\
  !*** ./node_modules/assign-symbols/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * assign-symbols <https://github.com/jonschlinkert/assign-symbols>\n *\n * Copyright (c) 2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\n\n\nmodule.exports = function(receiver, objects) {\n  if (receiver === null || typeof receiver === 'undefined') {\n    throw new TypeError('expected first argument to be an object.');\n  }\n\n  if (typeof objects === 'undefined' || typeof Symbol === 'undefined') {\n    return receiver;\n  }\n\n  if (typeof Object.getOwnPropertySymbols !== 'function') {\n    return receiver;\n  }\n\n  var isEnumerable = Object.prototype.propertyIsEnumerable;\n  var target = Object(receiver);\n  var len = arguments.length, i = 0;\n\n  while (++i < len) {\n    var provider = Object(arguments[i]);\n    var names = Object.getOwnPropertySymbols(provider);\n\n    for (var j = 0; j < names.length; j++) {\n      var key = names[j];\n\n      if (isEnumerable.call(provider, key)) {\n        target[key] = provider[key];\n      }\n    }\n  }\n  return target;\n};\n\n\n//# sourceURL=webpack:///./node_modules/assign-symbols/index.js?");

/***/ }),

/***/ "./node_modules/base/index.js":
/*!************************************!*\
  !*** ./node_modules/base/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar util = __webpack_require__(/*! util */ \"./node_modules/util/util.js\");\nvar define = __webpack_require__(/*! define-property */ \"./node_modules/base/node_modules/define-property/index.js\");\nvar CacheBase = __webpack_require__(/*! cache-base */ \"./node_modules/cache-base/index.js\");\nvar Emitter = __webpack_require__(/*! component-emitter */ \"./node_modules/component-emitter/index.js\");\nvar isObject = __webpack_require__(/*! isobject */ \"./node_modules/isobject/index.js\");\nvar merge = __webpack_require__(/*! mixin-deep */ \"./node_modules/mixin-deep/index.js\");\nvar pascal = __webpack_require__(/*! pascalcase */ \"./node_modules/pascalcase/index.js\");\nvar cu = __webpack_require__(/*! class-utils */ \"./node_modules/class-utils/index.js\");\n\n/**\n * Optionally define a custom `cache` namespace to use.\n */\n\nfunction namespace(name) {\n  var Cache = name ? CacheBase.namespace(name) : CacheBase;\n  var fns = [];\n\n  /**\n   * Create an instance of `Base` with the given `config` and `options`.\n   *\n   * ```js\n   * // initialize with `config` and `options`\n   * var app = new Base({isApp: true}, {abc: true});\n   * app.set('foo', 'bar');\n   *\n   * // values defined with the given `config` object will be on the root of the instance\n   * console.log(app.baz); //=> undefined\n   * console.log(app.foo); //=> 'bar'\n   * // or use `.get`\n   * console.log(app.get('isApp')); //=> true\n   * console.log(app.get('foo')); //=> 'bar'\n   *\n   * // values defined with the given `options` object will be on `app.options\n   * console.log(app.options.abc); //=> true\n   * ```\n   *\n   * @param {Object} `config` If supplied, this object is passed to [cache-base][] to merge onto the the instance upon instantiation.\n   * @param {Object} `options` If supplied, this object is used to initialize the `base.options` object.\n   * @api public\n   */\n\n  function Base(config, options) {\n    if (!(this instanceof Base)) {\n      return new Base(config, options);\n    }\n    Cache.call(this, config);\n    this.is('base');\n    this.initBase(config, options);\n  }\n\n  /**\n   * Inherit cache-base\n   */\n\n  util.inherits(Base, Cache);\n\n  /**\n   * Add static emitter methods\n   */\n\n  Emitter(Base);\n\n  /**\n   * Initialize `Base` defaults with the given `config` object\n   */\n\n  Base.prototype.initBase = function(config, options) {\n    this.options = merge({}, this.options, options);\n    this.cache = this.cache || {};\n    this.define('registered', {});\n    if (name) this[name] = {};\n\n    // make `app._callbacks` non-enumerable\n    this.define('_callbacks', this._callbacks);\n    if (isObject(config)) {\n      this.visit('set', config);\n    }\n    Base.run(this, 'use', fns);\n  };\n\n  /**\n   * Set the given `name` on `app._name` and `app.is*` properties. Used for doing\n   * lookups in plugins.\n   *\n   * ```js\n   * app.is('foo');\n   * console.log(app._name);\n   * //=> 'foo'\n   * console.log(app.isFoo);\n   * //=> true\n   * app.is('bar');\n   * console.log(app.isFoo);\n   * //=> true\n   * console.log(app.isBar);\n   * //=> true\n   * console.log(app._name);\n   * //=> 'bar'\n   * ```\n   * @name .is\n   * @param {String} `name`\n   * @return {Boolean}\n   * @api public\n   */\n\n  Base.prototype.is = function(name) {\n    if (typeof name !== 'string') {\n      throw new TypeError('expected name to be a string');\n    }\n    this.define('is' + pascal(name), true);\n    this.define('_name', name);\n    this.define('_appname', name);\n    return this;\n  };\n\n  /**\n   * Returns true if a plugin has already been registered on an instance.\n   *\n   * Plugin implementors are encouraged to use this first thing in a plugin\n   * to prevent the plugin from being called more than once on the same\n   * instance.\n   *\n   * ```js\n   * var base = new Base();\n   * base.use(function(app) {\n   *   if (app.isRegistered('myPlugin')) return;\n   *   // do stuff to `app`\n   * });\n   *\n   * // to also record the plugin as being registered\n   * base.use(function(app) {\n   *   if (app.isRegistered('myPlugin', true)) return;\n   *   // do stuff to `app`\n   * });\n   * ```\n   * @name .isRegistered\n   * @emits `plugin` Emits the name of the plugin being registered. Useful for unit tests, to ensure plugins are only registered once.\n   * @param {String} `name` The plugin name.\n   * @param {Boolean} `register` If the plugin if not already registered, to record it as being registered pass `true` as the second argument.\n   * @return {Boolean} Returns true if a plugin is already registered.\n   * @api public\n   */\n\n  Base.prototype.isRegistered = function(name, register) {\n    if (this.registered.hasOwnProperty(name)) {\n      return true;\n    }\n    if (register !== false) {\n      this.registered[name] = true;\n      this.emit('plugin', name);\n    }\n    return false;\n  };\n\n  /**\n   * Define a plugin function to be called immediately upon init. Plugins are chainable\n   * and expose the following arguments to the plugin function:\n   *\n   * - `app`: the current instance of `Base`\n   * - `base`: the [first ancestor instance](#base) of `Base`\n   *\n   * ```js\n   * var app = new Base()\n   *   .use(foo)\n   *   .use(bar)\n   *   .use(baz)\n   * ```\n   * @name .use\n   * @param {Function} `fn` plugin function to call\n   * @return {Object} Returns the item instance for chaining.\n   * @api public\n   */\n\n  Base.prototype.use = function(fn) {\n    fn.call(this, this);\n    return this;\n  };\n\n  /**\n   * The `.define` method is used for adding non-enumerable property on the instance.\n   * Dot-notation is **not supported** with `define`.\n   *\n   * ```js\n   * // arbitrary `render` function using lodash `template`\n   * app.define('render', function(str, locals) {\n   *   return _.template(str)(locals);\n   * });\n   * ```\n   * @name .define\n   * @param {String} `key` The name of the property to define.\n   * @param {any} `value`\n   * @return {Object} Returns the instance for chaining.\n   * @api public\n   */\n\n  Base.prototype.define = function(key, val) {\n    if (isObject(key)) {\n      return this.visit('define', key);\n    }\n    define(this, key, val);\n    return this;\n  };\n\n  /**\n   * Mix property `key` onto the Base prototype. If base is inherited using\n   * `Base.extend` this method will be overridden by a new `mixin` method that will\n   * only add properties to the prototype of the inheriting application.\n   *\n   * ```js\n   * app.mixin('foo', function() {\n   *   // do stuff\n   * });\n   * ```\n   * @name .mixin\n   * @param {String} `key`\n   * @param {Object|Array} `val`\n   * @return {Object} Returns the `base` instance for chaining.\n   * @api public\n   */\n\n  Base.prototype.mixin = function(key, val) {\n    Base.prototype[key] = val;\n    return this;\n  };\n\n  /**\n   * Non-enumberable mixin array, used by the static [Base.mixin]() method.\n   */\n\n  Base.prototype.mixins = Base.prototype.mixins || [];\n\n  /**\n   * Getter/setter used when creating nested instances of `Base`, for storing a reference\n   * to the first ancestor instance. This works by setting an instance of `Base` on the `parent`\n   * property of a \"child\" instance. The `base` property defaults to the current instance if\n   * no `parent` property is defined.\n   *\n   * ```js\n   * // create an instance of `Base`, this is our first (\"base\") instance\n   * var first = new Base();\n   * first.foo = 'bar'; // arbitrary property, to make it easier to see what's happening later\n   *\n   * // create another instance\n   * var second = new Base();\n   * // create a reference to the first instance (`first`)\n   * second.parent = first;\n   *\n   * // create another instance\n   * var third = new Base();\n   * // create a reference to the previous instance (`second`)\n   * // repeat this pattern every time a \"child\" instance is created\n   * third.parent = second;\n   *\n   * // we can always access the first instance using the `base` property\n   * console.log(first.base.foo);\n   * //=> 'bar'\n   * console.log(second.base.foo);\n   * //=> 'bar'\n   * console.log(third.base.foo);\n   * //=> 'bar'\n   * // and now you know how to get to third base ;)\n   * ```\n   * @name .base\n   * @api public\n   */\n\n  Object.defineProperty(Base.prototype, 'base', {\n    configurable: true,\n    get: function() {\n      return this.parent ? this.parent.base : this;\n    }\n  });\n\n  /**\n   * Static method for adding global plugin functions that will\n   * be added to an instance when created.\n   *\n   * ```js\n   * Base.use(function(app) {\n   *   app.foo = 'bar';\n   * });\n   * var app = new Base();\n   * console.log(app.foo);\n   * //=> 'bar'\n   * ```\n   * @name #use\n   * @param {Function} `fn` Plugin function to use on each instance.\n   * @return {Object} Returns the `Base` constructor for chaining\n   * @api public\n   */\n\n  define(Base, 'use', function(fn) {\n    fns.push(fn);\n    return Base;\n  });\n\n  /**\n   * Run an array of functions by passing each function\n   * to a method on the given object specified by the given property.\n   *\n   * @param  {Object} `obj` Object containing method to use.\n   * @param  {String} `prop` Name of the method on the object to use.\n   * @param  {Array} `arr` Array of functions to pass to the method.\n   */\n\n  define(Base, 'run', function(obj, prop, arr) {\n    var len = arr.length, i = 0;\n    while (len--) {\n      obj[prop](arr[i++]);\n    }\n    return Base;\n  });\n\n  /**\n   * Static method for inheriting the prototype and static methods of the `Base` class.\n   * This method greatly simplifies the process of creating inheritance-based applications.\n   * See [static-extend][] for more details.\n   *\n   * ```js\n   * var extend = cu.extend(Parent);\n   * Parent.extend(Child);\n   *\n   * // optional methods\n   * Parent.extend(Child, {\n   *   foo: function() {},\n   *   bar: function() {}\n   * });\n   * ```\n   * @name #extend\n   * @param {Function} `Ctor` constructor to extend\n   * @param {Object} `methods` Optional prototype properties to mix in.\n   * @return {Object} Returns the `Base` constructor for chaining\n   * @api public\n   */\n\n  define(Base, 'extend', cu.extend(Base, function(Ctor, Parent) {\n    Ctor.prototype.mixins = Ctor.prototype.mixins || [];\n\n    define(Ctor, 'mixin', function(fn) {\n      var mixin = fn(Ctor.prototype, Ctor);\n      if (typeof mixin === 'function') {\n        Ctor.prototype.mixins.push(mixin);\n      }\n      return Ctor;\n    });\n\n    define(Ctor, 'mixins', function(Child) {\n      Base.run(Child, 'mixin', Ctor.prototype.mixins);\n      return Ctor;\n    });\n\n    Ctor.prototype.mixin = function(key, value) {\n      Ctor.prototype[key] = value;\n      return this;\n    };\n    return Base;\n  }));\n\n  /**\n   * Used for adding methods to the `Base` prototype, and/or to the prototype of child instances.\n   * When a mixin function returns a function, the returned function is pushed onto the `.mixins`\n   * array, making it available to be used on inheriting classes whenever `Base.mixins()` is\n   * called (e.g. `Base.mixins(Child)`).\n   *\n   * ```js\n   * Base.mixin(function(proto) {\n   *   proto.foo = function(msg) {\n   *     return 'foo ' + msg;\n   *   };\n   * });\n   * ```\n   * @name #mixin\n   * @param {Function} `fn` Function to call\n   * @return {Object} Returns the `Base` constructor for chaining\n   * @api public\n   */\n\n  define(Base, 'mixin', function(fn) {\n    var mixin = fn(Base.prototype, Base);\n    if (typeof mixin === 'function') {\n      Base.prototype.mixins.push(mixin);\n    }\n    return Base;\n  });\n\n  /**\n   * Static method for running global mixin functions against a child constructor.\n   * Mixins must be registered before calling this method.\n   *\n   * ```js\n   * Base.extend(Child);\n   * Base.mixins(Child);\n   * ```\n   * @name #mixins\n   * @param {Function} `Child` Constructor function of a child class\n   * @return {Object} Returns the `Base` constructor for chaining\n   * @api public\n   */\n\n  define(Base, 'mixins', function(Child) {\n    Base.run(Child, 'mixin', Base.prototype.mixins);\n    return Base;\n  });\n\n  /**\n   * Similar to `util.inherit`, but copies all static properties, prototype properties, and\n   * getters/setters from `Provider` to `Receiver`. See [class-utils][]{#inherit} for more details.\n   *\n   * ```js\n   * Base.inherit(Foo, Bar);\n   * ```\n   * @name #inherit\n   * @param {Function} `Receiver` Receiving (child) constructor\n   * @param {Function} `Provider` Providing (parent) constructor\n   * @return {Object} Returns the `Base` constructor for chaining\n   * @api public\n   */\n\n  define(Base, 'inherit', cu.inherit);\n  define(Base, 'bubble', cu.bubble);\n  return Base;\n}\n\n/**\n * Expose `Base` with default settings\n */\n\nmodule.exports = namespace();\n\n/**\n * Allow users to define a namespace\n */\n\nmodule.exports.namespace = namespace;\n\n\n//# sourceURL=webpack:///./node_modules/base/index.js?");

/***/ }),

/***/ "./node_modules/base/node_modules/define-property/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/base/node_modules/define-property/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * define-property <https://github.com/jonschlinkert/define-property>\n *\n * Copyright (c) 2015, 2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar isDescriptor = __webpack_require__(/*! is-descriptor */ \"./node_modules/base/node_modules/is-descriptor/index.js\");\n\nmodule.exports = function defineProperty(obj, prop, val) {\n  if (typeof obj !== 'object' && typeof obj !== 'function') {\n    throw new TypeError('expected an object or function.');\n  }\n\n  if (typeof prop !== 'string') {\n    throw new TypeError('expected `prop` to be a string.');\n  }\n\n  if (isDescriptor(val) && ('set' in val || 'get' in val)) {\n    return Object.defineProperty(obj, prop, val);\n  }\n\n  return Object.defineProperty(obj, prop, {\n    configurable: true,\n    enumerable: false,\n    writable: true,\n    value: val\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/base/node_modules/define-property/index.js?");

/***/ }),

/***/ "./node_modules/base/node_modules/is-accessor-descriptor/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/base/node_modules/is-accessor-descriptor/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * is-accessor-descriptor <https://github.com/jonschlinkert/is-accessor-descriptor>\n *\n * Copyright (c) 2015-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar typeOf = __webpack_require__(/*! kind-of */ \"./node_modules/kind-of/index.js\");\n\n// accessor descriptor properties\nvar accessor = {\n  get: 'function',\n  set: 'function',\n  configurable: 'boolean',\n  enumerable: 'boolean'\n};\n\nfunction isAccessorDescriptor(obj, prop) {\n  if (typeof prop === 'string') {\n    var val = Object.getOwnPropertyDescriptor(obj, prop);\n    return typeof val !== 'undefined';\n  }\n\n  if (typeOf(obj) !== 'object') {\n    return false;\n  }\n\n  if (has(obj, 'value') || has(obj, 'writable')) {\n    return false;\n  }\n\n  if (!has(obj, 'get') || typeof obj.get !== 'function') {\n    return false;\n  }\n\n  // tldr: it's valid to have \"set\" be undefined\n  // \"set\" might be undefined if `Object.getOwnPropertyDescriptor`\n  // was used to get the value, and only `get` was defined by the user\n  if (has(obj, 'set') && typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {\n    return false;\n  }\n\n  for (var key in obj) {\n    if (!accessor.hasOwnProperty(key)) {\n      continue;\n    }\n\n    if (typeOf(obj[key]) === accessor[key]) {\n      continue;\n    }\n\n    if (typeof obj[key] !== 'undefined') {\n      return false;\n    }\n  }\n  return true;\n}\n\nfunction has(obj, key) {\n  return {}.hasOwnProperty.call(obj, key);\n}\n\n/**\n * Expose `isAccessorDescriptor`\n */\n\nmodule.exports = isAccessorDescriptor;\n\n\n//# sourceURL=webpack:///./node_modules/base/node_modules/is-accessor-descriptor/index.js?");

/***/ }),

/***/ "./node_modules/base/node_modules/is-data-descriptor/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/base/node_modules/is-data-descriptor/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * is-data-descriptor <https://github.com/jonschlinkert/is-data-descriptor>\n *\n * Copyright (c) 2015-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar typeOf = __webpack_require__(/*! kind-of */ \"./node_modules/kind-of/index.js\");\n\nmodule.exports = function isDataDescriptor(obj, prop) {\n  // data descriptor properties\n  var data = {\n    configurable: 'boolean',\n    enumerable: 'boolean',\n    writable: 'boolean'\n  };\n\n  if (typeOf(obj) !== 'object') {\n    return false;\n  }\n\n  if (typeof prop === 'string') {\n    var val = Object.getOwnPropertyDescriptor(obj, prop);\n    return typeof val !== 'undefined';\n  }\n\n  if (!('value' in obj) && !('writable' in obj)) {\n    return false;\n  }\n\n  for (var key in obj) {\n    if (key === 'value') continue;\n\n    if (!data.hasOwnProperty(key)) {\n      continue;\n    }\n\n    if (typeOf(obj[key]) === data[key]) {\n      continue;\n    }\n\n    if (typeof obj[key] !== 'undefined') {\n      return false;\n    }\n  }\n  return true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/base/node_modules/is-data-descriptor/index.js?");

/***/ }),

/***/ "./node_modules/base/node_modules/is-descriptor/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/base/node_modules/is-descriptor/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * is-descriptor <https://github.com/jonschlinkert/is-descriptor>\n *\n * Copyright (c) 2015-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar typeOf = __webpack_require__(/*! kind-of */ \"./node_modules/kind-of/index.js\");\nvar isAccessor = __webpack_require__(/*! is-accessor-descriptor */ \"./node_modules/base/node_modules/is-accessor-descriptor/index.js\");\nvar isData = __webpack_require__(/*! is-data-descriptor */ \"./node_modules/base/node_modules/is-data-descriptor/index.js\");\n\nmodule.exports = function isDescriptor(obj, key) {\n  if (typeOf(obj) !== 'object') {\n    return false;\n  }\n  if ('get' in obj) {\n    return isAccessor(obj, key);\n  }\n  return isData(obj, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/base/node_modules/is-descriptor/index.js?");

/***/ }),

/***/ "./node_modules/cache-base/index.js":
/*!******************************************!*\
  !*** ./node_modules/cache-base/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! isobject */ \"./node_modules/isobject/index.js\");\nvar Emitter = __webpack_require__(/*! component-emitter */ \"./node_modules/component-emitter/index.js\");\nvar visit = __webpack_require__(/*! collection-visit */ \"./node_modules/collection-visit/index.js\");\nvar toPath = __webpack_require__(/*! to-object-path */ \"./node_modules/to-object-path/index.js\");\nvar union = __webpack_require__(/*! union-value */ \"./node_modules/union-value/index.js\");\nvar del = __webpack_require__(/*! unset-value */ \"./node_modules/unset-value/index.js\");\nvar get = __webpack_require__(/*! get-value */ \"./node_modules/get-value/index.js\");\nvar has = __webpack_require__(/*! has-value */ \"./node_modules/has-value/index.js\");\nvar set = __webpack_require__(/*! set-value */ \"./node_modules/set-value/index.js\");\n\n/**\n * Create a `Cache` constructor that when instantiated will\n * store values on the given `prop`.\n *\n * ```js\n * var Cache = require('cache-base').namespace('data');\n * var cache = new Cache();\n *\n * cache.set('foo', 'bar');\n * //=> {data: {foo: 'bar'}}\n * ```\n * @param {String} `prop` The property name to use for storing values.\n * @return {Function} Returns a custom `Cache` constructor\n * @api public\n */\n\nfunction namespace(prop) {\n\n  /**\n   * Create a new `Cache`. Internally the `Cache` constructor is created using\n   * the `namespace` function, with `cache` defined as the storage object.\n   *\n   * ```js\n   * var app = new Cache();\n   * ```\n   * @param {Object} `cache` Optionally pass an object to initialize with.\n   * @constructor\n   * @api public\n   */\n\n  function Cache(cache) {\n    if (prop) {\n      this[prop] = {};\n    }\n    if (cache) {\n      this.set(cache);\n    }\n  }\n\n  /**\n   * Inherit Emitter\n   */\n\n  Emitter(Cache.prototype);\n\n  /**\n   * Assign `value` to `key`. Also emits `set` with\n   * the key and value.\n   *\n   * ```js\n   * app.on('set', function(key, val) {\n   *   // do something when `set` is emitted\n   * });\n   *\n   * app.set(key, value);\n   *\n   * // also takes an object or array\n   * app.set({name: 'Halle'});\n   * app.set([{foo: 'bar'}, {baz: 'quux'}]);\n   * console.log(app);\n   * //=> {name: 'Halle', foo: 'bar', baz: 'quux'}\n   * ```\n   *\n   * @name .set\n   * @emits `set` with `key` and `value` as arguments.\n   * @param {String} `key`\n   * @param {any} `value`\n   * @return {Object} Returns the instance for chaining.\n   * @api public\n   */\n\n  Cache.prototype.set = function(key, val) {\n    if (Array.isArray(key) && arguments.length === 2) {\n      key = toPath(key);\n    }\n    if (isObject(key) || Array.isArray(key)) {\n      this.visit('set', key);\n    } else {\n      set(prop ? this[prop] : this, key, val);\n      this.emit('set', key, val);\n    }\n    return this;\n  };\n\n  /**\n   * Union `array` to `key`. Also emits `set` with\n   * the key and value.\n   *\n   * ```js\n   * app.union('a.b', ['foo']);\n   * app.union('a.b', ['bar']);\n   * console.log(app.get('a'));\n   * //=> {b: ['foo', 'bar']}\n   * ```\n   * @name .union\n   * @param {String} `key`\n   * @param {any} `value`\n   * @return {Object} Returns the instance for chaining.\n   * @api public\n   */\n\n  Cache.prototype.union = function(key, val) {\n    if (Array.isArray(key) && arguments.length === 2) {\n      key = toPath(key);\n    }\n    var ctx = prop ? this[prop] : this;\n    union(ctx, key, arrayify(val));\n    this.emit('union', val);\n    return this;\n  };\n\n  /**\n   * Return the value of `key`. Dot notation may be used\n   * to get [nested property values][get-value].\n   *\n   * ```js\n   * app.set('a.b.c', 'd');\n   * app.get('a.b');\n   * //=> {c: 'd'}\n   *\n   * app.get(['a', 'b']);\n   * //=> {c: 'd'}\n   * ```\n   *\n   * @name .get\n   * @emits `get` with `key` and `value` as arguments.\n   * @param {String} `key` The name of the property to get. Dot-notation may be used.\n   * @return {any} Returns the value of `key`\n   * @api public\n   */\n\n  Cache.prototype.get = function(key) {\n    key = toPath(arguments);\n\n    var ctx = prop ? this[prop] : this;\n    var val = get(ctx, key);\n\n    this.emit('get', key, val);\n    return val;\n  };\n\n  /**\n   * Return true if app has a stored value for `key`,\n   * false only if value is `undefined`.\n   *\n   * ```js\n   * app.set('foo', 'bar');\n   * app.has('foo');\n   * //=> true\n   * ```\n   *\n   * @name .has\n   * @emits `has` with `key` and true or false as arguments.\n   * @param {String} `key`\n   * @return {Boolean}\n   * @api public\n   */\n\n  Cache.prototype.has = function(key) {\n    key = toPath(arguments);\n\n    var ctx = prop ? this[prop] : this;\n    var val = get(ctx, key);\n\n    var has = typeof val !== 'undefined';\n    this.emit('has', key, has);\n    return has;\n  };\n\n  /**\n   * Delete one or more properties from the instance.\n   *\n   * ```js\n   * app.del(); // delete all\n   * // or\n   * app.del('foo');\n   * // or\n   * app.del(['foo', 'bar']);\n   * ```\n   * @name .del\n   * @emits `del` with the `key` as the only argument.\n   * @param {String|Array} `key` Property name or array of property names.\n   * @return {Object} Returns the instance for chaining.\n   * @api public\n   */\n\n  Cache.prototype.del = function(key) {\n    if (Array.isArray(key)) {\n      this.visit('del', key);\n    } else {\n      del(prop ? this[prop] : this, key);\n      this.emit('del', key);\n    }\n    return this;\n  };\n\n  /**\n   * Reset the entire cache to an empty object.\n   *\n   * ```js\n   * app.clear();\n   * ```\n   * @api public\n   */\n\n  Cache.prototype.clear = function() {\n    if (prop) {\n      this[prop] = {};\n    }\n  };\n\n  /**\n   * Visit `method` over the properties in the given object, or map\n   * visit over the object-elements in an array.\n   *\n   * @name .visit\n   * @param {String} `method` The name of the `base` method to call.\n   * @param {Object|Array} `val` The object or array to iterate over.\n   * @return {Object} Returns the instance for chaining.\n   * @api public\n   */\n\n  Cache.prototype.visit = function(method, val) {\n    visit(this, method, val);\n    return this;\n  };\n\n  return Cache;\n}\n\n/**\n * Cast val to an array\n */\n\nfunction arrayify(val) {\n  return val ? (Array.isArray(val) ? val : [val]) : [];\n}\n\n/**\n * Expose `Cache`\n */\n\nmodule.exports = namespace();\n\n/**\n * Expose `Cache.namespace`\n */\n\nmodule.exports.namespace = namespace;\n\n\n//# sourceURL=webpack:///./node_modules/cache-base/index.js?");

/***/ }),

/***/ "./node_modules/class-utils/index.js":
/*!*******************************************!*\
  !*** ./node_modules/class-utils/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar util = __webpack_require__(/*! util */ \"./node_modules/util/util.js\");\nvar union = __webpack_require__(/*! arr-union */ \"./node_modules/arr-union/index.js\");\nvar define = __webpack_require__(/*! define-property */ \"./node_modules/class-utils/node_modules/define-property/index.js\");\nvar staticExtend = __webpack_require__(/*! static-extend */ \"./node_modules/static-extend/index.js\");\nvar isObj = __webpack_require__(/*! isobject */ \"./node_modules/isobject/index.js\");\n\n/**\n * Expose class utils\n */\n\nvar cu = module.exports;\n\n/**\n * Expose class utils: `cu`\n */\n\ncu.isObject = function isObject(val) {\n  return isObj(val) || typeof val === 'function';\n};\n\n/**\n * Returns true if an array has any of the given elements, or an\n * object has any of the give keys.\n *\n * ```js\n * cu.has(['a', 'b', 'c'], 'c');\n * //=> true\n *\n * cu.has(['a', 'b', 'c'], ['c', 'z']);\n * //=> true\n *\n * cu.has({a: 'b', c: 'd'}, ['c', 'z']);\n * //=> true\n * ```\n * @param {Object} `obj`\n * @param {String|Array} `val`\n * @return {Boolean}\n * @api public\n */\n\ncu.has = function has(obj, val) {\n  val = cu.arrayify(val);\n  var len = val.length;\n\n  if (cu.isObject(obj)) {\n    for (var key in obj) {\n      if (val.indexOf(key) > -1) {\n        return true;\n      }\n    }\n\n    var keys = cu.nativeKeys(obj);\n    return cu.has(keys, val);\n  }\n\n  if (Array.isArray(obj)) {\n    var arr = obj;\n    while (len--) {\n      if (arr.indexOf(val[len]) > -1) {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  throw new TypeError('expected an array or object.');\n};\n\n/**\n * Returns true if an array or object has all of the given values.\n *\n * ```js\n * cu.hasAll(['a', 'b', 'c'], 'c');\n * //=> true\n *\n * cu.hasAll(['a', 'b', 'c'], ['c', 'z']);\n * //=> false\n *\n * cu.hasAll({a: 'b', c: 'd'}, ['c', 'z']);\n * //=> false\n * ```\n * @param {Object|Array} `val`\n * @param {String|Array} `values`\n * @return {Boolean}\n * @api public\n */\n\ncu.hasAll = function hasAll(val, values) {\n  values = cu.arrayify(values);\n  var len = values.length;\n  while (len--) {\n    if (!cu.has(val, values[len])) {\n      return false;\n    }\n  }\n  return true;\n};\n\n/**\n * Cast the given value to an array.\n *\n * ```js\n * cu.arrayify('foo');\n * //=> ['foo']\n *\n * cu.arrayify(['foo']);\n * //=> ['foo']\n * ```\n *\n * @param {String|Array} `val`\n * @return {Array}\n * @api public\n */\n\ncu.arrayify = function arrayify(val) {\n  return val ? (Array.isArray(val) ? val : [val]) : [];\n};\n\n/**\n * Noop\n */\n\ncu.noop = function noop() {\n  return;\n};\n\n/**\n * Returns the first argument passed to the function.\n */\n\ncu.identity = function identity(val) {\n  return val;\n};\n\n/**\n * Returns true if a value has a `contructor`\n *\n * ```js\n * cu.hasConstructor({});\n * //=> true\n *\n * cu.hasConstructor(Object.create(null));\n * //=> false\n * ```\n * @param  {Object} `value`\n * @return {Boolean}\n * @api public\n */\n\ncu.hasConstructor = function hasConstructor(val) {\n  return cu.isObject(val) && typeof val.constructor !== 'undefined';\n};\n\n/**\n * Get the native `ownPropertyNames` from the constructor of the\n * given `object`. An empty array is returned if the object does\n * not have a constructor.\n *\n * ```js\n * cu.nativeKeys({a: 'b', b: 'c', c: 'd'})\n * //=> ['a', 'b', 'c']\n *\n * cu.nativeKeys(function(){})\n * //=> ['length', 'caller']\n * ```\n *\n * @param  {Object} `obj` Object that has a `constructor`.\n * @return {Array} Array of keys.\n * @api public\n */\n\ncu.nativeKeys = function nativeKeys(val) {\n  if (!cu.hasConstructor(val)) return [];\n  var keys = Object.getOwnPropertyNames(val);\n  if ('caller' in val) keys.push('caller');\n  return keys;\n};\n\n/**\n * Returns property descriptor `key` if it's an \"own\" property\n * of the given object.\n *\n * ```js\n * function App() {}\n * Object.defineProperty(App.prototype, 'count', {\n *   get: function() {\n *     return Object.keys(this).length;\n *   }\n * });\n * cu.getDescriptor(App.prototype, 'count');\n * // returns:\n * // {\n * //   get: [Function],\n * //   set: undefined,\n * //   enumerable: false,\n * //   configurable: false\n * // }\n * ```\n *\n * @param {Object} `obj`\n * @param {String} `key`\n * @return {Object} Returns descriptor `key`\n * @api public\n */\n\ncu.getDescriptor = function getDescriptor(obj, key) {\n  if (!cu.isObject(obj)) {\n    throw new TypeError('expected an object.');\n  }\n  if (typeof key !== 'string') {\n    throw new TypeError('expected key to be a string.');\n  }\n  return Object.getOwnPropertyDescriptor(obj, key);\n};\n\n/**\n * Copy a descriptor from one object to another.\n *\n * ```js\n * function App() {}\n * Object.defineProperty(App.prototype, 'count', {\n *   get: function() {\n *     return Object.keys(this).length;\n *   }\n * });\n * var obj = {};\n * cu.copyDescriptor(obj, App.prototype, 'count');\n * ```\n * @param {Object} `receiver`\n * @param {Object} `provider`\n * @param {String} `name`\n * @return {Object}\n * @api public\n */\n\ncu.copyDescriptor = function copyDescriptor(receiver, provider, name) {\n  if (!cu.isObject(receiver)) {\n    throw new TypeError('expected receiving object to be an object.');\n  }\n  if (!cu.isObject(provider)) {\n    throw new TypeError('expected providing object to be an object.');\n  }\n  if (typeof name !== 'string') {\n    throw new TypeError('expected name to be a string.');\n  }\n\n  var val = cu.getDescriptor(provider, name);\n  if (val) Object.defineProperty(receiver, name, val);\n};\n\n/**\n * Copy static properties, prototype properties, and descriptors\n * from one object to another.\n *\n * @param {Object} `receiver`\n * @param {Object} `provider`\n * @param {String|Array} `omit` One or more properties to omit\n * @return {Object}\n * @api public\n */\n\ncu.copy = function copy(receiver, provider, omit) {\n  if (!cu.isObject(receiver)) {\n    throw new TypeError('expected receiving object to be an object.');\n  }\n  if (!cu.isObject(provider)) {\n    throw new TypeError('expected providing object to be an object.');\n  }\n  var props = Object.getOwnPropertyNames(provider);\n  var keys = Object.keys(provider);\n  var len = props.length,\n    key;\n  omit = cu.arrayify(omit);\n\n  while (len--) {\n    key = props[len];\n\n    if (cu.has(keys, key)) {\n      define(receiver, key, provider[key]);\n    } else if (!(key in receiver) && !cu.has(omit, key)) {\n      cu.copyDescriptor(receiver, provider, key);\n    }\n  }\n};\n\n/**\n * Inherit the static properties, prototype properties, and descriptors\n * from of an object.\n *\n * @param {Object} `receiver`\n * @param {Object} `provider`\n * @param {String|Array} `omit` One or more properties to omit\n * @return {Object}\n * @api public\n */\n\ncu.inherit = function inherit(receiver, provider, omit) {\n  if (!cu.isObject(receiver)) {\n    throw new TypeError('expected receiving object to be an object.');\n  }\n  if (!cu.isObject(provider)) {\n    throw new TypeError('expected providing object to be an object.');\n  }\n\n  var keys = [];\n  for (var key in provider) {\n    keys.push(key);\n    receiver[key] = provider[key];\n  }\n\n  keys = keys.concat(cu.arrayify(omit));\n\n  var a = provider.prototype || provider;\n  var b = receiver.prototype || receiver;\n  cu.copy(b, a, keys);\n};\n\n/**\n * Returns a function for extending the static properties,\n * prototype properties, and descriptors from the `Parent`\n * constructor onto `Child` constructors.\n *\n * ```js\n * var extend = cu.extend(Parent);\n * Parent.extend(Child);\n *\n * // optional methods\n * Parent.extend(Child, {\n *   foo: function() {},\n *   bar: function() {}\n * });\n * ```\n * @param {Function} `Parent` Parent ctor\n * @param {Function} `extend` Optional extend function to handle custom extensions. Useful when updating methods that require a specific prototype.\n *   @param {Function} `Child` Child ctor\n *   @param {Object} `proto` Optionally pass additional prototype properties to inherit.\n *   @return {Object}\n * @api public\n */\n\ncu.extend = function() {\n  // keep it lazy, instead of assigning to `cu.extend`\n  return staticExtend.apply(null, arguments);\n};\n\n/**\n * Bubble up events emitted from static methods on the Parent ctor.\n *\n * @param {Object} `Parent`\n * @param {Array} `events` Event names to bubble up\n * @api public\n */\n\ncu.bubble = function(Parent, events) {\n  events = events || [];\n  Parent.bubble = function(Child, arr) {\n    if (Array.isArray(arr)) {\n      events = union([], events, arr);\n    }\n    var len = events.length;\n    var idx = -1;\n    while (++idx < len) {\n      var name = events[idx];\n      Parent.on(name, Child.emit.bind(Child, name));\n    }\n    cu.bubble(Child, events);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/class-utils/index.js?");

/***/ }),

/***/ "./node_modules/class-utils/node_modules/define-property/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/class-utils/node_modules/define-property/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * define-property <https://github.com/jonschlinkert/define-property>\n *\n * Copyright (c) 2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\n\n\nvar isDescriptor = __webpack_require__(/*! is-descriptor */ \"./node_modules/is-descriptor/index.js\");\n\nmodule.exports = function defineProperty(obj, prop, val) {\n  if (typeof obj !== 'object' && typeof obj !== 'function') {\n    throw new TypeError('expected an object or function.');\n  }\n\n  if (typeof prop !== 'string') {\n    throw new TypeError('expected `prop` to be a string.');\n  }\n\n  if (isDescriptor(val) && ('set' in val || 'get' in val)) {\n    return Object.defineProperty(obj, prop, val);\n  }\n\n  return Object.defineProperty(obj, prop, {\n    configurable: true,\n    enumerable: false,\n    writable: true,\n    value: val\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/class-utils/node_modules/define-property/index.js?");

/***/ }),

/***/ "./node_modules/collection-visit/index.js":
/*!************************************************!*\
  !*** ./node_modules/collection-visit/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * collection-visit <https://github.com/jonschlinkert/collection-visit>\n *\n * Copyright (c) 2015, 2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar visit = __webpack_require__(/*! object-visit */ \"./node_modules/object-visit/index.js\");\nvar mapVisit = __webpack_require__(/*! map-visit */ \"./node_modules/map-visit/index.js\");\n\nmodule.exports = function(collection, method, val) {\n  var result;\n\n  if (typeof val === 'string' && (method in collection)) {\n    var args = [].slice.call(arguments, 2);\n    result = collection[method].apply(collection, args);\n  } else if (Array.isArray(val)) {\n    result = mapVisit.apply(null, arguments);\n  } else {\n    result = visit.apply(null, arguments);\n  }\n\n  if (typeof result !== 'undefined') {\n    return result;\n  }\n\n  return collection;\n};\n\n\n//# sourceURL=webpack:///./node_modules/collection-visit/index.js?");

/***/ }),

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n/**\r\n * Expose `Emitter`.\r\n */\r\n\r\nif (true) {\r\n  module.exports = Emitter;\r\n}\r\n\r\n/**\r\n * Initialize a new `Emitter`.\r\n *\r\n * @api public\r\n */\r\n\r\nfunction Emitter(obj) {\r\n  if (obj) return mixin(obj);\r\n};\r\n\r\n/**\r\n * Mixin the emitter properties.\r\n *\r\n * @param {Object} obj\r\n * @return {Object}\r\n * @api private\r\n */\r\n\r\nfunction mixin(obj) {\r\n  for (var key in Emitter.prototype) {\r\n    obj[key] = Emitter.prototype[key];\r\n  }\r\n  return obj;\r\n}\r\n\r\n/**\r\n * Listen on the given `event` with `fn`.\r\n *\r\n * @param {String} event\r\n * @param {Function} fn\r\n * @return {Emitter}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.on =\r\nEmitter.prototype.addEventListener = function(event, fn){\r\n  this._callbacks = this._callbacks || {};\r\n  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])\r\n    .push(fn);\r\n  return this;\r\n};\r\n\r\n/**\r\n * Adds an `event` listener that will be invoked a single\r\n * time then automatically removed.\r\n *\r\n * @param {String} event\r\n * @param {Function} fn\r\n * @return {Emitter}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.once = function(event, fn){\r\n  function on() {\r\n    this.off(event, on);\r\n    fn.apply(this, arguments);\r\n  }\r\n\r\n  on.fn = fn;\r\n  this.on(event, on);\r\n  return this;\r\n};\r\n\r\n/**\r\n * Remove the given callback for `event` or all\r\n * registered callbacks.\r\n *\r\n * @param {String} event\r\n * @param {Function} fn\r\n * @return {Emitter}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.off =\r\nEmitter.prototype.removeListener =\r\nEmitter.prototype.removeAllListeners =\r\nEmitter.prototype.removeEventListener = function(event, fn){\r\n  this._callbacks = this._callbacks || {};\r\n\r\n  // all\r\n  if (0 == arguments.length) {\r\n    this._callbacks = {};\r\n    return this;\r\n  }\r\n\r\n  // specific event\r\n  var callbacks = this._callbacks['$' + event];\r\n  if (!callbacks) return this;\r\n\r\n  // remove all handlers\r\n  if (1 == arguments.length) {\r\n    delete this._callbacks['$' + event];\r\n    return this;\r\n  }\r\n\r\n  // remove specific handler\r\n  var cb;\r\n  for (var i = 0; i < callbacks.length; i++) {\r\n    cb = callbacks[i];\r\n    if (cb === fn || cb.fn === fn) {\r\n      callbacks.splice(i, 1);\r\n      break;\r\n    }\r\n  }\r\n\r\n  // Remove event specific arrays for event types that no\r\n  // one is subscribed for to avoid memory leak.\r\n  if (callbacks.length === 0) {\r\n    delete this._callbacks['$' + event];\r\n  }\r\n\r\n  return this;\r\n};\r\n\r\n/**\r\n * Emit `event` with the given args.\r\n *\r\n * @param {String} event\r\n * @param {Mixed} ...\r\n * @return {Emitter}\r\n */\r\n\r\nEmitter.prototype.emit = function(event){\r\n  this._callbacks = this._callbacks || {};\r\n\r\n  var args = new Array(arguments.length - 1)\r\n    , callbacks = this._callbacks['$' + event];\r\n\r\n  for (var i = 1; i < arguments.length; i++) {\r\n    args[i - 1] = arguments[i];\r\n  }\r\n\r\n  if (callbacks) {\r\n    callbacks = callbacks.slice(0);\r\n    for (var i = 0, len = callbacks.length; i < len; ++i) {\r\n      callbacks[i].apply(this, args);\r\n    }\r\n  }\r\n\r\n  return this;\r\n};\r\n\r\n/**\r\n * Return array of callbacks for `event`.\r\n *\r\n * @param {String} event\r\n * @return {Array}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.listeners = function(event){\r\n  this._callbacks = this._callbacks || {};\r\n  return this._callbacks['$' + event] || [];\r\n};\r\n\r\n/**\r\n * Check if this emitter has `event` handlers.\r\n *\r\n * @param {String} event\r\n * @return {Boolean}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.hasListeners = function(event){\r\n  return !! this.listeners(event).length;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/component-emitter/index.js?");

/***/ }),

/***/ "./node_modules/copy-descriptor/index.js":
/*!***********************************************!*\
  !*** ./node_modules/copy-descriptor/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * copy-descriptor <https://github.com/jonschlinkert/copy-descriptor>\n *\n * Copyright (c) 2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\n\n\n/**\n * Copy a descriptor from one object to another.\n *\n * ```js\n * function App() {\n *   this.cache = {};\n * }\n * App.prototype.set = function(key, val) {\n *   this.cache[key] = val;\n *   return this;\n * };\n * Object.defineProperty(App.prototype, 'count', {\n *   get: function() {\n *     return Object.keys(this.cache).length;\n *   }\n * });\n *\n * copy(App.prototype, 'count', 'len');\n *\n * // create an instance\n * var app = new App();\n *\n * app.set('a', true);\n * app.set('b', true);\n * app.set('c', true);\n *\n * console.log(app.count);\n * //=> 3\n * console.log(app.len);\n * //=> 3\n * ```\n * @name copy\n * @param {Object} `receiver` The target object\n * @param {Object} `provider` The provider object\n * @param {String} `from` The key to copy on provider.\n * @param {String} `to` Optionally specify a new key name to use.\n * @return {Object}\n * @api public\n */\n\nmodule.exports = function copyDescriptor(receiver, provider, from, to) {\n  if (!isObject(provider) && typeof provider !== 'function') {\n    to = from;\n    from = provider;\n    provider = receiver;\n  }\n  if (!isObject(receiver) && typeof receiver !== 'function') {\n    throw new TypeError('expected the first argument to be an object');\n  }\n  if (!isObject(provider) && typeof provider !== 'function') {\n    throw new TypeError('expected provider to be an object');\n  }\n\n  if (typeof to !== 'string') {\n    to = from;\n  }\n  if (typeof from !== 'string') {\n    throw new TypeError('expected key to be a string');\n  }\n\n  if (!(from in provider)) {\n    throw new Error('property \"' + from + '\" does not exist');\n  }\n\n  var val = Object.getOwnPropertyDescriptor(provider, from);\n  if (val) Object.defineProperty(receiver, to, val);\n};\n\nfunction isObject(val) {\n  return {}.toString.call(val) === '[object Object]';\n}\n\n\n\n//# sourceURL=webpack:///./node_modules/copy-descriptor/index.js?");

/***/ }),

/***/ "./node_modules/extend-shallow/index.js":
/*!**********************************************!*\
  !*** ./node_modules/extend-shallow/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isExtendable = __webpack_require__(/*! is-extendable */ \"./node_modules/extend-shallow/node_modules/is-extendable/index.js\");\nvar assignSymbols = __webpack_require__(/*! assign-symbols */ \"./node_modules/assign-symbols/index.js\");\n\nmodule.exports = Object.assign || function(obj/*, objects*/) {\n  if (obj === null || typeof obj === 'undefined') {\n    throw new TypeError('Cannot convert undefined or null to object');\n  }\n  if (!isObject(obj)) {\n    obj = {};\n  }\n  for (var i = 1; i < arguments.length; i++) {\n    var val = arguments[i];\n    if (isString(val)) {\n      val = toObject(val);\n    }\n    if (isObject(val)) {\n      assign(obj, val);\n      assignSymbols(obj, val);\n    }\n  }\n  return obj;\n};\n\nfunction assign(a, b) {\n  for (var key in b) {\n    if (hasOwn(b, key)) {\n      a[key] = b[key];\n    }\n  }\n}\n\nfunction isString(val) {\n  return (val && typeof val === 'string');\n}\n\nfunction toObject(str) {\n  var obj = {};\n  for (var i in str) {\n    obj[i] = str[i];\n  }\n  return obj;\n}\n\nfunction isObject(val) {\n  return (val && typeof val === 'object') || isExtendable(val);\n}\n\n/**\n * Returns true if the given `key` is an own property of `obj`.\n */\n\nfunction hasOwn(obj, key) {\n  return Object.prototype.hasOwnProperty.call(obj, key);\n}\n\nfunction isEnum(obj, key) {\n  return Object.prototype.propertyIsEnumerable.call(obj, key);\n}\n\n\n//# sourceURL=webpack:///./node_modules/extend-shallow/index.js?");

/***/ }),

/***/ "./node_modules/extend-shallow/node_modules/is-extendable/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/extend-shallow/node_modules/is-extendable/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * is-extendable <https://github.com/jonschlinkert/is-extendable>\n *\n * Copyright (c) 2015-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar isPlainObject = __webpack_require__(/*! is-plain-object */ \"./node_modules/is-plain-object/index.js\");\n\nmodule.exports = function isExtendable(val) {\n  return isPlainObject(val) || typeof val === 'function' || Array.isArray(val);\n};\n\n\n//# sourceURL=webpack:///./node_modules/extend-shallow/node_modules/is-extendable/index.js?");

/***/ }),

/***/ "./node_modules/for-in/index.js":
/*!**************************************!*\
  !*** ./node_modules/for-in/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * for-in <https://github.com/jonschlinkert/for-in>\n *\n * Copyright (c) 2014-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nmodule.exports = function forIn(obj, fn, thisArg) {\n  for (var key in obj) {\n    if (fn.call(thisArg, obj[key], key, obj) === false) {\n      break;\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/for-in/index.js?");

/***/ }),

/***/ "./node_modules/get-value/index.js":
/*!*****************************************!*\
  !*** ./node_modules/get-value/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * get-value <https://github.com/jonschlinkert/get-value>\n *\n * Copyright (c) 2014-2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\nmodule.exports = function(obj, prop, a, b, c) {\n  if (!isObject(obj) || !prop) {\n    return obj;\n  }\n\n  prop = toString(prop);\n\n  // allowing for multiple properties to be passed as\n  // a string or array, but much faster (3-4x) than doing\n  // `[].slice.call(arguments)`\n  if (a) prop += '.' + toString(a);\n  if (b) prop += '.' + toString(b);\n  if (c) prop += '.' + toString(c);\n\n  if (prop in obj) {\n    return obj[prop];\n  }\n\n  var segs = prop.split('.');\n  var len = segs.length;\n  var i = -1;\n\n  while (obj && (++i < len)) {\n    var key = segs[i];\n    while (key[key.length - 1] === '\\\\') {\n      key = key.slice(0, -1) + '.' + segs[++i];\n    }\n    obj = obj[key];\n  }\n  return obj;\n};\n\nfunction isObject(val) {\n  return val !== null && (typeof val === 'object' || typeof val === 'function');\n}\n\nfunction toString(val) {\n  if (!val) return '';\n  if (Array.isArray(val)) {\n    return val.join('.');\n  }\n  return val;\n}\n\n\n//# sourceURL=webpack:///./node_modules/get-value/index.js?");

/***/ }),

/***/ "./node_modules/has-value/index.js":
/*!*****************************************!*\
  !*** ./node_modules/has-value/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * has-value <https://github.com/jonschlinkert/has-value>\n *\n * Copyright (c) 2014-2017, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\n\n\nvar isObject = __webpack_require__(/*! isobject */ \"./node_modules/isobject/index.js\");\nvar hasValues = __webpack_require__(/*! has-values */ \"./node_modules/has-values/index.js\");\nvar get = __webpack_require__(/*! get-value */ \"./node_modules/get-value/index.js\");\n\nmodule.exports = function(val, prop) {\n  return hasValues(isObject(val) && prop ? get(val, prop) : val);\n};\n\n\n//# sourceURL=webpack:///./node_modules/has-value/index.js?");

/***/ }),

/***/ "./node_modules/has-values/index.js":
/*!******************************************!*\
  !*** ./node_modules/has-values/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * has-values <https://github.com/jonschlinkert/has-values>\n *\n * Copyright (c) 2014-2015, 2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar typeOf = __webpack_require__(/*! kind-of */ \"./node_modules/has-values/node_modules/kind-of/index.js\");\nvar isNumber = __webpack_require__(/*! is-number */ \"./node_modules/is-number/index.js\");\n\nmodule.exports = function hasValue(val) {\n  // is-number checks for NaN and other edge cases\n  if (isNumber(val)) {\n    return true;\n  }\n\n  switch (typeOf(val)) {\n    case 'null':\n    case 'boolean':\n    case 'function':\n      return true;\n    case 'string':\n    case 'arguments':\n      return val.length !== 0;\n    case 'error':\n      return val.message !== '';\n    case 'array':\n      var len = val.length;\n      if (len === 0) {\n        return false;\n      }\n      for (var i = 0; i < len; i++) {\n        if (hasValue(val[i])) {\n          return true;\n        }\n      }\n      return false;\n    case 'file':\n    case 'map':\n    case 'set':\n      return val.size !== 0;\n    case 'object':\n      var keys = Object.keys(val);\n      if (keys.length === 0) {\n        return false;\n      }\n      for (var i = 0; i < keys.length; i++) {\n        var key = keys[i];\n        if (hasValue(val[key])) {\n          return true;\n        }\n      }\n      return false;\n    default: {\n      return false;\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/has-values/index.js?");

/***/ }),

/***/ "./node_modules/has-values/node_modules/kind-of/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/has-values/node_modules/kind-of/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\");\nvar toString = Object.prototype.toString;\n\n/**\n * Get the native `typeof` a value.\n *\n * @param  {*} `val`\n * @return {*} Native javascript type\n */\n\nmodule.exports = function kindOf(val) {\n  // primitivies\n  if (typeof val === 'undefined') {\n    return 'undefined';\n  }\n  if (val === null) {\n    return 'null';\n  }\n  if (val === true || val === false || val instanceof Boolean) {\n    return 'boolean';\n  }\n  if (typeof val === 'string' || val instanceof String) {\n    return 'string';\n  }\n  if (typeof val === 'number' || val instanceof Number) {\n    return 'number';\n  }\n\n  // functions\n  if (typeof val === 'function' || val instanceof Function) {\n    return 'function';\n  }\n\n  // array\n  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {\n    return 'array';\n  }\n\n  // check for instances of RegExp and Date before calling `toString`\n  if (val instanceof RegExp) {\n    return 'regexp';\n  }\n  if (val instanceof Date) {\n    return 'date';\n  }\n\n  // other objects\n  var type = toString.call(val);\n\n  if (type === '[object RegExp]') {\n    return 'regexp';\n  }\n  if (type === '[object Date]') {\n    return 'date';\n  }\n  if (type === '[object Arguments]') {\n    return 'arguments';\n  }\n  if (type === '[object Error]') {\n    return 'error';\n  }\n  if (type === '[object Promise]') {\n    return 'promise';\n  }\n\n  // buffer\n  if (isBuffer(val)) {\n    return 'buffer';\n  }\n\n  // es6: Map, WeakMap, Set, WeakSet\n  if (type === '[object Set]') {\n    return 'set';\n  }\n  if (type === '[object WeakSet]') {\n    return 'weakset';\n  }\n  if (type === '[object Map]') {\n    return 'map';\n  }\n  if (type === '[object WeakMap]') {\n    return 'weakmap';\n  }\n  if (type === '[object Symbol]') {\n    return 'symbol';\n  }\n\n  // typed arrays\n  if (type === '[object Int8Array]') {\n    return 'int8array';\n  }\n  if (type === '[object Uint8Array]') {\n    return 'uint8array';\n  }\n  if (type === '[object Uint8ClampedArray]') {\n    return 'uint8clampedarray';\n  }\n  if (type === '[object Int16Array]') {\n    return 'int16array';\n  }\n  if (type === '[object Uint16Array]') {\n    return 'uint16array';\n  }\n  if (type === '[object Int32Array]') {\n    return 'int32array';\n  }\n  if (type === '[object Uint32Array]') {\n    return 'uint32array';\n  }\n  if (type === '[object Float32Array]') {\n    return 'float32array';\n  }\n  if (type === '[object Float64Array]') {\n    return 'float64array';\n  }\n\n  // must be a plain object\n  return 'object';\n};\n\n\n//# sourceURL=webpack:///./node_modules/has-values/node_modules/kind-of/index.js?");

/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (typeof Object.create === 'function') {\n  // implementation from standard node.js 'util' module\n  module.exports = function inherits(ctor, superCtor) {\n    ctor.super_ = superCtor\n    ctor.prototype = Object.create(superCtor.prototype, {\n      constructor: {\n        value: ctor,\n        enumerable: false,\n        writable: true,\n        configurable: true\n      }\n    });\n  };\n} else {\n  // old school shim for old browsers\n  module.exports = function inherits(ctor, superCtor) {\n    ctor.super_ = superCtor\n    var TempCtor = function () {}\n    TempCtor.prototype = superCtor.prototype\n    ctor.prototype = new TempCtor()\n    ctor.prototype.constructor = ctor\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/inherits/inherits_browser.js?");

/***/ }),

/***/ "./node_modules/is-accessor-descriptor/index.js":
/*!******************************************************!*\
  !*** ./node_modules/is-accessor-descriptor/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * is-accessor-descriptor <https://github.com/jonschlinkert/is-accessor-descriptor>\n *\n * Copyright (c) 2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\n\n\nvar typeOf = __webpack_require__(/*! kind-of */ \"./node_modules/is-accessor-descriptor/node_modules/kind-of/index.js\");\n\n// accessor descriptor properties\nvar accessor = {\n  get: 'function',\n  set: 'function',\n  configurable: 'boolean',\n  enumerable: 'boolean'\n};\n\nfunction isAccessorDescriptor(obj, prop) {\n  if (typeof prop === 'string') {\n    var val = Object.getOwnPropertyDescriptor(obj, prop);\n    return typeof val !== 'undefined';\n  }\n\n  if (typeOf(obj) !== 'object') {\n    return false;\n  }\n\n  if (has(obj, 'value') || has(obj, 'writable')) {\n    return false;\n  }\n\n  if (!has(obj, 'get') || typeof obj.get !== 'function') {\n    return false;\n  }\n\n  // tldr: it's valid to have \"set\" be undefined\n  // \"set\" might be undefined if `Object.getOwnPropertyDescriptor`\n  // was used to get the value, and only `get` was defined by the user\n  if (has(obj, 'set') && typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {\n    return false;\n  }\n\n  for (var key in obj) {\n    if (!accessor.hasOwnProperty(key)) {\n      continue;\n    }\n\n    if (typeOf(obj[key]) === accessor[key]) {\n      continue;\n    }\n\n    if (typeof obj[key] !== 'undefined') {\n      return false;\n    }\n  }\n  return true;\n}\n\nfunction has(obj, key) {\n  return {}.hasOwnProperty.call(obj, key);\n}\n\n/**\n * Expose `isAccessorDescriptor`\n */\n\nmodule.exports = isAccessorDescriptor;\n\n\n//# sourceURL=webpack:///./node_modules/is-accessor-descriptor/index.js?");

/***/ }),

/***/ "./node_modules/is-accessor-descriptor/node_modules/kind-of/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/is-accessor-descriptor/node_modules/kind-of/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\");\nvar toString = Object.prototype.toString;\n\n/**\n * Get the native `typeof` a value.\n *\n * @param  {*} `val`\n * @return {*} Native javascript type\n */\n\nmodule.exports = function kindOf(val) {\n  // primitivies\n  if (typeof val === 'undefined') {\n    return 'undefined';\n  }\n  if (val === null) {\n    return 'null';\n  }\n  if (val === true || val === false || val instanceof Boolean) {\n    return 'boolean';\n  }\n  if (typeof val === 'string' || val instanceof String) {\n    return 'string';\n  }\n  if (typeof val === 'number' || val instanceof Number) {\n    return 'number';\n  }\n\n  // functions\n  if (typeof val === 'function' || val instanceof Function) {\n    return 'function';\n  }\n\n  // array\n  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {\n    return 'array';\n  }\n\n  // check for instances of RegExp and Date before calling `toString`\n  if (val instanceof RegExp) {\n    return 'regexp';\n  }\n  if (val instanceof Date) {\n    return 'date';\n  }\n\n  // other objects\n  var type = toString.call(val);\n\n  if (type === '[object RegExp]') {\n    return 'regexp';\n  }\n  if (type === '[object Date]') {\n    return 'date';\n  }\n  if (type === '[object Arguments]') {\n    return 'arguments';\n  }\n  if (type === '[object Error]') {\n    return 'error';\n  }\n\n  // buffer\n  if (isBuffer(val)) {\n    return 'buffer';\n  }\n\n  // es6: Map, WeakMap, Set, WeakSet\n  if (type === '[object Set]') {\n    return 'set';\n  }\n  if (type === '[object WeakSet]') {\n    return 'weakset';\n  }\n  if (type === '[object Map]') {\n    return 'map';\n  }\n  if (type === '[object WeakMap]') {\n    return 'weakmap';\n  }\n  if (type === '[object Symbol]') {\n    return 'symbol';\n  }\n\n  // typed arrays\n  if (type === '[object Int8Array]') {\n    return 'int8array';\n  }\n  if (type === '[object Uint8Array]') {\n    return 'uint8array';\n  }\n  if (type === '[object Uint8ClampedArray]') {\n    return 'uint8clampedarray';\n  }\n  if (type === '[object Int16Array]') {\n    return 'int16array';\n  }\n  if (type === '[object Uint16Array]') {\n    return 'uint16array';\n  }\n  if (type === '[object Int32Array]') {\n    return 'int32array';\n  }\n  if (type === '[object Uint32Array]') {\n    return 'uint32array';\n  }\n  if (type === '[object Float32Array]') {\n    return 'float32array';\n  }\n  if (type === '[object Float64Array]') {\n    return 'float64array';\n  }\n\n  // must be a plain object\n  return 'object';\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-accessor-descriptor/node_modules/kind-of/index.js?");

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * Determine if an object is a Buffer\n *\n * @author   Feross Aboukhadijeh <https://feross.org>\n * @license  MIT\n */\n\n// The _isBuffer check is for Safari 5-7 support, because it's missing\n// Object.prototype.constructor. Remove this eventually\nmodule.exports = function (obj) {\n  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)\n}\n\nfunction isBuffer (obj) {\n  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)\n}\n\n// For Node v0.10 support. Remove this eventually.\nfunction isSlowBuffer (obj) {\n  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))\n}\n\n\n//# sourceURL=webpack:///./node_modules/is-buffer/index.js?");

/***/ }),

/***/ "./node_modules/is-data-descriptor/index.js":
/*!**************************************************!*\
  !*** ./node_modules/is-data-descriptor/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * is-data-descriptor <https://github.com/jonschlinkert/is-data-descriptor>\n *\n * Copyright (c) 2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\n\n\nvar typeOf = __webpack_require__(/*! kind-of */ \"./node_modules/is-data-descriptor/node_modules/kind-of/index.js\");\n\n// data descriptor properties\nvar data = {\n  configurable: 'boolean',\n  enumerable: 'boolean',\n  writable: 'boolean'\n};\n\nfunction isDataDescriptor(obj, prop) {\n  if (typeOf(obj) !== 'object') {\n    return false;\n  }\n\n  if (typeof prop === 'string') {\n    var val = Object.getOwnPropertyDescriptor(obj, prop);\n    return typeof val !== 'undefined';\n  }\n\n  if (!('value' in obj) && !('writable' in obj)) {\n    return false;\n  }\n\n  for (var key in obj) {\n    if (key === 'value') continue;\n\n    if (!data.hasOwnProperty(key)) {\n      continue;\n    }\n\n    if (typeOf(obj[key]) === data[key]) {\n      continue;\n    }\n\n    if (typeof obj[key] !== 'undefined') {\n      return false;\n    }\n  }\n  return true;\n}\n\n/**\n * Expose `isDataDescriptor`\n */\n\nmodule.exports = isDataDescriptor;\n\n\n//# sourceURL=webpack:///./node_modules/is-data-descriptor/index.js?");

/***/ }),

/***/ "./node_modules/is-data-descriptor/node_modules/kind-of/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/is-data-descriptor/node_modules/kind-of/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\");\nvar toString = Object.prototype.toString;\n\n/**\n * Get the native `typeof` a value.\n *\n * @param  {*} `val`\n * @return {*} Native javascript type\n */\n\nmodule.exports = function kindOf(val) {\n  // primitivies\n  if (typeof val === 'undefined') {\n    return 'undefined';\n  }\n  if (val === null) {\n    return 'null';\n  }\n  if (val === true || val === false || val instanceof Boolean) {\n    return 'boolean';\n  }\n  if (typeof val === 'string' || val instanceof String) {\n    return 'string';\n  }\n  if (typeof val === 'number' || val instanceof Number) {\n    return 'number';\n  }\n\n  // functions\n  if (typeof val === 'function' || val instanceof Function) {\n    return 'function';\n  }\n\n  // array\n  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {\n    return 'array';\n  }\n\n  // check for instances of RegExp and Date before calling `toString`\n  if (val instanceof RegExp) {\n    return 'regexp';\n  }\n  if (val instanceof Date) {\n    return 'date';\n  }\n\n  // other objects\n  var type = toString.call(val);\n\n  if (type === '[object RegExp]') {\n    return 'regexp';\n  }\n  if (type === '[object Date]') {\n    return 'date';\n  }\n  if (type === '[object Arguments]') {\n    return 'arguments';\n  }\n  if (type === '[object Error]') {\n    return 'error';\n  }\n\n  // buffer\n  if (isBuffer(val)) {\n    return 'buffer';\n  }\n\n  // es6: Map, WeakMap, Set, WeakSet\n  if (type === '[object Set]') {\n    return 'set';\n  }\n  if (type === '[object WeakSet]') {\n    return 'weakset';\n  }\n  if (type === '[object Map]') {\n    return 'map';\n  }\n  if (type === '[object WeakMap]') {\n    return 'weakmap';\n  }\n  if (type === '[object Symbol]') {\n    return 'symbol';\n  }\n\n  // typed arrays\n  if (type === '[object Int8Array]') {\n    return 'int8array';\n  }\n  if (type === '[object Uint8Array]') {\n    return 'uint8array';\n  }\n  if (type === '[object Uint8ClampedArray]') {\n    return 'uint8clampedarray';\n  }\n  if (type === '[object Int16Array]') {\n    return 'int16array';\n  }\n  if (type === '[object Uint16Array]') {\n    return 'uint16array';\n  }\n  if (type === '[object Int32Array]') {\n    return 'int32array';\n  }\n  if (type === '[object Uint32Array]') {\n    return 'uint32array';\n  }\n  if (type === '[object Float32Array]') {\n    return 'float32array';\n  }\n  if (type === '[object Float64Array]') {\n    return 'float64array';\n  }\n\n  // must be a plain object\n  return 'object';\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-data-descriptor/node_modules/kind-of/index.js?");

/***/ }),

/***/ "./node_modules/is-descriptor/index.js":
/*!*********************************************!*\
  !*** ./node_modules/is-descriptor/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * is-descriptor <https://github.com/jonschlinkert/is-descriptor>\n *\n * Copyright (c) 2015-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar typeOf = __webpack_require__(/*! kind-of */ \"./node_modules/is-descriptor/node_modules/kind-of/index.js\");\nvar isAccessor = __webpack_require__(/*! is-accessor-descriptor */ \"./node_modules/is-accessor-descriptor/index.js\");\nvar isData = __webpack_require__(/*! is-data-descriptor */ \"./node_modules/is-data-descriptor/index.js\");\n\nmodule.exports = function isDescriptor(obj, key) {\n  if (typeOf(obj) !== 'object') {\n    return false;\n  }\n  if ('get' in obj) {\n    return isAccessor(obj, key);\n  }\n  return isData(obj, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-descriptor/index.js?");

/***/ }),

/***/ "./node_modules/is-descriptor/node_modules/kind-of/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/is-descriptor/node_modules/kind-of/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = Object.prototype.toString;\n\n/**\n * Get the native `typeof` a value.\n *\n * @param  {*} `val`\n * @return {*} Native javascript type\n */\n\nmodule.exports = function kindOf(val) {\n  var type = typeof val;\n\n  // primitivies\n  if (type === 'undefined') {\n    return 'undefined';\n  }\n  if (val === null) {\n    return 'null';\n  }\n  if (val === true || val === false || val instanceof Boolean) {\n    return 'boolean';\n  }\n  if (type === 'string' || val instanceof String) {\n    return 'string';\n  }\n  if (type === 'number' || val instanceof Number) {\n    return 'number';\n  }\n\n  // functions\n  if (type === 'function' || val instanceof Function) {\n    if (typeof val.constructor.name !== 'undefined' && val.constructor.name.slice(0, 9) === 'Generator') {\n      return 'generatorfunction';\n    }\n    return 'function';\n  }\n\n  // array\n  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {\n    return 'array';\n  }\n\n  // check for instances of RegExp and Date before calling `toString`\n  if (val instanceof RegExp) {\n    return 'regexp';\n  }\n  if (val instanceof Date) {\n    return 'date';\n  }\n\n  // other objects\n  type = toString.call(val);\n\n  if (type === '[object RegExp]') {\n    return 'regexp';\n  }\n  if (type === '[object Date]') {\n    return 'date';\n  }\n  if (type === '[object Arguments]') {\n    return 'arguments';\n  }\n  if (type === '[object Error]') {\n    return 'error';\n  }\n  if (type === '[object Promise]') {\n    return 'promise';\n  }\n\n  // buffer\n  if (isBuffer(val)) {\n    return 'buffer';\n  }\n\n  // es6: Map, WeakMap, Set, WeakSet\n  if (type === '[object Set]') {\n    return 'set';\n  }\n  if (type === '[object WeakSet]') {\n    return 'weakset';\n  }\n  if (type === '[object Map]') {\n    return 'map';\n  }\n  if (type === '[object WeakMap]') {\n    return 'weakmap';\n  }\n  if (type === '[object Symbol]') {\n    return 'symbol';\n  }\n  \n  if (type === '[object Map Iterator]') {\n    return 'mapiterator';\n  }\n  if (type === '[object Set Iterator]') {\n    return 'setiterator';\n  }\n  if (type === '[object String Iterator]') {\n    return 'stringiterator';\n  }\n  if (type === '[object Array Iterator]') {\n    return 'arrayiterator';\n  }\n  \n  // typed arrays\n  if (type === '[object Int8Array]') {\n    return 'int8array';\n  }\n  if (type === '[object Uint8Array]') {\n    return 'uint8array';\n  }\n  if (type === '[object Uint8ClampedArray]') {\n    return 'uint8clampedarray';\n  }\n  if (type === '[object Int16Array]') {\n    return 'int16array';\n  }\n  if (type === '[object Uint16Array]') {\n    return 'uint16array';\n  }\n  if (type === '[object Int32Array]') {\n    return 'int32array';\n  }\n  if (type === '[object Uint32Array]') {\n    return 'uint32array';\n  }\n  if (type === '[object Float32Array]') {\n    return 'float32array';\n  }\n  if (type === '[object Float64Array]') {\n    return 'float64array';\n  }\n\n  // must be a plain object\n  return 'object';\n};\n\n/**\n * If you need to support Safari 5-7 (8-10 yr-old browser),\n * take a look at https://github.com/feross/is-buffer\n */\n\nfunction isBuffer(val) {\n  return val.constructor\n    && typeof val.constructor.isBuffer === 'function'\n    && val.constructor.isBuffer(val);\n}\n\n\n//# sourceURL=webpack:///./node_modules/is-descriptor/node_modules/kind-of/index.js?");

/***/ }),

/***/ "./node_modules/is-extendable/index.js":
/*!*********************************************!*\
  !*** ./node_modules/is-extendable/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * is-extendable <https://github.com/jonschlinkert/is-extendable>\n *\n * Copyright (c) 2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\n\n\nmodule.exports = function isExtendable(val) {\n  return typeof val !== 'undefined' && val !== null\n    && (typeof val === 'object' || typeof val === 'function');\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-extendable/index.js?");

/***/ }),

/***/ "./node_modules/is-number/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-number/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * is-number <https://github.com/jonschlinkert/is-number>\n *\n * Copyright (c) 2014-2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\n\n\nvar typeOf = __webpack_require__(/*! kind-of */ \"./node_modules/is-number/node_modules/kind-of/index.js\");\n\nmodule.exports = function isNumber(num) {\n  var type = typeOf(num);\n\n  if (type === 'string') {\n    if (!num.trim()) return false;\n  } else if (type !== 'number') {\n    return false;\n  }\n\n  return (num - num + 1) >= 0;\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-number/index.js?");

/***/ }),

/***/ "./node_modules/is-number/node_modules/kind-of/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/is-number/node_modules/kind-of/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\");\nvar toString = Object.prototype.toString;\n\n/**\n * Get the native `typeof` a value.\n *\n * @param  {*} `val`\n * @return {*} Native javascript type\n */\n\nmodule.exports = function kindOf(val) {\n  // primitivies\n  if (typeof val === 'undefined') {\n    return 'undefined';\n  }\n  if (val === null) {\n    return 'null';\n  }\n  if (val === true || val === false || val instanceof Boolean) {\n    return 'boolean';\n  }\n  if (typeof val === 'string' || val instanceof String) {\n    return 'string';\n  }\n  if (typeof val === 'number' || val instanceof Number) {\n    return 'number';\n  }\n\n  // functions\n  if (typeof val === 'function' || val instanceof Function) {\n    return 'function';\n  }\n\n  // array\n  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {\n    return 'array';\n  }\n\n  // check for instances of RegExp and Date before calling `toString`\n  if (val instanceof RegExp) {\n    return 'regexp';\n  }\n  if (val instanceof Date) {\n    return 'date';\n  }\n\n  // other objects\n  var type = toString.call(val);\n\n  if (type === '[object RegExp]') {\n    return 'regexp';\n  }\n  if (type === '[object Date]') {\n    return 'date';\n  }\n  if (type === '[object Arguments]') {\n    return 'arguments';\n  }\n  if (type === '[object Error]') {\n    return 'error';\n  }\n\n  // buffer\n  if (isBuffer(val)) {\n    return 'buffer';\n  }\n\n  // es6: Map, WeakMap, Set, WeakSet\n  if (type === '[object Set]') {\n    return 'set';\n  }\n  if (type === '[object WeakSet]') {\n    return 'weakset';\n  }\n  if (type === '[object Map]') {\n    return 'map';\n  }\n  if (type === '[object WeakMap]') {\n    return 'weakmap';\n  }\n  if (type === '[object Symbol]') {\n    return 'symbol';\n  }\n\n  // typed arrays\n  if (type === '[object Int8Array]') {\n    return 'int8array';\n  }\n  if (type === '[object Uint8Array]') {\n    return 'uint8array';\n  }\n  if (type === '[object Uint8ClampedArray]') {\n    return 'uint8clampedarray';\n  }\n  if (type === '[object Int16Array]') {\n    return 'int16array';\n  }\n  if (type === '[object Uint16Array]') {\n    return 'uint16array';\n  }\n  if (type === '[object Int32Array]') {\n    return 'int32array';\n  }\n  if (type === '[object Uint32Array]') {\n    return 'uint32array';\n  }\n  if (type === '[object Float32Array]') {\n    return 'float32array';\n  }\n  if (type === '[object Float64Array]') {\n    return 'float64array';\n  }\n\n  // must be a plain object\n  return 'object';\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-number/node_modules/kind-of/index.js?");

/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * is-plain-object <https://github.com/jonschlinkert/is-plain-object>\n *\n * Copyright (c) 2014-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar isObject = __webpack_require__(/*! isobject */ \"./node_modules/isobject/index.js\");\n\nfunction isObjectObject(o) {\n  return isObject(o) === true\n    && Object.prototype.toString.call(o) === '[object Object]';\n}\n\nmodule.exports = function isPlainObject(o) {\n  var ctor,prot;\n\n  if (isObjectObject(o) === false) return false;\n\n  // If has modified constructor\n  ctor = o.constructor;\n  if (typeof ctor !== 'function') return false;\n\n  // If has modified prototype\n  prot = ctor.prototype;\n  if (isObjectObject(prot) === false) return false;\n\n  // If constructor does not have an Object-specific method\n  if (prot.hasOwnProperty('isPrototypeOf') === false) {\n    return false;\n  }\n\n  // Most likely a plain Object\n  return true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-plain-object/index.js?");

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = Array.isArray || function (arr) {\n  return toString.call(arr) == '[object Array]';\n};\n\n\n//# sourceURL=webpack:///./node_modules/isarray/index.js?");

/***/ }),

/***/ "./node_modules/isobject/index.js":
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * isobject <https://github.com/jonschlinkert/isobject>\n *\n * Copyright (c) 2014-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nmodule.exports = function isObject(val) {\n  return val != null && typeof val === 'object' && Array.isArray(val) === false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/isobject/index.js?");

/***/ }),

/***/ "./node_modules/kind-of/index.js":
/*!***************************************!*\
  !*** ./node_modules/kind-of/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = Object.prototype.toString;\n\nmodule.exports = function kindOf(val) {\n  if (val === void 0) return 'undefined';\n  if (val === null) return 'null';\n\n  var type = typeof val;\n  if (type === 'boolean') return 'boolean';\n  if (type === 'string') return 'string';\n  if (type === 'number') return 'number';\n  if (type === 'symbol') return 'symbol';\n  if (type === 'function') {\n    return isGeneratorFn(val) ? 'generatorfunction' : 'function';\n  }\n\n  if (isArray(val)) return 'array';\n  if (isBuffer(val)) return 'buffer';\n  if (isArguments(val)) return 'arguments';\n  if (isDate(val)) return 'date';\n  if (isError(val)) return 'error';\n  if (isRegexp(val)) return 'regexp';\n\n  switch (ctorName(val)) {\n    case 'Symbol': return 'symbol';\n    case 'Promise': return 'promise';\n\n    // Set, Map, WeakSet, WeakMap\n    case 'WeakMap': return 'weakmap';\n    case 'WeakSet': return 'weakset';\n    case 'Map': return 'map';\n    case 'Set': return 'set';\n\n    // 8-bit typed arrays\n    case 'Int8Array': return 'int8array';\n    case 'Uint8Array': return 'uint8array';\n    case 'Uint8ClampedArray': return 'uint8clampedarray';\n\n    // 16-bit typed arrays\n    case 'Int16Array': return 'int16array';\n    case 'Uint16Array': return 'uint16array';\n\n    // 32-bit typed arrays\n    case 'Int32Array': return 'int32array';\n    case 'Uint32Array': return 'uint32array';\n    case 'Float32Array': return 'float32array';\n    case 'Float64Array': return 'float64array';\n  }\n\n  if (isGeneratorObj(val)) {\n    return 'generator';\n  }\n\n  // Non-plain objects\n  type = toString.call(val);\n  switch (type) {\n    case '[object Object]': return 'object';\n    // iterators\n    case '[object Map Iterator]': return 'mapiterator';\n    case '[object Set Iterator]': return 'setiterator';\n    case '[object String Iterator]': return 'stringiterator';\n    case '[object Array Iterator]': return 'arrayiterator';\n  }\n\n  // other\n  return type.slice(8, -1).toLowerCase().replace(/\\s/g, '');\n};\n\nfunction ctorName(val) {\n  return val.constructor ? val.constructor.name : null;\n}\n\nfunction isArray(val) {\n  if (Array.isArray) return Array.isArray(val);\n  return val instanceof Array;\n}\n\nfunction isError(val) {\n  return val instanceof Error || (typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number');\n}\n\nfunction isDate(val) {\n  if (val instanceof Date) return true;\n  return typeof val.toDateString === 'function'\n    && typeof val.getDate === 'function'\n    && typeof val.setDate === 'function';\n}\n\nfunction isRegexp(val) {\n  if (val instanceof RegExp) return true;\n  return typeof val.flags === 'string'\n    && typeof val.ignoreCase === 'boolean'\n    && typeof val.multiline === 'boolean'\n    && typeof val.global === 'boolean';\n}\n\nfunction isGeneratorFn(name, val) {\n  return ctorName(name) === 'GeneratorFunction';\n}\n\nfunction isGeneratorObj(val) {\n  return typeof val.throw === 'function'\n    && typeof val.return === 'function'\n    && typeof val.next === 'function';\n}\n\nfunction isArguments(val) {\n  try {\n    if (typeof val.length === 'number' && typeof val.callee === 'function') {\n      return true;\n    }\n  } catch (err) {\n    if (err.message.indexOf('callee') !== -1) {\n      return true;\n    }\n  }\n  return false;\n}\n\n/**\n * If you need to support Safari 5-7 (8-10 yr-old browser),\n * take a look at https://github.com/feross/is-buffer\n */\n\nfunction isBuffer(val) {\n  if (val.constructor && typeof val.constructor.isBuffer === 'function') {\n    return val.constructor.isBuffer(val);\n  }\n  return false;\n}\n\n\n//# sourceURL=webpack:///./node_modules/kind-of/index.js?");

/***/ }),

/***/ "./node_modules/map-visit/index.js":
/*!*****************************************!*\
  !*** ./node_modules/map-visit/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar util = __webpack_require__(/*! util */ \"./node_modules/util/util.js\");\nvar visit = __webpack_require__(/*! object-visit */ \"./node_modules/object-visit/index.js\");\n\n/**\n * Map `visit` over an array of objects.\n *\n * @param  {Object} `collection` The context in which to invoke `method`\n * @param  {String} `method` Name of the method to call on `collection`\n * @param  {Object} `arr` Array of objects.\n */\n\nmodule.exports = function mapVisit(collection, method, val) {\n  if (isObject(val)) {\n    return visit.apply(null, arguments);\n  }\n\n  if (!Array.isArray(val)) {\n    throw new TypeError('expected an array: ' + util.inspect(val));\n  }\n\n  var args = [].slice.call(arguments, 3);\n\n  for (var i = 0; i < val.length; i++) {\n    var ele = val[i];\n    if (isObject(ele)) {\n      visit.apply(null, [collection, method, ele].concat(args));\n    } else {\n      collection[method].apply(collection, [ele].concat(args));\n    }\n  }\n};\n\nfunction isObject(val) {\n  return val && (typeof val === 'function' || (!Array.isArray(val) && typeof val === 'object'));\n}\n\n\n//# sourceURL=webpack:///./node_modules/map-visit/index.js?");

/***/ }),

/***/ "./node_modules/mixin-deep/index.js":
/*!******************************************!*\
  !*** ./node_modules/mixin-deep/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isExtendable = __webpack_require__(/*! is-extendable */ \"./node_modules/mixin-deep/node_modules/is-extendable/index.js\");\nvar forIn = __webpack_require__(/*! for-in */ \"./node_modules/for-in/index.js\");\n\nfunction mixinDeep(target, objects) {\n  var len = arguments.length, i = 0;\n  while (++i < len) {\n    var obj = arguments[i];\n    if (isObject(obj)) {\n      forIn(obj, copy, target);\n    }\n  }\n  return target;\n}\n\n/**\n * Copy properties from the source object to the\n * target object.\n *\n * @param  {*} `val`\n * @param  {String} `key`\n */\n\nfunction copy(val, key) {\n  if (key === '__proto__') {\n    return;\n  }\n\n  var obj = this[key];\n  if (isObject(val) && isObject(obj)) {\n    mixinDeep(obj, val);\n  } else {\n    this[key] = val;\n  }\n}\n\n/**\n * Returns true if `val` is an object or function.\n *\n * @param  {any} val\n * @return {Boolean}\n */\n\nfunction isObject(val) {\n  return isExtendable(val) && !Array.isArray(val);\n}\n\n/**\n * Expose `mixinDeep`\n */\n\nmodule.exports = mixinDeep;\n\n\n//# sourceURL=webpack:///./node_modules/mixin-deep/index.js?");

/***/ }),

/***/ "./node_modules/mixin-deep/node_modules/is-extendable/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mixin-deep/node_modules/is-extendable/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * is-extendable <https://github.com/jonschlinkert/is-extendable>\n *\n * Copyright (c) 2015-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar isPlainObject = __webpack_require__(/*! is-plain-object */ \"./node_modules/is-plain-object/index.js\");\n\nmodule.exports = function isExtendable(val) {\n  return isPlainObject(val) || typeof val === 'function' || Array.isArray(val);\n};\n\n\n//# sourceURL=webpack:///./node_modules/mixin-deep/node_modules/is-extendable/index.js?");

/***/ }),

/***/ "./node_modules/object-copy/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-copy/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar typeOf = __webpack_require__(/*! kind-of */ \"./node_modules/object-copy/node_modules/kind-of/index.js\");\nvar copyDescriptor = __webpack_require__(/*! copy-descriptor */ \"./node_modules/copy-descriptor/index.js\");\nvar define = __webpack_require__(/*! define-property */ \"./node_modules/object-copy/node_modules/define-property/index.js\");\n\n/**\n * Copy static properties, prototype properties, and descriptors from one object to another.\n *\n * ```js\n * function App() {}\n * var proto = App.prototype;\n * App.prototype.set = function() {};\n * App.prototype.get = function() {};\n *\n * var obj = {};\n * copy(obj, proto);\n * ```\n * @param {Object} `receiver`\n * @param {Object} `provider`\n * @param {String|Array} `omit` One or more properties to omit\n * @return {Object}\n * @api public\n */\n\nfunction copy(receiver, provider, omit) {\n  if (!isObject(receiver)) {\n    throw new TypeError('expected receiving object to be an object.');\n  }\n  if (!isObject(provider)) {\n    throw new TypeError('expected providing object to be an object.');\n  }\n\n  var props = nativeKeys(provider);\n  var keys = Object.keys(provider);\n  var len = props.length;\n  omit = arrayify(omit);\n\n  while (len--) {\n    var key = props[len];\n\n    if (has(keys, key)) {\n      define(receiver, key, provider[key]);\n    } else if (!(key in receiver) && !has(omit, key)) {\n      copyDescriptor(receiver, provider, key);\n    }\n  }\n};\n\n/**\n * Return true if the given value is an object or function\n */\n\nfunction isObject(val) {\n  return typeOf(val) === 'object' || typeof val === 'function';\n}\n\n/**\n * Returns true if an array has any of the given elements, or an\n * object has any of the give keys.\n *\n * ```js\n * has(['a', 'b', 'c'], 'c');\n * //=> true\n *\n * has(['a', 'b', 'c'], ['c', 'z']);\n * //=> true\n *\n * has({a: 'b', c: 'd'}, ['c', 'z']);\n * //=> true\n * ```\n * @param {Object} `obj`\n * @param {String|Array} `val`\n * @return {Boolean}\n */\n\nfunction has(obj, val) {\n  val = arrayify(val);\n  var len = val.length;\n\n  if (isObject(obj)) {\n    for (var key in obj) {\n      if (val.indexOf(key) > -1) {\n        return true;\n      }\n    }\n\n    var keys = nativeKeys(obj);\n    return has(keys, val);\n  }\n\n  if (Array.isArray(obj)) {\n    var arr = obj;\n    while (len--) {\n      if (arr.indexOf(val[len]) > -1) {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  throw new TypeError('expected an array or object.');\n}\n\n/**\n * Cast the given value to an array.\n *\n * ```js\n * arrayify('foo');\n * //=> ['foo']\n *\n * arrayify(['foo']);\n * //=> ['foo']\n * ```\n *\n * @param {String|Array} `val`\n * @return {Array}\n */\n\nfunction arrayify(val) {\n  return val ? (Array.isArray(val) ? val : [val]) : [];\n}\n\n/**\n * Returns true if a value has a `contructor`\n *\n * ```js\n * hasConstructor({});\n * //=> true\n *\n * hasConstructor(Object.create(null));\n * //=> false\n * ```\n * @param  {Object} `value`\n * @return {Boolean}\n */\n\nfunction hasConstructor(val) {\n  return isObject(val) && typeof val.constructor !== 'undefined';\n}\n\n/**\n * Get the native `ownPropertyNames` from the constructor of the\n * given `object`. An empty array is returned if the object does\n * not have a constructor.\n *\n * ```js\n * nativeKeys({a: 'b', b: 'c', c: 'd'})\n * //=> ['a', 'b', 'c']\n *\n * nativeKeys(function(){})\n * //=> ['length', 'caller']\n * ```\n *\n * @param  {Object} `obj` Object that has a `constructor`.\n * @return {Array} Array of keys.\n */\n\nfunction nativeKeys(val) {\n  if (!hasConstructor(val)) return [];\n  return Object.getOwnPropertyNames(val);\n}\n\n/**\n * Expose `copy`\n */\n\nmodule.exports = copy;\n\n/**\n * Expose `copy.has` for tests\n */\n\nmodule.exports.has = has;\n\n\n//# sourceURL=webpack:///./node_modules/object-copy/index.js?");

/***/ }),

/***/ "./node_modules/object-copy/node_modules/define-property/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/object-copy/node_modules/define-property/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * define-property <https://github.com/jonschlinkert/define-property>\n *\n * Copyright (c) 2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\n\n\nvar isDescriptor = __webpack_require__(/*! is-descriptor */ \"./node_modules/is-descriptor/index.js\");\n\nmodule.exports = function defineProperty(obj, prop, val) {\n  if (typeof obj !== 'object' && typeof obj !== 'function') {\n    throw new TypeError('expected an object or function.');\n  }\n\n  if (typeof prop !== 'string') {\n    throw new TypeError('expected `prop` to be a string.');\n  }\n\n  if (isDescriptor(val) && ('set' in val || 'get' in val)) {\n    return Object.defineProperty(obj, prop, val);\n  }\n\n  return Object.defineProperty(obj, prop, {\n    configurable: true,\n    enumerable: false,\n    writable: true,\n    value: val\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/object-copy/node_modules/define-property/index.js?");

/***/ }),

/***/ "./node_modules/object-copy/node_modules/kind-of/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/object-copy/node_modules/kind-of/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\");\nvar toString = Object.prototype.toString;\n\n/**\n * Get the native `typeof` a value.\n *\n * @param  {*} `val`\n * @return {*} Native javascript type\n */\n\nmodule.exports = function kindOf(val) {\n  // primitivies\n  if (typeof val === 'undefined') {\n    return 'undefined';\n  }\n  if (val === null) {\n    return 'null';\n  }\n  if (val === true || val === false || val instanceof Boolean) {\n    return 'boolean';\n  }\n  if (typeof val === 'string' || val instanceof String) {\n    return 'string';\n  }\n  if (typeof val === 'number' || val instanceof Number) {\n    return 'number';\n  }\n\n  // functions\n  if (typeof val === 'function' || val instanceof Function) {\n    return 'function';\n  }\n\n  // array\n  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {\n    return 'array';\n  }\n\n  // check for instances of RegExp and Date before calling `toString`\n  if (val instanceof RegExp) {\n    return 'regexp';\n  }\n  if (val instanceof Date) {\n    return 'date';\n  }\n\n  // other objects\n  var type = toString.call(val);\n\n  if (type === '[object RegExp]') {\n    return 'regexp';\n  }\n  if (type === '[object Date]') {\n    return 'date';\n  }\n  if (type === '[object Arguments]') {\n    return 'arguments';\n  }\n  if (type === '[object Error]') {\n    return 'error';\n  }\n\n  // buffer\n  if (isBuffer(val)) {\n    return 'buffer';\n  }\n\n  // es6: Map, WeakMap, Set, WeakSet\n  if (type === '[object Set]') {\n    return 'set';\n  }\n  if (type === '[object WeakSet]') {\n    return 'weakset';\n  }\n  if (type === '[object Map]') {\n    return 'map';\n  }\n  if (type === '[object WeakMap]') {\n    return 'weakmap';\n  }\n  if (type === '[object Symbol]') {\n    return 'symbol';\n  }\n\n  // typed arrays\n  if (type === '[object Int8Array]') {\n    return 'int8array';\n  }\n  if (type === '[object Uint8Array]') {\n    return 'uint8array';\n  }\n  if (type === '[object Uint8ClampedArray]') {\n    return 'uint8clampedarray';\n  }\n  if (type === '[object Int16Array]') {\n    return 'int16array';\n  }\n  if (type === '[object Uint16Array]') {\n    return 'uint16array';\n  }\n  if (type === '[object Int32Array]') {\n    return 'int32array';\n  }\n  if (type === '[object Uint32Array]') {\n    return 'uint32array';\n  }\n  if (type === '[object Float32Array]') {\n    return 'float32array';\n  }\n  if (type === '[object Float64Array]') {\n    return 'float64array';\n  }\n\n  // must be a plain object\n  return 'object';\n};\n\n\n//# sourceURL=webpack:///./node_modules/object-copy/node_modules/kind-of/index.js?");

/***/ }),

/***/ "./node_modules/object-visit/index.js":
/*!********************************************!*\
  !*** ./node_modules/object-visit/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * object-visit <https://github.com/jonschlinkert/object-visit>\n *\n * Copyright (c) 2015, 2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar isObject = __webpack_require__(/*! isobject */ \"./node_modules/isobject/index.js\");\n\nmodule.exports = function visit(thisArg, method, target, val) {\n  if (!isObject(thisArg) && typeof thisArg !== 'function') {\n    throw new Error('object-visit expects `thisArg` to be an object.');\n  }\n\n  if (typeof method !== 'string') {\n    throw new Error('object-visit expects `method` name to be a string');\n  }\n\n  if (typeof thisArg[method] !== 'function') {\n    return thisArg;\n  }\n\n  var args = [].slice.call(arguments, 3);\n  target = target || {};\n\n  for (var key in target) {\n    var arr = [key, target[key]].concat(args);\n    thisArg[method].apply(thisArg, arr);\n  }\n  return thisArg;\n};\n\n\n//# sourceURL=webpack:///./node_modules/object-visit/index.js?");

/***/ }),

/***/ "./node_modules/pascalcase/index.js":
/*!******************************************!*\
  !*** ./node_modules/pascalcase/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * pascalcase <https://github.com/jonschlinkert/pascalcase>\n *\n * Copyright (c) 2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\nfunction pascalcase(str) {\n  if (typeof str !== 'string') {\n    throw new TypeError('expected a string.');\n  }\n  str = str.replace(/([A-Z])/g, ' $1');\n  if (str.length === 1) { return str.toUpperCase(); }\n  str = str.replace(/^[\\W_]+|[\\W_]+$/g, '').toLowerCase();\n  str = str.charAt(0).toUpperCase() + str.slice(1);\n  return str.replace(/[\\W_]+(\\w|$)/g, function (_, ch) {\n    return ch.toUpperCase();\n  });\n}\n\nmodule.exports = pascalcase;\n\n\n//# sourceURL=webpack:///./node_modules/pascalcase/index.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/set-value/index.js":
/*!*****************************************!*\
  !*** ./node_modules/set-value/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * set-value <https://github.com/jonschlinkert/set-value>\n *\n * Copyright (c) 2014-2015, 2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar split = __webpack_require__(/*! split-string */ \"./node_modules/split-string/index.js\");\nvar extend = __webpack_require__(/*! extend-shallow */ \"./node_modules/set-value/node_modules/extend-shallow/index.js\");\nvar isPlainObject = __webpack_require__(/*! is-plain-object */ \"./node_modules/is-plain-object/index.js\");\nvar isObject = __webpack_require__(/*! is-extendable */ \"./node_modules/is-extendable/index.js\");\n\nmodule.exports = function(obj, prop, val) {\n  if (!isObject(obj)) {\n    return obj;\n  }\n\n  if (Array.isArray(prop)) {\n    prop = [].concat.apply([], prop).join('.');\n  }\n\n  if (typeof prop !== 'string') {\n    return obj;\n  }\n\n  var keys = split(prop, {sep: '.', brackets: true});\n  var len = keys.length;\n  var idx = -1;\n  var current = obj;\n\n  while (++idx < len) {\n    var key = keys[idx];\n    if (idx !== len - 1) {\n      if (!isObject(current[key])) {\n        current[key] = {};\n      }\n      current = current[key];\n      continue;\n    }\n\n    if (isPlainObject(current[key]) && isPlainObject(val)) {\n      current[key] = extend({}, current[key], val);\n    } else {\n      current[key] = val;\n    }\n  }\n\n  return obj;\n};\n\n\n//# sourceURL=webpack:///./node_modules/set-value/index.js?");

/***/ }),

/***/ "./node_modules/set-value/node_modules/extend-shallow/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/set-value/node_modules/extend-shallow/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! is-extendable */ \"./node_modules/is-extendable/index.js\");\n\nmodule.exports = function extend(o/*, objects*/) {\n  if (!isObject(o)) { o = {}; }\n\n  var len = arguments.length;\n  for (var i = 1; i < len; i++) {\n    var obj = arguments[i];\n\n    if (isObject(obj)) {\n      assign(o, obj);\n    }\n  }\n  return o;\n};\n\nfunction assign(a, b) {\n  for (var key in b) {\n    if (hasOwn(b, key)) {\n      a[key] = b[key];\n    }\n  }\n}\n\n/**\n * Returns true if the given `key` is an own property of `obj`.\n */\n\nfunction hasOwn(obj, key) {\n  return Object.prototype.hasOwnProperty.call(obj, key);\n}\n\n\n//# sourceURL=webpack:///./node_modules/set-value/node_modules/extend-shallow/index.js?");

/***/ }),

/***/ "./node_modules/split-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/split-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * split-string <https://github.com/jonschlinkert/split-string>\n *\n * Copyright (c) 2015-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar extend = __webpack_require__(/*! extend-shallow */ \"./node_modules/extend-shallow/index.js\");\n\nmodule.exports = function(str, options, fn) {\n  if (typeof str !== 'string') {\n    throw new TypeError('expected a string');\n  }\n\n  if (typeof options === 'function') {\n    fn = options;\n    options = null;\n  }\n\n  // allow separator to be defined as a string\n  if (typeof options === 'string') {\n    options = { sep: options };\n  }\n\n  var opts = extend({sep: '.'}, options);\n  var quotes = opts.quotes || ['\"', \"'\", '`'];\n  var brackets;\n\n  if (opts.brackets === true) {\n    brackets = {\n      '<': '>',\n      '(': ')',\n      '[': ']',\n      '{': '}'\n    };\n  } else if (opts.brackets) {\n    brackets = opts.brackets;\n  }\n\n  var tokens = [];\n  var stack = [];\n  var arr = [''];\n  var sep = opts.sep;\n  var len = str.length;\n  var idx = -1;\n  var closeIdx;\n\n  function expected() {\n    if (brackets && stack.length) {\n      return brackets[stack[stack.length - 1]];\n    }\n  }\n\n  while (++idx < len) {\n    var ch = str[idx];\n    var next = str[idx + 1];\n    var tok = { val: ch, idx: idx, arr: arr, str: str };\n    tokens.push(tok);\n\n    if (ch === '\\\\') {\n      tok.val = keepEscaping(opts, str, idx) === true ? (ch + next) : next;\n      tok.escaped = true;\n      if (typeof fn === 'function') {\n        fn(tok);\n      }\n      arr[arr.length - 1] += tok.val;\n      idx++;\n      continue;\n    }\n\n    if (brackets && brackets[ch]) {\n      stack.push(ch);\n      var e = expected();\n      var i = idx + 1;\n\n      if (str.indexOf(e, i + 1) !== -1) {\n        while (stack.length && i < len) {\n          var s = str[++i];\n          if (s === '\\\\') {\n            s++;\n            continue;\n          }\n\n          if (quotes.indexOf(s) !== -1) {\n            i = getClosingQuote(str, s, i + 1);\n            continue;\n          }\n\n          e = expected();\n          if (stack.length && str.indexOf(e, i + 1) === -1) {\n            break;\n          }\n\n          if (brackets[s]) {\n            stack.push(s);\n            continue;\n          }\n\n          if (e === s) {\n            stack.pop();\n          }\n        }\n      }\n\n      closeIdx = i;\n      if (closeIdx === -1) {\n        arr[arr.length - 1] += ch;\n        continue;\n      }\n\n      ch = str.slice(idx, closeIdx + 1);\n      tok.val = ch;\n      tok.idx = idx = closeIdx;\n    }\n\n    if (quotes.indexOf(ch) !== -1) {\n      closeIdx = getClosingQuote(str, ch, idx + 1);\n      if (closeIdx === -1) {\n        arr[arr.length - 1] += ch;\n        continue;\n      }\n\n      if (keepQuotes(ch, opts) === true) {\n        ch = str.slice(idx, closeIdx + 1);\n      } else {\n        ch = str.slice(idx + 1, closeIdx);\n      }\n\n      tok.val = ch;\n      tok.idx = idx = closeIdx;\n    }\n\n    if (typeof fn === 'function') {\n      fn(tok, tokens);\n      ch = tok.val;\n      idx = tok.idx;\n    }\n\n    if (tok.val === sep && tok.split !== false) {\n      arr.push('');\n      continue;\n    }\n\n    arr[arr.length - 1] += tok.val;\n  }\n\n  return arr;\n};\n\nfunction getClosingQuote(str, ch, i, brackets) {\n  var idx = str.indexOf(ch, i);\n  if (str.charAt(idx - 1) === '\\\\') {\n    return getClosingQuote(str, ch, idx + 1);\n  }\n  return idx;\n}\n\nfunction keepQuotes(ch, opts) {\n  if (opts.keepDoubleQuotes === true && ch === '\"') return true;\n  if (opts.keepSingleQuotes === true && ch === \"'\") return true;\n  return opts.keepQuotes;\n}\n\nfunction keepEscaping(opts, str, idx) {\n  if (typeof opts.keepEscaping === 'function') {\n    return opts.keepEscaping(str, idx);\n  }\n  return opts.keepEscaping === true || str[idx + 1] === '\\\\';\n}\n\n\n//# sourceURL=webpack:///./node_modules/split-string/index.js?");

/***/ }),

/***/ "./node_modules/static-extend/index.js":
/*!*********************************************!*\
  !*** ./node_modules/static-extend/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * static-extend <https://github.com/jonschlinkert/static-extend>\n *\n * Copyright (c) 2016, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\n\n\nvar copy = __webpack_require__(/*! object-copy */ \"./node_modules/object-copy/index.js\");\nvar define = __webpack_require__(/*! define-property */ \"./node_modules/static-extend/node_modules/define-property/index.js\");\nvar util = __webpack_require__(/*! util */ \"./node_modules/util/util.js\");\n\n/**\n * Returns a function for extending the static properties,\n * prototype properties, and descriptors from the `Parent`\n * constructor onto `Child` constructors.\n *\n * ```js\n * var extend = require('static-extend');\n * Parent.extend = extend(Parent);\n *\n * // optionally pass a custom merge function as the second arg\n * Parent.extend = extend(Parent, function(Child) {\n *   Child.prototype.mixin = function(key, val) {\n *     Child.prototype[key] = val;\n *   };\n * });\n *\n * // extend \"child\" constructors\n * Parent.extend(Child);\n *\n * // optionally define prototype methods as the second arg\n * Parent.extend(Child, {\n *   foo: function() {},\n *   bar: function() {}\n * });\n * ```\n * @param {Function} `Parent` Parent ctor\n * @param {Function} `extendFn` Optional extend function for handling any necessary custom merging. Useful when updating methods that require a specific prototype.\n *   @param {Function} `Child` Child ctor\n *   @param {Object} `proto` Optionally pass additional prototype properties to inherit.\n *   @return {Object}\n * @api public\n */\n\nfunction extend(Parent, extendFn) {\n  if (typeof Parent !== 'function') {\n    throw new TypeError('expected Parent to be a function.');\n  }\n\n  return function(Ctor, proto) {\n    if (typeof Ctor !== 'function') {\n      throw new TypeError('expected Ctor to be a function.');\n    }\n\n    util.inherits(Ctor, Parent);\n    copy(Ctor, Parent);\n\n    // proto can be null or a plain object\n    if (typeof proto === 'object') {\n      var obj = Object.create(proto);\n\n      for (var k in obj) {\n        Ctor.prototype[k] = obj[k];\n      }\n    }\n\n    // keep a reference to the parent prototype\n    define(Ctor.prototype, '_parent_', {\n      configurable: true,\n      set: function() {},\n      get: function() {\n        return Parent.prototype;\n      }\n    });\n\n    if (typeof extendFn === 'function') {\n      extendFn(Ctor, Parent);\n    }\n\n    Ctor.extend = extend(Ctor, extendFn);\n  };\n};\n\n/**\n * Expose `extend`\n */\n\nmodule.exports = extend;\n\n\n//# sourceURL=webpack:///./node_modules/static-extend/index.js?");

/***/ }),

/***/ "./node_modules/static-extend/node_modules/define-property/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/static-extend/node_modules/define-property/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * define-property <https://github.com/jonschlinkert/define-property>\n *\n * Copyright (c) 2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\n\n\nvar isDescriptor = __webpack_require__(/*! is-descriptor */ \"./node_modules/is-descriptor/index.js\");\n\nmodule.exports = function defineProperty(obj, prop, val) {\n  if (typeof obj !== 'object' && typeof obj !== 'function') {\n    throw new TypeError('expected an object or function.');\n  }\n\n  if (typeof prop !== 'string') {\n    throw new TypeError('expected `prop` to be a string.');\n  }\n\n  if (isDescriptor(val) && ('set' in val || 'get' in val)) {\n    return Object.defineProperty(obj, prop, val);\n  }\n\n  return Object.defineProperty(obj, prop, {\n    configurable: true,\n    enumerable: false,\n    writable: true,\n    value: val\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/static-extend/node_modules/define-property/index.js?");

/***/ }),

/***/ "./node_modules/to-object-path/index.js":
/*!**********************************************!*\
  !*** ./node_modules/to-object-path/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * to-object-path <https://github.com/jonschlinkert/to-object-path>\n *\n * Copyright (c) 2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\n\n\nvar typeOf = __webpack_require__(/*! kind-of */ \"./node_modules/to-object-path/node_modules/kind-of/index.js\");\n\nmodule.exports = function toPath(args) {\n  if (typeOf(args) !== 'arguments') {\n    args = arguments;\n  }\n  return filter(args).join('.');\n};\n\nfunction filter(arr) {\n  var len = arr.length;\n  var idx = -1;\n  var res = [];\n\n  while (++idx < len) {\n    var ele = arr[idx];\n    if (typeOf(ele) === 'arguments' || Array.isArray(ele)) {\n      res.push.apply(res, filter(ele));\n    } else if (typeof ele === 'string') {\n      res.push(ele);\n    }\n  }\n  return res;\n}\n\n\n//# sourceURL=webpack:///./node_modules/to-object-path/index.js?");

/***/ }),

/***/ "./node_modules/to-object-path/node_modules/kind-of/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/to-object-path/node_modules/kind-of/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\");\nvar toString = Object.prototype.toString;\n\n/**\n * Get the native `typeof` a value.\n *\n * @param  {*} `val`\n * @return {*} Native javascript type\n */\n\nmodule.exports = function kindOf(val) {\n  // primitivies\n  if (typeof val === 'undefined') {\n    return 'undefined';\n  }\n  if (val === null) {\n    return 'null';\n  }\n  if (val === true || val === false || val instanceof Boolean) {\n    return 'boolean';\n  }\n  if (typeof val === 'string' || val instanceof String) {\n    return 'string';\n  }\n  if (typeof val === 'number' || val instanceof Number) {\n    return 'number';\n  }\n\n  // functions\n  if (typeof val === 'function' || val instanceof Function) {\n    return 'function';\n  }\n\n  // array\n  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {\n    return 'array';\n  }\n\n  // check for instances of RegExp and Date before calling `toString`\n  if (val instanceof RegExp) {\n    return 'regexp';\n  }\n  if (val instanceof Date) {\n    return 'date';\n  }\n\n  // other objects\n  var type = toString.call(val);\n\n  if (type === '[object RegExp]') {\n    return 'regexp';\n  }\n  if (type === '[object Date]') {\n    return 'date';\n  }\n  if (type === '[object Arguments]') {\n    return 'arguments';\n  }\n  if (type === '[object Error]') {\n    return 'error';\n  }\n\n  // buffer\n  if (isBuffer(val)) {\n    return 'buffer';\n  }\n\n  // es6: Map, WeakMap, Set, WeakSet\n  if (type === '[object Set]') {\n    return 'set';\n  }\n  if (type === '[object WeakSet]') {\n    return 'weakset';\n  }\n  if (type === '[object Map]') {\n    return 'map';\n  }\n  if (type === '[object WeakMap]') {\n    return 'weakmap';\n  }\n  if (type === '[object Symbol]') {\n    return 'symbol';\n  }\n\n  // typed arrays\n  if (type === '[object Int8Array]') {\n    return 'int8array';\n  }\n  if (type === '[object Uint8Array]') {\n    return 'uint8array';\n  }\n  if (type === '[object Uint8ClampedArray]') {\n    return 'uint8clampedarray';\n  }\n  if (type === '[object Int16Array]') {\n    return 'int16array';\n  }\n  if (type === '[object Uint16Array]') {\n    return 'uint16array';\n  }\n  if (type === '[object Int32Array]') {\n    return 'int32array';\n  }\n  if (type === '[object Uint32Array]') {\n    return 'uint32array';\n  }\n  if (type === '[object Float32Array]') {\n    return 'float32array';\n  }\n  if (type === '[object Float64Array]') {\n    return 'float64array';\n  }\n\n  // must be a plain object\n  return 'object';\n};\n\n\n//# sourceURL=webpack:///./node_modules/to-object-path/node_modules/kind-of/index.js?");

/***/ }),

/***/ "./node_modules/union-value/index.js":
/*!*******************************************!*\
  !*** ./node_modules/union-value/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! is-extendable */ \"./node_modules/is-extendable/index.js\");\nvar union = __webpack_require__(/*! arr-union */ \"./node_modules/arr-union/index.js\");\nvar get = __webpack_require__(/*! get-value */ \"./node_modules/get-value/index.js\");\nvar set = __webpack_require__(/*! set-value */ \"./node_modules/union-value/node_modules/set-value/index.js\");\n\nmodule.exports = function unionValue(obj, prop, value) {\n  if (!isObject(obj)) {\n    throw new TypeError('union-value expects the first argument to be an object.');\n  }\n\n  if (typeof prop !== 'string') {\n    throw new TypeError('union-value expects `prop` to be a string.');\n  }\n\n  var arr = arrayify(get(obj, prop));\n  set(obj, prop, union(arr, arrayify(value)));\n  return obj;\n};\n\nfunction arrayify(val) {\n  if (val === null || typeof val === 'undefined') {\n    return [];\n  }\n  if (Array.isArray(val)) {\n    return val;\n  }\n  return [val];\n}\n\n\n//# sourceURL=webpack:///./node_modules/union-value/index.js?");

/***/ }),

/***/ "./node_modules/union-value/node_modules/extend-shallow/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/union-value/node_modules/extend-shallow/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! is-extendable */ \"./node_modules/is-extendable/index.js\");\n\nmodule.exports = function extend(o/*, objects*/) {\n  if (!isObject(o)) { o = {}; }\n\n  var len = arguments.length;\n  for (var i = 1; i < len; i++) {\n    var obj = arguments[i];\n\n    if (isObject(obj)) {\n      assign(o, obj);\n    }\n  }\n  return o;\n};\n\nfunction assign(a, b) {\n  for (var key in b) {\n    if (hasOwn(b, key)) {\n      a[key] = b[key];\n    }\n  }\n}\n\n/**\n * Returns true if the given `key` is an own property of `obj`.\n */\n\nfunction hasOwn(obj, key) {\n  return Object.prototype.hasOwnProperty.call(obj, key);\n}\n\n\n//# sourceURL=webpack:///./node_modules/union-value/node_modules/extend-shallow/index.js?");

/***/ }),

/***/ "./node_modules/union-value/node_modules/set-value/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/union-value/node_modules/set-value/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * set-value <https://github.com/jonschlinkert/set-value>\n *\n * Copyright (c) 2014-2015, 2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar toPath = __webpack_require__(/*! to-object-path */ \"./node_modules/to-object-path/index.js\");\nvar extend = __webpack_require__(/*! extend-shallow */ \"./node_modules/union-value/node_modules/extend-shallow/index.js\");\nvar isPlainObject = __webpack_require__(/*! is-plain-object */ \"./node_modules/is-plain-object/index.js\");\nvar isObject = __webpack_require__(/*! is-extendable */ \"./node_modules/is-extendable/index.js\");\n\nmodule.exports = function(obj, path, val) {\n  if (!isObject(obj)) {\n    return obj;\n  }\n\n  if (Array.isArray(path)) {\n    path = toPath(path);\n  }\n\n  if (typeof path !== 'string') {\n    return obj;\n  }\n\n  var segs = path.split('.');\n  var len = segs.length, i = -1;\n  var res = obj;\n  var last;\n\n  while (++i < len) {\n    var key = segs[i];\n\n    while (key[key.length - 1] === '\\\\') {\n      key = key.slice(0, -1) + '.' + segs[++i];\n    }\n\n    if (i === len - 1) {\n      last = key;\n      break;\n    }\n\n    if (!isObject(obj[key])) {\n      obj[key] = {};\n    }\n    obj = obj[key];\n  }\n\n  if (obj.hasOwnProperty(last) && isObject(obj[last])) {\n    if (isPlainObject(val)) {\n      extend(obj[last], val);\n    } else {\n      obj[last] = val;\n    }\n\n  } else {\n    obj[last] = val;\n  }\n  return res;\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/union-value/node_modules/set-value/index.js?");

/***/ }),

/***/ "./node_modules/unset-value/index.js":
/*!*******************************************!*\
  !*** ./node_modules/unset-value/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * unset-value <https://github.com/jonschlinkert/unset-value>\n *\n * Copyright (c) 2015, 2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar isObject = __webpack_require__(/*! isobject */ \"./node_modules/isobject/index.js\");\nvar has = __webpack_require__(/*! has-value */ \"./node_modules/unset-value/node_modules/has-value/index.js\");\n\nmodule.exports = function unset(obj, prop) {\n  if (!isObject(obj)) {\n    throw new TypeError('expected an object.');\n  }\n  if (obj.hasOwnProperty(prop)) {\n    delete obj[prop];\n    return true;\n  }\n\n  if (has(obj, prop)) {\n    var segs = prop.split('.');\n    var last = segs.pop();\n    while (segs.length && segs[segs.length - 1].slice(-1) === '\\\\') {\n      last = segs.pop().slice(0, -1) + '.' + last;\n    }\n    while (segs.length) obj = obj[prop = segs.shift()];\n    return (delete obj[last]);\n  }\n  return true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/unset-value/index.js?");

/***/ }),

/***/ "./node_modules/unset-value/node_modules/has-value/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/unset-value/node_modules/has-value/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * has-value <https://github.com/jonschlinkert/has-value>\n *\n * Copyright (c) 2014-2016, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\n\n\nvar isObject = __webpack_require__(/*! isobject */ \"./node_modules/unset-value/node_modules/has-value/node_modules/isobject/index.js\");\nvar hasValues = __webpack_require__(/*! has-values */ \"./node_modules/unset-value/node_modules/has-values/index.js\");\nvar get = __webpack_require__(/*! get-value */ \"./node_modules/get-value/index.js\");\n\nmodule.exports = function(obj, prop, noZero) {\n  if (isObject(obj)) {\n    return hasValues(get(obj, prop), noZero);\n  }\n  return hasValues(obj, prop);\n};\n\n\n//# sourceURL=webpack:///./node_modules/unset-value/node_modules/has-value/index.js?");

/***/ }),

/***/ "./node_modules/unset-value/node_modules/has-value/node_modules/isobject/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/unset-value/node_modules/has-value/node_modules/isobject/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * isobject <https://github.com/jonschlinkert/isobject>\n *\n * Copyright (c) 2014-2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\n\n\nvar isArray = __webpack_require__(/*! isarray */ \"./node_modules/isarray/index.js\");\n\nmodule.exports = function isObject(val) {\n  return val != null && typeof val === 'object' && isArray(val) === false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/unset-value/node_modules/has-value/node_modules/isobject/index.js?");

/***/ }),

/***/ "./node_modules/unset-value/node_modules/has-values/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/unset-value/node_modules/has-values/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * has-values <https://github.com/jonschlinkert/has-values>\n *\n * Copyright (c) 2014-2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\n\n\nmodule.exports = function hasValue(o, noZero) {\n  if (o === null || o === undefined) {\n    return false;\n  }\n\n  if (typeof o === 'boolean') {\n    return true;\n  }\n\n  if (typeof o === 'number') {\n    if (o === 0 && noZero === true) {\n      return false;\n    }\n    return true;\n  }\n\n  if (o.length !== undefined) {\n    return o.length !== 0;\n  }\n\n  for (var key in o) {\n    if (o.hasOwnProperty(key)) {\n      return true;\n    }\n  }\n  return false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/unset-value/node_modules/has-values/index.js?");

/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function isBuffer(arg) {\n  return arg && typeof arg === 'object'\n    && typeof arg.copy === 'function'\n    && typeof arg.fill === 'function'\n    && typeof arg.readUInt8 === 'function';\n}\n\n//# sourceURL=webpack:///./node_modules/util/support/isBufferBrowser.js?");

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nvar getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||\n  function getOwnPropertyDescriptors(obj) {\n    var keys = Object.keys(obj);\n    var descriptors = {};\n    for (var i = 0; i < keys.length; i++) {\n      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);\n    }\n    return descriptors;\n  };\n\nvar formatRegExp = /%[sdj%]/g;\nexports.format = function(f) {\n  if (!isString(f)) {\n    var objects = [];\n    for (var i = 0; i < arguments.length; i++) {\n      objects.push(inspect(arguments[i]));\n    }\n    return objects.join(' ');\n  }\n\n  var i = 1;\n  var args = arguments;\n  var len = args.length;\n  var str = String(f).replace(formatRegExp, function(x) {\n    if (x === '%%') return '%';\n    if (i >= len) return x;\n    switch (x) {\n      case '%s': return String(args[i++]);\n      case '%d': return Number(args[i++]);\n      case '%j':\n        try {\n          return JSON.stringify(args[i++]);\n        } catch (_) {\n          return '[Circular]';\n        }\n      default:\n        return x;\n    }\n  });\n  for (var x = args[i]; i < len; x = args[++i]) {\n    if (isNull(x) || !isObject(x)) {\n      str += ' ' + x;\n    } else {\n      str += ' ' + inspect(x);\n    }\n  }\n  return str;\n};\n\n\n// Mark that a method should not be used.\n// Returns a modified function which warns once by default.\n// If --no-deprecation is set, then it is a no-op.\nexports.deprecate = function(fn, msg) {\n  if (typeof process !== 'undefined' && process.noDeprecation === true) {\n    return fn;\n  }\n\n  // Allow for deprecating things in the process of starting up.\n  if (typeof process === 'undefined') {\n    return function() {\n      return exports.deprecate(fn, msg).apply(this, arguments);\n    };\n  }\n\n  var warned = false;\n  function deprecated() {\n    if (!warned) {\n      if (process.throwDeprecation) {\n        throw new Error(msg);\n      } else if (process.traceDeprecation) {\n        console.trace(msg);\n      } else {\n        console.error(msg);\n      }\n      warned = true;\n    }\n    return fn.apply(this, arguments);\n  }\n\n  return deprecated;\n};\n\n\nvar debugs = {};\nvar debugEnviron;\nexports.debuglog = function(set) {\n  if (isUndefined(debugEnviron))\n    debugEnviron = process.env.NODE_DEBUG || '';\n  set = set.toUpperCase();\n  if (!debugs[set]) {\n    if (new RegExp('\\\\b' + set + '\\\\b', 'i').test(debugEnviron)) {\n      var pid = process.pid;\n      debugs[set] = function() {\n        var msg = exports.format.apply(exports, arguments);\n        console.error('%s %d: %s', set, pid, msg);\n      };\n    } else {\n      debugs[set] = function() {};\n    }\n  }\n  return debugs[set];\n};\n\n\n/**\n * Echos the value of a value. Trys to print the value out\n * in the best way possible given the different types.\n *\n * @param {Object} obj The object to print out.\n * @param {Object} opts Optional options object that alters the output.\n */\n/* legacy: obj, showHidden, depth, colors*/\nfunction inspect(obj, opts) {\n  // default options\n  var ctx = {\n    seen: [],\n    stylize: stylizeNoColor\n  };\n  // legacy...\n  if (arguments.length >= 3) ctx.depth = arguments[2];\n  if (arguments.length >= 4) ctx.colors = arguments[3];\n  if (isBoolean(opts)) {\n    // legacy...\n    ctx.showHidden = opts;\n  } else if (opts) {\n    // got an \"options\" object\n    exports._extend(ctx, opts);\n  }\n  // set default options\n  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;\n  if (isUndefined(ctx.depth)) ctx.depth = 2;\n  if (isUndefined(ctx.colors)) ctx.colors = false;\n  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;\n  if (ctx.colors) ctx.stylize = stylizeWithColor;\n  return formatValue(ctx, obj, ctx.depth);\n}\nexports.inspect = inspect;\n\n\n// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics\ninspect.colors = {\n  'bold' : [1, 22],\n  'italic' : [3, 23],\n  'underline' : [4, 24],\n  'inverse' : [7, 27],\n  'white' : [37, 39],\n  'grey' : [90, 39],\n  'black' : [30, 39],\n  'blue' : [34, 39],\n  'cyan' : [36, 39],\n  'green' : [32, 39],\n  'magenta' : [35, 39],\n  'red' : [31, 39],\n  'yellow' : [33, 39]\n};\n\n// Don't use 'blue' not visible on cmd.exe\ninspect.styles = {\n  'special': 'cyan',\n  'number': 'yellow',\n  'boolean': 'yellow',\n  'undefined': 'grey',\n  'null': 'bold',\n  'string': 'green',\n  'date': 'magenta',\n  // \"name\": intentionally not styling\n  'regexp': 'red'\n};\n\n\nfunction stylizeWithColor(str, styleType) {\n  var style = inspect.styles[styleType];\n\n  if (style) {\n    return '\\u001b[' + inspect.colors[style][0] + 'm' + str +\n           '\\u001b[' + inspect.colors[style][1] + 'm';\n  } else {\n    return str;\n  }\n}\n\n\nfunction stylizeNoColor(str, styleType) {\n  return str;\n}\n\n\nfunction arrayToHash(array) {\n  var hash = {};\n\n  array.forEach(function(val, idx) {\n    hash[val] = true;\n  });\n\n  return hash;\n}\n\n\nfunction formatValue(ctx, value, recurseTimes) {\n  // Provide a hook for user-specified inspect functions.\n  // Check that value is an object with an inspect function on it\n  if (ctx.customInspect &&\n      value &&\n      isFunction(value.inspect) &&\n      // Filter out the util module, it's inspect function is special\n      value.inspect !== exports.inspect &&\n      // Also filter out any prototype objects using the circular check.\n      !(value.constructor && value.constructor.prototype === value)) {\n    var ret = value.inspect(recurseTimes, ctx);\n    if (!isString(ret)) {\n      ret = formatValue(ctx, ret, recurseTimes);\n    }\n    return ret;\n  }\n\n  // Primitive types cannot have properties\n  var primitive = formatPrimitive(ctx, value);\n  if (primitive) {\n    return primitive;\n  }\n\n  // Look up the keys of the object.\n  var keys = Object.keys(value);\n  var visibleKeys = arrayToHash(keys);\n\n  if (ctx.showHidden) {\n    keys = Object.getOwnPropertyNames(value);\n  }\n\n  // IE doesn't make error fields non-enumerable\n  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx\n  if (isError(value)\n      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {\n    return formatError(value);\n  }\n\n  // Some type of object without properties can be shortcutted.\n  if (keys.length === 0) {\n    if (isFunction(value)) {\n      var name = value.name ? ': ' + value.name : '';\n      return ctx.stylize('[Function' + name + ']', 'special');\n    }\n    if (isRegExp(value)) {\n      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');\n    }\n    if (isDate(value)) {\n      return ctx.stylize(Date.prototype.toString.call(value), 'date');\n    }\n    if (isError(value)) {\n      return formatError(value);\n    }\n  }\n\n  var base = '', array = false, braces = ['{', '}'];\n\n  // Make Array say that they are Array\n  if (isArray(value)) {\n    array = true;\n    braces = ['[', ']'];\n  }\n\n  // Make functions say that they are functions\n  if (isFunction(value)) {\n    var n = value.name ? ': ' + value.name : '';\n    base = ' [Function' + n + ']';\n  }\n\n  // Make RegExps say that they are RegExps\n  if (isRegExp(value)) {\n    base = ' ' + RegExp.prototype.toString.call(value);\n  }\n\n  // Make dates with properties first say the date\n  if (isDate(value)) {\n    base = ' ' + Date.prototype.toUTCString.call(value);\n  }\n\n  // Make error with message first say the error\n  if (isError(value)) {\n    base = ' ' + formatError(value);\n  }\n\n  if (keys.length === 0 && (!array || value.length == 0)) {\n    return braces[0] + base + braces[1];\n  }\n\n  if (recurseTimes < 0) {\n    if (isRegExp(value)) {\n      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');\n    } else {\n      return ctx.stylize('[Object]', 'special');\n    }\n  }\n\n  ctx.seen.push(value);\n\n  var output;\n  if (array) {\n    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);\n  } else {\n    output = keys.map(function(key) {\n      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);\n    });\n  }\n\n  ctx.seen.pop();\n\n  return reduceToSingleString(output, base, braces);\n}\n\n\nfunction formatPrimitive(ctx, value) {\n  if (isUndefined(value))\n    return ctx.stylize('undefined', 'undefined');\n  if (isString(value)) {\n    var simple = '\\'' + JSON.stringify(value).replace(/^\"|\"$/g, '')\n                                             .replace(/'/g, \"\\\\'\")\n                                             .replace(/\\\\\"/g, '\"') + '\\'';\n    return ctx.stylize(simple, 'string');\n  }\n  if (isNumber(value))\n    return ctx.stylize('' + value, 'number');\n  if (isBoolean(value))\n    return ctx.stylize('' + value, 'boolean');\n  // For some reason typeof null is \"object\", so special case here.\n  if (isNull(value))\n    return ctx.stylize('null', 'null');\n}\n\n\nfunction formatError(value) {\n  return '[' + Error.prototype.toString.call(value) + ']';\n}\n\n\nfunction formatArray(ctx, value, recurseTimes, visibleKeys, keys) {\n  var output = [];\n  for (var i = 0, l = value.length; i < l; ++i) {\n    if (hasOwnProperty(value, String(i))) {\n      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,\n          String(i), true));\n    } else {\n      output.push('');\n    }\n  }\n  keys.forEach(function(key) {\n    if (!key.match(/^\\d+$/)) {\n      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,\n          key, true));\n    }\n  });\n  return output;\n}\n\n\nfunction formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {\n  var name, str, desc;\n  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };\n  if (desc.get) {\n    if (desc.set) {\n      str = ctx.stylize('[Getter/Setter]', 'special');\n    } else {\n      str = ctx.stylize('[Getter]', 'special');\n    }\n  } else {\n    if (desc.set) {\n      str = ctx.stylize('[Setter]', 'special');\n    }\n  }\n  if (!hasOwnProperty(visibleKeys, key)) {\n    name = '[' + key + ']';\n  }\n  if (!str) {\n    if (ctx.seen.indexOf(desc.value) < 0) {\n      if (isNull(recurseTimes)) {\n        str = formatValue(ctx, desc.value, null);\n      } else {\n        str = formatValue(ctx, desc.value, recurseTimes - 1);\n      }\n      if (str.indexOf('\\n') > -1) {\n        if (array) {\n          str = str.split('\\n').map(function(line) {\n            return '  ' + line;\n          }).join('\\n').substr(2);\n        } else {\n          str = '\\n' + str.split('\\n').map(function(line) {\n            return '   ' + line;\n          }).join('\\n');\n        }\n      }\n    } else {\n      str = ctx.stylize('[Circular]', 'special');\n    }\n  }\n  if (isUndefined(name)) {\n    if (array && key.match(/^\\d+$/)) {\n      return str;\n    }\n    name = JSON.stringify('' + key);\n    if (name.match(/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)) {\n      name = name.substr(1, name.length - 2);\n      name = ctx.stylize(name, 'name');\n    } else {\n      name = name.replace(/'/g, \"\\\\'\")\n                 .replace(/\\\\\"/g, '\"')\n                 .replace(/(^\"|\"$)/g, \"'\");\n      name = ctx.stylize(name, 'string');\n    }\n  }\n\n  return name + ': ' + str;\n}\n\n\nfunction reduceToSingleString(output, base, braces) {\n  var numLinesEst = 0;\n  var length = output.reduce(function(prev, cur) {\n    numLinesEst++;\n    if (cur.indexOf('\\n') >= 0) numLinesEst++;\n    return prev + cur.replace(/\\u001b\\[\\d\\d?m/g, '').length + 1;\n  }, 0);\n\n  if (length > 60) {\n    return braces[0] +\n           (base === '' ? '' : base + '\\n ') +\n           ' ' +\n           output.join(',\\n  ') +\n           ' ' +\n           braces[1];\n  }\n\n  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];\n}\n\n\n// NOTE: These type checking functions intentionally don't use `instanceof`\n// because it is fragile and can be easily faked with `Object.create()`.\nfunction isArray(ar) {\n  return Array.isArray(ar);\n}\nexports.isArray = isArray;\n\nfunction isBoolean(arg) {\n  return typeof arg === 'boolean';\n}\nexports.isBoolean = isBoolean;\n\nfunction isNull(arg) {\n  return arg === null;\n}\nexports.isNull = isNull;\n\nfunction isNullOrUndefined(arg) {\n  return arg == null;\n}\nexports.isNullOrUndefined = isNullOrUndefined;\n\nfunction isNumber(arg) {\n  return typeof arg === 'number';\n}\nexports.isNumber = isNumber;\n\nfunction isString(arg) {\n  return typeof arg === 'string';\n}\nexports.isString = isString;\n\nfunction isSymbol(arg) {\n  return typeof arg === 'symbol';\n}\nexports.isSymbol = isSymbol;\n\nfunction isUndefined(arg) {\n  return arg === void 0;\n}\nexports.isUndefined = isUndefined;\n\nfunction isRegExp(re) {\n  return isObject(re) && objectToString(re) === '[object RegExp]';\n}\nexports.isRegExp = isRegExp;\n\nfunction isObject(arg) {\n  return typeof arg === 'object' && arg !== null;\n}\nexports.isObject = isObject;\n\nfunction isDate(d) {\n  return isObject(d) && objectToString(d) === '[object Date]';\n}\nexports.isDate = isDate;\n\nfunction isError(e) {\n  return isObject(e) &&\n      (objectToString(e) === '[object Error]' || e instanceof Error);\n}\nexports.isError = isError;\n\nfunction isFunction(arg) {\n  return typeof arg === 'function';\n}\nexports.isFunction = isFunction;\n\nfunction isPrimitive(arg) {\n  return arg === null ||\n         typeof arg === 'boolean' ||\n         typeof arg === 'number' ||\n         typeof arg === 'string' ||\n         typeof arg === 'symbol' ||  // ES6 symbol\n         typeof arg === 'undefined';\n}\nexports.isPrimitive = isPrimitive;\n\nexports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ \"./node_modules/util/support/isBufferBrowser.js\");\n\nfunction objectToString(o) {\n  return Object.prototype.toString.call(o);\n}\n\n\nfunction pad(n) {\n  return n < 10 ? '0' + n.toString(10) : n.toString(10);\n}\n\n\nvar months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',\n              'Oct', 'Nov', 'Dec'];\n\n// 26 Feb 16:19:34\nfunction timestamp() {\n  var d = new Date();\n  var time = [pad(d.getHours()),\n              pad(d.getMinutes()),\n              pad(d.getSeconds())].join(':');\n  return [d.getDate(), months[d.getMonth()], time].join(' ');\n}\n\n\n// log is just a thin wrapper to console.log that prepends a timestamp\nexports.log = function() {\n  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));\n};\n\n\n/**\n * Inherit the prototype methods from one constructor into another.\n *\n * The Function.prototype.inherits from lang.js rewritten as a standalone\n * function (not on Function.prototype). NOTE: If this file is to be loaded\n * during bootstrapping this function needs to be rewritten using some native\n * functions as prototype setup using normal JavaScript does not work as\n * expected during bootstrapping (see mirror.js in r114903).\n *\n * @param {function} ctor Constructor function which needs to inherit the\n *     prototype.\n * @param {function} superCtor Constructor function to inherit prototype from.\n */\nexports.inherits = __webpack_require__(/*! inherits */ \"./node_modules/inherits/inherits_browser.js\");\n\nexports._extend = function(origin, add) {\n  // Don't do anything if add isn't an object\n  if (!add || !isObject(add)) return origin;\n\n  var keys = Object.keys(add);\n  var i = keys.length;\n  while (i--) {\n    origin[keys[i]] = add[keys[i]];\n  }\n  return origin;\n};\n\nfunction hasOwnProperty(obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\nvar kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;\n\nexports.promisify = function promisify(original) {\n  if (typeof original !== 'function')\n    throw new TypeError('The \"original\" argument must be of type Function');\n\n  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {\n    var fn = original[kCustomPromisifiedSymbol];\n    if (typeof fn !== 'function') {\n      throw new TypeError('The \"util.promisify.custom\" argument must be of type Function');\n    }\n    Object.defineProperty(fn, kCustomPromisifiedSymbol, {\n      value: fn, enumerable: false, writable: false, configurable: true\n    });\n    return fn;\n  }\n\n  function fn() {\n    var promiseResolve, promiseReject;\n    var promise = new Promise(function (resolve, reject) {\n      promiseResolve = resolve;\n      promiseReject = reject;\n    });\n\n    var args = [];\n    for (var i = 0; i < arguments.length; i++) {\n      args.push(arguments[i]);\n    }\n    args.push(function (err, value) {\n      if (err) {\n        promiseReject(err);\n      } else {\n        promiseResolve(value);\n      }\n    });\n\n    try {\n      original.apply(this, args);\n    } catch (err) {\n      promiseReject(err);\n    }\n\n    return promise;\n  }\n\n  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));\n\n  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {\n    value: fn, enumerable: false, writable: false, configurable: true\n  });\n  return Object.defineProperties(\n    fn,\n    getOwnPropertyDescriptors(original)\n  );\n}\n\nexports.promisify.custom = kCustomPromisifiedSymbol\n\nfunction callbackifyOnRejected(reason, cb) {\n  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).\n  // Because `null` is a special error value in callbacks which means \"no error\n  // occurred\", we error-wrap so the callback consumer can distinguish between\n  // \"the promise rejected with null\" or \"the promise fulfilled with undefined\".\n  if (!reason) {\n    var newReason = new Error('Promise was rejected with a falsy value');\n    newReason.reason = reason;\n    reason = newReason;\n  }\n  return cb(reason);\n}\n\nfunction callbackify(original) {\n  if (typeof original !== 'function') {\n    throw new TypeError('The \"original\" argument must be of type Function');\n  }\n\n  // We DO NOT return the promise as it gives the user a false sense that\n  // the promise is actually somehow related to the callback's execution\n  // and that the callback throwing will reject the promise.\n  function callbackified() {\n    var args = [];\n    for (var i = 0; i < arguments.length; i++) {\n      args.push(arguments[i]);\n    }\n\n    var maybeCb = args.pop();\n    if (typeof maybeCb !== 'function') {\n      throw new TypeError('The last argument must be of type Function');\n    }\n    var self = this;\n    var cb = function() {\n      return maybeCb.apply(self, arguments);\n    };\n    // In true node style we process the callback on `nextTick` with all the\n    // implications (stack, `uncaughtException`, `async_hooks`)\n    original.apply(this, args)\n      .then(function(ret) { process.nextTick(cb, null, ret) },\n            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });\n  }\n\n  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));\n  Object.defineProperties(callbackified,\n                          getOwnPropertyDescriptors(original));\n  return callbackified;\n}\nexports.callbackify = callbackify;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/util/util.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/base */ \"./src/js/views/base.js\");\n/* harmony import */ var _views_navigationView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/navigationView */ \"./src/js/views/navigationView.js\");\n/* harmony import */ var _views_resultView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/resultView */ \"./src/js/views/resultView.js\");\n/* harmony import */ var _models_Person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/Person */ \"./src/js/models/Person.js\");\n/* harmony import */ var _models_Calculator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/Calculator */ \"./src/js/models/Calculator.js\");\n\n //Views\n\n\n //Models\n\n\n\nvar status = {};\n_views_base__WEBPACK_IMPORTED_MODULE_1__[\"elements\"].headerBtn.addEventListener('click', function () {\n  _views_navigationView__WEBPACK_IMPORTED_MODULE_2__[\"moveToSection\"]('header', 'first-step');\n});\nvar sex;\n_views_base__WEBPACK_IMPORTED_MODULE_1__[\"elements\"].buttonSex.forEach(function (btn) {\n  btn.addEventListener('click', function () {\n    sex = btn.value;\n    _views_navigationView__WEBPACK_IMPORTED_MODULE_2__[\"moveToSection\"]('first-step', 'second-step');\n  });\n});\n_views_base__WEBPACK_IMPORTED_MODULE_1__[\"elements\"].form.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var weight = _views_base__WEBPACK_IMPORTED_MODULE_1__[\"elements\"].weight.value;\n  var height = _views_base__WEBPACK_IMPORTED_MODULE_1__[\"elements\"].height.value;\n  var age = _views_base__WEBPACK_IMPORTED_MODULE_1__[\"elements\"].age.value;\n  var activity = _views_base__WEBPACK_IMPORTED_MODULE_1__[\"elements\"].activity.value;\n  var plan;\n  _views_base__WEBPACK_IMPORTED_MODULE_1__[\"elements\"].planRadio.forEach(function (el) {\n    if (el.checked) {\n      plan = el.value;\n    }\n  });\n  status.person = new _models_Person__WEBPACK_IMPORTED_MODULE_4__[\"default\"](weight, height, age, sex, plan, activity);\n  status.calculator = new _models_Calculator__WEBPACK_IMPORTED_MODULE_5__[\"default\"](status.person);\n  status.person.addBMR(status.calculator.calculateBMR());\n  status.person.addCPM(status.calculator.calculateCPM());\n  status.person.addTarget(status.calculator.calculatePlan());\n  status.person.addMicro(status.calculator.calculateMicro());\n  status.person.addBMI(status.calculator.calculateBMI());\n  status.person.changePlanName();\n  _views_navigationView__WEBPACK_IMPORTED_MODULE_2__[\"moveToSection\"]('second-step', 'result');\n  _views_resultView__WEBPACK_IMPORTED_MODULE_3__[\"createResult\"](status.person);\n});\n_views_base__WEBPACK_IMPORTED_MODULE_1__[\"elements\"].reset.addEventListener('click', function () {\n  window.location.reload(true);\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/Calculator.js":
/*!*************************************!*\
  !*** ./src/js/models/Calculator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Calculator; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Calculator =\n/*#__PURE__*/\nfunction () {\n  function Calculator(person) {\n    _classCallCheck(this, Calculator);\n\n    this.person = person;\n  }\n\n  _createClass(Calculator, [{\n    key: \"calculateBMR\",\n    value: function calculateBMR() {\n      if (this.person.sex === \"man\") {\n        this.bmr = Math.floor(66 + 13.7 * this.person.weight + 5 * this.person.height - 6.76 * this.person.age);\n      } else {\n        this.bmr = Math.floor(655 + 9.6 * this.person.weight + 1.8 * this.person.height - 4.7 * this.person.age);\n      }\n\n      return this.bmr;\n    }\n  }, {\n    key: \"calculateCPM\",\n    value: function calculateCPM() {\n      switch (this.person.activity) {\n        case 'none':\n          this.cpm = Math.floor(this.bmr * 1.2);\n          break;\n\n        case 'low':\n          this.cpm = Math.floor(this.bmr * 1.4);\n          break;\n\n        case 'medium':\n          this.cpm = Math.floor(this.bmr * 1.6);\n          break;\n\n        case 'high':\n          this.cpm = Math.floor(this.bmr * 1.7);\n          break;\n\n        case 'very-high':\n          this.cpm = Math.floor(this.bmr * 1.9);\n          break;\n      }\n\n      return this.cpm;\n    }\n  }, {\n    key: \"calculatePlan\",\n    value: function calculatePlan() {\n      switch (this.person.plan) {\n        case 'slim':\n          this.target = this.cpm - 300;\n          break;\n\n        case 'hold':\n          this.target = this.cpm;\n          break;\n\n        case 'gain':\n          this.target = this.cpm + 300;\n          break;\n      }\n\n      return this.target;\n    }\n  }, {\n    key: \"calculateMicro\",\n    value: function calculateMicro() {\n      this.protein = Math.floor(this.target * 0.15);\n      this.carbohydrates = Math.floor(this.target * 0.55);\n      this.fats = Math.floor(this.target * 0.30);\n      return {\n        protein: Math.floor(this.protein / 4),\n        carbohydrates: Math.floor(this.carbohydrates / 4),\n        fats: Math.floor(this.fats / 9)\n      };\n    }\n  }, {\n    key: \"calculateBMI\",\n    value: function calculateBMI() {\n      var bmi = Math.floor(this.person.weight / (this.person.height / 100 * this.person.height / 100));\n\n      if (bmi < 18.5) {\n        this.bmi = \"\".concat(bmi, \" (niedowaga)\");\n      } else if (bmi > 18.5 && bmi <= 24.9) {\n        this.bmi = \"\".concat(bmi, \" (waga prawid\\u0142owa)\");\n      } else if (bmi > 25 && bmi <= 29.9) {\n        this.bmi = \"\".concat(bmi, \" (nadwaga)\");\n      } else {\n        this.bmi = \"\".concat(bmi, \" (oty\\u0142o\\u015B\\u0107)\");\n      }\n\n      return this.bmi;\n    }\n  }]);\n\n  return Calculator;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/models/Calculator.js?");

/***/ }),

/***/ "./src/js/models/Person.js":
/*!*********************************!*\
  !*** ./src/js/models/Person.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Person; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Person =\n/*#__PURE__*/\nfunction () {\n  function Person(weight, height, age, sex, plan, activity) {\n    _classCallCheck(this, Person);\n\n    this.weight = weight;\n    this.height = height;\n    this.age = age;\n    this.sex = sex;\n    this.plan = plan;\n    this.activity = activity;\n  }\n\n  _createClass(Person, [{\n    key: \"addBMI\",\n    value: function addBMI(bmi) {\n      this.bmi = bmi;\n    }\n  }, {\n    key: \"addBMR\",\n    value: function addBMR(bmr) {\n      this.bmr = bmr;\n    }\n  }, {\n    key: \"addTarget\",\n    value: function addTarget(target) {\n      this.target = target;\n    }\n  }, {\n    key: \"addMicro\",\n    value: function addMicro(micro) {\n      this.micro = {\n        protein: micro.protein,\n        carbohydrates: micro.carbohydrates,\n        fats: micro.fats\n      };\n    }\n  }, {\n    key: \"addCPM\",\n    value: function addCPM(cpm) {\n      this.cpm = cpm;\n    }\n  }, {\n    key: \"changePlanName\",\n    value: function changePlanName() {\n      switch (this.plan) {\n        case 'slim':\n          this.plan = \"schudnąć\";\n          break;\n\n        case 'hold':\n          this.plan = \"utrzymać wagę\";\n          break;\n\n        case 'gain':\n          this.plan = \"przytyć\";\n          break;\n      }\n    }\n  }]);\n\n  return Person;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/models/Person.js?");

/***/ }),

/***/ "./src/js/views/base.js":
/*!******************************!*\
  !*** ./src/js/views/base.js ***!
  \******************************/
/*! exports provided: elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\nvar elements = {\n  headerBtn: document.querySelector('#start'),\n  buttonSex: document.querySelectorAll('.button-sex'),\n  weight: document.querySelector('#weight'),\n  height: document.querySelector('#height'),\n  age: document.querySelector('#age'),\n  planRadio: document.querySelectorAll('input[name=\"plan\"]'),\n  activity: document.querySelector('#activity'),\n  form: document.querySelector('#form'),\n  bmr: document.querySelector('#bmr'),\n  plan: document.querySelector('#plan'),\n  cpm: document.querySelector('#cpm'),\n  bmi: document.querySelector('#bmi'),\n  prot: document.querySelector('#prot'),\n  carbo: document.querySelector('#carbo'),\n  fat: document.querySelector('#fat'),\n  reset: document.querySelector('#reset')\n};\n\n//# sourceURL=webpack:///./src/js/views/base.js?");

/***/ }),

/***/ "./src/js/views/navigationView.js":
/*!****************************************!*\
  !*** ./src/js/views/navigationView.js ***!
  \****************************************/
/*! exports provided: moveToSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveToSection\", function() { return moveToSection; });\n/* harmony import */ var base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! base */ \"./node_modules/base/index.js\");\n/* harmony import */ var base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(base__WEBPACK_IMPORTED_MODULE_0__);\n\nvar moveToSection = function moveToSection(start, end) {\n  var startPoint = document.querySelector(\".section-\".concat(start));\n  var endPoint = document.querySelector(\".section-\".concat(end));\n  startPoint.classList.remove('show');\n  startPoint.classList.add('hidden');\n  endPoint.classList.remove('hidden');\n  endPoint.classList.add('show');\n};\n\n//# sourceURL=webpack:///./src/js/views/navigationView.js?");

/***/ }),

/***/ "./src/js/views/resultView.js":
/*!************************************!*\
  !*** ./src/js/views/resultView.js ***!
  \************************************/
/*! exports provided: createResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createResult\", function() { return createResult; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n\nvar createResult = function createResult(person) {\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].bmr.textContent = \"\".concat(person.bmr, \" kcal\");\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].plan.textContent = person.plan;\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].cpm.textContent = \"\".concat(person.cpm, \" kcal\");\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].bmi.textContent = person.bmi;\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].prot.textContent = \"\".concat(person.micro.protein, \"g\");\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].carbo.textContent = \"\".concat(person.micro.carbohydrates, \"g\");\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].fat.textContent = \"\".concat(person.micro.fats, \"g\");\n};\n\n//# sourceURL=webpack:///./src/js/views/resultView.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });