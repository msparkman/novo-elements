webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _browser = __webpack_require__(231);
	
	var _core = __webpack_require__(3);
	
	var _router = __webpack_require__(16);
	
	__webpack_require__(221);
	
	var _App = __webpack_require__(189);
	
	__webpack_require__(300);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	(0, _browser.bootstrap)(_App.DemoApp, [].concat(_toConsumableArray(_router.ROUTER_PROVIDERS), _toConsumableArray(_browser.ELEMENT_PROBE_PROVIDERS), [(0, _core.provide)(_router.LocationStrategy, { useClass: _router.HashLocationStrategy })])).catch(function (err) {
	    return console.error(err);
	}); // eslint-disable-line
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUVBLHFKQUdJLDZDQUEwQixFQUFFLHNDQUFGLEVBQTFCLENBSEosSUFJRyxLQUpILENBSVM7QUFBQSxXQUFPLFFBQVEsS0FBUixDQUFjLEdBQWQsQ0FBUDtBQUFBLENBSlQsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290c3RyYXAsIEVMRU1FTlRfUFJPQkVfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQgeyBwcm92aWRlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfUFJPVklERVJTLCBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbmltcG9ydCB7IERlbW9BcHAgfSBmcm9tICcuL3BhZ2VzL2FwcC9BcHAnO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5ib290c3RyYXAoRGVtb0FwcCwgW1xuICAgIC4uLlJPVVRFUl9QUk9WSURFUlMsXG4gICAgLi4uRUxFTUVOVF9QUk9CRV9QUk9WSURFUlMsXG4gICAgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7IHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneSB9KVxuXSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiJdfQ==

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	exports.DOM = null;
	function setRootDomAdapter(adapter) {
	    if (lang_1.isBlank(exports.DOM)) {
	        exports.DOM = adapter;
	    }
	}
	exports.setRootDomAdapter = setRootDomAdapter;
	/* tslint:disable:requireParameterType */
	/**
	 * Provides DOM operations in an environment-agnostic way.
	 */
	var DomAdapter = (function () {
	    function DomAdapter() {
	    }
	    Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
	        /**
	         * Maps attribute names to their corresponding property names for cases
	         * where attribute name doesn't match property name.
	         */
	        get: function () { return this._attrToPropMap; },
	        set: function (value) { this._attrToPropMap = value; },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    ;
	    return DomAdapter;
	}());
	exports.DomAdapter = DomAdapter;


/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var CAMEL_CASE_REGEXP = /([A-Z])/g;
	var DASH_CASE_REGEXP = /-([a-z])/g;
	var SINGLE_QUOTE_ESCAPE_STRING_RE = /'|\\|\n|\r|\$/g;
	var DOUBLE_QUOTE_ESCAPE_STRING_RE = /"|\\|\n|\r|\$/g;
	exports.MODULE_SUFFIX = lang_1.IS_DART ? '.dart' : '.js';
	exports.CONST_VAR = lang_1.IS_DART ? 'const' : 'var';
	function camelCaseToDashCase(input) {
	    return lang_1.StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, function (m) { return '-' + m[1].toLowerCase(); });
	}
	exports.camelCaseToDashCase = camelCaseToDashCase;
	function dashCaseToCamelCase(input) {
	    return lang_1.StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, function (m) { return m[1].toUpperCase(); });
	}
	exports.dashCaseToCamelCase = dashCaseToCamelCase;
	function escapeSingleQuoteString(input) {
	    if (lang_1.isBlank(input)) {
	        return null;
	    }
	    return "'" + escapeString(input, SINGLE_QUOTE_ESCAPE_STRING_RE) + "'";
	}
	exports.escapeSingleQuoteString = escapeSingleQuoteString;
	function escapeDoubleQuoteString(input) {
	    if (lang_1.isBlank(input)) {
	        return null;
	    }
	    return "\"" + escapeString(input, DOUBLE_QUOTE_ESCAPE_STRING_RE) + "\"";
	}
	exports.escapeDoubleQuoteString = escapeDoubleQuoteString;
	function escapeString(input, re) {
	    return lang_1.StringWrapper.replaceAllMapped(input, re, function (match) {
	        if (match[0] == '$') {
	            return lang_1.IS_DART ? '\\$' : '$';
	        }
	        else if (match[0] == '\n') {
	            return '\\n';
	        }
	        else if (match[0] == '\r') {
	            return '\\r';
	        }
	        else {
	            return "\\" + match[0];
	        }
	    });
	}
	function codeGenExportVariable(name) {
	    if (lang_1.IS_DART) {
	        return "const " + name + " = ";
	    }
	    else {
	        return "var " + name + " = exports['" + name + "'] = ";
	    }
	}
	exports.codeGenExportVariable = codeGenExportVariable;
	function codeGenConstConstructorCall(name) {
	    if (lang_1.IS_DART) {
	        return "const " + name;
	    }
	    else {
	        return "new " + name;
	    }
	}
	exports.codeGenConstConstructorCall = codeGenConstConstructorCall;
	function codeGenValueFn(params, value, fnName) {
	    if (fnName === void 0) { fnName = ''; }
	    if (lang_1.IS_DART) {
	        return codeGenFnHeader(params, fnName) + " => " + value;
	    }
	    else {
	        return codeGenFnHeader(params, fnName) + " { return " + value + "; }";
	    }
	}
	exports.codeGenValueFn = codeGenValueFn;
	function codeGenFnHeader(params, fnName) {
	    if (fnName === void 0) { fnName = ''; }
	    if (lang_1.IS_DART) {
	        return fnName + "(" + params.join(',') + ")";
	    }
	    else {
	        return "function " + fnName + "(" + params.join(',') + ")";
	    }
	}
	exports.codeGenFnHeader = codeGenFnHeader;
	function codeGenToString(expr) {
	    if (lang_1.IS_DART) {
	        return "'${" + expr + "}'";
	    }
	    else {
	        // JS automatically converts to string...
	        return expr;
	    }
	}
	exports.codeGenToString = codeGenToString;
	function splitAtColon(input, defaultValues) {
	    var parts = lang_1.StringWrapper.split(input.trim(), /\s*:\s*/g);
	    if (parts.length > 1) {
	        return parts;
	    }
	    else {
	        return defaultValues;
	    }
	}
	exports.splitAtColon = splitAtColon;
	var Statement = (function () {
	    function Statement(statement) {
	        this.statement = statement;
	    }
	    return Statement;
	}());
	exports.Statement = Statement;
	var Expression = (function () {
	    function Expression(expression, isArray) {
	        if (isArray === void 0) { isArray = false; }
	        this.expression = expression;
	        this.isArray = isArray;
	    }
	    return Expression;
	}());
	exports.Expression = Expression;
	function escapeValue(value) {
	    if (value instanceof Expression) {
	        return value.expression;
	    }
	    else if (lang_1.isString(value)) {
	        return escapeSingleQuoteString(value);
	    }
	    else if (lang_1.isBlank(value)) {
	        return 'null';
	    }
	    else {
	        return "" + value;
	    }
	}
	exports.escapeValue = escapeValue;
	function codeGenArray(data) {
	    return "[" + data.map(escapeValue).join(',') + "]";
	}
	exports.codeGenArray = codeGenArray;
	function codeGenFlatArray(values) {
	    var result = '([';
	    var isFirstArrayEntry = true;
	    var concatFn = lang_1.IS_DART ? '.addAll' : 'concat';
	    for (var i = 0; i < values.length; i++) {
	        var value = values[i];
	        if (value instanceof Expression && value.isArray) {
	            result += "])." + concatFn + "(" + value.expression + ")." + concatFn + "([";
	            isFirstArrayEntry = true;
	        }
	        else {
	            if (!isFirstArrayEntry) {
	                result += ',';
	            }
	            isFirstArrayEntry = false;
	            result += escapeValue(value);
	        }
	    }
	    result += '])';
	    return result;
	}
	exports.codeGenFlatArray = codeGenFlatArray;
	function codeGenStringMap(keyValueArray) {
	    return "{" + keyValueArray.map(codeGenKeyValue).join(',') + "}";
	}
	exports.codeGenStringMap = codeGenStringMap;
	function codeGenKeyValue(keyValue) {
	    return escapeValue(keyValue[0]) + ":" + escapeValue(keyValue[1]);
	}
	function addAll(source, target) {
	    for (var i = 0; i < source.length; i++) {
	        target.push(source[i]);
	    }
	}
	exports.addAll = addAll;
	function flattenArray(source, target) {
	    if (lang_1.isPresent(source)) {
	        for (var i = 0; i < source.length; i++) {
	            var item = source[i];
	            if (lang_1.isArray(item)) {
	                flattenArray(item, target);
	            }
	            else {
	                target.push(item);
	            }
	        }
	    }
	    return target;
	}
	exports.flattenArray = flattenArray;


/***/ },
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';/**
	 * @module
	 * @description
	 * Maps application URLs into application states, to support deep-linking and navigation.
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var router_1 = __webpack_require__(65);
	exports.Router = router_1.Router;
	var router_outlet_1 = __webpack_require__(180);
	exports.RouterOutlet = router_outlet_1.RouterOutlet;
	var router_link_1 = __webpack_require__(179);
	exports.RouterLink = router_link_1.RouterLink;
	var instruction_1 = __webpack_require__(19);
	exports.RouteParams = instruction_1.RouteParams;
	exports.RouteData = instruction_1.RouteData;
	var platform_location_1 = __webpack_require__(43);
	exports.PlatformLocation = platform_location_1.PlatformLocation;
	var route_registry_1 = __webpack_require__(109);
	exports.RouteRegistry = route_registry_1.RouteRegistry;
	exports.ROUTER_PRIMARY_COMPONENT = route_registry_1.ROUTER_PRIMARY_COMPONENT;
	var location_strategy_1 = __webpack_require__(42);
	exports.LocationStrategy = location_strategy_1.LocationStrategy;
	exports.APP_BASE_HREF = location_strategy_1.APP_BASE_HREF;
	var hash_location_strategy_1 = __webpack_require__(283);
	exports.HashLocationStrategy = hash_location_strategy_1.HashLocationStrategy;
	var path_location_strategy_1 = __webpack_require__(183);
	exports.PathLocationStrategy = path_location_strategy_1.PathLocationStrategy;
	var location_1 = __webpack_require__(63);
	exports.Location = location_1.Location;
	__export(__webpack_require__(184));
	var lifecycle_annotations_1 = __webpack_require__(181);
	exports.CanActivate = lifecycle_annotations_1.CanActivate;
	var instruction_2 = __webpack_require__(19);
	exports.Instruction = instruction_2.Instruction;
	exports.ComponentInstruction = instruction_2.ComponentInstruction;
	var core_1 = __webpack_require__(3);
	exports.OpaqueToken = core_1.OpaqueToken;
	var router_providers_common_1 = __webpack_require__(185);
	exports.ROUTER_PROVIDERS_COMMON = router_providers_common_1.ROUTER_PROVIDERS_COMMON;
	var router_providers_1 = __webpack_require__(285);
	exports.ROUTER_PROVIDERS = router_providers_1.ROUTER_PROVIDERS;
	exports.ROUTER_BINDINGS = router_providers_1.ROUTER_BINDINGS;
	var router_outlet_2 = __webpack_require__(180);
	var router_link_2 = __webpack_require__(179);
	var lang_1 = __webpack_require__(1);
	/**
	 * A list of directives. To use the router directives like {@link RouterOutlet} and
	 * {@link RouterLink}, add this to your `directives` array in the {@link View} decorator of your
	 * component.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *    // ...
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	exports.ROUTER_DIRECTIVES = lang_1.CONST_EXPR([router_outlet_2.RouterOutlet, router_link_2.RouterLink]);


/***/ },
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(2);
	var lang_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(6);
	/**
	 * `RouteParams` is an immutable map of parameters for the given route
	 * based on the url matcher and optional parameters for that route.
	 *
	 * You can inject `RouteParams` into the constructor of a component to use it.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams} from
	 * 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {path: '/user/:id', component: UserCmp, name: 'UserCmp'},
	 * ])
	 * class AppCmp {}
	 *
	 * @Component({ template: 'user: {{id}}' })
	 * class UserCmp {
	 *   id: string;
	 *   constructor(params: RouteParams) {
	 *     this.id = params.get('id');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, ROUTER_PROVIDERS);
	 * ```
	 */
	var RouteParams = (function () {
	    function RouteParams(params) {
	        this.params = params;
	    }
	    RouteParams.prototype.get = function (param) { return lang_1.normalizeBlank(collection_1.StringMapWrapper.get(this.params, param)); };
	    return RouteParams;
	}());
	exports.RouteParams = RouteParams;
	/**
	 * `RouteData` is an immutable map of additional data you can configure in your {@link Route}.
	 *
	 * You can inject `RouteData` into the constructor of a component to use it.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteData} from
	 * 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {path: '/user/:id', component: UserCmp, name: 'UserCmp', data: {isAdmin: true}},
	 * ])
	 * class AppCmp {}
	 *
	 * @Component({
	 *   ...,
	 *   template: 'user: {{isAdmin}}'
	 * })
	 * class UserCmp {
	 *   string: isAdmin;
	 *   constructor(data: RouteData) {
	 *     this.isAdmin = data.get('isAdmin');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, ROUTER_PROVIDERS);
	 * ```
	 */
	var RouteData = (function () {
	    function RouteData(data) {
	        if (data === void 0) { data = lang_1.CONST_EXPR({}); }
	        this.data = data;
	    }
	    RouteData.prototype.get = function (key) { return lang_1.normalizeBlank(collection_1.StringMapWrapper.get(this.data, key)); };
	    return RouteData;
	}());
	exports.RouteData = RouteData;
	exports.BLANK_ROUTE_DATA = new RouteData();
	/**
	 * `Instruction` is a tree of {@link ComponentInstruction}s with all the information needed
	 * to transition each component in the app to a given route, including all auxiliary routes.
	 *
	 * `Instruction`s can be created using {@link Router#generate}, and can be used to
	 * perform route changes with {@link Router#navigateByInstruction}.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   constructor(router: Router) {
	 *     var instruction = router.generate(['/MyRoute']);
	 *     router.navigateByInstruction(instruction);
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, ROUTER_PROVIDERS);
	 * ```
	 */
	var Instruction = (function () {
	    function Instruction(component, child, auxInstruction) {
	        this.component = component;
	        this.child = child;
	        this.auxInstruction = auxInstruction;
	    }
	    Object.defineProperty(Instruction.prototype, "urlPath", {
	        get: function () { return lang_1.isPresent(this.component) ? this.component.urlPath : ''; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Instruction.prototype, "urlParams", {
	        get: function () { return lang_1.isPresent(this.component) ? this.component.urlParams : []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Instruction.prototype, "specificity", {
	        get: function () {
	            var total = '';
	            if (lang_1.isPresent(this.component)) {
	                total += this.component.specificity;
	            }
	            if (lang_1.isPresent(this.child)) {
	                total += this.child.specificity;
	            }
	            return total;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * converts the instruction into a URL string
	     */
	    Instruction.prototype.toRootUrl = function () { return this.toUrlPath() + this.toUrlQuery(); };
	    /** @internal */
	    Instruction.prototype._toNonRootUrl = function () {
	        return this._stringifyPathMatrixAuxPrefixed() +
	            (lang_1.isPresent(this.child) ? this.child._toNonRootUrl() : '');
	    };
	    Instruction.prototype.toUrlQuery = function () { return this.urlParams.length > 0 ? ('?' + this.urlParams.join('&')) : ''; };
	    /**
	     * Returns a new instruction that shares the state of the existing instruction, but with
	     * the given child {@link Instruction} replacing the existing child.
	     */
	    Instruction.prototype.replaceChild = function (child) {
	        return new ResolvedInstruction(this.component, child, this.auxInstruction);
	    };
	    /**
	     * If the final URL for the instruction is ``
	     */
	    Instruction.prototype.toUrlPath = function () {
	        return this.urlPath + this._stringifyAux() +
	            (lang_1.isPresent(this.child) ? this.child._toNonRootUrl() : '');
	    };
	    // default instructions override these
	    Instruction.prototype.toLinkUrl = function () {
	        return this.urlPath + this._stringifyAux() +
	            (lang_1.isPresent(this.child) ? this.child._toLinkUrl() : '') + this.toUrlQuery();
	    };
	    // this is the non-root version (called recursively)
	    /** @internal */
	    Instruction.prototype._toLinkUrl = function () {
	        return this._stringifyPathMatrixAuxPrefixed() +
	            (lang_1.isPresent(this.child) ? this.child._toLinkUrl() : '');
	    };
	    /** @internal */
	    Instruction.prototype._stringifyPathMatrixAuxPrefixed = function () {
	        var primary = this._stringifyPathMatrixAux();
	        if (primary.length > 0) {
	            primary = '/' + primary;
	        }
	        return primary;
	    };
	    /** @internal */
	    Instruction.prototype._stringifyMatrixParams = function () {
	        return this.urlParams.length > 0 ? (';' + this.urlParams.join(';')) : '';
	    };
	    /** @internal */
	    Instruction.prototype._stringifyPathMatrixAux = function () {
	        if (lang_1.isBlank(this.component)) {
	            return '';
	        }
	        return this.urlPath + this._stringifyMatrixParams() + this._stringifyAux();
	    };
	    /** @internal */
	    Instruction.prototype._stringifyAux = function () {
	        var routes = [];
	        collection_1.StringMapWrapper.forEach(this.auxInstruction, function (auxInstruction, _) {
	            routes.push(auxInstruction._stringifyPathMatrixAux());
	        });
	        if (routes.length > 0) {
	            return '(' + routes.join('//') + ')';
	        }
	        return '';
	    };
	    return Instruction;
	}());
	exports.Instruction = Instruction;
	/**
	 * a resolved instruction has an outlet instruction for itself, but maybe not for...
	 */
	var ResolvedInstruction = (function (_super) {
	    __extends(ResolvedInstruction, _super);
	    function ResolvedInstruction(component, child, auxInstruction) {
	        _super.call(this, component, child, auxInstruction);
	    }
	    ResolvedInstruction.prototype.resolveComponent = function () {
	        return async_1.PromiseWrapper.resolve(this.component);
	    };
	    return ResolvedInstruction;
	}(Instruction));
	exports.ResolvedInstruction = ResolvedInstruction;
	/**
	 * Represents a resolved default route
	 */
	var DefaultInstruction = (function (_super) {
	    __extends(DefaultInstruction, _super);
	    function DefaultInstruction(component, child) {
	        _super.call(this, component, child, {});
	    }
	    DefaultInstruction.prototype.toLinkUrl = function () { return ''; };
	    /** @internal */
	    DefaultInstruction.prototype._toLinkUrl = function () { return ''; };
	    return DefaultInstruction;
	}(ResolvedInstruction));
	exports.DefaultInstruction = DefaultInstruction;
	/**
	 * Represents a component that may need to do some redirection or lazy loading at a later time.
	 */
	var UnresolvedInstruction = (function (_super) {
	    __extends(UnresolvedInstruction, _super);
	    function UnresolvedInstruction(_resolver, _urlPath, _urlParams) {
	        if (_urlPath === void 0) { _urlPath = ''; }
	        if (_urlParams === void 0) { _urlParams = lang_1.CONST_EXPR([]); }
	        _super.call(this, null, null, {});
	        this._resolver = _resolver;
	        this._urlPath = _urlPath;
	        this._urlParams = _urlParams;
	    }
	    Object.defineProperty(UnresolvedInstruction.prototype, "urlPath", {
	        get: function () {
	            if (lang_1.isPresent(this.component)) {
	                return this.component.urlPath;
	            }
	            if (lang_1.isPresent(this._urlPath)) {
	                return this._urlPath;
	            }
	            return '';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(UnresolvedInstruction.prototype, "urlParams", {
	        get: function () {
	            if (lang_1.isPresent(this.component)) {
	                return this.component.urlParams;
	            }
	            if (lang_1.isPresent(this._urlParams)) {
	                return this._urlParams;
	            }
	            return [];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    UnresolvedInstruction.prototype.resolveComponent = function () {
	        var _this = this;
	        if (lang_1.isPresent(this.component)) {
	            return async_1.PromiseWrapper.resolve(this.component);
	        }
	        return this._resolver().then(function (instruction) {
	            _this.child = lang_1.isPresent(instruction) ? instruction.child : null;
	            return _this.component = lang_1.isPresent(instruction) ? instruction.component : null;
	        });
	    };
	    return UnresolvedInstruction;
	}(Instruction));
	exports.UnresolvedInstruction = UnresolvedInstruction;
	var RedirectInstruction = (function (_super) {
	    __extends(RedirectInstruction, _super);
	    function RedirectInstruction(component, child, auxInstruction, _specificity) {
	        _super.call(this, component, child, auxInstruction);
	        this._specificity = _specificity;
	    }
	    Object.defineProperty(RedirectInstruction.prototype, "specificity", {
	        get: function () { return this._specificity; },
	        enumerable: true,
	        configurable: true
	    });
	    return RedirectInstruction;
	}(ResolvedInstruction));
	exports.RedirectInstruction = RedirectInstruction;
	/**
	 * A `ComponentInstruction` represents the route state for a single component.
	 *
	 * `ComponentInstructions` is a public API. Instances of `ComponentInstruction` are passed
	 * to route lifecycle hooks, like {@link CanActivate}.
	 *
	 * `ComponentInstruction`s are [hash consed](https://en.wikipedia.org/wiki/Hash_consing). You should
	 * never construct one yourself with "new." Instead, rely on {@link Router/RouteRecognizer} to
	 * construct `ComponentInstruction`s.
	 *
	 * You should not modify this object. It should be treated as immutable.
	 */
	var ComponentInstruction = (function () {
	    /**
	     * @internal
	     */
	    function ComponentInstruction(urlPath, urlParams, data, componentType, terminal, specificity, params, routeName) {
	        if (params === void 0) { params = null; }
	        this.urlPath = urlPath;
	        this.urlParams = urlParams;
	        this.componentType = componentType;
	        this.terminal = terminal;
	        this.specificity = specificity;
	        this.params = params;
	        this.routeName = routeName;
	        this.reuse = false;
	        this.routeData = lang_1.isPresent(data) ? data : exports.BLANK_ROUTE_DATA;
	    }
	    return ComponentInstruction;
	}());
	exports.ComponentInstruction = ComponentInstruction;


/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var MODULE_REGEXP = /#MODULE\[([^\]]*)\]/g;
	function moduleRef(moduleUrl) {
	    return "#MODULE[" + moduleUrl + "]";
	}
	exports.moduleRef = moduleRef;
	/**
	 * Represents generated source code with module references. Internal to the Angular compiler.
	 */
	var SourceModule = (function () {
	    function SourceModule(moduleUrl, sourceWithModuleRefs) {
	        this.moduleUrl = moduleUrl;
	        this.sourceWithModuleRefs = sourceWithModuleRefs;
	    }
	    SourceModule.getSourceWithoutImports = function (sourceWithModuleRefs) {
	        return lang_1.StringWrapper.replaceAllMapped(sourceWithModuleRefs, MODULE_REGEXP, function (match) { return ''; });
	    };
	    SourceModule.prototype.getSourceWithImports = function () {
	        var _this = this;
	        var moduleAliases = {};
	        var imports = [];
	        var newSource = lang_1.StringWrapper.replaceAllMapped(this.sourceWithModuleRefs, MODULE_REGEXP, function (match) {
	            var moduleUrl = match[1];
	            var alias = moduleAliases[moduleUrl];
	            if (lang_1.isBlank(alias)) {
	                if (moduleUrl == _this.moduleUrl) {
	                    alias = '';
	                }
	                else {
	                    alias = "import" + imports.length;
	                    imports.push([moduleUrl, alias]);
	                }
	                moduleAliases[moduleUrl] = alias;
	            }
	            return alias.length > 0 ? alias + "." : '';
	        });
	        return new SourceWithImports(newSource, imports);
	    };
	    return SourceModule;
	}());
	exports.SourceModule = SourceModule;
	var SourceExpression = (function () {
	    function SourceExpression(declarations, expression) {
	        this.declarations = declarations;
	        this.expression = expression;
	    }
	    return SourceExpression;
	}());
	exports.SourceExpression = SourceExpression;
	var SourceExpressions = (function () {
	    function SourceExpressions(declarations, expressions) {
	        this.declarations = declarations;
	        this.expressions = expressions;
	    }
	    return SourceExpressions;
	}());
	exports.SourceExpressions = SourceExpressions;
	/**
	 * Represents generated source code with imports. Internal to the Angular compiler.
	 */
	var SourceWithImports = (function () {
	    function SourceWithImports(source, imports) {
	        this.source = source;
	        this.imports = imports;
	    }
	    return SourceWithImports;
	}());
	exports.SourceWithImports = SourceWithImports;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	/**
	 * A segment of text within the template.
	 */
	var TextAst = (function () {
	    function TextAst(value, ngContentIndex, sourceSpan) {
	        this.value = value;
	        this.ngContentIndex = ngContentIndex;
	        this.sourceSpan = sourceSpan;
	    }
	    TextAst.prototype.visit = function (visitor, context) { return visitor.visitText(this, context); };
	    return TextAst;
	}());
	exports.TextAst = TextAst;
	/**
	 * A bound expression within the text of a template.
	 */
	var BoundTextAst = (function () {
	    function BoundTextAst(value, ngContentIndex, sourceSpan) {
	        this.value = value;
	        this.ngContentIndex = ngContentIndex;
	        this.sourceSpan = sourceSpan;
	    }
	    BoundTextAst.prototype.visit = function (visitor, context) {
	        return visitor.visitBoundText(this, context);
	    };
	    return BoundTextAst;
	}());
	exports.BoundTextAst = BoundTextAst;
	/**
	 * A plain attribute on an element.
	 */
	var AttrAst = (function () {
	    function AttrAst(name, value, sourceSpan) {
	        this.name = name;
	        this.value = value;
	        this.sourceSpan = sourceSpan;
	    }
	    AttrAst.prototype.visit = function (visitor, context) { return visitor.visitAttr(this, context); };
	    return AttrAst;
	}());
	exports.AttrAst = AttrAst;
	/**
	 * A binding for an element property (e.g. `[property]="expression"`).
	 */
	var BoundElementPropertyAst = (function () {
	    function BoundElementPropertyAst(name, type, value, unit, sourceSpan) {
	        this.name = name;
	        this.type = type;
	        this.value = value;
	        this.unit = unit;
	        this.sourceSpan = sourceSpan;
	    }
	    BoundElementPropertyAst.prototype.visit = function (visitor, context) {
	        return visitor.visitElementProperty(this, context);
	    };
	    return BoundElementPropertyAst;
	}());
	exports.BoundElementPropertyAst = BoundElementPropertyAst;
	/**
	 * A binding for an element event (e.g. `(event)="handler()"`).
	 */
	var BoundEventAst = (function () {
	    function BoundEventAst(name, target, handler, sourceSpan) {
	        this.name = name;
	        this.target = target;
	        this.handler = handler;
	        this.sourceSpan = sourceSpan;
	    }
	    BoundEventAst.prototype.visit = function (visitor, context) {
	        return visitor.visitEvent(this, context);
	    };
	    Object.defineProperty(BoundEventAst.prototype, "fullName", {
	        get: function () {
	            if (lang_1.isPresent(this.target)) {
	                return this.target + ":" + this.name;
	            }
	            else {
	                return this.name;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return BoundEventAst;
	}());
	exports.BoundEventAst = BoundEventAst;
	/**
	 * A variable declaration on an element (e.g. `#var="expression"`).
	 */
	var VariableAst = (function () {
	    function VariableAst(name, value, sourceSpan) {
	        this.name = name;
	        this.value = value;
	        this.sourceSpan = sourceSpan;
	    }
	    VariableAst.prototype.visit = function (visitor, context) {
	        return visitor.visitVariable(this, context);
	    };
	    return VariableAst;
	}());
	exports.VariableAst = VariableAst;
	/**
	 * An element declaration in a template.
	 */
	var ElementAst = (function () {
	    function ElementAst(name, attrs, inputs, outputs, exportAsVars, directives, children, ngContentIndex, sourceSpan) {
	        this.name = name;
	        this.attrs = attrs;
	        this.inputs = inputs;
	        this.outputs = outputs;
	        this.exportAsVars = exportAsVars;
	        this.directives = directives;
	        this.children = children;
	        this.ngContentIndex = ngContentIndex;
	        this.sourceSpan = sourceSpan;
	    }
	    ElementAst.prototype.visit = function (visitor, context) {
	        return visitor.visitElement(this, context);
	    };
	    /**
	     * Whether the element has any active bindings (inputs, outputs, vars, or directives).
	     */
	    ElementAst.prototype.isBound = function () {
	        return (this.inputs.length > 0 || this.outputs.length > 0 || this.exportAsVars.length > 0 ||
	            this.directives.length > 0);
	    };
	    /**
	     * Get the component associated with this element, if any.
	     */
	    ElementAst.prototype.getComponent = function () {
	        return this.directives.length > 0 && this.directives[0].directive.isComponent ?
	            this.directives[0].directive :
	            null;
	    };
	    return ElementAst;
	}());
	exports.ElementAst = ElementAst;
	/**
	 * A `<template>` element included in an Angular template.
	 */
	var EmbeddedTemplateAst = (function () {
	    function EmbeddedTemplateAst(attrs, outputs, vars, directives, children, ngContentIndex, sourceSpan) {
	        this.attrs = attrs;
	        this.outputs = outputs;
	        this.vars = vars;
	        this.directives = directives;
	        this.children = children;
	        this.ngContentIndex = ngContentIndex;
	        this.sourceSpan = sourceSpan;
	    }
	    EmbeddedTemplateAst.prototype.visit = function (visitor, context) {
	        return visitor.visitEmbeddedTemplate(this, context);
	    };
	    return EmbeddedTemplateAst;
	}());
	exports.EmbeddedTemplateAst = EmbeddedTemplateAst;
	/**
	 * A directive property with a bound value (e.g. `*ngIf="condition").
	 */
	var BoundDirectivePropertyAst = (function () {
	    function BoundDirectivePropertyAst(directiveName, templateName, value, sourceSpan) {
	        this.directiveName = directiveName;
	        this.templateName = templateName;
	        this.value = value;
	        this.sourceSpan = sourceSpan;
	    }
	    BoundDirectivePropertyAst.prototype.visit = function (visitor, context) {
	        return visitor.visitDirectiveProperty(this, context);
	    };
	    return BoundDirectivePropertyAst;
	}());
	exports.BoundDirectivePropertyAst = BoundDirectivePropertyAst;
	/**
	 * A directive declared on an element.
	 */
	var DirectiveAst = (function () {
	    function DirectiveAst(directive, inputs, hostProperties, hostEvents, exportAsVars, sourceSpan) {
	        this.directive = directive;
	        this.inputs = inputs;
	        this.hostProperties = hostProperties;
	        this.hostEvents = hostEvents;
	        this.exportAsVars = exportAsVars;
	        this.sourceSpan = sourceSpan;
	    }
	    DirectiveAst.prototype.visit = function (visitor, context) {
	        return visitor.visitDirective(this, context);
	    };
	    return DirectiveAst;
	}());
	exports.DirectiveAst = DirectiveAst;
	/**
	 * Position where content is to be projected (instance of `<ng-content>` in a template).
	 */
	var NgContentAst = (function () {
	    function NgContentAst(index, ngContentIndex, sourceSpan) {
	        this.index = index;
	        this.ngContentIndex = ngContentIndex;
	        this.sourceSpan = sourceSpan;
	    }
	    NgContentAst.prototype.visit = function (visitor, context) {
	        return visitor.visitNgContent(this, context);
	    };
	    return NgContentAst;
	}());
	exports.NgContentAst = NgContentAst;
	/**
	 * Enumeration of types of property bindings.
	 */
	(function (PropertyBindingType) {
	    /**
	     * A normal binding to a property (e.g. `[property]="expression"`).
	     */
	    PropertyBindingType[PropertyBindingType["Property"] = 0] = "Property";
	    /**
	     * A binding to an element attribute (e.g. `[attr.name]="expression"`).
	     */
	    PropertyBindingType[PropertyBindingType["Attribute"] = 1] = "Attribute";
	    /**
	     * A binding to a CSS class (e.g. `[class.name]="condition"`).
	     */
	    PropertyBindingType[PropertyBindingType["Class"] = 2] = "Class";
	    /**
	     * A binding to a style rule (e.g. `[style.rule]="expression"`).
	     */
	    PropertyBindingType[PropertyBindingType["Style"] = 3] = "Style";
	})(exports.PropertyBindingType || (exports.PropertyBindingType = {}));
	var PropertyBindingType = exports.PropertyBindingType;
	/**
	 * Visit every node in a list of {@link TemplateAst}s with the given {@link TemplateAstVisitor}.
	 */
	function templateVisitAll(visitor, asts, context) {
	    if (context === void 0) { context = null; }
	    var result = [];
	    asts.forEach(function (ast) {
	        var astResult = ast.visit(visitor, context);
	        if (lang_1.isPresent(astResult)) {
	            result.push(astResult);
	        }
	    });
	    return result;
	}
	exports.templateVisitAll = templateVisitAll;


/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';"use strict";
	// TODO: vsavkin rename it into TemplateLoader
	/**
	 * An interface for retrieving documents by URL that the compiler uses
	 * to load templates.
	 */
	var XHR = (function () {
	    function XHR() {
	    }
	    XHR.prototype.get = function (url) { return null; };
	    return XHR;
	}());
	exports.XHR = XHR;


/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var di_1 = __webpack_require__(5);
	var ng_zone_1 = __webpack_require__(61);
	var collection_1 = __webpack_require__(2);
	exports.EVENT_MANAGER_PLUGINS = lang_1.CONST_EXPR(new di_1.OpaqueToken("EventManagerPlugins"));
	var EventManager = (function () {
	    function EventManager(plugins, _zone) {
	        var _this = this;
	        this._zone = _zone;
	        plugins.forEach(function (p) { return p.manager = _this; });
	        this._plugins = collection_1.ListWrapper.reversed(plugins);
	    }
	    EventManager.prototype.addEventListener = function (element, eventName, handler) {
	        var plugin = this._findPluginFor(eventName);
	        return plugin.addEventListener(element, eventName, handler);
	    };
	    EventManager.prototype.addGlobalEventListener = function (target, eventName, handler) {
	        var plugin = this._findPluginFor(eventName);
	        return plugin.addGlobalEventListener(target, eventName, handler);
	    };
	    EventManager.prototype.getZone = function () { return this._zone; };
	    /** @internal */
	    EventManager.prototype._findPluginFor = function (eventName) {
	        var plugins = this._plugins;
	        for (var i = 0; i < plugins.length; i++) {
	            var plugin = plugins[i];
	            if (plugin.supports(eventName)) {
	                return plugin;
	            }
	        }
	        throw new exceptions_1.BaseException("No event manager plugin found for event " + eventName);
	    };
	    EventManager = __decorate([
	        di_1.Injectable(),
	        __param(0, di_1.Inject(exports.EVENT_MANAGER_PLUGINS)), 
	        __metadata('design:paramtypes', [Array, ng_zone_1.NgZone])
	    ], EventManager);
	    return EventManager;
	}());
	exports.EventManager = EventManager;
	var EventManagerPlugin = (function () {
	    function EventManagerPlugin() {
	    }
	    // That is equivalent to having supporting $event.target
	    EventManagerPlugin.prototype.supports = function (eventName) { return false; };
	    EventManagerPlugin.prototype.addEventListener = function (element, eventName, handler) {
	        throw "not implemented";
	    };
	    EventManagerPlugin.prototype.addGlobalEventListener = function (element, eventName, handler) {
	        throw "not implemented";
	    };
	    return EventManagerPlugin;
	}());
	exports.EventManagerPlugin = EventManagerPlugin;


/***/ },
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	// see http://www.w3.org/TR/html51/syntax.html#named-character-references
	// see https://html.spec.whatwg.org/multipage/entities.json
	// This list is not exhaustive to keep the compiler footprint low.
	// The `&#123;` / `&#x1ab;` syntax should be used when the named character reference does not exist.
	exports.NAMED_ENTITIES = lang_1.CONST_EXPR({
	    'Aacute': '\u00C1',
	    'aacute': '\u00E1',
	    'Acirc': '\u00C2',
	    'acirc': '\u00E2',
	    'acute': '\u00B4',
	    'AElig': '\u00C6',
	    'aelig': '\u00E6',
	    'Agrave': '\u00C0',
	    'agrave': '\u00E0',
	    'alefsym': '\u2135',
	    'Alpha': '\u0391',
	    'alpha': '\u03B1',
	    'amp': '&',
	    'and': '\u2227',
	    'ang': '\u2220',
	    'apos': '\u0027',
	    'Aring': '\u00C5',
	    'aring': '\u00E5',
	    'asymp': '\u2248',
	    'Atilde': '\u00C3',
	    'atilde': '\u00E3',
	    'Auml': '\u00C4',
	    'auml': '\u00E4',
	    'bdquo': '\u201E',
	    'Beta': '\u0392',
	    'beta': '\u03B2',
	    'brvbar': '\u00A6',
	    'bull': '\u2022',
	    'cap': '\u2229',
	    'Ccedil': '\u00C7',
	    'ccedil': '\u00E7',
	    'cedil': '\u00B8',
	    'cent': '\u00A2',
	    'Chi': '\u03A7',
	    'chi': '\u03C7',
	    'circ': '\u02C6',
	    'clubs': '\u2663',
	    'cong': '\u2245',
	    'copy': '\u00A9',
	    'crarr': '\u21B5',
	    'cup': '\u222A',
	    'curren': '\u00A4',
	    'dagger': '\u2020',
	    'Dagger': '\u2021',
	    'darr': '\u2193',
	    'dArr': '\u21D3',
	    'deg': '\u00B0',
	    'Delta': '\u0394',
	    'delta': '\u03B4',
	    'diams': '\u2666',
	    'divide': '\u00F7',
	    'Eacute': '\u00C9',
	    'eacute': '\u00E9',
	    'Ecirc': '\u00CA',
	    'ecirc': '\u00EA',
	    'Egrave': '\u00C8',
	    'egrave': '\u00E8',
	    'empty': '\u2205',
	    'emsp': '\u2003',
	    'ensp': '\u2002',
	    'Epsilon': '\u0395',
	    'epsilon': '\u03B5',
	    'equiv': '\u2261',
	    'Eta': '\u0397',
	    'eta': '\u03B7',
	    'ETH': '\u00D0',
	    'eth': '\u00F0',
	    'Euml': '\u00CB',
	    'euml': '\u00EB',
	    'euro': '\u20AC',
	    'exist': '\u2203',
	    'fnof': '\u0192',
	    'forall': '\u2200',
	    'frac12': '\u00BD',
	    'frac14': '\u00BC',
	    'frac34': '\u00BE',
	    'frasl': '\u2044',
	    'Gamma': '\u0393',
	    'gamma': '\u03B3',
	    'ge': '\u2265',
	    'gt': '>',
	    'harr': '\u2194',
	    'hArr': '\u21D4',
	    'hearts': '\u2665',
	    'hellip': '\u2026',
	    'Iacute': '\u00CD',
	    'iacute': '\u00ED',
	    'Icirc': '\u00CE',
	    'icirc': '\u00EE',
	    'iexcl': '\u00A1',
	    'Igrave': '\u00CC',
	    'igrave': '\u00EC',
	    'image': '\u2111',
	    'infin': '\u221E',
	    'int': '\u222B',
	    'Iota': '\u0399',
	    'iota': '\u03B9',
	    'iquest': '\u00BF',
	    'isin': '\u2208',
	    'Iuml': '\u00CF',
	    'iuml': '\u00EF',
	    'Kappa': '\u039A',
	    'kappa': '\u03BA',
	    'Lambda': '\u039B',
	    'lambda': '\u03BB',
	    'lang': '\u27E8',
	    'laquo': '\u00AB',
	    'larr': '\u2190',
	    'lArr': '\u21D0',
	    'lceil': '\u2308',
	    'ldquo': '\u201C',
	    'le': '\u2264',
	    'lfloor': '\u230A',
	    'lowast': '\u2217',
	    'loz': '\u25CA',
	    'lrm': '\u200E',
	    'lsaquo': '\u2039',
	    'lsquo': '\u2018',
	    'lt': '<',
	    'macr': '\u00AF',
	    'mdash': '\u2014',
	    'micro': '\u00B5',
	    'middot': '\u00B7',
	    'minus': '\u2212',
	    'Mu': '\u039C',
	    'mu': '\u03BC',
	    'nabla': '\u2207',
	    'nbsp': '\u00A0',
	    'ndash': '\u2013',
	    'ne': '\u2260',
	    'ni': '\u220B',
	    'not': '\u00AC',
	    'notin': '\u2209',
	    'nsub': '\u2284',
	    'Ntilde': '\u00D1',
	    'ntilde': '\u00F1',
	    'Nu': '\u039D',
	    'nu': '\u03BD',
	    'Oacute': '\u00D3',
	    'oacute': '\u00F3',
	    'Ocirc': '\u00D4',
	    'ocirc': '\u00F4',
	    'OElig': '\u0152',
	    'oelig': '\u0153',
	    'Ograve': '\u00D2',
	    'ograve': '\u00F2',
	    'oline': '\u203E',
	    'Omega': '\u03A9',
	    'omega': '\u03C9',
	    'Omicron': '\u039F',
	    'omicron': '\u03BF',
	    'oplus': '\u2295',
	    'or': '\u2228',
	    'ordf': '\u00AA',
	    'ordm': '\u00BA',
	    'Oslash': '\u00D8',
	    'oslash': '\u00F8',
	    'Otilde': '\u00D5',
	    'otilde': '\u00F5',
	    'otimes': '\u2297',
	    'Ouml': '\u00D6',
	    'ouml': '\u00F6',
	    'para': '\u00B6',
	    'permil': '\u2030',
	    'perp': '\u22A5',
	    'Phi': '\u03A6',
	    'phi': '\u03C6',
	    'Pi': '\u03A0',
	    'pi': '\u03C0',
	    'piv': '\u03D6',
	    'plusmn': '\u00B1',
	    'pound': '\u00A3',
	    'prime': '\u2032',
	    'Prime': '\u2033',
	    'prod': '\u220F',
	    'prop': '\u221D',
	    'Psi': '\u03A8',
	    'psi': '\u03C8',
	    'quot': '\u0022',
	    'radic': '\u221A',
	    'rang': '\u27E9',
	    'raquo': '\u00BB',
	    'rarr': '\u2192',
	    'rArr': '\u21D2',
	    'rceil': '\u2309',
	    'rdquo': '\u201D',
	    'real': '\u211C',
	    'reg': '\u00AE',
	    'rfloor': '\u230B',
	    'Rho': '\u03A1',
	    'rho': '\u03C1',
	    'rlm': '\u200F',
	    'rsaquo': '\u203A',
	    'rsquo': '\u2019',
	    'sbquo': '\u201A',
	    'Scaron': '\u0160',
	    'scaron': '\u0161',
	    'sdot': '\u22C5',
	    'sect': '\u00A7',
	    'shy': '\u00AD',
	    'Sigma': '\u03A3',
	    'sigma': '\u03C3',
	    'sigmaf': '\u03C2',
	    'sim': '\u223C',
	    'spades': '\u2660',
	    'sub': '\u2282',
	    'sube': '\u2286',
	    'sum': '\u2211',
	    'sup': '\u2283',
	    'sup1': '\u00B9',
	    'sup2': '\u00B2',
	    'sup3': '\u00B3',
	    'supe': '\u2287',
	    'szlig': '\u00DF',
	    'Tau': '\u03A4',
	    'tau': '\u03C4',
	    'there4': '\u2234',
	    'Theta': '\u0398',
	    'theta': '\u03B8',
	    'thetasym': '\u03D1',
	    'thinsp': '\u2009',
	    'THORN': '\u00DE',
	    'thorn': '\u00FE',
	    'tilde': '\u02DC',
	    'times': '\u00D7',
	    'trade': '\u2122',
	    'Uacute': '\u00DA',
	    'uacute': '\u00FA',
	    'uarr': '\u2191',
	    'uArr': '\u21D1',
	    'Ucirc': '\u00DB',
	    'ucirc': '\u00FB',
	    'Ugrave': '\u00D9',
	    'ugrave': '\u00F9',
	    'uml': '\u00A8',
	    'upsih': '\u03D2',
	    'Upsilon': '\u03A5',
	    'upsilon': '\u03C5',
	    'Uuml': '\u00DC',
	    'uuml': '\u00FC',
	    'weierp': '\u2118',
	    'Xi': '\u039E',
	    'xi': '\u03BE',
	    'Yacute': '\u00DD',
	    'yacute': '\u00FD',
	    'yen': '\u00A5',
	    'yuml': '\u00FF',
	    'Yuml': '\u0178',
	    'Zeta': '\u0396',
	    'zeta': '\u03B6',
	    'zwj': '\u200D',
	    'zwnj': '\u200C',
	});
	(function (HtmlTagContentType) {
	    HtmlTagContentType[HtmlTagContentType["RAW_TEXT"] = 0] = "RAW_TEXT";
	    HtmlTagContentType[HtmlTagContentType["ESCAPABLE_RAW_TEXT"] = 1] = "ESCAPABLE_RAW_TEXT";
	    HtmlTagContentType[HtmlTagContentType["PARSABLE_DATA"] = 2] = "PARSABLE_DATA";
	})(exports.HtmlTagContentType || (exports.HtmlTagContentType = {}));
	var HtmlTagContentType = exports.HtmlTagContentType;
	var HtmlTagDefinition = (function () {
	    function HtmlTagDefinition(_a) {
	        var _this = this;
	        var _b = _a === void 0 ? {} : _a, closedByChildren = _b.closedByChildren, requiredParents = _b.requiredParents, implicitNamespacePrefix = _b.implicitNamespacePrefix, contentType = _b.contentType, closedByParent = _b.closedByParent, isVoid = _b.isVoid, ignoreFirstLf = _b.ignoreFirstLf;
	        this.closedByChildren = {};
	        this.closedByParent = false;
	        if (lang_1.isPresent(closedByChildren) && closedByChildren.length > 0) {
	            closedByChildren.forEach(function (tagName) { return _this.closedByChildren[tagName] = true; });
	        }
	        this.isVoid = lang_1.normalizeBool(isVoid);
	        this.closedByParent = lang_1.normalizeBool(closedByParent) || this.isVoid;
	        if (lang_1.isPresent(requiredParents) && requiredParents.length > 0) {
	            this.requiredParents = {};
	            this.parentToAdd = requiredParents[0];
	            requiredParents.forEach(function (tagName) { return _this.requiredParents[tagName] = true; });
	        }
	        this.implicitNamespacePrefix = implicitNamespacePrefix;
	        this.contentType = lang_1.isPresent(contentType) ? contentType : HtmlTagContentType.PARSABLE_DATA;
	        this.ignoreFirstLf = lang_1.normalizeBool(ignoreFirstLf);
	    }
	    HtmlTagDefinition.prototype.requireExtraParent = function (currentParent) {
	        if (lang_1.isBlank(this.requiredParents)) {
	            return false;
	        }
	        if (lang_1.isBlank(currentParent)) {
	            return true;
	        }
	        var lcParent = currentParent.toLowerCase();
	        return this.requiredParents[lcParent] != true && lcParent != 'template';
	    };
	    HtmlTagDefinition.prototype.isClosedByChild = function (name) {
	        return this.isVoid || lang_1.normalizeBool(this.closedByChildren[name.toLowerCase()]);
	    };
	    return HtmlTagDefinition;
	}());
	exports.HtmlTagDefinition = HtmlTagDefinition;
	// see http://www.w3.org/TR/html51/syntax.html#optional-tags
	// This implementation does not fully conform to the HTML5 spec.
	var TAG_DEFINITIONS = {
	    'base': new HtmlTagDefinition({ isVoid: true }),
	    'meta': new HtmlTagDefinition({ isVoid: true }),
	    'area': new HtmlTagDefinition({ isVoid: true }),
	    'embed': new HtmlTagDefinition({ isVoid: true }),
	    'link': new HtmlTagDefinition({ isVoid: true }),
	    'img': new HtmlTagDefinition({ isVoid: true }),
	    'input': new HtmlTagDefinition({ isVoid: true }),
	    'param': new HtmlTagDefinition({ isVoid: true }),
	    'hr': new HtmlTagDefinition({ isVoid: true }),
	    'br': new HtmlTagDefinition({ isVoid: true }),
	    'source': new HtmlTagDefinition({ isVoid: true }),
	    'track': new HtmlTagDefinition({ isVoid: true }),
	    'wbr': new HtmlTagDefinition({ isVoid: true }),
	    'p': new HtmlTagDefinition({
	        closedByChildren: [
	            'address',
	            'article',
	            'aside',
	            'blockquote',
	            'div',
	            'dl',
	            'fieldset',
	            'footer',
	            'form',
	            'h1',
	            'h2',
	            'h3',
	            'h4',
	            'h5',
	            'h6',
	            'header',
	            'hgroup',
	            'hr',
	            'main',
	            'nav',
	            'ol',
	            'p',
	            'pre',
	            'section',
	            'table',
	            'ul'
	        ],
	        closedByParent: true
	    }),
	    'thead': new HtmlTagDefinition({ closedByChildren: ['tbody', 'tfoot'] }),
	    'tbody': new HtmlTagDefinition({ closedByChildren: ['tbody', 'tfoot'], closedByParent: true }),
	    'tfoot': new HtmlTagDefinition({ closedByChildren: ['tbody'], closedByParent: true }),
	    'tr': new HtmlTagDefinition({
	        closedByChildren: ['tr'],
	        requiredParents: ['tbody', 'tfoot', 'thead'],
	        closedByParent: true
	    }),
	    'td': new HtmlTagDefinition({ closedByChildren: ['td', 'th'], closedByParent: true }),
	    'th': new HtmlTagDefinition({ closedByChildren: ['td', 'th'], closedByParent: true }),
	    'col': new HtmlTagDefinition({ requiredParents: ['colgroup'], isVoid: true }),
	    'svg': new HtmlTagDefinition({ implicitNamespacePrefix: 'svg' }),
	    'math': new HtmlTagDefinition({ implicitNamespacePrefix: 'math' }),
	    'li': new HtmlTagDefinition({ closedByChildren: ['li'], closedByParent: true }),
	    'dt': new HtmlTagDefinition({ closedByChildren: ['dt', 'dd'] }),
	    'dd': new HtmlTagDefinition({ closedByChildren: ['dt', 'dd'], closedByParent: true }),
	    'rb': new HtmlTagDefinition({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: true }),
	    'rt': new HtmlTagDefinition({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: true }),
	    'rtc': new HtmlTagDefinition({ closedByChildren: ['rb', 'rtc', 'rp'], closedByParent: true }),
	    'rp': new HtmlTagDefinition({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: true }),
	    'optgroup': new HtmlTagDefinition({ closedByChildren: ['optgroup'], closedByParent: true }),
	    'option': new HtmlTagDefinition({ closedByChildren: ['option', 'optgroup'], closedByParent: true }),
	    'pre': new HtmlTagDefinition({ ignoreFirstLf: true }),
	    'listing': new HtmlTagDefinition({ ignoreFirstLf: true }),
	    'style': new HtmlTagDefinition({ contentType: HtmlTagContentType.RAW_TEXT }),
	    'script': new HtmlTagDefinition({ contentType: HtmlTagContentType.RAW_TEXT }),
	    'title': new HtmlTagDefinition({ contentType: HtmlTagContentType.ESCAPABLE_RAW_TEXT }),
	    'textarea': new HtmlTagDefinition({ contentType: HtmlTagContentType.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }),
	};
	var DEFAULT_TAG_DEFINITION = new HtmlTagDefinition();
	function getHtmlTagDefinition(tagName) {
	    var result = TAG_DEFINITIONS[tagName.toLowerCase()];
	    return lang_1.isPresent(result) ? result : DEFAULT_TAG_DEFINITION;
	}
	exports.getHtmlTagDefinition = getHtmlTagDefinition;
	var NS_PREFIX_RE = /^@([^:]+):(.+)/g;
	function splitNsName(elementName) {
	    if (elementName[0] != '@') {
	        return [null, elementName];
	    }
	    var match = lang_1.RegExpWrapper.firstMatch(NS_PREFIX_RE, elementName);
	    return [match[1], match[2]];
	}
	exports.splitNsName = splitNsName;
	function getNsPrefix(elementName) {
	    return splitNsName(elementName)[0];
	}
	exports.getNsPrefix = getNsPrefix;
	function mergeNsAndName(prefix, localName) {
	    return lang_1.isPresent(prefix) ? "@" + prefix + ":" + localName : localName;
	}
	exports.mergeNsAndName = mergeNsAndName;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var di_1 = __webpack_require__(5);
	var lang_1 = __webpack_require__(1);
	var application_tokens_1 = __webpack_require__(32);
	var di_2 = __webpack_require__(5);
	/**
	 * Create a {@link UrlResolver} with no package prefix.
	 */
	function createWithoutPackagePrefix() {
	    return new UrlResolver();
	}
	exports.createWithoutPackagePrefix = createWithoutPackagePrefix;
	/**
	 * A default provider for {@link PACKAGE_ROOT_URL} that maps to '/'.
	 */
	exports.DEFAULT_PACKAGE_URL_PROVIDER = new di_2.Provider(application_tokens_1.PACKAGE_ROOT_URL, { useValue: "/" });
	/**
	 * Used by the {@link Compiler} when resolving HTML and CSS template URLs.
	 *
	 * This class can be overridden by the application developer to create custom behavior.
	 *
	 * See {@link Compiler}
	 *
	 * ## Example
	 *
	 * {@example compiler/ts/url_resolver/url_resolver.ts region='url_resolver'}
	 */
	var UrlResolver = (function () {
	    function UrlResolver(packagePrefix) {
	        if (packagePrefix === void 0) { packagePrefix = null; }
	        if (lang_1.isPresent(packagePrefix)) {
	            this._packagePrefix = lang_1.StringWrapper.stripRight(packagePrefix, "/") + "/";
	        }
	    }
	    /**
	     * Resolves the `url` given the `baseUrl`:
	     * - when the `url` is null, the `baseUrl` is returned,
	     * - if `url` is relative ('path/to/here', './path/to/here'), the resolved url is a combination of
	     * `baseUrl` and `url`,
	     * - if `url` is absolute (it has a scheme: 'http://', 'https://' or start with '/'), the `url` is
	     * returned as is (ignoring the `baseUrl`)
	     *
	     * @param {string} baseUrl
	     * @param {string} url
	     * @returns {string} the resolved URL
	     */
	    UrlResolver.prototype.resolve = function (baseUrl, url) {
	        var resolvedUrl = url;
	        if (lang_1.isPresent(baseUrl) && baseUrl.length > 0) {
	            resolvedUrl = _resolveUrl(baseUrl, resolvedUrl);
	        }
	        if (lang_1.isPresent(this._packagePrefix) && getUrlScheme(resolvedUrl) == "package") {
	            resolvedUrl = resolvedUrl.replace("package:", this._packagePrefix);
	        }
	        return resolvedUrl;
	    };
	    UrlResolver = __decorate([
	        di_1.Injectable(),
	        __param(0, di_1.Inject(application_tokens_1.PACKAGE_ROOT_URL)), 
	        __metadata('design:paramtypes', [String])
	    ], UrlResolver);
	    return UrlResolver;
	}());
	exports.UrlResolver = UrlResolver;
	/**
	 * Extract the scheme of a URL.
	 */
	function getUrlScheme(url) {
	    var match = _split(url);
	    return (match && match[_ComponentIndex.Scheme]) || "";
	}
	exports.getUrlScheme = getUrlScheme;
	// The code below is adapted from Traceur:
	// https://github.com/google/traceur-compiler/blob/9511c1dafa972bf0de1202a8a863bad02f0f95a8/src/runtime/url.js
	/**
	 * Builds a URI string from already-encoded parts.
	 *
	 * No encoding is performed.  Any component may be omitted as either null or
	 * undefined.
	 *
	 * @param {?string=} opt_scheme The scheme such as 'http'.
	 * @param {?string=} opt_userInfo The user name before the '@'.
	 * @param {?string=} opt_domain The domain such as 'www.google.com', already
	 *     URI-encoded.
	 * @param {(string|null)=} opt_port The port number.
	 * @param {?string=} opt_path The path, already URI-encoded.  If it is not
	 *     empty, it must begin with a slash.
	 * @param {?string=} opt_queryData The URI-encoded query data.
	 * @param {?string=} opt_fragment The URI-encoded fragment identifier.
	 * @return {string} The fully combined URI.
	 */
	function _buildFromEncodedParts(opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_queryData, opt_fragment) {
	    var out = [];
	    if (lang_1.isPresent(opt_scheme)) {
	        out.push(opt_scheme + ':');
	    }
	    if (lang_1.isPresent(opt_domain)) {
	        out.push('//');
	        if (lang_1.isPresent(opt_userInfo)) {
	            out.push(opt_userInfo + '@');
	        }
	        out.push(opt_domain);
	        if (lang_1.isPresent(opt_port)) {
	            out.push(':' + opt_port);
	        }
	    }
	    if (lang_1.isPresent(opt_path)) {
	        out.push(opt_path);
	    }
	    if (lang_1.isPresent(opt_queryData)) {
	        out.push('?' + opt_queryData);
	    }
	    if (lang_1.isPresent(opt_fragment)) {
	        out.push('#' + opt_fragment);
	    }
	    return out.join('');
	}
	/**
	 * A regular expression for breaking a URI into its component parts.
	 *
	 * {@link http://www.gbiv.com/protocols/uri/rfc/rfc3986.html#RFC2234} says
	 * As the "first-match-wins" algorithm is identical to the "greedy"
	 * disambiguation method used by POSIX regular expressions, it is natural and
	 * commonplace to use a regular expression for parsing the potential five
	 * components of a URI reference.
	 *
	 * The following line is the regular expression for breaking-down a
	 * well-formed URI reference into its components.
	 *
	 * <pre>
	 * ^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?
	 *  12            3  4          5       6  7        8 9
	 * </pre>
	 *
	 * The numbers in the second line above are only to assist readability; they
	 * indicate the reference points for each subexpression (i.e., each paired
	 * parenthesis). We refer to the value matched for subexpression <n> as $<n>.
	 * For example, matching the above expression to
	 * <pre>
	 *     http://www.ics.uci.edu/pub/ietf/uri/#Related
	 * </pre>
	 * results in the following subexpression matches:
	 * <pre>
	 *    $1 = http:
	 *    $2 = http
	 *    $3 = //www.ics.uci.edu
	 *    $4 = www.ics.uci.edu
	 *    $5 = /pub/ietf/uri/
	 *    $6 = <undefined>
	 *    $7 = <undefined>
	 *    $8 = #Related
	 *    $9 = Related
	 * </pre>
	 * where <undefined> indicates that the component is not present, as is the
	 * case for the query component in the above example. Therefore, we can
	 * determine the value of the five components as
	 * <pre>
	 *    scheme    = $2
	 *    authority = $4
	 *    path      = $5
	 *    query     = $7
	 *    fragment  = $9
	 * </pre>
	 *
	 * The regular expression has been modified slightly to expose the
	 * userInfo, domain, and port separately from the authority.
	 * The modified version yields
	 * <pre>
	 *    $1 = http              scheme
	 *    $2 = <undefined>       userInfo -\
	 *    $3 = www.ics.uci.edu   domain     | authority
	 *    $4 = <undefined>       port     -/
	 *    $5 = /pub/ietf/uri/    path
	 *    $6 = <undefined>       query without ?
	 *    $7 = Related           fragment without #
	 * </pre>
	 * @type {!RegExp}
	 * @internal
	 */
	var _splitRe = lang_1.RegExpWrapper.create('^' +
	    '(?:' +
	    '([^:/?#.]+)' +
	    // used by other URL parts such as :,
	    // ?, /, #, and .
	    ':)?' +
	    '(?://' +
	    '(?:([^/?#]*)@)?' +
	    '([\\w\\d\\-\\u0100-\\uffff.%]*)' +
	    // digits, dashes, dots, percent
	    // escapes, and unicode characters.
	    '(?::([0-9]+))?' +
	    ')?' +
	    '([^?#]+)?' +
	    '(?:\\?([^#]*))?' +
	    '(?:#(.*))?' +
	    '$');
	/**
	 * The index of each URI component in the return value of goog.uri.utils.split.
	 * @enum {number}
	 */
	var _ComponentIndex;
	(function (_ComponentIndex) {
	    _ComponentIndex[_ComponentIndex["Scheme"] = 1] = "Scheme";
	    _ComponentIndex[_ComponentIndex["UserInfo"] = 2] = "UserInfo";
	    _ComponentIndex[_ComponentIndex["Domain"] = 3] = "Domain";
	    _ComponentIndex[_ComponentIndex["Port"] = 4] = "Port";
	    _ComponentIndex[_ComponentIndex["Path"] = 5] = "Path";
	    _ComponentIndex[_ComponentIndex["QueryData"] = 6] = "QueryData";
	    _ComponentIndex[_ComponentIndex["Fragment"] = 7] = "Fragment";
	})(_ComponentIndex || (_ComponentIndex = {}));
	/**
	 * Splits a URI into its component parts.
	 *
	 * Each component can be accessed via the component indices; for example:
	 * <pre>
	 * goog.uri.utils.split(someStr)[goog.uri.utils.CompontentIndex.QUERY_DATA];
	 * </pre>
	 *
	 * @param {string} uri The URI string to examine.
	 * @return {!Array.<string|undefined>} Each component still URI-encoded.
	 *     Each component that is present will contain the encoded value, whereas
	 *     components that are not present will be undefined or empty, depending
	 *     on the browser's regular expression implementation.  Never null, since
	 *     arbitrary strings may still look like path names.
	 */
	function _split(uri) {
	    return lang_1.RegExpWrapper.firstMatch(_splitRe, uri);
	}
	/**
	  * Removes dot segments in given path component, as described in
	  * RFC 3986, section 5.2.4.
	  *
	  * @param {string} path A non-empty path component.
	  * @return {string} Path component with removed dot segments.
	  */
	function _removeDotSegments(path) {
	    if (path == '/')
	        return '/';
	    var leadingSlash = path[0] == '/' ? '/' : '';
	    var trailingSlash = path[path.length - 1] === '/' ? '/' : '';
	    var segments = path.split('/');
	    var out = [];
	    var up = 0;
	    for (var pos = 0; pos < segments.length; pos++) {
	        var segment = segments[pos];
	        switch (segment) {
	            case '':
	            case '.':
	                break;
	            case '..':
	                if (out.length > 0) {
	                    out.pop();
	                }
	                else {
	                    up++;
	                }
	                break;
	            default:
	                out.push(segment);
	        }
	    }
	    if (leadingSlash == '') {
	        while (up-- > 0) {
	            out.unshift('..');
	        }
	        if (out.length === 0)
	            out.push('.');
	    }
	    return leadingSlash + out.join('/') + trailingSlash;
	}
	/**
	 * Takes an array of the parts from split and canonicalizes the path part
	 * and then joins all the parts.
	 * @param {Array.<string?>} parts
	 * @return {string}
	 */
	function _joinAndCanonicalizePath(parts) {
	    var path = parts[_ComponentIndex.Path];
	    path = lang_1.isBlank(path) ? '' : _removeDotSegments(path);
	    parts[_ComponentIndex.Path] = path;
	    return _buildFromEncodedParts(parts[_ComponentIndex.Scheme], parts[_ComponentIndex.UserInfo], parts[_ComponentIndex.Domain], parts[_ComponentIndex.Port], path, parts[_ComponentIndex.QueryData], parts[_ComponentIndex.Fragment]);
	}
	/**
	 * Resolves a URL.
	 * @param {string} base The URL acting as the base URL.
	 * @param {string} to The URL to resolve.
	 * @return {string}
	 */
	function _resolveUrl(base, url) {
	    var parts = _split(encodeURI(url));
	    var baseParts = _split(base);
	    if (lang_1.isPresent(parts[_ComponentIndex.Scheme])) {
	        return _joinAndCanonicalizePath(parts);
	    }
	    else {
	        parts[_ComponentIndex.Scheme] = baseParts[_ComponentIndex.Scheme];
	    }
	    for (var i = _ComponentIndex.Scheme; i <= _ComponentIndex.Port; i++) {
	        if (lang_1.isBlank(parts[i])) {
	            parts[i] = baseParts[i];
	        }
	    }
	    if (parts[_ComponentIndex.Path][0] == '/') {
	        return _joinAndCanonicalizePath(parts);
	    }
	    var path = baseParts[_ComponentIndex.Path];
	    if (lang_1.isBlank(path))
	        path = '/';
	    var index = path.lastIndexOf('/');
	    path = path.substring(0, index + 1) + parts[_ComponentIndex.Path];
	    parts[_ComponentIndex.Path] = path;
	    return _joinAndCanonicalizePath(parts);
	}


/***/ },
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var di_1 = __webpack_require__(5);
	var lang_1 = __webpack_require__(1);
	/**
	 * A DI Token representing the main rendering context. In a browser this is the DOM Document.
	 *
	 * Note: Document might not be available in the Application Context when Application and Rendering
	 * Contexts are not the same (e.g. when running the application into a Web Worker).
	 */
	exports.DOCUMENT = lang_1.CONST_EXPR(new di_1.OpaqueToken('DocumentToken'));


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var core_1 = __webpack_require__(3);
	/**
	 * `LocationStrategy` is responsible for representing and reading route state
	 * from the browser's URL. Angular provides two strategies:
	 * {@link HashLocationStrategy} and {@link PathLocationStrategy} (default).
	 *
	 * This is used under the hood of the {@link Location} service.
	 *
	 * Applications should use the {@link Router} or {@link Location} services to
	 * interact with application route state.
	 *
	 * For instance, {@link HashLocationStrategy} produces URLs like
	 * `http://example.com#/foo`, and {@link PathLocationStrategy} produces
	 * `http://example.com/foo` as an equivalent URL.
	 *
	 * See these two classes for more.
	 */
	var LocationStrategy = (function () {
	    function LocationStrategy() {
	    }
	    return LocationStrategy;
	}());
	exports.LocationStrategy = LocationStrategy;
	/**
	 * The `APP_BASE_HREF` token represents the base href to be used with the
	 * {@link PathLocationStrategy}.
	 *
	 * If you're using {@link PathLocationStrategy}, you must provide a provider to a string
	 * representing the URL prefix that should be preserved when generating and recognizing
	 * URLs.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   // ...
	 * }
	 *
	 * bootstrap(AppCmp, [
	 *   ROUTER_PROVIDERS,
	 *   provide(APP_BASE_HREF, {useValue: '/my/app'})
	 * ]);
	 * ```
	 */
	exports.APP_BASE_HREF = lang_1.CONST_EXPR(new core_1.OpaqueToken('appBaseHref'));
	function normalizeQueryParams(params) {
	    return (params.length > 0 && params.substring(0, 1) != '?') ? ('?' + params) : params;
	}
	exports.normalizeQueryParams = normalizeQueryParams;
	function joinWithSlash(start, end) {
	    if (start.length == 0) {
	        return end;
	    }
	    if (end.length == 0) {
	        return start;
	    }
	    var slashes = 0;
	    if (start.endsWith('/')) {
	        slashes++;
	    }
	    if (end.startsWith('/')) {
	        slashes++;
	    }
	    if (slashes == 2) {
	        return start + end.substring(1);
	    }
	    if (slashes == 1) {
	        return start + end;
	    }
	    return start + '/' + end;
	}
	exports.joinWithSlash = joinWithSlash;


/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';"use strict";
	/**
	 * This class should not be used directly by an application developer. Instead, use
	 * {@link Location}.
	 *
	 * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
	 * agnostic.
	 * This means that we can have different implementation of `PlatformLocation` for the different
	 * platforms
	 * that angular supports. For example, the default `PlatformLocation` is {@link
	 * BrowserPlatformLocation},
	 * however when you run your app in a WebWorker you use {@link WebWorkerPlatformLocation}.
	 *
	 * The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
	 * when
	 * they need to interact with the DOM apis like pushState, popState, etc...
	 *
	 * {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
	 * by
	 * the {@link Router} in order to navigate between routes. Since all interactions between {@link
	 * Router} /
	 * {@link Location} / {@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
	 * class
	 * they are all platform independent.
	 */
	var PlatformLocation = (function () {
	    function PlatformLocation() {
	    }
	    Object.defineProperty(PlatformLocation.prototype, "pathname", {
	        /* abstract */ get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PlatformLocation.prototype, "search", {
	        /* abstract */ get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PlatformLocation.prototype, "hash", {
	        /* abstract */ get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return PlatformLocation;
	}());
	exports.PlatformLocation = PlatformLocation;


/***/ },
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var collection_1 = __webpack_require__(2);
	var change_detection_1 = __webpack_require__(9);
	var view_1 = __webpack_require__(18);
	var selector_1 = __webpack_require__(141);
	var util_1 = __webpack_require__(13);
	var interfaces_1 = __webpack_require__(55);
	// group 1: "property" from "[property]"
	// group 2: "event" from "(event)"
	var HOST_REG_EXP = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))$/g;
	var CompileMetadataWithIdentifier = (function () {
	    function CompileMetadataWithIdentifier() {
	    }
	    Object.defineProperty(CompileMetadataWithIdentifier.prototype, "identifier", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return CompileMetadataWithIdentifier;
	}());
	exports.CompileMetadataWithIdentifier = CompileMetadataWithIdentifier;
	var CompileMetadataWithType = (function (_super) {
	    __extends(CompileMetadataWithType, _super);
	    function CompileMetadataWithType() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(CompileMetadataWithType.prototype, "type", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CompileMetadataWithType.prototype, "identifier", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return CompileMetadataWithType;
	}(CompileMetadataWithIdentifier));
	exports.CompileMetadataWithType = CompileMetadataWithType;
	function metadataFromJson(data) {
	    return _COMPILE_METADATA_FROM_JSON[data['class']](data);
	}
	exports.metadataFromJson = metadataFromJson;
	var CompileIdentifierMetadata = (function () {
	    function CompileIdentifierMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, runtime = _b.runtime, name = _b.name, moduleUrl = _b.moduleUrl, prefix = _b.prefix, constConstructor = _b.constConstructor, value = _b.value;
	        this.runtime = runtime;
	        this.name = name;
	        this.prefix = prefix;
	        this.moduleUrl = moduleUrl;
	        this.constConstructor = constConstructor;
	        this.value = value;
	    }
	    CompileIdentifierMetadata.fromJson = function (data) {
	        var value = lang_1.isArray(data['value']) ? arrayFromJson(data['value'], metadataFromJson) :
	            objFromJson(data['value'], metadataFromJson);
	        return new CompileIdentifierMetadata({
	            name: data['name'],
	            prefix: data['prefix'],
	            moduleUrl: data['moduleUrl'],
	            constConstructor: data['constConstructor'],
	            value: value
	        });
	    };
	    CompileIdentifierMetadata.prototype.toJson = function () {
	        var value = lang_1.isArray(this.value) ? arrayToJson(this.value) : objToJson(this.value);
	        return {
	            // Note: Runtime type can't be serialized...
	            'class': 'Identifier',
	            'name': this.name,
	            'moduleUrl': this.moduleUrl,
	            'prefix': this.prefix,
	            'constConstructor': this.constConstructor,
	            'value': value
	        };
	    };
	    Object.defineProperty(CompileIdentifierMetadata.prototype, "identifier", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    return CompileIdentifierMetadata;
	}());
	exports.CompileIdentifierMetadata = CompileIdentifierMetadata;
	var CompileDiDependencyMetadata = (function () {
	    function CompileDiDependencyMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, isAttribute = _b.isAttribute, isSelf = _b.isSelf, isHost = _b.isHost, isSkipSelf = _b.isSkipSelf, isOptional = _b.isOptional, query = _b.query, viewQuery = _b.viewQuery, token = _b.token;
	        this.isAttribute = lang_1.normalizeBool(isAttribute);
	        this.isSelf = lang_1.normalizeBool(isSelf);
	        this.isHost = lang_1.normalizeBool(isHost);
	        this.isSkipSelf = lang_1.normalizeBool(isSkipSelf);
	        this.isOptional = lang_1.normalizeBool(isOptional);
	        this.query = query;
	        this.viewQuery = viewQuery;
	        this.token = token;
	    }
	    CompileDiDependencyMetadata.fromJson = function (data) {
	        return new CompileDiDependencyMetadata({
	            token: objFromJson(data['token'], CompileIdentifierMetadata.fromJson),
	            query: objFromJson(data['query'], CompileQueryMetadata.fromJson),
	            viewQuery: objFromJson(data['viewQuery'], CompileQueryMetadata.fromJson),
	            isAttribute: data['isAttribute'],
	            isSelf: data['isSelf'],
	            isHost: data['isHost'],
	            isSkipSelf: data['isSkipSelf'],
	            isOptional: data['isOptional']
	        });
	    };
	    CompileDiDependencyMetadata.prototype.toJson = function () {
	        return {
	            // Note: Runtime type can't be serialized...
	            'token': objToJson(this.token),
	            'query': objToJson(this.query),
	            'viewQuery': objToJson(this.viewQuery),
	            'isAttribute': this.isAttribute,
	            'isSelf': this.isSelf,
	            'isHost': this.isHost,
	            'isSkipSelf': this.isSkipSelf,
	            'isOptional': this.isOptional
	        };
	    };
	    return CompileDiDependencyMetadata;
	}());
	exports.CompileDiDependencyMetadata = CompileDiDependencyMetadata;
	var CompileProviderMetadata = (function () {
	    function CompileProviderMetadata(_a) {
	        var token = _a.token, useClass = _a.useClass, useValue = _a.useValue, useExisting = _a.useExisting, useFactory = _a.useFactory, deps = _a.deps, multi = _a.multi;
	        this.token = token;
	        this.useClass = useClass;
	        this.useValue = useValue;
	        this.useExisting = useExisting;
	        this.useFactory = useFactory;
	        this.deps = deps;
	        this.multi = multi;
	    }
	    CompileProviderMetadata.fromJson = function (data) {
	        return new CompileProviderMetadata({
	            token: objFromJson(data['token'], CompileIdentifierMetadata.fromJson),
	            useClass: objFromJson(data['useClass'], CompileTypeMetadata.fromJson),
	            useExisting: objFromJson(data['useExisting'], CompileIdentifierMetadata.fromJson),
	            useValue: objFromJson(data['useValue'], CompileIdentifierMetadata.fromJson),
	            useFactory: objFromJson(data['useFactory'], CompileFactoryMetadata.fromJson)
	        });
	    };
	    CompileProviderMetadata.prototype.toJson = function () {
	        return {
	            // Note: Runtime type can't be serialized...
	            'class': 'Provider',
	            'token': objToJson(this.token),
	            'useClass': objToJson(this.useClass),
	            'useExisting': objToJson(this.useExisting),
	            'useValue': objToJson(this.useValue),
	            'useFactory': objToJson(this.useFactory)
	        };
	    };
	    return CompileProviderMetadata;
	}());
	exports.CompileProviderMetadata = CompileProviderMetadata;
	var CompileFactoryMetadata = (function () {
	    function CompileFactoryMetadata(_a) {
	        var runtime = _a.runtime, name = _a.name, moduleUrl = _a.moduleUrl, prefix = _a.prefix, constConstructor = _a.constConstructor, diDeps = _a.diDeps, value = _a.value;
	        this.runtime = runtime;
	        this.name = name;
	        this.prefix = prefix;
	        this.moduleUrl = moduleUrl;
	        this.diDeps = diDeps;
	        this.constConstructor = constConstructor;
	        this.value = value;
	    }
	    Object.defineProperty(CompileFactoryMetadata.prototype, "identifier", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    CompileFactoryMetadata.fromJson = function (data) {
	        return new CompileFactoryMetadata({
	            name: data['name'],
	            prefix: data['prefix'],
	            moduleUrl: data['moduleUrl'],
	            constConstructor: data['constConstructor'],
	            value: data['value'],
	            diDeps: arrayFromJson(data['diDeps'], CompileDiDependencyMetadata.fromJson)
	        });
	    };
	    CompileFactoryMetadata.prototype.toJson = function () {
	        return {
	            'class': 'Factory',
	            'name': this.name,
	            'prefix': this.prefix,
	            'moduleUrl': this.moduleUrl,
	            'constConstructor': this.constConstructor,
	            'value': this.value,
	            'diDeps': arrayToJson(this.diDeps)
	        };
	    };
	    return CompileFactoryMetadata;
	}());
	exports.CompileFactoryMetadata = CompileFactoryMetadata;
	/**
	 * Metadata regarding compilation of a type.
	 */
	var CompileTypeMetadata = (function () {
	    function CompileTypeMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, runtime = _b.runtime, name = _b.name, moduleUrl = _b.moduleUrl, prefix = _b.prefix, isHost = _b.isHost, constConstructor = _b.constConstructor, value = _b.value, diDeps = _b.diDeps;
	        this.runtime = runtime;
	        this.name = name;
	        this.moduleUrl = moduleUrl;
	        this.prefix = prefix;
	        this.isHost = lang_1.normalizeBool(isHost);
	        this.constConstructor = constConstructor;
	        this.value = value;
	        this.diDeps = lang_1.normalizeBlank(diDeps);
	    }
	    CompileTypeMetadata.fromJson = function (data) {
	        return new CompileTypeMetadata({
	            name: data['name'],
	            moduleUrl: data['moduleUrl'],
	            prefix: data['prefix'],
	            isHost: data['isHost'],
	            constConstructor: data['constConstructor'],
	            value: data['value'],
	            diDeps: arrayFromJson(data['diDeps'], CompileDiDependencyMetadata.fromJson)
	        });
	    };
	    Object.defineProperty(CompileTypeMetadata.prototype, "identifier", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CompileTypeMetadata.prototype, "type", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    CompileTypeMetadata.prototype.toJson = function () {
	        return {
	            // Note: Runtime type can't be serialized...
	            'class': 'Type',
	            'name': this.name,
	            'moduleUrl': this.moduleUrl,
	            'prefix': this.prefix,
	            'isHost': this.isHost,
	            'constConstructor': this.constConstructor,
	            'value': this.value,
	            'diDeps': arrayToJson(this.diDeps)
	        };
	    };
	    return CompileTypeMetadata;
	}());
	exports.CompileTypeMetadata = CompileTypeMetadata;
	var CompileQueryMetadata = (function () {
	    function CompileQueryMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, selectors = _b.selectors, descendants = _b.descendants, first = _b.first, propertyName = _b.propertyName;
	        this.selectors = selectors;
	        this.descendants = descendants;
	        this.first = lang_1.normalizeBool(first);
	        this.propertyName = propertyName;
	    }
	    CompileQueryMetadata.fromJson = function (data) {
	        return new CompileQueryMetadata({
	            selectors: arrayFromJson(data['selectors'], CompileIdentifierMetadata.fromJson),
	            descendants: data['descendants'],
	            first: data['first'],
	            propertyName: data['propertyName']
	        });
	    };
	    CompileQueryMetadata.prototype.toJson = function () {
	        return {
	            // Note: Runtime type can't be serialized...
	            'selectors': arrayToJson(this.selectors),
	            'descendants': this.descendants,
	            'first': this.first,
	            'propertyName': this.propertyName
	        };
	    };
	    return CompileQueryMetadata;
	}());
	exports.CompileQueryMetadata = CompileQueryMetadata;
	/**
	 * Metadata regarding compilation of a template.
	 */
	var CompileTemplateMetadata = (function () {
	    function CompileTemplateMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, encapsulation = _b.encapsulation, template = _b.template, templateUrl = _b.templateUrl, styles = _b.styles, styleUrls = _b.styleUrls, ngContentSelectors = _b.ngContentSelectors;
	        this.encapsulation = lang_1.isPresent(encapsulation) ? encapsulation : view_1.ViewEncapsulation.Emulated;
	        this.template = template;
	        this.templateUrl = templateUrl;
	        this.styles = lang_1.isPresent(styles) ? styles : [];
	        this.styleUrls = lang_1.isPresent(styleUrls) ? styleUrls : [];
	        this.ngContentSelectors = lang_1.isPresent(ngContentSelectors) ? ngContentSelectors : [];
	    }
	    CompileTemplateMetadata.fromJson = function (data) {
	        return new CompileTemplateMetadata({
	            encapsulation: lang_1.isPresent(data['encapsulation']) ?
	                view_1.VIEW_ENCAPSULATION_VALUES[data['encapsulation']] :
	                data['encapsulation'],
	            template: data['template'],
	            templateUrl: data['templateUrl'],
	            styles: data['styles'],
	            styleUrls: data['styleUrls'],
	            ngContentSelectors: data['ngContentSelectors']
	        });
	    };
	    CompileTemplateMetadata.prototype.toJson = function () {
	        return {
	            'encapsulation': lang_1.isPresent(this.encapsulation) ? lang_1.serializeEnum(this.encapsulation) : this.encapsulation,
	            'template': this.template,
	            'templateUrl': this.templateUrl,
	            'styles': this.styles,
	            'styleUrls': this.styleUrls,
	            'ngContentSelectors': this.ngContentSelectors
	        };
	    };
	    return CompileTemplateMetadata;
	}());
	exports.CompileTemplateMetadata = CompileTemplateMetadata;
	/**
	 * Metadata regarding compilation of a directive.
	 */
	var CompileDirectiveMetadata = (function () {
	    function CompileDirectiveMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, type = _b.type, isComponent = _b.isComponent, dynamicLoadable = _b.dynamicLoadable, selector = _b.selector, exportAs = _b.exportAs, changeDetection = _b.changeDetection, inputs = _b.inputs, outputs = _b.outputs, hostListeners = _b.hostListeners, hostProperties = _b.hostProperties, hostAttributes = _b.hostAttributes, lifecycleHooks = _b.lifecycleHooks, providers = _b.providers, viewProviders = _b.viewProviders, queries = _b.queries, viewQueries = _b.viewQueries, template = _b.template;
	        this.type = type;
	        this.isComponent = isComponent;
	        this.dynamicLoadable = dynamicLoadable;
	        this.selector = selector;
	        this.exportAs = exportAs;
	        this.changeDetection = changeDetection;
	        this.inputs = inputs;
	        this.outputs = outputs;
	        this.hostListeners = hostListeners;
	        this.hostProperties = hostProperties;
	        this.hostAttributes = hostAttributes;
	        this.lifecycleHooks = lifecycleHooks;
	        this.providers = lang_1.normalizeBlank(providers);
	        this.viewProviders = lang_1.normalizeBlank(viewProviders);
	        this.queries = lang_1.normalizeBlank(queries);
	        this.viewQueries = lang_1.normalizeBlank(viewQueries);
	        this.template = template;
	    }
	    CompileDirectiveMetadata.create = function (_a) {
	        var _b = _a === void 0 ? {} : _a, type = _b.type, isComponent = _b.isComponent, dynamicLoadable = _b.dynamicLoadable, selector = _b.selector, exportAs = _b.exportAs, changeDetection = _b.changeDetection, inputs = _b.inputs, outputs = _b.outputs, host = _b.host, lifecycleHooks = _b.lifecycleHooks, providers = _b.providers, viewProviders = _b.viewProviders, queries = _b.queries, viewQueries = _b.viewQueries, template = _b.template;
	        var hostListeners = {};
	        var hostProperties = {};
	        var hostAttributes = {};
	        if (lang_1.isPresent(host)) {
	            collection_1.StringMapWrapper.forEach(host, function (value, key) {
	                var matches = lang_1.RegExpWrapper.firstMatch(HOST_REG_EXP, key);
	                if (lang_1.isBlank(matches)) {
	                    hostAttributes[key] = value;
	                }
	                else if (lang_1.isPresent(matches[1])) {
	                    hostProperties[matches[1]] = value;
	                }
	                else if (lang_1.isPresent(matches[2])) {
	                    hostListeners[matches[2]] = value;
	                }
	            });
	        }
	        var inputsMap = {};
	        if (lang_1.isPresent(inputs)) {
	            inputs.forEach(function (bindConfig) {
	                // canonical syntax: `dirProp: elProp`
	                // if there is no `:`, use dirProp = elProp
	                var parts = util_1.splitAtColon(bindConfig, [bindConfig, bindConfig]);
	                inputsMap[parts[0]] = parts[1];
	            });
	        }
	        var outputsMap = {};
	        if (lang_1.isPresent(outputs)) {
	            outputs.forEach(function (bindConfig) {
	                // canonical syntax: `dirProp: elProp`
	                // if there is no `:`, use dirProp = elProp
	                var parts = util_1.splitAtColon(bindConfig, [bindConfig, bindConfig]);
	                outputsMap[parts[0]] = parts[1];
	            });
	        }
	        return new CompileDirectiveMetadata({
	            type: type,
	            isComponent: lang_1.normalizeBool(isComponent),
	            dynamicLoadable: lang_1.normalizeBool(dynamicLoadable),
	            selector: selector,
	            exportAs: exportAs,
	            changeDetection: changeDetection,
	            inputs: inputsMap,
	            outputs: outputsMap,
	            hostListeners: hostListeners,
	            hostProperties: hostProperties,
	            hostAttributes: hostAttributes,
	            lifecycleHooks: lang_1.isPresent(lifecycleHooks) ? lifecycleHooks : [],
	            providers: providers,
	            viewProviders: viewProviders,
	            queries: queries,
	            viewQueries: viewQueries,
	            template: template
	        });
	    };
	    Object.defineProperty(CompileDirectiveMetadata.prototype, "identifier", {
	        get: function () { return this.type; },
	        enumerable: true,
	        configurable: true
	    });
	    CompileDirectiveMetadata.fromJson = function (data) {
	        return new CompileDirectiveMetadata({
	            isComponent: data['isComponent'],
	            dynamicLoadable: data['dynamicLoadable'],
	            selector: data['selector'],
	            exportAs: data['exportAs'],
	            type: lang_1.isPresent(data['type']) ? CompileTypeMetadata.fromJson(data['type']) : data['type'],
	            changeDetection: lang_1.isPresent(data['changeDetection']) ?
	                change_detection_1.CHANGE_DETECTION_STRATEGY_VALUES[data['changeDetection']] :
	                data['changeDetection'],
	            inputs: data['inputs'],
	            outputs: data['outputs'],
	            hostListeners: data['hostListeners'],
	            hostProperties: data['hostProperties'],
	            hostAttributes: data['hostAttributes'],
	            lifecycleHooks: data['lifecycleHooks'].map(function (hookValue) { return interfaces_1.LIFECYCLE_HOOKS_VALUES[hookValue]; }),
	            template: lang_1.isPresent(data['template']) ? CompileTemplateMetadata.fromJson(data['template']) :
	                data['template'],
	            providers: arrayFromJson(data['providers'], metadataFromJson),
	            viewProviders: arrayFromJson(data['viewProviders'], metadataFromJson),
	            queries: arrayFromJson(data['queries'], CompileQueryMetadata.fromJson),
	            viewQueries: arrayFromJson(data['viewQueries'], CompileQueryMetadata.fromJson)
	        });
	    };
	    CompileDirectiveMetadata.prototype.toJson = function () {
	        return {
	            'class': 'Directive',
	            'isComponent': this.isComponent,
	            'dynamicLoadable': this.dynamicLoadable,
	            'selector': this.selector,
	            'exportAs': this.exportAs,
	            'type': lang_1.isPresent(this.type) ? this.type.toJson() : this.type,
	            'changeDetection': lang_1.isPresent(this.changeDetection) ? lang_1.serializeEnum(this.changeDetection) :
	                this.changeDetection,
	            'inputs': this.inputs,
	            'outputs': this.outputs,
	            'hostListeners': this.hostListeners,
	            'hostProperties': this.hostProperties,
	            'hostAttributes': this.hostAttributes,
	            'lifecycleHooks': this.lifecycleHooks.map(function (hook) { return lang_1.serializeEnum(hook); }),
	            'template': lang_1.isPresent(this.template) ? this.template.toJson() : this.template,
	            'providers': arrayToJson(this.providers),
	            'viewProviders': arrayToJson(this.viewProviders),
	            'queries': arrayToJson(this.queries),
	            'viewQueries': arrayToJson(this.viewQueries)
	        };
	    };
	    return CompileDirectiveMetadata;
	}());
	exports.CompileDirectiveMetadata = CompileDirectiveMetadata;
	/**
	 * Construct {@link CompileDirectiveMetadata} from {@link ComponentTypeMetadata} and a selector.
	 */
	function createHostComponentMeta(componentType, componentSelector) {
	    var template = selector_1.CssSelector.parse(componentSelector)[0].getMatchingElementTemplate();
	    return CompileDirectiveMetadata.create({
	        type: new CompileTypeMetadata({
	            runtime: Object,
	            name: "Host" + componentType.name,
	            moduleUrl: componentType.moduleUrl,
	            isHost: true
	        }),
	        template: new CompileTemplateMetadata({ template: template, templateUrl: '', styles: [], styleUrls: [], ngContentSelectors: [] }),
	        changeDetection: change_detection_1.ChangeDetectionStrategy.Default,
	        inputs: [],
	        outputs: [],
	        host: {},
	        lifecycleHooks: [],
	        isComponent: true,
	        dynamicLoadable: false,
	        selector: '*',
	        providers: [],
	        viewProviders: [],
	        queries: [],
	        viewQueries: []
	    });
	}
	exports.createHostComponentMeta = createHostComponentMeta;
	var CompilePipeMetadata = (function () {
	    function CompilePipeMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, type = _b.type, name = _b.name, pure = _b.pure;
	        this.type = type;
	        this.name = name;
	        this.pure = lang_1.normalizeBool(pure);
	    }
	    Object.defineProperty(CompilePipeMetadata.prototype, "identifier", {
	        get: function () { return this.type; },
	        enumerable: true,
	        configurable: true
	    });
	    CompilePipeMetadata.fromJson = function (data) {
	        return new CompilePipeMetadata({
	            type: lang_1.isPresent(data['type']) ? CompileTypeMetadata.fromJson(data['type']) : data['type'],
	            name: data['name'],
	            pure: data['pure']
	        });
	    };
	    CompilePipeMetadata.prototype.toJson = function () {
	        return {
	            'class': 'Pipe',
	            'type': lang_1.isPresent(this.type) ? this.type.toJson() : null,
	            'name': this.name,
	            'pure': this.pure
	        };
	    };
	    return CompilePipeMetadata;
	}());
	exports.CompilePipeMetadata = CompilePipeMetadata;
	var _COMPILE_METADATA_FROM_JSON = {
	    'Directive': CompileDirectiveMetadata.fromJson,
	    'Pipe': CompilePipeMetadata.fromJson,
	    'Type': CompileTypeMetadata.fromJson,
	    'Provider': CompileProviderMetadata.fromJson,
	    'Identifier': CompileIdentifierMetadata.fromJson,
	    'Factory': CompileFactoryMetadata.fromJson
	};
	function arrayFromJson(obj, fn) {
	    return lang_1.isBlank(obj) ? null : obj.map(function (o) { return objFromJson(o, fn); });
	}
	function arrayToJson(obj) {
	    return lang_1.isBlank(obj) ? null : obj.map(objToJson);
	}
	function objFromJson(obj, fn) {
	    if (lang_1.isArray(obj))
	        return arrayFromJson(obj, fn);
	    if (lang_1.isString(obj) || lang_1.isBlank(obj) || lang_1.isBoolean(obj) || lang_1.isNumber(obj))
	        return obj;
	    return fn(obj);
	}
	function objToJson(obj) {
	    if (lang_1.isArray(obj))
	        return arrayToJson(obj);
	    if (lang_1.isString(obj) || lang_1.isBlank(obj) || lang_1.isBoolean(obj) || lang_1.isNumber(obj))
	        return obj;
	    return obj.toJson();
	}


/***/ },
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ function(module, exports) {

	'use strict';"use strict";
	(function (LifecycleHooks) {
	    LifecycleHooks[LifecycleHooks["OnInit"] = 0] = "OnInit";
	    LifecycleHooks[LifecycleHooks["OnDestroy"] = 1] = "OnDestroy";
	    LifecycleHooks[LifecycleHooks["DoCheck"] = 2] = "DoCheck";
	    LifecycleHooks[LifecycleHooks["OnChanges"] = 3] = "OnChanges";
	    LifecycleHooks[LifecycleHooks["AfterContentInit"] = 4] = "AfterContentInit";
	    LifecycleHooks[LifecycleHooks["AfterContentChecked"] = 5] = "AfterContentChecked";
	    LifecycleHooks[LifecycleHooks["AfterViewInit"] = 6] = "AfterViewInit";
	    LifecycleHooks[LifecycleHooks["AfterViewChecked"] = 7] = "AfterViewChecked";
	})(exports.LifecycleHooks || (exports.LifecycleHooks = {}));
	var LifecycleHooks = exports.LifecycleHooks;
	/**
	 * @internal
	 */
	exports.LIFECYCLE_HOOKS_VALUES = [
	    LifecycleHooks.OnInit,
	    LifecycleHooks.OnDestroy,
	    LifecycleHooks.DoCheck,
	    LifecycleHooks.OnChanges,
	    LifecycleHooks.AfterContentInit,
	    LifecycleHooks.AfterContentChecked,
	    LifecycleHooks.AfterViewInit,
	    LifecycleHooks.AfterViewChecked
	];


/***/ },
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var dom_adapter_1 = __webpack_require__(7);
	var di_1 = __webpack_require__(5);
	var collection_1 = __webpack_require__(2);
	var dom_tokens_1 = __webpack_require__(41);
	var SharedStylesHost = (function () {
	    function SharedStylesHost() {
	        /** @internal */
	        this._styles = [];
	        /** @internal */
	        this._stylesSet = new Set();
	    }
	    SharedStylesHost.prototype.addStyles = function (styles) {
	        var _this = this;
	        var additions = [];
	        styles.forEach(function (style) {
	            if (!collection_1.SetWrapper.has(_this._stylesSet, style)) {
	                _this._stylesSet.add(style);
	                _this._styles.push(style);
	                additions.push(style);
	            }
	        });
	        this.onStylesAdded(additions);
	    };
	    SharedStylesHost.prototype.onStylesAdded = function (additions) { };
	    SharedStylesHost.prototype.getAllStyles = function () { return this._styles; };
	    SharedStylesHost = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], SharedStylesHost);
	    return SharedStylesHost;
	}());
	exports.SharedStylesHost = SharedStylesHost;
	var DomSharedStylesHost = (function (_super) {
	    __extends(DomSharedStylesHost, _super);
	    function DomSharedStylesHost(doc) {
	        _super.call(this);
	        this._hostNodes = new Set();
	        this._hostNodes.add(doc.head);
	    }
	    /** @internal */
	    DomSharedStylesHost.prototype._addStylesToHost = function (styles, host) {
	        for (var i = 0; i < styles.length; i++) {
	            var style = styles[i];
	            dom_adapter_1.DOM.appendChild(host, dom_adapter_1.DOM.createStyleElement(style));
	        }
	    };
	    DomSharedStylesHost.prototype.addHost = function (hostNode) {
	        this._addStylesToHost(this._styles, hostNode);
	        this._hostNodes.add(hostNode);
	    };
	    DomSharedStylesHost.prototype.removeHost = function (hostNode) { collection_1.SetWrapper.delete(this._hostNodes, hostNode); };
	    DomSharedStylesHost.prototype.onStylesAdded = function (additions) {
	        var _this = this;
	        this._hostNodes.forEach(function (hostNode) { _this._addStylesToHost(additions, hostNode); });
	    };
	    DomSharedStylesHost = __decorate([
	        di_1.Injectable(),
	        __param(0, di_1.Inject(dom_tokens_1.DOCUMENT)), 
	        __metadata('design:paramtypes', [Object])
	    ], DomSharedStylesHost);
	    return DomSharedStylesHost;
	}(SharedStylesHost));
	exports.DomSharedStylesHost = DomSharedStylesHost;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var location_strategy_1 = __webpack_require__(42);
	var async_1 = __webpack_require__(6);
	var core_1 = __webpack_require__(3);
	/**
	 * `Location` is a service that applications can use to interact with a browser's URL.
	 * Depending on which {@link LocationStrategy} is used, `Location` will either persist
	 * to the URL's path or the URL's hash segment.
	 *
	 * Note: it's better to use {@link Router#navigate} service to trigger route changes. Use
	 * `Location` only if you need to interact with or create normalized URLs outside of
	 * routing.
	 *
	 * `Location` is responsible for normalizing the URL against the application's base href.
	 * A normalized URL is absolute from the URL host, includes the application's base href, and has no
	 * trailing slash:
	 * - `/my/app/user/123` is normalized
	 * - `my/app/user/123` **is not** normalized
	 * - `/my/app/user/123/` **is not** normalized
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig,
	 *   Location
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   constructor(location: Location) {
	 *     location.go('/foo');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	var Location = (function () {
	    function Location(platformStrategy) {
	        var _this = this;
	        this.platformStrategy = platformStrategy;
	        /** @internal */
	        this._subject = new async_1.EventEmitter();
	        var browserBaseHref = this.platformStrategy.getBaseHref();
	        this._baseHref = stripTrailingSlash(stripIndexHtml(browserBaseHref));
	        this.platformStrategy.onPopState(function (ev) {
	            async_1.ObservableWrapper.callEmit(_this._subject, { 'url': _this.path(), 'pop': true, 'type': ev.type });
	        });
	    }
	    /**
	     * Returns the normalized URL path.
	     */
	    Location.prototype.path = function () { return this.normalize(this.platformStrategy.path()); };
	    /**
	     * Given a string representing a URL, returns the normalized URL path without leading or
	     * trailing slashes
	     */
	    Location.prototype.normalize = function (url) {
	        return stripTrailingSlash(_stripBaseHref(this._baseHref, stripIndexHtml(url)));
	    };
	    /**
	     * Given a string representing a URL, returns the platform-specific external URL path.
	     * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
	     * before normalizing. This method will also add a hash if `HashLocationStrategy` is
	     * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
	     */
	    Location.prototype.prepareExternalUrl = function (url) {
	        if (url.length > 0 && !url.startsWith('/')) {
	            url = '/' + url;
	        }
	        return this.platformStrategy.prepareExternalUrl(url);
	    };
	    // TODO: rename this method to pushState
	    /**
	     * Changes the browsers URL to the normalized version of the given URL, and pushes a
	     * new item onto the platform's history.
	     */
	    Location.prototype.go = function (path, query) {
	        if (query === void 0) { query = ''; }
	        this.platformStrategy.pushState(null, '', path, query);
	    };
	    /**
	     * Changes the browsers URL to the normalized version of the given URL, and replaces
	     * the top item on the platform's history stack.
	     */
	    Location.prototype.replaceState = function (path, query) {
	        if (query === void 0) { query = ''; }
	        this.platformStrategy.replaceState(null, '', path, query);
	    };
	    /**
	     * Navigates forward in the platform's history.
	     */
	    Location.prototype.forward = function () { this.platformStrategy.forward(); };
	    /**
	     * Navigates back in the platform's history.
	     */
	    Location.prototype.back = function () { this.platformStrategy.back(); };
	    /**
	     * Subscribe to the platform's `popState` events.
	     */
	    Location.prototype.subscribe = function (onNext, onThrow, onReturn) {
	        if (onThrow === void 0) { onThrow = null; }
	        if (onReturn === void 0) { onReturn = null; }
	        return async_1.ObservableWrapper.subscribe(this._subject, onNext, onThrow, onReturn);
	    };
	    Location = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [location_strategy_1.LocationStrategy])
	    ], Location);
	    return Location;
	}());
	exports.Location = Location;
	function _stripBaseHref(baseHref, url) {
	    if (baseHref.length > 0 && url.startsWith(baseHref)) {
	        return url.substring(baseHref.length);
	    }
	    return url;
	}
	function stripIndexHtml(url) {
	    if (/\/index.html$/g.test(url)) {
	        // '/index.html'.length == 11
	        return url.substring(0, url.length - 11);
	    }
	    return url;
	}
	function stripTrailingSlash(url) {
	    if (/\/$/g.test(url)) {
	        url = url.substring(0, url.length - 1);
	    }
	    return url;
	}


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(1);
	var __make_dart_analyzer_happy = null;
	/**
	 * The `RouteConfig` decorator defines routes for a given component.
	 *
	 * It takes an array of {@link RouteDefinition}s.
	 */
	var RouteConfig = (function () {
	    function RouteConfig(configs) {
	        this.configs = configs;
	    }
	    RouteConfig = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Array])
	    ], RouteConfig);
	    return RouteConfig;
	}());
	exports.RouteConfig = RouteConfig;
	var AbstractRoute = (function () {
	    function AbstractRoute(_a) {
	        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data;
	        this.name = name;
	        this.useAsDefault = useAsDefault;
	        this.path = path;
	        this.regex = regex;
	        this.serializer = serializer;
	        this.data = data;
	    }
	    AbstractRoute = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], AbstractRoute);
	    return AbstractRoute;
	}());
	exports.AbstractRoute = AbstractRoute;
	/**
	 * `Route` is a type of {@link RouteDefinition} used to route a path to a component.
	 *
	 * It has the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `component` a component type.
	 * - `name` is an optional `CamelCase` string representing the name of the route.
	 * - `data` is an optional property of any type representing arbitrary route metadata for the given
	 * route. It is injectable via {@link RouteData}.
	 * - `useAsDefault` is a boolean value. If `true`, the child route will be navigated to if no child
	 * route is specified during the navigation.
	 *
	 * ### Example
	 * ```
	 * import {RouteConfig, Route} from 'angular2/router';
	 *
	 * @RouteConfig([
	 *   new Route({path: '/home', component: HomeCmp, name: 'HomeCmp' })
	 * ])
	 * class MyApp {}
	 * ```
	 */
	var Route = (function (_super) {
	    __extends(Route, _super);
	    function Route(_a) {
	        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, component = _a.component;
	        _super.call(this, {
	            name: name,
	            useAsDefault: useAsDefault,
	            path: path,
	            regex: regex,
	            serializer: serializer,
	            data: data
	        });
	        this.aux = null;
	        this.component = component;
	    }
	    Route = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], Route);
	    return Route;
	}(AbstractRoute));
	exports.Route = Route;
	/**
	 * `AuxRoute` is a type of {@link RouteDefinition} used to define an auxiliary route.
	 *
	 * It takes an object with the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `component` a component type.
	 * - `name` is an optional `CamelCase` string representing the name of the route.
	 * - `data` is an optional property of any type representing arbitrary route metadata for the given
	 * route. It is injectable via {@link RouteData}.
	 *
	 * ### Example
	 * ```
	 * import {RouteConfig, AuxRoute} from 'angular2/router';
	 *
	 * @RouteConfig([
	 *   new AuxRoute({path: '/home', component: HomeCmp})
	 * ])
	 * class MyApp {}
	 * ```
	 */
	var AuxRoute = (function (_super) {
	    __extends(AuxRoute, _super);
	    function AuxRoute(_a) {
	        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, component = _a.component;
	        _super.call(this, {
	            name: name,
	            useAsDefault: useAsDefault,
	            path: path,
	            regex: regex,
	            serializer: serializer,
	            data: data
	        });
	        this.component = component;
	    }
	    AuxRoute = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], AuxRoute);
	    return AuxRoute;
	}(AbstractRoute));
	exports.AuxRoute = AuxRoute;
	/**
	 * `AsyncRoute` is a type of {@link RouteDefinition} used to route a path to an asynchronously
	 * loaded component.
	 *
	 * It has the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `loader` is a function that returns a promise that resolves to a component.
	 * - `name` is an optional `CamelCase` string representing the name of the route.
	 * - `data` is an optional property of any type representing arbitrary route metadata for the given
	 * route. It is injectable via {@link RouteData}.
	 * - `useAsDefault` is a boolean value. If `true`, the child route will be navigated to if no child
	 * route is specified during the navigation.
	 *
	 * ### Example
	 * ```
	 * import {RouteConfig, AsyncRoute} from 'angular2/router';
	 *
	 * @RouteConfig([
	 *   new AsyncRoute({path: '/home', loader: () => Promise.resolve(MyLoadedCmp), name:
	 * 'MyLoadedCmp'})
	 * ])
	 * class MyApp {}
	 * ```
	 */
	var AsyncRoute = (function (_super) {
	    __extends(AsyncRoute, _super);
	    function AsyncRoute(_a) {
	        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, loader = _a.loader;
	        _super.call(this, {
	            name: name,
	            useAsDefault: useAsDefault,
	            path: path,
	            regex: regex,
	            serializer: serializer,
	            data: data
	        });
	        this.aux = null;
	        this.loader = loader;
	    }
	    AsyncRoute = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], AsyncRoute);
	    return AsyncRoute;
	}(AbstractRoute));
	exports.AsyncRoute = AsyncRoute;
	/**
	 * `Redirect` is a type of {@link RouteDefinition} used to route a path to a canonical route.
	 *
	 * It has the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `redirectTo` is an array representing the link DSL.
	 *
	 * Note that redirects **do not** affect how links are generated. For that, see the `useAsDefault`
	 * option.
	 *
	 * ### Example
	 * ```
	 * import {RouteConfig, Route, Redirect} from 'angular2/router';
	 *
	 * @RouteConfig([
	 *   new Redirect({path: '/', redirectTo: ['/Home'] }),
	 *   new Route({path: '/home', component: HomeCmp, name: 'Home'})
	 * ])
	 * class MyApp {}
	 * ```
	 */
	var Redirect = (function (_super) {
	    __extends(Redirect, _super);
	    function Redirect(_a) {
	        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, redirectTo = _a.redirectTo;
	        _super.call(this, {
	            name: name,
	            useAsDefault: useAsDefault,
	            path: path,
	            regex: regex,
	            serializer: serializer,
	            data: data
	        });
	        this.redirectTo = redirectTo;
	    }
	    Redirect = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], Redirect);
	    return Redirect;
	}(AbstractRoute));
	exports.Redirect = Redirect;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var async_1 = __webpack_require__(6);
	var collection_1 = __webpack_require__(2);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var core_1 = __webpack_require__(3);
	var route_registry_1 = __webpack_require__(109);
	var location_1 = __webpack_require__(63);
	var route_lifecycle_reflector_1 = __webpack_require__(182);
	var _resolveToTrue = async_1.PromiseWrapper.resolve(true);
	var _resolveToFalse = async_1.PromiseWrapper.resolve(false);
	/**
	 * The `Router` is responsible for mapping URLs to components.
	 *
	 * You can see the state of the router by inspecting the read-only field `router.navigating`.
	 * This may be useful for showing a spinner, for instance.
	 *
	 * ## Concepts
	 *
	 * Routers and component instances have a 1:1 correspondence.
	 *
	 * The router holds reference to a number of {@link RouterOutlet}.
	 * An outlet is a placeholder that the router dynamically fills in depending on the current URL.
	 *
	 * When the router navigates from a URL, it must first recognize it and serialize it into an
	 * `Instruction`.
	 * The router uses the `RouteRegistry` to get an `Instruction`.
	 */
	var Router = (function () {
	    function Router(registry, parent, hostComponent, root) {
	        this.registry = registry;
	        this.parent = parent;
	        this.hostComponent = hostComponent;
	        this.root = root;
	        this.navigating = false;
	        /**
	         * The current `Instruction` for the router
	         */
	        this.currentInstruction = null;
	        this._currentNavigation = _resolveToTrue;
	        this._outlet = null;
	        this._auxRouters = new collection_1.Map();
	        this._subject = new async_1.EventEmitter();
	    }
	    /**
	     * Constructs a child router. You probably don't need to use this unless you're writing a reusable
	     * component.
	     */
	    Router.prototype.childRouter = function (hostComponent) {
	        return this._childRouter = new ChildRouter(this, hostComponent);
	    };
	    /**
	     * Constructs a child router. You probably don't need to use this unless you're writing a reusable
	     * component.
	     */
	    Router.prototype.auxRouter = function (hostComponent) { return new ChildRouter(this, hostComponent); };
	    /**
	     * Register an outlet to be notified of primary route changes.
	     *
	     * You probably don't need to use this unless you're writing a reusable component.
	     */
	    Router.prototype.registerPrimaryOutlet = function (outlet) {
	        if (lang_1.isPresent(outlet.name)) {
	            throw new exceptions_1.BaseException("registerPrimaryOutlet expects to be called with an unnamed outlet.");
	        }
	        if (lang_1.isPresent(this._outlet)) {
	            throw new exceptions_1.BaseException("Primary outlet is already registered.");
	        }
	        this._outlet = outlet;
	        if (lang_1.isPresent(this.currentInstruction)) {
	            return this.commit(this.currentInstruction, false);
	        }
	        return _resolveToTrue;
	    };
	    /**
	     * Unregister an outlet (because it was destroyed, etc).
	     *
	     * You probably don't need to use this unless you're writing a custom outlet implementation.
	     */
	    Router.prototype.unregisterPrimaryOutlet = function (outlet) {
	        if (lang_1.isPresent(outlet.name)) {
	            throw new exceptions_1.BaseException("registerPrimaryOutlet expects to be called with an unnamed outlet.");
	        }
	        this._outlet = null;
	    };
	    /**
	     * Register an outlet to notified of auxiliary route changes.
	     *
	     * You probably don't need to use this unless you're writing a reusable component.
	     */
	    Router.prototype.registerAuxOutlet = function (outlet) {
	        var outletName = outlet.name;
	        if (lang_1.isBlank(outletName)) {
	            throw new exceptions_1.BaseException("registerAuxOutlet expects to be called with an outlet with a name.");
	        }
	        var router = this.auxRouter(this.hostComponent);
	        this._auxRouters.set(outletName, router);
	        router._outlet = outlet;
	        var auxInstruction;
	        if (lang_1.isPresent(this.currentInstruction) &&
	            lang_1.isPresent(auxInstruction = this.currentInstruction.auxInstruction[outletName])) {
	            return router.commit(auxInstruction);
	        }
	        return _resolveToTrue;
	    };
	    /**
	     * Given an instruction, returns `true` if the instruction is currently active,
	     * otherwise `false`.
	     */
	    Router.prototype.isRouteActive = function (instruction) {
	        var _this = this;
	        var router = this;
	        if (lang_1.isBlank(this.currentInstruction)) {
	            return false;
	        }
	        // `instruction` corresponds to the root router
	        while (lang_1.isPresent(router.parent) && lang_1.isPresent(instruction.child)) {
	            router = router.parent;
	            instruction = instruction.child;
	        }
	        if (lang_1.isBlank(instruction.component) || lang_1.isBlank(this.currentInstruction.component) ||
	            this.currentInstruction.component.routeName != instruction.component.routeName) {
	            return false;
	        }
	        var paramEquals = true;
	        if (lang_1.isPresent(this.currentInstruction.component.params)) {
	            collection_1.StringMapWrapper.forEach(instruction.component.params, function (value, key) {
	                if (_this.currentInstruction.component.params[key] !== value) {
	                    paramEquals = false;
	                }
	            });
	        }
	        return paramEquals;
	    };
	    /**
	     * Dynamically update the routing configuration and trigger a navigation.
	     *
	     * ### Usage
	     *
	     * ```
	     * router.config([
	     *   { 'path': '/', 'component': IndexComp },
	     *   { 'path': '/user/:id', 'component': UserComp },
	     * ]);
	     * ```
	     */
	    Router.prototype.config = function (definitions) {
	        var _this = this;
	        definitions.forEach(function (routeDefinition) { _this.registry.config(_this.hostComponent, routeDefinition); });
	        return this.renavigate();
	    };
	    /**
	     * Navigate based on the provided Route Link DSL. It's preferred to navigate with this method
	     * over `navigateByUrl`.
	     *
	     * ### Usage
	     *
	     * This method takes an array representing the Route Link DSL:
	     * ```
	     * ['./MyCmp', {param: 3}]
	     * ```
	     * See the {@link RouterLink} directive for more.
	     */
	    Router.prototype.navigate = function (linkParams) {
	        var instruction = this.generate(linkParams);
	        return this.navigateByInstruction(instruction, false);
	    };
	    /**
	     * Navigate to a URL. Returns a promise that resolves when navigation is complete.
	     * It's preferred to navigate with `navigate` instead of this method, since URLs are more brittle.
	     *
	     * If the given URL begins with a `/`, router will navigate absolutely.
	     * If the given URL does not begin with `/`, the router will navigate relative to this component.
	     */
	    Router.prototype.navigateByUrl = function (url, _skipLocationChange) {
	        var _this = this;
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        return this._currentNavigation = this._currentNavigation.then(function (_) {
	            _this.lastNavigationAttempt = url;
	            _this._startNavigating();
	            return _this._afterPromiseFinishNavigating(_this.recognize(url).then(function (instruction) {
	                if (lang_1.isBlank(instruction)) {
	                    return false;
	                }
	                return _this._navigate(instruction, _skipLocationChange);
	            }));
	        });
	    };
	    /**
	     * Navigate via the provided instruction. Returns a promise that resolves when navigation is
	     * complete.
	     */
	    Router.prototype.navigateByInstruction = function (instruction, _skipLocationChange) {
	        var _this = this;
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        if (lang_1.isBlank(instruction)) {
	            return _resolveToFalse;
	        }
	        return this._currentNavigation = this._currentNavigation.then(function (_) {
	            _this._startNavigating();
	            return _this._afterPromiseFinishNavigating(_this._navigate(instruction, _skipLocationChange));
	        });
	    };
	    /** @internal */
	    Router.prototype._settleInstruction = function (instruction) {
	        var _this = this;
	        return instruction.resolveComponent().then(function (_) {
	            var unsettledInstructions = [];
	            if (lang_1.isPresent(instruction.component)) {
	                instruction.component.reuse = false;
	            }
	            if (lang_1.isPresent(instruction.child)) {
	                unsettledInstructions.push(_this._settleInstruction(instruction.child));
	            }
	            collection_1.StringMapWrapper.forEach(instruction.auxInstruction, function (instruction, _) {
	                unsettledInstructions.push(_this._settleInstruction(instruction));
	            });
	            return async_1.PromiseWrapper.all(unsettledInstructions);
	        });
	    };
	    /** @internal */
	    Router.prototype._navigate = function (instruction, _skipLocationChange) {
	        var _this = this;
	        return this._settleInstruction(instruction)
	            .then(function (_) { return _this._routerCanReuse(instruction); })
	            .then(function (_) { return _this._canActivate(instruction); })
	            .then(function (result) {
	            if (!result) {
	                return false;
	            }
	            return _this._routerCanDeactivate(instruction)
	                .then(function (result) {
	                if (result) {
	                    return _this.commit(instruction, _skipLocationChange)
	                        .then(function (_) {
	                        _this._emitNavigationFinish(instruction.toRootUrl());
	                        return true;
	                    });
	                }
	            });
	        });
	    };
	    Router.prototype._emitNavigationFinish = function (url) { async_1.ObservableWrapper.callEmit(this._subject, url); };
	    /** @internal */
	    Router.prototype._emitNavigationFail = function (url) { async_1.ObservableWrapper.callError(this._subject, url); };
	    Router.prototype._afterPromiseFinishNavigating = function (promise) {
	        var _this = this;
	        return async_1.PromiseWrapper.catchError(promise.then(function (_) { return _this._finishNavigating(); }), function (err) {
	            _this._finishNavigating();
	            throw err;
	        });
	    };
	    /*
	     * Recursively set reuse flags
	     */
	    /** @internal */
	    Router.prototype._routerCanReuse = function (instruction) {
	        var _this = this;
	        if (lang_1.isBlank(this._outlet)) {
	            return _resolveToFalse;
	        }
	        if (lang_1.isBlank(instruction.component)) {
	            return _resolveToTrue;
	        }
	        return this._outlet.routerCanReuse(instruction.component)
	            .then(function (result) {
	            instruction.component.reuse = result;
	            if (result && lang_1.isPresent(_this._childRouter) && lang_1.isPresent(instruction.child)) {
	                return _this._childRouter._routerCanReuse(instruction.child);
	            }
	        });
	    };
	    Router.prototype._canActivate = function (nextInstruction) {
	        return canActivateOne(nextInstruction, this.currentInstruction);
	    };
	    Router.prototype._routerCanDeactivate = function (instruction) {
	        var _this = this;
	        if (lang_1.isBlank(this._outlet)) {
	            return _resolveToTrue;
	        }
	        var next;
	        var childInstruction = null;
	        var reuse = false;
	        var componentInstruction = null;
	        if (lang_1.isPresent(instruction)) {
	            childInstruction = instruction.child;
	            componentInstruction = instruction.component;
	            reuse = lang_1.isBlank(instruction.component) || instruction.component.reuse;
	        }
	        if (reuse) {
	            next = _resolveToTrue;
	        }
	        else {
	            next = this._outlet.routerCanDeactivate(componentInstruction);
	        }
	        // TODO: aux route lifecycle hooks
	        return next.then(function (result) {
	            if (result == false) {
	                return false;
	            }
	            if (lang_1.isPresent(_this._childRouter)) {
	                // TODO: ideally, this closure would map to async-await in Dart.
	                // For now, casting to any to suppress an error.
	                return _this._childRouter._routerCanDeactivate(childInstruction);
	            }
	            return true;
	        });
	    };
	    /**
	     * Updates this router and all descendant routers according to the given instruction
	     */
	    Router.prototype.commit = function (instruction, _skipLocationChange) {
	        var _this = this;
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        this.currentInstruction = instruction;
	        var next = _resolveToTrue;
	        if (lang_1.isPresent(this._outlet) && lang_1.isPresent(instruction.component)) {
	            var componentInstruction = instruction.component;
	            if (componentInstruction.reuse) {
	                next = this._outlet.reuse(componentInstruction);
	            }
	            else {
	                next =
	                    this.deactivate(instruction).then(function (_) { return _this._outlet.activate(componentInstruction); });
	            }
	            if (lang_1.isPresent(instruction.child)) {
	                next = next.then(function (_) {
	                    if (lang_1.isPresent(_this._childRouter)) {
	                        return _this._childRouter.commit(instruction.child);
	                    }
	                });
	            }
	        }
	        var promises = [];
	        this._auxRouters.forEach(function (router, name) {
	            if (lang_1.isPresent(instruction.auxInstruction[name])) {
	                promises.push(router.commit(instruction.auxInstruction[name]));
	            }
	        });
	        return next.then(function (_) { return async_1.PromiseWrapper.all(promises); });
	    };
	    /** @internal */
	    Router.prototype._startNavigating = function () { this.navigating = true; };
	    /** @internal */
	    Router.prototype._finishNavigating = function () { this.navigating = false; };
	    /**
	     * Subscribe to URL updates from the router
	     */
	    Router.prototype.subscribe = function (onNext, onError) {
	        return async_1.ObservableWrapper.subscribe(this._subject, onNext, onError);
	    };
	    /**
	     * Removes the contents of this router's outlet and all descendant outlets
	     */
	    Router.prototype.deactivate = function (instruction) {
	        var _this = this;
	        var childInstruction = null;
	        var componentInstruction = null;
	        if (lang_1.isPresent(instruction)) {
	            childInstruction = instruction.child;
	            componentInstruction = instruction.component;
	        }
	        var next = _resolveToTrue;
	        if (lang_1.isPresent(this._childRouter)) {
	            next = this._childRouter.deactivate(childInstruction);
	        }
	        if (lang_1.isPresent(this._outlet)) {
	            next = next.then(function (_) { return _this._outlet.deactivate(componentInstruction); });
	        }
	        // TODO: handle aux routes
	        return next;
	    };
	    /**
	     * Given a URL, returns an instruction representing the component graph
	     */
	    Router.prototype.recognize = function (url) {
	        var ancestorComponents = this._getAncestorInstructions();
	        return this.registry.recognize(url, ancestorComponents);
	    };
	    Router.prototype._getAncestorInstructions = function () {
	        var ancestorInstructions = [this.currentInstruction];
	        var ancestorRouter = this;
	        while (lang_1.isPresent(ancestorRouter = ancestorRouter.parent)) {
	            ancestorInstructions.unshift(ancestorRouter.currentInstruction);
	        }
	        return ancestorInstructions;
	    };
	    /**
	     * Navigates to either the last URL successfully navigated to, or the last URL requested if the
	     * router has yet to successfully navigate.
	     */
	    Router.prototype.renavigate = function () {
	        if (lang_1.isBlank(this.lastNavigationAttempt)) {
	            return this._currentNavigation;
	        }
	        return this.navigateByUrl(this.lastNavigationAttempt);
	    };
	    /**
	     * Generate an `Instruction` based on the provided Route Link DSL.
	     */
	    Router.prototype.generate = function (linkParams) {
	        var ancestorInstructions = this._getAncestorInstructions();
	        return this.registry.generate(linkParams, ancestorInstructions);
	    };
	    Router = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [route_registry_1.RouteRegistry, Router, Object, Router])
	    ], Router);
	    return Router;
	}());
	exports.Router = Router;
	var RootRouter = (function (_super) {
	    __extends(RootRouter, _super);
	    function RootRouter(registry, location, primaryComponent) {
	        var _this = this;
	        _super.call(this, registry, null, primaryComponent);
	        this.root = this;
	        this._location = location;
	        this._locationSub = this._location.subscribe(function (change) {
	            // we call recognize ourselves
	            _this.recognize(change['url'])
	                .then(function (instruction) {
	                if (lang_1.isPresent(instruction)) {
	                    _this.navigateByInstruction(instruction, lang_1.isPresent(change['pop']))
	                        .then(function (_) {
	                        // this is a popstate event; no need to change the URL
	                        if (lang_1.isPresent(change['pop']) && change['type'] != 'hashchange') {
	                            return;
	                        }
	                        var emitPath = instruction.toUrlPath();
	                        var emitQuery = instruction.toUrlQuery();
	                        if (emitPath.length > 0 && emitPath[0] != '/') {
	                            emitPath = '/' + emitPath;
	                        }
	                        // We've opted to use pushstate and popState APIs regardless of whether you
	                        // an app uses HashLocationStrategy or PathLocationStrategy.
	                        // However, apps that are migrating might have hash links that operate outside
	                        // angular to which routing must respond.
	                        // Therefore we know that all hashchange events occur outside Angular.
	                        // To support these cases where we respond to hashchanges and redirect as a
	                        // result, we need to replace the top item on the stack.
	                        if (change['type'] == 'hashchange') {
	                            if (instruction.toRootUrl() != _this._location.path()) {
	                                _this._location.replaceState(emitPath, emitQuery);
	                            }
	                        }
	                        else {
	                            _this._location.go(emitPath, emitQuery);
	                        }
	                    });
	                }
	                else {
	                    _this._emitNavigationFail(change['url']);
	                }
	            });
	        });
	        this.registry.configFromComponent(primaryComponent);
	        this.navigateByUrl(location.path());
	    }
	    RootRouter.prototype.commit = function (instruction, _skipLocationChange) {
	        var _this = this;
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        var emitPath = instruction.toUrlPath();
	        var emitQuery = instruction.toUrlQuery();
	        if (emitPath.length > 0 && emitPath[0] != '/') {
	            emitPath = '/' + emitPath;
	        }
	        var promise = _super.prototype.commit.call(this, instruction);
	        if (!_skipLocationChange) {
	            promise = promise.then(function (_) { _this._location.go(emitPath, emitQuery); });
	        }
	        return promise;
	    };
	    RootRouter.prototype.dispose = function () {
	        if (lang_1.isPresent(this._locationSub)) {
	            async_1.ObservableWrapper.dispose(this._locationSub);
	            this._locationSub = null;
	        }
	    };
	    RootRouter = __decorate([
	        core_1.Injectable(),
	        __param(2, core_1.Inject(route_registry_1.ROUTER_PRIMARY_COMPONENT)), 
	        __metadata('design:paramtypes', [route_registry_1.RouteRegistry, location_1.Location, lang_1.Type])
	    ], RootRouter);
	    return RootRouter;
	}(Router));
	exports.RootRouter = RootRouter;
	var ChildRouter = (function (_super) {
	    __extends(ChildRouter, _super);
	    function ChildRouter(parent, hostComponent) {
	        _super.call(this, parent.registry, parent, hostComponent, parent.root);
	        this.parent = parent;
	    }
	    ChildRouter.prototype.navigateByUrl = function (url, _skipLocationChange) {
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        // Delegate navigation to the root router
	        return this.parent.navigateByUrl(url, _skipLocationChange);
	    };
	    ChildRouter.prototype.navigateByInstruction = function (instruction, _skipLocationChange) {
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        // Delegate navigation to the root router
	        return this.parent.navigateByInstruction(instruction, _skipLocationChange);
	    };
	    return ChildRouter;
	}(Router));
	function canActivateOne(nextInstruction, prevInstruction) {
	    var next = _resolveToTrue;
	    if (lang_1.isBlank(nextInstruction.component)) {
	        return next;
	    }
	    if (lang_1.isPresent(nextInstruction.child)) {
	        next = canActivateOne(nextInstruction.child, lang_1.isPresent(prevInstruction) ? prevInstruction.child : null);
	    }
	    return next.then(function (result) {
	        if (result == false) {
	            return false;
	        }
	        if (nextInstruction.component.reuse) {
	            return true;
	        }
	        var hook = route_lifecycle_reflector_1.getCanActivateHook(nextInstruction.component.componentType);
	        if (lang_1.isPresent(hook)) {
	            return hook(nextInstruction.component, lang_1.isPresent(prevInstruction) ? prevInstruction.component : null);
	        }
	        return true;
	    });
	}


/***/ },
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var HtmlTextAst = (function () {
	    function HtmlTextAst(value, sourceSpan) {
	        this.value = value;
	        this.sourceSpan = sourceSpan;
	    }
	    HtmlTextAst.prototype.visit = function (visitor, context) { return visitor.visitText(this, context); };
	    return HtmlTextAst;
	}());
	exports.HtmlTextAst = HtmlTextAst;
	var HtmlAttrAst = (function () {
	    function HtmlAttrAst(name, value, sourceSpan) {
	        this.name = name;
	        this.value = value;
	        this.sourceSpan = sourceSpan;
	    }
	    HtmlAttrAst.prototype.visit = function (visitor, context) { return visitor.visitAttr(this, context); };
	    return HtmlAttrAst;
	}());
	exports.HtmlAttrAst = HtmlAttrAst;
	var HtmlElementAst = (function () {
	    function HtmlElementAst(name, attrs, children, sourceSpan, startSourceSpan, endSourceSpan) {
	        this.name = name;
	        this.attrs = attrs;
	        this.children = children;
	        this.sourceSpan = sourceSpan;
	        this.startSourceSpan = startSourceSpan;
	        this.endSourceSpan = endSourceSpan;
	    }
	    HtmlElementAst.prototype.visit = function (visitor, context) { return visitor.visitElement(this, context); };
	    return HtmlElementAst;
	}());
	exports.HtmlElementAst = HtmlElementAst;
	var HtmlCommentAst = (function () {
	    function HtmlCommentAst(value, sourceSpan) {
	        this.value = value;
	        this.sourceSpan = sourceSpan;
	    }
	    HtmlCommentAst.prototype.visit = function (visitor, context) { return visitor.visitComment(this, context); };
	    return HtmlCommentAst;
	}());
	exports.HtmlCommentAst = HtmlCommentAst;
	function htmlVisitAll(visitor, asts, context) {
	    if (context === void 0) { context = null; }
	    var result = [];
	    asts.forEach(function (ast) {
	        var astResult = ast.visit(visitor, context);
	        if (lang_1.isPresent(astResult)) {
	            result.push(astResult);
	        }
	    });
	    return result;
	}
	exports.htmlVisitAll = htmlVisitAll;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(2);
	var html_ast_1 = __webpack_require__(82);
	var di_1 = __webpack_require__(5);
	var html_lexer_1 = __webpack_require__(245);
	var parse_util_1 = __webpack_require__(84);
	var html_tags_1 = __webpack_require__(30);
	var HtmlTreeError = (function (_super) {
	    __extends(HtmlTreeError, _super);
	    function HtmlTreeError(elementName, span, msg) {
	        _super.call(this, span, msg);
	        this.elementName = elementName;
	    }
	    HtmlTreeError.create = function (elementName, span, msg) {
	        return new HtmlTreeError(elementName, span, msg);
	    };
	    return HtmlTreeError;
	}(parse_util_1.ParseError));
	exports.HtmlTreeError = HtmlTreeError;
	var HtmlParseTreeResult = (function () {
	    function HtmlParseTreeResult(rootNodes, errors) {
	        this.rootNodes = rootNodes;
	        this.errors = errors;
	    }
	    return HtmlParseTreeResult;
	}());
	exports.HtmlParseTreeResult = HtmlParseTreeResult;
	var HtmlParser = (function () {
	    function HtmlParser() {
	    }
	    HtmlParser.prototype.parse = function (sourceContent, sourceUrl) {
	        var tokensAndErrors = html_lexer_1.tokenizeHtml(sourceContent, sourceUrl);
	        var treeAndErrors = new TreeBuilder(tokensAndErrors.tokens).build();
	        return new HtmlParseTreeResult(treeAndErrors.rootNodes, tokensAndErrors.errors
	            .concat(treeAndErrors.errors));
	    };
	    HtmlParser = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], HtmlParser);
	    return HtmlParser;
	}());
	exports.HtmlParser = HtmlParser;
	var TreeBuilder = (function () {
	    function TreeBuilder(tokens) {
	        this.tokens = tokens;
	        this.index = -1;
	        this.rootNodes = [];
	        this.errors = [];
	        this.elementStack = [];
	        this._advance();
	    }
	    TreeBuilder.prototype.build = function () {
	        while (this.peek.type !== html_lexer_1.HtmlTokenType.EOF) {
	            if (this.peek.type === html_lexer_1.HtmlTokenType.TAG_OPEN_START) {
	                this._consumeStartTag(this._advance());
	            }
	            else if (this.peek.type === html_lexer_1.HtmlTokenType.TAG_CLOSE) {
	                this._consumeEndTag(this._advance());
	            }
	            else if (this.peek.type === html_lexer_1.HtmlTokenType.CDATA_START) {
	                this._closeVoidElement();
	                this._consumeCdata(this._advance());
	            }
	            else if (this.peek.type === html_lexer_1.HtmlTokenType.COMMENT_START) {
	                this._closeVoidElement();
	                this._consumeComment(this._advance());
	            }
	            else if (this.peek.type === html_lexer_1.HtmlTokenType.TEXT ||
	                this.peek.type === html_lexer_1.HtmlTokenType.RAW_TEXT ||
	                this.peek.type === html_lexer_1.HtmlTokenType.ESCAPABLE_RAW_TEXT) {
	                this._closeVoidElement();
	                this._consumeText(this._advance());
	            }
	            else {
	                // Skip all other tokens...
	                this._advance();
	            }
	        }
	        return new HtmlParseTreeResult(this.rootNodes, this.errors);
	    };
	    TreeBuilder.prototype._advance = function () {
	        var prev = this.peek;
	        if (this.index < this.tokens.length - 1) {
	            // Note: there is always an EOF token at the end
	            this.index++;
	        }
	        this.peek = this.tokens[this.index];
	        return prev;
	    };
	    TreeBuilder.prototype._advanceIf = function (type) {
	        if (this.peek.type === type) {
	            return this._advance();
	        }
	        return null;
	    };
	    TreeBuilder.prototype._consumeCdata = function (startToken) {
	        this._consumeText(this._advance());
	        this._advanceIf(html_lexer_1.HtmlTokenType.CDATA_END);
	    };
	    TreeBuilder.prototype._consumeComment = function (token) {
	        var text = this._advanceIf(html_lexer_1.HtmlTokenType.RAW_TEXT);
	        this._advanceIf(html_lexer_1.HtmlTokenType.COMMENT_END);
	        var value = lang_1.isPresent(text) ? text.parts[0].trim() : null;
	        this._addToParent(new html_ast_1.HtmlCommentAst(value, token.sourceSpan));
	    };
	    TreeBuilder.prototype._consumeText = function (token) {
	        var text = token.parts[0];
	        if (text.length > 0 && text[0] == '\n') {
	            var parent_1 = this._getParentElement();
	            if (lang_1.isPresent(parent_1) && parent_1.children.length == 0 &&
	                html_tags_1.getHtmlTagDefinition(parent_1.name).ignoreFirstLf) {
	                text = text.substring(1);
	            }
	        }
	        if (text.length > 0) {
	            this._addToParent(new html_ast_1.HtmlTextAst(text, token.sourceSpan));
	        }
	    };
	    TreeBuilder.prototype._closeVoidElement = function () {
	        if (this.elementStack.length > 0) {
	            var el = collection_1.ListWrapper.last(this.elementStack);
	            if (html_tags_1.getHtmlTagDefinition(el.name).isVoid) {
	                this.elementStack.pop();
	            }
	        }
	    };
	    TreeBuilder.prototype._consumeStartTag = function (startTagToken) {
	        var prefix = startTagToken.parts[0];
	        var name = startTagToken.parts[1];
	        var attrs = [];
	        while (this.peek.type === html_lexer_1.HtmlTokenType.ATTR_NAME) {
	            attrs.push(this._consumeAttr(this._advance()));
	        }
	        var fullName = getElementFullName(prefix, name, this._getParentElement());
	        var selfClosing = false;
	        // Note: There could have been a tokenizer error
	        // so that we don't get a token for the end tag...
	        if (this.peek.type === html_lexer_1.HtmlTokenType.TAG_OPEN_END_VOID) {
	            this._advance();
	            selfClosing = true;
	            if (html_tags_1.getNsPrefix(fullName) == null && !html_tags_1.getHtmlTagDefinition(fullName).isVoid) {
	                this.errors.push(HtmlTreeError.create(fullName, startTagToken.sourceSpan, "Only void and foreign elements can be self closed \"" + startTagToken.parts[1] + "\""));
	            }
	        }
	        else if (this.peek.type === html_lexer_1.HtmlTokenType.TAG_OPEN_END) {
	            this._advance();
	            selfClosing = false;
	        }
	        var end = this.peek.sourceSpan.start;
	        var span = new parse_util_1.ParseSourceSpan(startTagToken.sourceSpan.start, end);
	        var el = new html_ast_1.HtmlElementAst(fullName, attrs, [], span, span, null);
	        this._pushElement(el);
	        if (selfClosing) {
	            this._popElement(fullName);
	            el.endSourceSpan = span;
	        }
	    };
	    TreeBuilder.prototype._pushElement = function (el) {
	        if (this.elementStack.length > 0) {
	            var parentEl = collection_1.ListWrapper.last(this.elementStack);
	            if (html_tags_1.getHtmlTagDefinition(parentEl.name).isClosedByChild(el.name)) {
	                this.elementStack.pop();
	            }
	        }
	        var tagDef = html_tags_1.getHtmlTagDefinition(el.name);
	        var parentEl = this._getParentElement();
	        if (tagDef.requireExtraParent(lang_1.isPresent(parentEl) ? parentEl.name : null)) {
	            var newParent = new html_ast_1.HtmlElementAst(tagDef.parentToAdd, [], [el], el.sourceSpan, el.startSourceSpan, el.endSourceSpan);
	            this._addToParent(newParent);
	            this.elementStack.push(newParent);
	            this.elementStack.push(el);
	        }
	        else {
	            this._addToParent(el);
	            this.elementStack.push(el);
	        }
	    };
	    TreeBuilder.prototype._consumeEndTag = function (endTagToken) {
	        var fullName = getElementFullName(endTagToken.parts[0], endTagToken.parts[1], this._getParentElement());
	        this._getParentElement().endSourceSpan = endTagToken.sourceSpan;
	        if (html_tags_1.getHtmlTagDefinition(fullName).isVoid) {
	            this.errors.push(HtmlTreeError.create(fullName, endTagToken.sourceSpan, "Void elements do not have end tags \"" + endTagToken.parts[1] + "\""));
	        }
	        else if (!this._popElement(fullName)) {
	            this.errors.push(HtmlTreeError.create(fullName, endTagToken.sourceSpan, "Unexpected closing tag \"" + endTagToken.parts[1] + "\""));
	        }
	    };
	    TreeBuilder.prototype._popElement = function (fullName) {
	        for (var stackIndex = this.elementStack.length - 1; stackIndex >= 0; stackIndex--) {
	            var el = this.elementStack[stackIndex];
	            if (el.name == fullName) {
	                collection_1.ListWrapper.splice(this.elementStack, stackIndex, this.elementStack.length - stackIndex);
	                return true;
	            }
	            if (!html_tags_1.getHtmlTagDefinition(el.name).closedByParent) {
	                return false;
	            }
	        }
	        return false;
	    };
	    TreeBuilder.prototype._consumeAttr = function (attrName) {
	        var fullName = html_tags_1.mergeNsAndName(attrName.parts[0], attrName.parts[1]);
	        var end = attrName.sourceSpan.end;
	        var value = '';
	        if (this.peek.type === html_lexer_1.HtmlTokenType.ATTR_VALUE) {
	            var valueToken = this._advance();
	            value = valueToken.parts[0];
	            end = valueToken.sourceSpan.end;
	        }
	        return new html_ast_1.HtmlAttrAst(fullName, value, new parse_util_1.ParseSourceSpan(attrName.sourceSpan.start, end));
	    };
	    TreeBuilder.prototype._getParentElement = function () {
	        return this.elementStack.length > 0 ? collection_1.ListWrapper.last(this.elementStack) : null;
	    };
	    TreeBuilder.prototype._addToParent = function (node) {
	        var parent = this._getParentElement();
	        if (lang_1.isPresent(parent)) {
	            parent.children.push(node);
	        }
	        else {
	            this.rootNodes.push(node);
	        }
	    };
	    return TreeBuilder;
	}());
	function getElementFullName(prefix, localName, parentElement) {
	    if (lang_1.isBlank(prefix)) {
	        prefix = html_tags_1.getHtmlTagDefinition(localName).implicitNamespacePrefix;
	        if (lang_1.isBlank(prefix) && lang_1.isPresent(parentElement)) {
	            prefix = html_tags_1.getNsPrefix(parentElement.name);
	        }
	    }
	    return html_tags_1.mergeNsAndName(prefix, localName);
	}


/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';"use strict";
	var ParseLocation = (function () {
	    function ParseLocation(file, offset, line, col) {
	        this.file = file;
	        this.offset = offset;
	        this.line = line;
	        this.col = col;
	    }
	    ParseLocation.prototype.toString = function () { return this.file.url + "@" + this.line + ":" + this.col; };
	    return ParseLocation;
	}());
	exports.ParseLocation = ParseLocation;
	var ParseSourceFile = (function () {
	    function ParseSourceFile(content, url) {
	        this.content = content;
	        this.url = url;
	    }
	    return ParseSourceFile;
	}());
	exports.ParseSourceFile = ParseSourceFile;
	var ParseSourceSpan = (function () {
	    function ParseSourceSpan(start, end) {
	        this.start = start;
	        this.end = end;
	    }
	    ParseSourceSpan.prototype.toString = function () {
	        return this.start.file.content.substring(this.start.offset, this.end.offset);
	    };
	    return ParseSourceSpan;
	}());
	exports.ParseSourceSpan = ParseSourceSpan;
	var ParseError = (function () {
	    function ParseError(span, msg) {
	        this.span = span;
	        this.msg = msg;
	    }
	    ParseError.prototype.toString = function () {
	        var source = this.span.start.file.content;
	        var ctxStart = this.span.start.offset;
	        if (ctxStart > source.length - 1) {
	            ctxStart = source.length - 1;
	        }
	        var ctxEnd = ctxStart;
	        var ctxLen = 0;
	        var ctxLines = 0;
	        while (ctxLen < 100 && ctxStart > 0) {
	            ctxStart--;
	            ctxLen++;
	            if (source[ctxStart] == "\n") {
	                if (++ctxLines == 3) {
	                    break;
	                }
	            }
	        }
	        ctxLen = 0;
	        ctxLines = 0;
	        while (ctxLen < 100 && ctxEnd < source.length - 1) {
	            ctxEnd++;
	            ctxLen++;
	            if (source[ctxEnd] == "\n") {
	                if (++ctxLines == 3) {
	                    break;
	                }
	            }
	        }
	        var context = source.substring(ctxStart, this.span.start.offset) + '[ERROR ->]' +
	            source.substring(this.span.start.offset, ctxEnd + 1);
	        return this.msg + " (\"" + context + "\"): " + this.span.start;
	    };
	    return ParseError;
	}());
	exports.ParseError = ParseError;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(2);
	var template_ast_1 = __webpack_require__(22);
	var source_module_1 = __webpack_require__(21);
	var view_1 = __webpack_require__(36);
	var view_type_1 = __webpack_require__(37);
	var element_1 = __webpack_require__(54);
	var util_1 = __webpack_require__(13);
	var di_1 = __webpack_require__(5);
	exports.PROTO_VIEW_JIT_IMPORTS = lang_1.CONST_EXPR({ 'AppProtoView': view_1.AppProtoView, 'AppProtoElement': element_1.AppProtoElement, 'ViewType': view_type_1.ViewType });
	// TODO: have a single file that reexports everything needed for
	// codegen explicitly
	// - helps understanding what codegen works against
	// - less imports in codegen code
	exports.APP_VIEW_MODULE_REF = source_module_1.moduleRef('package:angular2/src/core/linker/view' + util_1.MODULE_SUFFIX);
	exports.VIEW_TYPE_MODULE_REF = source_module_1.moduleRef('package:angular2/src/core/linker/view_type' + util_1.MODULE_SUFFIX);
	exports.APP_EL_MODULE_REF = source_module_1.moduleRef('package:angular2/src/core/linker/element' + util_1.MODULE_SUFFIX);
	exports.METADATA_MODULE_REF = source_module_1.moduleRef('package:angular2/src/core/metadata/view' + util_1.MODULE_SUFFIX);
	var IMPLICIT_TEMPLATE_VAR = '\$implicit';
	var CLASS_ATTR = 'class';
	var STYLE_ATTR = 'style';
	var ProtoViewCompiler = (function () {
	    function ProtoViewCompiler() {
	    }
	    ProtoViewCompiler.prototype.compileProtoViewRuntime = function (metadataCache, component, template, pipes) {
	        var protoViewFactory = new RuntimeProtoViewFactory(metadataCache, component, pipes);
	        var allProtoViews = [];
	        protoViewFactory.createCompileProtoView(template, [], [], allProtoViews);
	        return new CompileProtoViews([], allProtoViews);
	    };
	    ProtoViewCompiler.prototype.compileProtoViewCodeGen = function (resolvedMetadataCacheExpr, component, template, pipes) {
	        var protoViewFactory = new CodeGenProtoViewFactory(resolvedMetadataCacheExpr, component, pipes);
	        var allProtoViews = [];
	        var allStatements = [];
	        protoViewFactory.createCompileProtoView(template, [], allStatements, allProtoViews);
	        return new CompileProtoViews(allStatements.map(function (stmt) { return stmt.statement; }), allProtoViews);
	    };
	    ProtoViewCompiler = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], ProtoViewCompiler);
	    return ProtoViewCompiler;
	}());
	exports.ProtoViewCompiler = ProtoViewCompiler;
	var CompileProtoViews = (function () {
	    function CompileProtoViews(declarations, protoViews) {
	        this.declarations = declarations;
	        this.protoViews = protoViews;
	    }
	    return CompileProtoViews;
	}());
	exports.CompileProtoViews = CompileProtoViews;
	var CompileProtoView = (function () {
	    function CompileProtoView(embeddedTemplateIndex, protoElements, protoView) {
	        this.embeddedTemplateIndex = embeddedTemplateIndex;
	        this.protoElements = protoElements;
	        this.protoView = protoView;
	    }
	    return CompileProtoView;
	}());
	exports.CompileProtoView = CompileProtoView;
	var CompileProtoElement = (function () {
	    function CompileProtoElement(boundElementIndex, attrNameAndValues, variableNameAndValues, renderEvents, directives, embeddedTemplateIndex, appProtoEl) {
	        this.boundElementIndex = boundElementIndex;
	        this.attrNameAndValues = attrNameAndValues;
	        this.variableNameAndValues = variableNameAndValues;
	        this.renderEvents = renderEvents;
	        this.directives = directives;
	        this.embeddedTemplateIndex = embeddedTemplateIndex;
	        this.appProtoEl = appProtoEl;
	    }
	    return CompileProtoElement;
	}());
	exports.CompileProtoElement = CompileProtoElement;
	function visitAndReturnContext(visitor, asts, context) {
	    template_ast_1.templateVisitAll(visitor, asts, context);
	    return context;
	}
	var ProtoViewFactory = (function () {
	    function ProtoViewFactory(component) {
	        this.component = component;
	    }
	    ProtoViewFactory.prototype.createCompileProtoView = function (template, templateVariableBindings, targetStatements, targetProtoViews) {
	        var embeddedTemplateIndex = targetProtoViews.length;
	        // Note: targetProtoViews needs to be in depth first order.
	        // So we "reserve" a space here that we fill after the recursion is done
	        targetProtoViews.push(null);
	        var builder = new ProtoViewBuilderVisitor(this, targetStatements, targetProtoViews);
	        template_ast_1.templateVisitAll(builder, template);
	        var viewType = getViewType(this.component, embeddedTemplateIndex);
	        var appProtoView = this.createAppProtoView(embeddedTemplateIndex, viewType, templateVariableBindings, targetStatements);
	        var cpv = new CompileProtoView(embeddedTemplateIndex, builder.protoElements, appProtoView);
	        targetProtoViews[embeddedTemplateIndex] = cpv;
	        return cpv;
	    };
	    return ProtoViewFactory;
	}());
	var CodeGenProtoViewFactory = (function (_super) {
	    __extends(CodeGenProtoViewFactory, _super);
	    function CodeGenProtoViewFactory(resolvedMetadataCacheExpr, component, pipes) {
	        _super.call(this, component);
	        this.resolvedMetadataCacheExpr = resolvedMetadataCacheExpr;
	        this.pipes = pipes;
	        this._nextVarId = 0;
	    }
	    CodeGenProtoViewFactory.prototype._nextProtoViewVar = function (embeddedTemplateIndex) {
	        return "appProtoView" + this._nextVarId++ + "_" + this.component.type.name + embeddedTemplateIndex;
	    };
	    CodeGenProtoViewFactory.prototype.createAppProtoView = function (embeddedTemplateIndex, viewType, templateVariableBindings, targetStatements) {
	        var protoViewVarName = this._nextProtoViewVar(embeddedTemplateIndex);
	        var viewTypeExpr = codeGenViewType(viewType);
	        var pipesExpr = embeddedTemplateIndex === 0 ?
	            codeGenTypesArray(this.pipes.map(function (pipeMeta) { return pipeMeta.type; })) :
	            null;
	        var statement = "var " + protoViewVarName + " = " + exports.APP_VIEW_MODULE_REF + "AppProtoView.create(" + this.resolvedMetadataCacheExpr.expression + ", " + viewTypeExpr + ", " + pipesExpr + ", " + util_1.codeGenStringMap(templateVariableBindings) + ");";
	        targetStatements.push(new util_1.Statement(statement));
	        return new util_1.Expression(protoViewVarName);
	    };
	    CodeGenProtoViewFactory.prototype.createAppProtoElement = function (boundElementIndex, attrNameAndValues, variableNameAndValues, directives, targetStatements) {
	        var varName = "appProtoEl" + this._nextVarId++ + "_" + this.component.type.name;
	        var value = exports.APP_EL_MODULE_REF + "AppProtoElement.create(\n        " + this.resolvedMetadataCacheExpr.expression + ",\n        " + boundElementIndex + ",\n        " + util_1.codeGenStringMap(attrNameAndValues) + ",\n        " + codeGenDirectivesArray(directives) + ",\n        " + util_1.codeGenStringMap(variableNameAndValues) + "\n      )";
	        var statement = "var " + varName + " = " + value + ";";
	        targetStatements.push(new util_1.Statement(statement));
	        return new util_1.Expression(varName);
	    };
	    return CodeGenProtoViewFactory;
	}(ProtoViewFactory));
	var RuntimeProtoViewFactory = (function (_super) {
	    __extends(RuntimeProtoViewFactory, _super);
	    function RuntimeProtoViewFactory(metadataCache, component, pipes) {
	        _super.call(this, component);
	        this.metadataCache = metadataCache;
	        this.pipes = pipes;
	    }
	    RuntimeProtoViewFactory.prototype.createAppProtoView = function (embeddedTemplateIndex, viewType, templateVariableBindings, targetStatements) {
	        var pipes = embeddedTemplateIndex === 0 ? this.pipes.map(function (pipeMeta) { return pipeMeta.type.runtime; }) : [];
	        var templateVars = keyValueArrayToStringMap(templateVariableBindings);
	        return view_1.AppProtoView.create(this.metadataCache, viewType, pipes, templateVars);
	    };
	    RuntimeProtoViewFactory.prototype.createAppProtoElement = function (boundElementIndex, attrNameAndValues, variableNameAndValues, directives, targetStatements) {
	        var attrs = keyValueArrayToStringMap(attrNameAndValues);
	        return element_1.AppProtoElement.create(this.metadataCache, boundElementIndex, attrs, directives.map(function (dirMeta) { return dirMeta.type.runtime; }), keyValueArrayToStringMap(variableNameAndValues));
	    };
	    return RuntimeProtoViewFactory;
	}(ProtoViewFactory));
	var ProtoViewBuilderVisitor = (function () {
	    function ProtoViewBuilderVisitor(factory, allStatements, allProtoViews) {
	        this.factory = factory;
	        this.allStatements = allStatements;
	        this.allProtoViews = allProtoViews;
	        this.protoElements = [];
	        this.boundElementCount = 0;
	    }
	    ProtoViewBuilderVisitor.prototype._readAttrNameAndValues = function (directives, attrAsts) {
	        var attrs = visitAndReturnContext(this, attrAsts, {});
	        directives.forEach(function (directiveMeta) {
	            collection_1.StringMapWrapper.forEach(directiveMeta.hostAttributes, function (value, name) {
	                var prevValue = attrs[name];
	                attrs[name] = lang_1.isPresent(prevValue) ? mergeAttributeValue(name, prevValue, value) : value;
	            });
	        });
	        return mapToKeyValueArray(attrs);
	    };
	    ProtoViewBuilderVisitor.prototype.visitBoundText = function (ast, context) { return null; };
	    ProtoViewBuilderVisitor.prototype.visitText = function (ast, context) { return null; };
	    ProtoViewBuilderVisitor.prototype.visitNgContent = function (ast, context) { return null; };
	    ProtoViewBuilderVisitor.prototype.visitElement = function (ast, context) {
	        var _this = this;
	        var boundElementIndex = null;
	        if (ast.isBound()) {
	            boundElementIndex = this.boundElementCount++;
	        }
	        var component = ast.getComponent();
	        var variableNameAndValues = [];
	        if (lang_1.isBlank(component)) {
	            ast.exportAsVars.forEach(function (varAst) { variableNameAndValues.push([varAst.name, null]); });
	        }
	        var directives = [];
	        var renderEvents = visitAndReturnContext(this, ast.outputs, new Map());
	        collection_1.ListWrapper.forEachWithIndex(ast.directives, function (directiveAst, index) {
	            directiveAst.visit(_this, new DirectiveContext(index, boundElementIndex, renderEvents, variableNameAndValues, directives));
	        });
	        var renderEventArray = [];
	        renderEvents.forEach(function (eventAst, _) { return renderEventArray.push(eventAst); });
	        var attrNameAndValues = this._readAttrNameAndValues(directives, ast.attrs);
	        this._addProtoElement(ast.isBound(), boundElementIndex, attrNameAndValues, variableNameAndValues, renderEventArray, directives, null);
	        template_ast_1.templateVisitAll(this, ast.children);
	        return null;
	    };
	    ProtoViewBuilderVisitor.prototype.visitEmbeddedTemplate = function (ast, context) {
	        var _this = this;
	        var boundElementIndex = this.boundElementCount++;
	        var directives = [];
	        collection_1.ListWrapper.forEachWithIndex(ast.directives, function (directiveAst, index) {
	            directiveAst.visit(_this, new DirectiveContext(index, boundElementIndex, new Map(), [], directives));
	        });
	        var attrNameAndValues = this._readAttrNameAndValues(directives, ast.attrs);
	        var templateVariableBindings = ast.vars.map(function (varAst) { return [varAst.value.length > 0 ? varAst.value : IMPLICIT_TEMPLATE_VAR, varAst.name]; });
	        var nestedProtoView = this.factory.createCompileProtoView(ast.children, templateVariableBindings, this.allStatements, this.allProtoViews);
	        this._addProtoElement(true, boundElementIndex, attrNameAndValues, [], [], directives, nestedProtoView.embeddedTemplateIndex);
	        return null;
	    };
	    ProtoViewBuilderVisitor.prototype._addProtoElement = function (isBound, boundElementIndex, attrNameAndValues, variableNameAndValues, renderEvents, directives, embeddedTemplateIndex) {
	        var appProtoEl = null;
	        if (isBound) {
	            appProtoEl =
	                this.factory.createAppProtoElement(boundElementIndex, attrNameAndValues, variableNameAndValues, directives, this.allStatements);
	        }
	        var compileProtoEl = new CompileProtoElement(boundElementIndex, attrNameAndValues, variableNameAndValues, renderEvents, directives, embeddedTemplateIndex, appProtoEl);
	        this.protoElements.push(compileProtoEl);
	    };
	    ProtoViewBuilderVisitor.prototype.visitVariable = function (ast, ctx) { return null; };
	    ProtoViewBuilderVisitor.prototype.visitAttr = function (ast, attrNameAndValues) {
	        attrNameAndValues[ast.name] = ast.value;
	        return null;
	    };
	    ProtoViewBuilderVisitor.prototype.visitDirective = function (ast, ctx) {
	        ctx.targetDirectives.push(ast.directive);
	        template_ast_1.templateVisitAll(this, ast.hostEvents, ctx.hostEventTargetAndNames);
	        ast.exportAsVars.forEach(function (varAst) { ctx.targetVariableNameAndValues.push([varAst.name, ctx.index]); });
	        return null;
	    };
	    ProtoViewBuilderVisitor.prototype.visitEvent = function (ast, eventTargetAndNames) {
	        eventTargetAndNames.set(ast.fullName, ast);
	        return null;
	    };
	    ProtoViewBuilderVisitor.prototype.visitDirectiveProperty = function (ast, context) { return null; };
	    ProtoViewBuilderVisitor.prototype.visitElementProperty = function (ast, context) { return null; };
	    return ProtoViewBuilderVisitor;
	}());
	function mapToKeyValueArray(data) {
	    var entryArray = [];
	    collection_1.StringMapWrapper.forEach(data, function (value, name) { entryArray.push([name, value]); });
	    // We need to sort to get a defined output order
	    // for tests and for caching generated artifacts...
	    collection_1.ListWrapper.sort(entryArray, function (entry1, entry2) {
	        return lang_1.StringWrapper.compare(entry1[0], entry2[0]);
	    });
	    var keyValueArray = [];
	    entryArray.forEach(function (entry) { keyValueArray.push([entry[0], entry[1]]); });
	    return keyValueArray;
	}
	function mergeAttributeValue(attrName, attrValue1, attrValue2) {
	    if (attrName == CLASS_ATTR || attrName == STYLE_ATTR) {
	        return attrValue1 + " " + attrValue2;
	    }
	    else {
	        return attrValue2;
	    }
	}
	var DirectiveContext = (function () {
	    function DirectiveContext(index, boundElementIndex, hostEventTargetAndNames, targetVariableNameAndValues, targetDirectives) {
	        this.index = index;
	        this.boundElementIndex = boundElementIndex;
	        this.hostEventTargetAndNames = hostEventTargetAndNames;
	        this.targetVariableNameAndValues = targetVariableNameAndValues;
	        this.targetDirectives = targetDirectives;
	    }
	    return DirectiveContext;
	}());
	function keyValueArrayToStringMap(keyValueArray) {
	    var stringMap = {};
	    for (var i = 0; i < keyValueArray.length; i++) {
	        var entry = keyValueArray[i];
	        stringMap[entry[0]] = entry[1];
	    }
	    return stringMap;
	}
	function codeGenDirectivesArray(directives) {
	    var expressions = directives.map(function (directiveType) { return typeRef(directiveType.type); });
	    return "[" + expressions.join(',') + "]";
	}
	function codeGenTypesArray(types) {
	    var expressions = types.map(typeRef);
	    return "[" + expressions.join(',') + "]";
	}
	function codeGenViewType(value) {
	    if (lang_1.IS_DART) {
	        return "" + exports.VIEW_TYPE_MODULE_REF + value;
	    }
	    else {
	        return "" + value;
	    }
	}
	function typeRef(type) {
	    return "" + source_module_1.moduleRef(type.moduleUrl) + type.name;
	}
	function getViewType(component, embeddedTemplateIndex) {
	    if (embeddedTemplateIndex > 0) {
	        return view_type_1.ViewType.EMBEDDED;
	    }
	    else if (component.type.isHost) {
	        return view_type_1.ViewType.HOST;
	    }
	    else {
	        return view_type_1.ViewType.COMPONENT;
	    }
	}


/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';"use strict";
	var ElementSchemaRegistry = (function () {
	    function ElementSchemaRegistry() {
	    }
	    ElementSchemaRegistry.prototype.hasProperty = function (tagName, propName) { return true; };
	    ElementSchemaRegistry.prototype.getMappedPropName = function (propName) { return propName; };
	    return ElementSchemaRegistry;
	}());
	exports.ElementSchemaRegistry = ElementSchemaRegistry;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';// Some of the code comes from WebComponents.JS
	// https://github.com/webcomponents/webcomponentsjs/blob/master/src/HTMLImports/path.js
	"use strict";
	var lang_1 = __webpack_require__(1);
	var StyleWithImports = (function () {
	    function StyleWithImports(style, styleUrls) {
	        this.style = style;
	        this.styleUrls = styleUrls;
	    }
	    return StyleWithImports;
	}());
	exports.StyleWithImports = StyleWithImports;
	function isStyleUrlResolvable(url) {
	    if (lang_1.isBlank(url) || url.length === 0 || url[0] == '/')
	        return false;
	    var schemeMatch = lang_1.RegExpWrapper.firstMatch(_urlWithSchemaRe, url);
	    return lang_1.isBlank(schemeMatch) || schemeMatch[1] == 'package' || schemeMatch[1] == 'asset';
	}
	exports.isStyleUrlResolvable = isStyleUrlResolvable;
	/**
	 * Rewrites stylesheets by resolving and removing the @import urls that
	 * are either relative or don't have a `package:` scheme
	 */
	function extractStyleUrls(resolver, baseUrl, cssText) {
	    var foundUrls = [];
	    var modifiedCssText = lang_1.StringWrapper.replaceAllMapped(cssText, _cssImportRe, function (m) {
	        var url = lang_1.isPresent(m[1]) ? m[1] : m[2];
	        if (!isStyleUrlResolvable(url)) {
	            // Do not attempt to resolve non-package absolute URLs with URI scheme
	            return m[0];
	        }
	        foundUrls.push(resolver.resolve(baseUrl, url));
	        return '';
	    });
	    return new StyleWithImports(modifiedCssText, foundUrls);
	}
	exports.extractStyleUrls = extractStyleUrls;
	var _cssImportRe = /@import\s+(?:url\()?\s*(?:(?:['"]([^'"]*))|([^;\)\s]*))[^;]*;?/g;
	// TODO: can't use /^[^:/?#.]+:/g due to clang-format bug:
	//       https://github.com/angular/angular/issues/4596
	var _urlWithSchemaRe = /^([a-zA-Z\-\+\.]+):/g;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var collection_1 = __webpack_require__(2);
	var async_1 = __webpack_require__(6);
	var directive_metadata_1 = __webpack_require__(51);
	var template_ast_1 = __webpack_require__(22);
	var di_1 = __webpack_require__(5);
	var source_module_1 = __webpack_require__(21);
	var change_detector_compiler_1 = __webpack_require__(138);
	var style_compiler_1 = __webpack_require__(142);
	var view_compiler_1 = __webpack_require__(145);
	var proto_view_compiler_1 = __webpack_require__(85);
	var template_parser_1 = __webpack_require__(89);
	var template_normalizer_1 = __webpack_require__(143);
	var runtime_metadata_1 = __webpack_require__(140);
	var view_1 = __webpack_require__(36);
	var change_detection_1 = __webpack_require__(9);
	var resolved_metadata_cache_1 = __webpack_require__(164);
	var util_1 = __webpack_require__(13);
	exports.METADATA_CACHE_MODULE_REF = source_module_1.moduleRef('package:angular2/src/core/linker/resolved_metadata_cache' + util_1.MODULE_SUFFIX);
	/**
	 * An internal module of the Angular compiler that begins with component types,
	 * extracts templates, and eventually produces a compiled version of the component
	 * ready for linking into an application.
	 */
	var TemplateCompiler = (function () {
	    function TemplateCompiler(_runtimeMetadataResolver, _templateNormalizer, _templateParser, _styleCompiler, _cdCompiler, _protoViewCompiler, _viewCompiler, _resolvedMetadataCache, _genConfig) {
	        this._runtimeMetadataResolver = _runtimeMetadataResolver;
	        this._templateNormalizer = _templateNormalizer;
	        this._templateParser = _templateParser;
	        this._styleCompiler = _styleCompiler;
	        this._cdCompiler = _cdCompiler;
	        this._protoViewCompiler = _protoViewCompiler;
	        this._viewCompiler = _viewCompiler;
	        this._resolvedMetadataCache = _resolvedMetadataCache;
	        this._genConfig = _genConfig;
	        this._hostCacheKeys = new Map();
	        this._compiledTemplateCache = new Map();
	        this._compiledTemplateDone = new Map();
	    }
	    TemplateCompiler.prototype.normalizeDirectiveMetadata = function (directive) {
	        if (!directive.isComponent) {
	            // For non components there is nothing to be normalized yet.
	            return async_1.PromiseWrapper.resolve(directive);
	        }
	        return this._templateNormalizer.normalizeTemplate(directive.type, directive.template)
	            .then(function (normalizedTemplate) { return new directive_metadata_1.CompileDirectiveMetadata({
	            type: directive.type,
	            isComponent: directive.isComponent,
	            dynamicLoadable: directive.dynamicLoadable,
	            selector: directive.selector,
	            exportAs: directive.exportAs,
	            changeDetection: directive.changeDetection,
	            inputs: directive.inputs,
	            outputs: directive.outputs,
	            hostListeners: directive.hostListeners,
	            hostProperties: directive.hostProperties,
	            hostAttributes: directive.hostAttributes,
	            lifecycleHooks: directive.lifecycleHooks,
	            providers: directive.providers,
	            viewProviders: directive.viewProviders,
	            queries: directive.queries,
	            viewQueries: directive.viewQueries,
	            template: normalizedTemplate
	        }); });
	    };
	    TemplateCompiler.prototype.compileHostComponentRuntime = function (type) {
	        var compMeta = this._runtimeMetadataResolver.getDirectiveMetadata(type);
	        var hostCacheKey = this._hostCacheKeys.get(type);
	        if (lang_1.isBlank(hostCacheKey)) {
	            hostCacheKey = new Object();
	            this._hostCacheKeys.set(type, hostCacheKey);
	            assertComponent(compMeta);
	            var hostMeta = directive_metadata_1.createHostComponentMeta(compMeta.type, compMeta.selector);
	            this._compileComponentRuntime(hostCacheKey, hostMeta, [compMeta], [], []);
	        }
	        return this._compiledTemplateDone.get(hostCacheKey)
	            .then(function (compiledTemplate) {
	            return new view_1.HostViewFactory(compMeta.selector, compiledTemplate.viewFactory);
	        });
	    };
	    TemplateCompiler.prototype.clearCache = function () {
	        this._styleCompiler.clearCache();
	        this._compiledTemplateCache.clear();
	        this._compiledTemplateDone.clear();
	        this._hostCacheKeys.clear();
	    };
	    TemplateCompiler.prototype.compileTemplatesCodeGen = function (components) {
	        var _this = this;
	        if (components.length === 0) {
	            throw new exceptions_1.BaseException('No components given');
	        }
	        var declarations = [];
	        components.forEach(function (componentWithDirs) {
	            var compMeta = componentWithDirs.component;
	            assertComponent(compMeta);
	            _this._compileComponentCodeGen(compMeta, componentWithDirs.directives, componentWithDirs.pipes, declarations);
	            if (compMeta.dynamicLoadable) {
	                var hostMeta = directive_metadata_1.createHostComponentMeta(compMeta.type, compMeta.selector);
	                var viewFactoryExpression = _this._compileComponentCodeGen(hostMeta, [compMeta], [], declarations);
	                var constructionKeyword = lang_1.IS_DART ? 'const' : 'new';
	                var compiledTemplateExpr = constructionKeyword + " " + proto_view_compiler_1.APP_VIEW_MODULE_REF + "HostViewFactory('" + compMeta.selector + "'," + viewFactoryExpression + ")";
	                var varName = codeGenHostViewFactoryName(compMeta.type);
	                declarations.push("" + util_1.codeGenExportVariable(varName) + compiledTemplateExpr + ";");
	            }
	        });
	        var moduleUrl = components[0].component.type.moduleUrl;
	        return new source_module_1.SourceModule("" + templateModuleUrl(moduleUrl), declarations.join('\n'));
	    };
	    TemplateCompiler.prototype.compileStylesheetCodeGen = function (stylesheetUrl, cssText) {
	        return this._styleCompiler.compileStylesheetCodeGen(stylesheetUrl, cssText);
	    };
	    TemplateCompiler.prototype._compileComponentRuntime = function (cacheKey, compMeta, viewDirectives, pipes, compilingComponentsPath) {
	        var _this = this;
	        var uniqViewDirectives = removeDuplicates(viewDirectives);
	        var uniqViewPipes = removeDuplicates(pipes);
	        var compiledTemplate = this._compiledTemplateCache.get(cacheKey);
	        var done = this._compiledTemplateDone.get(cacheKey);
	        if (lang_1.isBlank(compiledTemplate)) {
	            compiledTemplate = new CompiledTemplate();
	            this._compiledTemplateCache.set(cacheKey, compiledTemplate);
	            done = async_1.PromiseWrapper
	                .all([this._styleCompiler.compileComponentRuntime(compMeta.template)].concat(uniqViewDirectives.map(function (dirMeta) { return _this.normalizeDirectiveMetadata(dirMeta); })))
	                .then(function (stylesAndNormalizedViewDirMetas) {
	                var normalizedViewDirMetas = stylesAndNormalizedViewDirMetas.slice(1);
	                var styles = stylesAndNormalizedViewDirMetas[0];
	                var parsedTemplate = _this._templateParser.parse(compMeta.template.template, normalizedViewDirMetas, uniqViewPipes, compMeta.type.name);
	                var childPromises = [];
	                var usedDirectives = DirectiveCollector.findUsedDirectives(parsedTemplate);
	                usedDirectives.components.forEach(function (component) { return _this._compileNestedComponentRuntime(component, compilingComponentsPath, childPromises); });
	                return async_1.PromiseWrapper.all(childPromises)
	                    .then(function (_) {
	                    var filteredPipes = filterPipes(parsedTemplate, uniqViewPipes);
	                    compiledTemplate.init(_this._createViewFactoryRuntime(compMeta, parsedTemplate, usedDirectives.directives, styles, filteredPipes));
	                    return compiledTemplate;
	                });
	            });
	            this._compiledTemplateDone.set(cacheKey, done);
	        }
	        return compiledTemplate;
	    };
	    TemplateCompiler.prototype._compileNestedComponentRuntime = function (childComponentDir, parentCompilingComponentsPath, childPromises) {
	        var compilingComponentsPath = collection_1.ListWrapper.clone(parentCompilingComponentsPath);
	        var childCacheKey = childComponentDir.type.runtime;
	        var childViewDirectives = this._runtimeMetadataResolver.getViewDirectivesMetadata(childComponentDir.type.runtime);
	        var childViewPipes = this._runtimeMetadataResolver.getViewPipesMetadata(childComponentDir.type.runtime);
	        var childIsRecursive = collection_1.ListWrapper.contains(compilingComponentsPath, childCacheKey);
	        compilingComponentsPath.push(childCacheKey);
	        this._compileComponentRuntime(childCacheKey, childComponentDir, childViewDirectives, childViewPipes, compilingComponentsPath);
	        if (!childIsRecursive) {
	            // Only wait for a child if it is not a cycle
	            childPromises.push(this._compiledTemplateDone.get(childCacheKey));
	        }
	    };
	    TemplateCompiler.prototype._createViewFactoryRuntime = function (compMeta, parsedTemplate, directives, styles, pipes) {
	        var _this = this;
	        if (lang_1.IS_DART || !this._genConfig.useJit) {
	            var changeDetectorFactories = this._cdCompiler.compileComponentRuntime(compMeta.type, compMeta.changeDetection, parsedTemplate);
	            var protoViews = this._protoViewCompiler.compileProtoViewRuntime(this._resolvedMetadataCache, compMeta, parsedTemplate, pipes);
	            return this._viewCompiler.compileComponentRuntime(compMeta, parsedTemplate, styles, protoViews.protoViews, changeDetectorFactories, function (compMeta) { return _this._getNestedComponentViewFactory(compMeta); });
	        }
	        else {
	            var declarations = [];
	            var viewFactoryExpr = this._createViewFactoryCodeGen('resolvedMetadataCache', compMeta, new source_module_1.SourceExpression([], 'styles'), parsedTemplate, pipes, declarations);
	            var vars = { 'exports': {}, 'styles': styles, 'resolvedMetadataCache': this._resolvedMetadataCache };
	            directives.forEach(function (dirMeta) {
	                vars[dirMeta.type.name] = dirMeta.type.runtime;
	                if (dirMeta.isComponent && dirMeta.type.runtime !== compMeta.type.runtime) {
	                    vars[("viewFactory_" + dirMeta.type.name + "0")] = _this._getNestedComponentViewFactory(dirMeta);
	                }
	            });
	            pipes.forEach(function (pipeMeta) { return vars[pipeMeta.type.name] = pipeMeta.type.runtime; });
	            var declarationsWithoutImports = source_module_1.SourceModule.getSourceWithoutImports(declarations.join('\n'));
	            return lang_1.evalExpression("viewFactory_" + compMeta.type.name, viewFactoryExpr, declarationsWithoutImports, mergeStringMaps([vars, change_detector_compiler_1.CHANGE_DETECTION_JIT_IMPORTS, proto_view_compiler_1.PROTO_VIEW_JIT_IMPORTS, view_compiler_1.VIEW_JIT_IMPORTS]));
	        }
	    };
	    TemplateCompiler.prototype._getNestedComponentViewFactory = function (compMeta) {
	        return this._compiledTemplateCache.get(compMeta.type.runtime).viewFactory;
	    };
	    TemplateCompiler.prototype._compileComponentCodeGen = function (compMeta, directives, pipes, targetDeclarations) {
	        var uniqueDirectives = removeDuplicates(directives);
	        var uniqPipes = removeDuplicates(pipes);
	        var styleExpr = this._styleCompiler.compileComponentCodeGen(compMeta.template);
	        var parsedTemplate = this._templateParser.parse(compMeta.template.template, uniqueDirectives, uniqPipes, compMeta.type.name);
	        var filteredPipes = filterPipes(parsedTemplate, uniqPipes);
	        return this._createViewFactoryCodeGen(exports.METADATA_CACHE_MODULE_REF + "CODEGEN_RESOLVED_METADATA_CACHE", compMeta, styleExpr, parsedTemplate, filteredPipes, targetDeclarations);
	    };
	    TemplateCompiler.prototype._createViewFactoryCodeGen = function (resolvedMetadataCacheExpr, compMeta, styleExpr, parsedTemplate, pipes, targetDeclarations) {
	        var changeDetectorsExprs = this._cdCompiler.compileComponentCodeGen(compMeta.type, compMeta.changeDetection, parsedTemplate);
	        var protoViewExprs = this._protoViewCompiler.compileProtoViewCodeGen(new util_1.Expression(resolvedMetadataCacheExpr), compMeta, parsedTemplate, pipes);
	        var viewFactoryExpr = this._viewCompiler.compileComponentCodeGen(compMeta, parsedTemplate, styleExpr, protoViewExprs.protoViews, changeDetectorsExprs, codeGenComponentViewFactoryName);
	        util_1.addAll(changeDetectorsExprs.declarations, targetDeclarations);
	        util_1.addAll(protoViewExprs.declarations, targetDeclarations);
	        util_1.addAll(viewFactoryExpr.declarations, targetDeclarations);
	        return viewFactoryExpr.expression;
	    };
	    TemplateCompiler = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [runtime_metadata_1.RuntimeMetadataResolver, template_normalizer_1.TemplateNormalizer, template_parser_1.TemplateParser, style_compiler_1.StyleCompiler, change_detector_compiler_1.ChangeDetectionCompiler, proto_view_compiler_1.ProtoViewCompiler, view_compiler_1.ViewCompiler, resolved_metadata_cache_1.ResolvedMetadataCache, change_detection_1.ChangeDetectorGenConfig])
	    ], TemplateCompiler);
	    return TemplateCompiler;
	}());
	exports.TemplateCompiler = TemplateCompiler;
	var NormalizedComponentWithViewDirectives = (function () {
	    function NormalizedComponentWithViewDirectives(component, directives, pipes) {
	        this.component = component;
	        this.directives = directives;
	        this.pipes = pipes;
	    }
	    return NormalizedComponentWithViewDirectives;
	}());
	exports.NormalizedComponentWithViewDirectives = NormalizedComponentWithViewDirectives;
	var CompiledTemplate = (function () {
	    function CompiledTemplate() {
	        this.viewFactory = null;
	    }
	    CompiledTemplate.prototype.init = function (viewFactory) { this.viewFactory = viewFactory; };
	    return CompiledTemplate;
	}());
	function assertComponent(meta) {
	    if (!meta.isComponent) {
	        throw new exceptions_1.BaseException("Could not compile '" + meta.type.name + "' because it is not a component.");
	    }
	}
	function templateModuleUrl(moduleUrl) {
	    var urlWithoutSuffix = moduleUrl.substring(0, moduleUrl.length - util_1.MODULE_SUFFIX.length);
	    return urlWithoutSuffix + ".template" + util_1.MODULE_SUFFIX;
	}
	function codeGenHostViewFactoryName(type) {
	    return "hostViewFactory_" + type.name;
	}
	function codeGenComponentViewFactoryName(nestedCompType) {
	    return source_module_1.moduleRef(templateModuleUrl(nestedCompType.type.moduleUrl)) + "viewFactory_" + nestedCompType.type.name + "0";
	}
	function mergeStringMaps(maps) {
	    var result = {};
	    maps.forEach(function (map) { collection_1.StringMapWrapper.forEach(map, function (value, key) { result[key] = value; }); });
	    return result;
	}
	function removeDuplicates(items) {
	    var res = [];
	    items.forEach(function (item) {
	        var hasMatch = res.filter(function (r) { return r.type.name == item.type.name && r.type.moduleUrl == item.type.moduleUrl &&
	            r.type.runtime == item.type.runtime; })
	            .length > 0;
	        if (!hasMatch) {
	            res.push(item);
	        }
	    });
	    return res;
	}
	var DirectiveCollector = (function () {
	    function DirectiveCollector() {
	        this.directives = [];
	        this.components = [];
	    }
	    DirectiveCollector.findUsedDirectives = function (parsedTemplate) {
	        var collector = new DirectiveCollector();
	        template_ast_1.templateVisitAll(collector, parsedTemplate);
	        return collector;
	    };
	    DirectiveCollector.prototype.visitBoundText = function (ast, context) { return null; };
	    DirectiveCollector.prototype.visitText = function (ast, context) { return null; };
	    DirectiveCollector.prototype.visitNgContent = function (ast, context) { return null; };
	    DirectiveCollector.prototype.visitElement = function (ast, context) {
	        template_ast_1.templateVisitAll(this, ast.directives);
	        template_ast_1.templateVisitAll(this, ast.children);
	        return null;
	    };
	    DirectiveCollector.prototype.visitEmbeddedTemplate = function (ast, context) {
	        template_ast_1.templateVisitAll(this, ast.directives);
	        template_ast_1.templateVisitAll(this, ast.children);
	        return null;
	    };
	    DirectiveCollector.prototype.visitVariable = function (ast, ctx) { return null; };
	    DirectiveCollector.prototype.visitAttr = function (ast, attrNameAndValues) { return null; };
	    DirectiveCollector.prototype.visitDirective = function (ast, ctx) {
	        if (ast.directive.isComponent) {
	            this.components.push(ast.directive);
	        }
	        this.directives.push(ast.directive);
	        return null;
	    };
	    DirectiveCollector.prototype.visitEvent = function (ast, eventTargetAndNames) {
	        return null;
	    };
	    DirectiveCollector.prototype.visitDirectiveProperty = function (ast, context) { return null; };
	    DirectiveCollector.prototype.visitElementProperty = function (ast, context) { return null; };
	    return DirectiveCollector;
	}());
	function filterPipes(template, allPipes) {
	    var visitor = new PipeVisitor();
	    template_ast_1.templateVisitAll(visitor, template);
	    return allPipes.filter(function (pipeMeta) { return collection_1.SetWrapper.has(visitor.collector.pipes, pipeMeta.name); });
	}
	var PipeVisitor = (function () {
	    function PipeVisitor() {
	        this.collector = new template_parser_1.PipeCollector();
	    }
	    PipeVisitor.prototype.visitBoundText = function (ast, context) {
	        ast.value.visit(this.collector);
	        return null;
	    };
	    PipeVisitor.prototype.visitText = function (ast, context) { return null; };
	    PipeVisitor.prototype.visitNgContent = function (ast, context) { return null; };
	    PipeVisitor.prototype.visitElement = function (ast, context) {
	        template_ast_1.templateVisitAll(this, ast.inputs);
	        template_ast_1.templateVisitAll(this, ast.outputs);
	        template_ast_1.templateVisitAll(this, ast.directives);
	        template_ast_1.templateVisitAll(this, ast.children);
	        return null;
	    };
	    PipeVisitor.prototype.visitEmbeddedTemplate = function (ast, context) {
	        template_ast_1.templateVisitAll(this, ast.outputs);
	        template_ast_1.templateVisitAll(this, ast.directives);
	        template_ast_1.templateVisitAll(this, ast.children);
	        return null;
	    };
	    PipeVisitor.prototype.visitVariable = function (ast, ctx) { return null; };
	    PipeVisitor.prototype.visitAttr = function (ast, attrNameAndValues) { return null; };
	    PipeVisitor.prototype.visitDirective = function (ast, ctx) {
	        template_ast_1.templateVisitAll(this, ast.inputs);
	        template_ast_1.templateVisitAll(this, ast.hostEvents);
	        template_ast_1.templateVisitAll(this, ast.hostProperties);
	        return null;
	    };
	    PipeVisitor.prototype.visitEvent = function (ast, eventTargetAndNames) {
	        ast.handler.visit(this.collector);
	        return null;
	    };
	    PipeVisitor.prototype.visitDirectiveProperty = function (ast, context) {
	        ast.value.visit(this.collector);
	        return null;
	    };
	    PipeVisitor.prototype.visitElementProperty = function (ast, context) {
	        ast.value.visit(this.collector);
	        return null;
	    };
	    return PipeVisitor;
	}());


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var collection_1 = __webpack_require__(2);
	var lang_1 = __webpack_require__(1);
	var core_1 = __webpack_require__(3);
	var lang_2 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var change_detection_1 = __webpack_require__(9);
	var html_parser_1 = __webpack_require__(83);
	var html_tags_1 = __webpack_require__(30);
	var parse_util_1 = __webpack_require__(84);
	var ast_1 = __webpack_require__(52);
	var template_ast_1 = __webpack_require__(22);
	var selector_1 = __webpack_require__(141);
	var element_schema_registry_1 = __webpack_require__(86);
	var template_preparser_1 = __webpack_require__(144);
	var style_url_resolver_1 = __webpack_require__(87);
	var html_ast_1 = __webpack_require__(82);
	var util_1 = __webpack_require__(13);
	// Group 1 = "bind-"
	// Group 2 = "var-" or "#"
	// Group 3 = "on-"
	// Group 4 = "bindon-"
	// Group 5 = the identifier after "bind-", "var-/#", or "on-"
	// Group 6 = identifier inside [()]
	// Group 7 = identifier inside []
	// Group 8 = identifier inside ()
	var BIND_NAME_REGEXP = /^(?:(?:(?:(bind-)|(var-|#)|(on-)|(bindon-))(.+))|\[\(([^\)]+)\)\]|\[([^\]]+)\]|\(([^\)]+)\))$/g;
	var TEMPLATE_ELEMENT = 'template';
	var TEMPLATE_ATTR = 'template';
	var TEMPLATE_ATTR_PREFIX = '*';
	var CLASS_ATTR = 'class';
	var PROPERTY_PARTS_SEPARATOR = '.';
	var ATTRIBUTE_PREFIX = 'attr';
	var CLASS_PREFIX = 'class';
	var STYLE_PREFIX = 'style';
	var TEXT_CSS_SELECTOR = selector_1.CssSelector.parse('*')[0];
	/**
	 * Provides an array of {@link TemplateAstVisitor}s which will be used to transform
	 * parsed templates before compilation is invoked, allowing custom expression syntax
	 * and other advanced transformations.
	 *
	 * This is currently an internal-only feature and not meant for general use.
	 */
	exports.TEMPLATE_TRANSFORMS = lang_2.CONST_EXPR(new core_1.OpaqueToken('TemplateTransforms'));
	var TemplateParseError = (function (_super) {
	    __extends(TemplateParseError, _super);
	    function TemplateParseError(message, span) {
	        _super.call(this, span, message);
	    }
	    return TemplateParseError;
	}(parse_util_1.ParseError));
	exports.TemplateParseError = TemplateParseError;
	var TemplateParseResult = (function () {
	    function TemplateParseResult(templateAst, errors) {
	        this.templateAst = templateAst;
	        this.errors = errors;
	    }
	    return TemplateParseResult;
	}());
	exports.TemplateParseResult = TemplateParseResult;
	var TemplateParser = (function () {
	    function TemplateParser(_exprParser, _schemaRegistry, _htmlParser, transforms) {
	        this._exprParser = _exprParser;
	        this._schemaRegistry = _schemaRegistry;
	        this._htmlParser = _htmlParser;
	        this.transforms = transforms;
	    }
	    TemplateParser.prototype.parse = function (template, directives, pipes, templateUrl) {
	        var result = this.tryParse(template, directives, pipes, templateUrl);
	        if (lang_1.isPresent(result.errors)) {
	            var errorString = result.errors.join('\n');
	            throw new exceptions_1.BaseException("Template parse errors:\n" + errorString);
	        }
	        return result.templateAst;
	    };
	    TemplateParser.prototype.tryParse = function (template, directives, pipes, templateUrl) {
	        var parseVisitor = new TemplateParseVisitor(directives, pipes, this._exprParser, this._schemaRegistry);
	        var htmlAstWithErrors = this._htmlParser.parse(template, templateUrl);
	        var result = html_ast_1.htmlVisitAll(parseVisitor, htmlAstWithErrors.rootNodes, EMPTY_COMPONENT);
	        var errors = htmlAstWithErrors.errors.concat(parseVisitor.errors);
	        if (errors.length > 0) {
	            return new TemplateParseResult(result, errors);
	        }
	        if (lang_1.isPresent(this.transforms)) {
	            this.transforms.forEach(function (transform) { result = template_ast_1.templateVisitAll(transform, result); });
	        }
	        return new TemplateParseResult(result);
	    };
	    TemplateParser = __decorate([
	        core_1.Injectable(),
	        __param(3, core_1.Optional()),
	        __param(3, core_1.Inject(exports.TEMPLATE_TRANSFORMS)), 
	        __metadata('design:paramtypes', [change_detection_1.Parser, element_schema_registry_1.ElementSchemaRegistry, html_parser_1.HtmlParser, Array])
	    ], TemplateParser);
	    return TemplateParser;
	}());
	exports.TemplateParser = TemplateParser;
	var TemplateParseVisitor = (function () {
	    function TemplateParseVisitor(directives, pipes, _exprParser, _schemaRegistry) {
	        var _this = this;
	        this._exprParser = _exprParser;
	        this._schemaRegistry = _schemaRegistry;
	        this.errors = [];
	        this.directivesIndex = new Map();
	        this.ngContentCount = 0;
	        this.selectorMatcher = new selector_1.SelectorMatcher();
	        collection_1.ListWrapper.forEachWithIndex(directives, function (directive, index) {
	            var selector = selector_1.CssSelector.parse(directive.selector);
	            _this.selectorMatcher.addSelectables(selector, directive);
	            _this.directivesIndex.set(directive, index);
	        });
	        this.pipesByName = new Map();
	        pipes.forEach(function (pipe) { return _this.pipesByName.set(pipe.name, pipe); });
	    }
	    TemplateParseVisitor.prototype._reportError = function (message, sourceSpan) {
	        this.errors.push(new TemplateParseError(message, sourceSpan));
	    };
	    TemplateParseVisitor.prototype._parseInterpolation = function (value, sourceSpan) {
	        var sourceInfo = sourceSpan.start.toString();
	        try {
	            var ast = this._exprParser.parseInterpolation(value, sourceInfo);
	            this._checkPipes(ast, sourceSpan);
	            return ast;
	        }
	        catch (e) {
	            this._reportError("" + e, sourceSpan);
	            return this._exprParser.wrapLiteralPrimitive('ERROR', sourceInfo);
	        }
	    };
	    TemplateParseVisitor.prototype._parseAction = function (value, sourceSpan) {
	        var sourceInfo = sourceSpan.start.toString();
	        try {
	            var ast = this._exprParser.parseAction(value, sourceInfo);
	            this._checkPipes(ast, sourceSpan);
	            return ast;
	        }
	        catch (e) {
	            this._reportError("" + e, sourceSpan);
	            return this._exprParser.wrapLiteralPrimitive('ERROR', sourceInfo);
	        }
	    };
	    TemplateParseVisitor.prototype._parseBinding = function (value, sourceSpan) {
	        var sourceInfo = sourceSpan.start.toString();
	        try {
	            var ast = this._exprParser.parseBinding(value, sourceInfo);
	            this._checkPipes(ast, sourceSpan);
	            return ast;
	        }
	        catch (e) {
	            this._reportError("" + e, sourceSpan);
	            return this._exprParser.wrapLiteralPrimitive('ERROR', sourceInfo);
	        }
	    };
	    TemplateParseVisitor.prototype._parseTemplateBindings = function (value, sourceSpan) {
	        var _this = this;
	        var sourceInfo = sourceSpan.start.toString();
	        try {
	            var bindings = this._exprParser.parseTemplateBindings(value, sourceInfo);
	            bindings.forEach(function (binding) {
	                if (lang_1.isPresent(binding.expression)) {
	                    _this._checkPipes(binding.expression, sourceSpan);
	                }
	            });
	            return bindings;
	        }
	        catch (e) {
	            this._reportError("" + e, sourceSpan);
	            return [];
	        }
	    };
	    TemplateParseVisitor.prototype._checkPipes = function (ast, sourceSpan) {
	        var _this = this;
	        if (lang_1.isPresent(ast)) {
	            var collector = new PipeCollector();
	            ast.visit(collector);
	            collector.pipes.forEach(function (pipeName) {
	                if (!_this.pipesByName.has(pipeName)) {
	                    _this._reportError("The pipe '" + pipeName + "' could not be found", sourceSpan);
	                }
	            });
	        }
	    };
	    TemplateParseVisitor.prototype.visitText = function (ast, component) {
	        var ngContentIndex = component.findNgContentIndex(TEXT_CSS_SELECTOR);
	        var expr = this._parseInterpolation(ast.value, ast.sourceSpan);
	        if (lang_1.isPresent(expr)) {
	            return new template_ast_1.BoundTextAst(expr, ngContentIndex, ast.sourceSpan);
	        }
	        else {
	            return new template_ast_1.TextAst(ast.value, ngContentIndex, ast.sourceSpan);
	        }
	    };
	    TemplateParseVisitor.prototype.visitAttr = function (ast, contex) {
	        return new template_ast_1.AttrAst(ast.name, ast.value, ast.sourceSpan);
	    };
	    TemplateParseVisitor.prototype.visitComment = function (ast, context) { return null; };
	    TemplateParseVisitor.prototype.visitElement = function (element, component) {
	        var _this = this;
	        var nodeName = element.name;
	        var preparsedElement = template_preparser_1.preparseElement(element);
	        if (preparsedElement.type === template_preparser_1.PreparsedElementType.SCRIPT ||
	            preparsedElement.type === template_preparser_1.PreparsedElementType.STYLE) {
	            // Skipping <script> for security reasons
	            // Skipping <style> as we already processed them
	            // in the StyleCompiler
	            return null;
	        }
	        if (preparsedElement.type === template_preparser_1.PreparsedElementType.STYLESHEET &&
	            style_url_resolver_1.isStyleUrlResolvable(preparsedElement.hrefAttr)) {
	            // Skipping stylesheets with either relative urls or package scheme as we already processed
	            // them in the StyleCompiler
	            return null;
	        }
	        var matchableAttrs = [];
	        var elementOrDirectiveProps = [];
	        var vars = [];
	        var events = [];
	        var templateElementOrDirectiveProps = [];
	        var templateVars = [];
	        var templateMatchableAttrs = [];
	        var hasInlineTemplates = false;
	        var attrs = [];
	        element.attrs.forEach(function (attr) {
	            var hasBinding = _this._parseAttr(attr, matchableAttrs, elementOrDirectiveProps, events, vars);
	            var hasTemplateBinding = _this._parseInlineTemplateBinding(attr, templateMatchableAttrs, templateElementOrDirectiveProps, templateVars);
	            if (!hasBinding && !hasTemplateBinding) {
	                // don't include the bindings as attributes as well in the AST
	                attrs.push(_this.visitAttr(attr, null));
	                matchableAttrs.push([attr.name, attr.value]);
	            }
	            if (hasTemplateBinding) {
	                hasInlineTemplates = true;
	            }
	        });
	        var lcElName = html_tags_1.splitNsName(nodeName.toLowerCase())[1];
	        var isTemplateElement = lcElName == TEMPLATE_ELEMENT;
	        var elementCssSelector = createElementCssSelector(nodeName, matchableAttrs);
	        var directives = this._createDirectiveAsts(element.name, this._parseDirectives(this.selectorMatcher, elementCssSelector), elementOrDirectiveProps, isTemplateElement ? [] : vars, element.sourceSpan);
	        var elementProps = this._createElementPropertyAsts(element.name, elementOrDirectiveProps, directives);
	        var children = html_ast_1.htmlVisitAll(preparsedElement.nonBindable ? NON_BINDABLE_VISITOR : this, element.children, Component.create(directives));
	        // Override the actual selector when the `ngProjectAs` attribute is provided
	        var projectionSelector = lang_1.isPresent(preparsedElement.projectAs) ?
	            selector_1.CssSelector.parse(preparsedElement.projectAs)[0] :
	            elementCssSelector;
	        var ngContentIndex = component.findNgContentIndex(projectionSelector);
	        var parsedElement;
	        if (preparsedElement.type === template_preparser_1.PreparsedElementType.NG_CONTENT) {
	            if (lang_1.isPresent(element.children) && element.children.length > 0) {
	                this._reportError("<ng-content> element cannot have content. <ng-content> must be immediately followed by </ng-content>", element.sourceSpan);
	            }
	            parsedElement = new template_ast_1.NgContentAst(this.ngContentCount++, hasInlineTemplates ? null : ngContentIndex, element.sourceSpan);
	        }
	        else if (isTemplateElement) {
	            this._assertAllEventsPublishedByDirectives(directives, events);
	            this._assertNoComponentsNorElementBindingsOnTemplate(directives, elementProps, element.sourceSpan);
	            parsedElement =
	                new template_ast_1.EmbeddedTemplateAst(attrs, events, vars, directives, children, hasInlineTemplates ? null : ngContentIndex, element.sourceSpan);
	        }
	        else {
	            this._assertOnlyOneComponent(directives, element.sourceSpan);
	            var elementExportAsVars = vars.filter(function (varAst) { return varAst.value.length === 0; });
	            var ngContentIndex_1 = hasInlineTemplates ? null : component.findNgContentIndex(projectionSelector);
	            parsedElement =
	                new template_ast_1.ElementAst(nodeName, attrs, elementProps, events, elementExportAsVars, directives, children, hasInlineTemplates ? null : ngContentIndex_1, element.sourceSpan);
	        }
	        if (hasInlineTemplates) {
	            var templateCssSelector = createElementCssSelector(TEMPLATE_ELEMENT, templateMatchableAttrs);
	            var templateDirectives = this._createDirectiveAsts(element.name, this._parseDirectives(this.selectorMatcher, templateCssSelector), templateElementOrDirectiveProps, [], element.sourceSpan);
	            var templateElementProps = this._createElementPropertyAsts(element.name, templateElementOrDirectiveProps, templateDirectives);
	            this._assertNoComponentsNorElementBindingsOnTemplate(templateDirectives, templateElementProps, element.sourceSpan);
	            parsedElement = new template_ast_1.EmbeddedTemplateAst([], [], templateVars, templateDirectives, [parsedElement], ngContentIndex, element.sourceSpan);
	        }
	        return parsedElement;
	    };
	    TemplateParseVisitor.prototype._parseInlineTemplateBinding = function (attr, targetMatchableAttrs, targetProps, targetVars) {
	        var templateBindingsSource = null;
	        if (attr.name == TEMPLATE_ATTR) {
	            templateBindingsSource = attr.value;
	        }
	        else if (attr.name.startsWith(TEMPLATE_ATTR_PREFIX)) {
	            var key = attr.name.substring(TEMPLATE_ATTR_PREFIX.length); // remove the star
	            templateBindingsSource = (attr.value.length == 0) ? key : key + ' ' + attr.value;
	        }
	        if (lang_1.isPresent(templateBindingsSource)) {
	            var bindings = this._parseTemplateBindings(templateBindingsSource, attr.sourceSpan);
	            for (var i = 0; i < bindings.length; i++) {
	                var binding = bindings[i];
	                if (binding.keyIsVar) {
	                    targetVars.push(new template_ast_1.VariableAst(binding.key, binding.name, attr.sourceSpan));
	                    targetMatchableAttrs.push([binding.key, binding.name]);
	                }
	                else if (lang_1.isPresent(binding.expression)) {
	                    this._parsePropertyAst(binding.key, binding.expression, attr.sourceSpan, targetMatchableAttrs, targetProps);
	                }
	                else {
	                    targetMatchableAttrs.push([binding.key, '']);
	                    this._parseLiteralAttr(binding.key, null, attr.sourceSpan, targetProps);
	                }
	            }
	            return true;
	        }
	        return false;
	    };
	    TemplateParseVisitor.prototype._parseAttr = function (attr, targetMatchableAttrs, targetProps, targetEvents, targetVars) {
	        var attrName = this._normalizeAttributeName(attr.name);
	        var attrValue = attr.value;
	        var bindParts = lang_1.RegExpWrapper.firstMatch(BIND_NAME_REGEXP, attrName);
	        var hasBinding = false;
	        if (lang_1.isPresent(bindParts)) {
	            hasBinding = true;
	            if (lang_1.isPresent(bindParts[1])) {
	                this._parseProperty(bindParts[5], attrValue, attr.sourceSpan, targetMatchableAttrs, targetProps);
	            }
	            else if (lang_1.isPresent(bindParts[2])) {
	                var identifier = bindParts[5];
	                this._parseVariable(identifier, attrValue, attr.sourceSpan, targetVars);
	            }
	            else if (lang_1.isPresent(bindParts[3])) {
	                this._parseEvent(bindParts[5], attrValue, attr.sourceSpan, targetMatchableAttrs, targetEvents);
	            }
	            else if (lang_1.isPresent(bindParts[4])) {
	                this._parseProperty(bindParts[5], attrValue, attr.sourceSpan, targetMatchableAttrs, targetProps);
	                this._parseAssignmentEvent(bindParts[5], attrValue, attr.sourceSpan, targetMatchableAttrs, targetEvents);
	            }
	            else if (lang_1.isPresent(bindParts[6])) {
	                this._parseProperty(bindParts[6], attrValue, attr.sourceSpan, targetMatchableAttrs, targetProps);
	                this._parseAssignmentEvent(bindParts[6], attrValue, attr.sourceSpan, targetMatchableAttrs, targetEvents);
	            }
	            else if (lang_1.isPresent(bindParts[7])) {
	                this._parseProperty(bindParts[7], attrValue, attr.sourceSpan, targetMatchableAttrs, targetProps);
	            }
	            else if (lang_1.isPresent(bindParts[8])) {
	                this._parseEvent(bindParts[8], attrValue, attr.sourceSpan, targetMatchableAttrs, targetEvents);
	            }
	        }
	        else {
	            hasBinding = this._parsePropertyInterpolation(attrName, attrValue, attr.sourceSpan, targetMatchableAttrs, targetProps);
	        }
	        if (!hasBinding) {
	            this._parseLiteralAttr(attrName, attrValue, attr.sourceSpan, targetProps);
	        }
	        return hasBinding;
	    };
	    TemplateParseVisitor.prototype._normalizeAttributeName = function (attrName) {
	        return attrName.toLowerCase().startsWith('data-') ? attrName.substring(5) : attrName;
	    };
	    TemplateParseVisitor.prototype._parseVariable = function (identifier, value, sourceSpan, targetVars) {
	        if (identifier.indexOf('-') > -1) {
	            this._reportError("\"-\" is not allowed in variable names", sourceSpan);
	        }
	        targetVars.push(new template_ast_1.VariableAst(identifier, value, sourceSpan));
	    };
	    TemplateParseVisitor.prototype._parseProperty = function (name, expression, sourceSpan, targetMatchableAttrs, targetProps) {
	        this._parsePropertyAst(name, this._parseBinding(expression, sourceSpan), sourceSpan, targetMatchableAttrs, targetProps);
	    };
	    TemplateParseVisitor.prototype._parsePropertyInterpolation = function (name, value, sourceSpan, targetMatchableAttrs, targetProps) {
	        var expr = this._parseInterpolation(value, sourceSpan);
	        if (lang_1.isPresent(expr)) {
	            this._parsePropertyAst(name, expr, sourceSpan, targetMatchableAttrs, targetProps);
	            return true;
	        }
	        return false;
	    };
	    TemplateParseVisitor.prototype._parsePropertyAst = function (name, ast, sourceSpan, targetMatchableAttrs, targetProps) {
	        targetMatchableAttrs.push([name, ast.source]);
	        targetProps.push(new BoundElementOrDirectiveProperty(name, ast, false, sourceSpan));
	    };
	    TemplateParseVisitor.prototype._parseAssignmentEvent = function (name, expression, sourceSpan, targetMatchableAttrs, targetEvents) {
	        this._parseEvent(name + "Change", expression + "=$event", sourceSpan, targetMatchableAttrs, targetEvents);
	    };
	    TemplateParseVisitor.prototype._parseEvent = function (name, expression, sourceSpan, targetMatchableAttrs, targetEvents) {
	        // long format: 'target: eventName'
	        var parts = util_1.splitAtColon(name, [null, name]);
	        var target = parts[0];
	        var eventName = parts[1];
	        var ast = this._parseAction(expression, sourceSpan);
	        targetMatchableAttrs.push([name, ast.source]);
	        targetEvents.push(new template_ast_1.BoundEventAst(eventName, target, ast, sourceSpan));
	        // Don't detect directives for event names for now,
	        // so don't add the event name to the matchableAttrs
	    };
	    TemplateParseVisitor.prototype._parseLiteralAttr = function (name, value, sourceSpan, targetProps) {
	        targetProps.push(new BoundElementOrDirectiveProperty(name, this._exprParser.wrapLiteralPrimitive(value, ''), true, sourceSpan));
	    };
	    TemplateParseVisitor.prototype._parseDirectives = function (selectorMatcher, elementCssSelector) {
	        var _this = this;
	        var directives = [];
	        selectorMatcher.match(elementCssSelector, function (selector, directive) { directives.push(directive); });
	        // Need to sort the directives so that we get consistent results throughout,
	        // as selectorMatcher uses Maps inside.
	        // Also need to make components the first directive in the array
	        collection_1.ListWrapper.sort(directives, function (dir1, dir2) {
	            var dir1Comp = dir1.isComponent;
	            var dir2Comp = dir2.isComponent;
	            if (dir1Comp && !dir2Comp) {
	                return -1;
	            }
	            else if (!dir1Comp && dir2Comp) {
	                return 1;
	            }
	            else {
	                return _this.directivesIndex.get(dir1) - _this.directivesIndex.get(dir2);
	            }
	        });
	        return directives;
	    };
	    TemplateParseVisitor.prototype._createDirectiveAsts = function (elementName, directives, props, possibleExportAsVars, sourceSpan) {
	        var _this = this;
	        var matchedVariables = new Set();
	        var directiveAsts = directives.map(function (directive) {
	            var hostProperties = [];
	            var hostEvents = [];
	            var directiveProperties = [];
	            _this._createDirectiveHostPropertyAsts(elementName, directive.hostProperties, sourceSpan, hostProperties);
	            _this._createDirectiveHostEventAsts(directive.hostListeners, sourceSpan, hostEvents);
	            _this._createDirectivePropertyAsts(directive.inputs, props, directiveProperties);
	            var exportAsVars = [];
	            possibleExportAsVars.forEach(function (varAst) {
	                if ((varAst.value.length === 0 && directive.isComponent) ||
	                    (directive.exportAs == varAst.value)) {
	                    exportAsVars.push(varAst);
	                    matchedVariables.add(varAst.name);
	                }
	            });
	            return new template_ast_1.DirectiveAst(directive, directiveProperties, hostProperties, hostEvents, exportAsVars, sourceSpan);
	        });
	        possibleExportAsVars.forEach(function (varAst) {
	            if (varAst.value.length > 0 && !collection_1.SetWrapper.has(matchedVariables, varAst.name)) {
	                _this._reportError("There is no directive with \"exportAs\" set to \"" + varAst.value + "\"", varAst.sourceSpan);
	            }
	        });
	        return directiveAsts;
	    };
	    TemplateParseVisitor.prototype._createDirectiveHostPropertyAsts = function (elementName, hostProps, sourceSpan, targetPropertyAsts) {
	        var _this = this;
	        if (lang_1.isPresent(hostProps)) {
	            collection_1.StringMapWrapper.forEach(hostProps, function (expression, propName) {
	                var exprAst = _this._parseBinding(expression, sourceSpan);
	                targetPropertyAsts.push(_this._createElementPropertyAst(elementName, propName, exprAst, sourceSpan));
	            });
	        }
	    };
	    TemplateParseVisitor.prototype._createDirectiveHostEventAsts = function (hostListeners, sourceSpan, targetEventAsts) {
	        var _this = this;
	        if (lang_1.isPresent(hostListeners)) {
	            collection_1.StringMapWrapper.forEach(hostListeners, function (expression, propName) {
	                _this._parseEvent(propName, expression, sourceSpan, [], targetEventAsts);
	            });
	        }
	    };
	    TemplateParseVisitor.prototype._createDirectivePropertyAsts = function (directiveProperties, boundProps, targetBoundDirectiveProps) {
	        if (lang_1.isPresent(directiveProperties)) {
	            var boundPropsByName = new Map();
	            boundProps.forEach(function (boundProp) {
	                var prevValue = boundPropsByName.get(boundProp.name);
	                if (lang_1.isBlank(prevValue) || prevValue.isLiteral) {
	                    // give [a]="b" a higher precedence than a="b" on the same element
	                    boundPropsByName.set(boundProp.name, boundProp);
	                }
	            });
	            collection_1.StringMapWrapper.forEach(directiveProperties, function (elProp, dirProp) {
	                var boundProp = boundPropsByName.get(elProp);
	                // Bindings are optional, so this binding only needs to be set up if an expression is given.
	                if (lang_1.isPresent(boundProp)) {
	                    targetBoundDirectiveProps.push(new template_ast_1.BoundDirectivePropertyAst(dirProp, boundProp.name, boundProp.expression, boundProp.sourceSpan));
	                }
	            });
	        }
	    };
	    TemplateParseVisitor.prototype._createElementPropertyAsts = function (elementName, props, directives) {
	        var _this = this;
	        var boundElementProps = [];
	        var boundDirectivePropsIndex = new Map();
	        directives.forEach(function (directive) {
	            directive.inputs.forEach(function (prop) {
	                boundDirectivePropsIndex.set(prop.templateName, prop);
	            });
	        });
	        props.forEach(function (prop) {
	            if (!prop.isLiteral && lang_1.isBlank(boundDirectivePropsIndex.get(prop.name))) {
	                boundElementProps.push(_this._createElementPropertyAst(elementName, prop.name, prop.expression, prop.sourceSpan));
	            }
	        });
	        return boundElementProps;
	    };
	    TemplateParseVisitor.prototype._createElementPropertyAst = function (elementName, name, ast, sourceSpan) {
	        var unit = null;
	        var bindingType;
	        var boundPropertyName;
	        var parts = name.split(PROPERTY_PARTS_SEPARATOR);
	        if (parts.length === 1) {
	            boundPropertyName = this._schemaRegistry.getMappedPropName(parts[0]);
	            bindingType = template_ast_1.PropertyBindingType.Property;
	            if (!this._schemaRegistry.hasProperty(elementName, boundPropertyName)) {
	                this._reportError("Can't bind to '" + boundPropertyName + "' since it isn't a known native property", sourceSpan);
	            }
	        }
	        else {
	            if (parts[0] == ATTRIBUTE_PREFIX) {
	                boundPropertyName = parts[1];
	                var nsSeparatorIdx = boundPropertyName.indexOf(':');
	                if (nsSeparatorIdx > -1) {
	                    var ns = boundPropertyName.substring(0, nsSeparatorIdx);
	                    var name_1 = boundPropertyName.substring(nsSeparatorIdx + 1);
	                    boundPropertyName = html_tags_1.mergeNsAndName(ns, name_1);
	                }
	                bindingType = template_ast_1.PropertyBindingType.Attribute;
	            }
	            else if (parts[0] == CLASS_PREFIX) {
	                boundPropertyName = parts[1];
	                bindingType = template_ast_1.PropertyBindingType.Class;
	            }
	            else if (parts[0] == STYLE_PREFIX) {
	                unit = parts.length > 2 ? parts[2] : null;
	                boundPropertyName = parts[1];
	                bindingType = template_ast_1.PropertyBindingType.Style;
	            }
	            else {
	                this._reportError("Invalid property name '" + name + "'", sourceSpan);
	                bindingType = null;
	            }
	        }
	        return new template_ast_1.BoundElementPropertyAst(boundPropertyName, bindingType, ast, unit, sourceSpan);
	    };
	    TemplateParseVisitor.prototype._findComponentDirectiveNames = function (directives) {
	        var componentTypeNames = [];
	        directives.forEach(function (directive) {
	            var typeName = directive.directive.type.name;
	            if (directive.directive.isComponent) {
	                componentTypeNames.push(typeName);
	            }
	        });
	        return componentTypeNames;
	    };
	    TemplateParseVisitor.prototype._assertOnlyOneComponent = function (directives, sourceSpan) {
	        var componentTypeNames = this._findComponentDirectiveNames(directives);
	        if (componentTypeNames.length > 1) {
	            this._reportError("More than one component: " + componentTypeNames.join(','), sourceSpan);
	        }
	    };
	    TemplateParseVisitor.prototype._assertNoComponentsNorElementBindingsOnTemplate = function (directives, elementProps, sourceSpan) {
	        var _this = this;
	        var componentTypeNames = this._findComponentDirectiveNames(directives);
	        if (componentTypeNames.length > 0) {
	            this._reportError("Components on an embedded template: " + componentTypeNames.join(','), sourceSpan);
	        }
	        elementProps.forEach(function (prop) {
	            _this._reportError("Property binding " + prop.name + " not used by any directive on an embedded template", sourceSpan);
	        });
	    };
	    TemplateParseVisitor.prototype._assertAllEventsPublishedByDirectives = function (directives, events) {
	        var _this = this;
	        var allDirectiveEvents = new Set();
	        directives.forEach(function (directive) {
	            collection_1.StringMapWrapper.forEach(directive.directive.outputs, function (eventName, _) { allDirectiveEvents.add(eventName); });
	        });
	        events.forEach(function (event) {
	            if (lang_1.isPresent(event.target) || !collection_1.SetWrapper.has(allDirectiveEvents, event.name)) {
	                _this._reportError("Event binding " + event.fullName + " not emitted by any directive on an embedded template", event.sourceSpan);
	            }
	        });
	    };
	    return TemplateParseVisitor;
	}());
	var NonBindableVisitor = (function () {
	    function NonBindableVisitor() {
	    }
	    NonBindableVisitor.prototype.visitElement = function (ast, component) {
	        var preparsedElement = template_preparser_1.preparseElement(ast);
	        if (preparsedElement.type === template_preparser_1.PreparsedElementType.SCRIPT ||
	            preparsedElement.type === template_preparser_1.PreparsedElementType.STYLE ||
	            preparsedElement.type === template_preparser_1.PreparsedElementType.STYLESHEET) {
	            // Skipping <script> for security reasons
	            // Skipping <style> and stylesheets as we already processed them
	            // in the StyleCompiler
	            return null;
	        }
	        var attrNameAndValues = ast.attrs.map(function (attrAst) { return [attrAst.name, attrAst.value]; });
	        var selector = createElementCssSelector(ast.name, attrNameAndValues);
	        var ngContentIndex = component.findNgContentIndex(selector);
	        var children = html_ast_1.htmlVisitAll(this, ast.children, EMPTY_COMPONENT);
	        return new template_ast_1.ElementAst(ast.name, html_ast_1.htmlVisitAll(this, ast.attrs), [], [], [], [], children, ngContentIndex, ast.sourceSpan);
	    };
	    NonBindableVisitor.prototype.visitComment = function (ast, context) { return null; };
	    NonBindableVisitor.prototype.visitAttr = function (ast, context) {
	        return new template_ast_1.AttrAst(ast.name, ast.value, ast.sourceSpan);
	    };
	    NonBindableVisitor.prototype.visitText = function (ast, component) {
	        var ngContentIndex = component.findNgContentIndex(TEXT_CSS_SELECTOR);
	        return new template_ast_1.TextAst(ast.value, ngContentIndex, ast.sourceSpan);
	    };
	    return NonBindableVisitor;
	}());
	var BoundElementOrDirectiveProperty = (function () {
	    function BoundElementOrDirectiveProperty(name, expression, isLiteral, sourceSpan) {
	        this.name = name;
	        this.expression = expression;
	        this.isLiteral = isLiteral;
	        this.sourceSpan = sourceSpan;
	    }
	    return BoundElementOrDirectiveProperty;
	}());
	function splitClasses(classAttrValue) {
	    return lang_1.StringWrapper.split(classAttrValue.trim(), /\s+/g);
	}
	exports.splitClasses = splitClasses;
	var Component = (function () {
	    function Component(ngContentIndexMatcher, wildcardNgContentIndex) {
	        this.ngContentIndexMatcher = ngContentIndexMatcher;
	        this.wildcardNgContentIndex = wildcardNgContentIndex;
	    }
	    Component.create = function (directives) {
	        if (directives.length === 0 || !directives[0].directive.isComponent) {
	            return EMPTY_COMPONENT;
	        }
	        var matcher = new selector_1.SelectorMatcher();
	        var ngContentSelectors = directives[0].directive.template.ngContentSelectors;
	        var wildcardNgContentIndex = null;
	        for (var i = 0; i < ngContentSelectors.length; i++) {
	            var selector = ngContentSelectors[i];
	            if (lang_1.StringWrapper.equals(selector, '*')) {
	                wildcardNgContentIndex = i;
	            }
	            else {
	                matcher.addSelectables(selector_1.CssSelector.parse(ngContentSelectors[i]), i);
	            }
	        }
	        return new Component(matcher, wildcardNgContentIndex);
	    };
	    Component.prototype.findNgContentIndex = function (selector) {
	        var ngContentIndices = [];
	        this.ngContentIndexMatcher.match(selector, function (selector, ngContentIndex) { ngContentIndices.push(ngContentIndex); });
	        collection_1.ListWrapper.sort(ngContentIndices);
	        if (lang_1.isPresent(this.wildcardNgContentIndex)) {
	            ngContentIndices.push(this.wildcardNgContentIndex);
	        }
	        return ngContentIndices.length > 0 ? ngContentIndices[0] : null;
	    };
	    return Component;
	}());
	function createElementCssSelector(elementName, matchableAttrs) {
	    var cssSelector = new selector_1.CssSelector();
	    var elNameNoNs = html_tags_1.splitNsName(elementName)[1];
	    cssSelector.setElement(elNameNoNs);
	    for (var i = 0; i < matchableAttrs.length; i++) {
	        var attrName = matchableAttrs[i][0];
	        var attrNameNoNs = html_tags_1.splitNsName(attrName)[1];
	        var attrValue = matchableAttrs[i][1];
	        cssSelector.addAttribute(attrNameNoNs, attrValue);
	        if (attrName.toLowerCase() == CLASS_ATTR) {
	            var classes = splitClasses(attrValue);
	            classes.forEach(function (className) { return cssSelector.addClassName(className); });
	        }
	    }
	    return cssSelector;
	}
	var EMPTY_COMPONENT = new Component(new selector_1.SelectorMatcher(), null);
	var NON_BINDABLE_VISITOR = new NonBindableVisitor();
	var PipeCollector = (function (_super) {
	    __extends(PipeCollector, _super);
	    function PipeCollector() {
	        _super.apply(this, arguments);
	        this.pipes = new Set();
	    }
	    PipeCollector.prototype.visitPipe = function (ast) {
	        this.pipes.add(ast.name);
	        ast.exp.visit(this);
	        this.visitAll(ast.args);
	        return null;
	    };
	    return PipeCollector;
	}(ast_1.RecursiveAstVisitor));
	exports.PipeCollector = PipeCollector;


/***/ },
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var di_1 = __webpack_require__(5);
	var animation_builder_1 = __webpack_require__(118);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var shared_styles_host_1 = __webpack_require__(62);
	var event_manager_1 = __webpack_require__(28);
	var dom_tokens_1 = __webpack_require__(41);
	var metadata_1 = __webpack_require__(58);
	var dom_adapter_1 = __webpack_require__(7);
	var util_1 = __webpack_require__(178);
	var NAMESPACE_URIS = lang_1.CONST_EXPR({ 'xlink': 'http://www.w3.org/1999/xlink', 'svg': 'http://www.w3.org/2000/svg' });
	var TEMPLATE_COMMENT_TEXT = 'template bindings={}';
	var TEMPLATE_BINDINGS_EXP = /^template bindings=(.*)$/g;
	var DomRootRenderer = (function () {
	    function DomRootRenderer(document, eventManager, sharedStylesHost, animate) {
	        this.document = document;
	        this.eventManager = eventManager;
	        this.sharedStylesHost = sharedStylesHost;
	        this.animate = animate;
	        this._registeredComponents = new Map();
	    }
	    DomRootRenderer.prototype.renderComponent = function (componentProto) {
	        var renderer = this._registeredComponents.get(componentProto.id);
	        if (lang_1.isBlank(renderer)) {
	            renderer = new DomRenderer(this, componentProto);
	            this._registeredComponents.set(componentProto.id, renderer);
	        }
	        return renderer;
	    };
	    return DomRootRenderer;
	}());
	exports.DomRootRenderer = DomRootRenderer;
	var DomRootRenderer_ = (function (_super) {
	    __extends(DomRootRenderer_, _super);
	    function DomRootRenderer_(_document, _eventManager, sharedStylesHost, animate) {
	        _super.call(this, _document, _eventManager, sharedStylesHost, animate);
	    }
	    DomRootRenderer_ = __decorate([
	        di_1.Injectable(),
	        __param(0, di_1.Inject(dom_tokens_1.DOCUMENT)), 
	        __metadata('design:paramtypes', [Object, event_manager_1.EventManager, shared_styles_host_1.DomSharedStylesHost, animation_builder_1.AnimationBuilder])
	    ], DomRootRenderer_);
	    return DomRootRenderer_;
	}(DomRootRenderer));
	exports.DomRootRenderer_ = DomRootRenderer_;
	var DomRenderer = (function () {
	    function DomRenderer(_rootRenderer, componentProto) {
	        this._rootRenderer = _rootRenderer;
	        this.componentProto = componentProto;
	        this._styles = _flattenStyles(componentProto.id, componentProto.styles, []);
	        if (componentProto.encapsulation !== metadata_1.ViewEncapsulation.Native) {
	            this._rootRenderer.sharedStylesHost.addStyles(this._styles);
	        }
	        if (this.componentProto.encapsulation === metadata_1.ViewEncapsulation.Emulated) {
	            this._contentAttr = _shimContentAttribute(componentProto.id);
	            this._hostAttr = _shimHostAttribute(componentProto.id);
	        }
	        else {
	            this._contentAttr = null;
	            this._hostAttr = null;
	        }
	    }
	    DomRenderer.prototype.renderComponent = function (componentProto) {
	        return this._rootRenderer.renderComponent(componentProto);
	    };
	    DomRenderer.prototype.selectRootElement = function (selector) {
	        var el = dom_adapter_1.DOM.querySelector(this._rootRenderer.document, selector);
	        if (lang_1.isBlank(el)) {
	            throw new exceptions_1.BaseException("The selector \"" + selector + "\" did not match any elements");
	        }
	        dom_adapter_1.DOM.clearNodes(el);
	        return el;
	    };
	    DomRenderer.prototype.createElement = function (parent, name) {
	        var nsAndName = splitNamespace(name);
	        var el = lang_1.isPresent(nsAndName[0]) ?
	            dom_adapter_1.DOM.createElementNS(NAMESPACE_URIS[nsAndName[0]], nsAndName[1]) :
	            dom_adapter_1.DOM.createElement(nsAndName[1]);
	        if (lang_1.isPresent(this._contentAttr)) {
	            dom_adapter_1.DOM.setAttribute(el, this._contentAttr, '');
	        }
	        if (lang_1.isPresent(parent)) {
	            dom_adapter_1.DOM.appendChild(parent, el);
	        }
	        return el;
	    };
	    DomRenderer.prototype.createViewRoot = function (hostElement) {
	        var nodesParent;
	        if (this.componentProto.encapsulation === metadata_1.ViewEncapsulation.Native) {
	            nodesParent = dom_adapter_1.DOM.createShadowRoot(hostElement);
	            this._rootRenderer.sharedStylesHost.addHost(nodesParent);
	            for (var i = 0; i < this._styles.length; i++) {
	                dom_adapter_1.DOM.appendChild(nodesParent, dom_adapter_1.DOM.createStyleElement(this._styles[i]));
	            }
	        }
	        else {
	            if (lang_1.isPresent(this._hostAttr)) {
	                dom_adapter_1.DOM.setAttribute(hostElement, this._hostAttr, '');
	            }
	            nodesParent = hostElement;
	        }
	        return nodesParent;
	    };
	    DomRenderer.prototype.createTemplateAnchor = function (parentElement) {
	        var comment = dom_adapter_1.DOM.createComment(TEMPLATE_COMMENT_TEXT);
	        if (lang_1.isPresent(parentElement)) {
	            dom_adapter_1.DOM.appendChild(parentElement, comment);
	        }
	        return comment;
	    };
	    DomRenderer.prototype.createText = function (parentElement, value) {
	        var node = dom_adapter_1.DOM.createTextNode(value);
	        if (lang_1.isPresent(parentElement)) {
	            dom_adapter_1.DOM.appendChild(parentElement, node);
	        }
	        return node;
	    };
	    DomRenderer.prototype.projectNodes = function (parentElement, nodes) {
	        if (lang_1.isBlank(parentElement))
	            return;
	        appendNodes(parentElement, nodes);
	    };
	    DomRenderer.prototype.attachViewAfter = function (node, viewRootNodes) {
	        moveNodesAfterSibling(node, viewRootNodes);
	        for (var i = 0; i < viewRootNodes.length; i++)
	            this.animateNodeEnter(viewRootNodes[i]);
	    };
	    DomRenderer.prototype.detachView = function (viewRootNodes) {
	        for (var i = 0; i < viewRootNodes.length; i++) {
	            var node = viewRootNodes[i];
	            dom_adapter_1.DOM.remove(node);
	            this.animateNodeLeave(node);
	        }
	    };
	    DomRenderer.prototype.destroyView = function (hostElement, viewAllNodes) {
	        if (this.componentProto.encapsulation === metadata_1.ViewEncapsulation.Native && lang_1.isPresent(hostElement)) {
	            this._rootRenderer.sharedStylesHost.removeHost(dom_adapter_1.DOM.getShadowRoot(hostElement));
	        }
	    };
	    DomRenderer.prototype.listen = function (renderElement, name, callback) {
	        return this._rootRenderer.eventManager.addEventListener(renderElement, name, decoratePreventDefault(callback));
	    };
	    DomRenderer.prototype.listenGlobal = function (target, name, callback) {
	        return this._rootRenderer.eventManager.addGlobalEventListener(target, name, decoratePreventDefault(callback));
	    };
	    DomRenderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) {
	        dom_adapter_1.DOM.setProperty(renderElement, propertyName, propertyValue);
	    };
	    DomRenderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) {
	        var attrNs;
	        var nsAndName = splitNamespace(attributeName);
	        if (lang_1.isPresent(nsAndName[0])) {
	            attributeName = nsAndName[0] + ':' + nsAndName[1];
	            attrNs = NAMESPACE_URIS[nsAndName[0]];
	        }
	        if (lang_1.isPresent(attributeValue)) {
	            if (lang_1.isPresent(attrNs)) {
	                dom_adapter_1.DOM.setAttributeNS(renderElement, attrNs, attributeName, attributeValue);
	            }
	            else {
	                dom_adapter_1.DOM.setAttribute(renderElement, attributeName, attributeValue);
	            }
	        }
	        else {
	            if (lang_1.isPresent(attrNs)) {
	                dom_adapter_1.DOM.removeAttributeNS(renderElement, attrNs, nsAndName[1]);
	            }
	            else {
	                dom_adapter_1.DOM.removeAttribute(renderElement, attributeName);
	            }
	        }
	    };
	    DomRenderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) {
	        var dashCasedPropertyName = util_1.camelCaseToDashCase(propertyName);
	        if (dom_adapter_1.DOM.isCommentNode(renderElement)) {
	            var existingBindings = lang_1.RegExpWrapper.firstMatch(TEMPLATE_BINDINGS_EXP, lang_1.StringWrapper.replaceAll(dom_adapter_1.DOM.getText(renderElement), /\n/g, ''));
	            var parsedBindings = lang_1.Json.parse(existingBindings[1]);
	            parsedBindings[dashCasedPropertyName] = propertyValue;
	            dom_adapter_1.DOM.setText(renderElement, lang_1.StringWrapper.replace(TEMPLATE_COMMENT_TEXT, '{}', lang_1.Json.stringify(parsedBindings)));
	        }
	        else {
	            this.setElementAttribute(renderElement, propertyName, propertyValue);
	        }
	    };
	    DomRenderer.prototype.setElementDebugInfo = function (renderElement, info) { };
	    DomRenderer.prototype.setElementClass = function (renderElement, className, isAdd) {
	        if (isAdd) {
	            dom_adapter_1.DOM.addClass(renderElement, className);
	        }
	        else {
	            dom_adapter_1.DOM.removeClass(renderElement, className);
	        }
	    };
	    DomRenderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) {
	        if (lang_1.isPresent(styleValue)) {
	            dom_adapter_1.DOM.setStyle(renderElement, styleName, lang_1.stringify(styleValue));
	        }
	        else {
	            dom_adapter_1.DOM.removeStyle(renderElement, styleName);
	        }
	    };
	    DomRenderer.prototype.invokeElementMethod = function (renderElement, methodName, args) {
	        dom_adapter_1.DOM.invoke(renderElement, methodName, args);
	    };
	    DomRenderer.prototype.setText = function (renderNode, text) { dom_adapter_1.DOM.setText(renderNode, text); };
	    /**
	     * Performs animations if necessary
	     * @param node
	     */
	    DomRenderer.prototype.animateNodeEnter = function (node) {
	        if (dom_adapter_1.DOM.isElementNode(node) && dom_adapter_1.DOM.hasClass(node, 'ng-animate')) {
	            dom_adapter_1.DOM.addClass(node, 'ng-enter');
	            this._rootRenderer.animate.css()
	                .addAnimationClass('ng-enter-active')
	                .start(node)
	                .onComplete(function () { dom_adapter_1.DOM.removeClass(node, 'ng-enter'); });
	        }
	    };
	    /**
	     * If animations are necessary, performs animations then removes the element; otherwise, it just
	     * removes the element.
	     * @param node
	     */
	    DomRenderer.prototype.animateNodeLeave = function (node) {
	        if (dom_adapter_1.DOM.isElementNode(node) && dom_adapter_1.DOM.hasClass(node, 'ng-animate')) {
	            dom_adapter_1.DOM.addClass(node, 'ng-leave');
	            this._rootRenderer.animate.css()
	                .addAnimationClass('ng-leave-active')
	                .start(node)
	                .onComplete(function () {
	                dom_adapter_1.DOM.removeClass(node, 'ng-leave');
	                dom_adapter_1.DOM.remove(node);
	            });
	        }
	        else {
	            dom_adapter_1.DOM.remove(node);
	        }
	    };
	    return DomRenderer;
	}());
	exports.DomRenderer = DomRenderer;
	function moveNodesAfterSibling(sibling, nodes) {
	    var parent = dom_adapter_1.DOM.parentElement(sibling);
	    if (nodes.length > 0 && lang_1.isPresent(parent)) {
	        var nextSibling = dom_adapter_1.DOM.nextSibling(sibling);
	        if (lang_1.isPresent(nextSibling)) {
	            for (var i = 0; i < nodes.length; i++) {
	                dom_adapter_1.DOM.insertBefore(nextSibling, nodes[i]);
	            }
	        }
	        else {
	            for (var i = 0; i < nodes.length; i++) {
	                dom_adapter_1.DOM.appendChild(parent, nodes[i]);
	            }
	        }
	    }
	}
	function appendNodes(parent, nodes) {
	    for (var i = 0; i < nodes.length; i++) {
	        dom_adapter_1.DOM.appendChild(parent, nodes[i]);
	    }
	}
	function decoratePreventDefault(eventHandler) {
	    return function (event) {
	        var allowDefaultBehavior = eventHandler(event);
	        if (allowDefaultBehavior === false) {
	            // TODO(tbosch): move preventDefault into event plugins...
	            dom_adapter_1.DOM.preventDefault(event);
	        }
	    };
	}
	var COMPONENT_REGEX = /%COMP%/g;
	exports.COMPONENT_VARIABLE = '%COMP%';
	exports.HOST_ATTR = "_nghost-" + exports.COMPONENT_VARIABLE;
	exports.CONTENT_ATTR = "_ngcontent-" + exports.COMPONENT_VARIABLE;
	function _shimContentAttribute(componentShortId) {
	    return lang_1.StringWrapper.replaceAll(exports.CONTENT_ATTR, COMPONENT_REGEX, componentShortId);
	}
	function _shimHostAttribute(componentShortId) {
	    return lang_1.StringWrapper.replaceAll(exports.HOST_ATTR, COMPONENT_REGEX, componentShortId);
	}
	function _flattenStyles(compId, styles, target) {
	    for (var i = 0; i < styles.length; i++) {
	        var style = styles[i];
	        if (lang_1.isArray(style)) {
	            _flattenStyles(compId, style, target);
	        }
	        else {
	            style = lang_1.StringWrapper.replaceAll(style, COMPONENT_REGEX, compId);
	            target.push(style);
	        }
	    }
	    return target;
	}
	var NS_PREFIX_RE = /^@([^:]+):(.+)/g;
	function splitNamespace(name) {
	    if (name[0] != '@') {
	        return [null, name];
	    }
	    var match = lang_1.RegExpWrapper.firstMatch(NS_PREFIX_RE, name);
	    return [match[1], match[2]];
	}


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var hammer_common_1 = __webpack_require__(280);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var core_1 = __webpack_require__(3);
	exports.HAMMER_GESTURE_CONFIG = lang_1.CONST_EXPR(new core_1.OpaqueToken("HammerGestureConfig"));
	var HammerGestureConfig = (function () {
	    function HammerGestureConfig() {
	        this.events = [];
	        this.overrides = {};
	    }
	    HammerGestureConfig.prototype.buildHammer = function (element) {
	        var mc = new Hammer(element);
	        mc.get('pinch').set({ enable: true });
	        mc.get('rotate').set({ enable: true });
	        for (var eventName in this.overrides) {
	            mc.get(eventName).set(this.overrides[eventName]);
	        }
	        return mc;
	    };
	    HammerGestureConfig = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], HammerGestureConfig);
	    return HammerGestureConfig;
	}());
	exports.HammerGestureConfig = HammerGestureConfig;
	var HammerGesturesPlugin = (function (_super) {
	    __extends(HammerGesturesPlugin, _super);
	    function HammerGesturesPlugin(_config) {
	        _super.call(this);
	        this._config = _config;
	    }
	    HammerGesturesPlugin.prototype.supports = function (eventName) {
	        if (!_super.prototype.supports.call(this, eventName) && !this.isCustomEvent(eventName))
	            return false;
	        if (!lang_1.isPresent(window['Hammer'])) {
	            throw new exceptions_1.BaseException("Hammer.js is not loaded, can not bind " + eventName + " event");
	        }
	        return true;
	    };
	    HammerGesturesPlugin.prototype.addEventListener = function (element, eventName, handler) {
	        var _this = this;
	        var zone = this.manager.getZone();
	        eventName = eventName.toLowerCase();
	        return zone.runOutsideAngular(function () {
	            // Creating the manager bind events, must be done outside of angular
	            var mc = _this._config.buildHammer(element);
	            var callback = function (eventObj) { zone.run(function () { handler(eventObj); }); };
	            mc.on(eventName, callback);
	            return function () { mc.off(eventName, callback); };
	        });
	    };
	    HammerGesturesPlugin.prototype.isCustomEvent = function (eventName) { return this._config.events.indexOf(eventName) > -1; };
	    HammerGesturesPlugin = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject(exports.HAMMER_GESTURE_CONFIG)), 
	        __metadata('design:paramtypes', [HammerGestureConfig])
	    ], HammerGesturesPlugin);
	    return HammerGesturesPlugin;
	}(hammer_common_1.HammerGesturesPluginCommon));
	exports.HammerGesturesPlugin = HammerGesturesPlugin;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(1);
	var RouteLifecycleHook = (function () {
	    function RouteLifecycleHook(name) {
	        this.name = name;
	    }
	    RouteLifecycleHook = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [String])
	    ], RouteLifecycleHook);
	    return RouteLifecycleHook;
	}());
	exports.RouteLifecycleHook = RouteLifecycleHook;
	var CanActivate = (function () {
	    function CanActivate(fn) {
	        this.fn = fn;
	    }
	    CanActivate = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Function])
	    ], CanActivate);
	    return CanActivate;
	}());
	exports.CanActivate = CanActivate;
	exports.routerCanReuse = lang_1.CONST_EXPR(new RouteLifecycleHook("routerCanReuse"));
	exports.routerCanDeactivate = lang_1.CONST_EXPR(new RouteLifecycleHook("routerCanDeactivate"));
	exports.routerOnActivate = lang_1.CONST_EXPR(new RouteLifecycleHook("routerOnActivate"));
	exports.routerOnReuse = lang_1.CONST_EXPR(new RouteLifecycleHook("routerOnReuse"));
	exports.routerOnDeactivate = lang_1.CONST_EXPR(new RouteLifecycleHook("routerOnDeactivate"));


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var collection_1 = __webpack_require__(2);
	var async_1 = __webpack_require__(6);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var reflection_1 = __webpack_require__(8);
	var core_1 = __webpack_require__(3);
	var route_config_impl_1 = __webpack_require__(64);
	var rules_1 = __webpack_require__(187);
	var rule_set_1 = __webpack_require__(290);
	var instruction_1 = __webpack_require__(19);
	var route_config_normalizer_1 = __webpack_require__(284);
	var url_parser_1 = __webpack_require__(110);
	var _resolveToNull = async_1.PromiseWrapper.resolve(null);
	// A LinkItemArray is an array, which describes a set of routes
	// The items in the array are found in groups:
	// - the first item is the name of the route
	// - the next items are:
	//   - an object containing parameters
	//   - or an array describing an aux route
	// export type LinkRouteItem = string | Object;
	// export type LinkItem = LinkRouteItem | Array<LinkRouteItem>;
	// export type LinkItemArray = Array<LinkItem>;
	/**
	 * Token used to bind the component with the top-level {@link RouteConfig}s for the
	 * application.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   // ...
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	exports.ROUTER_PRIMARY_COMPONENT = lang_1.CONST_EXPR(new core_1.OpaqueToken('RouterPrimaryComponent'));
	/**
	 * The RouteRegistry holds route configurations for each component in an Angular app.
	 * It is responsible for creating Instructions from URLs, and generating URLs based on route and
	 * parameters.
	 */
	var RouteRegistry = (function () {
	    function RouteRegistry(_rootComponent) {
	        this._rootComponent = _rootComponent;
	        this._rules = new collection_1.Map();
	    }
	    /**
	     * Given a component and a configuration object, add the route to this registry
	     */
	    RouteRegistry.prototype.config = function (parentComponent, config) {
	        config = route_config_normalizer_1.normalizeRouteConfig(config, this);
	        // this is here because Dart type guard reasons
	        if (config instanceof route_config_impl_1.Route) {
	            route_config_normalizer_1.assertComponentExists(config.component, config.path);
	        }
	        else if (config instanceof route_config_impl_1.AuxRoute) {
	            route_config_normalizer_1.assertComponentExists(config.component, config.path);
	        }
	        var rules = this._rules.get(parentComponent);
	        if (lang_1.isBlank(rules)) {
	            rules = new rule_set_1.RuleSet();
	            this._rules.set(parentComponent, rules);
	        }
	        var terminal = rules.config(config);
	        if (config instanceof route_config_impl_1.Route) {
	            if (terminal) {
	                assertTerminalComponent(config.component, config.path);
	            }
	            else {
	                this.configFromComponent(config.component);
	            }
	        }
	    };
	    /**
	     * Reads the annotations of a component and configures the registry based on them
	     */
	    RouteRegistry.prototype.configFromComponent = function (component) {
	        var _this = this;
	        if (!lang_1.isType(component)) {
	            return;
	        }
	        // Don't read the annotations from a type more than once –
	        // this prevents an infinite loop if a component routes recursively.
	        if (this._rules.has(component)) {
	            return;
	        }
	        var annotations = reflection_1.reflector.annotations(component);
	        if (lang_1.isPresent(annotations)) {
	            for (var i = 0; i < annotations.length; i++) {
	                var annotation = annotations[i];
	                if (annotation instanceof route_config_impl_1.RouteConfig) {
	                    var routeCfgs = annotation.configs;
	                    routeCfgs.forEach(function (config) { return _this.config(component, config); });
	                }
	            }
	        }
	    };
	    /**
	     * Given a URL and a parent component, return the most specific instruction for navigating
	     * the application into the state specified by the url
	     */
	    RouteRegistry.prototype.recognize = function (url, ancestorInstructions) {
	        var parsedUrl = url_parser_1.parser.parse(url);
	        return this._recognize(parsedUrl, []);
	    };
	    /**
	     * Recognizes all parent-child routes, but creates unresolved auxiliary routes
	     */
	    RouteRegistry.prototype._recognize = function (parsedUrl, ancestorInstructions, _aux) {
	        var _this = this;
	        if (_aux === void 0) { _aux = false; }
	        var parentInstruction = collection_1.ListWrapper.last(ancestorInstructions);
	        var parentComponent = lang_1.isPresent(parentInstruction) ? parentInstruction.component.componentType :
	            this._rootComponent;
	        var rules = this._rules.get(parentComponent);
	        if (lang_1.isBlank(rules)) {
	            return _resolveToNull;
	        }
	        // Matches some beginning part of the given URL
	        var possibleMatches = _aux ? rules.recognizeAuxiliary(parsedUrl) : rules.recognize(parsedUrl);
	        var matchPromises = possibleMatches.map(function (candidate) { return candidate.then(function (candidate) {
	            if (candidate instanceof rules_1.PathMatch) {
	                var auxParentInstructions = ancestorInstructions.length > 0 ? [collection_1.ListWrapper.last(ancestorInstructions)] : [];
	                var auxInstructions = _this._auxRoutesToUnresolved(candidate.remainingAux, auxParentInstructions);
	                var instruction = new instruction_1.ResolvedInstruction(candidate.instruction, null, auxInstructions);
	                if (lang_1.isBlank(candidate.instruction) || candidate.instruction.terminal) {
	                    return instruction;
	                }
	                var newAncestorInstructions = ancestorInstructions.concat([instruction]);
	                return _this._recognize(candidate.remaining, newAncestorInstructions)
	                    .then(function (childInstruction) {
	                    if (lang_1.isBlank(childInstruction)) {
	                        return null;
	                    }
	                    // redirect instructions are already absolute
	                    if (childInstruction instanceof instruction_1.RedirectInstruction) {
	                        return childInstruction;
	                    }
	                    instruction.child = childInstruction;
	                    return instruction;
	                });
	            }
	            if (candidate instanceof rules_1.RedirectMatch) {
	                var instruction = _this.generate(candidate.redirectTo, ancestorInstructions.concat([null]));
	                return new instruction_1.RedirectInstruction(instruction.component, instruction.child, instruction.auxInstruction, candidate.specificity);
	            }
	        }); });
	        if ((lang_1.isBlank(parsedUrl) || parsedUrl.path == '') && possibleMatches.length == 0) {
	            return async_1.PromiseWrapper.resolve(this.generateDefault(parentComponent));
	        }
	        return async_1.PromiseWrapper.all(matchPromises).then(mostSpecific);
	    };
	    RouteRegistry.prototype._auxRoutesToUnresolved = function (auxRoutes, parentInstructions) {
	        var _this = this;
	        var unresolvedAuxInstructions = {};
	        auxRoutes.forEach(function (auxUrl) {
	            unresolvedAuxInstructions[auxUrl.path] = new instruction_1.UnresolvedInstruction(function () { return _this._recognize(auxUrl, parentInstructions, true); });
	        });
	        return unresolvedAuxInstructions;
	    };
	    /**
	     * Given a normalized list with component names and params like: `['user', {id: 3 }]`
	     * generates a url with a leading slash relative to the provided `parentComponent`.
	     *
	     * If the optional param `_aux` is `true`, then we generate starting at an auxiliary
	     * route boundary.
	     */
	    RouteRegistry.prototype.generate = function (linkParams, ancestorInstructions, _aux) {
	        if (_aux === void 0) { _aux = false; }
	        var params = splitAndFlattenLinkParams(linkParams);
	        var prevInstruction;
	        // The first segment should be either '.' (generate from parent) or '' (generate from root).
	        // When we normalize above, we strip all the slashes, './' becomes '.' and '/' becomes ''.
	        if (collection_1.ListWrapper.first(params) == '') {
	            params.shift();
	            prevInstruction = collection_1.ListWrapper.first(ancestorInstructions);
	            ancestorInstructions = [];
	        }
	        else {
	            prevInstruction = ancestorInstructions.length > 0 ? ancestorInstructions.pop() : null;
	            if (collection_1.ListWrapper.first(params) == '.') {
	                params.shift();
	            }
	            else if (collection_1.ListWrapper.first(params) == '..') {
	                while (collection_1.ListWrapper.first(params) == '..') {
	                    if (ancestorInstructions.length <= 0) {
	                        throw new exceptions_1.BaseException("Link \"" + collection_1.ListWrapper.toJSON(linkParams) + "\" has too many \"../\" segments.");
	                    }
	                    prevInstruction = ancestorInstructions.pop();
	                    params = collection_1.ListWrapper.slice(params, 1);
	                }
	            }
	            else {
	                // we must only peak at the link param, and not consume it
	                var routeName = collection_1.ListWrapper.first(params);
	                var parentComponentType = this._rootComponent;
	                var grandparentComponentType = null;
	                if (ancestorInstructions.length > 1) {
	                    var parentComponentInstruction = ancestorInstructions[ancestorInstructions.length - 1];
	                    var grandComponentInstruction = ancestorInstructions[ancestorInstructions.length - 2];
	                    parentComponentType = parentComponentInstruction.component.componentType;
	                    grandparentComponentType = grandComponentInstruction.component.componentType;
	                }
	                else if (ancestorInstructions.length == 1) {
	                    parentComponentType = ancestorInstructions[0].component.componentType;
	                    grandparentComponentType = this._rootComponent;
	                }
	                // For a link with no leading `./`, `/`, or `../`, we look for a sibling and child.
	                // If both exist, we throw. Otherwise, we prefer whichever exists.
	                var childRouteExists = this.hasRoute(routeName, parentComponentType);
	                var parentRouteExists = lang_1.isPresent(grandparentComponentType) &&
	                    this.hasRoute(routeName, grandparentComponentType);
	                if (parentRouteExists && childRouteExists) {
	                    var msg = "Link \"" + collection_1.ListWrapper.toJSON(linkParams) + "\" is ambiguous, use \"./\" or \"../\" to disambiguate.";
	                    throw new exceptions_1.BaseException(msg);
	                }
	                if (parentRouteExists) {
	                    prevInstruction = ancestorInstructions.pop();
	                }
	            }
	        }
	        if (params[params.length - 1] == '') {
	            params.pop();
	        }
	        if (params.length > 0 && params[0] == '') {
	            params.shift();
	        }
	        if (params.length < 1) {
	            var msg = "Link \"" + collection_1.ListWrapper.toJSON(linkParams) + "\" must include a route name.";
	            throw new exceptions_1.BaseException(msg);
	        }
	        var generatedInstruction = this._generate(params, ancestorInstructions, prevInstruction, _aux, linkParams);
	        // we don't clone the first (root) element
	        for (var i = ancestorInstructions.length - 1; i >= 0; i--) {
	            var ancestorInstruction = ancestorInstructions[i];
	            if (lang_1.isBlank(ancestorInstruction)) {
	                break;
	            }
	            generatedInstruction = ancestorInstruction.replaceChild(generatedInstruction);
	        }
	        return generatedInstruction;
	    };
	    /*
	     * Internal helper that does not make any assertions about the beginning of the link DSL.
	     * `ancestorInstructions` are parents that will be cloned.
	     * `prevInstruction` is the existing instruction that would be replaced, but which might have
	     * aux routes that need to be cloned.
	     */
	    RouteRegistry.prototype._generate = function (linkParams, ancestorInstructions, prevInstruction, _aux, _originalLink) {
	        var _this = this;
	        if (_aux === void 0) { _aux = false; }
	        var parentComponentType = this._rootComponent;
	        var componentInstruction = null;
	        var auxInstructions = {};
	        var parentInstruction = collection_1.ListWrapper.last(ancestorInstructions);
	        if (lang_1.isPresent(parentInstruction) && lang_1.isPresent(parentInstruction.component)) {
	            parentComponentType = parentInstruction.component.componentType;
	        }
	        if (linkParams.length == 0) {
	            var defaultInstruction = this.generateDefault(parentComponentType);
	            if (lang_1.isBlank(defaultInstruction)) {
	                throw new exceptions_1.BaseException("Link \"" + collection_1.ListWrapper.toJSON(_originalLink) + "\" does not resolve to a terminal instruction.");
	            }
	            return defaultInstruction;
	        }
	        // for non-aux routes, we want to reuse the predecessor's existing primary and aux routes
	        // and only override routes for which the given link DSL provides
	        if (lang_1.isPresent(prevInstruction) && !_aux) {
	            auxInstructions = collection_1.StringMapWrapper.merge(prevInstruction.auxInstruction, auxInstructions);
	            componentInstruction = prevInstruction.component;
	        }
	        var rules = this._rules.get(parentComponentType);
	        if (lang_1.isBlank(rules)) {
	            throw new exceptions_1.BaseException("Component \"" + lang_1.getTypeNameForDebugging(parentComponentType) + "\" has no route config.");
	        }
	        var linkParamIndex = 0;
	        var routeParams = {};
	        // first, recognize the primary route if one is provided
	        if (linkParamIndex < linkParams.length && lang_1.isString(linkParams[linkParamIndex])) {
	            var routeName = linkParams[linkParamIndex];
	            if (routeName == '' || routeName == '.' || routeName == '..') {
	                throw new exceptions_1.BaseException("\"" + routeName + "/\" is only allowed at the beginning of a link DSL.");
	            }
	            linkParamIndex += 1;
	            if (linkParamIndex < linkParams.length) {
	                var linkParam = linkParams[linkParamIndex];
	                if (lang_1.isStringMap(linkParam) && !lang_1.isArray(linkParam)) {
	                    routeParams = linkParam;
	                    linkParamIndex += 1;
	                }
	            }
	            var routeRecognizer = (_aux ? rules.auxRulesByName : rules.rulesByName).get(routeName);
	            if (lang_1.isBlank(routeRecognizer)) {
	                throw new exceptions_1.BaseException("Component \"" + lang_1.getTypeNameForDebugging(parentComponentType) + "\" has no route named \"" + routeName + "\".");
	            }
	            // Create an "unresolved instruction" for async routes
	            // we'll figure out the rest of the route when we resolve the instruction and
	            // perform a navigation
	            if (lang_1.isBlank(routeRecognizer.handler.componentType)) {
	                var generatedUrl = routeRecognizer.generateComponentPathValues(routeParams);
	                return new instruction_1.UnresolvedInstruction(function () {
	                    return routeRecognizer.handler.resolveComponentType().then(function (_) {
	                        return _this._generate(linkParams, ancestorInstructions, prevInstruction, _aux, _originalLink);
	                    });
	                }, generatedUrl.urlPath, url_parser_1.convertUrlParamsToArray(generatedUrl.urlParams));
	            }
	            componentInstruction = _aux ? rules.generateAuxiliary(routeName, routeParams) :
	                rules.generate(routeName, routeParams);
	        }
	        // Next, recognize auxiliary instructions.
	        // If we have an ancestor instruction, we preserve whatever aux routes are active from it.
	        while (linkParamIndex < linkParams.length && lang_1.isArray(linkParams[linkParamIndex])) {
	            var auxParentInstruction = [parentInstruction];
	            var auxInstruction = this._generate(linkParams[linkParamIndex], auxParentInstruction, null, true, _originalLink);
	            // TODO: this will not work for aux routes with parameters or multiple segments
	            auxInstructions[auxInstruction.component.urlPath] = auxInstruction;
	            linkParamIndex += 1;
	        }
	        var instruction = new instruction_1.ResolvedInstruction(componentInstruction, null, auxInstructions);
	        // If the component is sync, we can generate resolved child route instructions
	        // If not, we'll resolve the instructions at navigation time
	        if (lang_1.isPresent(componentInstruction) && lang_1.isPresent(componentInstruction.componentType)) {
	            var childInstruction = null;
	            if (componentInstruction.terminal) {
	                if (linkParamIndex >= linkParams.length) {
	                }
	            }
	            else {
	                var childAncestorComponents = ancestorInstructions.concat([instruction]);
	                var remainingLinkParams = linkParams.slice(linkParamIndex);
	                childInstruction = this._generate(remainingLinkParams, childAncestorComponents, null, false, _originalLink);
	            }
	            instruction.child = childInstruction;
	        }
	        return instruction;
	    };
	    RouteRegistry.prototype.hasRoute = function (name, parentComponent) {
	        var rules = this._rules.get(parentComponent);
	        if (lang_1.isBlank(rules)) {
	            return false;
	        }
	        return rules.hasRoute(name);
	    };
	    RouteRegistry.prototype.generateDefault = function (componentCursor) {
	        var _this = this;
	        if (lang_1.isBlank(componentCursor)) {
	            return null;
	        }
	        var rules = this._rules.get(componentCursor);
	        if (lang_1.isBlank(rules) || lang_1.isBlank(rules.defaultRule)) {
	            return null;
	        }
	        var defaultChild = null;
	        if (lang_1.isPresent(rules.defaultRule.handler.componentType)) {
	            var componentInstruction = rules.defaultRule.generate({});
	            if (!rules.defaultRule.terminal) {
	                defaultChild = this.generateDefault(rules.defaultRule.handler.componentType);
	            }
	            return new instruction_1.DefaultInstruction(componentInstruction, defaultChild);
	        }
	        return new instruction_1.UnresolvedInstruction(function () {
	            return rules.defaultRule.handler.resolveComponentType().then(function (_) { return _this.generateDefault(componentCursor); });
	        });
	    };
	    RouteRegistry = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject(exports.ROUTER_PRIMARY_COMPONENT)), 
	        __metadata('design:paramtypes', [lang_1.Type])
	    ], RouteRegistry);
	    return RouteRegistry;
	}());
	exports.RouteRegistry = RouteRegistry;
	/*
	 * Given: ['/a/b', {c: 2}]
	 * Returns: ['', 'a', 'b', {c: 2}]
	 */
	function splitAndFlattenLinkParams(linkParams) {
	    var accumulation = [];
	    linkParams.forEach(function (item) {
	        if (lang_1.isString(item)) {
	            var strItem = item;
	            accumulation = accumulation.concat(strItem.split('/'));
	        }
	        else {
	            accumulation.push(item);
	        }
	    });
	    return accumulation;
	}
	/*
	 * Given a list of instructions, returns the most specific instruction
	 */
	function mostSpecific(instructions) {
	    instructions = instructions.filter(function (instruction) { return lang_1.isPresent(instruction); });
	    if (instructions.length == 0) {
	        return null;
	    }
	    if (instructions.length == 1) {
	        return instructions[0];
	    }
	    var first = instructions[0];
	    var rest = instructions.slice(1);
	    return rest.reduce(function (instruction, contender) {
	        if (compareSpecificityStrings(contender.specificity, instruction.specificity) == -1) {
	            return contender;
	        }
	        return instruction;
	    }, first);
	}
	/*
	 * Expects strings to be in the form of "[0-2]+"
	 * Returns -1 if string A should be sorted above string B, 1 if it should be sorted after,
	 * or 0 if they are the same.
	 */
	function compareSpecificityStrings(a, b) {
	    var l = lang_1.Math.min(a.length, b.length);
	    for (var i = 0; i < l; i += 1) {
	        var ai = lang_1.StringWrapper.charCodeAt(a, i);
	        var bi = lang_1.StringWrapper.charCodeAt(b, i);
	        var difference = bi - ai;
	        if (difference != 0) {
	            return difference;
	        }
	    }
	    return a.length - b.length;
	}
	function assertTerminalComponent(component, path) {
	    if (!lang_1.isType(component)) {
	        return;
	    }
	    var annotations = reflection_1.reflector.annotations(component);
	    if (lang_1.isPresent(annotations)) {
	        for (var i = 0; i < annotations.length; i++) {
	            var annotation = annotations[i];
	            if (annotation instanceof route_config_impl_1.RouteConfig) {
	                throw new exceptions_1.BaseException("Child routes are not allowed for \"" + path + "\". Use \"...\" on the parent's route path.");
	            }
	        }
	    }
	}


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(2);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	function convertUrlParamsToArray(urlParams) {
	    var paramsArray = [];
	    if (lang_1.isBlank(urlParams)) {
	        return [];
	    }
	    collection_1.StringMapWrapper.forEach(urlParams, function (value, key) { paramsArray.push((value === true) ? key : key + '=' + value); });
	    return paramsArray;
	}
	exports.convertUrlParamsToArray = convertUrlParamsToArray;
	// Convert an object of url parameters into a string that can be used in an URL
	function serializeParams(urlParams, joiner) {
	    if (joiner === void 0) { joiner = '&'; }
	    return convertUrlParamsToArray(urlParams).join(joiner);
	}
	exports.serializeParams = serializeParams;
	/**
	 * This class represents a parsed URL
	 */
	var Url = (function () {
	    function Url(path, child, auxiliary, params) {
	        if (child === void 0) { child = null; }
	        if (auxiliary === void 0) { auxiliary = lang_1.CONST_EXPR([]); }
	        if (params === void 0) { params = lang_1.CONST_EXPR({}); }
	        this.path = path;
	        this.child = child;
	        this.auxiliary = auxiliary;
	        this.params = params;
	    }
	    Url.prototype.toString = function () {
	        return this.path + this._matrixParamsToString() + this._auxToString() + this._childString();
	    };
	    Url.prototype.segmentToString = function () { return this.path + this._matrixParamsToString(); };
	    /** @internal */
	    Url.prototype._auxToString = function () {
	        return this.auxiliary.length > 0 ?
	            ('(' + this.auxiliary.map(function (sibling) { return sibling.toString(); }).join('//') + ')') :
	            '';
	    };
	    Url.prototype._matrixParamsToString = function () {
	        var paramString = serializeParams(this.params, ';');
	        if (paramString.length > 0) {
	            return ';' + paramString;
	        }
	        return '';
	    };
	    /** @internal */
	    Url.prototype._childString = function () { return lang_1.isPresent(this.child) ? ('/' + this.child.toString()) : ''; };
	    return Url;
	}());
	exports.Url = Url;
	var RootUrl = (function (_super) {
	    __extends(RootUrl, _super);
	    function RootUrl(path, child, auxiliary, params) {
	        if (child === void 0) { child = null; }
	        if (auxiliary === void 0) { auxiliary = lang_1.CONST_EXPR([]); }
	        if (params === void 0) { params = null; }
	        _super.call(this, path, child, auxiliary, params);
	    }
	    RootUrl.prototype.toString = function () {
	        return this.path + this._auxToString() + this._childString() + this._queryParamsToString();
	    };
	    RootUrl.prototype.segmentToString = function () { return this.path + this._queryParamsToString(); };
	    RootUrl.prototype._queryParamsToString = function () {
	        if (lang_1.isBlank(this.params)) {
	            return '';
	        }
	        return '?' + serializeParams(this.params);
	    };
	    return RootUrl;
	}(Url));
	exports.RootUrl = RootUrl;
	function pathSegmentsToUrl(pathSegments) {
	    var url = new Url(pathSegments[pathSegments.length - 1]);
	    for (var i = pathSegments.length - 2; i >= 0; i -= 1) {
	        url = new Url(pathSegments[i], url);
	    }
	    return url;
	}
	exports.pathSegmentsToUrl = pathSegmentsToUrl;
	var SEGMENT_RE = lang_1.RegExpWrapper.create('^[^\\/\\(\\)\\?;=&#]+');
	function matchUrlSegment(str) {
	    var match = lang_1.RegExpWrapper.firstMatch(SEGMENT_RE, str);
	    return lang_1.isPresent(match) ? match[0] : '';
	}
	var QUERY_PARAM_VALUE_RE = lang_1.RegExpWrapper.create('^[^\\(\\)\\?;&#]+');
	function matchUrlQueryParamValue(str) {
	    var match = lang_1.RegExpWrapper.firstMatch(QUERY_PARAM_VALUE_RE, str);
	    return lang_1.isPresent(match) ? match[0] : '';
	}
	var UrlParser = (function () {
	    function UrlParser() {
	    }
	    UrlParser.prototype.peekStartsWith = function (str) { return this._remaining.startsWith(str); };
	    UrlParser.prototype.capture = function (str) {
	        if (!this._remaining.startsWith(str)) {
	            throw new exceptions_1.BaseException("Expected \"" + str + "\".");
	        }
	        this._remaining = this._remaining.substring(str.length);
	    };
	    UrlParser.prototype.parse = function (url) {
	        this._remaining = url;
	        if (url == '' || url == '/') {
	            return new Url('');
	        }
	        return this.parseRoot();
	    };
	    // segment + (aux segments) + (query params)
	    UrlParser.prototype.parseRoot = function () {
	        if (this.peekStartsWith('/')) {
	            this.capture('/');
	        }
	        var path = matchUrlSegment(this._remaining);
	        this.capture(path);
	        var aux = [];
	        if (this.peekStartsWith('(')) {
	            aux = this.parseAuxiliaryRoutes();
	        }
	        if (this.peekStartsWith(';')) {
	            // TODO: should these params just be dropped?
	            this.parseMatrixParams();
	        }
	        var child = null;
	        if (this.peekStartsWith('/') && !this.peekStartsWith('//')) {
	            this.capture('/');
	            child = this.parseSegment();
	        }
	        var queryParams = null;
	        if (this.peekStartsWith('?')) {
	            queryParams = this.parseQueryParams();
	        }
	        return new RootUrl(path, child, aux, queryParams);
	    };
	    // segment + (matrix params) + (aux segments)
	    UrlParser.prototype.parseSegment = function () {
	        if (this._remaining.length == 0) {
	            return null;
	        }
	        if (this.peekStartsWith('/')) {
	            this.capture('/');
	        }
	        var path = matchUrlSegment(this._remaining);
	        this.capture(path);
	        var matrixParams = null;
	        if (this.peekStartsWith(';')) {
	            matrixParams = this.parseMatrixParams();
	        }
	        var aux = [];
	        if (this.peekStartsWith('(')) {
	            aux = this.parseAuxiliaryRoutes();
	        }
	        var child = null;
	        if (this.peekStartsWith('/') && !this.peekStartsWith('//')) {
	            this.capture('/');
	            child = this.parseSegment();
	        }
	        return new Url(path, child, aux, matrixParams);
	    };
	    UrlParser.prototype.parseQueryParams = function () {
	        var params = {};
	        this.capture('?');
	        this.parseQueryParam(params);
	        while (this._remaining.length > 0 && this.peekStartsWith('&')) {
	            this.capture('&');
	            this.parseQueryParam(params);
	        }
	        return params;
	    };
	    UrlParser.prototype.parseMatrixParams = function () {
	        var params = {};
	        while (this._remaining.length > 0 && this.peekStartsWith(';')) {
	            this.capture(';');
	            this.parseParam(params);
	        }
	        return params;
	    };
	    UrlParser.prototype.parseParam = function (params) {
	        var key = matchUrlSegment(this._remaining);
	        if (lang_1.isBlank(key)) {
	            return;
	        }
	        this.capture(key);
	        var value = true;
	        if (this.peekStartsWith('=')) {
	            this.capture('=');
	            var valueMatch = matchUrlSegment(this._remaining);
	            if (lang_1.isPresent(valueMatch)) {
	                value = valueMatch;
	                this.capture(value);
	            }
	        }
	        params[key] = value;
	    };
	    UrlParser.prototype.parseQueryParam = function (params) {
	        var key = matchUrlSegment(this._remaining);
	        if (lang_1.isBlank(key)) {
	            return;
	        }
	        this.capture(key);
	        var value = true;
	        if (this.peekStartsWith('=')) {
	            this.capture('=');
	            var valueMatch = matchUrlQueryParamValue(this._remaining);
	            if (lang_1.isPresent(valueMatch)) {
	                value = valueMatch;
	                this.capture(value);
	            }
	        }
	        params[key] = value;
	    };
	    UrlParser.prototype.parseAuxiliaryRoutes = function () {
	        var routes = [];
	        this.capture('(');
	        while (!this.peekStartsWith(')') && this._remaining.length > 0) {
	            routes.push(this.parseSegment());
	            if (this.peekStartsWith('//')) {
	                this.capture('//');
	            }
	        }
	        this.capture(')');
	        return routes;
	    };
	    return UrlParser;
	}());
	exports.UrlParser = UrlParser;
	exports.parser = new UrlParser();


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CodeSnippet = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CodeSnippet = exports.CodeSnippet = (_dec = (0, _core.Component)({
	    inputs: ['code'],
	    selector: 'code-snippet',
	    template: '<pre><code [innerHtml]="highlight"></code></pre>'
	}), _dec(_class = function () {
	    function CodeSnippet() {
	        _classCallCheck(this, CodeSnippet);
	    }
	
	    _createClass(CodeSnippet, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.highlight = hljs.highlightAuto(this.code).value;
	        }
	    }]);
	
	    return CodeSnippet;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztJQU9hLFcsV0FBQSxXLFdBTFoscUJBQVU7QUFDUCxZQUFRLENBQUMsTUFBRCxDQUREO0FBRVAsY0FBVSxjQUZIO0FBR1AsY0FBVTtBQUhILENBQVYsQzs7Ozs7OzttQ0FNYztBQUNQLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxhQUFMLENBQW1CLEtBQUssSUFBeEIsRUFBOEIsS0FBL0M7QUFDSCIsImZpbGUiOiJDb2RlU25pcHBldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgaW5wdXRzOiBbJ2NvZGUnXSxcbiAgICBzZWxlY3RvcjogJ2NvZGUtc25pcHBldCcsXG4gICAgdGVtcGxhdGU6ICc8cHJlPjxjb2RlIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0XCI+PC9jb2RlPjwvcHJlPidcbn0pXG5leHBvcnQgY2xhc3MgQ29kZVNuaXBwZXQge1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodCA9IGhsanMuaGlnaGxpZ2h0QXV0byh0aGlzLmNvZGUpLnZhbHVlO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * @module
	 * @description
	 * Starting point to import all compiler APIs.
	 */
	__export(__webpack_require__(31));
	__export(__webpack_require__(23));
	__export(__webpack_require__(244));


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * This is a set of classes and objects that can be used both in the browser and on the server.
	 */
	var dom_adapter_1 = __webpack_require__(7);
	exports.DOM = dom_adapter_1.DOM;
	exports.setRootDomAdapter = dom_adapter_1.setRootDomAdapter;
	exports.DomAdapter = dom_adapter_1.DomAdapter;
	var dom_renderer_1 = __webpack_require__(106);
	exports.DomRenderer = dom_renderer_1.DomRenderer;
	var dom_tokens_1 = __webpack_require__(41);
	exports.DOCUMENT = dom_tokens_1.DOCUMENT;
	var shared_styles_host_1 = __webpack_require__(62);
	exports.SharedStylesHost = shared_styles_host_1.SharedStylesHost;
	exports.DomSharedStylesHost = shared_styles_host_1.DomSharedStylesHost;
	var dom_events_1 = __webpack_require__(177);
	exports.DomEventsPlugin = dom_events_1.DomEventsPlugin;
	var event_manager_1 = __webpack_require__(28);
	exports.EVENT_MANAGER_PLUGINS = event_manager_1.EVENT_MANAGER_PLUGINS;
	exports.EventManager = event_manager_1.EventManager;
	exports.EventManagerPlugin = event_manager_1.EventManagerPlugin;
	__export(__webpack_require__(278));
	__export(__webpack_require__(279));


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var di_1 = __webpack_require__(5);
	var css_animation_builder_1 = __webpack_require__(233);
	var browser_details_1 = __webpack_require__(119);
	var AnimationBuilder = (function () {
	    /**
	     * Used for DI
	     * @param browserDetails
	     */
	    function AnimationBuilder(browserDetails) {
	        this.browserDetails = browserDetails;
	    }
	    /**
	     * Creates a new CSS Animation
	     * @returns {CssAnimationBuilder}
	     */
	    AnimationBuilder.prototype.css = function () { return new css_animation_builder_1.CssAnimationBuilder(this.browserDetails); };
	    AnimationBuilder = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [browser_details_1.BrowserDetails])
	    ], AnimationBuilder);
	    return AnimationBuilder;
	}());
	exports.AnimationBuilder = AnimationBuilder;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var di_1 = __webpack_require__(5);
	var math_1 = __webpack_require__(173);
	var dom_adapter_1 = __webpack_require__(7);
	var BrowserDetails = (function () {
	    function BrowserDetails() {
	        this.elapsedTimeIncludesDelay = false;
	        this.doesElapsedTimeIncludesDelay();
	    }
	    /**
	     * Determines if `event.elapsedTime` includes transition delay in the current browser.  At this
	     * time, Chrome and Opera seem to be the only browsers that include this.
	     */
	    BrowserDetails.prototype.doesElapsedTimeIncludesDelay = function () {
	        var _this = this;
	        var div = dom_adapter_1.DOM.createElement('div');
	        dom_adapter_1.DOM.setAttribute(div, 'style', "position: absolute; top: -9999px; left: -9999px; width: 1px;\n      height: 1px; transition: all 1ms linear 1ms;");
	        // Firefox requires that we wait for 2 frames for some reason
	        this.raf(function (timestamp) {
	            dom_adapter_1.DOM.on(div, 'transitionend', function (event) {
	                var elapsed = math_1.Math.round(event.elapsedTime * 1000);
	                _this.elapsedTimeIncludesDelay = elapsed == 2;
	                dom_adapter_1.DOM.remove(div);
	            });
	            dom_adapter_1.DOM.setStyle(div, 'width', '2px');
	        }, 2);
	    };
	    BrowserDetails.prototype.raf = function (callback, frames) {
	        if (frames === void 0) { frames = 1; }
	        var queue = new RafQueue(callback, frames);
	        return function () { return queue.cancel(); };
	    };
	    BrowserDetails = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BrowserDetails);
	    return BrowserDetails;
	}());
	exports.BrowserDetails = BrowserDetails;
	var RafQueue = (function () {
	    function RafQueue(callback, frames) {
	        this.callback = callback;
	        this.frames = frames;
	        this._raf();
	    }
	    RafQueue.prototype._raf = function () {
	        var _this = this;
	        this.currentFrameId =
	            dom_adapter_1.DOM.requestAnimationFrame(function (timestamp) { return _this._nextFrame(timestamp); });
	    };
	    RafQueue.prototype._nextFrame = function (timestamp) {
	        this.frames--;
	        if (this.frames > 0) {
	            this._raf();
	        }
	        else {
	            this.callback(timestamp);
	        }
	    };
	    RafQueue.prototype.cancel = function () {
	        dom_adapter_1.DOM.cancelAnimationFrame(this.currentFrameId);
	        this.currentFrameId = null;
	    };
	    return RafQueue;
	}());


/***/ },
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var source_module_1 = __webpack_require__(21);
	var change_detection_jit_generator_1 = __webpack_require__(149);
	var abstract_change_detector_1 = __webpack_require__(90);
	var change_detection_util_1 = __webpack_require__(24);
	var constants_1 = __webpack_require__(14);
	var change_definition_factory_1 = __webpack_require__(243);
	var lang_1 = __webpack_require__(1);
	var change_detection_1 = __webpack_require__(9);
	var change_detector_codegen_1 = __webpack_require__(292);
	var util_1 = __webpack_require__(13);
	var di_1 = __webpack_require__(5);
	var ABSTRACT_CHANGE_DETECTOR = "AbstractChangeDetector";
	var UTIL = "ChangeDetectionUtil";
	var CHANGE_DETECTOR_STATE = "ChangeDetectorState";
	exports.CHANGE_DETECTION_JIT_IMPORTS = lang_1.CONST_EXPR({
	    'AbstractChangeDetector': abstract_change_detector_1.AbstractChangeDetector,
	    'ChangeDetectionUtil': change_detection_util_1.ChangeDetectionUtil,
	    'ChangeDetectorState': constants_1.ChangeDetectorState
	});
	var ABSTRACT_CHANGE_DETECTOR_MODULE = source_module_1.moduleRef("package:angular2/src/core/change_detection/abstract_change_detector" + util_1.MODULE_SUFFIX);
	var UTIL_MODULE = source_module_1.moduleRef("package:angular2/src/core/change_detection/change_detection_util" + util_1.MODULE_SUFFIX);
	var PREGEN_PROTO_CHANGE_DETECTOR_MODULE = source_module_1.moduleRef("package:angular2/src/core/change_detection/pregen_proto_change_detector" + util_1.MODULE_SUFFIX);
	var CONSTANTS_MODULE = source_module_1.moduleRef("package:angular2/src/core/change_detection/constants" + util_1.MODULE_SUFFIX);
	var ChangeDetectionCompiler = (function () {
	    function ChangeDetectionCompiler(_genConfig) {
	        this._genConfig = _genConfig;
	    }
	    ChangeDetectionCompiler.prototype.compileComponentRuntime = function (componentType, strategy, parsedTemplate) {
	        var _this = this;
	        var changeDetectorDefinitions = change_definition_factory_1.createChangeDetectorDefinitions(componentType, strategy, this._genConfig, parsedTemplate);
	        return changeDetectorDefinitions.map(function (definition) {
	            return _this._createChangeDetectorFactory(definition);
	        });
	    };
	    ChangeDetectionCompiler.prototype._createChangeDetectorFactory = function (definition) {
	        var proto = new change_detection_1.DynamicProtoChangeDetector(definition);
	        return function () { return proto.instantiate(); };
	    };
	    ChangeDetectionCompiler.prototype.compileComponentCodeGen = function (componentType, strategy, parsedTemplate) {
	        var changeDetectorDefinitions = change_definition_factory_1.createChangeDetectorDefinitions(componentType, strategy, this._genConfig, parsedTemplate);
	        var factories = [];
	        var index = 0;
	        var sourceParts = changeDetectorDefinitions.map(function (definition) {
	            var codegen;
	            var sourcePart;
	            // TODO(tbosch): move the 2 code generators to the same place, one with .dart and one with .ts
	            // suffix
	            // and have the same API for calling them!
	            if (lang_1.IS_DART) {
	                codegen = new change_detector_codegen_1.Codegen(PREGEN_PROTO_CHANGE_DETECTOR_MODULE);
	                var className = "_" + definition.id;
	                var typeRef = (index === 0 && componentType.isHost) ?
	                    'dynamic' :
	                    "" + source_module_1.moduleRef(componentType.moduleUrl) + componentType.name;
	                codegen.generate(typeRef, className, definition);
	                factories.push(className + ".newChangeDetector");
	                sourcePart = codegen.toString();
	            }
	            else {
	                codegen = new change_detection_jit_generator_1.ChangeDetectorJITGenerator(definition, "" + UTIL_MODULE + UTIL, "" + ABSTRACT_CHANGE_DETECTOR_MODULE + ABSTRACT_CHANGE_DETECTOR, "" + CONSTANTS_MODULE + CHANGE_DETECTOR_STATE);
	                factories.push("function() { return new " + codegen.typeName + "(); }");
	                sourcePart = codegen.generateSource();
	            }
	            index++;
	            return sourcePart;
	        });
	        return new source_module_1.SourceExpressions(sourceParts, factories);
	    };
	    ChangeDetectionCompiler = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [change_detection_1.ChangeDetectorGenConfig])
	    ], ChangeDetectionCompiler);
	    return ChangeDetectionCompiler;
	}());
	exports.ChangeDetectionCompiler = ChangeDetectionCompiler;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var compiler_1 = __webpack_require__(26);
	var view_ref_1 = __webpack_require__(57);
	var template_compiler_1 = __webpack_require__(88);
	var di_1 = __webpack_require__(5);
	var RuntimeCompiler = (function (_super) {
	    __extends(RuntimeCompiler, _super);
	    function RuntimeCompiler() {
	        _super.apply(this, arguments);
	    }
	    return RuntimeCompiler;
	}(compiler_1.Compiler));
	exports.RuntimeCompiler = RuntimeCompiler;
	var RuntimeCompiler_ = (function (_super) {
	    __extends(RuntimeCompiler_, _super);
	    function RuntimeCompiler_(_templateCompiler) {
	        _super.call(this);
	        this._templateCompiler = _templateCompiler;
	    }
	    RuntimeCompiler_.prototype.compileInHost = function (componentType) {
	        return this._templateCompiler.compileHostComponentRuntime(componentType)
	            .then(function (hostViewFactory) { return new view_ref_1.HostViewFactoryRef_(hostViewFactory); });
	    };
	    RuntimeCompiler_.prototype.clearCache = function () {
	        _super.prototype.clearCache.call(this);
	        this._templateCompiler.clearCache();
	    };
	    RuntimeCompiler_ = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [template_compiler_1.TemplateCompiler])
	    ], RuntimeCompiler_);
	    return RuntimeCompiler_;
	}(compiler_1.Compiler_));
	exports.RuntimeCompiler_ = RuntimeCompiler_;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var di_1 = __webpack_require__(5);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var cpl = __webpack_require__(51);
	var md = __webpack_require__(38);
	var directive_resolver_1 = __webpack_require__(53);
	var pipe_resolver_1 = __webpack_require__(99);
	var view_resolver_1 = __webpack_require__(101);
	var directive_lifecycle_reflector_1 = __webpack_require__(261);
	var interfaces_1 = __webpack_require__(55);
	var reflection_1 = __webpack_require__(8);
	var di_2 = __webpack_require__(5);
	var platform_directives_and_pipes_1 = __webpack_require__(103);
	var util_1 = __webpack_require__(13);
	var assertions_1 = __webpack_require__(242);
	var url_resolver_1 = __webpack_require__(31);
	var RuntimeMetadataResolver = (function () {
	    function RuntimeMetadataResolver(_directiveResolver, _pipeResolver, _viewResolver, _platformDirectives, _platformPipes) {
	        this._directiveResolver = _directiveResolver;
	        this._pipeResolver = _pipeResolver;
	        this._viewResolver = _viewResolver;
	        this._platformDirectives = _platformDirectives;
	        this._platformPipes = _platformPipes;
	        this._directiveCache = new Map();
	        this._pipeCache = new Map();
	        this._anonymousTypes = new Map();
	        this._anonymousTypeIndex = 0;
	    }
	    /**
	     * Wrap the stringify method to avoid naming things `function (arg1...) {`
	     */
	    RuntimeMetadataResolver.prototype.sanitizeName = function (obj) {
	        var result = lang_1.stringify(obj);
	        if (result.indexOf('(') < 0) {
	            return result;
	        }
	        var found = this._anonymousTypes.get(obj);
	        if (!found) {
	            this._anonymousTypes.set(obj, this._anonymousTypeIndex++);
	            found = this._anonymousTypes.get(obj);
	        }
	        return "anonymous_type_" + found + "_";
	    };
	    RuntimeMetadataResolver.prototype.getDirectiveMetadata = function (directiveType) {
	        var meta = this._directiveCache.get(directiveType);
	        if (lang_1.isBlank(meta)) {
	            var dirMeta = this._directiveResolver.resolve(directiveType);
	            var moduleUrl = null;
	            var templateMeta = null;
	            var changeDetectionStrategy = null;
	            if (dirMeta instanceof md.ComponentMetadata) {
	                assertions_1.assertArrayOfStrings('styles', dirMeta.styles);
	                var cmpMeta = dirMeta;
	                moduleUrl = calcModuleUrl(directiveType, cmpMeta);
	                var viewMeta = this._viewResolver.resolve(directiveType);
	                assertions_1.assertArrayOfStrings('styles', viewMeta.styles);
	                templateMeta = new cpl.CompileTemplateMetadata({
	                    encapsulation: viewMeta.encapsulation,
	                    template: viewMeta.template,
	                    templateUrl: viewMeta.templateUrl,
	                    styles: viewMeta.styles,
	                    styleUrls: viewMeta.styleUrls
	                });
	                changeDetectionStrategy = cmpMeta.changeDetection;
	            }
	            meta = cpl.CompileDirectiveMetadata.create({
	                selector: dirMeta.selector,
	                exportAs: dirMeta.exportAs,
	                isComponent: lang_1.isPresent(templateMeta),
	                dynamicLoadable: true,
	                type: new cpl.CompileTypeMetadata({ name: this.sanitizeName(directiveType), moduleUrl: moduleUrl, runtime: directiveType }),
	                template: templateMeta,
	                changeDetection: changeDetectionStrategy,
	                inputs: dirMeta.inputs,
	                outputs: dirMeta.outputs,
	                host: dirMeta.host,
	                lifecycleHooks: interfaces_1.LIFECYCLE_HOOKS_VALUES.filter(function (hook) { return directive_lifecycle_reflector_1.hasLifecycleHook(hook, directiveType); })
	            });
	            this._directiveCache.set(directiveType, meta);
	        }
	        return meta;
	    };
	    RuntimeMetadataResolver.prototype.getPipeMetadata = function (pipeType) {
	        var meta = this._pipeCache.get(pipeType);
	        if (lang_1.isBlank(meta)) {
	            var pipeMeta = this._pipeResolver.resolve(pipeType);
	            var moduleUrl = reflection_1.reflector.importUri(pipeType);
	            meta = new cpl.CompilePipeMetadata({
	                type: new cpl.CompileTypeMetadata({ name: this.sanitizeName(pipeType), moduleUrl: moduleUrl, runtime: pipeType }),
	                name: pipeMeta.name,
	                pure: pipeMeta.pure
	            });
	            this._pipeCache.set(pipeType, meta);
	        }
	        return meta;
	    };
	    RuntimeMetadataResolver.prototype.getViewDirectivesMetadata = function (component) {
	        var _this = this;
	        var view = this._viewResolver.resolve(component);
	        var directives = flattenDirectives(view, this._platformDirectives);
	        for (var i = 0; i < directives.length; i++) {
	            if (!isValidType(directives[i])) {
	                throw new exceptions_1.BaseException("Unexpected directive value '" + lang_1.stringify(directives[i]) + "' on the View of component '" + lang_1.stringify(component) + "'");
	            }
	        }
	        return directives.map(function (type) { return _this.getDirectiveMetadata(type); });
	    };
	    RuntimeMetadataResolver.prototype.getViewPipesMetadata = function (component) {
	        var _this = this;
	        var view = this._viewResolver.resolve(component);
	        var pipes = flattenPipes(view, this._platformPipes);
	        for (var i = 0; i < pipes.length; i++) {
	            if (!isValidType(pipes[i])) {
	                throw new exceptions_1.BaseException("Unexpected piped value '" + lang_1.stringify(pipes[i]) + "' on the View of component '" + lang_1.stringify(component) + "'");
	            }
	        }
	        return pipes.map(function (type) { return _this.getPipeMetadata(type); });
	    };
	    RuntimeMetadataResolver = __decorate([
	        di_2.Injectable(),
	        __param(3, di_2.Optional()),
	        __param(3, di_2.Inject(platform_directives_and_pipes_1.PLATFORM_DIRECTIVES)),
	        __param(4, di_2.Optional()),
	        __param(4, di_2.Inject(platform_directives_and_pipes_1.PLATFORM_PIPES)), 
	        __metadata('design:paramtypes', [directive_resolver_1.DirectiveResolver, pipe_resolver_1.PipeResolver, view_resolver_1.ViewResolver, Array, Array])
	    ], RuntimeMetadataResolver);
	    return RuntimeMetadataResolver;
	}());
	exports.RuntimeMetadataResolver = RuntimeMetadataResolver;
	function flattenDirectives(view, platformDirectives) {
	    var directives = [];
	    if (lang_1.isPresent(platformDirectives)) {
	        flattenArray(platformDirectives, directives);
	    }
	    if (lang_1.isPresent(view.directives)) {
	        flattenArray(view.directives, directives);
	    }
	    return directives;
	}
	function flattenPipes(view, platformPipes) {
	    var pipes = [];
	    if (lang_1.isPresent(platformPipes)) {
	        flattenArray(platformPipes, pipes);
	    }
	    if (lang_1.isPresent(view.pipes)) {
	        flattenArray(view.pipes, pipes);
	    }
	    return pipes;
	}
	function flattenArray(tree, out) {
	    for (var i = 0; i < tree.length; i++) {
	        var item = di_1.resolveForwardRef(tree[i]);
	        if (lang_1.isArray(item)) {
	            flattenArray(item, out);
	        }
	        else {
	            out.push(item);
	        }
	    }
	}
	function isValidType(value) {
	    return lang_1.isPresent(value) && (value instanceof lang_1.Type);
	}
	function calcModuleUrl(type, cmpMetadata) {
	    var moduleId = cmpMetadata.moduleId;
	    if (lang_1.isPresent(moduleId)) {
	        var scheme = url_resolver_1.getUrlScheme(moduleId);
	        return lang_1.isPresent(scheme) && scheme.length > 0 ? moduleId :
	            "package:" + moduleId + util_1.MODULE_SUFFIX;
	    }
	    else {
	        return reflection_1.reflector.importUri(type);
	    }
	}


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var collection_1 = __webpack_require__(2);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var _EMPTY_ATTR_VALUE = '';
	// TODO: Can't use `const` here as
	// in Dart this is not transpiled into `final` yet...
	var _SELECTOR_REGEXP = lang_1.RegExpWrapper.create('(\\:not\\()|' +
	    '([-\\w]+)|' +
	    '(?:\\.([-\\w]+))|' +
	    '(?:\\[([-\\w*]+)(?:=([^\\]]*))?\\])|' +
	    '(\\))|' +
	    '(\\s*,\\s*)'); // ","
	/**
	 * A css selector contains an element name,
	 * css classes and attribute/value pairs with the purpose
	 * of selecting subsets out of them.
	 */
	var CssSelector = (function () {
	    function CssSelector() {
	        this.element = null;
	        this.classNames = [];
	        this.attrs = [];
	        this.notSelectors = [];
	    }
	    CssSelector.parse = function (selector) {
	        var results = [];
	        var _addResult = function (res, cssSel) {
	            if (cssSel.notSelectors.length > 0 && lang_1.isBlank(cssSel.element) &&
	                collection_1.ListWrapper.isEmpty(cssSel.classNames) && collection_1.ListWrapper.isEmpty(cssSel.attrs)) {
	                cssSel.element = "*";
	            }
	            res.push(cssSel);
	        };
	        var cssSelector = new CssSelector();
	        var matcher = lang_1.RegExpWrapper.matcher(_SELECTOR_REGEXP, selector);
	        var match;
	        var current = cssSelector;
	        var inNot = false;
	        while (lang_1.isPresent(match = lang_1.RegExpMatcherWrapper.next(matcher))) {
	            if (lang_1.isPresent(match[1])) {
	                if (inNot) {
	                    throw new exceptions_1.BaseException('Nesting :not is not allowed in a selector');
	                }
	                inNot = true;
	                current = new CssSelector();
	                cssSelector.notSelectors.push(current);
	            }
	            if (lang_1.isPresent(match[2])) {
	                current.setElement(match[2]);
	            }
	            if (lang_1.isPresent(match[3])) {
	                current.addClassName(match[3]);
	            }
	            if (lang_1.isPresent(match[4])) {
	                current.addAttribute(match[4], match[5]);
	            }
	            if (lang_1.isPresent(match[6])) {
	                inNot = false;
	                current = cssSelector;
	            }
	            if (lang_1.isPresent(match[7])) {
	                if (inNot) {
	                    throw new exceptions_1.BaseException('Multiple selectors in :not are not supported');
	                }
	                _addResult(results, cssSelector);
	                cssSelector = current = new CssSelector();
	            }
	        }
	        _addResult(results, cssSelector);
	        return results;
	    };
	    CssSelector.prototype.isElementSelector = function () {
	        return lang_1.isPresent(this.element) && collection_1.ListWrapper.isEmpty(this.classNames) &&
	            collection_1.ListWrapper.isEmpty(this.attrs) && this.notSelectors.length === 0;
	    };
	    CssSelector.prototype.setElement = function (element) {
	        if (element === void 0) { element = null; }
	        this.element = element;
	    };
	    /** Gets a template string for an element that matches the selector. */
	    CssSelector.prototype.getMatchingElementTemplate = function () {
	        var tagName = lang_1.isPresent(this.element) ? this.element : 'div';
	        var classAttr = this.classNames.length > 0 ? " class=\"" + this.classNames.join(' ') + "\"" : '';
	        var attrs = '';
	        for (var i = 0; i < this.attrs.length; i += 2) {
	            var attrName = this.attrs[i];
	            var attrValue = this.attrs[i + 1] !== '' ? "=\"" + this.attrs[i + 1] + "\"" : '';
	            attrs += " " + attrName + attrValue;
	        }
	        return "<" + tagName + classAttr + attrs + "></" + tagName + ">";
	    };
	    CssSelector.prototype.addAttribute = function (name, value) {
	        if (value === void 0) { value = _EMPTY_ATTR_VALUE; }
	        this.attrs.push(name);
	        if (lang_1.isPresent(value)) {
	            value = value.toLowerCase();
	        }
	        else {
	            value = _EMPTY_ATTR_VALUE;
	        }
	        this.attrs.push(value);
	    };
	    CssSelector.prototype.addClassName = function (name) { this.classNames.push(name.toLowerCase()); };
	    CssSelector.prototype.toString = function () {
	        var res = '';
	        if (lang_1.isPresent(this.element)) {
	            res += this.element;
	        }
	        if (lang_1.isPresent(this.classNames)) {
	            for (var i = 0; i < this.classNames.length; i++) {
	                res += '.' + this.classNames[i];
	            }
	        }
	        if (lang_1.isPresent(this.attrs)) {
	            for (var i = 0; i < this.attrs.length;) {
	                var attrName = this.attrs[i++];
	                var attrValue = this.attrs[i++];
	                res += '[' + attrName;
	                if (attrValue.length > 0) {
	                    res += '=' + attrValue;
	                }
	                res += ']';
	            }
	        }
	        this.notSelectors.forEach(function (notSelector) { return res += ":not(" + notSelector + ")"; });
	        return res;
	    };
	    return CssSelector;
	}());
	exports.CssSelector = CssSelector;
	/**
	 * Reads a list of CssSelectors and allows to calculate which ones
	 * are contained in a given CssSelector.
	 */
	var SelectorMatcher = (function () {
	    function SelectorMatcher() {
	        this._elementMap = new collection_1.Map();
	        this._elementPartialMap = new collection_1.Map();
	        this._classMap = new collection_1.Map();
	        this._classPartialMap = new collection_1.Map();
	        this._attrValueMap = new collection_1.Map();
	        this._attrValuePartialMap = new collection_1.Map();
	        this._listContexts = [];
	    }
	    SelectorMatcher.createNotMatcher = function (notSelectors) {
	        var notMatcher = new SelectorMatcher();
	        notMatcher.addSelectables(notSelectors, null);
	        return notMatcher;
	    };
	    SelectorMatcher.prototype.addSelectables = function (cssSelectors, callbackCtxt) {
	        var listContext = null;
	        if (cssSelectors.length > 1) {
	            listContext = new SelectorListContext(cssSelectors);
	            this._listContexts.push(listContext);
	        }
	        for (var i = 0; i < cssSelectors.length; i++) {
	            this._addSelectable(cssSelectors[i], callbackCtxt, listContext);
	        }
	    };
	    /**
	     * Add an object that can be found later on by calling `match`.
	     * @param cssSelector A css selector
	     * @param callbackCtxt An opaque object that will be given to the callback of the `match` function
	     */
	    SelectorMatcher.prototype._addSelectable = function (cssSelector, callbackCtxt, listContext) {
	        var matcher = this;
	        var element = cssSelector.element;
	        var classNames = cssSelector.classNames;
	        var attrs = cssSelector.attrs;
	        var selectable = new SelectorContext(cssSelector, callbackCtxt, listContext);
	        if (lang_1.isPresent(element)) {
	            var isTerminal = attrs.length === 0 && classNames.length === 0;
	            if (isTerminal) {
	                this._addTerminal(matcher._elementMap, element, selectable);
	            }
	            else {
	                matcher = this._addPartial(matcher._elementPartialMap, element);
	            }
	        }
	        if (lang_1.isPresent(classNames)) {
	            for (var index = 0; index < classNames.length; index++) {
	                var isTerminal = attrs.length === 0 && index === classNames.length - 1;
	                var className = classNames[index];
	                if (isTerminal) {
	                    this._addTerminal(matcher._classMap, className, selectable);
	                }
	                else {
	                    matcher = this._addPartial(matcher._classPartialMap, className);
	                }
	            }
	        }
	        if (lang_1.isPresent(attrs)) {
	            for (var index = 0; index < attrs.length;) {
	                var isTerminal = index === attrs.length - 2;
	                var attrName = attrs[index++];
	                var attrValue = attrs[index++];
	                if (isTerminal) {
	                    var terminalMap = matcher._attrValueMap;
	                    var terminalValuesMap = terminalMap.get(attrName);
	                    if (lang_1.isBlank(terminalValuesMap)) {
	                        terminalValuesMap = new collection_1.Map();
	                        terminalMap.set(attrName, terminalValuesMap);
	                    }
	                    this._addTerminal(terminalValuesMap, attrValue, selectable);
	                }
	                else {
	                    var parttialMap = matcher._attrValuePartialMap;
	                    var partialValuesMap = parttialMap.get(attrName);
	                    if (lang_1.isBlank(partialValuesMap)) {
	                        partialValuesMap = new collection_1.Map();
	                        parttialMap.set(attrName, partialValuesMap);
	                    }
	                    matcher = this._addPartial(partialValuesMap, attrValue);
	                }
	            }
	        }
	    };
	    SelectorMatcher.prototype._addTerminal = function (map, name, selectable) {
	        var terminalList = map.get(name);
	        if (lang_1.isBlank(terminalList)) {
	            terminalList = [];
	            map.set(name, terminalList);
	        }
	        terminalList.push(selectable);
	    };
	    SelectorMatcher.prototype._addPartial = function (map, name) {
	        var matcher = map.get(name);
	        if (lang_1.isBlank(matcher)) {
	            matcher = new SelectorMatcher();
	            map.set(name, matcher);
	        }
	        return matcher;
	    };
	    /**
	     * Find the objects that have been added via `addSelectable`
	     * whose css selector is contained in the given css selector.
	     * @param cssSelector A css selector
	     * @param matchedCallback This callback will be called with the object handed into `addSelectable`
	     * @return boolean true if a match was found
	    */
	    SelectorMatcher.prototype.match = function (cssSelector, matchedCallback) {
	        var result = false;
	        var element = cssSelector.element;
	        var classNames = cssSelector.classNames;
	        var attrs = cssSelector.attrs;
	        for (var i = 0; i < this._listContexts.length; i++) {
	            this._listContexts[i].alreadyMatched = false;
	        }
	        result = this._matchTerminal(this._elementMap, element, cssSelector, matchedCallback) || result;
	        result = this._matchPartial(this._elementPartialMap, element, cssSelector, matchedCallback) ||
	            result;
	        if (lang_1.isPresent(classNames)) {
	            for (var index = 0; index < classNames.length; index++) {
	                var className = classNames[index];
	                result =
	                    this._matchTerminal(this._classMap, className, cssSelector, matchedCallback) || result;
	                result =
	                    this._matchPartial(this._classPartialMap, className, cssSelector, matchedCallback) ||
	                        result;
	            }
	        }
	        if (lang_1.isPresent(attrs)) {
	            for (var index = 0; index < attrs.length;) {
	                var attrName = attrs[index++];
	                var attrValue = attrs[index++];
	                var terminalValuesMap = this._attrValueMap.get(attrName);
	                if (!lang_1.StringWrapper.equals(attrValue, _EMPTY_ATTR_VALUE)) {
	                    result = this._matchTerminal(terminalValuesMap, _EMPTY_ATTR_VALUE, cssSelector, matchedCallback) ||
	                        result;
	                }
	                result = this._matchTerminal(terminalValuesMap, attrValue, cssSelector, matchedCallback) ||
	                    result;
	                var partialValuesMap = this._attrValuePartialMap.get(attrName);
	                if (!lang_1.StringWrapper.equals(attrValue, _EMPTY_ATTR_VALUE)) {
	                    result = this._matchPartial(partialValuesMap, _EMPTY_ATTR_VALUE, cssSelector, matchedCallback) ||
	                        result;
	                }
	                result =
	                    this._matchPartial(partialValuesMap, attrValue, cssSelector, matchedCallback) || result;
	            }
	        }
	        return result;
	    };
	    /** @internal */
	    SelectorMatcher.prototype._matchTerminal = function (map, name, cssSelector, matchedCallback) {
	        if (lang_1.isBlank(map) || lang_1.isBlank(name)) {
	            return false;
	        }
	        var selectables = map.get(name);
	        var starSelectables = map.get("*");
	        if (lang_1.isPresent(starSelectables)) {
	            selectables = selectables.concat(starSelectables);
	        }
	        if (lang_1.isBlank(selectables)) {
	            return false;
	        }
	        var selectable;
	        var result = false;
	        for (var index = 0; index < selectables.length; index++) {
	            selectable = selectables[index];
	            result = selectable.finalize(cssSelector, matchedCallback) || result;
	        }
	        return result;
	    };
	    /** @internal */
	    SelectorMatcher.prototype._matchPartial = function (map, name, cssSelector, matchedCallback /*: (c: CssSelector, a: any) => void*/) {
	        if (lang_1.isBlank(map) || lang_1.isBlank(name)) {
	            return false;
	        }
	        var nestedSelector = map.get(name);
	        if (lang_1.isBlank(nestedSelector)) {
	            return false;
	        }
	        // TODO(perf): get rid of recursion and measure again
	        // TODO(perf): don't pass the whole selector into the recursion,
	        // but only the not processed parts
	        return nestedSelector.match(cssSelector, matchedCallback);
	    };
	    return SelectorMatcher;
	}());
	exports.SelectorMatcher = SelectorMatcher;
	var SelectorListContext = (function () {
	    function SelectorListContext(selectors) {
	        this.selectors = selectors;
	        this.alreadyMatched = false;
	    }
	    return SelectorListContext;
	}());
	exports.SelectorListContext = SelectorListContext;
	// Store context to pass back selector and context when a selector is matched
	var SelectorContext = (function () {
	    function SelectorContext(selector, cbContext, listContext) {
	        this.selector = selector;
	        this.cbContext = cbContext;
	        this.listContext = listContext;
	        this.notSelectors = selector.notSelectors;
	    }
	    SelectorContext.prototype.finalize = function (cssSelector, callback) {
	        var result = true;
	        if (this.notSelectors.length > 0 &&
	            (lang_1.isBlank(this.listContext) || !this.listContext.alreadyMatched)) {
	            var notMatcher = SelectorMatcher.createNotMatcher(this.notSelectors);
	            result = !notMatcher.match(cssSelector, null);
	        }
	        if (result && lang_1.isPresent(callback) &&
	            (lang_1.isBlank(this.listContext) || !this.listContext.alreadyMatched)) {
	            if (lang_1.isPresent(this.listContext)) {
	                this.listContext.alreadyMatched = true;
	            }
	            callback(this.selector, this.cbContext);
	        }
	        return result;
	    };
	    return SelectorContext;
	}());
	exports.SelectorContext = SelectorContext;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var source_module_1 = __webpack_require__(21);
	var view_1 = __webpack_require__(18);
	var xhr_1 = __webpack_require__(23);
	var lang_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(6);
	var shadow_css_1 = __webpack_require__(247);
	var url_resolver_1 = __webpack_require__(31);
	var style_url_resolver_1 = __webpack_require__(87);
	var util_1 = __webpack_require__(13);
	var di_1 = __webpack_require__(5);
	var COMPONENT_VARIABLE = '%COMP%';
	var HOST_ATTR = "_nghost-" + COMPONENT_VARIABLE;
	var CONTENT_ATTR = "_ngcontent-" + COMPONENT_VARIABLE;
	var StyleCompiler = (function () {
	    function StyleCompiler(_xhr, _urlResolver) {
	        this._xhr = _xhr;
	        this._urlResolver = _urlResolver;
	        this._styleCache = new Map();
	        this._shadowCss = new shadow_css_1.ShadowCss();
	    }
	    StyleCompiler.prototype.compileComponentRuntime = function (template) {
	        var styles = template.styles;
	        var styleAbsUrls = template.styleUrls;
	        return this._loadStyles(styles, styleAbsUrls, template.encapsulation === view_1.ViewEncapsulation.Emulated);
	    };
	    StyleCompiler.prototype.compileComponentCodeGen = function (template) {
	        var shim = template.encapsulation === view_1.ViewEncapsulation.Emulated;
	        return this._styleCodeGen(template.styles, template.styleUrls, shim);
	    };
	    StyleCompiler.prototype.compileStylesheetCodeGen = function (stylesheetUrl, cssText) {
	        var styleWithImports = style_url_resolver_1.extractStyleUrls(this._urlResolver, stylesheetUrl, cssText);
	        return [
	            this._styleModule(stylesheetUrl, false, this._styleCodeGen([styleWithImports.style], styleWithImports.styleUrls, false)),
	            this._styleModule(stylesheetUrl, true, this._styleCodeGen([styleWithImports.style], styleWithImports.styleUrls, true))
	        ];
	    };
	    StyleCompiler.prototype.clearCache = function () { this._styleCache.clear(); };
	    StyleCompiler.prototype._loadStyles = function (plainStyles, absUrls, encapsulate) {
	        var _this = this;
	        var promises = absUrls.map(function (absUrl) {
	            var cacheKey = "" + absUrl + (encapsulate ? '.shim' : '');
	            var result = _this._styleCache.get(cacheKey);
	            if (lang_1.isBlank(result)) {
	                result = _this._xhr.get(absUrl).then(function (style) {
	                    var styleWithImports = style_url_resolver_1.extractStyleUrls(_this._urlResolver, absUrl, style);
	                    return _this._loadStyles([styleWithImports.style], styleWithImports.styleUrls, encapsulate);
	                });
	                _this._styleCache.set(cacheKey, result);
	            }
	            return result;
	        });
	        return async_1.PromiseWrapper.all(promises).then(function (nestedStyles) {
	            var result = plainStyles.map(function (plainStyle) { return _this._shimIfNeeded(plainStyle, encapsulate); });
	            nestedStyles.forEach(function (styles) { return result.push(styles); });
	            return result;
	        });
	    };
	    StyleCompiler.prototype._styleCodeGen = function (plainStyles, absUrls, shim) {
	        var _this = this;
	        var arrayPrefix = lang_1.IS_DART ? "const" : '';
	        var styleExpressions = plainStyles.map(function (plainStyle) { return util_1.escapeSingleQuoteString(_this._shimIfNeeded(plainStyle, shim)); });
	        for (var i = 0; i < absUrls.length; i++) {
	            var moduleUrl = this._createModuleUrl(absUrls[i], shim);
	            styleExpressions.push(source_module_1.moduleRef(moduleUrl) + "STYLES");
	        }
	        var expressionSource = arrayPrefix + " [" + styleExpressions.join(',') + "]";
	        return new source_module_1.SourceExpression([], expressionSource);
	    };
	    StyleCompiler.prototype._styleModule = function (stylesheetUrl, shim, expression) {
	        var moduleSource = "\n      " + expression.declarations.join('\n') + "\n      " + util_1.codeGenExportVariable('STYLES') + expression.expression + ";\n    ";
	        return new source_module_1.SourceModule(this._createModuleUrl(stylesheetUrl, shim), moduleSource);
	    };
	    StyleCompiler.prototype._shimIfNeeded = function (style, shim) {
	        return shim ? this._shadowCss.shimCssText(style, CONTENT_ATTR, HOST_ATTR) : style;
	    };
	    StyleCompiler.prototype._createModuleUrl = function (stylesheetUrl, shim) {
	        return shim ? stylesheetUrl + ".shim" + util_1.MODULE_SUFFIX : "" + stylesheetUrl + util_1.MODULE_SUFFIX;
	    };
	    StyleCompiler = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [xhr_1.XHR, url_resolver_1.UrlResolver])
	    ], StyleCompiler);
	    return StyleCompiler;
	}());
	exports.StyleCompiler = StyleCompiler;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var directive_metadata_1 = __webpack_require__(51);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var async_1 = __webpack_require__(6);
	var xhr_1 = __webpack_require__(23);
	var url_resolver_1 = __webpack_require__(31);
	var style_url_resolver_1 = __webpack_require__(87);
	var di_1 = __webpack_require__(5);
	var view_1 = __webpack_require__(18);
	var html_ast_1 = __webpack_require__(82);
	var html_parser_1 = __webpack_require__(83);
	var template_preparser_1 = __webpack_require__(144);
	var TemplateNormalizer = (function () {
	    function TemplateNormalizer(_xhr, _urlResolver, _htmlParser) {
	        this._xhr = _xhr;
	        this._urlResolver = _urlResolver;
	        this._htmlParser = _htmlParser;
	    }
	    TemplateNormalizer.prototype.normalizeTemplate = function (directiveType, template) {
	        var _this = this;
	        if (lang_1.isPresent(template.template)) {
	            return async_1.PromiseWrapper.resolve(this.normalizeLoadedTemplate(directiveType, template, template.template, directiveType.moduleUrl));
	        }
	        else if (lang_1.isPresent(template.templateUrl)) {
	            var sourceAbsUrl = this._urlResolver.resolve(directiveType.moduleUrl, template.templateUrl);
	            return this._xhr.get(sourceAbsUrl)
	                .then(function (templateContent) { return _this.normalizeLoadedTemplate(directiveType, template, templateContent, sourceAbsUrl); });
	        }
	        else {
	            throw new exceptions_1.BaseException("No template specified for component " + directiveType.name);
	        }
	    };
	    TemplateNormalizer.prototype.normalizeLoadedTemplate = function (directiveType, templateMeta, template, templateAbsUrl) {
	        var _this = this;
	        var rootNodesAndErrors = this._htmlParser.parse(template, directiveType.name);
	        if (rootNodesAndErrors.errors.length > 0) {
	            var errorString = rootNodesAndErrors.errors.join('\n');
	            throw new exceptions_1.BaseException("Template parse errors:\n" + errorString);
	        }
	        var visitor = new TemplatePreparseVisitor();
	        html_ast_1.htmlVisitAll(visitor, rootNodesAndErrors.rootNodes);
	        var allStyles = templateMeta.styles.concat(visitor.styles);
	        var allStyleAbsUrls = visitor.styleUrls.filter(style_url_resolver_1.isStyleUrlResolvable)
	            .map(function (url) { return _this._urlResolver.resolve(templateAbsUrl, url); })
	            .concat(templateMeta.styleUrls.filter(style_url_resolver_1.isStyleUrlResolvable)
	            .map(function (url) { return _this._urlResolver.resolve(directiveType.moduleUrl, url); }));
	        var allResolvedStyles = allStyles.map(function (style) {
	            var styleWithImports = style_url_resolver_1.extractStyleUrls(_this._urlResolver, templateAbsUrl, style);
	            styleWithImports.styleUrls.forEach(function (styleUrl) { return allStyleAbsUrls.push(styleUrl); });
	            return styleWithImports.style;
	        });
	        var encapsulation = templateMeta.encapsulation;
	        if (encapsulation === view_1.ViewEncapsulation.Emulated && allResolvedStyles.length === 0 &&
	            allStyleAbsUrls.length === 0) {
	            encapsulation = view_1.ViewEncapsulation.None;
	        }
	        return new directive_metadata_1.CompileTemplateMetadata({
	            encapsulation: encapsulation,
	            template: template,
	            templateUrl: templateAbsUrl,
	            styles: allResolvedStyles,
	            styleUrls: allStyleAbsUrls,
	            ngContentSelectors: visitor.ngContentSelectors
	        });
	    };
	    TemplateNormalizer = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [xhr_1.XHR, url_resolver_1.UrlResolver, html_parser_1.HtmlParser])
	    ], TemplateNormalizer);
	    return TemplateNormalizer;
	}());
	exports.TemplateNormalizer = TemplateNormalizer;
	var TemplatePreparseVisitor = (function () {
	    function TemplatePreparseVisitor() {
	        this.ngContentSelectors = [];
	        this.styles = [];
	        this.styleUrls = [];
	        this.ngNonBindableStackCount = 0;
	    }
	    TemplatePreparseVisitor.prototype.visitElement = function (ast, context) {
	        var preparsedElement = template_preparser_1.preparseElement(ast);
	        switch (preparsedElement.type) {
	            case template_preparser_1.PreparsedElementType.NG_CONTENT:
	                if (this.ngNonBindableStackCount === 0) {
	                    this.ngContentSelectors.push(preparsedElement.selectAttr);
	                }
	                break;
	            case template_preparser_1.PreparsedElementType.STYLE:
	                var textContent = '';
	                ast.children.forEach(function (child) {
	                    if (child instanceof html_ast_1.HtmlTextAst) {
	                        textContent += child.value;
	                    }
	                });
	                this.styles.push(textContent);
	                break;
	            case template_preparser_1.PreparsedElementType.STYLESHEET:
	                this.styleUrls.push(preparsedElement.hrefAttr);
	                break;
	            default:
	                // DDC reports this as error. See:
	                // https://github.com/dart-lang/dev_compiler/issues/428
	                break;
	        }
	        if (preparsedElement.nonBindable) {
	            this.ngNonBindableStackCount++;
	        }
	        html_ast_1.htmlVisitAll(this, ast.children);
	        if (preparsedElement.nonBindable) {
	            this.ngNonBindableStackCount--;
	        }
	        return null;
	    };
	    TemplatePreparseVisitor.prototype.visitComment = function (ast, context) { return null; };
	    TemplatePreparseVisitor.prototype.visitAttr = function (ast, context) { return null; };
	    TemplatePreparseVisitor.prototype.visitText = function (ast, context) { return null; };
	    return TemplatePreparseVisitor;
	}());


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var html_tags_1 = __webpack_require__(30);
	var NG_CONTENT_SELECT_ATTR = 'select';
	var NG_CONTENT_ELEMENT = 'ng-content';
	var LINK_ELEMENT = 'link';
	var LINK_STYLE_REL_ATTR = 'rel';
	var LINK_STYLE_HREF_ATTR = 'href';
	var LINK_STYLE_REL_VALUE = 'stylesheet';
	var STYLE_ELEMENT = 'style';
	var SCRIPT_ELEMENT = 'script';
	var NG_NON_BINDABLE_ATTR = 'ngNonBindable';
	var NG_PROJECT_AS = 'ngProjectAs';
	function preparseElement(ast) {
	    var selectAttr = null;
	    var hrefAttr = null;
	    var relAttr = null;
	    var nonBindable = false;
	    var projectAs = null;
	    ast.attrs.forEach(function (attr) {
	        var lcAttrName = attr.name.toLowerCase();
	        if (lcAttrName == NG_CONTENT_SELECT_ATTR) {
	            selectAttr = attr.value;
	        }
	        else if (lcAttrName == LINK_STYLE_HREF_ATTR) {
	            hrefAttr = attr.value;
	        }
	        else if (lcAttrName == LINK_STYLE_REL_ATTR) {
	            relAttr = attr.value;
	        }
	        else if (attr.name == NG_NON_BINDABLE_ATTR) {
	            nonBindable = true;
	        }
	        else if (attr.name == NG_PROJECT_AS) {
	            if (attr.value.length > 0) {
	                projectAs = attr.value;
	            }
	        }
	    });
	    selectAttr = normalizeNgContentSelect(selectAttr);
	    var nodeName = ast.name.toLowerCase();
	    var type = PreparsedElementType.OTHER;
	    if (html_tags_1.splitNsName(nodeName)[1] == NG_CONTENT_ELEMENT) {
	        type = PreparsedElementType.NG_CONTENT;
	    }
	    else if (nodeName == STYLE_ELEMENT) {
	        type = PreparsedElementType.STYLE;
	    }
	    else if (nodeName == SCRIPT_ELEMENT) {
	        type = PreparsedElementType.SCRIPT;
	    }
	    else if (nodeName == LINK_ELEMENT && relAttr == LINK_STYLE_REL_VALUE) {
	        type = PreparsedElementType.STYLESHEET;
	    }
	    return new PreparsedElement(type, selectAttr, hrefAttr, nonBindable, projectAs);
	}
	exports.preparseElement = preparseElement;
	(function (PreparsedElementType) {
	    PreparsedElementType[PreparsedElementType["NG_CONTENT"] = 0] = "NG_CONTENT";
	    PreparsedElementType[PreparsedElementType["STYLE"] = 1] = "STYLE";
	    PreparsedElementType[PreparsedElementType["STYLESHEET"] = 2] = "STYLESHEET";
	    PreparsedElementType[PreparsedElementType["SCRIPT"] = 3] = "SCRIPT";
	    PreparsedElementType[PreparsedElementType["OTHER"] = 4] = "OTHER";
	})(exports.PreparsedElementType || (exports.PreparsedElementType = {}));
	var PreparsedElementType = exports.PreparsedElementType;
	var PreparsedElement = (function () {
	    function PreparsedElement(type, selectAttr, hrefAttr, nonBindable, projectAs) {
	        this.type = type;
	        this.selectAttr = selectAttr;
	        this.hrefAttr = hrefAttr;
	        this.nonBindable = nonBindable;
	        this.projectAs = projectAs;
	    }
	    return PreparsedElement;
	}());
	exports.PreparsedElement = PreparsedElement;
	function normalizeNgContentSelect(selectAttr) {
	    if (lang_1.isBlank(selectAttr) || selectAttr.length === 0) {
	        return '*';
	    }
	    return selectAttr;
	}


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(2);
	var template_ast_1 = __webpack_require__(22);
	var source_module_1 = __webpack_require__(21);
	var view_1 = __webpack_require__(36);
	var view_type_1 = __webpack_require__(37);
	var element_1 = __webpack_require__(54);
	var view_2 = __webpack_require__(18);
	var util_1 = __webpack_require__(13);
	var di_1 = __webpack_require__(5);
	var proto_view_compiler_1 = __webpack_require__(85);
	exports.VIEW_JIT_IMPORTS = lang_1.CONST_EXPR({
	    'AppView': view_1.AppView,
	    'AppElement': element_1.AppElement,
	    'flattenNestedViewRenderNodes': view_1.flattenNestedViewRenderNodes,
	    'checkSlotCount': view_1.checkSlotCount
	});
	var ViewCompiler = (function () {
	    function ViewCompiler() {
	    }
	    ViewCompiler.prototype.compileComponentRuntime = function (component, template, styles, protoViews, changeDetectorFactories, componentViewFactory) {
	        var viewFactory = new RuntimeViewFactory(component, styles, protoViews, changeDetectorFactories, componentViewFactory);
	        return viewFactory.createViewFactory(template, 0, []);
	    };
	    ViewCompiler.prototype.compileComponentCodeGen = function (component, template, styles, protoViews, changeDetectorFactoryExpressions, componentViewFactory) {
	        var viewFactory = new CodeGenViewFactory(component, styles, protoViews, changeDetectorFactoryExpressions, componentViewFactory);
	        var targetStatements = [];
	        var viewFactoryExpression = viewFactory.createViewFactory(template, 0, targetStatements);
	        return new source_module_1.SourceExpression(targetStatements.map(function (stmt) { return stmt.statement; }), viewFactoryExpression.expression);
	    };
	    ViewCompiler = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], ViewCompiler);
	    return ViewCompiler;
	}());
	exports.ViewCompiler = ViewCompiler;
	var CodeGenViewFactory = (function () {
	    function CodeGenViewFactory(component, styles, protoViews, changeDetectorExpressions, componentViewFactory) {
	        this.component = component;
	        this.styles = styles;
	        this.protoViews = protoViews;
	        this.changeDetectorExpressions = changeDetectorExpressions;
	        this.componentViewFactory = componentViewFactory;
	        this._nextVarId = 0;
	    }
	    CodeGenViewFactory.prototype._nextVar = function (prefix) {
	        return "" + prefix + this._nextVarId++ + "_" + this.component.type.name;
	    };
	    CodeGenViewFactory.prototype._nextRenderVar = function () { return this._nextVar('render'); };
	    CodeGenViewFactory.prototype._nextAppVar = function () { return this._nextVar('app'); };
	    CodeGenViewFactory.prototype._nextDisposableVar = function () {
	        return "disposable" + this._nextVarId++ + "_" + this.component.type.name;
	    };
	    CodeGenViewFactory.prototype.createText = function (renderer, parent, text, targetStatements) {
	        var varName = this._nextRenderVar();
	        var statement = "var " + varName + " = " + renderer.expression + ".createText(" + (lang_1.isPresent(parent) ? parent.expression : null) + ", " + util_1.escapeSingleQuoteString(text) + ");";
	        targetStatements.push(new util_1.Statement(statement));
	        return new util_1.Expression(varName);
	    };
	    CodeGenViewFactory.prototype.createElement = function (renderer, parentRenderNode, name, rootSelector, targetStatements) {
	        var varName = this._nextRenderVar();
	        var valueExpr;
	        if (lang_1.isPresent(rootSelector)) {
	            valueExpr = rootSelector.expression + " == null ?\n        " + renderer.expression + ".createElement(" + (lang_1.isPresent(parentRenderNode) ? parentRenderNode.expression : null) + ", " + util_1.escapeSingleQuoteString(name) + ") :\n        " + renderer.expression + ".selectRootElement(" + rootSelector.expression + ");";
	        }
	        else {
	            valueExpr =
	                renderer.expression + ".createElement(" + (lang_1.isPresent(parentRenderNode) ? parentRenderNode.expression : null) + ", " + util_1.escapeSingleQuoteString(name) + ")";
	        }
	        var statement = "var " + varName + " = " + valueExpr + ";";
	        targetStatements.push(new util_1.Statement(statement));
	        return new util_1.Expression(varName);
	    };
	    CodeGenViewFactory.prototype.createTemplateAnchor = function (renderer, parentRenderNode, targetStatements) {
	        var varName = this._nextRenderVar();
	        var valueExpr = renderer.expression + ".createTemplateAnchor(" + (lang_1.isPresent(parentRenderNode) ? parentRenderNode.expression : null) + ");";
	        targetStatements.push(new util_1.Statement("var " + varName + " = " + valueExpr));
	        return new util_1.Expression(varName);
	    };
	    CodeGenViewFactory.prototype.createGlobalEventListener = function (renderer, appView, boundElementIndex, eventAst, targetStatements) {
	        var disposableVar = this._nextDisposableVar();
	        var eventHandlerExpr = codeGenEventHandler(appView, boundElementIndex, eventAst.fullName);
	        targetStatements.push(new util_1.Statement("var " + disposableVar + " = " + renderer.expression + ".listenGlobal(" + util_1.escapeValue(eventAst.target) + ", " + util_1.escapeValue(eventAst.name) + ", " + eventHandlerExpr + ");"));
	        return new util_1.Expression(disposableVar);
	    };
	    CodeGenViewFactory.prototype.createElementEventListener = function (renderer, appView, boundElementIndex, renderNode, eventAst, targetStatements) {
	        var disposableVar = this._nextDisposableVar();
	        var eventHandlerExpr = codeGenEventHandler(appView, boundElementIndex, eventAst.fullName);
	        targetStatements.push(new util_1.Statement("var " + disposableVar + " = " + renderer.expression + ".listen(" + renderNode.expression + ", " + util_1.escapeValue(eventAst.name) + ", " + eventHandlerExpr + ");"));
	        return new util_1.Expression(disposableVar);
	    };
	    CodeGenViewFactory.prototype.setElementAttribute = function (renderer, renderNode, attrName, attrValue, targetStatements) {
	        targetStatements.push(new util_1.Statement(renderer.expression + ".setElementAttribute(" + renderNode.expression + ", " + util_1.escapeSingleQuoteString(attrName) + ", " + util_1.escapeSingleQuoteString(attrValue) + ");"));
	    };
	    CodeGenViewFactory.prototype.createAppElement = function (appProtoEl, appView, renderNode, parentAppEl, embeddedViewFactory, targetStatements) {
	        var appVar = this._nextAppVar();
	        var varValue = "new " + proto_view_compiler_1.APP_EL_MODULE_REF + "AppElement(" + appProtoEl.expression + ", " + appView.expression + ",\n      " + (lang_1.isPresent(parentAppEl) ? parentAppEl.expression : null) + ", " + renderNode.expression + ", " + (lang_1.isPresent(embeddedViewFactory) ? embeddedViewFactory.expression : null) + ")";
	        targetStatements.push(new util_1.Statement("var " + appVar + " = " + varValue + ";"));
	        return new util_1.Expression(appVar);
	    };
	    CodeGenViewFactory.prototype.createAndSetComponentView = function (renderer, viewManager, view, appEl, component, contentNodesByNgContentIndex, targetStatements) {
	        var codeGenContentNodes;
	        if (this.component.type.isHost) {
	            codeGenContentNodes = view.expression + ".projectableNodes";
	        }
	        else {
	            codeGenContentNodes =
	                "[" + contentNodesByNgContentIndex.map(function (nodes) { return util_1.codeGenFlatArray(nodes); }).join(',') + "]";
	        }
	        targetStatements.push(new util_1.Statement(this.componentViewFactory(component) + "(" + renderer.expression + ", " + viewManager.expression + ", " + appEl.expression + ", " + codeGenContentNodes + ", null, null, null);"));
	    };
	    CodeGenViewFactory.prototype.getProjectedNodes = function (projectableNodes, ngContentIndex) {
	        return new util_1.Expression(projectableNodes.expression + "[" + ngContentIndex + "]", true);
	    };
	    CodeGenViewFactory.prototype.appendProjectedNodes = function (renderer, parent, nodes, targetStatements) {
	        targetStatements.push(new util_1.Statement(renderer.expression + ".projectNodes(" + parent.expression + ", " + proto_view_compiler_1.APP_VIEW_MODULE_REF + "flattenNestedViewRenderNodes(" + nodes.expression + "));"));
	    };
	    CodeGenViewFactory.prototype.createViewFactory = function (asts, embeddedTemplateIndex, targetStatements) {
	        var compileProtoView = this.protoViews[embeddedTemplateIndex];
	        var isHostView = this.component.type.isHost;
	        var isComponentView = embeddedTemplateIndex === 0 && !isHostView;
	        var visitor = new ViewBuilderVisitor(new util_1.Expression('renderer'), new util_1.Expression('viewManager'), new util_1.Expression('projectableNodes'), isHostView ? new util_1.Expression('rootSelector') : null, new util_1.Expression('view'), compileProtoView, targetStatements, this);
	        template_ast_1.templateVisitAll(visitor, asts, new ParentElement(isComponentView ? new util_1.Expression('parentRenderNode') : null, null, null));
	        var appProtoView = compileProtoView.protoView.expression;
	        var viewFactoryName = codeGenViewFactoryName(this.component, embeddedTemplateIndex);
	        var changeDetectorFactory = this.changeDetectorExpressions.expressions[embeddedTemplateIndex];
	        var factoryArgs = [
	            'parentRenderer',
	            'viewManager',
	            'containerEl',
	            'projectableNodes',
	            'rootSelector',
	            'dynamicallyCreatedProviders',
	            'rootInjector'
	        ];
	        var initRendererStmts = [];
	        var rendererExpr = "parentRenderer";
	        if (embeddedTemplateIndex === 0) {
	            var renderCompTypeVar = this._nextVar('renderType');
	            targetStatements.push(new util_1.Statement("var " + renderCompTypeVar + " = null;"));
	            var stylesVar = this._nextVar('styles');
	            targetStatements.push(new util_1.Statement(util_1.CONST_VAR + " " + stylesVar + " = " + this.styles.expression + ";"));
	            var encapsulation = this.component.template.encapsulation;
	            initRendererStmts.push("if (" + renderCompTypeVar + " == null) {\n        " + renderCompTypeVar + " = viewManager.createRenderComponentType(" + codeGenViewEncapsulation(encapsulation) + ", " + stylesVar + ");\n      }");
	            rendererExpr = "parentRenderer.renderComponent(" + renderCompTypeVar + ")";
	        }
	        var statement = "\n" + util_1.codeGenFnHeader(factoryArgs, viewFactoryName) + "{\n  " + initRendererStmts.join('\n') + "\n  var renderer = " + rendererExpr + ";\n  var view = new " + proto_view_compiler_1.APP_VIEW_MODULE_REF + "AppView(\n    " + appProtoView + ", renderer, viewManager,\n    projectableNodes,\n    containerEl,\n    dynamicallyCreatedProviders, rootInjector,\n    " + changeDetectorFactory + "()\n  );\n  " + proto_view_compiler_1.APP_VIEW_MODULE_REF + "checkSlotCount(" + util_1.escapeValue(this.component.type.name) + ", " + this.component.template.ngContentSelectors.length + ", projectableNodes);\n  " + (isComponentView ? 'var parentRenderNode = renderer.createViewRoot(view.containerAppElement.nativeElement);' : '') + "\n  " + visitor.renderStmts.map(function (stmt) { return stmt.statement; }).join('\n') + "\n  " + visitor.appStmts.map(function (stmt) { return stmt.statement; }).join('\n') + "\n\n  view.init(" + util_1.codeGenFlatArray(visitor.rootNodesOrAppElements) + ", " + util_1.codeGenArray(visitor.renderNodes) + ", " + util_1.codeGenArray(visitor.appDisposables) + ",\n            " + util_1.codeGenArray(visitor.appElements) + ");\n  return view;\n}";
	        targetStatements.push(new util_1.Statement(statement));
	        return new util_1.Expression(viewFactoryName);
	    };
	    return CodeGenViewFactory;
	}());
	var RuntimeViewFactory = (function () {
	    function RuntimeViewFactory(component, styles, protoViews, changeDetectorFactories, componentViewFactory) {
	        this.component = component;
	        this.styles = styles;
	        this.protoViews = protoViews;
	        this.changeDetectorFactories = changeDetectorFactories;
	        this.componentViewFactory = componentViewFactory;
	    }
	    RuntimeViewFactory.prototype.createText = function (renderer, parent, text, targetStatements) {
	        return renderer.createText(parent, text);
	    };
	    RuntimeViewFactory.prototype.createElement = function (renderer, parent, name, rootSelector, targetStatements) {
	        var el;
	        if (lang_1.isPresent(rootSelector)) {
	            el = renderer.selectRootElement(rootSelector);
	        }
	        else {
	            el = renderer.createElement(parent, name);
	        }
	        return el;
	    };
	    RuntimeViewFactory.prototype.createTemplateAnchor = function (renderer, parent, targetStatements) {
	        return renderer.createTemplateAnchor(parent);
	    };
	    RuntimeViewFactory.prototype.createGlobalEventListener = function (renderer, appView, boundElementIndex, eventAst, targetStatements) {
	        return renderer.listenGlobal(eventAst.target, eventAst.name, function (event) { return appView.triggerEventHandlers(eventAst.fullName, event, boundElementIndex); });
	    };
	    RuntimeViewFactory.prototype.createElementEventListener = function (renderer, appView, boundElementIndex, renderNode, eventAst, targetStatements) {
	        return renderer.listen(renderNode, eventAst.name, function (event) { return appView.triggerEventHandlers(eventAst.fullName, event, boundElementIndex); });
	    };
	    RuntimeViewFactory.prototype.setElementAttribute = function (renderer, renderNode, attrName, attrValue, targetStatements) {
	        renderer.setElementAttribute(renderNode, attrName, attrValue);
	    };
	    RuntimeViewFactory.prototype.createAppElement = function (appProtoEl, appView, renderNode, parentAppEl, embeddedViewFactory, targetStatements) {
	        return new element_1.AppElement(appProtoEl, appView, parentAppEl, renderNode, embeddedViewFactory);
	    };
	    RuntimeViewFactory.prototype.createAndSetComponentView = function (renderer, viewManager, appView, appEl, component, contentNodesByNgContentIndex, targetStatements) {
	        var flattenedContentNodes;
	        if (this.component.type.isHost) {
	            flattenedContentNodes = appView.projectableNodes;
	        }
	        else {
	            flattenedContentNodes = collection_1.ListWrapper.createFixedSize(contentNodesByNgContentIndex.length);
	            for (var i = 0; i < contentNodesByNgContentIndex.length; i++) {
	                flattenedContentNodes[i] = util_1.flattenArray(contentNodesByNgContentIndex[i], []);
	            }
	        }
	        this.componentViewFactory(component)(renderer, viewManager, appEl, flattenedContentNodes);
	    };
	    RuntimeViewFactory.prototype.getProjectedNodes = function (projectableNodes, ngContentIndex) {
	        return projectableNodes[ngContentIndex];
	    };
	    RuntimeViewFactory.prototype.appendProjectedNodes = function (renderer, parent, nodes, targetStatements) {
	        renderer.projectNodes(parent, view_1.flattenNestedViewRenderNodes(nodes));
	    };
	    RuntimeViewFactory.prototype.createViewFactory = function (asts, embeddedTemplateIndex, targetStatements) {
	        var _this = this;
	        var compileProtoView = this.protoViews[embeddedTemplateIndex];
	        var isComponentView = compileProtoView.protoView.type === view_type_1.ViewType.COMPONENT;
	        var renderComponentType = null;
	        return function (parentRenderer, viewManager, containerEl, projectableNodes, rootSelector, dynamicallyCreatedProviders, rootInjector) {
	            if (rootSelector === void 0) { rootSelector = null; }
	            if (dynamicallyCreatedProviders === void 0) { dynamicallyCreatedProviders = null; }
	            if (rootInjector === void 0) { rootInjector = null; }
	            view_1.checkSlotCount(_this.component.type.name, _this.component.template.ngContentSelectors.length, projectableNodes);
	            var renderer;
	            if (embeddedTemplateIndex === 0) {
	                if (lang_1.isBlank(renderComponentType)) {
	                    renderComponentType = viewManager.createRenderComponentType(_this.component.template.encapsulation, _this.styles);
	                }
	                renderer = parentRenderer.renderComponent(renderComponentType);
	            }
	            else {
	                renderer = parentRenderer;
	            }
	            var changeDetector = _this.changeDetectorFactories[embeddedTemplateIndex]();
	            var view = new view_1.AppView(compileProtoView.protoView, renderer, viewManager, projectableNodes, containerEl, dynamicallyCreatedProviders, rootInjector, changeDetector);
	            var visitor = new ViewBuilderVisitor(renderer, viewManager, projectableNodes, rootSelector, view, compileProtoView, [], _this);
	            var parentRenderNode = isComponentView ? renderer.createViewRoot(containerEl.nativeElement) : null;
	            template_ast_1.templateVisitAll(visitor, asts, new ParentElement(parentRenderNode, null, null));
	            view.init(util_1.flattenArray(visitor.rootNodesOrAppElements, []), visitor.renderNodes, visitor.appDisposables, visitor.appElements);
	            return view;
	        };
	    };
	    return RuntimeViewFactory;
	}());
	var ParentElement = (function () {
	    function ParentElement(renderNode, appEl, component) {
	        this.renderNode = renderNode;
	        this.appEl = appEl;
	        this.component = component;
	        if (lang_1.isPresent(component)) {
	            this.contentNodesByNgContentIndex =
	                collection_1.ListWrapper.createFixedSize(component.template.ngContentSelectors.length);
	            for (var i = 0; i < this.contentNodesByNgContentIndex.length; i++) {
	                this.contentNodesByNgContentIndex[i] = [];
	            }
	        }
	        else {
	            this.contentNodesByNgContentIndex = null;
	        }
	    }
	    ParentElement.prototype.addContentNode = function (ngContentIndex, nodeExpr) {
	        this.contentNodesByNgContentIndex[ngContentIndex].push(nodeExpr);
	    };
	    return ParentElement;
	}());
	var ViewBuilderVisitor = (function () {
	    function ViewBuilderVisitor(renderer, viewManager, projectableNodes, rootSelector, view, protoView, targetStatements, factory) {
	        this.renderer = renderer;
	        this.viewManager = viewManager;
	        this.projectableNodes = projectableNodes;
	        this.rootSelector = rootSelector;
	        this.view = view;
	        this.protoView = protoView;
	        this.targetStatements = targetStatements;
	        this.factory = factory;
	        this.renderStmts = [];
	        this.renderNodes = [];
	        this.appStmts = [];
	        this.appElements = [];
	        this.appDisposables = [];
	        this.rootNodesOrAppElements = [];
	        this.elementCount = 0;
	    }
	    ViewBuilderVisitor.prototype._addRenderNode = function (renderNode, appEl, ngContentIndex, parent) {
	        this.renderNodes.push(renderNode);
	        if (lang_1.isPresent(parent.component)) {
	            if (lang_1.isPresent(ngContentIndex)) {
	                parent.addContentNode(ngContentIndex, lang_1.isPresent(appEl) ? appEl : renderNode);
	            }
	        }
	        else if (lang_1.isBlank(parent.renderNode)) {
	            this.rootNodesOrAppElements.push(lang_1.isPresent(appEl) ? appEl : renderNode);
	        }
	    };
	    ViewBuilderVisitor.prototype._getParentRenderNode = function (ngContentIndex, parent) {
	        return lang_1.isPresent(parent.component) &&
	            parent.component.template.encapsulation !== view_2.ViewEncapsulation.Native ?
	            null :
	            parent.renderNode;
	    };
	    ViewBuilderVisitor.prototype.visitBoundText = function (ast, parent) {
	        return this._visitText('', ast.ngContentIndex, parent);
	    };
	    ViewBuilderVisitor.prototype.visitText = function (ast, parent) {
	        return this._visitText(ast.value, ast.ngContentIndex, parent);
	    };
	    ViewBuilderVisitor.prototype._visitText = function (value, ngContentIndex, parent) {
	        var renderNode = this.factory.createText(this.renderer, this._getParentRenderNode(ngContentIndex, parent), value, this.renderStmts);
	        this._addRenderNode(renderNode, null, ngContentIndex, parent);
	        return null;
	    };
	    ViewBuilderVisitor.prototype.visitNgContent = function (ast, parent) {
	        var nodesExpression = this.factory.getProjectedNodes(this.projectableNodes, ast.index);
	        if (lang_1.isPresent(parent.component)) {
	            if (lang_1.isPresent(ast.ngContentIndex)) {
	                parent.addContentNode(ast.ngContentIndex, nodesExpression);
	            }
	        }
	        else {
	            if (lang_1.isPresent(parent.renderNode)) {
	                this.factory.appendProjectedNodes(this.renderer, parent.renderNode, nodesExpression, this.renderStmts);
	            }
	            else {
	                this.rootNodesOrAppElements.push(nodesExpression);
	            }
	        }
	        return null;
	    };
	    ViewBuilderVisitor.prototype.visitElement = function (ast, parent) {
	        var _this = this;
	        var renderNode = this.factory.createElement(this.renderer, this._getParentRenderNode(ast.ngContentIndex, parent), ast.name, this.rootSelector, this.renderStmts);
	        var component = ast.getComponent();
	        var elementIndex = this.elementCount++;
	        var protoEl = this.protoView.protoElements[elementIndex];
	        protoEl.renderEvents.forEach(function (eventAst) {
	            var disposable;
	            if (lang_1.isPresent(eventAst.target)) {
	                disposable = _this.factory.createGlobalEventListener(_this.renderer, _this.view, protoEl.boundElementIndex, eventAst, _this.renderStmts);
	            }
	            else {
	                disposable = _this.factory.createElementEventListener(_this.renderer, _this.view, protoEl.boundElementIndex, renderNode, eventAst, _this.renderStmts);
	            }
	            _this.appDisposables.push(disposable);
	        });
	        for (var i = 0; i < protoEl.attrNameAndValues.length; i++) {
	            var attrName = protoEl.attrNameAndValues[i][0];
	            var attrValue = protoEl.attrNameAndValues[i][1];
	            this.factory.setElementAttribute(this.renderer, renderNode, attrName, attrValue, this.renderStmts);
	        }
	        var appEl = null;
	        if (lang_1.isPresent(protoEl.appProtoEl)) {
	            appEl = this.factory.createAppElement(protoEl.appProtoEl, this.view, renderNode, parent.appEl, null, this.appStmts);
	            this.appElements.push(appEl);
	        }
	        this._addRenderNode(renderNode, appEl, ast.ngContentIndex, parent);
	        var newParent = new ParentElement(renderNode, lang_1.isPresent(appEl) ? appEl : parent.appEl, component);
	        template_ast_1.templateVisitAll(this, ast.children, newParent);
	        if (lang_1.isPresent(appEl) && lang_1.isPresent(component)) {
	            this.factory.createAndSetComponentView(this.renderer, this.viewManager, this.view, appEl, component, newParent.contentNodesByNgContentIndex, this.appStmts);
	        }
	        return null;
	    };
	    ViewBuilderVisitor.prototype.visitEmbeddedTemplate = function (ast, parent) {
	        var renderNode = this.factory.createTemplateAnchor(this.renderer, this._getParentRenderNode(ast.ngContentIndex, parent), this.renderStmts);
	        var elementIndex = this.elementCount++;
	        var protoEl = this.protoView.protoElements[elementIndex];
	        var embeddedViewFactory = this.factory.createViewFactory(ast.children, protoEl.embeddedTemplateIndex, this.targetStatements);
	        var appEl = this.factory.createAppElement(protoEl.appProtoEl, this.view, renderNode, parent.appEl, embeddedViewFactory, this.appStmts);
	        this._addRenderNode(renderNode, appEl, ast.ngContentIndex, parent);
	        this.appElements.push(appEl);
	        return null;
	    };
	    ViewBuilderVisitor.prototype.visitVariable = function (ast, ctx) { return null; };
	    ViewBuilderVisitor.prototype.visitAttr = function (ast, ctx) { return null; };
	    ViewBuilderVisitor.prototype.visitDirective = function (ast, ctx) { return null; };
	    ViewBuilderVisitor.prototype.visitEvent = function (ast, ctx) { return null; };
	    ViewBuilderVisitor.prototype.visitDirectiveProperty = function (ast, context) { return null; };
	    ViewBuilderVisitor.prototype.visitElementProperty = function (ast, context) { return null; };
	    return ViewBuilderVisitor;
	}());
	function codeGenEventHandler(view, boundElementIndex, eventName) {
	    return util_1.codeGenValueFn(['event'], view.expression + ".triggerEventHandlers(" + util_1.escapeValue(eventName) + ", event, " + boundElementIndex + ")");
	}
	function codeGenViewFactoryName(component, embeddedTemplateIndex) {
	    return "viewFactory_" + component.type.name + embeddedTemplateIndex;
	}
	function codeGenViewEncapsulation(value) {
	    if (lang_1.IS_DART) {
	        return "" + proto_view_compiler_1.METADATA_MODULE_REF + value;
	    }
	    else {
	        return "" + value;
	    }
	}


/***/ },
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	exports.Math = lang_1.global.Math;
	exports.NaN = typeof exports.NaN;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(2);
	var lang_1 = __webpack_require__(1);
	var dom_adapter_1 = __webpack_require__(7);
	var generic_browser_adapter_1 = __webpack_require__(272);
	var _attrToPropMap = {
	    'class': 'className',
	    'innerHtml': 'innerHTML',
	    'readonly': 'readOnly',
	    'tabindex': 'tabIndex'
	};
	var DOM_KEY_LOCATION_NUMPAD = 3;
	// Map to convert some key or keyIdentifier values to what will be returned by getEventKey
	var _keyMap = {
	    // The following values are here for cross-browser compatibility and to match the W3C standard
	    // cf http://www.w3.org/TR/DOM-Level-3-Events-key/
	    '\b': 'Backspace',
	    '\t': 'Tab',
	    '\x7F': 'Delete',
	    '\x1B': 'Escape',
	    'Del': 'Delete',
	    'Esc': 'Escape',
	    'Left': 'ArrowLeft',
	    'Right': 'ArrowRight',
	    'Up': 'ArrowUp',
	    'Down': 'ArrowDown',
	    'Menu': 'ContextMenu',
	    'Scroll': 'ScrollLock',
	    'Win': 'OS'
	};
	// There is a bug in Chrome for numeric keypad keys:
	// https://code.google.com/p/chromium/issues/detail?id=155654
	// 1, 2, 3 ... are reported as A, B, C ...
	var _chromeNumKeyPadMap = {
	    'A': '1',
	    'B': '2',
	    'C': '3',
	    'D': '4',
	    'E': '5',
	    'F': '6',
	    'G': '7',
	    'H': '8',
	    'I': '9',
	    'J': '*',
	    'K': '+',
	    'M': '-',
	    'N': '.',
	    'O': '/',
	    '\x60': '0',
	    '\x90': 'NumLock'
	};
	/**
	 * A `DomAdapter` powered by full browser DOM APIs.
	 */
	/* tslint:disable:requireParameterType */
	var BrowserDomAdapter = (function (_super) {
	    __extends(BrowserDomAdapter, _super);
	    function BrowserDomAdapter() {
	        _super.apply(this, arguments);
	    }
	    BrowserDomAdapter.prototype.parse = function (templateHtml) { throw new Error("parse not implemented"); };
	    BrowserDomAdapter.makeCurrent = function () { dom_adapter_1.setRootDomAdapter(new BrowserDomAdapter()); };
	    BrowserDomAdapter.prototype.hasProperty = function (element, name) { return name in element; };
	    BrowserDomAdapter.prototype.setProperty = function (el, name, value) { el[name] = value; };
	    BrowserDomAdapter.prototype.getProperty = function (el, name) { return el[name]; };
	    BrowserDomAdapter.prototype.invoke = function (el, methodName, args) {
	        el[methodName].apply(el, args);
	    };
	    // TODO(tbosch): move this into a separate environment class once we have it
	    BrowserDomAdapter.prototype.logError = function (error) {
	        if (window.console.error) {
	            window.console.error(error);
	        }
	        else {
	            window.console.log(error);
	        }
	    };
	    BrowserDomAdapter.prototype.log = function (error) { window.console.log(error); };
	    BrowserDomAdapter.prototype.logGroup = function (error) {
	        if (window.console.group) {
	            window.console.group(error);
	            this.logError(error);
	        }
	        else {
	            window.console.log(error);
	        }
	    };
	    BrowserDomAdapter.prototype.logGroupEnd = function () {
	        if (window.console.groupEnd) {
	            window.console.groupEnd();
	        }
	    };
	    Object.defineProperty(BrowserDomAdapter.prototype, "attrToPropMap", {
	        get: function () { return _attrToPropMap; },
	        enumerable: true,
	        configurable: true
	    });
	    BrowserDomAdapter.prototype.query = function (selector) { return document.querySelector(selector); };
	    BrowserDomAdapter.prototype.querySelector = function (el, selector) { return el.querySelector(selector); };
	    BrowserDomAdapter.prototype.querySelectorAll = function (el, selector) { return el.querySelectorAll(selector); };
	    BrowserDomAdapter.prototype.on = function (el, evt, listener) { el.addEventListener(evt, listener, false); };
	    BrowserDomAdapter.prototype.onAndCancel = function (el, evt, listener) {
	        el.addEventListener(evt, listener, false);
	        // Needed to follow Dart's subscription semantic, until fix of
	        // https://code.google.com/p/dart/issues/detail?id=17406
	        return function () { el.removeEventListener(evt, listener, false); };
	    };
	    BrowserDomAdapter.prototype.dispatchEvent = function (el, evt) { el.dispatchEvent(evt); };
	    BrowserDomAdapter.prototype.createMouseEvent = function (eventType) {
	        var evt = document.createEvent('MouseEvent');
	        evt.initEvent(eventType, true, true);
	        return evt;
	    };
	    BrowserDomAdapter.prototype.createEvent = function (eventType) {
	        var evt = document.createEvent('Event');
	        evt.initEvent(eventType, true, true);
	        return evt;
	    };
	    BrowserDomAdapter.prototype.preventDefault = function (evt) {
	        evt.preventDefault();
	        evt.returnValue = false;
	    };
	    BrowserDomAdapter.prototype.isPrevented = function (evt) {
	        return evt.defaultPrevented || lang_1.isPresent(evt.returnValue) && !evt.returnValue;
	    };
	    BrowserDomAdapter.prototype.getInnerHTML = function (el) { return el.innerHTML; };
	    BrowserDomAdapter.prototype.getOuterHTML = function (el) { return el.outerHTML; };
	    BrowserDomAdapter.prototype.nodeName = function (node) { return node.nodeName; };
	    BrowserDomAdapter.prototype.nodeValue = function (node) { return node.nodeValue; };
	    BrowserDomAdapter.prototype.type = function (node) { return node.type; };
	    BrowserDomAdapter.prototype.content = function (node) {
	        if (this.hasProperty(node, "content")) {
	            return node.content;
	        }
	        else {
	            return node;
	        }
	    };
	    BrowserDomAdapter.prototype.firstChild = function (el) { return el.firstChild; };
	    BrowserDomAdapter.prototype.nextSibling = function (el) { return el.nextSibling; };
	    BrowserDomAdapter.prototype.parentElement = function (el) { return el.parentNode; };
	    BrowserDomAdapter.prototype.childNodes = function (el) { return el.childNodes; };
	    BrowserDomAdapter.prototype.childNodesAsList = function (el) {
	        var childNodes = el.childNodes;
	        var res = collection_1.ListWrapper.createFixedSize(childNodes.length);
	        for (var i = 0; i < childNodes.length; i++) {
	            res[i] = childNodes[i];
	        }
	        return res;
	    };
	    BrowserDomAdapter.prototype.clearNodes = function (el) {
	        while (el.firstChild) {
	            el.removeChild(el.firstChild);
	        }
	    };
	    BrowserDomAdapter.prototype.appendChild = function (el, node) { el.appendChild(node); };
	    BrowserDomAdapter.prototype.removeChild = function (el, node) { el.removeChild(node); };
	    BrowserDomAdapter.prototype.replaceChild = function (el, newChild, oldChild) { el.replaceChild(newChild, oldChild); };
	    BrowserDomAdapter.prototype.remove = function (node) {
	        if (node.parentNode) {
	            node.parentNode.removeChild(node);
	        }
	        return node;
	    };
	    BrowserDomAdapter.prototype.insertBefore = function (el, node) { el.parentNode.insertBefore(node, el); };
	    BrowserDomAdapter.prototype.insertAllBefore = function (el, nodes) { nodes.forEach(function (n) { return el.parentNode.insertBefore(n, el); }); };
	    BrowserDomAdapter.prototype.insertAfter = function (el, node) { el.parentNode.insertBefore(node, el.nextSibling); };
	    BrowserDomAdapter.prototype.setInnerHTML = function (el, value) { el.innerHTML = value; };
	    BrowserDomAdapter.prototype.getText = function (el) { return el.textContent; };
	    // TODO(vicb): removed Element type because it does not support StyleElement
	    BrowserDomAdapter.prototype.setText = function (el, value) { el.textContent = value; };
	    BrowserDomAdapter.prototype.getValue = function (el) { return el.value; };
	    BrowserDomAdapter.prototype.setValue = function (el, value) { el.value = value; };
	    BrowserDomAdapter.prototype.getChecked = function (el) { return el.checked; };
	    BrowserDomAdapter.prototype.setChecked = function (el, value) { el.checked = value; };
	    BrowserDomAdapter.prototype.createComment = function (text) { return document.createComment(text); };
	    BrowserDomAdapter.prototype.createTemplate = function (html) {
	        var t = document.createElement('template');
	        t.innerHTML = html;
	        return t;
	    };
	    BrowserDomAdapter.prototype.createElement = function (tagName, doc) {
	        if (doc === void 0) { doc = document; }
	        return doc.createElement(tagName);
	    };
	    BrowserDomAdapter.prototype.createElementNS = function (ns, tagName, doc) {
	        if (doc === void 0) { doc = document; }
	        return doc.createElementNS(ns, tagName);
	    };
	    BrowserDomAdapter.prototype.createTextNode = function (text, doc) {
	        if (doc === void 0) { doc = document; }
	        return doc.createTextNode(text);
	    };
	    BrowserDomAdapter.prototype.createScriptTag = function (attrName, attrValue, doc) {
	        if (doc === void 0) { doc = document; }
	        var el = doc.createElement('SCRIPT');
	        el.setAttribute(attrName, attrValue);
	        return el;
	    };
	    BrowserDomAdapter.prototype.createStyleElement = function (css, doc) {
	        if (doc === void 0) { doc = document; }
	        var style = doc.createElement('style');
	        this.appendChild(style, this.createTextNode(css));
	        return style;
	    };
	    BrowserDomAdapter.prototype.createShadowRoot = function (el) { return el.createShadowRoot(); };
	    BrowserDomAdapter.prototype.getShadowRoot = function (el) { return el.shadowRoot; };
	    BrowserDomAdapter.prototype.getHost = function (el) { return el.host; };
	    BrowserDomAdapter.prototype.clone = function (node) { return node.cloneNode(true); };
	    BrowserDomAdapter.prototype.getElementsByClassName = function (element, name) {
	        return element.getElementsByClassName(name);
	    };
	    BrowserDomAdapter.prototype.getElementsByTagName = function (element, name) {
	        return element.getElementsByTagName(name);
	    };
	    BrowserDomAdapter.prototype.classList = function (element) { return Array.prototype.slice.call(element.classList, 0); };
	    BrowserDomAdapter.prototype.addClass = function (element, className) { element.classList.add(className); };
	    BrowserDomAdapter.prototype.removeClass = function (element, className) { element.classList.remove(className); };
	    BrowserDomAdapter.prototype.hasClass = function (element, className) { return element.classList.contains(className); };
	    BrowserDomAdapter.prototype.setStyle = function (element, styleName, styleValue) {
	        element.style[styleName] = styleValue;
	    };
	    BrowserDomAdapter.prototype.removeStyle = function (element, stylename) { element.style[stylename] = null; };
	    BrowserDomAdapter.prototype.getStyle = function (element, stylename) { return element.style[stylename]; };
	    BrowserDomAdapter.prototype.hasStyle = function (element, styleName, styleValue) {
	        if (styleValue === void 0) { styleValue = null; }
	        var value = this.getStyle(element, styleName) || '';
	        return styleValue ? value == styleValue : value.length > 0;
	    };
	    BrowserDomAdapter.prototype.tagName = function (element) { return element.tagName; };
	    BrowserDomAdapter.prototype.attributeMap = function (element) {
	        var res = new Map();
	        var elAttrs = element.attributes;
	        for (var i = 0; i < elAttrs.length; i++) {
	            var attrib = elAttrs[i];
	            res.set(attrib.name, attrib.value);
	        }
	        return res;
	    };
	    BrowserDomAdapter.prototype.hasAttribute = function (element, attribute) { return element.hasAttribute(attribute); };
	    BrowserDomAdapter.prototype.hasAttributeNS = function (element, ns, attribute) {
	        return element.hasAttributeNS(ns, attribute);
	    };
	    BrowserDomAdapter.prototype.getAttribute = function (element, attribute) { return element.getAttribute(attribute); };
	    BrowserDomAdapter.prototype.getAttributeNS = function (element, ns, name) {
	        return element.getAttributeNS(ns, name);
	    };
	    BrowserDomAdapter.prototype.setAttribute = function (element, name, value) { element.setAttribute(name, value); };
	    BrowserDomAdapter.prototype.setAttributeNS = function (element, ns, name, value) {
	        element.setAttributeNS(ns, name, value);
	    };
	    BrowserDomAdapter.prototype.removeAttribute = function (element, attribute) { element.removeAttribute(attribute); };
	    BrowserDomAdapter.prototype.removeAttributeNS = function (element, ns, name) { element.removeAttributeNS(ns, name); };
	    BrowserDomAdapter.prototype.templateAwareRoot = function (el) { return this.isTemplateElement(el) ? this.content(el) : el; };
	    BrowserDomAdapter.prototype.createHtmlDocument = function () {
	        return document.implementation.createHTMLDocument('fakeTitle');
	    };
	    BrowserDomAdapter.prototype.defaultDoc = function () { return document; };
	    BrowserDomAdapter.prototype.getBoundingClientRect = function (el) {
	        try {
	            return el.getBoundingClientRect();
	        }
	        catch (e) {
	            return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
	        }
	    };
	    BrowserDomAdapter.prototype.getTitle = function () { return document.title; };
	    BrowserDomAdapter.prototype.setTitle = function (newTitle) { document.title = newTitle || ''; };
	    BrowserDomAdapter.prototype.elementMatches = function (n, selector) {
	        var matches = false;
	        if (n instanceof HTMLElement) {
	            if (n.matches) {
	                matches = n.matches(selector);
	            }
	            else if (n.msMatchesSelector) {
	                matches = n.msMatchesSelector(selector);
	            }
	            else if (n.webkitMatchesSelector) {
	                matches = n.webkitMatchesSelector(selector);
	            }
	        }
	        return matches;
	    };
	    BrowserDomAdapter.prototype.isTemplateElement = function (el) {
	        return el instanceof HTMLElement && el.nodeName == "TEMPLATE";
	    };
	    BrowserDomAdapter.prototype.isTextNode = function (node) { return node.nodeType === Node.TEXT_NODE; };
	    BrowserDomAdapter.prototype.isCommentNode = function (node) { return node.nodeType === Node.COMMENT_NODE; };
	    BrowserDomAdapter.prototype.isElementNode = function (node) { return node.nodeType === Node.ELEMENT_NODE; };
	    BrowserDomAdapter.prototype.hasShadowRoot = function (node) { return node instanceof HTMLElement && lang_1.isPresent(node.shadowRoot); };
	    BrowserDomAdapter.prototype.isShadowRoot = function (node) { return node instanceof DocumentFragment; };
	    BrowserDomAdapter.prototype.importIntoDoc = function (node) {
	        var toImport = node;
	        if (this.isTemplateElement(node)) {
	            toImport = this.content(node);
	        }
	        return document.importNode(toImport, true);
	    };
	    BrowserDomAdapter.prototype.adoptNode = function (node) { return document.adoptNode(node); };
	    BrowserDomAdapter.prototype.getHref = function (el) { return el.href; };
	    BrowserDomAdapter.prototype.getEventKey = function (event) {
	        var key = event.key;
	        if (lang_1.isBlank(key)) {
	            key = event.keyIdentifier;
	            // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
	            // Safari
	            // cf
	            // http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
	            if (lang_1.isBlank(key)) {
	                return 'Unidentified';
	            }
	            if (key.startsWith('U+')) {
	                key = String.fromCharCode(parseInt(key.substring(2), 16));
	                if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
	                    // There is a bug in Chrome for numeric keypad keys:
	                    // https://code.google.com/p/chromium/issues/detail?id=155654
	                    // 1, 2, 3 ... are reported as A, B, C ...
	                    key = _chromeNumKeyPadMap[key];
	                }
	            }
	        }
	        if (_keyMap.hasOwnProperty(key)) {
	            key = _keyMap[key];
	        }
	        return key;
	    };
	    BrowserDomAdapter.prototype.getGlobalEventTarget = function (target) {
	        if (target == "window") {
	            return window;
	        }
	        else if (target == "document") {
	            return document;
	        }
	        else if (target == "body") {
	            return document.body;
	        }
	    };
	    BrowserDomAdapter.prototype.getHistory = function () { return window.history; };
	    BrowserDomAdapter.prototype.getLocation = function () { return window.location; };
	    BrowserDomAdapter.prototype.getBaseHref = function () {
	        var href = getBaseElementHref();
	        if (lang_1.isBlank(href)) {
	            return null;
	        }
	        return relativePath(href);
	    };
	    BrowserDomAdapter.prototype.resetBaseElement = function () { baseElement = null; };
	    BrowserDomAdapter.prototype.getUserAgent = function () { return window.navigator.userAgent; };
	    BrowserDomAdapter.prototype.setData = function (element, name, value) {
	        this.setAttribute(element, 'data-' + name, value);
	    };
	    BrowserDomAdapter.prototype.getData = function (element, name) { return this.getAttribute(element, 'data-' + name); };
	    BrowserDomAdapter.prototype.getComputedStyle = function (element) { return getComputedStyle(element); };
	    // TODO(tbosch): move this into a separate environment class once we have it
	    BrowserDomAdapter.prototype.setGlobalVar = function (path, value) { lang_1.setValueOnPath(lang_1.global, path, value); };
	    BrowserDomAdapter.prototype.requestAnimationFrame = function (callback) { return window.requestAnimationFrame(callback); };
	    BrowserDomAdapter.prototype.cancelAnimationFrame = function (id) { window.cancelAnimationFrame(id); };
	    BrowserDomAdapter.prototype.performanceNow = function () {
	        // performance.now() is not available in all browsers, see
	        // http://caniuse.com/#search=performance.now
	        if (lang_1.isPresent(window.performance) && lang_1.isPresent(window.performance.now)) {
	            return window.performance.now();
	        }
	        else {
	            return lang_1.DateWrapper.toMillis(lang_1.DateWrapper.now());
	        }
	    };
	    return BrowserDomAdapter;
	}(generic_browser_adapter_1.GenericBrowserDomAdapter));
	exports.BrowserDomAdapter = BrowserDomAdapter;
	var baseElement = null;
	function getBaseElementHref() {
	    if (lang_1.isBlank(baseElement)) {
	        baseElement = document.querySelector('base');
	        if (lang_1.isBlank(baseElement)) {
	            return null;
	        }
	    }
	    return baseElement.getAttribute('href');
	}
	// based on urlUtils.js in AngularJS 1
	var urlParsingNode = null;
	function relativePath(url) {
	    if (lang_1.isBlank(urlParsingNode)) {
	        urlParsingNode = document.createElement("a");
	    }
	    urlParsingNode.setAttribute('href', url);
	    return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
	        '/' + urlParsingNode.pathname;
	}


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var promise_1 = __webpack_require__(27);
	var lang_1 = __webpack_require__(1);
	var xhr_1 = __webpack_require__(23);
	var XHRImpl = (function (_super) {
	    __extends(XHRImpl, _super);
	    function XHRImpl() {
	        _super.apply(this, arguments);
	    }
	    XHRImpl.prototype.get = function (url) {
	        var completer = promise_1.PromiseWrapper.completer();
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET', url, true);
	        xhr.responseType = 'text';
	        xhr.onload = function () {
	            // responseText is the old-school way of retrieving response (supported by IE8 & 9)
	            // response/responseType properties were introduced in XHR Level2 spec (supported by IE10)
	            var response = lang_1.isPresent(xhr.response) ? xhr.response : xhr.responseText;
	            // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
	            var status = xhr.status === 1223 ? 204 : xhr.status;
	            // fix status code when it is 0 (0 status is undocumented).
	            // Occurs when accessing file resources or on Android 4.1 stock browser
	            // while retrieving files from application cache.
	            if (status === 0) {
	                status = response ? 200 : 0;
	            }
	            if (200 <= status && status <= 300) {
	                completer.resolve(response);
	            }
	            else {
	                completer.reject("Failed to load " + url, null);
	            }
	        };
	        xhr.onerror = function () { completer.reject("Failed to load " + url, null); };
	        xhr.send();
	        return completer.promise;
	    };
	    return XHRImpl;
	}(xhr_1.XHR));
	exports.XHRImpl = XHRImpl;


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var di_1 = __webpack_require__(5);
	var xhr_1 = __webpack_require__(23);
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(15);
	var testability_1 = __webpack_require__(60);
	var dom_adapter_1 = __webpack_require__(7);
	var dom_events_1 = __webpack_require__(177);
	var key_events_1 = __webpack_require__(281);
	var hammer_gestures_1 = __webpack_require__(107);
	var dom_tokens_1 = __webpack_require__(41);
	var dom_renderer_1 = __webpack_require__(106);
	var shared_styles_host_1 = __webpack_require__(62);
	var shared_styles_host_2 = __webpack_require__(62);
	var browser_details_1 = __webpack_require__(119);
	var animation_builder_1 = __webpack_require__(118);
	var browser_adapter_1 = __webpack_require__(174);
	var testability_2 = __webpack_require__(273);
	var xhr_cache_1 = __webpack_require__(277);
	var wtf_init_1 = __webpack_require__(265);
	var event_manager_1 = __webpack_require__(28);
	var hammer_gestures_2 = __webpack_require__(107);
	var common_dom_1 = __webpack_require__(117);
	var dom_tokens_2 = __webpack_require__(41);
	exports.DOCUMENT = dom_tokens_2.DOCUMENT;
	var title_1 = __webpack_require__(274);
	exports.Title = title_1.Title;
	var common_dom_2 = __webpack_require__(117);
	exports.ELEMENT_PROBE_PROVIDERS = common_dom_2.ELEMENT_PROBE_PROVIDERS;
	exports.ELEMENT_PROBE_PROVIDERS_PROD_MODE = common_dom_2.ELEMENT_PROBE_PROVIDERS_PROD_MODE;
	exports.inspectNativeElement = common_dom_2.inspectNativeElement;
	exports.By = common_dom_2.By;
	var browser_adapter_2 = __webpack_require__(174);
	exports.BrowserDomAdapter = browser_adapter_2.BrowserDomAdapter;
	var tools_1 = __webpack_require__(276);
	exports.enableDebugTools = tools_1.enableDebugTools;
	exports.disableDebugTools = tools_1.disableDebugTools;
	var hammer_gestures_3 = __webpack_require__(107);
	exports.HAMMER_GESTURE_CONFIG = hammer_gestures_3.HAMMER_GESTURE_CONFIG;
	exports.HammerGestureConfig = hammer_gestures_3.HammerGestureConfig;
	/**
	 * A set of providers to initialize the Angular platform in a web browser.
	 *
	 * Used automatically by `bootstrap`, or can be passed to {@link platform}.
	 */
	exports.BROWSER_PROVIDERS = lang_1.CONST_EXPR([
	    core_1.PLATFORM_COMMON_PROVIDERS,
	    new di_1.Provider(core_1.PLATFORM_INITIALIZER, { useValue: initDomAdapter, multi: true }),
	]);
	function _exceptionHandler() {
	    // !IS_DART is required because we must rethrow exceptions in JS,
	    // but must not rethrow exceptions in Dart
	    return new core_1.ExceptionHandler(dom_adapter_1.DOM, !lang_1.IS_DART);
	}
	function _document() {
	    return dom_adapter_1.DOM.defaultDoc();
	}
	/**
	 * A set of providers to initialize an Angular application in a web browser.
	 *
	 * Used automatically by `bootstrap`, or can be passed to {@link PlatformRef.application}.
	 */
	exports.BROWSER_APP_COMMON_PROVIDERS = lang_1.CONST_EXPR([
	    core_1.APPLICATION_COMMON_PROVIDERS,
	    common_1.FORM_PROVIDERS,
	    new di_1.Provider(core_1.PLATFORM_PIPES, { useValue: common_1.COMMON_PIPES, multi: true }),
	    new di_1.Provider(core_1.PLATFORM_DIRECTIVES, { useValue: common_1.COMMON_DIRECTIVES, multi: true }),
	    new di_1.Provider(core_1.ExceptionHandler, { useFactory: _exceptionHandler, deps: [] }),
	    new di_1.Provider(dom_tokens_1.DOCUMENT, { useFactory: _document, deps: [] }),
	    new di_1.Provider(event_manager_1.EVENT_MANAGER_PLUGINS, { useClass: dom_events_1.DomEventsPlugin, multi: true }),
	    new di_1.Provider(event_manager_1.EVENT_MANAGER_PLUGINS, { useClass: key_events_1.KeyEventsPlugin, multi: true }),
	    new di_1.Provider(event_manager_1.EVENT_MANAGER_PLUGINS, { useClass: hammer_gestures_1.HammerGesturesPlugin, multi: true }),
	    new di_1.Provider(hammer_gestures_2.HAMMER_GESTURE_CONFIG, { useClass: hammer_gestures_2.HammerGestureConfig }),
	    new di_1.Provider(dom_renderer_1.DomRootRenderer, { useClass: dom_renderer_1.DomRootRenderer_ }),
	    new di_1.Provider(core_1.RootRenderer, { useExisting: dom_renderer_1.DomRootRenderer }),
	    new di_1.Provider(shared_styles_host_2.SharedStylesHost, { useExisting: shared_styles_host_1.DomSharedStylesHost }),
	    shared_styles_host_1.DomSharedStylesHost,
	    testability_1.Testability,
	    browser_details_1.BrowserDetails,
	    animation_builder_1.AnimationBuilder,
	    event_manager_1.EventManager,
	    common_dom_1.ELEMENT_PROBE_PROVIDERS
	]);
	exports.CACHED_TEMPLATE_PROVIDER = lang_1.CONST_EXPR([new di_1.Provider(xhr_1.XHR, { useClass: xhr_cache_1.CachedXHR })]);
	function initDomAdapter() {
	    browser_adapter_1.BrowserDomAdapter.makeCurrent();
	    wtf_init_1.wtfInit();
	    testability_2.BrowserGetTestability.init();
	}
	exports.initDomAdapter = initDomAdapter;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var dom_adapter_1 = __webpack_require__(7);
	var core_1 = __webpack_require__(3);
	var event_manager_1 = __webpack_require__(28);
	var DomEventsPlugin = (function (_super) {
	    __extends(DomEventsPlugin, _super);
	    function DomEventsPlugin() {
	        _super.apply(this, arguments);
	    }
	    // This plugin should come last in the list of plugins, because it accepts all
	    // events.
	    DomEventsPlugin.prototype.supports = function (eventName) { return true; };
	    DomEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
	        var zone = this.manager.getZone();
	        var outsideHandler = function (event) { return zone.run(function () { return handler(event); }); };
	        return this.manager.getZone().runOutsideAngular(function () { return dom_adapter_1.DOM.onAndCancel(element, eventName, outsideHandler); });
	    };
	    DomEventsPlugin.prototype.addGlobalEventListener = function (target, eventName, handler) {
	        var element = dom_adapter_1.DOM.getGlobalEventTarget(target);
	        var zone = this.manager.getZone();
	        var outsideHandler = function (event) { return zone.run(function () { return handler(event); }); };
	        return this.manager.getZone().runOutsideAngular(function () { return dom_adapter_1.DOM.onAndCancel(element, eventName, outsideHandler); });
	    };
	    DomEventsPlugin = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], DomEventsPlugin);
	    return DomEventsPlugin;
	}(event_manager_1.EventManagerPlugin));
	exports.DomEventsPlugin = DomEventsPlugin;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var CAMEL_CASE_REGEXP = /([A-Z])/g;
	var DASH_CASE_REGEXP = /-([a-z])/g;
	function camelCaseToDashCase(input) {
	    return lang_1.StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, function (m) { return '-' + m[1].toLowerCase(); });
	}
	exports.camelCaseToDashCase = camelCaseToDashCase;
	function dashCaseToCamelCase(input) {
	    return lang_1.StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, function (m) { return m[1].toUpperCase(); });
	}
	exports.dashCaseToCamelCase = dashCaseToCamelCase;


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var lang_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(65);
	var location_1 = __webpack_require__(63);
	/**
	 * The RouterLink directive lets you link to specific parts of your app.
	 *
	 * Consider the following route configuration:
	
	 * ```
	 * @RouteConfig([
	 *   { path: '/user', component: UserCmp, as: 'User' }
	 * ]);
	 * class MyComp {}
	 * ```
	 *
	 * When linking to this `User` route, you can write:
	 *
	 * ```
	 * <a [routerLink]="['./User']">link to user component</a>
	 * ```
	 *
	 * RouterLink expects the value to be an array of route names, followed by the params
	 * for that level of routing. For instance `['/Team', {teamId: 1}, 'User', {userId: 2}]`
	 * means that we want to generate a link for the `Team` route with params `{teamId: 1}`,
	 * and with a child route `User` with params `{userId: 2}`.
	 *
	 * The first route name should be prepended with `/`, `./`, or `../`.
	 * If the route begins with `/`, the router will look up the route from the root of the app.
	 * If the route begins with `./`, the router will instead look in the current component's
	 * children for the route. And if the route begins with `../`, the router will look at the
	 * current component's parent.
	 */
	var RouterLink = (function () {
	    function RouterLink(_router, _location) {
	        var _this = this;
	        this._router = _router;
	        this._location = _location;
	        // we need to update the link whenever a route changes to account for aux routes
	        this._router.subscribe(function (_) { return _this._updateLink(); });
	    }
	    // because auxiliary links take existing primary and auxiliary routes into account,
	    // we need to update the link whenever params or other routes change.
	    RouterLink.prototype._updateLink = function () {
	        this._navigationInstruction = this._router.generate(this._routeParams);
	        var navigationHref = this._navigationInstruction.toLinkUrl();
	        this.visibleHref = this._location.prepareExternalUrl(navigationHref);
	    };
	    Object.defineProperty(RouterLink.prototype, "isRouteActive", {
	        get: function () { return this._router.isRouteActive(this._navigationInstruction); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RouterLink.prototype, "routeParams", {
	        set: function (changes) {
	            this._routeParams = changes;
	            this._updateLink();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RouterLink.prototype.onClick = function () {
	        // If no target, or if target is _self, prevent default browser behavior
	        if (!lang_1.isString(this.target) || this.target == '_self') {
	            this._router.navigateByInstruction(this._navigationInstruction);
	            return false;
	        }
	        return true;
	    };
	    RouterLink = __decorate([
	        core_1.Directive({
	            selector: '[routerLink]',
	            inputs: ['routeParams: routerLink', 'target: target'],
	            host: {
	                '(click)': 'onClick()',
	                '[attr.href]': 'visibleHref',
	                '[class.router-link-active]': 'isRouteActive'
	            }
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, location_1.Location])
	    ], RouterLink);
	    return RouterLink;
	}());
	exports.RouterLink = RouterLink;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var async_1 = __webpack_require__(6);
	var collection_1 = __webpack_require__(2);
	var lang_1 = __webpack_require__(1);
	var core_1 = __webpack_require__(3);
	var routerMod = __webpack_require__(65);
	var instruction_1 = __webpack_require__(19);
	var hookMod = __webpack_require__(181);
	var route_lifecycle_reflector_1 = __webpack_require__(182);
	var _resolveToTrue = async_1.PromiseWrapper.resolve(true);
	/**
	 * A router outlet is a placeholder that Angular dynamically fills based on the application's route.
	 *
	 * ## Use
	 *
	 * ```
	 * <router-outlet></router-outlet>
	 * ```
	 */
	var RouterOutlet = (function () {
	    function RouterOutlet(_elementRef, _loader, _parentRouter, nameAttr) {
	        this._elementRef = _elementRef;
	        this._loader = _loader;
	        this._parentRouter = _parentRouter;
	        this.name = null;
	        this._componentRef = null;
	        this._currentInstruction = null;
	        if (lang_1.isPresent(nameAttr)) {
	            this.name = nameAttr;
	            this._parentRouter.registerAuxOutlet(this);
	        }
	        else {
	            this._parentRouter.registerPrimaryOutlet(this);
	        }
	    }
	    /**
	     * Called by the Router to instantiate a new component during the commit phase of a navigation.
	     * This method in turn is responsible for calling the `routerOnActivate` hook of its child.
	     */
	    RouterOutlet.prototype.activate = function (nextInstruction) {
	        var _this = this;
	        var previousInstruction = this._currentInstruction;
	        this._currentInstruction = nextInstruction;
	        var componentType = nextInstruction.componentType;
	        var childRouter = this._parentRouter.childRouter(componentType);
	        var providers = core_1.Injector.resolve([
	            core_1.provide(instruction_1.RouteData, { useValue: nextInstruction.routeData }),
	            core_1.provide(instruction_1.RouteParams, { useValue: new instruction_1.RouteParams(nextInstruction.params) }),
	            core_1.provide(routerMod.Router, { useValue: childRouter })
	        ]);
	        this._componentRef =
	            this._loader.loadNextToLocation(componentType, this._elementRef, providers);
	        return this._componentRef.then(function (componentRef) {
	            if (route_lifecycle_reflector_1.hasLifecycleHook(hookMod.routerOnActivate, componentType)) {
	                return _this._componentRef.then(function (ref) {
	                    return ref.instance.routerOnActivate(nextInstruction, previousInstruction);
	                });
	            }
	            else {
	                return componentRef;
	            }
	        });
	    };
	    /**
	     * Called by the {@link Router} during the commit phase of a navigation when an outlet
	     * reuses a component between different routes.
	     * This method in turn is responsible for calling the `routerOnReuse` hook of its child.
	     */
	    RouterOutlet.prototype.reuse = function (nextInstruction) {
	        var previousInstruction = this._currentInstruction;
	        this._currentInstruction = nextInstruction;
	        // it's possible the component is removed before it can be reactivated (if nested withing
	        // another dynamically loaded component, for instance). In that case, we simply activate
	        // a new one.
	        if (lang_1.isBlank(this._componentRef)) {
	            return this.activate(nextInstruction);
	        }
	        else {
	            return async_1.PromiseWrapper.resolve(route_lifecycle_reflector_1.hasLifecycleHook(hookMod.routerOnReuse, this._currentInstruction.componentType) ?
	                this._componentRef.then(function (ref) {
	                    return ref.instance.routerOnReuse(nextInstruction, previousInstruction);
	                }) :
	                true);
	        }
	    };
	    /**
	     * Called by the {@link Router} when an outlet disposes of a component's contents.
	     * This method in turn is responsible for calling the `routerOnDeactivate` hook of its child.
	     */
	    RouterOutlet.prototype.deactivate = function (nextInstruction) {
	        var _this = this;
	        var next = _resolveToTrue;
	        if (lang_1.isPresent(this._componentRef) && lang_1.isPresent(this._currentInstruction) &&
	            route_lifecycle_reflector_1.hasLifecycleHook(hookMod.routerOnDeactivate, this._currentInstruction.componentType)) {
	            next = this._componentRef.then(function (ref) {
	                return ref.instance
	                    .routerOnDeactivate(nextInstruction, _this._currentInstruction);
	            });
	        }
	        return next.then(function (_) {
	            if (lang_1.isPresent(_this._componentRef)) {
	                var onDispose = _this._componentRef.then(function (ref) { return ref.dispose(); });
	                _this._componentRef = null;
	                return onDispose;
	            }
	        });
	    };
	    /**
	     * Called by the {@link Router} during recognition phase of a navigation.
	     *
	     * If this resolves to `false`, the given navigation is cancelled.
	     *
	     * This method delegates to the child component's `routerCanDeactivate` hook if it exists,
	     * and otherwise resolves to true.
	     */
	    RouterOutlet.prototype.routerCanDeactivate = function (nextInstruction) {
	        var _this = this;
	        if (lang_1.isBlank(this._currentInstruction)) {
	            return _resolveToTrue;
	        }
	        if (route_lifecycle_reflector_1.hasLifecycleHook(hookMod.routerCanDeactivate, this._currentInstruction.componentType)) {
	            return this._componentRef.then(function (ref) {
	                return ref.instance
	                    .routerCanDeactivate(nextInstruction, _this._currentInstruction);
	            });
	        }
	        else {
	            return _resolveToTrue;
	        }
	    };
	    /**
	     * Called by the {@link Router} during recognition phase of a navigation.
	     *
	     * If the new child component has a different Type than the existing child component,
	     * this will resolve to `false`. You can't reuse an old component when the new component
	     * is of a different Type.
	     *
	     * Otherwise, this method delegates to the child component's `routerCanReuse` hook if it exists,
	     * or resolves to true if the hook is not present.
	     */
	    RouterOutlet.prototype.routerCanReuse = function (nextInstruction) {
	        var _this = this;
	        var result;
	        if (lang_1.isBlank(this._currentInstruction) ||
	            this._currentInstruction.componentType != nextInstruction.componentType) {
	            result = false;
	        }
	        else if (route_lifecycle_reflector_1.hasLifecycleHook(hookMod.routerCanReuse, this._currentInstruction.componentType)) {
	            result = this._componentRef.then(function (ref) {
	                return ref.instance.routerCanReuse(nextInstruction, _this._currentInstruction);
	            });
	        }
	        else {
	            result = nextInstruction == this._currentInstruction ||
	                (lang_1.isPresent(nextInstruction.params) && lang_1.isPresent(this._currentInstruction.params) &&
	                    collection_1.StringMapWrapper.equals(nextInstruction.params, this._currentInstruction.params));
	        }
	        return async_1.PromiseWrapper.resolve(result);
	    };
	    RouterOutlet.prototype.ngOnDestroy = function () { this._parentRouter.unregisterPrimaryOutlet(this); };
	    RouterOutlet = __decorate([
	        core_1.Directive({ selector: 'router-outlet' }),
	        __param(3, core_1.Attribute('name')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, routerMod.Router, String])
	    ], RouterOutlet);
	    return RouterOutlet;
	}());
	exports.RouterOutlet = RouterOutlet;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';/**
	 * This indirection is needed to free up Component, etc symbols in the public API
	 * to be used by the decorator versions of these annotations.
	 */
	"use strict";
	var decorators_1 = __webpack_require__(40);
	var lifecycle_annotations_impl_1 = __webpack_require__(108);
	var lifecycle_annotations_impl_2 = __webpack_require__(108);
	exports.routerCanReuse = lifecycle_annotations_impl_2.routerCanReuse;
	exports.routerCanDeactivate = lifecycle_annotations_impl_2.routerCanDeactivate;
	exports.routerOnActivate = lifecycle_annotations_impl_2.routerOnActivate;
	exports.routerOnReuse = lifecycle_annotations_impl_2.routerOnReuse;
	exports.routerOnDeactivate = lifecycle_annotations_impl_2.routerOnDeactivate;
	/**
	 * Defines route lifecycle hook `CanActivate`, which is called by the router to determine
	 * if a component can be instantiated as part of a navigation.
	 *
	 * <aside class="is-right">
	 * Note that unlike other lifecycle hooks, this one uses an annotation rather than an interface.
	 * This is because the `CanActivate` function is called before the component is instantiated.
	 * </aside>
	 *
	 * The `CanActivate` hook is called with two {@link ComponentInstruction}s as parameters, the first
	 * representing the current route being navigated to, and the second parameter representing the
	 * previous route or `null`.
	 *
	 * ```typescript
	 * @CanActivate((next, prev) => boolean | Promise<boolean>)
	 * ```
	 *
	 * If `CanActivate` returns or resolves to `false`, the navigation is cancelled.
	 * If `CanActivate` throws or rejects, the navigation is also cancelled.
	 * If `CanActivate` returns or resolves to `true`, navigation continues, the component is
	 * instantiated, and the {@link OnActivate} hook of that component is called if implemented.
	 *
	 * ### Example
	 *
	 * {@example router/ts/can_activate/can_activate_example.ts region='canActivate' }
	 */
	exports.CanActivate = decorators_1.makeDecorator(lifecycle_annotations_impl_1.CanActivate);


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var lifecycle_annotations_impl_1 = __webpack_require__(108);
	var reflection_1 = __webpack_require__(8);
	function hasLifecycleHook(e, type) {
	    if (!(type instanceof lang_1.Type))
	        return false;
	    return e.name in type.prototype;
	}
	exports.hasLifecycleHook = hasLifecycleHook;
	function getCanActivateHook(type) {
	    var annotations = reflection_1.reflector.annotations(type);
	    for (var i = 0; i < annotations.length; i += 1) {
	        var annotation = annotations[i];
	        if (annotation instanceof lifecycle_annotations_impl_1.CanActivate) {
	            return annotation.fn;
	        }
	    }
	    return null;
	}
	exports.getCanActivateHook = getCanActivateHook;


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var location_strategy_1 = __webpack_require__(42);
	var platform_location_1 = __webpack_require__(43);
	/**
	 * `PathLocationStrategy` is a {@link LocationStrategy} used to configure the
	 * {@link Location} service to represent its state in the
	 * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
	 * browser's URL.
	 *
	 * `PathLocationStrategy` is the default binding for {@link LocationStrategy}
	 * provided in {@link ROUTER_PROVIDERS}.
	 *
	 * If you're using `PathLocationStrategy`, you must provide a provider for
	 * {@link APP_BASE_HREF} to a string representing the URL prefix that should
	 * be preserved when generating and recognizing URLs.
	 *
	 * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
	 * `location.go('/foo')`, the browser's URL will become
	 * `example.com/my/app/foo`.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component, provide} from 'angular2/core';
	 * import {
	 *   APP_BASE_HREF
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig,
	 *   Location
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   constructor(location: Location) {
	 *     location.go('/foo');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, [
	 *   ROUTER_PROVIDERS, // includes binding to PathLocationStrategy
	 *   provide(APP_BASE_HREF, {useValue: '/my/app'})
	 * ]);
	 * ```
	 */
	var PathLocationStrategy = (function (_super) {
	    __extends(PathLocationStrategy, _super);
	    function PathLocationStrategy(_platformLocation, href) {
	        _super.call(this);
	        this._platformLocation = _platformLocation;
	        if (lang_1.isBlank(href)) {
	            href = this._platformLocation.getBaseHrefFromDOM();
	        }
	        if (lang_1.isBlank(href)) {
	            throw new exceptions_1.BaseException("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
	        }
	        this._baseHref = href;
	    }
	    PathLocationStrategy.prototype.onPopState = function (fn) {
	        this._platformLocation.onPopState(fn);
	        this._platformLocation.onHashChange(fn);
	    };
	    PathLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
	    PathLocationStrategy.prototype.prepareExternalUrl = function (internal) { return location_strategy_1.joinWithSlash(this._baseHref, internal); };
	    PathLocationStrategy.prototype.path = function () {
	        return this._platformLocation.pathname + location_strategy_1.normalizeQueryParams(this._platformLocation.search);
	    };
	    PathLocationStrategy.prototype.pushState = function (state, title, url, queryParams) {
	        var externalUrl = this.prepareExternalUrl(url + location_strategy_1.normalizeQueryParams(queryParams));
	        this._platformLocation.pushState(state, title, externalUrl);
	    };
	    PathLocationStrategy.prototype.replaceState = function (state, title, url, queryParams) {
	        var externalUrl = this.prepareExternalUrl(url + location_strategy_1.normalizeQueryParams(queryParams));
	        this._platformLocation.replaceState(state, title, externalUrl);
	    };
	    PathLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
	    PathLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
	    PathLocationStrategy = __decorate([
	        core_1.Injectable(),
	        __param(1, core_1.Optional()),
	        __param(1, core_1.Inject(location_strategy_1.APP_BASE_HREF)), 
	        __metadata('design:paramtypes', [platform_location_1.PlatformLocation, String])
	    ], PathLocationStrategy);
	    return PathLocationStrategy;
	}(location_strategy_1.LocationStrategy));
	exports.PathLocationStrategy = PathLocationStrategy;


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var route_config_impl_1 = __webpack_require__(64);
	var decorators_1 = __webpack_require__(40);
	var route_config_impl_2 = __webpack_require__(64);
	exports.Route = route_config_impl_2.Route;
	exports.Redirect = route_config_impl_2.Redirect;
	exports.AuxRoute = route_config_impl_2.AuxRoute;
	exports.AsyncRoute = route_config_impl_2.AsyncRoute;
	// Copied from RouteConfig in route_config_impl.
	/**
	 * The `RouteConfig` decorator defines routes for a given component.
	 *
	 * It takes an array of {@link RouteDefinition}s.
	 */
	exports.RouteConfig = decorators_1.makeDecorator(route_config_impl_1.RouteConfig);


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var location_strategy_1 = __webpack_require__(42);
	var path_location_strategy_1 = __webpack_require__(183);
	var router_1 = __webpack_require__(65);
	var route_registry_1 = __webpack_require__(109);
	var location_1 = __webpack_require__(63);
	var lang_1 = __webpack_require__(1);
	var core_1 = __webpack_require__(3);
	var exceptions_1 = __webpack_require__(4);
	/**
	 * The Platform agnostic ROUTER PROVIDERS
	 */
	exports.ROUTER_PROVIDERS_COMMON = lang_1.CONST_EXPR([
	    route_registry_1.RouteRegistry,
	    lang_1.CONST_EXPR(new core_1.Provider(location_strategy_1.LocationStrategy, { useClass: path_location_strategy_1.PathLocationStrategy })),
	    location_1.Location,
	    lang_1.CONST_EXPR(new core_1.Provider(router_1.Router, {
	        useFactory: routerFactory,
	        deps: lang_1.CONST_EXPR([route_registry_1.RouteRegistry, location_1.Location, route_registry_1.ROUTER_PRIMARY_COMPONENT, core_1.ApplicationRef])
	    })),
	    lang_1.CONST_EXPR(new core_1.Provider(route_registry_1.ROUTER_PRIMARY_COMPONENT, { useFactory: routerPrimaryComponentFactory, deps: lang_1.CONST_EXPR([core_1.ApplicationRef]) }))
	]);
	function routerFactory(registry, location, primaryComponent, appRef) {
	    var rootRouter = new router_1.RootRouter(registry, location, primaryComponent);
	    appRef.registerDisposeListener(function () { return rootRouter.dispose(); });
	    return rootRouter;
	}
	function routerPrimaryComponentFactory(app) {
	    if (app.componentTypes.length == 0) {
	        throw new exceptions_1.BaseException("Bootstrap at least one component before injecting Router.");
	    }
	    return app.componentTypes[0];
	}


/***/ },
/* 186 */
/***/ function(module, exports) {

	'use strict';"use strict";
	var MatchedUrl = (function () {
	    function MatchedUrl(urlPath, urlParams, allParams, auxiliary, rest) {
	        this.urlPath = urlPath;
	        this.urlParams = urlParams;
	        this.allParams = allParams;
	        this.auxiliary = auxiliary;
	        this.rest = rest;
	    }
	    return MatchedUrl;
	}());
	exports.MatchedUrl = MatchedUrl;
	var GeneratedUrl = (function () {
	    function GeneratedUrl(urlPath, urlParams) {
	        this.urlPath = urlPath;
	        this.urlParams = urlParams;
	    }
	    return GeneratedUrl;
	}());
	exports.GeneratedUrl = GeneratedUrl;


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var promise_1 = __webpack_require__(27);
	var collection_1 = __webpack_require__(2);
	var url_parser_1 = __webpack_require__(110);
	var instruction_1 = __webpack_require__(19);
	// RouteMatch objects hold information about a match between a rule and a URL
	var RouteMatch = (function () {
	    function RouteMatch() {
	    }
	    return RouteMatch;
	}());
	exports.RouteMatch = RouteMatch;
	var PathMatch = (function (_super) {
	    __extends(PathMatch, _super);
	    function PathMatch(instruction, remaining, remainingAux) {
	        _super.call(this);
	        this.instruction = instruction;
	        this.remaining = remaining;
	        this.remainingAux = remainingAux;
	    }
	    return PathMatch;
	}(RouteMatch));
	exports.PathMatch = PathMatch;
	var RedirectMatch = (function (_super) {
	    __extends(RedirectMatch, _super);
	    function RedirectMatch(redirectTo, specificity) {
	        _super.call(this);
	        this.redirectTo = redirectTo;
	        this.specificity = specificity;
	    }
	    return RedirectMatch;
	}(RouteMatch));
	exports.RedirectMatch = RedirectMatch;
	var RedirectRule = (function () {
	    function RedirectRule(_pathRecognizer, redirectTo) {
	        this._pathRecognizer = _pathRecognizer;
	        this.redirectTo = redirectTo;
	        this.hash = this._pathRecognizer.hash;
	    }
	    Object.defineProperty(RedirectRule.prototype, "path", {
	        get: function () { return this._pathRecognizer.toString(); },
	        set: function (val) { throw new exceptions_1.BaseException('you cannot set the path of a RedirectRule directly'); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Returns `null` or a `ParsedUrl` representing the new path to match
	     */
	    RedirectRule.prototype.recognize = function (beginningSegment) {
	        var match = null;
	        if (lang_1.isPresent(this._pathRecognizer.matchUrl(beginningSegment))) {
	            match = new RedirectMatch(this.redirectTo, this._pathRecognizer.specificity);
	        }
	        return promise_1.PromiseWrapper.resolve(match);
	    };
	    RedirectRule.prototype.generate = function (params) {
	        throw new exceptions_1.BaseException("Tried to generate a redirect.");
	    };
	    return RedirectRule;
	}());
	exports.RedirectRule = RedirectRule;
	// represents something like '/foo/:bar'
	var RouteRule = (function () {
	    // TODO: cache component instruction instances by params and by ParsedUrl instance
	    function RouteRule(_routePath, handler, _routeName) {
	        this._routePath = _routePath;
	        this.handler = handler;
	        this._routeName = _routeName;
	        this._cache = new collection_1.Map();
	        this.specificity = this._routePath.specificity;
	        this.hash = this._routePath.hash;
	        this.terminal = this._routePath.terminal;
	    }
	    Object.defineProperty(RouteRule.prototype, "path", {
	        get: function () { return this._routePath.toString(); },
	        set: function (val) { throw new exceptions_1.BaseException('you cannot set the path of a RouteRule directly'); },
	        enumerable: true,
	        configurable: true
	    });
	    RouteRule.prototype.recognize = function (beginningSegment) {
	        var _this = this;
	        var res = this._routePath.matchUrl(beginningSegment);
	        if (lang_1.isBlank(res)) {
	            return null;
	        }
	        return this.handler.resolveComponentType().then(function (_) {
	            var componentInstruction = _this._getInstruction(res.urlPath, res.urlParams, res.allParams);
	            return new PathMatch(componentInstruction, res.rest, res.auxiliary);
	        });
	    };
	    RouteRule.prototype.generate = function (params) {
	        var generated = this._routePath.generateUrl(params);
	        var urlPath = generated.urlPath;
	        var urlParams = generated.urlParams;
	        return this._getInstruction(urlPath, url_parser_1.convertUrlParamsToArray(urlParams), params);
	    };
	    RouteRule.prototype.generateComponentPathValues = function (params) {
	        return this._routePath.generateUrl(params);
	    };
	    RouteRule.prototype._getInstruction = function (urlPath, urlParams, params) {
	        if (lang_1.isBlank(this.handler.componentType)) {
	            throw new exceptions_1.BaseException("Tried to get instruction before the type was loaded.");
	        }
	        var hashKey = urlPath + '?' + urlParams.join('&');
	        if (this._cache.has(hashKey)) {
	            return this._cache.get(hashKey);
	        }
	        var instruction = new instruction_1.ComponentInstruction(urlPath, urlParams, this.handler.data, this.handler.componentType, this.terminal, this.specificity, params, this._routeName);
	        this._cache.set(hashKey, instruction);
	        return instruction;
	    };
	    return RouteRule;
	}());
	exports.RouteRule = RouteRule;


/***/ },
/* 188 */,
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DemoApp = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _dec2, _class;
	
	var _core = __webpack_require__(3);
	
	var _common = __webpack_require__(15);
	
	var _router = __webpack_require__(16);
	
	var _pages = __webpack_require__(195);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = __webpack_require__(203);
	
	var DemoApp = exports.DemoApp = (_dec = (0, _core.Component)({
	    selector: 'demo-app',
	    template: template,
	    directives: [_router.ROUTER_DIRECTIVES, _common.CORE_DIRECTIVES]
	}), _dec2 = (0, _router.RouteConfig)([
	// Base Pages (design system)
	{ path: '/', component: _pages.Home, name: 'Home' }, { path: '/composition', component: _pages.Layout, name: 'Composition' }, { path: '/typography', component: _pages.Typography, name: 'Typography' }, { path: '/icons', component: _pages.Iconography, name: 'Iconography' }, { path: '/color', component: _pages.Color, name: 'Color' },
	
	// Element/Component/Service/etc.. Demos
	{ path: '/button', component: _pages.ButtonDemo, name: 'Button' }, { path: '/tabs', component: _pages.TabsDemo, name: 'Tabs' },
	
	// Catch-all and redirect back to index
	{ path: '/**', redirectTo: ['Home'] }]), _dec(_class = _dec2(_class = function () {
	    function DemoApp(router) {
	        var _this = this;
	
	        _classCallCheck(this, DemoApp);
	
	        this.router = router;
	        this.menuOpen = false;
	        this.version = ("0.0.1");
	
	        this.designRoutes = [{ name: 'Composition', path: '/composition' }, { name: 'Typography', path: '/typography' }, { name: 'Iconography', path: '/icons' }, { name: 'Color', path: '/color' }];
	
	        this.componentRoutes = [{ name: 'Button', path: '/button' }, { name: 'Tabs', path: '/tabs' }
	        // { name: 'Form', path: '/form' },
	        // { name: 'Dropdown', path: '/dropdowns' },
	        // { name: 'Tooltip', path: '/tooltips' },
	        // { name: 'Calendar', path: '/calendar' },
	        // { name: 'Table', path: '/table' },
	        // { name: 'Drawer', path: '/drawer' },
	        // { name: 'Switch', path: '/switch' },
	        // { name: 'Modal', path: '/modal' },
	        // { name: 'Toast', path: '/toast' },
	        // { name: 'Loading', path: '/loading' },
	        // { name: 'Dragula', path: '/dragula' },
	        // { name: 'Cards', path: '/cards' },
	        // { name: 'CardExamples', path: '/card-examples' },
	        // { name: 'Chart', path: '/chart' },
	        // { name: 'Headers', path: '/headers' }
	        ];
	
	        router.subscribe(function () {
	            document.body.scrollTop = 0;
	            _this.menuOpen = false;
	        });
	    }
	
	    _createClass(DemoApp, [{
	        key: 'toggleMenu',
	        value: function toggleMenu() {
	            this.menuOpen = !this.menuOpen;
	        }
	    }]);
	
	    return DemoApp;
	}()) || _class) || _class);
	Reflect.defineMetadata('design:paramtypes', [_router.Router], DemoApp);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvYXBwL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBRUEsSUFBTSxXQUFXLFFBQVEsWUFBUixDQUFqQjs7SUFzQmEsTyxXQUFBLE8sV0FwQloscUJBQVU7QUFDUCxjQUFVLFVBREg7QUFFUCxjQUFVLFFBRkg7QUFHUCxnQkFBWTtBQUhMLENBQVYsQyxVQUtBLHlCQUFZOztBQUVULEVBQUUsTUFBTSxHQUFSLEVBQWEsc0JBQWIsRUFBOEIsTUFBTSxNQUFwQyxFQUZTLEVBR1QsRUFBRSxNQUFNLGNBQVIsRUFBd0Isd0JBQXhCLEVBQTJDLE1BQU0sYUFBakQsRUFIUyxFQUlULEVBQUUsTUFBTSxhQUFSLEVBQXVCLDRCQUF2QixFQUE4QyxNQUFNLFlBQXBELEVBSlMsRUFLVCxFQUFFLE1BQU0sUUFBUixFQUFrQiw2QkFBbEIsRUFBMEMsTUFBTSxhQUFoRCxFQUxTLEVBTVQsRUFBRSxNQUFNLFFBQVIsRUFBa0IsdUJBQWxCLEVBQW9DLE1BQU0sT0FBMUMsRUFOUzs7O0FBU1QsRUFBRSxNQUFNLFNBQVIsRUFBbUIsNEJBQW5CLEVBQTBDLE1BQU0sUUFBaEQsRUFUUyxFQVVULEVBQUUsTUFBTSxPQUFSLEVBQWlCLDBCQUFqQixFQUFzQyxNQUFNLE1BQTVDLEVBVlM7OztBQWFULEVBQUUsTUFBTSxLQUFSLEVBQWUsWUFBWSxDQUFDLE1BQUQsQ0FBM0IsRUFiUyxDQUFaLEM7QUFnQkcscUJBQVksTUFBWixFQUEyQjtBQUFBOztBQUFBOztBQUN2QixhQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsYUFBSyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsYUFBSyxPQUFMLEdBQWUsT0FBZjs7QUFFQSxhQUFLLFlBQUwsR0FBb0IsQ0FDaEIsRUFBRSxNQUFNLGFBQVIsRUFBdUIsTUFBTSxjQUE3QixFQURnQixFQUVoQixFQUFFLE1BQU0sWUFBUixFQUFzQixNQUFNLGFBQTVCLEVBRmdCLEVBR2hCLEVBQUUsTUFBTSxhQUFSLEVBQXVCLE1BQU0sUUFBN0IsRUFIZ0IsRUFJaEIsRUFBRSxNQUFNLE9BQVIsRUFBaUIsTUFBTSxRQUF2QixFQUpnQixDQUFwQjs7QUFPQSxhQUFLLGVBQUwsR0FBdUIsQ0FDbkIsRUFBRSxNQUFNLFFBQVIsRUFBa0IsTUFBTSxTQUF4QixFQURtQixFQUVuQixFQUFFLE1BQU0sTUFBUixFQUFnQixNQUFNLE9BQXRCOzs7Ozs7Ozs7Ozs7Ozs7O0FBRm1CLFNBQXZCOztBQW9CQSxlQUFPLFNBQVAsQ0FBaUIsWUFBTTtBQUNuQixxQkFBUyxJQUFULENBQWMsU0FBZCxHQUEwQixDQUExQjtBQUNBLGtCQUFLLFFBQUwsR0FBZ0IsS0FBaEI7QUFDSCxTQUhEO0FBSUg7Ozs7cUNBRVk7QUFDVCxpQkFBSyxRQUFMLEdBQWdCLENBQUMsS0FBSyxRQUF0QjtBQUNIOzs7Ozs4REF6Q1EsTyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnLCBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIb21lLCBCdXR0b25EZW1vLCBUYWJzRGVtbywgTGF5b3V0LCBUeXBvZ3JhcGh5LCBJY29ub2dyYXBoeSwgQ29sb3IgfSBmcm9tICcuLy4uL3BhZ2VzJztcblxuY29uc3QgdGVtcGxhdGUgPSByZXF1aXJlKCcuL0FwcC5odG1sJyk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZGVtby1hcHAnLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFU11cbn0pXG5AUm91dGVDb25maWcoW1xuICAgIC8vIEJhc2UgUGFnZXMgKGRlc2lnbiBzeXN0ZW0pXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogSG9tZSwgbmFtZTogJ0hvbWUnIH0sXG4gICAgeyBwYXRoOiAnL2NvbXBvc2l0aW9uJywgY29tcG9uZW50OiBMYXlvdXQsIG5hbWU6ICdDb21wb3NpdGlvbicgfSxcbiAgICB7IHBhdGg6ICcvdHlwb2dyYXBoeScsIGNvbXBvbmVudDogVHlwb2dyYXBoeSwgbmFtZTogJ1R5cG9ncmFwaHknIH0sXG4gICAgeyBwYXRoOiAnL2ljb25zJywgY29tcG9uZW50OiBJY29ub2dyYXBoeSwgbmFtZTogJ0ljb25vZ3JhcGh5JyB9LFxuICAgIHsgcGF0aDogJy9jb2xvcicsIGNvbXBvbmVudDogQ29sb3IsIG5hbWU6ICdDb2xvcicgfSxcblxuICAgIC8vIEVsZW1lbnQvQ29tcG9uZW50L1NlcnZpY2UvZXRjLi4gRGVtb3NcbiAgICB7IHBhdGg6ICcvYnV0dG9uJywgY29tcG9uZW50OiBCdXR0b25EZW1vLCBuYW1lOiAnQnV0dG9uJyB9LFxuICAgIHsgcGF0aDogJy90YWJzJywgY29tcG9uZW50OiBUYWJzRGVtbywgbmFtZTogJ1RhYnMnIH0sXG5cbiAgICAvLyBDYXRjaC1hbGwgYW5kIHJlZGlyZWN0IGJhY2sgdG8gaW5kZXhcbiAgICB7IHBhdGg6ICcvKionLCByZWRpcmVjdFRvOiBbJ0hvbWUnXSB9XG5dKVxuZXhwb3J0IGNsYXNzIERlbW9BcHAge1xuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjpSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgICAgIHRoaXMubWVudU9wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gVkVSU0lPTjtcblxuICAgICAgICB0aGlzLmRlc2lnblJvdXRlcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ0NvbXBvc2l0aW9uJywgcGF0aDogJy9jb21wb3NpdGlvbicgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1R5cG9ncmFwaHknLCBwYXRoOiAnL3R5cG9ncmFwaHknIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdJY29ub2dyYXBoeScsIHBhdGg6ICcvaWNvbnMnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdDb2xvcicsIHBhdGg6ICcvY29sb3InIH1cbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLmNvbXBvbmVudFJvdXRlcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ0J1dHRvbicsIHBhdGg6ICcvYnV0dG9uJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnVGFicycsIHBhdGg6ICcvdGFicycgfVxuICAgICAgICAgICAgLy8geyBuYW1lOiAnRm9ybScsIHBhdGg6ICcvZm9ybScgfSxcbiAgICAgICAgICAgIC8vIHsgbmFtZTogJ0Ryb3Bkb3duJywgcGF0aDogJy9kcm9wZG93bnMnIH0sXG4gICAgICAgICAgICAvLyB7IG5hbWU6ICdUb29sdGlwJywgcGF0aDogJy90b29sdGlwcycgfSxcbiAgICAgICAgICAgIC8vIHsgbmFtZTogJ0NhbGVuZGFyJywgcGF0aDogJy9jYWxlbmRhcicgfSxcbiAgICAgICAgICAgIC8vIHsgbmFtZTogJ1RhYmxlJywgcGF0aDogJy90YWJsZScgfSxcbiAgICAgICAgICAgIC8vIHsgbmFtZTogJ0RyYXdlcicsIHBhdGg6ICcvZHJhd2VyJyB9LFxuICAgICAgICAgICAgLy8geyBuYW1lOiAnU3dpdGNoJywgcGF0aDogJy9zd2l0Y2gnIH0sXG4gICAgICAgICAgICAvLyB7IG5hbWU6ICdNb2RhbCcsIHBhdGg6ICcvbW9kYWwnIH0sXG4gICAgICAgICAgICAvLyB7IG5hbWU6ICdUb2FzdCcsIHBhdGg6ICcvdG9hc3QnIH0sXG4gICAgICAgICAgICAvLyB7IG5hbWU6ICdMb2FkaW5nJywgcGF0aDogJy9sb2FkaW5nJyB9LFxuICAgICAgICAgICAgLy8geyBuYW1lOiAnRHJhZ3VsYScsIHBhdGg6ICcvZHJhZ3VsYScgfSxcbiAgICAgICAgICAgIC8vIHsgbmFtZTogJ0NhcmRzJywgcGF0aDogJy9jYXJkcycgfSxcbiAgICAgICAgICAgIC8vIHsgbmFtZTogJ0NhcmRFeGFtcGxlcycsIHBhdGg6ICcvY2FyZC1leGFtcGxlcycgfSxcbiAgICAgICAgICAgIC8vIHsgbmFtZTogJ0NoYXJ0JywgcGF0aDogJy9jaGFydCcgfSxcbiAgICAgICAgICAgIC8vIHsgbmFtZTogJ0hlYWRlcnMnLCBwYXRoOiAnL2hlYWRlcnMnIH1cbiAgICAgICAgXTtcblxuICAgICAgICByb3V0ZXIuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIHRoaXMubWVudU9wZW4gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudSgpIHtcbiAgICAgICAgdGhpcy5tZW51T3BlbiA9ICF0aGlzLm1lbnVPcGVuO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ButtonDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	// TODO - add tooltips back in when implemented
	
	var _core = __webpack_require__(3);
	
	var _common = __webpack_require__(15);
	
	var _novoElements = __webpack_require__(66);
	
	var _CodeSnippet = __webpack_require__(111);
	
	var _PrimaryButtonDemo = __webpack_require__(207);
	
	var _PrimaryButtonDemo2 = _interopRequireDefault(_PrimaryButtonDemo);
	
	var _DialogueButtonDemo = __webpack_require__(204);
	
	var _DialogueButtonDemo2 = _interopRequireDefault(_DialogueButtonDemo);
	
	var _HeaderButtonDemo = __webpack_require__(205);
	
	var _HeaderButtonDemo2 = _interopRequireDefault(_HeaderButtonDemo);
	
	var _IconButtonDemo = __webpack_require__(206);
	
	var _IconButtonDemo2 = _interopRequireDefault(_IconButtonDemo);
	
	var _StandardButtonDemo = __webpack_require__(209);
	
	var _StandardButtonDemo2 = _interopRequireDefault(_StandardButtonDemo);
	
	var _SecondaryButtonDemo = __webpack_require__(208);
	
	var _SecondaryButtonDemo2 = _interopRequireDefault(_SecondaryButtonDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Button <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/button">(source)</a></small></h1>\n    <p>A button clearly indicates a point of action for the user. Bullhorn buttons\n     come in a variety of themes, custom tailored to fit your use-case.</p>\n    \n    <h2>Themes</h2>\n    <p>\n        Bullhorn button themes were hand crafted to make your life easier.\n         Most buttons used in the Bullhorn platform should utilize a\n         <code>theme</code> attribute. Theme attributes provide access to every\n         variation of Bullhorn UX approved buttons. Depending on the theme, some\n         buttons may also utilize <code>icon</code>, <code>side</code>, and\n         <code>inverse</code> attributes. Button are divided by function into\n         four main categories: Primary, Secondary, Neutralizing, Subtractive.\n         There are also three other button types that are independent of function:\n         Dialogue, Icon, and Header.\n    </p>\n    \n    <h5>Colors</h5>\n    <p>\n        Acceptable colors include <code>Primary</code>, <code>Success</code>, <code>Warning</code>, <code>Negative</code>,\n         and <strong>all analytics colors</strong> which can be found in the color section of the style guide.\n    </p>\n    \n    <br/>\n    \n    <h5>Primary</h5>\n    <p>\n        Primary buttons are used to as primary calls-to-action. They should <strong>always</strong>\n         get an <code>icon</code> attribute. Primary buttons with a "success" color\n         <code>color="success"</code> are used for saving and will almost always contain a "check" icon.\n         Negative color primary buttons <code>color="negative"</code> are used to delete,\n         clear, or otherwise remove an extant element. Primary buttons should never have a <code>side</code> attribute.\n    </p>\n    <div class="example buttons-demo">' + _PrimaryButtonDemo2.default + '</div>\n    <code-snippet [code]="PrimaryButtonDemoTpl"></code-snippet>\n    \n    <h5>Secondary</h5>\n    <p>\n        Secondary buttons are used as an alternative Primary button or when there\n         is a second major action on a page. They usually appears only in Overview\n         and Slideout headers. This theme with an <code>inverse</code> attribute is\n         often used as the action button in dropdown menus.\n    </p>\n    <div class="example buttons-demo">' + _SecondaryButtonDemo2.default + '</div>\n    <code-snippet [code]="SecondaryButtonDemoTpl"></code-snippet>\n    <p>\n        Secondary buttons can also get an <code>inverse</code> attribute for use on a colored background.\n    </p>\n    <div class="example header buttons-demo" [ngClass]="color" (click)="changeColor()" bhTooltip="Click Me!" bhTooltipPlacement="top">' + _HeaderButtonDemo2.default + '</div>\n    <code-snippet [code]="HeaderButtonDemoTpl"></code-snippet>\n    \n    <h5>Dialogue</h5>\n    <p>\n        Similar to icon buttons, dialogue buttons require less visual dominance but often need additional helper text. Dialogue buttons\n        <em>may</em> contain <strong>any</strong> icon and a\n        <code>side</code> may be specified eg:<code>side="right"</code> to place the icon on the right or left side of the text. Dialogue buttons may also use an\n        <code>inverse</code> attribute to change its text color to white.\n    </p>\n    <div class="example buttons-demo">' + _DialogueButtonDemo2.default + '</div>\n    <code-snippet [code]="DialogueButtonDemoTpl"></code-snippet>\n    \n    <h5>Standard</h5>\n    <p>\n        Standard buttons are the most generic button style. Standard buttons by default are\n         styled identically to standard buttons with a <code>color="light"</code>\n         attribute. Typically, a standard button is used to cancel an action,\n         or to cease any additional progress. Although standard buttons <em>can</em>\n         get an <code>icon</code> attribute, they should almost never be used with an icon.\n         If your proposed design calls for a standard button with an icon, consider using\n         a different button theme, like dialogue.\n    </p>\n    <div class="example buttons-demo">' + _StandardButtonDemo2.default + '</div>\n    <code-snippet [code]="NeutralButtonDemoTpl"></code-snippet>\n    \n    <h5>Icon</h5>\n    <p>\n        The <code>icon</code> theme is used to create\n        <strong>icon-only</strong> buttons, which contain no text. They can occupy any of the four main functions but require far less visual dominance than normal buttons. Icon buttons\n        <strong>always</strong> have an <code>icon</code> attribute and can use\n        <strong>any</strong> icon. Icon buttons may also use an\n        <code>inverse</code> attribute to change its icon color to white.\n    </p>\n    <div class="example buttons-demo icons" [ngClass]="color" (click)="changeColor()" bhTooltip="Click Me!" bhTooltipPlacement="top">' + _IconButtonDemo2.default + '</div>\n    <code-snippet [code]="IconButtonDemoTpl"></code-snippet>\n</div>\n';
	
	var HEADER_COLORS = ['blue', 'green', 'yellow', 'orange', 'red', 'purple'];
	
	var ButtonDemo = exports.ButtonDemo = (_dec = (0, _core.Component)({
	    selector: 'buttons-demo',
	    template: template,
	    directives: [_novoElements.NOVO_BUTTON_ELEMENTS, _common.CORE_DIRECTIVES, _CodeSnippet.CodeSnippet]
	}), _dec(_class = function () {
	    function ButtonDemo() {
	        _classCallCheck(this, ButtonDemo);
	
	        this.PrimaryButtonDemoTpl = _PrimaryButtonDemo2.default;
	        this.SecondaryButtonDemoTpl = _SecondaryButtonDemo2.default;
	        this.DialogueButtonDemoTpl = _DialogueButtonDemo2.default;
	        this.NeutralButtonDemoTpl = _StandardButtonDemo2.default;
	        this.HeaderButtonDemoTpl = _HeaderButtonDemo2.default;
	        this.IconButtonDemoTpl = _IconButtonDemo2.default;
	    }
	
	    _createClass(ButtonDemo, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.color = 'blue';
	            this.negativeColor = 'negative';
	        }
	    }, {
	        key: 'changeColor',
	        value: function changeColor() {
	            var idx = HEADER_COLORS.indexOf(this.color);
	            this.color = HEADER_COLORS[idx + 1];
	        }
	    }]);
	
	    return ButtonDemo;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvYnV0dG9uL0J1dHRvbkRlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUlBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLGsrSkFBTjs7QUF5RkEsSUFBTSxnQkFBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixRQUE1QixFQUFzQyxLQUF0QyxFQUE2QyxRQUE3QyxDQUF0Qjs7SUFPYSxVLFdBQUEsVSxXQUxaLHFCQUFVO0FBQ1AsY0FBVSxjQURIO0FBRVAsY0FBVSxRQUZIO0FBR1AsZ0JBQVk7QUFITCxDQUFWLEM7QUFNRywwQkFBYztBQUFBOztBQUNWLGFBQUssb0JBQUw7QUFDQSxhQUFLLHNCQUFMO0FBQ0EsYUFBSyxxQkFBTDtBQUNBLGFBQUssb0JBQUw7QUFDQSxhQUFLLG1CQUFMO0FBQ0EsYUFBSyxpQkFBTDtBQUNIOzs7O21DQUVVO0FBQ1AsaUJBQUssS0FBTCxHQUFhLE1BQWI7QUFDQSxpQkFBSyxhQUFMLEdBQXFCLFVBQXJCO0FBQ0g7OztzQ0FFYTtBQUNWLGdCQUFJLE1BQU0sY0FBYyxPQUFkLENBQXNCLEtBQUssS0FBM0IsQ0FBVjtBQUNBLGlCQUFLLEtBQUwsR0FBYSxjQUFjLE1BQU0sQ0FBcEIsQ0FBYjtBQUNIIiwiZmlsZSI6IkJ1dHRvbkRlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHsgTk9WT19CVVRUT05fRUxFTUVOVFMgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuLy8gVE9ETyAtIGFkZCB0b29sdGlwcyBiYWNrIGluIHdoZW4gaW1wbGVtZW50ZWRcblxuaW1wb3J0IHsgQ29kZVNuaXBwZXQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9jb2Rlc25pcHBldC9Db2RlU25pcHBldCc7XG5cbmltcG9ydCBQcmltYXJ5QnV0dG9uRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9QcmltYXJ5QnV0dG9uRGVtby5odG1sJztcbmltcG9ydCBEaWFsb2d1ZUJ1dHRvbkRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvRGlhbG9ndWVCdXR0b25EZW1vLmh0bWwnO1xuaW1wb3J0IEhlYWRlckJ1dHRvbkRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvSGVhZGVyQnV0dG9uRGVtby5odG1sJztcbmltcG9ydCBJY29uQnV0dG9uRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9JY29uQnV0dG9uRGVtby5odG1sJztcbmltcG9ydCBTdGFuZGFyZEJ1dHRvbkRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvU3RhbmRhcmRCdXR0b25EZW1vLmh0bWwnO1xuaW1wb3J0IFNlY29uZGFyeUJ1dHRvbkRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvU2Vjb25kYXJ5QnV0dG9uRGVtby5odG1sJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPkJ1dHRvbiA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy9idXR0b25cIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+QSBidXR0b24gY2xlYXJseSBpbmRpY2F0ZXMgYSBwb2ludCBvZiBhY3Rpb24gZm9yIHRoZSB1c2VyLiBCdWxsaG9ybiBidXR0b25zXG4gICAgIGNvbWUgaW4gYSB2YXJpZXR5IG9mIHRoZW1lcywgY3VzdG9tIHRhaWxvcmVkIHRvIGZpdCB5b3VyIHVzZS1jYXNlLjwvcD5cbiAgICBcbiAgICA8aDI+VGhlbWVzPC9oMj5cbiAgICA8cD5cbiAgICAgICAgQnVsbGhvcm4gYnV0dG9uIHRoZW1lcyB3ZXJlIGhhbmQgY3JhZnRlZCB0byBtYWtlIHlvdXIgbGlmZSBlYXNpZXIuXG4gICAgICAgICBNb3N0IGJ1dHRvbnMgdXNlZCBpbiB0aGUgQnVsbGhvcm4gcGxhdGZvcm0gc2hvdWxkIHV0aWxpemUgYVxuICAgICAgICAgPGNvZGU+dGhlbWU8L2NvZGU+IGF0dHJpYnV0ZS4gVGhlbWUgYXR0cmlidXRlcyBwcm92aWRlIGFjY2VzcyB0byBldmVyeVxuICAgICAgICAgdmFyaWF0aW9uIG9mIEJ1bGxob3JuIFVYIGFwcHJvdmVkIGJ1dHRvbnMuIERlcGVuZGluZyBvbiB0aGUgdGhlbWUsIHNvbWVcbiAgICAgICAgIGJ1dHRvbnMgbWF5IGFsc28gdXRpbGl6ZSA8Y29kZT5pY29uPC9jb2RlPiwgPGNvZGU+c2lkZTwvY29kZT4sIGFuZFxuICAgICAgICAgPGNvZGU+aW52ZXJzZTwvY29kZT4gYXR0cmlidXRlcy4gQnV0dG9uIGFyZSBkaXZpZGVkIGJ5IGZ1bmN0aW9uIGludG9cbiAgICAgICAgIGZvdXIgbWFpbiBjYXRlZ29yaWVzOiBQcmltYXJ5LCBTZWNvbmRhcnksIE5ldXRyYWxpemluZywgU3VidHJhY3RpdmUuXG4gICAgICAgICBUaGVyZSBhcmUgYWxzbyB0aHJlZSBvdGhlciBidXR0b24gdHlwZXMgdGhhdCBhcmUgaW5kZXBlbmRlbnQgb2YgZnVuY3Rpb246XG4gICAgICAgICBEaWFsb2d1ZSwgSWNvbiwgYW5kIEhlYWRlci5cbiAgICA8L3A+XG4gICAgXG4gICAgPGg1PkNvbG9yczwvaDU+XG4gICAgPHA+XG4gICAgICAgIEFjY2VwdGFibGUgY29sb3JzIGluY2x1ZGUgPGNvZGU+UHJpbWFyeTwvY29kZT4sIDxjb2RlPlN1Y2Nlc3M8L2NvZGU+LCA8Y29kZT5XYXJuaW5nPC9jb2RlPiwgPGNvZGU+TmVnYXRpdmU8L2NvZGU+LFxuICAgICAgICAgYW5kIDxzdHJvbmc+YWxsIGFuYWx5dGljcyBjb2xvcnM8L3N0cm9uZz4gd2hpY2ggY2FuIGJlIGZvdW5kIGluIHRoZSBjb2xvciBzZWN0aW9uIG9mIHRoZSBzdHlsZSBndWlkZS5cbiAgICA8L3A+XG4gICAgXG4gICAgPGJyLz5cbiAgICBcbiAgICA8aDU+UHJpbWFyeTwvaDU+XG4gICAgPHA+XG4gICAgICAgIFByaW1hcnkgYnV0dG9ucyBhcmUgdXNlZCB0byBhcyBwcmltYXJ5IGNhbGxzLXRvLWFjdGlvbi4gVGhleSBzaG91bGQgPHN0cm9uZz5hbHdheXM8L3N0cm9uZz5cbiAgICAgICAgIGdldCBhbiA8Y29kZT5pY29uPC9jb2RlPiBhdHRyaWJ1dGUuIFByaW1hcnkgYnV0dG9ucyB3aXRoIGEgXCJzdWNjZXNzXCIgY29sb3JcbiAgICAgICAgIDxjb2RlPmNvbG9yPVwic3VjY2Vzc1wiPC9jb2RlPiBhcmUgdXNlZCBmb3Igc2F2aW5nIGFuZCB3aWxsIGFsbW9zdCBhbHdheXMgY29udGFpbiBhIFwiY2hlY2tcIiBpY29uLlxuICAgICAgICAgTmVnYXRpdmUgY29sb3IgcHJpbWFyeSBidXR0b25zIDxjb2RlPmNvbG9yPVwibmVnYXRpdmVcIjwvY29kZT4gYXJlIHVzZWQgdG8gZGVsZXRlLFxuICAgICAgICAgY2xlYXIsIG9yIG90aGVyd2lzZSByZW1vdmUgYW4gZXh0YW50IGVsZW1lbnQuIFByaW1hcnkgYnV0dG9ucyBzaG91bGQgbmV2ZXIgaGF2ZSBhIDxjb2RlPnNpZGU8L2NvZGU+IGF0dHJpYnV0ZS5cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgYnV0dG9ucy1kZW1vXCI+JHtQcmltYXJ5QnV0dG9uRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlByaW1hcnlCdXR0b25EZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG4gICAgXG4gICAgPGg1PlNlY29uZGFyeTwvaDU+XG4gICAgPHA+XG4gICAgICAgIFNlY29uZGFyeSBidXR0b25zIGFyZSB1c2VkIGFzIGFuIGFsdGVybmF0aXZlIFByaW1hcnkgYnV0dG9uIG9yIHdoZW4gdGhlcmVcbiAgICAgICAgIGlzIGEgc2Vjb25kIG1ham9yIGFjdGlvbiBvbiBhIHBhZ2UuIFRoZXkgdXN1YWxseSBhcHBlYXJzIG9ubHkgaW4gT3ZlcnZpZXdcbiAgICAgICAgIGFuZCBTbGlkZW91dCBoZWFkZXJzLiBUaGlzIHRoZW1lIHdpdGggYW4gPGNvZGU+aW52ZXJzZTwvY29kZT4gYXR0cmlidXRlIGlzXG4gICAgICAgICBvZnRlbiB1c2VkIGFzIHRoZSBhY3Rpb24gYnV0dG9uIGluIGRyb3Bkb3duIG1lbnVzLlxuICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBidXR0b25zLWRlbW9cIj4ke1NlY29uZGFyeUJ1dHRvbkRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJTZWNvbmRhcnlCdXR0b25EZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG4gICAgPHA+XG4gICAgICAgIFNlY29uZGFyeSBidXR0b25zIGNhbiBhbHNvIGdldCBhbiA8Y29kZT5pbnZlcnNlPC9jb2RlPiBhdHRyaWJ1dGUgZm9yIHVzZSBvbiBhIGNvbG9yZWQgYmFja2dyb3VuZC5cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgaGVhZGVyIGJ1dHRvbnMtZGVtb1wiIFtuZ0NsYXNzXT1cImNvbG9yXCIgKGNsaWNrKT1cImNoYW5nZUNvbG9yKClcIiBiaFRvb2x0aXA9XCJDbGljayBNZSFcIiBiaFRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIj4ke0hlYWRlckJ1dHRvbkRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJIZWFkZXJCdXR0b25EZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG4gICAgXG4gICAgPGg1PkRpYWxvZ3VlPC9oNT5cbiAgICA8cD5cbiAgICAgICAgU2ltaWxhciB0byBpY29uIGJ1dHRvbnMsIGRpYWxvZ3VlIGJ1dHRvbnMgcmVxdWlyZSBsZXNzIHZpc3VhbCBkb21pbmFuY2UgYnV0IG9mdGVuIG5lZWQgYWRkaXRpb25hbCBoZWxwZXIgdGV4dC4gRGlhbG9ndWUgYnV0dG9uc1xuICAgICAgICA8ZW0+bWF5PC9lbT4gY29udGFpbiA8c3Ryb25nPmFueTwvc3Ryb25nPiBpY29uIGFuZCBhXG4gICAgICAgIDxjb2RlPnNpZGU8L2NvZGU+IG1heSBiZSBzcGVjaWZpZWQgZWc6PGNvZGU+c2lkZT1cInJpZ2h0XCI8L2NvZGU+IHRvIHBsYWNlIHRoZSBpY29uIG9uIHRoZSByaWdodCBvciBsZWZ0IHNpZGUgb2YgdGhlIHRleHQuIERpYWxvZ3VlIGJ1dHRvbnMgbWF5IGFsc28gdXNlIGFuXG4gICAgICAgIDxjb2RlPmludmVyc2U8L2NvZGU+IGF0dHJpYnV0ZSB0byBjaGFuZ2UgaXRzIHRleHQgY29sb3IgdG8gd2hpdGUuXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGJ1dHRvbnMtZGVtb1wiPiR7RGlhbG9ndWVCdXR0b25EZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiRGlhbG9ndWVCdXR0b25EZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG4gICAgXG4gICAgPGg1PlN0YW5kYXJkPC9oNT5cbiAgICA8cD5cbiAgICAgICAgU3RhbmRhcmQgYnV0dG9ucyBhcmUgdGhlIG1vc3QgZ2VuZXJpYyBidXR0b24gc3R5bGUuIFN0YW5kYXJkIGJ1dHRvbnMgYnkgZGVmYXVsdCBhcmVcbiAgICAgICAgIHN0eWxlZCBpZGVudGljYWxseSB0byBzdGFuZGFyZCBidXR0b25zIHdpdGggYSA8Y29kZT5jb2xvcj1cImxpZ2h0XCI8L2NvZGU+XG4gICAgICAgICBhdHRyaWJ1dGUuIFR5cGljYWxseSwgYSBzdGFuZGFyZCBidXR0b24gaXMgdXNlZCB0byBjYW5jZWwgYW4gYWN0aW9uLFxuICAgICAgICAgb3IgdG8gY2Vhc2UgYW55IGFkZGl0aW9uYWwgcHJvZ3Jlc3MuIEFsdGhvdWdoIHN0YW5kYXJkIGJ1dHRvbnMgPGVtPmNhbjwvZW0+XG4gICAgICAgICBnZXQgYW4gPGNvZGU+aWNvbjwvY29kZT4gYXR0cmlidXRlLCB0aGV5IHNob3VsZCBhbG1vc3QgbmV2ZXIgYmUgdXNlZCB3aXRoIGFuIGljb24uXG4gICAgICAgICBJZiB5b3VyIHByb3Bvc2VkIGRlc2lnbiBjYWxscyBmb3IgYSBzdGFuZGFyZCBidXR0b24gd2l0aCBhbiBpY29uLCBjb25zaWRlciB1c2luZ1xuICAgICAgICAgYSBkaWZmZXJlbnQgYnV0dG9uIHRoZW1lLCBsaWtlIGRpYWxvZ3VlLlxuICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBidXR0b25zLWRlbW9cIj4ke1N0YW5kYXJkQnV0dG9uRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIk5ldXRyYWxCdXR0b25EZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG4gICAgXG4gICAgPGg1Pkljb248L2g1PlxuICAgIDxwPlxuICAgICAgICBUaGUgPGNvZGU+aWNvbjwvY29kZT4gdGhlbWUgaXMgdXNlZCB0byBjcmVhdGVcbiAgICAgICAgPHN0cm9uZz5pY29uLW9ubHk8L3N0cm9uZz4gYnV0dG9ucywgd2hpY2ggY29udGFpbiBubyB0ZXh0LiBUaGV5IGNhbiBvY2N1cHkgYW55IG9mIHRoZSBmb3VyIG1haW4gZnVuY3Rpb25zIGJ1dCByZXF1aXJlIGZhciBsZXNzIHZpc3VhbCBkb21pbmFuY2UgdGhhbiBub3JtYWwgYnV0dG9ucy4gSWNvbiBidXR0b25zXG4gICAgICAgIDxzdHJvbmc+YWx3YXlzPC9zdHJvbmc+IGhhdmUgYW4gPGNvZGU+aWNvbjwvY29kZT4gYXR0cmlidXRlIGFuZCBjYW4gdXNlXG4gICAgICAgIDxzdHJvbmc+YW55PC9zdHJvbmc+IGljb24uIEljb24gYnV0dG9ucyBtYXkgYWxzbyB1c2UgYW5cbiAgICAgICAgPGNvZGU+aW52ZXJzZTwvY29kZT4gYXR0cmlidXRlIHRvIGNoYW5nZSBpdHMgaWNvbiBjb2xvciB0byB3aGl0ZS5cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgYnV0dG9ucy1kZW1vIGljb25zXCIgW25nQ2xhc3NdPVwiY29sb3JcIiAoY2xpY2spPVwiY2hhbmdlQ29sb3IoKVwiIGJoVG9vbHRpcD1cIkNsaWNrIE1lIVwiIGJoVG9vbHRpcFBsYWNlbWVudD1cInRvcFwiPiR7SWNvbkJ1dHRvbkRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJJY29uQnV0dG9uRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5gO1xuXG5jb25zdCBIRUFERVJfQ09MT1JTID0gWydibHVlJywgJ2dyZWVuJywgJ3llbGxvdycsICdvcmFuZ2UnLCAncmVkJywgJ3B1cnBsZSddO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2J1dHRvbnMtZGVtbycsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgIGRpcmVjdGl2ZXM6IFtOT1ZPX0JVVFRPTl9FTEVNRU5UUywgQ09SRV9ESVJFQ1RJVkVTLCBDb2RlU25pcHBldF1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRGVtbyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuUHJpbWFyeUJ1dHRvbkRlbW9UcGwgPSBQcmltYXJ5QnV0dG9uRGVtb1RwbDtcbiAgICAgICAgdGhpcy5TZWNvbmRhcnlCdXR0b25EZW1vVHBsID0gU2Vjb25kYXJ5QnV0dG9uRGVtb1RwbDtcbiAgICAgICAgdGhpcy5EaWFsb2d1ZUJ1dHRvbkRlbW9UcGwgPSBEaWFsb2d1ZUJ1dHRvbkRlbW9UcGw7XG4gICAgICAgIHRoaXMuTmV1dHJhbEJ1dHRvbkRlbW9UcGwgPSBTdGFuZGFyZEJ1dHRvbkRlbW9UcGw7XG4gICAgICAgIHRoaXMuSGVhZGVyQnV0dG9uRGVtb1RwbCA9IEhlYWRlckJ1dHRvbkRlbW9UcGw7XG4gICAgICAgIHRoaXMuSWNvbkJ1dHRvbkRlbW9UcGwgPSBJY29uQnV0dG9uRGVtb1RwbDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9ICdibHVlJztcbiAgICAgICAgdGhpcy5uZWdhdGl2ZUNvbG9yID0gJ25lZ2F0aXZlJztcbiAgICB9XG5cbiAgICBjaGFuZ2VDb2xvcigpIHtcbiAgICAgICAgbGV0IGlkeCA9IEhFQURFUl9DT0xPUlMuaW5kZXhPZih0aGlzLmNvbG9yKTtcbiAgICAgICAgdGhpcy5jb2xvciA9IEhFQURFUl9DT0xPUlNbaWR4ICsgMV07XG4gICAgfVxufVxuIl19

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Color = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	// import { Toaster, BhToast } from 'bh-elements';
	
	var _core = __webpack_require__(3);
	
	var _common = __webpack_require__(15);
	
	var _router = __webpack_require__(16);
	
	var _Color = __webpack_require__(210);
	
	var _Color2 = _interopRequireDefault(_Color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Color = exports.Color = (_dec = (0, _core.Component)({
	    selector: 'color',
	    directives: [_router.ROUTER_DIRECTIVES, _common.CORE_DIRECTIVES],
	    // providers: [Toaster],
	    template: _Color2.default
	}), _dec(_class = function () {
	    function Color() /*toaster:Toaster*/{
	        _classCallCheck(this, Color);
	
	        // TODO - put toaster back in when that is implemented
	        this.primaryColors = [{
	            name: 'navigation',
	            variables: ['navigation'],
	            hex: '2F383F'
	        }, {
	            name: 'action',
	            variables: ['positive'],
	            hex: '4A89DC'
	        }, {
	            name: 'text',
	            variables: ['dark', 'base-font-color'],
	            hex: '474747'
	        }, {
	            name: 'background',
	            variables: ['off-white', 'background'],
	            hex: 'F4F4F4'
	        }];
	
	        this.entityColors = [{
	            name: 'lead',
	            variables: ['lead'],
	            hex: 'AA6699'
	        }, {
	            name: 'contact',
	            variables: ['contact'],
	            hex: 'FFAA44'
	        }, {
	            name: 'company',
	            variables: ['company'],
	            hex: '3399DD'
	        }, {
	            name: 'candidate',
	            variables: ['candidate'],
	            hex: '44BB77'
	        }, {
	            name: 'opportunity',
	            variables: ['opportunity'],
	            hex: '662255'
	        }, {
	            name: 'job',
	            variables: ['job'],
	            hex: 'BB5566'
	        }, {
	            name: 'submission',
	            variables: ['submission'],
	            hex: '778899'
	        }, {
	            name: 'placement',
	            variables: ['placement'],
	            hex: '0B344F'
	        }];
	
	        this.analyticsColors = [{
	            name: 'grapefruit',
	            variables: ['grapefruit'],
	            hex: 'DA4453'
	        }, {
	            name: 'bittersweet',
	            variables: ['bittersweet'],
	            hex: 'EB6845'
	        }, {
	            name: 'sunflower',
	            variables: ['sunflower'],
	            hex: 'F6B042'
	        }, {
	            name: 'grass',
	            variables: ['grass'],
	            hex: '8CC152'
	        }, {
	            name: 'mint',
	            variables: ['mint'],
	            hex: '37BC9B'
	        }, {
	            name: 'aqua',
	            variables: ['aqua'],
	            hex: '3BAFDA'
	        }, {
	            name: 'ocean',
	            variables: ['ocean'],
	            hex: '4A89DC'
	        }, {
	            name: 'carnation',
	            variables: ['carnation'],
	            hex: 'D770AD'
	        }, {
	            name: 'lavender',
	            variables: ['lavender'],
	            hex: '967ADC'
	        }];
	
	        this.options = {
	            'title': 'Copied!',
	            'message': 'Some Message...',
	            'theme': 'success',
	            'icon': 'clipboard',
	            'position': 'growlTopRight'
	        };
	
	        // this.toaster = toaster;
	    }
	
	    _createClass(Color, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.color = 'background';
	        }
	    }, {
	        key: 'changeColor',
	        value: function changeColor(color) {
	            this.color = color;
	        }
	    }, {
	        key: 'copyLink',
	        value: function copyLink(color) {
	            // Create dom element to copy from
	            var copyFrom = document.createElement('textarea');
	            copyFrom.textContent = '#' + color.hex;
	            var body = document.getElementsByTagName('body')[0];
	            body.appendChild(copyFrom);
	            copyFrom.select();
	            // Copy text
	            document.execCommand('copy');
	            // Delete element
	            body.removeChild(copyFrom);
	
	            // Set toast options
	            this.options = {
	                title: '#' + color.hex,
	                message: 'Copied to your clipboard',
	                theme: color.name,
	                icon: 'clipboard',
	                position: 'growlTopRight'
	            };
	
	            if (color.name === 'action') this.options.theme = 'ocean';
	
	            // Fire toast
	            // this.toaster.alert(BhToast, this.options);
	        }
	    }]);
	
	    return Color;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvY29sb3IvQ29sb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7Ozs7O0lBUWEsSyxXQUFBLEssV0FOWixxQkFBVTtBQUNQLGNBQVUsT0FESDtBQUVQLGdCQUFZLG9EQUZMOztBQUlQO0FBSk8sQ0FBVixDO0FBT0cscUIsbUJBQWlDO0FBQUE7OztBQUU3QixhQUFLLGFBQUwsR0FBcUIsQ0FDakI7QUFDSSxrQkFBTSxZQURWO0FBRUksdUJBQVcsQ0FBQyxZQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBRGlCLEVBTWpCO0FBQ0ksa0JBQU0sUUFEVjtBQUVJLHVCQUFXLENBQUMsVUFBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQU5pQixFQVdqQjtBQUNJLGtCQUFNLE1BRFY7QUFFSSx1QkFBVyxDQUFDLE1BQUQsRUFBUyxpQkFBVCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQVhpQixFQWdCakI7QUFDSSxrQkFBTSxZQURWO0FBRUksdUJBQVcsQ0FBQyxXQUFELEVBQWMsWUFBZCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQWhCaUIsQ0FBckI7O0FBdUJBLGFBQUssWUFBTCxHQUFvQixDQUNoQjtBQUNJLGtCQUFNLE1BRFY7QUFFSSx1QkFBVyxDQUFDLE1BQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FEZ0IsRUFNaEI7QUFDSSxrQkFBTSxTQURWO0FBRUksdUJBQVcsQ0FBQyxTQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBTmdCLEVBV2hCO0FBQ0ksa0JBQU0sU0FEVjtBQUVJLHVCQUFXLENBQUMsU0FBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQVhnQixFQWdCaEI7QUFDSSxrQkFBTSxXQURWO0FBRUksdUJBQVcsQ0FBQyxXQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBaEJnQixFQXFCaEI7QUFDSSxrQkFBTSxhQURWO0FBRUksdUJBQVcsQ0FBQyxhQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBckJnQixFQTBCaEI7QUFDSSxrQkFBTSxLQURWO0FBRUksdUJBQVcsQ0FBQyxLQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBMUJnQixFQStCaEI7QUFDSSxrQkFBTSxZQURWO0FBRUksdUJBQVcsQ0FBQyxZQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBL0JnQixFQW9DaEI7QUFDSSxrQkFBTSxXQURWO0FBRUksdUJBQVcsQ0FBQyxXQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBcENnQixDQUFwQjs7QUEyQ0EsYUFBSyxlQUFMLEdBQXVCLENBQ25CO0FBQ0ksa0JBQU0sWUFEVjtBQUVJLHVCQUFXLENBQUMsWUFBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQURtQixFQU1uQjtBQUNJLGtCQUFNLGFBRFY7QUFFSSx1QkFBVyxDQUFDLGFBQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FObUIsRUFXbkI7QUFDSSxrQkFBTSxXQURWO0FBRUksdUJBQVcsQ0FBQyxXQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBWG1CLEVBZ0JuQjtBQUNJLGtCQUFNLE9BRFY7QUFFSSx1QkFBVyxDQUFDLE9BQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FoQm1CLEVBcUJuQjtBQUNJLGtCQUFNLE1BRFY7QUFFSSx1QkFBVyxDQUFDLE1BQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FyQm1CLEVBMEJuQjtBQUNJLGtCQUFNLE1BRFY7QUFFSSx1QkFBVyxDQUFDLE1BQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0ExQm1CLEVBK0JuQjtBQUNJLGtCQUFNLE9BRFY7QUFFSSx1QkFBVyxDQUFDLE9BQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0EvQm1CLEVBb0NuQjtBQUNJLGtCQUFNLFdBRFY7QUFFSSx1QkFBVyxDQUFDLFdBQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FwQ21CLEVBeUNuQjtBQUNJLGtCQUFNLFVBRFY7QUFFSSx1QkFBVyxDQUFDLFVBQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0F6Q21CLENBQXZCOztBQWdEQSxhQUFLLE9BQUwsR0FBZTtBQUNYLHFCQUFTLFNBREU7QUFFWCx1QkFBVyxpQkFGQTtBQUdYLHFCQUFTLFNBSEU7QUFJWCxvQkFBUSxXQUpHO0FBS1gsd0JBQVk7QUFMRCxTQUFmOzs7QUFTSDs7OzttQ0FFVTtBQUNQLGlCQUFLLEtBQUwsR0FBYSxZQUFiO0FBQ0g7OztvQ0FFVyxLLEVBQU87QUFDZixpQkFBSyxLQUFMLEdBQWEsS0FBYjtBQUNIOzs7aUNBRVEsSyxFQUFPOztBQUVaLGdCQUFJLFdBQVcsU0FBUyxhQUFULENBQXVCLFVBQXZCLENBQWY7QUFDQSxxQkFBUyxXQUFULFNBQTJCLE1BQU0sR0FBakM7QUFDQSxnQkFBSSxPQUFPLFNBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBWDtBQUNBLGlCQUFLLFdBQUwsQ0FBaUIsUUFBakI7QUFDQSxxQkFBUyxNQUFUOztBQUVBLHFCQUFTLFdBQVQsQ0FBcUIsTUFBckI7O0FBRUEsaUJBQUssV0FBTCxDQUFpQixRQUFqQjs7O0FBR0EsaUJBQUssT0FBTCxHQUFlO0FBQ1gsNkJBQVcsTUFBTSxHQUROO0FBRVgseUJBQVMsMEJBRkU7QUFHWCx1QkFBTyxNQUFNLElBSEY7QUFJWCxzQkFBTSxXQUpLO0FBS1gsMEJBQVU7QUFMQyxhQUFmOztBQVFBLGdCQUFJLE1BQU0sSUFBTixLQUFlLFFBQW5CLEVBQTZCLEtBQUssT0FBTCxDQUFhLEtBQWIsR0FBcUIsT0FBckI7Ozs7QUFJaEMiLCJmaWxlIjoiQ29sb3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuLy8gaW1wb3J0IHsgVG9hc3RlciwgQmhUb2FzdCB9IGZyb20gJ2JoLWVsZW1lbnRzJztcblxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vQ29sb3IuaHRtbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29sb3InLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTXSxcbiAgICAvLyBwcm92aWRlcnM6IFtUb2FzdGVyXSxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgQ29sb3Ige1xuICAgIGNvbnN0cnVjdG9yKC8qdG9hc3RlcjpUb2FzdGVyKi8pIHtcbiAgICAgICAgLy8gVE9ETyAtIHB1dCB0b2FzdGVyIGJhY2sgaW4gd2hlbiB0aGF0IGlzIGltcGxlbWVudGVkXG4gICAgICAgIHRoaXMucHJpbWFyeUNvbG9ycyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbmF2aWdhdGlvbicsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ25hdmlnYXRpb24nXSxcbiAgICAgICAgICAgICAgICBoZXg6ICcyRjM4M0YnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdhY3Rpb24nLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydwb3NpdGl2ZSddLFxuICAgICAgICAgICAgICAgIGhleDogJzRBODlEQydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydkYXJrJywgJ2Jhc2UtZm9udC1jb2xvciddLFxuICAgICAgICAgICAgICAgIGhleDogJzQ3NDc0NydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2JhY2tncm91bmQnLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydvZmYtd2hpdGUnLCAnYmFja2dyb3VuZCddLFxuICAgICAgICAgICAgICAgIGhleDogJ0Y0RjRGNCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLmVudGl0eUNvbG9ycyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbGVhZCcsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2xlYWQnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICdBQTY2OTknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjb250YWN0JyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnY29udGFjdCddLFxuICAgICAgICAgICAgICAgIGhleDogJ0ZGQUE0NCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2NvbXBhbnknLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydjb21wYW55J10sXG4gICAgICAgICAgICAgICAgaGV4OiAnMzM5OUREJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2FuZGlkYXRlJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnY2FuZGlkYXRlJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnNDRCQjc3J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnb3Bwb3J0dW5pdHknLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydvcHBvcnR1bml0eSddLFxuICAgICAgICAgICAgICAgIGhleDogJzY2MjI1NSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2pvYicsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2pvYiddLFxuICAgICAgICAgICAgICAgIGhleDogJ0JCNTU2NidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3N1Ym1pc3Npb24nLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydzdWJtaXNzaW9uJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnNzc4ODk5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncGxhY2VtZW50JyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsncGxhY2VtZW50J10sXG4gICAgICAgICAgICAgICAgaGV4OiAnMEIzNDRGJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuYW5hbHl0aWNzQ29sb3JzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdncmFwZWZydWl0JyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnZ3JhcGVmcnVpdCddLFxuICAgICAgICAgICAgICAgIGhleDogJ0RBNDQ1MydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2JpdHRlcnN3ZWV0JyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnYml0dGVyc3dlZXQnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICdFQjY4NDUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdzdW5mbG93ZXInLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydzdW5mbG93ZXInXSxcbiAgICAgICAgICAgICAgICBoZXg6ICdGNkIwNDInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdncmFzcycsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2dyYXNzJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnOENDMTUyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbWludCcsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ21pbnQnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICczN0JDOUInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdhcXVhJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnYXF1YSddLFxuICAgICAgICAgICAgICAgIGhleDogJzNCQUZEQSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ29jZWFuJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnb2NlYW4nXSxcbiAgICAgICAgICAgICAgICBoZXg6ICc0QTg5REMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjYXJuYXRpb24nLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydjYXJuYXRpb24nXSxcbiAgICAgICAgICAgICAgICBoZXg6ICdENzcwQUQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdsYXZlbmRlcicsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2xhdmVuZGVyJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnOTY3QURDJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgICd0aXRsZSc6ICdDb3BpZWQhJyxcbiAgICAgICAgICAgICdtZXNzYWdlJzogJ1NvbWUgTWVzc2FnZS4uLicsXG4gICAgICAgICAgICAndGhlbWUnOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAnaWNvbic6ICdjbGlwYm9hcmQnLFxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2dyb3dsVG9wUmlnaHQnXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9ICdiYWNrZ3JvdW5kJztcbiAgICB9XG5cbiAgICBjaGFuZ2VDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxuXG4gICAgY29weUxpbmsoY29sb3IpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGRvbSBlbGVtZW50IHRvIGNvcHkgZnJvbVxuICAgICAgICBsZXQgY29weUZyb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBjb3B5RnJvbS50ZXh0Q29udGVudCA9IGAjJHtjb2xvci5oZXh9YDtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGNvcHlGcm9tKTtcbiAgICAgICAgY29weUZyb20uc2VsZWN0KCk7XG4gICAgICAgIC8vIENvcHkgdGV4dFxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgICAvLyBEZWxldGUgZWxlbWVudFxuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGNvcHlGcm9tKTtcblxuICAgICAgICAvLyBTZXQgdG9hc3Qgb3B0aW9uc1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogYCMke2NvbG9yLmhleH1gLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0NvcGllZCB0byB5b3VyIGNsaXBib2FyZCcsXG4gICAgICAgICAgICB0aGVtZTogY29sb3IubmFtZSxcbiAgICAgICAgICAgIGljb246ICdjbGlwYm9hcmQnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdncm93bFRvcFJpZ2h0J1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjb2xvci5uYW1lID09PSAnYWN0aW9uJykgdGhpcy5vcHRpb25zLnRoZW1lID0gJ29jZWFuJztcblxuICAgICAgICAvLyBGaXJlIHRvYXN0XG4gICAgICAgIC8vIHRoaXMudG9hc3Rlci5hbGVydChCaFRvYXN0LCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Home = undefined;
	
	var _dec, _class;
	
	var _core = __webpack_require__(3);
	
	var _router = __webpack_require__(16);
	
	var _Home = __webpack_require__(211);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Home = exports.Home = (_dec = (0, _core.Component)({
	    selector: 'home',
	    directives: [_router.ROUTER_DIRECTIVES],
	    template: _Home2.default
	}), _dec(_class = function Home() {
	    _classCallCheck(this, Home);
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvaG9tZS9Ib21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7OztJQU9hLEksV0FBQSxJLFdBTFoscUJBQVU7QUFDUCxjQUFVLE1BREg7QUFFUCxnQkFBWSwyQkFGTDtBQUdQO0FBSE8sQ0FBVixDIiwiZmlsZSI6IkhvbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL0hvbWUuaHRtbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaG9tZScsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgSG9tZSB7XG59XG4iXX0=

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Iconography = undefined;
	
	var _dec, _class;
	
	var _core = __webpack_require__(3);
	
	var _router = __webpack_require__(16);
	
	var _Iconography = __webpack_require__(212);
	
	var _Iconography2 = _interopRequireDefault(_Iconography);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Iconography = exports.Iconography = (_dec = (0, _core.Component)({
	    selector: 'iconography',
	    directives: [_router.ROUTER_DIRECTIVES],
	    template: _Iconography2.default
	}), _dec(_class = function Iconography() {
	    _classCallCheck(this, Iconography);
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvaWNvbm9ncmFwaHkvSWNvbm9ncmFwaHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7O0lBT2EsVyxXQUFBLFcsV0FMWixxQkFBVTtBQUNQLGNBQVUsYUFESDtBQUVQLGdCQUFZLDJCQUZMO0FBR1A7QUFITyxDQUFWLEMiLCJmaWxlIjoiSWNvbm9ncmFwaHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL0ljb25vZ3JhcGh5Lmh0bWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ljb25vZ3JhcGh5JyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxufSlcbmV4cG9ydCBjbGFzcyBJY29ub2dyYXBoeSB7XG59XG4iXX0=

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Layout = undefined;
	
	var _dec, _class;
	
	var _core = __webpack_require__(3);
	
	var _router = __webpack_require__(16);
	
	var _Layout = __webpack_require__(213);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Layout = exports.Layout = (_dec = (0, _core.Component)({
	    selector: 'layout',
	    directives: [_router.ROUTER_DIRECTIVES],
	    template: _Layout2.default
	}), _dec(_class = function Layout() {
	    _classCallCheck(this, Layout);
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvbGF5b3V0L0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7SUFPYSxNLFdBQUEsTSxXQUxaLHFCQUFVO0FBQ1AsY0FBVSxRQURIO0FBRVAsZ0JBQVksMkJBRkw7QUFHUDtBQUhPLENBQVYsQyIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL0xheW91dC5odG1sJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsYXlvdXQnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXG59KVxuZXhwb3J0IGNsYXNzIExheW91dCB7XG59XG4iXX0=

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ButtonDemo = __webpack_require__(190);
	
	Object.keys(_ButtonDemo).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _ButtonDemo[key];
	    }
	  });
	});
	
	var _TabsDemo = __webpack_require__(196);
	
	Object.keys(_TabsDemo).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _TabsDemo[key];
	    }
	  });
	});
	
	var _Color = __webpack_require__(191);
	
	Object.keys(_Color).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Color[key];
	    }
	  });
	});
	
	var _Typography = __webpack_require__(197);
	
	Object.keys(_Typography).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Typography[key];
	    }
	  });
	});
	
	var _Iconography = __webpack_require__(193);
	
	Object.keys(_Iconography).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Iconography[key];
	    }
	  });
	});
	
	var _Layout = __webpack_require__(194);
	
	Object.keys(_Layout).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Layout[key];
	    }
	  });
	});
	
	var _Home = __webpack_require__(192);
	
	Object.keys(_Home).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Home[key];
	    }
	  });
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvcGFnZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoicGFnZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9idXR0b24vQnV0dG9uRGVtbyc7XG5leHBvcnQgKiBmcm9tICcuL3RhYnMvVGFic0RlbW8nO1xuZXhwb3J0ICogZnJvbSAnLi9jb2xvci9Db2xvcic7XG5leHBvcnQgKiBmcm9tICcuL3R5cG9ncmFwaHkvVHlwb2dyYXBoeSc7XG5leHBvcnQgKiBmcm9tICcuL2ljb25vZ3JhcGh5L0ljb25vZ3JhcGh5JztcbmV4cG9ydCAqIGZyb20gJy4vbGF5b3V0L0xheW91dCc7XG5leHBvcnQgKiBmcm9tICcuL2hvbWUvSG9tZSc7XG4iXX0=

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TabsDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(3);
	
	var _novoElements = __webpack_require__(66);
	
	var _CodeSnippet = __webpack_require__(111);
	
	var _ButtonTabDemo = __webpack_require__(214);
	
	var _ButtonTabDemo2 = _interopRequireDefault(_ButtonTabDemo);
	
	var _ColorDemo = __webpack_require__(215);
	
	var _ColorDemo2 = _interopRequireDefault(_ColorDemo);
	
	var _RouterDemo = __webpack_require__(216);
	
	var _RouterDemo2 = _interopRequireDefault(_RouterDemo);
	
	var _VerticalDemo = __webpack_require__(217);
	
	var _VerticalDemo2 = _interopRequireDefault(_VerticalDemo);
	
	var _WhiteDemo = __webpack_require__(218);
	
	var _WhiteDemo2 = _interopRequireDefault(_WhiteDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Tabs <small><a target="_blank" href="https://bhsource.bullhorn.com/NOVO/bh-elements/blob/master/src/elements/tabs">(source)</a></small></h1>\n    <p>Tabs make it easy to explore and switch between different views or functional aspects of an app or to browse categorized data sets. Tabs in Bullhorn have two different themes; A \'color\' theme for tabbed navigation on a colored background, and a \'white\' theme for tabs on a white background.</p>\n\n    <h2>Themes</h2>\n\n    <h5>Color</h5>\n    <p>Colored background tab navigation gets the theme <code>theme="color"</code></p>\n    <div class="example color-tab-demo">' + _ColorDemo2.default + '</div>\n    <code-snippet [code]="ColorDemoTpl"></code-snippet>\n\n    <h5>White</h5>\n    <p>White background tab navigation gets the theme <code>theme="white"</code></p>\n    <div class="example transparent-tab-demo">' + _WhiteDemo2.default + '</div>\n    <code-snippet [code]="WhiteDemoTpl"></code-snippet>\n\n    <h2>Types</h2>\n\n    <h5>Vertical</h5>\n    <p>Vertical tabs get a direction attribute <code>direction="vertical"</code></p>\n    <div class="example vertical-tab-demo">' + _VerticalDemo2.default + '</div>\n    <code-snippet [code]="VerticalDemoTpl"></code-snippet>\n\n    <h5>Button Tab Bars</h5>\n    <p>Tabbed Button Bars get a similar style treatment to the <code>"header"</code> theme button.</p>\n    <div class="example example button-tab-demo">' + _ButtonTabDemo2.default + '</div>\n    <code-snippet [code]="ButtonTabDemoTpl"></code-snippet>\n\n    <h2>As Application Routing Mechanism</h2>\n    <p>Follows the same color/white theme as above, but doesn\'t use the "bh-tabs" tag and you have to add the classes and html accordingly. The header will now control and route your application and put the content in the "router-outlet" and look/feel like our tabs component.</p>\n    <div class="example transparent-tab-demo">' + _RouterDemo2.default + '</div>\n    <code-snippet [code]="RouterDemoTpl"></code-snippet>\n</div>\n';
	
	var TabsDemo = exports.TabsDemo = (_dec = (0, _core.Component)({
	    selector: 'tabs-demo',
	    template: template,
	    directives: [_novoElements.NOVO_TAB_ELEMENTS, _CodeSnippet.CodeSnippet]
	}), _dec(_class = function () {
	    function TabsDemo() {
	        _classCallCheck(this, TabsDemo);
	
	        this.ColorDemoTpl = _ColorDemo2.default;
	        this.WhiteDemoTpl = _WhiteDemo2.default;
	        this.VerticalDemoTpl = _VerticalDemo2.default;
	        this.ButtonTabDemoTpl = _ButtonTabDemo2.default;
	        this.RouterDemoTpl = _RouterDemo2.default;
	    }
	
	    _createClass(TabsDemo, [{
	        key: 'tabSelected',
	        value: function tabSelected() {
	            console.log('TAB SELECTED'); // eslint-disable-line
	        }
	    }, {
	        key: 'tabDeselected',
	        value: function tabDeselected() {
	            console.log('TAB DESELECTED'); // eslint-disable-line
	        }
	    }]);
	
	    return TabsDemo;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdGFicy9UYWJzRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTSwrL0RBQU47O0lBeUNhLFEsV0FBQSxRLFdBTFoscUJBQVU7QUFDUCxjQUFVLFdBREg7QUFFUCxjQUFVLFFBRkg7QUFHUCxnQkFBWTtBQUhMLENBQVYsQztBQU1HLHdCQUFjO0FBQUE7O0FBQ1YsYUFBSyxZQUFMO0FBQ0EsYUFBSyxZQUFMO0FBQ0EsYUFBSyxlQUFMO0FBQ0EsYUFBSyxnQkFBTDtBQUNBLGFBQUssYUFBTDtBQUNIOzs7O3NDQUVhO0FBQ1Ysb0JBQVEsR0FBUixDQUFZLGNBQVosRTtBQUNIOzs7d0NBRWU7QUFDWixvQkFBUSxHQUFSLENBQVksZ0JBQVosRTtBQUNIIiwiZmlsZSI6IlRhYnNEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9iaC9ub3ZvL2FwcHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgTk9WT19UQUJfRUxFTUVOVFMgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuaW1wb3J0IHsgQ29kZVNuaXBwZXQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9jb2Rlc25pcHBldC9Db2RlU25pcHBldCc7XG5cbmltcG9ydCBCdXR0b25UYWJEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0J1dHRvblRhYkRlbW8uaHRtbCc7XG5pbXBvcnQgQ29sb3JEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0NvbG9yRGVtby5odG1sJztcbmltcG9ydCBSb3V0ZXJEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1JvdXRlckRlbW8uaHRtbCc7XG5pbXBvcnQgVmVydGljYWxEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1ZlcnRpY2FsRGVtby5odG1sJztcbmltcG9ydCBXaGl0ZURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvV2hpdGVEZW1vLmh0bWwnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+VGFicyA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vYmhzb3VyY2UuYnVsbGhvcm4uY29tL05PVk8vYmgtZWxlbWVudHMvYmxvYi9tYXN0ZXIvc3JjL2VsZW1lbnRzL3RhYnNcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+VGFicyBtYWtlIGl0IGVhc3kgdG8gZXhwbG9yZSBhbmQgc3dpdGNoIGJldHdlZW4gZGlmZmVyZW50IHZpZXdzIG9yIGZ1bmN0aW9uYWwgYXNwZWN0cyBvZiBhbiBhcHAgb3IgdG8gYnJvd3NlIGNhdGVnb3JpemVkIGRhdGEgc2V0cy4gVGFicyBpbiBCdWxsaG9ybiBoYXZlIHR3byBkaWZmZXJlbnQgdGhlbWVzOyBBICdjb2xvcicgdGhlbWUgZm9yIHRhYmJlZCBuYXZpZ2F0aW9uIG9uIGEgY29sb3JlZCBiYWNrZ3JvdW5kLCBhbmQgYSAnd2hpdGUnIHRoZW1lIGZvciB0YWJzIG9uIGEgd2hpdGUgYmFja2dyb3VuZC48L3A+XG5cbiAgICA8aDI+VGhlbWVzPC9oMj5cblxuICAgIDxoNT5Db2xvcjwvaDU+XG4gICAgPHA+Q29sb3JlZCBiYWNrZ3JvdW5kIHRhYiBuYXZpZ2F0aW9uIGdldHMgdGhlIHRoZW1lIDxjb2RlPnRoZW1lPVwiY29sb3JcIjwvY29kZT48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgY29sb3ItdGFiLWRlbW9cIj4ke0NvbG9yRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkNvbG9yRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PldoaXRlPC9oNT5cbiAgICA8cD5XaGl0ZSBiYWNrZ3JvdW5kIHRhYiBuYXZpZ2F0aW9uIGdldHMgdGhlIHRoZW1lIDxjb2RlPnRoZW1lPVwid2hpdGVcIjwvY29kZT48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgdHJhbnNwYXJlbnQtdGFiLWRlbW9cIj4ke1doaXRlRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIldoaXRlRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGgyPlR5cGVzPC9oMj5cblxuICAgIDxoNT5WZXJ0aWNhbDwvaDU+XG4gICAgPHA+VmVydGljYWwgdGFicyBnZXQgYSBkaXJlY3Rpb24gYXR0cmlidXRlIDxjb2RlPmRpcmVjdGlvbj1cInZlcnRpY2FsXCI8L2NvZGU+PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHZlcnRpY2FsLXRhYi1kZW1vXCI+JHtWZXJ0aWNhbERlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJWZXJ0aWNhbERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5CdXR0b24gVGFiIEJhcnM8L2g1PlxuICAgIDxwPlRhYmJlZCBCdXR0b24gQmFycyBnZXQgYSBzaW1pbGFyIHN0eWxlIHRyZWF0bWVudCB0byB0aGUgPGNvZGU+XCJoZWFkZXJcIjwvY29kZT4gdGhlbWUgYnV0dG9uLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBleGFtcGxlIGJ1dHRvbi10YWItZGVtb1wiPiR7QnV0dG9uVGFiRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkJ1dHRvblRhYkRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoMj5BcyBBcHBsaWNhdGlvbiBSb3V0aW5nIE1lY2hhbmlzbTwvaDI+XG4gICAgPHA+Rm9sbG93cyB0aGUgc2FtZSBjb2xvci93aGl0ZSB0aGVtZSBhcyBhYm92ZSwgYnV0IGRvZXNuJ3QgdXNlIHRoZSBcImJoLXRhYnNcIiB0YWcgYW5kIHlvdSBoYXZlIHRvIGFkZCB0aGUgY2xhc3NlcyBhbmQgaHRtbCBhY2NvcmRpbmdseS4gVGhlIGhlYWRlciB3aWxsIG5vdyBjb250cm9sIGFuZCByb3V0ZSB5b3VyIGFwcGxpY2F0aW9uIGFuZCBwdXQgdGhlIGNvbnRlbnQgaW4gdGhlIFwicm91dGVyLW91dGxldFwiIGFuZCBsb29rL2ZlZWwgbGlrZSBvdXIgdGFicyBjb21wb25lbnQuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHRyYW5zcGFyZW50LXRhYi1kZW1vXCI+JHtSb3V0ZXJEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiUm91dGVyRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RhYnMtZGVtbycsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgIGRpcmVjdGl2ZXM6IFtOT1ZPX1RBQl9FTEVNRU5UUywgQ29kZVNuaXBwZXRdXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNEZW1vIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5Db2xvckRlbW9UcGwgPSBDb2xvckRlbW9UcGw7XG4gICAgICAgIHRoaXMuV2hpdGVEZW1vVHBsID0gV2hpdGVEZW1vVHBsO1xuICAgICAgICB0aGlzLlZlcnRpY2FsRGVtb1RwbCA9IFZlcnRpY2FsRGVtb1RwbDtcbiAgICAgICAgdGhpcy5CdXR0b25UYWJEZW1vVHBsID0gQnV0dG9uVGFiRGVtb1RwbDtcbiAgICAgICAgdGhpcy5Sb3V0ZXJEZW1vVHBsID0gUm91dGVyRGVtb1RwbDtcbiAgICB9XG5cbiAgICB0YWJTZWxlY3RlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RBQiBTRUxFQ1RFRCcpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfVxuXG4gICAgdGFiRGVzZWxlY3RlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RBQiBERVNFTEVDVEVEJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9XG59XG4iXX0=

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Typography = undefined;
	
	var _dec, _class;
	
	var _core = __webpack_require__(3);
	
	var _router = __webpack_require__(16);
	
	var _Typography = __webpack_require__(219);
	
	var _Typography2 = _interopRequireDefault(_Typography);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Typography = exports.Typography = (_dec = (0, _core.Component)({
	    selector: 'typography',
	    directives: [_router.ROUTER_DIRECTIVES],
	    template: _Typography2.default
	}), _dec(_class = function Typography() {
	    _classCallCheck(this, Typography);
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdHlwb2dyYXBoeS9UeXBvZ3JhcGh5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7OztJQU9hLFUsV0FBQSxVLFdBTFoscUJBQVU7QUFDUCxjQUFVLFlBREg7QUFFUCxnQkFBWSwyQkFGTDtBQUdQO0FBSE8sQ0FBVixDIiwiZmlsZSI6IlR5cG9ncmFwaHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL1R5cG9ncmFwaHkuaHRtbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndHlwb2dyYXBoeScsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgVHlwb2dyYXBoeSB7XG59XG4iXX0=

/***/ },
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(293)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0; }\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto; }\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible; }\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal; }\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n*, *:after, *:before {\n  box-sizing: border-box; }\n\n/*\n===================\n    Color Maps\n===================\n*/\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0deg);\n    transform: rotateZ(0deg); }\n  75% {\n    -webkit-transform: rotateZ(200deg);\n    transform: rotateZ(200deg); }\n  100% {\n    -webkit-transform: rotateZ(180deg);\n    transform: rotateZ(180deg); } }\n\n@-webkit-keyframes half-rotate {\n  0% {\n    -webkit-transform: rotateZ(45deg);\n    transform: rotateZ(45deg); }\n  75% {\n    -webkit-transform: rotateZ(100deg);\n    transform: rotateZ(100deg); }\n  100% {\n    -webkit-transform: rotateZ(90deg);\n    transform: rotateZ(90deg); } }\n\n@keyframes half-rotate {\n  0% {\n    -webkit-transform: rotateZ(45deg);\n    transform: rotateZ(45deg); }\n  75% {\n    -webkit-transform: rotateZ(100deg);\n    transform: rotateZ(100deg); }\n  100% {\n    -webkit-transform: rotateZ(90deg);\n    transform: rotateZ(90deg); } }\n\n@-webkit-keyframes rotateBack {\n  0% {\n    -webkit-transform: rotateZ(90deg);\n    transform: rotateZ(90deg); }\n  100% {\n    -webkit-transform: rotateZ(0deg);\n    transform: rotateZ(0deg); } }\n\n@keyframes rotateBack {\n  0% {\n    -webkit-transform: rotateZ(90deg);\n    transform: rotateZ(90deg); }\n  100% {\n    -webkit-transform: rotateZ(0deg);\n    transform: rotateZ(0deg); } }\n\n@-webkit-keyframes show {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%); }\n  75% {\n    -webkit-transform: translateX(0px);\n    transform: translateX(0px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n@keyframes show {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%); }\n  75% {\n    -webkit-transform: translateX(0px);\n    transform: translateX(0px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n/**\n * Flex Grid -\n * Version: 0.3.2\n *\n * Simple grid built with flex box and sass.\n *\n * Matthew Simo - matthew.a.simo@gmail.com\n */\n/**\n * Grid setup\n *\n * The grid will calculate dimensions based on these two variables:\n * $fg-columns will inform the grid loops how many columns there should be.\n * $fg-gutter will inform the grid loops how big eac column's gutters should be.\n *\n * The grid will name columns, rows, offsets based on these three variables:\n * $fg-class-row string used for the row class\n * $fg-class-col string used for the column class\n * $fg-class-off string used for the offset class\n */\n/**\n * Break point namespace object\n *\n * Set the default namespace object with these defaults with the\n * understanding that you can pass in whatever you might require for your site.\n *\n * $fg-breakpoints is a Sass list with nested lists inside. Each sub list defines two things.\n * 1. The namespace for that breakpoint. (Required) (i.e. xs, sm, md, lg)\n * 2. The min-width measurement for the breakpoint for that namespace. (i.e. 48em, 62em, 75em)\n *\n * Note: These should be in the proper order (at least till libsass handles map keys properly).\n *\n * Note: If the measurement is left out then it will be skipped when generating\n * the grid and applied to global styles.\n *\n */\n/**\n * Class Name Defaults\n *\n * Define class names for columns, rows and offsets in case compatibility with other\n * libraries is necessary.\n\n/**\n * Calculate column size percentage\n */\n/**\n * Spacing mixin to create uniform margin/padding\n */\n/**\n * Row wrapper class, flex box parent.\n */\n.row {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-left: -0.5rem;\n  margin-right: -0.5rem; }\n\n.col-xs, .col-sm, .col-md, .col-lg, .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-flex: 0;\n  -webkit-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem; }\n\n.col-xs, .col-sm, .col-md, .col-lg {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -webkit-flex-basis: 0;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  max-width: 100%; }\n\n/**\n * Generate a set of grid column classes using a namespace\n *\n * .col-[namespace] for intelligent column division\n * .col-[namespace]-[number] for a column that covers a specific number of columns (e.g. 1-12 by default)\n * .off-[namespace]-[number] for pushing a col a specific number of columns (e.g. 1-11 by default)\n */\n/**\n * Build the grid in two steps, to help minimize file size\n * Step 1, for each namespace, create the grid-base\n * Step 2, for each namespace, wrap the col width/offset measurements in their breakpoint media query\n */\n.col-xs-1 {\n  -webkit-flex-basis: 8.33333%;\n  -ms-flex-preferred-size: 8.33333%;\n  flex-basis: 8.33333%;\n  max-width: 8.33333%; }\n\n.col-xs-2 {\n  -webkit-flex-basis: 16.66667%;\n  -ms-flex-preferred-size: 16.66667%;\n  flex-basis: 16.66667%;\n  max-width: 16.66667%; }\n\n.col-xs-3 {\n  -webkit-flex-basis: 25%;\n  -ms-flex-preferred-size: 25%;\n  flex-basis: 25%;\n  max-width: 25%; }\n\n.col-xs-4 {\n  -webkit-flex-basis: 33.33333%;\n  -ms-flex-preferred-size: 33.33333%;\n  flex-basis: 33.33333%;\n  max-width: 33.33333%; }\n\n.col-xs-5 {\n  -webkit-flex-basis: 41.66667%;\n  -ms-flex-preferred-size: 41.66667%;\n  flex-basis: 41.66667%;\n  max-width: 41.66667%; }\n\n.col-xs-6 {\n  -webkit-flex-basis: 50%;\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%;\n  max-width: 50%; }\n\n.col-xs-7 {\n  -webkit-flex-basis: 58.33333%;\n  -ms-flex-preferred-size: 58.33333%;\n  flex-basis: 58.33333%;\n  max-width: 58.33333%; }\n\n.col-xs-8 {\n  -webkit-flex-basis: 66.66667%;\n  -ms-flex-preferred-size: 66.66667%;\n  flex-basis: 66.66667%;\n  max-width: 66.66667%; }\n\n.col-xs-9 {\n  -webkit-flex-basis: 75%;\n  -ms-flex-preferred-size: 75%;\n  flex-basis: 75%;\n  max-width: 75%; }\n\n.col-xs-10 {\n  -webkit-flex-basis: 83.33333%;\n  -ms-flex-preferred-size: 83.33333%;\n  flex-basis: 83.33333%;\n  max-width: 83.33333%; }\n\n.col-xs-11 {\n  -webkit-flex-basis: 91.66667%;\n  -ms-flex-preferred-size: 91.66667%;\n  flex-basis: 91.66667%;\n  max-width: 91.66667%; }\n\n.col-xs-12 {\n  -webkit-flex-basis: 100%;\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  max-width: 100%; }\n\n.off-xs-1 {\n  margin-left: 8.33333%; }\n\n.off-xs-2 {\n  margin-left: 16.66667%; }\n\n.off-xs-3 {\n  margin-left: 25%; }\n\n.off-xs-4 {\n  margin-left: 33.33333%; }\n\n.off-xs-5 {\n  margin-left: 41.66667%; }\n\n.off-xs-6 {\n  margin-left: 50%; }\n\n.off-xs-7 {\n  margin-left: 58.33333%; }\n\n.off-xs-8 {\n  margin-left: 66.66667%; }\n\n.off-xs-9 {\n  margin-left: 75%; }\n\n.off-xs-10 {\n  margin-left: 83.33333%; }\n\n.off-xs-11 {\n  margin-left: 91.66667%; }\n\n@media only screen and (min-width: 768px) {\n  .col-sm-1 {\n    -webkit-flex-basis: 8.33333%;\n    -ms-flex-preferred-size: 8.33333%;\n    flex-basis: 8.33333%;\n    max-width: 8.33333%; }\n  .col-sm-2 {\n    -webkit-flex-basis: 16.66667%;\n    -ms-flex-preferred-size: 16.66667%;\n    flex-basis: 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-3 {\n    -webkit-flex-basis: 25%;\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -webkit-flex-basis: 33.33333%;\n    -ms-flex-preferred-size: 33.33333%;\n    flex-basis: 33.33333%;\n    max-width: 33.33333%; }\n  .col-sm-5 {\n    -webkit-flex-basis: 41.66667%;\n    -ms-flex-preferred-size: 41.66667%;\n    flex-basis: 41.66667%;\n    max-width: 41.66667%; }\n  .col-sm-6 {\n    -webkit-flex-basis: 50%;\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -webkit-flex-basis: 58.33333%;\n    -ms-flex-preferred-size: 58.33333%;\n    flex-basis: 58.33333%;\n    max-width: 58.33333%; }\n  .col-sm-8 {\n    -webkit-flex-basis: 66.66667%;\n    -ms-flex-preferred-size: 66.66667%;\n    flex-basis: 66.66667%;\n    max-width: 66.66667%; }\n  .col-sm-9 {\n    -webkit-flex-basis: 75%;\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -webkit-flex-basis: 83.33333%;\n    -ms-flex-preferred-size: 83.33333%;\n    flex-basis: 83.33333%;\n    max-width: 83.33333%; }\n  .col-sm-11 {\n    -webkit-flex-basis: 91.66667%;\n    -ms-flex-preferred-size: 91.66667%;\n    flex-basis: 91.66667%;\n    max-width: 91.66667%; }\n  .col-sm-12 {\n    -webkit-flex-basis: 100%;\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%; }\n  .off-sm-1 {\n    margin-left: 8.33333%; }\n  .off-sm-2 {\n    margin-left: 16.66667%; }\n  .off-sm-3 {\n    margin-left: 25%; }\n  .off-sm-4 {\n    margin-left: 33.33333%; }\n  .off-sm-5 {\n    margin-left: 41.66667%; }\n  .off-sm-6 {\n    margin-left: 50%; }\n  .off-sm-7 {\n    margin-left: 58.33333%; }\n  .off-sm-8 {\n    margin-left: 66.66667%; }\n  .off-sm-9 {\n    margin-left: 75%; }\n  .off-sm-10 {\n    margin-left: 83.33333%; }\n  .off-sm-11 {\n    margin-left: 91.66667%; } }\n\n@media only screen and (min-width: 992px) {\n  .col-md-1 {\n    -webkit-flex-basis: 8.33333%;\n    -ms-flex-preferred-size: 8.33333%;\n    flex-basis: 8.33333%;\n    max-width: 8.33333%; }\n  .col-md-2 {\n    -webkit-flex-basis: 16.66667%;\n    -ms-flex-preferred-size: 16.66667%;\n    flex-basis: 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-3 {\n    -webkit-flex-basis: 25%;\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    -webkit-flex-basis: 33.33333%;\n    -ms-flex-preferred-size: 33.33333%;\n    flex-basis: 33.33333%;\n    max-width: 33.33333%; }\n  .col-md-5 {\n    -webkit-flex-basis: 41.66667%;\n    -ms-flex-preferred-size: 41.66667%;\n    flex-basis: 41.66667%;\n    max-width: 41.66667%; }\n  .col-md-6 {\n    -webkit-flex-basis: 50%;\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    -webkit-flex-basis: 58.33333%;\n    -ms-flex-preferred-size: 58.33333%;\n    flex-basis: 58.33333%;\n    max-width: 58.33333%; }\n  .col-md-8 {\n    -webkit-flex-basis: 66.66667%;\n    -ms-flex-preferred-size: 66.66667%;\n    flex-basis: 66.66667%;\n    max-width: 66.66667%; }\n  .col-md-9 {\n    -webkit-flex-basis: 75%;\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    -webkit-flex-basis: 83.33333%;\n    -ms-flex-preferred-size: 83.33333%;\n    flex-basis: 83.33333%;\n    max-width: 83.33333%; }\n  .col-md-11 {\n    -webkit-flex-basis: 91.66667%;\n    -ms-flex-preferred-size: 91.66667%;\n    flex-basis: 91.66667%;\n    max-width: 91.66667%; }\n  .col-md-12 {\n    -webkit-flex-basis: 100%;\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%; }\n  .off-md-1 {\n    margin-left: 8.33333%; }\n  .off-md-2 {\n    margin-left: 16.66667%; }\n  .off-md-3 {\n    margin-left: 25%; }\n  .off-md-4 {\n    margin-left: 33.33333%; }\n  .off-md-5 {\n    margin-left: 41.66667%; }\n  .off-md-6 {\n    margin-left: 50%; }\n  .off-md-7 {\n    margin-left: 58.33333%; }\n  .off-md-8 {\n    margin-left: 66.66667%; }\n  .off-md-9 {\n    margin-left: 75%; }\n  .off-md-10 {\n    margin-left: 83.33333%; }\n  .off-md-11 {\n    margin-left: 91.66667%; } }\n\n@media only screen and (min-width: 1200px) {\n  .col-lg-1 {\n    -webkit-flex-basis: 8.33333%;\n    -ms-flex-preferred-size: 8.33333%;\n    flex-basis: 8.33333%;\n    max-width: 8.33333%; }\n  .col-lg-2 {\n    -webkit-flex-basis: 16.66667%;\n    -ms-flex-preferred-size: 16.66667%;\n    flex-basis: 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-3 {\n    -webkit-flex-basis: 25%;\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -webkit-flex-basis: 33.33333%;\n    -ms-flex-preferred-size: 33.33333%;\n    flex-basis: 33.33333%;\n    max-width: 33.33333%; }\n  .col-lg-5 {\n    -webkit-flex-basis: 41.66667%;\n    -ms-flex-preferred-size: 41.66667%;\n    flex-basis: 41.66667%;\n    max-width: 41.66667%; }\n  .col-lg-6 {\n    -webkit-flex-basis: 50%;\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -webkit-flex-basis: 58.33333%;\n    -ms-flex-preferred-size: 58.33333%;\n    flex-basis: 58.33333%;\n    max-width: 58.33333%; }\n  .col-lg-8 {\n    -webkit-flex-basis: 66.66667%;\n    -ms-flex-preferred-size: 66.66667%;\n    flex-basis: 66.66667%;\n    max-width: 66.66667%; }\n  .col-lg-9 {\n    -webkit-flex-basis: 75%;\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -webkit-flex-basis: 83.33333%;\n    -ms-flex-preferred-size: 83.33333%;\n    flex-basis: 83.33333%;\n    max-width: 83.33333%; }\n  .col-lg-11 {\n    -webkit-flex-basis: 91.66667%;\n    -ms-flex-preferred-size: 91.66667%;\n    flex-basis: 91.66667%;\n    max-width: 91.66667%; }\n  .col-lg-12 {\n    -webkit-flex-basis: 100%;\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%; }\n  .off-lg-1 {\n    margin-left: 8.33333%; }\n  .off-lg-2 {\n    margin-left: 16.66667%; }\n  .off-lg-3 {\n    margin-left: 25%; }\n  .off-lg-4 {\n    margin-left: 33.33333%; }\n  .off-lg-5 {\n    margin-left: 41.66667%; }\n  .off-lg-6 {\n    margin-left: 50%; }\n  .off-lg-7 {\n    margin-left: 58.33333%; }\n  .off-lg-8 {\n    margin-left: 66.66667%; }\n  .off-lg-9 {\n    margin-left: 75%; }\n  .off-lg-10 {\n    margin-left: 83.33333%; }\n  .off-lg-11 {\n    margin-left: 91.66667%; } }\n\nhtml {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  color: #3D464D; }\n\nh1 {\n  font-size: 2.5em;\n  font-weight: 400;\n  margin: 0;\n  padding: 0.45em 0 0.35em;\n  max-width: 33em; }\n\nh2 {\n  font-size: 2em;\n  font-weight: 500;\n  margin: 0;\n  padding: 0.75em 0 0.3em;\n  max-width: 33em; }\n\nh3 {\n  font-size: 1.75em;\n  font-weight: 300;\n  margin: 0;\n  padding: 0.6em 0 0.4em;\n  max-width: 33em; }\n\nh4 {\n  font-size: 1.375em;\n  font-weight: 400;\n  margin: 0;\n  padding: 0.75em 0 0.5em;\n  max-width: 33em; }\n\nh5 {\n  font-size: 1.125em;\n  font-weight: 700;\n  margin: 0;\n  padding: 0.75em 0 0.25em;\n  text-transform: uppercase;\n  color: rgba(0, 0, 0, 0.45);\n  max-width: 33em; }\n\nh6 {\n  font-size: 1.125em;\n  font-weight: 500;\n  margin: 0;\n  padding: 0.75em 0 0.25em;\n  max-width: 33em; }\n\np {\n  font-size: 1rem;\n  line-height: 1.7rem;\n  margin: 0;\n  padding: 0.25rem 0 0.55rem;\n  max-width: 33em; }\n\n.caption {\n  font-size: 1.125em;\n  font-weight: 700;\n  max-width: 33em;\n  text-transform: uppercase;\n  opacity: 0.55;\n  letter-spacing: 0.1px; }\n\ni {\n  font-size: 1.4em;\n  display: inline-block; }\n  i[theme][theme=\"contained\"] {\n    font-size: 0.8em;\n    border-radius: 0.55em;\n    height: 1.7em;\n    width: 1.7em;\n    text-align: center; }\n    i[theme][theme=\"contained\"]:before {\n      vertical-align: baseline;\n      line-height: 1.8; }\n    i[theme][theme=\"contained\"].company {\n      color: #ffffff;\n      background: #3399DD; }\n    i[theme][theme=\"contained\"].candidate {\n      color: #ffffff;\n      background: #44BB77; }\n    i[theme][theme=\"contained\"].navigation {\n      color: #ffffff;\n      background: #2F384F; }\n    i[theme][theme=\"contained\"].lead {\n      color: #ffffff;\n      background: #AA6699; }\n    i[theme][theme=\"contained\"].contact {\n      color: #ffffff;\n      background: #FFAA44; }\n    i[theme][theme=\"contained\"].opportunity {\n      color: #ffffff;\n      background: #662255; }\n    i[theme][theme=\"contained\"].job {\n      color: #ffffff;\n      background: #BB5566; }\n    i[theme][theme=\"contained\"].submission {\n      color: #ffffff;\n      background: #778899; }\n    i[theme][theme=\"contained\"].placement {\n      color: #ffffff;\n      background: #0B344F; }\n    i[theme][theme=\"contained\"].aqua {\n      color: #ffffff;\n      background: #3BAFDA; }\n    i[theme][theme=\"contained\"].ocean {\n      color: #ffffff;\n      background: #4A89DC; }\n    i[theme][theme=\"contained\"].mint {\n      color: #ffffff;\n      background: #37BC9B; }\n    i[theme][theme=\"contained\"].grass {\n      color: #ffffff;\n      background: #8CC152; }\n    i[theme][theme=\"contained\"].sunflower {\n      color: #ffffff;\n      background: #F6B042; }\n    i[theme][theme=\"contained\"].bittersweet {\n      color: #ffffff;\n      background: #EB6845; }\n    i[theme][theme=\"contained\"].grapefruit {\n      color: #ffffff;\n      background: #DA4453; }\n    i[theme][theme=\"contained\"].carnation {\n      color: #ffffff;\n      background: #D770AD; }\n    i[theme][theme=\"contained\"].lavender {\n      color: #ffffff;\n      background: #967ADC; }\n  i[theme][theme=\"entity\"].company {\n    color: #3399DD;\n    background: transparent; }\n  i[theme][theme=\"entity\"].candidate {\n    color: #44BB77;\n    background: transparent; }\n  i[theme][theme=\"entity\"].navigation {\n    color: #2F384F;\n    background: transparent; }\n  i[theme][theme=\"entity\"].lead {\n    color: #AA6699;\n    background: transparent; }\n  i[theme][theme=\"entity\"].contact {\n    color: #FFAA44;\n    background: transparent; }\n  i[theme][theme=\"entity\"].opportunity {\n    color: #662255;\n    background: transparent; }\n  i[theme][theme=\"entity\"].job {\n    color: #BB5566;\n    background: transparent; }\n  i[theme][theme=\"entity\"].submission {\n    color: #778899;\n    background: transparent; }\n  i[theme][theme=\"entity\"].placement {\n    color: #0B344F;\n    background: transparent; }\n\nh1 i,\nh2 i,\nh3 i,\nh4 i,\nh5 i,\nh6 i,\np i,\nspan i,\nfigcaption i {\n  margin: 0 0.45em 0 0;\n  padding: 0; }\n  h1 i:before,\n  h2 i:before,\n  h3 i:before,\n  h4 i:before,\n  h5 i:before,\n  h6 i:before,\n  p i:before,\n  span i:before,\n  figcaption i:before {\n    vertical-align: middle !important; }\n  h1 i[theme][theme=\"contained\"],\n  h2 i[theme][theme=\"contained\"],\n  h3 i[theme][theme=\"contained\"],\n  h4 i[theme][theme=\"contained\"],\n  h5 i[theme][theme=\"contained\"],\n  h6 i[theme][theme=\"contained\"],\n  p i[theme][theme=\"contained\"],\n  span i[theme][theme=\"contained\"],\n  figcaption i[theme][theme=\"contained\"] {\n    font-size: 0.8em;\n    vertical-align: 0.1em; }\n    h1 i[theme][theme=\"contained\"]:before,\n    h2 i[theme][theme=\"contained\"]:before,\n    h3 i[theme][theme=\"contained\"]:before,\n    h4 i[theme][theme=\"contained\"]:before,\n    h5 i[theme][theme=\"contained\"]:before,\n    h6 i[theme][theme=\"contained\"]:before,\n    p i[theme][theme=\"contained\"]:before,\n    span i[theme][theme=\"contained\"]:before,\n    figcaption i[theme][theme=\"contained\"]:before {\n      vertical-align: baseline;\n      line-height: 1.7em;\n      display: block; }\n\na {\n  color: #4A89DC;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out; }\n  a:visited {\n    color: #4A89DC; }\n  a:hover, a:active {\n    color: #276ecc; }\n\ncode {\n  font-size: 0.8em;\n  background: #F8F8F8;\n  border: 1px solid #E9EAEA;\n  color: #4C545A;\n  padding: 2px 4px; }\n\nnovo-nav {\n  background: rgba(0, 0, 0, 0.15);\n  padding: 0;\n  list-style: none;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n  -webkit-align-items: baseline;\n  -ms-flex-align: baseline;\n  align-items: baseline;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  margin: 0; }\n  novo-nav novo-tab,\n  novo-nav novo-tab-link {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center; }\n    novo-nav novo-tab .novo-tab-link,\n    novo-nav novo-tab-link .novo-tab-link {\n      padding: 10px 20px;\n      color: #fff;\n      opacity: 0.65;\n      font-weight: 400;\n      cursor: pointer;\n      text-transform: uppercase; }\n    novo-nav novo-tab .indicator,\n    novo-nav novo-tab-link .indicator {\n      width: 0;\n      height: 2px;\n      display: block;\n      background: transparent;\n      -webkit-transition: all 220ms ease-in-out;\n      transition: all 220ms ease-in-out; }\n    novo-nav novo-tab.active .novo-tab-link, novo-nav novo-tab.router-link-active .novo-tab-link,\n    novo-nav novo-tab-link.active .novo-tab-link,\n    novo-nav novo-tab-link.router-link-active .novo-tab-link {\n      opacity: 1; }\n    novo-nav novo-tab.active .indicator, novo-nav novo-tab.router-link-active .indicator,\n    novo-nav novo-tab-link.active .indicator,\n    novo-nav novo-tab-link.router-link-active .indicator {\n      background: #fff;\n      width: 100%; }\n    novo-nav novo-tab:hover .novo-tab-link,\n    novo-nav novo-tab-link:hover .novo-tab-link {\n      opacity: 1; }\n  novo-nav[type=\"button-bar\"] {\n    display: -webkit-inline-box;\n    display: -webkit-inline-flex;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    border-radius: 3px;\n    border: 2px solid #fff; }\n    novo-nav[type=\"button-bar\"] novo-tab-button {\n      padding: 15px 20px;\n      cursor: pointer;\n      -webkit-transition: all 120ms ease-in-out;\n      transition: all 120ms ease-in-out; }\n  novo-nav[theme=\"color\"] {\n    background: rgba(0, 0, 0, 0.2); }\n    novo-nav[theme=\"color\"] novo-tab .novo-tab-link,\n    novo-nav[theme=\"color\"] novo-tab-link .novo-tab-link {\n      color: #fff; }\n    novo-nav[theme=\"color\"] novo-tab.active .indicator, novo-nav[theme=\"color\"] novo-tab.router-link-active .indicator,\n    novo-nav[theme=\"color\"] novo-tab-link.active .indicator,\n    novo-nav[theme=\"color\"] novo-tab-link.router-link-active .indicator {\n      background: #fff; }\n    novo-nav[theme=\"color\"][type=\"button-bar\"] {\n      border: 2px solid #fff; }\n      novo-nav[theme=\"color\"][type=\"button-bar\"] novo-tab-button {\n        color: rgba(255, 255, 255, 0.75); }\n        novo-nav[theme=\"color\"][type=\"button-bar\"] novo-tab-button.active {\n          color: #fff;\n          background: rgba(0, 0, 0, 0.2); }\n        novo-nav[theme=\"color\"][type=\"button-bar\"] novo-tab-button:hover {\n          background: rgba(0, 0, 0, 0.1); }\n  novo-nav[theme=\"white\"] {\n    background: rgba(0, 0, 0, 0.03); }\n    novo-nav[theme=\"white\"][direction=\"vertical\"] {\n      background: transparent; }\n    novo-nav[theme=\"white\"] novo-tab .novo-tab-link,\n    novo-nav[theme=\"white\"] novo-tab-link .novo-tab-link {\n      color: #3D464D;\n      opacity: 0.75; }\n    novo-nav[theme=\"white\"] novo-tab.active, novo-nav[theme=\"white\"] novo-tab.router-link-active,\n    novo-nav[theme=\"white\"] novo-tab-link.active,\n    novo-nav[theme=\"white\"] novo-tab-link.router-link-active {\n      color: #4A89DC; }\n      novo-nav[theme=\"white\"] novo-tab.active .novo-tab-link, novo-nav[theme=\"white\"] novo-tab.router-link-active .novo-tab-link,\n      novo-nav[theme=\"white\"] novo-tab-link.active .novo-tab-link,\n      novo-nav[theme=\"white\"] novo-tab-link.router-link-active .novo-tab-link {\n        color: #4A89DC;\n        opacity: 1; }\n      novo-nav[theme=\"white\"] novo-tab.active .indicator, novo-nav[theme=\"white\"] novo-tab.router-link-active .indicator,\n      novo-nav[theme=\"white\"] novo-tab-link.active .indicator,\n      novo-nav[theme=\"white\"] novo-tab-link.router-link-active .indicator {\n        background: #4A89DC; }\n    novo-nav[theme=\"white\"][type=\"button-bar\"] {\n      border: 2px solid #D9DADC; }\n      novo-nav[theme=\"white\"][type=\"button-bar\"] novo-tab-button {\n        color: #3D464D;\n        opacity: 0.75; }\n        novo-nav[theme=\"white\"][type=\"button-bar\"] novo-tab-button.active {\n          color: #4A89DC;\n          background: rgba(0, 0, 0, 0.05);\n          opacity: 1; }\n        novo-nav[theme=\"white\"][type=\"button-bar\"] novo-tab-button:hover {\n          opacity: 1; }\n  novo-nav[direction=\"vertical\"] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    width: auto; }\n    novo-nav[direction=\"vertical\"] novo-tab,\n    novo-nav[direction=\"vertical\"] novo-tab-link {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      width: 100%;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n      flex-direction: row;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n      -ms-flex-align: center;\n      align-items: center;\n      height: 50px;\n      min-width: 150px;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n      justify-content: space-between;\n      border-left: 2px solid #D9DADC;\n      border-right: 2px solid #D9DADC;\n      -webkit-transition: all 120ms ease-in-out;\n      transition: all 120ms ease-in-out; }\n      novo-nav[direction=\"vertical\"] novo-tab:first-of-type,\n      novo-nav[direction=\"vertical\"] novo-tab-link:first-of-type {\n        border-top-right-radius: 3px;\n        border-top-left-radius: 3px;\n        border-top: 2px solid #D9DADC; }\n      novo-nav[direction=\"vertical\"] novo-tab:last-of-type,\n      novo-nav[direction=\"vertical\"] novo-tab-link:last-of-type {\n        border-bottom-right-radius: 3px;\n        border-bottom-left-radius: 3px;\n        border-bottom: 2px solid #D9DADC; }\n      novo-nav[direction=\"vertical\"] novo-tab .novo-tab-link,\n      novo-nav[direction=\"vertical\"] novo-tab-link .novo-tab-link {\n        -webkit-box-flex: 1;\n        -webkit-flex: 1;\n        -ms-flex: 1;\n        flex: 1;\n        width: 100%;\n        display: block;\n        max-width: 90%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        opacity: 0.75; }\n      novo-nav[direction=\"vertical\"] novo-tab .indicator,\n      novo-nav[direction=\"vertical\"] novo-tab-link .indicator {\n        width: 2px;\n        height: 0;\n        display: block;\n        background: transparent;\n        -webkit-transition: all 220ms ease-in-out;\n        transition: all 220ms ease-in-out; }\n      novo-nav[direction=\"vertical\"] novo-tab.active, novo-nav[direction=\"vertical\"] novo-tab.router-link-active,\n      novo-nav[direction=\"vertical\"] novo-tab-link.active,\n      novo-nav[direction=\"vertical\"] novo-tab-link.router-link-active {\n        background: rgba(0, 0, 0, 0.05); }\n        novo-nav[direction=\"vertical\"] novo-tab.active .novo-tab-link, novo-nav[direction=\"vertical\"] novo-tab.router-link-active .novo-tab-link,\n        novo-nav[direction=\"vertical\"] novo-tab-link.active .novo-tab-link,\n        novo-nav[direction=\"vertical\"] novo-tab-link.router-link-active .novo-tab-link {\n          opacity: 1; }\n        novo-nav[direction=\"vertical\"] novo-tab.active .indicator, novo-nav[direction=\"vertical\"] novo-tab.router-link-active .indicator,\n        novo-nav[direction=\"vertical\"] novo-tab-link.active .indicator,\n        novo-nav[direction=\"vertical\"] novo-tab-link.router-link-active .indicator {\n          height: 100%; }\n      novo-nav[direction=\"vertical\"] novo-tab:hover .novo-tab-link,\n      novo-nav[direction=\"vertical\"] novo-tab-link:hover .novo-tab-link {\n        opacity: 1; }\n  novo-nav[router] novo-tab-link.active:not(.router-link-active) {\n    opacity: 0.65; }\n    novo-nav[router] novo-tab-link.active:not(.router-link-active) .indicator {\n      background: inherit;\n      width: inherit; }\n\nnovo-nav-outlet {\n  display: block; }\n  novo-nav-outlet novo-nav-header {\n    display: block;\n    padding: 8px;\n    border: 1px solid #333;\n    margin: 8px; }\n  novo-nav-outlet novo-nav-content {\n    display: none; }\n    novo-nav-outlet novo-nav-content.active {\n      display: block; }\n\nbutton[theme] {\n  font-size: 1rem;\n  border: none;\n  background: transparent;\n  border-radius: 3px;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out; }\n  button[theme] div.flex-wrapper {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    width: 100%;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center; }\n  button[theme] i {\n    font-size: 1em; }\n  button[theme]:focus {\n    outline: none; }\n  button[theme][disabled] {\n    opacity: 0.5;\n    cursor: not-allowed;\n    pointer-events: none; }\n  button[theme][theme=\"primary\"] {\n    background: #4A89DC;\n    color: #fff;\n    min-width: 120px;\n    text-align: left; }\n    button[theme][theme=\"primary\"] .flex-wrapper {\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n      justify-content: space-between; }\n    button[theme][theme=\"primary\"][icon] {\n      padding: 5px 5px 5px 15px; }\n      button[theme][theme=\"primary\"][icon] i {\n        background: rgba(0, 0, 0, 0.15);\n        padding: 5px;\n        border-radius: 50%;\n        height: 25px;\n        width: 25px;\n        display: inline-block;\n        margin-left: 10px;\n        line-height: 16px; }\n        button[theme][theme=\"primary\"][icon] i:before {\n          vertical-align: baseline; }\n      button[theme][theme=\"primary\"][icon][icon=\"send\"] i:before {\n        margin-top: 1px;\n        margin-left: -2px; }\n    button[theme][theme=\"primary\"]:hover {\n      background: #75a5e4; }\n    button[theme][theme=\"primary\"]:focus {\n      background: #357bd8; }\n    button[theme][theme=\"primary\"][color=\"positive\"] {\n      background: #4A89DC; }\n      button[theme][theme=\"primary\"][color=\"positive\"]:hover {\n        background: #75a5e4; }\n      button[theme][theme=\"primary\"][color=\"positive\"]:focus {\n        background: #357bd8; }\n    button[theme][theme=\"primary\"][color=\"success\"] {\n      background: #8CC152; }\n      button[theme][theme=\"primary\"][color=\"success\"]:hover {\n        background: #a5ce78; }\n      button[theme][theme=\"primary\"][color=\"success\"]:focus {\n        background: #7fb842; }\n    button[theme][theme=\"primary\"][color=\"negative\"] {\n      background: #DA4453; }\n      button[theme][theme=\"primary\"][color=\"negative\"]:hover {\n        background: #e26f7a; }\n      button[theme][theme=\"primary\"][color=\"negative\"]:focus {\n        background: #d62f3f; }\n    button[theme][theme=\"primary\"][color=\"warning\"] {\n      background: #F6B042; }\n      button[theme][theme=\"primary\"][color=\"warning\"]:hover {\n        background: #f8c473; }\n      button[theme][theme=\"primary\"][color=\"warning\"]:focus {\n        background: #f5a62a; }\n    button[theme][theme=\"primary\"][color=\"background\"] {\n      background: #f4f4f4; }\n      button[theme][theme=\"primary\"][color=\"background\"]:hover {\n        background: white; }\n      button[theme][theme=\"primary\"][color=\"background\"]:focus {\n        background: #e7e7e7; }\n    button[theme][theme=\"primary\"][color=\"black\"] {\n      background: #000000; }\n      button[theme][theme=\"primary\"][color=\"black\"]:hover {\n        background: #1a1a1a; }\n      button[theme][theme=\"primary\"][color=\"black\"]:focus {\n        background: black; }\n    button[theme][theme=\"primary\"][color=\"white\"] {\n      background: #ffffff; }\n      button[theme][theme=\"primary\"][color=\"white\"]:hover {\n        background: white; }\n      button[theme][theme=\"primary\"][color=\"white\"]:focus {\n        background: #f2f2f2; }\n    button[theme][theme=\"primary\"][color=\"grey\"] {\n      background: #999999; }\n      button[theme][theme=\"primary\"][color=\"grey\"]:hover {\n        background: #b3b3b3; }\n      button[theme][theme=\"primary\"][color=\"grey\"]:focus {\n        background: #8c8c8c; }\n    button[theme][theme=\"primary\"][color=\"off-white\"] {\n      background: #f4f4f4; }\n      button[theme][theme=\"primary\"][color=\"off-white\"]:hover {\n        background: white; }\n      button[theme][theme=\"primary\"][color=\"off-white\"]:focus {\n        background: #e7e7e7; }\n    button[theme][theme=\"primary\"][color=\"dark\"] {\n      background: #3D464D; }\n      button[theme][theme=\"primary\"][color=\"dark\"]:hover {\n        background: #546069; }\n      button[theme][theme=\"primary\"][color=\"dark\"]:focus {\n        background: #32393f; }\n    button[theme][theme=\"primary\"][color=\"light\"] {\n      background: #D9DADC; }\n      button[theme][theme=\"primary\"][color=\"light\"]:hover {\n        background: #f4f4f4; }\n      button[theme][theme=\"primary\"][color=\"light\"]:focus {\n        background: #cccdd0; }\n    button[theme][theme=\"primary\"][color=\"pulse\"] {\n      background: #3BAFDA; }\n      button[theme][theme=\"primary\"][color=\"pulse\"]:hover {\n        background: #66c1e2; }\n      button[theme][theme=\"primary\"][color=\"pulse\"]:focus {\n        background: #28a5d4; }\n    button[theme][theme=\"primary\"][color=\"white\"] {\n      background: #ffffff;\n      color: #4A89DC; }\n      button[theme][theme=\"primary\"][color=\"white\"]:hover {\n        background: #f4f4f4; }\n      button[theme][theme=\"primary\"][color=\"white\"]:focus {\n        background: #e7e7e7; }\n      button[theme][theme=\"primary\"][color=\"white\"] i {\n        background: rgba(0, 0, 0, 0.05); }\n    button[theme][theme=\"primary\"][color=\"aqua\"] {\n      background: #3BAFDA; }\n      button[theme][theme=\"primary\"][color=\"aqua\"]:hover {\n        background: #66c1e2; }\n      button[theme][theme=\"primary\"][color=\"aqua\"]:focus {\n        background: #28a5d4; }\n    button[theme][theme=\"primary\"][color=\"ocean\"] {\n      background: #4A89DC; }\n      button[theme][theme=\"primary\"][color=\"ocean\"]:hover {\n        background: #75a5e4; }\n      button[theme][theme=\"primary\"][color=\"ocean\"]:focus {\n        background: #357bd8; }\n    button[theme][theme=\"primary\"][color=\"mint\"] {\n      background: #37BC9B; }\n      button[theme][theme=\"primary\"][color=\"mint\"]:hover {\n        background: #58ceb1; }\n      button[theme][theme=\"primary\"][color=\"mint\"]:focus {\n        background: #31a88b; }\n    button[theme][theme=\"primary\"][color=\"grass\"] {\n      background: #8CC152; }\n      button[theme][theme=\"primary\"][color=\"grass\"]:hover {\n        background: #a5ce78; }\n      button[theme][theme=\"primary\"][color=\"grass\"]:focus {\n        background: #7fb842; }\n    button[theme][theme=\"primary\"][color=\"sunflower\"] {\n      background: #F6B042; }\n      button[theme][theme=\"primary\"][color=\"sunflower\"]:hover {\n        background: #f8c473; }\n      button[theme][theme=\"primary\"][color=\"sunflower\"]:focus {\n        background: #f5a62a; }\n    button[theme][theme=\"primary\"][color=\"bittersweet\"] {\n      background: #EB6845; }\n      button[theme][theme=\"primary\"][color=\"bittersweet\"]:hover {\n        background: #f08d73; }\n      button[theme][theme=\"primary\"][color=\"bittersweet\"]:focus {\n        background: #e9552e; }\n    button[theme][theme=\"primary\"][color=\"grapefruit\"] {\n      background: #DA4453; }\n      button[theme][theme=\"primary\"][color=\"grapefruit\"]:hover {\n        background: #e26f7a; }\n      button[theme][theme=\"primary\"][color=\"grapefruit\"]:focus {\n        background: #d62f3f; }\n    button[theme][theme=\"primary\"][color=\"carnation\"] {\n      background: #D770AD; }\n      button[theme][theme=\"primary\"][color=\"carnation\"]:hover {\n        background: #e298c4; }\n      button[theme][theme=\"primary\"][color=\"carnation\"]:focus {\n        background: #d15ca2; }\n    button[theme][theme=\"primary\"][color=\"lavender\"] {\n      background: #967ADC; }\n      button[theme][theme=\"primary\"][color=\"lavender\"]:hover {\n        background: #b6a2e7; }\n      button[theme][theme=\"primary\"][color=\"lavender\"]:focus {\n        background: #8666d7; }\n  button[theme][theme=\"secondary\"] {\n    min-width: 110px;\n    text-align: left;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    -ms-grid-row-align: center;\n    align-items: center;\n    background: #fff;\n    color: #4A89DC;\n    border: 1px solid #4A89DC; }\n    button[theme][theme=\"secondary\"] .flex-wrapper {\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n      justify-content: space-between; }\n    button[theme][theme=\"secondary\"]:hover {\n      box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.15); }\n    button[theme][theme=\"secondary\"]:focus {\n      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n    button[theme][theme=\"secondary\"][inverse] {\n      background: rgba(0, 0, 0, 0.25);\n      color: #fff;\n      border: 1px solid #fff; }\n      button[theme][theme=\"secondary\"][inverse]:hover {\n        background: rgba(0, 0, 0, 0.35); }\n      button[theme][theme=\"secondary\"][inverse]:focus {\n        background: rgba(0, 0, 0, 0.45); }\n    button[theme][theme=\"secondary\"][icon] {\n      padding: 4px 4px 4px 14px; }\n      button[theme][theme=\"secondary\"][icon] i {\n        padding: 5px;\n        border-radius: 50%;\n        height: 25px;\n        width: 25px;\n        display: inline-block;\n        margin-left: 10px;\n        line-height: 16px; }\n        button[theme][theme=\"secondary\"][icon] i:before {\n          vertical-align: baseline; }\n  button[theme][theme=\"dialogue\"] {\n    background: transparent;\n    color: #4A89DC; }\n    button[theme][theme=\"dialogue\"] .flex-wrapper {\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n      -ms-flex-pack: center;\n      justify-content: center; }\n    button[theme][theme=\"dialogue\"][icon] {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n      -ms-flex-align: center;\n      align-items: center;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n      justify-content: space-between; }\n      button[theme][theme=\"dialogue\"][icon] i {\n        padding: 5px;\n        border-radius: 50%;\n        height: 25px;\n        width: 25px;\n        display: inline-block;\n        line-height: 16px; }\n        button[theme][theme=\"dialogue\"][icon] i:before {\n          vertical-align: baseline; }\n      button[theme][theme=\"dialogue\"][icon][side=\"left\"] {\n        padding: 5px 15px 5px 5px; }\n        button[theme][theme=\"dialogue\"][icon][side=\"left\"] i {\n          margin-right: 5px; }\n      button[theme][theme=\"dialogue\"][icon][side=\"right\"] {\n        padding: 5px 5px 5px 15px; }\n        button[theme][theme=\"dialogue\"][icon][side=\"right\"] i {\n          margin-left: 5px; }\n    button[theme][theme=\"dialogue\"]:hover {\n      background: #ececed; }\n    button[theme][theme=\"dialogue\"]:focus {\n      background: #dedfe1; }\n    button[theme][theme=\"dialogue\"][inverse]:hover {\n      background: rgba(0, 0, 0, 0.2); }\n    button[theme][theme=\"dialogue\"][inverse]:focus {\n      background: rgba(0, 0, 0, 0.35); }\n    button[theme][theme=\"dialogue\"][color=\"positive\"] {\n      color: #4A89DC; }\n      button[theme][theme=\"dialogue\"][color=\"positive\"] i {\n        color: #4A89DC; }\n    button[theme][theme=\"dialogue\"][color=\"success\"] {\n      color: #8CC152; }\n      button[theme][theme=\"dialogue\"][color=\"success\"] i {\n        color: #8CC152; }\n    button[theme][theme=\"dialogue\"][color=\"negative\"] {\n      color: #DA4453; }\n      button[theme][theme=\"dialogue\"][color=\"negative\"] i {\n        color: #DA4453; }\n    button[theme][theme=\"dialogue\"][color=\"warning\"] {\n      color: #F6B042; }\n      button[theme][theme=\"dialogue\"][color=\"warning\"] i {\n        color: #F6B042; }\n    button[theme][theme=\"dialogue\"][color=\"background\"] {\n      color: #f4f4f4; }\n      button[theme][theme=\"dialogue\"][color=\"background\"] i {\n        color: #f4f4f4; }\n    button[theme][theme=\"dialogue\"][color=\"black\"] {\n      color: #000000; }\n      button[theme][theme=\"dialogue\"][color=\"black\"] i {\n        color: #000000; }\n    button[theme][theme=\"dialogue\"][color=\"white\"] {\n      color: #ffffff; }\n      button[theme][theme=\"dialogue\"][color=\"white\"] i {\n        color: #ffffff; }\n    button[theme][theme=\"dialogue\"][color=\"grey\"] {\n      color: #999999; }\n      button[theme][theme=\"dialogue\"][color=\"grey\"] i {\n        color: #999999; }\n    button[theme][theme=\"dialogue\"][color=\"off-white\"] {\n      color: #f4f4f4; }\n      button[theme][theme=\"dialogue\"][color=\"off-white\"] i {\n        color: #f4f4f4; }\n    button[theme][theme=\"dialogue\"][color=\"dark\"] {\n      color: #3D464D; }\n      button[theme][theme=\"dialogue\"][color=\"dark\"] i {\n        color: #3D464D; }\n    button[theme][theme=\"dialogue\"][color=\"light\"] {\n      color: #D9DADC; }\n      button[theme][theme=\"dialogue\"][color=\"light\"] i {\n        color: #D9DADC; }\n    button[theme][theme=\"dialogue\"][color=\"pulse\"] {\n      color: #3BAFDA; }\n      button[theme][theme=\"dialogue\"][color=\"pulse\"] i {\n        color: #3BAFDA; }\n    button[theme][theme=\"dialogue\"][color=\"aqua\"] {\n      color: #3BAFDA; }\n      button[theme][theme=\"dialogue\"][color=\"aqua\"] i {\n        color: #3BAFDA; }\n    button[theme][theme=\"dialogue\"][color=\"ocean\"] {\n      color: #4A89DC; }\n      button[theme][theme=\"dialogue\"][color=\"ocean\"] i {\n        color: #4A89DC; }\n    button[theme][theme=\"dialogue\"][color=\"mint\"] {\n      color: #37BC9B; }\n      button[theme][theme=\"dialogue\"][color=\"mint\"] i {\n        color: #37BC9B; }\n    button[theme][theme=\"dialogue\"][color=\"grass\"] {\n      color: #8CC152; }\n      button[theme][theme=\"dialogue\"][color=\"grass\"] i {\n        color: #8CC152; }\n    button[theme][theme=\"dialogue\"][color=\"sunflower\"] {\n      color: #F6B042; }\n      button[theme][theme=\"dialogue\"][color=\"sunflower\"] i {\n        color: #F6B042; }\n    button[theme][theme=\"dialogue\"][color=\"bittersweet\"] {\n      color: #EB6845; }\n      button[theme][theme=\"dialogue\"][color=\"bittersweet\"] i {\n        color: #EB6845; }\n    button[theme][theme=\"dialogue\"][color=\"grapefruit\"] {\n      color: #DA4453; }\n      button[theme][theme=\"dialogue\"][color=\"grapefruit\"] i {\n        color: #DA4453; }\n    button[theme][theme=\"dialogue\"][color=\"carnation\"] {\n      color: #D770AD; }\n      button[theme][theme=\"dialogue\"][color=\"carnation\"] i {\n        color: #D770AD; }\n    button[theme][theme=\"dialogue\"][color=\"lavender\"] {\n      color: #967ADC; }\n      button[theme][theme=\"dialogue\"][color=\"lavender\"] i {\n        color: #967ADC; }\n  button[theme][theme=\"standard\"] {\n    color: #3D464D;\n    background: #D9DADC; }\n    button[theme][theme=\"standard\"] .flex-wrapper {\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n      -ms-flex-pack: center;\n      justify-content: center; }\n    button[theme][theme=\"standard\"]:hover {\n      box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.15); }\n    button[theme][theme=\"standard\"]:focus {\n      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n    button[theme][theme=\"standard\"][color=\"positive\"] {\n      color: #ffffff;\n      background: #4A89DC; }\n    button[theme][theme=\"standard\"][color=\"success\"] {\n      color: #ffffff;\n      background: #8CC152; }\n    button[theme][theme=\"standard\"][color=\"negative\"] {\n      color: #ffffff;\n      background: #DA4453; }\n    button[theme][theme=\"standard\"][color=\"warning\"] {\n      color: #ffffff;\n      background: #F6B042; }\n    button[theme][theme=\"standard\"][color=\"background\"] {\n      color: #ffffff;\n      background: #f4f4f4; }\n    button[theme][theme=\"standard\"][color=\"black\"] {\n      color: #ffffff;\n      background: #000000; }\n    button[theme][theme=\"standard\"][color=\"white\"] {\n      color: #ffffff;\n      background: #ffffff; }\n    button[theme][theme=\"standard\"][color=\"grey\"] {\n      color: #ffffff;\n      background: #999999; }\n    button[theme][theme=\"standard\"][color=\"off-white\"] {\n      color: #ffffff;\n      background: #f4f4f4; }\n    button[theme][theme=\"standard\"][color=\"dark\"] {\n      color: #ffffff;\n      background: #3D464D; }\n    button[theme][theme=\"standard\"][color=\"light\"] {\n      color: #ffffff;\n      background: #D9DADC; }\n    button[theme][theme=\"standard\"][color=\"pulse\"] {\n      color: #ffffff;\n      background: #3BAFDA; }\n    button[theme][theme=\"standard\"][color=\"aqua\"] {\n      color: #ffffff;\n      background: #3BAFDA; }\n    button[theme][theme=\"standard\"][color=\"ocean\"] {\n      color: #ffffff;\n      background: #4A89DC; }\n    button[theme][theme=\"standard\"][color=\"mint\"] {\n      color: #ffffff;\n      background: #37BC9B; }\n    button[theme][theme=\"standard\"][color=\"grass\"] {\n      color: #ffffff;\n      background: #8CC152; }\n    button[theme][theme=\"standard\"][color=\"sunflower\"] {\n      color: #ffffff;\n      background: #F6B042; }\n    button[theme][theme=\"standard\"][color=\"bittersweet\"] {\n      color: #ffffff;\n      background: #EB6845; }\n    button[theme][theme=\"standard\"][color=\"grapefruit\"] {\n      color: #ffffff;\n      background: #DA4453; }\n    button[theme][theme=\"standard\"][color=\"carnation\"] {\n      color: #ffffff;\n      background: #D770AD; }\n    button[theme][theme=\"standard\"][color=\"lavender\"] {\n      color: #ffffff;\n      background: #967ADC; }\n    button[theme][theme=\"standard\"][color=\"light\"], button[theme][theme=\"standard\"][color=\"white\"], button[theme][theme=\"standard\"][color=\"gray\"], button[theme][theme=\"standard\"][color=\"background\"], button[theme][theme=\"standard\"][color=\"off-white\"] {\n      color: #3D464D; }\n  button[theme][theme=\"icon\"] {\n    width: 40px;\n    height: 40px;\n    padding: 10px; }\n    button[theme][theme=\"icon\"] .flex-wrapper {\n      text-align: center; }\n      button[theme][theme=\"icon\"] .flex-wrapper i {\n        width: 100%;\n        text-align: center; }\n    button[theme][theme=\"icon\"][inverse] {\n      color: #fff; }\n    button[theme][theme=\"icon\"]:hover {\n      background: rgba(0, 0, 0, 0.1); }\n    button[theme][theme=\"icon\"]:focus {\n      background: rgba(0, 0, 0, 0.25); }\n\nhtml {\n  height: 100%;\n  width: 100%; }\n  html body {\n    height: 100%;\n    width: 100%; }\n    html body demo-app {\n      height: 100%;\n      width: 100%; }\n\n*, *:after, *:before {\n  box-sizing: border-box; }\n\nhtml {\n  margin: 0;\n  padding: 0; }\n  html body {\n    margin: 0;\n    padding: 0;\n    position: relative;\n    overflow: scroll;\n    background: #ffffff; }\n    html body demo-app {\n      height: 100%;\n      width: 100%;\n      box-sizing: border-box;\n      display: block; }\n\n/* Contains all Design Page /Component Demo Page SCSS imports\nstarting at line 82. >>\n=============================================================\n*/\nmain.main-content {\n  position: relative;\n  min-height: 300px;\n  margin: 0 0 0 300px; }\n  main.main-content .container {\n    padding: 70px 5.5rem;\n    margin: 0 auto; }\n    main.main-content .container h1 small {\n      font-size: 14px;\n      vertical-align: middle; }\n  main.main-content .example {\n    margin-top: 25px;\n    border: 1px solid #E9EAEA;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px;\n    border-bottom: none;\n    max-width: 53em;\n    box-sizing: border-box; }\n    main.main-content .example > * {\n      border-top-right-radius: 3px;\n      border-top-left-radius: 3px; }\n  main.main-content pre {\n    margin: 0 0 35px;\n    max-width: 53em;\n    box-sizing: border-box; }\n    main.main-content pre code {\n      width: 100%;\n      display: block;\n      box-sizing: border-box;\n      border-bottom-left-radius: 3px;\n      border-bottom-right-radius: 3px;\n      line-height: 1.5em;\n      padding: 15px 25px; }\n      main.main-content pre code.hljs {\n        background: #F9F9F9 !important; }\n  main.main-content header.design {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n    main.main-content header.design > * {\n      width: 50%; }\n  main.main-content section.design {\n    background: #ffffff; }\n  main.main-content section > aside {\n    background: #f4f4f4;\n    padding: 10px 20px;\n    border-radius: 3px;\n    display: inline-block;\n    border: 2px solid #efefef; }\n    main.main-content section > aside h6 {\n      color: #37BC9B;\n      margin-bottom: 5px; }\n    main.main-content section > aside.design-principle h6 {\n      border-bottom: 1px solid #e7e7e7;\n      padding-bottom: 8px; }\n      main.main-content section > aside.design-principle h6 span {\n        font-weight: 300; }\n    main.main-content section > aside.design-principle .hint {\n      display: block;\n      color: #757575;\n      margin: 5px 0;\n      padding: 10px;\n      font-size: 0.9em;\n      border-radius: 3px;\n      background: #e7e7e7;\n      border: 1px solid #dbdbdb; }\n      main.main-content section > aside.design-principle .hint i {\n        margin-right: 10px; }\n      main.main-content section > aside.design-principle .hint > span {\n        display: block; }\n      main.main-content section > aside.design-principle .hint .link {\n        display: block;\n        margin-top: 10px;\n        font-weight: 400; }\n        main.main-content section > aside.design-principle .hint .link strong {\n          font-weight: 600; }\n  main.main-content .accepted,\n  main.main-content .not-accepted {\n    display: block;\n    margin-top: 15px; }\n  main.main-content .not-accepted {\n    color: #DA4453; }\n  main.main-content .accepted {\n    color: #8CC152; }\n  main.main-content home,\n  main.main-content layout,\n  main.main-content typography,\n  main.main-content iconography,\n  main.main-content color {\n    display: block; }\n    main.main-content home > header,\n    main.main-content layout > header,\n    main.main-content typography > header,\n    main.main-content iconography > header,\n    main.main-content color > header {\n      background: #f4f4f4; }\n    main.main-content home > section.design.container article,\n    main.main-content layout > section.design.container article,\n    main.main-content typography > section.design.container article,\n    main.main-content iconography > section.design.container article,\n    main.main-content color > section.design.container article {\n      margin: 80px 0; }\n  main.main-content from-demo,\n  main.main-content modal-demo,\n  main.main-content switch-demo,\n  main.main-content tooltip-demo,\n  main.main-content buttons-demo {\n    display: block; }\n\nnav.main-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 100vh;\n  color: #ffffff;\n  background-color: #1B2127;\n  overflow-y: scroll;\n  padding: 0 20px 60px 20px; }\n  nav.main-nav > span.logo {\n    padding-top: 30px;\n    cursor: pointer;\n    text-align: center;\n    display: block; }\n    nav.main-nav > span.logo > * {\n      display: block; }\n    nav.main-nav > span.logo h3, nav.main-nav > span.logo h5 {\n      padding: 0;\n      margin: 5px auto; }\n    nav.main-nav > span.logo h5 {\n      color: rgba(255, 255, 255, 0.7);\n      font-weight: 500;\n      letter-spacing: .75px; }\n    nav.main-nav > span.logo span.version {\n      text-align: center;\n      opacity: .5; }\n  nav.main-nav [data-name=\"novo-logo\"] {\n    width: 100%;\n    max-width: 100px;\n    margin: 0 auto 20px auto;\n    display: block; }\n    nav.main-nav [data-name=\"novo-logo\"] .center-dot {\n      fill: #ffffff; }\n    nav.main-nav [data-name=\"novo-logo\"] .outer-ring {\n      fill: #EB6845;\n      -webkit-transform-origin: 50% 50%;\n      transform-origin: 50% 50%;\n      -webkit-animation-duration: 20000ms;\n      animation-duration: 20000ms;\n      -webkit-animation-iteration-count: infinite;\n      animation-iteration-count: infinite;\n      -webkit-animation-timing-function: linear;\n      animation-timing-function: linear;\n      -webkit-animation-name: rotate-back;\n      animation-name: rotate-back; }\n    nav.main-nav [data-name=\"novo-logo\"] .inner-ring {\n      fill: #EB6845;\n      -webkit-transform-origin: 50% 50%;\n      transform-origin: 50% 50%;\n      -webkit-animation-duration: 20000ms;\n      animation-duration: 20000ms;\n      -webkit-animation-iteration-count: infinite;\n      animation-iteration-count: infinite;\n      -webkit-animation-timing-function: linear;\n      animation-timing-function: linear;\n      -webkit-animation-name: rotate;\n      animation-name: rotate; }\n  nav.main-nav [data-name=\"bullhorn-text\"] {\n    width: 100%;\n    max-width: 150px;\n    margin: 0 auto 20px auto;\n    display: block; }\n  nav.main-nav .menu-list {\n    position: relative;\n    margin: 20px 0 0 0;\n    padding: 0;\n    list-style: none; }\n  nav.main-nav .menu-item {\n    display: block;\n    margin: 0;\n    height: 2.5rem; }\n  nav.main-nav .menu-link {\n    display: block;\n    width: 90%;\n    height: 2.5rem;\n    line-height: 2.5rem;\n    text-align: left;\n    color: #a1a4a7;\n    -webkit-transition: color 0.3s;\n    transition: color 0.3s;\n    font-size: 1.05em;\n    font-weight: 400;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n    padding-left: 15px; }\n  nav.main-nav .menu-link:hover,\n  nav.main-nav .menu-link:focus {\n    outline: none;\n    color: #fff; }\n  nav.main-nav .menu-item .router-link-active.menu-link {\n    color: #fff;\n    -webkit-transition: color 0.5s;\n    transition: color 0.5s; }\n  nav.main-nav .menu-section-header {\n    display: block; }\n    nav.main-nav .menu-section-header span {\n      height: 2.5rem;\n      line-height: 2.5rem;\n      display: block;\n      text-transform: uppercase;\n      font-size: .9em;\n      font-weight: 500;\n      letter-spacing: .3px;\n      opacity: .25; }\n  nav.main-nav .menu-line {\n    position: absolute;\n    left: 100%;\n    top: 0;\n    height: 2.5rem;\n    width: 4px;\n    pointer-events: none;\n    background: #EB6845;\n    -webkit-transition: -webkit-transform 0.5s;\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n    -webkit-transition-timing-function: cubic-bezier(1, 0.01, 0, 1.22);\n    transition-timing-function: cubic-bezier(1, 0.01, 0, 1.22); }\n  nav.main-nav .menu-item:nth-child(1).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 0%, 0);\n    transform: translate3d(0, 0%, 0); }\n  nav.main-nav .menu-item:nth-child(2).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); }\n  nav.main-nav .menu-item:nth-child(3).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 200%, 0);\n    transform: translate3d(0, 200%, 0); }\n  nav.main-nav .menu-item:nth-child(4).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 300%, 0);\n    transform: translate3d(0, 300%, 0); }\n  nav.main-nav .menu-item:nth-child(5).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 400%, 0);\n    transform: translate3d(0, 400%, 0); }\n  nav.main-nav .menu-item:nth-child(6).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 500%, 0);\n    transform: translate3d(0, 500%, 0); }\n  nav.main-nav .menu-item:nth-child(7).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 600%, 0);\n    transform: translate3d(0, 600%, 0); }\n  nav.main-nav .menu-item:nth-child(8).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 700%, 0);\n    transform: translate3d(0, 700%, 0); }\n  nav.main-nav .menu-item:nth-child(9).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 800%, 0);\n    transform: translate3d(0, 800%, 0); }\n  nav.main-nav .menu-item:nth-child(10).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 900%, 0);\n    transform: translate3d(0, 900%, 0); }\n  nav.main-nav .menu-item:nth-child(11).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 1000%, 0);\n    transform: translate3d(0, 1000%, 0); }\n  nav.main-nav .menu-item:nth-child(12).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 1100%, 0);\n    transform: translate3d(0, 1100%, 0); }\n  nav.main-nav .menu-item:nth-child(13).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 1200%, 0);\n    transform: translate3d(0, 1200%, 0); }\n  nav.main-nav .menu-item:nth-child(14).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 1300%, 0);\n    transform: translate3d(0, 1300%, 0); }\n  nav.main-nav .menu-item:nth-child(15).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 1400%, 0);\n    transform: translate3d(0, 1400%, 0); }\n  nav.main-nav .menu-item:nth-child(16).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 1500%, 0);\n    transform: translate3d(0, 1500%, 0); }\n  nav.main-nav .menu-item:nth-child(17).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 1600%, 0);\n    transform: translate3d(0, 1600%, 0); }\n  nav.main-nav .menu-item:nth-child(18).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 1700%, 0);\n    transform: translate3d(0, 1700%, 0); }\n  nav.main-nav .menu-item:nth-child(19).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 1800%, 0);\n    transform: translate3d(0, 1800%, 0); }\n  nav.main-nav .menu-item:nth-child(20).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 1900%, 0);\n    transform: translate3d(0, 1900%, 0); }\n  nav.main-nav .menu-item:nth-child(21).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 2000%, 0);\n    transform: translate3d(0, 2000%, 0); }\n  nav.main-nav .menu-item:nth-child(22).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 2100%, 0);\n    transform: translate3d(0, 2100%, 0); }\n  nav.main-nav .menu-item:nth-child(23).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 2200%, 0);\n    transform: translate3d(0, 2200%, 0); }\n  nav.main-nav .menu-item:nth-child(24).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 2300%, 0);\n    transform: translate3d(0, 2300%, 0); }\n  nav.main-nav .menu-item:nth-child(25).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 2400%, 0);\n    transform: translate3d(0, 2400%, 0); }\n  nav.main-nav .menu-item:nth-child(26).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 2500%, 0);\n    transform: translate3d(0, 2500%, 0); }\n  nav.main-nav .menu-item:nth-child(27).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 2600%, 0);\n    transform: translate3d(0, 2600%, 0); }\n  nav.main-nav .menu-item:nth-child(28).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 2700%, 0);\n    transform: translate3d(0, 2700%, 0); }\n  nav.main-nav .menu-item:nth-child(29).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 2800%, 0);\n    transform: translate3d(0, 2800%, 0); }\n  nav.main-nav .menu-item:nth-child(30).current ~ .menu-line {\n    -webkit-transform: translate3d(0, 2900%, 0);\n    transform: translate3d(0, 2900%, 0); }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg); } }\n\n@-webkit-keyframes rotate-back {\n  from {\n    -webkit-transform: rotate(360deg); }\n  to {\n    -webkit-transform: rotate(0deg); } }\n\n/* Base16 Atelier Plateau Light - Theme */\n/* by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/plateau) */\n/* Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16) */\n/* Atelier-Plateau Comment */\n.hljs-comment,\n.hljs-quote {\n  color: #655d5d; }\n\n/* Atelier-Plateau Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-attribute,\n.hljs-tag,\n.hljs-name,\n.hljs-regexp,\n.hljs-link,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class {\n  color: #ca4949; }\n\n/* Atelier-Plateau Orange */\n.hljs-number,\n.hljs-meta,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params {\n  color: #b45a3c; }\n\n/* Atelier-Plateau Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet {\n  color: #4b8b8b; }\n\n/* Atelier-Plateau Blue */\n.hljs-title,\n.hljs-section {\n  color: #7272ca; }\n\n/* Atelier-Plateau Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #8464c4; }\n\n.hljs-deletion,\n.hljs-addition {\n  color: #1b1818;\n  display: inline-block;\n  width: 100%; }\n\n.hljs-deletion {\n  background-color: #ca4949; }\n\n.hljs-addition {\n  background-color: #4b8b8b; }\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: #f4ecec;\n  color: #585050;\n  padding: 0.5em; }\n\n.hljs-emphasis {\n  font-style: italic; }\n\n.hljs-strong {\n  font-weight: bold; }\n\nnav.responsive-nav {\n  display: none;\n  padding: 0 20px;\n  width: 100%; }\n  nav.responsive-nav svg {\n    max-width: 90px;\n    display: inline-block;\n    margin: 0 auto; }\n    nav.responsive-nav svg .st0 {\n      fill: #3D464D; }\n  nav.responsive-nav strong {\n    text-transform: uppercase;\n    color: rgba(61, 70, 77, 0.5);\n    font-size: .9em;\n    letter-spacing: .3px; }\n\nbutton[name=\"open-menu\"] {\n  border: none;\n  background: transparent;\n  display: none;\n  font-size: 18px;\n  vertical-align: middle; }\n  button[name=\"open-menu\"]:focus, button[name=\"open-menu\"]:active {\n    outline: none; }\n\n@media (max-width: 499px) {\n  main.main-content .container {\n    padding: 70px 2.5rem; }\n  main.main-content header.design > div {\n    width: 100%; }\n  main.main-content header.design > img {\n    display: none; } }\n\n@media (min-width: 501px) and (max-width: 767px) {\n  main.main-content header.design > div {\n    width: 100%; }\n  main.main-content header.design > img {\n    width: 30%; } }\n\n@media (min-width: 1px) and (max-width: 767px) {\n  nav.main-nav {\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n    -webkit-transition: all 200ms ease-in-out;\n    transition: all 200ms ease-in-out; }\n    nav.main-nav.open {\n      -webkit-transform: translateX(0px);\n      transform: translateX(0px); }\n  main.main-content {\n    margin: 0;\n    -webkit-transform: translateX(0px);\n    transform: translateX(0px);\n    -webkit-transition: all 200ms ease-in-out;\n    transition: all 200ms ease-in-out; }\n    main.main-content.open {\n      -webkit-transform: translateX(300px);\n      transform: translateX(300px); }\n  nav.responsive-nav {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center; }\n  button[name=\"open-menu\"] {\n    display: block; } }\n\ncolor header {\n  -webkit-transition: all 240ms ease-in-out;\n  transition: all 240ms ease-in-out;\n  position: relative; }\n  color header h1 {\n    color: #8CC152; }\n  color header h2,\n  color header p {\n    color: #3D464D; }\n  color header h1,\n  color header h2,\n  color header p {\n    -webkit-transition: color 240ms ease-in-out;\n    transition: color 240ms ease-in-out;\n    -webkit-transition-delay: 100ms;\n    transition-delay: 100ms; }\n  color header > div {\n    z-index: 1; }\n  color header .background-boxes {\n    position: absolute;\n    width: 50%;\n    height: 100%;\n    top: 0;\n    left: 50%;\n    right: 0;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-flex-wrap: wrap;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    z-index: 0;\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    background: #f4f4f4;\n    -webkit-transition: background 240ms ease-in-out;\n    transition: background 240ms ease-in-out; }\n    color header .background-boxes > * {\n      -webkit-transition: all 120ms ease-in-out;\n      transition: all 120ms ease-in-out;\n      padding: 15px;\n      margin: 15px;\n      border-radius: 3px; }\n      color header .background-boxes > *:hover {\n        -webkit-transform: scale(1.7);\n        transform: scale(1.7);\n        border-radius: 50%; }\n    color header .background-boxes .bb-company {\n      background: #3399DD;\n      width: 34px;\n      height: 34px; }\n    color header .background-boxes .bb-candidate {\n      background: #44BB77;\n      width: 45px;\n      height: 45px; }\n    color header .background-boxes .bb-navigation {\n      background: #2F384F;\n      width: 30px;\n      height: 30px; }\n    color header .background-boxes .bb-lead {\n      background: #AA6699;\n      width: 38px;\n      height: 38px; }\n    color header .background-boxes .bb-contact {\n      background: #FFAA44;\n      width: 42px;\n      height: 42px; }\n    color header .background-boxes .bb-opportunity {\n      background: #662255;\n      width: 26px;\n      height: 26px; }\n    color header .background-boxes .bb-job {\n      background: #BB5566;\n      width: 38px;\n      height: 38px; }\n    color header .background-boxes .bb-submission {\n      background: #778899;\n      width: 42px;\n      height: 42px; }\n    color header .background-boxes .bb-placement {\n      background: #0B344F;\n      width: 26px;\n      height: 26px; }\n    color header .background-boxes .bb-aqua {\n      background: #3BAFDA;\n      width: 26px;\n      height: 26px; }\n    color header .background-boxes .bb-ocean {\n      background: #4A89DC;\n      width: 37px;\n      height: 37px; }\n    color header .background-boxes .bb-mint {\n      background: #37BC9B;\n      width: 27px;\n      height: 27px; }\n    color header .background-boxes .bb-grass {\n      background: #8CC152;\n      width: 43px;\n      height: 43px; }\n    color header .background-boxes .bb-sunflower {\n      background: #F6B042;\n      width: 28px;\n      height: 28px; }\n    color header .background-boxes .bb-bittersweet {\n      background: #EB6845;\n      width: 43px;\n      height: 43px; }\n    color header .background-boxes .bb-grapefruit {\n      background: #DA4453;\n      width: 40px;\n      height: 40px; }\n    color header .background-boxes .bb-carnation {\n      background: #D770AD;\n      width: 36px;\n      height: 36px; }\n    color header .background-boxes .bb-lavender {\n      background: #967ADC;\n      width: 35px;\n      height: 35px; }\n\ncolor article.color-blocks {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  width: 100%; }\n  color article.color-blocks .block {\n    text-align: center;\n    height: 150px;\n    width: 25%;\n    min-width: 200px;\n    position: relative;\n    padding-top: 140px;\n    margin-bottom: 95px; }\n    color article.color-blocks .block:hover .color-square, color article.color-blocks .block:focus .color-square, color article.color-blocks .block:active .color-square {\n      -webkit-transform: scale(1.125);\n      transform: scale(1.125); }\n    color article.color-blocks .block h6 {\n      text-align: left; }\n    color article.color-blocks .block span.vars {\n      opacity: 0.65;\n      text-align: left;\n      display: block; }\n    color article.color-blocks .block h6,\n    color article.color-blocks .block span.vars {\n      padding-left: 6%; }\n    color article.color-blocks .block .color-square {\n      height: 130px;\n      width: 90%;\n      position: absolute;\n      top: 0;\n      left: 5%;\n      background: white;\n      -webkit-transition: all 80ms ease-in-out;\n      transition: all 80ms ease-in-out;\n      border-radius: 2px;\n      cursor: pointer; }\n    color article.color-blocks .block h3.color-text {\n      color: #fff;\n      position: absolute;\n      top: 45%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n      opacity: 0.85;\n      font-weight: 600;\n      padding: 7px 0;\n      cursor: pointer; }\n      color article.color-blocks .block h3.color-text:after {\n        content: 'Click to copy';\n        position: absolute;\n        color: rgba(255, 255, 255, 0.4);\n        left: 50%;\n        top: 40px;\n        font-size: 10px;\n        text-transform: uppercase;\n        -webkit-transform: translateX(-50%);\n        transform: translateX(-50%);\n        width: 100%; }\n      color article.color-blocks .block h3.color-text span {\n        font-size: 0.9em;\n        opacity: 0.45; }\n    color article.color-blocks .block.nav-cb .color-square {\n      background: #2F384F; }\n    color article.color-blocks .block.action-cb .color-square {\n      background: #4A89DC; }\n    color article.color-blocks .block.text-cb .color-square {\n      background: #3D464D; }\n    color article.color-blocks .block.background-cb {\n      color: #3D464D; }\n      color article.color-blocks .block.background-cb h3:after {\n        content: 'Click to copy';\n        position: absolute;\n        color: rgba(61, 70, 77, 0.4);\n        left: 50%;\n        top: 40px;\n        font-size: 10px;\n        text-transform: uppercase;\n        -webkit-transform: translateX(-50%);\n        transform: translateX(-50%);\n        width: 100%; }\n      color article.color-blocks .block.background-cb .color-text {\n        color: #3D464D; }\n      color article.color-blocks .block.background-cb .color-square {\n        background: #f4f4f4; }\n    color article.color-blocks .block.company-cb .color-square {\n      background: #3399DD; }\n    color article.color-blocks .block.candidate-cb .color-square {\n      background: #44BB77; }\n    color article.color-blocks .block.navigation-cb .color-square {\n      background: #2F384F; }\n    color article.color-blocks .block.lead-cb .color-square {\n      background: #AA6699; }\n    color article.color-blocks .block.contact-cb .color-square {\n      background: #FFAA44; }\n    color article.color-blocks .block.opportunity-cb .color-square {\n      background: #662255; }\n    color article.color-blocks .block.job-cb .color-square {\n      background: #BB5566; }\n    color article.color-blocks .block.submission-cb .color-square {\n      background: #778899; }\n    color article.color-blocks .block.placement-cb .color-square {\n      background: #0B344F; }\n    color article.color-blocks .block.aqua-cb .color-square {\n      background: #3BAFDA; }\n    color article.color-blocks .block.ocean-cb .color-square {\n      background: #4A89DC; }\n    color article.color-blocks .block.mint-cb .color-square {\n      background: #37BC9B; }\n    color article.color-blocks .block.grass-cb .color-square {\n      background: #8CC152; }\n    color article.color-blocks .block.sunflower-cb .color-square {\n      background: #F6B042; }\n    color article.color-blocks .block.bittersweet-cb .color-square {\n      background: #EB6845; }\n    color article.color-blocks .block.grapefruit-cb .color-square {\n      background: #DA4453; }\n    color article.color-blocks .block.carnation-cb .color-square {\n      background: #D770AD; }\n    color article.color-blocks .block.lavender-cb .color-square {\n      background: #967ADC; }\n\ncolor > header.aqua {\n  background: #3BAFDA !important; }\n  color > header.aqua h1,\n  color > header.aqua h2,\n  color > header.aqua p {\n    color: #fff; }\n  color > header.aqua .background-boxes {\n    background: #3BAFDA !important; }\n\ncolor > header.ocean {\n  background: #4A89DC !important; }\n  color > header.ocean h1,\n  color > header.ocean h2,\n  color > header.ocean p {\n    color: #fff; }\n  color > header.ocean .background-boxes {\n    background: #4A89DC !important; }\n\ncolor > header.mint {\n  background: #37BC9B !important; }\n  color > header.mint h1,\n  color > header.mint h2,\n  color > header.mint p {\n    color: #fff; }\n  color > header.mint .background-boxes {\n    background: #37BC9B !important; }\n\ncolor > header.grass {\n  background: #8CC152 !important; }\n  color > header.grass h1,\n  color > header.grass h2,\n  color > header.grass p {\n    color: #fff; }\n  color > header.grass .background-boxes {\n    background: #8CC152 !important; }\n\ncolor > header.sunflower {\n  background: #F6B042 !important; }\n  color > header.sunflower h1,\n  color > header.sunflower h2,\n  color > header.sunflower p {\n    color: #fff; }\n  color > header.sunflower .background-boxes {\n    background: #F6B042 !important; }\n\ncolor > header.bittersweet {\n  background: #EB6845 !important; }\n  color > header.bittersweet h1,\n  color > header.bittersweet h2,\n  color > header.bittersweet p {\n    color: #fff; }\n  color > header.bittersweet .background-boxes {\n    background: #EB6845 !important; }\n\ncolor > header.grapefruit {\n  background: #DA4453 !important; }\n  color > header.grapefruit h1,\n  color > header.grapefruit h2,\n  color > header.grapefruit p {\n    color: #fff; }\n  color > header.grapefruit .background-boxes {\n    background: #DA4453 !important; }\n\ncolor > header.carnation {\n  background: #D770AD !important; }\n  color > header.carnation h1,\n  color > header.carnation h2,\n  color > header.carnation p {\n    color: #fff; }\n  color > header.carnation .background-boxes {\n    background: #D770AD !important; }\n\ncolor > header.lavender {\n  background: #967ADC !important; }\n  color > header.lavender h1,\n  color > header.lavender h2,\n  color > header.lavender p {\n    color: #fff; }\n  color > header.lavender .background-boxes {\n    background: #967ADC !important; }\n\ncolor > header.company {\n  background: #3399DD !important; }\n  color > header.company h1,\n  color > header.company h2,\n  color > header.company p {\n    color: #fff; }\n  color > header.company .background-boxes {\n    background: #3399DD !important; }\n\ncolor > header.candidate {\n  background: #44BB77 !important; }\n  color > header.candidate h1,\n  color > header.candidate h2,\n  color > header.candidate p {\n    color: #fff; }\n  color > header.candidate .background-boxes {\n    background: #44BB77 !important; }\n\ncolor > header.navigation {\n  background: #2F384F !important; }\n  color > header.navigation h1,\n  color > header.navigation h2,\n  color > header.navigation p {\n    color: #fff; }\n  color > header.navigation .background-boxes {\n    background: #2F384F !important; }\n\ncolor > header.lead {\n  background: #AA6699 !important; }\n  color > header.lead h1,\n  color > header.lead h2,\n  color > header.lead p {\n    color: #fff; }\n  color > header.lead .background-boxes {\n    background: #AA6699 !important; }\n\ncolor > header.contact {\n  background: #FFAA44 !important; }\n  color > header.contact h1,\n  color > header.contact h2,\n  color > header.contact p {\n    color: #fff; }\n  color > header.contact .background-boxes {\n    background: #FFAA44 !important; }\n\ncolor > header.opportunity {\n  background: #662255 !important; }\n  color > header.opportunity h1,\n  color > header.opportunity h2,\n  color > header.opportunity p {\n    color: #fff; }\n  color > header.opportunity .background-boxes {\n    background: #662255 !important; }\n\ncolor > header.job {\n  background: #BB5566 !important; }\n  color > header.job h1,\n  color > header.job h2,\n  color > header.job p {\n    color: #fff; }\n  color > header.job .background-boxes {\n    background: #BB5566 !important; }\n\ncolor > header.submission {\n  background: #778899 !important; }\n  color > header.submission h1,\n  color > header.submission h2,\n  color > header.submission p {\n    color: #fff; }\n  color > header.submission .background-boxes {\n    background: #778899 !important; }\n\ncolor > header.placement {\n  background: #0B344F !important; }\n  color > header.placement h1,\n  color > header.placement h2,\n  color > header.placement p {\n    color: #fff; }\n  color > header.placement .background-boxes {\n    background: #0B344F !important; }\n\ncolor > header.background {\n  background: #f4f4f4; }\n  color > header.background .background-boxes {\n    background: #f4f4f4; }\n\nhome h1,\nhome h5 {\n  color: #EB6845; }\n\nhome section .jump-to {\n  font-weight: 600;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  border: 2px solid rgba(55, 188, 155, 0.25);\n  padding: 10px;\n  max-width: 30em;\n  border-radius: 11px;\n  margin: 25px 0 !important; }\n  home section .jump-to i {\n    -webkit-flex-shrink: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    font-size: 1em;\n    color: #37BC9B;\n    width: 30px;\n    height: 30px;\n    line-height: 26px;\n    border-radius: 50%;\n    border: 2px solid #37BC9B;\n    display: inline-block;\n    margin-right: 15px;\n    text-align: center; }\n  home section .jump-to.brand {\n    border: 2px solid rgba(235, 104, 69, 0.25); }\n    home section .jump-to.brand i {\n      color: #EB6845;\n      border: 2px solid #EB6845; }\n\niconography > header {\n  background: #F4F4F4; }\n\niconography h1, iconography h5 {\n  color: #3BAFDA; }\n\niconography .base-sizing {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center; }\n  iconography .base-sizing .sizing-specs {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    color: #a4a6ab;\n    margin: 35px 150px 10px 0; }\n    iconography .base-sizing .sizing-specs span {\n      line-height: 1.7em; }\n\niconography .padding {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: start;\n  justify-content: flex-start; }\n  iconography .padding div {\n    padding: 15px;\n    margin-right: 25px; }\n    iconography .padding div:first-of-type i {\n      margin: 0;\n      padding: 0; }\n    iconography .padding div h4 {\n      color: #4A89DC; }\n      iconography .padding div h4 .bhi-circle {\n        color: #FFAA44; }\n    iconography .padding div h6 {\n      color: #97999f; }\n\niconography .contained-scaling,\niconography .contained-padding {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center; }\n  iconography .contained-scaling figure,\n  iconography .contained-padding figure {\n    text-align: center; }\n\niconography .example.standard-icon-row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-justify-content: space-around;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  padding: 20px; }\n  iconography .example.standard-icon-row > div {\n    text-align: center; }\n\niconography .example.contained-icon-row {\n  padding: 20px; }\n  iconography .example.contained-icon-row > * {\n    margin: 15px 0;\n    color: inherit; }\n\ntypography > header {\n  background: #F4F4F4; }\n\ntypography h1,\ntypography h5 {\n  color: #D770AD; }\n\ntypography > section > h2 {\n  margin-top: 50px; }\n\ntypography article.principles {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin: 35px 0; }\n  typography article.principles img {\n    margin: 0 auto; }\n\ntypography article.line-height div {\n  margin: 35px 0; }\n\ntypography article.line-length div .ruler {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  width: 100%; }\n  typography article.line-length div .ruler > * {\n    display: inline-block;\n    margin: 0; }\n  typography article.line-length div .ruler hr {\n    height: 2px;\n    background: #D9DADC;\n    border: none; }\n  typography article.line-length div .ruler span {\n    padding: 10px;\n    border: 2px solid #D770AD;\n    border-radius: 6px;\n    margin-right: 10px; }\n\ntypography article.line-length div.too-short {\n  margin: 35px 0; }\n  typography article.line-length div.too-short .ruler hr {\n    width: 14em; }\n\ntypography article.line-length div.just-right {\n  margin: 35px 0; }\n  typography article.line-length div.just-right .ruler hr {\n    width: 33em; }\n  typography article.line-length div.just-right .ruler span {\n    background: #D770AD;\n    color: #fff;\n    border: 2px solid #d15ca2; }\n\ntypography article.line-length div.too-long {\n  margin: 35px 0; }\n  typography article.line-length div.too-long .ruler hr {\n    width: 80em; }\n  typography article.line-length div.too-long .ruler span {\n    margin-right: 40px; }\n  typography article.line-length div.too-long .ruler p {\n    text-indent: -10px; }\n\ntypography .example {\n  padding: 20px; }\n  typography .example div.type-group {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    border-bottom: 2px solid #f1f1f1;\n    padding: 15px; }\n    typography .example div.type-group h1,\n    typography .example div.type-group h2,\n    typography .example div.type-group h3,\n    typography .example div.type-group h4,\n    typography .example div.type-group h6,\n    typography .example div.type-group p {\n      color: inherit; }\n    typography .example div.type-group h5 {\n      color: rgba(0, 0, 0, 0.55); }\n    typography .example div.type-group span {\n      margin: 5px 0;\n      opacity: 0.65; }\n  typography .example hr {\n    border: none;\n    height: 1px;\n    background: #f4f4f4;\n    display: block; }\n\nlayout h1,\nlayout h5 {\n  color: #37BC9B; }\n\nlayout article img {\n  display: block;\n  margin: 40px auto 50px auto;\n  max-width: 600px;\n  max-height: 475px;\n  width: auto;\n  height: auto; }\n  layout article img.bowling-alley {\n    max-height: 400px; }\n\nbuttons-demo .example.buttons-demo {\n  padding: 20px 30px;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-flex: 0;\n  -webkit-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-transition: background 460ms ease-in-out;\n  transition: background 460ms ease-in-out; }\n  buttons-demo .example.buttons-demo > * {\n    -webkit-flex-shrink: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    -webkit-box-flex: 0;\n    -webkit-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    margin-right: 15px; }\n  buttons-demo .example.buttons-demo.icons, buttons-demo .example.buttons-demo.header {\n    background: #3BAFDA; }\n  buttons-demo .example.buttons-demo.blue {\n    background: #4A89DC; }\n  buttons-demo .example.buttons-demo.green {\n    background: #8CC152; }\n  buttons-demo .example.buttons-demo.yellow {\n    background: #F6B042; }\n  buttons-demo .example.buttons-demo.orange {\n    background: #EB6845; }\n  buttons-demo .example.buttons-demo.red {\n    background: #DA4453; }\n  buttons-demo .example.buttons-demo.purple {\n    background: #967ADC; }\n  buttons-demo .example.buttons-demo .inverse-color {\n    background: #2F384F;\n    padding: 10px; }\n\ntabs-demo .example header {\n  padding-top: 50px; }\n\ntabs-demo .example novo-nav-outlet {\n  padding: 25px; }\n\ntabs-demo .example.color-tab-demo {\n  width: 100%; }\n  tabs-demo .example.color-tab-demo header {\n    background: #4A89DC; }\n\ntabs-demo .example.vertical-tab-demo {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-wrap: nowrap;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  padding: 20px; }\n  tabs-demo .example.vertical-tab-demo novo-nav-outlet {\n    padding: 0 25px; }\n\ntabs-demo .example.button-tab-demo header {\n  padding: 20px; }\n  tabs-demo .example.button-tab-demo header.color {\n    background: #4A89DC; }\n\n/*\n    I am used only for quick fixes that have not yet been refactored.\n    Hopefully, I am nothing but a friendly comment. :)\n*/\n", "", {"version":3,"sources":["/./demo/src/assets/styles/global/reset.scss","/./demo/demo/index.scss","/./demo/src/assets/styles/global/variables.scss","/./demo/src/assets/styles/global/flex-grid.scss","/./demo/src/assets/styles/content/typography.scss","/./demo/src/elements/tabs/Tabs.scss","/./demo/src/elements/button/Button.scss","/./demo/demo/assets/styles/reset.scss","/./demo/demo/assets/styles/general.scss","/./demo/demo/assets/styles/main.scss","/./demo/demo/assets/styles/sidenav.scss","/./demo/demo/assets/styles/highlight.scss","/./demo/demo/assets/styles/media.scss","/./demo/src/assets/styles/global/include-media.scss","/./demo/demo/pages/color/Color.scss","/./demo/demo/pages/home/Home.scss","/./demo/demo/pages/iconography/Iconography.scss","/./demo/demo/pages/typography/Typography.scss","/./demo/demo/pages/layout/Layout.scss","/./demo/demo/pages/button/ButtonDemo.scss","/./demo/demo/pages/tabs/TabsDemo.scss","/./demo/demo/assets/styles/shame.scss"],"names":[],"mappings":"AAAA,4DAA4D;AAE5D;;;;GAIG;AAEH;EACI,wBAAwB;EAAE,OAAO;EACjC,2BAA2B;EAAE,OAAO;EACpC,+BAA+B;EAAE,OAAO,EAC3C;;AAED;;GAEG;AAEH;EACI,UAAU,EACb;;AAED;gFACgF;AAEhF;;;;;GAKG;AAEH;;;;;;;;;;;;;EAaI,eAAe,EAClB;;AAED;;;GAGG;AAEH;;;;EAII,sBAAsB;EAAE,OAAO;EAC/B,yBAAyB;EAAE,OAAO,EACrC;;AAED;;;GAGG;AAEH;EACI,cAAc;EACd,UAAU,EACb;;AAED;;;GAGG;ACNH;;EDUI,cAAc,EACjB;;AAED;gFACgF;AAEhF;;GAEG;AAEH;EACI,8BAA8B,EACjC;;AAED;;GAEG;AAEH;;EAEI,WAAW,EACd;;AAED;gFACgF;AAEhF;;GAEG;AAEH;EACI,0BAA0B,EAC7B;;AAED;;GAEG;AAEH;;EAEI,kBAAkB,EACrB;;AAED;;GAEG;AAEH;EACI,mBAAmB,EACtB;;AAED;;;GAGG;AAEH;EACI,eAAe;EACf,iBAAiB,EACpB;;AAED;;GAEG;AAEH;EACI,iBAAiB;EACjB,YAAY,EACf;;AAED;;GAEG;AAEH;EACI,eAAe,EAClB;;AAED;;GAEG;AAEH;;EAEI,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB,EAC5B;;AAED;EACI,YAAY,EACf;;AAED;EACI,gBAAgB,EACnB;;AAED;gFACgF;AAEhF;;GAEG;AAEH;EACI,UAAU,EACb;;AAED;;GAEG;AAEH;EACI,iBAAiB,EACpB;;AAED;gFACgF;AAEhF;;GAEG;AAEH;EACI,iBAAiB,EACpB;;AAED;;GAEG;AAEH;EAEI,wBAAwB;EACxB,UAAU,EACb;;AAED;;GAEG;AAEH;EACI,eAAe,EAClB;;AAED;;GAEG;AAEH;;;;EAII,kCAAkC;EAClC,eAAe,EAClB;;AAED;gFACgF;AAEhF;;;GAGG;AAEH;;;;;GAKG;AAEH;;;;;EAKI,eAAe;EAAE,OAAO;EACxB,cAAc;EAAE,OAAO;EACvB,UAAU;EAAE,OAAO,EACtB;;AAED;;GAEG;AAEH;EACI,kBAAkB,EACrB;;AAED;;;;;GAKG;AAEH;;EAEI,qBAAqB,EACxB;;AAED;;;;;;GAMG;AAEH;;;;EAII,2BAA2B;EAAE,OAAO;EACpC,gBAAgB;EAAE,OAAO,EAC5B;;AAED;;GAEG;AAEH;;EAEI,gBAAgB,EACnB;;AAED;;GAEG;AAEH;;EAEI,UAAU;EACV,WAAW,EACd;;AAED;;;GAGG;AAEH;EACI,oBAAoB,EACvB;;AAED;;;;;;GAMG;AAEH;;EAEI,uBAAuB;EAAE,OAAO;EAChC,WAAW;EAAE,OAAO,EACvB;;AAED;;;;GAIG;AAEH;;EAEI,aAAa,EAChB;;AAED;;;;GAIG;AAEH;EACI,8BAA8B;EAAE,OAAO;EAEL,OAAO;EACzC,wBAAwB,EAC3B;;AAED;;;;GAIG;AAEH;;EAEI,yBAAyB,EAC5B;;AAED;;GAEG;AAEH;EACI,0BAA0B;EAC1B,cAAc;EACd,+BAA+B,EAClC;;AAED;;;GAGG;AAEH;EACI,UAAU;EAAE,OAAO;EACnB,WAAW;EAAE,OAAO,EACvB;;AAED;;GAEG;AAEH;EACI,eAAe,EAClB;;AAED;;;GAGG;AAEH;EACI,kBAAkB,EACrB;;AAED;gFACgF;AAEhF;;GAEG;AAEH;EACI,0BAA0B;EAC1B,kBAAkB,EACrB;;AAED;;EAEI,WAAW,EACd;;AAED;EACI,uBAAuB,EAC1B;;AErYD;;;;EAIE;AA0IF;EACI;IACI,iCAAkB;IAAlB,yBAAkB,EAAA;EAEtB;IACI,mCAAkB;IAAlB,2BAAkB,EAAA;EAEtB;IACI,mCAAkB;IAAlB,2BAAkB,EAAA,EAAA;;AAI1B;EACI;IACI,kCAAkB;IAAlB,0BAAkB,EAAA;EAEtB;IACI,mCAAkB;IAAlB,2BAAkB,EAAA;EAEtB;IACI,kCAAkB;IAAlB,0BAAkB,EAAA,EAAA;;AAR1B;EACI;IACI,kCAAkB;IAAlB,0BAAkB,EAAA;EAEtB;IACI,mCAAkB;IAAlB,2BAAkB,EAAA;EAEtB;IACI,kCAAkB;IAAlB,0BAAkB,EAAA,EAAA;;AAI1B;EACI;IACI,kCAAkB;IAAlB,0BAAkB,EAAA;EAEtB;IACI,iCAAkB;IAAlB,yBAAkB,EAAA,EAAA;;AAL1B;EACI;IACI,kCAAkB;IAAlB,0BAAkB,EAAA;EAEtB;IACI,iCAAkB;IAAlB,yBAAkB,EAAA,EAAA;;AAI1B;EACI;IACI,WAAW;IACX,qCAAqB;IAArB,6BAAqB,EAAA;EAEzB;IACI,mCAAqB;IAArB,2BAAqB,EAAA;EAEzB;IACI,WAAW;IACX,iCAAqB;IAArB,yBAAqB,EAAA,EAAA;;AAV7B;EACI;IACI,WAAW;IACX,qCAAqB;IAArB,6BAAqB,EAAA;EAEzB;IACI,mCAAqB;IAArB,2BAAqB,EAAA;EAEzB;IACI,WAAW;IACX,iCAAqB;IAArB,yBAAqB,EAAA,EAAA;;AClO7B;;;;;;;GAOG;AAEH;;;;;;;;;;;GAWG;AAOH;;;;;;;;;;;;;;;GAeG;AAGH;;;;;;;;GAQG;AAKH;;GAEG;AAWH;;GAEG;AACH;EACI,uBAAuB;EACvB,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;EAApB,4BAAoB;EAApB,wBAAoB;EAApB,oBAAoB;EACpB,wBAAgB;EAAhB,oBAAgB;EAAhB,gBAAgB;EAZZ,qBA5CU;EA6CV,sBA7CU,EA0DjB;;AAED;EACI,uBAAuB;EACvB,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;EAAvB,+BAAuB;EAAvB,2BAAuB;EAAvB,uBAAuB;EACvB,oBAAa;EAAb,qBAAa;EAAb,qBAAa;EAAb,aAAa;EACb,uBAAe;EAAf,qBAAe;EAAf,eAAe;EArBX,qBA5CU;EA6CV,sBA7CU,EAmEjB;;AAED;EAEI,oBAAa;EAAb,qBAAa;EAAb,qBAAa;EAAb,aAAa;EACb,sBAAc;EAAd,2BAAc;EAAd,cAAc;EACd,gBAAgB,EACnB;;AAED;;;;;;GAMG;AA8BH;;;;GAIG;AAnBK;EACI,6BAjEW;EAiEX,kCAjEW;EAiEX,qBAjEW;EAkEX,oBAlEW,EAmEd;;AAHD;EACI,8BAjEW;EAiEX,mCAjEW;EAiEX,sBAjEW;EAkEX,qBAlEW,EAmEd;;AAHD;EACI,wBAjEW;EAiEX,6BAjEW;EAiEX,gBAjEW;EAkEX,eAlEW,EAmEd;;AAHD;EACI,8BAjEW;EAiEX,mCAjEW;EAiEX,sBAjEW;EAkEX,qBAlEW,EAmEd;;AAHD;EACI,8BAjEW;EAiEX,mCAjEW;EAiEX,sBAjEW;EAkEX,qBAlEW,EAmEd;;AAHD;EACI,wBAjEW;EAiEX,6BAjEW;EAiEX,gBAjEW;EAkEX,eAlEW,EAmEd;;AAHD;EACI,8BAjEW;EAiEX,mCAjEW;EAiEX,sBAjEW;EAkEX,qBAlEW,EAmEd;;AAHD;EACI,8BAjEW;EAiEX,mCAjEW;EAiEX,sBAjEW;EAkEX,qBAlEW,EAmEd;;AAHD;EACI,wBAjEW;EAiEX,6BAjEW;EAiEX,gBAjEW;EAkEX,eAlEW,EAmEd;;AAHD;EACI,8BAjEW;EAiEX,mCAjEW;EAiEX,sBAjEW;EAkEX,qBAlEW,EAmEd;;AAHD;EACI,8BAjEW;EAiEX,mCAjEW;EAiEX,sBAjEW;EAkEX,qBAlEW,EAmEd;;AAHD;EACI,yBAjEW;EAiEX,8BAjEW;EAiEX,iBAjEW;EAkEX,gBAlEW,EAmEd;;AAKG;EACI,sBAzEO,EA0EV;;AAFD;EACI,uBAzEO,EA0EV;;AAFD;EACI,iBAzEO,EA0EV;;AAFD;EACI,uBAzEO,EA0EV;;AAFD;EACI,uBAzEO,EA0EV;;AAFD;EACI,iBAzEO,EA0EV;;AAFD;EACI,uBAzEO,EA0EV;;AAFD;EACI,uBAzEO,EA0EV;;AAFD;EACI,iBAzEO,EA0EV;;AAFD;EACI,uBAzEO,EA0EV;;AAFD;EACI,uBAzEO,EA0EV;;AAsBL;EAhCA;IACI,6BAjEW;IAiEX,kCAjEW;IAiEX,qBAjEW;IAkEX,oBAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,wBAjEW;IAiEX,6BAjEW;IAiEX,gBAjEW;IAkEX,eAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,wBAjEW;IAiEX,6BAjEW;IAiEX,gBAjEW;IAkEX,eAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,wBAjEW;IAiEX,6BAjEW;IAiEX,gBAjEW;IAkEX,eAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,yBAjEW;IAiEX,8BAjEW;IAiEX,iBAjEW;IAkEX,gBAlEW,EAmEd;EAKG;IACI,sBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,iBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,iBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,iBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV,EAAA;;AAsBL;EAhCA;IACI,6BAjEW;IAiEX,kCAjEW;IAiEX,qBAjEW;IAkEX,oBAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,wBAjEW;IAiEX,6BAjEW;IAiEX,gBAjEW;IAkEX,eAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,wBAjEW;IAiEX,6BAjEW;IAiEX,gBAjEW;IAkEX,eAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,wBAjEW;IAiEX,6BAjEW;IAiEX,gBAjEW;IAkEX,eAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,yBAjEW;IAiEX,8BAjEW;IAiEX,iBAjEW;IAkEX,gBAlEW,EAmEd;EAKG;IACI,sBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,iBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,iBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,iBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV,EAAA;;AAsBL;EAhCA;IACI,6BAjEW;IAiEX,kCAjEW;IAiEX,qBAjEW;IAkEX,oBAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,wBAjEW;IAiEX,6BAjEW;IAiEX,gBAjEW;IAkEX,eAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,wBAjEW;IAiEX,6BAjEW;IAiEX,gBAjEW;IAkEX,eAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,wBAjEW;IAiEX,6BAjEW;IAiEX,gBAjEW;IAkEX,eAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,8BAjEW;IAiEX,mCAjEW;IAiEX,sBAjEW;IAkEX,qBAlEW,EAmEd;EAHD;IACI,yBAjEW;IAiEX,8BAjEW;IAiEX,iBAjEW;IAkEX,gBAlEW,EAmEd;EAKG;IACI,sBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,iBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,iBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,iBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV;EAFD;IACI,uBAzEO,EA0EV,EAAA;;AC9Hb;EACI,kCFiGmC;EEhGnC,gBF+FiB;EE9FjB,eFAU,EECb;;AAKD;EACI,iBAAiB;EACjB,iBAAiB;EACjB,UAAU;EACV,yBAAyB;EACzB,gBAAgB,EACnB;;AAED;EACI,eAAe;EACf,iBAAiB;EACjB,UAAU;EACV,wBAAwB;EACxB,gBAAgB,EACnB;;AAED;EACI,kBAAkB;EAClB,iBAAiB;EACjB,UAAU;EACV,uBAAuB;EACvB,gBAAgB,EACnB;;AAED;EACI,mBAAmB;EACnB,iBAAiB;EACjB,UAAU;EACV,wBAAwB;EACxB,gBAAgB,EACnB;;AAED;EACI,mBAAmB;EACnB,iBAAiB;EACjB,UAAU;EACV,yBAAyB;EACzB,0BAA0B;EAC1B,2BAAW;EACX,gBAAgB,EACnB;;AAED;EACI,mBAAmB;EACnB,iBAAiB;EACjB,UAAU;EACV,yBAAyB;EACzB,gBAAgB,EACnB;;AAKD;EACI,gBAAgB;EAChB,oBAAoB;EACpB,UAAU;EACV,2BAA2B;EAC3B,gBAAgB,EACnB;;AAKD;EACI,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,0BAA0B;EAC1B,cAAc;EACd,sBAAsB,EACzB;;AAQD;EACI,iBAHkB;EAIlB,sBAAsB,EA0CzB;EA5CD;IAMY,iBAAiB;IACjB,sBAAsB;IACtB,cAZO;IAaP,aAZM;IAaN,mBAAmB,EAsBtB;IAhCT;MAagB,yBAAyB;MACzB,iBAAiB,EACpB;IAfb;MAoBoB,eF5GL;ME6GK,oBFzFH,EE0FA;IAtBjB;MAoBoB,eF5GL;ME6GK,oBFxFD,EEyFF;IAtBjB;MAoBoB,eF5GL;ME6GK,oBFvFA,EEwFH;IAtBjB;MAoBoB,eF5GL;ME6GK,oBFtFN,EEuFG;IAtBjB;MAoBoB,eF5GL;ME6GK,oBFrFH,EEsFA;IAtBjB;MAoBoB,eF5GL;ME6GK,oBFpFC,EEqFJ;IAtBjB;MAoBoB,eF5GL;ME6GK,oBFnFP,EEoFI;IAtBjB;MAoBoB,eF5GL;ME6GK,oBFlFA,EEmFH;IAtBjB;MAoBoB,eF5GL;ME6GK,oBFjFD,EEkFF;IAtBjB;MA4BoB,eFpHL;MEqHK,oBF5GN,EE6GG;IA9BjB;MA4BoB,eFpHL;MEqHK,oBF3GL,EE4GE;IA9BjB;MA4BoB,eFpHL;MEqHK,oBF1GN,EE2GG;IA9BjB;MA4BoB,eFpHL;MEqHK,oBFzGL,EE0GE;IA9BjB;MA4BoB,eFpHL;MEqHK,oBFxGD,EEyGF;IA9BjB;MA4BoB,eFpHL;MEqHK,oBFvGC,EEwGJ;IA9BjB;MA4BoB,eFpHL;MEqHK,oBFtGA,EEuGH;IA9BjB;MA4BoB,eFpHL;MEqHK,oBFrGD,EEsGF;IA9BjB;MA4BoB,eFpHL;MEqHK,oBFpGF,EEqGD;EA9BjB;IAsCoB,eF1GH;IE2GG,wBAAwB,EAC3B;EAxCjB;IAsCoB,eFzGD;IE0GC,wBAAwB,EAC3B;EAxCjB;IAsCoB,eFxGA;IEyGA,wBAAwB,EAC3B;EAxCjB;IAsCoB,eFvGN;IEwGM,wBAAwB,EAC3B;EAxCjB;IAsCoB,eFtGH;IEuGG,wBAAwB,EAC3B;EAxCjB;IAsCoB,eFrGC;IEsGD,wBAAwB,EAC3B;EAxCjB;IAsCoB,eFpGP;IEqGO,wBAAwB,EAC3B;EAxCjB;IAsCoB,eFnGA;IEoGA,wBAAwB,EAC3B;EAxCjB;IAsCoB,eFlGD;IEmGC,wBAAwB,EAC3B;;AAOjB;;;;;;;;;EAUQ,qBAAqB;EACrB,WAAW,EAkBd;EA7BL;;;;;;;;;IAcY,kCAAkC,EACrC;EAfT;;;;;;;;;IAmBgB,iBAAiB;IACjB,sBAAsB,EAOzB;IA3Bb;;;;;;;;;MAuBoB,yBAAyB;MACzB,mBA1EF;MA2EE,eAAe,EAClB;;AASjB;EACI,eFjKW;EEkKX,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;EAChB,0CAAkC;EAAlC,kCAAkC,EAUrC;EAfD;IAQQ,eFxKO,EEyKV;EATL;IAaQ,eAAa,EAChB;;AAML;EACI,iBAAiB;EACjB,oBAAoB;EACpB,0BAA0B;EAC1B,eAAe;EACf,iBAAiB,EACpB;;ACvMD;EACI,gCAAgB;EAChB,WAAW;EACX,iBAAiB;EACjB,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EAEd,4BAAsB;EAAtB,8BAAsB;EAAtB,yBAAsB;EAAtB,sBAAsB;EACtB,wBAA4B;EAA5B,oCAA4B;EAA5B,qBAA4B;EAA5B,4BAA4B;EAC5B,UAAU,EA2Nb;EAnOD;;IAYQ,qBAAc;IAAd,sBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,6BAAuB;IAAvB,8BAAuB;IAAvB,+BAAuB;IAAvB,2BAAuB;IAAvB,uBAAuB;IACvB,0BAAoB;IAApB,4BAAoB;IAApB,uBAAoB;IAApB,oBAAoB,EAoCvB;IAlDL;;MAiBY,mBAAmB;MACnB,YAAY;MACZ,cAAc;MACd,iBAAiB;MACjB,gBAAgB;MAChB,0BAA0B,EAC7B;IAvBT;;MA0BY,SAAS;MACT,YAAY;MACZ,eAAe;MACf,wBAAwB;MACxB,0CAAkC;MAAlC,kCAAkC,EACrC;IA/BT;;;MAoCgB,WAAW,EACd;IArCb;;;MAwCgB,iBAAiB;MACjB,YAAY,EACf;IA1Cb;;MA+CgB,WAAW,EACd;EAhDb;IAqDQ,4BAAqB;IAArB,6BAAqB;IAArB,4BAAqB;IAArB,qBAAqB;IACrB,mBAAmB;IACnB,uBAAuB,EAO1B;IA9DL;MA0DY,mBAAmB;MACnB,gBAAgB;MAChB,0CAAkC;MAAlC,kCAAkC,EACrC;EA7DT;IAiEQ,+BAAgB,EAgCnB;IAjGL;;MAsEgB,YAAY,EACf;IAvEb;;;MA4EoB,iBAAiB,EACpB;IA7EjB;MAkFY,uBAAuB,EAc1B;MAhGT;QAqFgB,iCAAW,EAUd;QA/Fb;UAwFoB,YAAY;UACZ,+BAAgB,EACnB;QA1FjB;UA6FoB,+BAAgB,EACnB;EA9FjB;IAoGQ,gCAAgB,EA8CnB;IAlJL;MAuGY,wBAAwB,EAC3B;IAxGT;;MA6GgB,eHvGF;MGwGE,cAAc,EACjB;IA/Gb;;;MAmHgB,eHtGD,EGgHF;MA7Hb;;;QAsHoB,eHzGL;QG0GK,WAAW,EACd;MAxHjB;;;QA2HoB,oBH9GL,EG+GE;IA5HjB;MAiIY,0BH1HG,EG0IN;MAjJT;QAoIgB,eH9HF;QG+HE,cAAc,EAWjB;QAhJb;UAwIoB,eH3HL;UG4HK,gCAAgB;UAChB,WAAW,EACd;QA3IjB;UA8IoB,WAAW,EACd;EA/IjB;IAqJQ,6BAAuB;IAAvB,8BAAuB;IAAvB,+BAAuB;IAAvB,2BAAuB;IAAvB,uBAAuB;IACvB,YAAY,EAiEf;IAvNL;;MA0JY,qBAAc;MAAd,sBAAc;MAAd,qBAAc;MAAd,cAAc;MACd,YAAY;MACZ,+BAAoB;MAApB,8BAAoB;MAApB,4BAAoB;MAApB,wBAAoB;MAApB,oBAAoB;MACpB,0BAAoB;MAApB,4BAAoB;MAApB,uBAAoB;MAApB,oBAAoB;MACpB,aAAa;MACb,iBAAiB;MACjB,0BAA+B;MAA/B,uCAA+B;MAA/B,uBAA+B;MAA/B,+BAA+B;MAC/B,+BH1JG;MG2JH,gCH3JG;MG4JH,0CAAkC;MAAlC,kCAAkC,EAmDrC;MAtNT;;QAsKgB,6BAA6B;QAC7B,4BAA4B;QAC5B,8BHjKD,EGkKF;MAzKb;;QA4KgB,gCAAgC;QAChC,+BAA+B;QAC/B,iCHvKD,EGwKF;MA/Kb;;QAkLgB,oBAAQ;QAAR,gBAAQ;QAAR,YAAQ;QAAR,QAAQ;QACR,YAAY;QACZ,eAAe;QACf,eAAe;QACf,oBAAoB;QACpB,iBAAiB;QACjB,wBAAwB;QACxB,cAAc,EACjB;MA1Lb;;QA6LgB,WAAW;QACX,UAAU;QACV,eAAe;QACf,wBAAwB;QACxB,0CAAkC;QAAlC,kCAAkC,EACrC;MAlMb;;;QAsMgB,gCAAgB,EASnB;QA/Mb;;;UAyMoB,WAAW,EACd;QA1MjB;;;UA6MoB,aAAa,EAChB;MA9MjB;;QAmNoB,WAAW,EACd;EApNjB;IA2NY,cAAc,EAMjB;IAjOT;MA8NgB,oBAAoB;MACpB,eAAe,EAClB;;AAMb;EACI,eAAe,EAgBlB;EAjBD;IAIQ,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,YAAY,EACf;EARL;IAWQ,cAAc,EAKjB;IAhBL;MAcY,eAAe,EAClB;;AClPT;EAEQ,gBAAgB;EAChB,aAAa;EACb,wBAAwB;EACxB,mBAAmB;EACnB,mBARW;EASX,0BAA0B;EAC1B,0CAAkC;EAAlC,kCAAkC,EA6UrC;EArVL;IAWY,qBAAc;IAAd,sBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,+BAAoB;IAApB,8BAAoB;IAApB,4BAAoB;IAApB,wBAAoB;IAApB,oBAAoB;IACpB,YAAY;IACZ,0BAAoB;IAApB,4BAAoB;IAApB,uBAAoB;IAApB,oBAAoB,EACvB;EAfT;IAkBY,eAAe,EAClB;EAnBT;IAsBY,cAAc,EACjB;EAvBT;IA0BY,aAAa;IACb,oBAAoB;IACpB,qBAAqB,EACxB;EA7BT;IAgCY,oBJtBG;IIuBH,YAAY;IACZ,iBAAiB;IACjB,iBAAiB,EAuFpB;IA1HT;MAsCgB,0BAA+B;MAA/B,uCAA+B;MAA/B,uBAA+B;MAA/B,+BAA+B,EAClC;IAvCb;MA0CgB,0BA5CG,EAqEN;MAnEb;QA6CoB,gCAAgB;QAChB,aAAa;QACb,mBAAmB;QACnB,aAAa;QACb,YAAY;QACZ,sBAAsB;QACtB,kBAAkB;QAClB,kBAAkB,EAKrB;QAzDjB;UAuDwB,yBAAyB,EAC5B;MAxDrB;QA8D4B,gBAAgB;QAChB,kBAAkB,EACrB;IAhEzB;MAsEgB,oBAAmB,EACtB;IAvEb;MA0EgB,oBAAkB,EACrB;IA3Eb;MAgFoB,oBJtEL,EI+EE;MAzFjB;QAmFwB,oBAAmB,EACtB;MApFrB;QAuFwB,oBAAkB,EACrB;IAxFrB;MAgFoB,oBJpEL,EI6EE;MAzFjB;QAmFwB,oBAAmB,EACtB;MApFrB;QAuFwB,oBAAkB,EACrB;IAxFrB;MAgFoB,oBJjEA,EI0EH;MAzFjB;QAmFwB,oBAAmB,EACtB;MApFrB;QAuFwB,oBAAkB,EACrB;IAxFrB;MAgFoB,oBJnED,EI4EF;MAzFjB;QAmFwB,oBAAmB,EACtB;MApFrB;QAuFwB,oBAAkB,EACrB;IAxFrB;MAgFoB,oBJ9ED,EIuFF;MAzFjB;QAmFwB,kBAAmB,EACtB;MApFrB;QAuFwB,oBAAkB,EACrB;IAxFrB;MAgFoB,oBJjFL,EI0FE;MAzFjB;QAmFwB,oBAAmB,EACtB;MApFrB;QAuFwB,kBAAkB,EACrB;IAxFrB;MAgFoB,oBJhFL,EIyFE;MAzFjB;QAmFwB,kBAAmB,EACtB;MApFrB;QAuFwB,oBAAkB,EACrB;IAxFrB;MAgFoB,oBJ/EN,EIwFG;MAzFjB;QAmFwB,oBAAmB,EACtB;MApFrB;QAuFwB,oBAAkB,EACrB;IAxFrB;MAgFoB,oBJ9ED,EIuFF;MAzFjB;QAmFwB,kBAAmB,EACtB;MApFrB;QAuFwB,oBAAkB,EACrB;IAxFrB;MAgFoB,oBJ7EN,EIsFG;MAzFjB;QAmFwB,oBAAmB,EACtB;MApFrB;QAuFwB,oBAAkB,EACrB;IAxFrB;MAgFoB,oBJ5EL,EIqFE;MAzFjB;QAmFwB,oBAAmB,EACtB;MApFrB;QAuFwB,oBAAkB,EACrB;IAxFrB;MAgFoB,oBJ1EL,EImFE;MAzFjB;QAmFwB,oBAAmB,EACtB;MApFrB;QAuFwB,oBAAkB,EACrB;IAxFrB;MA4FgB,oBJ5FD;MI6FC,eJnFD,EIgGF;MA1Gb;QAgGoB,oBJ9FD,EI+FF;MAjGjB;QAoGoB,oBAAkB,EACrB;MArGjB;QAwGoB,gCAAgB,EACnB;IAzGjB;MA+GoB,oBJtGN,EI+GG;MAxHjB;QAkHwB,oBAAmB,EACtB;MAnHrB;QAsHwB,oBAAkB,EACrB;IAvHrB;MA+GoB,oBJrGL,EI8GE;MAxHjB;QAkHwB,oBAAmB,EACtB;MAnHrB;QAsHwB,oBAAkB,EACrB;IAvHrB;MA+GoB,oBJpGN,EI6GG;MAxHjB;QAkHwB,oBAAmB,EACtB;MAnHrB;QAsHwB,oBAAkB,EACrB;IAvHrB;MA+GoB,oBJnGL,EI4GE;MAxHjB;QAkHwB,oBAAmB,EACtB;MAnHrB;QAsHwB,oBAAkB,EACrB;IAvHrB;MA+GoB,oBJlGD,EI2GF;MAxHjB;QAkHwB,oBAAmB,EACtB;MAnHrB;QAsHwB,oBAAkB,EACrB;IAvHrB;MA+GoB,oBJjGC,EI0GJ;MAxHjB;QAkHwB,oBAAmB,EACtB;MAnHrB;QAsHwB,oBAAkB,EACrB;IAvHrB;MA+GoB,oBJhGA,EIyGH;MAxHjB;QAkHwB,oBAAmB,EACtB;MAnHrB;QAsHwB,oBAAkB,EACrB;IAvHrB;MA+GoB,oBJ/FD,EIwGF;MAxHjB;QAkHwB,oBAAmB,EACtB;MAnHrB;QAsHwB,oBAAkB,EACrB;IAvHrB;MA+GoB,oBJ9FF,EIuGD;MAxHjB;QAkHwB,oBAAmB,EACtB;MAnHrB;QAsHwB,oBAAkB,EACrB;EAvHrB;IA6HY,iBAAiB;IACjB,iBAAiB;IACjB,0BAAoB;IAApB,4BAAoB;IAApB,uBAAoB;IAApB,2BAAoB;IAApB,oBAAoB;IACpB,iBAAiB;IACjB,eJvHG;IIwHH,0BJxHG,EImLN;IA7LT;MAqIgB,0BAA+B;MAA/B,uCAA+B;MAA/B,uBAA+B;MAA/B,+BAA+B,EAClC;IAtIb;MAyIgB,yEAAwD,EAC3D;IA1Ib;MA6IgB,0CAA0B,EAC7B;IA9Ib;MAiJgB,gCAAgB;MAChB,YAAY;MACZ,uBAAuB,EAS1B;MA5Jb;QAsJoB,gCAAgB,EACnB;MAvJjB;QA0JoB,gCAAgB,EACnB;IA3JjB;MA+JgB,0BAAwF,EA6B3F;MA5Lb;QAkKoB,aAAa;QACb,mBAAmB;QACnB,aAAa;QACb,YAAY;QACZ,sBAAsB;QACtB,kBAAkB;QAClB,kBAAkB,EAKrB;QA7KjB;UA2KwB,yBAAyB,EAC5B;EA5KrB;IAgMY,wBAAwB;IACxB,eJvLG,EIuQN;IAjRT;MAoMgB,yBAAwB;MAAxB,gCAAwB;MAAxB,sBAAwB;MAAxB,wBAAwB,EAC3B;IArMb;MAwMgB,qBAAc;MAAd,sBAAc;MAAd,qBAAc;MAAd,cAAc;MACd,0BAAoB;MAApB,4BAAoB;MAApB,uBAAoB;MAApB,oBAAoB;MACpB,0BAA+B;MAA/B,uCAA+B;MAA/B,uBAA+B;MAA/B,+BAA+B,EA8BlC;MAxOb;QA6MoB,aAAa;QACb,mBAAmB;QACnB,aAAa;QACb,YAAY;QACZ,sBAAsB;QACtB,kBAAkB,EAKrB;QAvNjB;UAqNwB,yBAAyB,EAC5B;MAtNrB;QA0NoB,0BAA+E,EAKlF;QA/NjB;UA6NwB,kBAAkB,EACrB;MA9NrB;QAkOoB,0BApOD,EAyOF;QAvOjB;UAqOwB,iBAAiB,EACpB;IAtOrB;MA2OgB,oBAAmB,EACtB;IA5Ob;MA+OgB,oBAAmB,EACtB;IAhPb;MAoPoB,+BAAgB,EACnB;IArPjB;MAwPoB,gCAAgB,EACnB;IAzPjB;MA+PoB,eJrPL,EI0PE;MApQjB;QAkQwB,eJxPT,EIyPM;IAnQrB;MA+PoB,eJnPL,EIwPE;MApQjB;QAkQwB,eJtPT,EIuPM;IAnQrB;MA+PoB,eJhPA,EIqPH;MApQjB;QAkQwB,eJnPJ,EIoPC;IAnQrB;MA+PoB,eJlPD,EIuPF;MApQjB;QAkQwB,eJrPL,EIsPE;IAnQrB;MA+PoB,eJ7PD,EIkQF;MApQjB;QAkQwB,eJhQL,EIiQE;IAnQrB;MA+PoB,eJhQL,EIqQE;MApQjB;QAkQwB,eJnQT,EIoQM;IAnQrB;MA+PoB,eJ/PL,EIoQE;MApQjB;QAkQwB,eJlQT,EImQM;IAnQrB;MA+PoB,eJ9PN,EImQG;MApQjB;QAkQwB,eJjQV,EIkQO;IAnQrB;MA+PoB,eJ7PD,EIkQF;MApQjB;QAkQwB,eJhQL,EIiQE;IAnQrB;MA+PoB,eJ5PN,EIiQG;MApQjB;QAkQwB,eJ/PV,EIgQO;IAnQrB;MA+PoB,eJ3PL,EIgQE;MApQjB;QAkQwB,eJ9PT,EI+PM;IAnQrB;MA+PoB,eJzPL,EI8PE;MApQjB;QAkQwB,eJ5PT,EI6PM;IAnQrB;MA0QoB,eJjQN,EIsQG;MA/QjB;QA6QwB,eJpQV,EIqQO;IA9QrB;MA0QoB,eJhQL,EIqQE;MA/QjB;QA6QwB,eJnQT,EIoQM;IA9QrB;MA0QoB,eJ/PN,EIoQG;MA/QjB;QA6QwB,eJlQV,EImQO;IA9QrB;MA0QoB,eJ9PL,EImQE;MA/QjB;QA6QwB,eJjQT,EIkQM;IA9QrB;MA0QoB,eJ7PD,EIkQF;MA/QjB;QA6QwB,eJhQL,EIiQE;IA9QrB;MA0QoB,eJ5PC,EIiQJ;MA/QjB;QA6QwB,eJ/PH,EIgQA;IA9QrB;MA0QoB,eJ3PA,EIgQH;MA/QjB;QA6QwB,eJ9PJ,EI+PC;IA9QrB;MA0QoB,eJ1PD,EI+PF;MA/QjB;QA6QwB,eJ7PL,EI8PE;IA9QrB;MA0QoB,eJzPF,EI8PD;MA/QjB;QA6QwB,eJ5PN,EI6PG;EA9QrB;IAoRY,eJjRE;IIkRF,oBJjRG,EIsTN;IA1TT;MAwRgB,yBAAwB;MAAxB,gCAAwB;MAAxB,sBAAwB;MAAxB,wBAAwB,EAC3B;IAzRb;MA4RgB,yEAAwD,EAC3D;IA7Rb;MAgSgB,0CAA0B,EAC7B;IAjSb;MAsSoB,eJtSL;MIuSK,oBJ7RL,EI8RE;IAxSjB;MAsSoB,eJtSL;MIuSK,oBJ3RL,EI4RE;IAxSjB;MAsSoB,eJtSL;MIuSK,oBJxRA,EIyRH;IAxSjB;MAsSoB,eJtSL;MIuSK,oBJ1RD,EI2RF;IAxSjB;MAsSoB,eJtSL;MIuSK,oBJrSD,EIsSF;IAxSjB;MAsSoB,eJtSL;MIuSK,oBJxSL,EIySE;IAxSjB;MAsSoB,eJtSL;MIuSK,oBJvSL,EIwSE;IAxSjB;MAsSoB,eJtSL;MIuSK,oBJtSN,EIuSG;IAxSjB;MAsSoB,eJtSL;MIuSK,oBJrSD,EIsSF;IAxSjB;MAsSoB,eJtSL;MIuSK,oBJpSN,EIqSG;IAxSjB;MAsSoB,eJtSL;MIuSK,oBJnSL,EIoSE;IAxSjB;MAsSoB,eJtSL;MIuSK,oBJjSL,EIkSE;IAxSjB;MA8SoB,eJ9SL;MI+SK,oBJtSN,EIuSG;IAhTjB;MA8SoB,eJ9SL;MI+SK,oBJrSL,EIsSE;IAhTjB;MA8SoB,eJ9SL;MI+SK,oBJpSN,EIqSG;IAhTjB;MA8SoB,eJ9SL;MI+SK,oBJnSL,EIoSE;IAhTjB;MA8SoB,eJ9SL;MI+SK,oBJlSD,EImSF;IAhTjB;MA8SoB,eJ9SL;MI+SK,oBJjSC,EIkSJ;IAhTjB;MA8SoB,eJ9SL;MI+SK,oBJhSA,EIiSH;IAhTjB;MA8SoB,eJ9SL;MI+SK,oBJ/RD,EIgSF;IAhTjB;MA8SoB,eJ9SL;MI+SK,oBJ9RF,EI+RD;IAhTjB;MAwTgB,eJrTF,EIsTD;EAzTb;IAyUY,YAAY;IACZ,aAAa;IACb,cAAc,EASjB;IApVT;MA8TgB,mBAAmB,EAMtB;MApUb;QAiUoB,YAAY;QACZ,mBAAmB,EACtB;IAnUjB;MAuUgB,YAAY,EACf;IAxUb;MA8UgB,+BAAgB,EACnB;IA/Ub;MAkVgB,gCAAgB,EACnB;;ACrVb;EACI,aAAa;EACb,YAAY,EAYf;EAdD;IAKQ,aAAa;IACb,YAAY,EAOf;IAbL;MASY,aAAa;MACb,YAAY,EAEf;;AAIT;EACI,uBAAuB,EAC1B;;AClBD;EACI,UAAU;EACV,WAAW,EAgBd;EAlBD;IAKQ,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,iBAAiB;IACjB,oBNPO,EMeV;IAjBL;MAYY,aAAa;MACb,YAAY;MACZ,uBAAuB;MACvB,eAAe,EAClB;;ACjBT;;;EAGE;AAEF;EACI,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB,EAkKvB;EArKD;IAOQ,qBAAqB;IACrB,eAAe,EAQlB;IAhBL;MAYgB,gBAAgB;MAChB,uBAAuB,EAC1B;EAdb;IAmBQ,iBAAiB;IACjB,0BAA0B;IAC1B,6BAA6B;IAC7B,4BAA4B;IAC5B,oBAAoB;IACpB,gBAAgB;IAChB,uBAAuB,EAM1B;IA/BL;MA4BY,6BAA6B;MAC7B,4BAA4B,EAC/B;EA9BT;IAkCQ,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB,EAe1B;IAnDL;MAuCY,YAAY;MACZ,eAAe;MACf,uBAAuB;MACvB,+BAA+B;MAC/B,gCAAgC;MAChC,mBAAmB;MACnB,mBAAmB,EAKtB;MAlDT;QAgDgB,+BAA+B,EAClC;EAjDb;IAuDY,qBAAc;IAAd,sBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,+BAAoB;IAApB,8BAAoB;IAApB,4BAAoB;IAApB,wBAAoB;IAApB,oBAAoB;IACpB,0BAA+B;IAA/B,uCAA+B;IAA/B,uBAA+B;IAA/B,+BAA+B,EAKlC;IA9DT;MA4DgB,WAAW,EACd;EA7Db;IAmEY,oBPrEG,EOsEN;EApET;IAuEY,oBPvEO;IOwEP,mBAAmB;IACnB,mBAAmB;IACnB,sBAAsB;IACtB,0BAAwB,EA8C3B;IAzHT;MA8EgB,ePrEF;MOsEE,mBAAmB,EACtB;IAhFb;MAoFoB,iCAA+B;MAC/B,oBAAoB,EAKvB;MA1FjB;QAwFwB,iBAAiB,EACpB;IAzFrB;MA6FoB,eAAe;MACf,eAAa;MACb,cAAc;MACd,cAAc;MACd,iBAAiB;MACjB,mBAAmB;MACnB,oBAAkB;MAClB,0BAAwB,EAmB3B;MAvHjB;QAuGwB,mBAAmB,EACtB;MAxGrB;QA2GwB,eAAe,EAClB;MA5GrB;QA+GwB,eAAe;QACf,iBAAiB;QACjB,iBAAiB,EAKpB;QAtHrB;UAoH4B,iBAAiB,EACpB;EArHzB;;IA8HQ,eAAe;IACf,iBAAiB,EACpB;EAhIL;IAmIQ,ePtHY,EOuHf;EApIL;IAuIQ,eP7HO,EO8HV;EAxIL;;;;;IA+IQ,eAAe,EAYlB;IA3JL;;;;;MAkJY,oBPlJO,EOmJV;IAnJT;;;;;MAuJgB,eAAe,EAElB;EAzJb;;;;;IAmKQ,eAAe,EAClB;;ACxKL;EACI,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,aAAa;EACb,cAAc;EACd,eRJW;EQKX,0BAA0B;EAC1B,mBAAmB;EACnB,0BAA0B,EA8I7B;EAvJD;IAaQ,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,eAAe,EAqBlB;IArCL;MAmBY,eAAe,EAClB;IApBT;MAuBY,WAAW;MACX,iBAAiB,EACpB;IAzBT;MA4BY,gCAAgB;MAChB,iBAAiB;MACjB,sBAAsB,EACzB;IA/BT;MAkCY,mBAAmB;MACnB,YAAY,EACf;EApCT;IAyCQ,YAAY;IACZ,iBAAiB;IACjB,yBAAyB;IACzB,eAAe,EAuBlB;IAnEL;MA+CY,cR7CG,EQ8CN;IAhDT;MAmDY,cRnCS;MQoCT,kCAA0B;MAA1B,0BAA0B;MAC1B,oCAA4B;MAA5B,4BAA4B;MAC5B,4CAAoC;MAApC,oCAAoC;MACpC,0CAAkC;MAAlC,kCAAkC;MAClC,oCAA4B;MAA5B,4BAA4B,EAC/B;IAzDT;MA4DY,cR5CS;MQ6CT,kCAA0B;MAA1B,0BAA0B;MAC1B,oCAA4B;MAA5B,4BAA4B;MAC5B,4CAAoC;MAApC,oCAAoC;MACpC,0CAAkC;MAAlC,kCAAkC;MAClC,+BAAuB;MAAvB,uBAAuB,EAC1B;EAlET;IAuEQ,YAAY;IACZ,iBAAiB;IACjB,yBAAyB;IACzB,eAAe,EAClB;EA3EL;IA+EQ,mBAAmB;IACnB,mBAAmB;IACnB,WAAW;IACX,iBAAiB,EACpB;EAnFL;IAsFQ,eAAe;IACf,UAAU;IACV,eAAe,EAClB;EAzFL;IA4FQ,eAAe;IACf,WAAW;IACX,eAAe;IACf,oBAAoB;IACpB,iBAAiB;IACjB,eAAa;IACb,+BAAuB;IAAvB,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,0BAAkB;IAAlB,uBAAkB;IAAlB,sBAAkB;IAAlB,kBAAkB;IAClB,yCAAiC;IACjC,mBAAmB,EACtB;EAzGL;;IA6GQ,cAAc;IACd,YAAY,EACf;EA/GL;IAkHQ,YAAY;IACZ,+BAAuB;IAAvB,uBAAuB,EAC1B;EApHL;IAuHQ,eAAe,EAYlB;IAnIL;MA0HY,eAAe;MACf,oBAAoB;MACpB,eAAe;MACf,0BAA0B;MAC1B,gBAAgB;MAChB,iBAAiB;MACjB,qBAAqB;MACrB,aAAa,EAChB;EAlIT;IAsIQ,mBAAmB;IACnB,WAAW;IACX,OAAO;IACP,eAAe;IACf,WAAW;IACX,qBAAqB;IACrB,oBR5Ha;IQ6Hb,2CAA2B;IAA3B,mCAA2B;IAA3B,2BAA2B;IAA3B,mDAA2B;IAC3B,mEAAwC;IAAxC,2DAAwC,EAC3C;EA/IL;IAoJY,yCAAsB;IAAtB,iCAAsB,EACzB;EArJT;IAoJY,2CAAsB;IAAtB,mCAAsB,EACzB;EArJT;IAoJY,2CAAsB;IAAtB,mCAAsB,EACzB;EArJT;IAoJY,2CAAsB;IAAtB,mCAAsB,EACzB;EArJT;IAoJY,2CAAsB;IAAtB,mCAAsB,EACzB;EArJT;IAoJY,2CAAsB;IAAtB,mCAAsB,EACzB;EArJT;IAoJY,2CAAsB;IAAtB,mCAAsB,EACzB;EArJT;IAoJY,2CAAsB;IAAtB,mCAAsB,EACzB;EArJT;IAoJY,2CAAsB;IAAtB,mCAAsB,EACzB;EArJT;IAoJY,2CAAsB;IAAtB,mCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;EArJT;IAoJY,4CAAsB;IAAtB,oCAAsB,EACzB;;AAIT;EACI;IACI,gCAAyB,EAAA;EAE7B;IACI,kCAAyB,EAAA,EAAA;;AAIjC;EACI;IACI,kCAAyB,EAAA;EAE7B;IACI,gCAAyB,EAAA,EAAA;;ACxKjC,0CAA0C;AAC1C,gGAAgG;AAChG,4FAA4F;AAE5F,6BAA6B;AAC7B;;EAEI,eAAe,EAClB;;AAED,yBAAyB;AACzB;;;;;;;;;;EAUI,eAAe,EAClB;;AAED,4BAA4B;AAC5B;;;;;;;EAOI,eAAe,EAClB;;AAED,2BAA2B;AAC3B;;;EAGI,eAAe,EAClB;;AAED,0BAA0B;AAC1B;;EAEI,eAAe,EAClB;;AAED,4BAA4B;AAC5B;;EAEI,eAAe,EAClB;;AAED;;EAEI,eAAe;EACf,sBAAsB;EACtB,YAAY,EACf;;AAED;EACI,0BAA0B,EAC7B;;AAED;EACI,0BAA0B,EAC7B;;AAED;EACI,eAAe;EACf,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;EACf,eAAe,EAClB;;AAED;EACI,mBAAmB,EACtB;;AAED;EACI,kBAAkB,EACrB;;ACjFD;EACI,cAAc;EACd,gBAAgB;EAChB,YAAY,EAkBf;EArBD;IAMQ,gBAAgB;IAChB,sBAAsB;IACtB,eAAe,EAKlB;IAbL;MAWY,cAAc,EACjB;EAZT;IAgBQ,0BAA0B;IAC1B,6BAAmB;IACnB,gBAAgB;IAChB,qBAAqB,EACxB;;AAGL;EACI,aAAa;EACb,wBAAwB;EACxB,cAAc;EACd,gBAAgB;EAChB,uBAAuB,EAM1B;EAXD;IASQ,cAAc,EACjB;;AC8fG;ED1fJ;IAEQ,qBAAqB,EACxB;EAHL;IAQgB,YAAY,EACf;EATb;IAYgB,cAAc,EACjB,EAAA;;AC6eT;EDteJ;IAIgB,YAAY,EACf;EALb;IAQgB,WAAW,EACd,EAAA;;AC6dT;EDtdJ;IACI,qCAAqB;IAArB,6BAAqB;IACrB,0CAAkC;IAAlC,kCAAkC,EAKrC;IAPD;MAKQ,mCAAqB;MAArB,2BAAqB,EACxB;EAGL;IACI,UAAU;IACV,mCAAqB;IAArB,2BAAqB;IACrB,0CAAkC;IAAlC,kCAAkC,EAKrC;IARD;MAMQ,qCAAqB;MAArB,6BAAqB,EACxB;EAGL;IACI,qBAAc;IAAd,sBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,+BAAoB;IAApB,8BAAoB;IAApB,4BAAoB;IAApB,wBAAoB;IAApB,oBAAoB;IACpB,0BAA+B;IAA/B,uCAA+B;IAA/B,uBAA+B;IAA/B,+BAA+B;IAC/B,0BAAoB;IAApB,4BAAoB;IAApB,uBAAoB;IAApB,oBAAoB,EACvB;EAED;IACI,eAAe,EAClB,EAAA;;AEvGL;EAEQ,0CAAkC;EAAlC,kCAAkC;EAiBlC,mBAAmB,EAsDtB;EAzEL;IAKY,eZUG,EYTN;EANT;;IAUY,eZJE,EYKL;EAXT;;;IAgBY,4CAAoC;IAApC,oCAAoC;IACpC,gCAAwB;IAAxB,wBAAwB,EAC3B;EAlBT;IAsBY,WAAW,EACd;EAvBT;IA0BY,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,OAAO;IACP,UAAU;IACV,SAAS;IACT,qBAAc;IAAd,sBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,+BAAoB;IAApB,8BAAoB;IAApB,4BAAoB;IAApB,wBAAoB;IAApB,oBAAoB;IACpB,wBAAgB;IAAhB,oBAAgB;IAAhB,gBAAgB;IAChB,0BAAoB;IAApB,4BAAoB;IAApB,uBAAoB;IAApB,oBAAoB;IACpB,WAAW;IACX,sBAA0B;IAA1B,kCAA0B;IAA1B,mBAA0B;IAA1B,0BAA0B;IAC1B,oBZjCO;IYkCP,iDAAyC;IAAzC,yCAAyC,EAiC5C;IAxET;MA0CgB,0CAAkC;MAAlC,kCAAkC;MAClC,cAAc;MACd,aAAa;MACb,mBAAmB,EAMtB;MAnDb;QAgDoB,8BAAgB;QAAhB,sBAAgB;QAChB,mBAAmB,EACtB;IAlDjB;MAyDoB,oBZlCH;MYmCG,YAFgB;MAGhB,aAHgB,EAInB;IA5DjB;MAyDoB,oBZjCD;MYkCC,YAFgB;MAGhB,aAHgB,EAInB;IA5DjB;MAyDoB,oBZhCA;MYiCA,YAFgB;MAGhB,aAHgB,EAInB;IA5DjB;MAyDoB,oBZ/BN;MYgCM,YAFgB;MAGhB,aAHgB,EAInB;IA5DjB;MAyDoB,oBZ9BH;MY+BG,YAFgB;MAGhB,aAHgB,EAInB;IA5DjB;MAyDoB,oBZ7BC;MY8BD,YAFgB;MAGhB,aAHgB,EAInB;IA5DjB;MAyDoB,oBZ5BP;MY6BO,YAFgB;MAGhB,aAHgB,EAInB;IA5DjB;MAyDoB,oBZ3BA;MY4BA,YAFgB;MAGhB,aAHgB,EAInB;IA5DjB;MAyDoB,oBZ1BD;MY2BC,YAFgB;MAGhB,aAHgB,EAInB;IA5DjB;MAmEoB,oBZvDN;MYwDM,YAFgB;MAGhB,aAHgB,EAInB;IAtEjB;MAmEoB,oBZtDL;MYuDK,YAFgB;MAGhB,aAHgB,EAInB;IAtEjB;MAmEoB,oBZrDN;MYsDM,YAFgB;MAGhB,aAHgB,EAInB;IAtEjB;MAmEoB,oBZpDL;MYqDK,YAFgB;MAGhB,aAHgB,EAInB;IAtEjB;MAmEoB,oBZnDD;MYoDC,YAFgB;MAGhB,aAHgB,EAInB;IAtEjB;MAmEoB,oBZlDC;MYmDD,YAFgB;MAGhB,aAHgB,EAInB;IAtEjB;MAmEoB,oBZjDA;MYkDA,YAFgB;MAGhB,aAHgB,EAInB;IAtEjB;MAmEoB,oBZhDD;MYiDC,YAFgB;MAGhB,aAHgB,EAInB;IAtEjB;MAmEoB,oBZ/CF;MYgDE,YAFgB;MAGhB,aAHgB,EAInB;;AAtEjB;EA6EY,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;EAApB,4BAAoB;EAApB,wBAAoB;EAApB,oBAAoB;EACpB,wBAA4B;EAA5B,oCAA4B;EAA5B,qBAA4B;EAA5B,4BAA4B;EAC5B,wBAAgB;EAAhB,oBAAgB;EAAhB,gBAAgB;EAChB,uBAAsB;EAAtB,8BAAsB;EAAtB,oBAAsB;EAAtB,sBAAsB;EACtB,YAAY,EAyIf;EA3NT;IAqFgB,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;IACnB,oBAAoB,EA+HvB;IA1Nb;MAiGwB,gCAAgB;MAAhB,wBAAgB,EACnB;IAlGrB;MAsGoB,iBAAiB,EACpB;IAvGjB;MA0GoB,cAAc;MACd,iBAAiB;MACjB,eAAe,EAClB;IA7GjB;;MAiHoB,iBAAiB,EACpB;IAlHjB;MAqHoB,cAAc;MACd,WAAW;MACX,mBAAmB;MACnB,OAAO;MACP,SAAS;MACT,kBAAkB;MAClB,yCAAiC;MAAjC,iCAAiC;MACjC,mBAAmB;MACnB,gBAAgB,EACnB;IA9HjB;MAiIoB,YAAY;MACZ,mBAAmB;MACnB,SAAS;MACT,UAAU;MACV,yCAAoB;MAApB,iCAAoB;MACpB,cAAc;MACd,iBAAiB;MACjB,eAAe;MACf,gBAAgB,EAkBnB;MA3JjB;QA4IwB,yBAAyB;QACzB,mBAAmB;QACnB,gCAAW;QACX,UAAU;QACV,UAAU;QACV,gBAAgB;QAChB,0BAA0B;QAC1B,oCAAqB;QAArB,4BAAqB;QACrB,YAAY,EACf;MArJrB;QAwJwB,iBAAiB;QACjB,cAAc,EACjB;IA1JrB;MA+JwB,oBZtIJ,EYuIC;IAhKrB;MAqKwB,oBZxJT,EYyJM;IAtKrB;MA2KwB,oBZrKV,EYsKO;IA5KrB;MAgLoB,eZ1KN,EYiMG;MAvMjB;QAoL4B,yBAAyB;QACzB,mBAAmB;QACnB,6BZhLd;QYiLc,UAAU;QACV,UAAU;QACV,gBAAgB;QAChB,0BAA0B;QAC1B,oCAAqB;QAArB,4BAAqB;QACrB,YAAY,EACf;MA7LzB;QAiMwB,eZ3LV,EY4LO;MAlMrB;QAqMwB,oBZhML,EYiME;IAtMrB;MA6M4B,oBZtLX,EYuLQ;IA9MzB;MA6M4B,oBZrLT,EYsLM;IA9MzB;MA6M4B,oBZpLR,EYqLK;IA9MzB;MA6M4B,oBZnLd,EYoLW;IA9MzB;MA6M4B,oBZlLX,EYmLQ;IA9MzB;MA6M4B,oBZjLP,EYkLI;IA9MzB;MA6M4B,oBZhLf,EYiLY;IA9MzB;MA6M4B,oBZ/KR,EYgLK;IA9MzB;MA6M4B,oBZ9KT,EY+KM;IA9MzB;MAsN4B,oBZ1Md,EY2MW;IAvNzB;MAsN4B,oBZzMb,EY0MU;IAvNzB;MAsN4B,oBZxMd,EYyMW;IAvNzB;MAsN4B,oBZvMb,EYwMU;IAvNzB;MAsN4B,oBZtMT,EYuMM;IAvNzB;MAsN4B,oBZrMP,EYsMI;IAvNzB;MAsN4B,oBZpMR,EYqMK;IAvNzB;MAsN4B,oBZnMT,EYoMM;IAvNzB;MAsN4B,oBZlMV,EYmMO;;AAQzB;EAUgB,+BAA6B,EAKhC;EAfb;;;IAQoB,YAAY,EACf;EATjB;IAaoB,+BAA6B,EAChC;;AAdjB;EAUgB,+BAA6B,EAKhC;EAfb;;;IAQoB,YAAY,EACf;EATjB;IAaoB,+BAA6B,EAChC;;AAdjB;EAUgB,+BAA6B,EAKhC;EAfb;;;IAQoB,YAAY,EACf;EATjB;IAaoB,+BAA6B,EAChC;;AAdjB;EAUgB,+BAA6B,EAKhC;EAfb;;;IAQoB,YAAY,EACf;EATjB;IAaoB,+BAA6B,EAChC;;AAdjB;EAUgB,+BAA6B,EAKhC;EAfb;;;IAQoB,YAAY,EACf;EATjB;IAaoB,+BAA6B,EAChC;;AAdjB;EAUgB,+BAA6B,EAKhC;EAfb;;;IAQoB,YAAY,EACf;EATjB;IAaoB,+BAA6B,EAChC;;AAdjB;EAUgB,+BAA6B,EAKhC;EAfb;;;IAQoB,YAAY,EACf;EATjB;IAaoB,+BAA6B,EAChC;;AAdjB;EAUgB,+BAA6B,EAKhC;EAfb;;;IAQoB,YAAY,EACf;EATjB;IAaoB,+BAA6B,EAChC;;AAdjB;EAUgB,+BAA6B,EAKhC;EAfb;;;IAQoB,YAAY,EACf;EATjB;IAaoB,+BAA6B,EAChC;;AAdjB;EA0BgB,+BAA6B,EAKhC;EA/Bb;;;IAwBoB,YAAY,EACf;EAzBjB;IA6BoB,+BAA6B,EAChC;;AA9BjB;EA0BgB,+BAA6B,EAKhC;EA/Bb;;;IAwBoB,YAAY,EACf;EAzBjB;IA6BoB,+BAA6B,EAChC;;AA9BjB;EA0BgB,+BAA6B,EAKhC;EA/Bb;;;IAwBoB,YAAY,EACf;EAzBjB;IA6BoB,+BAA6B,EAChC;;AA9BjB;EA0BgB,+BAA6B,EAKhC;EA/Bb;;;IAwBoB,YAAY,EACf;EAzBjB;IA6BoB,+BAA6B,EAChC;;AA9BjB;EA0BgB,+BAA6B,EAKhC;EA/Bb;;;IAwBoB,YAAY,EACf;EAzBjB;IA6BoB,+BAA6B,EAChC;;AA9BjB;EA0BgB,+BAA6B,EAKhC;EA/Bb;;;IAwBoB,YAAY,EACf;EAzBjB;IA6BoB,+BAA6B,EAChC;;AA9BjB;EA0BgB,+BAA6B,EAKhC;EA/Bb;;;IAwBoB,YAAY,EACf;EAzBjB;IA6BoB,+BAA6B,EAChC;;AA9BjB;EA0BgB,+BAA6B,EAKhC;EA/Bb;;;IAwBoB,YAAY,EACf;EAzBjB;IA6BoB,+BAA6B,EAChC;;AA9BjB;EA0BgB,+BAA6B,EAKhC;EA/Bb;;;IAwBoB,YAAY,EACf;EAzBjB;IA6BoB,+BAA6B,EAChC;;AA9BjB;EAmCY,oBZ7PO,EYkQV;EAxCT;IAsCgB,oBZhQG,EYiQN;;ACtQb;;EAGQ,ebca,EabhB;;AAJL;EAQY,iBAAiB;EACjB,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAAoB;EAApB,4BAAoB;EAApB,uBAAoB;EAApB,oBAAoB;EACpB,wBAA4B;EAA5B,oCAA4B;EAA5B,qBAA4B;EAA5B,4BAA4B;EAC5B,2CbEE;EaDF,cAAc;EACd,gBAAgB;EAChB,oBAAoB;EACpB,0BAA0B,EAwB7B;EAxCT;IAmBgB,uBAAe;IAAf,qBAAe;IAAf,eAAe;IACf,eAAe;IACf,ebPF;IaQE,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,0BbZF;IaaE,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB,EACtB;EA9Bb;IAiCgB,2CbhBK,EasBR;IAvCb;MAoCoB,ebnBC;MaoBD,0BbpBC,EaqBJ;;ACtCjB;EAEQ,oBAAoB,EACvB;;AAHL;EAKQ,edOM,EcNT;;AANL;EAQQ,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;EAApB,4BAAoB;EAApB,wBAAoB;EAApB,oBAAoB;EACpB,wBAA4B;EAA5B,oCAA4B;EAA5B,qBAA4B;EAA5B,4BAA4B;EAC5B,0BAAoB;EAApB,4BAAoB;EAApB,uBAAoB;EAApB,oBAAoB,EAavB;EAxBL;IAaY,qBAAc;IAAd,sBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,6BAAuB;IAAvB,8BAAuB;IAAvB,+BAAuB;IAAvB,2BAAuB;IAAvB,uBAAuB;IACvB,eAAa;IACb,0BAA0B,EAI7B;IApBT;MAkBgB,mBAAmB,EACtB;;AAnBb;EA0BQ,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;EAApB,4BAAoB;EAApB,wBAAoB;EAApB,oBAAoB;EACpB,0BAAoB;EAApB,4BAAoB;EAApB,uBAAoB;EAApB,oBAAoB;EACpB,wBAA4B;EAA5B,oCAA4B;EAA5B,qBAA4B;EAA5B,4BAA4B,EAoB/B;EAjDL;IA+BY,cAAc;IACd,mBAAmB,EAgBtB;IAhDT;MAmCoB,UAAU;MACV,WAAW,EACd;IArCjB;MAwCgB,ed3BD,Ec+BF;MA5Cb;QA0CoB,edfH,EcgBA;IA3CjB;MA8CgB,eAAa,EAChB;;AA/Cb;;EAoDQ,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,yBAAwB;EAAxB,gCAAwB;EAAxB,sBAAwB;EAAxB,wBAAwB;EACxB,0BAAoB;EAApB,4BAAoB;EAApB,uBAAoB;EAApB,oBAAoB,EAIvB;EA1DL;;IAwDY,mBAAmB,EACtB;;AAzDT;EA4DQ,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;EAApB,4BAAoB;EAApB,wBAAoB;EAApB,oBAAoB;EACpB,0BAAoB;EAApB,4BAAoB;EAApB,uBAAoB;EAApB,oBAAoB;EACpB,sCAA8B;EAA9B,0BAA8B;EAA9B,8BAA8B;EAC9B,cAAc,EAIjB;EApEL;IAkEY,mBAAmB,EACtB;;AAnET;EAsEQ,cAAc,EAKjB;EA3EL;IAwEY,eAAe;IACf,eAAe,EAClB;;AC1ET;EAEQ,oBAAoB,EACvB;;AAHL;;EAOQ,efYW,EeXd;;AARL;EAYY,iBAAiB,EACpB;;AAbT;EAkBY,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAA+B;EAA/B,uCAA+B;EAA/B,uBAA+B;EAA/B,+BAA+B;EAC/B,0BAAoB;EAApB,4BAAoB;EAApB,uBAAoB;EAApB,oBAAoB;EACpB,eAAe,EAQlB;EA7BT;IA2BgB,eAAe,EAClB;;AA5Bb;EAiCgB,eAAe,EAClB;;AAlCb;EAwCoB,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAAoB;EAApB,4BAAoB;EAApB,uBAAoB;EAApB,oBAAoB;EACpB,wBAA4B;EAA5B,oCAA4B;EAA5B,qBAA4B;EAA5B,4BAA4B;EAC5B,+BAAoB;EAApB,8BAAoB;EAApB,4BAAoB;EAApB,wBAAoB;EAApB,oBAAoB;EACpB,YAAY,EAmBf;EA/DjB;IA+CwB,sBAAsB;IACtB,UAAU,EACb;EAjDrB;IAoDwB,YAAY;IACZ,oBf9CT;Ie+CS,aAAa,EAChB;EAvDrB;IA0DwB,cAAc;IACd,0BfxCL;IeyCK,mBAAmB;IACnB,mBAAmB,EACtB;;AA9DrB;EAkEoB,eAAe,EAOlB;EAzEjB;IAsE4B,YAAY,EACf;;AAvEzB;EA4EoB,eAAe,EAalB;EAzFjB;IAgF4B,YAAY,EACf;EAjFzB;IAoF4B,oBfjET;IekES,YAAY;IACZ,0BAAwB,EAC3B;;AAvFzB;EA4FoB,eAAe,EAelB;EA3GjB;IAgG4B,YAAY,EACf;EAjGzB;IAoG4B,mBAAmB,EACtB;EArGzB;IAwG4B,mBAAmB,EACtB;;AAzGzB;EAiHQ,cAAc,EAmCjB;EApJL;IAoHY,qBAAc;IAAd,sBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,6BAAuB;IAAvB,8BAAuB;IAAvB,+BAAuB;IAAvB,2BAAuB;IAAvB,uBAAuB;IACvB,yBAAwB;IAAxB,gCAAwB;IAAxB,sBAAwB;IAAxB,wBAAwB;IACxB,wBAA4B;IAA5B,oCAA4B;IAA5B,qBAA4B;IAA5B,4BAA4B;IAC5B,iCAAiC;IACjC,cAAc,EAmBjB;IA5IT;;;;;;MAiIgB,eAAe,EAClB;IAlIb;MAqIgB,2BAAW,EACd;IAtIb;MAyIgB,cAAc;MACd,cAAc,EACjB;EA3Ib;IA+IY,aAAa;IACb,YAAY;IACZ,oBAAoB;IACpB,eAAe,EAClB;;ACnJT;;EAGQ,ehBWM,EgBVT;;AAJL;EASY,eAAe;EACf,4BAA4B;EAC5B,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,aAAa,EAKhB;EAnBT;IAiBgB,kBAAkB,EACrB;;AClBb;EAEQ,mBAAmB;EACnB,6BAA6B;EAC7B,4BAA4B;EAC5B,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;EAApB,4BAAoB;EAApB,wBAAoB;EAApB,oBAAoB;EACpB,uBAAe;EAAf,qBAAe;EAAf,eAAe;EACf,oBAAa;EAAb,qBAAa;EAAb,qBAAa;EAAb,aAAa;EACb,0BAAoB;EAApB,4BAAoB;EAApB,uBAAoB;EAApB,oBAAoB;EACpB,wBAAgB;EAAhB,oBAAgB;EAAhB,gBAAgB;EAChB,iDAAyC;EAAzC,yCAAyC,EAgC5C;EA3CL;IAaY,uBAAe;IAAf,qBAAe;IAAf,eAAe;IACf,oBAAa;IAAb,qBAAa;IAAb,qBAAa;IAAb,aAAa;IACb,mBAAmB,EACtB;EAhBT;IAmBY,oBjBPE,EiBQL;EApBT;IAsBY,oBjBTG,EiBUN;EAvBT;IAyBY,oBjBVG,EiBWN;EA1BT;IA4BY,oBjBZO,EiBaV;EA7BT;IA+BY,oBjBdS,EiBeZ;EAhCT;IAkCY,oBjBhBQ,EiBiBX;EAnCT;IAqCY,oBjBjBM,EiBkBT;EAtCT;IAwCY,oBjBfQ;IiBgBR,cAAc,EACjB;;AC1CT;EAGY,kBAAkB,EACrB;;AAJT;EAOY,cAAc,EACjB;;AART;EAYQ,YAAY,EAKf;EAjBL;IAeY,oBlBFG,EkBGN;;AAhBT;EAoBQ,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;EAApB,4BAAoB;EAApB,wBAAoB;EAApB,oBAAoB;EACpB,0BAAkB;EAAlB,sBAAkB;EAAlB,kBAAkB;EAClB,cAAc,EAKjB;EA5BL;IA0BY,gBAAgB,EACnB;;AA3BT;EAgCY,cAAc,EAKjB;EArCT;IAmCgB,oBlBtBD,EkBuBF;;ACpCb;;;EAGE","file":"index.scss","sourcesContent":["/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-family: sans-serif; /* 1 */\n    -ms-text-size-adjust: 100%; /* 2 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n    margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n    display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n    display: inline-block; /* 1 */\n    vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n    display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n    background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n    border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n    font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n    font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n    background: #ff0;\n    color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsup {\n    top: -0.5em;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n    border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n    overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n    margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n    height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n    overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n    font-family: monospace, monospace;\n    font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    color: inherit; /* 1 */\n    font: inherit; /* 2 */\n    margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n    overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n    line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n    overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n    font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\ntd,\nth {\n    padding: 0;\n}\n\n*, *:after, *:before {\n    box-sizing: border-box;\n}\n","// Plugins (Third-Party-Libraries)\n// --------------------------------------------------\n@import \"../src/novo-elements\";\n\n// Global\n// --------------------------------------------------\n@import \"assets/styles/reset\";\n@import \"assets/styles/general\";\n@import \"assets/styles/main\";\n@import \"assets/styles/sidenav\";\n@import \"assets/styles/highlight\";\n@import \"assets/styles/media\";\n\n// Pages\n// --------------------------------------------------\n@import \"pages/color/Color\";\n@import \"pages/home/Home\";\n@import \"pages/iconography/Iconography\";\n@import \"pages/typography/Typography\";\n@import \"pages/layout/Layout\";\n@import \"pages/button/ButtonDemo\";\n@import \"pages/tabs/TabsDemo\";\n\n// Shameful CSS is unrefactored, quick fixes.\n// Ideally nothing is in this file - but it's better\n// than mucking up other stylesheets without being\n// totally sure it's a good idea\n@import \"assets/styles/shame\";\n","// Colors\n// --------------------------------------------------\n$black: #000000;\n$white: #ffffff;\n$grey: #999999;\n$off-white: #f4f4f4;\n$dark: #3D464D;\n$light: #D9DADC;\n$navy: #0D2D42;\n$pulse: #3BAFDA;\n\n// Analytics Colors\n$aqua: #3BAFDA;\n$ocean: #4A89DC;\n$mint: #37BC9B;\n$grass: #8CC152;\n$sunflower: #F6B042;\n$bittersweet: #EB6845;\n$grapefruit: #DA4453;\n$carnation: #D770AD;\n$lavender: #967ADC;\n\n// Entity Colors\n$company: #3399DD;\n$candidate: #44BB77;\n$navigation: #2F384F;\n$lead: #AA6699;\n$contact: #FFAA44;\n$opportunity: #662255;\n$job: #BB5566;\n$submission: #778899;\n$placement: #0B344F;\n\n// Color Applications\n$positive: $ocean;\n$success: $grass;\n$negative: $grapefruit;\n$warning: $sunflower;\n$background: $off-white;\n$background-dark: #E2E2E2;\n\n/*\n===================\n    Color Maps\n===================\n*/\n\n// Analytics Color Map\n$analytics-colors: (\n    aqua: $aqua,\n    ocean: $ocean,\n    mint: $mint,\n    grass: $grass,\n    sunflower: $sunflower,\n    bittersweet: $bittersweet,\n    grapefruit: $grapefruit,\n    carnation: $carnation,\n    lavender: $lavender\n);\n\n// Entity Color Map\n$entity-colors: (\n    company: $company,\n    candidate: $candidate,\n    navigation: $navigation,\n    lead: $lead,\n    contact: $contact,\n    opportunity: $opportunity,\n    job: $job,\n    submission: $submission,\n    placement: $placement\n);\n\n// Generic Color Map\n$colors: (\n    positive: $ocean,\n    success: $grass,\n    negative: $grapefruit,\n    warning: $sunflower,\n    background: $off-white,\n    black: $black,\n    white: $white,\n    grey: $grey,\n    off-white: $off-white,\n    dark: $dark,\n    light: $light,\n    pulse: $pulse\n);\n\n// Loading Dot Color Map\n$dot-colors: (\n    lavender: $lavender,\n    grapefruit: $grapefruit,\n    sunflower: $sunflower,\n    mint: $mint,\n    ocean: $ocean\n);\n\n// Typography\n// -------------------------\n$base-font-size: 14px;\n$base-font-family: \"Roboto\", sans-serif;\n$base-font-color: $dark;\n$base-line-height: 24px;\n$alt-font-family: Georgia, \"Times New Roman\", Times, serif;\n\n// Whiteframes\n// -------------------------\n$whiteframe-shadow-z1: 0px 2px 5px 0 rgba(0, 0, 0, 0.26) !default;\n$whiteframe-zindex-z1: 1 !default;\n$whiteframe-shadow-z2: 0px 8px 17px rgba(0, 0, 0, 0.2) !default;\n$whiteframe-zindex-z2: 2 !default;\n$whiteframe-shadow-z3: 0px 17px 50px rgba(0, 0, 0, 0.19) !default;\n$whiteframe-zindex-z3: 3 !default;\n$whiteframe-shadow-z4: 0px 16px 28px 0 rgba(0, 0, 0, 0.22) !default;\n$whiteframe-zindex-z4: 4 !default;\n$whiteframe-shadow-z5: 0px 27px 24px 0 rgba(0, 0, 0, 0.2) !default;\n$whiteframe-zindex-z5: 5 !default;\n\n// Z-indexes\n// -------------------------\n\n// Function to call z-indexes.\n// Usage: z-index: z('modal');\n\n@function z($layer) {\n    $z-layers: (\n        \"goku\": 9001,\n        \"modal\": 500,\n        \"tooltip\": 100,\n        \"toast\": 90,\n        \"dialogue\": 80,\n        \"bottom-sheet\": 70,\n        \"sidenav\": 60,\n        \"backdrop\": 50,\n        \"fab\": 20,\n        \"default\": 1,\n        \"below\": -1,\n        \"bottomless-pit\": -9000\n    );\n\n    @if not map-has-key($z-layers, $layer) {\n        @warn \"No layer found for `#{$layer}` in $z-layers map. Property omitted.\";\n    }\n\n    @return map-get($z-layers, $layer);\n}\n\n// Easing Curves\n// -------------------------\n// Usage: html-tag { @include ease('all', 'swift-ease-in-out'); }\n\n$easing-curves: (\n    \"swift-ease-out\":(\n        \"duration\": 400ms,\n        \"curve\": \"cubic-bezier(0.25, 0.8, 0.25, 1)\"\n    ),\n    \"swift-ease-in\": (\n        \"duration\": 300ms,\n        \"curve\": \"cubic-bezier(0.55, 0, 0.55, 0.2)\"\n    ),\n    \"swift-ease-in-out\": (\n        \"duration\": 500ms,\n        \"curve\": \"cubic-bezier(0.35, 0, 0.25, 1)\"\n    )\n);\n\n@function map-deep-get($map, $keys...) {\n    @each $key in $keys {\n        $map: map-get($map, $key);\n    }\n\n    @return $map;\n}\n\n@mixin ease($target, $curve-name) {\n    $duration: map-deep-get($easing-curves, $curve-name, \"duration\");\n    $curve: map-deep-get($easing-curves, $curve-name, \"curve\");\n    transition: #{$target $duration $curve};\n}\n\n// Animations\n// -------------------------\n@keyframes rotate {\n    0% {\n        transform: rotateZ(0deg);\n    }\n    75% {\n        transform: rotateZ(200deg);\n    }\n    100% {\n        transform: rotateZ(180deg);\n    }\n}\n\n@keyframes half-rotate {\n    0% {\n        transform: rotateZ(45deg);\n    }\n    75% {\n        transform: rotateZ(100deg);\n    }\n    100% {\n        transform: rotateZ(90deg);\n    }\n}\n\n@keyframes rotateBack {\n    0% {\n        transform: rotateZ(90deg);\n    }\n    100% {\n        transform: rotateZ(0deg);\n    }\n}\n\n@keyframes show {\n    0% {\n        opacity: 0;\n        transform: translateX(-100%);\n    }\n    75% {\n        transform: translateX(0px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateX(0);\n    }\n}\n","/**\n * Flex Grid -\n * Version: 0.3.2\n *\n * Simple grid built with flex box and sass.\n *\n * Matthew Simo - matthew.a.simo@gmail.com\n */\n\n/**\n * Grid setup\n *\n * The grid will calculate dimensions based on these two variables:\n * $fg-columns will inform the grid loops how many columns there should be.\n * $fg-gutter will inform the grid loops how big eac column's gutters should be.\n *\n * The grid will name columns, rows, offsets based on these three variables:\n * $fg-class-row string used for the row class\n * $fg-class-col string used for the column class\n * $fg-class-off string used for the offset class\n */\n$fg-columns: 12 !default;\n$fg-gutter: 0.5rem !default;\n$fg-class-row: 'row' !default;\n$fg-class-col: 'col' !default;\n$fg-class-off: 'off' !default;\n\n/**\n * Break point namespace object\n *\n * Set the default namespace object with these defaults with the\n * understanding that you can pass in whatever you might require for your site.\n *\n * $fg-breakpoints is a Sass list with nested lists inside. Each sub list defines two things.\n * 1. The namespace for that breakpoint. (Required) (i.e. xs, sm, md, lg)\n * 2. The min-width measurement for the breakpoint for that namespace. (i.e. 48em, 62em, 75em)\n *\n * Note: These should be in the proper order (at least till libsass handles map keys properly).\n *\n * Note: If the measurement is left out then it will be skipped when generating\n * the grid and applied to global styles.\n *\n */\n$fg-breakpoints: ((xs), (sm, 768px), (md, 992px), (lg, 1200px)) !default;\n\n/**\n * Class Name Defaults\n *\n * Define class names for columns, rows and offsets in case compatibility with other\n * libraries is necessary.\n\n/**\n * Calculate column size percentage\n */\n@function get-col-percent($column-num) {\n    @return $column-num / $fg-columns * 100%;\n}\n\n/**\n * Spacing mixin to create uniform margin/padding\n */\n@mixin spacing( $value, $type: margin, $orientation: vertical ) {\n    @if $orientation == vertical {\n        #{ $type }-top: $value;\n        #{ $type }-bottom: $value;\n    } @else {\n        #{ $type }-left: $value;\n        #{ $type }-right: $value;\n    }\n}\n\n/**\n * Row wrapper class, flex box parent.\n */\n.#{ $fg-class-row } {\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    @include spacing((-$fg-gutter), margin, horizontal);\n}\n\n%#{ $fg-class-col } {\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 0;\n    flex-shrink: 0;\n    @include spacing(($fg-gutter), padding, horizontal);\n}\n\n%#{ $fg-class-col }-flex {\n    @extend %#{ $fg-class-col };\n    flex-grow: 1;\n    flex-basis: 0;\n    max-width: 100%;\n}\n\n/**\n * Generate a set of grid column classes using a namespace\n *\n * .#{ $fg-class-col }-[namespace] for intelligent column division\n * .#{ $fg-class-col }-[namespace]-[number] for a column that covers a specific number of columns (e.g. 1-12 by default)\n * .#{ $fg-class-off }-[namespace]-[number] for pushing a col a specific number of columns (e.g. 1-11 by default)\n */\n@mixin grid-base( $namespace ) {\n    .#{ $fg-class-col }-#{$namespace} {\n        @extend %#{ $fg-class-col }-flex;\n    }\n    @for $i from 1 through $fg-columns {\n        .#{ $fg-class-col }-#{$namespace}-#{$i} {\n            @extend %#{ $fg-class-col };\n        }\n    }\n}\n\n@mixin grid-sizes( $namespace ) {\n    // Run the loop for as many columns as speficied\n    @for $i from 1 through $fg-columns {\n        .#{ $fg-class-col }-#{$namespace}-#{$i} {\n            flex-basis: get-col-percent($i);\n            max-width: get-col-percent($i);\n        }\n    }\n    @for $i from 1 through $fg-columns {\n        // Don't include the .off class for the last column\n        @if ($i != $fg-columns) {\n            .#{ $fg-class-off }-#{$namespace}-#{$i} {\n                margin-left: get-col-percent($i);\n            }\n        }\n    }\n}\n\n/**\n * Build the grid in two steps, to help minimize file size\n * Step 1, for each namespace, create the grid-base\n * Step 2, for each namespace, wrap the col width/offset measurements in their breakpoint media query\n */\n@each $val in $fg-breakpoints {\n    $namespace: nth($val, 1);\n    @include grid-base($namespace);\n}\n\n@each $val in $fg-breakpoints {\n    @if length($val) == 1 {\n        $namespace: nth($val, 1);\n        @include grid-sizes($namespace);\n    } @else {\n        $namespace: nth($val, 1);\n        $size: nth($val, 2);\n        @media only screen and (min-width: #{$size}) {\n            @include grid-sizes($namespace);\n        }\n    }\n}\n","// HTML Root\n// --------------------------------------------------\n\nhtml {\n    font-family: $base-font-family;\n    font-size: $base-font-size;\n    color: $base-font-color;\n}\n\n// Headers\n// --------------------------------------------------\n\nh1 {\n    font-size: 2.5em;\n    font-weight: 400;\n    margin: 0;\n    padding: 0.45em 0 0.35em;\n    max-width: 33em;\n}\n\nh2 {\n    font-size: 2em;\n    font-weight: 500;\n    margin: 0;\n    padding: 0.75em 0 0.3em;\n    max-width: 33em;\n}\n\nh3 {\n    font-size: 1.75em;\n    font-weight: 300;\n    margin: 0;\n    padding: 0.6em 0 0.4em;\n    max-width: 33em;\n}\n\nh4 {\n    font-size: 1.375em;\n    font-weight: 400;\n    margin: 0;\n    padding: 0.75em 0 0.5em;\n    max-width: 33em;\n}\n\nh5 {\n    font-size: 1.125em;\n    font-weight: 700;\n    margin: 0;\n    padding: 0.75em 0 0.25em;\n    text-transform: uppercase;\n    color: rgba(0, 0, 0, .45);\n    max-width: 33em;\n}\n\nh6 {\n    font-size: 1.125em;\n    font-weight: 500;\n    margin: 0;\n    padding: 0.75em 0 0.25em;\n    max-width: 33em;\n}\n\n// Body And Paragraph\n// --------------------------------------------------\n\np {\n    font-size: 1rem;\n    line-height: 1.7rem;\n    margin: 0;\n    padding: 0.25rem 0 0.55rem;\n    max-width: 33em;\n}\n\n// Special Classes\n// --------------------------------------------------\n\n.caption {\n    font-size: 1.125em;\n    font-weight: 700;\n    max-width: 33em;\n    text-transform: uppercase;\n    opacity: 0.55;\n    letter-spacing: 0.1px;\n}\n\n// Iconography\n// --------------------------------------------------\n$icon-height: 1.7em; // 24px Base background size\n$icon-width: 1.7em; // 24px Base background size\n$base-icon-size: 1.4em; //18px Base font-size\n\ni {\n    font-size: $base-icon-size;\n    display: inline-block;\n\n    &[theme] {\n        &[theme=\"contained\"] {\n            font-size: 0.8em;\n            border-radius: 0.55em;\n            height: $icon-height;\n            width: $icon-width;\n            text-align: center;\n\n            &:before {\n                vertical-align: baseline;\n                line-height: 1.8;\n            }\n\n            @each $entity,\n            $color in $entity-colors {\n                &.#{$entity} {\n                    color: $white;\n                    background: $color;\n                }\n            }\n\n            @each $key,\n            $color in $analytics-colors {\n                &.#{$key} {\n                    color: $white;\n                    background: $color;\n                }\n            }\n        }\n\n        &[theme=\"entity\"] {\n            @each $entity,\n            $color in $entity-colors {\n                &.#{$entity} {\n                    color: $color;\n                    background: transparent;\n                }\n            }\n        }\n    }\n}\n\n// Nested icons\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nspan,\nfigcaption {\n    i {\n        margin: 0 0.45em 0 0;\n        padding: 0;\n\n        &:before {\n            vertical-align: middle !important;\n        }\n\n        &[theme] {\n            &[theme=\"contained\"] {\n                font-size: 0.8em;\n                vertical-align: 0.1em;\n\n                &:before {\n                    vertical-align: baseline;\n                    line-height: $icon-width;\n                    display: block;\n                }\n            }\n        }\n    }\n}\n\n// Hyperlinks\n// --------------------------------------------------\n\na {\n    color: $positive;\n    font-weight: 600;\n    text-decoration: none;\n    cursor: pointer;\n    transition: all 200ms ease-in-out;\n\n    &:visited {\n        color: $positive;\n    }\n\n    &:hover,\n    &:active {\n        color: darken($positive, 10%);\n    }\n}\n\n// Code\n// --------------------------------------------------\n\ncode {\n    font-size: 0.8em;\n    background: #F8F8F8;\n    border: 1px solid #E9EAEA;\n    color: #4C545A;\n    padding: 2px 4px;\n}\n","novo-nav {\n    background: rgba(0, 0, 0, .15);\n    padding: 0;\n    list-style: none;\n    display: flex;\n    //width: 100%;\n    align-items: baseline;\n    justify-content: flex-start;\n    margin: 0;\n\n    novo-tab,\n    novo-tab-link {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        .novo-tab-link {\n            padding: 10px 20px;\n            color: #fff;\n            opacity: 0.65;\n            font-weight: 400;\n            cursor: pointer;\n            text-transform: uppercase;\n        }\n\n        .indicator {\n            width: 0;\n            height: 2px;\n            display: block;\n            background: transparent;\n            transition: all 220ms ease-in-out;\n        }\n\n        &.active,\n        &.router-link-active {\n            .novo-tab-link {\n                opacity: 1;\n            }\n\n            .indicator {\n                background: #fff;\n                width: 100%;\n            }\n        }\n\n        &:hover {\n            .novo-tab-link {\n                opacity: 1;\n            }\n        }\n    }\n\n    &[type=\"button-bar\"] {\n        display: inline-flex;\n        border-radius: 3px;\n        border: 2px solid #fff;\n\n        novo-tab-button {\n            padding: 15px 20px;\n            cursor: pointer;\n            transition: all 120ms ease-in-out;\n        }\n    }\n\n    &[theme=\"color\"] {\n        background: rgba(0, 0, 0, .2);\n\n        novo-tab,\n        novo-tab-link {\n            .novo-tab-link {\n                color: #fff;\n            }\n\n            &.active,\n            &.router-link-active {\n                .indicator {\n                    background: #fff;\n                }\n            }\n        }\n\n        &[type=\"button-bar\"] {\n            border: 2px solid #fff;\n\n            novo-tab-button {\n                color: rgba(255, 255, 255, .75);\n\n                &.active {\n                    color: #fff;\n                    background: rgba(0, 0, 0, .2);\n                }\n\n                &:hover {\n                    background: rgba(0, 0, 0, .1);\n                }\n            }\n        }\n    }\n\n    &[theme=\"white\"] {\n        background: rgba(0, 0, 0, .03);\n\n        &[direction=\"vertical\"] {\n            background: transparent;\n        }\n\n        novo-tab,\n        novo-tab-link {\n            .novo-tab-link {\n                color: $dark;\n                opacity: 0.75;\n            }\n\n            &.active,\n            &.router-link-active {\n                color: $positive;\n\n                .novo-tab-link {\n                    color: $positive;\n                    opacity: 1;\n                }\n\n                .indicator {\n                    background: $positive;\n                }\n            }\n        }\n\n        &[type=\"button-bar\"] {\n            border: 2px solid $light;\n\n            novo-tab-button {\n                color: $dark;\n                opacity: 0.75;\n\n                &.active {\n                    color: $positive;\n                    background: rgba(0, 0, 0, .05);\n                    opacity: 1;\n                }\n\n                &:hover {\n                    opacity: 1;\n                }\n            }\n        }\n    }\n\n    &[direction=\"vertical\"] {\n        flex-direction: column;\n        width: auto;\n\n        novo-tab,\n        novo-tab-link {\n            display: flex;\n            width: 100%;\n            flex-direction: row;\n            align-items: center;\n            height: 50px;\n            min-width: 150px;\n            justify-content: space-between;\n            border-left: 2px solid $light;\n            border-right: 2px solid $light;\n            transition: all 120ms ease-in-out;\n\n            &:first-of-type {\n                border-top-right-radius: 3px;\n                border-top-left-radius: 3px;\n                border-top: 2px solid $light;\n            }\n\n            &:last-of-type {\n                border-bottom-right-radius: 3px;\n                border-bottom-left-radius: 3px;\n                border-bottom: 2px solid $light;\n            }\n\n            .novo-tab-link {\n                flex: 1;\n                width: 100%;\n                display: block;\n                max-width: 90%;\n                white-space: nowrap;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                opacity: 0.75;\n            }\n\n            .indicator {\n                width: 2px;\n                height: 0;\n                display: block;\n                background: transparent;\n                transition: all 220ms ease-in-out;\n            }\n\n            &.active,\n            &.router-link-active {\n                background: rgba(0, 0, 0, .05);\n\n                .novo-tab-link {\n                    opacity: 1;\n                }\n\n                .indicator {\n                    height: 100%;\n                }\n            }\n\n            &:hover {\n                .novo-tab-link {\n                    opacity: 1;\n                }\n            }\n        }\n    }\n\n    &[router] {\n        novo-tab-link.active:not(.router-link-active) {\n            opacity: 0.65;\n\n            .indicator {\n                background: inherit;\n                width: inherit;\n            }\n        }\n    }\n}\n\n// Outlets\nnovo-nav-outlet {\n    display: block;\n\n    novo-nav-header {\n        display: block;\n        padding: 8px;\n        border: 1px solid #333;\n        margin: 8px;\n    }\n\n    novo-nav-content {\n        display: none;\n\n        &.active {\n            display: block;\n        }\n    }\n}\n","$padding-top: 10px;\n$padding-side: 15px;\n\nbutton {\n    &[theme] {\n        font-size: 1rem;\n        border: none;\n        background: transparent;\n        border-radius: 3px;\n        padding: $padding-top $padding-side;\n        text-transform: uppercase;\n        transition: all 200ms ease-in-out;\n\n        div.flex-wrapper {\n            display: flex;\n            flex-direction: row;\n            width: 100%;\n            align-items: center;\n        }\n\n        i {\n            font-size: 1em;\n        }\n\n        &:focus {\n            outline: none;\n        }\n\n        &[disabled] {\n            opacity: 0.5;\n            cursor: not-allowed;\n            pointer-events: none;\n        }\n        // Primary Themed Button\n        &[theme=\"primary\"] {\n            background: $positive;\n            color: #fff;\n            min-width: 120px;\n            text-align: left;\n\n            .flex-wrapper {\n                justify-content: space-between;\n            }\n\n            &[icon] {\n                padding: ($padding-top - 5px) ($padding-side - 10px) ($padding-top - 5px) $padding-side;\n\n                i {\n                    background: rgba(0, 0, 0, .15);\n                    padding: 5px;\n                    border-radius: 50%;\n                    height: 25px;\n                    width: 25px;\n                    display: inline-block;\n                    margin-left: 10px;\n                    line-height: 16px;\n\n                    &:before {\n                        vertical-align: baseline;\n                    }\n                }\n\n                &[icon=\"send\"] {\n                    i {\n                        &:before {\n                            margin-top: 1px;\n                            margin-left: -2px;\n                        }\n                    }\n                }\n            }\n\n            &:hover {\n                background: lighten($positive, 10%);\n            }\n\n            &:focus {\n                background: darken($positive, 5%);\n            }\n            // Loop Generic Colors (Primary, Success, Negative, Etc.)\n            @each $button,\n            $color in $colors {\n                &[color=\"#{$button}\"] {\n                    background: $color;\n\n                    &:hover {\n                        background: lighten($color, 10%);\n                    }\n\n                    &:focus {\n                        background: darken($color, 5%);\n                    }\n                }\n            }\n            &[color=\"white\"] {\n                background: $white;\n                color: $ocean;\n\n                &:hover {\n                    background: $background;\n                }\n\n                &:focus {\n                    background: darken($background, 5%);\n                }\n\n                i {\n                    background: rgba(0, 0, 0, .05);\n                }\n            }\n            // Loop Analytics Colors\n            @each $analytics,\n            $color in $analytics-colors {\n                &[color=\"#{$analytics}\"] {\n                    background: $color;\n\n                    &:hover {\n                        background: lighten($color, 10%);\n                    }\n\n                    &:focus {\n                        background: darken($color, 5%);\n                    }\n                }\n            }\n        }\n        // Secondadry Themed Button\n        &[theme=\"secondary\"] {\n            min-width: 110px;\n            text-align: left;\n            align-items: center;\n            background: #fff;\n            color: $positive;\n            border: 1px solid $positive;\n\n            .flex-wrapper {\n                justify-content: space-between;\n            }\n\n            &:hover {\n                box-shadow: 0 3px 7px rgba(0, 0, 0, .15), 0 1px 2px rgba(0, 0, 0, .15);\n            }\n\n            &:focus {\n                box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n            }\n\n            &[inverse] {\n                background: rgba(0, 0, 0, .25);\n                color: #fff;\n                border: 1px solid #fff;\n\n                &:hover {\n                    background: rgba(0, 0, 0, .35);\n                }\n\n                &:focus {\n                    background: rgba(0, 0, 0, .45);\n                }\n            }\n\n            &[icon] {\n                padding: ($padding-top - 6px) ($padding-side - 11px) ($padding-top - 6px) ($padding-side - 1px);\n\n                i {\n                    padding: 5px;\n                    border-radius: 50%;\n                    height: 25px;\n                    width: 25px;\n                    display: inline-block;\n                    margin-left: 10px;\n                    line-height: 16px;\n\n                    &:before {\n                        vertical-align: baseline;\n                    }\n                }\n\n                &[icon=\"collapse\"] {\n                    i {\n                        &:before {\n                        }\n                    }\n                }\n\n                &[icon=\"convert\"] {\n                    i {\n                        &:before {\n                        }\n                    }\n                }\n            }\n        }\n        // Dialoge Themed Button\n        &[theme=\"dialogue\"] {\n            background: transparent;\n            color: $positive;\n\n            .flex-wrapper {\n                justify-content: center;\n            }\n\n            &[icon] {\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n\n                i {\n                    padding: 5px;\n                    border-radius: 50%;\n                    height: 25px;\n                    width: 25px;\n                    display: inline-block;\n                    line-height: 16px;\n\n                    &:before {\n                        vertical-align: baseline;\n                    }\n                }\n\n                &[side=\"left\"] {\n                    padding: ($padding-top - 5px) $padding-side ($padding-top - 5px) ($padding-side - 10px);\n\n                    i {\n                        margin-right: 5px;\n                    }\n                }\n\n                &[side=\"right\"] {\n                    padding: ($padding-top - 5px) ($padding-side - 10px) ($padding-top - 5px) $padding-side;\n\n                    i {\n                        margin-left: 5px;\n                    }\n                }\n            }\n\n            &:hover {\n                background: lighten($light, 7%);\n            }\n\n            &:focus {\n                background: lighten($light, 2%);\n            }\n\n            &[inverse] {\n                &:hover {\n                    background: rgba(0, 0, 0, .2);\n                }\n\n                &:focus {\n                    background: rgba(0, 0, 0, .35);\n                }\n            }\n            // Loop Generic Colors (Primary, Success, Negative, Etc.)\n            @each $button,\n            $color in $colors {\n                &[color=\"#{$button}\"] {\n                    color: $color;\n\n                    i {\n                        color: $color;\n                    }\n                }\n            }\n            // Loop Analytics Colors\n            @each $analytics,\n            $color in $analytics-colors {\n                &[color=\"#{$analytics}\"] {\n                    color: $color;\n\n                    i {\n                        color: $color;\n                    }\n                }\n            }\n        }\n        // Standard Themed Icon\n        &[theme=\"standard\"] {\n            color: $dark;\n            background: $light;\n\n            .flex-wrapper {\n                justify-content: center;\n            }\n\n            &:hover {\n                box-shadow: 0 3px 7px rgba(0, 0, 0, .15), 0 1px 2px rgba(0, 0, 0, .15);\n            }\n\n            &:focus {\n                box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n            }\n            // Loop Generic Colors (Primary, Success, Negative, Etc.)\n            @each $button,\n            $color in $colors {\n                &[color=\"#{$button}\"] {\n                    color: $white;\n                    background: $color;\n                }\n            }\n            // Loop Analytics Colors\n            @each $analytics,\n            $color in $analytics-colors {\n                &[color=\"#{$analytics}\"] {\n                    color: $white;\n                    background: $color;\n                }\n            }\n\n            &[color=\"light\"],\n            &[color=\"white\"],\n            &[color=\"gray\"],\n            &[color=\"background\"],\n            &[color=\"off-white\"] {\n                color: $dark;\n            }\n        }\n        // Icon Themed Button\n        &[theme=\"icon\"] {\n            .flex-wrapper {\n                text-align: center;\n\n                i {\n                    width: 100%;\n                    text-align: center;\n                }\n            }\n\n            &[inverse] {\n                color: #fff;\n            }\n            width: 40px;\n            height: 40px;\n            padding: 10px;\n\n            &:hover {\n                background: rgba(0, 0, 0, .1);\n            }\n\n            &:focus {\n                background: rgba(0, 0, 0, .25);\n            }\n        }\n    }\n}\n","// App Container Sizing Reset\nhtml {\n    height: 100%;\n    width: 100%;\n\n    body {\n        height: 100%;\n        width: 100%;\n\n        demo-app {\n            height: 100%;\n            width: 100%;\n\n        }\n    }\n}\n\n*, *:after, *:before {\n    box-sizing: border-box;\n}\n","// App general body styles\nhtml {\n    margin: 0;\n    padding: 0;\n\n    body {\n        margin: 0;\n        padding: 0;\n        position: relative;\n        overflow: scroll;\n        background: $white;\n\n        demo-app {\n            height: 100%;\n            width: 100%;\n            box-sizing: border-box;\n            display: block;\n        }\n    }\n}\n","/* Contains all Design Page /Component Demo Page SCSS imports\nstarting at line 82. >>\n=============================================================\n*/\n// Main content container\nmain.main-content {\n    position: relative;\n    min-height: 300px;\n    margin: 0 0 0 300px;\n\n    // Container class to center content\n    .container {\n        padding: 70px 5.5rem;\n        margin: 0 auto;\n\n        h1 {\n            small {\n                font-size: 14px;\n                vertical-align: middle;\n            }\n        }\n    }\n    // Contains component demos\n    .example {\n        margin-top: 25px;\n        border: 1px solid #E9EAEA;\n        border-top-right-radius: 3px;\n        border-top-left-radius: 3px;\n        border-bottom: none;\n        max-width: 53em;\n        box-sizing: border-box;\n\n        > * {\n            border-top-right-radius: 3px;\n            border-top-left-radius: 3px;\n        }\n    }\n    // Contains code snippet\n    pre {\n        margin: 0 0 35px;\n        max-width: 53em;\n        box-sizing: border-box;\n\n        code {\n            width: 100%;\n            display: block;\n            box-sizing: border-box;\n            border-bottom-left-radius: 3px;\n            border-bottom-right-radius: 3px;\n            line-height: 1.5em;\n            padding: 15px 25px;\n\n            &.hljs {\n                background: #F9F9F9 !important;\n            }\n        }\n    }\n    // DESIGN STYLES\n    header {\n        &.design {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n\n            > * {\n                width: 50%;\n            }\n        }\n    }\n\n    section {\n        &.design {\n            background: $white;\n        }\n\n        > aside {\n            background: $background;\n            padding: 10px 20px;\n            border-radius: 3px;\n            display: inline-block;\n            border: 2px solid darken($background, 2%);\n\n            h6 {\n                color: $mint;\n                margin-bottom: 5px;\n            }\n\n            &.design-principle {\n                h6 {\n                    border-bottom: 1px solid darken($background, 5%);\n                    padding-bottom: 8px;\n\n                    span {\n                        font-weight: 300;\n                    }\n                }\n\n                .hint {\n                    display: block;\n                    color: darken($background, 50%);\n                    margin: 5px 0;\n                    padding: 10px;\n                    font-size: 0.9em;\n                    border-radius: 3px;\n                    background: darken($background, 5%);\n                    border: 1px solid darken($background, 10%);\n\n                    i {\n                        margin-right: 10px;\n                    }\n\n                    > span {\n                        display: block;\n                    }\n\n                    .link {\n                        display: block;\n                        margin-top: 10px;\n                        font-weight: 400;\n\n                        strong {\n                            font-weight: 600;\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n    .accepted,\n    .not-accepted {\n        display: block;\n        margin-top: 15px;\n    }\n\n    .not-accepted {\n        color: $negative;\n    }\n\n    .accepted {\n        color: $success;\n    }\n    // Custom page element initial display reset\n    home,\n    layout,\n    typography,\n    iconography,\n    color {\n        display: block;\n\n        & > header {\n            background: $off-white;\n        }\n\n        & > section.design.container {\n            article {\n                margin: 80px 0;\n                // TODO: remove this\n            }\n        }\n    }\n    // DEMO STYLES\n    // Custom page element initial display reset\n    from-demo,\n    modal-demo,\n    switch-demo,\n    tooltip-demo,\n    buttons-demo {\n        display: block;\n    }\n}\n","// App side menu styles\nnav.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 300px;\n    height: 100vh;\n    color: $white;\n    background-color: #1B2127;\n    overflow-y: scroll;\n    padding: 0 20px 60px 20px;\n\n    // Logo Link\n    & > span.logo {\n        padding-top: 30px;\n        cursor: pointer;\n        text-align: center;\n        display: block;\n\n        & > * {\n            display: block;\n        }\n\n        h3, h5 {\n            padding: 0;\n            margin: 5px auto;\n        }\n\n        h5 {\n            color: rgba(#fff, .7);\n            font-weight: 500;\n            letter-spacing: .75px;\n        }\n\n        span.version {\n            text-align: center;\n            opacity: .5;\n        }\n    }\n\n    // Logo SVG\n    [data-name=\"novo-logo\"] {\n        width: 100%;\n        max-width: 100px;\n        margin: 0 auto 20px auto;\n        display: block;\n\n        .center-dot {\n            fill: $white;\n        }\n\n        .outer-ring {\n            fill: $bittersweet;\n            transform-origin: 50% 50%;\n            animation-duration: 20000ms;\n            animation-iteration-count: infinite;\n            animation-timing-function: linear;\n            animation-name: rotate-back;\n        }\n\n        .inner-ring {\n            fill: $bittersweet;\n            transform-origin: 50% 50%;\n            animation-duration: 20000ms;\n            animation-iteration-count: infinite;\n            animation-timing-function: linear;\n            animation-name: rotate;\n        }\n    }\n\n    // Bullhorn SVG\n    [data-name=\"bullhorn-text\"] {\n        width: 100%;\n        max-width: 150px;\n        margin: 0 auto 20px auto;\n        display: block;\n    }\n\n    // Start menu link styles\n    .menu-list {\n        position: relative;\n        margin: 20px 0 0 0;\n        padding: 0;\n        list-style: none;\n    }\n\n    .menu-item {\n        display: block;\n        margin: 0;\n        height: 2.5rem;\n    }\n\n    .menu-link {\n        display: block;\n        width: 90%;\n        height: 2.5rem;\n        line-height: 2.5rem;\n        text-align: left;\n        color: darken(#ACAEB1, 4%);\n        transition: color 0.3s;\n        font-size: 1.05em;\n        font-weight: 400;\n        cursor: pointer;\n        user-select: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        padding-left: 15px;\n    }\n\n    .menu-link:hover,\n    .menu-link:focus {\n        outline: none;\n        color: #fff;\n    }\n\n    .menu-item .router-link-active.menu-link {\n        color: #fff;\n        transition: color 0.5s;\n    }\n\n    .menu-section-header {\n        display: block;\n\n        span {\n            height: 2.5rem;\n            line-height: 2.5rem;\n            display: block;\n            text-transform: uppercase;\n            font-size: .9em;\n            font-weight: 500;\n            letter-spacing: .3px;\n            opacity: .25;\n        }\n    }\n\n    .menu-line {\n        position: absolute;\n        left: 100%;\n        top: 0;\n        height: 2.5rem;\n        width: 4px;\n        pointer-events: none;\n        background: $bittersweet;\n        transition: transform 0.5s;\n        transition-timing-function: cubic-bezier(1, 0.01, 0, 1.22);\n    }\n\n    @for $i from 1 through 30 {\n        $number: ($i - 1);\n        .menu-item:nth-child(#{$i}).current ~ .menu-line {\n            transform: translate3d(0, percentage($number), 0);\n        }\n    }\n}\n\n@-webkit-keyframes rotate {\n    from {\n        -webkit-transform: rotate(0deg);\n    }\n    to {\n        -webkit-transform: rotate(360deg);\n    }\n}\n\n@-webkit-keyframes rotate-back {\n    from {\n        -webkit-transform: rotate(360deg);\n    }\n    to {\n        -webkit-transform: rotate(0deg);\n    }\n}\n","/* Base16 Atelier Plateau Light - Theme */\n/* by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/plateau) */\n/* Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16) */\n\n/* Atelier-Plateau Comment */\n.hljs-comment,\n.hljs-quote {\n    color: #655d5d;\n}\n\n/* Atelier-Plateau Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-attribute,\n.hljs-tag,\n.hljs-name,\n.hljs-regexp,\n.hljs-link,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class {\n    color: #ca4949;\n}\n\n/* Atelier-Plateau Orange */\n.hljs-number,\n.hljs-meta,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params {\n    color: #b45a3c;\n}\n\n/* Atelier-Plateau Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet {\n    color: #4b8b8b;\n}\n\n/* Atelier-Plateau Blue */\n.hljs-title,\n.hljs-section {\n    color: #7272ca;\n}\n\n/* Atelier-Plateau Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n    color: #8464c4;\n}\n\n.hljs-deletion,\n.hljs-addition {\n    color: #1b1818;\n    display: inline-block;\n    width: 100%;\n}\n\n.hljs-deletion {\n    background-color: #ca4949;\n}\n\n.hljs-addition {\n    background-color: #4b8b8b;\n}\n\n.hljs {\n    display: block;\n    overflow-x: auto;\n    background: #f4ecec;\n    color: #585050;\n    padding: 0.5em;\n}\n\n.hljs-emphasis {\n    font-style: italic;\n}\n\n.hljs-strong {\n    font-weight: bold;\n}\n","$breakpoints: ('nill': 0px, 'phone': 320px, 'tween': 500px, 'tablet': 768px, 'desktop': 1024px) !default;\n\nnav.responsive-nav {\n    display: none;\n    padding: 0 20px;\n    width: 100%;\n\n    svg {\n        max-width: 90px;\n        display: inline-block;\n        margin: 0 auto;\n\n        .st0 {\n            fill: #3D464D;\n        }\n    }\n\n    strong {\n        text-transform: uppercase;\n        color: rgba(#3D464D, .5);\n        font-size: .9em;\n        letter-spacing: .3px;\n    }\n}\n\nbutton[name=\"open-menu\"] {\n    border: none;\n    background: transparent;\n    display: none;\n    font-size: 18px;\n    vertical-align: middle;\n\n    &:focus,\n    &:active {\n        outline: none;\n    }\n}\n\n@include media(\"<tween\") {\n    main.main-content {\n        .container {\n            padding: 70px 2.5rem;\n        }\n\n        header {\n            &.design {\n                > div {\n                    width: 100%;\n                }\n\n                > img {\n                    display: none;\n                }\n            }\n        }\n    }\n}\n\n@include media(\">tween\", \"<tablet\") {\n    main.main-content {\n        header {\n            &.design {\n                > div {\n                    width: 100%;\n                }\n\n                > img {\n                    width: 30%;\n                }\n            }\n        }\n    }\n}\n\n@include media(\">nill\", \"<tablet\") {\n    nav.main-nav {\n        transform: translateX(-100%);\n        transition: all 200ms ease-in-out;\n\n        &.open {\n            transform: translateX(0px);\n        }\n    }\n\n    main.main-content {\n        margin: 0;\n        transform: translateX(0px);\n        transition: all 200ms ease-in-out;\n\n        &.open {\n            transform: translateX(300px);\n        }\n    }\n\n    nav.responsive-nav {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n    }\n\n    button[name=\"open-menu\"] {\n        display: block;\n    }\n}\n\n@include media(\">tablet\", \"<950px\") {\n}\n","@charset 'UTF-8';\n\n//     _            _           _                           _ _\n//    (_)          | |         | |                         | (_)\n//     _ _ __   ___| |_   _  __| | ___   _ __ ___   ___  __| |_  __ _\n//    | | '_ \\ / __| | | | |/ _` |/ _ \\ | '_ ` _ \\ / _ \\/ _` | |/ _` |\n//    | | | | | (__| | |_| | (_| |  __/ | | | | | |  __/ (_| | | (_| |\n//    |_|_| |_|\\___|_|\\__,_|\\__,_|\\___| |_| |_| |_|\\___|\\__,_|_|\\__,_|\n//\n//      Simple, elegant and maintainable media queries in Sass\n//                        v1.4.2\n//\n//                http://include-media.com\n//\n//         Authors: Eduardo Boucas (@eduardoboucas)\n//                  Hugo Giraudel (@hugogiraudel)\n//\n//      This project is licensed under the terms of the MIT license\n\n////\n/// include-media library public configuration\n/// @author Eduardo Boucas\n/// @access public\n////\n\n///\n/// Creates a list of global breakpoints\n///\n/// @example scss - Creates a single breakpoint with the label `phone`\n///  $breakpoints: ('phone': 320px);\n///\n\n$breakpoints: (\n    'nill': 0px,\n    'phone': 320px,\n    'tween': 500px,\n    'tablet': 768px,\n    'desktop': 1024px\n) !default;\n\n///\n/// Creates a list of static expressions or media types\n///\n/// @example scss - Creates a single media type (screen)\n///  $media-expressions: ('screen': 'screen');\n///\n/// @example scss - Creates a static expression with logical disjunction (OR operator)\n///  $media-expressions: (\n///    'retina2x': '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'\n///  );\n///\n$media-expressions: (\n    'screen': 'screen',\n    'print': 'print',\n    'handheld': 'handheld',\n    'landscape': '(orientation: landscape)',\n    'portrait': '(orientation: portrait)',\n    'retina2x': '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',\n    'retina3x': '(-webkit-min-device-pixel-ratio: 3), (min-resolution: 350dpi)'\n) !default;\n\n///\n/// Defines a number to be added or subtracted from each unit when declaring breakpoints with exclusive intervals\n///\n/// @example scss - Interval for pixels is defined as `1` by default\n///  @include media('>128px') {}\n///\n///  /* Generates: */\n///  @media (min-width: 129px) {}\n///\n/// @example scss - Interval for ems is defined as `0.01` by default\n///  @include media('>20em') {}\n///\n///  /* Generates: */\n///  @media (min-width: 20.01em) {}\n///\n/// @example scss - Interval for rems is defined as `0.1` by default, to be used with `font-size: 62.5%;`\n///  @include media('>2.0rem') {}\n///\n///  /* Generates: */\n///  @media (min-width: 2.1rem) {}\n///\n$unit-intervals: (\n    'px': 1,\n    'em': 0.01,\n    'rem': 0.1\n) !default;\n\n///\n/// Defines whether support for media queries is available, useful for creating separate stylesheets\n/// for browsers that don't support media queries.\n///\n/// @example scss - Disables support for media queries\n///  $im-media-support: false;\n///  @include media('>=tablet') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* Generates: */\n///  .foo {\n///    color: tomato;\n///  }\n///\n$im-media-support: true !default;\n\n///\n/// Selects which breakpoint to emulate when support for media queries is disabled. Media queries that start at or\n/// intercept the breakpoint will be displayed, any others will be ignored.\n///\n/// @example scss - This media query will show because it intercepts the static breakpoint\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'desktop';\n///  @include media('>=tablet') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* Generates: */\n///  .foo {\n///    color: tomato;\n///  }\n///\n/// @example scss - This media query will NOT show because it does not intercept the desktop breakpoint\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'tablet';\n///  @include media('>=desktop') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* No output */\n///\n$im-no-media-breakpoint: 'desktop' !default;\n\n///\n/// Selects which media expressions are allowed in an expression for it to be used when media queries\n/// are not supported.\n///\n/// @example scss - This media query will show because it intercepts the static breakpoint and contains only accepted media expressions\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'desktop';\n///  $im-no-media-expressions: ('screen');\n///  @include media('>=tablet', 'screen') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///   /* Generates: */\n///   .foo {\n///     color: tomato;\n///   }\n///\n/// @example scss - This media query will NOT show because it intercepts the static breakpoint but contains a media expression that is not accepted\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'desktop';\n///  $im-no-media-expressions: ('screen');\n///  @include media('>=tablet', 'retina2x') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* No output */\n///\n$im-no-media-expressions: ('screen', 'portrait', 'landscape') !default;\n\n////\n/// Cross-engine logging engine\n/// @author Hugo Giraudel\n/// @access private\n////\n\n///\n/// Log a message either with `@error` if supported\n/// else with `@warn`, using `feature-exists('at-error')`\n/// to detect support.\n///\n/// @param {String} $message - Message to log\n///\n@function log($message) {\n    @if feature-exists('at-error') {\n        @error $message;\n    } @else {\n        @warn $message;\n        $_: noop();\n    }\n\n    @return $message;\n}\n\n///\n/// Wrapper mixin for the log function so it can be used with a more friendly\n/// API than `@if log('..') {}` or `$_: log('..')`. Basically, use the function\n/// within functions because it is not possible to include a mixin in a function\n/// and use the mixin everywhere else because it's much more elegant.\n///\n/// @param {String} $message - Message to log\n///\n@mixin log($message) {\n    @if log($message) {\n    }\n}\n\n///\n/// Function with no `@return` called next to `@warn` in Sass 3.3\n/// to trigger a compiling error and stop the process.\n///\n@function noop() {\n}\n\n///\n/// Determines whether a list of conditions is intercepted by the static breakpoint.\n///\n/// @param {Arglist}   $conditions  - Media query conditions\n///\n/// @return {Boolean} - Returns true if the conditions are intercepted by the static breakpoint\n///\n@function im-intercepts-static-breakpoint($conditions...) {\n    $no-media-breakpoint-value: map-get($breakpoints, $im-no-media-breakpoint);\n\n    @if not $no-media-breakpoint-value {\n        @if log('`#{$im-no-media-breakpoint}` is not a valid breakpoint.') {\n        }\n    }\n\n    @each $condition in $conditions {\n        @if not map-has-key($media-expressions, $condition) {\n            $operator: get-expression-operator($condition);\n            $prefix: get-expression-prefix($operator);\n            $value: get-expression-value($condition, $operator);\n\n            // scss-lint:disable SpaceAroundOperator\n            @if ($prefix == 'max' and $value <= $no-media-breakpoint-value) or\n          ($prefix == 'min' and $value > $no-media-breakpoint-value) {\n                @return false;\n            }\n        } @else if not index($im-no-media-expressions, $condition) {\n            @return false;\n        }\n    }\n\n    @return true;\n}\n\n////\n/// Parsing engine\n/// @author Hugo Giraudel\n/// @access private\n////\n\n///\n/// Get operator of an expression\n///\n/// @param {String} $expression - Expression to extract operator from\n///\n/// @return {String} - Any of `>=`, `>`, `<=`, `<`, `≥`, `≤`\n///\n@function get-expression-operator($expression) {\n    @each $operator in ('>=', '>', '<=', '<', '≥', '≤') {\n        @if str-index($expression, $operator) {\n            @return $operator;\n        }\n    }\n\n    // It is not possible to include a mixin inside a function, so we have to\n    // rely on the `log(..)` function rather than the `log(..)` mixin. Because\n    // functions cannot be called anywhere in Sass, we need to hack the call in\n    // a dummy variable, such as `$_`. If anybody ever raise a scoping issue with\n    // Sass 3.3, change this line in `@if log(..) {}` instead.\n    $_: log('No operator found in `#{$expression}`.');\n}\n\n///\n/// Get dimension of an expression, based on a found operator\n///\n/// @param {String} $expression - Expression to extract dimension from\n/// @param {String} $operator - Operator from `$expression`\n///\n/// @return {String} - `width` or `height` (or potentially anything else)\n///\n@function get-expression-dimension($expression, $operator) {\n    $operator-index: str-index($expression, $operator);\n    $parsed-dimension: str-slice($expression, 0, $operator-index - 1);\n    $dimension: 'width';\n\n    @if str-length($parsed-dimension) > 0 {\n        $dimension: $parsed-dimension;\n    }\n\n    @return $dimension;\n}\n\n///\n/// Get dimension prefix based on an operator\n///\n/// @param {String} $operator - Operator\n///\n/// @return {String} - `min` or `max`\n///\n@function get-expression-prefix($operator) {\n    @return if(index(('<', '<=', '≤'), $operator), 'max', 'min');\n}\n\n///\n/// Get value of an expression, based on a found operator\n///\n/// @param {String} $expression - Expression to extract value from\n/// @param {String} $operator - Operator from `$expression`\n///\n/// @return {Number} - A numeric value\n///\n@function get-expression-value($expression, $operator) {\n    $operator-index: str-index($expression, $operator);\n    $value: str-slice($expression, $operator-index + str-length($operator));\n\n    @if map-has-key($breakpoints, $value) {\n        $value: map-get($breakpoints, $value);\n    } @else {\n        $value: to-number($value);\n    }\n\n    $interval: map-get($unit-intervals, unit($value));\n\n    @if not $interval {\n        // It is not possible to include a mixin inside a function, so we have to\n        // rely on the `log(..)` function rather than the `log(..)` mixin. Because\n        // functions cannot be called anywhere in Sass, we need to hack the call in\n        // a dummy variable, such as `$_`. If anybody ever raise a scoping issue with\n        // Sass 3.3, change this line in `@if log(..) {}` instead.\n        $_: log('Unknown unit `#{unit($value)}`.');\n    }\n\n    @if $operator == '>' {\n        $value: $value + $interval;\n    } @else if $operator == '<' {\n        $value: $value - $interval;\n    }\n\n    @return $value;\n}\n\n///\n/// Parse an expression to return a valid media-query expression\n///\n/// @param {String} $expression - Expression to parse\n///\n/// @return {String} - Valid media query\n///\n@function parse-expression($expression) {\n    // If it is part of $media-expressions, it has no operator\n    // then there is no need to go any further, just return the value\n    @if map-has-key($media-expressions, $expression) {\n        @return map-get($media-expressions, $expression);\n    }\n\n    $operator: get-expression-operator($expression);\n    $dimension: get-expression-dimension($expression, $operator);\n    $prefix: get-expression-prefix($operator);\n    $value: get-expression-value($expression, $operator);\n\n    @return '(#{$prefix}-#{$dimension}: #{$value})';\n}\n\n///\n/// Slice `$list` between `$start` and `$end` indexes\n///\n/// @access private\n///\n/// @param {List} $list - List to slice\n/// @param {Number} $start [1] - Start index\n/// @param {Number} $end [length($list)] - End index\n///\n/// @return {List} Sliced list\n///\n@function slice($list, $start: 1, $end: length($list)) {\n    @if length($list) < 1 or $start > $end {\n        @return ();\n    }\n\n    $result: ();\n\n    @for $i from $start through $end {\n        $result: append($result, nth($list, $i));\n    }\n\n    @return $result;\n}\n\n////\n/// String to number converter\n/// @author Hugo Giraudel\n/// @access private\n////\n\n///\n/// Casts a string into a number\n///\n/// @param {String | Number} $value - Value to be parsed\n///\n/// @return {Number}\n///\n@function to-number($value) {\n    @if type-of($value) == 'number' {\n        @return $value;\n    } @else if type-of($value) != 'string' {\n        $_: log('Value for `to-number` should be a number or a string.');\n    }\n\n    $result: 0;\n    $digits: 0;\n    $minus: str-slice($value, 1, 1) == '-';\n    $numbers: ('0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9);\n\n    @for $i from if($minus, 2, 1) through str-length($value) {\n        $character: str-slice($value, $i, $i);\n\n        @if not (index(map-keys($numbers), $character) or $character == '.') {\n            @return to-length(if($minus, -$result, $result), str-slice($value, $i))\n        }\n\n        @if $character == '.' {\n            $digits: 1;\n        } @else if $digits == 0 {\n            $result: $result * 10 + map-get($numbers, $character);\n        } @else {\n            $digits: $digits * 10;\n            $result: $result + map-get($numbers, $character) / $digits;\n        }\n    }\n\n    @return if($minus, -$result, $result);\n}\n\n///\n/// Add `$unit` to `$value`\n///\n/// @param {Number} $value - Value to add unit to\n/// @param {String} $unit - String representation of the unit\n///\n/// @return {Number} - `$value` expressed in `$unit`\n///\n@function to-length($value, $unit) {\n    $units: ('px': 1px, 'cm': 1cm, 'mm': 1mm, '%': 1%, 'ch': 1ch, 'pc': 1pc, 'in': 1in, 'em': 1em, 'rem': 1rem, 'pt': 1pt, 'ex': 1ex, 'vw': 1vw, 'vh': 1vh, 'vmin': 1vmin, 'vmax': 1vmax);\n\n    @if not index(map-keys($units), $unit) {\n        $_: log('Invalid unit `#{$unit}`.');\n    }\n\n    @return $value * map-get($units, $unit);\n}\n\n///\n/// This mixin aims at redefining the configuration just for the scope of\n/// the call. It is helpful when having a component needing an extended\n/// configuration such as custom breakpoints (referred to as tweakpoints)\n/// for instance.\n///\n/// @author Hugo Giraudel\n///\n/// @param {Map} $tweakpoints [()] - Map of tweakpoints to be merged with `$breakpoints`\n/// @param {Map} $tweak-media-expressions [()] - Map of tweaked media expressions to be merged with `$media-expression`\n///\n/// @example scss - Extend the global breakpoints with a tweakpoint\n///  @include media-context(('custom': 678px)) {\n///    .foo {\n///      @include media('>phone', '<=custom') {\n///       // ...\n///      }\n///    }\n///  }\n///\n/// @example scss - Extend the global media expressions with a custom one\n///  @include media-context($tweak-media-expressions: ('all': 'all')) {\n///    .foo {\n///      @include media('all', '>phone') {\n///       // ...\n///      }\n///    }\n///  }\n///\n/// @example scss - Extend both configuration maps\n///  @include media-context(('custom': 678px), ('all': 'all')) {\n///    .foo {\n///      @include media('all', '>phone', '<=custom') {\n///       // ...\n///      }\n///    }\n///  }\n///\n@mixin media-context($tweakpoints: (), $tweak-media-expressions: ()) {\n    // Save global configuration\n    $global-breakpoints: $breakpoints;\n    $global-media-expressions: $media-expressions;\n\n    // Update global configuration\n    $breakpoints: map-merge($breakpoints, $tweakpoints) !global;\n    $media-expressions: map-merge($media-expressions, $tweak-media-expressions) !global;\n\n    @content;\n\n    // Restore global configuration\n    $breakpoints: $global-breakpoints !global;\n    $media-expressions: $global-media-expressions !global;\n}\n\n////\n/// include-media public exposed API\n/// @author Eduardo Boucas\n/// @access public\n////\n\n///\n/// Generates a media query based on a list of conditions\n///\n/// @param {Arglist}   $conditions  - Media query conditions\n///\n/// @example scss - With a single set breakpoint\n///  @include media('>phone') { }\n///\n/// @example scss - With two set breakpoints\n///  @include media('>phone', '<=tablet') { }\n///\n/// @example scss - With custom values\n///  @include media('>=358px', '<850px') { }\n///\n/// @example scss - With set breakpoints with custom values\n///  @include media('>desktop', '<=1350px') { }\n///\n/// @example scss - With a static expression\n///  @include media('retina2x') { }\n///\n/// @example scss - Mixing everything\n///  @include media('>=350px', '<tablet', 'retina3x') { }\n///\n@mixin media($conditions...) {\n    // scss-lint:disable SpaceAroundOperator\n    @if ($im-media-support and length($conditions) == 0) or\n      (not $im-media-support and im-intercepts-static-breakpoint($conditions...)) {\n        @content;\n    } @else if ($im-media-support and length($conditions) > 0) {\n        @media #{unquote(parse-expression(nth($conditions, 1)))} {\n            // Recursive call\n            @include media(slice($conditions, 2)\n            ...) {\n                @content;\n            }\n        }\n    }\n}\n","color {\n    header {\n        transition: all 240ms ease-in-out;\n\n        h1 {\n            color: $grass;\n        }\n\n        h2,\n        p {\n            color: $dark;\n        }\n\n        h1,\n        h2,\n        p {\n            transition: color 240ms ease-in-out;\n            transition-delay: 100ms;\n        }\n        position: relative;\n\n        & > div {\n            z-index: 1;\n        }\n\n        .background-boxes {\n            position: absolute;\n            width: 50%;\n            height: 100%;\n            top: 0;\n            left: 50%;\n            right: 0;\n            display: flex;\n            flex-direction: row;\n            flex-wrap: wrap;\n            align-items: center;\n            z-index: 0;\n            justify-content: flex-end;\n            background: $background;\n            transition: background 240ms ease-in-out;\n\n            > * {\n                transition: all 120ms ease-in-out;\n                padding: 15px;\n                margin: 15px;\n                border-radius: 3px;\n\n                &:hover {\n                    transform: scale(1.7);\n                    border-radius: 50%;\n                }\n            }\n\n            @each $entity,\n            $color in $entity-colors {\n                .bb-#{$entity} {\n                    $randNum: random(20) + 25px;\n                    background: $color;\n                    width: $randNum;\n                    height: $randNum;\n                }\n            }\n\n            @each $analytics,\n            $color in $analytics-colors {\n                .bb-#{$analytics} {\n                    $randNum: random(20) + 25px;\n                    background: $color;\n                    width: $randNum;\n                    height: $randNum;\n                }\n            }\n        }\n    }\n\n    article {\n        &.color-blocks {\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-start;\n            flex-wrap: wrap;\n            align-items: flex-end;\n            width: 100%;\n\n            .block {\n                text-align: center;\n                height: 150px;\n                width: 25%;\n                min-width: 200px;\n                position: relative;\n                padding-top: 140px;\n                margin-bottom: 95px;\n\n                &:hover,\n                &:focus,\n                &:active {\n                    .color-square {\n                        transform: scale(1.125);\n                    }\n                }\n\n                h6 {\n                    text-align: left;\n                }\n\n                span.vars {\n                    opacity: 0.65;\n                    text-align: left;\n                    display: block;\n                }\n\n                h6,\n                span.vars {\n                    padding-left: 6%;\n                }\n\n                .color-square {\n                    height: 130px;\n                    width: 90%;\n                    position: absolute;\n                    top: 0;\n                    left: 5%;\n                    background: white;\n                    transition: all 80ms ease-in-out;\n                    border-radius: 2px;\n                    cursor: pointer;\n                }\n\n                h3.color-text {\n                    color: #fff;\n                    position: absolute;\n                    top: 45%;\n                    left: 50%;\n                    transform: translate(-50%, -50%);\n                    opacity: 0.85;\n                    font-weight: 600;\n                    padding: 7px 0;\n                    cursor: pointer;\n\n                    &:after {\n                        content: 'Click to copy';\n                        position: absolute;\n                        color: rgba(255, 255, 255, 0.4);\n                        left: 50%;\n                        top: 40px;\n                        font-size: 10px;\n                        text-transform: uppercase;\n                        transform: translateX(-50%);\n                        width: 100%;\n                    }\n\n                    span {\n                        font-size: 0.9em;\n                        opacity: 0.45;\n                    }\n                }\n\n                &.nav-cb {\n                    .color-square {\n                        background: $navigation;\n                    }\n                }\n\n                &.action-cb {\n                    .color-square {\n                        background: $positive;\n                    }\n                }\n\n                &.text-cb {\n                    .color-square {\n                        background: $dark;\n                    }\n                }\n\n                &.background-cb {\n                    color: $dark;\n\n                    h3 {\n                        &:after {\n                            content: 'Click to copy';\n                            position: absolute;\n                            color: rgba($dark, 0.4);\n                            left: 50%;\n                            top: 40px;\n                            font-size: 10px;\n                            text-transform: uppercase;\n                            transform: translateX(-50%);\n                            width: 100%;\n                        }\n                    }\n\n                    .color-text {\n                        color: $dark;\n                    }\n\n                    .color-square {\n                        background: $background;\n                    }\n                }\n\n                @each $entity,\n                $color in $entity-colors {\n                    &.#{$entity}-cb {\n                        .color-square {\n                            background: $color;\n                        }\n                    }\n                }\n\n                @each $analytics,\n                $color in $analytics-colors {\n                    &.#{$analytics}-cb {\n                        .color-square {\n                            background: $color;\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n\ncolor {\n    & > header {\n        @each $analytics,\n        $color in $analytics-colors {\n            &.#{$analytics} {\n                h1,\n                h2,\n                p {\n                    color: #fff;\n                }\n                background: $color !important;\n\n                .background-boxes {\n                    background: $color !important;\n                }\n            }\n        }\n\n        @each $entity,\n        $color in $entity-colors {\n            &.#{$entity} {\n                h1,\n                h2,\n                p {\n                    color: #fff;\n                }\n                background: $color !important;\n\n                .background-boxes {\n                    background: $color !important;\n                }\n            }\n        }\n\n        &.background {\n            background: $background;\n\n            .background-boxes {\n                background: $background;\n            }\n        }\n    }\n}\n","home {\n    h1,\n    h5 {\n        color: $bittersweet;\n    }\n\n    section {\n        .jump-to {\n            font-weight: 600;\n            display: flex;\n            align-items: center;\n            justify-content: flex-start;\n            border: 2px solid rgba($mint, 0.25);\n            padding: 10px;\n            max-width: 30em;\n            border-radius: 11px;\n            margin: 25px 0 !important;\n\n            i {\n                flex-shrink: 0;\n                font-size: 1em;\n                color: $mint;\n                width: 30px;\n                height: 30px;\n                line-height: 26px;\n                border-radius: 50%;\n                border: 2px solid $mint;\n                display: inline-block;\n                margin-right: 15px;\n                text-align: center;\n            }\n\n            &.brand {\n                border: 2px solid rgba($bittersweet, 0.25);\n\n                i {\n                    color: $bittersweet;\n                    border: 2px solid $bittersweet;\n                }\n            }\n        }\n    }\n}\n","iconography {\n    & > header {\n        background: #F4F4F4;\n    }\n    h1, h5 {\n        color: $aqua;\n    }\n    .base-sizing {\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: center;\n        .sizing-specs {\n            display: flex;\n            flex-direction: column;\n            color: darken($light, 20%);\n            margin: 35px 150px 10px 0;\n            span {\n                line-height: 1.7em;\n            }\n        }\n        .sizing-demo {\n\n        }\n    }\n    .padding {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: flex-start;\n        div {\n            padding: 15px;\n            margin-right: 25px;\n            &:first-of-type {\n                i {\n                    margin: 0;\n                    padding: 0;\n                }\n            }\n            h4 {\n                color: $positive;\n                .bhi-circle {\n                    color: $contact;\n                }\n            }\n            h6 {\n                color: darken($light, 25%);\n            }\n        }\n    }\n    .contained-scaling,\n    .contained-padding {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        figure {\n            text-align: center;\n        }\n    }\n    .example.standard-icon-row {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-around;\n        padding: 20px;\n        > div {\n            text-align: center;\n        }\n    }\n    .example.contained-icon-row {\n        padding: 20px;\n        > * {\n            margin: 15px 0;\n            color: inherit;\n        }\n    }\n}\n","typography {\n    & > header {\n        background: #F4F4F4;\n    }\n\n    h1,\n    h5 {\n        color: $carnation;\n    }\n\n    & > section {\n        & > h2 {\n            margin-top: 50px;\n        }\n    }\n\n    article {\n        &.principles {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin: 35px 0;\n\n            div {\n            }\n\n            img {\n                margin: 0 auto;\n            }\n        }\n\n        &.line-height {\n            div {\n                margin: 35px 0;\n            }\n        }\n\n        &.line-length {\n            div {\n                .ruler {\n                    display: flex;\n                    align-items: center;\n                    justify-content: flex-start;\n                    flex-direction: row;\n                    width: 100%;\n\n                    > * {\n                        display: inline-block;\n                        margin: 0;\n                    }\n\n                    hr {\n                        height: 2px;\n                        background: $light;\n                        border: none;\n                    }\n\n                    span {\n                        padding: 10px;\n                        border: 2px solid $carnation;\n                        border-radius: 6px;\n                        margin-right: 10px;\n                    }\n                }\n\n                &.too-short {\n                    margin: 35px 0;\n\n                    .ruler {\n                        hr {\n                            width: 14em;\n                        }\n                    }\n                }\n\n                &.just-right {\n                    margin: 35px 0;\n\n                    .ruler {\n                        hr {\n                            width: 33em;\n                        }\n\n                        span {\n                            background: $carnation;\n                            color: #fff;\n                            border: 2px solid darken($carnation, 5%);\n                        }\n                    }\n                }\n\n                &.too-long {\n                    margin: 35px 0;\n\n                    .ruler {\n                        hr {\n                            width: 80em;\n                        }\n\n                        span {\n                            margin-right: 40px;\n                        }\n\n                        p {\n                            text-indent: -10px;\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n    .example {\n        padding: 20px;\n\n        div.type-group {\n            display: flex;\n            flex-direction: column;\n            align-items: flex-start;\n            justify-content: flex-start;\n            border-bottom: 2px solid #f1f1f1;\n            padding: 15px;\n\n            h1,\n            h2,\n            h3,\n            h4,\n            h6,\n            p {\n                color: inherit;\n            }\n\n            h5 {\n                color: rgba(0, 0, 0, 0.55);\n            }\n\n            span {\n                margin: 5px 0;\n                opacity: 0.65;\n            }\n        }\n\n        hr {\n            border: none;\n            height: 1px;\n            background: #f4f4f4;\n            display: block;\n        }\n    }\n}\n","layout {\n    h1,\n    h5 {\n        color: $mint;\n    }\n\n    article {\n\n        img {\n            display: block;\n            margin: 40px auto 50px auto;\n            max-width: 600px;\n            max-height: 475px;\n            width: auto;\n            height: auto;\n\n            &.bowling-alley {\n                max-height: 400px;\n            }\n        }\n    }\n}\n","buttons-demo {\n    .example.buttons-demo {\n        padding: 20px 30px;\n        border-top-right-radius: 3px;\n        border-top-left-radius: 3px;\n        display: flex;\n        flex-direction: row;\n        flex-shrink: 0;\n        flex-grow: 0;\n        align-items: center;\n        flex-wrap: wrap;\n        transition: background 460ms ease-in-out;\n        & > * {\n            flex-shrink: 0;\n            flex-grow: 0;\n            margin-right: 15px;\n        }\n        &.icons,\n        &.header {\n            background: $aqua;\n        }\n        &.blue {\n            background: $ocean;\n        }\n        &.green {\n            background: $grass;\n        }\n        &.yellow {\n            background: $sunflower;\n        }\n        &.orange {\n            background: $bittersweet;\n        }\n        &.red {\n            background: $grapefruit;\n        }\n        &.purple {\n            background: $lavender;\n        }\n        .inverse-color {\n            background: $navigation;\n            padding: 10px;\n        }\n    }\n}\n","tabs-demo {\n    .example {\n        header {\n            padding-top: 50px;\n        }\n\n        novo-nav-outlet {\n            padding: 25px;\n        }\n    }\n\n    .example.color-tab-demo {\n        width: 100%;\n\n        header {\n            background: $positive;\n        }\n    }\n\n    .example.vertical-tab-demo {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: nowrap;\n        padding: 20px;\n\n        novo-nav-outlet {\n            padding: 0 25px;\n        }\n    }\n\n    .example.button-tab-demo {\n        header {\n            padding: 20px;\n\n            &.color {\n                background: $positive;\n            }\n        }\n    }\n}\n","/*\n    I am used only for quick fixes that have not yet been refactored.\n    Hopefully, I am nothing but a friendly comment. :)\n*/\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 203 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"main-nav\" [ngClass]=\"{open: menuOpen}\">\n    <span [routerLink]=\"['/Home']\" class=\"logo\">\n        <svg data-name=\"novo-logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\" class=\"{% if page.url != '/' %}site-avatar{% endif %}\">\n            <defs></defs>\n            <title>NovoBranding</title>\n            <circle class=\"center-dot\" cx=\"200.18\" cy=\"197.5\" r=\"28.65\"/>\n            <path class=\"outer-ring\" d=\"M371,178.06C362,98.75,298.92,35.6,219.6,26.65a19.88,19.88,0,0,0-38.84,0c-79.32,9-142.43,72.11-151.4,151.43a19.88,19.88,0,0,0,0,38.85c9,79.32,72.07,142.47,151.4,151.43a19.88,19.88,0,0,0,38.84,0c79.32-9,142.43-72.1,151.4-151.42A19.88,19.88,0,0,0,371,178.06ZM192.56,25.72a9.25,9.25,0,0,1,1-1.18l0.26-.27a9.31,9.31,0,0,1,1.17-1l0.24-.15a9.13,9.13,0,0,1,1.22-.66l0.26-.12a9.17,9.17,0,0,1,1.49-.46l0.34-.07a8.29,8.29,0,0,1,3.32,0l0.34,0.07a9.17,9.17,0,0,1,1.49.46l0.26,0.12a9.13,9.13,0,0,1,1.22.66l0.24,0.15a9.31,9.31,0,0,1,1.17,1l0.26,0.27a9.25,9.25,0,0,1,1,1.18,9.1,9.1,0,0,1-.29,10.68h0a9.28,9.28,0,0,1-1.27,1.36l-0.42.35a9.1,9.1,0,0,1-.89.62,9.21,9.21,0,0,1-.87.47l-0.5.22a9,9,0,0,1-1.38.43l-0.34.06a8.24,8.24,0,0,1-3.3,0l-0.34-.06a9,9,0,0,1-1.38-.43l-0.5-.22a9.21,9.21,0,0,1-.87-0.47,9.1,9.1,0,0,1-.89-0.62l-0.42-.35a9.28,9.28,0,0,1-1.27-1.36h0A9.1,9.1,0,0,1,192.56,25.72ZM28.39,205.09a9.25,9.25,0,0,1-1.14-.94l-0.3-.3a9.26,9.26,0,0,1-.94-1.14l-0.16-.26a9.09,9.09,0,0,1-.65-1.19c0-.09-0.09-0.18-0.13-0.28a9.1,9.1,0,0,1-.46-1.49c0-.11,0-0.23-0.07-0.34a8.27,8.27,0,0,1,0-3.31c0-.12,0-0.23.07-0.34a9.1,9.1,0,0,1,.46-1.49c0-.1.09-0.19,0.13-0.28a9.09,9.09,0,0,1,.65-1.19l0.16-.26a9.22,9.22,0,0,1,.94-1.14l0.3-.3a9.11,9.11,0,0,1,13.2.59c0.13,0.14.25,0.29,0.37,0.44a9.22,9.22,0,0,1,1.08,1.75c0.08,0.16.15,0.33,0.22,0.49a9.08,9.08,0,0,1,.43,1.39c0,0.11,0,.23.06,0.34a8.22,8.22,0,0,1,0,3.29c0,0.11,0,.23-0.06.34a9.08,9.08,0,0,1-.43,1.39c-0.07.17-.15,0.33-0.22,0.49a9.22,9.22,0,0,1-1.08,1.75c-0.12.15-.24,0.3-0.37,0.44A9.12,9.12,0,0,1,28.39,205.09ZM200.18,374a9.21,9.21,0,1,1,9.21-9.21A9.22,9.22,0,0,1,200.18,374ZM219,357.67a19.86,19.86,0,0,0-37.59,0A161.56,161.56,0,0,1,40,216.29a19.86,19.86,0,0,0,0-37.58A161.56,161.56,0,0,1,181.38,37.32a19.86,19.86,0,0,0,37.59,0,161.56,161.56,0,0,1,141.35,141.4,19.86,19.86,0,0,0,0,37.55A161.56,161.56,0,0,1,219,357.67Zm147.84-151A9.21,9.21,0,1,1,376,197.5,9.22,9.22,0,0,1,366.81,206.7Z\"/>\n            <path class=\"inner-ring\" d=\"M219.76,103.11a19.86,19.86,0,0,0-39.17,0,96.4,96.4,0,0,0,0,188.78,19.86,19.86,0,0,0,39.17,0A96.4,96.4,0,0,0,219.76,103.11Zm-19.58-5.87a9.17,9.17,0,0,1,5.9,16.22l-0.25.2a9.11,9.11,0,0,1-1,.67c-0.26.16-.53,0.31-0.8,0.44l-0.55.24a8.92,8.92,0,0,1-1.35.42l-0.33.06a8.24,8.24,0,0,1-3.3,0l-0.33-.06a8.92,8.92,0,0,1-1.35-.42l-0.55-.24c-0.28-.13-0.54-0.28-0.8-0.44a9.11,9.11,0,0,1-1-.67l-0.25-.2A9.17,9.17,0,0,1,200.18,97.24ZM207.54,294a9.21,9.21,0,0,1-.61.74c-0.13.15-.27,0.29-0.41,0.43a9.25,9.25,0,0,1-1.06.87l-0.41.26a9.11,9.11,0,0,1-1.07.58l-0.31.15a9.08,9.08,0,0,1-1.47.46l-0.38.07a8.22,8.22,0,0,1-3.29,0l-0.38-.07a9.08,9.08,0,0,1-1.47-.46l-0.31-.15a9.11,9.11,0,0,1-1.07-.58l-0.41-.26a9.25,9.25,0,0,1-1.06-.87c-0.14-.14-0.27-0.29-0.41-0.43a9.08,9.08,0,0,1,.85-13.22l0.25-.2a9.11,9.11,0,0,1,1-.67c0.26-.16.53-0.31,0.8-0.44l0.55-.24a8.92,8.92,0,0,1,1.35-.42l0.33-.06a8.24,8.24,0,0,1,3.3,0l0.33,0.06a8.92,8.92,0,0,1,1.35.42l0.55,0.24c0.28,0.13.54,0.28,0.8,0.44a9.11,9.11,0,0,1,1,.67l0.25,0.2A9.06,9.06,0,0,1,207.54,294Zm11.1-12.84a19.86,19.86,0,0,0-36.92,0,85.7,85.7,0,0,1,0-167.38,19.86,19.86,0,0,0,36.92,0A85.7,85.7,0,0,1,218.63,281.19Z\"/>\n        </svg>\n        <svg data-name=\"bullhorn-text\" version=\"1.1\"\n             xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n             x=\"0px\" y=\"0px\" width=\"240.2px\" height=\"48.8px\" viewBox=\"0 0 240.2 48.8\" style=\"enable-background:new 0 0 240.2 48.8;\"\n             xml:space=\"preserve\">\n        <style type=\"text/css\">\n            .st0 {\n                fill: #FFFFFF;\n            }\n        </style>\n        <defs></defs>\n        <g>\n            <path class=\"st0\" d=\"M0,1.5c0-0.6,0.5-1.1,1.1-1.1h20c5.4,0,9.5,1.4,12.3,4.2c2.1,2.1,3.2,4.7,3.2,7.8v0.1c0,1.4-0.2,2.6-0.6,3.8\n                c-0.4,1.1-0.9,2.1-1.5,2.9c-0.6,0.8-1.3,1.6-2.1,2.2c-0.2,0.2-0.4,0.3-0.7,0.5c-0.7,0.5-0.6,1.6,0.1,1.9c1.9,0.9,3.4,1.9,4.7,3.2\n                c1.7,1.7,2.6,4.2,2.6,7.4v0.1c0,2.1-0.4,4-1.2,5.6c-0.8,1.6-2,3-3.5,4c-1.5,1.1-3.4,1.9-5.5,2.5c-2.1,0.6-4.5,0.8-7.2,0.8H1.1\n                C0.5,47.5,0,47,0,46.4V1.5z M19.4,20.3c2.7,0,4.8-0.5,6.5-1.6c1.6-1,2.4-2.6,2.4-4.8v-0.1c0-1.9-0.7-3.3-2.1-4.4\n                c-1.4-1-3.5-1.6-6.2-1.6H9.3c-0.6,0-1.1,0.5-1.1,1.1v10.2c0,0.6,0.5,1.1,1.1,1.1H19.4z M21.8,40.1c2.8,0,5-0.5,6.7-1.6\n                c1.6-1.1,2.4-2.7,2.4-4.8v-0.1c0-2-0.8-3.6-2.4-4.6c-1.6-1.1-4-1.6-7.3-1.6h-12c-0.6,0-1.1,0.5-1.1,1.1V39c0,0.6,0.5,1.1,1.1,1.1\n                H21.8z\"/>\n            <path class=\"st0\" d=\"M81.3,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3h-5.9c-0.7,0-1.3-0.6-1.3-1.3v-45\n                C80.1,0.6,80.6,0,81.3,0z\"/>\n            <path class=\"st0\" d=\"M96,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3H96c-0.7,0-1.3-0.6-1.3-1.3v-45\n                C94.8,0.6,95.3,0,96,0z\"/>\n            <path class=\"st0\" d=\"M109.5,0l4,0c2.3,0,4.2,1.9,4.2,4.2v13.3c0.9-0.9,2.1-1.9,3.7-2.8c1.6-0.9,3.7-1.4,6.3-1.4c2,0,3.9,0.3,5.5,1\n                c1.6,0.7,3,1.6,4,2.8c1.1,1.2,1.9,2.7,2.5,4.4c0.6,1.7,0.9,3.6,0.9,5.6v19.1c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2\n                V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9c-0.7,0.8-1.3,1.7-1.7,2.8\n                c-0.4,1.1-0.6,2.2-0.6,3.5v16.9c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2V5.8V0z\"/>\n            <path class=\"st0\" d=\"M210.5,14.1h5.3c0.7,0,1.4,0.6,1.4,1.3l0.1,2.4c0.4-0.5,0.9-1,1.5-1.5c0.6-0.5,1.3-1,2.1-1.5\n                c0.8-0.5,1.8-0.8,2.8-1.1c1-0.3,2.2-0.4,3.6-0.4c4.2,0,7.4,1.2,9.5,3.7c2.2,2.5,3.3,5.8,3.3,10.1V46c0,0.8-0.7,1.5-1.5,1.5h-5.4\n                c-0.8,0-1.5-0.7-1.5-1.5V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9\n                c-0.7,0.8-1.3,1.7-1.7,2.8c-0.4,1.1-0.6,2.2-0.6,3.5V46c0,0.8-0.7,1.5-1.5,1.5h-5.4c-0.8,0-1.5-0.7-1.5-1.5V15.5\n                C209.1,14.7,209.7,14.1,210.5,14.1z\"/>\n            <g>\n                <path class=\"st0\" d=\"M184.5,14h5.3c0.8,0,1.4,0.6,1.4,1.4l0.1,2.8c0.4-0.5,0.9-1,1.5-1.6c0.6-0.6,1.3-1.1,2.1-1.6\n                    c0.8-0.5,1.7-0.9,2.8-1.2c1.1-0.3,2.3-0.5,3.7-0.5c0.8,0,1.5,0,2.2,0.1c0.3,0,0.5,0.1,0.8,0.2c0.6,0.2,1,0.8,0.9,1.4l-1.2,5.5\n                    c-0.1,0.7-0.8,1.1-1.5,0.9c-0.2,0-0.4-0.1-0.6-0.1c-0.6-0.1-1.3-0.1-2.1-0.1c-1.1,0-2.2,0.2-3.3,0.6c-1,0.4-1.9,0.9-2.7,1.6\n                    c-0.8,0.7-1.4,1.6-1.8,2.6c-0.5,1-0.7,2.1-0.7,3.3V46c0,0.8-0.6,1.4-1.4,1.4h-5.6c-0.8,0-1.4-0.6-1.4-1.4V15.4\n                    C183.1,14.6,183.7,14,184.5,14z\"/>\n            </g>\n            <path id=\"u_1_\" class=\"st0\" d=\"M67.4,14.6c-0.7,0-1.3,0.6-1.3,1.3v16.2c0,4.4-3.2,7.4-7,7.4c-0.7,0-1.2,0-1.5,0c-3.9,0-7-3-7-7.4\n                V15.9c0-0.7-0.6-1.3-1.3-1.3H44c-0.7,0-1.3,0.6-1.3,1.3v18c0,7.8,7.2,13.3,14.7,13.3v0h0.1c0,0,0.1,0,0.1,0l0,0h1.4l0,0\n                c0,0,0.1,0,0.1,0h0.2v0c7.5-0.1,14.6-5.5,14.6-13.3v-18c0-0.7-0.6-1.3-1.3-1.3H67.4z\"/>\n            <g>\n                <g>\n                    <g>\n                        <path class=\"st0\" d=\"M144,30.9c0-2.4,0.4-4.7,1.3-6.9c0.9-2.2,2.1-4,3.7-5.7c1.6-1.6,3.5-2.9,5.7-3.8c2.2-0.9,4.6-1.4,7.3-1.4\n                            c2.7,0,5.1,0.5,7.3,1.4c2.2,0.9,4.1,2.2,5.7,3.8c1.6,1.6,2.8,3.5,3.7,5.7c0.9,2.2,1.3,4.4,1.3,6.9s-0.4,4.7-1.3,6.9\n                            c-0.9,2.2-2.1,4.1-3.7,5.7c-1.6,1.6-3.5,2.9-5.7,3.9c-2.2,0.9-4.6,1.4-7.3,1.4c-2.7,0-5.1-0.5-7.3-1.4c-2.2-0.9-4.1-2.2-5.7-3.9\n                            c-1.6-1.6-2.8-3.5-3.7-5.7C144.4,35.6,144,33.3,144,30.9z M161.9,41.5c1.6,0,3-0.3,4.2-1c1.2-0.6,2.2-1.5,3-2.5\n                            c0.8-1,1.4-2.2,1.7-3.4c0.4-1.2,0.6-2.5,0.6-3.7c0-1.2-0.2-2.4-0.6-3.7c-0.4-1.3-1-2.4-1.7-3.4c-0.8-1-1.8-1.9-3-2.5\n                            c-1.2-0.6-2.6-1-4.2-1c-1.6,0-3,0.3-4.2,1c-1.2,0.6-2.2,1.5-3,2.5c-0.8,1-1.4,2.2-1.7,3.4c-0.4,1.3-0.6,2.5-0.6,3.7\n                            c0,1.2,0.2,2.5,0.6,3.7c0.4,1.2,1,2.4,1.7,3.4c0.8,1,1.8,1.9,3,2.5C158.9,41.2,160.3,41.5,161.9,41.5z\"/>\n                    </g>\n                </g>\n            </g>\n        </g>\n        </svg>\n\n        <h5>NOVO Design System</h5>\n        <span class=\"version\">v. {{version}}</span>\n    </span>\n    <app-nav [routes]=\"appRoutes\"></app-nav>\n    <ul class=\"menu-list\">\n        <li class=\"menu-item\" [class.current]=\"router.isRouteActive(router.generate(['/Home']))\">\n            <a [routerLink]=\"['/Home']\" class=\"menu-link\">Introduction</a>\n        </li>\n\n        <li class=\"menu-section-header\">\n            <span class=\"menu-item-header\">Design</span>\n        </li>\n        <li class=\"menu-item\" *ngFor=\"#route of designRoutes\" [class.current]=\"router.isRouteActive(router.generate(['/'+route.name]))\">\n            <a [routerLink]=\"['/' + route.name]\" class=\"menu-link\">{{route.name}}</a>\n        </li>\n        <li class=\"menu-section-header\">\n            <span class=\"menu-item-header\">Components</span>\n        </li>\n        <li class=\"menu-item\" *ngFor=\"#route of componentRoutes\" [class.current]=\"router.isRouteActive(router.generate(['/'+route.name]))\">\n            <a [routerLink]=\"['/'+route.name]\" class=\"menu-link\">{{route.name}}</a>\n        </li>\n        <li class=\"menu-line\"></li>\n    </ul>\n</nav>\n<main class=\"main-content\" [ngClass]=\"{open: menuOpen}\">\n    <nav class=\"responsive-nav\">\n        <button name=\"open-menu\" (click)=\"toggleMenu()\"><span>&#9776;</span></button>\n        <svg data-name=\"bullhorn-text\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\" x=\"0px\" y=\"0px\" width=\"240.2px\" height=\"48.8px\" viewBox=\"0 0 240.2 48.8\"\n            style=\"enable-background:new 0 0 240.2 48.8;\" xml:space=\"preserve\">\n            <g>\n                <path class=\"st0\" d=\"M0,1.5c0-0.6,0.5-1.1,1.1-1.1h20c5.4,0,9.5,1.4,12.3,4.2c2.1,2.1,3.2,4.7,3.2,7.8v0.1c0,1.4-0.2,2.6-0.6,3.8\n            c-0.4,1.1-0.9,2.1-1.5,2.9c-0.6,0.8-1.3,1.6-2.1,2.2c-0.2,0.2-0.4,0.3-0.7,0.5c-0.7,0.5-0.6,1.6,0.1,1.9c1.9,0.9,3.4,1.9,4.7,3.2\n            c1.7,1.7,2.6,4.2,2.6,7.4v0.1c0,2.1-0.4,4-1.2,5.6c-0.8,1.6-2,3-3.5,4c-1.5,1.1-3.4,1.9-5.5,2.5c-2.1,0.6-4.5,0.8-7.2,0.8H1.1\n            C0.5,47.5,0,47,0,46.4V1.5z M19.4,20.3c2.7,0,4.8-0.5,6.5-1.6c1.6-1,2.4-2.6,2.4-4.8v-0.1c0-1.9-0.7-3.3-2.1-4.4\n            c-1.4-1-3.5-1.6-6.2-1.6H9.3c-0.6,0-1.1,0.5-1.1,1.1v10.2c0,0.6,0.5,1.1,1.1,1.1H19.4z M21.8,40.1c2.8,0,5-0.5,6.7-1.6\n            c1.6-1.1,2.4-2.7,2.4-4.8v-0.1c0-2-0.8-3.6-2.4-4.6c-1.6-1.1-4-1.6-7.3-1.6h-12c-0.6,0-1.1,0.5-1.1,1.1V39c0,0.6,0.5,1.1,1.1,1.1\n            H21.8z\" />\n                <path class=\"st0\" d=\"M81.3,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3h-5.9c-0.7,0-1.3-0.6-1.3-1.3v-45\n            C80.1,0.6,80.6,0,81.3,0z\" />\n                <path class=\"st0\" d=\"M96,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3H96c-0.7,0-1.3-0.6-1.3-1.3v-45\n            C94.8,0.6,95.3,0,96,0z\" />\n                <path class=\"st0\" d=\"M109.5,0l4,0c2.3,0,4.2,1.9,4.2,4.2v13.3c0.9-0.9,2.1-1.9,3.7-2.8c1.6-0.9,3.7-1.4,6.3-1.4c2,0,3.9,0.3,5.5,1\n            c1.6,0.7,3,1.6,4,2.8c1.1,1.2,1.9,2.7,2.5,4.4c0.6,1.7,0.9,3.6,0.9,5.6v19.1c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2\n            V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9c-0.7,0.8-1.3,1.7-1.7,2.8\n            c-0.4,1.1-0.6,2.2-0.6,3.5v16.9c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2V5.8V0z\" />\n                <path class=\"st0\" d=\"M210.5,14.1h5.3c0.7,0,1.4,0.6,1.4,1.3l0.1,2.4c0.4-0.5,0.9-1,1.5-1.5c0.6-0.5,1.3-1,2.1-1.5\n            c0.8-0.5,1.8-0.8,2.8-1.1c1-0.3,2.2-0.4,3.6-0.4c4.2,0,7.4,1.2,9.5,3.7c2.2,2.5,3.3,5.8,3.3,10.1V46c0,0.8-0.7,1.5-1.5,1.5h-5.4\n            c-0.8,0-1.5-0.7-1.5-1.5V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9\n            c-0.7,0.8-1.3,1.7-1.7,2.8c-0.4,1.1-0.6,2.2-0.6,3.5V46c0,0.8-0.7,1.5-1.5,1.5h-5.4c-0.8,0-1.5-0.7-1.5-1.5V15.5\n            C209.1,14.7,209.7,14.1,210.5,14.1z\" />\n                <g>\n                    <path class=\"st0\" d=\"M184.5,14h5.3c0.8,0,1.4,0.6,1.4,1.4l0.1,2.8c0.4-0.5,0.9-1,1.5-1.6c0.6-0.6,1.3-1.1,2.1-1.6\n                c0.8-0.5,1.7-0.9,2.8-1.2c1.1-0.3,2.3-0.5,3.7-0.5c0.8,0,1.5,0,2.2,0.1c0.3,0,0.5,0.1,0.8,0.2c0.6,0.2,1,0.8,0.9,1.4l-1.2,5.5\n                c-0.1,0.7-0.8,1.1-1.5,0.9c-0.2,0-0.4-0.1-0.6-0.1c-0.6-0.1-1.3-0.1-2.1-0.1c-1.1,0-2.2,0.2-3.3,0.6c-1,0.4-1.9,0.9-2.7,1.6\n                c-0.8,0.7-1.4,1.6-1.8,2.6c-0.5,1-0.7,2.1-0.7,3.3V46c0,0.8-0.6,1.4-1.4,1.4h-5.6c-0.8,0-1.4-0.6-1.4-1.4V15.4\n                C183.1,14.6,183.7,14,184.5,14z\" />\n                </g>\n                <path id=\"u_1_\" class=\"st0\" d=\"M67.4,14.6c-0.7,0-1.3,0.6-1.3,1.3v16.2c0,4.4-3.2,7.4-7,7.4c-0.7,0-1.2,0-1.5,0c-3.9,0-7-3-7-7.4\n            V15.9c0-0.7-0.6-1.3-1.3-1.3H44c-0.7,0-1.3,0.6-1.3,1.3v18c0,7.8,7.2,13.3,14.7,13.3v0h0.1c0,0,0.1,0,0.1,0l0,0h1.4l0,0\n            c0,0,0.1,0,0.1,0h0.2v0c7.5-0.1,14.6-5.5,14.6-13.3v-18c0-0.7-0.6-1.3-1.3-1.3H67.4z\" />\n                <g>\n                    <g>\n                        <g>\n                            <path class=\"st0\" d=\"M144,30.9c0-2.4,0.4-4.7,1.3-6.9c0.9-2.2,2.1-4,3.7-5.7c1.6-1.6,3.5-2.9,5.7-3.8c2.2-0.9,4.6-1.4,7.3-1.4\n                        c2.7,0,5.1,0.5,7.3,1.4c2.2,0.9,4.1,2.2,5.7,3.8c1.6,1.6,2.8,3.5,3.7,5.7c0.9,2.2,1.3,4.4,1.3,6.9s-0.4,4.7-1.3,6.9\n                        c-0.9,2.2-2.1,4.1-3.7,5.7c-1.6,1.6-3.5,2.9-5.7,3.9c-2.2,0.9-4.6,1.4-7.3,1.4c-2.7,0-5.1-0.5-7.3-1.4c-2.2-0.9-4.1-2.2-5.7-3.9\n                        c-1.6-1.6-2.8-3.5-3.7-5.7C144.4,35.6,144,33.3,144,30.9z M161.9,41.5c1.6,0,3-0.3,4.2-1c1.2-0.6,2.2-1.5,3-2.5\n                        c0.8-1,1.4-2.2,1.7-3.4c0.4-1.2,0.6-2.5,0.6-3.7c0-1.2-0.2-2.4-0.6-3.7c-0.4-1.3-1-2.4-1.7-3.4c-0.8-1-1.8-1.9-3-2.5\n                        c-1.2-0.6-2.6-1-4.2-1c-1.6,0-3,0.3-4.2,1c-1.2,0.6-2.2,1.5-3,2.5c-0.8,1-1.4,2.2-1.7,3.4c-0.4,1.3-0.6,2.5-0.6,3.7\n                        c0,1.2,0.2,2.5,0.6,3.7c0.4,1.2,1,2.4,1.7,3.4c0.8,1,1.8,1.9,3,2.5C158.9,41.2,160.3,41.5,161.9,41.5z\" />\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </svg>\n        <strong>Design System</strong>\n    </nav>\n    <router-outlet></router-outlet>\n</main>\n"

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = "<button theme=\"dialogue\" icon=\"addcard\">Add Card</button>\n<div class=\"inverse-color\">\n    <button theme=\"dialogue\" icon=\"list-o\" side=\"left\" color=\"white\" inverse>Add/Remove</button>\n</div>\n<button theme=\"dialogue\" icon=\"check\" color=\"success\">Dialogue</button>\n<button theme=\"dialogue\" disabled>Dialogue</button>\n"

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = "<button theme=\"secondary\" icon=\"collapse\" inverse>Actions</button>\n<button theme=\"secondary\" icon=\"convert\" inverse>Convert</button>\n<button theme=\"secondary\" icon=\"convert\" inverse disabled>Convert</button>\n"

/***/ },
/* 206 */
/***/ function(module, exports) {

	module.exports = "<button theme=\"icon\" icon=\"print\" inverse></button>\n<button theme=\"icon\" icon=\"print\" inverse disabled></button>\n"

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = "<button theme=\"primary\" icon=\"next\">Next</button>\n<button theme=\"primary\" [color]=\"negativeColor\" icon=\"times\">Cancel</button>\n<button theme=\"primary\" color=\"success\" icon=\"check\">Save</button>\n<button theme=\"primary\" color=\"warning\" icon=\"caution-o\">Caution</button>\n<button theme=\"primary\" color=\"pulse\" icon=\"next\" disabled>Submit</button>\n"

/***/ },
/* 208 */
/***/ function(module, exports) {

	module.exports = "<button theme=\"secondary\">Secondary</button>\n<button theme=\"secondary\" disabled>Secondary</button>\n\n"

/***/ },
/* 209 */
/***/ function(module, exports) {

	module.exports = "<button theme=\"standard\">Standard</button>\n<button theme=\"standard\" color=\"light\">Standard</button>\n<button theme=\"standard\" color=\"light\" disabled>Standard</button>\n"

/***/ },
/* 210 */
/***/ function(module, exports) {

	module.exports = "<header class=\"design container\" [ngClass]=\"color\">\n    <div>\n        <h1 class=\"title\">Color</h1>\n        <h2 class=\"sub-title\">Efficient and expressive</h2>\n        <p class=\"description\">Our colors are bold, fresh, and approachable. They are expressive and delightful, but selected with usability and accessibility in mind.</p>\n    </div>\n    <div class=\"background-boxes\">\n        <div class=\"bb-lead\" (mouseover)=\"changeColor('lead')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-contact\" (mouseover)=\"changeColor('contact')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-company\" (mouseover)=\"changeColor('company')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-candidate\" (mouseover)=\"changeColor('candidate')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-opportunity\" (mouseover)=\"changeColor('opportunity')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-job\" (mouseover)=\"changeColor('job')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-placement\" (mouseover)=\"changeColor('placement')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-grapefruit\" (mouseover)=\"changeColor('grapefruit')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-bittersweet\" (mouseover)=\"changeColor('bittersweet')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-sunflower\" (mouseover)=\"changeColor('sunflower')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-grass\" (mouseover)=\"changeColor('grass')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-mint\" (mouseover)=\"changeColor('mint')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-aqua\" (mouseover)=\"changeColor('aqua')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-ocean\" (mouseover)=\"changeColor('ocean')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-carnation\" (mouseover)=\"changeColor('carnation')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-lavender\" (mouseover)=\"changeColor('lavender')\" (mouseout)=\"changeColor('background')\"></div>\n    </div>\n</header>\n<section class=\"design container\">\n    <h2>Primary Colors</h2>\n    <p>These are the base colors of the application.</p>\n\n    <article class=\"color-blocks primary-colors\">\n        <div *ngFor=\"#color of primaryColors; #i = index\" class=\"block {{color.name}}-cb\">\n            <div class=\"color-square\" (click)=\"copyLink(color)\"></div>\n            <h3 class=\"color-text\" (click)=\"copyLink(color)\"><span>#</span>{{color.hex}}</h3>\n            <h6>{{color.name}}</h6>\n            <span class=\"vars\" *ngFor=\"#variable of color.variables; #j = index\">${{variable}}</span>\n        </div>\n    </article>\n\n    <h2>Entity Colors</h2>\n    <p>This bold palette uses carefully balanced colors to distinguish entities from one another.</p>\n\n    <article class=\"color-blocks entity-colors\">\n        <div *ngFor=\"#color of entityColors; #i = index\" class=\"block {{color.name}}-cb\">\n            <div class=\"color-square\" (click)=\"copyLink(color)\"></div>\n            <h3 class=\"color-text\" (click)=\"copyLink(color)\"><span>#</span>{{color.hex}}</h3>\n            <h6>{{color.name}}</h6>\n            <span class=\"vars\" *ngFor=\"#variable of color.variables; #j = index\">${{variable}}</span>\n        </div>\n    </article>\n\n    <h2>Analytics Colors</h2>\n    <p>This palette features vibrant, bold colors for use in data visualization.</p>\n\n    <article class=\"color-blocks analytics-colors\">\n        <div *ngFor=\"#color of analyticsColors; #i = index\" class=\"block {{color.name}}-cb\">\n            <div class=\"color-square\" (click)=\"copyLink(color)\"></div>\n            <h3 class=\"color-text\" (click)=\"copyLink(color)\"><span>#</span>{{color.hex}}</h3>\n            <h6>{{color.name}}</h6>\n            <span class=\"vars\" *ngFor=\"#variable of color.variables; #j = index\">${{variable}}</span>\n        </div>\n    </article>\n</section>\n"

/***/ },
/* 211 */
/***/ function(module, exports) {

	module.exports = "<header class=\"design container\">\n    <div>\n        <h1 class=\"title\">Introduction</h1>\n        <h2 class=\"sub-title\">Crafted amid Complexity</h2>\n\n        <p class=\"description\">\n            Enterprise software is highly complex and demands a\n            high level of flexibility. Design offers clarity and enables us to make\n            deep, powerful connections.\n        </p>\n    </div>\n    <img src=\"assets/images/IntroPageHeaderImage.svg\" alt=\"\"/>\n</header>\n\n<section class=\"design container\">\n    <h5>A NEW STANDARD</h5>\n    <p>Elegance in utility helps to create a system for humans, not robots. We strive not just to empower users but to delight them in the process.</p>\n\n    <h5>INSIGHTS AT SCALE</h5>\n    <p>Vast data reservoirs need a finely tuned system to surface the critical information right when it is needed, no matter the scale or setting.</p>\n\n    <h5>POWER IN FLEXIBILITY</h5>\n    <p>Users have vastly differing needs and goals. By identifying key commonalities and themes, we provide a strong experience for all.</p>\n\n    <article class=\"jump-to code\">\n        <i class=\"bhi-link\"></i>\n        <span>Are you a developer and what to skip right to the code?<br><a [routerLink]=\"['/Button']\">View Components here</a></span>\n    </article>\n\n    <article class=\"jump-to brand\">\n        <i class=\"bhi-link\"></i>\n        <span>Looking for the Bullhorn corporate brand guidelines? <br/><a href=\"https://brandfolder.com/bullhorn\" target=\"_blank\">Bullhorn Brand Folder</a></span>\n    </article>\n</section>\n"

/***/ },
/* 212 */
/***/ function(module, exports) {

	module.exports = "<header class=\"design container\">\n    <div>\n        <h1 class=\"title\">Iconography</h1>\n        <h2 class=\"sub-title\">Certified Pixel-Perfect</h2>\n\n        <p class=\"description\">\n            Icons are used to represent an action or concept through the most simplistic imagery possible. Icons give additional context to written material, allowing the user to quickly comprehend any given concept. The icons are designed on a highly specific\n            grid to ensure maximum clarity even at a small size. Their design is friendly, human, and bold.\n        </p>\n    </div>\n    <img src=\"assets/images/IconographyPageIcon.svg\" alt=\"\"/>\n</header>\n<section class=\"design container\">\n    <h2>Icons with Typography</h2>\n    <p>\n        An icon will always have slightly larger dimensions than text when they are paired together. This ensures that the icon is visually the same size as the text and that it scales proportionally.\n    </p>\n\n    <article>\n        <h5>Base sizing</h5>\n        <p>Icons placed next to typography should alays follow this convention.</p>\n\n        <div class=\"base-sizing\">\n            <div class=\"sizing-specs\">\n                <span>Bullhorn Glyphicons</span>\n                <span><strong>Size: </strong>1.29em</span>\n                <span><strong>Padding: </strong>.25em</span>\n                <span><strong>Border Radius: </strong>.625em</span>\n            </div>\n            <div class=\"sizing-demo\">\n                <h1><i class=\"bhi-company\"></i>Company Name</h1>\n            </div>\n        </div>\n    </article>\n\n    <article class=\"entities\">\n        <h5>Padding</h5>\n        <p>\n            Icons should have sufficient padding when followed by text.\n        </p>\n\n        <div class=\"padding\">\n            <div>\n                <h4><i class=\"bhi-circle\"></i>Alice Hughes</h4>\n                <h6><i class=\"bhi-location\"></i>Boston, MA</h6>\n                <span class=\"not-accepted\"><i class=\"bhi-close-o\"></i>I feel squished</span>\n            </div>\n            <div>\n                <h4><i class=\"bhi-circle\"></i>Alice Hughes</h4>\n                <h6><i class=\"bhi-location\"></i>Boston, MA</h6>\n                <span class=\"accepted\"><i class=\"bhi-check\"></i>Much better</span>\n            </div>\n        </div>\n    </article>\n\n    <article>\n        <h2>Entity Icons</h2>\n        <h5>Standard Entity Icons</h5>\n        <p>Used with corresponding entity color.</p>\n\n        <div class=\"example standard-icon-row\">\n            <div>\n                <i theme=\"entity\" class=\"bhi-lead lead\"></i>\n                <p>Lead</p>\n            </div>\n            <div>\n                <i theme=\"entity\" class=\"bhi-person contact\"></i>\n                <p>Contact</p>\n            </div>\n            <div>\n                <i theme=\"entity\" class=\"bhi-company company\"></i>\n                <p>Company</p>\n            </div>\n            <div>\n                <i theme=\"entity\" class=\"bhi-candidate candidate\"></i>\n                <p>Candidate</p>\n            </div>\n            <div>\n                <i theme=\"entity\" class=\"bhi-opportunity opportunity\"></i>\n                <p>Opportunity</p>\n            </div>\n            <div>\n                <i theme=\"entity\" class=\"bhi-job job\"></i>\n                <p>Job</p>\n            </div>\n            <div>\n                <i theme=\"entity\" class=\"bhi-star placement\"></i>\n                <p>Placement</p>\n            </div>\n        </div>\n        <pre><code>\n            &lt;i theme=\"entity\" class=\"bhi-lead lead\">&lt;/i&gt;\n            &lt;h6&gt;Lead&lt;/h6&gt;\n            &lt;i theme=\"entity\" class=\"bhi-person contact\"&gt;&lt;/i&gt;\n            &lt;h6&gt;Contact&lt;/h6&gt;\n            &lt;i theme=\"entity\" class=\"bhi-company company\"&gt;&lt;/i&gt;\n            &lt;h6&gt;Company&lt;/h6&gt;\n            &lt;i theme=\"entity\" class=\"bhi-candidate candidate\"&gt;&lt;/i&gt;\n            &lt;h6&gt;Candidate&lt;/h6&gt;\n            &lt;i theme=\"entity\" class=\"bhi-opportunity opportunity\"&gt;&lt;/i&gt;\n            &lt;h6&gt;Opportunity&lt;/h6&gt;\n            &lt;i theme=\"entity\" class=\"bhi-job job\"&gt;&lt;/i&gt;\n            &lt;h6&gt;Job&lt;/h6&gt;\n            &lt;i theme=\"entity\" class=\"bhi-star placement\"&gt;&lt;/i&gt;\n            &lt;h6&gt;Placement&lt;/h6&gt;\n        </code>\n        </pre>\n    </article>\n\n    <h2>Contained Icons</h2>\n    <h5>Scaling</h5>\n    <p>Make sure to scale the corner radius appropriately when enlarging or decreasing the size of the icon.</p>\n\n    <article class=\"contained-scaling\">\n        <figure>\n            <img src=\"assets/images/IconographyScalingDont.svg\" alt=\"\"/>\n            <figcaption class=\"not-accepted\"><i class=\"bhi-close-o\"></i>That doesn't look like a rectangle</figcaption>\n        </figure>\n        <figure>\n            <img src=\"assets/images/IconographyScalingDo.svg\" alt=\"\"/>\n            <figcaption class=\"accepted\"><i class=\"bhi-check\"></i>Always maintain the proportions</figcaption>\n        </figure>\n    </article>\n\n    <h5>Padding</h5>\n    <p>To preserve readability, icons should have sufficient padding from the edges of their containers. Additionally, the icons should be visually centered in their containers.</p>\n\n    <article class=\"contained-padding\">\n        <figure>\n            <img src=\"assets/images/IconographyPaddingDont.svg\" alt=\"\"/>\n            <figcaption class=\"not-accepted\"><i class=\"bhi-close-o\"></i>It's getting crowded in here</figcaption>\n        </figure>\n        <figure>\n            <img src=\"assets/images/IconographyPaddingDo.svg\" alt=\"\"/>\n            <figcaption class=\"accepted\"><i class=\"bhi-check\"></i>It's good to have some breathing room</figcaption>\n        </figure>\n    </article>\n\n    <article>\n        <h5>Examples</h5>\n\n        <div class=\"example contained-icon-row\">\n            <h1><i theme=\"contained\" class=\"bhi-lead lead\"></i>Heading One</h1>\n            <h2><i theme=\"contained\" class=\"bhi-person contact\"></i>Heading Two</h2>\n            <h3><i theme=\"contained\" class=\"bhi-company company\"></i>Heading Three</h3>\n            <h4><i theme=\"contained\" class=\"bhi-candidate candidate\"></i>Heading Four</h4>\n            <h5><i theme=\"contained\" class=\"bhi-opportunity opportunity\"></i>Heading Five</h5>\n            <h6><i theme=\"contained\" class=\"bhi-job job\"></i>Heading Six</h6>\n            <!-- <p><i theme=\"contained\" class=\"bhi-star placement\"></i>Body</p> -->\n        </div>\n        <pre><code class=\"hljs xml\">\n            &lt;h1&gt;&lt;i theme=\"contained\" class=\"bhi-lead lead\"&gt;&lt;/i&gt;Heading One&lt;/h1&gt;\n            &lt;h2&gt;&lt;i theme=\"contained\" class=\"bhi-person contact\"&gt;&lt;/i&gt;Heading Two&lt;/h2&gt;\n            &lt;h3&gt;&lt;i theme=\"contained\" class=\"bhi-company company\"&gt;&lt;/i&gt;Heading Three&lt;/h3&gt;\n            &lt;h4&gt;&lt;i theme=\"contained\" class=\"bhi-candidate candidate\"&gt;&lt;/i&gt;Heading Four&lt;/h4&gt;\n            &lt;h5&gt;&lt;i theme=\"contained\" class=\"bhi-opportunity opportunity\"&gt;&lt;/i&gt;Heading Five&lt;/h5&gt;\n            &lt;h6&gt;&lt;i theme=\"contained\" class=\"bhi-job job\"&gt;&lt;/i&gt;Heading Six&lt;/h6&gt;\n            <!-- &lt;p&gt;&lt;i theme=\"contained\" class=\"bhi-star placement\"&gt;&lt;/i&gt;Body&lt;/p&gt; -->\n        </code>\n        </pre>\n    </article>\n</section>\n"

/***/ },
/* 213 */
/***/ function(module, exports) {

	module.exports = "<header class=\"design container\">\n    <div>\n        <h1 class=\"title\">Composition</h1>\n        <h2 class=\"sub-title\">A universal language</h2>\n        <p class=\"description\">\n            Comprehensive design principles and language helps maintain\n            usability and a sense of harmony across a large family\n            of products. Consistency and common elements greatly\n            reduce the user effort requred to learn a new interface.\n        </p>\n    </div>\n    <img src=\"assets/images/CompositionPageIcon.svg\" alt=\"\"/>\n</header>\n\n<section class=\"design container\">\n    <h2>Mainframe</h2>\n    <p>\n        The Mainframe refers to the permanently fixed portions of\n        the application that never change. It contains the primary\n        navigation and core functions.\n    </p>\n\n    <aside class=\"design-principle\" style=\"margin-top: 60px;\">\n        <h6>Design Principles:\n            <span>Hierarchy &amp; Unity</span>\n        </h6>\n        <p>\n            Unity implies relation through proximity, size, and color.\n            Making elements clearly distinct or unified helps\n            create a strong visual hierarchy. This is important\n            because it helps to easily differentiate the level\n            of importance between different elements, and controls\n            a user's cognitive flow.\n        </p>\n    </aside>\n\n    <article>\n        <h5>Top Frame</h5>\n        <p>\n            The top frame contains key functions (Find, Add) and navigation\n            to the Resource Center and to User Profile options.\n        </p>\n        <img src=\"assets/images/LayoutMainframeTopFrame.svg\" alt=\"mainframe\"/>\n    </article>\n\n    <article>\n        <h5>Bowling Alley</h5>\n        <p>\n            The bowling alley is where all active items are displayed, allowing\n            users to easily shift between them.\n        </p>\n        <img class=\"bowling-alley\" src=\"assets/images/LayoutMainframeBowlingAlley.svg\" alt=\"bowling alley\"/>\n    </article>\n\n    <article>\n        <h5>Menu</h5>\n        <p>\n            The menu functions as the primary navigation for the application.\n            It contains links to every list, the dashboard, admin\n            functions, tools, and third-party applications. The\n            items on the menu can be toggled, grouped, and organized\n            however the user wishes.\n        </p>\n        <img class=\"menu\" src=\"assets/images/LayoutMainframeMenu.svg\" alt=\"menu\"/>\n    </article>\n\n    <h2>Headers</h2>\n    <p>\n        Headers hold key information and controls for a page. They serve\n        as a wayfinding marker to help the user understand context\n        and easily access important actions.\n    </p>\n\n    <article>\n        <h5>Overviews &amp; Slideouts</h5>\n        <p>\n            Overview and Slideout headers are dominant features which focus\n            the user's attention to the context of a particular\n            record and contains key information on the left,\n            and actions on the right. These headers inherit the\n            color of the entity type.\n        </p>\n        <img src=\"assets/images/LayoutMainframeHeaderOverview.svg\" alt=\"overview header\"/>\n    </article>\n\n    <article>\n        <h5>List Headers</h5>\n        <p>\n            List headers contain the filter and column controls for the list\n            and the primary actions. They are fixed so that results\n            can eaily be modified and actioned regardless of\n            scrolling position.\n        </p>\n        <img src=\"assets/images/LayoutMainframeHeaderList.svg\" alt=\"list header\"/>\n    </article>\n\n    <aside class=\"design-principle\">\n        <h6>Design Principles:\n            <span>Navigation &amp; Consistency</span>\n        </h6>\n        <p>A consistent navigation structure allows users to master\n            an interface much more quickly, as they know that\n            certain functions are always in the same place. We\n            use headers to provide quick access to key functions\n            and aid findability of data in a complex system.\n        </p>\n    </aside>\n\n    <article>\n        <h5>Add &amp; Edit Pages</h5>\n        <p>\n            The headers of Add and Edit pages generally serve as a simple\n            visual element to help provide context.\n        </p>\n        <img src=\"assets/images/LayoutMainframeHeaderEditPage.svg\" alt=\"add page header\"/>\n    </article>\n\n    <h2>Cards</h2>\n    <p>\n        Essential to our design paradigm, cards are independent blocks\n        of information. They can contain text, tables, and data\n        visualizations. They offer a curated view of data. Bringing\n        the most pertinent information to the forefont, they\n        allow users to scan large amounts of data quickly.\n    </p>\n\n    <article>\n        <h5>Basic Structure</h5>\n        <p>\n            Cards have a header which contains the card title and the card\n            controls. The controls can vary depending on card\n            type, gut generally include move, refresh, configure,\n            and remove. The content area has padding by default\n            but can also run edge-to-edge. Pulse cards have a\n            special icon next to the title.\n        </p>\n        <img src=\"assets/images/LayoutMainframeCardsNPSCard.svg\" alt=\"card\"/>\n    </article>\n\n    <aside class=\"design-principle\">\n        <h6>Design Principle:\n            <span>Cards</span>\n        </h6>\n        <p>\n            The card system scales easily, both in individual size\n            and in groups. Because of this, cards are essential\n            to our design language. Cards balance and align very\n            easily, promoting findability. These handy little\n            containers also provide a contextually relevant home\n            for all content.\n        </p>\n        <div class=\"hint\">\n            <span>\n                <i class=\"bhi-idea\"></i>\n                <strong>Hint: </strong>This is a great place for third-party\n                developers to fit into the Bullhorn system.</span>\n            <!--TODO - add back in when cards are put in-->\n            <!--<a class=\"link\" [routerLink]=\"['/Cards']\">-->\n                <!--<i class=\"bhi-link\"></i>-->\n                <!--<strong>Are you a developer?</strong> Check out card-->\n                <!--markup and documentation here-->\n            <!--</a>-->\n        </div>\n    </aside>\n\n    <article>\n        <h5>Dashboard &amp; Overviews</h5>\n        <p>\n            Dashboards and Records Overviews are the primary home for our\n            cards. They offer a customizable workspace to arrange\n            and configure to most appropriately fit the user's\n            needs. Cards have a fixed height, but mildly flexible\n            width. They can also be expanded to full-screen.\n            The \"add card\" control is always located in the top\n            right, to be consistent with the placement of action\n            buttons on tables and lists.\n        </p>\n        <img class=\"dashboard\" src=\"assets/images/LayoutMainframeCardsDashboard.svg\" alt=\"dashboard cards\"/>\n    </article>\n\n    <article>\n        <h5>Slideouts and Mobile</h5>\n        <p>\n            Cards are so flexible, they also work well in a mobile setting.\n            They help users to easily scan chunks of information\n            and find what they need.\n        </p>\n        <img class=\"mobile\" src=\"assets/images/LayoutMobileCard.svg\" alt=\"mobile cards\"/>\n    </article>\n</section>\n"

/***/ },
/* 214 */
/***/ function(module, exports) {

	module.exports = "<header class=\"color\">\n    <novo-nav theme=\"color\" [outlet]=\"buttonTab\" type=\"button-bar\">\n        <novo-tab-button>Button 1</novo-tab-button>\n        <novo-tab-button>Button 2</novo-tab-button>\n        <novo-tab-button>Button 3</novo-tab-button>\n    </novo-nav>\n</header>\n\n<novo-nav-outlet #buttonTab>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 3 Content</h1>\n    </novo-nav-content>\n</novo-nav-outlet>\n\n<header>\n    <novo-nav theme=\"white\" [outlet]=\"buttonTabWhite\" type=\"button-bar\">\n        <novo-tab-button>Button 1</novo-tab-button>\n        <novo-tab-button>Button 2</novo-tab-button>\n        <novo-tab-button>Button 3</novo-tab-button>\n    </novo-nav>\n</header>\n\n<novo-nav-outlet #buttonTabWhite>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 3 Content</h1>\n    </novo-nav-content>\n</novo-nav-outlet>\n"

/***/ },
/* 215 */
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-nav theme=\"color\" [outlet]=\"colornav\" direction=\"horizontal\">\n        <novo-tab>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 1</span>\n        </novo-tab>\n        <novo-tab>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 2</span>\n        </novo-tab>\n    </novo-nav>\n</header>\n\n<novo-nav-outlet #colornav>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n    </novo-nav-content>\n</novo-nav-outlet>\n"

/***/ },
/* 216 */
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-nav theme=\"white\" router>\n        <novo-tab-link>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 1</span>\n        </novo-tab-link>\n        <novo-tab-link>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 2</span>\n        </novo-tab-link>\n    </novo-nav>\n</header>\n"

/***/ },
/* 217 */
/***/ function(module, exports) {

	module.exports = "<novo-nav theme=\"white\" [outlet]=\"colorVert\" direction=\"vertical\">\n    <novo-tab>\n        <span>\n            <i class=\"bhi-person\"></i>Tab 1</span>\n    </novo-tab>\n    <novo-tab>\n        <span>\n            <i class=\"bhi-person\"></i>Tab 2</span>\n    </novo-tab>\n</novo-nav>\n\n<novo-nav-outlet #colorVert>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n\n        <p>\n            Synth polaroid bitters chillwave pickled. Vegan disrupt tousled,\n            Portland keffiyeh aesthetic food truck sriracha cornhole\n            single-origin coffee church-key roof party. Leggings\n            ethical McSweeney's, normcore you probably haven't\n            heard of them Marfa organic squid. Slow-carb 90's\n            ennui Godard pug asymmetrical, narwhal VHS Tonx High\n            Life. Retro dreamcatcher synth Godard pickled Etsy\n            jean shorts beard, pour-over fanny pack mumblecore.\n            Quinoa retro aesthetic polaroid, Williamsburg American\n            Apparel plaid small batch. Blue Bottle Vice fanny\n            pack, Williamsburg roof party Wes Anderson mlkshk\n            seitan brunch before they sold out lo-fi XOXO tofu\n            scenester small batch.\n        </p>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n\n        <p>\n            Synth polaroid bitters chillwave pickled.\n        </p>\n    </novo-nav-content>\n</novo-nav-outlet>\n"

/***/ },
/* 218 */
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-nav theme=\"white\" [outlet]=\"whitenav\">\n        <novo-tab>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 1</span>\n        </novo-tab>\n        <novo-tab>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 2</span>\n        </novo-tab>\n    </novo-nav>\n</header>\n\n<novo-nav-outlet #whitenav>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n    </novo-nav-content>\n</novo-nav-outlet>\n"

/***/ },
/* 219 */
/***/ function(module, exports) {

	module.exports = "<header class=\"design container\">\n    <div>\n        <h1 class=\"title\">Typography</h1>\n        <h2 class=\"sub-title\">Roboto, not robotic.</h2>\n\n        <p class=\"description\">\n            Roboto's refined letterforms combine geometry with open, rounded features to create a structured, yet friendly typeface. It maintains a human-like quality while expressing a clean and modern aesthetic.\n        </p>\n        <a href=\"https://www.google.com/fonts/specimen/Roboto\" target=\"_blank\"><i class=\"bhi-link\"></i> Roboto Typeface on Google Fonts</a>\n    </div>\n    <img src=\"assets/images/TypographyPageIcon.svg\" alt=\"\"/>\n</header>\n\n<section class=\"design container\">\n    <!-- <img src=\"assets/images/TypographyPrinciplesBalance.svg\" alt=\"Right\" height=\"180\"> -->\n    <!-- <img src=\"assets/images/TypographyPrinciplesClarity.svg\" alt=\"\"/> -->\n    <aside class=\"design-principle\">\n        <h6>Design Principle: <span>Clarity</span></h6>\n        <p>Proper line length, adequate white space, and appropriate line breaks\n            are necessary to preserve readability, rhythm, and overall clarity.</p>\n    </aside>\n\n    <article class=\"line-height\">\n        <h5>Line Height</h5>\n\n        <div>\n            <p style=\"line-height: 1em;\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n\n            <p class=\"not-accepted\">\n                <i class=\"bhi-close-o\"></i>These lines are too close for comfort\n            </p>\n        </div>\n        <div>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n\n            <p class=\"accepted\">\n                <i class=\"bhi-check\"></i>Thumbs up for great readability\n            </p>\n        </div>\n        <div>\n            <p style=\"line-height: 2.8em;\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n\n            <p class=\"not-accepted\">\n                <i class=\"bhi-close-o\"></i>I'm losing focus with all this space\n            </p>\n        </div>\n    </article>\n\n    <aside class=\"design-principle\">\n        <h6>Design Principle: <span>Balance</span></h6>\n        <p>Typographic balance is critical to readability and understanding\n            information hierarchy. The weight and size of the font helps determine\n            which element on a page receives a user’s attention first.</p>\n    </aside>\n\n    <article class=\"line-length\">\n        <h5>Line Length</h5>\n\n        <div class=\"too-short\">\n            <div class=\"ruler\">\n                <hr>\n                <span>30</span>\n\n                <p class=\"not-accepted\">\n                    <i class=\"bhi-close-o\"></i>Short lines interrupt the reader's rhythm\n                </p>\n            </div>\n            <p style=\"width: 15em;\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n        </div>\n        <div class=\"just-right\">\n            <div class=\"ruler\">\n                <hr>\n                <span>55-75</span>\n\n                <p class=\"accepted\">\n                    <i class=\"bhi-check\"></i>Optimal line length for readability\n                </p>\n            </div>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n        </div>\n        <div class=\"too-long\">\n            <div class=\"ruler\">\n                <hr>\n                <span>100</span>\n\n                <p class=\"not-accepted\">\n                    <i class=\"bhi-close-o\"></i>Difficult to jump to the next line\n                </p>\n            </div>\n            <p style=\"width: 55em; max-width: 100%;\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n        </div>\n    </article>\n\n    <aside class=\"imp-note\">\n        <h6><i class=\"bhi-mobile\"></i>How does this work with responsive design?</h6>\n        <p>\n            Line length is always relative to its font-size. This means that if a\n            font scales up or down in sizing (relative to its device's screen size) the\n            line length will automatically scale with it. Line length is about maintaining\n            a comfortable reading flow and rhythm from line to line.\n            <br><br>\n            <strong>When implementing</strong>, native line length will always be secondary to the width of\n            the text's container. This means that if a screen's width is smaller than\n            the text's native line length, the text will wrap early.\n        </p>\n    </aside>\n\n    <h2>Styles</h2>\n    <p>There a number of general styles that are present throughout the application. To maintain consistency, these styles should be adhered to as much as possible.</p>\n\n    <div class=\"example\">\n        <div class=\"type-group\">\n            <h1>Header 1</h1>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>2.5em (35px)</span>\n            <span><strong>Weight: </strong>400</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.45em 0 0.35em</span>\n        </div>\n        <div class=\"type-group\">\n            <h2>Header 2</h2>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>2em (28px)</span>\n            <span><strong>Weight: </strong>500</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.75em 0 0.3em</span>\n        </div>\n        <div class=\"type-group\">\n            <h3>Header 3</h3>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>1.75em (24px)</span>\n            <span><strong>Weight: </strong>300</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.6em 0 0.4em</span>\n        </div>\n        <div class=\"type-group\">\n            <h4>Header 4</h4>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>1.375em (19.25px)</span>\n            <span><strong>Weight: </strong>400</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.75em 0 0.5em</span>\n        </div>\n        <div class=\"type-group\">\n            <h5>Header 5</h5>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>1.125em (15.75px)</span>\n            <span><strong>Weight: </strong>700</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.75em 0 0.25em</span>\n            <span><strong>Transform: </strong>UPPERCASE</span>\n        </div>\n        <div class=\"type-group\">\n            <h6>Header 6</h6>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>1.125em (15.75px)</span>\n            <span><strong>Weight: </strong>500</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.75em 0 0.25em</span>\n        </div>\n        <div class=\"type-group\">\n            <span class=\"caption\">Caption</span>\n        </div>\n    </div>\n    <pre><code>\n        &lt;h1&gt;Heading 1&lt;/h1&gt;\n        &lt;h2&gt;Heading 2&lt;/h2&gt;\n        &lt;h3&gt;Heading 3&lt;/h3&gt;\n        &lt;h4&gt;Heading 4&lt;/h4&gt;\n        &lt;h5&gt;Heading 5&lt;/h5&gt;\n        &lt;h6&gt;Heading 6&lt;/h6&gt;\n        &lt;p&gt;\n        Body\n        &lt;/p&gt;\n        &lt;hr&gt;\n        &lt;span class=\"caption\"&gt;Caption&lt;/span&gt;</code>\n    </pre>\n</section>\n"

/***/ },
/* 220 */,
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(44);
	var map_1 = __webpack_require__(223);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },
/* 222 */,
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(67);
	/**
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the returned observable
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * @param {Function} project the function to create projection
	 * @param {any} [thisArg] an optional argument to define what `this` is in the project function
	 * @returns {Observable} a observable of projected values
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}
	exports.map = map;
	var MapOperator = (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber) {
	        return new MapSubscriber(subscriber, this.project, this.thisArg);
	    };
	    return MapOperator;
	}());
	var MapSubscriber = (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.count = 0;
	        this.thisArg = thisArg || this;
	    }
	    // NOTE: This looks unoptimized, but it's actually purposefully NOT
	    // using try/catch optimizations.
	    MapSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.project.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return MapSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=map.js.map

/***/ },
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var angular_entrypoint_1 = __webpack_require__(248);
	exports.AngularEntrypoint = angular_entrypoint_1.AngularEntrypoint;
	var browser_common_1 = __webpack_require__(176);
	exports.BROWSER_PROVIDERS = browser_common_1.BROWSER_PROVIDERS;
	exports.CACHED_TEMPLATE_PROVIDER = browser_common_1.CACHED_TEMPLATE_PROVIDER;
	exports.ELEMENT_PROBE_PROVIDERS = browser_common_1.ELEMENT_PROBE_PROVIDERS;
	exports.ELEMENT_PROBE_PROVIDERS_PROD_MODE = browser_common_1.ELEMENT_PROBE_PROVIDERS_PROD_MODE;
	exports.inspectNativeElement = browser_common_1.inspectNativeElement;
	exports.BrowserDomAdapter = browser_common_1.BrowserDomAdapter;
	exports.By = browser_common_1.By;
	exports.Title = browser_common_1.Title;
	exports.DOCUMENT = browser_common_1.DOCUMENT;
	exports.enableDebugTools = browser_common_1.enableDebugTools;
	exports.disableDebugTools = browser_common_1.disableDebugTools;
	var lang_1 = __webpack_require__(1);
	var browser_common_2 = __webpack_require__(176);
	var compiler_1 = __webpack_require__(116);
	var core_1 = __webpack_require__(3);
	var reflection_capabilities_1 = __webpack_require__(168);
	var xhr_impl_1 = __webpack_require__(175);
	var compiler_2 = __webpack_require__(116);
	var di_1 = __webpack_require__(5);
	/**
	 * An array of providers that should be passed into `application()` when bootstrapping a component.
	 */
	exports.BROWSER_APP_PROVIDERS = lang_1.CONST_EXPR([
	    browser_common_2.BROWSER_APP_COMMON_PROVIDERS,
	    compiler_1.COMPILER_PROVIDERS,
	    new di_1.Provider(compiler_2.XHR, { useClass: xhr_impl_1.XHRImpl }),
	]);
	/**
	 * Bootstrapping for Angular applications.
	 *
	 * You instantiate an Angular application by explicitly specifying a component to use
	 * as the root component for your application via the `bootstrap()` method.
	 *
	 * ## Simple Example
	 *
	 * Assuming this `index.html`:
	 *
	 * ```html
	 * <html>
	 *   <!-- load Angular script tags here. -->
	 *   <body>
	 *     <my-app>loading...</my-app>
	 *   </body>
	 * </html>
	 * ```
	 *
	 * An application is bootstrapped inside an existing browser DOM, typically `index.html`.
	 * Unlike Angular 1, Angular 2 does not compile/process providers in `index.html`. This is
	 * mainly for security reasons, as well as architectural changes in Angular 2. This means
	 * that `index.html` can safely be processed using server-side technologies such as
	 * providers. Bindings can thus use double-curly `{{ syntax }}` without collision from
	 * Angular 2 component double-curly `{{ syntax }}`.
	 *
	 * We can use this script code:
	 *
	 * {@example core/ts/bootstrap/bootstrap.ts region='bootstrap'}
	 *
	 * When the app developer invokes `bootstrap()` with the root component `MyApp` as its
	 * argument, Angular performs the following tasks:
	 *
	 *  1. It uses the component's `selector` property to locate the DOM element which needs
	 *     to be upgraded into the angular component.
	 *  2. It creates a new child injector (from the platform injector). Optionally, you can
	 *     also override the injector configuration for an app by invoking `bootstrap` with the
	 *     `componentInjectableBindings` argument.
	 *  3. It creates a new `Zone` and connects it to the angular application's change detection
	 *     domain instance.
	 *  4. It creates an emulated or shadow DOM on the selected component's host element and loads the
	 *     template into it.
	 *  5. It instantiates the specified component.
	 *  6. Finally, Angular performs change detection to apply the initial data providers for the
	 *     application.
	 *
	 *
	 * ## Bootstrapping Multiple Applications
	 *
	 * When working within a browser window, there are many singleton resources: cookies, title,
	 * location, and others. Angular services that represent these resources must likewise be
	 * shared across all Angular applications that occupy the same browser window. For this
	 * reason, Angular creates exactly one global platform object which stores all shared
	 * services, and each angular application injector has the platform injector as its parent.
	 *
	 * Each application has its own private injector as well. When there are multiple
	 * applications on a page, Angular treats each application injector's services as private
	 * to that application.
	 *
	 * ## API
	 *
	 * - `appComponentType`: The root component which should act as the application. This is
	 *   a reference to a `Type` which is annotated with `@Component(...)`.
	 * - `customProviders`: An additional set of providers that can be added to the
	 *   app injector to override default injection behavior.
	 *
	 * Returns a `Promise` of {@link ComponentRef}.
	 */
	function bootstrap(appComponentType, customProviders) {
	    core_1.reflector.reflectionCapabilities = new reflection_capabilities_1.ReflectionCapabilities();
	    var appProviders = lang_1.isPresent(customProviders) ? [exports.BROWSER_APP_PROVIDERS, customProviders] : exports.BROWSER_APP_PROVIDERS;
	    return core_1.platform(browser_common_2.BROWSER_PROVIDERS).application(appProviders).bootstrap(appComponentType);
	}
	exports.bootstrap = bootstrap;


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var math_1 = __webpack_require__(173);
	var util_1 = __webpack_require__(178);
	var collection_1 = __webpack_require__(2);
	var dom_adapter_1 = __webpack_require__(7);
	var Animation = (function () {
	    /**
	     * Stores the start time and starts the animation
	     * @param element
	     * @param data
	     * @param browserDetails
	     */
	    function Animation(element, data, browserDetails) {
	        var _this = this;
	        this.element = element;
	        this.data = data;
	        this.browserDetails = browserDetails;
	        /** functions to be called upon completion */
	        this.callbacks = [];
	        /** functions for removing event listeners */
	        this.eventClearFunctions = [];
	        /** flag used to track whether or not the animation has finished */
	        this.completed = false;
	        this._stringPrefix = '';
	        this.startTime = lang_1.DateWrapper.toMillis(lang_1.DateWrapper.now());
	        this._stringPrefix = dom_adapter_1.DOM.getAnimationPrefix();
	        this.setup();
	        this.wait(function (timestamp) { return _this.start(); });
	    }
	    Object.defineProperty(Animation.prototype, "totalTime", {
	        /** total amount of time that the animation should take including delay */
	        get: function () {
	            var delay = this.computedDelay != null ? this.computedDelay : 0;
	            var duration = this.computedDuration != null ? this.computedDuration : 0;
	            return delay + duration;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Animation.prototype.wait = function (callback) {
	        // Firefox requires 2 frames for some reason
	        this.browserDetails.raf(callback, 2);
	    };
	    /**
	     * Sets up the initial styles before the animation is started
	     */
	    Animation.prototype.setup = function () {
	        if (this.data.fromStyles != null)
	            this.applyStyles(this.data.fromStyles);
	        if (this.data.duration != null)
	            this.applyStyles({ 'transitionDuration': this.data.duration.toString() + 'ms' });
	        if (this.data.delay != null)
	            this.applyStyles({ 'transitionDelay': this.data.delay.toString() + 'ms' });
	    };
	    /**
	     * After the initial setup has occurred, this method adds the animation styles
	     */
	    Animation.prototype.start = function () {
	        this.addClasses(this.data.classesToAdd);
	        this.addClasses(this.data.animationClasses);
	        this.removeClasses(this.data.classesToRemove);
	        if (this.data.toStyles != null)
	            this.applyStyles(this.data.toStyles);
	        var computedStyles = dom_adapter_1.DOM.getComputedStyle(this.element);
	        this.computedDelay =
	            math_1.Math.max(this.parseDurationString(computedStyles.getPropertyValue(this._stringPrefix + 'transition-delay')), this.parseDurationString(this.element.style.getPropertyValue(this._stringPrefix + 'transition-delay')));
	        this.computedDuration = math_1.Math.max(this.parseDurationString(computedStyles.getPropertyValue(this._stringPrefix + 'transition-duration')), this.parseDurationString(this.element.style.getPropertyValue(this._stringPrefix + 'transition-duration')));
	        this.addEvents();
	    };
	    /**
	     * Applies the provided styles to the element
	     * @param styles
	     */
	    Animation.prototype.applyStyles = function (styles) {
	        var _this = this;
	        collection_1.StringMapWrapper.forEach(styles, function (value, key) {
	            var dashCaseKey = util_1.camelCaseToDashCase(key);
	            if (lang_1.isPresent(dom_adapter_1.DOM.getStyle(_this.element, dashCaseKey))) {
	                dom_adapter_1.DOM.setStyle(_this.element, dashCaseKey, value.toString());
	            }
	            else {
	                dom_adapter_1.DOM.setStyle(_this.element, _this._stringPrefix + dashCaseKey, value.toString());
	            }
	        });
	    };
	    /**
	     * Adds the provided classes to the element
	     * @param classes
	     */
	    Animation.prototype.addClasses = function (classes) {
	        for (var i = 0, len = classes.length; i < len; i++)
	            dom_adapter_1.DOM.addClass(this.element, classes[i]);
	    };
	    /**
	     * Removes the provided classes from the element
	     * @param classes
	     */
	    Animation.prototype.removeClasses = function (classes) {
	        for (var i = 0, len = classes.length; i < len; i++)
	            dom_adapter_1.DOM.removeClass(this.element, classes[i]);
	    };
	    /**
	     * Adds events to track when animations have finished
	     */
	    Animation.prototype.addEvents = function () {
	        var _this = this;
	        if (this.totalTime > 0) {
	            this.eventClearFunctions.push(dom_adapter_1.DOM.onAndCancel(this.element, dom_adapter_1.DOM.getTransitionEnd(), function (event) { return _this.handleAnimationEvent(event); }));
	        }
	        else {
	            this.handleAnimationCompleted();
	        }
	    };
	    Animation.prototype.handleAnimationEvent = function (event) {
	        var elapsedTime = math_1.Math.round(event.elapsedTime * 1000);
	        if (!this.browserDetails.elapsedTimeIncludesDelay)
	            elapsedTime += this.computedDelay;
	        event.stopPropagation();
	        if (elapsedTime >= this.totalTime)
	            this.handleAnimationCompleted();
	    };
	    /**
	     * Runs all animation callbacks and removes temporary classes
	     */
	    Animation.prototype.handleAnimationCompleted = function () {
	        this.removeClasses(this.data.animationClasses);
	        this.callbacks.forEach(function (callback) { return callback(); });
	        this.callbacks = [];
	        this.eventClearFunctions.forEach(function (fn) { return fn(); });
	        this.eventClearFunctions = [];
	        this.completed = true;
	    };
	    /**
	     * Adds animation callbacks to be called upon completion
	     * @param callback
	     * @returns {Animation}
	     */
	    Animation.prototype.onComplete = function (callback) {
	        if (this.completed) {
	            callback();
	        }
	        else {
	            this.callbacks.push(callback);
	        }
	        return this;
	    };
	    /**
	     * Converts the duration string to the number of milliseconds
	     * @param duration
	     * @returns {number}
	     */
	    Animation.prototype.parseDurationString = function (duration) {
	        var maxValue = 0;
	        // duration must have at least 2 characters to be valid. (number + type)
	        if (duration == null || duration.length < 2) {
	            return maxValue;
	        }
	        else if (duration.substring(duration.length - 2) == 'ms') {
	            var value = lang_1.NumberWrapper.parseInt(this.stripLetters(duration), 10);
	            if (value > maxValue)
	                maxValue = value;
	        }
	        else if (duration.substring(duration.length - 1) == 's') {
	            var ms = lang_1.NumberWrapper.parseFloat(this.stripLetters(duration)) * 1000;
	            var value = math_1.Math.floor(ms);
	            if (value > maxValue)
	                maxValue = value;
	        }
	        return maxValue;
	    };
	    /**
	     * Strips the letters from the duration string
	     * @param str
	     * @returns {string}
	     */
	    Animation.prototype.stripLetters = function (str) {
	        return lang_1.StringWrapper.replaceAll(str, lang_1.RegExpWrapper.create('[^0-9]+$', ''), '');
	    };
	    return Animation;
	}());
	exports.Animation = Animation;


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var css_animation_options_1 = __webpack_require__(234);
	var animation_1 = __webpack_require__(232);
	var CssAnimationBuilder = (function () {
	    /**
	     * Accepts public properties for CssAnimationBuilder
	     */
	    function CssAnimationBuilder(browserDetails) {
	        this.browserDetails = browserDetails;
	        /** @type {CssAnimationOptions} */
	        this.data = new css_animation_options_1.CssAnimationOptions();
	    }
	    /**
	     * Adds a temporary class that will be removed at the end of the animation
	     * @param className
	     */
	    CssAnimationBuilder.prototype.addAnimationClass = function (className) {
	        this.data.animationClasses.push(className);
	        return this;
	    };
	    /**
	     * Adds a class that will remain on the element after the animation has finished
	     * @param className
	     */
	    CssAnimationBuilder.prototype.addClass = function (className) {
	        this.data.classesToAdd.push(className);
	        return this;
	    };
	    /**
	     * Removes a class from the element
	     * @param className
	     */
	    CssAnimationBuilder.prototype.removeClass = function (className) {
	        this.data.classesToRemove.push(className);
	        return this;
	    };
	    /**
	     * Sets the animation duration (and overrides any defined through CSS)
	     * @param duration
	     */
	    CssAnimationBuilder.prototype.setDuration = function (duration) {
	        this.data.duration = duration;
	        return this;
	    };
	    /**
	     * Sets the animation delay (and overrides any defined through CSS)
	     * @param delay
	     */
	    CssAnimationBuilder.prototype.setDelay = function (delay) {
	        this.data.delay = delay;
	        return this;
	    };
	    /**
	     * Sets styles for both the initial state and the destination state
	     * @param from
	     * @param to
	     */
	    CssAnimationBuilder.prototype.setStyles = function (from, to) {
	        return this.setFromStyles(from).setToStyles(to);
	    };
	    /**
	     * Sets the initial styles for the animation
	     * @param from
	     */
	    CssAnimationBuilder.prototype.setFromStyles = function (from) {
	        this.data.fromStyles = from;
	        return this;
	    };
	    /**
	     * Sets the destination styles for the animation
	     * @param to
	     */
	    CssAnimationBuilder.prototype.setToStyles = function (to) {
	        this.data.toStyles = to;
	        return this;
	    };
	    /**
	     * Starts the animation and returns a promise
	     * @param element
	     */
	    CssAnimationBuilder.prototype.start = function (element) {
	        return new animation_1.Animation(element, this.data, this.browserDetails);
	    };
	    return CssAnimationBuilder;
	}());
	exports.CssAnimationBuilder = CssAnimationBuilder;


/***/ },
/* 234 */
/***/ function(module, exports) {

	'use strict';"use strict";
	var CssAnimationOptions = (function () {
	    function CssAnimationOptions() {
	        /** classes to be added to the element */
	        this.classesToAdd = [];
	        /** classes to be removed from the element */
	        this.classesToRemove = [];
	        /** classes to be added for the duration of the animation */
	        this.animationClasses = [];
	    }
	    return CssAnimationOptions;
	}());
	exports.CssAnimationOptions = CssAnimationOptions;


/***/ },
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	function assertArrayOfStrings(identifier, value) {
	    if (!lang_1.assertionsEnabled() || lang_1.isBlank(value)) {
	        return;
	    }
	    if (!lang_1.isArray(value)) {
	        throw new exceptions_1.BaseException("Expected '" + identifier + "' to be an array of strings.");
	    }
	    for (var i = 0; i < value.length; i += 1) {
	        if (!lang_1.isString(value[i])) {
	            throw new exceptions_1.BaseException("Expected '" + identifier + "' to be an array of strings.");
	        }
	    }
	}
	exports.assertArrayOfStrings = assertArrayOfStrings;


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var collection_1 = __webpack_require__(2);
	var lang_1 = __webpack_require__(1);
	var reflection_1 = __webpack_require__(8);
	var change_detection_1 = __webpack_require__(9);
	var template_ast_1 = __webpack_require__(22);
	var interfaces_1 = __webpack_require__(55);
	function createChangeDetectorDefinitions(componentType, componentStrategy, genConfig, parsedTemplate) {
	    var pvVisitors = [];
	    var visitor = new ProtoViewVisitor(null, pvVisitors, componentStrategy);
	    template_ast_1.templateVisitAll(visitor, parsedTemplate);
	    return createChangeDefinitions(pvVisitors, componentType, genConfig);
	}
	exports.createChangeDetectorDefinitions = createChangeDetectorDefinitions;
	var ProtoViewVisitor = (function () {
	    function ProtoViewVisitor(parent, allVisitors, strategy) {
	        this.parent = parent;
	        this.allVisitors = allVisitors;
	        this.strategy = strategy;
	        this.nodeCount = 0;
	        this.boundElementCount = 0;
	        this.variableNames = [];
	        this.bindingRecords = [];
	        this.eventRecords = [];
	        this.directiveRecords = [];
	        this.viewIndex = allVisitors.length;
	        allVisitors.push(this);
	    }
	    ProtoViewVisitor.prototype.visitEmbeddedTemplate = function (ast, context) {
	        this.nodeCount++;
	        this.boundElementCount++;
	        template_ast_1.templateVisitAll(this, ast.outputs);
	        for (var i = 0; i < ast.directives.length; i++) {
	            ast.directives[i].visit(this, i);
	        }
	        var childVisitor = new ProtoViewVisitor(this, this.allVisitors, change_detection_1.ChangeDetectionStrategy.Default);
	        // Attention: variables present on an embedded template count towards
	        // the embedded template and not the template anchor!
	        template_ast_1.templateVisitAll(childVisitor, ast.vars);
	        template_ast_1.templateVisitAll(childVisitor, ast.children);
	        return null;
	    };
	    ProtoViewVisitor.prototype.visitElement = function (ast, context) {
	        this.nodeCount++;
	        if (ast.isBound()) {
	            this.boundElementCount++;
	        }
	        template_ast_1.templateVisitAll(this, ast.inputs, null);
	        template_ast_1.templateVisitAll(this, ast.outputs);
	        template_ast_1.templateVisitAll(this, ast.exportAsVars);
	        for (var i = 0; i < ast.directives.length; i++) {
	            ast.directives[i].visit(this, i);
	        }
	        template_ast_1.templateVisitAll(this, ast.children);
	        return null;
	    };
	    ProtoViewVisitor.prototype.visitNgContent = function (ast, context) { return null; };
	    ProtoViewVisitor.prototype.visitVariable = function (ast, context) {
	        this.variableNames.push(ast.name);
	        return null;
	    };
	    ProtoViewVisitor.prototype.visitEvent = function (ast, directiveRecord) {
	        var bindingRecord = lang_1.isPresent(directiveRecord) ?
	            change_detection_1.BindingRecord.createForHostEvent(ast.handler, ast.fullName, directiveRecord) :
	            change_detection_1.BindingRecord.createForEvent(ast.handler, ast.fullName, this.boundElementCount - 1);
	        this.eventRecords.push(bindingRecord);
	        return null;
	    };
	    ProtoViewVisitor.prototype.visitElementProperty = function (ast, directiveRecord) {
	        var boundElementIndex = this.boundElementCount - 1;
	        var dirIndex = lang_1.isPresent(directiveRecord) ? directiveRecord.directiveIndex : null;
	        var bindingRecord;
	        if (ast.type === template_ast_1.PropertyBindingType.Property) {
	            bindingRecord =
	                lang_1.isPresent(dirIndex) ?
	                    change_detection_1.BindingRecord.createForHostProperty(dirIndex, ast.value, ast.name) :
	                    change_detection_1.BindingRecord.createForElementProperty(ast.value, boundElementIndex, ast.name);
	        }
	        else if (ast.type === template_ast_1.PropertyBindingType.Attribute) {
	            bindingRecord =
	                lang_1.isPresent(dirIndex) ?
	                    change_detection_1.BindingRecord.createForHostAttribute(dirIndex, ast.value, ast.name) :
	                    change_detection_1.BindingRecord.createForElementAttribute(ast.value, boundElementIndex, ast.name);
	        }
	        else if (ast.type === template_ast_1.PropertyBindingType.Class) {
	            bindingRecord =
	                lang_1.isPresent(dirIndex) ?
	                    change_detection_1.BindingRecord.createForHostClass(dirIndex, ast.value, ast.name) :
	                    change_detection_1.BindingRecord.createForElementClass(ast.value, boundElementIndex, ast.name);
	        }
	        else if (ast.type === template_ast_1.PropertyBindingType.Style) {
	            bindingRecord =
	                lang_1.isPresent(dirIndex) ?
	                    change_detection_1.BindingRecord.createForHostStyle(dirIndex, ast.value, ast.name, ast.unit) :
	                    change_detection_1.BindingRecord.createForElementStyle(ast.value, boundElementIndex, ast.name, ast.unit);
	        }
	        this.bindingRecords.push(bindingRecord);
	        return null;
	    };
	    ProtoViewVisitor.prototype.visitAttr = function (ast, context) { return null; };
	    ProtoViewVisitor.prototype.visitBoundText = function (ast, context) {
	        var nodeIndex = this.nodeCount++;
	        this.bindingRecords.push(change_detection_1.BindingRecord.createForTextNode(ast.value, nodeIndex));
	        return null;
	    };
	    ProtoViewVisitor.prototype.visitText = function (ast, context) {
	        this.nodeCount++;
	        return null;
	    };
	    ProtoViewVisitor.prototype.visitDirective = function (ast, directiveIndexAsNumber) {
	        var directiveIndex = new change_detection_1.DirectiveIndex(this.boundElementCount - 1, directiveIndexAsNumber);
	        var directiveMetadata = ast.directive;
	        var outputsArray = [];
	        collection_1.StringMapWrapper.forEach(ast.directive.outputs, function (eventName, dirProperty) { return outputsArray.push([dirProperty, eventName]); });
	        var directiveRecord = new change_detection_1.DirectiveRecord({
	            directiveIndex: directiveIndex,
	            callAfterContentInit: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.AfterContentInit) !== -1,
	            callAfterContentChecked: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.AfterContentChecked) !== -1,
	            callAfterViewInit: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.AfterViewInit) !== -1,
	            callAfterViewChecked: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.AfterViewChecked) !== -1,
	            callOnChanges: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.OnChanges) !== -1,
	            callDoCheck: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.DoCheck) !== -1,
	            callOnInit: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.OnInit) !== -1,
	            callOnDestroy: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.OnDestroy) !== -1,
	            changeDetection: directiveMetadata.changeDetection,
	            outputs: outputsArray
	        });
	        this.directiveRecords.push(directiveRecord);
	        template_ast_1.templateVisitAll(this, ast.inputs, directiveRecord);
	        var bindingRecords = this.bindingRecords;
	        if (directiveRecord.callOnChanges) {
	            bindingRecords.push(change_detection_1.BindingRecord.createDirectiveOnChanges(directiveRecord));
	        }
	        if (directiveRecord.callOnInit) {
	            bindingRecords.push(change_detection_1.BindingRecord.createDirectiveOnInit(directiveRecord));
	        }
	        if (directiveRecord.callDoCheck) {
	            bindingRecords.push(change_detection_1.BindingRecord.createDirectiveDoCheck(directiveRecord));
	        }
	        template_ast_1.templateVisitAll(this, ast.hostProperties, directiveRecord);
	        template_ast_1.templateVisitAll(this, ast.hostEvents, directiveRecord);
	        template_ast_1.templateVisitAll(this, ast.exportAsVars);
	        return null;
	    };
	    ProtoViewVisitor.prototype.visitDirectiveProperty = function (ast, directiveRecord) {
	        // TODO: these setters should eventually be created by change detection, to make
	        // it monomorphic!
	        var setter = reflection_1.reflector.setter(ast.directiveName);
	        this.bindingRecords.push(change_detection_1.BindingRecord.createForDirective(ast.value, ast.directiveName, setter, directiveRecord));
	        return null;
	    };
	    return ProtoViewVisitor;
	}());
	function createChangeDefinitions(pvVisitors, componentType, genConfig) {
	    var pvVariableNames = _collectNestedProtoViewsVariableNames(pvVisitors);
	    return pvVisitors.map(function (pvVisitor) {
	        var id = componentType.name + "_" + pvVisitor.viewIndex;
	        return new change_detection_1.ChangeDetectorDefinition(id, pvVisitor.strategy, pvVariableNames[pvVisitor.viewIndex], pvVisitor.bindingRecords, pvVisitor.eventRecords, pvVisitor.directiveRecords, genConfig);
	    });
	}
	function _collectNestedProtoViewsVariableNames(pvVisitors) {
	    var nestedPvVariableNames = collection_1.ListWrapper.createFixedSize(pvVisitors.length);
	    pvVisitors.forEach(function (pv) {
	        var parentVariableNames = lang_1.isPresent(pv.parent) ? nestedPvVariableNames[pv.parent.viewIndex] : [];
	        nestedPvVariableNames[pv.viewIndex] = parentVariableNames.concat(pv.variableNames);
	    });
	    return nestedPvVariableNames;
	}


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var runtime_compiler_1 = __webpack_require__(139);
	var template_compiler_1 = __webpack_require__(88);
	exports.TemplateCompiler = template_compiler_1.TemplateCompiler;
	var directive_metadata_1 = __webpack_require__(51);
	exports.CompileDirectiveMetadata = directive_metadata_1.CompileDirectiveMetadata;
	exports.CompileTypeMetadata = directive_metadata_1.CompileTypeMetadata;
	exports.CompileTemplateMetadata = directive_metadata_1.CompileTemplateMetadata;
	var source_module_1 = __webpack_require__(21);
	exports.SourceModule = source_module_1.SourceModule;
	exports.SourceWithImports = source_module_1.SourceWithImports;
	var platform_directives_and_pipes_1 = __webpack_require__(103);
	exports.PLATFORM_DIRECTIVES = platform_directives_and_pipes_1.PLATFORM_DIRECTIVES;
	exports.PLATFORM_PIPES = platform_directives_and_pipes_1.PLATFORM_PIPES;
	__export(__webpack_require__(22));
	var template_parser_1 = __webpack_require__(89);
	exports.TEMPLATE_TRANSFORMS = template_parser_1.TEMPLATE_TRANSFORMS;
	var lang_1 = __webpack_require__(1);
	var di_1 = __webpack_require__(5);
	var template_parser_2 = __webpack_require__(89);
	var html_parser_1 = __webpack_require__(83);
	var template_normalizer_1 = __webpack_require__(143);
	var runtime_metadata_1 = __webpack_require__(140);
	var change_detector_compiler_1 = __webpack_require__(138);
	var style_compiler_1 = __webpack_require__(142);
	var view_compiler_1 = __webpack_require__(145);
	var proto_view_compiler_1 = __webpack_require__(85);
	var template_compiler_2 = __webpack_require__(88);
	var change_detection_1 = __webpack_require__(9);
	var compiler_1 = __webpack_require__(26);
	var runtime_compiler_2 = __webpack_require__(139);
	var element_schema_registry_1 = __webpack_require__(86);
	var dom_element_schema_registry_1 = __webpack_require__(246);
	var url_resolver_1 = __webpack_require__(31);
	var change_detection_2 = __webpack_require__(9);
	function _createChangeDetectorGenConfig() {
	    return new change_detection_1.ChangeDetectorGenConfig(lang_1.assertionsEnabled(), false, true);
	}
	/**
	 * A set of providers that provide `RuntimeCompiler` and its dependencies to use for
	 * template compilation.
	 */
	exports.COMPILER_PROVIDERS = lang_1.CONST_EXPR([
	    change_detection_2.Lexer,
	    change_detection_2.Parser,
	    html_parser_1.HtmlParser,
	    template_parser_2.TemplateParser,
	    template_normalizer_1.TemplateNormalizer,
	    runtime_metadata_1.RuntimeMetadataResolver,
	    url_resolver_1.DEFAULT_PACKAGE_URL_PROVIDER,
	    style_compiler_1.StyleCompiler,
	    proto_view_compiler_1.ProtoViewCompiler,
	    view_compiler_1.ViewCompiler,
	    change_detector_compiler_1.ChangeDetectionCompiler,
	    new di_1.Provider(change_detection_1.ChangeDetectorGenConfig, { useFactory: _createChangeDetectorGenConfig, deps: [] }),
	    template_compiler_2.TemplateCompiler,
	    new di_1.Provider(runtime_compiler_2.RuntimeCompiler, { useClass: runtime_compiler_1.RuntimeCompiler_ }),
	    new di_1.Provider(compiler_1.Compiler, { useExisting: runtime_compiler_2.RuntimeCompiler }),
	    dom_element_schema_registry_1.DomElementSchemaRegistry,
	    new di_1.Provider(element_schema_registry_1.ElementSchemaRegistry, { useExisting: dom_element_schema_registry_1.DomElementSchemaRegistry }),
	    url_resolver_1.UrlResolver
	]);


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(2);
	var parse_util_1 = __webpack_require__(84);
	var html_tags_1 = __webpack_require__(30);
	(function (HtmlTokenType) {
	    HtmlTokenType[HtmlTokenType["TAG_OPEN_START"] = 0] = "TAG_OPEN_START";
	    HtmlTokenType[HtmlTokenType["TAG_OPEN_END"] = 1] = "TAG_OPEN_END";
	    HtmlTokenType[HtmlTokenType["TAG_OPEN_END_VOID"] = 2] = "TAG_OPEN_END_VOID";
	    HtmlTokenType[HtmlTokenType["TAG_CLOSE"] = 3] = "TAG_CLOSE";
	    HtmlTokenType[HtmlTokenType["TEXT"] = 4] = "TEXT";
	    HtmlTokenType[HtmlTokenType["ESCAPABLE_RAW_TEXT"] = 5] = "ESCAPABLE_RAW_TEXT";
	    HtmlTokenType[HtmlTokenType["RAW_TEXT"] = 6] = "RAW_TEXT";
	    HtmlTokenType[HtmlTokenType["COMMENT_START"] = 7] = "COMMENT_START";
	    HtmlTokenType[HtmlTokenType["COMMENT_END"] = 8] = "COMMENT_END";
	    HtmlTokenType[HtmlTokenType["CDATA_START"] = 9] = "CDATA_START";
	    HtmlTokenType[HtmlTokenType["CDATA_END"] = 10] = "CDATA_END";
	    HtmlTokenType[HtmlTokenType["ATTR_NAME"] = 11] = "ATTR_NAME";
	    HtmlTokenType[HtmlTokenType["ATTR_VALUE"] = 12] = "ATTR_VALUE";
	    HtmlTokenType[HtmlTokenType["DOC_TYPE"] = 13] = "DOC_TYPE";
	    HtmlTokenType[HtmlTokenType["EOF"] = 14] = "EOF";
	})(exports.HtmlTokenType || (exports.HtmlTokenType = {}));
	var HtmlTokenType = exports.HtmlTokenType;
	var HtmlToken = (function () {
	    function HtmlToken(type, parts, sourceSpan) {
	        this.type = type;
	        this.parts = parts;
	        this.sourceSpan = sourceSpan;
	    }
	    return HtmlToken;
	}());
	exports.HtmlToken = HtmlToken;
	var HtmlTokenError = (function (_super) {
	    __extends(HtmlTokenError, _super);
	    function HtmlTokenError(errorMsg, tokenType, span) {
	        _super.call(this, span, errorMsg);
	        this.tokenType = tokenType;
	    }
	    return HtmlTokenError;
	}(parse_util_1.ParseError));
	exports.HtmlTokenError = HtmlTokenError;
	var HtmlTokenizeResult = (function () {
	    function HtmlTokenizeResult(tokens, errors) {
	        this.tokens = tokens;
	        this.errors = errors;
	    }
	    return HtmlTokenizeResult;
	}());
	exports.HtmlTokenizeResult = HtmlTokenizeResult;
	function tokenizeHtml(sourceContent, sourceUrl) {
	    return new _HtmlTokenizer(new parse_util_1.ParseSourceFile(sourceContent, sourceUrl)).tokenize();
	}
	exports.tokenizeHtml = tokenizeHtml;
	var $EOF = 0;
	var $TAB = 9;
	var $LF = 10;
	var $FF = 12;
	var $CR = 13;
	var $SPACE = 32;
	var $BANG = 33;
	var $DQ = 34;
	var $HASH = 35;
	var $$ = 36;
	var $AMPERSAND = 38;
	var $SQ = 39;
	var $MINUS = 45;
	var $SLASH = 47;
	var $0 = 48;
	var $SEMICOLON = 59;
	var $9 = 57;
	var $COLON = 58;
	var $LT = 60;
	var $EQ = 61;
	var $GT = 62;
	var $QUESTION = 63;
	var $LBRACKET = 91;
	var $RBRACKET = 93;
	var $A = 65;
	var $F = 70;
	var $X = 88;
	var $Z = 90;
	var $a = 97;
	var $f = 102;
	var $z = 122;
	var $x = 120;
	var $NBSP = 160;
	var CR_OR_CRLF_REGEXP = /\r\n?/g;
	function unexpectedCharacterErrorMsg(charCode) {
	    var char = charCode === $EOF ? 'EOF' : lang_1.StringWrapper.fromCharCode(charCode);
	    return "Unexpected character \"" + char + "\"";
	}
	function unknownEntityErrorMsg(entitySrc) {
	    return "Unknown entity \"" + entitySrc + "\" - use the \"&#<decimal>;\" or  \"&#x<hex>;\" syntax";
	}
	var ControlFlowError = (function () {
	    function ControlFlowError(error) {
	        this.error = error;
	    }
	    return ControlFlowError;
	}());
	// See http://www.w3.org/TR/html51/syntax.html#writing
	var _HtmlTokenizer = (function () {
	    function _HtmlTokenizer(file) {
	        this.file = file;
	        // Note: this is always lowercase!
	        this.peek = -1;
	        this.index = -1;
	        this.line = 0;
	        this.column = -1;
	        this.tokens = [];
	        this.errors = [];
	        this.input = file.content;
	        this.length = file.content.length;
	        this._advance();
	    }
	    _HtmlTokenizer.prototype._processCarriageReturns = function (content) {
	        // http://www.w3.org/TR/html5/syntax.html#preprocessing-the-input-stream
	        // In order to keep the original position in the source, we can not
	        // pre-process it.
	        // Instead CRs are processed right before instantiating the tokens.
	        return lang_1.StringWrapper.replaceAll(content, CR_OR_CRLF_REGEXP, '\n');
	    };
	    _HtmlTokenizer.prototype.tokenize = function () {
	        while (this.peek !== $EOF) {
	            var start = this._getLocation();
	            try {
	                if (this._attemptCharCode($LT)) {
	                    if (this._attemptCharCode($BANG)) {
	                        if (this._attemptCharCode($LBRACKET)) {
	                            this._consumeCdata(start);
	                        }
	                        else if (this._attemptCharCode($MINUS)) {
	                            this._consumeComment(start);
	                        }
	                        else {
	                            this._consumeDocType(start);
	                        }
	                    }
	                    else if (this._attemptCharCode($SLASH)) {
	                        this._consumeTagClose(start);
	                    }
	                    else {
	                        this._consumeTagOpen(start);
	                    }
	                }
	                else {
	                    this._consumeText();
	                }
	            }
	            catch (e) {
	                if (e instanceof ControlFlowError) {
	                    this.errors.push(e.error);
	                }
	                else {
	                    throw e;
	                }
	            }
	        }
	        this._beginToken(HtmlTokenType.EOF);
	        this._endToken([]);
	        return new HtmlTokenizeResult(mergeTextTokens(this.tokens), this.errors);
	    };
	    _HtmlTokenizer.prototype._getLocation = function () {
	        return new parse_util_1.ParseLocation(this.file, this.index, this.line, this.column);
	    };
	    _HtmlTokenizer.prototype._getSpan = function (start, end) {
	        if (lang_1.isBlank(start)) {
	            start = this._getLocation();
	        }
	        if (lang_1.isBlank(end)) {
	            end = this._getLocation();
	        }
	        return new parse_util_1.ParseSourceSpan(start, end);
	    };
	    _HtmlTokenizer.prototype._beginToken = function (type, start) {
	        if (start === void 0) { start = null; }
	        if (lang_1.isBlank(start)) {
	            start = this._getLocation();
	        }
	        this.currentTokenStart = start;
	        this.currentTokenType = type;
	    };
	    _HtmlTokenizer.prototype._endToken = function (parts, end) {
	        if (end === void 0) { end = null; }
	        if (lang_1.isBlank(end)) {
	            end = this._getLocation();
	        }
	        var token = new HtmlToken(this.currentTokenType, parts, new parse_util_1.ParseSourceSpan(this.currentTokenStart, end));
	        this.tokens.push(token);
	        this.currentTokenStart = null;
	        this.currentTokenType = null;
	        return token;
	    };
	    _HtmlTokenizer.prototype._createError = function (msg, span) {
	        var error = new HtmlTokenError(msg, this.currentTokenType, span);
	        this.currentTokenStart = null;
	        this.currentTokenType = null;
	        return new ControlFlowError(error);
	    };
	    _HtmlTokenizer.prototype._advance = function () {
	        if (this.index >= this.length) {
	            throw this._createError(unexpectedCharacterErrorMsg($EOF), this._getSpan());
	        }
	        if (this.peek === $LF) {
	            this.line++;
	            this.column = 0;
	        }
	        else if (this.peek !== $LF && this.peek !== $CR) {
	            this.column++;
	        }
	        this.index++;
	        this.peek = this.index >= this.length ? $EOF : lang_1.StringWrapper.charCodeAt(this.input, this.index);
	    };
	    _HtmlTokenizer.prototype._attemptCharCode = function (charCode) {
	        if (this.peek === charCode) {
	            this._advance();
	            return true;
	        }
	        return false;
	    };
	    _HtmlTokenizer.prototype._attemptCharCodeCaseInsensitive = function (charCode) {
	        if (compareCharCodeCaseInsensitive(this.peek, charCode)) {
	            this._advance();
	            return true;
	        }
	        return false;
	    };
	    _HtmlTokenizer.prototype._requireCharCode = function (charCode) {
	        var location = this._getLocation();
	        if (!this._attemptCharCode(charCode)) {
	            throw this._createError(unexpectedCharacterErrorMsg(this.peek), this._getSpan(location, location));
	        }
	    };
	    _HtmlTokenizer.prototype._attemptStr = function (chars) {
	        for (var i = 0; i < chars.length; i++) {
	            if (!this._attemptCharCode(lang_1.StringWrapper.charCodeAt(chars, i))) {
	                return false;
	            }
	        }
	        return true;
	    };
	    _HtmlTokenizer.prototype._attemptStrCaseInsensitive = function (chars) {
	        for (var i = 0; i < chars.length; i++) {
	            if (!this._attemptCharCodeCaseInsensitive(lang_1.StringWrapper.charCodeAt(chars, i))) {
	                return false;
	            }
	        }
	        return true;
	    };
	    _HtmlTokenizer.prototype._requireStr = function (chars) {
	        var location = this._getLocation();
	        if (!this._attemptStr(chars)) {
	            throw this._createError(unexpectedCharacterErrorMsg(this.peek), this._getSpan(location));
	        }
	    };
	    _HtmlTokenizer.prototype._attemptCharCodeUntilFn = function (predicate) {
	        while (!predicate(this.peek)) {
	            this._advance();
	        }
	    };
	    _HtmlTokenizer.prototype._requireCharCodeUntilFn = function (predicate, len) {
	        var start = this._getLocation();
	        this._attemptCharCodeUntilFn(predicate);
	        if (this.index - start.offset < len) {
	            throw this._createError(unexpectedCharacterErrorMsg(this.peek), this._getSpan(start, start));
	        }
	    };
	    _HtmlTokenizer.prototype._attemptUntilChar = function (char) {
	        while (this.peek !== char) {
	            this._advance();
	        }
	    };
	    _HtmlTokenizer.prototype._readChar = function (decodeEntities) {
	        if (decodeEntities && this.peek === $AMPERSAND) {
	            return this._decodeEntity();
	        }
	        else {
	            var index = this.index;
	            this._advance();
	            return this.input[index];
	        }
	    };
	    _HtmlTokenizer.prototype._decodeEntity = function () {
	        var start = this._getLocation();
	        this._advance();
	        if (this._attemptCharCode($HASH)) {
	            var isHex = this._attemptCharCode($x) || this._attemptCharCode($X);
	            var numberStart = this._getLocation().offset;
	            this._attemptCharCodeUntilFn(isDigitEntityEnd);
	            if (this.peek != $SEMICOLON) {
	                throw this._createError(unexpectedCharacterErrorMsg(this.peek), this._getSpan());
	            }
	            this._advance();
	            var strNum = this.input.substring(numberStart, this.index - 1);
	            try {
	                var charCode = lang_1.NumberWrapper.parseInt(strNum, isHex ? 16 : 10);
	                return lang_1.StringWrapper.fromCharCode(charCode);
	            }
	            catch (e) {
	                var entity = this.input.substring(start.offset + 1, this.index - 1);
	                throw this._createError(unknownEntityErrorMsg(entity), this._getSpan(start));
	            }
	        }
	        else {
	            var startPosition = this._savePosition();
	            this._attemptCharCodeUntilFn(isNamedEntityEnd);
	            if (this.peek != $SEMICOLON) {
	                this._restorePosition(startPosition);
	                return '&';
	            }
	            this._advance();
	            var name_1 = this.input.substring(start.offset + 1, this.index - 1);
	            var char = html_tags_1.NAMED_ENTITIES[name_1];
	            if (lang_1.isBlank(char)) {
	                throw this._createError(unknownEntityErrorMsg(name_1), this._getSpan(start));
	            }
	            return char;
	        }
	    };
	    _HtmlTokenizer.prototype._consumeRawText = function (decodeEntities, firstCharOfEnd, attemptEndRest) {
	        var tagCloseStart;
	        var textStart = this._getLocation();
	        this._beginToken(decodeEntities ? HtmlTokenType.ESCAPABLE_RAW_TEXT : HtmlTokenType.RAW_TEXT, textStart);
	        var parts = [];
	        while (true) {
	            tagCloseStart = this._getLocation();
	            if (this._attemptCharCode(firstCharOfEnd) && attemptEndRest()) {
	                break;
	            }
	            if (this.index > tagCloseStart.offset) {
	                parts.push(this.input.substring(tagCloseStart.offset, this.index));
	            }
	            while (this.peek !== firstCharOfEnd) {
	                parts.push(this._readChar(decodeEntities));
	            }
	        }
	        return this._endToken([this._processCarriageReturns(parts.join(''))], tagCloseStart);
	    };
	    _HtmlTokenizer.prototype._consumeComment = function (start) {
	        var _this = this;
	        this._beginToken(HtmlTokenType.COMMENT_START, start);
	        this._requireCharCode($MINUS);
	        this._endToken([]);
	        var textToken = this._consumeRawText(false, $MINUS, function () { return _this._attemptStr('->'); });
	        this._beginToken(HtmlTokenType.COMMENT_END, textToken.sourceSpan.end);
	        this._endToken([]);
	    };
	    _HtmlTokenizer.prototype._consumeCdata = function (start) {
	        var _this = this;
	        this._beginToken(HtmlTokenType.CDATA_START, start);
	        this._requireStr('CDATA[');
	        this._endToken([]);
	        var textToken = this._consumeRawText(false, $RBRACKET, function () { return _this._attemptStr(']>'); });
	        this._beginToken(HtmlTokenType.CDATA_END, textToken.sourceSpan.end);
	        this._endToken([]);
	    };
	    _HtmlTokenizer.prototype._consumeDocType = function (start) {
	        this._beginToken(HtmlTokenType.DOC_TYPE, start);
	        this._attemptUntilChar($GT);
	        this._advance();
	        this._endToken([this.input.substring(start.offset + 2, this.index - 1)]);
	    };
	    _HtmlTokenizer.prototype._consumePrefixAndName = function () {
	        var nameOrPrefixStart = this.index;
	        var prefix = null;
	        while (this.peek !== $COLON && !isPrefixEnd(this.peek)) {
	            this._advance();
	        }
	        var nameStart;
	        if (this.peek === $COLON) {
	            this._advance();
	            prefix = this.input.substring(nameOrPrefixStart, this.index - 1);
	            nameStart = this.index;
	        }
	        else {
	            nameStart = nameOrPrefixStart;
	        }
	        this._requireCharCodeUntilFn(isNameEnd, this.index === nameStart ? 1 : 0);
	        var name = this.input.substring(nameStart, this.index);
	        return [prefix, name];
	    };
	    _HtmlTokenizer.prototype._consumeTagOpen = function (start) {
	        var savedPos = this._savePosition();
	        var lowercaseTagName;
	        try {
	            if (!isAsciiLetter(this.peek)) {
	                throw this._createError(unexpectedCharacterErrorMsg(this.peek), this._getSpan());
	            }
	            var nameStart = this.index;
	            this._consumeTagOpenStart(start);
	            lowercaseTagName = this.input.substring(nameStart, this.index).toLowerCase();
	            this._attemptCharCodeUntilFn(isNotWhitespace);
	            while (this.peek !== $SLASH && this.peek !== $GT) {
	                this._consumeAttributeName();
	                this._attemptCharCodeUntilFn(isNotWhitespace);
	                if (this._attemptCharCode($EQ)) {
	                    this._attemptCharCodeUntilFn(isNotWhitespace);
	                    this._consumeAttributeValue();
	                }
	                this._attemptCharCodeUntilFn(isNotWhitespace);
	            }
	            this._consumeTagOpenEnd();
	        }
	        catch (e) {
	            if (e instanceof ControlFlowError) {
	                // When the start tag is invalid, assume we want a "<"
	                this._restorePosition(savedPos);
	                // Back to back text tokens are merged at the end
	                this._beginToken(HtmlTokenType.TEXT, start);
	                this._endToken(['<']);
	                return;
	            }
	            throw e;
	        }
	        var contentTokenType = html_tags_1.getHtmlTagDefinition(lowercaseTagName).contentType;
	        if (contentTokenType === html_tags_1.HtmlTagContentType.RAW_TEXT) {
	            this._consumeRawTextWithTagClose(lowercaseTagName, false);
	        }
	        else if (contentTokenType === html_tags_1.HtmlTagContentType.ESCAPABLE_RAW_TEXT) {
	            this._consumeRawTextWithTagClose(lowercaseTagName, true);
	        }
	    };
	    _HtmlTokenizer.prototype._consumeRawTextWithTagClose = function (lowercaseTagName, decodeEntities) {
	        var _this = this;
	        var textToken = this._consumeRawText(decodeEntities, $LT, function () {
	            if (!_this._attemptCharCode($SLASH))
	                return false;
	            _this._attemptCharCodeUntilFn(isNotWhitespace);
	            if (!_this._attemptStrCaseInsensitive(lowercaseTagName))
	                return false;
	            _this._attemptCharCodeUntilFn(isNotWhitespace);
	            if (!_this._attemptCharCode($GT))
	                return false;
	            return true;
	        });
	        this._beginToken(HtmlTokenType.TAG_CLOSE, textToken.sourceSpan.end);
	        this._endToken([null, lowercaseTagName]);
	    };
	    _HtmlTokenizer.prototype._consumeTagOpenStart = function (start) {
	        this._beginToken(HtmlTokenType.TAG_OPEN_START, start);
	        var parts = this._consumePrefixAndName();
	        this._endToken(parts);
	    };
	    _HtmlTokenizer.prototype._consumeAttributeName = function () {
	        this._beginToken(HtmlTokenType.ATTR_NAME);
	        var prefixAndName = this._consumePrefixAndName();
	        this._endToken(prefixAndName);
	    };
	    _HtmlTokenizer.prototype._consumeAttributeValue = function () {
	        this._beginToken(HtmlTokenType.ATTR_VALUE);
	        var value;
	        if (this.peek === $SQ || this.peek === $DQ) {
	            var quoteChar = this.peek;
	            this._advance();
	            var parts = [];
	            while (this.peek !== quoteChar) {
	                parts.push(this._readChar(true));
	            }
	            value = parts.join('');
	            this._advance();
	        }
	        else {
	            var valueStart = this.index;
	            this._requireCharCodeUntilFn(isNameEnd, 1);
	            value = this.input.substring(valueStart, this.index);
	        }
	        this._endToken([this._processCarriageReturns(value)]);
	    };
	    _HtmlTokenizer.prototype._consumeTagOpenEnd = function () {
	        var tokenType = this._attemptCharCode($SLASH) ? HtmlTokenType.TAG_OPEN_END_VOID :
	            HtmlTokenType.TAG_OPEN_END;
	        this._beginToken(tokenType);
	        this._requireCharCode($GT);
	        this._endToken([]);
	    };
	    _HtmlTokenizer.prototype._consumeTagClose = function (start) {
	        this._beginToken(HtmlTokenType.TAG_CLOSE, start);
	        this._attemptCharCodeUntilFn(isNotWhitespace);
	        var prefixAndName;
	        prefixAndName = this._consumePrefixAndName();
	        this._attemptCharCodeUntilFn(isNotWhitespace);
	        this._requireCharCode($GT);
	        this._endToken(prefixAndName);
	    };
	    _HtmlTokenizer.prototype._consumeText = function () {
	        var start = this._getLocation();
	        this._beginToken(HtmlTokenType.TEXT, start);
	        var parts = [this._readChar(true)];
	        while (!isTextEnd(this.peek)) {
	            parts.push(this._readChar(true));
	        }
	        this._endToken([this._processCarriageReturns(parts.join(''))]);
	    };
	    _HtmlTokenizer.prototype._savePosition = function () {
	        return [this.peek, this.index, this.column, this.line, this.tokens.length];
	    };
	    _HtmlTokenizer.prototype._restorePosition = function (position) {
	        this.peek = position[0];
	        this.index = position[1];
	        this.column = position[2];
	        this.line = position[3];
	        var nbTokens = position[4];
	        if (nbTokens < this.tokens.length) {
	            // remove any extra tokens
	            this.tokens = collection_1.ListWrapper.slice(this.tokens, 0, nbTokens);
	        }
	    };
	    return _HtmlTokenizer;
	}());
	function isNotWhitespace(code) {
	    return !isWhitespace(code) || code === $EOF;
	}
	function isWhitespace(code) {
	    return (code >= $TAB && code <= $SPACE) || (code === $NBSP);
	}
	function isNameEnd(code) {
	    return isWhitespace(code) || code === $GT || code === $SLASH || code === $SQ || code === $DQ ||
	        code === $EQ;
	}
	function isPrefixEnd(code) {
	    return (code < $a || $z < code) && (code < $A || $Z < code) && (code < $0 || code > $9);
	}
	function isDigitEntityEnd(code) {
	    return code == $SEMICOLON || code == $EOF || !isAsciiHexDigit(code);
	}
	function isNamedEntityEnd(code) {
	    return code == $SEMICOLON || code == $EOF || !isAsciiLetter(code);
	}
	function isTextEnd(code) {
	    return code === $LT || code === $EOF;
	}
	function isAsciiLetter(code) {
	    return code >= $a && code <= $z || code >= $A && code <= $Z;
	}
	function isAsciiHexDigit(code) {
	    return code >= $a && code <= $f || code >= $A && code <= $F || code >= $0 && code <= $9;
	}
	function compareCharCodeCaseInsensitive(code1, code2) {
	    return toUpperCaseCharCode(code1) == toUpperCaseCharCode(code2);
	}
	function toUpperCaseCharCode(code) {
	    return code >= $a && code <= $z ? code - $a + $A : code;
	}
	function mergeTextTokens(srcTokens) {
	    var dstTokens = [];
	    var lastDstToken;
	    for (var i = 0; i < srcTokens.length; i++) {
	        var token = srcTokens[i];
	        if (lang_1.isPresent(lastDstToken) && lastDstToken.type == HtmlTokenType.TEXT &&
	            token.type == HtmlTokenType.TEXT) {
	            lastDstToken.parts[0] += token.parts[0];
	            lastDstToken.sourceSpan.end = token.sourceSpan.end;
	        }
	        else {
	            lastDstToken = token;
	            dstTokens.push(lastDstToken);
	        }
	    }
	    return dstTokens;
	}


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var di_1 = __webpack_require__(5);
	var lang_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(2);
	var dom_adapter_1 = __webpack_require__(7);
	var html_tags_1 = __webpack_require__(30);
	var element_schema_registry_1 = __webpack_require__(86);
	var NAMESPACE_URIS = lang_1.CONST_EXPR({ 'xlink': 'http://www.w3.org/1999/xlink', 'svg': 'http://www.w3.org/2000/svg' });
	var DomElementSchemaRegistry = (function (_super) {
	    __extends(DomElementSchemaRegistry, _super);
	    function DomElementSchemaRegistry() {
	        _super.apply(this, arguments);
	        this._protoElements = new Map();
	    }
	    DomElementSchemaRegistry.prototype._getProtoElement = function (tagName) {
	        var element = this._protoElements.get(tagName);
	        if (lang_1.isBlank(element)) {
	            var nsAndName = html_tags_1.splitNsName(tagName);
	            element = lang_1.isPresent(nsAndName[0]) ?
	                dom_adapter_1.DOM.createElementNS(NAMESPACE_URIS[nsAndName[0]], nsAndName[1]) :
	                dom_adapter_1.DOM.createElement(nsAndName[1]);
	            this._protoElements.set(tagName, element);
	        }
	        return element;
	    };
	    DomElementSchemaRegistry.prototype.hasProperty = function (tagName, propName) {
	        if (tagName.indexOf('-') !== -1) {
	            // can't tell now as we don't know which properties a custom element will get
	            // once it is instantiated
	            return true;
	        }
	        else {
	            var elm = this._getProtoElement(tagName);
	            return dom_adapter_1.DOM.hasProperty(elm, propName);
	        }
	    };
	    DomElementSchemaRegistry.prototype.getMappedPropName = function (propName) {
	        var mappedPropName = collection_1.StringMapWrapper.get(dom_adapter_1.DOM.attrToPropMap, propName);
	        return lang_1.isPresent(mappedPropName) ? mappedPropName : propName;
	    };
	    DomElementSchemaRegistry = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], DomElementSchemaRegistry);
	    return DomElementSchemaRegistry;
	}(element_schema_registry_1.ElementSchemaRegistry));
	exports.DomElementSchemaRegistry = DomElementSchemaRegistry;


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var collection_1 = __webpack_require__(2);
	var lang_1 = __webpack_require__(1);
	/**
	 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
	 *
	 * Please make sure to keep to edits in sync with the source file.
	 *
	 * Source:
	 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
	 *
	 * The original file level comment is reproduced below
	 */
	/*
	  This is a limited shim for ShadowDOM css styling.
	  https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/shadow/index.html#styles
	
	  The intention here is to support only the styling features which can be
	  relatively simply implemented. The goal is to allow users to avoid the
	  most obvious pitfalls and do so without compromising performance significantly.
	  For ShadowDOM styling that's not covered here, a set of best practices
	  can be provided that should allow users to accomplish more complex styling.
	
	  The following is a list of specific ShadowDOM styling features and a brief
	  discussion of the approach used to shim.
	
	  Shimmed features:
	
	  * :host, :host-context: ShadowDOM allows styling of the shadowRoot's host
	  element using the :host rule. To shim this feature, the :host styles are
	  reformatted and prefixed with a given scope name and promoted to a
	  document level stylesheet.
	  For example, given a scope name of .foo, a rule like this:
	
	    :host {
	        background: red;
	      }
	    }
	
	  becomes:
	
	    .foo {
	      background: red;
	    }
	
	  * encapsultion: Styles defined within ShadowDOM, apply only to
	  dom inside the ShadowDOM. Polymer uses one of two techniques to implement
	  this feature.
	
	  By default, rules are prefixed with the host element tag name
	  as a descendant selector. This ensures styling does not leak out of the 'top'
	  of the element's ShadowDOM. For example,
	
	  div {
	      font-weight: bold;
	    }
	
	  becomes:
	
	  x-foo div {
	      font-weight: bold;
	    }
	
	  becomes:
	
	
	  Alternatively, if WebComponents.ShadowCSS.strictStyling is set to true then
	  selectors are scoped by adding an attribute selector suffix to each
	  simple selector that contains the host element tag name. Each element
	  in the element's ShadowDOM template is also given the scope attribute.
	  Thus, these rules match only elements that have the scope attribute.
	  For example, given a scope name of x-foo, a rule like this:
	
	    div {
	      font-weight: bold;
	    }
	
	  becomes:
	
	    div[x-foo] {
	      font-weight: bold;
	    }
	
	  Note that elements that are dynamically added to a scope must have the scope
	  selector added to them manually.
	
	  * upper/lower bound encapsulation: Styles which are defined outside a
	  shadowRoot should not cross the ShadowDOM boundary and should not apply
	  inside a shadowRoot.
	
	  This styling behavior is not emulated. Some possible ways to do this that
	  were rejected due to complexity and/or performance concerns include: (1) reset
	  every possible property for every possible selector for a given scope name;
	  (2) re-implement css in javascript.
	
	  As an alternative, users should make sure to use selectors
	  specific to the scope in which they are working.
	
	  * ::distributed: This behavior is not emulated. It's often not necessary
	  to style the contents of a specific insertion point and instead, descendants
	  of the host element can be styled selectively. Users can also create an
	  extra node around an insertion point and style that node's contents
	  via descendent selectors. For example, with a shadowRoot like this:
	
	    <style>
	      ::content(div) {
	        background: red;
	      }
	    </style>
	    <content></content>
	
	  could become:
	
	    <style>
	      / *@polyfill .content-container div * /
	      ::content(div) {
	        background: red;
	      }
	    </style>
	    <div class="content-container">
	      <content></content>
	    </div>
	
	  Note the use of @polyfill in the comment above a ShadowDOM specific style
	  declaration. This is a directive to the styling shim to use the selector
	  in comments in lieu of the next selector when running under polyfill.
	*/
	var ShadowCss = (function () {
	    function ShadowCss() {
	        this.strictStyling = true;
	    }
	    /*
	    * Shim some cssText with the given selector. Returns cssText that can
	    * be included in the document via WebComponents.ShadowCSS.addCssToDocument(css).
	    *
	    * When strictStyling is true:
	    * - selector is the attribute added to all elements inside the host,
	    * - hostSelector is the attribute added to the host itself.
	    */
	    ShadowCss.prototype.shimCssText = function (cssText, selector, hostSelector) {
	        if (hostSelector === void 0) { hostSelector = ''; }
	        cssText = stripComments(cssText);
	        cssText = this._insertDirectives(cssText);
	        return this._scopeCssText(cssText, selector, hostSelector);
	    };
	    ShadowCss.prototype._insertDirectives = function (cssText) {
	        cssText = this._insertPolyfillDirectivesInCssText(cssText);
	        return this._insertPolyfillRulesInCssText(cssText);
	    };
	    /*
	     * Process styles to convert native ShadowDOM rules that will trip
	     * up the css parser; we rely on decorating the stylesheet with inert rules.
	     *
	     * For example, we convert this rule:
	     *
	     * polyfill-next-selector { content: ':host menu-item'; }
	     * ::content menu-item {
	     *
	     * to this:
	     *
	     * scopeName menu-item {
	     *
	    **/
	    ShadowCss.prototype._insertPolyfillDirectivesInCssText = function (cssText) {
	        // Difference with webcomponents.js: does not handle comments
	        return lang_1.StringWrapper.replaceAllMapped(cssText, _cssContentNextSelectorRe, function (m) { return m[1] + '{'; });
	    };
	    /*
	     * Process styles to add rules which will only apply under the polyfill
	     *
	     * For example, we convert this rule:
	     *
	     * polyfill-rule {
	     *   content: ':host menu-item';
	     * ...
	     * }
	     *
	     * to this:
	     *
	     * scopeName menu-item {...}
	     *
	    **/
	    ShadowCss.prototype._insertPolyfillRulesInCssText = function (cssText) {
	        // Difference with webcomponents.js: does not handle comments
	        return lang_1.StringWrapper.replaceAllMapped(cssText, _cssContentRuleRe, function (m) {
	            var rule = m[0];
	            rule = lang_1.StringWrapper.replace(rule, m[1], '');
	            rule = lang_1.StringWrapper.replace(rule, m[2], '');
	            return m[3] + rule;
	        });
	    };
	    /* Ensure styles are scoped. Pseudo-scoping takes a rule like:
	     *
	     *  .foo {... }
	     *
	     *  and converts this to
	     *
	     *  scopeName .foo { ... }
	    */
	    ShadowCss.prototype._scopeCssText = function (cssText, scopeSelector, hostSelector) {
	        var unscoped = this._extractUnscopedRulesFromCssText(cssText);
	        cssText = this._insertPolyfillHostInCssText(cssText);
	        cssText = this._convertColonHost(cssText);
	        cssText = this._convertColonHostContext(cssText);
	        cssText = this._convertShadowDOMSelectors(cssText);
	        if (lang_1.isPresent(scopeSelector)) {
	            cssText = this._scopeSelectors(cssText, scopeSelector, hostSelector);
	        }
	        cssText = cssText + '\n' + unscoped;
	        return cssText.trim();
	    };
	    /*
	     * Process styles to add rules which will only apply under the polyfill
	     * and do not process via CSSOM. (CSSOM is destructive to rules on rare
	     * occasions, e.g. -webkit-calc on Safari.)
	     * For example, we convert this rule:
	     *
	     * @polyfill-unscoped-rule {
	     *   content: 'menu-item';
	     * ... }
	     *
	     * to this:
	     *
	     * menu-item {...}
	     *
	    **/
	    ShadowCss.prototype._extractUnscopedRulesFromCssText = function (cssText) {
	        // Difference with webcomponents.js: does not handle comments
	        var r = '', m;
	        var matcher = lang_1.RegExpWrapper.matcher(_cssContentUnscopedRuleRe, cssText);
	        while (lang_1.isPresent(m = lang_1.RegExpMatcherWrapper.next(matcher))) {
	            var rule = m[0];
	            rule = lang_1.StringWrapper.replace(rule, m[2], '');
	            rule = lang_1.StringWrapper.replace(rule, m[1], m[3]);
	            r += rule + '\n\n';
	        }
	        return r;
	    };
	    /*
	     * convert a rule like :host(.foo) > .bar { }
	     *
	     * to
	     *
	     * scopeName.foo > .bar
	    */
	    ShadowCss.prototype._convertColonHost = function (cssText) {
	        return this._convertColonRule(cssText, _cssColonHostRe, this._colonHostPartReplacer);
	    };
	    /*
	     * convert a rule like :host-context(.foo) > .bar { }
	     *
	     * to
	     *
	     * scopeName.foo > .bar, .foo scopeName > .bar { }
	     *
	     * and
	     *
	     * :host-context(.foo:host) .bar { ... }
	     *
	     * to
	     *
	     * scopeName.foo .bar { ... }
	    */
	    ShadowCss.prototype._convertColonHostContext = function (cssText) {
	        return this._convertColonRule(cssText, _cssColonHostContextRe, this._colonHostContextPartReplacer);
	    };
	    ShadowCss.prototype._convertColonRule = function (cssText, regExp, partReplacer) {
	        // p1 = :host, p2 = contents of (), p3 rest of rule
	        return lang_1.StringWrapper.replaceAllMapped(cssText, regExp, function (m) {
	            if (lang_1.isPresent(m[2])) {
	                var parts = m[2].split(','), r = [];
	                for (var i = 0; i < parts.length; i++) {
	                    var p = parts[i];
	                    if (lang_1.isBlank(p))
	                        break;
	                    p = p.trim();
	                    r.push(partReplacer(_polyfillHostNoCombinator, p, m[3]));
	                }
	                return r.join(',');
	            }
	            else {
	                return _polyfillHostNoCombinator + m[3];
	            }
	        });
	    };
	    ShadowCss.prototype._colonHostContextPartReplacer = function (host, part, suffix) {
	        if (lang_1.StringWrapper.contains(part, _polyfillHost)) {
	            return this._colonHostPartReplacer(host, part, suffix);
	        }
	        else {
	            return host + part + suffix + ', ' + part + ' ' + host + suffix;
	        }
	    };
	    ShadowCss.prototype._colonHostPartReplacer = function (host, part, suffix) {
	        return host + lang_1.StringWrapper.replace(part, _polyfillHost, '') + suffix;
	    };
	    /*
	     * Convert combinators like ::shadow and pseudo-elements like ::content
	     * by replacing with space.
	    */
	    ShadowCss.prototype._convertShadowDOMSelectors = function (cssText) {
	        for (var i = 0; i < _shadowDOMSelectorsRe.length; i++) {
	            cssText = lang_1.StringWrapper.replaceAll(cssText, _shadowDOMSelectorsRe[i], ' ');
	        }
	        return cssText;
	    };
	    // change a selector like 'div' to 'name div'
	    ShadowCss.prototype._scopeSelectors = function (cssText, scopeSelector, hostSelector) {
	        var _this = this;
	        return processRules(cssText, function (rule) {
	            var selector = rule.selector;
	            var content = rule.content;
	            if (rule.selector[0] != '@' || rule.selector.startsWith('@page')) {
	                selector =
	                    _this._scopeSelector(rule.selector, scopeSelector, hostSelector, _this.strictStyling);
	            }
	            else if (rule.selector.startsWith('@media')) {
	                content = _this._scopeSelectors(rule.content, scopeSelector, hostSelector);
	            }
	            return new CssRule(selector, content);
	        });
	    };
	    ShadowCss.prototype._scopeSelector = function (selector, scopeSelector, hostSelector, strict) {
	        var r = [], parts = selector.split(',');
	        for (var i = 0; i < parts.length; i++) {
	            var p = parts[i].trim();
	            var deepParts = lang_1.StringWrapper.split(p, _shadowDeepSelectors);
	            var shallowPart = deepParts[0];
	            if (this._selectorNeedsScoping(shallowPart, scopeSelector)) {
	                deepParts[0] = strict && !lang_1.StringWrapper.contains(shallowPart, _polyfillHostNoCombinator) ?
	                    this._applyStrictSelectorScope(shallowPart, scopeSelector) :
	                    this._applySelectorScope(shallowPart, scopeSelector, hostSelector);
	            }
	            // replace /deep/ with a space for child selectors
	            r.push(deepParts.join(' '));
	        }
	        return r.join(', ');
	    };
	    ShadowCss.prototype._selectorNeedsScoping = function (selector, scopeSelector) {
	        var re = this._makeScopeMatcher(scopeSelector);
	        return !lang_1.isPresent(lang_1.RegExpWrapper.firstMatch(re, selector));
	    };
	    ShadowCss.prototype._makeScopeMatcher = function (scopeSelector) {
	        var lre = /\[/g;
	        var rre = /\]/g;
	        scopeSelector = lang_1.StringWrapper.replaceAll(scopeSelector, lre, '\\[');
	        scopeSelector = lang_1.StringWrapper.replaceAll(scopeSelector, rre, '\\]');
	        return lang_1.RegExpWrapper.create('^(' + scopeSelector + ')' + _selectorReSuffix, 'm');
	    };
	    ShadowCss.prototype._applySelectorScope = function (selector, scopeSelector, hostSelector) {
	        // Difference from webcomponentsjs: scopeSelector could not be an array
	        return this._applySimpleSelectorScope(selector, scopeSelector, hostSelector);
	    };
	    // scope via name and [is=name]
	    ShadowCss.prototype._applySimpleSelectorScope = function (selector, scopeSelector, hostSelector) {
	        if (lang_1.isPresent(lang_1.RegExpWrapper.firstMatch(_polyfillHostRe, selector))) {
	            var replaceBy = this.strictStyling ? "[" + hostSelector + "]" : scopeSelector;
	            selector = lang_1.StringWrapper.replace(selector, _polyfillHostNoCombinator, replaceBy);
	            return lang_1.StringWrapper.replaceAll(selector, _polyfillHostRe, replaceBy + ' ');
	        }
	        else {
	            return scopeSelector + ' ' + selector;
	        }
	    };
	    // return a selector with [name] suffix on each simple selector
	    // e.g. .foo.bar > .zot becomes .foo[name].bar[name] > .zot[name]  /** @internal */
	    ShadowCss.prototype._applyStrictSelectorScope = function (selector, scopeSelector) {
	        var isRe = /\[is=([^\]]*)\]/g;
	        scopeSelector = lang_1.StringWrapper.replaceAllMapped(scopeSelector, isRe, function (m) { return m[1]; });
	        var splits = [' ', '>', '+', '~'], scoped = selector, attrName = '[' + scopeSelector + ']';
	        for (var i = 0; i < splits.length; i++) {
	            var sep = splits[i];
	            var parts = scoped.split(sep);
	            scoped = parts.map(function (p) {
	                // remove :host since it should be unnecessary
	                var t = lang_1.StringWrapper.replaceAll(p.trim(), _polyfillHostRe, '');
	                if (t.length > 0 && !collection_1.ListWrapper.contains(splits, t) &&
	                    !lang_1.StringWrapper.contains(t, attrName)) {
	                    var re = /([^:]*)(:*)(.*)/g;
	                    var m = lang_1.RegExpWrapper.firstMatch(re, t);
	                    if (lang_1.isPresent(m)) {
	                        p = m[1] + attrName + m[2] + m[3];
	                    }
	                }
	                return p;
	            })
	                .join(sep);
	        }
	        return scoped;
	    };
	    ShadowCss.prototype._insertPolyfillHostInCssText = function (selector) {
	        selector = lang_1.StringWrapper.replaceAll(selector, _colonHostContextRe, _polyfillHostContext);
	        selector = lang_1.StringWrapper.replaceAll(selector, _colonHostRe, _polyfillHost);
	        return selector;
	    };
	    return ShadowCss;
	}());
	exports.ShadowCss = ShadowCss;
	var _cssContentNextSelectorRe = /polyfill-next-selector[^}]*content:[\s]*?['"](.*?)['"][;\s]*}([^{]*?){/gim;
	var _cssContentRuleRe = /(polyfill-rule)[^}]*(content:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim;
	var _cssContentUnscopedRuleRe = /(polyfill-unscoped-rule)[^}]*(content:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim;
	var _polyfillHost = '-shadowcsshost';
	// note: :host-context pre-processed to -shadowcsshostcontext.
	var _polyfillHostContext = '-shadowcsscontext';
	var _parenSuffix = ')(?:\\((' +
	    '(?:\\([^)(]*\\)|[^)(]*)+?' +
	    ')\\))?([^,{]*)';
	var _cssColonHostRe = lang_1.RegExpWrapper.create('(' + _polyfillHost + _parenSuffix, 'im');
	var _cssColonHostContextRe = lang_1.RegExpWrapper.create('(' + _polyfillHostContext + _parenSuffix, 'im');
	var _polyfillHostNoCombinator = _polyfillHost + '-no-combinator';
	var _shadowDOMSelectorsRe = [
	    /::shadow/g,
	    /::content/g,
	    // Deprecated selectors
	    // TODO(vicb): see https://github.com/angular/clang-format/issues/16
	    // clang-format off
	    /\/shadow-deep\//g,
	    /\/shadow\//g,
	];
	var _shadowDeepSelectors = /(?:>>>)|(?:\/deep\/)/g;
	var _selectorReSuffix = '([>\\s~+\[.,{:][\\s\\S]*)?$';
	var _polyfillHostRe = lang_1.RegExpWrapper.create(_polyfillHost, 'im');
	var _colonHostRe = /:host/gim;
	var _colonHostContextRe = /:host-context/gim;
	var _commentRe = /\/\*[\s\S]*?\*\//g;
	function stripComments(input) {
	    return lang_1.StringWrapper.replaceAllMapped(input, _commentRe, function (_) { return ''; });
	}
	var _ruleRe = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;
	var _curlyRe = /([{}])/g;
	var OPEN_CURLY = '{';
	var CLOSE_CURLY = '}';
	var BLOCK_PLACEHOLDER = '%BLOCK%';
	var CssRule = (function () {
	    function CssRule(selector, content) {
	        this.selector = selector;
	        this.content = content;
	    }
	    return CssRule;
	}());
	exports.CssRule = CssRule;
	function processRules(input, ruleCallback) {
	    var inputWithEscapedBlocks = escapeBlocks(input);
	    var nextBlockIndex = 0;
	    return lang_1.StringWrapper.replaceAllMapped(inputWithEscapedBlocks.escapedString, _ruleRe, function (m) {
	        var selector = m[2];
	        var content = '';
	        var suffix = m[4];
	        var contentPrefix = '';
	        if (lang_1.isPresent(m[4]) && m[4].startsWith('{' + BLOCK_PLACEHOLDER)) {
	            content = inputWithEscapedBlocks.blocks[nextBlockIndex++];
	            suffix = m[4].substring(BLOCK_PLACEHOLDER.length + 1);
	            contentPrefix = '{';
	        }
	        var rule = ruleCallback(new CssRule(selector, content));
	        return "" + m[1] + rule.selector + m[3] + contentPrefix + rule.content + suffix;
	    });
	}
	exports.processRules = processRules;
	var StringWithEscapedBlocks = (function () {
	    function StringWithEscapedBlocks(escapedString, blocks) {
	        this.escapedString = escapedString;
	        this.blocks = blocks;
	    }
	    return StringWithEscapedBlocks;
	}());
	function escapeBlocks(input) {
	    var inputParts = lang_1.StringWrapper.split(input, _curlyRe);
	    var resultParts = [];
	    var escapedBlocks = [];
	    var bracketCount = 0;
	    var currentBlockParts = [];
	    for (var partIndex = 0; partIndex < inputParts.length; partIndex++) {
	        var part = inputParts[partIndex];
	        if (part == CLOSE_CURLY) {
	            bracketCount--;
	        }
	        if (bracketCount > 0) {
	            currentBlockParts.push(part);
	        }
	        else {
	            if (currentBlockParts.length > 0) {
	                escapedBlocks.push(currentBlockParts.join(''));
	                resultParts.push(BLOCK_PLACEHOLDER);
	                currentBlockParts = [];
	            }
	            resultParts.push(part);
	        }
	        if (part == OPEN_CURLY) {
	            bracketCount++;
	        }
	    }
	    if (currentBlockParts.length > 0) {
	        escapedBlocks.push(currentBlockParts.join(''));
	        resultParts.push(BLOCK_PLACEHOLDER);
	    }
	    return new StringWithEscapedBlocks(resultParts.join(''), escapedBlocks);
	}


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(1);
	/**
	 * Marks a function or method as an Angular 2 entrypoint. Only necessary in Dart code.
	 *
	 * The optional `name` parameter will be reflected in logs when the entry point is processed.
	 *
	 * See [the wiki][] for detailed documentation.
	 * [the wiki]: https://github.com/angular/angular/wiki/Angular-2-Dart-Transformer#entry_points
	 *
	 * ## Example
	 *
	 * ```
	 * @AngularEntrypoint("name-for-debug")
	 * void main() {
	 *   bootstrap(MyComponent);
	 * }
	 * ```
	 */
	var AngularEntrypoint = (function () {
	    function AngularEntrypoint(name) {
	        this.name = name;
	    }
	    AngularEntrypoint = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [String])
	    ], AngularEntrypoint);
	    return AngularEntrypoint;
	}());
	exports.AngularEntrypoint = AngularEntrypoint;


/***/ },
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var debug_node_1 = __webpack_require__(93);
	var DebugDomRootRenderer = (function () {
	    function DebugDomRootRenderer(_delegate) {
	        this._delegate = _delegate;
	    }
	    DebugDomRootRenderer.prototype.renderComponent = function (componentProto) {
	        return new DebugDomRenderer(this, this._delegate.renderComponent(componentProto));
	    };
	    return DebugDomRootRenderer;
	}());
	exports.DebugDomRootRenderer = DebugDomRootRenderer;
	var DebugDomRenderer = (function () {
	    function DebugDomRenderer(_rootRenderer, _delegate) {
	        this._rootRenderer = _rootRenderer;
	        this._delegate = _delegate;
	    }
	    DebugDomRenderer.prototype.renderComponent = function (componentType) {
	        return this._rootRenderer.renderComponent(componentType);
	    };
	    DebugDomRenderer.prototype.selectRootElement = function (selector) {
	        var nativeEl = this._delegate.selectRootElement(selector);
	        var debugEl = new debug_node_1.DebugElement(nativeEl, null);
	        debug_node_1.indexDebugNode(debugEl);
	        return nativeEl;
	    };
	    DebugDomRenderer.prototype.createElement = function (parentElement, name) {
	        var nativeEl = this._delegate.createElement(parentElement, name);
	        var debugEl = new debug_node_1.DebugElement(nativeEl, debug_node_1.getDebugNode(parentElement));
	        debugEl.name = name;
	        debug_node_1.indexDebugNode(debugEl);
	        return nativeEl;
	    };
	    DebugDomRenderer.prototype.createViewRoot = function (hostElement) { return this._delegate.createViewRoot(hostElement); };
	    DebugDomRenderer.prototype.createTemplateAnchor = function (parentElement) {
	        var comment = this._delegate.createTemplateAnchor(parentElement);
	        var debugEl = new debug_node_1.DebugNode(comment, debug_node_1.getDebugNode(parentElement));
	        debug_node_1.indexDebugNode(debugEl);
	        return comment;
	    };
	    DebugDomRenderer.prototype.createText = function (parentElement, value) {
	        var text = this._delegate.createText(parentElement, value);
	        var debugEl = new debug_node_1.DebugNode(text, debug_node_1.getDebugNode(parentElement));
	        debug_node_1.indexDebugNode(debugEl);
	        return text;
	    };
	    DebugDomRenderer.prototype.projectNodes = function (parentElement, nodes) {
	        var debugParent = debug_node_1.getDebugNode(parentElement);
	        if (lang_1.isPresent(debugParent) && debugParent instanceof debug_node_1.DebugElement) {
	            var debugElement_1 = debugParent;
	            nodes.forEach(function (node) { debugElement_1.addChild(debug_node_1.getDebugNode(node)); });
	        }
	        this._delegate.projectNodes(parentElement, nodes);
	    };
	    DebugDomRenderer.prototype.attachViewAfter = function (node, viewRootNodes) {
	        var debugNode = debug_node_1.getDebugNode(node);
	        if (lang_1.isPresent(debugNode)) {
	            var debugParent = debugNode.parent;
	            if (viewRootNodes.length > 0 && lang_1.isPresent(debugParent)) {
	                var debugViewRootNodes = [];
	                viewRootNodes.forEach(function (rootNode) { return debugViewRootNodes.push(debug_node_1.getDebugNode(rootNode)); });
	                debugParent.insertChildrenAfter(debugNode, debugViewRootNodes);
	            }
	        }
	        this._delegate.attachViewAfter(node, viewRootNodes);
	    };
	    DebugDomRenderer.prototype.detachView = function (viewRootNodes) {
	        viewRootNodes.forEach(function (node) {
	            var debugNode = debug_node_1.getDebugNode(node);
	            if (lang_1.isPresent(debugNode) && lang_1.isPresent(debugNode.parent)) {
	                debugNode.parent.removeChild(debugNode);
	            }
	        });
	        this._delegate.detachView(viewRootNodes);
	    };
	    DebugDomRenderer.prototype.destroyView = function (hostElement, viewAllNodes) {
	        viewAllNodes.forEach(function (node) { debug_node_1.removeDebugNodeFromIndex(debug_node_1.getDebugNode(node)); });
	        this._delegate.destroyView(hostElement, viewAllNodes);
	    };
	    DebugDomRenderer.prototype.listen = function (renderElement, name, callback) {
	        var debugEl = debug_node_1.getDebugNode(renderElement);
	        if (lang_1.isPresent(debugEl)) {
	            debugEl.listeners.push(new debug_node_1.EventListener(name, callback));
	        }
	        return this._delegate.listen(renderElement, name, callback);
	    };
	    DebugDomRenderer.prototype.listenGlobal = function (target, name, callback) {
	        return this._delegate.listenGlobal(target, name, callback);
	    };
	    DebugDomRenderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) {
	        var debugEl = debug_node_1.getDebugNode(renderElement);
	        if (lang_1.isPresent(debugEl) && debugEl instanceof debug_node_1.DebugElement) {
	            debugEl.properties.set(propertyName, propertyValue);
	        }
	        this._delegate.setElementProperty(renderElement, propertyName, propertyValue);
	    };
	    DebugDomRenderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) {
	        var debugEl = debug_node_1.getDebugNode(renderElement);
	        if (lang_1.isPresent(debugEl) && debugEl instanceof debug_node_1.DebugElement) {
	            debugEl.attributes.set(attributeName, attributeValue);
	        }
	        this._delegate.setElementAttribute(renderElement, attributeName, attributeValue);
	    };
	    /**
	     * Used only in debug mode to serialize property changes to comment nodes,
	     * such as <template> placeholders.
	     */
	    DebugDomRenderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) {
	        this._delegate.setBindingDebugInfo(renderElement, propertyName, propertyValue);
	    };
	    /**
	     * Used only in development mode to set information needed by the DebugNode for this element.
	     */
	    DebugDomRenderer.prototype.setElementDebugInfo = function (renderElement, info) {
	        var debugEl = debug_node_1.getDebugNode(renderElement);
	        debugEl.setDebugInfo(info);
	        this._delegate.setElementDebugInfo(renderElement, info);
	    };
	    DebugDomRenderer.prototype.setElementClass = function (renderElement, className, isAdd) {
	        this._delegate.setElementClass(renderElement, className, isAdd);
	    };
	    DebugDomRenderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) {
	        this._delegate.setElementStyle(renderElement, styleName, styleValue);
	    };
	    DebugDomRenderer.prototype.invokeElementMethod = function (renderElement, methodName, args) {
	        this._delegate.invokeElementMethod(renderElement, methodName, args);
	    };
	    DebugDomRenderer.prototype.setText = function (renderNode, text) { this._delegate.setText(renderNode, text); };
	    return DebugDomRenderer;
	}());
	exports.DebugDomRenderer = DebugDomRenderer;


/***/ },
/* 259 */,
/* 260 */,
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var interfaces_1 = __webpack_require__(55);
	function hasLifecycleHook(lcInterface, token) {
	    if (!(token instanceof lang_1.Type))
	        return false;
	    var proto = token.prototype;
	    switch (lcInterface) {
	        case interfaces_1.LifecycleHooks.AfterContentInit:
	            return !!proto.ngAfterContentInit;
	        case interfaces_1.LifecycleHooks.AfterContentChecked:
	            return !!proto.ngAfterContentChecked;
	        case interfaces_1.LifecycleHooks.AfterViewInit:
	            return !!proto.ngAfterViewInit;
	        case interfaces_1.LifecycleHooks.AfterViewChecked:
	            return !!proto.ngAfterViewChecked;
	        case interfaces_1.LifecycleHooks.OnChanges:
	            return !!proto.ngOnChanges;
	        case interfaces_1.LifecycleHooks.DoCheck:
	            return !!proto.ngDoCheck;
	        case interfaces_1.LifecycleHooks.OnDestroy:
	            return !!proto.ngOnDestroy;
	        case interfaces_1.LifecycleHooks.OnInit:
	            return !!proto.ngOnInit;
	        default:
	            return false;
	    }
	}
	exports.hasLifecycleHook = hasLifecycleHook;


/***/ },
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */
/***/ function(module, exports) {

	'use strict';"use strict";
	/**
	 * This is here because DART requires it. It is noop in JS.
	 */
	function wtfInit() { }
	exports.wtfInit = wtfInit;


/***/ },
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */
/***/ function(module, exports) {

	'use strict';"use strict";
	/**
	 * JS version of browser APIs. This library can only run in the browser.
	 */
	var win = window;
	exports.window = win;
	exports.document = window.document;
	exports.location = window.location;
	exports.gc = window['gc'] ? function () { return window['gc'](); } : function () { return null; };
	exports.performance = window['performance'] ? window['performance'] : null;
	exports.Event = window['Event'];
	exports.MouseEvent = window['MouseEvent'];
	exports.KeyboardEvent = window['KeyboardEvent'];
	exports.EventTarget = window['EventTarget'];
	exports.History = window['History'];
	exports.Location = window['Location'];
	exports.EventListener = window['EventListener'];


/***/ },
/* 271 */,
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(2);
	var lang_1 = __webpack_require__(1);
	var dom_adapter_1 = __webpack_require__(7);
	var xhr_impl_1 = __webpack_require__(175);
	/**
	 * Provides DOM operations in any browser environment.
	 */
	var GenericBrowserDomAdapter = (function (_super) {
	    __extends(GenericBrowserDomAdapter, _super);
	    function GenericBrowserDomAdapter() {
	        var _this = this;
	        _super.call(this);
	        this._animationPrefix = null;
	        this._transitionEnd = null;
	        try {
	            var element = this.createElement('div', this.defaultDoc());
	            if (lang_1.isPresent(this.getStyle(element, 'animationName'))) {
	                this._animationPrefix = '';
	            }
	            else {
	                var domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
	                for (var i = 0; i < domPrefixes.length; i++) {
	                    if (lang_1.isPresent(this.getStyle(element, domPrefixes[i] + 'AnimationName'))) {
	                        this._animationPrefix = '-' + domPrefixes[i].toLowerCase() + '-';
	                        break;
	                    }
	                }
	            }
	            var transEndEventNames = {
	                WebkitTransition: 'webkitTransitionEnd',
	                MozTransition: 'transitionend',
	                OTransition: 'oTransitionEnd otransitionend',
	                transition: 'transitionend'
	            };
	            collection_1.StringMapWrapper.forEach(transEndEventNames, function (value, key) {
	                if (lang_1.isPresent(_this.getStyle(element, key))) {
	                    _this._transitionEnd = value;
	                }
	            });
	        }
	        catch (e) {
	            this._animationPrefix = null;
	            this._transitionEnd = null;
	        }
	    }
	    GenericBrowserDomAdapter.prototype.getXHR = function () { return xhr_impl_1.XHRImpl; };
	    GenericBrowserDomAdapter.prototype.getDistributedNodes = function (el) { return el.getDistributedNodes(); };
	    GenericBrowserDomAdapter.prototype.resolveAndSetHref = function (el, baseUrl, href) {
	        el.href = href == null ? baseUrl : baseUrl + '/../' + href;
	    };
	    GenericBrowserDomAdapter.prototype.supportsDOMEvents = function () { return true; };
	    GenericBrowserDomAdapter.prototype.supportsNativeShadowDOM = function () {
	        return lang_1.isFunction(this.defaultDoc().body.createShadowRoot);
	    };
	    GenericBrowserDomAdapter.prototype.getAnimationPrefix = function () {
	        return lang_1.isPresent(this._animationPrefix) ? this._animationPrefix : "";
	    };
	    GenericBrowserDomAdapter.prototype.getTransitionEnd = function () { return lang_1.isPresent(this._transitionEnd) ? this._transitionEnd : ""; };
	    GenericBrowserDomAdapter.prototype.supportsAnimation = function () {
	        return lang_1.isPresent(this._animationPrefix) && lang_1.isPresent(this._transitionEnd);
	    };
	    return GenericBrowserDomAdapter;
	}(dom_adapter_1.DomAdapter));
	exports.GenericBrowserDomAdapter = GenericBrowserDomAdapter;


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var collection_1 = __webpack_require__(2);
	var lang_1 = __webpack_require__(1);
	var dom_adapter_1 = __webpack_require__(7);
	var core_1 = __webpack_require__(3);
	var PublicTestability = (function () {
	    function PublicTestability(testability) {
	        this._testability = testability;
	    }
	    PublicTestability.prototype.isStable = function () { return this._testability.isStable(); };
	    PublicTestability.prototype.whenStable = function (callback) { this._testability.whenStable(callback); };
	    PublicTestability.prototype.findBindings = function (using, provider, exactMatch) {
	        return this.findProviders(using, provider, exactMatch);
	    };
	    PublicTestability.prototype.findProviders = function (using, provider, exactMatch) {
	        return this._testability.findBindings(using, provider, exactMatch);
	    };
	    return PublicTestability;
	}());
	var BrowserGetTestability = (function () {
	    function BrowserGetTestability() {
	    }
	    BrowserGetTestability.init = function () { core_1.setTestabilityGetter(new BrowserGetTestability()); };
	    BrowserGetTestability.prototype.addToWindow = function (registry) {
	        lang_1.global.getAngularTestability = function (elem, findInAncestors) {
	            if (findInAncestors === void 0) { findInAncestors = true; }
	            var testability = registry.findTestabilityInTree(elem, findInAncestors);
	            if (testability == null) {
	                throw new Error('Could not find testability for element.');
	            }
	            return new PublicTestability(testability);
	        };
	        lang_1.global.getAllAngularTestabilities = function () {
	            var testabilities = registry.getAllTestabilities();
	            return testabilities.map(function (testability) { return new PublicTestability(testability); });
	        };
	        lang_1.global.getAllAngularRootElements = function () { return registry.getAllRootElements(); };
	        var whenAllStable = function (callback) {
	            var testabilities = lang_1.global.getAllAngularTestabilities();
	            var count = testabilities.length;
	            var didWork = false;
	            var decrement = function (didWork_) {
	                didWork = didWork || didWork_;
	                count--;
	                if (count == 0) {
	                    callback(didWork);
	                }
	            };
	            testabilities.forEach(function (testability) { testability.whenStable(decrement); });
	        };
	        if (!lang_1.global.frameworkStabilizers) {
	            lang_1.global.frameworkStabilizers = collection_1.ListWrapper.createGrowableSize(0);
	        }
	        lang_1.global.frameworkStabilizers.push(whenAllStable);
	    };
	    BrowserGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
	        if (elem == null) {
	            return null;
	        }
	        var t = registry.getTestability(elem);
	        if (lang_1.isPresent(t)) {
	            return t;
	        }
	        else if (!findInAncestors) {
	            return null;
	        }
	        if (dom_adapter_1.DOM.isShadowRoot(elem)) {
	            return this.findTestabilityInTree(registry, dom_adapter_1.DOM.getHost(elem), true);
	        }
	        return this.findTestabilityInTree(registry, dom_adapter_1.DOM.parentElement(elem), true);
	    };
	    return BrowserGetTestability;
	}());
	exports.BrowserGetTestability = BrowserGetTestability;


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var dom_adapter_1 = __webpack_require__(7);
	/**
	 * A service that can be used to get and set the title of a current HTML document.
	 *
	 * Since an Angular 2 application can't be bootstrapped on the entire HTML document (`<html>` tag)
	 * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
	 * (representing the `<title>` tag). Instead, this service can be used to set and get the current
	 * title value.
	 */
	var Title = (function () {
	    function Title() {
	    }
	    /**
	     * Get the title of the current HTML document.
	     * @returns {string}
	     */
	    Title.prototype.getTitle = function () { return dom_adapter_1.DOM.getTitle(); };
	    /**
	     * Set the title of the current HTML document.
	     * @param newTitle
	     */
	    Title.prototype.setTitle = function (newTitle) { dom_adapter_1.DOM.setTitle(newTitle); };
	    return Title;
	}());
	exports.Title = Title;


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var application_ref_1 = __webpack_require__(146);
	var lang_1 = __webpack_require__(1);
	var browser_1 = __webpack_require__(270);
	var dom_adapter_1 = __webpack_require__(7);
	/**
	 * Entry point for all Angular debug tools. This object corresponds to the `ng`
	 * global variable accessible in the dev console.
	 */
	var AngularTools = (function () {
	    function AngularTools(ref) {
	        this.profiler = new AngularProfiler(ref);
	    }
	    return AngularTools;
	}());
	exports.AngularTools = AngularTools;
	/**
	 * Entry point for all Angular profiling-related debug tools. This object
	 * corresponds to the `ng.profiler` in the dev console.
	 */
	var AngularProfiler = (function () {
	    function AngularProfiler(ref) {
	        this.appRef = ref.injector.get(application_ref_1.ApplicationRef);
	    }
	    /**
	     * Exercises change detection in a loop and then prints the average amount of
	     * time in milliseconds how long a single round of change detection takes for
	     * the current state of the UI. It runs a minimum of 5 rounds for a minimum
	     * of 500 milliseconds.
	     *
	     * Optionally, a user may pass a `config` parameter containing a map of
	     * options. Supported options are:
	     *
	     * `record` (boolean) - causes the profiler to record a CPU profile while
	     * it exercises the change detector. Example:
	     *
	     * ```
	     * ng.profiler.timeChangeDetection({record: true})
	     * ```
	     */
	    AngularProfiler.prototype.timeChangeDetection = function (config) {
	        var record = lang_1.isPresent(config) && config['record'];
	        var profileName = 'Change Detection';
	        // Profiler is not available in Android browsers, nor in IE 9 without dev tools opened
	        var isProfilerAvailable = lang_1.isPresent(browser_1.window.console.profile);
	        if (record && isProfilerAvailable) {
	            browser_1.window.console.profile(profileName);
	        }
	        var start = dom_adapter_1.DOM.performanceNow();
	        var numTicks = 0;
	        while (numTicks < 5 || (dom_adapter_1.DOM.performanceNow() - start) < 500) {
	            this.appRef.tick();
	            numTicks++;
	        }
	        var end = dom_adapter_1.DOM.performanceNow();
	        if (record && isProfilerAvailable) {
	            // need to cast to <any> because type checker thinks there's no argument
	            // while in fact there is:
	            //
	            // https://developer.mozilla.org/en-US/docs/Web/API/Console/profileEnd
	            browser_1.window.console.profileEnd(profileName);
	        }
	        var msPerTick = (end - start) / numTicks;
	        browser_1.window.console.log("ran " + numTicks + " change detection cycles");
	        browser_1.window.console.log(lang_1.NumberWrapper.toFixed(msPerTick, 2) + " ms per check");
	    };
	    return AngularProfiler;
	}());
	exports.AngularProfiler = AngularProfiler;


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var common_tools_1 = __webpack_require__(275);
	var context = lang_1.global;
	/**
	 * Enabled Angular 2 debug tools that are accessible via your browser's
	 * developer console.
	 *
	 * Usage:
	 *
	 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
	 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
	 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
	 *    then hit Enter.
	 */
	function enableDebugTools(ref) {
	    context.ng = new common_tools_1.AngularTools(ref);
	}
	exports.enableDebugTools = enableDebugTools;
	/**
	 * Disables Angular 2 tools.
	 */
	function disableDebugTools() {
	    delete context.ng;
	}
	exports.disableDebugTools = disableDebugTools;


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var xhr_1 = __webpack_require__(23);
	var exceptions_1 = __webpack_require__(4);
	var lang_1 = __webpack_require__(1);
	var promise_1 = __webpack_require__(27);
	/**
	 * An implementation of XHR that uses a template cache to avoid doing an actual
	 * XHR.
	 *
	 * The template cache needs to be built and loaded into window.$templateCache
	 * via a separate mechanism.
	 */
	var CachedXHR = (function (_super) {
	    __extends(CachedXHR, _super);
	    function CachedXHR() {
	        _super.call(this);
	        this._cache = lang_1.global.$templateCache;
	        if (this._cache == null) {
	            throw new exceptions_1.BaseException('CachedXHR: Template cache was not found in $templateCache.');
	        }
	    }
	    CachedXHR.prototype.get = function (url) {
	        if (this._cache.hasOwnProperty(url)) {
	            return promise_1.PromiseWrapper.resolve(this._cache[url]);
	        }
	        else {
	            return promise_1.PromiseWrapper.reject('CachedXHR: Did not find cached template for ' + url, null);
	        }
	    };
	    return CachedXHR;
	}(xhr_1.XHR));
	exports.CachedXHR = CachedXHR;


/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var dom_adapter_1 = __webpack_require__(7);
	/**
	 * Predicates for use with {@link DebugElement}'s query functions.
	 */
	var By = (function () {
	    function By() {
	    }
	    /**
	     * Match all elements.
	     *
	     * ## Example
	     *
	     * {@example platform/dom/debug/ts/by/by.ts region='by_all'}
	     */
	    By.all = function () { return function (debugElement) { return true; }; };
	    /**
	     * Match elements by the given CSS selector.
	     *
	     * ## Example
	     *
	     * {@example platform/dom/debug/ts/by/by.ts region='by_css'}
	     */
	    By.css = function (selector) {
	        return function (debugElement) {
	            return lang_1.isPresent(debugElement.nativeElement) ?
	                dom_adapter_1.DOM.elementMatches(debugElement.nativeElement, selector) :
	                false;
	        };
	    };
	    /**
	     * Match elements that have the given directive present.
	     *
	     * ## Example
	     *
	     * {@example platform/dom/debug/ts/by/by.ts region='by_directive'}
	     */
	    By.directive = function (type) {
	        return function (debugElement) { return debugElement.providerTokens.indexOf(type) !== -1; };
	    };
	    return By;
	}());
	exports.By = By;


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var di_1 = __webpack_require__(5);
	var dom_adapter_1 = __webpack_require__(7);
	var debug_node_1 = __webpack_require__(93);
	var dom_renderer_1 = __webpack_require__(106);
	var core_1 = __webpack_require__(3);
	var debug_renderer_1 = __webpack_require__(258);
	var CORE_TOKENS = lang_1.CONST_EXPR({ 'ApplicationRef': core_1.ApplicationRef, 'NgZone': core_1.NgZone });
	var INSPECT_GLOBAL_NAME = 'ng.probe';
	var CORE_TOKENS_GLOBAL_NAME = 'ng.coreTokens';
	/**
	 * Returns a {@link DebugElement} for the given native DOM element, or
	 * null if the given native element does not have an Angular view associated
	 * with it.
	 */
	function inspectNativeElement(element) {
	    return debug_node_1.getDebugNode(element);
	}
	exports.inspectNativeElement = inspectNativeElement;
	function _createConditionalRootRenderer(rootRenderer) {
	    if (lang_1.assertionsEnabled()) {
	        return _createRootRenderer(rootRenderer);
	    }
	    return rootRenderer;
	}
	function _createRootRenderer(rootRenderer) {
	    dom_adapter_1.DOM.setGlobalVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
	    dom_adapter_1.DOM.setGlobalVar(CORE_TOKENS_GLOBAL_NAME, CORE_TOKENS);
	    return new debug_renderer_1.DebugDomRootRenderer(rootRenderer);
	}
	/**
	 * Providers which support debugging Angular applications (e.g. via `ng.probe`).
	 */
	exports.ELEMENT_PROBE_PROVIDERS = lang_1.CONST_EXPR([
	    new di_1.Provider(core_1.RootRenderer, { useFactory: _createConditionalRootRenderer, deps: [dom_renderer_1.DomRootRenderer] })
	]);
	exports.ELEMENT_PROBE_PROVIDERS_PROD_MODE = lang_1.CONST_EXPR([new di_1.Provider(core_1.RootRenderer, { useFactory: _createRootRenderer, deps: [dom_renderer_1.DomRootRenderer] })]);


/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var event_manager_1 = __webpack_require__(28);
	var collection_1 = __webpack_require__(2);
	var _eventNames = {
	    // pan
	    'pan': true,
	    'panstart': true,
	    'panmove': true,
	    'panend': true,
	    'pancancel': true,
	    'panleft': true,
	    'panright': true,
	    'panup': true,
	    'pandown': true,
	    // pinch
	    'pinch': true,
	    'pinchstart': true,
	    'pinchmove': true,
	    'pinchend': true,
	    'pinchcancel': true,
	    'pinchin': true,
	    'pinchout': true,
	    // press
	    'press': true,
	    'pressup': true,
	    // rotate
	    'rotate': true,
	    'rotatestart': true,
	    'rotatemove': true,
	    'rotateend': true,
	    'rotatecancel': true,
	    // swipe
	    'swipe': true,
	    'swipeleft': true,
	    'swiperight': true,
	    'swipeup': true,
	    'swipedown': true,
	    // tap
	    'tap': true,
	};
	var HammerGesturesPluginCommon = (function (_super) {
	    __extends(HammerGesturesPluginCommon, _super);
	    function HammerGesturesPluginCommon() {
	        _super.call(this);
	    }
	    HammerGesturesPluginCommon.prototype.supports = function (eventName) {
	        eventName = eventName.toLowerCase();
	        return collection_1.StringMapWrapper.contains(_eventNames, eventName);
	    };
	    return HammerGesturesPluginCommon;
	}(event_manager_1.EventManagerPlugin));
	exports.HammerGesturesPluginCommon = HammerGesturesPluginCommon;


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var dom_adapter_1 = __webpack_require__(7);
	var lang_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(2);
	var event_manager_1 = __webpack_require__(28);
	var di_1 = __webpack_require__(5);
	var modifierKeys = ['alt', 'control', 'meta', 'shift'];
	var modifierKeyGetters = {
	    'alt': function (event) { return event.altKey; },
	    'control': function (event) { return event.ctrlKey; },
	    'meta': function (event) { return event.metaKey; },
	    'shift': function (event) { return event.shiftKey; }
	};
	var KeyEventsPlugin = (function (_super) {
	    __extends(KeyEventsPlugin, _super);
	    function KeyEventsPlugin() {
	        _super.call(this);
	    }
	    KeyEventsPlugin.prototype.supports = function (eventName) {
	        return lang_1.isPresent(KeyEventsPlugin.parseEventName(eventName));
	    };
	    KeyEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
	        var parsedEvent = KeyEventsPlugin.parseEventName(eventName);
	        var outsideHandler = KeyEventsPlugin.eventCallback(element, collection_1.StringMapWrapper.get(parsedEvent, 'fullKey'), handler, this.manager.getZone());
	        return this.manager.getZone().runOutsideAngular(function () {
	            return dom_adapter_1.DOM.onAndCancel(element, collection_1.StringMapWrapper.get(parsedEvent, 'domEventName'), outsideHandler);
	        });
	    };
	    KeyEventsPlugin.parseEventName = function (eventName) {
	        var parts = eventName.toLowerCase().split('.');
	        var domEventName = parts.shift();
	        if ((parts.length === 0) ||
	            !(lang_1.StringWrapper.equals(domEventName, 'keydown') ||
	                lang_1.StringWrapper.equals(domEventName, 'keyup'))) {
	            return null;
	        }
	        var key = KeyEventsPlugin._normalizeKey(parts.pop());
	        var fullKey = '';
	        modifierKeys.forEach(function (modifierName) {
	            if (collection_1.ListWrapper.contains(parts, modifierName)) {
	                collection_1.ListWrapper.remove(parts, modifierName);
	                fullKey += modifierName + '.';
	            }
	        });
	        fullKey += key;
	        if (parts.length != 0 || key.length === 0) {
	            // returning null instead of throwing to let another plugin process the event
	            return null;
	        }
	        var result = collection_1.StringMapWrapper.create();
	        collection_1.StringMapWrapper.set(result, 'domEventName', domEventName);
	        collection_1.StringMapWrapper.set(result, 'fullKey', fullKey);
	        return result;
	    };
	    KeyEventsPlugin.getEventFullKey = function (event) {
	        var fullKey = '';
	        var key = dom_adapter_1.DOM.getEventKey(event);
	        key = key.toLowerCase();
	        if (lang_1.StringWrapper.equals(key, ' ')) {
	            key = 'space'; // for readability
	        }
	        else if (lang_1.StringWrapper.equals(key, '.')) {
	            key = 'dot'; // because '.' is used as a separator in event names
	        }
	        modifierKeys.forEach(function (modifierName) {
	            if (modifierName != key) {
	                var modifierGetter = collection_1.StringMapWrapper.get(modifierKeyGetters, modifierName);
	                if (modifierGetter(event)) {
	                    fullKey += modifierName + '.';
	                }
	            }
	        });
	        fullKey += key;
	        return fullKey;
	    };
	    KeyEventsPlugin.eventCallback = function (element, fullKey, handler, zone) {
	        return function (event) {
	            if (lang_1.StringWrapper.equals(KeyEventsPlugin.getEventFullKey(event), fullKey)) {
	                zone.run(function () { return handler(event); });
	            }
	        };
	    };
	    /** @internal */
	    KeyEventsPlugin._normalizeKey = function (keyName) {
	        // TODO: switch to a StringMap if the mapping grows too much
	        switch (keyName) {
	            case 'esc':
	                return 'escape';
	            default:
	                return keyName;
	        }
	    };
	    KeyEventsPlugin = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], KeyEventsPlugin);
	    return KeyEventsPlugin;
	}(event_manager_1.EventManagerPlugin));
	exports.KeyEventsPlugin = KeyEventsPlugin;


/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var platform_location_1 = __webpack_require__(43);
	var dom_adapter_1 = __webpack_require__(7);
	/**
	 * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
	 * This class should not be used directly by an application developer. Instead, use
	 * {@link Location}.
	 */
	var BrowserPlatformLocation = (function (_super) {
	    __extends(BrowserPlatformLocation, _super);
	    function BrowserPlatformLocation() {
	        _super.call(this);
	        this._init();
	    }
	    // This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
	    /** @internal */
	    BrowserPlatformLocation.prototype._init = function () {
	        this._location = dom_adapter_1.DOM.getLocation();
	        this._history = dom_adapter_1.DOM.getHistory();
	    };
	    Object.defineProperty(BrowserPlatformLocation.prototype, "location", {
	        /** @internal */
	        get: function () { return this._location; },
	        enumerable: true,
	        configurable: true
	    });
	    BrowserPlatformLocation.prototype.getBaseHrefFromDOM = function () { return dom_adapter_1.DOM.getBaseHref(); };
	    BrowserPlatformLocation.prototype.onPopState = function (fn) {
	        dom_adapter_1.DOM.getGlobalEventTarget('window').addEventListener('popstate', fn, false);
	    };
	    BrowserPlatformLocation.prototype.onHashChange = function (fn) {
	        dom_adapter_1.DOM.getGlobalEventTarget('window').addEventListener('hashchange', fn, false);
	    };
	    Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
	        get: function () { return this._location.pathname; },
	        set: function (newPath) { this._location.pathname = newPath; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
	        get: function () { return this._location.search; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
	        get: function () { return this._location.hash; },
	        enumerable: true,
	        configurable: true
	    });
	    BrowserPlatformLocation.prototype.pushState = function (state, title, url) {
	        this._history.pushState(state, title, url);
	    };
	    BrowserPlatformLocation.prototype.replaceState = function (state, title, url) {
	        this._history.replaceState(state, title, url);
	    };
	    BrowserPlatformLocation.prototype.forward = function () { this._history.forward(); };
	    BrowserPlatformLocation.prototype.back = function () { this._history.back(); };
	    BrowserPlatformLocation = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BrowserPlatformLocation);
	    return BrowserPlatformLocation;
	}(platform_location_1.PlatformLocation));
	exports.BrowserPlatformLocation = BrowserPlatformLocation;


/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var location_strategy_1 = __webpack_require__(42);
	var lang_1 = __webpack_require__(1);
	var platform_location_1 = __webpack_require__(43);
	/**
	 * `HashLocationStrategy` is a {@link LocationStrategy} used to configure the
	 * {@link Location} service to represent its state in the
	 * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
	 * of the browser's URL.
	 *
	 * For instance, if you call `location.go('/foo')`, the browser's URL will become
	 * `example.com#/foo`.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component, provide} from 'angular2/core';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig,
	 *   Location,
	 *   LocationStrategy,
	 *   HashLocationStrategy
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   constructor(location: Location) {
	 *     location.go('/foo');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, [
	 *   ROUTER_PROVIDERS,
	 *   provide(LocationStrategy, {useClass: HashLocationStrategy})
	 * ]);
	 * ```
	 */
	var HashLocationStrategy = (function (_super) {
	    __extends(HashLocationStrategy, _super);
	    function HashLocationStrategy(_platformLocation, _baseHref) {
	        _super.call(this);
	        this._platformLocation = _platformLocation;
	        this._baseHref = '';
	        if (lang_1.isPresent(_baseHref)) {
	            this._baseHref = _baseHref;
	        }
	    }
	    HashLocationStrategy.prototype.onPopState = function (fn) {
	        this._platformLocation.onPopState(fn);
	        this._platformLocation.onHashChange(fn);
	    };
	    HashLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
	    HashLocationStrategy.prototype.path = function () {
	        // the hash value is always prefixed with a `#`
	        // and if it is empty then it will stay empty
	        var path = this._platformLocation.hash;
	        if (!lang_1.isPresent(path))
	            path = '#';
	        // Dart will complain if a call to substring is
	        // executed with a position value that extends the
	        // length of string.
	        return (path.length > 0 ? path.substring(1) : path);
	    };
	    HashLocationStrategy.prototype.prepareExternalUrl = function (internal) {
	        var url = location_strategy_1.joinWithSlash(this._baseHref, internal);
	        return url.length > 0 ? ('#' + url) : url;
	    };
	    HashLocationStrategy.prototype.pushState = function (state, title, path, queryParams) {
	        var url = this.prepareExternalUrl(path + location_strategy_1.normalizeQueryParams(queryParams));
	        if (url.length == 0) {
	            url = this._platformLocation.pathname;
	        }
	        this._platformLocation.pushState(state, title, url);
	    };
	    HashLocationStrategy.prototype.replaceState = function (state, title, path, queryParams) {
	        var url = this.prepareExternalUrl(path + location_strategy_1.normalizeQueryParams(queryParams));
	        if (url.length == 0) {
	            url = this._platformLocation.pathname;
	        }
	        this._platformLocation.replaceState(state, title, url);
	    };
	    HashLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
	    HashLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
	    HashLocationStrategy = __decorate([
	        core_1.Injectable(),
	        __param(1, core_1.Optional()),
	        __param(1, core_1.Inject(location_strategy_1.APP_BASE_HREF)), 
	        __metadata('design:paramtypes', [platform_location_1.PlatformLocation, String])
	    ], HashLocationStrategy);
	    return HashLocationStrategy;
	}(location_strategy_1.LocationStrategy));
	exports.HashLocationStrategy = HashLocationStrategy;


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var route_config_decorator_1 = __webpack_require__(184);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	/**
	 * Given a JS Object that represents a route config, returns a corresponding Route, AsyncRoute,
	 * AuxRoute or Redirect object.
	 *
	 * Also wraps an AsyncRoute's loader function to add the loaded component's route config to the
	 * `RouteRegistry`.
	 */
	function normalizeRouteConfig(config, registry) {
	    if (config instanceof route_config_decorator_1.AsyncRoute) {
	        var wrappedLoader = wrapLoaderToReconfigureRegistry(config.loader, registry);
	        return new route_config_decorator_1.AsyncRoute({
	            path: config.path,
	            loader: wrappedLoader,
	            name: config.name,
	            data: config.data,
	            useAsDefault: config.useAsDefault
	        });
	    }
	    if (config instanceof route_config_decorator_1.Route || config instanceof route_config_decorator_1.Redirect || config instanceof route_config_decorator_1.AuxRoute) {
	        return config;
	    }
	    if ((+!!config.component) + (+!!config.redirectTo) + (+!!config.loader) != 1) {
	        throw new exceptions_1.BaseException("Route config should contain exactly one \"component\", \"loader\", or \"redirectTo\" property.");
	    }
	    if (config.as && config.name) {
	        throw new exceptions_1.BaseException("Route config should contain exactly one \"as\" or \"name\" property.");
	    }
	    if (config.as) {
	        config.name = config.as;
	    }
	    if (config.loader) {
	        var wrappedLoader = wrapLoaderToReconfigureRegistry(config.loader, registry);
	        return new route_config_decorator_1.AsyncRoute({
	            path: config.path,
	            loader: wrappedLoader,
	            name: config.name,
	            data: config.data,
	            useAsDefault: config.useAsDefault
	        });
	    }
	    if (config.aux) {
	        return new route_config_decorator_1.AuxRoute({ path: config.aux, component: config.component, name: config.name });
	    }
	    if (config.component) {
	        if (typeof config.component == 'object') {
	            var componentDefinitionObject = config.component;
	            if (componentDefinitionObject.type == 'constructor') {
	                return new route_config_decorator_1.Route({
	                    path: config.path,
	                    component: componentDefinitionObject.constructor,
	                    name: config.name,
	                    data: config.data,
	                    useAsDefault: config.useAsDefault
	                });
	            }
	            else if (componentDefinitionObject.type == 'loader') {
	                return new route_config_decorator_1.AsyncRoute({
	                    path: config.path,
	                    loader: componentDefinitionObject.loader,
	                    name: config.name,
	                    data: config.data,
	                    useAsDefault: config.useAsDefault
	                });
	            }
	            else {
	                throw new exceptions_1.BaseException("Invalid component type \"" + componentDefinitionObject.type + "\". Valid types are \"constructor\" and \"loader\".");
	            }
	        }
	        return new route_config_decorator_1.Route(config);
	    }
	    if (config.redirectTo) {
	        return new route_config_decorator_1.Redirect({ path: config.path, redirectTo: config.redirectTo });
	    }
	    return config;
	}
	exports.normalizeRouteConfig = normalizeRouteConfig;
	function wrapLoaderToReconfigureRegistry(loader, registry) {
	    return function () {
	        return loader().then(function (componentType) {
	            registry.configFromComponent(componentType);
	            return componentType;
	        });
	    };
	}
	function assertComponentExists(component, path) {
	    if (!lang_1.isType(component)) {
	        throw new exceptions_1.BaseException("Component for route \"" + path + "\" is not defined, or is not a class.");
	    }
	}
	exports.assertComponentExists = assertComponentExists;


/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var router_providers_common_1 = __webpack_require__(185);
	var core_1 = __webpack_require__(3);
	var lang_1 = __webpack_require__(1);
	var browser_platform_location_1 = __webpack_require__(282);
	var platform_location_1 = __webpack_require__(43);
	/**
	 * A list of {@link Provider}s. To use the router, you must add this to your application.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   // ...
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	exports.ROUTER_PROVIDERS = lang_1.CONST_EXPR([
	    router_providers_common_1.ROUTER_PROVIDERS_COMMON,
	    lang_1.CONST_EXPR(new core_1.Provider(platform_location_1.PlatformLocation, { useClass: browser_platform_location_1.BrowserPlatformLocation })),
	]);
	/**
	 * Use {@link ROUTER_PROVIDERS} instead.
	 *
	 * @deprecated
	 */
	exports.ROUTER_BINDINGS = exports.ROUTER_PROVIDERS;


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var instruction_1 = __webpack_require__(19);
	var AsyncRouteHandler = (function () {
	    function AsyncRouteHandler(_loader, data) {
	        if (data === void 0) { data = null; }
	        this._loader = _loader;
	        /** @internal */
	        this._resolvedComponent = null;
	        this.data = lang_1.isPresent(data) ? new instruction_1.RouteData(data) : instruction_1.BLANK_ROUTE_DATA;
	    }
	    AsyncRouteHandler.prototype.resolveComponentType = function () {
	        var _this = this;
	        if (lang_1.isPresent(this._resolvedComponent)) {
	            return this._resolvedComponent;
	        }
	        return this._resolvedComponent = this._loader().then(function (componentType) {
	            _this.componentType = componentType;
	            return componentType;
	        });
	    };
	    return AsyncRouteHandler;
	}());
	exports.AsyncRouteHandler = AsyncRouteHandler;


/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var async_1 = __webpack_require__(6);
	var lang_1 = __webpack_require__(1);
	var instruction_1 = __webpack_require__(19);
	var SyncRouteHandler = (function () {
	    function SyncRouteHandler(componentType, data) {
	        this.componentType = componentType;
	        /** @internal */
	        this._resolvedComponent = null;
	        this._resolvedComponent = async_1.PromiseWrapper.resolve(componentType);
	        this.data = lang_1.isPresent(data) ? new instruction_1.RouteData(data) : instruction_1.BLANK_ROUTE_DATA;
	    }
	    SyncRouteHandler.prototype.resolveComponentType = function () { return this._resolvedComponent; };
	    return SyncRouteHandler;
	}());
	exports.SyncRouteHandler = SyncRouteHandler;


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var collection_1 = __webpack_require__(2);
	var utils_1 = __webpack_require__(291);
	var url_parser_1 = __webpack_require__(110);
	var route_path_1 = __webpack_require__(186);
	/**
	 * Identified by a `...` URL segment. This indicates that the
	 * Route will continue to be matched by child `Router`s.
	 */
	var ContinuationPathSegment = (function () {
	    function ContinuationPathSegment() {
	        this.name = '';
	        this.specificity = '';
	        this.hash = '...';
	    }
	    ContinuationPathSegment.prototype.generate = function (params) { return ''; };
	    ContinuationPathSegment.prototype.match = function (path) { return true; };
	    return ContinuationPathSegment;
	}());
	/**
	 * Identified by a string not starting with a `:` or `*`.
	 * Only matches the URL segments that equal the segment path
	 */
	var StaticPathSegment = (function () {
	    function StaticPathSegment(path) {
	        this.path = path;
	        this.name = '';
	        this.specificity = '2';
	        this.hash = path;
	    }
	    StaticPathSegment.prototype.match = function (path) { return path == this.path; };
	    StaticPathSegment.prototype.generate = function (params) { return this.path; };
	    return StaticPathSegment;
	}());
	/**
	 * Identified by a string starting with `:`. Indicates a segment
	 * that can contain a value that will be extracted and provided to
	 * a matching `Instruction`.
	 */
	var DynamicPathSegment = (function () {
	    function DynamicPathSegment(name) {
	        this.name = name;
	        this.specificity = '1';
	        this.hash = ':';
	    }
	    DynamicPathSegment.prototype.match = function (path) { return path.length > 0; };
	    DynamicPathSegment.prototype.generate = function (params) {
	        if (!collection_1.StringMapWrapper.contains(params.map, this.name)) {
	            throw new exceptions_1.BaseException("Route generator for '" + this.name + "' was not included in parameters passed.");
	        }
	        return encodeDynamicSegment(utils_1.normalizeString(params.get(this.name)));
	    };
	    DynamicPathSegment.paramMatcher = /^:([^\/]+)$/g;
	    return DynamicPathSegment;
	}());
	/**
	 * Identified by a string starting with `*` Indicates that all the following
	 * segments match this route and that the value of these segments should
	 * be provided to a matching `Instruction`.
	 */
	var StarPathSegment = (function () {
	    function StarPathSegment(name) {
	        this.name = name;
	        this.specificity = '0';
	        this.hash = '*';
	    }
	    StarPathSegment.prototype.match = function (path) { return true; };
	    StarPathSegment.prototype.generate = function (params) { return utils_1.normalizeString(params.get(this.name)); };
	    StarPathSegment.wildcardMatcher = /^\*([^\/]+)$/g;
	    return StarPathSegment;
	}());
	/**
	 * Parses a URL string using a given matcher DSL, and generates URLs from param maps
	 */
	var ParamRoutePath = (function () {
	    /**
	     * Takes a string representing the matcher DSL
	     */
	    function ParamRoutePath(routePath) {
	        this.routePath = routePath;
	        this.terminal = true;
	        this._assertValidPath(routePath);
	        this._parsePathString(routePath);
	        this.specificity = this._calculateSpecificity();
	        this.hash = this._calculateHash();
	        var lastSegment = this._segments[this._segments.length - 1];
	        this.terminal = !(lastSegment instanceof ContinuationPathSegment);
	    }
	    ParamRoutePath.prototype.matchUrl = function (url) {
	        var nextUrlSegment = url;
	        var currentUrlSegment;
	        var positionalParams = {};
	        var captured = [];
	        for (var i = 0; i < this._segments.length; i += 1) {
	            var pathSegment = this._segments[i];
	            currentUrlSegment = nextUrlSegment;
	            if (pathSegment instanceof ContinuationPathSegment) {
	                break;
	            }
	            if (lang_1.isPresent(currentUrlSegment)) {
	                // the star segment consumes all of the remaining URL, including matrix params
	                if (pathSegment instanceof StarPathSegment) {
	                    positionalParams[pathSegment.name] = currentUrlSegment.toString();
	                    captured.push(currentUrlSegment.toString());
	                    nextUrlSegment = null;
	                    break;
	                }
	                captured.push(currentUrlSegment.path);
	                if (pathSegment instanceof DynamicPathSegment) {
	                    positionalParams[pathSegment.name] = decodeDynamicSegment(currentUrlSegment.path);
	                }
	                else if (!pathSegment.match(currentUrlSegment.path)) {
	                    return null;
	                }
	                nextUrlSegment = currentUrlSegment.child;
	            }
	            else if (!pathSegment.match('')) {
	                return null;
	            }
	        }
	        if (this.terminal && lang_1.isPresent(nextUrlSegment)) {
	            return null;
	        }
	        var urlPath = captured.join('/');
	        var auxiliary = [];
	        var urlParams = [];
	        var allParams = positionalParams;
	        if (lang_1.isPresent(currentUrlSegment)) {
	            // If this is the root component, read query params. Otherwise, read matrix params.
	            var paramsSegment = url instanceof url_parser_1.RootUrl ? url : currentUrlSegment;
	            if (lang_1.isPresent(paramsSegment.params)) {
	                allParams = collection_1.StringMapWrapper.merge(paramsSegment.params, positionalParams);
	                urlParams = url_parser_1.convertUrlParamsToArray(paramsSegment.params);
	            }
	            else {
	                allParams = positionalParams;
	            }
	            auxiliary = currentUrlSegment.auxiliary;
	        }
	        return new route_path_1.MatchedUrl(urlPath, urlParams, allParams, auxiliary, nextUrlSegment);
	    };
	    ParamRoutePath.prototype.generateUrl = function (params) {
	        var paramTokens = new utils_1.TouchMap(params);
	        var path = [];
	        for (var i = 0; i < this._segments.length; i++) {
	            var segment = this._segments[i];
	            if (!(segment instanceof ContinuationPathSegment)) {
	                path.push(segment.generate(paramTokens));
	            }
	        }
	        var urlPath = path.join('/');
	        var nonPositionalParams = paramTokens.getUnused();
	        var urlParams = nonPositionalParams;
	        return new route_path_1.GeneratedUrl(urlPath, urlParams);
	    };
	    ParamRoutePath.prototype.toString = function () { return this.routePath; };
	    ParamRoutePath.prototype._parsePathString = function (routePath) {
	        // normalize route as not starting with a "/". Recognition will
	        // also normalize.
	        if (routePath.startsWith("/")) {
	            routePath = routePath.substring(1);
	        }
	        var segmentStrings = routePath.split('/');
	        this._segments = [];
	        var limit = segmentStrings.length - 1;
	        for (var i = 0; i <= limit; i++) {
	            var segment = segmentStrings[i], match;
	            if (lang_1.isPresent(match = lang_1.RegExpWrapper.firstMatch(DynamicPathSegment.paramMatcher, segment))) {
	                this._segments.push(new DynamicPathSegment(match[1]));
	            }
	            else if (lang_1.isPresent(match = lang_1.RegExpWrapper.firstMatch(StarPathSegment.wildcardMatcher, segment))) {
	                this._segments.push(new StarPathSegment(match[1]));
	            }
	            else if (segment == '...') {
	                if (i < limit) {
	                    throw new exceptions_1.BaseException("Unexpected \"...\" before the end of the path for \"" + routePath + "\".");
	                }
	                this._segments.push(new ContinuationPathSegment());
	            }
	            else {
	                this._segments.push(new StaticPathSegment(segment));
	            }
	        }
	    };
	    ParamRoutePath.prototype._calculateSpecificity = function () {
	        // The "specificity" of a path is used to determine which route is used when multiple routes
	        // match
	        // a URL. Static segments (like "/foo") are the most specific, followed by dynamic segments
	        // (like
	        // "/:id"). Star segments add no specificity. Segments at the start of the path are more
	        // specific
	        // than proceeding ones.
	        //
	        // The code below uses place values to combine the different types of segments into a single
	        // string that we can sort later. Each static segment is marked as a specificity of "2," each
	        // dynamic segment is worth "1" specificity, and stars are worth "0" specificity.
	        var i, length = this._segments.length, specificity;
	        if (length == 0) {
	            // a single slash (or "empty segment" is as specific as a static segment
	            specificity += '2';
	        }
	        else {
	            specificity = '';
	            for (i = 0; i < length; i++) {
	                specificity += this._segments[i].specificity;
	            }
	        }
	        return specificity;
	    };
	    ParamRoutePath.prototype._calculateHash = function () {
	        // this function is used to determine whether a route config path like `/foo/:id` collides with
	        // `/foo/:name`
	        var i, length = this._segments.length;
	        var hashParts = [];
	        for (i = 0; i < length; i++) {
	            hashParts.push(this._segments[i].hash);
	        }
	        return hashParts.join('/');
	    };
	    ParamRoutePath.prototype._assertValidPath = function (path) {
	        if (lang_1.StringWrapper.contains(path, '#')) {
	            throw new exceptions_1.BaseException("Path \"" + path + "\" should not include \"#\". Use \"HashLocationStrategy\" instead.");
	        }
	        var illegalCharacter = lang_1.RegExpWrapper.firstMatch(ParamRoutePath.RESERVED_CHARS, path);
	        if (lang_1.isPresent(illegalCharacter)) {
	            throw new exceptions_1.BaseException("Path \"" + path + "\" contains \"" + illegalCharacter[0] + "\" which is not allowed in a route config.");
	        }
	    };
	    ParamRoutePath.RESERVED_CHARS = lang_1.RegExpWrapper.create('//|\\(|\\)|;|\\?|=');
	    return ParamRoutePath;
	}());
	exports.ParamRoutePath = ParamRoutePath;
	var REGEXP_PERCENT = /%/g;
	var REGEXP_SLASH = /\//g;
	var REGEXP_OPEN_PARENT = /\(/g;
	var REGEXP_CLOSE_PARENT = /\)/g;
	var REGEXP_SEMICOLON = /;/g;
	function encodeDynamicSegment(value) {
	    if (lang_1.isBlank(value)) {
	        return null;
	    }
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_PERCENT, '%25');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_SLASH, '%2F');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_OPEN_PARENT, '%28');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_CLOSE_PARENT, '%29');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_SEMICOLON, '%3B');
	    return value;
	}
	var REGEXP_ENC_SEMICOLON = /%3B/ig;
	var REGEXP_ENC_CLOSE_PARENT = /%29/ig;
	var REGEXP_ENC_OPEN_PARENT = /%28/ig;
	var REGEXP_ENC_SLASH = /%2F/ig;
	var REGEXP_ENC_PERCENT = /%25/ig;
	function decodeDynamicSegment(value) {
	    if (lang_1.isBlank(value)) {
	        return null;
	    }
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_ENC_SEMICOLON, ';');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_ENC_CLOSE_PARENT, ')');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_ENC_OPEN_PARENT, '(');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_ENC_SLASH, '/');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_ENC_PERCENT, '%');
	    return value;
	}


/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var route_path_1 = __webpack_require__(186);
	var RegexRoutePath = (function () {
	    function RegexRoutePath(_reString, _serializer) {
	        this._reString = _reString;
	        this._serializer = _serializer;
	        this.terminal = true;
	        this.specificity = '2';
	        this.hash = this._reString;
	        this._regex = lang_1.RegExpWrapper.create(this._reString);
	    }
	    RegexRoutePath.prototype.matchUrl = function (url) {
	        var urlPath = url.toString();
	        var params = {};
	        var matcher = lang_1.RegExpWrapper.matcher(this._regex, urlPath);
	        var match = lang_1.RegExpMatcherWrapper.next(matcher);
	        if (lang_1.isBlank(match)) {
	            return null;
	        }
	        for (var i = 0; i < match.length; i += 1) {
	            params[i.toString()] = match[i];
	        }
	        return new route_path_1.MatchedUrl(urlPath, [], params, [], null);
	    };
	    RegexRoutePath.prototype.generateUrl = function (params) { return this._serializer(params); };
	    RegexRoutePath.prototype.toString = function () { return this._reString; };
	    return RegexRoutePath;
	}());
	exports.RegexRoutePath = RegexRoutePath;


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var collection_1 = __webpack_require__(2);
	var async_1 = __webpack_require__(6);
	var rules_1 = __webpack_require__(187);
	var route_config_impl_1 = __webpack_require__(64);
	var async_route_handler_1 = __webpack_require__(286);
	var sync_route_handler_1 = __webpack_require__(287);
	var param_route_path_1 = __webpack_require__(288);
	var regex_route_path_1 = __webpack_require__(289);
	/**
	 * A `RuleSet` is responsible for recognizing routes for a particular component.
	 * It is consumed by `RouteRegistry`, which knows how to recognize an entire hierarchy of
	 * components.
	 */
	var RuleSet = (function () {
	    function RuleSet() {
	        this.rulesByName = new collection_1.Map();
	        // map from name to rule
	        this.auxRulesByName = new collection_1.Map();
	        // map from starting path to rule
	        this.auxRulesByPath = new collection_1.Map();
	        // TODO: optimize this into a trie
	        this.rules = [];
	        // the rule to use automatically when recognizing or generating from this rule set
	        this.defaultRule = null;
	    }
	    /**
	     * Configure additional rules in this rule set from a route definition
	     * @returns {boolean} true if the config is terminal
	     */
	    RuleSet.prototype.config = function (config) {
	        var handler;
	        if (lang_1.isPresent(config.name) && config.name[0].toUpperCase() != config.name[0]) {
	            var suggestedName = config.name[0].toUpperCase() + config.name.substring(1);
	            throw new exceptions_1.BaseException("Route \"" + config.path + "\" with name \"" + config.name + "\" does not begin with an uppercase letter. Route names should be CamelCase like \"" + suggestedName + "\".");
	        }
	        if (config instanceof route_config_impl_1.AuxRoute) {
	            handler = new sync_route_handler_1.SyncRouteHandler(config.component, config.data);
	            var routePath_1 = this._getRoutePath(config);
	            var auxRule = new rules_1.RouteRule(routePath_1, handler, config.name);
	            this.auxRulesByPath.set(routePath_1.toString(), auxRule);
	            if (lang_1.isPresent(config.name)) {
	                this.auxRulesByName.set(config.name, auxRule);
	            }
	            return auxRule.terminal;
	        }
	        var useAsDefault = false;
	        if (config instanceof route_config_impl_1.Redirect) {
	            var routePath_2 = this._getRoutePath(config);
	            var redirector = new rules_1.RedirectRule(routePath_2, config.redirectTo);
	            this._assertNoHashCollision(redirector.hash, config.path);
	            this.rules.push(redirector);
	            return true;
	        }
	        if (config instanceof route_config_impl_1.Route) {
	            handler = new sync_route_handler_1.SyncRouteHandler(config.component, config.data);
	            useAsDefault = lang_1.isPresent(config.useAsDefault) && config.useAsDefault;
	        }
	        else if (config instanceof route_config_impl_1.AsyncRoute) {
	            handler = new async_route_handler_1.AsyncRouteHandler(config.loader, config.data);
	            useAsDefault = lang_1.isPresent(config.useAsDefault) && config.useAsDefault;
	        }
	        var routePath = this._getRoutePath(config);
	        var newRule = new rules_1.RouteRule(routePath, handler, config.name);
	        this._assertNoHashCollision(newRule.hash, config.path);
	        if (useAsDefault) {
	            if (lang_1.isPresent(this.defaultRule)) {
	                throw new exceptions_1.BaseException("Only one route can be default");
	            }
	            this.defaultRule = newRule;
	        }
	        this.rules.push(newRule);
	        if (lang_1.isPresent(config.name)) {
	            this.rulesByName.set(config.name, newRule);
	        }
	        return newRule.terminal;
	    };
	    /**
	     * Given a URL, returns a list of `RouteMatch`es, which are partial recognitions for some route.
	     */
	    RuleSet.prototype.recognize = function (urlParse) {
	        var solutions = [];
	        this.rules.forEach(function (routeRecognizer) {
	            var pathMatch = routeRecognizer.recognize(urlParse);
	            if (lang_1.isPresent(pathMatch)) {
	                solutions.push(pathMatch);
	            }
	        });
	        // handle cases where we are routing just to an aux route
	        if (solutions.length == 0 && lang_1.isPresent(urlParse) && urlParse.auxiliary.length > 0) {
	            return [async_1.PromiseWrapper.resolve(new rules_1.PathMatch(null, null, urlParse.auxiliary))];
	        }
	        return solutions;
	    };
	    RuleSet.prototype.recognizeAuxiliary = function (urlParse) {
	        var routeRecognizer = this.auxRulesByPath.get(urlParse.path);
	        if (lang_1.isPresent(routeRecognizer)) {
	            return [routeRecognizer.recognize(urlParse)];
	        }
	        return [async_1.PromiseWrapper.resolve(null)];
	    };
	    RuleSet.prototype.hasRoute = function (name) { return this.rulesByName.has(name); };
	    RuleSet.prototype.componentLoaded = function (name) {
	        return this.hasRoute(name) && lang_1.isPresent(this.rulesByName.get(name).handler.componentType);
	    };
	    RuleSet.prototype.loadComponent = function (name) {
	        return this.rulesByName.get(name).handler.resolveComponentType();
	    };
	    RuleSet.prototype.generate = function (name, params) {
	        var rule = this.rulesByName.get(name);
	        if (lang_1.isBlank(rule)) {
	            return null;
	        }
	        return rule.generate(params);
	    };
	    RuleSet.prototype.generateAuxiliary = function (name, params) {
	        var rule = this.auxRulesByName.get(name);
	        if (lang_1.isBlank(rule)) {
	            return null;
	        }
	        return rule.generate(params);
	    };
	    RuleSet.prototype._assertNoHashCollision = function (hash, path) {
	        this.rules.forEach(function (rule) {
	            if (hash == rule.hash) {
	                throw new exceptions_1.BaseException("Configuration '" + path + "' conflicts with existing route '" + rule.path + "'");
	            }
	        });
	    };
	    RuleSet.prototype._getRoutePath = function (config) {
	        if (lang_1.isPresent(config.regex)) {
	            if (lang_1.isFunction(config.serializer)) {
	                return new regex_route_path_1.RegexRoutePath(config.regex, config.serializer);
	            }
	            else {
	                throw new exceptions_1.BaseException("Route provides a regex property, '" + config.regex + "', but no serializer property");
	            }
	        }
	        if (lang_1.isPresent(config.path)) {
	            // Auxiliary routes do not have a slash at the start
	            var path = (config instanceof route_config_impl_1.AuxRoute && config.path.startsWith('/')) ?
	                config.path.substring(1) :
	                config.path;
	            return new param_route_path_1.ParamRoutePath(path);
	        }
	        throw new exceptions_1.BaseException('Route must provide either a path or regex property');
	    };
	    return RuleSet;
	}());
	exports.RuleSet = RuleSet;


/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(2);
	var TouchMap = (function () {
	    function TouchMap(map) {
	        var _this = this;
	        this.map = {};
	        this.keys = {};
	        if (lang_1.isPresent(map)) {
	            collection_1.StringMapWrapper.forEach(map, function (value, key) {
	                _this.map[key] = lang_1.isPresent(value) ? value.toString() : null;
	                _this.keys[key] = true;
	            });
	        }
	    }
	    TouchMap.prototype.get = function (key) {
	        collection_1.StringMapWrapper.delete(this.keys, key);
	        return this.map[key];
	    };
	    TouchMap.prototype.getUnused = function () {
	        var _this = this;
	        var unused = {};
	        var keys = collection_1.StringMapWrapper.keys(this.keys);
	        keys.forEach(function (key) { return unused[key] = collection_1.StringMapWrapper.get(_this.map, key); });
	        return unused;
	    };
	    return TouchMap;
	}());
	exports.TouchMap = TouchMap;
	function normalizeString(obj) {
	    if (lang_1.isBlank(obj)) {
	        return null;
	    }
	    else {
	        return obj.toString();
	    }
	}
	exports.normalizeString = normalizeString;


/***/ },
/* 292 */
/***/ function(module, exports) {

	'use strict';"use strict";
	// Note: This class is only here so that we can reference it from TypeScript code.
	// The actual implementation lives under modules_dart.
	// TODO(tbosch): Move the corresponding code into angular2/src/compiler once
	// the new compiler is done.
	var Codegen = (function () {
	    function Codegen(moduleAlias) {
	    }
	    Codegen.prototype.generate = function (typeName, changeDetectorTypeName, def) {
	        throw "Not implemented in JS";
	    };
	    Codegen.prototype.toString = function () { throw "Not implemented in JS"; };
	    return Codegen;
	}());
	exports.Codegen = Codegen;


/***/ },
/* 293 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 299 */,
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(202);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(298)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/autoprefixer-loader/index.js?{\"browsers\":[\"last 2 versions\",\"iOS >= 7\",\"Android >= 4\",\"Explorer >= 10\",\"ExplorerMobile >= 11\"],\"cascade\":false}!./../node_modules/sass-loader/index.js?sourceMap!./index.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/autoprefixer-loader/index.js?{\"browsers\":[\"last 2 versions\",\"iOS >= 7\",\"Android >= 4\",\"Explorer >= 10\",\"ExplorerMobile >= 11\"],\"cascade\":false}!./../node_modules/sass-loader/index.js?sourceMap!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }
]);
//# sourceMappingURL=demo.0600e53555e505f7a587.bundle.map