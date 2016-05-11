webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(14);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {//! moment.js
	//! version : 2.13.0
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com
	
	;(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    global.moment = factory()
	}(this, function () { 'use strict';
	
	    var hookCallback;
	
	    function utils_hooks__hooks () {
	        return hookCallback.apply(null, arguments);
	    }
	
	    // This is done to register the method called with moment()
	    // without creating circular dependencies.
	    function setHookCallback (callback) {
	        hookCallback = callback;
	    }
	
	    function isArray(input) {
	        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
	    }
	
	    function isDate(input) {
	        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
	    }
	
	    function map(arr, fn) {
	        var res = [], i;
	        for (i = 0; i < arr.length; ++i) {
	            res.push(fn(arr[i], i));
	        }
	        return res;
	    }
	
	    function hasOwnProp(a, b) {
	        return Object.prototype.hasOwnProperty.call(a, b);
	    }
	
	    function extend(a, b) {
	        for (var i in b) {
	            if (hasOwnProp(b, i)) {
	                a[i] = b[i];
	            }
	        }
	
	        if (hasOwnProp(b, 'toString')) {
	            a.toString = b.toString;
	        }
	
	        if (hasOwnProp(b, 'valueOf')) {
	            a.valueOf = b.valueOf;
	        }
	
	        return a;
	    }
	
	    function create_utc__createUTC (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, true).utc();
	    }
	
	    function defaultParsingFlags() {
	        // We need to deep clone this object.
	        return {
	            empty           : false,
	            unusedTokens    : [],
	            unusedInput     : [],
	            overflow        : -2,
	            charsLeftOver   : 0,
	            nullInput       : false,
	            invalidMonth    : null,
	            invalidFormat   : false,
	            userInvalidated : false,
	            iso             : false,
	            parsedDateParts : [],
	            meridiem        : null
	        };
	    }
	
	    function getParsingFlags(m) {
	        if (m._pf == null) {
	            m._pf = defaultParsingFlags();
	        }
	        return m._pf;
	    }
	
	    var some;
	    if (Array.prototype.some) {
	        some = Array.prototype.some;
	    } else {
	        some = function (fun) {
	            var t = Object(this);
	            var len = t.length >>> 0;
	
	            for (var i = 0; i < len; i++) {
	                if (i in t && fun.call(this, t[i], i, t)) {
	                    return true;
	                }
	            }
	
	            return false;
	        };
	    }
	
	    function valid__isValid(m) {
	        if (m._isValid == null) {
	            var flags = getParsingFlags(m);
	            var parsedParts = some.call(flags.parsedDateParts, function (i) {
	                return i != null;
	            });
	            m._isValid = !isNaN(m._d.getTime()) &&
	                flags.overflow < 0 &&
	                !flags.empty &&
	                !flags.invalidMonth &&
	                !flags.invalidWeekday &&
	                !flags.nullInput &&
	                !flags.invalidFormat &&
	                !flags.userInvalidated &&
	                (!flags.meridiem || (flags.meridiem && parsedParts));
	
	            if (m._strict) {
	                m._isValid = m._isValid &&
	                    flags.charsLeftOver === 0 &&
	                    flags.unusedTokens.length === 0 &&
	                    flags.bigHour === undefined;
	            }
	        }
	        return m._isValid;
	    }
	
	    function valid__createInvalid (flags) {
	        var m = create_utc__createUTC(NaN);
	        if (flags != null) {
	            extend(getParsingFlags(m), flags);
	        }
	        else {
	            getParsingFlags(m).userInvalidated = true;
	        }
	
	        return m;
	    }
	
	    function isUndefined(input) {
	        return input === void 0;
	    }
	
	    // Plugins that add properties should also add the key here (null value),
	    // so we can properly clone ourselves.
	    var momentProperties = utils_hooks__hooks.momentProperties = [];
	
	    function copyConfig(to, from) {
	        var i, prop, val;
	
	        if (!isUndefined(from._isAMomentObject)) {
	            to._isAMomentObject = from._isAMomentObject;
	        }
	        if (!isUndefined(from._i)) {
	            to._i = from._i;
	        }
	        if (!isUndefined(from._f)) {
	            to._f = from._f;
	        }
	        if (!isUndefined(from._l)) {
	            to._l = from._l;
	        }
	        if (!isUndefined(from._strict)) {
	            to._strict = from._strict;
	        }
	        if (!isUndefined(from._tzm)) {
	            to._tzm = from._tzm;
	        }
	        if (!isUndefined(from._isUTC)) {
	            to._isUTC = from._isUTC;
	        }
	        if (!isUndefined(from._offset)) {
	            to._offset = from._offset;
	        }
	        if (!isUndefined(from._pf)) {
	            to._pf = getParsingFlags(from);
	        }
	        if (!isUndefined(from._locale)) {
	            to._locale = from._locale;
	        }
	
	        if (momentProperties.length > 0) {
	            for (i in momentProperties) {
	                prop = momentProperties[i];
	                val = from[prop];
	                if (!isUndefined(val)) {
	                    to[prop] = val;
	                }
	            }
	        }
	
	        return to;
	    }
	
	    var updateInProgress = false;
	
	    // Moment prototype object
	    function Moment(config) {
	        copyConfig(this, config);
	        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
	        // Prevent infinite loop in case updateOffset creates new moment
	        // objects.
	        if (updateInProgress === false) {
	            updateInProgress = true;
	            utils_hooks__hooks.updateOffset(this);
	            updateInProgress = false;
	        }
	    }
	
	    function isMoment (obj) {
	        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
	    }
	
	    function absFloor (number) {
	        if (number < 0) {
	            return Math.ceil(number);
	        } else {
	            return Math.floor(number);
	        }
	    }
	
	    function toInt(argumentForCoercion) {
	        var coercedNumber = +argumentForCoercion,
	            value = 0;
	
	        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	            value = absFloor(coercedNumber);
	        }
	
	        return value;
	    }
	
	    // compare two arrays, return the number of differences
	    function compareArrays(array1, array2, dontConvert) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if ((dontConvert && array1[i] !== array2[i]) ||
	                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }
	
	    function warn(msg) {
	        if (utils_hooks__hooks.suppressDeprecationWarnings === false &&
	                (typeof console !==  'undefined') && console.warn) {
	            console.warn('Deprecation warning: ' + msg);
	        }
	    }
	
	    function deprecate(msg, fn) {
	        var firstTime = true;
	
	        return extend(function () {
	            if (utils_hooks__hooks.deprecationHandler != null) {
	                utils_hooks__hooks.deprecationHandler(null, msg);
	            }
	            if (firstTime) {
	                warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
	                firstTime = false;
	            }
	            return fn.apply(this, arguments);
	        }, fn);
	    }
	
	    var deprecations = {};
	
	    function deprecateSimple(name, msg) {
	        if (utils_hooks__hooks.deprecationHandler != null) {
	            utils_hooks__hooks.deprecationHandler(name, msg);
	        }
	        if (!deprecations[name]) {
	            warn(msg);
	            deprecations[name] = true;
	        }
	    }
	
	    utils_hooks__hooks.suppressDeprecationWarnings = false;
	    utils_hooks__hooks.deprecationHandler = null;
	
	    function isFunction(input) {
	        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	    }
	
	    function isObject(input) {
	        return Object.prototype.toString.call(input) === '[object Object]';
	    }
	
	    function locale_set__set (config) {
	        var prop, i;
	        for (i in config) {
	            prop = config[i];
	            if (isFunction(prop)) {
	                this[i] = prop;
	            } else {
	                this['_' + i] = prop;
	            }
	        }
	        this._config = config;
	        // Lenient ordinal parsing accepts just a number in addition to
	        // number + (possibly) stuff coming from _ordinalParseLenient.
	        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
	    }
	
	    function mergeConfigs(parentConfig, childConfig) {
	        var res = extend({}, parentConfig), prop;
	        for (prop in childConfig) {
	            if (hasOwnProp(childConfig, prop)) {
	                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
	                    res[prop] = {};
	                    extend(res[prop], parentConfig[prop]);
	                    extend(res[prop], childConfig[prop]);
	                } else if (childConfig[prop] != null) {
	                    res[prop] = childConfig[prop];
	                } else {
	                    delete res[prop];
	                }
	            }
	        }
	        return res;
	    }
	
	    function Locale(config) {
	        if (config != null) {
	            this.set(config);
	        }
	    }
	
	    var keys;
	
	    if (Object.keys) {
	        keys = Object.keys;
	    } else {
	        keys = function (obj) {
	            var i, res = [];
	            for (i in obj) {
	                if (hasOwnProp(obj, i)) {
	                    res.push(i);
	                }
	            }
	            return res;
	        };
	    }
	
	    // internal storage for locale config files
	    var locales = {};
	    var globalLocale;
	
	    function normalizeLocale(key) {
	        return key ? key.toLowerCase().replace('_', '-') : key;
	    }
	
	    // pick the locale from the array
	    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	    function chooseLocale(names) {
	        var i = 0, j, next, locale, split;
	
	        while (i < names.length) {
	            split = normalizeLocale(names[i]).split('-');
	            j = split.length;
	            next = normalizeLocale(names[i + 1]);
	            next = next ? next.split('-') : null;
	            while (j > 0) {
	                locale = loadLocale(split.slice(0, j).join('-'));
	                if (locale) {
	                    return locale;
	                }
	                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
	                    //the next array item is better than a shallower substring of this one
	                    break;
	                }
	                j--;
	            }
	            i++;
	        }
	        return null;
	    }
	
	    function loadLocale(name) {
	        var oldLocale = null;
	        // TODO: Find a better way to register and load all the locales in Node
	        if (!locales[name] && (typeof module !== 'undefined') &&
	                module && module.exports) {
	            try {
	                oldLocale = globalLocale._abbr;
	                __webpack_require__(478)("./" + name);
	                // because defineLocale currently also sets the global locale, we
	                // want to undo that for lazy loaded locales
	                locale_locales__getSetGlobalLocale(oldLocale);
	            } catch (e) { }
	        }
	        return locales[name];
	    }
	
	    // This function will load locale and then set the global locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    function locale_locales__getSetGlobalLocale (key, values) {
	        var data;
	        if (key) {
	            if (isUndefined(values)) {
	                data = locale_locales__getLocale(key);
	            }
	            else {
	                data = defineLocale(key, values);
	            }
	
	            if (data) {
	                // moment.duration._locale = moment._locale = data;
	                globalLocale = data;
	            }
	        }
	
	        return globalLocale._abbr;
	    }
	
	    function defineLocale (name, config) {
	        if (config !== null) {
	            config.abbr = name;
	            if (locales[name] != null) {
	                deprecateSimple('defineLocaleOverride',
	                        'use moment.updateLocale(localeName, config) to change ' +
	                        'an existing locale. moment.defineLocale(localeName, ' +
	                        'config) should only be used for creating a new locale');
	                config = mergeConfigs(locales[name]._config, config);
	            } else if (config.parentLocale != null) {
	                if (locales[config.parentLocale] != null) {
	                    config = mergeConfigs(locales[config.parentLocale]._config, config);
	                } else {
	                    // treat as if there is no base config
	                    deprecateSimple('parentLocaleUndefined',
	                            'specified parentLocale is not defined yet');
	                }
	            }
	            locales[name] = new Locale(config);
	
	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);
	
	            return locales[name];
	        } else {
	            // useful for testing
	            delete locales[name];
	            return null;
	        }
	    }
	
	    function updateLocale(name, config) {
	        if (config != null) {
	            var locale;
	            if (locales[name] != null) {
	                config = mergeConfigs(locales[name]._config, config);
	            }
	            locale = new Locale(config);
	            locale.parentLocale = locales[name];
	            locales[name] = locale;
	
	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);
	        } else {
	            // pass null for config to unupdate, useful for tests
	            if (locales[name] != null) {
	                if (locales[name].parentLocale != null) {
	                    locales[name] = locales[name].parentLocale;
	                } else if (locales[name] != null) {
	                    delete locales[name];
	                }
	            }
	        }
	        return locales[name];
	    }
	
	    // returns locale data
	    function locale_locales__getLocale (key) {
	        var locale;
	
	        if (key && key._locale && key._locale._abbr) {
	            key = key._locale._abbr;
	        }
	
	        if (!key) {
	            return globalLocale;
	        }
	
	        if (!isArray(key)) {
	            //short-circuit everything else
	            locale = loadLocale(key);
	            if (locale) {
	                return locale;
	            }
	            key = [key];
	        }
	
	        return chooseLocale(key);
	    }
	
	    function locale_locales__listLocales() {
	        return keys(locales);
	    }
	
	    var aliases = {};
	
	    function addUnitAlias (unit, shorthand) {
	        var lowerCase = unit.toLowerCase();
	        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
	    }
	
	    function normalizeUnits(units) {
	        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
	    }
	
	    function normalizeObjectUnits(inputObject) {
	        var normalizedInput = {},
	            normalizedProp,
	            prop;
	
	        for (prop in inputObject) {
	            if (hasOwnProp(inputObject, prop)) {
	                normalizedProp = normalizeUnits(prop);
	                if (normalizedProp) {
	                    normalizedInput[normalizedProp] = inputObject[prop];
	                }
	            }
	        }
	
	        return normalizedInput;
	    }
	
	    function makeGetSet (unit, keepTime) {
	        return function (value) {
	            if (value != null) {
	                get_set__set(this, unit, value);
	                utils_hooks__hooks.updateOffset(this, keepTime);
	                return this;
	            } else {
	                return get_set__get(this, unit);
	            }
	        };
	    }
	
	    function get_set__get (mom, unit) {
	        return mom.isValid() ?
	            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
	    }
	
	    function get_set__set (mom, unit, value) {
	        if (mom.isValid()) {
	            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	        }
	    }
	
	    // MOMENTS
	
	    function getSet (units, value) {
	        var unit;
	        if (typeof units === 'object') {
	            for (unit in units) {
	                this.set(unit, units[unit]);
	            }
	        } else {
	            units = normalizeUnits(units);
	            if (isFunction(this[units])) {
	                return this[units](value);
	            }
	        }
	        return this;
	    }
	
	    function zeroFill(number, targetLength, forceSign) {
	        var absNumber = '' + Math.abs(number),
	            zerosToFill = targetLength - absNumber.length,
	            sign = number >= 0;
	        return (sign ? (forceSign ? '+' : '') : '-') +
	            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
	    }
	
	    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
	
	    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
	
	    var formatFunctions = {};
	
	    var formatTokenFunctions = {};
	
	    // token:    'M'
	    // padded:   ['MM', 2]
	    // ordinal:  'Mo'
	    // callback: function () { this.month() + 1 }
	    function addFormatToken (token, padded, ordinal, callback) {
	        var func = callback;
	        if (typeof callback === 'string') {
	            func = function () {
	                return this[callback]();
	            };
	        }
	        if (token) {
	            formatTokenFunctions[token] = func;
	        }
	        if (padded) {
	            formatTokenFunctions[padded[0]] = function () {
	                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
	            };
	        }
	        if (ordinal) {
	            formatTokenFunctions[ordinal] = function () {
	                return this.localeData().ordinal(func.apply(this, arguments), token);
	            };
	        }
	    }
	
	    function removeFormattingTokens(input) {
	        if (input.match(/\[[\s\S]/)) {
	            return input.replace(/^\[|\]$/g, '');
	        }
	        return input.replace(/\\/g, '');
	    }
	
	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens), i, length;
	
	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }
	
	        return function (mom) {
	            var output = '', i;
	            for (i = 0; i < length; i++) {
	                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
	            }
	            return output;
	        };
	    }
	
	    // format date using native date object
	    function formatMoment(m, format) {
	        if (!m.isValid()) {
	            return m.localeData().invalidDate();
	        }
	
	        format = expandFormat(format, m.localeData());
	        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
	
	        return formatFunctions[format](m);
	    }
	
	    function expandFormat(format, locale) {
	        var i = 5;
	
	        function replaceLongDateFormatTokens(input) {
	            return locale.longDateFormat(input) || input;
	        }
	
	        localFormattingTokens.lastIndex = 0;
	        while (i >= 0 && localFormattingTokens.test(format)) {
	            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	            localFormattingTokens.lastIndex = 0;
	            i -= 1;
	        }
	
	        return format;
	    }
	
	    var match1         = /\d/;            //       0 - 9
	    var match2         = /\d\d/;          //      00 - 99
	    var match3         = /\d{3}/;         //     000 - 999
	    var match4         = /\d{4}/;         //    0000 - 9999
	    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
	    var match1to2      = /\d\d?/;         //       0 - 99
	    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
	    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
	    var match1to3      = /\d{1,3}/;       //       0 - 999
	    var match1to4      = /\d{1,4}/;       //       0 - 9999
	    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999
	
	    var matchUnsigned  = /\d+/;           //       0 - inf
	    var matchSigned    = /[+-]?\d+/;      //    -inf - inf
	
	    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
	    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
	
	    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
	
	    // any word (or two) characters or numbers including two/three word month in arabic.
	    // includes scottish gaelic two word and hyphenated months
	    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
	
	
	    var regexes = {};
	
	    function addRegexToken (token, regex, strictRegex) {
	        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
	            return (isStrict && strictRegex) ? strictRegex : regex;
	        };
	    }
	
	    function getParseRegexForToken (token, config) {
	        if (!hasOwnProp(regexes, token)) {
	            return new RegExp(unescapeFormat(token));
	        }
	
	        return regexes[token](config._strict, config._locale);
	    }
	
	    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	    function unescapeFormat(s) {
	        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
	            return p1 || p2 || p3 || p4;
	        }));
	    }
	
	    function regexEscape(s) {
	        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    }
	
	    var tokens = {};
	
	    function addParseToken (token, callback) {
	        var i, func = callback;
	        if (typeof token === 'string') {
	            token = [token];
	        }
	        if (typeof callback === 'number') {
	            func = function (input, array) {
	                array[callback] = toInt(input);
	            };
	        }
	        for (i = 0; i < token.length; i++) {
	            tokens[token[i]] = func;
	        }
	    }
	
	    function addWeekParseToken (token, callback) {
	        addParseToken(token, function (input, array, config, token) {
	            config._w = config._w || {};
	            callback(input, config._w, config, token);
	        });
	    }
	
	    function addTimeToArrayFromToken(token, input, config) {
	        if (input != null && hasOwnProp(tokens, token)) {
	            tokens[token](input, config._a, config, token);
	        }
	    }
	
	    var YEAR = 0;
	    var MONTH = 1;
	    var DATE = 2;
	    var HOUR = 3;
	    var MINUTE = 4;
	    var SECOND = 5;
	    var MILLISECOND = 6;
	    var WEEK = 7;
	    var WEEKDAY = 8;
	
	    var indexOf;
	
	    if (Array.prototype.indexOf) {
	        indexOf = Array.prototype.indexOf;
	    } else {
	        indexOf = function (o) {
	            // I know
	            var i;
	            for (i = 0; i < this.length; ++i) {
	                if (this[i] === o) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	    }
	
	    function daysInMonth(year, month) {
	        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	    }
	
	    // FORMATTING
	
	    addFormatToken('M', ['MM', 2], 'Mo', function () {
	        return this.month() + 1;
	    });
	
	    addFormatToken('MMM', 0, 0, function (format) {
	        return this.localeData().monthsShort(this, format);
	    });
	
	    addFormatToken('MMMM', 0, 0, function (format) {
	        return this.localeData().months(this, format);
	    });
	
	    // ALIASES
	
	    addUnitAlias('month', 'M');
	
	    // PARSING
	
	    addRegexToken('M',    match1to2);
	    addRegexToken('MM',   match1to2, match2);
	    addRegexToken('MMM',  function (isStrict, locale) {
	        return locale.monthsShortRegex(isStrict);
	    });
	    addRegexToken('MMMM', function (isStrict, locale) {
	        return locale.monthsRegex(isStrict);
	    });
	
	    addParseToken(['M', 'MM'], function (input, array) {
	        array[MONTH] = toInt(input) - 1;
	    });
	
	    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
	        var month = config._locale.monthsParse(input, token, config._strict);
	        // if we didn't find a month name, mark the date as invalid.
	        if (month != null) {
	            array[MONTH] = month;
	        } else {
	            getParsingFlags(config).invalidMonth = input;
	        }
	    });
	
	    // LOCALES
	
	    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
	    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
	    function localeMonths (m, format) {
	        return isArray(this._months) ? this._months[m.month()] :
	            this._months[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
	    }
	
	    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
	    function localeMonthsShort (m, format) {
	        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
	            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
	    }
	
	    function units_month__handleStrictParse(monthName, format, strict) {
	        var i, ii, mom, llc = monthName.toLocaleLowerCase();
	        if (!this._monthsParse) {
	            // this is not used
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	            for (i = 0; i < 12; ++i) {
	                mom = create_utc__createUTC([2000, i]);
	                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
	                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
	            }
	        }
	
	        if (strict) {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }
	
	    function localeMonthsParse (monthName, format, strict) {
	        var i, mom, regex;
	
	        if (this._monthsParseExact) {
	            return units_month__handleStrictParse.call(this, monthName, format, strict);
	        }
	
	        if (!this._monthsParse) {
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	        }
	
	        // TODO: add sorting
	        // Sorting makes sure if one month (or abbr) is a prefix of another
	        // see sorting in computeMonthsParse
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            if (strict && !this._longMonthsParse[i]) {
	                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
	                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
	            }
	            if (!strict && !this._monthsParse[i]) {
	                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (!strict && this._monthsParse[i].test(monthName)) {
	                return i;
	            }
	        }
	    }
	
	    // MOMENTS
	
	    function setMonth (mom, value) {
	        var dayOfMonth;
	
	        if (!mom.isValid()) {
	            // No op
	            return mom;
	        }
	
	        if (typeof value === 'string') {
	            if (/^\d+$/.test(value)) {
	                value = toInt(value);
	            } else {
	                value = mom.localeData().monthsParse(value);
	                // TODO: Another silent failure?
	                if (typeof value !== 'number') {
	                    return mom;
	                }
	            }
	        }
	
	        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
	        return mom;
	    }
	
	    function getSetMonth (value) {
	        if (value != null) {
	            setMonth(this, value);
	            utils_hooks__hooks.updateOffset(this, true);
	            return this;
	        } else {
	            return get_set__get(this, 'Month');
	        }
	    }
	
	    function getDaysInMonth () {
	        return daysInMonth(this.year(), this.month());
	    }
	
	    var defaultMonthsShortRegex = matchWord;
	    function monthsShortRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsShortStrictRegex;
	            } else {
	                return this._monthsShortRegex;
	            }
	        } else {
	            return this._monthsShortStrictRegex && isStrict ?
	                this._monthsShortStrictRegex : this._monthsShortRegex;
	        }
	    }
	
	    var defaultMonthsRegex = matchWord;
	    function monthsRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsStrictRegex;
	            } else {
	                return this._monthsRegex;
	            }
	        } else {
	            return this._monthsStrictRegex && isStrict ?
	                this._monthsStrictRegex : this._monthsRegex;
	        }
	    }
	
	    function computeMonthsParse () {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }
	
	        var shortPieces = [], longPieces = [], mixedPieces = [],
	            i, mom;
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            shortPieces.push(this.monthsShort(mom, ''));
	            longPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.monthsShort(mom, ''));
	        }
	        // Sorting makes sure if one month (or abbr) is a prefix of another it
	        // will match the longer piece.
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 12; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }
	
	        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._monthsShortRegex = this._monthsRegex;
	        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	    }
	
	    function checkOverflow (m) {
	        var overflow;
	        var a = m._a;
	
	        if (a && getParsingFlags(m).overflow === -2) {
	            overflow =
	                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
	                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
	                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
	                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
	                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
	                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
	                -1;
	
	            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	                overflow = DATE;
	            }
	            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
	                overflow = WEEK;
	            }
	            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
	                overflow = WEEKDAY;
	            }
	
	            getParsingFlags(m).overflow = overflow;
	        }
	
	        return m;
	    }
	
	    // iso 8601 regex
	    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
	    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
	
	    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
	
	    var isoDates = [
	        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
	        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
	        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
	        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
	        ['YYYY-DDD', /\d{4}-\d{3}/],
	        ['YYYY-MM', /\d{4}-\d\d/, false],
	        ['YYYYYYMMDD', /[+-]\d{10}/],
	        ['YYYYMMDD', /\d{8}/],
	        // YYYYMM is NOT allowed by the standard
	        ['GGGG[W]WWE', /\d{4}W\d{3}/],
	        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
	        ['YYYYDDD', /\d{7}/]
	    ];
	
	    // iso time formats and regexes
	    var isoTimes = [
	        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
	        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
	        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
	        ['HH:mm', /\d\d:\d\d/],
	        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
	        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
	        ['HHmmss', /\d\d\d\d\d\d/],
	        ['HHmm', /\d\d\d\d/],
	        ['HH', /\d\d/]
	    ];
	
	    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
	
	    // date from iso format
	    function configFromISO(config) {
	        var i, l,
	            string = config._i,
	            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
	            allowTime, dateFormat, timeFormat, tzFormat;
	
	        if (match) {
	            getParsingFlags(config).iso = true;
	
	            for (i = 0, l = isoDates.length; i < l; i++) {
	                if (isoDates[i][1].exec(match[1])) {
	                    dateFormat = isoDates[i][0];
	                    allowTime = isoDates[i][2] !== false;
	                    break;
	                }
	            }
	            if (dateFormat == null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[3]) {
	                for (i = 0, l = isoTimes.length; i < l; i++) {
	                    if (isoTimes[i][1].exec(match[3])) {
	                        // match[2] should be 'T' or space
	                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
	                        break;
	                    }
	                }
	                if (timeFormat == null) {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            if (!allowTime && timeFormat != null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[4]) {
	                if (tzRegex.exec(match[4])) {
	                    tzFormat = 'Z';
	                } else {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
	            configFromStringAndFormat(config);
	        } else {
	            config._isValid = false;
	        }
	    }
	
	    // date from iso format or fallback
	    function configFromString(config) {
	        var matched = aspNetJsonRegex.exec(config._i);
	
	        if (matched !== null) {
	            config._d = new Date(+matched[1]);
	            return;
	        }
	
	        configFromISO(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }
	
	    utils_hooks__hooks.createFromInputFallback = deprecate(
	        'moment construction falls back to js Date. This is ' +
	        'discouraged and will be removed in upcoming major ' +
	        'release. Please refer to ' +
	        'https://github.com/moment/moment/issues/1407 for more info.',
	        function (config) {
	            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	        }
	    );
	
	    function createDate (y, m, d, h, M, s, ms) {
	        //can't just apply() to create a date:
	        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
	        var date = new Date(y, m, d, h, M, s, ms);
	
	        //the date constructor remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
	            date.setFullYear(y);
	        }
	        return date;
	    }
	
	    function createUTCDate (y) {
	        var date = new Date(Date.UTC.apply(null, arguments));
	
	        //the Date.UTC function remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
	            date.setUTCFullYear(y);
	        }
	        return date;
	    }
	
	    // FORMATTING
	
	    addFormatToken('Y', 0, 0, function () {
	        var y = this.year();
	        return y <= 9999 ? '' + y : '+' + y;
	    });
	
	    addFormatToken(0, ['YY', 2], 0, function () {
	        return this.year() % 100;
	    });
	
	    addFormatToken(0, ['YYYY',   4],       0, 'year');
	    addFormatToken(0, ['YYYYY',  5],       0, 'year');
	    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');
	
	    // ALIASES
	
	    addUnitAlias('year', 'y');
	
	    // PARSING
	
	    addRegexToken('Y',      matchSigned);
	    addRegexToken('YY',     match1to2, match2);
	    addRegexToken('YYYY',   match1to4, match4);
	    addRegexToken('YYYYY',  match1to6, match6);
	    addRegexToken('YYYYYY', match1to6, match6);
	
	    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
	    addParseToken('YYYY', function (input, array) {
	        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
	    });
	    addParseToken('YY', function (input, array) {
	        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });
	    addParseToken('Y', function (input, array) {
	        array[YEAR] = parseInt(input, 10);
	    });
	
	    // HELPERS
	
	    function daysInYear(year) {
	        return isLeapYear(year) ? 366 : 365;
	    }
	
	    function isLeapYear(year) {
	        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	    }
	
	    // HOOKS
	
	    utils_hooks__hooks.parseTwoDigitYear = function (input) {
	        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };
	
	    // MOMENTS
	
	    var getSetYear = makeGetSet('FullYear', true);
	
	    function getIsLeapYear () {
	        return isLeapYear(this.year());
	    }
	
	    // start-of-first-week - start-of-year
	    function firstWeekOffset(year, dow, doy) {
	        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
	            fwd = 7 + dow - doy,
	            // first-week day local weekday -- which local weekday is fwd
	            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
	
	        return -fwdlw + fwd - 1;
	    }
	
	    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
	        var localWeekday = (7 + weekday - dow) % 7,
	            weekOffset = firstWeekOffset(year, dow, doy),
	            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
	            resYear, resDayOfYear;
	
	        if (dayOfYear <= 0) {
	            resYear = year - 1;
	            resDayOfYear = daysInYear(resYear) + dayOfYear;
	        } else if (dayOfYear > daysInYear(year)) {
	            resYear = year + 1;
	            resDayOfYear = dayOfYear - daysInYear(year);
	        } else {
	            resYear = year;
	            resDayOfYear = dayOfYear;
	        }
	
	        return {
	            year: resYear,
	            dayOfYear: resDayOfYear
	        };
	    }
	
	    function weekOfYear(mom, dow, doy) {
	        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
	            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
	            resWeek, resYear;
	
	        if (week < 1) {
	            resYear = mom.year() - 1;
	            resWeek = week + weeksInYear(resYear, dow, doy);
	        } else if (week > weeksInYear(mom.year(), dow, doy)) {
	            resWeek = week - weeksInYear(mom.year(), dow, doy);
	            resYear = mom.year() + 1;
	        } else {
	            resYear = mom.year();
	            resWeek = week;
	        }
	
	        return {
	            week: resWeek,
	            year: resYear
	        };
	    }
	
	    function weeksInYear(year, dow, doy) {
	        var weekOffset = firstWeekOffset(year, dow, doy),
	            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
	        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
	    }
	
	    // Pick the first defined of two or three arguments.
	    function defaults(a, b, c) {
	        if (a != null) {
	            return a;
	        }
	        if (b != null) {
	            return b;
	        }
	        return c;
	    }
	
	    function currentDateArray(config) {
	        // hooks is actually the exported moment object
	        var nowValue = new Date(utils_hooks__hooks.now());
	        if (config._useUTC) {
	            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
	        }
	        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
	    }
	
	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function configFromArray (config) {
	        var i, date, input = [], currentDate, yearToUse;
	
	        if (config._d) {
	            return;
	        }
	
	        currentDate = currentDateArray(config);
	
	        //compute day of the year from weeks and weekdays
	        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	            dayOfYearFromWeekInfo(config);
	        }
	
	        //if the day of the year is set, figure out what it is
	        if (config._dayOfYear) {
	            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
	
	            if (config._dayOfYear > daysInYear(yearToUse)) {
	                getParsingFlags(config)._overflowDayOfYear = true;
	            }
	
	            date = createUTCDate(yearToUse, 0, config._dayOfYear);
	            config._a[MONTH] = date.getUTCMonth();
	            config._a[DATE] = date.getUTCDate();
	        }
	
	        // Default to current date.
	        // * if no year, month, day of month are given, default to today
	        // * if day of month is given, default month and year
	        // * if month is given, default only year
	        // * if year is given, don't default anything
	        for (i = 0; i < 3 && config._a[i] == null; ++i) {
	            config._a[i] = input[i] = currentDate[i];
	        }
	
	        // Zero out whatever was not defaulted, including time
	        for (; i < 7; i++) {
	            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
	        }
	
	        // Check for 24:00:00.000
	        if (config._a[HOUR] === 24 &&
	                config._a[MINUTE] === 0 &&
	                config._a[SECOND] === 0 &&
	                config._a[MILLISECOND] === 0) {
	            config._nextDay = true;
	            config._a[HOUR] = 0;
	        }
	
	        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
	        // Apply timezone offset from input. The actual utcOffset can be changed
	        // with parseZone.
	        if (config._tzm != null) {
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	        }
	
	        if (config._nextDay) {
	            config._a[HOUR] = 24;
	        }
	    }
	
	    function dayOfYearFromWeekInfo(config) {
	        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
	
	        w = config._w;
	        if (w.GG != null || w.W != null || w.E != null) {
	            dow = 1;
	            doy = 4;
	
	            // TODO: We need to take the current isoWeekYear, but that depends on
	            // how we interpret now (local, utc, fixed offset). So create
	            // a now version of current config (take local/utc/offset flags, and
	            // create now).
	            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
	            week = defaults(w.W, 1);
	            weekday = defaults(w.E, 1);
	            if (weekday < 1 || weekday > 7) {
	                weekdayOverflow = true;
	            }
	        } else {
	            dow = config._locale._week.dow;
	            doy = config._locale._week.doy;
	
	            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
	            week = defaults(w.w, 1);
	
	            if (w.d != null) {
	                // weekday -- low day numbers are considered next week
	                weekday = w.d;
	                if (weekday < 0 || weekday > 6) {
	                    weekdayOverflow = true;
	                }
	            } else if (w.e != null) {
	                // local weekday -- counting starts from begining of week
	                weekday = w.e + dow;
	                if (w.e < 0 || w.e > 6) {
	                    weekdayOverflow = true;
	                }
	            } else {
	                // default to begining of week
	                weekday = dow;
	            }
	        }
	        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
	            getParsingFlags(config)._overflowWeeks = true;
	        } else if (weekdayOverflow != null) {
	            getParsingFlags(config)._overflowWeekday = true;
	        } else {
	            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
	            config._a[YEAR] = temp.year;
	            config._dayOfYear = temp.dayOfYear;
	        }
	    }
	
	    // constant that refers to the ISO standard
	    utils_hooks__hooks.ISO_8601 = function () {};
	
	    // date from string and format string
	    function configFromStringAndFormat(config) {
	        // TODO: Move this to another part of the creation flow to prevent circular deps
	        if (config._f === utils_hooks__hooks.ISO_8601) {
	            configFromISO(config);
	            return;
	        }
	
	        config._a = [];
	        getParsingFlags(config).empty = true;
	
	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var string = '' + config._i,
	            i, parsedInput, tokens, token, skipped,
	            stringLength = string.length,
	            totalParsedInputLength = 0;
	
	        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
	
	        for (i = 0; i < tokens.length; i++) {
	            token = tokens[i];
	            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	            // console.log('token', token, 'parsedInput', parsedInput,
	            //         'regex', getParseRegexForToken(token, config));
	            if (parsedInput) {
	                skipped = string.substr(0, string.indexOf(parsedInput));
	                if (skipped.length > 0) {
	                    getParsingFlags(config).unusedInput.push(skipped);
	                }
	                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	                totalParsedInputLength += parsedInput.length;
	            }
	            // don't parse if it's not a known token
	            if (formatTokenFunctions[token]) {
	                if (parsedInput) {
	                    getParsingFlags(config).empty = false;
	                }
	                else {
	                    getParsingFlags(config).unusedTokens.push(token);
	                }
	                addTimeToArrayFromToken(token, parsedInput, config);
	            }
	            else if (config._strict && !parsedInput) {
	                getParsingFlags(config).unusedTokens.push(token);
	            }
	        }
	
	        // add remaining unparsed input length to the string
	        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
	        if (string.length > 0) {
	            getParsingFlags(config).unusedInput.push(string);
	        }
	
	        // clear _12h flag if hour is <= 12
	        if (getParsingFlags(config).bigHour === true &&
	                config._a[HOUR] <= 12 &&
	                config._a[HOUR] > 0) {
	            getParsingFlags(config).bigHour = undefined;
	        }
	
	        getParsingFlags(config).parsedDateParts = config._a.slice(0);
	        getParsingFlags(config).meridiem = config._meridiem;
	        // handle meridiem
	        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
	
	        configFromArray(config);
	        checkOverflow(config);
	    }
	
	
	    function meridiemFixWrap (locale, hour, meridiem) {
	        var isPm;
	
	        if (meridiem == null) {
	            // nothing to do
	            return hour;
	        }
	        if (locale.meridiemHour != null) {
	            return locale.meridiemHour(hour, meridiem);
	        } else if (locale.isPM != null) {
	            // Fallback
	            isPm = locale.isPM(meridiem);
	            if (isPm && hour < 12) {
	                hour += 12;
	            }
	            if (!isPm && hour === 12) {
	                hour = 0;
	            }
	            return hour;
	        } else {
	            // this is not supposed to happen
	            return hour;
	        }
	    }
	
	    // date from string and array of format strings
	    function configFromStringAndArray(config) {
	        var tempConfig,
	            bestMoment,
	
	            scoreToBeat,
	            i,
	            currentScore;
	
	        if (config._f.length === 0) {
	            getParsingFlags(config).invalidFormat = true;
	            config._d = new Date(NaN);
	            return;
	        }
	
	        for (i = 0; i < config._f.length; i++) {
	            currentScore = 0;
	            tempConfig = copyConfig({}, config);
	            if (config._useUTC != null) {
	                tempConfig._useUTC = config._useUTC;
	            }
	            tempConfig._f = config._f[i];
	            configFromStringAndFormat(tempConfig);
	
	            if (!valid__isValid(tempConfig)) {
	                continue;
	            }
	
	            // if there is any input that was not parsed add a penalty for that format
	            currentScore += getParsingFlags(tempConfig).charsLeftOver;
	
	            //or tokens
	            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
	
	            getParsingFlags(tempConfig).score = currentScore;
	
	            if (scoreToBeat == null || currentScore < scoreToBeat) {
	                scoreToBeat = currentScore;
	                bestMoment = tempConfig;
	            }
	        }
	
	        extend(config, bestMoment || tempConfig);
	    }
	
	    function configFromObject(config) {
	        if (config._d) {
	            return;
	        }
	
	        var i = normalizeObjectUnits(config._i);
	        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
	            return obj && parseInt(obj, 10);
	        });
	
	        configFromArray(config);
	    }
	
	    function createFromConfig (config) {
	        var res = new Moment(checkOverflow(prepareConfig(config)));
	        if (res._nextDay) {
	            // Adding is smart enough around DST
	            res.add(1, 'd');
	            res._nextDay = undefined;
	        }
	
	        return res;
	    }
	
	    function prepareConfig (config) {
	        var input = config._i,
	            format = config._f;
	
	        config._locale = config._locale || locale_locales__getLocale(config._l);
	
	        if (input === null || (format === undefined && input === '')) {
	            return valid__createInvalid({nullInput: true});
	        }
	
	        if (typeof input === 'string') {
	            config._i = input = config._locale.preparse(input);
	        }
	
	        if (isMoment(input)) {
	            return new Moment(checkOverflow(input));
	        } else if (isArray(format)) {
	            configFromStringAndArray(config);
	        } else if (format) {
	            configFromStringAndFormat(config);
	        } else if (isDate(input)) {
	            config._d = input;
	        } else {
	            configFromInput(config);
	        }
	
	        if (!valid__isValid(config)) {
	            config._d = null;
	        }
	
	        return config;
	    }
	
	    function configFromInput(config) {
	        var input = config._i;
	        if (input === undefined) {
	            config._d = new Date(utils_hooks__hooks.now());
	        } else if (isDate(input)) {
	            config._d = new Date(input.valueOf());
	        } else if (typeof input === 'string') {
	            configFromString(config);
	        } else if (isArray(input)) {
	            config._a = map(input.slice(0), function (obj) {
	                return parseInt(obj, 10);
	            });
	            configFromArray(config);
	        } else if (typeof(input) === 'object') {
	            configFromObject(config);
	        } else if (typeof(input) === 'number') {
	            // from milliseconds
	            config._d = new Date(input);
	        } else {
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }
	
	    function createLocalOrUTC (input, format, locale, strict, isUTC) {
	        var c = {};
	
	        if (typeof(locale) === 'boolean') {
	            strict = locale;
	            locale = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c._isAMomentObject = true;
	        c._useUTC = c._isUTC = isUTC;
	        c._l = locale;
	        c._i = input;
	        c._f = format;
	        c._strict = strict;
	
	        return createFromConfig(c);
	    }
	
	    function local__createLocal (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, false);
	    }
	
	    var prototypeMin = deprecate(
	         'moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
	         function () {
	             var other = local__createLocal.apply(null, arguments);
	             if (this.isValid() && other.isValid()) {
	                 return other < this ? this : other;
	             } else {
	                 return valid__createInvalid();
	             }
	         }
	     );
	
	    var prototypeMax = deprecate(
	        'moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
	        function () {
	            var other = local__createLocal.apply(null, arguments);
	            if (this.isValid() && other.isValid()) {
	                return other > this ? this : other;
	            } else {
	                return valid__createInvalid();
	            }
	        }
	    );
	
	    // Pick a moment m from moments so that m[fn](other) is true for all
	    // other. This relies on the function fn to be transitive.
	    //
	    // moments should either be an array of moment objects or an array, whose
	    // first element is an array of moment objects.
	    function pickBy(fn, moments) {
	        var res, i;
	        if (moments.length === 1 && isArray(moments[0])) {
	            moments = moments[0];
	        }
	        if (!moments.length) {
	            return local__createLocal();
	        }
	        res = moments[0];
	        for (i = 1; i < moments.length; ++i) {
	            if (!moments[i].isValid() || moments[i][fn](res)) {
	                res = moments[i];
	            }
	        }
	        return res;
	    }
	
	    // TODO: Use [].sort instead?
	    function min () {
	        var args = [].slice.call(arguments, 0);
	
	        return pickBy('isBefore', args);
	    }
	
	    function max () {
	        var args = [].slice.call(arguments, 0);
	
	        return pickBy('isAfter', args);
	    }
	
	    var now = function () {
	        return Date.now ? Date.now() : +(new Date());
	    };
	
	    function Duration (duration) {
	        var normalizedInput = normalizeObjectUnits(duration),
	            years = normalizedInput.year || 0,
	            quarters = normalizedInput.quarter || 0,
	            months = normalizedInput.month || 0,
	            weeks = normalizedInput.week || 0,
	            days = normalizedInput.day || 0,
	            hours = normalizedInput.hour || 0,
	            minutes = normalizedInput.minute || 0,
	            seconds = normalizedInput.second || 0,
	            milliseconds = normalizedInput.millisecond || 0;
	
	        // representation for dateAddRemove
	        this._milliseconds = +milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = +days +
	            weeks * 7;
	        // It is impossible translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = +months +
	            quarters * 3 +
	            years * 12;
	
	        this._data = {};
	
	        this._locale = locale_locales__getLocale();
	
	        this._bubble();
	    }
	
	    function isDuration (obj) {
	        return obj instanceof Duration;
	    }
	
	    // FORMATTING
	
	    function offset (token, separator) {
	        addFormatToken(token, 0, 0, function () {
	            var offset = this.utcOffset();
	            var sign = '+';
	            if (offset < 0) {
	                offset = -offset;
	                sign = '-';
	            }
	            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
	        });
	    }
	
	    offset('Z', ':');
	    offset('ZZ', '');
	
	    // PARSING
	
	    addRegexToken('Z',  matchShortOffset);
	    addRegexToken('ZZ', matchShortOffset);
	    addParseToken(['Z', 'ZZ'], function (input, array, config) {
	        config._useUTC = true;
	        config._tzm = offsetFromString(matchShortOffset, input);
	    });
	
	    // HELPERS
	
	    // timezone chunker
	    // '+10:00' > ['10',  '00']
	    // '-1530'  > ['-15', '30']
	    var chunkOffset = /([\+\-]|\d\d)/gi;
	
	    function offsetFromString(matcher, string) {
	        var matches = ((string || '').match(matcher) || []);
	        var chunk   = matches[matches.length - 1] || [];
	        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
	        var minutes = +(parts[1] * 60) + toInt(parts[2]);
	
	        return parts[0] === '+' ? minutes : -minutes;
	    }
	
	    // Return a moment from input, that is local/utc/zone equivalent to model.
	    function cloneWithOffset(input, model) {
	        var res, diff;
	        if (model._isUTC) {
	            res = model.clone();
	            diff = (isMoment(input) || isDate(input) ? input.valueOf() : local__createLocal(input).valueOf()) - res.valueOf();
	            // Use low-level api, because this fn is low-level api.
	            res._d.setTime(res._d.valueOf() + diff);
	            utils_hooks__hooks.updateOffset(res, false);
	            return res;
	        } else {
	            return local__createLocal(input).local();
	        }
	    }
	
	    function getDateOffset (m) {
	        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	        // https://github.com/moment/moment/pull/1871
	        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
	    }
	
	    // HOOKS
	
	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    utils_hooks__hooks.updateOffset = function () {};
	
	    // MOMENTS
	
	    // keepLocalTime = true means only change the timezone, without
	    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	    // +0200, so we adjust the time as needed, to be valid.
	    //
	    // Keeping the time actually adds/subtracts (one hour)
	    // from the actual represented time. That is why we call updateOffset
	    // a second time. In case it wants us to change the offset again
	    // _changeInProgress == true case, then we have to adjust, because
	    // there is no such time in the given timezone.
	    function getSetOffset (input, keepLocalTime) {
	        var offset = this._offset || 0,
	            localAdjust;
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        if (input != null) {
	            if (typeof input === 'string') {
	                input = offsetFromString(matchShortOffset, input);
	            } else if (Math.abs(input) < 16) {
	                input = input * 60;
	            }
	            if (!this._isUTC && keepLocalTime) {
	                localAdjust = getDateOffset(this);
	            }
	            this._offset = input;
	            this._isUTC = true;
	            if (localAdjust != null) {
	                this.add(localAdjust, 'm');
	            }
	            if (offset !== input) {
	                if (!keepLocalTime || this._changeInProgress) {
	                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
	                } else if (!this._changeInProgress) {
	                    this._changeInProgress = true;
	                    utils_hooks__hooks.updateOffset(this, true);
	                    this._changeInProgress = null;
	                }
	            }
	            return this;
	        } else {
	            return this._isUTC ? offset : getDateOffset(this);
	        }
	    }
	
	    function getSetZone (input, keepLocalTime) {
	        if (input != null) {
	            if (typeof input !== 'string') {
	                input = -input;
	            }
	
	            this.utcOffset(input, keepLocalTime);
	
	            return this;
	        } else {
	            return -this.utcOffset();
	        }
	    }
	
	    function setOffsetToUTC (keepLocalTime) {
	        return this.utcOffset(0, keepLocalTime);
	    }
	
	    function setOffsetToLocal (keepLocalTime) {
	        if (this._isUTC) {
	            this.utcOffset(0, keepLocalTime);
	            this._isUTC = false;
	
	            if (keepLocalTime) {
	                this.subtract(getDateOffset(this), 'm');
	            }
	        }
	        return this;
	    }
	
	    function setOffsetToParsedOffset () {
	        if (this._tzm) {
	            this.utcOffset(this._tzm);
	        } else if (typeof this._i === 'string') {
	            this.utcOffset(offsetFromString(matchOffset, this._i));
	        }
	        return this;
	    }
	
	    function hasAlignedHourOffset (input) {
	        if (!this.isValid()) {
	            return false;
	        }
	        input = input ? local__createLocal(input).utcOffset() : 0;
	
	        return (this.utcOffset() - input) % 60 === 0;
	    }
	
	    function isDaylightSavingTime () {
	        return (
	            this.utcOffset() > this.clone().month(0).utcOffset() ||
	            this.utcOffset() > this.clone().month(5).utcOffset()
	        );
	    }
	
	    function isDaylightSavingTimeShifted () {
	        if (!isUndefined(this._isDSTShifted)) {
	            return this._isDSTShifted;
	        }
	
	        var c = {};
	
	        copyConfig(c, this);
	        c = prepareConfig(c);
	
	        if (c._a) {
	            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
	            this._isDSTShifted = this.isValid() &&
	                compareArrays(c._a, other.toArray()) > 0;
	        } else {
	            this._isDSTShifted = false;
	        }
	
	        return this._isDSTShifted;
	    }
	
	    function isLocal () {
	        return this.isValid() ? !this._isUTC : false;
	    }
	
	    function isUtcOffset () {
	        return this.isValid() ? this._isUTC : false;
	    }
	
	    function isUtc () {
	        return this.isValid() ? this._isUTC && this._offset === 0 : false;
	    }
	
	    // ASP.NET json date format regex
	    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;
	
	    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	    // and further modified to allow for strings containing both week and day
	    var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
	
	    function create__createDuration (input, key) {
	        var duration = input,
	            // matching against regexp is expensive, do it on demand
	            match = null,
	            sign,
	            ret,
	            diffRes;
	
	        if (isDuration(input)) {
	            duration = {
	                ms : input._milliseconds,
	                d  : input._days,
	                M  : input._months
	            };
	        } else if (typeof input === 'number') {
	            duration = {};
	            if (key) {
	                duration[key] = input;
	            } else {
	                duration.milliseconds = input;
	            }
	        } else if (!!(match = aspNetRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y  : 0,
	                d  : toInt(match[DATE])        * sign,
	                h  : toInt(match[HOUR])        * sign,
	                m  : toInt(match[MINUTE])      * sign,
	                s  : toInt(match[SECOND])      * sign,
	                ms : toInt(match[MILLISECOND]) * sign
	            };
	        } else if (!!(match = isoRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y : parseIso(match[2], sign),
	                M : parseIso(match[3], sign),
	                w : parseIso(match[4], sign),
	                d : parseIso(match[5], sign),
	                h : parseIso(match[6], sign),
	                m : parseIso(match[7], sign),
	                s : parseIso(match[8], sign)
	            };
	        } else if (duration == null) {// checks for null or undefined
	            duration = {};
	        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
	            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));
	
	            duration = {};
	            duration.ms = diffRes.milliseconds;
	            duration.M = diffRes.months;
	        }
	
	        ret = new Duration(duration);
	
	        if (isDuration(input) && hasOwnProp(input, '_locale')) {
	            ret._locale = input._locale;
	        }
	
	        return ret;
	    }
	
	    create__createDuration.fn = Duration.prototype;
	
	    function parseIso (inp, sign) {
	        // We'd normally use ~~inp for this, but unfortunately it also
	        // converts floats to ints.
	        // inp may be undefined, so careful calling replace on it.
	        var res = inp && parseFloat(inp.replace(',', '.'));
	        // apply sign while we're at it
	        return (isNaN(res) ? 0 : res) * sign;
	    }
	
	    function positiveMomentsDifference(base, other) {
	        var res = {milliseconds: 0, months: 0};
	
	        res.months = other.month() - base.month() +
	            (other.year() - base.year()) * 12;
	        if (base.clone().add(res.months, 'M').isAfter(other)) {
	            --res.months;
	        }
	
	        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));
	
	        return res;
	    }
	
	    function momentsDifference(base, other) {
	        var res;
	        if (!(base.isValid() && other.isValid())) {
	            return {milliseconds: 0, months: 0};
	        }
	
	        other = cloneWithOffset(other, base);
	        if (base.isBefore(other)) {
	            res = positiveMomentsDifference(base, other);
	        } else {
	            res = positiveMomentsDifference(other, base);
	            res.milliseconds = -res.milliseconds;
	            res.months = -res.months;
	        }
	
	        return res;
	    }
	
	    function absRound (number) {
	        if (number < 0) {
	            return Math.round(-1 * number) * -1;
	        } else {
	            return Math.round(number);
	        }
	    }
	
	    // TODO: remove 'name' arg after deprecation is removed
	    function createAdder(direction, name) {
	        return function (val, period) {
	            var dur, tmp;
	            //invert the arguments, but complain about it
	            if (period !== null && !isNaN(+period)) {
	                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
	                tmp = val; val = period; period = tmp;
	            }
	
	            val = typeof val === 'string' ? +val : val;
	            dur = create__createDuration(val, period);
	            add_subtract__addSubtract(this, dur, direction);
	            return this;
	        };
	    }
	
	    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = absRound(duration._days),
	            months = absRound(duration._months);
	
	        if (!mom.isValid()) {
	            // No op
	            return;
	        }
	
	        updateOffset = updateOffset == null ? true : updateOffset;
	
	        if (milliseconds) {
	            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
	        }
	        if (days) {
	            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
	        }
	        if (months) {
	            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
	        }
	        if (updateOffset) {
	            utils_hooks__hooks.updateOffset(mom, days || months);
	        }
	    }
	
	    var add_subtract__add      = createAdder(1, 'add');
	    var add_subtract__subtract = createAdder(-1, 'subtract');
	
	    function moment_calendar__calendar (time, formats) {
	        // We want to compare the start of today, vs this.
	        // Getting start-of-today depends on whether we're local/utc/offset or not.
	        var now = time || local__createLocal(),
	            sod = cloneWithOffset(now, this).startOf('day'),
	            diff = this.diff(sod, 'days', true),
	            format = diff < -6 ? 'sameElse' :
	                diff < -1 ? 'lastWeek' :
	                diff < 0 ? 'lastDay' :
	                diff < 1 ? 'sameDay' :
	                diff < 2 ? 'nextDay' :
	                diff < 7 ? 'nextWeek' : 'sameElse';
	
	        var output = formats && (isFunction(formats[format]) ? formats[format]() : formats[format]);
	
	        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
	    }
	
	    function clone () {
	        return new Moment(this);
	    }
	
	    function isAfter (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() > localInput.valueOf();
	        } else {
	            return localInput.valueOf() < this.clone().startOf(units).valueOf();
	        }
	    }
	
	    function isBefore (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() < localInput.valueOf();
	        } else {
	            return this.clone().endOf(units).valueOf() < localInput.valueOf();
	        }
	    }
	
	    function isBetween (from, to, units, inclusivity) {
	        inclusivity = inclusivity || '()';
	        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
	            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
	    }
	
	    function isSame (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input),
	            inputMs;
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(units || 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() === localInput.valueOf();
	        } else {
	            inputMs = localInput.valueOf();
	            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
	        }
	    }
	
	    function isSameOrAfter (input, units) {
	        return this.isSame(input, units) || this.isAfter(input,units);
	    }
	
	    function isSameOrBefore (input, units) {
	        return this.isSame(input, units) || this.isBefore(input,units);
	    }
	
	    function diff (input, units, asFloat) {
	        var that,
	            zoneDelta,
	            delta, output;
	
	        if (!this.isValid()) {
	            return NaN;
	        }
	
	        that = cloneWithOffset(input, this);
	
	        if (!that.isValid()) {
	            return NaN;
	        }
	
	        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
	
	        units = normalizeUnits(units);
	
	        if (units === 'year' || units === 'month' || units === 'quarter') {
	            output = monthDiff(this, that);
	            if (units === 'quarter') {
	                output = output / 3;
	            } else if (units === 'year') {
	                output = output / 12;
	            }
	        } else {
	            delta = this - that;
	            output = units === 'second' ? delta / 1e3 : // 1000
	                units === 'minute' ? delta / 6e4 : // 1000 * 60
	                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
	                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
	                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
	                delta;
	        }
	        return asFloat ? output : absFloor(output);
	    }
	
	    function monthDiff (a, b) {
	        // difference in months
	        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
	            // b is in (anchor - 1 month, anchor + 1 month)
	            anchor = a.clone().add(wholeMonthDiff, 'months'),
	            anchor2, adjust;
	
	        if (b - anchor < 0) {
	            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor - anchor2);
	        } else {
	            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor2 - anchor);
	        }
	
	        //check for negative zero, return zero if negative zero
	        return -(wholeMonthDiff + adjust) || 0;
	    }
	
	    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
	    utils_hooks__hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
	
	    function toString () {
	        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	    }
	
	    function moment_format__toISOString () {
	        var m = this.clone().utc();
	        if (0 < m.year() && m.year() <= 9999) {
	            if (isFunction(Date.prototype.toISOString)) {
	                // native implementation is ~50x faster, use it when we can
	                return this.toDate().toISOString();
	            } else {
	                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	            }
	        } else {
	            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	        }
	    }
	
	    function format (inputString) {
	        if (!inputString) {
	            inputString = this.isUtc() ? utils_hooks__hooks.defaultFormatUtc : utils_hooks__hooks.defaultFormat;
	        }
	        var output = formatMoment(this, inputString);
	        return this.localeData().postformat(output);
	    }
	
	    function from (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 local__createLocal(time).isValid())) {
	            return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }
	
	    function fromNow (withoutSuffix) {
	        return this.from(local__createLocal(), withoutSuffix);
	    }
	
	    function to (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 local__createLocal(time).isValid())) {
	            return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }
	
	    function toNow (withoutSuffix) {
	        return this.to(local__createLocal(), withoutSuffix);
	    }
	
	    // If passed a locale key, it will set the locale for this
	    // instance.  Otherwise, it will return the locale configuration
	    // variables for this instance.
	    function locale (key) {
	        var newLocaleData;
	
	        if (key === undefined) {
	            return this._locale._abbr;
	        } else {
	            newLocaleData = locale_locales__getLocale(key);
	            if (newLocaleData != null) {
	                this._locale = newLocaleData;
	            }
	            return this;
	        }
	    }
	
	    var lang = deprecate(
	        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	        function (key) {
	            if (key === undefined) {
	                return this.localeData();
	            } else {
	                return this.locale(key);
	            }
	        }
	    );
	
	    function localeData () {
	        return this._locale;
	    }
	
	    function startOf (units) {
	        units = normalizeUnits(units);
	        // the following switch intentionally omits break keywords
	        // to utilize falling through the cases.
	        switch (units) {
	        case 'year':
	            this.month(0);
	            /* falls through */
	        case 'quarter':
	        case 'month':
	            this.date(1);
	            /* falls through */
	        case 'week':
	        case 'isoWeek':
	        case 'day':
	        case 'date':
	            this.hours(0);
	            /* falls through */
	        case 'hour':
	            this.minutes(0);
	            /* falls through */
	        case 'minute':
	            this.seconds(0);
	            /* falls through */
	        case 'second':
	            this.milliseconds(0);
	        }
	
	        // weeks are a special case
	        if (units === 'week') {
	            this.weekday(0);
	        }
	        if (units === 'isoWeek') {
	            this.isoWeekday(1);
	        }
	
	        // quarters are also special
	        if (units === 'quarter') {
	            this.month(Math.floor(this.month() / 3) * 3);
	        }
	
	        return this;
	    }
	
	    function endOf (units) {
	        units = normalizeUnits(units);
	        if (units === undefined || units === 'millisecond') {
	            return this;
	        }
	
	        // 'date' is an alias for 'day', so it should be considered as such.
	        if (units === 'date') {
	            units = 'day';
	        }
	
	        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
	    }
	
	    function to_type__valueOf () {
	        return this._d.valueOf() - ((this._offset || 0) * 60000);
	    }
	
	    function unix () {
	        return Math.floor(this.valueOf() / 1000);
	    }
	
	    function toDate () {
	        return this._offset ? new Date(this.valueOf()) : this._d;
	    }
	
	    function toArray () {
	        var m = this;
	        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
	    }
	
	    function toObject () {
	        var m = this;
	        return {
	            years: m.year(),
	            months: m.month(),
	            date: m.date(),
	            hours: m.hours(),
	            minutes: m.minutes(),
	            seconds: m.seconds(),
	            milliseconds: m.milliseconds()
	        };
	    }
	
	    function toJSON () {
	        // new Date(NaN).toJSON() === null
	        return this.isValid() ? this.toISOString() : null;
	    }
	
	    function moment_valid__isValid () {
	        return valid__isValid(this);
	    }
	
	    function parsingFlags () {
	        return extend({}, getParsingFlags(this));
	    }
	
	    function invalidAt () {
	        return getParsingFlags(this).overflow;
	    }
	
	    function creationData() {
	        return {
	            input: this._i,
	            format: this._f,
	            locale: this._locale,
	            isUTC: this._isUTC,
	            strict: this._strict
	        };
	    }
	
	    // FORMATTING
	
	    addFormatToken(0, ['gg', 2], 0, function () {
	        return this.weekYear() % 100;
	    });
	
	    addFormatToken(0, ['GG', 2], 0, function () {
	        return this.isoWeekYear() % 100;
	    });
	
	    function addWeekYearFormatToken (token, getter) {
	        addFormatToken(0, [token, token.length], 0, getter);
	    }
	
	    addWeekYearFormatToken('gggg',     'weekYear');
	    addWeekYearFormatToken('ggggg',    'weekYear');
	    addWeekYearFormatToken('GGGG',  'isoWeekYear');
	    addWeekYearFormatToken('GGGGG', 'isoWeekYear');
	
	    // ALIASES
	
	    addUnitAlias('weekYear', 'gg');
	    addUnitAlias('isoWeekYear', 'GG');
	
	    // PARSING
	
	    addRegexToken('G',      matchSigned);
	    addRegexToken('g',      matchSigned);
	    addRegexToken('GG',     match1to2, match2);
	    addRegexToken('gg',     match1to2, match2);
	    addRegexToken('GGGG',   match1to4, match4);
	    addRegexToken('gggg',   match1to4, match4);
	    addRegexToken('GGGGG',  match1to6, match6);
	    addRegexToken('ggggg',  match1to6, match6);
	
	    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
	        week[token.substr(0, 2)] = toInt(input);
	    });
	
	    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
	        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });
	
	    // MOMENTS
	
	    function getSetWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input,
	                this.week(),
	                this.weekday(),
	                this.localeData()._week.dow,
	                this.localeData()._week.doy);
	    }
	
	    function getSetISOWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input, this.isoWeek(), this.isoWeekday(), 1, 4);
	    }
	
	    function getISOWeeksInYear () {
	        return weeksInYear(this.year(), 1, 4);
	    }
	
	    function getWeeksInYear () {
	        var weekInfo = this.localeData()._week;
	        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	    }
	
	    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
	        var weeksTarget;
	        if (input == null) {
	            return weekOfYear(this, dow, doy).year;
	        } else {
	            weeksTarget = weeksInYear(input, dow, doy);
	            if (week > weeksTarget) {
	                week = weeksTarget;
	            }
	            return setWeekAll.call(this, input, week, weekday, dow, doy);
	        }
	    }
	
	    function setWeekAll(weekYear, week, weekday, dow, doy) {
	        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
	            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
	
	        this.year(date.getUTCFullYear());
	        this.month(date.getUTCMonth());
	        this.date(date.getUTCDate());
	        return this;
	    }
	
	    // FORMATTING
	
	    addFormatToken('Q', 0, 'Qo', 'quarter');
	
	    // ALIASES
	
	    addUnitAlias('quarter', 'Q');
	
	    // PARSING
	
	    addRegexToken('Q', match1);
	    addParseToken('Q', function (input, array) {
	        array[MONTH] = (toInt(input) - 1) * 3;
	    });
	
	    // MOMENTS
	
	    function getSetQuarter (input) {
	        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	    }
	
	    // FORMATTING
	
	    addFormatToken('w', ['ww', 2], 'wo', 'week');
	    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');
	
	    // ALIASES
	
	    addUnitAlias('week', 'w');
	    addUnitAlias('isoWeek', 'W');
	
	    // PARSING
	
	    addRegexToken('w',  match1to2);
	    addRegexToken('ww', match1to2, match2);
	    addRegexToken('W',  match1to2);
	    addRegexToken('WW', match1to2, match2);
	
	    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
	        week[token.substr(0, 1)] = toInt(input);
	    });
	
	    // HELPERS
	
	    // LOCALES
	
	    function localeWeek (mom) {
	        return weekOfYear(mom, this._week.dow, this._week.doy).week;
	    }
	
	    var defaultLocaleWeek = {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    };
	
	    function localeFirstDayOfWeek () {
	        return this._week.dow;
	    }
	
	    function localeFirstDayOfYear () {
	        return this._week.doy;
	    }
	
	    // MOMENTS
	
	    function getSetWeek (input) {
	        var week = this.localeData().week(this);
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }
	
	    function getSetISOWeek (input) {
	        var week = weekOfYear(this, 1, 4).week;
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }
	
	    // FORMATTING
	
	    addFormatToken('D', ['DD', 2], 'Do', 'date');
	
	    // ALIASES
	
	    addUnitAlias('date', 'D');
	
	    // PARSING
	
	    addRegexToken('D',  match1to2);
	    addRegexToken('DD', match1to2, match2);
	    addRegexToken('Do', function (isStrict, locale) {
	        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
	    });
	
	    addParseToken(['D', 'DD'], DATE);
	    addParseToken('Do', function (input, array) {
	        array[DATE] = toInt(input.match(match1to2)[0], 10);
	    });
	
	    // MOMENTS
	
	    var getSetDayOfMonth = makeGetSet('Date', true);
	
	    // FORMATTING
	
	    addFormatToken('d', 0, 'do', 'day');
	
	    addFormatToken('dd', 0, 0, function (format) {
	        return this.localeData().weekdaysMin(this, format);
	    });
	
	    addFormatToken('ddd', 0, 0, function (format) {
	        return this.localeData().weekdaysShort(this, format);
	    });
	
	    addFormatToken('dddd', 0, 0, function (format) {
	        return this.localeData().weekdays(this, format);
	    });
	
	    addFormatToken('e', 0, 0, 'weekday');
	    addFormatToken('E', 0, 0, 'isoWeekday');
	
	    // ALIASES
	
	    addUnitAlias('day', 'd');
	    addUnitAlias('weekday', 'e');
	    addUnitAlias('isoWeekday', 'E');
	
	    // PARSING
	
	    addRegexToken('d',    match1to2);
	    addRegexToken('e',    match1to2);
	    addRegexToken('E',    match1to2);
	    addRegexToken('dd',   function (isStrict, locale) {
	        return locale.weekdaysMinRegex(isStrict);
	    });
	    addRegexToken('ddd',   function (isStrict, locale) {
	        return locale.weekdaysShortRegex(isStrict);
	    });
	    addRegexToken('dddd',   function (isStrict, locale) {
	        return locale.weekdaysRegex(isStrict);
	    });
	
	    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
	        var weekday = config._locale.weekdaysParse(input, token, config._strict);
	        // if we didn't get a weekday name, mark the date as invalid
	        if (weekday != null) {
	            week.d = weekday;
	        } else {
	            getParsingFlags(config).invalidWeekday = input;
	        }
	    });
	
	    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
	        week[token] = toInt(input);
	    });
	
	    // HELPERS
	
	    function parseWeekday(input, locale) {
	        if (typeof input !== 'string') {
	            return input;
	        }
	
	        if (!isNaN(input)) {
	            return parseInt(input, 10);
	        }
	
	        input = locale.weekdaysParse(input);
	        if (typeof input === 'number') {
	            return input;
	        }
	
	        return null;
	    }
	
	    // LOCALES
	
	    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
	    function localeWeekdays (m, format) {
	        return isArray(this._weekdays) ? this._weekdays[m.day()] :
	            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
	    }
	
	    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
	    function localeWeekdaysShort (m) {
	        return this._weekdaysShort[m.day()];
	    }
	
	    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
	    function localeWeekdaysMin (m) {
	        return this._weekdaysMin[m.day()];
	    }
	
	    function day_of_week__handleStrictParse(weekdayName, format, strict) {
	        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._minWeekdaysParse = [];
	
	            for (i = 0; i < 7; ++i) {
	                mom = create_utc__createUTC([2000, 1]).day(i);
	                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
	                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
	                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
	            }
	        }
	
	        if (strict) {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }
	
	    function localeWeekdaysParse (weekdayName, format, strict) {
	        var i, mom, regex;
	
	        if (this._weekdaysParseExact) {
	            return day_of_week__handleStrictParse.call(this, weekdayName, format, strict);
	        }
	
	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._minWeekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._fullWeekdaysParse = [];
	        }
	
	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	
	            mom = create_utc__createUTC([2000, 1]).day(i);
	            if (strict && !this._fullWeekdaysParse[i]) {
	                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
	                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
	                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
	            }
	            if (!this._weekdaysParse[i]) {
	                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
	                return i;
	            }
	        }
	    }
	
	    // MOMENTS
	
	    function getSetDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	        if (input != null) {
	            input = parseWeekday(input, this.localeData());
	            return this.add(input - day, 'd');
	        } else {
	            return day;
	        }
	    }
	
	    function getSetLocaleDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	        return input == null ? weekday : this.add(input - weekday, 'd');
	    }
	
	    function getSetISODayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        // behaves the same as moment#day except
	        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	        // as a setter, sunday should belong to the previous week.
	        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
	    }
	
	    var defaultWeekdaysRegex = matchWord;
	    function weekdaysRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysStrictRegex;
	            } else {
	                return this._weekdaysRegex;
	            }
	        } else {
	            return this._weekdaysStrictRegex && isStrict ?
	                this._weekdaysStrictRegex : this._weekdaysRegex;
	        }
	    }
	
	    var defaultWeekdaysShortRegex = matchWord;
	    function weekdaysShortRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysShortStrictRegex;
	            } else {
	                return this._weekdaysShortRegex;
	            }
	        } else {
	            return this._weekdaysShortStrictRegex && isStrict ?
	                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
	        }
	    }
	
	    var defaultWeekdaysMinRegex = matchWord;
	    function weekdaysMinRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysMinStrictRegex;
	            } else {
	                return this._weekdaysMinRegex;
	            }
	        } else {
	            return this._weekdaysMinStrictRegex && isStrict ?
	                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
	        }
	    }
	
	
	    function computeWeekdaysParse () {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }
	
	        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
	            i, mom, minp, shortp, longp;
	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, 1]).day(i);
	            minp = this.weekdaysMin(mom, '');
	            shortp = this.weekdaysShort(mom, '');
	            longp = this.weekdays(mom, '');
	            minPieces.push(minp);
	            shortPieces.push(shortp);
	            longPieces.push(longp);
	            mixedPieces.push(minp);
	            mixedPieces.push(shortp);
	            mixedPieces.push(longp);
	        }
	        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
	        // will match the longer piece.
	        minPieces.sort(cmpLenRev);
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 7; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }
	
	        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._weekdaysShortRegex = this._weekdaysRegex;
	        this._weekdaysMinRegex = this._weekdaysRegex;
	
	        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
	    }
	
	    // FORMATTING
	
	    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');
	
	    // ALIASES
	
	    addUnitAlias('dayOfYear', 'DDD');
	
	    // PARSING
	
	    addRegexToken('DDD',  match1to3);
	    addRegexToken('DDDD', match3);
	    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
	        config._dayOfYear = toInt(input);
	    });
	
	    // HELPERS
	
	    // MOMENTS
	
	    function getSetDayOfYear (input) {
	        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
	        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
	    }
	
	    // FORMATTING
	
	    function hFormat() {
	        return this.hours() % 12 || 12;
	    }
	
	    function kFormat() {
	        return this.hours() || 24;
	    }
	
	    addFormatToken('H', ['HH', 2], 0, 'hour');
	    addFormatToken('h', ['hh', 2], 0, hFormat);
	    addFormatToken('k', ['kk', 2], 0, kFormat);
	
	    addFormatToken('hmm', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
	    });
	
	    addFormatToken('hmmss', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });
	
	    addFormatToken('Hmm', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2);
	    });
	
	    addFormatToken('Hmmss', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });
	
	    function meridiem (token, lowercase) {
	        addFormatToken(token, 0, 0, function () {
	            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
	        });
	    }
	
	    meridiem('a', true);
	    meridiem('A', false);
	
	    // ALIASES
	
	    addUnitAlias('hour', 'h');
	
	    // PARSING
	
	    function matchMeridiem (isStrict, locale) {
	        return locale._meridiemParse;
	    }
	
	    addRegexToken('a',  matchMeridiem);
	    addRegexToken('A',  matchMeridiem);
	    addRegexToken('H',  match1to2);
	    addRegexToken('h',  match1to2);
	    addRegexToken('HH', match1to2, match2);
	    addRegexToken('hh', match1to2, match2);
	
	    addRegexToken('hmm', match3to4);
	    addRegexToken('hmmss', match5to6);
	    addRegexToken('Hmm', match3to4);
	    addRegexToken('Hmmss', match5to6);
	
	    addParseToken(['H', 'HH'], HOUR);
	    addParseToken(['a', 'A'], function (input, array, config) {
	        config._isPm = config._locale.isPM(input);
	        config._meridiem = input;
	    });
	    addParseToken(['h', 'hh'], function (input, array, config) {
	        array[HOUR] = toInt(input);
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('Hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	    });
	    addParseToken('Hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	    });
	
	    // LOCALES
	
	    function localeIsPM (input) {
	        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	        // Using charAt should be more compatible.
	        return ((input + '').toLowerCase().charAt(0) === 'p');
	    }
	
	    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
	    function localeMeridiem (hours, minutes, isLower) {
	        if (hours > 11) {
	            return isLower ? 'pm' : 'PM';
	        } else {
	            return isLower ? 'am' : 'AM';
	        }
	    }
	
	
	    // MOMENTS
	
	    // Setting the hour should keep the time, because the user explicitly
	    // specified which hour he wants. So trying to maintain the same hour (in
	    // a new timezone) makes sense. Adding/subtracting hours does not follow
	    // this rule.
	    var getSetHour = makeGetSet('Hours', true);
	
	    // FORMATTING
	
	    addFormatToken('m', ['mm', 2], 0, 'minute');
	
	    // ALIASES
	
	    addUnitAlias('minute', 'm');
	
	    // PARSING
	
	    addRegexToken('m',  match1to2);
	    addRegexToken('mm', match1to2, match2);
	    addParseToken(['m', 'mm'], MINUTE);
	
	    // MOMENTS
	
	    var getSetMinute = makeGetSet('Minutes', false);
	
	    // FORMATTING
	
	    addFormatToken('s', ['ss', 2], 0, 'second');
	
	    // ALIASES
	
	    addUnitAlias('second', 's');
	
	    // PARSING
	
	    addRegexToken('s',  match1to2);
	    addRegexToken('ss', match1to2, match2);
	    addParseToken(['s', 'ss'], SECOND);
	
	    // MOMENTS
	
	    var getSetSecond = makeGetSet('Seconds', false);
	
	    // FORMATTING
	
	    addFormatToken('S', 0, 0, function () {
	        return ~~(this.millisecond() / 100);
	    });
	
	    addFormatToken(0, ['SS', 2], 0, function () {
	        return ~~(this.millisecond() / 10);
	    });
	
	    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
	    addFormatToken(0, ['SSSS', 4], 0, function () {
	        return this.millisecond() * 10;
	    });
	    addFormatToken(0, ['SSSSS', 5], 0, function () {
	        return this.millisecond() * 100;
	    });
	    addFormatToken(0, ['SSSSSS', 6], 0, function () {
	        return this.millisecond() * 1000;
	    });
	    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
	        return this.millisecond() * 10000;
	    });
	    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
	        return this.millisecond() * 100000;
	    });
	    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
	        return this.millisecond() * 1000000;
	    });
	
	
	    // ALIASES
	
	    addUnitAlias('millisecond', 'ms');
	
	    // PARSING
	
	    addRegexToken('S',    match1to3, match1);
	    addRegexToken('SS',   match1to3, match2);
	    addRegexToken('SSS',  match1to3, match3);
	
	    var token;
	    for (token = 'SSSS'; token.length <= 9; token += 'S') {
	        addRegexToken(token, matchUnsigned);
	    }
	
	    function parseMs(input, array) {
	        array[MILLISECOND] = toInt(('0.' + input) * 1000);
	    }
	
	    for (token = 'S'; token.length <= 9; token += 'S') {
	        addParseToken(token, parseMs);
	    }
	    // MOMENTS
	
	    var getSetMillisecond = makeGetSet('Milliseconds', false);
	
	    // FORMATTING
	
	    addFormatToken('z',  0, 0, 'zoneAbbr');
	    addFormatToken('zz', 0, 0, 'zoneName');
	
	    // MOMENTS
	
	    function getZoneAbbr () {
	        return this._isUTC ? 'UTC' : '';
	    }
	
	    function getZoneName () {
	        return this._isUTC ? 'Coordinated Universal Time' : '';
	    }
	
	    var momentPrototype__proto = Moment.prototype;
	
	    momentPrototype__proto.add               = add_subtract__add;
	    momentPrototype__proto.calendar          = moment_calendar__calendar;
	    momentPrototype__proto.clone             = clone;
	    momentPrototype__proto.diff              = diff;
	    momentPrototype__proto.endOf             = endOf;
	    momentPrototype__proto.format            = format;
	    momentPrototype__proto.from              = from;
	    momentPrototype__proto.fromNow           = fromNow;
	    momentPrototype__proto.to                = to;
	    momentPrototype__proto.toNow             = toNow;
	    momentPrototype__proto.get               = getSet;
	    momentPrototype__proto.invalidAt         = invalidAt;
	    momentPrototype__proto.isAfter           = isAfter;
	    momentPrototype__proto.isBefore          = isBefore;
	    momentPrototype__proto.isBetween         = isBetween;
	    momentPrototype__proto.isSame            = isSame;
	    momentPrototype__proto.isSameOrAfter     = isSameOrAfter;
	    momentPrototype__proto.isSameOrBefore    = isSameOrBefore;
	    momentPrototype__proto.isValid           = moment_valid__isValid;
	    momentPrototype__proto.lang              = lang;
	    momentPrototype__proto.locale            = locale;
	    momentPrototype__proto.localeData        = localeData;
	    momentPrototype__proto.max               = prototypeMax;
	    momentPrototype__proto.min               = prototypeMin;
	    momentPrototype__proto.parsingFlags      = parsingFlags;
	    momentPrototype__proto.set               = getSet;
	    momentPrototype__proto.startOf           = startOf;
	    momentPrototype__proto.subtract          = add_subtract__subtract;
	    momentPrototype__proto.toArray           = toArray;
	    momentPrototype__proto.toObject          = toObject;
	    momentPrototype__proto.toDate            = toDate;
	    momentPrototype__proto.toISOString       = moment_format__toISOString;
	    momentPrototype__proto.toJSON            = toJSON;
	    momentPrototype__proto.toString          = toString;
	    momentPrototype__proto.unix              = unix;
	    momentPrototype__proto.valueOf           = to_type__valueOf;
	    momentPrototype__proto.creationData      = creationData;
	
	    // Year
	    momentPrototype__proto.year       = getSetYear;
	    momentPrototype__proto.isLeapYear = getIsLeapYear;
	
	    // Week Year
	    momentPrototype__proto.weekYear    = getSetWeekYear;
	    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;
	
	    // Quarter
	    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;
	
	    // Month
	    momentPrototype__proto.month       = getSetMonth;
	    momentPrototype__proto.daysInMonth = getDaysInMonth;
	
	    // Week
	    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
	    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
	    momentPrototype__proto.weeksInYear    = getWeeksInYear;
	    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;
	
	    // Day
	    momentPrototype__proto.date       = getSetDayOfMonth;
	    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
	    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
	    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
	    momentPrototype__proto.dayOfYear  = getSetDayOfYear;
	
	    // Hour
	    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;
	
	    // Minute
	    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;
	
	    // Second
	    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;
	
	    // Millisecond
	    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;
	
	    // Offset
	    momentPrototype__proto.utcOffset            = getSetOffset;
	    momentPrototype__proto.utc                  = setOffsetToUTC;
	    momentPrototype__proto.local                = setOffsetToLocal;
	    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
	    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
	    momentPrototype__proto.isDST                = isDaylightSavingTime;
	    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;
	    momentPrototype__proto.isLocal              = isLocal;
	    momentPrototype__proto.isUtcOffset          = isUtcOffset;
	    momentPrototype__proto.isUtc                = isUtc;
	    momentPrototype__proto.isUTC                = isUtc;
	
	    // Timezone
	    momentPrototype__proto.zoneAbbr = getZoneAbbr;
	    momentPrototype__proto.zoneName = getZoneName;
	
	    // Deprecations
	    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
	    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
	    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
	    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);
	
	    var momentPrototype = momentPrototype__proto;
	
	    function moment__createUnix (input) {
	        return local__createLocal(input * 1000);
	    }
	
	    function moment__createInZone () {
	        return local__createLocal.apply(null, arguments).parseZone();
	    }
	
	    var defaultCalendar = {
	        sameDay : '[Today at] LT',
	        nextDay : '[Tomorrow at] LT',
	        nextWeek : 'dddd [at] LT',
	        lastDay : '[Yesterday at] LT',
	        lastWeek : '[Last] dddd [at] LT',
	        sameElse : 'L'
	    };
	
	    function locale_calendar__calendar (key, mom, now) {
	        var output = this._calendar[key];
	        return isFunction(output) ? output.call(mom, now) : output;
	    }
	
	    var defaultLongDateFormat = {
	        LTS  : 'h:mm:ss A',
	        LT   : 'h:mm A',
	        L    : 'MM/DD/YYYY',
	        LL   : 'MMMM D, YYYY',
	        LLL  : 'MMMM D, YYYY h:mm A',
	        LLLL : 'dddd, MMMM D, YYYY h:mm A'
	    };
	
	    function longDateFormat (key) {
	        var format = this._longDateFormat[key],
	            formatUpper = this._longDateFormat[key.toUpperCase()];
	
	        if (format || !formatUpper) {
	            return format;
	        }
	
	        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
	            return val.slice(1);
	        });
	
	        return this._longDateFormat[key];
	    }
	
	    var defaultInvalidDate = 'Invalid date';
	
	    function invalidDate () {
	        return this._invalidDate;
	    }
	
	    var defaultOrdinal = '%d';
	    var defaultOrdinalParse = /\d{1,2}/;
	
	    function ordinal (number) {
	        return this._ordinal.replace('%d', number);
	    }
	
	    function preParsePostFormat (string) {
	        return string;
	    }
	
	    var defaultRelativeTime = {
	        future : 'in %s',
	        past   : '%s ago',
	        s  : 'a few seconds',
	        m  : 'a minute',
	        mm : '%d minutes',
	        h  : 'an hour',
	        hh : '%d hours',
	        d  : 'a day',
	        dd : '%d days',
	        M  : 'a month',
	        MM : '%d months',
	        y  : 'a year',
	        yy : '%d years'
	    };
	
	    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
	        var output = this._relativeTime[string];
	        return (isFunction(output)) ?
	            output(number, withoutSuffix, string, isFuture) :
	            output.replace(/%d/i, number);
	    }
	
	    function pastFuture (diff, output) {
	        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
	    }
	
	    var prototype__proto = Locale.prototype;
	
	    prototype__proto._calendar       = defaultCalendar;
	    prototype__proto.calendar        = locale_calendar__calendar;
	    prototype__proto._longDateFormat = defaultLongDateFormat;
	    prototype__proto.longDateFormat  = longDateFormat;
	    prototype__proto._invalidDate    = defaultInvalidDate;
	    prototype__proto.invalidDate     = invalidDate;
	    prototype__proto._ordinal        = defaultOrdinal;
	    prototype__proto.ordinal         = ordinal;
	    prototype__proto._ordinalParse   = defaultOrdinalParse;
	    prototype__proto.preparse        = preParsePostFormat;
	    prototype__proto.postformat      = preParsePostFormat;
	    prototype__proto._relativeTime   = defaultRelativeTime;
	    prototype__proto.relativeTime    = relative__relativeTime;
	    prototype__proto.pastFuture      = pastFuture;
	    prototype__proto.set             = locale_set__set;
	
	    // Month
	    prototype__proto.months            =        localeMonths;
	    prototype__proto._months           = defaultLocaleMonths;
	    prototype__proto.monthsShort       =        localeMonthsShort;
	    prototype__proto._monthsShort      = defaultLocaleMonthsShort;
	    prototype__proto.monthsParse       =        localeMonthsParse;
	    prototype__proto._monthsRegex      = defaultMonthsRegex;
	    prototype__proto.monthsRegex       = monthsRegex;
	    prototype__proto._monthsShortRegex = defaultMonthsShortRegex;
	    prototype__proto.monthsShortRegex  = monthsShortRegex;
	
	    // Week
	    prototype__proto.week = localeWeek;
	    prototype__proto._week = defaultLocaleWeek;
	    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
	    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;
	
	    // Day of Week
	    prototype__proto.weekdays       =        localeWeekdays;
	    prototype__proto._weekdays      = defaultLocaleWeekdays;
	    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
	    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;
	    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
	    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
	    prototype__proto.weekdaysParse  =        localeWeekdaysParse;
	
	    prototype__proto._weekdaysRegex      = defaultWeekdaysRegex;
	    prototype__proto.weekdaysRegex       =        weekdaysRegex;
	    prototype__proto._weekdaysShortRegex = defaultWeekdaysShortRegex;
	    prototype__proto.weekdaysShortRegex  =        weekdaysShortRegex;
	    prototype__proto._weekdaysMinRegex   = defaultWeekdaysMinRegex;
	    prototype__proto.weekdaysMinRegex    =        weekdaysMinRegex;
	
	    // Hours
	    prototype__proto.isPM = localeIsPM;
	    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
	    prototype__proto.meridiem = localeMeridiem;
	
	    function lists__get (format, index, field, setter) {
	        var locale = locale_locales__getLocale();
	        var utc = create_utc__createUTC().set(setter, index);
	        return locale[field](utc, format);
	    }
	
	    function listMonthsImpl (format, index, field) {
	        if (typeof format === 'number') {
	            index = format;
	            format = undefined;
	        }
	
	        format = format || '';
	
	        if (index != null) {
	            return lists__get(format, index, field, 'month');
	        }
	
	        var i;
	        var out = [];
	        for (i = 0; i < 12; i++) {
	            out[i] = lists__get(format, i, field, 'month');
	        }
	        return out;
	    }
	
	    // ()
	    // (5)
	    // (fmt, 5)
	    // (fmt)
	    // (true)
	    // (true, 5)
	    // (true, fmt, 5)
	    // (true, fmt)
	    function listWeekdaysImpl (localeSorted, format, index, field) {
	        if (typeof localeSorted === 'boolean') {
	            if (typeof format === 'number') {
	                index = format;
	                format = undefined;
	            }
	
	            format = format || '';
	        } else {
	            format = localeSorted;
	            index = format;
	            localeSorted = false;
	
	            if (typeof format === 'number') {
	                index = format;
	                format = undefined;
	            }
	
	            format = format || '';
	        }
	
	        var locale = locale_locales__getLocale(),
	            shift = localeSorted ? locale._week.dow : 0;
	
	        if (index != null) {
	            return lists__get(format, (index + shift) % 7, field, 'day');
	        }
	
	        var i;
	        var out = [];
	        for (i = 0; i < 7; i++) {
	            out[i] = lists__get(format, (i + shift) % 7, field, 'day');
	        }
	        return out;
	    }
	
	    function lists__listMonths (format, index) {
	        return listMonthsImpl(format, index, 'months');
	    }
	
	    function lists__listMonthsShort (format, index) {
	        return listMonthsImpl(format, index, 'monthsShort');
	    }
	
	    function lists__listWeekdays (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
	    }
	
	    function lists__listWeekdaysShort (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
	    }
	
	    function lists__listWeekdaysMin (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
	    }
	
	    locale_locales__getSetGlobalLocale('en', {
	        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (toInt(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });
	
	    // Side effect imports
	    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
	    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);
	
	    var mathAbs = Math.abs;
	
	    function duration_abs__abs () {
	        var data           = this._data;
	
	        this._milliseconds = mathAbs(this._milliseconds);
	        this._days         = mathAbs(this._days);
	        this._months       = mathAbs(this._months);
	
	        data.milliseconds  = mathAbs(data.milliseconds);
	        data.seconds       = mathAbs(data.seconds);
	        data.minutes       = mathAbs(data.minutes);
	        data.hours         = mathAbs(data.hours);
	        data.months        = mathAbs(data.months);
	        data.years         = mathAbs(data.years);
	
	        return this;
	    }
	
	    function duration_add_subtract__addSubtract (duration, input, value, direction) {
	        var other = create__createDuration(input, value);
	
	        duration._milliseconds += direction * other._milliseconds;
	        duration._days         += direction * other._days;
	        duration._months       += direction * other._months;
	
	        return duration._bubble();
	    }
	
	    // supports only 2.0-style add(1, 's') or add(duration)
	    function duration_add_subtract__add (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, 1);
	    }
	
	    // supports only 2.0-style subtract(1, 's') or subtract(duration)
	    function duration_add_subtract__subtract (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, -1);
	    }
	
	    function absCeil (number) {
	        if (number < 0) {
	            return Math.floor(number);
	        } else {
	            return Math.ceil(number);
	        }
	    }
	
	    function bubble () {
	        var milliseconds = this._milliseconds;
	        var days         = this._days;
	        var months       = this._months;
	        var data         = this._data;
	        var seconds, minutes, hours, years, monthsFromDays;
	
	        // if we have a mix of positive and negative values, bubble down first
	        // check: https://github.com/moment/moment/issues/2166
	        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
	                (milliseconds <= 0 && days <= 0 && months <= 0))) {
	            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
	            days = 0;
	            months = 0;
	        }
	
	        // The following code bubbles up values, see the tests for
	        // examples of what that means.
	        data.milliseconds = milliseconds % 1000;
	
	        seconds           = absFloor(milliseconds / 1000);
	        data.seconds      = seconds % 60;
	
	        minutes           = absFloor(seconds / 60);
	        data.minutes      = minutes % 60;
	
	        hours             = absFloor(minutes / 60);
	        data.hours        = hours % 24;
	
	        days += absFloor(hours / 24);
	
	        // convert days to months
	        monthsFromDays = absFloor(daysToMonths(days));
	        months += monthsFromDays;
	        days -= absCeil(monthsToDays(monthsFromDays));
	
	        // 12 months -> 1 year
	        years = absFloor(months / 12);
	        months %= 12;
	
	        data.days   = days;
	        data.months = months;
	        data.years  = years;
	
	        return this;
	    }
	
	    function daysToMonths (days) {
	        // 400 years have 146097 days (taking into account leap year rules)
	        // 400 years have 12 months === 4800
	        return days * 4800 / 146097;
	    }
	
	    function monthsToDays (months) {
	        // the reverse of daysToMonths
	        return months * 146097 / 4800;
	    }
	
	    function as (units) {
	        var days;
	        var months;
	        var milliseconds = this._milliseconds;
	
	        units = normalizeUnits(units);
	
	        if (units === 'month' || units === 'year') {
	            days   = this._days   + milliseconds / 864e5;
	            months = this._months + daysToMonths(days);
	            return units === 'month' ? months : months / 12;
	        } else {
	            // handle milliseconds separately because of floating point math errors (issue #1867)
	            days = this._days + Math.round(monthsToDays(this._months));
	            switch (units) {
	                case 'week'   : return days / 7     + milliseconds / 6048e5;
	                case 'day'    : return days         + milliseconds / 864e5;
	                case 'hour'   : return days * 24    + milliseconds / 36e5;
	                case 'minute' : return days * 1440  + milliseconds / 6e4;
	                case 'second' : return days * 86400 + milliseconds / 1000;
	                // Math.floor prevents floating point math errors here
	                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
	                default: throw new Error('Unknown unit ' + units);
	            }
	        }
	    }
	
	    // TODO: Use this.as('ms')?
	    function duration_as__valueOf () {
	        return (
	            this._milliseconds +
	            this._days * 864e5 +
	            (this._months % 12) * 2592e6 +
	            toInt(this._months / 12) * 31536e6
	        );
	    }
	
	    function makeAs (alias) {
	        return function () {
	            return this.as(alias);
	        };
	    }
	
	    var asMilliseconds = makeAs('ms');
	    var asSeconds      = makeAs('s');
	    var asMinutes      = makeAs('m');
	    var asHours        = makeAs('h');
	    var asDays         = makeAs('d');
	    var asWeeks        = makeAs('w');
	    var asMonths       = makeAs('M');
	    var asYears        = makeAs('y');
	
	    function duration_get__get (units) {
	        units = normalizeUnits(units);
	        return this[units + 's']();
	    }
	
	    function makeGetter(name) {
	        return function () {
	            return this._data[name];
	        };
	    }
	
	    var milliseconds = makeGetter('milliseconds');
	    var seconds      = makeGetter('seconds');
	    var minutes      = makeGetter('minutes');
	    var hours        = makeGetter('hours');
	    var days         = makeGetter('days');
	    var months       = makeGetter('months');
	    var years        = makeGetter('years');
	
	    function weeks () {
	        return absFloor(this.days() / 7);
	    }
	
	    var round = Math.round;
	    var thresholds = {
	        s: 45,  // seconds to minute
	        m: 45,  // minutes to hour
	        h: 22,  // hours to day
	        d: 26,  // days to month
	        M: 11   // months to year
	    };
	
	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }
	
	    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
	        var duration = create__createDuration(posNegDuration).abs();
	        var seconds  = round(duration.as('s'));
	        var minutes  = round(duration.as('m'));
	        var hours    = round(duration.as('h'));
	        var days     = round(duration.as('d'));
	        var months   = round(duration.as('M'));
	        var years    = round(duration.as('y'));
	
	        var a = seconds < thresholds.s && ['s', seconds]  ||
	                minutes <= 1           && ['m']           ||
	                minutes < thresholds.m && ['mm', minutes] ||
	                hours   <= 1           && ['h']           ||
	                hours   < thresholds.h && ['hh', hours]   ||
	                days    <= 1           && ['d']           ||
	                days    < thresholds.d && ['dd', days]    ||
	                months  <= 1           && ['M']           ||
	                months  < thresholds.M && ['MM', months]  ||
	                years   <= 1           && ['y']           || ['yy', years];
	
	        a[2] = withoutSuffix;
	        a[3] = +posNegDuration > 0;
	        a[4] = locale;
	        return substituteTimeAgo.apply(null, a);
	    }
	
	    // This function allows you to set a threshold for relative time strings
	    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
	        if (thresholds[threshold] === undefined) {
	            return false;
	        }
	        if (limit === undefined) {
	            return thresholds[threshold];
	        }
	        thresholds[threshold] = limit;
	        return true;
	    }
	
	    function humanize (withSuffix) {
	        var locale = this.localeData();
	        var output = duration_humanize__relativeTime(this, !withSuffix, locale);
	
	        if (withSuffix) {
	            output = locale.pastFuture(+this, output);
	        }
	
	        return locale.postformat(output);
	    }
	
	    var iso_string__abs = Math.abs;
	
	    function iso_string__toISOString() {
	        // for ISO strings we do not use the normal bubbling rules:
	        //  * milliseconds bubble up until they become hours
	        //  * days do not bubble at all
	        //  * months bubble up until they become years
	        // This is because there is no context-free conversion between hours and days
	        // (think of clock changes)
	        // and also not between days and months (28-31 days per month)
	        var seconds = iso_string__abs(this._milliseconds) / 1000;
	        var days         = iso_string__abs(this._days);
	        var months       = iso_string__abs(this._months);
	        var minutes, hours, years;
	
	        // 3600 seconds -> 60 minutes -> 1 hour
	        minutes           = absFloor(seconds / 60);
	        hours             = absFloor(minutes / 60);
	        seconds %= 60;
	        minutes %= 60;
	
	        // 12 months -> 1 year
	        years  = absFloor(months / 12);
	        months %= 12;
	
	
	        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	        var Y = years;
	        var M = months;
	        var D = days;
	        var h = hours;
	        var m = minutes;
	        var s = seconds;
	        var total = this.asSeconds();
	
	        if (!total) {
	            // this is the same as C#'s (Noda) and python (isodate)...
	            // but not other JS (goog.date)
	            return 'P0D';
	        }
	
	        return (total < 0 ? '-' : '') +
	            'P' +
	            (Y ? Y + 'Y' : '') +
	            (M ? M + 'M' : '') +
	            (D ? D + 'D' : '') +
	            ((h || m || s) ? 'T' : '') +
	            (h ? h + 'H' : '') +
	            (m ? m + 'M' : '') +
	            (s ? s + 'S' : '');
	    }
	
	    var duration_prototype__proto = Duration.prototype;
	
	    duration_prototype__proto.abs            = duration_abs__abs;
	    duration_prototype__proto.add            = duration_add_subtract__add;
	    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
	    duration_prototype__proto.as             = as;
	    duration_prototype__proto.asMilliseconds = asMilliseconds;
	    duration_prototype__proto.asSeconds      = asSeconds;
	    duration_prototype__proto.asMinutes      = asMinutes;
	    duration_prototype__proto.asHours        = asHours;
	    duration_prototype__proto.asDays         = asDays;
	    duration_prototype__proto.asWeeks        = asWeeks;
	    duration_prototype__proto.asMonths       = asMonths;
	    duration_prototype__proto.asYears        = asYears;
	    duration_prototype__proto.valueOf        = duration_as__valueOf;
	    duration_prototype__proto._bubble        = bubble;
	    duration_prototype__proto.get            = duration_get__get;
	    duration_prototype__proto.milliseconds   = milliseconds;
	    duration_prototype__proto.seconds        = seconds;
	    duration_prototype__proto.minutes        = minutes;
	    duration_prototype__proto.hours          = hours;
	    duration_prototype__proto.days           = days;
	    duration_prototype__proto.weeks          = weeks;
	    duration_prototype__proto.months         = months;
	    duration_prototype__proto.years          = years;
	    duration_prototype__proto.humanize       = humanize;
	    duration_prototype__proto.toISOString    = iso_string__toISOString;
	    duration_prototype__proto.toString       = iso_string__toISOString;
	    duration_prototype__proto.toJSON         = iso_string__toISOString;
	    duration_prototype__proto.locale         = locale;
	    duration_prototype__proto.localeData     = localeData;
	
	    // Deprecations
	    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
	    duration_prototype__proto.lang = lang;
	
	    // Side effect imports
	
	    // FORMATTING
	
	    addFormatToken('X', 0, 0, 'unix');
	    addFormatToken('x', 0, 0, 'valueOf');
	
	    // PARSING
	
	    addRegexToken('x', matchSigned);
	    addRegexToken('X', matchTimestamp);
	    addParseToken('X', function (input, array, config) {
	        config._d = new Date(parseFloat(input, 10) * 1000);
	    });
	    addParseToken('x', function (input, array, config) {
	        config._d = new Date(toInt(input));
	    });
	
	    // Side effect imports
	
	
	    utils_hooks__hooks.version = '2.13.0';
	
	    setHookCallback(local__createLocal);
	
	    utils_hooks__hooks.fn                    = momentPrototype;
	    utils_hooks__hooks.min                   = min;
	    utils_hooks__hooks.max                   = max;
	    utils_hooks__hooks.now                   = now;
	    utils_hooks__hooks.utc                   = create_utc__createUTC;
	    utils_hooks__hooks.unix                  = moment__createUnix;
	    utils_hooks__hooks.months                = lists__listMonths;
	    utils_hooks__hooks.isDate                = isDate;
	    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
	    utils_hooks__hooks.invalid               = valid__createInvalid;
	    utils_hooks__hooks.duration              = create__createDuration;
	    utils_hooks__hooks.isMoment              = isMoment;
	    utils_hooks__hooks.weekdays              = lists__listWeekdays;
	    utils_hooks__hooks.parseZone             = moment__createInZone;
	    utils_hooks__hooks.localeData            = locale_locales__getLocale;
	    utils_hooks__hooks.isDuration            = isDuration;
	    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
	    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
	    utils_hooks__hooks.defineLocale          = defineLocale;
	    utils_hooks__hooks.updateLocale          = updateLocale;
	    utils_hooks__hooks.locales               = locale_locales__listLocales;
	    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
	    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
	    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
	    utils_hooks__hooks.prototype             = momentPrototype;
	
	    var _moment = utils_hooks__hooks;
	
	    return _moment;
	
	}));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(136)(module)))

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_PROVIDERS = exports.NOVO_ELEMENTS = undefined;
	
	var _button = __webpack_require__(74);
	
	Object.keys(_button).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _button[key];
	        }
	    });
	});
	
	var _tabs = __webpack_require__(466);
	
	Object.keys(_tabs).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _tabs[key];
	        }
	    });
	});
	
	var _toast = __webpack_require__(470);
	
	Object.keys(_toast).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _toast[key];
	        }
	    });
	});
	
	var _switch = __webpack_require__(456);
	
	Object.keys(_switch).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _switch[key];
	        }
	    });
	});
	
	var _card = __webpack_require__(439);
	
	Object.keys(_card).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _card[key];
	        }
	    });
	});
	
	var _loading = __webpack_require__(224);
	
	Object.keys(_loading).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _loading[key];
	        }
	    });
	});
	
	var _select = __webpack_require__(225);
	
	Object.keys(_select).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _select[key];
	        }
	    });
	});
	
	var _dropdown = __webpack_require__(223);
	
	Object.keys(_dropdown).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _dropdown[key];
	        }
	    });
	});
	
	var _tooltip = __webpack_require__(473);
	
	Object.keys(_tooltip).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _tooltip[key];
	        }
	    });
	});
	
	var _drawer = __webpack_require__(447);
	
	Object.keys(_drawer).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _drawer[key];
	        }
	    });
	});
	Object.keys(_switch).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _switch[key];
	        }
	    });
	});
	
	var _datepicker = __webpack_require__(446);
	
	Object.keys(_datepicker).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _datepicker[key];
	        }
	    });
	});
	
	var _timepicker = __webpack_require__(469);
	
	Object.keys(_timepicker).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _timepicker[key];
	        }
	    });
	});
	
	var _header = __webpack_require__(450);
	
	Object.keys(_header).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _header[key];
	        }
	    });
	});
	
	var _list = __webpack_require__(452);
	
	Object.keys(_list).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _list[key];
	        }
	    });
	});
	
	var _table = __webpack_require__(458);
	
	Object.keys(_table).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _table[key];
	        }
	    });
	});
	
	var _Plural = __webpack_require__(475);
	
	Object.keys(_Plural).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _Plural[key];
	        }
	    });
	});
	
	var _OutsideClick = __webpack_require__(132);
	
	Object.keys(_OutsideClick).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _OutsideClick[key];
	        }
	    });
	});
	
	var _KeyCodes = __webpack_require__(75);
	
	Object.keys(_KeyCodes).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _KeyCodes[key];
	        }
	    });
	});
	
	var _Deferred = __webpack_require__(476);
	
	Object.keys(_Deferred).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _Deferred[key];
	        }
	    });
	});
	
	var _Helpers = __webpack_require__(131);
	
	Object.keys(_Helpers).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _Helpers[key];
	        }
	    });
	});
	
	
	// Utils
	var NOVO_ELEMENTS = exports.NOVO_ELEMENTS = [_button.NOVO_BUTTON_ELEMENTS, _tabs.NOVO_TAB_ELEMENTS, _toast.NOVO_TOAST_ELEMENTS, _switch.NOVO_SWITCH_ELEMENTS, _card.NOVO_CARD_ELEMENTS, _card.NOVO_CARD_EXTRA_ELEMENTS, _loading.NOVO_LOADING_ELEMENTS, _select.NOVO_SELECT_ELEMENTS, _dropdown.NOVO_DROPDOWN_ELEMENTS, _tooltip.NOVO_TOOLTIP_ELEMENTS, _drawer.NOVO_DRAWER_ELEMENTS, _header.NOVO_HEADER_ELEMENTS, _list.NOVO_LIST_ELEMENTS, _table.NOVO_TABLE_ELEMENTS, _table.NOVO_TABLE_EXTRA_ELEMENTS, _drawer.NOVO_DRAWER_ELEMENTS, _datepicker.NOVO_DATE_PICKER_ELEMENTS, _timepicker.NOVO_TIME_PICKER_ELEMENTS];
	
	// Pipes
	
	
	// Elements
	
	
	var NOVO_PROVIDERS = exports.NOVO_PROVIDERS = [_toast.TOAST_PROVIDERS];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9ub3ZvLWVsZW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWhCQTs7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWhCQTs7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWhCQTs7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWhCQTs7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWhCQTs7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWRBOztBQWVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFaQTs7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbEJBOztBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbEJBOztBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbEJBOztBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbEJBOztBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBakJBOztBQWtCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBakJBOztBQWtCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBakJBOztBQWtCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFFTyxJQUFNLHdDQUFnQiwyaUJBQXRCOzs7Ozs7OztBQXFCQSxJQUFNLDBDQUFpQix3QkFBdkIiLCJmaWxlIjoibm92by1lbGVtZW50cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOT1ZPX0JVVFRPTl9FTEVNRU5UUyB9IGZyb20gJy4vZWxlbWVudHMvYnV0dG9uJztcbmltcG9ydCB7IE5PVk9fVEFCX0VMRU1FTlRTIH0gZnJvbSAnLi9lbGVtZW50cy90YWJzJztcbmltcG9ydCB7IE5PVk9fVE9BU1RfRUxFTUVOVFMsIFRPQVNUX1BST1ZJREVSUyB9IGZyb20gJy4vZWxlbWVudHMvdG9hc3QnO1xuaW1wb3J0IHsgTk9WT19TV0lUQ0hfRUxFTUVOVFMgfSBmcm9tICcuL2VsZW1lbnRzL3N3aXRjaCc7XG5pbXBvcnQgeyBOT1ZPX0NBUkRfRUxFTUVOVFMsIE5PVk9fQ0FSRF9FWFRSQV9FTEVNRU5UUyB9IGZyb20gJy4vZWxlbWVudHMvY2FyZCc7XG5pbXBvcnQgeyBOT1ZPX0xPQURJTkdfRUxFTUVOVFMgfSBmcm9tICcuL2VsZW1lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IHsgTk9WT19UT09MVElQX0VMRU1FTlRTIH0gZnJvbSAnLi9lbGVtZW50cy90b29sdGlwJztcbmltcG9ydCB7IE5PVk9fRFJBV0VSX0VMRU1FTlRTIH0gZnJvbSAnLi9lbGVtZW50cy9kcmF3ZXInO1xuaW1wb3J0IHsgTk9WT19TRUxFQ1RfRUxFTUVOVFMgfSBmcm9tICcuL2VsZW1lbnRzL3NlbGVjdCc7XG5pbXBvcnQgeyBOT1ZPX0RBVEVfUElDS0VSX0VMRU1FTlRTIH0gZnJvbSAnLi9lbGVtZW50cy9kYXRlcGlja2VyJztcbmltcG9ydCB7IE5PVk9fVElNRV9QSUNLRVJfRUxFTUVOVFMgfSBmcm9tICcuL2VsZW1lbnRzL3RpbWVwaWNrZXInO1xuaW1wb3J0IHsgTk9WT19EUk9QRE9XTl9FTEVNRU5UUyB9IGZyb20gJy4vZWxlbWVudHMvZHJvcGRvd24nO1xuaW1wb3J0IHsgTk9WT19IRUFERVJfRUxFTUVOVFMgfSBmcm9tICcuL2VsZW1lbnRzL2hlYWRlcic7XG5pbXBvcnQgeyBOT1ZPX0xJU1RfRUxFTUVOVFMgfSBmcm9tICcuL2VsZW1lbnRzL2xpc3QnO1xuaW1wb3J0IHsgTk9WT19UQUJMRV9FTEVNRU5UUywgTk9WT19UQUJMRV9FWFRSQV9FTEVNRU5UUyB9IGZyb20gJy4vZWxlbWVudHMvdGFibGUnO1xuXG4vLyBFbGVtZW50c1xuZXhwb3J0ICogZnJvbSAnLi9lbGVtZW50cy9idXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi9lbGVtZW50cy90YWJzJztcbmV4cG9ydCAqIGZyb20gJy4vZWxlbWVudHMvdG9hc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9lbGVtZW50cy9zd2l0Y2gnO1xuZXhwb3J0ICogZnJvbSAnLi9lbGVtZW50cy9jYXJkJztcbmV4cG9ydCAqIGZyb20gJy4vZWxlbWVudHMvbG9hZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnRzL3NlbGVjdCc7XG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnRzL2Ryb3Bkb3duJztcbmV4cG9ydCAqIGZyb20gJy4vZWxlbWVudHMvdG9vbHRpcCc7XG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnRzL2RyYXdlcic7XG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnRzL3N3aXRjaCc7XG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnRzL2RhdGVwaWNrZXInO1xuZXhwb3J0ICogZnJvbSAnLi9lbGVtZW50cy90aW1lcGlja2VyJztcbmV4cG9ydCAqIGZyb20gJy4vZWxlbWVudHMvaGVhZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZWxlbWVudHMvbGlzdCc7XG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnRzL3RhYmxlJztcblxuLy8gUGlwZXNcbmV4cG9ydCAqIGZyb20gJy4vcGlwZXMvcGx1cmFsL1BsdXJhbCc7XG5cbi8vIFV0aWxzXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMvZGVmZXJyZWQvRGVmZXJyZWQnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscy9IZWxwZXJzJztcblxuZXhwb3J0IGNvbnN0IE5PVk9fRUxFTUVOVFMgPSBbXG4gICAgTk9WT19CVVRUT05fRUxFTUVOVFMsXG4gICAgTk9WT19UQUJfRUxFTUVOVFMsXG4gICAgTk9WT19UT0FTVF9FTEVNRU5UUyxcbiAgICBOT1ZPX1NXSVRDSF9FTEVNRU5UUyxcbiAgICBOT1ZPX0NBUkRfRUxFTUVOVFMsXG4gICAgTk9WT19DQVJEX0VYVFJBX0VMRU1FTlRTLFxuICAgIE5PVk9fTE9BRElOR19FTEVNRU5UUyxcbiAgICBOT1ZPX1NFTEVDVF9FTEVNRU5UUyxcbiAgICBOT1ZPX0RST1BET1dOX0VMRU1FTlRTLFxuICAgIE5PVk9fVE9PTFRJUF9FTEVNRU5UUyxcbiAgICBOT1ZPX0RSQVdFUl9FTEVNRU5UUyxcbiAgICBOT1ZPX0hFQURFUl9FTEVNRU5UUyxcbiAgICBOT1ZPX0xJU1RfRUxFTUVOVFMsXG4gICAgTk9WT19UQUJMRV9FTEVNRU5UUyxcbiAgICBOT1ZPX1RBQkxFX0VYVFJBX0VMRU1FTlRTLFxuICAgIE5PVk9fRFJBV0VSX0VMRU1FTlRTLFxuICAgIE5PVk9fREFURV9QSUNLRVJfRUxFTUVOVFMsXG4gICAgTk9WT19USU1FX1BJQ0tFUl9FTEVNRU5UU1xuXTtcblxuZXhwb3J0IGNvbnN0IE5PVk9fUFJPVklERVJTID0gW1xuICAgIFRPQVNUX1BST1ZJREVSU1xuXTtcbiJdfQ==

/***/ },
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Button = __webpack_require__(438);
	
	Object.defineProperty(exports, 'NOVO_BUTTON_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Button.NOVO_BUTTON_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7bUJBQVMsb0IiLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hc2liaWxpYS9Eb2N1bWVudHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IE5PVk9fQlVUVE9OX0VMRU1FTlRTIH0gZnJvbSAnLi9idXR0b24vQnV0dG9uJztcbiJdfQ==

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// Helper to keep track of key codes
	var KeyCodes = exports.KeyCodes = {
	    BACKSPACE: 8,
	    TAB: 9,
	    NUM_CENTER: 12,
	    ENTER: 13,
	    RETURN: 13,
	    SHIFT: 16,
	    CTRL: 17,
	    ALT: 18,
	    PAUSE: 19,
	    CAPS_LOCK: 20,
	    ESC: 27,
	    SPACE: 32,
	    PAGE_UP: 33,
	    PAGE_DOWN: 34,
	    END: 35,
	    HOME: 36,
	    LEFT: 37,
	    UP: 38,
	    RIGHT: 39,
	    DOWN: 40,
	    PRINT_SCREEN: 44,
	    INSERT: 45,
	    DELETE: 46,
	    ZERO: 48,
	    ONE: 49,
	    TWO: 50,
	    THREE: 51,
	    FOUR: 52,
	    FIVE: 53,
	    SIX: 54,
	    SEVEN: 55,
	    EIGHT: 56,
	    NINE: 57,
	    A: 65,
	    B: 66,
	    C: 67,
	    D: 68,
	    E: 69,
	    F: 70,
	    G: 71,
	    H: 72,
	    I: 73,
	    J: 74,
	    K: 75,
	    L: 76,
	    M: 77,
	    N: 78,
	    O: 79,
	    P: 80,
	    Q: 81,
	    R: 82,
	    S: 83,
	    T: 84,
	    U: 85,
	    V: 86,
	    W: 87,
	    X: 88,
	    Y: 89,
	    Z: 90,
	    CONTEXT_MENU: 93,
	    NUM_ZERO: 96,
	    NUM_ONE: 97,
	    NUM_TWO: 98,
	    NUM_THREE: 99,
	    NUM_FOUR: 100,
	    NUM_FIVE: 101,
	    NUM_SIX: 102,
	    NUM_SEVEN: 103,
	    NUM_EIGHT: 104,
	    NUM_NINE: 105,
	    NUM_MULTIPLY: 106,
	    NUM_PLUS: 107,
	    NUM_MINUS: 109,
	    NUM_PERIOD: 110,
	    NUM_DIVISION: 111,
	    F1: 112,
	    F2: 113,
	    F3: 114,
	    F4: 115,
	    F5: 116,
	    F6: 117,
	    F7: 118,
	    F8: 119,
	    F9: 120,
	    F10: 121,
	    F11: 122,
	    F12: 123,
	    DASH: 189,
	    PERIOD: 190,
	    FORWARD_SLASH: 191
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9rZXktY29kZXMvS2V5Q29kZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ08sSUFBTSw4QkFBVztBQUNwQixlQUFXLENBRFM7QUFFcEIsU0FBSyxDQUZlO0FBR3BCLGdCQUFZLEVBSFE7QUFJcEIsV0FBTyxFQUphO0FBS3BCLFlBQVEsRUFMWTtBQU1wQixXQUFPLEVBTmE7QUFPcEIsVUFBTSxFQVBjO0FBUXBCLFNBQUssRUFSZTtBQVNwQixXQUFPLEVBVGE7QUFVcEIsZUFBVyxFQVZTO0FBV3BCLFNBQUssRUFYZTtBQVlwQixXQUFPLEVBWmE7QUFhcEIsYUFBUyxFQWJXO0FBY3BCLGVBQVcsRUFkUztBQWVwQixTQUFLLEVBZmU7QUFnQnBCLFVBQU0sRUFoQmM7QUFpQnBCLFVBQU0sRUFqQmM7QUFrQnBCLFFBQUksRUFsQmdCO0FBbUJwQixXQUFPLEVBbkJhO0FBb0JwQixVQUFNLEVBcEJjO0FBcUJwQixrQkFBYyxFQXJCTTtBQXNCcEIsWUFBUSxFQXRCWTtBQXVCcEIsWUFBUSxFQXZCWTtBQXdCcEIsVUFBTSxFQXhCYztBQXlCcEIsU0FBSyxFQXpCZTtBQTBCcEIsU0FBSyxFQTFCZTtBQTJCcEIsV0FBTyxFQTNCYTtBQTRCcEIsVUFBTSxFQTVCYztBQTZCcEIsVUFBTSxFQTdCYztBQThCcEIsU0FBSyxFQTlCZTtBQStCcEIsV0FBTyxFQS9CYTtBQWdDcEIsV0FBTyxFQWhDYTtBQWlDcEIsVUFBTSxFQWpDYztBQWtDcEIsT0FBRyxFQWxDaUI7QUFtQ3BCLE9BQUcsRUFuQ2lCO0FBb0NwQixPQUFHLEVBcENpQjtBQXFDcEIsT0FBRyxFQXJDaUI7QUFzQ3BCLE9BQUcsRUF0Q2lCO0FBdUNwQixPQUFHLEVBdkNpQjtBQXdDcEIsT0FBRyxFQXhDaUI7QUF5Q3BCLE9BQUcsRUF6Q2lCO0FBMENwQixPQUFHLEVBMUNpQjtBQTJDcEIsT0FBRyxFQTNDaUI7QUE0Q3BCLE9BQUcsRUE1Q2lCO0FBNkNwQixPQUFHLEVBN0NpQjtBQThDcEIsT0FBRyxFQTlDaUI7QUErQ3BCLE9BQUcsRUEvQ2lCO0FBZ0RwQixPQUFHLEVBaERpQjtBQWlEcEIsT0FBRyxFQWpEaUI7QUFrRHBCLE9BQUcsRUFsRGlCO0FBbURwQixPQUFHLEVBbkRpQjtBQW9EcEIsT0FBRyxFQXBEaUI7QUFxRHBCLE9BQUcsRUFyRGlCO0FBc0RwQixPQUFHLEVBdERpQjtBQXVEcEIsT0FBRyxFQXZEaUI7QUF3RHBCLE9BQUcsRUF4RGlCO0FBeURwQixPQUFHLEVBekRpQjtBQTBEcEIsT0FBRyxFQTFEaUI7QUEyRHBCLE9BQUcsRUEzRGlCO0FBNERwQixrQkFBYyxFQTVETTtBQTZEcEIsY0FBVSxFQTdEVTtBQThEcEIsYUFBUyxFQTlEVztBQStEcEIsYUFBUyxFQS9EVztBQWdFcEIsZUFBVyxFQWhFUztBQWlFcEIsY0FBVSxHQWpFVTtBQWtFcEIsY0FBVSxHQWxFVTtBQW1FcEIsYUFBUyxHQW5FVztBQW9FcEIsZUFBVyxHQXBFUztBQXFFcEIsZUFBVyxHQXJFUztBQXNFcEIsY0FBVSxHQXRFVTtBQXVFcEIsa0JBQWMsR0F2RU07QUF3RXBCLGNBQVUsR0F4RVU7QUF5RXBCLGVBQVcsR0F6RVM7QUEwRXBCLGdCQUFZLEdBMUVRO0FBMkVwQixrQkFBYyxHQTNFTTtBQTRFcEIsUUFBSSxHQTVFZ0I7QUE2RXBCLFFBQUksR0E3RWdCO0FBOEVwQixRQUFJLEdBOUVnQjtBQStFcEIsUUFBSSxHQS9FZ0I7QUFnRnBCLFFBQUksR0FoRmdCO0FBaUZwQixRQUFJLEdBakZnQjtBQWtGcEIsUUFBSSxHQWxGZ0I7QUFtRnBCLFFBQUksR0FuRmdCO0FBb0ZwQixRQUFJLEdBcEZnQjtBQXFGcEIsU0FBSyxHQXJGZTtBQXNGcEIsU0FBSyxHQXRGZTtBQXVGcEIsU0FBSyxHQXZGZTtBQXdGcEIsVUFBTSxHQXhGYztBQXlGcEIsWUFBUSxHQXpGWTtBQTBGcEIsbUJBQWU7QUExRkssQ0FBakIiLCJmaWxlIjoiS2V5Q29kZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FzaWJpbGlhL0RvY3VtZW50cy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVscGVyIHRvIGtlZXAgdHJhY2sgb2Yga2V5IGNvZGVzXG5leHBvcnQgY29uc3QgS2V5Q29kZXMgPSB7XG4gICAgQkFDS1NQQUNFOiA4LFxuICAgIFRBQjogOSxcbiAgICBOVU1fQ0VOVEVSOiAxMixcbiAgICBFTlRFUjogMTMsXG4gICAgUkVUVVJOOiAxMyxcbiAgICBTSElGVDogMTYsXG4gICAgQ1RSTDogMTcsXG4gICAgQUxUOiAxOCxcbiAgICBQQVVTRTogMTksXG4gICAgQ0FQU19MT0NLOiAyMCxcbiAgICBFU0M6IDI3LFxuICAgIFNQQUNFOiAzMixcbiAgICBQQUdFX1VQOiAzMyxcbiAgICBQQUdFX0RPV046IDM0LFxuICAgIEVORDogMzUsXG4gICAgSE9NRTogMzYsXG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcbiAgICBQUklOVF9TQ1JFRU46IDQ0LFxuICAgIElOU0VSVDogNDUsXG4gICAgREVMRVRFOiA0NixcbiAgICBaRVJPOiA0OCxcbiAgICBPTkU6IDQ5LFxuICAgIFRXTzogNTAsXG4gICAgVEhSRUU6IDUxLFxuICAgIEZPVVI6IDUyLFxuICAgIEZJVkU6IDUzLFxuICAgIFNJWDogNTQsXG4gICAgU0VWRU46IDU1LFxuICAgIEVJR0hUOiA1NixcbiAgICBOSU5FOiA1NyxcbiAgICBBOiA2NSxcbiAgICBCOiA2NixcbiAgICBDOiA2NyxcbiAgICBEOiA2OCxcbiAgICBFOiA2OSxcbiAgICBGOiA3MCxcbiAgICBHOiA3MSxcbiAgICBIOiA3MixcbiAgICBJOiA3MyxcbiAgICBKOiA3NCxcbiAgICBLOiA3NSxcbiAgICBMOiA3NixcbiAgICBNOiA3NyxcbiAgICBOOiA3OCxcbiAgICBPOiA3OSxcbiAgICBQOiA4MCxcbiAgICBROiA4MSxcbiAgICBSOiA4MixcbiAgICBTOiA4MyxcbiAgICBUOiA4NCxcbiAgICBVOiA4NSxcbiAgICBWOiA4NixcbiAgICBXOiA4NyxcbiAgICBYOiA4OCxcbiAgICBZOiA4OSxcbiAgICBaOiA5MCxcbiAgICBDT05URVhUX01FTlU6IDkzLFxuICAgIE5VTV9aRVJPOiA5NixcbiAgICBOVU1fT05FOiA5NyxcbiAgICBOVU1fVFdPOiA5OCxcbiAgICBOVU1fVEhSRUU6IDk5LFxuICAgIE5VTV9GT1VSOiAxMDAsXG4gICAgTlVNX0ZJVkU6IDEwMSxcbiAgICBOVU1fU0lYOiAxMDIsXG4gICAgTlVNX1NFVkVOOiAxMDMsXG4gICAgTlVNX0VJR0hUOiAxMDQsXG4gICAgTlVNX05JTkU6IDEwNSxcbiAgICBOVU1fTVVMVElQTFk6IDEwNixcbiAgICBOVU1fUExVUzogMTA3LFxuICAgIE5VTV9NSU5VUzogMTA5LFxuICAgIE5VTV9QRVJJT0Q6IDExMCxcbiAgICBOVU1fRElWSVNJT046IDExMSxcbiAgICBGMTogMTEyLFxuICAgIEYyOiAxMTMsXG4gICAgRjM6IDExNCxcbiAgICBGNDogMTE1LFxuICAgIEY1OiAxMTYsXG4gICAgRjY6IDExNyxcbiAgICBGNzogMTE4LFxuICAgIEY4OiAxMTksXG4gICAgRjk6IDEyMCxcbiAgICBGMTA6IDEyMSxcbiAgICBGMTE6IDEyMixcbiAgICBGMTI6IDEyMyxcbiAgICBEQVNIOiAxODksXG4gICAgUEVSSU9EOiAxOTAsXG4gICAgRk9SV0FSRF9TTEFTSDogMTkxXG59O1xuIl19

/***/ },
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
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
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
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
/* 130 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BaseRenderer = exports.BaseRenderer = function BaseRenderer() {
	    _classCallCheck(this, BaseRenderer);
	
	    this.data = {};
	    this.value = '';
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90YWJsZS9leHRyYXMvYmFzZS1yZW5kZXJlci9CYXNlUmVuZGVyZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFBYSxZLFdBQUEsWSxHQUNULHdCQUFjO0FBQUE7O0FBQ1YsU0FBSyxJQUFMLEdBQVksRUFBWjtBQUNBLFNBQUssS0FBTCxHQUFhLEVBQWI7QUFDSCxDIiwiZmlsZSI6IkJhc2VSZW5kZXJlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmFzZVJlbmRlcmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB9XG59XG4iXX0=

/***/ },
/* 131 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.swallowEvent = swallowEvent;
	/**
	 * Swallows an event to stop further execution
	 * @param event
	 */
	function swallowEvent(event) {
	    if (event) {
	        event.stopPropagation();
	        event.preventDefault();
	    }
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9IZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O1FBSWdCLFksR0FBQSxZOzs7OztBQUFULFNBQVMsWUFBVCxDQUFzQixLQUF0QixFQUE2QjtBQUNoQyxRQUFJLEtBQUosRUFBVztBQUNQLGNBQU0sZUFBTjtBQUNBLGNBQU0sY0FBTjtBQUNIO0FBQ0oiLCJmaWxlIjoiSGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN3YWxsb3dzIGFuIGV2ZW50IHRvIHN0b3AgZnVydGhlciBleGVjdXRpb25cbiAqIEBwYXJhbSBldmVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3dhbGxvd0V2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.OutsideClick = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Outside click helper, makes to set the element as inactive when clicking outside of it
	 */
	
	var OutsideClick = exports.OutsideClick = function () {
	    function OutsideClick(element) {
	        _classCallCheck(this, OutsideClick);
	
	        // Component element
	        this.element = element;
	        // Active flag
	        this.active = false;
	        // Outside click handler
	        // Property because `this.func.bind(this)` returns a new function each time
	        this.onOutsideClick = this.handleOutsideClick.bind(this);
	        // Emits an active change event
	        this.onActiveChange = new _core.EventEmitter();
	    }
	
	    /**
	     * Toggles the element as active and adds/removes the outside click handler
	     * @param event
	     * @param forceValue
	     */
	
	
	    _createClass(OutsideClick, [{
	        key: 'toggleActive',
	        value: function toggleActive(event, forceValue) {
	            // Reverse the active property (if forceValue, use that)
	            this.active = forceValue || !this.active;
	            // Bind window click events to hide on outside click
	            if (this.active) {
	                window.addEventListener('click', this.onOutsideClick);
	            } else {
	                window.removeEventListener('click', this.onOutsideClick);
	            }
	            // Fire the active change event
	            this.onActiveChange.emit(this.active);
	        }
	
	        /**
	         * When the element is destroyed, make sure to remove the handler
	         */
	
	    }, {
	        key: 'ngOnDestroy',
	        value: function ngOnDestroy() {
	            window.removeEventListener('click', this.onOutsideClick);
	        }
	
	        /**
	         * When clicking outside, checks the element and closes if outside
	         * @param event
	         */
	
	    }, {
	        key: 'handleOutsideClick',
	        value: function handleOutsideClick(event) {
	            // If the elements doesn't contain the target element, it is an outside click
	            if (!this.element.nativeElement.contains(event.target)) {
	                this.toggleActive(event, false);
	            }
	        }
	    }]);
	
	    return OutsideClick;
	}();
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9vdXRzaWRlLWNsaWNrL091dHNpZGVDbGljay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFLYSxZLFdBQUEsWTtBQUNULDBCQUFZLE9BQVosRUFBcUI7QUFBQTs7O0FBRWpCLGFBQUssT0FBTCxHQUFlLE9BQWY7O0FBRUEsYUFBSyxNQUFMLEdBQWMsS0FBZDs7O0FBR0EsYUFBSyxjQUFMLEdBQXNCLEtBQUssa0JBQUwsQ0FBd0IsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBdEI7O0FBRUEsYUFBSyxjQUFMLEdBQXNCLHdCQUF0QjtBQUNIOzs7Ozs7Ozs7OztxQ0FPWSxLLEVBQU8sVSxFQUFZOztBQUU1QixpQkFBSyxNQUFMLEdBQWMsY0FBYyxDQUFDLEtBQUssTUFBbEM7O0FBRUEsZ0JBQUksS0FBSyxNQUFULEVBQWlCO0FBQ2IsdUJBQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsS0FBSyxjQUF0QztBQUNILGFBRkQsTUFFTztBQUNILHVCQUFPLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9DLEtBQUssY0FBekM7QUFDSDs7QUFFRCxpQkFBSyxjQUFMLENBQW9CLElBQXBCLENBQXlCLEtBQUssTUFBOUI7QUFDSDs7Ozs7Ozs7c0NBS2E7QUFDVixtQkFBTyxtQkFBUCxDQUEyQixPQUEzQixFQUFvQyxLQUFLLGNBQXpDO0FBQ0g7Ozs7Ozs7OzsyQ0FNa0IsSyxFQUFPOztBQUV0QixnQkFBSSxDQUFDLEtBQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsUUFBM0IsQ0FBb0MsTUFBTSxNQUExQyxDQUFMLEVBQXdEO0FBQ3BELHFCQUFLLFlBQUwsQ0FBa0IsS0FBbEIsRUFBeUIsS0FBekI7QUFDSDtBQUNKIiwiZmlsZSI6Ik91dHNpZGVDbGljay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBPdXRzaWRlIGNsaWNrIGhlbHBlciwgbWFrZXMgdG8gc2V0IHRoZSBlbGVtZW50IGFzIGluYWN0aXZlIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSBvZiBpdFxuICovXG5leHBvcnQgY2xhc3MgT3V0c2lkZUNsaWNrIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIC8vIENvbXBvbmVudCBlbGVtZW50XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIC8vIEFjdGl2ZSBmbGFnXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIE91dHNpZGUgY2xpY2sgaGFuZGxlclxuICAgICAgICAvLyBQcm9wZXJ0eSBiZWNhdXNlIGB0aGlzLmZ1bmMuYmluZCh0aGlzKWAgcmV0dXJucyBhIG5ldyBmdW5jdGlvbiBlYWNoIHRpbWVcbiAgICAgICAgdGhpcy5vbk91dHNpZGVDbGljayA9IHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIEVtaXRzIGFuIGFjdGl2ZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgdGhpcy5vbkFjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSBlbGVtZW50IGFzIGFjdGl2ZSBhbmQgYWRkcy9yZW1vdmVzIHRoZSBvdXRzaWRlIGNsaWNrIGhhbmRsZXJcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gZm9yY2VWYWx1ZVxuICAgICAqL1xuICAgIHRvZ2dsZUFjdGl2ZShldmVudCwgZm9yY2VWYWx1ZSkge1xuICAgICAgICAvLyBSZXZlcnNlIHRoZSBhY3RpdmUgcHJvcGVydHkgKGlmIGZvcmNlVmFsdWUsIHVzZSB0aGF0KVxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZvcmNlVmFsdWUgfHwgIXRoaXMuYWN0aXZlO1xuICAgICAgICAvLyBCaW5kIHdpbmRvdyBjbGljayBldmVudHMgdG8gaGlkZSBvbiBvdXRzaWRlIGNsaWNrXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk91dHNpZGVDbGljayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3V0c2lkZUNsaWNrKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJlIHRoZSBhY3RpdmUgY2hhbmdlIGV2ZW50XG4gICAgICAgIHRoaXMub25BY3RpdmVDaGFuZ2UuZW1pdCh0aGlzLmFjdGl2ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgZWxlbWVudCBpcyBkZXN0cm95ZWQsIG1ha2Ugc3VyZSB0byByZW1vdmUgdGhlIGhhbmRsZXJcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk91dHNpZGVDbGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiBjbGlja2luZyBvdXRzaWRlLCBjaGVja3MgdGhlIGVsZW1lbnQgYW5kIGNsb3NlcyBpZiBvdXRzaWRlXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgaGFuZGxlT3V0c2lkZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIC8vIElmIHRoZSBlbGVtZW50cyBkb2Vzbid0IGNvbnRhaW4gdGhlIHRhcmdldCBlbGVtZW50LCBpdCBpcyBhbiBvdXRzaWRlIGNsaWNrXG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVBY3RpdmUoZXZlbnQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
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
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dropdown = __webpack_require__(449);
	
	Object.defineProperty(exports, 'NOVO_DROPDOWN_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Dropdown.NOVO_DROPDOWN_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9kcm9wZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztxQkFBUyxzQiIsImZpbGUiOiJkcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBOT1ZPX0RST1BET1dOX0VMRU1FTlRTIH0gZnJvbSAnLi9kcm9wZG93bi9Ecm9wZG93bic7XG4iXX0=

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Loading = __webpack_require__(454);
	
	Object.defineProperty(exports, 'NOVO_LOADING_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Loading.NOVO_LOADING_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9sb2FkaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O29CQUFTLHFCIiwiZmlsZSI6ImxvYWRpbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FzaWJpbGlhL0RvY3VtZW50cy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgTk9WT19MT0FESU5HX0VMRU1FTlRTIH0gZnJvbSAnLi9sb2FkaW5nL0xvYWRpbmcnO1xuIl19

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Select = __webpack_require__(455);
	
	Object.defineProperty(exports, 'NOVO_SELECT_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Select.NOVO_SELECT_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9zZWxlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7bUJBQVMsb0IiLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hc2liaWxpYS9Eb2N1bWVudHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IE5PVk9fU0VMRUNUX0VMRU1FTlRTIH0gZnJvbSAnLi9zZWxlY3QvU2VsZWN0JztcbiJdfQ==

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NOVO_TABLE_EXTRA_ELEMENTS = exports.BaseRenderer = undefined;
	
	var _BaseRenderer = __webpack_require__(130);
	
	Object.defineProperty(exports, 'BaseRenderer', {
	  enumerable: true,
	  get: function get() {
	    return _BaseRenderer.BaseRenderer;
	  }
	});
	
	var _Pagination = __webpack_require__(460);
	
	var _RowDetails = __webpack_require__(461);
	
	var _TableCell = __webpack_require__(462);
	
	var _TableFilter = __webpack_require__(463);
	
	var _ThOrderable = __webpack_require__(464);
	
	var _ThSortable = __webpack_require__(465);
	
	var NOVO_TABLE_EXTRA_ELEMENTS = exports.NOVO_TABLE_EXTRA_ELEMENTS = [_Pagination.Pagination, _RowDetails.RowDetails, _TableCell.TableCell, _TableFilter.TableFilter, _ThOrderable.ThOrderable, _ThSortable.ThSortable];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90YWJsZS9leHRyYXMvVGFibGVFeHRyYXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3lCQU9TLFk7Ozs7QUFQVDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHTyxJQUFNLGdFQUE0QixrSkFBbEMiLCJmaWxlIjoiVGFibGVFeHRyYXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FzaWJpbGlhL0RvY3VtZW50cy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJy4vcGFnaW5hdGlvbi9QYWdpbmF0aW9uJztcbmltcG9ydCB7IFJvd0RldGFpbHMgfSBmcm9tICcuL3Jvdy1kZXRhaWxzL1Jvd0RldGFpbHMnO1xuaW1wb3J0IHsgVGFibGVDZWxsIH0gZnJvbSAnLi90YWJsZS1jZWxsL1RhYmxlQ2VsbCc7XG5pbXBvcnQgeyBUYWJsZUZpbHRlciB9IGZyb20gJy4vdGFibGUtZmlsdGVyL1RhYmxlRmlsdGVyJztcbmltcG9ydCB7IFRoT3JkZXJhYmxlIH0gZnJvbSAnLi90aC1vcmRlcmFibGUvVGhPcmRlcmFibGUnO1xuaW1wb3J0IHsgVGhTb3J0YWJsZSB9IGZyb20gJy4vdGgtc29ydGFibGUvVGhTb3J0YWJsZSc7XG5cbmV4cG9ydCB7IEJhc2VSZW5kZXJlciB9IGZyb20gJy4vYmFzZS1yZW5kZXJlci9CYXNlUmVuZGVyZXInO1xuZXhwb3J0IGNvbnN0IE5PVk9fVEFCTEVfRVhUUkFfRUxFTUVOVFMgPSBbUGFnaW5hdGlvbiwgUm93RGV0YWlscywgVGFibGVDZWxsLCBUYWJsZUZpbHRlciwgVGhPcmRlcmFibGUsIFRoU29ydGFibGVdO1xuIl19

/***/ },
/* 227 */,
/* 228 */,
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : afrikaans (af)
	//! author : Werner Mollentze : https://github.com/wernerm
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var af = moment.defineLocale('af', {
	        months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
	        weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
	        weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
	        weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
	        meridiemParse: /vm|nm/i,
	        isPM : function (input) {
	            return /^nm$/i.test(input);
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower ? 'vm' : 'VM';
	            } else {
	                return isLower ? 'nm' : 'NM';
	            }
	        },
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Vandag om] LT',
	            nextDay : '[Môre om] LT',
	            nextWeek : 'dddd [om] LT',
	            lastDay : '[Gister om] LT',
	            lastWeek : '[Laas] dddd [om] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'oor %s',
	            past : '%s gelede',
	            s : '\'n paar sekondes',
	            m : '\'n minuut',
	            mm : '%d minute',
	            h : '\'n uur',
	            hh : '%d ure',
	            d : '\'n dag',
	            dd : '%d dae',
	            M : '\'n maand',
	            MM : '%d maande',
	            y : '\'n jaar',
	            yy : '%d jaar'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal : function (number) {
	            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
	        },
	        week : {
	            dow : 1, // Maandag is die eerste dag van die week.
	            doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
	        }
	    });
	
	    return af;
	
	}));

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Moroccan Arabic (ar-ma)
	//! author : ElFadili Yassine : https://github.com/ElFadiliY
	//! author : Abdel Said : https://github.com/abdelsaid
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ar_ma = moment.defineLocale('ar-ma', {
	        months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	        monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	        weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'في %s',
	            past : 'منذ %s',
	            s : 'ثوان',
	            m : 'دقيقة',
	            mm : '%d دقائق',
	            h : 'ساعة',
	            hh : '%d ساعات',
	            d : 'يوم',
	            dd : '%d أيام',
	            M : 'شهر',
	            MM : '%d أشهر',
	            y : 'سنة',
	            yy : '%d سنوات'
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ar_ma;
	
	}));

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic Saudi Arabia (ar-sa)
	//! author : Suhail Alkowaileet : https://github.com/xsoh
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '١',
	        '2': '٢',
	        '3': '٣',
	        '4': '٤',
	        '5': '٥',
	        '6': '٦',
	        '7': '٧',
	        '8': '٨',
	        '9': '٩',
	        '0': '٠'
	    }, numberMap = {
	        '١': '1',
	        '٢': '2',
	        '٣': '3',
	        '٤': '4',
	        '٥': '5',
	        '٦': '6',
	        '٧': '7',
	        '٨': '8',
	        '٩': '9',
	        '٠': '0'
	    };
	
	    var ar_sa = moment.defineLocale('ar-sa', {
	        months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /ص|م/,
	        isPM : function (input) {
	            return 'م' === input;
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar : {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'في %s',
	            past : 'منذ %s',
	            s : 'ثوان',
	            m : 'دقيقة',
	            mm : '%d دقائق',
	            h : 'ساعة',
	            hh : '%d ساعات',
	            d : 'يوم',
	            dd : '%d أيام',
	            M : 'شهر',
	            MM : '%d أشهر',
	            y : 'سنة',
	            yy : '%d سنوات'
	        },
	        preparse: function (string) {
	            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ar_sa;
	
	}));

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale  : Tunisian Arabic (ar-tn)
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ar_tn = moment.defineLocale('ar-tn', {
	        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'في %s',
	            past: 'منذ %s',
	            s: 'ثوان',
	            m: 'دقيقة',
	            mm: '%d دقائق',
	            h: 'ساعة',
	            hh: '%d ساعات',
	            d: 'يوم',
	            dd: '%d أيام',
	            M: 'شهر',
	            MM: '%d أشهر',
	            y: 'سنة',
	            yy: '%d سنوات'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return ar_tn;
	
	}));

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! Locale: Arabic (ar)
	//! Author: Abdel Said: https://github.com/abdelsaid
	//! Changes in months, weekdays: Ahmed Elkhatib
	//! Native plural forms: forabi https://github.com/forabi
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '١',
	        '2': '٢',
	        '3': '٣',
	        '4': '٤',
	        '5': '٥',
	        '6': '٦',
	        '7': '٧',
	        '8': '٨',
	        '9': '٩',
	        '0': '٠'
	    }, numberMap = {
	        '١': '1',
	        '٢': '2',
	        '٣': '3',
	        '٤': '4',
	        '٥': '5',
	        '٦': '6',
	        '٧': '7',
	        '٨': '8',
	        '٩': '9',
	        '٠': '0'
	    }, pluralForm = function (n) {
	        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
	    }, plurals = {
	        s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
	        m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
	        h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
	        d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
	        M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
	        y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
	    }, pluralize = function (u) {
	        return function (number, withoutSuffix, string, isFuture) {
	            var f = pluralForm(number),
	                str = plurals[u][pluralForm(number)];
	            if (f === 2) {
	                str = str[withoutSuffix ? 0 : 1];
	            }
	            return str.replace(/%d/i, number);
	        };
	    }, months = [
	        'كانون الثاني يناير',
	        'شباط فبراير',
	        'آذار مارس',
	        'نيسان أبريل',
	        'أيار مايو',
	        'حزيران يونيو',
	        'تموز يوليو',
	        'آب أغسطس',
	        'أيلول سبتمبر',
	        'تشرين الأول أكتوبر',
	        'تشرين الثاني نوفمبر',
	        'كانون الأول ديسمبر'
	    ];
	
	    var ar = moment.defineLocale('ar', {
	        months : months,
	        monthsShort : months,
	        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'D/\u200FM/\u200FYYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /ص|م/,
	        isPM : function (input) {
	            return 'م' === input;
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar : {
	            sameDay: '[اليوم عند الساعة] LT',
	            nextDay: '[غدًا عند الساعة] LT',
	            nextWeek: 'dddd [عند الساعة] LT',
	            lastDay: '[أمس عند الساعة] LT',
	            lastWeek: 'dddd [عند الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'بعد %s',
	            past : 'منذ %s',
	            s : pluralize('s'),
	            m : pluralize('m'),
	            mm : pluralize('m'),
	            h : pluralize('h'),
	            hh : pluralize('h'),
	            d : pluralize('d'),
	            dd : pluralize('d'),
	            M : pluralize('M'),
	            MM : pluralize('M'),
	            y : pluralize('y'),
	            yy : pluralize('y')
	        },
	        preparse: function (string) {
	            return string.replace(/\u200f/g, '').replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ar;
	
	}));

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : azerbaijani (az)
	//! author : topchiyev : https://github.com/topchiyev
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var suffixes = {
	        1: '-inci',
	        5: '-inci',
	        8: '-inci',
	        70: '-inci',
	        80: '-inci',
	        2: '-nci',
	        7: '-nci',
	        20: '-nci',
	        50: '-nci',
	        3: '-üncü',
	        4: '-üncü',
	        100: '-üncü',
	        6: '-ncı',
	        9: '-uncu',
	        10: '-uncu',
	        30: '-uncu',
	        60: '-ıncı',
	        90: '-ıncı'
	    };
	
	    var az = moment.defineLocale('az', {
	        months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
	        monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
	        weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
	        weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
	        weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[bugün saat] LT',
	            nextDay : '[sabah saat] LT',
	            nextWeek : '[gələn həftə] dddd [saat] LT',
	            lastDay : '[dünən] LT',
	            lastWeek : '[keçən həftə] dddd [saat] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s sonra',
	            past : '%s əvvəl',
	            s : 'birneçə saniyyə',
	            m : 'bir dəqiqə',
	            mm : '%d dəqiqə',
	            h : 'bir saat',
	            hh : '%d saat',
	            d : 'bir gün',
	            dd : '%d gün',
	            M : 'bir ay',
	            MM : '%d ay',
	            y : 'bir il',
	            yy : '%d il'
	        },
	        meridiemParse: /gecə|səhər|gündüz|axşam/,
	        isPM : function (input) {
	            return /^(gündüz|axşam)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'gecə';
	            } else if (hour < 12) {
	                return 'səhər';
	            } else if (hour < 17) {
	                return 'gündüz';
	            } else {
	                return 'axşam';
	            }
	        },
	        ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
	        ordinal : function (number) {
	            if (number === 0) {  // special case for zero
	                return number + '-ıncı';
	            }
	            var a = number % 10,
	                b = number % 100 - a,
	                c = number >= 100 ? 100 : null;
	            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return az;
	
	}));

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : belarusian (be)
	//! author : Dmitry Demidov : https://github.com/demidov91
	//! author: Praleska: http://praleska.pro/
	//! Author : Menelion Elensúle : https://github.com/Oire
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
	            'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
	            'dd': 'дзень_дні_дзён',
	            'MM': 'месяц_месяцы_месяцаў',
	            'yy': 'год_гады_гадоў'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'хвіліна' : 'хвіліну';
	        }
	        else if (key === 'h') {
	            return withoutSuffix ? 'гадзіна' : 'гадзіну';
	        }
	        else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }
	
	    var be = moment.defineLocale('be', {
	        months : {
	            format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
	            standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
	        },
	        monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
	        weekdays : {
	            format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
	            standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
	            isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
	        },
	        weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	        weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY г.',
	            LLL : 'D MMMM YYYY г., HH:mm',
	            LLLL : 'dddd, D MMMM YYYY г., HH:mm'
	        },
	        calendar : {
	            sameDay: '[Сёння ў] LT',
	            nextDay: '[Заўтра ў] LT',
	            lastDay: '[Учора ў] LT',
	            nextWeek: function () {
	                return '[У] dddd [ў] LT';
	            },
	            lastWeek: function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                case 5:
	                case 6:
	                    return '[У мінулую] dddd [ў] LT';
	                case 1:
	                case 2:
	                case 4:
	                    return '[У мінулы] dddd [ў] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'праз %s',
	            past : '%s таму',
	            s : 'некалькі секунд',
	            m : relativeTimeWithPlural,
	            mm : relativeTimeWithPlural,
	            h : relativeTimeWithPlural,
	            hh : relativeTimeWithPlural,
	            d : 'дзень',
	            dd : relativeTimeWithPlural,
	            M : 'месяц',
	            MM : relativeTimeWithPlural,
	            y : 'год',
	            yy : relativeTimeWithPlural
	        },
	        meridiemParse: /ночы|раніцы|дня|вечара/,
	        isPM : function (input) {
	            return /^(дня|вечара)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночы';
	            } else if (hour < 12) {
	                return 'раніцы';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечара';
	            }
	        },
	        ordinalParse: /\d{1,2}-(і|ы|га)/,
	        ordinal: function (number, period) {
	            switch (period) {
	            case 'M':
	            case 'd':
	            case 'DDD':
	            case 'w':
	            case 'W':
	                return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
	            case 'D':
	                return number + '-га';
	            default:
	                return number;
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return be;
	
	}));

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : bulgarian (bg)
	//! author : Krasen Borisov : https://github.com/kraz
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var bg = moment.defineLocale('bg', {
	        months : 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
	        monthsShort : 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
	        weekdays : 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
	        weekdaysShort : 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
	        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'D.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY H:mm',
	            LLLL : 'dddd, D MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay : '[Днес в] LT',
	            nextDay : '[Утре в] LT',
	            nextWeek : 'dddd [в] LT',
	            lastDay : '[Вчера в] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                case 6:
	                    return '[В изминалата] dddd [в] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[В изминалия] dddd [в] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'след %s',
	            past : 'преди %s',
	            s : 'няколко секунди',
	            m : 'минута',
	            mm : '%d минути',
	            h : 'час',
	            hh : '%d часа',
	            d : 'ден',
	            dd : '%d дни',
	            M : 'месец',
	            MM : '%d месеца',
	            y : 'година',
	            yy : '%d години'
	        },
	        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	        ordinal : function (number) {
	            var lastDigit = number % 10,
	                last2Digits = number % 100;
	            if (number === 0) {
	                return number + '-ев';
	            } else if (last2Digits === 0) {
	                return number + '-ен';
	            } else if (last2Digits > 10 && last2Digits < 20) {
	                return number + '-ти';
	            } else if (lastDigit === 1) {
	                return number + '-ви';
	            } else if (lastDigit === 2) {
	                return number + '-ри';
	            } else if (lastDigit === 7 || lastDigit === 8) {
	                return number + '-ми';
	            } else {
	                return number + '-ти';
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return bg;
	
	}));

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bengali (bn)
	//! author : Kaushik Gandhi : https://github.com/kaushikgandhi
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '১',
	        '2': '২',
	        '3': '৩',
	        '4': '৪',
	        '5': '৫',
	        '6': '৬',
	        '7': '৭',
	        '8': '৮',
	        '9': '৯',
	        '0': '০'
	    },
	    numberMap = {
	        '১': '1',
	        '২': '2',
	        '৩': '3',
	        '৪': '4',
	        '৫': '5',
	        '৬': '6',
	        '৭': '7',
	        '৮': '8',
	        '৯': '9',
	        '০': '0'
	    };
	
	    var bn = moment.defineLocale('bn', {
	        months : 'জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
	        monthsShort : 'জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্'.split('_'),
	        weekdays : 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রবার_শনিবার'.split('_'),
	        weekdaysShort : 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্র_শনি'.split('_'),
	        weekdaysMin : 'রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm সময়',
	            LTS : 'A h:mm:ss সময়',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm সময়',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm সময়'
	        },
	        calendar : {
	            sameDay : '[আজ] LT',
	            nextDay : '[আগামীকাল] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[গতকাল] LT',
	            lastWeek : '[গত] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s পরে',
	            past : '%s আগে',
	            s : 'কয়েক সেকেন্ড',
	            m : 'এক মিনিট',
	            mm : '%d মিনিট',
	            h : 'এক ঘন্টা',
	            hh : '%d ঘন্টা',
	            d : 'এক দিন',
	            dd : '%d দিন',
	            M : 'এক মাস',
	            MM : '%d মাস',
	            y : 'এক বছর',
	            yy : '%d বছর'
	        },
	        preparse: function (string) {
	            return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if ((meridiem === 'রাত' && hour >= 4) ||
	                    (meridiem === 'দুপুর' && hour < 5) ||
	                    meridiem === 'বিকাল') {
	                return hour + 12;
	            } else {
	                return hour;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'রাত';
	            } else if (hour < 10) {
	                return 'সকাল';
	            } else if (hour < 17) {
	                return 'দুপুর';
	            } else if (hour < 20) {
	                return 'বিকাল';
	            } else {
	                return 'রাত';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return bn;
	
	}));

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : tibetan (bo)
	//! author : Thupten N. Chakrishar : https://github.com/vajradog
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '༡',
	        '2': '༢',
	        '3': '༣',
	        '4': '༤',
	        '5': '༥',
	        '6': '༦',
	        '7': '༧',
	        '8': '༨',
	        '9': '༩',
	        '0': '༠'
	    },
	    numberMap = {
	        '༡': '1',
	        '༢': '2',
	        '༣': '3',
	        '༤': '4',
	        '༥': '5',
	        '༦': '6',
	        '༧': '7',
	        '༨': '8',
	        '༩': '9',
	        '༠': '0'
	    };
	
	    var bo = moment.defineLocale('bo', {
	        months : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	        monthsShort : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	        weekdays : 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
	        weekdaysShort : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	        weekdaysMin : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm',
	            LTS : 'A h:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm'
	        },
	        calendar : {
	            sameDay : '[དི་རིང] LT',
	            nextDay : '[སང་ཉིན] LT',
	            nextWeek : '[བདུན་ཕྲག་རྗེས་མ], LT',
	            lastDay : '[ཁ་སང] LT',
	            lastWeek : '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s ལ་',
	            past : '%s སྔན་ལ',
	            s : 'ལམ་སང',
	            m : 'སྐར་མ་གཅིག',
	            mm : '%d སྐར་མ',
	            h : 'ཆུ་ཚོད་གཅིག',
	            hh : '%d ཆུ་ཚོད',
	            d : 'ཉིན་གཅིག',
	            dd : '%d ཉིན་',
	            M : 'ཟླ་བ་གཅིག',
	            MM : '%d ཟླ་བ',
	            y : 'ལོ་གཅིག',
	            yy : '%d ལོ'
	        },
	        preparse: function (string) {
	            return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if ((meridiem === 'མཚན་མོ' && hour >= 4) ||
	                    (meridiem === 'ཉིན་གུང' && hour < 5) ||
	                    meridiem === 'དགོང་དག') {
	                return hour + 12;
	            } else {
	                return hour;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'མཚན་མོ';
	            } else if (hour < 10) {
	                return 'ཞོགས་ཀས';
	            } else if (hour < 17) {
	                return 'ཉིན་གུང';
	            } else if (hour < 20) {
	                return 'དགོང་དག';
	            } else {
	                return 'མཚན་མོ';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return bo;
	
	}));

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : breton (br)
	//! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function relativeTimeWithMutation(number, withoutSuffix, key) {
	        var format = {
	            'mm': 'munutenn',
	            'MM': 'miz',
	            'dd': 'devezh'
	        };
	        return number + ' ' + mutation(format[key], number);
	    }
	    function specialMutationForYears(number) {
	        switch (lastNumber(number)) {
	        case 1:
	        case 3:
	        case 4:
	        case 5:
	        case 9:
	            return number + ' bloaz';
	        default:
	            return number + ' vloaz';
	        }
	    }
	    function lastNumber(number) {
	        if (number > 9) {
	            return lastNumber(number % 10);
	        }
	        return number;
	    }
	    function mutation(text, number) {
	        if (number === 2) {
	            return softMutation(text);
	        }
	        return text;
	    }
	    function softMutation(text) {
	        var mutationTable = {
	            'm': 'v',
	            'b': 'v',
	            'd': 'z'
	        };
	        if (mutationTable[text.charAt(0)] === undefined) {
	            return text;
	        }
	        return mutationTable[text.charAt(0)] + text.substring(1);
	    }
	
	    var br = moment.defineLocale('br', {
	        months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
	        monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
	        weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
	        weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
	        weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'h[e]mm A',
	            LTS : 'h[e]mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D [a viz] MMMM YYYY',
	            LLL : 'D [a viz] MMMM YYYY h[e]mm A',
	            LLLL : 'dddd, D [a viz] MMMM YYYY h[e]mm A'
	        },
	        calendar : {
	            sameDay : '[Hiziv da] LT',
	            nextDay : '[Warc\'hoazh da] LT',
	            nextWeek : 'dddd [da] LT',
	            lastDay : '[Dec\'h da] LT',
	            lastWeek : 'dddd [paset da] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'a-benn %s',
	            past : '%s \'zo',
	            s : 'un nebeud segondennoù',
	            m : 'ur vunutenn',
	            mm : relativeTimeWithMutation,
	            h : 'un eur',
	            hh : '%d eur',
	            d : 'un devezh',
	            dd : relativeTimeWithMutation,
	            M : 'ur miz',
	            MM : relativeTimeWithMutation,
	            y : 'ur bloaz',
	            yy : specialMutationForYears
	        },
	        ordinalParse: /\d{1,2}(añ|vet)/,
	        ordinal : function (number) {
	            var output = (number === 1) ? 'añ' : 'vet';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return br;
	
	}));

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : bosnian (bs)
	//! author : Nedim Cholich : https://github.com/frontyard
	//! based on (hr) translation by Bojan Marković
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	        case 'm':
	            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	        case 'mm':
	            if (number === 1) {
	                result += 'minuta';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'minute';
	            } else {
	                result += 'minuta';
	            }
	            return result;
	        case 'h':
	            return withoutSuffix ? 'jedan sat' : 'jednog sata';
	        case 'hh':
	            if (number === 1) {
	                result += 'sat';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'sata';
	            } else {
	                result += 'sati';
	            }
	            return result;
	        case 'dd':
	            if (number === 1) {
	                result += 'dan';
	            } else {
	                result += 'dana';
	            }
	            return result;
	        case 'MM':
	            if (number === 1) {
	                result += 'mjesec';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'mjeseca';
	            } else {
	                result += 'mjeseci';
	            }
	            return result;
	        case 'yy':
	            if (number === 1) {
	                result += 'godina';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'godine';
	            } else {
	                result += 'godina';
	            }
	            return result;
	        }
	    }
	
	    var bs = moment.defineLocale('bs', {
	        months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
	        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD. MM. YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay  : '[danas u] LT',
	            nextDay  : '[sutra u] LT',
	            nextWeek : function () {
	                switch (this.day()) {
	                case 0:
	                    return '[u] [nedjelju] [u] LT';
	                case 3:
	                    return '[u] [srijedu] [u] LT';
	                case 6:
	                    return '[u] [subotu] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[jučer u] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                    return '[prošlu] dddd [u] LT';
	                case 6:
	                    return '[prošle] [subote] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[prošli] dddd [u] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'prije %s',
	            s      : 'par sekundi',
	            m      : translate,
	            mm     : translate,
	            h      : translate,
	            hh     : translate,
	            d      : 'dan',
	            dd     : translate,
	            M      : 'mjesec',
	            MM     : translate,
	            y      : 'godinu',
	            yy     : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return bs;
	
	}));

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : catalan (ca)
	//! author : Juan G. Hurtado : https://github.com/juanghurtado
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ca = moment.defineLocale('ca', {
	        months : 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
	        monthsShort : 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
	        weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
	        weekdaysMin : 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY H:mm',
	            LLLL : 'dddd D MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay : function () {
	                return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            nextDay : function () {
	                return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            nextWeek : function () {
	                return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            lastDay : function () {
	                return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            lastWeek : function () {
	                return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'en %s',
	            past : 'fa %s',
	            s : 'uns segons',
	            m : 'un minut',
	            mm : '%d minuts',
	            h : 'una hora',
	            hh : '%d hores',
	            d : 'un dia',
	            dd : '%d dies',
	            M : 'un mes',
	            MM : '%d mesos',
	            y : 'un any',
	            yy : '%d anys'
	        },
	        ordinalParse: /\d{1,2}(r|n|t|è|a)/,
	        ordinal : function (number, period) {
	            var output = (number === 1) ? 'r' :
	                (number === 2) ? 'n' :
	                (number === 3) ? 'r' :
	                (number === 4) ? 't' : 'è';
	            if (period === 'w' || period === 'W') {
	                output = 'a';
	            }
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return ca;
	
	}));

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : czech (cs)
	//! author : petrbela : https://github.com/petrbela
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
	        monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
	    function plural(n) {
	        return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	        case 's':  // a few seconds / in a few seconds / a few seconds ago
	            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
	        case 'm':  // a minute / in a minute / a minute ago
	            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
	        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'minuty' : 'minut');
	            } else {
	                return result + 'minutami';
	            }
	            break;
	        case 'h':  // an hour / in an hour / an hour ago
	            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
	        case 'hh': // 9 hours / in 9 hours / 9 hours ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'hodiny' : 'hodin');
	            } else {
	                return result + 'hodinami';
	            }
	            break;
	        case 'd':  // a day / in a day / a day ago
	            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
	        case 'dd': // 9 days / in 9 days / 9 days ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'dny' : 'dní');
	            } else {
	                return result + 'dny';
	            }
	            break;
	        case 'M':  // a month / in a month / a month ago
	            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
	        case 'MM': // 9 months / in 9 months / 9 months ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'měsíce' : 'měsíců');
	            } else {
	                return result + 'měsíci';
	            }
	            break;
	        case 'y':  // a year / in a year / a year ago
	            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
	        case 'yy': // 9 years / in 9 years / 9 years ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'roky' : 'let');
	            } else {
	                return result + 'lety';
	            }
	            break;
	        }
	    }
	
	    var cs = moment.defineLocale('cs', {
	        months : months,
	        monthsShort : monthsShort,
	        monthsParse : (function (months, monthsShort) {
	            var i, _monthsParse = [];
	            for (i = 0; i < 12; i++) {
	                // use custom parser to solve problem with July (červenec)
	                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
	            }
	            return _monthsParse;
	        }(months, monthsShort)),
	        shortMonthsParse : (function (monthsShort) {
	            var i, _shortMonthsParse = [];
	            for (i = 0; i < 12; i++) {
	                _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
	            }
	            return _shortMonthsParse;
	        }(monthsShort)),
	        longMonthsParse : (function (months) {
	            var i, _longMonthsParse = [];
	            for (i = 0; i < 12; i++) {
	                _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
	            }
	            return _longMonthsParse;
	        }(months)),
	        weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
	        weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
	        weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
	        longDateFormat : {
	            LT: 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd D. MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay: '[dnes v] LT',
	            nextDay: '[zítra v] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[v neděli v] LT';
	                case 1:
	                case 2:
	                    return '[v] dddd [v] LT';
	                case 3:
	                    return '[ve středu v] LT';
	                case 4:
	                    return '[ve čtvrtek v] LT';
	                case 5:
	                    return '[v pátek v] LT';
	                case 6:
	                    return '[v sobotu v] LT';
	                }
	            },
	            lastDay: '[včera v] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[minulou neděli v] LT';
	                case 1:
	                case 2:
	                    return '[minulé] dddd [v] LT';
	                case 3:
	                    return '[minulou středu v] LT';
	                case 4:
	                case 5:
	                    return '[minulý] dddd [v] LT';
	                case 6:
	                    return '[minulou sobotu v] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past : 'před %s',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse : /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return cs;
	
	}));

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : chuvash (cv)
	//! author : Anatoly Mironov : https://github.com/mirontoli
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var cv = moment.defineLocale('cv', {
	        months : 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
	        monthsShort : 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
	        weekdays : 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
	        weekdaysShort : 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
	        weekdaysMin : 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
	            LLL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
	            LLLL : 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
	        },
	        calendar : {
	            sameDay: '[Паян] LT [сехетре]',
	            nextDay: '[Ыран] LT [сехетре]',
	            lastDay: '[Ӗнер] LT [сехетре]',
	            nextWeek: '[Ҫитес] dddd LT [сехетре]',
	            lastWeek: '[Иртнӗ] dddd LT [сехетре]',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : function (output) {
	                var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
	                return output + affix;
	            },
	            past : '%s каялла',
	            s : 'пӗр-ик ҫеккунт',
	            m : 'пӗр минут',
	            mm : '%d минут',
	            h : 'пӗр сехет',
	            hh : '%d сехет',
	            d : 'пӗр кун',
	            dd : '%d кун',
	            M : 'пӗр уйӑх',
	            MM : '%d уйӑх',
	            y : 'пӗр ҫул',
	            yy : '%d ҫул'
	        },
	        ordinalParse: /\d{1,2}-мӗш/,
	        ordinal : '%d-мӗш',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return cv;
	
	}));

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Welsh (cy)
	//! author : Robert Allen
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var cy = moment.defineLocale('cy', {
	        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
	        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
	        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
	        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
	        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
	        weekdaysParseExact : true,
	        // time formats are the same as en-gb
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Heddiw am] LT',
	            nextDay: '[Yfory am] LT',
	            nextWeek: 'dddd [am] LT',
	            lastDay: '[Ddoe am] LT',
	            lastWeek: 'dddd [diwethaf am] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'mewn %s',
	            past: '%s yn ôl',
	            s: 'ychydig eiliadau',
	            m: 'munud',
	            mm: '%d munud',
	            h: 'awr',
	            hh: '%d awr',
	            d: 'diwrnod',
	            dd: '%d diwrnod',
	            M: 'mis',
	            MM: '%d mis',
	            y: 'blwyddyn',
	            yy: '%d flynedd'
	        },
	        ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
	        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
	        ordinal: function (number) {
	            var b = number,
	                output = '',
	                lookup = [
	                    '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
	                    'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
	                ];
	            if (b > 20) {
	                if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
	                    output = 'fed'; // not 30ain, 70ain or 90ain
	                } else {
	                    output = 'ain';
	                }
	            } else if (b > 0) {
	                output = lookup[b];
	            }
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return cy;
	
	}));

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : danish (da)
	//! author : Ulrik Nielsen : https://github.com/mrbase
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var da = moment.defineLocale('da', {
	        months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	        weekdaysShort : 'søn_man_tir_ons_tor_fre_lør'.split('_'),
	        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY HH:mm',
	            LLLL : 'dddd [d.] D. MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[I dag kl.] LT',
	            nextDay : '[I morgen kl.] LT',
	            nextWeek : 'dddd [kl.] LT',
	            lastDay : '[I går kl.] LT',
	            lastWeek : '[sidste] dddd [kl] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : '%s siden',
	            s : 'få sekunder',
	            m : 'et minut',
	            mm : '%d minutter',
	            h : 'en time',
	            hh : '%d timer',
	            d : 'en dag',
	            dd : '%d dage',
	            M : 'en måned',
	            MM : '%d måneder',
	            y : 'et år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return da;
	
	}));

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : austrian german (de-at)
	//! author : lluchs : https://github.com/lluchs
	//! author: Menelion Elensúle: https://github.com/Oire
	//! author : Martin Groller : https://github.com/MadMG
	//! author : Mikolaj Dadela : https://github.com/mik01aj
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eine Minute', 'einer Minute'],
	            'h': ['eine Stunde', 'einer Stunde'],
	            'd': ['ein Tag', 'einem Tag'],
	            'dd': [number + ' Tage', number + ' Tagen'],
	            'M': ['ein Monat', 'einem Monat'],
	            'MM': [number + ' Monate', number + ' Monaten'],
	            'y': ['ein Jahr', 'einem Jahr'],
	            'yy': [number + ' Jahre', number + ' Jahren']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }
	
	    var de_at = moment.defineLocale('de-at', {
	        months : 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort : 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY HH:mm',
	            LLLL : 'dddd, D. MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[heute um] LT [Uhr]',
	            sameElse: 'L',
	            nextDay: '[morgen um] LT [Uhr]',
	            nextWeek: 'dddd [um] LT [Uhr]',
	            lastDay: '[gestern um] LT [Uhr]',
	            lastWeek: '[letzten] dddd [um] LT [Uhr]'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : 'vor %s',
	            s : 'ein paar Sekunden',
	            m : processRelativeTime,
	            mm : '%d Minuten',
	            h : processRelativeTime,
	            hh : '%d Stunden',
	            d : processRelativeTime,
	            dd : processRelativeTime,
	            M : processRelativeTime,
	            MM : processRelativeTime,
	            y : processRelativeTime,
	            yy : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return de_at;
	
	}));

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : german (de)
	//! author : lluchs : https://github.com/lluchs
	//! author: Menelion Elensúle: https://github.com/Oire
	//! author : Mikolaj Dadela : https://github.com/mik01aj
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eine Minute', 'einer Minute'],
	            'h': ['eine Stunde', 'einer Stunde'],
	            'd': ['ein Tag', 'einem Tag'],
	            'dd': [number + ' Tage', number + ' Tagen'],
	            'M': ['ein Monat', 'einem Monat'],
	            'MM': [number + ' Monate', number + ' Monaten'],
	            'y': ['ein Jahr', 'einem Jahr'],
	            'yy': [number + ' Jahre', number + ' Jahren']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }
	
	    var de = moment.defineLocale('de', {
	        months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort : 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY HH:mm',
	            LLLL : 'dddd, D. MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[heute um] LT [Uhr]',
	            sameElse: 'L',
	            nextDay: '[morgen um] LT [Uhr]',
	            nextWeek: 'dddd [um] LT [Uhr]',
	            lastDay: '[gestern um] LT [Uhr]',
	            lastWeek: '[letzten] dddd [um] LT [Uhr]'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : 'vor %s',
	            s : 'ein paar Sekunden',
	            m : processRelativeTime,
	            mm : '%d Minuten',
	            h : processRelativeTime,
	            hh : '%d Stunden',
	            d : processRelativeTime,
	            dd : processRelativeTime,
	            M : processRelativeTime,
	            MM : processRelativeTime,
	            y : processRelativeTime,
	            yy : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return de;
	
	}));

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : dhivehi (dv)
	//! author : Jawish Hameed : https://github.com/jawish
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var months = [
	        'ޖެނުއަރީ',
	        'ފެބްރުއަރީ',
	        'މާރިޗު',
	        'އޭޕްރީލު',
	        'މޭ',
	        'ޖޫން',
	        'ޖުލައި',
	        'އޯގަސްޓު',
	        'ސެޕްޓެމްބަރު',
	        'އޮކްޓޯބަރު',
	        'ނޮވެމްބަރު',
	        'ޑިސެމްބަރު'
	    ], weekdays = [
	        'އާދިއްތަ',
	        'ހޯމަ',
	        'އަންގާރަ',
	        'ބުދަ',
	        'ބުރާސްފަތި',
	        'ހުކުރު',
	        'ހޮނިހިރު'
	    ];
	
	    var dv = moment.defineLocale('dv', {
	        months : months,
	        monthsShort : months,
	        weekdays : weekdays,
	        weekdaysShort : weekdays,
	        weekdaysMin : 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
	        longDateFormat : {
	
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'D/M/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /މކ|މފ/,
	        isPM : function (input) {
	            return 'މފ' === input;
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'މކ';
	            } else {
	                return 'މފ';
	            }
	        },
	        calendar : {
	            sameDay : '[މިއަދު] LT',
	            nextDay : '[މާދަމާ] LT',
	            nextWeek : 'dddd LT',
	            lastDay : '[އިއްޔެ] LT',
	            lastWeek : '[ފާއިތުވި] dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'ތެރޭގައި %s',
	            past : 'ކުރިން %s',
	            s : 'ސިކުންތުކޮޅެއް',
	            m : 'މިނިޓެއް',
	            mm : 'މިނިޓު %d',
	            h : 'ގަޑިއިރެއް',
	            hh : 'ގަޑިއިރު %d',
	            d : 'ދުވަހެއް',
	            dd : 'ދުވަސް %d',
	            M : 'މަހެއް',
	            MM : 'މަސް %d',
	            y : 'އަހަރެއް',
	            yy : 'އަހަރު %d'
	        },
	        preparse: function (string) {
	            return string.replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/,/g, '،');
	        },
	        week : {
	            dow : 7,  // Sunday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return dv;
	
	}));

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : modern greek (el)
	//! author : Aggelos Karalias : https://github.com/mehiel
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	    function isFunction(input) {
	        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	    }
	
	
	    var el = moment.defineLocale('el', {
	        monthsNominativeEl : 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
	        monthsGenitiveEl : 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
	        months : function (momentToFormat, format) {
	            if (/D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
	                return this._monthsGenitiveEl[momentToFormat.month()];
	            } else {
	                return this._monthsNominativeEl[momentToFormat.month()];
	            }
	        },
	        monthsShort : 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
	        weekdays : 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
	        weekdaysShort : 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
	        weekdaysMin : 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'μμ' : 'ΜΜ';
	            } else {
	                return isLower ? 'πμ' : 'ΠΜ';
	            }
	        },
	        isPM : function (input) {
	            return ((input + '').toLowerCase()[0] === 'μ');
	        },
	        meridiemParse : /[ΠΜ]\.?Μ?\.?/i,
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY h:mm A',
	            LLLL : 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendarEl : {
	            sameDay : '[Σήμερα {}] LT',
	            nextDay : '[Αύριο {}] LT',
	            nextWeek : 'dddd [{}] LT',
	            lastDay : '[Χθες {}] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                    case 6:
	                        return '[το προηγούμενο] dddd [{}] LT';
	                    default:
	                        return '[την προηγούμενη] dddd [{}] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        calendar : function (key, mom) {
	            var output = this._calendarEl[key],
	                hours = mom && mom.hours();
	            if (isFunction(output)) {
	                output = output.apply(mom);
	            }
	            return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
	        },
	        relativeTime : {
	            future : 'σε %s',
	            past : '%s πριν',
	            s : 'λίγα δευτερόλεπτα',
	            m : 'ένα λεπτό',
	            mm : '%d λεπτά',
	            h : 'μία ώρα',
	            hh : '%d ώρες',
	            d : 'μία μέρα',
	            dd : '%d μέρες',
	            M : 'ένας μήνας',
	            MM : '%d μήνες',
	            y : 'ένας χρόνος',
	            yy : '%d χρόνια'
	        },
	        ordinalParse: /\d{1,2}η/,
	        ordinal: '%dη',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4st is the first week of the year.
	        }
	    });
	
	    return el;
	
	}));

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : australian english (en-au)
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var en_au = moment.defineLocale('en-au', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY h:mm A',
	            LLLL : 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return en_au;
	
	}));

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : canadian english (en-ca)
	//! author : Jonathan Abourbih : https://github.com/jonbca
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var en_ca = moment.defineLocale('en-ca', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'YYYY-MM-DD',
	            LL : 'MMMM D, YYYY',
	            LLL : 'MMMM D, YYYY h:mm A',
	            LLLL : 'dddd, MMMM D, YYYY h:mm A'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });
	
	    return en_ca;
	
	}));

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : great britain english (en-gb)
	//! author : Chris Gedrim : https://github.com/chrisgedrim
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var en_gb = moment.defineLocale('en-gb', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return en_gb;
	
	}));

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Irish english (en-ie)
	//! author : Chris Cartlidge : https://github.com/chriscartlidge
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var en_ie = moment.defineLocale('en-ie', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return en_ie;
	
	}));

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : New Zealand english (en-nz)
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var en_nz = moment.defineLocale('en-nz', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY h:mm A',
	            LLLL : 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return en_nz;
	
	}));

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : esperanto (eo)
	//! author : Colin Dean : https://github.com/colindean
	//! komento: Mi estas malcerta se mi korekte traktis akuzativojn en tiu traduko.
	//!          Se ne, bonvolu korekti kaj avizi min por ke mi povas lerni!
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var eo = moment.defineLocale('eo', {
	        months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
	        weekdays : 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),
	        weekdaysShort : 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Ĵa_Ve_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'D[-an de] MMMM, YYYY',
	            LLL : 'D[-an de] MMMM, YYYY HH:mm',
	            LLLL : 'dddd, [la] D[-an de] MMMM, YYYY HH:mm'
	        },
	        meridiemParse: /[ap]\.t\.m/i,
	        isPM: function (input) {
	            return input.charAt(0).toLowerCase() === 'p';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'p.t.m.' : 'P.T.M.';
	            } else {
	                return isLower ? 'a.t.m.' : 'A.T.M.';
	            }
	        },
	        calendar : {
	            sameDay : '[Hodiaŭ je] LT',
	            nextDay : '[Morgaŭ je] LT',
	            nextWeek : 'dddd [je] LT',
	            lastDay : '[Hieraŭ je] LT',
	            lastWeek : '[pasinta] dddd [je] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'je %s',
	            past : 'antaŭ %s',
	            s : 'sekundoj',
	            m : 'minuto',
	            mm : '%d minutoj',
	            h : 'horo',
	            hh : '%d horoj',
	            d : 'tago',//ne 'diurno', ĉar estas uzita por proksimumo
	            dd : '%d tagoj',
	            M : 'monato',
	            MM : '%d monatoj',
	            y : 'jaro',
	            yy : '%d jaroj'
	        },
	        ordinalParse: /\d{1,2}a/,
	        ordinal : '%da',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return eo;
	
	}));

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : spanish (es)
	//! author : Julio Napurí : https://github.com/julionc
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
	        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
	
	    var es = moment.defineLocale('es', {
	        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
	        monthsShort : function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShort[m.month()];
	            } else {
	                return monthsShortDot[m.month()];
	            }
	        },
	        monthsParseExact : true,
	        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
	        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
	        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY H:mm',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
	        },
	        calendar : {
	            sameDay : function () {
	                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            nextDay : function () {
	                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            nextWeek : function () {
	                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            lastDay : function () {
	                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            lastWeek : function () {
	                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'en %s',
	            past : 'hace %s',
	            s : 'unos segundos',
	            m : 'un minuto',
	            mm : '%d minutos',
	            h : 'una hora',
	            hh : '%d horas',
	            d : 'un día',
	            dd : '%d días',
	            M : 'un mes',
	            MM : '%d meses',
	            y : 'un año',
	            yy : '%d años'
	        },
	        ordinalParse : /\d{1,2}º/,
	        ordinal : '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return es;
	
	}));

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : estonian (et)
	//! author : Henry Kehlmann : https://github.com/madhenry
	//! improvements : Illimar Tambek : https://github.com/ragulka
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            's' : ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
	            'm' : ['ühe minuti', 'üks minut'],
	            'mm': [number + ' minuti', number + ' minutit'],
	            'h' : ['ühe tunni', 'tund aega', 'üks tund'],
	            'hh': [number + ' tunni', number + ' tundi'],
	            'd' : ['ühe päeva', 'üks päev'],
	            'M' : ['kuu aja', 'kuu aega', 'üks kuu'],
	            'MM': [number + ' kuu', number + ' kuud'],
	            'y' : ['ühe aasta', 'aasta', 'üks aasta'],
	            'yy': [number + ' aasta', number + ' aastat']
	        };
	        if (withoutSuffix) {
	            return format[key][2] ? format[key][2] : format[key][1];
	        }
	        return isFuture ? format[key][0] : format[key][1];
	    }
	
	    var et = moment.defineLocale('et', {
	        months        : 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
	        monthsShort   : 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
	        weekdays      : 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
	        weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
	        weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
	        longDateFormat : {
	            LT   : 'H:mm',
	            LTS : 'H:mm:ss',
	            L    : 'DD.MM.YYYY',
	            LL   : 'D. MMMM YYYY',
	            LLL  : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay  : '[Täna,] LT',
	            nextDay  : '[Homme,] LT',
	            nextWeek : '[Järgmine] dddd LT',
	            lastDay  : '[Eile,] LT',
	            lastWeek : '[Eelmine] dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s pärast',
	            past   : '%s tagasi',
	            s      : processRelativeTime,
	            m      : processRelativeTime,
	            mm     : processRelativeTime,
	            h      : processRelativeTime,
	            hh     : processRelativeTime,
	            d      : processRelativeTime,
	            dd     : '%d päeva',
	            M      : processRelativeTime,
	            MM     : processRelativeTime,
	            y      : processRelativeTime,
	            yy     : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return et;
	
	}));

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : euskara (eu)
	//! author : Eneko Illarramendi : https://github.com/eillarra
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var eu = moment.defineLocale('eu', {
	        months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
	        monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
	        weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
	        weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'YYYY[ko] MMMM[ren] D[a]',
	            LLL : 'YYYY[ko] MMMM[ren] D[a] HH:mm',
	            LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
	            l : 'YYYY-M-D',
	            ll : 'YYYY[ko] MMM D[a]',
	            lll : 'YYYY[ko] MMM D[a] HH:mm',
	            llll : 'ddd, YYYY[ko] MMM D[a] HH:mm'
	        },
	        calendar : {
	            sameDay : '[gaur] LT[etan]',
	            nextDay : '[bihar] LT[etan]',
	            nextWeek : 'dddd LT[etan]',
	            lastDay : '[atzo] LT[etan]',
	            lastWeek : '[aurreko] dddd LT[etan]',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s barru',
	            past : 'duela %s',
	            s : 'segundo batzuk',
	            m : 'minutu bat',
	            mm : '%d minutu',
	            h : 'ordu bat',
	            hh : '%d ordu',
	            d : 'egun bat',
	            dd : '%d egun',
	            M : 'hilabete bat',
	            MM : '%d hilabete',
	            y : 'urte bat',
	            yy : '%d urte'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return eu;
	
	}));

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Persian (fa)
	//! author : Ebrahim Byagowi : https://github.com/ebraminio
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '۱',
	        '2': '۲',
	        '3': '۳',
	        '4': '۴',
	        '5': '۵',
	        '6': '۶',
	        '7': '۷',
	        '8': '۸',
	        '9': '۹',
	        '0': '۰'
	    }, numberMap = {
	        '۱': '1',
	        '۲': '2',
	        '۳': '3',
	        '۴': '4',
	        '۵': '5',
	        '۶': '6',
	        '۷': '7',
	        '۸': '8',
	        '۹': '9',
	        '۰': '0'
	    };
	
	    var fa = moment.defineLocale('fa', {
	        months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	        monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	        weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
	        weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
	        weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /قبل از ظهر|بعد از ظهر/,
	        isPM: function (input) {
	            return /بعد از ظهر/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'قبل از ظهر';
	            } else {
	                return 'بعد از ظهر';
	            }
	        },
	        calendar : {
	            sameDay : '[امروز ساعت] LT',
	            nextDay : '[فردا ساعت] LT',
	            nextWeek : 'dddd [ساعت] LT',
	            lastDay : '[دیروز ساعت] LT',
	            lastWeek : 'dddd [پیش] [ساعت] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'در %s',
	            past : '%s پیش',
	            s : 'چندین ثانیه',
	            m : 'یک دقیقه',
	            mm : '%d دقیقه',
	            h : 'یک ساعت',
	            hh : '%d ساعت',
	            d : 'یک روز',
	            dd : '%d روز',
	            M : 'یک ماه',
	            MM : '%d ماه',
	            y : 'یک سال',
	            yy : '%d سال'
	        },
	        preparse: function (string) {
	            return string.replace(/[۰-۹]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        ordinalParse: /\d{1,2}م/,
	        ordinal : '%dم',
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return fa;
	
	}));

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : finnish (fi)
	//! author : Tarmo Aidantausta : https://github.com/bleadof
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
	        numbersFuture = [
	            'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
	            numbersPast[7], numbersPast[8], numbersPast[9]
	        ];
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = '';
	        switch (key) {
	        case 's':
	            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
	        case 'm':
	            return isFuture ? 'minuutin' : 'minuutti';
	        case 'mm':
	            result = isFuture ? 'minuutin' : 'minuuttia';
	            break;
	        case 'h':
	            return isFuture ? 'tunnin' : 'tunti';
	        case 'hh':
	            result = isFuture ? 'tunnin' : 'tuntia';
	            break;
	        case 'd':
	            return isFuture ? 'päivän' : 'päivä';
	        case 'dd':
	            result = isFuture ? 'päivän' : 'päivää';
	            break;
	        case 'M':
	            return isFuture ? 'kuukauden' : 'kuukausi';
	        case 'MM':
	            result = isFuture ? 'kuukauden' : 'kuukautta';
	            break;
	        case 'y':
	            return isFuture ? 'vuoden' : 'vuosi';
	        case 'yy':
	            result = isFuture ? 'vuoden' : 'vuotta';
	            break;
	        }
	        result = verbalNumber(number, isFuture) + ' ' + result;
	        return result;
	    }
	    function verbalNumber(number, isFuture) {
	        return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
	    }
	
	    var fi = moment.defineLocale('fi', {
	        months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
	        monthsShort : 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
	        weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
	        weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
	        weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD.MM.YYYY',
	            LL : 'Do MMMM[ta] YYYY',
	            LLL : 'Do MMMM[ta] YYYY, [klo] HH.mm',
	            LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
	            l : 'D.M.YYYY',
	            ll : 'Do MMM YYYY',
	            lll : 'Do MMM YYYY, [klo] HH.mm',
	            llll : 'ddd, Do MMM YYYY, [klo] HH.mm'
	        },
	        calendar : {
	            sameDay : '[tänään] [klo] LT',
	            nextDay : '[huomenna] [klo] LT',
	            nextWeek : 'dddd [klo] LT',
	            lastDay : '[eilen] [klo] LT',
	            lastWeek : '[viime] dddd[na] [klo] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s päästä',
	            past : '%s sitten',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return fi;
	
	}));

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : faroese (fo)
	//! author : Ragnar Johannesen : https://github.com/ragnar123
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var fo = moment.defineLocale('fo', {
	        months : 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays : 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
	        weekdaysShort : 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
	        weekdaysMin : 'su_má_tý_mi_hó_fr_le'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D. MMMM, YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Í dag kl.] LT',
	            nextDay : '[Í morgin kl.] LT',
	            nextWeek : 'dddd [kl.] LT',
	            lastDay : '[Í gjár kl.] LT',
	            lastWeek : '[síðstu] dddd [kl] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'um %s',
	            past : '%s síðani',
	            s : 'fá sekund',
	            m : 'ein minutt',
	            mm : '%d minuttir',
	            h : 'ein tími',
	            hh : '%d tímar',
	            d : 'ein dagur',
	            dd : '%d dagar',
	            M : 'ein mánaði',
	            MM : '%d mánaðir',
	            y : 'eitt ár',
	            yy : '%d ár'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return fo;
	
	}));

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : canadian french (fr-ca)
	//! author : Jonathan Abourbih : https://github.com/jonbca
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var fr_ca = moment.defineLocale('fr-ca', {
	        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dans %s',
	            past : 'il y a %s',
	            s : 'quelques secondes',
	            m : 'une minute',
	            mm : '%d minutes',
	            h : 'une heure',
	            hh : '%d heures',
	            d : 'un jour',
	            dd : '%d jours',
	            M : 'un mois',
	            MM : '%d mois',
	            y : 'un an',
	            yy : '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|e)/,
	        ordinal : function (number) {
	            return number + (number === 1 ? 'er' : 'e');
	        }
	    });
	
	    return fr_ca;
	
	}));

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : swiss french (fr)
	//! author : Gaspard Bucher : https://github.com/gaspard
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var fr_ch = moment.defineLocale('fr-ch', {
	        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dans %s',
	            past : 'il y a %s',
	            s : 'quelques secondes',
	            m : 'une minute',
	            mm : '%d minutes',
	            h : 'une heure',
	            hh : '%d heures',
	            d : 'un jour',
	            dd : '%d jours',
	            M : 'un mois',
	            MM : '%d mois',
	            y : 'un an',
	            yy : '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|e)/,
	        ordinal : function (number) {
	            return number + (number === 1 ? 'er' : 'e');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return fr_ch;
	
	}));

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : french (fr)
	//! author : John Fischer : https://github.com/jfroffice
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var fr = moment.defineLocale('fr', {
	        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dans %s',
	            past : 'il y a %s',
	            s : 'quelques secondes',
	            m : 'une minute',
	            mm : '%d minutes',
	            h : 'une heure',
	            hh : '%d heures',
	            d : 'un jour',
	            dd : '%d jours',
	            M : 'un mois',
	            MM : '%d mois',
	            y : 'un an',
	            yy : '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|)/,
	        ordinal : function (number) {
	            return number + (number === 1 ? 'er' : '');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return fr;
	
	}));

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : frisian (fy)
	//! author : Robin van der Vliet : https://github.com/robin0van0der0v
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');
	
	    var fy = moment.defineLocale('fy', {
	        months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
	        monthsShort : function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShortWithoutDots[m.month()];
	            } else {
	                return monthsShortWithDots[m.month()];
	            }
	        },
	        monthsParseExact : true,
	        weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
	        weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
	        weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[hjoed om] LT',
	            nextDay: '[moarn om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[juster om] LT',
	            lastWeek: '[ôfrûne] dddd [om] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'oer %s',
	            past : '%s lyn',
	            s : 'in pear sekonden',
	            m : 'ien minút',
	            mm : '%d minuten',
	            h : 'ien oere',
	            hh : '%d oeren',
	            d : 'ien dei',
	            dd : '%d dagen',
	            M : 'ien moanne',
	            MM : '%d moannen',
	            y : 'ien jier',
	            yy : '%d jierren'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal : function (number) {
	            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return fy;
	
	}));

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : great britain scottish gealic (gd)
	//! author : Jon Ashdown : https://github.com/jonashdown
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var months = [
	        'Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'
	    ];
	
	    var monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];
	
	    var weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];
	
	    var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];
	
	    var weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];
	
	    var gd = moment.defineLocale('gd', {
	        months : months,
	        monthsShort : monthsShort,
	        monthsParseExact : true,
	        weekdays : weekdays,
	        weekdaysShort : weekdaysShort,
	        weekdaysMin : weekdaysMin,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[An-diugh aig] LT',
	            nextDay : '[A-màireach aig] LT',
	            nextWeek : 'dddd [aig] LT',
	            lastDay : '[An-dè aig] LT',
	            lastWeek : 'dddd [seo chaidh] [aig] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'ann an %s',
	            past : 'bho chionn %s',
	            s : 'beagan diogan',
	            m : 'mionaid',
	            mm : '%d mionaidean',
	            h : 'uair',
	            hh : '%d uairean',
	            d : 'latha',
	            dd : '%d latha',
	            M : 'mìos',
	            MM : '%d mìosan',
	            y : 'bliadhna',
	            yy : '%d bliadhna'
	        },
	        ordinalParse : /\d{1,2}(d|na|mh)/,
	        ordinal : function (number) {
	            var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return gd;
	
	}));

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : galician (gl)
	//! author : Juan G. Hurtado : https://github.com/juanghurtado
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var gl = moment.defineLocale('gl', {
	        months : 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'.split('_'),
	        monthsShort : 'Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado'.split('_'),
	        weekdaysShort : 'Dom._Lun._Mar._Mér._Xov._Ven._Sáb.'.split('_'),
	        weekdaysMin : 'Do_Lu_Ma_Mé_Xo_Ve_Sá'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY H:mm',
	            LLLL : 'dddd D MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay : function () {
	                return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
	            },
	            nextDay : function () {
	                return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
	            },
	            nextWeek : function () {
	                return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
	            },
	            lastDay : function () {
	                return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
	            },
	            lastWeek : function () {
	                return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : function (str) {
	                if (str === 'uns segundos') {
	                    return 'nuns segundos';
	                }
	                return 'en ' + str;
	            },
	            past : 'hai %s',
	            s : 'uns segundos',
	            m : 'un minuto',
	            mm : '%d minutos',
	            h : 'unha hora',
	            hh : '%d horas',
	            d : 'un día',
	            dd : '%d días',
	            M : 'un mes',
	            MM : '%d meses',
	            y : 'un ano',
	            yy : '%d anos'
	        },
	        ordinalParse : /\d{1,2}º/,
	        ordinal : '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return gl;
	
	}));

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Hebrew (he)
	//! author : Tomer Cohen : https://github.com/tomer
	//! author : Moshe Simantov : https://github.com/DevelopmentIL
	//! author : Tal Ater : https://github.com/TalAter
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var he = moment.defineLocale('he', {
	        months : 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
	        monthsShort : 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
	        weekdays : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
	        weekdaysShort : 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
	        weekdaysMin : 'א_ב_ג_ד_ה_ו_ש'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [ב]MMMM YYYY',
	            LLL : 'D [ב]MMMM YYYY HH:mm',
	            LLLL : 'dddd, D [ב]MMMM YYYY HH:mm',
	            l : 'D/M/YYYY',
	            ll : 'D MMM YYYY',
	            lll : 'D MMM YYYY HH:mm',
	            llll : 'ddd, D MMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[היום ב־]LT',
	            nextDay : '[מחר ב־]LT',
	            nextWeek : 'dddd [בשעה] LT',
	            lastDay : '[אתמול ב־]LT',
	            lastWeek : '[ביום] dddd [האחרון בשעה] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'בעוד %s',
	            past : 'לפני %s',
	            s : 'מספר שניות',
	            m : 'דקה',
	            mm : '%d דקות',
	            h : 'שעה',
	            hh : function (number) {
	                if (number === 2) {
	                    return 'שעתיים';
	                }
	                return number + ' שעות';
	            },
	            d : 'יום',
	            dd : function (number) {
	                if (number === 2) {
	                    return 'יומיים';
	                }
	                return number + ' ימים';
	            },
	            M : 'חודש',
	            MM : function (number) {
	                if (number === 2) {
	                    return 'חודשיים';
	                }
	                return number + ' חודשים';
	            },
	            y : 'שנה',
	            yy : function (number) {
	                if (number === 2) {
	                    return 'שנתיים';
	                } else if (number % 10 === 0 && number !== 10) {
	                    return number + ' שנה';
	                }
	                return number + ' שנים';
	            }
	        },
	        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
	        isPM : function (input) {
	            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 5) {
	                return 'לפנות בוקר';
	            } else if (hour < 10) {
	                return 'בבוקר';
	            } else if (hour < 12) {
	                return isLower ? 'לפנה"צ' : 'לפני הצהריים';
	            } else if (hour < 18) {
	                return isLower ? 'אחה"צ' : 'אחרי הצהריים';
	            } else {
	                return 'בערב';
	            }
	        }
	    });
	
	    return he;
	
	}));

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : hindi (hi)
	//! author : Mayank Singhal : https://github.com/mayanksinghal
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	    numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };
	
	    var hi = moment.defineLocale('hi', {
	        months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
	        monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	        weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
	        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm बजे',
	            LTS : 'A h:mm:ss बजे',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm बजे',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm बजे'
	        },
	        calendar : {
	            sameDay : '[आज] LT',
	            nextDay : '[कल] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[कल] LT',
	            lastWeek : '[पिछले] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s में',
	            past : '%s पहले',
	            s : 'कुछ ही क्षण',
	            m : 'एक मिनट',
	            mm : '%d मिनट',
	            h : 'एक घंटा',
	            hh : '%d घंटे',
	            d : 'एक दिन',
	            dd : '%d दिन',
	            M : 'एक महीने',
	            MM : '%d महीने',
	            y : 'एक वर्ष',
	            yy : '%d वर्ष'
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
	        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
	        meridiemParse: /रात|सुबह|दोपहर|शाम/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'रात') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'सुबह') {
	                return hour;
	            } else if (meridiem === 'दोपहर') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'शाम') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'रात';
	            } else if (hour < 10) {
	                return 'सुबह';
	            } else if (hour < 17) {
	                return 'दोपहर';
	            } else if (hour < 20) {
	                return 'शाम';
	            } else {
	                return 'रात';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return hi;
	
	}));

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : hrvatski (hr)
	//! author : Bojan Marković : https://github.com/bmarkovic
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	        case 'm':
	            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	        case 'mm':
	            if (number === 1) {
	                result += 'minuta';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'minute';
	            } else {
	                result += 'minuta';
	            }
	            return result;
	        case 'h':
	            return withoutSuffix ? 'jedan sat' : 'jednog sata';
	        case 'hh':
	            if (number === 1) {
	                result += 'sat';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'sata';
	            } else {
	                result += 'sati';
	            }
	            return result;
	        case 'dd':
	            if (number === 1) {
	                result += 'dan';
	            } else {
	                result += 'dana';
	            }
	            return result;
	        case 'MM':
	            if (number === 1) {
	                result += 'mjesec';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'mjeseca';
	            } else {
	                result += 'mjeseci';
	            }
	            return result;
	        case 'yy':
	            if (number === 1) {
	                result += 'godina';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'godine';
	            } else {
	                result += 'godina';
	            }
	            return result;
	        }
	    }
	
	    var hr = moment.defineLocale('hr', {
	        months : {
	            format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
	            standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
	        },
	        monthsShort : 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD. MM. YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay  : '[danas u] LT',
	            nextDay  : '[sutra u] LT',
	            nextWeek : function () {
	                switch (this.day()) {
	                case 0:
	                    return '[u] [nedjelju] [u] LT';
	                case 3:
	                    return '[u] [srijedu] [u] LT';
	                case 6:
	                    return '[u] [subotu] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[jučer u] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                    return '[prošlu] dddd [u] LT';
	                case 6:
	                    return '[prošle] [subote] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[prošli] dddd [u] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'prije %s',
	            s      : 'par sekundi',
	            m      : translate,
	            mm     : translate,
	            h      : translate,
	            hh     : translate,
	            d      : 'dan',
	            dd     : translate,
	            M      : 'mjesec',
	            MM     : translate,
	            y      : 'godinu',
	            yy     : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return hr;
	
	}));

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : hungarian (hu)
	//! author : Adam Brunner : https://github.com/adambrunner
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
	    function translate(number, withoutSuffix, key, isFuture) {
	        var num = number,
	            suffix;
	        switch (key) {
	        case 's':
	            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
	        case 'm':
	            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
	        case 'mm':
	            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
	        case 'h':
	            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
	        case 'hh':
	            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
	        case 'd':
	            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
	        case 'dd':
	            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
	        case 'M':
	            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	        case 'MM':
	            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	        case 'y':
	            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
	        case 'yy':
	            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
	        }
	        return '';
	    }
	    function week(isFuture) {
	        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
	    }
	
	    var hu = moment.defineLocale('hu', {
	        months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
	        monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
	        weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
	        weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
	        weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'YYYY.MM.DD.',
	            LL : 'YYYY. MMMM D.',
	            LLL : 'YYYY. MMMM D. H:mm',
	            LLLL : 'YYYY. MMMM D., dddd H:mm'
	        },
	        meridiemParse: /de|du/i,
	        isPM: function (input) {
	            return input.charAt(1).toLowerCase() === 'u';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower === true ? 'de' : 'DE';
	            } else {
	                return isLower === true ? 'du' : 'DU';
	            }
	        },
	        calendar : {
	            sameDay : '[ma] LT[-kor]',
	            nextDay : '[holnap] LT[-kor]',
	            nextWeek : function () {
	                return week.call(this, true);
	            },
	            lastDay : '[tegnap] LT[-kor]',
	            lastWeek : function () {
	                return week.call(this, false);
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s múlva',
	            past : '%s',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return hu;
	
	}));

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Armenian (hy-am)
	//! author : Armendarabyan : https://github.com/armendarabyan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var hy_am = moment.defineLocale('hy-am', {
	        months : {
	            format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
	            standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
	        },
	        monthsShort : 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
	        weekdays : 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
	        weekdaysShort : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	        weekdaysMin : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY թ.',
	            LLL : 'D MMMM YYYY թ., HH:mm',
	            LLLL : 'dddd, D MMMM YYYY թ., HH:mm'
	        },
	        calendar : {
	            sameDay: '[այսօր] LT',
	            nextDay: '[վաղը] LT',
	            lastDay: '[երեկ] LT',
	            nextWeek: function () {
	                return 'dddd [օրը ժամը] LT';
	            },
	            lastWeek: function () {
	                return '[անցած] dddd [օրը ժամը] LT';
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : '%s հետո',
	            past : '%s առաջ',
	            s : 'մի քանի վայրկյան',
	            m : 'րոպե',
	            mm : '%d րոպե',
	            h : 'ժամ',
	            hh : '%d ժամ',
	            d : 'օր',
	            dd : '%d օր',
	            M : 'ամիս',
	            MM : '%d ամիս',
	            y : 'տարի',
	            yy : '%d տարի'
	        },
	        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
	        isPM: function (input) {
	            return /^(ցերեկվա|երեկոյան)$/.test(input);
	        },
	        meridiem : function (hour) {
	            if (hour < 4) {
	                return 'գիշերվա';
	            } else if (hour < 12) {
	                return 'առավոտվա';
	            } else if (hour < 17) {
	                return 'ցերեկվա';
	            } else {
	                return 'երեկոյան';
	            }
	        },
	        ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
	        ordinal: function (number, period) {
	            switch (period) {
	            case 'DDD':
	            case 'w':
	            case 'W':
	            case 'DDDo':
	                if (number === 1) {
	                    return number + '-ին';
	                }
	                return number + '-րդ';
	            default:
	                return number;
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return hy_am;
	
	}));

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bahasa Indonesia (id)
	//! author : Mohammad Satrio Utomo : https://github.com/tyok
	//! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var id = moment.defineLocale('id', {
	        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
	        weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
	        weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
	        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [pukul] HH.mm',
	            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /pagi|siang|sore|malam/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'siang') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'sore' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'siang';
	            } else if (hours < 19) {
	                return 'sore';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar : {
	            sameDay : '[Hari ini pukul] LT',
	            nextDay : '[Besok pukul] LT',
	            nextWeek : 'dddd [pukul] LT',
	            lastDay : '[Kemarin pukul] LT',
	            lastWeek : 'dddd [lalu pukul] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'dalam %s',
	            past : '%s yang lalu',
	            s : 'beberapa detik',
	            m : 'semenit',
	            mm : '%d menit',
	            h : 'sejam',
	            hh : '%d jam',
	            d : 'sehari',
	            dd : '%d hari',
	            M : 'sebulan',
	            MM : '%d bulan',
	            y : 'setahun',
	            yy : '%d tahun'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return id;
	
	}));

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : icelandic (is)
	//! author : Hinrik Örn Sigurðsson : https://github.com/hinrik
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function plural(n) {
	        if (n % 100 === 11) {
	            return true;
	        } else if (n % 10 === 1) {
	            return false;
	        }
	        return true;
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	        case 's':
	            return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
	        case 'm':
	            return withoutSuffix ? 'mínúta' : 'mínútu';
	        case 'mm':
	            if (plural(number)) {
	                return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
	            } else if (withoutSuffix) {
	                return result + 'mínúta';
	            }
	            return result + 'mínútu';
	        case 'hh':
	            if (plural(number)) {
	                return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
	            }
	            return result + 'klukkustund';
	        case 'd':
	            if (withoutSuffix) {
	                return 'dagur';
	            }
	            return isFuture ? 'dag' : 'degi';
	        case 'dd':
	            if (plural(number)) {
	                if (withoutSuffix) {
	                    return result + 'dagar';
	                }
	                return result + (isFuture ? 'daga' : 'dögum');
	            } else if (withoutSuffix) {
	                return result + 'dagur';
	            }
	            return result + (isFuture ? 'dag' : 'degi');
	        case 'M':
	            if (withoutSuffix) {
	                return 'mánuður';
	            }
	            return isFuture ? 'mánuð' : 'mánuði';
	        case 'MM':
	            if (plural(number)) {
	                if (withoutSuffix) {
	                    return result + 'mánuðir';
	                }
	                return result + (isFuture ? 'mánuði' : 'mánuðum');
	            } else if (withoutSuffix) {
	                return result + 'mánuður';
	            }
	            return result + (isFuture ? 'mánuð' : 'mánuði');
	        case 'y':
	            return withoutSuffix || isFuture ? 'ár' : 'ári';
	        case 'yy':
	            if (plural(number)) {
	                return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
	            }
	            return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
	        }
	    }
	
	    var is = moment.defineLocale('is', {
	        months : 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
	        weekdays : 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
	        weekdaysShort : 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
	        weekdaysMin : 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY [kl.] H:mm',
	            LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
	        },
	        calendar : {
	            sameDay : '[í dag kl.] LT',
	            nextDay : '[á morgun kl.] LT',
	            nextWeek : 'dddd [kl.] LT',
	            lastDay : '[í gær kl.] LT',
	            lastWeek : '[síðasta] dddd [kl.] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'eftir %s',
	            past : 'fyrir %s síðan',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : 'klukkustund',
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return is;
	
	}));

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : italian (it)
	//! author : Lorenzo : https://github.com/aliem
	//! author: Mattia Larentis: https://github.com/nostalgiaz
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var it = moment.defineLocale('it', {
	        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
	        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
	        weekdays : 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
	        weekdaysShort : 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
	        weekdaysMin : 'Do_Lu_Ma_Me_Gi_Ve_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Oggi alle] LT',
	            nextDay: '[Domani alle] LT',
	            nextWeek: 'dddd [alle] LT',
	            lastDay: '[Ieri alle] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[la scorsa] dddd [alle] LT';
	                    default:
	                        return '[lo scorso] dddd [alle] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : function (s) {
	                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
	            },
	            past : '%s fa',
	            s : 'alcuni secondi',
	            m : 'un minuto',
	            mm : '%d minuti',
	            h : 'un\'ora',
	            hh : '%d ore',
	            d : 'un giorno',
	            dd : '%d giorni',
	            M : 'un mese',
	            MM : '%d mesi',
	            y : 'un anno',
	            yy : '%d anni'
	        },
	        ordinalParse : /\d{1,2}º/,
	        ordinal: '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return it;
	
	}));

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : japanese (ja)
	//! author : LI Long : https://github.com/baryon
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ja = moment.defineLocale('ja', {
	        months : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays : '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
	        weekdaysShort : '日_月_火_水_木_金_土'.split('_'),
	        weekdaysMin : '日_月_火_水_木_金_土'.split('_'),
	        longDateFormat : {
	            LT : 'Ah時m分',
	            LTS : 'Ah時m分s秒',
	            L : 'YYYY/MM/DD',
	            LL : 'YYYY年M月D日',
	            LLL : 'YYYY年M月D日Ah時m分',
	            LLLL : 'YYYY年M月D日Ah時m分 dddd'
	        },
	        meridiemParse: /午前|午後/i,
	        isPM : function (input) {
	            return input === '午後';
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return '午前';
	            } else {
	                return '午後';
	            }
	        },
	        calendar : {
	            sameDay : '[今日] LT',
	            nextDay : '[明日] LT',
	            nextWeek : '[来週]dddd LT',
	            lastDay : '[昨日] LT',
	            lastWeek : '[前週]dddd LT',
	            sameElse : 'L'
	        },
	        ordinalParse : /\d{1,2}日/,
	        ordinal : function (number, period) {
	            switch (period) {
	            case 'd':
	            case 'D':
	            case 'DDD':
	                return number + '日';
	            default:
	                return number;
	            }
	        },
	        relativeTime : {
	            future : '%s後',
	            past : '%s前',
	            s : '数秒',
	            m : '1分',
	            mm : '%d分',
	            h : '1時間',
	            hh : '%d時間',
	            d : '1日',
	            dd : '%d日',
	            M : '1ヶ月',
	            MM : '%dヶ月',
	            y : '1年',
	            yy : '%d年'
	        }
	    });
	
	    return ja;
	
	}));

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Boso Jowo (jv)
	//! author : Rony Lantip : https://github.com/lantip
	//! reference: http://jv.wikipedia.org/wiki/Basa_Jawa
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var jv = moment.defineLocale('jv', {
	        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
	        weekdays : 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
	        weekdaysShort : 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
	        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [pukul] HH.mm',
	            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /enjing|siyang|sonten|ndalu/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'enjing') {
	                return hour;
	            } else if (meridiem === 'siyang') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'enjing';
	            } else if (hours < 15) {
	                return 'siyang';
	            } else if (hours < 19) {
	                return 'sonten';
	            } else {
	                return 'ndalu';
	            }
	        },
	        calendar : {
	            sameDay : '[Dinten puniko pukul] LT',
	            nextDay : '[Mbenjang pukul] LT',
	            nextWeek : 'dddd [pukul] LT',
	            lastDay : '[Kala wingi pukul] LT',
	            lastWeek : 'dddd [kepengker pukul] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'wonten ing %s',
	            past : '%s ingkang kepengker',
	            s : 'sawetawis detik',
	            m : 'setunggal menit',
	            mm : '%d menit',
	            h : 'setunggal jam',
	            hh : '%d jam',
	            d : 'sedinten',
	            dd : '%d dinten',
	            M : 'sewulan',
	            MM : '%d wulan',
	            y : 'setaun',
	            yy : '%d taun'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return jv;
	
	}));

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Georgian (ka)
	//! author : Irakli Janiashvili : https://github.com/irakli-janiashvili
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ka = moment.defineLocale('ka', {
	        months : {
	            standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
	            format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
	        },
	        monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
	        weekdays : {
	            standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
	            format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
	            isFormat: /(წინა|შემდეგ)/
	        },
	        weekdaysShort : 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
	        weekdaysMin : 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY h:mm A',
	            LLLL : 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendar : {
	            sameDay : '[დღეს] LT[-ზე]',
	            nextDay : '[ხვალ] LT[-ზე]',
	            lastDay : '[გუშინ] LT[-ზე]',
	            nextWeek : '[შემდეგ] dddd LT[-ზე]',
	            lastWeek : '[წინა] dddd LT-ზე',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : function (s) {
	                return (/(წამი|წუთი|საათი|წელი)/).test(s) ?
	                    s.replace(/ი$/, 'ში') :
	                    s + 'ში';
	            },
	            past : function (s) {
	                if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
	                    return s.replace(/(ი|ე)$/, 'ის წინ');
	                }
	                if ((/წელი/).test(s)) {
	                    return s.replace(/წელი$/, 'წლის წინ');
	                }
	            },
	            s : 'რამდენიმე წამი',
	            m : 'წუთი',
	            mm : '%d წუთი',
	            h : 'საათი',
	            hh : '%d საათი',
	            d : 'დღე',
	            dd : '%d დღე',
	            M : 'თვე',
	            MM : '%d თვე',
	            y : 'წელი',
	            yy : '%d წელი'
	        },
	        ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
	        ordinal : function (number) {
	            if (number === 0) {
	                return number;
	            }
	            if (number === 1) {
	                return number + '-ლი';
	            }
	            if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
	                return 'მე-' + number;
	            }
	            return number + '-ე';
	        },
	        week : {
	            dow : 1,
	            doy : 7
	        }
	    });
	
	    return ka;
	
	}));

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : kazakh (kk)
	//! authors : Nurlan Rakhimzhanov : https://github.com/nurlan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var suffixes = {
	        0: '-ші',
	        1: '-ші',
	        2: '-ші',
	        3: '-ші',
	        4: '-ші',
	        5: '-ші',
	        6: '-шы',
	        7: '-ші',
	        8: '-ші',
	        9: '-шы',
	        10: '-шы',
	        20: '-шы',
	        30: '-шы',
	        40: '-шы',
	        50: '-ші',
	        60: '-шы',
	        70: '-ші',
	        80: '-ші',
	        90: '-шы',
	        100: '-ші'
	    };
	
	    var kk = moment.defineLocale('kk', {
	        months : 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
	        monthsShort : 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
	        weekdays : 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
	        weekdaysShort : 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
	        weekdaysMin : 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Бүгін сағат] LT',
	            nextDay : '[Ертең сағат] LT',
	            nextWeek : 'dddd [сағат] LT',
	            lastDay : '[Кеше сағат] LT',
	            lastWeek : '[Өткен аптаның] dddd [сағат] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s ішінде',
	            past : '%s бұрын',
	            s : 'бірнеше секунд',
	            m : 'бір минут',
	            mm : '%d минут',
	            h : 'бір сағат',
	            hh : '%d сағат',
	            d : 'бір күн',
	            dd : '%d күн',
	            M : 'бір ай',
	            MM : '%d ай',
	            y : 'бір жыл',
	            yy : '%d жыл'
	        },
	        ordinalParse: /\d{1,2}-(ші|шы)/,
	        ordinal : function (number) {
	            var a = number % 10,
	                b = number >= 100 ? 100 : null;
	            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return kk;
	
	}));

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : khmer (km)
	//! author : Kruy Vanna : https://github.com/kruyvanna
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var km = moment.defineLocale('km', {
	        months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	        monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
	            nextDay: '[ស្អែក ម៉ោង] LT',
	            nextWeek: 'dddd [ម៉ោង] LT',
	            lastDay: '[ម្សិលមិញ ម៉ោង] LT',
	            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%sទៀត',
	            past: '%sមុន',
	            s: 'ប៉ុន្មានវិនាទី',
	            m: 'មួយនាទី',
	            mm: '%d នាទី',
	            h: 'មួយម៉ោង',
	            hh: '%d ម៉ោង',
	            d: 'មួយថ្ងៃ',
	            dd: '%d ថ្ងៃ',
	            M: 'មួយខែ',
	            MM: '%d ខែ',
	            y: 'មួយឆ្នាំ',
	            yy: '%d ឆ្នាំ'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return km;
	
	}));

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : korean (ko)
	//!
	//! authors
	//!
	//! - Kyungwook, Park : https://github.com/kyungw00k
	//! - Jeeeyul Lee <jeeeyul@gmail.com>
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ko = moment.defineLocale('ko', {
	        months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	        monthsShort : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	        weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
	        weekdaysShort : '일_월_화_수_목_금_토'.split('_'),
	        weekdaysMin : '일_월_화_수_목_금_토'.split('_'),
	        longDateFormat : {
	            LT : 'A h시 m분',
	            LTS : 'A h시 m분 s초',
	            L : 'YYYY.MM.DD',
	            LL : 'YYYY년 MMMM D일',
	            LLL : 'YYYY년 MMMM D일 A h시 m분',
	            LLLL : 'YYYY년 MMMM D일 dddd A h시 m분'
	        },
	        calendar : {
	            sameDay : '오늘 LT',
	            nextDay : '내일 LT',
	            nextWeek : 'dddd LT',
	            lastDay : '어제 LT',
	            lastWeek : '지난주 dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s 후',
	            past : '%s 전',
	            s : '몇 초',
	            ss : '%d초',
	            m : '일분',
	            mm : '%d분',
	            h : '한 시간',
	            hh : '%d시간',
	            d : '하루',
	            dd : '%d일',
	            M : '한 달',
	            MM : '%d달',
	            y : '일 년',
	            yy : '%d년'
	        },
	        ordinalParse : /\d{1,2}일/,
	        ordinal : '%d일',
	        meridiemParse : /오전|오후/,
	        isPM : function (token) {
	            return token === '오후';
	        },
	        meridiem : function (hour, minute, isUpper) {
	            return hour < 12 ? '오전' : '오후';
	        }
	    });
	
	    return ko;
	
	}));

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : kyrgyz (ky)
	//! author : Chyngyz Arystan uulu : https://github.com/chyngyz
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	
	    var suffixes = {
	        0: '-чү',
	        1: '-чи',
	        2: '-чи',
	        3: '-чү',
	        4: '-чү',
	        5: '-чи',
	        6: '-чы',
	        7: '-чи',
	        8: '-чи',
	        9: '-чу',
	        10: '-чу',
	        20: '-чы',
	        30: '-чу',
	        40: '-чы',
	        50: '-чү',
	        60: '-чы',
	        70: '-чи',
	        80: '-чи',
	        90: '-чу',
	        100: '-чү'
	    };
	
	    var ky = moment.defineLocale('ky', {
	        months : 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
	        monthsShort : 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
	        weekdays : 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
	        weekdaysShort : 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
	        weekdaysMin : 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Бүгүн саат] LT',
	            nextDay : '[Эртең саат] LT',
	            nextWeek : 'dddd [саат] LT',
	            lastDay : '[Кече саат] LT',
	            lastWeek : '[Өткен аптанын] dddd [күнү] [саат] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s ичинде',
	            past : '%s мурун',
	            s : 'бирнече секунд',
	            m : 'бир мүнөт',
	            mm : '%d мүнөт',
	            h : 'бир саат',
	            hh : '%d саат',
	            d : 'бир күн',
	            dd : '%d күн',
	            M : 'бир ай',
	            MM : '%d ай',
	            y : 'бир жыл',
	            yy : '%d жыл'
	        },
	        ordinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
	        ordinal : function (number) {
	            var a = number % 10,
	                b = number >= 100 ? 100 : null;
	            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ky;
	
	}));

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Luxembourgish (lb)
	//! author : mweimerskirch : https://github.com/mweimerskirch, David Raison : https://github.com/kwisatz
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eng Minutt', 'enger Minutt'],
	            'h': ['eng Stonn', 'enger Stonn'],
	            'd': ['een Dag', 'engem Dag'],
	            'M': ['ee Mount', 'engem Mount'],
	            'y': ['ee Joer', 'engem Joer']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }
	    function processFutureTime(string) {
	        var number = string.substr(0, string.indexOf(' '));
	        if (eifelerRegelAppliesToNumber(number)) {
	            return 'a ' + string;
	        }
	        return 'an ' + string;
	    }
	    function processPastTime(string) {
	        var number = string.substr(0, string.indexOf(' '));
	        if (eifelerRegelAppliesToNumber(number)) {
	            return 'viru ' + string;
	        }
	        return 'virun ' + string;
	    }
	    /**
	     * Returns true if the word before the given number loses the '-n' ending.
	     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
	     *
	     * @param number {integer}
	     * @returns {boolean}
	     */
	    function eifelerRegelAppliesToNumber(number) {
	        number = parseInt(number, 10);
	        if (isNaN(number)) {
	            return false;
	        }
	        if (number < 0) {
	            // Negative Number --> always true
	            return true;
	        } else if (number < 10) {
	            // Only 1 digit
	            if (4 <= number && number <= 7) {
	                return true;
	            }
	            return false;
	        } else if (number < 100) {
	            // 2 digits
	            var lastDigit = number % 10, firstDigit = number / 10;
	            if (lastDigit === 0) {
	                return eifelerRegelAppliesToNumber(firstDigit);
	            }
	            return eifelerRegelAppliesToNumber(lastDigit);
	        } else if (number < 10000) {
	            // 3 or 4 digits --> recursively check first digit
	            while (number >= 10) {
	                number = number / 10;
	            }
	            return eifelerRegelAppliesToNumber(number);
	        } else {
	            // Anything larger than 4 digits: recursively check first n-3 digits
	            number = number / 1000;
	            return eifelerRegelAppliesToNumber(number);
	        }
	    }
	
	    var lb = moment.defineLocale('lb', {
	        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        monthsParseExact : true,
	        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
	        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
	        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat: {
	            LT: 'H:mm [Auer]',
	            LTS: 'H:mm:ss [Auer]',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm [Auer]',
	            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
	        },
	        calendar: {
	            sameDay: '[Haut um] LT',
	            sameElse: 'L',
	            nextDay: '[Muer um] LT',
	            nextWeek: 'dddd [um] LT',
	            lastDay: '[Gëschter um] LT',
	            lastWeek: function () {
	                // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
	                switch (this.day()) {
	                    case 2:
	                    case 4:
	                        return '[Leschten] dddd [um] LT';
	                    default:
	                        return '[Leschte] dddd [um] LT';
	                }
	            }
	        },
	        relativeTime : {
	            future : processFutureTime,
	            past : processPastTime,
	            s : 'e puer Sekonnen',
	            m : processRelativeTime,
	            mm : '%d Minutten',
	            h : processRelativeTime,
	            hh : '%d Stonnen',
	            d : processRelativeTime,
	            dd : '%d Deeg',
	            M : processRelativeTime,
	            MM : '%d Méint',
	            y : processRelativeTime,
	            yy : '%d Joer'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return lb;
	
	}));

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : lao (lo)
	//! author : Ryan Hart : https://github.com/ryanhart2
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var lo = moment.defineLocale('lo', {
	        months : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
	        monthsShort : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
	        weekdays : 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
	        weekdaysShort : 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
	        weekdaysMin : 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'ວັນdddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
	        isPM: function (input) {
	            return input === 'ຕອນແລງ';
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ຕອນເຊົ້າ';
	            } else {
	                return 'ຕອນແລງ';
	            }
	        },
	        calendar : {
	            sameDay : '[ມື້ນີ້ເວລາ] LT',
	            nextDay : '[ມື້ອື່ນເວລາ] LT',
	            nextWeek : '[ວັນ]dddd[ໜ້າເວລາ] LT',
	            lastDay : '[ມື້ວານນີ້ເວລາ] LT',
	            lastWeek : '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'ອີກ %s',
	            past : '%sຜ່ານມາ',
	            s : 'ບໍ່ເທົ່າໃດວິນາທີ',
	            m : '1 ນາທີ',
	            mm : '%d ນາທີ',
	            h : '1 ຊົ່ວໂມງ',
	            hh : '%d ຊົ່ວໂມງ',
	            d : '1 ມື້',
	            dd : '%d ມື້',
	            M : '1 ເດືອນ',
	            MM : '%d ເດືອນ',
	            y : '1 ປີ',
	            yy : '%d ປີ'
	        },
	        ordinalParse: /(ທີ່)\d{1,2}/,
	        ordinal : function (number) {
	            return 'ທີ່' + number;
	        }
	    });
	
	    return lo;
	
	}));

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Lithuanian (lt)
	//! author : Mindaugas Mozūras : https://github.com/mmozuras
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var units = {
	        'm' : 'minutė_minutės_minutę',
	        'mm': 'minutės_minučių_minutes',
	        'h' : 'valanda_valandos_valandą',
	        'hh': 'valandos_valandų_valandas',
	        'd' : 'diena_dienos_dieną',
	        'dd': 'dienos_dienų_dienas',
	        'M' : 'mėnuo_mėnesio_mėnesį',
	        'MM': 'mėnesiai_mėnesių_mėnesius',
	        'y' : 'metai_metų_metus',
	        'yy': 'metai_metų_metus'
	    };
	    function translateSeconds(number, withoutSuffix, key, isFuture) {
	        if (withoutSuffix) {
	            return 'kelios sekundės';
	        } else {
	            return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
	        }
	    }
	    function translateSingular(number, withoutSuffix, key, isFuture) {
	        return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
	    }
	    function special(number) {
	        return number % 10 === 0 || (number > 10 && number < 20);
	    }
	    function forms(key) {
	        return units[key].split('_');
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        if (number === 1) {
	            return result + translateSingular(number, withoutSuffix, key[0], isFuture);
	        } else if (withoutSuffix) {
	            return result + (special(number) ? forms(key)[1] : forms(key)[0]);
	        } else {
	            if (isFuture) {
	                return result + forms(key)[1];
	            } else {
	                return result + (special(number) ? forms(key)[1] : forms(key)[2]);
	            }
	        }
	    }
	    var lt = moment.defineLocale('lt', {
	        months : {
	            format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
	            standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_')
	        },
	        monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
	        weekdays : {
	            format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
	            standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
	            isFormat: /dddd HH:mm/
	        },
	        weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
	        weekdaysMin : 'S_P_A_T_K_Pn_Š'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'YYYY [m.] MMMM D [d.]',
	            LLL : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
	            LLLL : 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
	            l : 'YYYY-MM-DD',
	            ll : 'YYYY [m.] MMMM D [d.]',
	            lll : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
	            llll : 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
	        },
	        calendar : {
	            sameDay : '[Šiandien] LT',
	            nextDay : '[Rytoj] LT',
	            nextWeek : 'dddd LT',
	            lastDay : '[Vakar] LT',
	            lastWeek : '[Praėjusį] dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'po %s',
	            past : 'prieš %s',
	            s : translateSeconds,
	            m : translateSingular,
	            mm : translate,
	            h : translateSingular,
	            hh : translate,
	            d : translateSingular,
	            dd : translate,
	            M : translateSingular,
	            MM : translate,
	            y : translateSingular,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}-oji/,
	        ordinal : function (number) {
	            return number + '-oji';
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return lt;
	
	}));

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : latvian (lv)
	//! author : Kristaps Karlsons : https://github.com/skakri
	//! author : Jānis Elmeris : https://github.com/JanisE
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var units = {
	        'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
	        'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
	        'h': 'stundas_stundām_stunda_stundas'.split('_'),
	        'hh': 'stundas_stundām_stunda_stundas'.split('_'),
	        'd': 'dienas_dienām_diena_dienas'.split('_'),
	        'dd': 'dienas_dienām_diena_dienas'.split('_'),
	        'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
	        'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
	        'y': 'gada_gadiem_gads_gadi'.split('_'),
	        'yy': 'gada_gadiem_gads_gadi'.split('_')
	    };
	    /**
	     * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
	     */
	    function format(forms, number, withoutSuffix) {
	        if (withoutSuffix) {
	            // E.g. "21 minūte", "3 minūtes".
	            return number % 10 === 1 && number !== 11 ? forms[2] : forms[3];
	        } else {
	            // E.g. "21 minūtes" as in "pēc 21 minūtes".
	            // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
	            return number % 10 === 1 && number !== 11 ? forms[0] : forms[1];
	        }
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        return number + ' ' + format(units[key], number, withoutSuffix);
	    }
	    function relativeTimeWithSingular(number, withoutSuffix, key) {
	        return format(units[key], number, withoutSuffix);
	    }
	    function relativeSeconds(number, withoutSuffix) {
	        return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
	    }
	
	    var lv = moment.defineLocale('lv', {
	        months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
	        weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
	        weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
	        weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY.',
	            LL : 'YYYY. [gada] D. MMMM',
	            LLL : 'YYYY. [gada] D. MMMM, HH:mm',
	            LLLL : 'YYYY. [gada] D. MMMM, dddd, HH:mm'
	        },
	        calendar : {
	            sameDay : '[Šodien pulksten] LT',
	            nextDay : '[Rīt pulksten] LT',
	            nextWeek : 'dddd [pulksten] LT',
	            lastDay : '[Vakar pulksten] LT',
	            lastWeek : '[Pagājušā] dddd [pulksten] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'pēc %s',
	            past : 'pirms %s',
	            s : relativeSeconds,
	            m : relativeTimeWithSingular,
	            mm : relativeTimeWithPlural,
	            h : relativeTimeWithSingular,
	            hh : relativeTimeWithPlural,
	            d : relativeTimeWithSingular,
	            dd : relativeTimeWithPlural,
	            M : relativeTimeWithSingular,
	            MM : relativeTimeWithPlural,
	            y : relativeTimeWithSingular,
	            yy : relativeTimeWithPlural
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return lv;
	
	}));

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Montenegrin (me)
	//! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var translator = {
	        words: { //Different grammatical cases
	            m: ['jedan minut', 'jednog minuta'],
	            mm: ['minut', 'minuta', 'minuta'],
	            h: ['jedan sat', 'jednog sata'],
	            hh: ['sat', 'sata', 'sati'],
	            dd: ['dan', 'dana', 'dana'],
	            MM: ['mjesec', 'mjeseca', 'mjeseci'],
	            yy: ['godina', 'godine', 'godina']
	        },
	        correctGrammaticalCase: function (number, wordKey) {
	            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	        },
	        translate: function (number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };
	
	    var me = moment.defineLocale('me', {
	        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
	        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
	        monthsParseExact : true,
	        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS : 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sjutra u] LT',
	
	            nextWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[u] [nedjelju] [u] LT';
	                case 3:
	                    return '[u] [srijedu] [u] LT';
	                case 6:
	                    return '[u] [subotu] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[juče u] LT',
	            lastWeek : function () {
	                var lastWeekDays = [
	                    '[prošle] [nedjelje] [u] LT',
	                    '[prošlog] [ponedjeljka] [u] LT',
	                    '[prošlog] [utorka] [u] LT',
	                    '[prošle] [srijede] [u] LT',
	                    '[prošlog] [četvrtka] [u] LT',
	                    '[prošlog] [petka] [u] LT',
	                    '[prošle] [subote] [u] LT'
	                ];
	                return lastWeekDays[this.day()];
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'prije %s',
	            s      : 'nekoliko sekundi',
	            m      : translator.translate,
	            mm     : translator.translate,
	            h      : translator.translate,
	            hh     : translator.translate,
	            d      : 'dan',
	            dd     : translator.translate,
	            M      : 'mjesec',
	            MM     : translator.translate,
	            y      : 'godinu',
	            yy     : translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return me;
	
	}));

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : macedonian (mk)
	//! author : Borislav Mickov : https://github.com/B0k0
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var mk = moment.defineLocale('mk', {
	        months : 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
	        monthsShort : 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
	        weekdays : 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
	        weekdaysShort : 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
	        weekdaysMin : 'нe_пo_вт_ср_че_пе_сa'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'D.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY H:mm',
	            LLLL : 'dddd, D MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay : '[Денес во] LT',
	            nextDay : '[Утре во] LT',
	            nextWeek : '[Во] dddd [во] LT',
	            lastDay : '[Вчера во] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                case 6:
	                    return '[Изминатата] dddd [во] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[Изминатиот] dddd [во] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'после %s',
	            past : 'пред %s',
	            s : 'неколку секунди',
	            m : 'минута',
	            mm : '%d минути',
	            h : 'час',
	            hh : '%d часа',
	            d : 'ден',
	            dd : '%d дена',
	            M : 'месец',
	            MM : '%d месеци',
	            y : 'година',
	            yy : '%d години'
	        },
	        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	        ordinal : function (number) {
	            var lastDigit = number % 10,
	                last2Digits = number % 100;
	            if (number === 0) {
	                return number + '-ев';
	            } else if (last2Digits === 0) {
	                return number + '-ен';
	            } else if (last2Digits > 10 && last2Digits < 20) {
	                return number + '-ти';
	            } else if (lastDigit === 1) {
	                return number + '-ви';
	            } else if (lastDigit === 2) {
	                return number + '-ри';
	            } else if (lastDigit === 7 || lastDigit === 8) {
	                return number + '-ми';
	            } else {
	                return number + '-ти';
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return mk;
	
	}));

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : malayalam (ml)
	//! author : Floyd Pink : https://github.com/floydpink
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ml = moment.defineLocale('ml', {
	        months : 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
	        monthsShort : 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
	        weekdaysShort : 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
	        weekdaysMin : 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm -നു',
	            LTS : 'A h:mm:ss -നു',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm -നു',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm -നു'
	        },
	        calendar : {
	            sameDay : '[ഇന്ന്] LT',
	            nextDay : '[നാളെ] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[ഇന്നലെ] LT',
	            lastWeek : '[കഴിഞ്ഞ] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s കഴിഞ്ഞ്',
	            past : '%s മുൻപ്',
	            s : 'അൽപ നിമിഷങ്ങൾ',
	            m : 'ഒരു മിനിറ്റ്',
	            mm : '%d മിനിറ്റ്',
	            h : 'ഒരു മണിക്കൂർ',
	            hh : '%d മണിക്കൂർ',
	            d : 'ഒരു ദിവസം',
	            dd : '%d ദിവസം',
	            M : 'ഒരു മാസം',
	            MM : '%d മാസം',
	            y : 'ഒരു വർഷം',
	            yy : '%d വർഷം'
	        },
	        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if ((meridiem === 'രാത്രി' && hour >= 4) ||
	                    meridiem === 'ഉച്ച കഴിഞ്ഞ്' ||
	                    meridiem === 'വൈകുന്നേരം') {
	                return hour + 12;
	            } else {
	                return hour;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'രാത്രി';
	            } else if (hour < 12) {
	                return 'രാവിലെ';
	            } else if (hour < 17) {
	                return 'ഉച്ച കഴിഞ്ഞ്';
	            } else if (hour < 20) {
	                return 'വൈകുന്നേരം';
	            } else {
	                return 'രാത്രി';
	            }
	        }
	    });
	
	    return ml;
	
	}));

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Marathi (mr)
	//! author : Harshad Kale : https://github.com/kalehv
	//! author : Vivek Athalye : https://github.com/vnathalye
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	    numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };
	
	    function relativeTimeMr(number, withoutSuffix, string, isFuture)
	    {
	        var output = '';
	        if (withoutSuffix) {
	            switch (string) {
	                case 's': output = 'काही सेकंद'; break;
	                case 'm': output = 'एक मिनिट'; break;
	                case 'mm': output = '%d मिनिटे'; break;
	                case 'h': output = 'एक तास'; break;
	                case 'hh': output = '%d तास'; break;
	                case 'd': output = 'एक दिवस'; break;
	                case 'dd': output = '%d दिवस'; break;
	                case 'M': output = 'एक महिना'; break;
	                case 'MM': output = '%d महिने'; break;
	                case 'y': output = 'एक वर्ष'; break;
	                case 'yy': output = '%d वर्षे'; break;
	            }
	        }
	        else {
	            switch (string) {
	                case 's': output = 'काही सेकंदां'; break;
	                case 'm': output = 'एका मिनिटा'; break;
	                case 'mm': output = '%d मिनिटां'; break;
	                case 'h': output = 'एका तासा'; break;
	                case 'hh': output = '%d तासां'; break;
	                case 'd': output = 'एका दिवसा'; break;
	                case 'dd': output = '%d दिवसां'; break;
	                case 'M': output = 'एका महिन्या'; break;
	                case 'MM': output = '%d महिन्यां'; break;
	                case 'y': output = 'एका वर्षा'; break;
	                case 'yy': output = '%d वर्षां'; break;
	            }
	        }
	        return output.replace(/%d/i, number);
	    }
	
	    var mr = moment.defineLocale('mr', {
	        months : 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
	        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	        weekdaysShort : 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
	        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm वाजता',
	            LTS : 'A h:mm:ss वाजता',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm वाजता',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm वाजता'
	        },
	        calendar : {
	            sameDay : '[आज] LT',
	            nextDay : '[उद्या] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[काल] LT',
	            lastWeek: '[मागील] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future: '%sमध्ये',
	            past: '%sपूर्वी',
	            s: relativeTimeMr,
	            m: relativeTimeMr,
	            mm: relativeTimeMr,
	            h: relativeTimeMr,
	            hh: relativeTimeMr,
	            d: relativeTimeMr,
	            dd: relativeTimeMr,
	            M: relativeTimeMr,
	            MM: relativeTimeMr,
	            y: relativeTimeMr,
	            yy: relativeTimeMr
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'रात्री') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'सकाळी') {
	                return hour;
	            } else if (meridiem === 'दुपारी') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'सायंकाळी') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'रात्री';
	            } else if (hour < 10) {
	                return 'सकाळी';
	            } else if (hour < 17) {
	                return 'दुपारी';
	            } else if (hour < 20) {
	                return 'सायंकाळी';
	            } else {
	                return 'रात्री';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return mr;
	
	}));

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bahasa Malaysia (ms-MY)
	//! author : Weldan Jamili : https://github.com/weldan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ms_my = moment.defineLocale('ms-my', {
	        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
	        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [pukul] HH.mm',
	            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /pagi|tengahari|petang|malam/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'tengahari') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'petang' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'tengahari';
	            } else if (hours < 19) {
	                return 'petang';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar : {
	            sameDay : '[Hari ini pukul] LT',
	            nextDay : '[Esok pukul] LT',
	            nextWeek : 'dddd [pukul] LT',
	            lastDay : '[Kelmarin pukul] LT',
	            lastWeek : 'dddd [lepas pukul] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'dalam %s',
	            past : '%s yang lepas',
	            s : 'beberapa saat',
	            m : 'seminit',
	            mm : '%d minit',
	            h : 'sejam',
	            hh : '%d jam',
	            d : 'sehari',
	            dd : '%d hari',
	            M : 'sebulan',
	            MM : '%d bulan',
	            y : 'setahun',
	            yy : '%d tahun'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ms_my;
	
	}));

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bahasa Malaysia (ms-MY)
	//! author : Weldan Jamili : https://github.com/weldan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ms = moment.defineLocale('ms', {
	        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
	        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [pukul] HH.mm',
	            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /pagi|tengahari|petang|malam/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'tengahari') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'petang' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'tengahari';
	            } else if (hours < 19) {
	                return 'petang';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar : {
	            sameDay : '[Hari ini pukul] LT',
	            nextDay : '[Esok pukul] LT',
	            nextWeek : 'dddd [pukul] LT',
	            lastDay : '[Kelmarin pukul] LT',
	            lastWeek : 'dddd [lepas pukul] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'dalam %s',
	            past : '%s yang lepas',
	            s : 'beberapa saat',
	            m : 'seminit',
	            mm : '%d minit',
	            h : 'sejam',
	            hh : '%d jam',
	            d : 'sehari',
	            dd : '%d hari',
	            M : 'sebulan',
	            MM : '%d bulan',
	            y : 'setahun',
	            yy : '%d tahun'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ms;
	
	}));

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Burmese (my)
	//! author : Squar team, mysquar.com
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '၁',
	        '2': '၂',
	        '3': '၃',
	        '4': '၄',
	        '5': '၅',
	        '6': '၆',
	        '7': '၇',
	        '8': '၈',
	        '9': '၉',
	        '0': '၀'
	    }, numberMap = {
	        '၁': '1',
	        '၂': '2',
	        '၃': '3',
	        '၄': '4',
	        '၅': '5',
	        '၆': '6',
	        '၇': '7',
	        '၈': '8',
	        '၉': '9',
	        '၀': '0'
	    };
	
	    var my = moment.defineLocale('my', {
	        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
	        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
	        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
	        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
	        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
	
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[ယနေ.] LT [မှာ]',
	            nextDay: '[မနက်ဖြန်] LT [မှာ]',
	            nextWeek: 'dddd LT [မှာ]',
	            lastDay: '[မနေ.က] LT [မှာ]',
	            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'လာမည့် %s မှာ',
	            past: 'လွန်ခဲ့သော %s က',
	            s: 'စက္ကန်.အနည်းငယ်',
	            m: 'တစ်မိနစ်',
	            mm: '%d မိနစ်',
	            h: 'တစ်နာရီ',
	            hh: '%d နာရီ',
	            d: 'တစ်ရက်',
	            dd: '%d ရက်',
	            M: 'တစ်လ',
	            MM: '%d လ',
	            y: 'တစ်နှစ်',
	            yy: '%d နှစ်'
	        },
	        preparse: function (string) {
	            return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return my;
	
	}));

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : norwegian bokmål (nb)
	//! authors : Espen Hovlandsdal : https://github.com/rexxars
	//!           Sigurd Gartmann : https://github.com/sigurdga
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var nb = moment.defineLocale('nb', {
	        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort : 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	        weekdaysShort : 'sø._ma._ti._on._to._fr._lø.'.split('_'),
	        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY [kl.] HH:mm',
	            LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
	        },
	        calendar : {
	            sameDay: '[i dag kl.] LT',
	            nextDay: '[i morgen kl.] LT',
	            nextWeek: 'dddd [kl.] LT',
	            lastDay: '[i går kl.] LT',
	            lastWeek: '[forrige] dddd [kl.] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : '%s siden',
	            s : 'noen sekunder',
	            m : 'ett minutt',
	            mm : '%d minutter',
	            h : 'en time',
	            hh : '%d timer',
	            d : 'en dag',
	            dd : '%d dager',
	            M : 'en måned',
	            MM : '%d måneder',
	            y : 'ett år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return nb;
	
	}));

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : nepali/nepalese
	//! author : suvash : https://github.com/suvash
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	    numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };
	
	    var ne = moment.defineLocale('ne', {
	        months : 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
	        monthsShort : 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
	        weekdaysShort : 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
	        weekdaysMin : 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'Aको h:mm बजे',
	            LTS : 'Aको h:mm:ss बजे',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, Aको h:mm बजे',
	            LLLL : 'dddd, D MMMM YYYY, Aको h:mm बजे'
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'राति') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'बिहान') {
	                return hour;
	            } else if (meridiem === 'दिउँसो') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'साँझ') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 3) {
	                return 'राति';
	            } else if (hour < 12) {
	                return 'बिहान';
	            } else if (hour < 16) {
	                return 'दिउँसो';
	            } else if (hour < 20) {
	                return 'साँझ';
	            } else {
	                return 'राति';
	            }
	        },
	        calendar : {
	            sameDay : '[आज] LT',
	            nextDay : '[भोलि] LT',
	            nextWeek : '[आउँदो] dddd[,] LT',
	            lastDay : '[हिजो] LT',
	            lastWeek : '[गएको] dddd[,] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%sमा',
	            past : '%s अगाडि',
	            s : 'केही क्षण',
	            m : 'एक मिनेट',
	            mm : '%d मिनेट',
	            h : 'एक घण्टा',
	            hh : '%d घण्टा',
	            d : 'एक दिन',
	            dd : '%d दिन',
	            M : 'एक महिना',
	            MM : '%d महिना',
	            y : 'एक बर्ष',
	            yy : '%d बर्ष'
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ne;
	
	}));

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : dutch (nl)
	//! author : Joris Röling : https://github.com/jjupiter
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
	
	    var nl = moment.defineLocale('nl', {
	        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
	        monthsShort : function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShortWithoutDots[m.month()];
	            } else {
	                return monthsShortWithDots[m.month()];
	            }
	        },
	        monthsParseExact : true,
	        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
	        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
	        weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[vandaag om] LT',
	            nextDay: '[morgen om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[gisteren om] LT',
	            lastWeek: '[afgelopen] dddd [om] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'over %s',
	            past : '%s geleden',
	            s : 'een paar seconden',
	            m : 'één minuut',
	            mm : '%d minuten',
	            h : 'één uur',
	            hh : '%d uur',
	            d : 'één dag',
	            dd : '%d dagen',
	            M : 'één maand',
	            MM : '%d maanden',
	            y : 'één jaar',
	            yy : '%d jaar'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal : function (number) {
	            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return nl;
	
	}));

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : norwegian nynorsk (nn)
	//! author : https://github.com/mechuwind
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var nn = moment.defineLocale('nn', {
	        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays : 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
	        weekdaysShort : 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
	        weekdaysMin : 'su_må_ty_on_to_fr_lø'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY [kl.] H:mm',
	            LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
	        },
	        calendar : {
	            sameDay: '[I dag klokka] LT',
	            nextDay: '[I morgon klokka] LT',
	            nextWeek: 'dddd [klokka] LT',
	            lastDay: '[I går klokka] LT',
	            lastWeek: '[Føregåande] dddd [klokka] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : '%s sidan',
	            s : 'nokre sekund',
	            m : 'eit minutt',
	            mm : '%d minutt',
	            h : 'ein time',
	            hh : '%d timar',
	            d : 'ein dag',
	            dd : '%d dagar',
	            M : 'ein månad',
	            MM : '%d månader',
	            y : 'eit år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return nn;
	
	}));

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : punjabi india (pa-in)
	//! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '੧',
	        '2': '੨',
	        '3': '੩',
	        '4': '੪',
	        '5': '੫',
	        '6': '੬',
	        '7': '੭',
	        '8': '੮',
	        '9': '੯',
	        '0': '੦'
	    },
	    numberMap = {
	        '੧': '1',
	        '੨': '2',
	        '੩': '3',
	        '੪': '4',
	        '੫': '5',
	        '੬': '6',
	        '੭': '7',
	        '੮': '8',
	        '੯': '9',
	        '੦': '0'
	    };
	
	    var pa_in = moment.defineLocale('pa-in', {
	        // There are months name as per Nanakshahi Calender but they are not used as rigidly in modern Punjabi.
	        months : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
	        monthsShort : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
	        weekdays : 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
	        weekdaysShort : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
	        weekdaysMin : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm ਵਜੇ',
	            LTS : 'A h:mm:ss ਵਜੇ',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm ਵਜੇ',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
	        },
	        calendar : {
	            sameDay : '[ਅਜ] LT',
	            nextDay : '[ਕਲ] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[ਕਲ] LT',
	            lastWeek : '[ਪਿਛਲੇ] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s ਵਿੱਚ',
	            past : '%s ਪਿਛਲੇ',
	            s : 'ਕੁਝ ਸਕਿੰਟ',
	            m : 'ਇਕ ਮਿੰਟ',
	            mm : '%d ਮਿੰਟ',
	            h : 'ਇੱਕ ਘੰਟਾ',
	            hh : '%d ਘੰਟੇ',
	            d : 'ਇੱਕ ਦਿਨ',
	            dd : '%d ਦਿਨ',
	            M : 'ਇੱਕ ਮਹੀਨਾ',
	            MM : '%d ਮਹੀਨੇ',
	            y : 'ਇੱਕ ਸਾਲ',
	            yy : '%d ਸਾਲ'
	        },
	        preparse: function (string) {
	            return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
	        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
	        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'ਰਾਤ') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'ਸਵੇਰ') {
	                return hour;
	            } else if (meridiem === 'ਦੁਪਹਿਰ') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'ਸ਼ਾਮ') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ਰਾਤ';
	            } else if (hour < 10) {
	                return 'ਸਵੇਰ';
	            } else if (hour < 17) {
	                return 'ਦੁਪਹਿਰ';
	            } else if (hour < 20) {
	                return 'ਸ਼ਾਮ';
	            } else {
	                return 'ਰਾਤ';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return pa_in;
	
	}));

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : polish (pl)
	//! author : Rafal Hirsz : https://github.com/evoL
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
	        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
	    function plural(n) {
	        return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
	    }
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	        case 'm':
	            return withoutSuffix ? 'minuta' : 'minutę';
	        case 'mm':
	            return result + (plural(number) ? 'minuty' : 'minut');
	        case 'h':
	            return withoutSuffix  ? 'godzina'  : 'godzinę';
	        case 'hh':
	            return result + (plural(number) ? 'godziny' : 'godzin');
	        case 'MM':
	            return result + (plural(number) ? 'miesiące' : 'miesięcy');
	        case 'yy':
	            return result + (plural(number) ? 'lata' : 'lat');
	        }
	    }
	
	    var pl = moment.defineLocale('pl', {
	        months : function (momentToFormat, format) {
	            if (format === '') {
	                // Hack: if format empty we know this is used to generate
	                // RegExp by moment. Give then back both valid forms of months
	                // in RegExp ready format.
	                return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
	            } else if (/D MMMM/.test(format)) {
	                return monthsSubjective[momentToFormat.month()];
	            } else {
	                return monthsNominative[momentToFormat.month()];
	            }
	        },
	        monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
	        weekdays : 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
	        weekdaysShort : 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
	        weekdaysMin : 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Dziś o] LT',
	            nextDay: '[Jutro o] LT',
	            nextWeek: '[W] dddd [o] LT',
	            lastDay: '[Wczoraj o] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[W zeszłą niedzielę o] LT';
	                case 3:
	                    return '[W zeszłą środę o] LT';
	                case 6:
	                    return '[W zeszłą sobotę o] LT';
	                default:
	                    return '[W zeszły] dddd [o] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past : '%s temu',
	            s : 'kilka sekund',
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : '1 dzień',
	            dd : '%d dni',
	            M : 'miesiąc',
	            MM : translate,
	            y : 'rok',
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return pl;
	
	}));

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : brazilian portuguese (pt-br)
	//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var pt_br = moment.defineLocale('pt-br', {
	        months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
	        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
	        weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
	        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
	        weekdaysMin : 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY [às] HH:mm',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
	        },
	        calendar : {
	            sameDay: '[Hoje às] LT',
	            nextDay: '[Amanhã às] LT',
	            nextWeek: 'dddd [às] LT',
	            lastDay: '[Ontem às] LT',
	            lastWeek: function () {
	                return (this.day() === 0 || this.day() === 6) ?
	                    '[Último] dddd [às] LT' : // Saturday + Sunday
	                    '[Última] dddd [às] LT'; // Monday - Friday
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'em %s',
	            past : '%s atrás',
	            s : 'poucos segundos',
	            m : 'um minuto',
	            mm : '%d minutos',
	            h : 'uma hora',
	            hh : '%d horas',
	            d : 'um dia',
	            dd : '%d dias',
	            M : 'um mês',
	            MM : '%d meses',
	            y : 'um ano',
	            yy : '%d anos'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal : '%dº'
	    });
	
	    return pt_br;
	
	}));

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : portuguese (pt)
	//! author : Jefferson : https://github.com/jalex79
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var pt = moment.defineLocale('pt', {
	        months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
	        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
	        weekdays : 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
	        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
	        weekdaysMin : 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY HH:mm',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Hoje às] LT',
	            nextDay: '[Amanhã às] LT',
	            nextWeek: 'dddd [às] LT',
	            lastDay: '[Ontem às] LT',
	            lastWeek: function () {
	                return (this.day() === 0 || this.day() === 6) ?
	                    '[Último] dddd [às] LT' : // Saturday + Sunday
	                    '[Última] dddd [às] LT'; // Monday - Friday
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'em %s',
	            past : 'há %s',
	            s : 'segundos',
	            m : 'um minuto',
	            mm : '%d minutos',
	            h : 'uma hora',
	            hh : '%d horas',
	            d : 'um dia',
	            dd : '%d dias',
	            M : 'um mês',
	            MM : '%d meses',
	            y : 'um ano',
	            yy : '%d anos'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal : '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return pt;
	
	}));

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : romanian (ro)
	//! author : Vlad Gurdiga : https://github.com/gurdiga
	//! author : Valentin Agachi : https://github.com/avaly
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	                'mm': 'minute',
	                'hh': 'ore',
	                'dd': 'zile',
	                'MM': 'luni',
	                'yy': 'ani'
	            },
	            separator = ' ';
	        if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
	            separator = ' de ';
	        }
	        return number + separator + format[key];
	    }
	
	    var ro = moment.defineLocale('ro', {
	        months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
	        monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
	        weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
	        weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY H:mm',
	            LLLL : 'dddd, D MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay: '[azi la] LT',
	            nextDay: '[mâine la] LT',
	            nextWeek: 'dddd [la] LT',
	            lastDay: '[ieri la] LT',
	            lastWeek: '[fosta] dddd [la] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'peste %s',
	            past : '%s în urmă',
	            s : 'câteva secunde',
	            m : 'un minut',
	            mm : relativeTimeWithPlural,
	            h : 'o oră',
	            hh : relativeTimeWithPlural,
	            d : 'o zi',
	            dd : relativeTimeWithPlural,
	            M : 'o lună',
	            MM : relativeTimeWithPlural,
	            y : 'un an',
	            yy : relativeTimeWithPlural
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ro;
	
	}));

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : russian (ru)
	//! author : Viktorminator : https://github.com/Viktorminator
	//! Author : Menelion Elensúle : https://github.com/Oire
	//! author : Коренберг Марк : https://github.com/socketpair
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
	            'hh': 'час_часа_часов',
	            'dd': 'день_дня_дней',
	            'MM': 'месяц_месяца_месяцев',
	            'yy': 'год_года_лет'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'минута' : 'минуту';
	        }
	        else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }
	    var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
	
	    // http://new.gramota.ru/spravka/rules/139-prop : § 103
	    // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
	    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
	    var ru = moment.defineLocale('ru', {
	        months : {
	            format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
	            standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
	        },
	        monthsShort : {
	            // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
	            format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
	            standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
	        },
	        weekdays : {
	            standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
	            format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
	            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
	        },
	        weekdaysShort : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	        weekdaysMin : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	        monthsParse : monthsParse,
	        longMonthsParse : monthsParse,
	        shortMonthsParse : monthsParse,
	        monthsRegex: /^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|сент\.|февр\.|нояб\.|июнь|янв.|июль|дек.|авг.|апр.|марта|мар[.т]|окт.|июн[яь]|июл[яь]|ма[яй])/i,
	        monthsShortRegex: /^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|сент\.|февр\.|нояб\.|июнь|янв.|июль|дек.|авг.|апр.|марта|мар[.т]|окт.|июн[яь]|июл[яь]|ма[яй])/i,
	        monthsStrictRegex: /^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|марта?|июн[яь]|июл[яь]|ма[яй])/i,
	        monthsShortStrictRegex: /^(нояб\.|февр\.|сент\.|июль|янв\.|июн[яь]|мар[.т]|авг\.|апр\.|окт\.|дек\.|ма[яй])/i,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY г.',
	            LLL : 'D MMMM YYYY г., HH:mm',
	            LLLL : 'dddd, D MMMM YYYY г., HH:mm'
	        },
	        calendar : {
	            sameDay: '[Сегодня в] LT',
	            nextDay: '[Завтра в] LT',
	            lastDay: '[Вчера в] LT',
	            nextWeek: function (now) {
	                if (now.week() !== this.week()) {
	                    switch (this.day()) {
	                    case 0:
	                        return '[В следующее] dddd [в] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                        return '[В следующий] dddd [в] LT';
	                    case 3:
	                    case 5:
	                    case 6:
	                        return '[В следующую] dddd [в] LT';
	                    }
	                } else {
	                    if (this.day() === 2) {
	                        return '[Во] dddd [в] LT';
	                    } else {
	                        return '[В] dddd [в] LT';
	                    }
	                }
	            },
	            lastWeek: function (now) {
	                if (now.week() !== this.week()) {
	                    switch (this.day()) {
	                    case 0:
	                        return '[В прошлое] dddd [в] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                        return '[В прошлый] dddd [в] LT';
	                    case 3:
	                    case 5:
	                    case 6:
	                        return '[В прошлую] dddd [в] LT';
	                    }
	                } else {
	                    if (this.day() === 2) {
	                        return '[Во] dddd [в] LT';
	                    } else {
	                        return '[В] dddd [в] LT';
	                    }
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'через %s',
	            past : '%s назад',
	            s : 'несколько секунд',
	            m : relativeTimeWithPlural,
	            mm : relativeTimeWithPlural,
	            h : 'час',
	            hh : relativeTimeWithPlural,
	            d : 'день',
	            dd : relativeTimeWithPlural,
	            M : 'месяц',
	            MM : relativeTimeWithPlural,
	            y : 'год',
	            yy : relativeTimeWithPlural
	        },
	        meridiemParse: /ночи|утра|дня|вечера/i,
	        isPM : function (input) {
	            return /^(дня|вечера)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночи';
	            } else if (hour < 12) {
	                return 'утра';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечера';
	            }
	        },
	        ordinalParse: /\d{1,2}-(й|го|я)/,
	        ordinal: function (number, period) {
	            switch (period) {
	            case 'M':
	            case 'd':
	            case 'DDD':
	                return number + '-й';
	            case 'D':
	                return number + '-го';
	            case 'w':
	            case 'W':
	                return number + '-я';
	            default:
	                return number;
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ru;
	
	}));

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Northern Sami (se)
	//! authors : Bård Rolstad Henriksen : https://github.com/karamell
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	
	    var se = moment.defineLocale('se', {
	        months : 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
	        monthsShort : 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
	        weekdays : 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
	        weekdaysShort : 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
	        weekdaysMin : 's_v_m_g_d_b_L'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'MMMM D. [b.] YYYY',
	            LLL : 'MMMM D. [b.] YYYY [ti.] HH:mm',
	            LLLL : 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
	        },
	        calendar : {
	            sameDay: '[otne ti] LT',
	            nextDay: '[ihttin ti] LT',
	            nextWeek: 'dddd [ti] LT',
	            lastDay: '[ikte ti] LT',
	            lastWeek: '[ovddit] dddd [ti] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : '%s geažes',
	            past : 'maŋit %s',
	            s : 'moadde sekunddat',
	            m : 'okta minuhta',
	            mm : '%d minuhtat',
	            h : 'okta diimmu',
	            hh : '%d diimmut',
	            d : 'okta beaivi',
	            dd : '%d beaivvit',
	            M : 'okta mánnu',
	            MM : '%d mánut',
	            y : 'okta jahki',
	            yy : '%d jagit'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return se;
	
	}));

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Sinhalese (si)
	//! author : Sampath Sitinamaluwa : https://github.com/sampathsris
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    /*jshint -W100*/
	    var si = moment.defineLocale('si', {
	        months : 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
	        monthsShort : 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
	        weekdays : 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
	        weekdaysShort : 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
	        weekdaysMin : 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'a h:mm',
	            LTS : 'a h:mm:ss',
	            L : 'YYYY/MM/DD',
	            LL : 'YYYY MMMM D',
	            LLL : 'YYYY MMMM D, a h:mm',
	            LLLL : 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
	        },
	        calendar : {
	            sameDay : '[අද] LT[ට]',
	            nextDay : '[හෙට] LT[ට]',
	            nextWeek : 'dddd LT[ට]',
	            lastDay : '[ඊයේ] LT[ට]',
	            lastWeek : '[පසුගිය] dddd LT[ට]',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%sකින්',
	            past : '%sකට පෙර',
	            s : 'තත්පර කිහිපය',
	            m : 'මිනිත්තුව',
	            mm : 'මිනිත්තු %d',
	            h : 'පැය',
	            hh : 'පැය %d',
	            d : 'දිනය',
	            dd : 'දින %d',
	            M : 'මාසය',
	            MM : 'මාස %d',
	            y : 'වසර',
	            yy : 'වසර %d'
	        },
	        ordinalParse: /\d{1,2} වැනි/,
	        ordinal : function (number) {
	            return number + ' වැනි';
	        },
	        meridiemParse : /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
	        isPM : function (input) {
	            return input === 'ප.ව.' || input === 'පස් වරු';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'ප.ව.' : 'පස් වරු';
	            } else {
	                return isLower ? 'පෙ.ව.' : 'පෙර වරු';
	            }
	        }
	    });
	
	    return si;
	
	}));

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : slovak (sk)
	//! author : Martin Minka : https://github.com/k2s
	//! based on work of petrbela : https://github.com/petrbela
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
	        monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
	    function plural(n) {
	        return (n > 1) && (n < 5);
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	        case 's':  // a few seconds / in a few seconds / a few seconds ago
	            return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
	        case 'm':  // a minute / in a minute / a minute ago
	            return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
	        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'minúty' : 'minút');
	            } else {
	                return result + 'minútami';
	            }
	            break;
	        case 'h':  // an hour / in an hour / an hour ago
	            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
	        case 'hh': // 9 hours / in 9 hours / 9 hours ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'hodiny' : 'hodín');
	            } else {
	                return result + 'hodinami';
	            }
	            break;
	        case 'd':  // a day / in a day / a day ago
	            return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
	        case 'dd': // 9 days / in 9 days / 9 days ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'dni' : 'dní');
	            } else {
	                return result + 'dňami';
	            }
	            break;
	        case 'M':  // a month / in a month / a month ago
	            return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
	        case 'MM': // 9 months / in 9 months / 9 months ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'mesiace' : 'mesiacov');
	            } else {
	                return result + 'mesiacmi';
	            }
	            break;
	        case 'y':  // a year / in a year / a year ago
	            return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
	        case 'yy': // 9 years / in 9 years / 9 years ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'roky' : 'rokov');
	            } else {
	                return result + 'rokmi';
	            }
	            break;
	        }
	    }
	
	    var sk = moment.defineLocale('sk', {
	        months : months,
	        monthsShort : monthsShort,
	        weekdays : 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
	        weekdaysShort : 'ne_po_ut_st_št_pi_so'.split('_'),
	        weekdaysMin : 'ne_po_ut_st_št_pi_so'.split('_'),
	        longDateFormat : {
	            LT: 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd D. MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay: '[dnes o] LT',
	            nextDay: '[zajtra o] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[v nedeľu o] LT';
	                case 1:
	                case 2:
	                    return '[v] dddd [o] LT';
	                case 3:
	                    return '[v stredu o] LT';
	                case 4:
	                    return '[vo štvrtok o] LT';
	                case 5:
	                    return '[v piatok o] LT';
	                case 6:
	                    return '[v sobotu o] LT';
	                }
	            },
	            lastDay: '[včera o] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[minulú nedeľu o] LT';
	                case 1:
	                case 2:
	                    return '[minulý] dddd [o] LT';
	                case 3:
	                    return '[minulú stredu o] LT';
	                case 4:
	                case 5:
	                    return '[minulý] dddd [o] LT';
	                case 6:
	                    return '[minulú sobotu o] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past : 'pred %s',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return sk;
	
	}));

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : slovenian (sl)
	//! author : Robert Sedovšek : https://github.com/sedovsek
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	        case 's':
	            return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
	        case 'm':
	            return withoutSuffix ? 'ena minuta' : 'eno minuto';
	        case 'mm':
	            if (number === 1) {
	                result += withoutSuffix ? 'minuta' : 'minuto';
	            } else if (number === 2) {
	                result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
	            } else if (number < 5) {
	                result += withoutSuffix || isFuture ? 'minute' : 'minutami';
	            } else {
	                result += withoutSuffix || isFuture ? 'minut' : 'minutami';
	            }
	            return result;
	        case 'h':
	            return withoutSuffix ? 'ena ura' : 'eno uro';
	        case 'hh':
	            if (number === 1) {
	                result += withoutSuffix ? 'ura' : 'uro';
	            } else if (number === 2) {
	                result += withoutSuffix || isFuture ? 'uri' : 'urama';
	            } else if (number < 5) {
	                result += withoutSuffix || isFuture ? 'ure' : 'urami';
	            } else {
	                result += withoutSuffix || isFuture ? 'ur' : 'urami';
	            }
	            return result;
	        case 'd':
	            return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
	        case 'dd':
	            if (number === 1) {
	                result += withoutSuffix || isFuture ? 'dan' : 'dnem';
	            } else if (number === 2) {
	                result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
	            } else {
	                result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
	            }
	            return result;
	        case 'M':
	            return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
	        case 'MM':
	            if (number === 1) {
	                result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
	            } else if (number === 2) {
	                result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
	            } else if (number < 5) {
	                result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
	            } else {
	                result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
	            }
	            return result;
	        case 'y':
	            return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
	        case 'yy':
	            if (number === 1) {
	                result += withoutSuffix || isFuture ? 'leto' : 'letom';
	            } else if (number === 2) {
	                result += withoutSuffix || isFuture ? 'leti' : 'letoma';
	            } else if (number < 5) {
	                result += withoutSuffix || isFuture ? 'leta' : 'leti';
	            } else {
	                result += withoutSuffix || isFuture ? 'let' : 'leti';
	            }
	            return result;
	        }
	    }
	
	    var sl = moment.defineLocale('sl', {
	        months : 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
	        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
	        weekdaysShort : 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
	        weekdaysMin : 'ne_po_to_sr_če_pe_so'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD. MM. YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay  : '[danes ob] LT',
	            nextDay  : '[jutri ob] LT',
	
	            nextWeek : function () {
	                switch (this.day()) {
	                case 0:
	                    return '[v] [nedeljo] [ob] LT';
	                case 3:
	                    return '[v] [sredo] [ob] LT';
	                case 6:
	                    return '[v] [soboto] [ob] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[v] dddd [ob] LT';
	                }
	            },
	            lastDay  : '[včeraj ob] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                case 0:
	                    return '[prejšnjo] [nedeljo] [ob] LT';
	                case 3:
	                    return '[prejšnjo] [sredo] [ob] LT';
	                case 6:
	                    return '[prejšnjo] [soboto] [ob] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[prejšnji] dddd [ob] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'čez %s',
	            past   : 'pred %s',
	            s      : processRelativeTime,
	            m      : processRelativeTime,
	            mm     : processRelativeTime,
	            h      : processRelativeTime,
	            hh     : processRelativeTime,
	            d      : processRelativeTime,
	            dd     : processRelativeTime,
	            M      : processRelativeTime,
	            MM     : processRelativeTime,
	            y      : processRelativeTime,
	            yy     : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return sl;
	
	}));

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Albanian (sq)
	//! author : Flakërim Ismani : https://github.com/flakerimi
	//! author: Menelion Elensúle: https://github.com/Oire (tests)
	//! author : Oerd Cukalla : https://github.com/oerd (fixes)
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var sq = moment.defineLocale('sq', {
	        months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
	        monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
	        weekdays : 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
	        weekdaysShort : 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
	        weekdaysMin : 'D_H_Ma_Më_E_P_Sh'.split('_'),
	        weekdaysParseExact : true,
	        meridiemParse: /PD|MD/,
	        isPM: function (input) {
	            return input.charAt(0) === 'M';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            return hours < 12 ? 'PD' : 'MD';
	        },
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Sot në] LT',
	            nextDay : '[Nesër në] LT',
	            nextWeek : 'dddd [në] LT',
	            lastDay : '[Dje në] LT',
	            lastWeek : 'dddd [e kaluar në] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'në %s',
	            past : '%s më parë',
	            s : 'disa sekonda',
	            m : 'një minutë',
	            mm : '%d minuta',
	            h : 'një orë',
	            hh : '%d orë',
	            d : 'një ditë',
	            dd : '%d ditë',
	            M : 'një muaj',
	            MM : '%d muaj',
	            y : 'një vit',
	            yy : '%d vite'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return sq;
	
	}));

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Serbian-cyrillic (sr-cyrl)
	//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var translator = {
	        words: { //Different grammatical cases
	            m: ['један минут', 'једне минуте'],
	            mm: ['минут', 'минуте', 'минута'],
	            h: ['један сат', 'једног сата'],
	            hh: ['сат', 'сата', 'сати'],
	            dd: ['дан', 'дана', 'дана'],
	            MM: ['месец', 'месеца', 'месеци'],
	            yy: ['година', 'године', 'година']
	        },
	        correctGrammaticalCase: function (number, wordKey) {
	            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	        },
	        translate: function (number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };
	
	    var sr_cyrl = moment.defineLocale('sr-cyrl', {
	        months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
	        monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
	        monthsParseExact: true,
	        weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
	        weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
	        weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS : 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[данас у] LT',
	            nextDay: '[сутра у] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[у] [недељу] [у] LT';
	                case 3:
	                    return '[у] [среду] [у] LT';
	                case 6:
	                    return '[у] [суботу] [у] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[у] dddd [у] LT';
	                }
	            },
	            lastDay  : '[јуче у] LT',
	            lastWeek : function () {
	                var lastWeekDays = [
	                    '[прошле] [недеље] [у] LT',
	                    '[прошлог] [понедељка] [у] LT',
	                    '[прошлог] [уторка] [у] LT',
	                    '[прошле] [среде] [у] LT',
	                    '[прошлог] [четвртка] [у] LT',
	                    '[прошлог] [петка] [у] LT',
	                    '[прошле] [суботе] [у] LT'
	                ];
	                return lastWeekDays[this.day()];
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'за %s',
	            past   : 'пре %s',
	            s      : 'неколико секунди',
	            m      : translator.translate,
	            mm     : translator.translate,
	            h      : translator.translate,
	            hh     : translator.translate,
	            d      : 'дан',
	            dd     : translator.translate,
	            M      : 'месец',
	            MM     : translator.translate,
	            y      : 'годину',
	            yy     : translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return sr_cyrl;
	
	}));

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Serbian-latin (sr)
	//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var translator = {
	        words: { //Different grammatical cases
	            m: ['jedan minut', 'jedne minute'],
	            mm: ['minut', 'minute', 'minuta'],
	            h: ['jedan sat', 'jednog sata'],
	            hh: ['sat', 'sata', 'sati'],
	            dd: ['dan', 'dana', 'dana'],
	            MM: ['mesec', 'meseca', 'meseci'],
	            yy: ['godina', 'godine', 'godina']
	        },
	        correctGrammaticalCase: function (number, wordKey) {
	            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	        },
	        translate: function (number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };
	
	    var sr = moment.defineLocale('sr', {
	        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
	        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
	        monthsParseExact: true,
	        weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
	        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS : 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sutra u] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[u] [nedelju] [u] LT';
	                case 3:
	                    return '[u] [sredu] [u] LT';
	                case 6:
	                    return '[u] [subotu] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[juče u] LT',
	            lastWeek : function () {
	                var lastWeekDays = [
	                    '[prošle] [nedelje] [u] LT',
	                    '[prošlog] [ponedeljka] [u] LT',
	                    '[prošlog] [utorka] [u] LT',
	                    '[prošle] [srede] [u] LT',
	                    '[prošlog] [četvrtka] [u] LT',
	                    '[prošlog] [petka] [u] LT',
	                    '[prošle] [subote] [u] LT'
	                ];
	                return lastWeekDays[this.day()];
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'pre %s',
	            s      : 'nekoliko sekundi',
	            m      : translator.translate,
	            mm     : translator.translate,
	            h      : translator.translate,
	            hh     : translator.translate,
	            d      : 'dan',
	            dd     : translator.translate,
	            M      : 'mesec',
	            MM     : translator.translate,
	            y      : 'godinu',
	            yy     : translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return sr;
	
	}));

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : siSwati (ss)
	//! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	
	    var ss = moment.defineLocale('ss', {
	        months : "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
	        monthsShort : 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
	        weekdays : 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
	        weekdaysShort : 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
	        weekdaysMin : 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY h:mm A',
	            LLLL : 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendar : {
	            sameDay : '[Namuhla nga] LT',
	            nextDay : '[Kusasa nga] LT',
	            nextWeek : 'dddd [nga] LT',
	            lastDay : '[Itolo nga] LT',
	            lastWeek : 'dddd [leliphelile] [nga] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'nga %s',
	            past : 'wenteka nga %s',
	            s : 'emizuzwana lomcane',
	            m : 'umzuzu',
	            mm : '%d emizuzu',
	            h : 'lihora',
	            hh : '%d emahora',
	            d : 'lilanga',
	            dd : '%d emalanga',
	            M : 'inyanga',
	            MM : '%d tinyanga',
	            y : 'umnyaka',
	            yy : '%d iminyaka'
	        },
	        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'ekuseni';
	            } else if (hours < 15) {
	                return 'emini';
	            } else if (hours < 19) {
	                return 'entsambama';
	            } else {
	                return 'ebusuku';
	            }
	        },
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'ekuseni') {
	                return hour;
	            } else if (meridiem === 'emini') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
	                if (hour === 0) {
	                    return 0;
	                }
	                return hour + 12;
	            }
	        },
	        ordinalParse: /\d{1,2}/,
	        ordinal : '%d',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return ss;
	
	}));

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : swedish (sv)
	//! author : Jens Alm : https://github.com/ulmus
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var sv = moment.defineLocale('sv', {
	        months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	        weekdays : 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
	        weekdaysShort : 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
	        weekdaysMin : 'sö_må_ti_on_to_fr_lö'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [kl.] HH:mm',
	            LLLL : 'dddd D MMMM YYYY [kl.] HH:mm',
	            lll : 'D MMM YYYY HH:mm',
	            llll : 'ddd D MMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Idag] LT',
	            nextDay: '[Imorgon] LT',
	            lastDay: '[Igår] LT',
	            nextWeek: '[På] dddd LT',
	            lastWeek: '[I] dddd[s] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : 'för %s sedan',
	            s : 'några sekunder',
	            m : 'en minut',
	            mm : '%d minuter',
	            h : 'en timme',
	            hh : '%d timmar',
	            d : 'en dag',
	            dd : '%d dagar',
	            M : 'en månad',
	            MM : '%d månader',
	            y : 'ett år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}(e|a)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'e' :
	                (b === 1) ? 'a' :
	                (b === 2) ? 'a' :
	                (b === 3) ? 'e' : 'e';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return sv;
	
	}));

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : swahili (sw)
	//! author : Fahad Kassim : https://github.com/fadsel
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var sw = moment.defineLocale('sw', {
	        months : 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
	        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
	        weekdays : 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
	        weekdaysShort : 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
	        weekdaysMin : 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[leo saa] LT',
	            nextDay : '[kesho saa] LT',
	            nextWeek : '[wiki ijayo] dddd [saat] LT',
	            lastDay : '[jana] LT',
	            lastWeek : '[wiki iliyopita] dddd [saat] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s baadaye',
	            past : 'tokea %s',
	            s : 'hivi punde',
	            m : 'dakika moja',
	            mm : 'dakika %d',
	            h : 'saa limoja',
	            hh : 'masaa %d',
	            d : 'siku moja',
	            dd : 'masiku %d',
	            M : 'mwezi mmoja',
	            MM : 'miezi %d',
	            y : 'mwaka mmoja',
	            yy : 'miaka %d'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return sw;
	
	}));

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : tamil (ta)
	//! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '௧',
	        '2': '௨',
	        '3': '௩',
	        '4': '௪',
	        '5': '௫',
	        '6': '௬',
	        '7': '௭',
	        '8': '௮',
	        '9': '௯',
	        '0': '௦'
	    }, numberMap = {
	        '௧': '1',
	        '௨': '2',
	        '௩': '3',
	        '௪': '4',
	        '௫': '5',
	        '௬': '6',
	        '௭': '7',
	        '௮': '8',
	        '௯': '9',
	        '௦': '0'
	    };
	
	    var ta = moment.defineLocale('ta', {
	        months : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	        monthsShort : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	        weekdays : 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
	        weekdaysShort : 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
	        weekdaysMin : 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, HH:mm',
	            LLLL : 'dddd, D MMMM YYYY, HH:mm'
	        },
	        calendar : {
	            sameDay : '[இன்று] LT',
	            nextDay : '[நாளை] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[நேற்று] LT',
	            lastWeek : '[கடந்த வாரம்] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s இல்',
	            past : '%s முன்',
	            s : 'ஒரு சில விநாடிகள்',
	            m : 'ஒரு நிமிடம்',
	            mm : '%d நிமிடங்கள்',
	            h : 'ஒரு மணி நேரம்',
	            hh : '%d மணி நேரம்',
	            d : 'ஒரு நாள்',
	            dd : '%d நாட்கள்',
	            M : 'ஒரு மாதம்',
	            MM : '%d மாதங்கள்',
	            y : 'ஒரு வருடம்',
	            yy : '%d ஆண்டுகள்'
	        },
	        ordinalParse: /\d{1,2}வது/,
	        ordinal : function (number) {
	            return number + 'வது';
	        },
	        preparse: function (string) {
	            return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // refer http://ta.wikipedia.org/s/1er1
	        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 2) {
	                return ' யாமம்';
	            } else if (hour < 6) {
	                return ' வைகறை';  // வைகறை
	            } else if (hour < 10) {
	                return ' காலை'; // காலை
	            } else if (hour < 14) {
	                return ' நண்பகல்'; // நண்பகல்
	            } else if (hour < 18) {
	                return ' எற்பாடு'; // எற்பாடு
	            } else if (hour < 22) {
	                return ' மாலை'; // மாலை
	            } else {
	                return ' யாமம்';
	            }
	        },
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'யாமம்') {
	                return hour < 2 ? hour : hour + 12;
	            } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
	                return hour;
	            } else if (meridiem === 'நண்பகல்') {
	                return hour >= 10 ? hour : hour + 12;
	            } else {
	                return hour + 12;
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ta;
	
	}));

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : telugu (te)
	//! author : Krishna Chaitanya Thota : https://github.com/kcthota
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var te = moment.defineLocale('te', {
	        months : 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
	        monthsShort : 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
	        weekdaysShort : 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
	        weekdaysMin : 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm',
	            LTS : 'A h:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm'
	        },
	        calendar : {
	            sameDay : '[నేడు] LT',
	            nextDay : '[రేపు] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[నిన్న] LT',
	            lastWeek : '[గత] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s లో',
	            past : '%s క్రితం',
	            s : 'కొన్ని క్షణాలు',
	            m : 'ఒక నిమిషం',
	            mm : '%d నిమిషాలు',
	            h : 'ఒక గంట',
	            hh : '%d గంటలు',
	            d : 'ఒక రోజు',
	            dd : '%d రోజులు',
	            M : 'ఒక నెల',
	            MM : '%d నెలలు',
	            y : 'ఒక సంవత్సరం',
	            yy : '%d సంవత్సరాలు'
	        },
	        ordinalParse : /\d{1,2}వ/,
	        ordinal : '%dవ',
	        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'రాత్రి') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'ఉదయం') {
	                return hour;
	            } else if (meridiem === 'మధ్యాహ్నం') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'సాయంత్రం') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'రాత్రి';
	            } else if (hour < 10) {
	                return 'ఉదయం';
	            } else if (hour < 17) {
	                return 'మధ్యాహ్నం';
	            } else if (hour < 20) {
	                return 'సాయంత్రం';
	            } else {
	                return 'రాత్రి';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return te;
	
	}));

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : thai (th)
	//! author : Kridsada Thanabulpong : https://github.com/sirn
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var th = moment.defineLocale('th', {
	        months : 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
	        monthsShort : 'มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
	        weekdaysShort : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
	        weekdaysMin : 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H นาฬิกา m นาที',
	            LTS : 'H นาฬิกา m นาที s วินาที',
	            L : 'YYYY/MM/DD',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY เวลา H นาฬิกา m นาที',
	            LLLL : 'วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที'
	        },
	        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
	        isPM: function (input) {
	            return input === 'หลังเที่ยง';
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ก่อนเที่ยง';
	            } else {
	                return 'หลังเที่ยง';
	            }
	        },
	        calendar : {
	            sameDay : '[วันนี้ เวลา] LT',
	            nextDay : '[พรุ่งนี้ เวลา] LT',
	            nextWeek : 'dddd[หน้า เวลา] LT',
	            lastDay : '[เมื่อวานนี้ เวลา] LT',
	            lastWeek : '[วัน]dddd[ที่แล้ว เวลา] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'อีก %s',
	            past : '%sที่แล้ว',
	            s : 'ไม่กี่วินาที',
	            m : '1 นาที',
	            mm : '%d นาที',
	            h : '1 ชั่วโมง',
	            hh : '%d ชั่วโมง',
	            d : '1 วัน',
	            dd : '%d วัน',
	            M : '1 เดือน',
	            MM : '%d เดือน',
	            y : '1 ปี',
	            yy : '%d ปี'
	        }
	    });
	
	    return th;
	
	}));

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tagalog/Filipino (tl-ph)
	//! author : Dan Hagman
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var tl_ph = moment.defineLocale('tl-ph', {
	        months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
	        monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
	        weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
	        weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
	        weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'MM/D/YYYY',
	            LL : 'MMMM D, YYYY',
	            LLL : 'MMMM D, YYYY HH:mm',
	            LLLL : 'dddd, MMMM DD, YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Ngayon sa] LT',
	            nextDay: '[Bukas sa] LT',
	            nextWeek: 'dddd [sa] LT',
	            lastDay: '[Kahapon sa] LT',
	            lastWeek: 'dddd [huling linggo] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'sa loob ng %s',
	            past : '%s ang nakalipas',
	            s : 'ilang segundo',
	            m : 'isang minuto',
	            mm : '%d minuto',
	            h : 'isang oras',
	            hh : '%d oras',
	            d : 'isang araw',
	            dd : '%d araw',
	            M : 'isang buwan',
	            MM : '%d buwan',
	            y : 'isang taon',
	            yy : '%d taon'
	        },
	        ordinalParse: /\d{1,2}/,
	        ordinal : function (number) {
	            return number;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return tl_ph;
	
	}));

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Klingon (tlh)
	//! author : Dominika Kruk : https://github.com/amaranthrose
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');
	
	    function translateFuture(output) {
	        var time = output;
	        time = (output.indexOf('jaj') !== -1) ?
	    	time.slice(0, -3) + 'leS' :
	    	(output.indexOf('jar') !== -1) ?
	    	time.slice(0, -3) + 'waQ' :
	    	(output.indexOf('DIS') !== -1) ?
	    	time.slice(0, -3) + 'nem' :
	    	time + ' pIq';
	        return time;
	    }
	
	    function translatePast(output) {
	        var time = output;
	        time = (output.indexOf('jaj') !== -1) ?
	    	time.slice(0, -3) + 'Hu’' :
	    	(output.indexOf('jar') !== -1) ?
	    	time.slice(0, -3) + 'wen' :
	    	(output.indexOf('DIS') !== -1) ?
	    	time.slice(0, -3) + 'ben' :
	    	time + ' ret';
	        return time;
	    }
	
	    function translate(number, withoutSuffix, string, isFuture) {
	        var numberNoun = numberAsNoun(number);
	        switch (string) {
	            case 'mm':
	                return numberNoun + ' tup';
	            case 'hh':
	                return numberNoun + ' rep';
	            case 'dd':
	                return numberNoun + ' jaj';
	            case 'MM':
	                return numberNoun + ' jar';
	            case 'yy':
	                return numberNoun + ' DIS';
	        }
	    }
	
	    function numberAsNoun(number) {
	        var hundred = Math.floor((number % 1000) / 100),
	    	ten = Math.floor((number % 100) / 10),
	    	one = number % 10,
	    	word = '';
	        if (hundred > 0) {
	            word += numbersNouns[hundred] + 'vatlh';
	        }
	        if (ten > 0) {
	            word += ((word !== '') ? ' ' : '') + numbersNouns[ten] + 'maH';
	        }
	        if (one > 0) {
	            word += ((word !== '') ? ' ' : '') + numbersNouns[one];
	        }
	        return (word === '') ? 'pagh' : word;
	    }
	
	    var tlh = moment.defineLocale('tlh', {
	        months : 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
	        monthsShort : 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	        weekdaysShort : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	        weekdaysMin : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[DaHjaj] LT',
	            nextDay: '[wa’leS] LT',
	            nextWeek: 'LLL',
	            lastDay: '[wa’Hu’] LT',
	            lastWeek: 'LLL',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : translateFuture,
	            past : translatePast,
	            s : 'puS lup',
	            m : 'wa’ tup',
	            mm : translate,
	            h : 'wa’ rep',
	            hh : translate,
	            d : 'wa’ jaj',
	            dd : translate,
	            M : 'wa’ jar',
	            MM : translate,
	            y : 'wa’ DIS',
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return tlh;
	
	}));

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : turkish (tr)
	//! authors : Erhan Gundogan : https://github.com/erhangundogan,
	//!           Burak Yiğit Kaya: https://github.com/BYK
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var suffixes = {
	        1: '\'inci',
	        5: '\'inci',
	        8: '\'inci',
	        70: '\'inci',
	        80: '\'inci',
	        2: '\'nci',
	        7: '\'nci',
	        20: '\'nci',
	        50: '\'nci',
	        3: '\'üncü',
	        4: '\'üncü',
	        100: '\'üncü',
	        6: '\'ncı',
	        9: '\'uncu',
	        10: '\'uncu',
	        30: '\'uncu',
	        60: '\'ıncı',
	        90: '\'ıncı'
	    };
	
	    var tr = moment.defineLocale('tr', {
	        months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
	        monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
	        weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
	        weekdaysShort : 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
	        weekdaysMin : 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[bugün saat] LT',
	            nextDay : '[yarın saat] LT',
	            nextWeek : '[haftaya] dddd [saat] LT',
	            lastDay : '[dün] LT',
	            lastWeek : '[geçen hafta] dddd [saat] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s sonra',
	            past : '%s önce',
	            s : 'birkaç saniye',
	            m : 'bir dakika',
	            mm : '%d dakika',
	            h : 'bir saat',
	            hh : '%d saat',
	            d : 'bir gün',
	            dd : '%d gün',
	            M : 'bir ay',
	            MM : '%d ay',
	            y : 'bir yıl',
	            yy : '%d yıl'
	        },
	        ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
	        ordinal : function (number) {
	            if (number === 0) {  // special case for zero
	                return number + '\'ıncı';
	            }
	            var a = number % 10,
	                b = number % 100 - a,
	                c = number >= 100 ? 100 : null;
	            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return tr;
	
	}));

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : talossan (tzl)
	//! author : Robin van der Vliet : https://github.com/robin0van0der0v with the help of Iustì Canun
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	
	    // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
	    // This is currently too difficult (maybe even impossible) to add.
	    var tzl = moment.defineLocale('tzl', {
	        months : 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
	        monthsShort : 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
	        weekdays : 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
	        weekdaysShort : 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
	        weekdaysMin : 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM [dallas] YYYY',
	            LLL : 'D. MMMM [dallas] YYYY HH.mm',
	            LLLL : 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
	        },
	        meridiemParse: /d\'o|d\'a/i,
	        isPM : function (input) {
	            return 'd\'o' === input.toLowerCase();
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'd\'o' : 'D\'O';
	            } else {
	                return isLower ? 'd\'a' : 'D\'A';
	            }
	        },
	        calendar : {
	            sameDay : '[oxhi à] LT',
	            nextDay : '[demà à] LT',
	            nextWeek : 'dddd [à] LT',
	            lastDay : '[ieiri à] LT',
	            lastWeek : '[sür el] dddd [lasteu à] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'osprei %s',
	            past : 'ja%s',
	            s : processRelativeTime,
	            m : processRelativeTime,
	            mm : processRelativeTime,
	            h : processRelativeTime,
	            hh : processRelativeTime,
	            d : processRelativeTime,
	            dd : processRelativeTime,
	            M : processRelativeTime,
	            MM : processRelativeTime,
	            y : processRelativeTime,
	            yy : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            's': ['viensas secunds', '\'iensas secunds'],
	            'm': ['\'n míut', '\'iens míut'],
	            'mm': [number + ' míuts', '' + number + ' míuts'],
	            'h': ['\'n þora', '\'iensa þora'],
	            'hh': [number + ' þoras', '' + number + ' þoras'],
	            'd': ['\'n ziua', '\'iensa ziua'],
	            'dd': [number + ' ziuas', '' + number + ' ziuas'],
	            'M': ['\'n mes', '\'iens mes'],
	            'MM': [number + ' mesen', '' + number + ' mesen'],
	            'y': ['\'n ar', '\'iens ar'],
	            'yy': [number + ' ars', '' + number + ' ars']
	        };
	        return isFuture ? format[key][0] : (withoutSuffix ? format[key][0] : format[key][1]);
	    }
	
	    return tzl;
	
	}));

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Morocco Central Atlas Tamaziɣt in Latin (tzm-latn)
	//! author : Abdel Said : https://github.com/abdelsaid
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var tzm_latn = moment.defineLocale('tzm-latn', {
	        months : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	        monthsShort : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	        weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[asdkh g] LT',
	            nextDay: '[aska g] LT',
	            nextWeek: 'dddd [g] LT',
	            lastDay: '[assant g] LT',
	            lastWeek: 'dddd [g] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dadkh s yan %s',
	            past : 'yan %s',
	            s : 'imik',
	            m : 'minuḍ',
	            mm : '%d minuḍ',
	            h : 'saɛa',
	            hh : '%d tassaɛin',
	            d : 'ass',
	            dd : '%d ossan',
	            M : 'ayowr',
	            MM : '%d iyyirn',
	            y : 'asgas',
	            yy : '%d isgasn'
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return tzm_latn;
	
	}));

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Morocco Central Atlas Tamaziɣt (tzm)
	//! author : Abdel Said : https://github.com/abdelsaid
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var tzm = moment.defineLocale('tzm', {
	        months : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	        monthsShort : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	        weekdays : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        weekdaysShort : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        weekdaysMin : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
	            nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
	            nextWeek: 'dddd [ⴴ] LT',
	            lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
	            lastWeek: 'dddd [ⴴ] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
	            past : 'ⵢⴰⵏ %s',
	            s : 'ⵉⵎⵉⴽ',
	            m : 'ⵎⵉⵏⵓⴺ',
	            mm : '%d ⵎⵉⵏⵓⴺ',
	            h : 'ⵙⴰⵄⴰ',
	            hh : '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
	            d : 'ⴰⵙⵙ',
	            dd : '%d oⵙⵙⴰⵏ',
	            M : 'ⴰⵢoⵓⵔ',
	            MM : '%d ⵉⵢⵢⵉⵔⵏ',
	            y : 'ⴰⵙⴳⴰⵙ',
	            yy : '%d ⵉⵙⴳⴰⵙⵏ'
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return tzm;
	
	}));

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : ukrainian (uk)
	//! author : zemlanin : https://github.com/zemlanin
	//! Author : Menelion Elensúle : https://github.com/Oire
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
	            'hh': withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
	            'dd': 'день_дні_днів',
	            'MM': 'місяць_місяці_місяців',
	            'yy': 'рік_роки_років'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'хвилина' : 'хвилину';
	        }
	        else if (key === 'h') {
	            return withoutSuffix ? 'година' : 'годину';
	        }
	        else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }
	    function weekdaysCaseReplace(m, format) {
	        var weekdays = {
	            'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
	            'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
	            'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
	        },
	        nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
	            'accusative' :
	            ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
	                'genitive' :
	                'nominative');
	        return weekdays[nounCase][m.day()];
	    }
	    function processHoursFunction(str) {
	        return function () {
	            return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
	        };
	    }
	
	    var uk = moment.defineLocale('uk', {
	        months : {
	            'format': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
	            'standalone': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
	        },
	        monthsShort : 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
	        weekdays : weekdaysCaseReplace,
	        weekdaysShort : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY р.',
	            LLL : 'D MMMM YYYY р., HH:mm',
	            LLLL : 'dddd, D MMMM YYYY р., HH:mm'
	        },
	        calendar : {
	            sameDay: processHoursFunction('[Сьогодні '),
	            nextDay: processHoursFunction('[Завтра '),
	            lastDay: processHoursFunction('[Вчора '),
	            nextWeek: processHoursFunction('[У] dddd ['),
	            lastWeek: function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                case 5:
	                case 6:
	                    return processHoursFunction('[Минулої] dddd [').call(this);
	                case 1:
	                case 2:
	                case 4:
	                    return processHoursFunction('[Минулого] dddd [').call(this);
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'за %s',
	            past : '%s тому',
	            s : 'декілька секунд',
	            m : relativeTimeWithPlural,
	            mm : relativeTimeWithPlural,
	            h : 'годину',
	            hh : relativeTimeWithPlural,
	            d : 'день',
	            dd : relativeTimeWithPlural,
	            M : 'місяць',
	            MM : relativeTimeWithPlural,
	            y : 'рік',
	            yy : relativeTimeWithPlural
	        },
	        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
	        meridiemParse: /ночі|ранку|дня|вечора/,
	        isPM: function (input) {
	            return /^(дня|вечора)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночі';
	            } else if (hour < 12) {
	                return 'ранку';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечора';
	            }
	        },
	        ordinalParse: /\d{1,2}-(й|го)/,
	        ordinal: function (number, period) {
	            switch (period) {
	            case 'M':
	            case 'd':
	            case 'DDD':
	            case 'w':
	            case 'W':
	                return number + '-й';
	            case 'D':
	                return number + '-го';
	            default:
	                return number;
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return uk;
	
	}));

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : uzbek (uz)
	//! author : Sardor Muminov : https://github.com/muminoff
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var uz = moment.defineLocale('uz', {
	        months : 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
	        monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
	        weekdays : 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
	        weekdaysShort : 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
	        weekdaysMin : 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'D MMMM YYYY, dddd HH:mm'
	        },
	        calendar : {
	            sameDay : '[Бугун соат] LT [да]',
	            nextDay : '[Эртага] LT [да]',
	            nextWeek : 'dddd [куни соат] LT [да]',
	            lastDay : '[Кеча соат] LT [да]',
	            lastWeek : '[Утган] dddd [куни соат] LT [да]',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'Якин %s ичида',
	            past : 'Бир неча %s олдин',
	            s : 'фурсат',
	            m : 'бир дакика',
	            mm : '%d дакика',
	            h : 'бир соат',
	            hh : '%d соат',
	            d : 'бир кун',
	            dd : '%d кун',
	            M : 'бир ой',
	            MM : '%d ой',
	            y : 'бир йил',
	            yy : '%d йил'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return uz;
	
	}));

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : vietnamese (vi)
	//! author : Bang Nguyen : https://github.com/bangnk
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var vi = moment.defineLocale('vi', {
	        months : 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
	        monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
	        weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	        weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	        weekdaysParseExact : true,
	        meridiemParse: /sa|ch/i,
	        isPM : function (input) {
	            return /^ch$/i.test(input);
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower ? 'sa' : 'SA';
	            } else {
	                return isLower ? 'ch' : 'CH';
	            }
	        },
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM [năm] YYYY',
	            LLL : 'D MMMM [năm] YYYY HH:mm',
	            LLLL : 'dddd, D MMMM [năm] YYYY HH:mm',
	            l : 'DD/M/YYYY',
	            ll : 'D MMM YYYY',
	            lll : 'D MMM YYYY HH:mm',
	            llll : 'ddd, D MMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Hôm nay lúc] LT',
	            nextDay: '[Ngày mai lúc] LT',
	            nextWeek: 'dddd [tuần tới lúc] LT',
	            lastDay: '[Hôm qua lúc] LT',
	            lastWeek: 'dddd [tuần rồi lúc] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : '%s tới',
	            past : '%s trước',
	            s : 'vài giây',
	            m : 'một phút',
	            mm : '%d phút',
	            h : 'một giờ',
	            hh : '%d giờ',
	            d : 'một ngày',
	            dd : '%d ngày',
	            M : 'một tháng',
	            MM : '%d tháng',
	            y : 'một năm',
	            yy : '%d năm'
	        },
	        ordinalParse: /\d{1,2}/,
	        ordinal : function (number) {
	            return number;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return vi;
	
	}));

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : pseudo (x-pseudo)
	//! author : Andrew Hood : https://github.com/andrewhood125
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var x_pseudo = moment.defineLocale('x-pseudo', {
	        months : 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
	        monthsShort : 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
	        weekdaysShort : 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
	        weekdaysMin : 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[T~ódá~ý át] LT',
	            nextDay : '[T~ómó~rró~w át] LT',
	            nextWeek : 'dddd [át] LT',
	            lastDay : '[Ý~ést~érdá~ý át] LT',
	            lastWeek : '[L~ást] dddd [át] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'í~ñ %s',
	            past : '%s á~gó',
	            s : 'á ~féw ~sécó~ñds',
	            m : 'á ~míñ~úté',
	            mm : '%d m~íñú~tés',
	            h : 'á~ñ hó~úr',
	            hh : '%d h~óúrs',
	            d : 'á ~dáý',
	            dd : '%d d~áýs',
	            M : 'á ~móñ~th',
	            MM : '%d m~óñt~hs',
	            y : 'á ~ýéár',
	            yy : '%d ý~éárs'
	        },
	        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return x_pseudo;
	
	}));

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : chinese (zh-cn)
	//! author : suupic : https://github.com/suupic
	//! author : Zeno Zeng : https://github.com/zenozeng
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var zh_cn = moment.defineLocale('zh-cn', {
	        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
	        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat : {
	            LT : 'Ah点mm分',
	            LTS : 'Ah点m分s秒',
	            L : 'YYYY-MM-DD',
	            LL : 'YYYY年MMMD日',
	            LLL : 'YYYY年MMMD日Ah点mm分',
	            LLLL : 'YYYY年MMMD日ddddAh点mm分',
	            l : 'YYYY-MM-DD',
	            ll : 'YYYY年MMMD日',
	            lll : 'YYYY年MMMD日Ah点mm分',
	            llll : 'YYYY年MMMD日ddddAh点mm分'
	        },
	        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '凌晨' || meridiem === '早上' ||
	                    meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            } else {
	                // '中午'
	                return hour >= 11 ? hour : hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 600) {
	                return '凌晨';
	            } else if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar : {
	            sameDay : function () {
	                return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
	            },
	            nextDay : function () {
	                return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
	            },
	            lastDay : function () {
	                return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
	            },
	            nextWeek : function () {
	                var startOfWeek, prefix;
	                startOfWeek = moment().startOf('week');
	                prefix = this.diff(startOfWeek, 'days') >= 7 ? '[下]' : '[本]';
	                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	            },
	            lastWeek : function () {
	                var startOfWeek, prefix;
	                startOfWeek = moment().startOf('week');
	                prefix = this.unix() < startOfWeek.unix()  ? '[上]' : '[本]';
	                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	            },
	            sameElse : 'LL'
	        },
	        ordinalParse: /\d{1,2}(日|月|周)/,
	        ordinal : function (number, period) {
	            switch (period) {
	            case 'd':
	            case 'D':
	            case 'DDD':
	                return number + '日';
	            case 'M':
	                return number + '月';
	            case 'w':
	            case 'W':
	                return number + '周';
	            default:
	                return number;
	            }
	        },
	        relativeTime : {
	            future : '%s内',
	            past : '%s前',
	            s : '几秒',
	            m : '1 分钟',
	            mm : '%d 分钟',
	            h : '1 小时',
	            hh : '%d 小时',
	            d : '1 天',
	            dd : '%d 天',
	            M : '1 个月',
	            MM : '%d 个月',
	            y : '1 年',
	            yy : '%d 年'
	        },
	        week : {
	            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return zh_cn;
	
	}));

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : traditional chinese (zh-tw)
	//! author : Ben : https://github.com/ben-lin
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(2)) :
	   typeof define === 'function' && define.amd ? define(['moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var zh_tw = moment.defineLocale('zh-tw', {
	        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
	        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat : {
	            LT : 'Ah點mm分',
	            LTS : 'Ah點m分s秒',
	            L : 'YYYY年MMMD日',
	            LL : 'YYYY年MMMD日',
	            LLL : 'YYYY年MMMD日Ah點mm分',
	            LLLL : 'YYYY年MMMD日ddddAh點mm分',
	            l : 'YYYY年MMMD日',
	            ll : 'YYYY年MMMD日',
	            lll : 'YYYY年MMMD日Ah點mm分',
	            llll : 'YYYY年MMMD日ddddAh點mm分'
	        },
	        meridiemParse: /早上|上午|中午|下午|晚上/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '早上' || meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '中午') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar : {
	            sameDay : '[今天]LT',
	            nextDay : '[明天]LT',
	            nextWeek : '[下]ddddLT',
	            lastDay : '[昨天]LT',
	            lastWeek : '[上]ddddLT',
	            sameElse : 'L'
	        },
	        ordinalParse: /\d{1,2}(日|月|週)/,
	        ordinal : function (number, period) {
	            switch (period) {
	            case 'd' :
	            case 'D' :
	            case 'DDD' :
	                return number + '日';
	            case 'M' :
	                return number + '月';
	            case 'w' :
	            case 'W' :
	                return number + '週';
	            default :
	                return number;
	            }
	        },
	        relativeTime : {
	            future : '%s內',
	            past : '%s前',
	            s : '幾秒',
	            m : '1分鐘',
	            mm : '%d分鐘',
	            h : '1小時',
	            hh : '%d小時',
	            d : '1天',
	            dd : '%d天',
	            M : '1個月',
	            MM : '%d個月',
	            y : '1年',
	            yy : '%d年'
	        }
	    });
	
	    return zh_tw;
	
	}));

/***/ },
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_BUTTON_ELEMENTS = exports.Button = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Button = exports.Button = (_dec = (0, _core.Component)({
	    selector: 'button[theme]',
	    inputs: ['theme', 'icon', 'side', 'color'],
	    host: {
	        '[attr.theme]': 'theme',
	        '[attr.color]': 'color',
	        '[attr.icon]': 'icon'
	    },
	    template: '\n        <!--Flex wrapper for cross-browser support-->\n        <div [class]="flex">\n            <!--Left Icon-->\n            <i *ngIf="icon && iconClass && leftSide" [ngClass]="iconClass"></i>\n            <!--Transcluded Content-->\n            <ng-content></ng-content>\n            <!--Right Icon-->\n            <i *ngIf="icon && iconClass && (rightSide || !leftSide)" [ngClass]="iconClass"></i>\n        </div>\n    ',
	    directives: [_common.CORE_DIRECTIVES]
	}), _dec(_class = function () {
	    function Button() {
	        _classCallCheck(this, Button);
	    }
	
	    _createClass(Button, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.iconClass = this.icon ? 'bhi-' + this.icon : '';
	            this.flex = this.theme ? 'flex-wrapper' : '';
	            if (this.side !== null) {
	                this.leftSide = this.side === 'left' && this.theme !== 'primary';
	                this.rightSide = this.side === 'right' || this.theme === 'primary';
	            }
	        }
	    }]);
	
	    return Button;
	}()) || _class);
	var NOVO_BUTTON_ELEMENTS = exports.NOVO_BUTTON_ELEMENTS = [Button];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9idXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUF1QmEsTSxXQUFBLE0sV0FyQloscUJBQVU7QUFDUCxjQUFVLGVBREg7QUFFUCxZQUFRLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsTUFBbEIsRUFBMEIsT0FBMUIsQ0FGRDtBQUdQLFVBQU07QUFDRix3QkFBZ0IsT0FEZDtBQUVGLHdCQUFnQixPQUZkO0FBR0YsdUJBQWU7QUFIYixLQUhDO0FBUVAseWJBUk87QUFtQlAsZ0JBQVk7QUFuQkwsQ0FBVixDOzs7Ozs7O21DQXNCYztBQUNQLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxJQUFMLFlBQW1CLEtBQUssSUFBeEIsR0FBaUMsRUFBbEQ7QUFDQSxpQkFBSyxJQUFMLEdBQVksS0FBSyxLQUFMLEdBQWEsY0FBYixHQUE4QixFQUExQztBQUNBLGdCQUFJLEtBQUssSUFBTCxLQUFjLElBQWxCLEVBQXdCO0FBQ3BCLHFCQUFLLFFBQUwsR0FBZ0IsS0FBSyxJQUFMLEtBQWMsTUFBZCxJQUF3QixLQUFLLEtBQUwsS0FBZSxTQUF2RDtBQUNBLHFCQUFLLFNBQUwsR0FBaUIsS0FBSyxJQUFMLEtBQWMsT0FBZCxJQUF5QixLQUFLLEtBQUwsS0FBZSxTQUF6RDtBQUNIO0FBQ0o7Ozs7O0FBR0UsSUFBTSxzREFBdUIsQ0FBQyxNQUFELENBQTdCIiwiZmlsZSI6IkJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYnV0dG9uW3RoZW1lXScsXG4gICAgaW5wdXRzOiBbJ3RoZW1lJywgJ2ljb24nLCAnc2lkZScsICdjb2xvciddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1thdHRyLnRoZW1lXSc6ICd0aGVtZScsXG4gICAgICAgICdbYXR0ci5jb2xvcl0nOiAnY29sb3InLFxuICAgICAgICAnW2F0dHIuaWNvbl0nOiAnaWNvbidcbiAgICB9LFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDwhLS1GbGV4IHdyYXBwZXIgZm9yIGNyb3NzLWJyb3dzZXIgc3VwcG9ydC0tPlxuICAgICAgICA8ZGl2IFtjbGFzc109XCJmbGV4XCI+XG4gICAgICAgICAgICA8IS0tTGVmdCBJY29uLS0+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImljb24gJiYgaWNvbkNsYXNzICYmIGxlZnRTaWRlXCIgW25nQ2xhc3NdPVwiaWNvbkNsYXNzXCI+PC9pPlxuICAgICAgICAgICAgPCEtLVRyYW5zY2x1ZGVkIENvbnRlbnQtLT5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwhLS1SaWdodCBJY29uLS0+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImljb24gJiYgaWNvbkNsYXNzICYmIChyaWdodFNpZGUgfHwgIWxlZnRTaWRlKVwiIFtuZ0NsYXNzXT1cImljb25DbGFzc1wiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b24ge1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmljb25DbGFzcyA9IHRoaXMuaWNvbiA/IGBiaGktJHt0aGlzLmljb259YCA6ICcnO1xuICAgICAgICB0aGlzLmZsZXggPSB0aGlzLnRoZW1lID8gJ2ZsZXgtd3JhcHBlcicgOiAnJztcbiAgICAgICAgaWYgKHRoaXMuc2lkZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5sZWZ0U2lkZSA9IHRoaXMuc2lkZSA9PT0gJ2xlZnQnICYmIHRoaXMudGhlbWUgIT09ICdwcmltYXJ5JztcbiAgICAgICAgICAgIHRoaXMucmlnaHRTaWRlID0gdGhpcy5zaWRlID09PSAncmlnaHQnIHx8IHRoaXMudGhlbWUgPT09ICdwcmltYXJ5JztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5PVk9fQlVUVE9OX0VMRU1FTlRTID0gW0J1dHRvbl07XG4iXX0=

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Card = __webpack_require__(440);
	
	Object.defineProperty(exports, 'NOVO_CARD_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Card.NOVO_CARD_ELEMENTS;
	  }
	});
	
	var _CardExtras = __webpack_require__(441);
	
	Object.defineProperty(exports, 'NOVO_CARD_EXTRA_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _CardExtras.NOVO_CARD_EXTRA_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9jYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O2lCQUFTLGtCOzs7Ozs7Ozs7dUJBQ0Esd0IiLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBOT1ZPX0NBUkRfRUxFTUVOVFMgfSBmcm9tICcuL2NhcmQvQ2FyZCc7XG5leHBvcnQgeyBOT1ZPX0NBUkRfRVhUUkFfRUxFTUVOVFMgfSBmcm9tICcuL2NhcmQvZXh0cmFzL0NhcmRFeHRyYXMnO1xuIl19

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_CARD_ELEMENTS = exports.Card = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(6);
	
	var _button = __webpack_require__(74);
	
	var _loading = __webpack_require__(224);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Card = exports.Card = (_dec = (0, _core.Component)({
	    selector: 'novo-card',
	    inputs: ['loading', 'title', 'icon', 'config', 'message', 'messageIcon', 'refresh', 'close', 'move', 'padding'],
	    outputs: ['onClose', 'onRefresh'],
	    template: '\n        <div class="novo-card" [attr.data-automation-id]="cardAutomationId" [ngClass]="{\'no-padding\': !padding}">\n            <!--Card Header-->\n            <header>\n                <div class="title">\n                    <!--Grabber Icon-->\n                    <i *ngIf="move || config.move" class="bhi-move" [attr.data-automation-id]="cardAutomationId + \'-move\'"></i>\n                    <!--Card Title-->\n                    <h3 [attr.data-automation-id]="cardAutomationId + \'-title\'"><i *ngIf="icon" [ngClass]="iconClass"></i> {{title || config.title}}</h3>\n                </div>\n                <!--Card Actions-->\n                <div class="actions" [attr.data-automation-id]="cardAutomationId + \'-actions\'">\n                    <button theme="icon" icon="refresh-o"  (click)="toggleRefresh()" *ngIf="refresh || config.refresh" [attr.data-automation-id]="cardAutomationId + \'-refresh\'"></button>\n                    <button theme="icon" icon="close-o" (click)="toggleClose()" *ngIf="close || config.close" [attr.data-automation-id]="cardAutomationId + \'-close\'"></button>\n                </div>\n            </header>\n            <!--Card Main-->\n            <main>\n                <!--Content (transcluded)-->\n                <ng-content *ngIf="!(loading || config.loading) && !(message || config.message)"></ng-content>\n                <!--Error/Empty Message-->\n                <p class="card-message" *ngIf="!(loading || config.loading) && (message || config.message)" [attr.data-automation-id]="cardAutomationId + \'-message\'"><i *ngIf="messageIconClass" [ngClass]="messageIconClass"></i> <span [innerHtml]="message || config.message"></span></p>\n                <!--Loading-->\n                <novo-loading *ngIf="loading || config.loading" theme="line"  [attr.data-automation-id]="cardAutomationId + \'-loading\'"></novo-loading>\n            </main>\n            <!--Card Footer-->\n            <ng-content *ngIf="!(loading || config.loading) && !(message || config.message)" select="footer"></ng-content>\n        </div>\n    ',
	    directives: [_common.CORE_DIRECTIVES, _button.NOVO_BUTTON_ELEMENTS, _loading.NOVO_LOADING_ELEMENTS]
	}), _dec(_class = function () {
	    function Card() {
	        _classCallCheck(this, Card);
	
	        this.onClose = new _core.EventEmitter();
	        this.onRefresh = new _core.EventEmitter();
	        this.padding = true;
	    }
	
	    _createClass(Card, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.config = this.config || {};
	        }
	    }, {
	        key: 'ngOnChanges',
	        value: function ngOnChanges() {
	            this.config = this.config || {};
	            this.cardAutomationId = (this.title || this.config.title || 'no-title').toLowerCase().replace(/\s/g, '-') + '-card';
	
	            var newIcon = this.icon || this.config.icon;
	            var newMessageIcon = this.messageIcon || this.config.messageIcon;
	            this.iconClass = newIcon ? 'bhi-' + newIcon : null;
	            this.messageIconClass = newMessageIcon ? 'bhi-' + newMessageIcon : null;
	        }
	    }, {
	        key: 'toggleClose',
	        value: function toggleClose() {
	            if (!this.config.onClose) {
	                this.onClose.next();
	            } else {
	                this.config.onClose();
	            }
	        }
	    }, {
	        key: 'toggleRefresh',
	        value: function toggleRefresh() {
	            if (!this.config.onRefresh) {
	                this.onRefresh.next();
	            } else {
	                this.config.onRefresh();
	            }
	        }
	    }]);
	
	    return Card;
	}()) || _class);
	var NOVO_CARD_ELEMENTS = exports.NOVO_CARD_ELEMENTS = [Card];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9jYXJkL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztJQXVEYSxJLFdBQUEsSSxXQXJEWixxQkFBVTtBQUNQLGNBQVUsV0FESDtBQUVQLFlBQVEsQ0FDSixTQURJLEVBRUosT0FGSSxFQUdKLE1BSEksRUFJSixRQUpJLEVBS0osU0FMSSxFQU1KLGFBTkksRUFPSixTQVBJLEVBUUosT0FSSSxFQVNKLE1BVEksRUFVSixTQVZJLENBRkQ7QUFjUCxhQUFTLENBQ0wsU0FESyxFQUVMLFdBRkssQ0FkRjtBQWtCUCwraUVBbEJPO0FBK0NQLGdCQUFZO0FBL0NMLENBQVYsQztBQXNERyxvQkFBYztBQUFBOztBQUNWLGFBQUssT0FBTCxHQUFlLHdCQUFmO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLHdCQUFqQjtBQUNBLGFBQUssT0FBTCxHQUFlLElBQWY7QUFDSDs7OzttQ0FFVTtBQUNQLGlCQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsSUFBZSxFQUE3QjtBQUNIOzs7c0NBRWE7QUFDVixpQkFBSyxNQUFMLEdBQWMsS0FBSyxNQUFMLElBQWUsRUFBN0I7QUFDQSxpQkFBSyxnQkFBTCxHQUEyQixDQUFDLEtBQUssS0FBTCxJQUFjLEtBQUssTUFBTCxDQUFZLEtBQTFCLElBQW1DLFVBQXBDLEVBQWdELFdBQWhELEdBQThELE9BQTlELENBQXNFLEtBQXRFLEVBQTZFLEdBQTdFLENBQTNCOztBQUVBLGdCQUFJLFVBQVUsS0FBSyxJQUFMLElBQWEsS0FBSyxNQUFMLENBQVksSUFBdkM7QUFDQSxnQkFBSSxpQkFBaUIsS0FBSyxXQUFMLElBQW9CLEtBQUssTUFBTCxDQUFZLFdBQXJEO0FBQ0EsaUJBQUssU0FBTCxHQUFpQixtQkFBaUIsT0FBakIsR0FBNkIsSUFBOUM7QUFDQSxpQkFBSyxnQkFBTCxHQUF3QiwwQkFBd0IsY0FBeEIsR0FBMkMsSUFBbkU7QUFDSDs7O3NDQUVhO0FBQ1YsZ0JBQUksQ0FBQyxLQUFLLE1BQUwsQ0FBWSxPQUFqQixFQUEwQjtBQUN0QixxQkFBSyxPQUFMLENBQWEsSUFBYjtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLLE1BQUwsQ0FBWSxPQUFaO0FBQ0g7QUFDSjs7O3dDQUVlO0FBQ1osZ0JBQUksQ0FBQyxLQUFLLE1BQUwsQ0FBWSxTQUFqQixFQUE0QjtBQUN4QixxQkFBSyxTQUFMLENBQWUsSUFBZjtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLLE1BQUwsQ0FBWSxTQUFaO0FBQ0g7QUFDSjs7Ozs7QUFHRSxJQUFNLGtEQUFxQixDQUFDLElBQUQsQ0FBM0IiLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTk9WT19CVVRUT05fRUxFTUVOVFMgfSBmcm9tICcuLy4uL2J1dHRvbic7XG5pbXBvcnQgeyBOT1ZPX0xPQURJTkdfRUxFTUVOVFMgfSBmcm9tICcuLy4uL2xvYWRpbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tY2FyZCcsXG4gICAgaW5wdXRzOiBbXG4gICAgICAgICdsb2FkaW5nJyxcbiAgICAgICAgJ3RpdGxlJyxcbiAgICAgICAgJ2ljb24nLFxuICAgICAgICAnY29uZmlnJyxcbiAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAnbWVzc2FnZUljb24nLFxuICAgICAgICAncmVmcmVzaCcsXG4gICAgICAgICdjbG9zZScsXG4gICAgICAgICdtb3ZlJyxcbiAgICAgICAgJ3BhZGRpbmcnXG4gICAgXSxcbiAgICBvdXRwdXRzOiBbXG4gICAgICAgICdvbkNsb3NlJyxcbiAgICAgICAgJ29uUmVmcmVzaCdcbiAgICBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNhcmRcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZFwiIFtuZ0NsYXNzXT1cInsnbm8tcGFkZGluZyc6ICFwYWRkaW5nfVwiPlxuICAgICAgICAgICAgPCEtLUNhcmQgSGVhZGVyLS0+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tR3JhYmJlciBJY29uLS0+XG4gICAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwibW92ZSB8fCBjb25maWcubW92ZVwiIGNsYXNzPVwiYmhpLW1vdmVcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctbW92ZSdcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwhLS1DYXJkIFRpdGxlLS0+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctdGl0bGUnXCI+PGkgKm5nSWY9XCJpY29uXCIgW25nQ2xhc3NdPVwiaWNvbkNsYXNzXCI+PC9pPiB7e3RpdGxlIHx8IGNvbmZpZy50aXRsZX19PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tQ2FyZCBBY3Rpb25zLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctYWN0aW9ucydcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwicmVmcmVzaC1vXCIgIChjbGljayk9XCJ0b2dnbGVSZWZyZXNoKClcIiAqbmdJZj1cInJlZnJlc2ggfHwgY29uZmlnLnJlZnJlc2hcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctcmVmcmVzaCdcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwiY2xvc2Utb1wiIChjbGljayk9XCJ0b2dnbGVDbG9zZSgpXCIgKm5nSWY9XCJjbG9zZSB8fCBjb25maWcuY2xvc2VcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctY2xvc2UnXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDwhLS1DYXJkIE1haW4tLT5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDwhLS1Db250ZW50ICh0cmFuc2NsdWRlZCktLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCAqbmdJZj1cIiEobG9hZGluZyB8fCBjb25maWcubG9hZGluZykgJiYgIShtZXNzYWdlIHx8IGNvbmZpZy5tZXNzYWdlKVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8IS0tRXJyb3IvRW1wdHkgTWVzc2FnZS0tPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1tZXNzYWdlXCIgKm5nSWY9XCIhKGxvYWRpbmcgfHwgY29uZmlnLmxvYWRpbmcpICYmIChtZXNzYWdlIHx8IGNvbmZpZy5tZXNzYWdlKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy1tZXNzYWdlJ1wiPjxpICpuZ0lmPVwibWVzc2FnZUljb25DbGFzc1wiIFtuZ0NsYXNzXT1cIm1lc3NhZ2VJY29uQ2xhc3NcIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwibWVzc2FnZSB8fCBjb25maWcubWVzc2FnZVwiPjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPCEtLUxvYWRpbmctLT5cbiAgICAgICAgICAgICAgICA8bm92by1sb2FkaW5nICpuZ0lmPVwibG9hZGluZyB8fCBjb25maWcubG9hZGluZ1wiIHRoZW1lPVwibGluZVwiICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctbG9hZGluZydcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwhLS1DYXJkIEZvb3Rlci0tPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhKGxvYWRpbmcgfHwgY29uZmlnLmxvYWRpbmcpICYmICEobWVzc2FnZSB8fCBjb25maWcubWVzc2FnZSlcIiBzZWxlY3Q9XCJmb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1xuICAgICAgICBDT1JFX0RJUkVDVElWRVMsXG4gICAgICAgIE5PVk9fQlVUVE9OX0VMRU1FTlRTLFxuICAgICAgICBOT1ZPX0xPQURJTkdfRUxFTUVOVFNcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENhcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMub25SZWZyZXNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLnBhZGRpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlnIHx8IHt9O1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlnIHx8IHt9O1xuICAgICAgICB0aGlzLmNhcmRBdXRvbWF0aW9uSWQgPSBgJHsodGhpcy50aXRsZSB8fCB0aGlzLmNvbmZpZy50aXRsZSB8fCAnbm8tdGl0bGUnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnLScpfS1jYXJkYDtcblxuICAgICAgICBsZXQgbmV3SWNvbiA9IHRoaXMuaWNvbiB8fCB0aGlzLmNvbmZpZy5pY29uO1xuICAgICAgICBsZXQgbmV3TWVzc2FnZUljb24gPSB0aGlzLm1lc3NhZ2VJY29uIHx8IHRoaXMuY29uZmlnLm1lc3NhZ2VJY29uO1xuICAgICAgICB0aGlzLmljb25DbGFzcyA9IG5ld0ljb24gPyBgYmhpLSR7bmV3SWNvbn1gIDogbnVsbDtcbiAgICAgICAgdGhpcy5tZXNzYWdlSWNvbkNsYXNzID0gbmV3TWVzc2FnZUljb24gPyBgYmhpLSR7bmV3TWVzc2FnZUljb259YCA6IG51bGw7XG4gICAgfVxuXG4gICAgdG9nZ2xlQ2xvc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcub25DbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNsb3NlLm5leHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVJlZnJlc2goKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcub25SZWZyZXNoKSB7XG4gICAgICAgICAgICB0aGlzLm9uUmVmcmVzaC5uZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5vblJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5PVk9fQ0FSRF9FTEVNRU5UUyA9IFtDYXJkXTtcbiJdfQ==

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NOVO_CARD_EXTRA_ELEMENTS = undefined;
	
	var _CardBestTime = __webpack_require__(442);
	
	var _CardDonutChart = __webpack_require__(443);
	
	var _CardTimeline = __webpack_require__(444);
	
	var NOVO_CARD_EXTRA_ELEMENTS = exports.NOVO_CARD_EXTRA_ELEMENTS = [_CardBestTime.CardBestTime, _CardDonutChart.CardDonutChart, _CardTimeline.CardTimeline];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9jYXJkL2V4dHJhcy9DYXJkRXh0cmFzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFTyxJQUFNLDhEQUEyQix3RkFBakMiLCJmaWxlIjoiQ2FyZEV4dHJhcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkQmVzdFRpbWUgfSBmcm9tICcuL2Jlc3QtdGltZS9DYXJkQmVzdFRpbWUnO1xuaW1wb3J0IHsgQ2FyZERvbnV0Q2hhcnQgfSBmcm9tICcuL2RvbnV0LWNoYXJ0L0NhcmREb251dENoYXJ0JztcbmltcG9ydCB7IENhcmRUaW1lbGluZSB9IGZyb20gJy4vdGltZWxpbmUvQ2FyZFRpbWVsaW5lJztcblxuZXhwb3J0IGNvbnN0IE5PVk9fQ0FSRF9FWFRSQV9FTEVNRU5UUyA9IFtDYXJkQmVzdFRpbWUsIENhcmREb251dENoYXJ0LCBDYXJkVGltZWxpbmVdO1xuIl19

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CardBestTime = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CardBestTime = exports.CardBestTime = (_dec = (0, _core.Component)({
	    selector: 'novo-card-best-time',
	    inputs: ['label', 'time', 'day', 'hideLabel'],
	    template: '\n        <label *ngIf="!hideLabel" [attr.data-automation-id]="dataAutomationId + \'-label\'">{{ label }}</label>\n        <div class="best-time">\n            <i [attr.data-automation-id]="dataAutomationId + \'-icon\'" [ngClass]="[timeIcon, timeStyle]"></i>\n            <div class="time-and-day">\n                <span class="time" [ngClass]="timeStyle" [attr.data-automation-id]="dataAutomationId + \'-time\'">{{ time }}</span>\n                <div class="days" [attr.data-automation-id]="dataAutomationId + \'-days\'">\n                    <span class="day" [class.active]="dayLowerCase === \'sunday\'" [attr.data-automation-id]="\'sunday\'">S</span>\n                    <span class="day" [class.active]="dayLowerCase === \'monday\'" [attr.data-automation-id]="\'monday\'">M</span>\n                    <span class="day" [class.active]="dayLowerCase === \'tuesday\'" [attr.data-automation-id]="\'tuesday\'">T</span>\n                    <span class="day" [class.active]="dayLowerCase === \'wednesday\'" [attr.data-automation-id]="\'wednesday\'">W</span>\n                    <span class="day" [class.active]="dayLowerCase === \'thursday\'" [attr.data-automation-id]="\'thursday\'">T</span>\n                    <span class="day" [class.active]="dayLowerCase === \'friday\'" [attr.data-automation-id]="\'friday\'">F</span>\n                    <span class="day" [class.active]="dayLowerCase === \'saturday\'" [attr.data-automation-id]="\'saturday\'">S</span>\n                </div>\n            </div>\n        </div>\n    ',
	    directives: [_common.CORE_DIRECTIVES]
	}), _dec(_class = function () {
	    function CardBestTime() {
	        _classCallCheck(this, CardBestTime);
	    }
	
	    _createClass(CardBestTime, [{
	        key: 'ngOnChanges',
	        value: function ngOnChanges() {
	            if (this.time) {
	                var timeIconAndStyle = this.getTimeOfDayStyleAndIcon(this.time);
	                this.timeIcon = timeIconAndStyle.icon;
	                this.timeStyle = timeIconAndStyle.style;
	                this.dayLowerCase = (this.day || '').toLowerCase();
	                this.dataAutomationId = this.label ? this.label.replace(/\s+/g, '-').toLowerCase() : '';
	            }
	        }
	    }, {
	        key: 'getTimeOfDayStyleAndIcon',
	        value: function getTimeOfDayStyleAndIcon(time) {
	            var icon = null;
	            var style = null;
	            var transformedTime = time.replace(/\s+/g, '-').toUpperCase();
	
	            var TIMES = {
	                morningTimes: {
	                    times: ['5-AM', '6-AM', '7-AM', '8-AM', '9-AM', '10-AM'],
	                    icon: 'bhi-coffee'
	                },
	                dayTimes: {
	                    times: ['11-AM', '12-PM', '1-PM', '2-PM', '3-PM', '4-PM', '5-PM', '6-PM'],
	                    icon: 'bhi-day'
	                },
	                eveningTimes: {
	                    times: ['7-PM', '8-PM', '9-PM', '10-PM', '11-PM', '12-AM', '1-AM', '2-AM', '3-AM', '4-AM'],
	                    icon: 'bhi-evening'
	                }
	            };
	
	            for (var prop in TIMES) {
	                if (TIMES[prop].times.indexOf(transformedTime) > -1) {
	                    icon = TIMES[prop].icon;
	                    if (icon === 'bhi-coffee') {
	                        style = 'morning';
	                    } else if (icon === 'bhi-day') {
	                        style = 'day';
	                    } else if (icon === 'bhi-evening') {
	                        style = 'evening';
	                    }
	                }
	            }
	            return { icon: icon, style: style };
	        }
	    }]);
	
	    return CardBestTime;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9jYXJkL2V4dHJhcy9iZXN0LXRpbWUvQ2FyZEJlc3RUaW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUE4QmEsWSxXQUFBLFksV0E1QloscUJBQVU7QUFDUCxjQUFVLHFCQURIO0FBRVAsWUFBUSxDQUNKLE9BREksRUFFSixNQUZJLEVBR0osS0FISSxFQUlKLFdBSkksQ0FGRDtBQVFQLDBnREFSTztBQTBCUCxnQkFBWTtBQTFCTCxDQUFWLEM7Ozs7Ozs7c0NBNkJpQjtBQUNWLGdCQUFJLEtBQUssSUFBVCxFQUFlO0FBQ1gsb0JBQUksbUJBQW1CLEtBQUssd0JBQUwsQ0FBOEIsS0FBSyxJQUFuQyxDQUF2QjtBQUNBLHFCQUFLLFFBQUwsR0FBZ0IsaUJBQWlCLElBQWpDO0FBQ0EscUJBQUssU0FBTCxHQUFpQixpQkFBaUIsS0FBbEM7QUFDQSxxQkFBSyxZQUFMLEdBQW9CLENBQUMsS0FBSyxHQUFMLElBQVksRUFBYixFQUFpQixXQUFqQixFQUFwQjtBQUNBLHFCQUFLLGdCQUFMLEdBQXdCLEtBQUssS0FBTCxHQUFhLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsTUFBbkIsRUFBMkIsR0FBM0IsRUFBZ0MsV0FBaEMsRUFBYixHQUE2RCxFQUFyRjtBQUNIO0FBQ0o7OztpREFFd0IsSSxFQUFNO0FBQzNCLGdCQUFJLE9BQU8sSUFBWDtBQUNBLGdCQUFJLFFBQVEsSUFBWjtBQUNBLGdCQUFJLGtCQUFrQixLQUFLLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLEdBQXJCLEVBQTBCLFdBQTFCLEVBQXRCOztBQUVBLGdCQUFNLFFBQVE7QUFDViw4QkFBYztBQUNWLDJCQUFPLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsTUFBekIsRUFBaUMsTUFBakMsRUFBeUMsT0FBekMsQ0FERztBQUVWLDBCQUFNO0FBRkksaUJBREo7QUFLViwwQkFBVTtBQUNOLDJCQUFPLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsTUFBbkIsRUFBMkIsTUFBM0IsRUFBbUMsTUFBbkMsRUFBMkMsTUFBM0MsRUFBbUQsTUFBbkQsRUFBMkQsTUFBM0QsQ0FERDtBQUVOLDBCQUFNO0FBRkEsaUJBTEE7QUFTViw4QkFBYztBQUNWLDJCQUFPLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsT0FBekIsRUFBa0MsT0FBbEMsRUFBMkMsT0FBM0MsRUFBb0QsTUFBcEQsRUFBNEQsTUFBNUQsRUFBb0UsTUFBcEUsRUFBNEUsTUFBNUUsQ0FERztBQUVWLDBCQUFNO0FBRkk7QUFUSixhQUFkOztBQWVBLGlCQUFLLElBQUksSUFBVCxJQUFpQixLQUFqQixFQUF3QjtBQUNwQixvQkFBSSxNQUFNLElBQU4sRUFBWSxLQUFaLENBQWtCLE9BQWxCLENBQTBCLGVBQTFCLElBQTZDLENBQUMsQ0FBbEQsRUFBcUQ7QUFDakQsMkJBQU8sTUFBTSxJQUFOLEVBQVksSUFBbkI7QUFDQSx3QkFBSSxTQUFTLFlBQWIsRUFBMkI7QUFDdkIsZ0NBQVEsU0FBUjtBQUNILHFCQUZELE1BRU8sSUFBSSxTQUFTLFNBQWIsRUFBd0I7QUFDM0IsZ0NBQVEsS0FBUjtBQUNILHFCQUZNLE1BRUEsSUFBSSxTQUFTLGFBQWIsRUFBNEI7QUFDL0IsZ0NBQVEsU0FBUjtBQUNIO0FBQ0o7QUFDSjtBQUNELG1CQUFPLEVBQUUsVUFBRixFQUFRLFlBQVIsRUFBUDtBQUNIIiwiZmlsZSI6IkNhcmRCZXN0VGltZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm92by1jYXJkLWJlc3QtdGltZScsXG4gICAgaW5wdXRzOiBbXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgICd0aW1lJyxcbiAgICAgICAgJ2RheScsXG4gICAgICAgICdoaWRlTGFiZWwnXG4gICAgXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bGFiZWwgKm5nSWY9XCIhaGlkZUxhYmVsXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImRhdGFBdXRvbWF0aW9uSWQgKyAnLWxhYmVsJ1wiPnt7IGxhYmVsIH19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJlc3QtdGltZVwiPlxuICAgICAgICAgICAgPGkgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImRhdGFBdXRvbWF0aW9uSWQgKyAnLWljb24nXCIgW25nQ2xhc3NdPVwiW3RpbWVJY29uLCB0aW1lU3R5bGVdXCI+PC9pPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWUtYW5kLWRheVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGltZVwiIFtuZ0NsYXNzXT1cInRpbWVTdHlsZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJkYXRhQXV0b21hdGlvbklkICsgJy10aW1lJ1wiPnt7IHRpbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRheXNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiZGF0YUF1dG9tYXRpb25JZCArICctZGF5cydcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXlcIiBbY2xhc3MuYWN0aXZlXT1cImRheUxvd2VyQ2FzZSA9PT0gJ3N1bmRheSdcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ3N1bmRheSdcIj5TPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRheVwiIFtjbGFzcy5hY3RpdmVdPVwiZGF5TG93ZXJDYXNlID09PSAnbW9uZGF5J1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbW9uZGF5J1wiPk08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF5XCIgW2NsYXNzLmFjdGl2ZV09XCJkYXlMb3dlckNhc2UgPT09ICd0dWVzZGF5J1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCIndHVlc2RheSdcIj5UPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRheVwiIFtjbGFzcy5hY3RpdmVdPVwiZGF5TG93ZXJDYXNlID09PSAnd2VkbmVzZGF5J1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInd2VkbmVzZGF5J1wiPlc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF5XCIgW2NsYXNzLmFjdGl2ZV09XCJkYXlMb3dlckNhc2UgPT09ICd0aHVyc2RheSdcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ3RodXJzZGF5J1wiPlQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF5XCIgW2NsYXNzLmFjdGl2ZV09XCJkYXlMb3dlckNhc2UgPT09ICdmcmlkYXknXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmcmlkYXknXCI+Rjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXlcIiBbY2xhc3MuYWN0aXZlXT1cImRheUxvd2VyQ2FzZSA9PT0gJ3NhdHVyZGF5J1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInc2F0dXJkYXknXCI+Uzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIENhcmRCZXN0VGltZSB7XG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWUpIHtcbiAgICAgICAgICAgIGxldCB0aW1lSWNvbkFuZFN0eWxlID0gdGhpcy5nZXRUaW1lT2ZEYXlTdHlsZUFuZEljb24odGhpcy50aW1lKTtcbiAgICAgICAgICAgIHRoaXMudGltZUljb24gPSB0aW1lSWNvbkFuZFN0eWxlLmljb247XG4gICAgICAgICAgICB0aGlzLnRpbWVTdHlsZSA9IHRpbWVJY29uQW5kU3R5bGUuc3R5bGU7XG4gICAgICAgICAgICB0aGlzLmRheUxvd2VyQ2FzZSA9ICh0aGlzLmRheSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YUF1dG9tYXRpb25JZCA9IHRoaXMubGFiZWwgPyB0aGlzLmxhYmVsLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpIDogJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUaW1lT2ZEYXlTdHlsZUFuZEljb24odGltZSkge1xuICAgICAgICBsZXQgaWNvbiA9IG51bGw7XG4gICAgICAgIGxldCBzdHlsZSA9IG51bGw7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1lZFRpbWUgPSB0aW1lLnJlcGxhY2UoL1xccysvZywgJy0nKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGNvbnN0IFRJTUVTID0ge1xuICAgICAgICAgICAgbW9ybmluZ1RpbWVzOiB7XG4gICAgICAgICAgICAgICAgdGltZXM6IFsnNS1BTScsICc2LUFNJywgJzctQU0nLCAnOC1BTScsICc5LUFNJywgJzEwLUFNJ10sXG4gICAgICAgICAgICAgICAgaWNvbjogJ2JoaS1jb2ZmZWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF5VGltZXM6IHtcbiAgICAgICAgICAgICAgICB0aW1lczogWycxMS1BTScsICcxMi1QTScsICcxLVBNJywgJzItUE0nLCAnMy1QTScsICc0LVBNJywgJzUtUE0nLCAnNi1QTSddLFxuICAgICAgICAgICAgICAgIGljb246ICdiaGktZGF5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW5pbmdUaW1lczoge1xuICAgICAgICAgICAgICAgIHRpbWVzOiBbJzctUE0nLCAnOC1QTScsICc5LVBNJywgJzEwLVBNJywgJzExLVBNJywgJzEyLUFNJywgJzEtQU0nLCAnMi1BTScsICczLUFNJywgJzQtQU0nXSxcbiAgICAgICAgICAgICAgICBpY29uOiAnYmhpLWV2ZW5pbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBUSU1FUykge1xuICAgICAgICAgICAgaWYgKFRJTUVTW3Byb3BdLnRpbWVzLmluZGV4T2YodHJhbnNmb3JtZWRUaW1lKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgaWNvbiA9IFRJTUVTW3Byb3BdLmljb247XG4gICAgICAgICAgICAgICAgaWYgKGljb24gPT09ICdiaGktY29mZmVlJykge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9ICdtb3JuaW5nJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGljb24gPT09ICdiaGktZGF5Jykge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9ICdkYXknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaWNvbiA9PT0gJ2JoaS1ldmVuaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9ICdldmVuaW5nJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgaWNvbiwgc3R5bGUgfTtcbiAgICB9XG59XG4iXX0=

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CardDonutChart = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CardDonutChart = exports.CardDonutChart = (_dec = (0, _core.Component)({
	    selector: 'novo-card-chart-donut',
	    inputs: ['value', 'label', 'color'],
	    template: '\n        <aside id="chart-percent-{{ uid }}">\n            <!-- COLORED FILL -->\n            <svg viewBox="-10 -10 220 220">\n                <g fill="none" stroke-width="20" transform="translate(100,100)">\n                    <path class="fill" d="M 0,-100 A 100,100 0 0,1 86.6,-50" />\n                    <path class="fill" d="M 86.6,-50 A 100,100 0 0,1 86.6,50" />\n                    <path class="fill" d="M 86.6,50 A 100,100 0 0,1 0,100" />\n                    <path class="fill" d="M 0,100 A 100,100 0 0,1 -86.6,50" />\n                    <path class="fill" d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" />\n                    <path class="fill" d="M -86.6,-50 A 100,100 0 0,1 0,-100" />\n                </g>\n            </svg>\n            <!-- GREY BEZEL -->\n            <svg viewBox="-10 -10 220 220">\n                <path id="chart-fill-{{uid}}" d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"></path>\n            </svg>\n        </aside>\n    '
	}), _dec(_class = function () {
	    function CardDonutChart(element) {
	        _classCallCheck(this, CardDonutChart);
	
	        this.element = element;
	        // Geometric number that represents 100% of the chart area
	        this.chartFillMax = 629;
	        // Unique ID for instance
	        this.uid = Math.round(Math.random() * 1000);
	        // Prevent Collision
	        this.isChartDrawing = false;
	    }
	
	    _createClass(CardDonutChart, [{
	        key: 'ngOnChanges',
	        value: function ngOnChanges() {
	            if (!this.isChartDrawing) {
	                this.drawChart();
	            }
	        }
	    }, {
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            if (!this.isChartDrawing) {
	                this.drawChart();
	            }
	            this.color = this.color || '#662255';
	        }
	    }, {
	        key: 'drawChart',
	        value: function drawChart() {
	            var _this = this;
	
	            this.isChartDrawing = true;
	            setTimeout(function () {
	                var chartContainer = _this.element.nativeElement.querySelector('#chart-percent-' + _this.uid);
	                var fillElements = _this.element.nativeElement.querySelectorAll('.fill');
	                for (var i = 0; i < fillElements.length; i++) {
	                    fillElements[i].setAttribute('stroke', _this.color);
	                }
	                // Set fill amount
	                _this.element.nativeElement.querySelector('#chart-fill-' + _this.uid).setAttribute('stroke-dashoffset', (_this.chartFillMax * _this.value).toString());
	                // Set Text Color
	                chartContainer.style.color = _this.color;
	                // Set percentage for chart
	                chartContainer.setAttribute('data-percent', Math.round(_this.value * 100).toString() + '%');
	                // Set Label
	                chartContainer.setAttribute('data-name', _this.label);
	                _this.isChartDrawing = false;
	            });
	        }
	    }]);
	
	    return CardDonutChart;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_core.ElementRef], CardDonutChart);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9jYXJkL2V4dHJhcy9kb251dC1jaGFydC9DYXJkRG9udXRDaGFydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0lBNkJhLGMsV0FBQSxjLFdBM0JaLHFCQUFVO0FBQ1AsY0FBVSx1QkFESDtBQUVQLFlBQVEsQ0FDSixPQURJLEVBRUosT0FGSSxFQUdKLE9BSEksQ0FGRDtBQU9QO0FBUE8sQ0FBVixDO0FBNEJHLDRCQUFZLE9BQVosRUFBZ0M7QUFBQTs7QUFDNUIsYUFBSyxPQUFMLEdBQWUsT0FBZjs7QUFFQSxhQUFLLFlBQUwsR0FBb0IsR0FBcEI7O0FBRUEsYUFBSyxHQUFMLEdBQVcsS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWdCLElBQTNCLENBQVg7O0FBRUEsYUFBSyxjQUFMLEdBQXNCLEtBQXRCO0FBQ0g7Ozs7c0NBRWE7QUFDVixnQkFBSSxDQUFDLEtBQUssY0FBVixFQUEwQjtBQUN0QixxQkFBSyxTQUFMO0FBQ0g7QUFDSjs7O21DQUVVO0FBQ1AsZ0JBQUksQ0FBQyxLQUFLLGNBQVYsRUFBMEI7QUFDdEIscUJBQUssU0FBTDtBQUNIO0FBQ0QsaUJBQUssS0FBTCxHQUFhLEtBQUssS0FBTCxJQUFjLFNBQTNCO0FBQ0g7OztvQ0FFVztBQUFBOztBQUNSLGlCQUFLLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSx1QkFBVyxZQUFNO0FBQ2Isb0JBQUksaUJBQWlCLE1BQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsYUFBM0IscUJBQTJELE1BQUssR0FBaEUsQ0FBckI7QUFDQSxvQkFBSSxlQUFlLE1BQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsZ0JBQTNCLENBQTRDLE9BQTVDLENBQW5CO0FBQ0EscUJBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxhQUFhLE1BQWpDLEVBQXlDLEdBQXpDLEVBQThDO0FBQzFDLGlDQUFhLENBQWIsRUFBZ0IsWUFBaEIsQ0FBNkIsUUFBN0IsRUFBdUMsTUFBSyxLQUE1QztBQUNIOztBQUVELHNCQUFLLE9BQUwsQ0FBYSxhQUFiLENBQTJCLGFBQTNCLGtCQUF3RCxNQUFLLEdBQTdELEVBQW9FLFlBQXBFLENBQWlGLG1CQUFqRixFQUFzRyxDQUFDLE1BQUssWUFBTCxHQUFvQixNQUFLLEtBQTFCLEVBQWlDLFFBQWpDLEVBQXRHOztBQUVBLCtCQUFlLEtBQWYsQ0FBcUIsS0FBckIsR0FBNkIsTUFBSyxLQUFsQzs7QUFFQSwrQkFBZSxZQUFmLENBQTRCLGNBQTVCLEVBQWdELEtBQUssS0FBTCxDQUFXLE1BQUssS0FBTCxHQUFhLEdBQXhCLENBQUQsQ0FBK0IsUUFBL0IsRUFBL0M7O0FBRUEsK0JBQWUsWUFBZixDQUE0QixXQUE1QixFQUF5QyxNQUFLLEtBQTlDO0FBQ0Esc0JBQUssY0FBTCxHQUFzQixLQUF0QjtBQUNILGFBZkQ7QUFnQkg7Ozs7O2dFQTFDUSxjIiwiZmlsZSI6IkNhcmREb251dENoYXJ0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hc2liaWxpYS9Eb2N1bWVudHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tY2FyZC1jaGFydC1kb251dCcsXG4gICAgaW5wdXRzOiBbXG4gICAgICAgICd2YWx1ZScsXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgICdjb2xvcidcbiAgICBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxhc2lkZSBpZD1cImNoYXJ0LXBlcmNlbnQte3sgdWlkIH19XCI+XG4gICAgICAgICAgICA8IS0tIENPTE9SRUQgRklMTCAtLT5cbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIi0xMCAtMTAgMjIwIDIyMFwiPlxuICAgICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTAwLDEwMClcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJmaWxsXCIgZD1cIk0gMCwtMTAwIEEgMTAwLDEwMCAwIDAsMSA4Ni42LC01MFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiZmlsbFwiIGQ9XCJNIDg2LjYsLTUwIEEgMTAwLDEwMCAwIDAsMSA4Ni42LDUwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJmaWxsXCIgZD1cIk0gODYuNiw1MCBBIDEwMCwxMDAgMCAwLDEgMCwxMDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImZpbGxcIiBkPVwiTSAwLDEwMCBBIDEwMCwxMDAgMCAwLDEgLTg2LjYsNTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImZpbGxcIiBkPVwiTSAtODYuNiw1MCBBIDEwMCwxMDAgMCAwLDEgLTg2LjYsLTUwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJmaWxsXCIgZD1cIk0gLTg2LjYsLTUwIEEgMTAwLDEwMCAwIDAsMSAwLC0xMDBcIiAvPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPCEtLSBHUkVZIEJFWkVMIC0tPlxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiLTEwIC0xMCAyMjAgMjIwXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJjaGFydC1maWxsLXt7dWlkfX1cIiBkPVwiTTIwMCwxMDAgQzIwMCw0NC43NzE1MjUgMTU1LjIyODQ3NSwwIDEwMCwwIEM0NC43NzE1MjUsMCAwLDQ0Ljc3MTUyNSAwLDEwMCBDMCwxNTUuMjI4NDc1IDQ0Ljc3MTUyNSwyMDAgMTAwLDIwMCBDMTU1LjIyODQ3NSwyMDAgMjAwLDE1NS4yMjg0NzUgMjAwLDEwMCBaXCI+PC9wYXRoPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkRG9udXRDaGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIC8vIEdlb21ldHJpYyBudW1iZXIgdGhhdCByZXByZXNlbnRzIDEwMCUgb2YgdGhlIGNoYXJ0IGFyZWFcbiAgICAgICAgdGhpcy5jaGFydEZpbGxNYXggPSA2Mjk7XG4gICAgICAgIC8vIFVuaXF1ZSBJRCBmb3IgaW5zdGFuY2VcbiAgICAgICAgdGhpcy51aWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgICAgICAgLy8gUHJldmVudCBDb2xsaXNpb25cbiAgICAgICAgdGhpcy5pc0NoYXJ0RHJhd2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNDaGFydERyYXdpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2hhcnREcmF3aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdDaGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmNvbG9yIHx8ICcjNjYyMjU1JztcbiAgICB9XG5cbiAgICBkcmF3Q2hhcnQoKSB7XG4gICAgICAgIHRoaXMuaXNDaGFydERyYXdpbmcgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBjaGFydENvbnRhaW5lciA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjaGFydC1wZXJjZW50LSR7dGhpcy51aWR9YCk7XG4gICAgICAgICAgICBsZXQgZmlsbEVsZW1lbnRzID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbGwnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsbEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZmlsbEVsZW1lbnRzW2ldLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgZmlsbCBhbW91bnRcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjaGFydC1maWxsLSR7dGhpcy51aWR9YCkuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaG9mZnNldCcsICh0aGlzLmNoYXJ0RmlsbE1heCAqIHRoaXMudmFsdWUpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgLy8gU2V0IFRleHQgQ29sb3JcbiAgICAgICAgICAgIGNoYXJ0Q29udGFpbmVyLnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIC8vIFNldCBwZXJjZW50YWdlIGZvciBjaGFydFxuICAgICAgICAgICAgY2hhcnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBlcmNlbnQnLCBgJHsoTWF0aC5yb3VuZCh0aGlzLnZhbHVlICogMTAwKSkudG9TdHJpbmcoKX0lYCk7XG4gICAgICAgICAgICAvLyBTZXQgTGFiZWxcbiAgICAgICAgICAgIGNoYXJ0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgdGhpcy5sYWJlbCk7XG4gICAgICAgICAgICB0aGlzLmlzQ2hhcnREcmF3aW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CardTimeline = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CardTimeline = exports.CardTimeline = (_dec = (0, _core.Component)({
	    selector: 'novo-card-timeline',
	    inputs: ['start', 'end', 'created'],
	    template: '\n        <div class="timeline-container">\n            <div class="timeline-background">\n                <div class="timeline" [style.width]="length + \'%\'" [style.margin-left]="offset + \'%\'" data-automation-id="timeline">\n                    <div class="first annotate" [class.one]="start == end" [class.reverse]="start != end && ((end - start) < 3 || length < 22)" [class.overlap]="length < 22" data-automation-id="timeline-first">{{start}}</div>\n                    <div class="last annotate" *ngIf="start != end" [class.reverse]="(end - start) < 3 && end != now && length >= 22" [class.smoosh]="length < 22" data-automation-id="timeline-last">{{end}}</div>\n                    <div class="hidden-width" data-automation-id="timeline-hidden">{{length}}</div>\n                </div>\n            </div>\n        </div>\n    ',
	    directives: [_common.CORE_DIRECTIVES]
	}), _dec(_class = function () {
	    function CardTimeline() {
	        _classCallCheck(this, CardTimeline);
	
	        this.now = new Date().getFullYear();
	    }
	
	    _createClass(CardTimeline, [{
	        key: 'ngOnChanges',
	        value: function ngOnChanges() {
	            this.length = (this.end - this.start) / (this.now - this.created) * 100;
	            this.offset = (this.start - this.created) * (100 / (this.now - this.created));
	        }
	    }]);
	
	    return CardTimeline;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9jYXJkL2V4dHJhcy90aW1lbGluZS9DYXJkVGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztJQXNCYSxZLFdBQUEsWSxXQXBCWixxQkFBVTtBQUNQLGNBQVUsb0JBREg7QUFFUCxZQUFRLENBQ0osT0FESSxFQUVKLEtBRkksRUFHSixTQUhJLENBRkQ7QUFPUCxrMUJBUE87QUFrQlAsZ0JBQVk7QUFsQkwsQ0FBVixDO0FBcUJHLDRCQUFjO0FBQUE7O0FBQ1YsYUFBSyxHQUFMLEdBQVcsSUFBSSxJQUFKLEdBQVcsV0FBWCxFQUFYO0FBQ0g7Ozs7c0NBRWE7QUFDVixpQkFBSyxNQUFMLEdBQWUsQ0FBQyxLQUFLLEdBQUwsR0FBVyxLQUFLLEtBQWpCLEtBQTJCLEtBQUssR0FBTCxHQUFXLEtBQUssT0FBM0MsQ0FBRCxHQUF3RCxHQUF0RTtBQUNBLGlCQUFLLE1BQUwsR0FBZSxDQUFDLEtBQUssS0FBTCxHQUFhLEtBQUssT0FBbkIsS0FBK0IsT0FBTyxLQUFLLEdBQUwsR0FBVyxLQUFLLE9BQXZCLENBQS9CLENBQWY7QUFDSCIsImZpbGUiOiJDYXJkVGltZWxpbmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FzaWJpbGlhL0RvY3VtZW50cy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tY2FyZC10aW1lbGluZScsXG4gICAgaW5wdXRzOiBbXG4gICAgICAgICdzdGFydCcsXG4gICAgICAgICdlbmQnLFxuICAgICAgICAnY3JlYXRlZCdcbiAgICBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lXCIgW3N0eWxlLndpZHRoXT1cImxlbmd0aCArICclJ1wiIFtzdHlsZS5tYXJnaW4tbGVmdF09XCJvZmZzZXQgKyAnJSdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJ0aW1lbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3QgYW5ub3RhdGVcIiBbY2xhc3Mub25lXT1cInN0YXJ0ID09IGVuZFwiIFtjbGFzcy5yZXZlcnNlXT1cInN0YXJ0ICE9IGVuZCAmJiAoKGVuZCAtIHN0YXJ0KSA8IDMgfHwgbGVuZ3RoIDwgMjIpXCIgW2NsYXNzLm92ZXJsYXBdPVwibGVuZ3RoIDwgMjJcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJ0aW1lbGluZS1maXJzdFwiPnt7c3RhcnR9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFzdCBhbm5vdGF0ZVwiICpuZ0lmPVwic3RhcnQgIT0gZW5kXCIgW2NsYXNzLnJldmVyc2VdPVwiKGVuZCAtIHN0YXJ0KSA8IDMgJiYgZW5kICE9IG5vdyAmJiBsZW5ndGggPj0gMjJcIiBbY2xhc3Muc21vb3NoXT1cImxlbmd0aCA8IDIyXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwidGltZWxpbmUtbGFzdFwiPnt7ZW5kfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpZGRlbi13aWR0aFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInRpbWVsaW5lLWhpZGRlblwiPnt7bGVuZ3RofX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIENhcmRUaW1lbGluZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubm93ID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9ICgodGhpcy5lbmQgLSB0aGlzLnN0YXJ0KSAvICh0aGlzLm5vdyAtIHRoaXMuY3JlYXRlZCkpICogMTAwO1xuICAgICAgICB0aGlzLm9mZnNldCA9ICgodGhpcy5zdGFydCAtIHRoaXMuY3JlYXRlZCkgKiAoMTAwIC8gKHRoaXMubm93IC0gdGhpcy5jcmVhdGVkKSkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_DATE_PICKER_ELEMENTS = exports.DatePicker = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // eslint-disable-line
	
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(6);
	
	var _moment = __webpack_require__(2);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _Helpers = __webpack_require__(131);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DatePicker = exports.DatePicker = (_dec = (0, _core.Component)({
	    selector: 'novo-date-picker',
	    inputs: ['minYear', 'maxYear', 'start', 'end'],
	    outputs: ['onSelect'],
	    directives: [_common.COMMON_DIRECTIVES],
	    template: '\n        <div class="calendar">\n            <div class="calendar-top">\n                <h4 class="day" [attr.data-automation-id]="heading.day">{{heading.day}}</h4>\n                <h2 class="month" [attr.data-automation-id]="heading.month">{{heading.month}}</h2>\n                <h1 class="date" [attr.data-automation-id]="heading.date">{{heading.date}}</h1>\n                <h3 class="year" [attr.data-automation-id]="heading.year">{{heading.year}}</h3>\n            </div>\n            <div class="calendar-header">\n                <span class="previous" (click)="prevMonth($event)" data-automation-id="calendar-previous"></span>\n                <span class="heading">\n                    <span class="month" (click)="open($event, \'months\')" [attr.data-automation-id]="heading.month">{{month.format(\'MMM\')}}</span>\n                    <span class="year" (click)="open($event, \'years\')" [attr.data-automation-id]="heading.year">{{month.format(\'YYYY\')}}</span>\n                </span>\n                <span class="next" (click)="nextMonth($event)" data-automation-id="calendar-next"></span>\n            </div>\n            <table class="calendar-content days" cellspacing="0" cellpadding="0" *ngIf="view==\'days\'">\n                <thead>\n                    <tr>\n                        <th *ngFor="let day of weekday" title="{{day}}" class="weekday" [attr.data-automation-id]="day.substr(0, 2)">{{day.substr(0, 2)}}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor="let week of weeks">\n                        <td *ngFor="let day of week.days" [ngClass]="{ today: day.isToday, \'notinmonth\': !day.isCurrentMonth, selected: day.date.isSame(selected) }">\n                            <button class="day" (click)="select($event, day, true)" [attr.data-automation-id]="day.number" [disabled]="(start && day.date.isBefore(start)) || (end && day.date.isAfter(end))">{{day.number}}</button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <ul class="calendar-content months" *ngIf="view == \'months\'">\n                <li *ngFor="let month of months" (click)="setMonth(month)">\n                    <div class="month" [ngClass]="{selected: month == selected.format(\'MMM\')}" [attr.data-automation-id]="month">{{month}}</div>\n                </li>\n            </ul>\n            <ul class="calendar-content years" *ngIf="view == \'years\'">\n                <li *ngFor="let year of years" (click)="setYear(year)">\n                    <div class="year" [ngClass]="{selected: year == selected.format(\'YYYY\')}" [attr.data-automation-id]="year">{{year}}</div>\n                </li>\n            </ul>\n            <div class="calendar-footer">\n                <span (click)="setToday()" class="today" title="{{today}}" data-automation-id="calendar-today">Today</span>\n            </div>\n        </div>\n    '
	}), _dec(_class = function () {
	    // List of all years (generated in ngOnInit)
	
	    // List of all the weekdays (use moment to localize)
	
	    function DatePicker(model) {
	        _classCallCheck(this, DatePicker);
	
	        this.onSelect = new _core.EventEmitter(false);
	        this.weekday = _moment2.default.weekdays();
	        this.months = _moment2.default.months();
	        this.years = [];
	        this.view = 'days';
	
	        this.model = model || new _common.NgModel();
	        this.model.valueAccessor = this;
	    }
	    // Default view mode (select days)
	
	    // List of all months (use moment to localize)
	
	    // Select callback for output
	
	
	    _createClass(DatePicker, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            // Determine the year array
	            var now = (0, _moment2.default)();
	            var start = this.minYear ? Number(this.minYear) : now.year() - 100;
	            var end = this.maxYear ? Number(this.maxYear) : now.year() + 10;
	            this.years = [];
	            for (var i = start; i <= end; i++) {
	                this.years.push(i);
	            }
	            this.updateView(this.value, false, true);
	        }
	    }, {
	        key: 'updateView',
	        value: function updateView(date, fireEvents, markedSelected) {
	            var value = date ? (0, _moment2.default)(date) : (0, _moment2.default)();
	            value = this.removeTime(value);
	            this.month = value.clone();
	
	            var start = value.clone();
	            start.date(1);
	            this.removeTime(start.day(0));
	
	            this.buildMonth(start, this.month);
	
	            if (markedSelected) {
	                this.select(null, { date: value }, fireEvents);
	            }
	        }
	    }, {
	        key: 'setToday',
	        value: function setToday() {
	            var tmp = (0, _moment2.default)();
	            this.updateView(tmp, true, true);
	            // Go back to days
	            this.open(null, 'days');
	        }
	    }, {
	        key: 'setMonth',
	        value: function setMonth(month) {
	            var tmp = this.selected.clone().month(month);
	            this.updateView(tmp, true, true);
	            // Go back to days
	            this.open(null, 'days');
	        }
	    }, {
	        key: 'setYear',
	        value: function setYear(year) {
	            var tmp = this.selected.clone().year(year);
	            this.updateView(tmp, true, true);
	            // Go back to days
	            this.open(null, 'days');
	        }
	    }, {
	        key: 'select',
	        value: function select(event, day, fireEvents) {
	            (0, _Helpers.swallowEvent)(event);
	
	            this.selected = day.date;
	            this.updateHeading();
	
	            if (fireEvents) {
	                // Emit our output
	                this.onSelect.next({
	                    year: this.selected.format('YYYY'),
	                    month: this.selected.format('MM'),
	                    day: this.selected.format('DD'),
	                    date: this.selected.toDate()
	                });
	
	                // Also, update the ngModel
	                this.model.viewToModelUpdate(this.selected.toDate());
	                this.value = this.selected.toDate();
	            }
	        }
	    }, {
	        key: 'open',
	        value: function open(event, type) {
	            (0, _Helpers.swallowEvent)(event);
	
	            // If they click the toggle two time in a row, close it (go back to days)
	            if (type === this.view) {
	                this.view = 'days';
	            } else {
	                this.view = type;
	            }
	
	            this.updateHeading();
	        }
	    }, {
	        key: 'prevMonth',
	        value: function prevMonth(event) {
	            (0, _Helpers.swallowEvent)(event);
	            var tmp = this.month.clone();
	            tmp = tmp.subtract(1, 'months');
	            this.updateView(tmp, false, false);
	        }
	    }, {
	        key: 'nextMonth',
	        value: function nextMonth(event) {
	            (0, _Helpers.swallowEvent)(event);
	            var tmp = this.month.clone();
	            tmp = tmp.add(1, 'months');
	            this.updateView(tmp, false, false);
	        }
	    }, {
	        key: 'updateHeading',
	        value: function updateHeading() {
	            this.heading = {
	                month: this.selected.format('MMMM'),
	                year: this.selected.format('YYYY'),
	                date: this.selected.format('DD'),
	                day: this.selected.format('dddd')
	            };
	        }
	
	        /**
	         * Remove the time aspect of the date
	         * @param date
	         * @returns {Moment} with time stripped out
	         */
	
	    }, {
	        key: 'removeTime',
	        value: function removeTime(date) {
	            return date.hour(0).minute(0).second(0).millisecond(0);
	        }
	    }, {
	        key: 'buildMonth',
	        value: function buildMonth(start, month) {
	            // Reset the weeks
	            this.weeks = [];
	
	            // House keeping variables to know when we are done building the month
	            var done = false,
	                date = start.clone(),
	                monthIndex = date.month(),
	                count = 0;
	
	            while (!done) {
	                // Build the days for the weeks
	                this.weeks.push({ days: this.buildWeek(date.clone(), month) });
	
	                // Increment variables for the next iteration
	                date.add(1, 'w');
	                done = count++ > 2 && monthIndex !== date.month();
	                monthIndex = date.month();
	            }
	        }
	    }, {
	        key: 'buildWeek',
	        value: function buildWeek(date, month) {
	            // Build out of the days of the week
	            var days = [];
	
	            // Iterate over the days of the week
	            for (var i = 0; i < 7; i++) {
	                // Push a variable on the day array with lots of helpers to make the template easier
	                days.push({
	                    name: date.format('dd').substring(0, 1),
	                    number: date.date(),
	                    isCurrentMonth: date.month() === month.month(),
	                    isToday: date.isSame(new Date(), 'day'),
	                    date: date
	                });
	
	                // Increment for the next iteration
	                date = date.clone(); // eslint-disable-line
	                date.add(1, 'd');
	            }
	
	            return days;
	        }
	
	        // ValueAccessor Functions
	
	    }, {
	        key: 'writeValue',
	        value: function writeValue(value) {
	            this.value = value;
	            if (value) {
	                this.updateView(value, false, true);
	            }
	        }
	    }, {
	        key: 'registerOnChange',
	        value: function registerOnChange(fn) {
	            this.onChange = fn;
	        }
	    }, {
	        key: 'registerOnTouched',
	        value: function registerOnTouched(fn) {
	            this.onTouched = fn;
	        }
	    }]);
	
	    return DatePicker;
	}()) || _class);
	(0, _core.Optional)()(DatePicker, null, 0);
	Reflect.defineMetadata('design:paramtypes', [_common.NgControl], DatePicker);
	var NOVO_DATE_PICKER_ELEMENTS = exports.NOVO_DATE_PICKER_ELEMENTS = [DatePicker];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9kYXRlLXBpY2tlci9EYXRlUGlja2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7OztJQTREYSxVLFdBQUEsVSxXQTFEWixxQkFBVTtBQUNQLGNBQVUsa0JBREg7QUFFUCxZQUFRLENBQ0osU0FESSxFQUVKLFNBRkksRUFHSixPQUhJLEVBSUosS0FKSSxDQUZEO0FBUVAsYUFBUyxDQUNMLFVBREssQ0FSRjtBQVdQLGdCQUFZLDJCQVhMO0FBWVA7QUFaTyxDQUFWLEM7Ozs7O0FBc0VHLHdCQUF3QixLQUF4QixFQUF5QztBQUFBOztBQUFBLGFBVnpDLFFBVXlDLEdBVjlCLHVCQUFpQixLQUFqQixDQVU4QjtBQUFBLGFBUnpDLE9BUXlDLEdBUi9CLGlCQUFPLFFBQVAsRUFRK0I7QUFBQSxhQU56QyxNQU15QyxHQU5oQyxpQkFBTyxNQUFQLEVBTWdDO0FBQUEsYUFKekMsS0FJeUMsR0FKakMsRUFJaUM7QUFBQSxhQUZ6QyxJQUV5QyxHQUZsQyxNQUVrQzs7QUFDckMsYUFBSyxLQUFMLEdBQWEsU0FBUyxxQkFBdEI7QUFDQSxhQUFLLEtBQUwsQ0FBVyxhQUFYLEdBQTJCLElBQTNCO0FBQ0g7Ozs7Ozs7Ozs7bUNBRVU7O0FBRVAsZ0JBQUksTUFBTSx1QkFBVjtBQUNBLGdCQUFJLFFBQVEsS0FBSyxPQUFMLEdBQWUsT0FBTyxLQUFLLE9BQVosQ0FBZixHQUFzQyxJQUFJLElBQUosS0FBYSxHQUEvRDtBQUNBLGdCQUFJLE1BQU0sS0FBSyxPQUFMLEdBQWUsT0FBTyxLQUFLLE9BQVosQ0FBZixHQUFzQyxJQUFJLElBQUosS0FBYSxFQUE3RDtBQUNBLGlCQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsaUJBQUssSUFBSSxJQUFJLEtBQWIsRUFBb0IsS0FBSyxHQUF6QixFQUE4QixHQUE5QixFQUFtQztBQUMvQixxQkFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixDQUFoQjtBQUNIO0FBQ0QsaUJBQUssVUFBTCxDQUFnQixLQUFLLEtBQXJCLEVBQTRCLEtBQTVCLEVBQW1DLElBQW5DO0FBQ0g7OzttQ0FFVSxJLEVBQU0sVSxFQUFZLGMsRUFBZ0I7QUFDekMsZ0JBQUksUUFBUSxPQUFPLHNCQUFPLElBQVAsQ0FBUCxHQUFzQix1QkFBbEM7QUFDQSxvQkFBUSxLQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBUjtBQUNBLGlCQUFLLEtBQUwsR0FBYSxNQUFNLEtBQU4sRUFBYjs7QUFFQSxnQkFBSSxRQUFRLE1BQU0sS0FBTixFQUFaO0FBQ0Esa0JBQU0sSUFBTixDQUFXLENBQVg7QUFDQSxpQkFBSyxVQUFMLENBQWdCLE1BQU0sR0FBTixDQUFVLENBQVYsQ0FBaEI7O0FBRUEsaUJBQUssVUFBTCxDQUFnQixLQUFoQixFQUF1QixLQUFLLEtBQTVCOztBQUVBLGdCQUFJLGNBQUosRUFBb0I7QUFDaEIscUJBQUssTUFBTCxDQUFZLElBQVosRUFBa0IsRUFBRSxNQUFNLEtBQVIsRUFBbEIsRUFBbUMsVUFBbkM7QUFDSDtBQUNKOzs7bUNBRVU7QUFDUCxnQkFBSSxNQUFNLHVCQUFWO0FBQ0EsaUJBQUssVUFBTCxDQUFnQixHQUFoQixFQUFxQixJQUFyQixFQUEyQixJQUEzQjs7QUFFQSxpQkFBSyxJQUFMLENBQVUsSUFBVixFQUFnQixNQUFoQjtBQUNIOzs7aUNBRVEsSyxFQUFPO0FBQ1osZ0JBQUksTUFBTSxLQUFLLFFBQUwsQ0FBYyxLQUFkLEdBQXNCLEtBQXRCLENBQTRCLEtBQTVCLENBQVY7QUFDQSxpQkFBSyxVQUFMLENBQWdCLEdBQWhCLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxJQUFWLEVBQWdCLE1BQWhCO0FBQ0g7OztnQ0FFTyxJLEVBQU07QUFDVixnQkFBSSxNQUFNLEtBQUssUUFBTCxDQUFjLEtBQWQsR0FBc0IsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBVjtBQUNBLGlCQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0I7O0FBRUEsaUJBQUssSUFBTCxDQUFVLElBQVYsRUFBZ0IsTUFBaEI7QUFDSDs7OytCQUVNLEssRUFBTyxHLEVBQUssVSxFQUFZO0FBQzNCLHVDQUFhLEtBQWI7O0FBRUEsaUJBQUssUUFBTCxHQUFnQixJQUFJLElBQXBCO0FBQ0EsaUJBQUssYUFBTDs7QUFFQSxnQkFBSSxVQUFKLEVBQWdCOztBQUVaLHFCQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CO0FBQ2YsMEJBQU0sS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixNQUFyQixDQURTO0FBRWYsMkJBQU8sS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixJQUFyQixDQUZRO0FBR2YseUJBQUssS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixJQUFyQixDQUhVO0FBSWYsMEJBQU0sS0FBSyxRQUFMLENBQWMsTUFBZDtBQUpTLGlCQUFuQjs7O0FBUUEscUJBQUssS0FBTCxDQUFXLGlCQUFYLENBQTZCLEtBQUssUUFBTCxDQUFjLE1BQWQsRUFBN0I7QUFDQSxxQkFBSyxLQUFMLEdBQWEsS0FBSyxRQUFMLENBQWMsTUFBZCxFQUFiO0FBQ0g7QUFDSjs7OzZCQUVJLEssRUFBTyxJLEVBQU07QUFDZCx1Q0FBYSxLQUFiOzs7QUFHQSxnQkFBSSxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDcEIscUJBQUssSUFBTCxHQUFZLE1BQVo7QUFDSCxhQUZELE1BRU87QUFDSCxxQkFBSyxJQUFMLEdBQVksSUFBWjtBQUNIOztBQUVELGlCQUFLLGFBQUw7QUFDSDs7O2tDQUVTLEssRUFBTztBQUNiLHVDQUFhLEtBQWI7QUFDQSxnQkFBSSxNQUFNLEtBQUssS0FBTCxDQUFXLEtBQVgsRUFBVjtBQUNBLGtCQUFNLElBQUksUUFBSixDQUFhLENBQWIsRUFBZ0IsUUFBaEIsQ0FBTjtBQUNBLGlCQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsRUFBcUIsS0FBckIsRUFBNEIsS0FBNUI7QUFDSDs7O2tDQUVTLEssRUFBTztBQUNiLHVDQUFhLEtBQWI7QUFDQSxnQkFBSSxNQUFNLEtBQUssS0FBTCxDQUFXLEtBQVgsRUFBVjtBQUNBLGtCQUFNLElBQUksR0FBSixDQUFRLENBQVIsRUFBVyxRQUFYLENBQU47QUFDQSxpQkFBSyxVQUFMLENBQWdCLEdBQWhCLEVBQXFCLEtBQXJCLEVBQTRCLEtBQTVCO0FBQ0g7Ozt3Q0FFZTtBQUNaLGlCQUFLLE9BQUwsR0FBZTtBQUNYLHVCQUFPLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsTUFBckIsQ0FESTtBQUVYLHNCQUFNLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsTUFBckIsQ0FGSztBQUdYLHNCQUFNLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsSUFBckIsQ0FISztBQUlYLHFCQUFLLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsTUFBckI7QUFKTSxhQUFmO0FBTUg7Ozs7Ozs7Ozs7bUNBT1UsSSxFQUFNO0FBQ2IsbUJBQU8sS0FBSyxJQUFMLENBQVUsQ0FBVixFQUFhLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBdUIsTUFBdkIsQ0FBOEIsQ0FBOUIsRUFBaUMsV0FBakMsQ0FBNkMsQ0FBN0MsQ0FBUDtBQUNIOzs7bUNBRVUsSyxFQUFPLEssRUFBTzs7QUFFckIsaUJBQUssS0FBTCxHQUFhLEVBQWI7OztBQUdBLGdCQUFJLE9BQU8sS0FBWDtnQkFDSSxPQUFPLE1BQU0sS0FBTixFQURYO2dCQUVJLGFBQWEsS0FBSyxLQUFMLEVBRmpCO2dCQUdJLFFBQVEsQ0FIWjs7QUFLQSxtQkFBTyxDQUFDLElBQVIsRUFBYzs7QUFFVixxQkFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixFQUFFLE1BQU0sS0FBSyxTQUFMLENBQWUsS0FBSyxLQUFMLEVBQWYsRUFBNkIsS0FBN0IsQ0FBUixFQUFoQjs7O0FBR0EscUJBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxHQUFaO0FBQ0EsdUJBQU8sVUFBVSxDQUFWLElBQWUsZUFBZSxLQUFLLEtBQUwsRUFBckM7QUFDQSw2QkFBYSxLQUFLLEtBQUwsRUFBYjtBQUNIO0FBQ0o7OztrQ0FFUyxJLEVBQU0sSyxFQUFPOztBQUVuQixnQkFBSSxPQUFPLEVBQVg7OztBQUdBLGlCQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksQ0FBcEIsRUFBdUIsR0FBdkIsRUFBNEI7O0FBRXhCLHFCQUFLLElBQUwsQ0FBVTtBQUNOLDBCQUFNLEtBQUssTUFBTCxDQUFZLElBQVosRUFBa0IsU0FBbEIsQ0FBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsQ0FEQTtBQUVOLDRCQUFRLEtBQUssSUFBTCxFQUZGO0FBR04sb0NBQWdCLEtBQUssS0FBTCxPQUFpQixNQUFNLEtBQU4sRUFIM0I7QUFJTiw2QkFBUyxLQUFLLE1BQUwsQ0FBWSxJQUFJLElBQUosRUFBWixFQUF3QixLQUF4QixDQUpIO0FBS04sMEJBQU07QUFMQSxpQkFBVjs7O0FBU0EsdUJBQU8sS0FBSyxLQUFMLEVBQVAsQztBQUNBLHFCQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksR0FBWjtBQUNIOztBQUVELG1CQUFPLElBQVA7QUFDSDs7Ozs7O21DQUdVLEssRUFBTztBQUNkLGlCQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsZ0JBQUksS0FBSixFQUFXO0FBQ1AscUJBQUssVUFBTCxDQUFnQixLQUFoQixFQUF1QixLQUF2QixFQUE4QixJQUE5QjtBQUNIO0FBQ0o7Ozt5Q0FFZ0IsRSxFQUFJO0FBQ2pCLGlCQUFLLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDs7OzBDQUVpQixFLEVBQUk7QUFDbEIsaUJBQUssU0FBTCxHQUFpQixFQUFqQjtBQUNIOzs7OztBQWxMWSxxQixDQVpKLFU7aUVBQUEsVTtBQWlNTixJQUFNLGdFQUE0QixDQUFDLFVBQUQsQ0FBbEMiLCJmaWxlIjoiRGF0ZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuaW1wb3J0IHsgQ09NTU9OX0RJUkVDVElWRVMsIE5nQ29udHJvbCwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC9tb21lbnQnO1xuXG5pbXBvcnQgeyBzd2FsbG93RXZlbnQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tZGF0ZS1waWNrZXInLFxuICAgIGlucHV0czogW1xuICAgICAgICAnbWluWWVhcicsXG4gICAgICAgICdtYXhZZWFyJyxcbiAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgJ2VuZCdcbiAgICBdLFxuICAgIG91dHB1dHM6IFtcbiAgICAgICAgJ29uU2VsZWN0J1xuICAgIF0sXG4gICAgZGlyZWN0aXZlczogW0NPTU1PTl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci10b3BcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJkYXlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaGVhZGluZy5kYXlcIj57e2hlYWRpbmcuZGF5fX08L2g0PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1vbnRoXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImhlYWRpbmcubW9udGhcIj57e2hlYWRpbmcubW9udGh9fTwvaDI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiZGF0ZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJoZWFkaW5nLmRhdGVcIj57e2hlYWRpbmcuZGF0ZX19PC9oMT5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ5ZWFyXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImhlYWRpbmcueWVhclwiPnt7aGVhZGluZy55ZWFyfX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmV2aW91c1wiIChjbGljayk9XCJwcmV2TW9udGgoJGV2ZW50KVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImNhbGVuZGFyLXByZXZpb3VzXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vbnRoXCIgKGNsaWNrKT1cIm9wZW4oJGV2ZW50LCAnbW9udGhzJylcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaGVhZGluZy5tb250aFwiPnt7bW9udGguZm9ybWF0KCdNTU0nKX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInllYXJcIiAoY2xpY2spPVwib3BlbigkZXZlbnQsICd5ZWFycycpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImhlYWRpbmcueWVhclwiPnt7bW9udGguZm9ybWF0KCdZWVlZJyl9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuZXh0XCIgKGNsaWNrKT1cIm5leHRNb250aCgkZXZlbnQpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2FsZW5kYXItbmV4dFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiY2FsZW5kYXItY29udGVudCBkYXlzXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgKm5nSWY9XCJ2aWV3PT0nZGF5cydcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWtkYXlcIiB0aXRsZT1cInt7ZGF5fX1cIiBjbGFzcz1cIndlZWtkYXlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiZGF5LnN1YnN0cigwLCAyKVwiPnt7ZGF5LnN1YnN0cigwLCAyKX19PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCB3ZWVrIG9mIHdlZWtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrLmRheXNcIiBbbmdDbGFzc109XCJ7IHRvZGF5OiBkYXkuaXNUb2RheSwgJ25vdGlubW9udGgnOiAhZGF5LmlzQ3VycmVudE1vbnRoLCBzZWxlY3RlZDogZGF5LmRhdGUuaXNTYW1lKHNlbGVjdGVkKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRheVwiIChjbGljayk9XCJzZWxlY3QoJGV2ZW50LCBkYXksIHRydWUpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImRheS5udW1iZXJcIiBbZGlzYWJsZWRdPVwiKHN0YXJ0ICYmIGRheS5kYXRlLmlzQmVmb3JlKHN0YXJ0KSkgfHwgKGVuZCAmJiBkYXkuZGF0ZS5pc0FmdGVyKGVuZCkpXCI+e3tkYXkubnVtYmVyfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJjYWxlbmRhci1jb250ZW50IG1vbnRoc1wiICpuZ0lmPVwidmlldyA9PSAnbW9udGhzJ1wiPlxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgbW9udGggb2YgbW9udGhzXCIgKGNsaWNrKT1cInNldE1vbnRoKG1vbnRoKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9udGhcIiBbbmdDbGFzc109XCJ7c2VsZWN0ZWQ6IG1vbnRoID09IHNlbGVjdGVkLmZvcm1hdCgnTU1NJyl9XCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIm1vbnRoXCI+e3ttb250aH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJjYWxlbmRhci1jb250ZW50IHllYXJzXCIgKm5nSWY9XCJ2aWV3ID09ICd5ZWFycydcIj5cbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHllYXIgb2YgeWVhcnNcIiAoY2xpY2spPVwic2V0WWVhcih5ZWFyKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieWVhclwiIFtuZ0NsYXNzXT1cIntzZWxlY3RlZDogeWVhciA9PSBzZWxlY3RlZC5mb3JtYXQoJ1lZWVknKX1cIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwieWVhclwiPnt7eWVhcn19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cInNldFRvZGF5KClcIiBjbGFzcz1cInRvZGF5XCIgdGl0bGU9XCJ7e3RvZGF5fX1cIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJjYWxlbmRhci10b2RheVwiPlRvZGF5PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlciB7XG4gICAgLy8gU2VsZWN0IGNhbGxiYWNrIGZvciBvdXRwdXRcbiAgICBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuICAgIC8vIExpc3Qgb2YgYWxsIHRoZSB3ZWVrZGF5cyAodXNlIG1vbWVudCB0byBsb2NhbGl6ZSlcbiAgICB3ZWVrZGF5ID0gbW9tZW50LndlZWtkYXlzKCk7XG4gICAgLy8gTGlzdCBvZiBhbGwgbW9udGhzICh1c2UgbW9tZW50IHRvIGxvY2FsaXplKVxuICAgIG1vbnRocyA9IG1vbWVudC5tb250aHMoKTtcbiAgICAvLyBMaXN0IG9mIGFsbCB5ZWFycyAoZ2VuZXJhdGVkIGluIG5nT25Jbml0KVxuICAgIHllYXJzID0gW107XG4gICAgLy8gRGVmYXVsdCB2aWV3IG1vZGUgKHNlbGVjdCBkYXlzKVxuICAgIHZpZXcgPSAnZGF5cyc7XG5cbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBtb2RlbDpOZ0NvbnRyb2wpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsIHx8IG5ldyBOZ01vZGVsKCk7XG4gICAgICAgIHRoaXMubW9kZWwudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIERldGVybWluZSB0aGUgeWVhciBhcnJheVxuICAgICAgICBsZXQgbm93ID0gbW9tZW50KCk7XG4gICAgICAgIGxldCBzdGFydCA9IHRoaXMubWluWWVhciA/IE51bWJlcih0aGlzLm1pblllYXIpIDogbm93LnllYXIoKSAtIDEwMDtcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMubWF4WWVhciA/IE51bWJlcih0aGlzLm1heFllYXIpIDogbm93LnllYXIoKSArIDEwO1xuICAgICAgICB0aGlzLnllYXJzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy55ZWFycy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLnZhbHVlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlldyhkYXRlLCBmaXJlRXZlbnRzLCBtYXJrZWRTZWxlY3RlZCkge1xuICAgICAgICBsZXQgdmFsdWUgPSBkYXRlID8gbW9tZW50KGRhdGUpIDogbW9tZW50KCk7XG4gICAgICAgIHZhbHVlID0gdGhpcy5yZW1vdmVUaW1lKHZhbHVlKTtcbiAgICAgICAgdGhpcy5tb250aCA9IHZhbHVlLmNsb25lKCk7XG5cbiAgICAgICAgbGV0IHN0YXJ0ID0gdmFsdWUuY2xvbmUoKTtcbiAgICAgICAgc3RhcnQuZGF0ZSgxKTtcbiAgICAgICAgdGhpcy5yZW1vdmVUaW1lKHN0YXJ0LmRheSgwKSk7XG5cbiAgICAgICAgdGhpcy5idWlsZE1vbnRoKHN0YXJ0LCB0aGlzLm1vbnRoKTtcblxuICAgICAgICBpZiAobWFya2VkU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0KG51bGwsIHsgZGF0ZTogdmFsdWUgfSwgZmlyZUV2ZW50cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUb2RheSgpIHtcbiAgICAgICAgbGV0IHRtcCA9IG1vbWVudCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcodG1wLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgLy8gR28gYmFjayB0byBkYXlzXG4gICAgICAgIHRoaXMub3BlbihudWxsLCAnZGF5cycpO1xuICAgIH1cblxuICAgIHNldE1vbnRoKG1vbnRoKSB7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLnNlbGVjdGVkLmNsb25lKCkubW9udGgobW9udGgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcodG1wLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgLy8gR28gYmFjayB0byBkYXlzXG4gICAgICAgIHRoaXMub3BlbihudWxsLCAnZGF5cycpO1xuICAgIH1cblxuICAgIHNldFllYXIoeWVhcikge1xuICAgICAgICBsZXQgdG1wID0gdGhpcy5zZWxlY3RlZC5jbG9uZSgpLnllYXIoeWVhcik7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0bXAsIHRydWUsIHRydWUpO1xuICAgICAgICAvLyBHbyBiYWNrIHRvIGRheXNcbiAgICAgICAgdGhpcy5vcGVuKG51bGwsICdkYXlzJyk7XG4gICAgfVxuXG4gICAgc2VsZWN0KGV2ZW50LCBkYXksIGZpcmVFdmVudHMpIHtcbiAgICAgICAgc3dhbGxvd0V2ZW50KGV2ZW50KTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZGF5LmRhdGU7XG4gICAgICAgIHRoaXMudXBkYXRlSGVhZGluZygpO1xuXG4gICAgICAgIGlmIChmaXJlRXZlbnRzKSB7XG4gICAgICAgICAgICAvLyBFbWl0IG91ciBvdXRwdXRcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3QubmV4dCh7XG4gICAgICAgICAgICAgICAgeWVhcjogdGhpcy5zZWxlY3RlZC5mb3JtYXQoJ1lZWVknKSxcbiAgICAgICAgICAgICAgICBtb250aDogdGhpcy5zZWxlY3RlZC5mb3JtYXQoJ01NJyksXG4gICAgICAgICAgICAgICAgZGF5OiB0aGlzLnNlbGVjdGVkLmZvcm1hdCgnREQnKSxcbiAgICAgICAgICAgICAgICBkYXRlOiB0aGlzLnNlbGVjdGVkLnRvRGF0ZSgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQWxzbywgdXBkYXRlIHRoZSBuZ01vZGVsXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnZpZXdUb01vZGVsVXBkYXRlKHRoaXMuc2VsZWN0ZWQudG9EYXRlKCkpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuc2VsZWN0ZWQudG9EYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuKGV2ZW50LCB0eXBlKSB7XG4gICAgICAgIHN3YWxsb3dFdmVudChldmVudCk7XG5cbiAgICAgICAgLy8gSWYgdGhleSBjbGljayB0aGUgdG9nZ2xlIHR3byB0aW1lIGluIGEgcm93LCBjbG9zZSBpdCAoZ28gYmFjayB0byBkYXlzKVxuICAgICAgICBpZiAodHlwZSA9PT0gdGhpcy52aWV3KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcgPSAnZGF5cyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcgPSB0eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVIZWFkaW5nKCk7XG4gICAgfVxuXG4gICAgcHJldk1vbnRoKGV2ZW50KSB7XG4gICAgICAgIHN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLm1vbnRoLmNsb25lKCk7XG4gICAgICAgIHRtcCA9IHRtcC5zdWJ0cmFjdCgxLCAnbW9udGhzJyk7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0bXAsIGZhbHNlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgbmV4dE1vbnRoKGV2ZW50KSB7XG4gICAgICAgIHN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLm1vbnRoLmNsb25lKCk7XG4gICAgICAgIHRtcCA9IHRtcC5hZGQoMSwgJ21vbnRocycpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcodG1wLCBmYWxzZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZUhlYWRpbmcoKSB7XG4gICAgICAgIHRoaXMuaGVhZGluZyA9IHtcbiAgICAgICAgICAgIG1vbnRoOiB0aGlzLnNlbGVjdGVkLmZvcm1hdCgnTU1NTScpLFxuICAgICAgICAgICAgeWVhcjogdGhpcy5zZWxlY3RlZC5mb3JtYXQoJ1lZWVknKSxcbiAgICAgICAgICAgIGRhdGU6IHRoaXMuc2VsZWN0ZWQuZm9ybWF0KCdERCcpLFxuICAgICAgICAgICAgZGF5OiB0aGlzLnNlbGVjdGVkLmZvcm1hdCgnZGRkZCcpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRoZSB0aW1lIGFzcGVjdCBvZiB0aGUgZGF0ZVxuICAgICAqIEBwYXJhbSBkYXRlXG4gICAgICogQHJldHVybnMge01vbWVudH0gd2l0aCB0aW1lIHN0cmlwcGVkIG91dFxuICAgICAqL1xuICAgIHJlbW92ZVRpbWUoZGF0ZSkge1xuICAgICAgICByZXR1cm4gZGF0ZS5ob3VyKDApLm1pbnV0ZSgwKS5zZWNvbmQoMCkubWlsbGlzZWNvbmQoMCk7XG4gICAgfVxuXG4gICAgYnVpbGRNb250aChzdGFydCwgbW9udGgpIHtcbiAgICAgICAgLy8gUmVzZXQgdGhlIHdlZWtzXG4gICAgICAgIHRoaXMud2Vla3MgPSBbXTtcblxuICAgICAgICAvLyBIb3VzZSBrZWVwaW5nIHZhcmlhYmxlcyB0byBrbm93IHdoZW4gd2UgYXJlIGRvbmUgYnVpbGRpbmcgdGhlIG1vbnRoXG4gICAgICAgIGxldCBkb25lID0gZmFsc2UsXG4gICAgICAgICAgICBkYXRlID0gc3RhcnQuY2xvbmUoKSxcbiAgICAgICAgICAgIG1vbnRoSW5kZXggPSBkYXRlLm1vbnRoKCksXG4gICAgICAgICAgICBjb3VudCA9IDA7XG5cbiAgICAgICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgICAgICAvLyBCdWlsZCB0aGUgZGF5cyBmb3IgdGhlIHdlZWtzXG4gICAgICAgICAgICB0aGlzLndlZWtzLnB1c2goeyBkYXlzOiB0aGlzLmJ1aWxkV2VlayhkYXRlLmNsb25lKCksIG1vbnRoKSB9KTtcblxuICAgICAgICAgICAgLy8gSW5jcmVtZW50IHZhcmlhYmxlcyBmb3IgdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICBkYXRlLmFkZCgxLCAndycpO1xuICAgICAgICAgICAgZG9uZSA9IGNvdW50KysgPiAyICYmIG1vbnRoSW5kZXggIT09IGRhdGUubW9udGgoKTtcbiAgICAgICAgICAgIG1vbnRoSW5kZXggPSBkYXRlLm1vbnRoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidWlsZFdlZWsoZGF0ZSwgbW9udGgpIHtcbiAgICAgICAgLy8gQnVpbGQgb3V0IG9mIHRoZSBkYXlzIG9mIHRoZSB3ZWVrXG4gICAgICAgIGxldCBkYXlzID0gW107XG5cbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBkYXlzIG9mIHRoZSB3ZWVrXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICAvLyBQdXNoIGEgdmFyaWFibGUgb24gdGhlIGRheSBhcnJheSB3aXRoIGxvdHMgb2YgaGVscGVycyB0byBtYWtlIHRoZSB0ZW1wbGF0ZSBlYXNpZXJcbiAgICAgICAgICAgIGRheXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogZGF0ZS5mb3JtYXQoJ2RkJykuc3Vic3RyaW5nKDAsIDEpLFxuICAgICAgICAgICAgICAgIG51bWJlcjogZGF0ZS5kYXRlKCksXG4gICAgICAgICAgICAgICAgaXNDdXJyZW50TW9udGg6IGRhdGUubW9udGgoKSA9PT0gbW9udGgubW9udGgoKSxcbiAgICAgICAgICAgICAgICBpc1RvZGF5OiBkYXRlLmlzU2FtZShuZXcgRGF0ZSgpLCAnZGF5JyksXG4gICAgICAgICAgICAgICAgZGF0ZTogZGF0ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEluY3JlbWVudCBmb3IgdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICBkYXRlID0gZGF0ZS5jbG9uZSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICBkYXRlLmFkZCgxLCAnZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRheXM7XG4gICAgfVxuXG4gICAgLy8gVmFsdWVBY2Nlc3NvciBGdW5jdGlvbnNcbiAgICB3cml0ZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcodmFsdWUsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuKSB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgTk9WT19EQVRFX1BJQ0tFUl9FTEVNRU5UUyA9IFtEYXRlUGlja2VyXTtcbiJdfQ==

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DatePicker = __webpack_require__(445);
	
	Object.defineProperty(exports, 'NOVO_DATE_PICKER_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _DatePicker.NOVO_DATE_PICKER_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9kYXRlcGlja2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O3VCQUFTLHlCIiwiZmlsZSI6ImRhdGVwaWNrZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FzaWJpbGlhL0RvY3VtZW50cy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgTk9WT19EQVRFX1BJQ0tFUl9FTEVNRU5UUyB9IGZyb20gJy4vZGF0ZS1waWNrZXIvRGF0ZVBpY2tlcic7XG4iXX0=

/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Drawer = __webpack_require__(448);
	
	Object.defineProperty(exports, 'NOVO_DRAWER_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Drawer.NOVO_DRAWER_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9kcmF3ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7bUJBQVMsb0IiLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hc2liaWxpYS9Eb2N1bWVudHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IE5PVk9fRFJBV0VSX0VMRU1FTlRTIH0gZnJvbSAnLi9kcmF3ZXIvRHJhd2VyJztcbiJdfQ==

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_DRAWER_ELEMENTS = exports.DrawerToggle = exports.DrawerContent = exports.Drawer = exports.POSITION_BOTTOM = exports.POSITION_TOP = exports.POSITION_RIGHT = exports.POSITION_LEFT = exports.OUTSIDE_CLICK = exports.DISABLED = exports.ALWAYS = undefined;
	
	var _dec, _class, _dec2, _class2, _dec3, _class3;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ALWAYS = exports.ALWAYS = 'always';
	var DISABLED = exports.DISABLED = 'disabled';
	var OUTSIDE_CLICK = exports.OUTSIDE_CLICK = 'outsideClick';
	
	var POSITION_LEFT = exports.POSITION_LEFT = 'left';
	var POSITION_RIGHT = exports.POSITION_RIGHT = 'right';
	var POSITION_TOP = exports.POSITION_TOP = 'top';
	var POSITION_BOTTOM = exports.POSITION_BOTTOM = 'bottom';
	
	var DrawerService = function () {
	    function DrawerService() {
	        _classCallCheck(this, DrawerService);
	
	        this.closeDrawerBind = this.closeDrawer.bind(this);
	    }
	
	    _createClass(DrawerService, [{
	        key: 'open',
	        value: function open(scope) {
	            if (!this.openScope) {
	                window.document.addEventListener('click', this.closeDrawerBind);
	            }
	
	            if (this.openScope && this.openScope !== this.scope) {
	                this.openScope.isOpen = false;
	            }
	
	            this.openScope = scope;
	        }
	    }, {
	        key: 'close',
	        value: function close(scope) {
	            if (this.openScope !== scope) {
	                return;
	            }
	
	            this.openScope = null;
	            window.document.removeEventListener('click', this.closeDrawerBind);
	        }
	    }, {
	        key: 'closeDrawer',
	        value: function closeDrawer(event) {
	            if (!this.openScope) {
	                return;
	            }
	
	            if (event && this.openScope.autoClose === DISABLED) {
	                return;
	            }
	
	            if (event && this.openScope.toggleEl && this.openScope.toggleEl.nativeElement === event.target) {
	                return;
	            }
	
	            if (event && this.openScope.autoClose === OUTSIDE_CLICK && this.openScope.drawerEl && this.openScope.drawerEl.nativeElement === event.target) {
	                return;
	            }
	
	            this.openScope.isOpen = false;
	        }
	    }]);
	
	    return DrawerService;
	}();
	
	var drawerService = new DrawerService();
	
	var Drawer = exports.Drawer = (_dec = (0, _core.Directive)({
	    selector: '[drawer]',
	    properties: ['isOpen', 'autoClose', 'position'],
	    outputs: ['onDrawerToggle'],
	    host: {
	        '[class.drawer]': 'true',
	        '[class.open]': 'isOpen'
	    }
	}), _dec(_class = function () {
	    function Drawer(el) {
	        _classCallCheck(this, Drawer);
	
	        this.el = el;
	        this.onDrawerToggle = new _core.EventEmitter();
	    }
	
	    _createClass(Drawer, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.autoClose = this.autoClose || OUTSIDE_CLICK;
	            this.position = this.position || POSITION_LEFT;
	        }
	    }, {
	        key: 'toggle',
	        value: function toggle(open) {
	            return this.isOpen = open ? !!open : !this.isOpen;
	        }
	    }, {
	        key: 'focusToggleElement',
	        value: function focusToggleElement() {
	            if (this.toggleEl) {
	                this.toggleEl.nativeElement.focus();
	            }
	        }
	    }, {
	        key: 'drawer',
	        set: function set(drawer) {
	            // init drop down menu
	            this.drawerEl = drawer.el;
	
	            // add class name for the position
	            this.drawerEl.nativeElement.classList.add(this.position);
	        }
	    }, {
	        key: 'drawerToggle',
	        set: function set(drawerToggle) {
	            // init toggle element
	            this.toggleEl = drawerToggle.el;
	        }
	    }, {
	        key: 'isOpen',
	        get: function get() {
	            return this._isOpen;
	        },
	        set: function set(value) {
	            this._isOpen = !!value;
	
	            if (this.isOpen) {
	                this.focusToggleElement();
	                drawerService.open(this);
	            } else {
	                drawerService.close(this);
	            }
	            this.onDrawerToggle.next(this.isOpen);
	        }
	    }]);
	
	    return Drawer;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_core.ElementRef], Drawer);
	var DrawerContent = exports.DrawerContent = (_dec2 = (0, _core.Directive)({
	    selector: '[drawerContent], .drawer-content'
	}), _dec2(_class2 = function () {
	    function DrawerContent(drawer, el) {
	        _classCallCheck(this, DrawerContent);
	
	        this.drawer = drawer;
	        this.el = el;
	    }
	
	    _createClass(DrawerContent, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.drawer.drawer = this;
	        }
	    }]);
	
	    return DrawerContent;
	}()) || _class2);
	Reflect.defineMetadata('design:paramtypes', [Drawer, _core.ElementRef], DrawerContent);
	var DrawerToggle = exports.DrawerToggle = (_dec3 = (0, _core.Directive)({
	    selector: '[drawerToggle]',
	    properties: ['disabled'],
	    host: {
	        '(click)': 'toggleDrawer($event)',
	        '[class.drawer-toggle]': 'true',
	        '[class.disabled]': 'disabled'
	    }
	}), _dec3(_class3 = function () {
	    function DrawerToggle(drawer, el) {
	        _classCallCheck(this, DrawerToggle);
	
	        this.el = el;
	        this.disabled = false;
	        this.drawer = drawer;
	    }
	
	    _createClass(DrawerToggle, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.drawer.drawerToggle = this;
	        }
	    }, {
	        key: 'toggleDrawer',
	        value: function toggleDrawer(event) {
	            event.preventDefault();
	            event.stopPropagation();
	
	            if (!this.disabled) {
	                this.drawer.toggle();
	            }
	        }
	    }, {
	        key: 'isOpen',
	        get: function get() {
	            return this.drawer.isOpen;
	        }
	    }]);
	
	    return DrawerToggle;
	}()) || _class3);
	Reflect.defineMetadata('design:paramtypes', [Drawer, _core.ElementRef], DrawerToggle);
	var NOVO_DRAWER_ELEMENTS = exports.NOVO_DRAWER_ELEMENTS = [Drawer, DrawerContent, DrawerToggle];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9kcmF3ZXIvRHJhd2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFTyxJQUFNLDBCQUFTLFFBQWY7QUFDQSxJQUFNLDhCQUFXLFVBQWpCO0FBQ0EsSUFBTSx3Q0FBZ0IsY0FBdEI7O0FBRUEsSUFBTSx3Q0FBZ0IsTUFBdEI7QUFDQSxJQUFNLDBDQUFpQixPQUF2QjtBQUNBLElBQU0sc0NBQWUsS0FBckI7QUFDQSxJQUFNLDRDQUFrQixRQUF4Qjs7SUFFRCxhO0FBQ0YsNkJBQWM7QUFBQTs7QUFDVixhQUFLLGVBQUwsR0FBdUIsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLElBQXRCLENBQXZCO0FBQ0g7Ozs7NkJBRUksSyxFQUFPO0FBQ1IsZ0JBQUksQ0FBQyxLQUFLLFNBQVYsRUFBcUI7QUFDakIsdUJBQU8sUUFBUCxDQUFnQixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsS0FBSyxlQUEvQztBQUNIOztBQUVELGdCQUFJLEtBQUssU0FBTCxJQUFrQixLQUFLLFNBQUwsS0FBbUIsS0FBSyxLQUE5QyxFQUFxRDtBQUNqRCxxQkFBSyxTQUFMLENBQWUsTUFBZixHQUF3QixLQUF4QjtBQUNIOztBQUVELGlCQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDSDs7OzhCQUVLLEssRUFBTztBQUNULGdCQUFJLEtBQUssU0FBTCxLQUFtQixLQUF2QixFQUE4QjtBQUMxQjtBQUNIOztBQUVELGlCQUFLLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxtQkFBTyxRQUFQLENBQWdCLG1CQUFoQixDQUFvQyxPQUFwQyxFQUE2QyxLQUFLLGVBQWxEO0FBQ0g7OztvQ0FFVyxLLEVBQU87QUFDZixnQkFBSSxDQUFDLEtBQUssU0FBVixFQUFxQjtBQUNqQjtBQUNIOztBQUVELGdCQUFJLFNBQVMsS0FBSyxTQUFMLENBQWUsU0FBZixLQUE2QixRQUExQyxFQUFvRDtBQUNoRDtBQUNIOztBQUVELGdCQUFJLFNBQVMsS0FBSyxTQUFMLENBQWUsUUFBeEIsSUFBb0MsS0FBSyxTQUFMLENBQWUsUUFBZixDQUF3QixhQUF4QixLQUEwQyxNQUFNLE1BQXhGLEVBQWdHO0FBQzVGO0FBQ0g7O0FBRUQsZ0JBQUksU0FBUyxLQUFLLFNBQUwsQ0FBZSxTQUFmLEtBQTZCLGFBQXRDLElBQXVELEtBQUssU0FBTCxDQUFlLFFBQXRFLElBQWtGLEtBQUssU0FBTCxDQUFlLFFBQWYsQ0FBd0IsYUFBeEIsS0FBMEMsTUFBTSxNQUF0SSxFQUE4STtBQUMxSTtBQUNIOztBQUVELGlCQUFLLFNBQUwsQ0FBZSxNQUFmLEdBQXdCLEtBQXhCO0FBQ0g7Ozs7OztBQUVMLElBQU0sZ0JBQWdCLElBQUksYUFBSixFQUF0Qjs7SUFXYSxNLFdBQUEsTSxXQVRaLHFCQUFVO0FBQ1AsY0FBVSxVQURIO0FBRVAsZ0JBQVksQ0FBQyxRQUFELEVBQVcsV0FBWCxFQUF3QixVQUF4QixDQUZMO0FBR1AsYUFBUyxDQUFDLGdCQUFELENBSEY7QUFJUCxVQUFNO0FBQ0YsMEJBQWtCLE1BRGhCO0FBRUYsd0JBQWdCO0FBRmQ7QUFKQyxDQUFWLEM7QUFVRyxvQkFBWSxFQUFaLEVBQTJCO0FBQUE7O0FBQ3ZCLGFBQUssRUFBTCxHQUFVLEVBQVY7QUFDQSxhQUFLLGNBQUwsR0FBc0Isd0JBQXRCO0FBQ0g7Ozs7bUNBRVU7QUFDUCxpQkFBSyxTQUFMLEdBQWlCLEtBQUssU0FBTCxJQUFrQixhQUFuQztBQUNBLGlCQUFLLFFBQUwsR0FBZ0IsS0FBSyxRQUFMLElBQWlCLGFBQWpDO0FBQ0g7OzsrQkFlTSxJLEVBQU07QUFDVCxtQkFBTyxLQUFLLE1BQUwsR0FBYyxPQUFPLENBQUMsQ0FBQyxJQUFULEdBQWdCLENBQUMsS0FBSyxNQUEzQztBQUNIOzs7NkNBa0JvQjtBQUNqQixnQkFBSSxLQUFLLFFBQVQsRUFBbUI7QUFDZixxQkFBSyxRQUFMLENBQWMsYUFBZCxDQUE0QixLQUE1QjtBQUNIO0FBQ0o7OzswQkFyQ1UsTSxFQUFROztBQUVmLGlCQUFLLFFBQUwsR0FBZ0IsT0FBTyxFQUF2Qjs7O0FBR0EsaUJBQUssUUFBTCxDQUFjLGFBQWQsQ0FBNEIsU0FBNUIsQ0FBc0MsR0FBdEMsQ0FBMEMsS0FBSyxRQUEvQztBQUNIOzs7MEJBRWdCLFksRUFBYzs7QUFFM0IsaUJBQUssUUFBTCxHQUFnQixhQUFhLEVBQTdCO0FBQ0g7Ozs0QkFNWTtBQUNULG1CQUFPLEtBQUssT0FBWjtBQUNILFM7MEJBRVUsSyxFQUFPO0FBQ2QsaUJBQUssT0FBTCxHQUFlLENBQUMsQ0FBQyxLQUFqQjs7QUFFQSxnQkFBSSxLQUFLLE1BQVQsRUFBaUI7QUFDYixxQkFBSyxrQkFBTDtBQUNBLDhCQUFjLElBQWQsQ0FBbUIsSUFBbkI7QUFDSCxhQUhELE1BR087QUFDSCw4QkFBYyxLQUFkLENBQW9CLElBQXBCO0FBQ0g7QUFDRCxpQkFBSyxjQUFMLENBQW9CLElBQXBCLENBQXlCLEtBQUssTUFBOUI7QUFDSDs7Ozs7Z0VBMUNRLE07SUFzREEsYSxXQUFBLGEsWUFIWixxQkFBVTtBQUNQLGNBQVU7QUFESCxDQUFWLEM7QUFJRywyQkFBWSxNQUFaLEVBQTJCLEVBQTNCLEVBQTBDO0FBQUE7O0FBQ3RDLGFBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxhQUFLLEVBQUwsR0FBVSxFQUFWO0FBQ0g7Ozs7bUNBRVU7QUFDUCxpQkFBSyxNQUFMLENBQVksTUFBWixHQUFxQixJQUFyQjtBQUNIOzs7Ozs2Q0FQa0IsTSxxQkFEVixhO0lBb0JBLFksV0FBQSxZLFlBVFoscUJBQVU7QUFDUCxjQUFVLGdCQURIO0FBRVAsZ0JBQVksQ0FBQyxVQUFELENBRkw7QUFHUCxVQUFNO0FBQ0YsbUJBQVcsc0JBRFQ7QUFFRixpQ0FBeUIsTUFGdkI7QUFHRiw0QkFBb0I7QUFIbEI7QUFIQyxDQUFWLEM7QUFVRywwQkFBWSxNQUFaLEVBQTJCLEVBQTNCLEVBQTBDO0FBQUE7O0FBQ3RDLGFBQUssRUFBTCxHQUFVLEVBQVY7QUFDQSxhQUFLLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxhQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0g7Ozs7bUNBRVU7QUFDUCxpQkFBSyxNQUFMLENBQVksWUFBWixHQUEyQixJQUEzQjtBQUNIOzs7cUNBTVksSyxFQUFPO0FBQ2hCLGtCQUFNLGNBQU47QUFDQSxrQkFBTSxlQUFOOztBQUVBLGdCQUFJLENBQUMsS0FBSyxRQUFWLEVBQW9CO0FBQ2hCLHFCQUFLLE1BQUwsQ0FBWSxNQUFaO0FBQ0g7QUFDSjs7OzRCQVhZO0FBQ1QsbUJBQU8sS0FBSyxNQUFMLENBQVksTUFBbkI7QUFDSDs7Ozs7NkNBWmtCLE0scUJBRFYsWTtBQXlCTixJQUFNLHNEQUF1QixDQUFDLE1BQUQsRUFBUyxhQUFULEVBQXdCLFlBQXhCLENBQTdCIiwiZmlsZSI6IkRyYXdlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IEFMV0FZUyA9ICdhbHdheXMnO1xuZXhwb3J0IGNvbnN0IERJU0FCTEVEID0gJ2Rpc2FibGVkJztcbmV4cG9ydCBjb25zdCBPVVRTSURFX0NMSUNLID0gJ291dHNpZGVDbGljayc7XG5cbmV4cG9ydCBjb25zdCBQT1NJVElPTl9MRUZUID0gJ2xlZnQnO1xuZXhwb3J0IGNvbnN0IFBPU0lUSU9OX1JJR0hUID0gJ3JpZ2h0JztcbmV4cG9ydCBjb25zdCBQT1NJVElPTl9UT1AgPSAndG9wJztcbmV4cG9ydCBjb25zdCBQT1NJVElPTl9CT1RUT00gPSAnYm90dG9tJztcblxuY2xhc3MgRHJhd2VyU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VEcmF3ZXJCaW5kID0gdGhpcy5jbG9zZURyYXdlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9wZW4oc2NvcGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wZW5TY29wZSkge1xuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyYXdlckJpbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3BlblNjb3BlICYmIHRoaXMub3BlblNjb3BlICE9PSB0aGlzLnNjb3BlKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5TY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3BlblNjb3BlID0gc2NvcGU7XG4gICAgfVxuXG4gICAgY2xvc2Uoc2NvcGUpIHtcbiAgICAgICAgaWYgKHRoaXMub3BlblNjb3BlICE9PSBzY29wZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcGVuU2NvcGUgPSBudWxsO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlRHJhd2VyQmluZCk7XG4gICAgfVxuXG4gICAgY2xvc2VEcmF3ZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wZW5TY29wZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50ICYmIHRoaXMub3BlblNjb3BlLmF1dG9DbG9zZSA9PT0gRElTQUJMRUQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudCAmJiB0aGlzLm9wZW5TY29wZS50b2dnbGVFbCAmJiB0aGlzLm9wZW5TY29wZS50b2dnbGVFbC5uYXRpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudCAmJiB0aGlzLm9wZW5TY29wZS5hdXRvQ2xvc2UgPT09IE9VVFNJREVfQ0xJQ0sgJiYgdGhpcy5vcGVuU2NvcGUuZHJhd2VyRWwgJiYgdGhpcy5vcGVuU2NvcGUuZHJhd2VyRWwubmF0aXZlRWxlbWVudCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wZW5TY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBkcmF3ZXJTZXJ2aWNlID0gbmV3IERyYXdlclNlcnZpY2UoKTtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbZHJhd2VyXScsXG4gICAgcHJvcGVydGllczogWydpc09wZW4nLCAnYXV0b0Nsb3NlJywgJ3Bvc2l0aW9uJ10sXG4gICAgb3V0cHV0czogWydvbkRyYXdlclRvZ2dsZSddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5kcmF3ZXJdJzogJ3RydWUnLFxuICAgICAgICAnW2NsYXNzLm9wZW5dJzogJ2lzT3BlbidcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIERyYXdlciBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBjb25zdHJ1Y3RvcihlbDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgdGhpcy5vbkRyYXdlclRvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hdXRvQ2xvc2UgPSB0aGlzLmF1dG9DbG9zZSB8fCBPVVRTSURFX0NMSUNLO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiB8fCBQT1NJVElPTl9MRUZUO1xuICAgIH1cblxuICAgIHNldCBkcmF3ZXIoZHJhd2VyKSB7XG4gICAgICAgIC8vIGluaXQgZHJvcCBkb3duIG1lbnVcbiAgICAgICAgdGhpcy5kcmF3ZXJFbCA9IGRyYXdlci5lbDtcblxuICAgICAgICAvLyBhZGQgY2xhc3MgbmFtZSBmb3IgdGhlIHBvc2l0aW9uXG4gICAgICAgIHRoaXMuZHJhd2VyRWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIHNldCBkcmF3ZXJUb2dnbGUoZHJhd2VyVG9nZ2xlKSB7XG4gICAgICAgIC8vIGluaXQgdG9nZ2xlIGVsZW1lbnRcbiAgICAgICAgdGhpcy50b2dnbGVFbCA9IGRyYXdlclRvZ2dsZS5lbDtcbiAgICB9XG5cbiAgICB0b2dnbGUob3Blbikge1xuICAgICAgICByZXR1cm4gdGhpcy5pc09wZW4gPSBvcGVuID8gISFvcGVuIDogIXRoaXMuaXNPcGVuO1xuICAgIH1cblxuICAgIGdldCBpc09wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gICAgfVxuXG4gICAgc2V0IGlzT3Blbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9pc09wZW4gPSAhIXZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5mb2N1c1RvZ2dsZUVsZW1lbnQoKTtcbiAgICAgICAgICAgIGRyYXdlclNlcnZpY2Uub3Blbih0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyYXdlclNlcnZpY2UuY2xvc2UodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkRyYXdlclRvZ2dsZS5uZXh0KHRoaXMuaXNPcGVuKTtcbiAgICB9XG5cbiAgICBmb2N1c1RvZ2dsZUVsZW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZUVsKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbZHJhd2VyQ29udGVudF0sIC5kcmF3ZXItY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgRHJhd2VyQ29udGVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IoZHJhd2VyOkRyYXdlciwgZWw6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmRyYXdlciA9IGRyYXdlcjtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmRyYXdlci5kcmF3ZXIgPSB0aGlzO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbZHJhd2VyVG9nZ2xlXScsXG4gICAgcHJvcGVydGllczogWydkaXNhYmxlZCddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJyhjbGljayknOiAndG9nZ2xlRHJhd2VyKCRldmVudCknLFxuICAgICAgICAnW2NsYXNzLmRyYXdlci10b2dnbGVdJzogJ3RydWUnLFxuICAgICAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIERyYXdlclRvZ2dsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IoZHJhd2VyOkRyYXdlciwgZWw6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmVsID0gZWw7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSBkcmF3ZXI7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLmRyYXdlclRvZ2dsZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IGlzT3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhd2VyLmlzT3BlbjtcbiAgICB9XG5cbiAgICB0b2dnbGVEcmF3ZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdlci50b2dnbGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5PVk9fRFJBV0VSX0VMRU1FTlRTID0gW0RyYXdlciwgRHJhd2VyQ29udGVudCwgRHJhd2VyVG9nZ2xlXTtcbiJdfQ==

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_DROPDOWN_ELEMENTS = exports.Dropdown = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _OutsideClick2 = __webpack_require__(132);
	
	var _KeyCodes = __webpack_require__(75);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Dropdown = exports.Dropdown = (_dec = (0, _core.Component)({
	    selector: 'novo-dropdown',
	    template: '\n        <ng-content select="button"></ng-content>\n        <div class="dropdown-container">\n            <ng-content></ng-content>\n        </div>\n    ',
	    host: {
	        '(keydown)': 'onKeyDown($event)',
	        '[class.active]': 'active'
	    }
	}), _dec(_class = function (_OutsideClick) {
	    _inherits(Dropdown, _OutsideClick);
	
	    function Dropdown(element) {
	        _classCallCheck(this, Dropdown);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, element));
	
	        _this.clickHandler = _this.toggleActive.bind(_this);
	        return _this;
	    }
	
	    _createClass(Dropdown, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            var button = this.element.nativeElement.querySelector('button');
	            button.addEventListener('click', this.clickHandler);
	        }
	    }, {
	        key: 'ngOnDestroy',
	        value: function ngOnDestroy() {
	            var button = this.element.nativeElement.querySelector('button');
	            button.removeEventListener('click', this.clickHandler);
	        }
	    }, {
	        key: 'onKeyDown',
	        value: function onKeyDown(event) {
	            if (this.active && (event.keyCode === _KeyCodes.KeyCodes.ESC || event.keyCode === _KeyCodes.KeyCodes.ENTER)) {
	                this.toggleActive();
	            }
	        }
	    }]);
	
	    return Dropdown;
	}(_OutsideClick2.OutsideClick)) || _class);
	Reflect.defineMetadata('design:paramtypes', [_core.ElementRef], Dropdown);
	var NOVO_DROPDOWN_ELEMENTS = exports.NOVO_DROPDOWN_ELEMENTS = [Dropdown];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9kcm9wZG93bi9Ecm9wZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztJQWVhLFEsV0FBQSxRLFdBYloscUJBQVU7QUFDUCxjQUFVLGVBREg7QUFFUCwwS0FGTztBQVFQLFVBQU07QUFDRixxQkFBYSxtQkFEWDtBQUVGLDBCQUFrQjtBQUZoQjtBQVJDLENBQVYsQzs7O0FBY0csc0JBQVksT0FBWixFQUFnQztBQUFBOztBQUFBLGdHQUN0QixPQURzQjs7QUFFNUIsY0FBSyxZQUFMLEdBQW9CLE1BQUssWUFBTCxDQUFrQixJQUFsQixPQUFwQjtBQUY0QjtBQUcvQjs7OzttQ0FFVTtBQUNQLGdCQUFJLFNBQVMsS0FBSyxPQUFMLENBQWEsYUFBYixDQUEyQixhQUEzQixDQUF5QyxRQUF6QyxDQUFiO0FBQ0EsbUJBQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsS0FBSyxZQUF0QztBQUNIOzs7c0NBRWE7QUFDVixnQkFBSSxTQUFTLEtBQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsYUFBM0IsQ0FBeUMsUUFBekMsQ0FBYjtBQUNBLG1CQUFPLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9DLEtBQUssWUFBekM7QUFDSDs7O2tDQUVTLEssRUFBTztBQUNiLGdCQUFJLEtBQUssTUFBTCxLQUFnQixNQUFNLE9BQU4sS0FBa0IsbUJBQVMsR0FBM0IsSUFBa0MsTUFBTSxPQUFOLEtBQWtCLG1CQUFTLEtBQTdFLENBQUosRUFBeUY7QUFDckYscUJBQUssWUFBTDtBQUNIO0FBQ0o7Ozs7O2dFQXBCUSxRO0FBdUJOLElBQU0sMERBQXlCLENBQUMsUUFBRCxDQUEvQiIsImZpbGUiOiJEcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE91dHNpZGVDbGljayB9IGZyb20gJy4vLi4vLi4vdXRpbHMvb3V0c2lkZS1jbGljay9PdXRzaWRlQ2xpY2snO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm92by1kcm9wZG93bicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYnV0dG9uXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgaG9zdDoge1xuICAgICAgICAnKGtleWRvd24pJzogJ29uS2V5RG93bigkZXZlbnQpJyxcbiAgICAgICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZSdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duIGV4dGVuZHMgT3V0c2lkZUNsaWNrIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OkVsZW1lbnRSZWYpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG4gICAgICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy50b2dnbGVBY3RpdmUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBidXR0b24gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUgJiYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVTQyB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FTlRFUikpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBOT1ZPX0RST1BET1dOX0VMRU1FTlRTID0gW0Ryb3Bkb3duXTtcbiJdfQ==

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Header = __webpack_require__(451);
	
	Object.defineProperty(exports, 'NOVO_HEADER_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Header.NOVO_HEADER_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7bUJBQVMsb0IiLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hc2liaWxpYS9Eb2N1bWVudHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IE5PVk9fSEVBREVSX0VMRU1FTlRTIH0gZnJvbSAnLi9oZWFkZXIvSGVhZGVyJztcbiJdfQ==

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_HEADER_ELEMENTS = exports.NovoHeader = exports.UtilAction = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class, _dec2, _class2;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(6);
	
	var _button = __webpack_require__(74);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UtilAction = exports.UtilAction = (_dec = (0, _core.Component)({
	    selector: 'util-action',
	    inputs: ['icon', 'inverse'],
	    template: '\n        <button theme="icon" [icon]="icon" [attr.inverse]="inverse"></button>\n    ',
	    directives: [_button.NOVO_BUTTON_ELEMENTS]
	}), _dec(_class = function UtilAction() {
	    _classCallCheck(this, UtilAction);
	}) || _class);
	var NovoHeader = exports.NovoHeader = (_dec2 = (0, _core.Component)({
	    selector: 'header[theme]',
	    inputs: ['title', 'theme', 'icon', 'config'],
	    host: {
	        '[class]': 'headerClass',
	        '[attr.theme]': 'theme'
	    },
	    template: '\n        <section class="primary" *ngIf="theme || config.theme">\n            <h1><i *ngIf="icon" [ngClass]="iconClass"></i>{{title || config.title}}</h1>\n            <ng-content select="utils"></ng-content>\n        </section>\n        <ng-content></ng-content>\n    ',
	    directives: [_common.CORE_DIRECTIVES, UtilAction]
	}), _dec2(_class2 = function () {
	    function NovoHeader() {
	        _classCallCheck(this, NovoHeader);
	
	        this.inverse = 'inverse';
	        this.headerClass = 'novo-header';
	    }
	
	    _createClass(NovoHeader, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.iconClass = 'bhi-' + this.icon;
	            this.config = this.config || {};
	            this.inverse = this.theme === 'white' || this.theme === 'off-white' || this.theme === 'light' ? null : 'inverse';
	        }
	    }]);
	
	    return NovoHeader;
	}()) || _class2);
	var NOVO_HEADER_ELEMENTS = exports.NOVO_HEADER_ELEMENTS = [NovoHeader, UtilAction];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9oZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7SUFVYSxVLFdBQUEsVSxXQVJaLHFCQUFVO0FBQ1AsY0FBVSxhQURIO0FBRVAsWUFBUSxDQUFDLE1BQUQsRUFBUyxTQUFULENBRkQ7QUFHUCxxR0FITztBQU1QLGdCQUFZO0FBTkwsQ0FBVixDOzs7SUFnQ1ksVSxXQUFBLFUsWUFyQloscUJBQVU7QUFDUCxjQUFVLGVBREg7QUFFUCxZQUFRLENBQ0osT0FESSxFQUVKLE9BRkksRUFHSixNQUhJLEVBSUosUUFKSSxDQUZEO0FBUVAsVUFBTTtBQUNGLG1CQUFXLGFBRFQ7QUFFRix3QkFBZ0I7QUFGZCxLQVJDO0FBWVAsOFJBWk87QUFtQlAsZ0JBQVksMEJBQWtCLFVBQWxCO0FBbkJMLENBQVYsQztBQXNCRywwQkFBYztBQUFBOztBQUNWLGFBQUssT0FBTCxHQUFlLFNBQWY7QUFDQSxhQUFLLFdBQUwsR0FBbUIsYUFBbkI7QUFDSDs7OzttQ0FFVTtBQUNQLGlCQUFLLFNBQUwsWUFBd0IsS0FBSyxJQUE3QjtBQUNBLGlCQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsSUFBZSxFQUE3QjtBQUNBLGlCQUFLLE9BQUwsR0FBZ0IsS0FBSyxLQUFMLEtBQWUsT0FBZixJQUEwQixLQUFLLEtBQUwsS0FBZSxXQUF6QyxJQUF3RCxLQUFLLEtBQUwsS0FBZSxPQUF4RSxHQUFtRixJQUFuRixHQUEwRixTQUF6RztBQUNIOzs7OztBQUdFLElBQU0sc0RBQXVCLENBQUMsVUFBRCxFQUFhLFVBQWIsQ0FBN0IiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hc2liaWxpYS9Eb2N1bWVudHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5PVk9fQlVUVE9OX0VMRU1FTlRTIH0gZnJvbSAnLi4vYnV0dG9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd1dGlsLWFjdGlvbicsXG4gICAgaW5wdXRzOiBbJ2ljb24nLCAnaW52ZXJzZSddLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgW2ljb25dPVwiaWNvblwiIFthdHRyLmludmVyc2VdPVwiaW52ZXJzZVwiPjwvYnV0dG9uPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW05PVk9fQlVUVE9OX0VMRU1FTlRTXVxufSlcbmV4cG9ydCBjbGFzcyBVdGlsQWN0aW9uIHtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdoZWFkZXJbdGhlbWVdJyxcbiAgICBpbnB1dHM6IFtcbiAgICAgICAgJ3RpdGxlJyxcbiAgICAgICAgJ3RoZW1lJyxcbiAgICAgICAgJ2ljb24nLFxuICAgICAgICAnY29uZmlnJ1xuICAgIF0sXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzXSc6ICdoZWFkZXJDbGFzcycsXG4gICAgICAgICdbYXR0ci50aGVtZV0nOiAndGhlbWUnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInByaW1hcnlcIiAqbmdJZj1cInRoZW1lIHx8IGNvbmZpZy50aGVtZVwiPlxuICAgICAgICAgICAgPGgxPjxpICpuZ0lmPVwiaWNvblwiIFtuZ0NsYXNzXT1cImljb25DbGFzc1wiPjwvaT57e3RpdGxlIHx8IGNvbmZpZy50aXRsZX19PC9oMT5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInV0aWxzXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIFV0aWxBY3Rpb25dXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9IZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmludmVyc2UgPSAnaW52ZXJzZSc7XG4gICAgICAgIHRoaXMuaGVhZGVyQ2xhc3MgPSAnbm92by1oZWFkZXInO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmljb25DbGFzcyA9IGBiaGktJHt0aGlzLmljb259YDtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZyB8fCB7fTtcbiAgICAgICAgdGhpcy5pbnZlcnNlID0gKHRoaXMudGhlbWUgPT09ICd3aGl0ZScgfHwgdGhpcy50aGVtZSA9PT0gJ29mZi13aGl0ZScgfHwgdGhpcy50aGVtZSA9PT0gJ2xpZ2h0JykgPyBudWxsIDogJ2ludmVyc2UnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5PVk9fSEVBREVSX0VMRU1FTlRTID0gW05vdm9IZWFkZXIsIFV0aWxBY3Rpb25dO1xuIl19

/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _List = __webpack_require__(453);
	
	Object.defineProperty(exports, 'NOVO_LIST_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _List.NOVO_LIST_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O2lCQUFTLGtCIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FzaWJpbGlhL0RvY3VtZW50cy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgTk9WT19MSVNUX0VMRU1FTlRTIH0gZnJvbSAnLi9saXN0L0xpc3QnO1xuIl19

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_LIST_ELEMENTS = exports.ItemEnd = exports.ItemContent = exports.ItemTitle = exports.ItemAvatar = exports.NovoListItem = exports.NovoList = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class, _dec2, _class2, _dec3, _class3, _dec4, _class4, _dec5, _class5, _dec6, _class6;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NovoList = exports.NovoList = (_dec = (0, _core.Component)({
	    selector: 'novo-list',
	    inputs: ['direction'],
	    host: {
	        '[class.vertical-list]': 'direction === "vertical"',
	        '[class.horizontal-list]': 'direction === "horizontal"'
	    },
	    template: '\n        <ng-content></ng-content>\n    ',
	    directives: [_common.CORE_DIRECTIVES, _common.NgFor]
	}), _dec(_class = function NovoList() {
	    _classCallCheck(this, NovoList);
	}) || _class);
	var NovoListItem = exports.NovoListItem = (_dec2 = (0, _core.Component)({
	    selector: 'novo-list-item',
	    template: '\n        <ng-content select="item-avatar"></ng-content>\n        <div>\n            <ng-content select="item-title"></ng-content>\n            <ng-content select="item-content"></ng-content>\n        </div>\n        <ng-content select="item-end"></ng-content>\n    ',
	    directives: [_common.CORE_DIRECTIVES, _common.NgFor, _common.NgIf]
	}), _dec2(_class2 = function NovoListItem() {
	    _classCallCheck(this, NovoListItem);
	}) || _class2);
	var ItemAvatar = exports.ItemAvatar = (_dec3 = (0, _core.Component)({
	    selector: 'item-avatar',
	    inputs: ['icon'],
	    template: '\n        <i *ngIf="iconClass" [ngClass]="classMap" theme="contained"></i>\n    ',
	    directives: [_common.NgIf, _common.NgClass]
	}), _dec3(_class3 = function () {
	    function ItemAvatar() {
	        _classCallCheck(this, ItemAvatar);
	    }
	
	    _createClass(ItemAvatar, [{
	        key: 'ngOnChanges',
	        value: function ngOnChanges() {
	            this.iconClass = this.icon ? 'bhi-' + this.icon : null;
	            this.classMap = [this.iconClass, this.icon];
	        }
	    }, {
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.ngOnChanges();
	        }
	    }]);
	
	    return ItemAvatar;
	}()) || _class3);
	var ItemTitle = exports.ItemTitle = (_dec4 = (0, _core.Component)({
	    selector: 'item-title',
	    template: '\n        <h3><ng-content></ng-content></h3>\n    '
	}), _dec4(_class4 = function ItemTitle() {
	    _classCallCheck(this, ItemTitle);
	}) || _class4);
	var ItemContent = exports.ItemContent = (_dec5 = (0, _core.Component)({
	    selector: 'item-content',
	    inputs: ['direction'],
	    host: {
	        '[class.vertical-list]': 'direction === "vertical"',
	        '[class.horizontal-list]': 'direction === "horizontal"'
	    },
	    template: '\n        <ng-content></ng-content>\n    '
	}), _dec5(_class5 = function ItemContent() {
	    _classCallCheck(this, ItemContent);
	}) || _class5);
	var ItemEnd = exports.ItemEnd = (_dec6 = (0, _core.Component)({
	    selector: 'item-end',
	    template: '\n        <ng-content></ng-content>\n    '
	}), _dec6(_class6 = function ItemEnd() {
	    _classCallCheck(this, ItemEnd);
	}) || _class6);
	var NOVO_LIST_ELEMENTS = exports.NOVO_LIST_ELEMENTS = [NovoList, NovoListItem, ItemAvatar, ItemTitle, ItemContent, ItemEnd];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9saXN0L0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztJQWNhLFEsV0FBQSxRLFdBWloscUJBQVU7QUFDUCxjQUFVLFdBREg7QUFFUCxZQUFRLENBQUMsV0FBRCxDQUZEO0FBR1AsVUFBTTtBQUNGLGlDQUF5QiwwQkFEdkI7QUFFRixtQ0FBMkI7QUFGekIsS0FIQztBQU9QLHlEQVBPO0FBVVAsZ0JBQVk7QUFWTCxDQUFWLEM7OztJQTBCWSxZLFdBQUEsWSxZQVpaLHFCQUFVO0FBQ1AsY0FBVSxnQkFESDtBQUVQLDBSQUZPO0FBVVAsZ0JBQVk7QUFWTCxDQUFWLEM7OztJQXNCWSxVLFdBQUEsVSxZQVJaLHFCQUFVO0FBQ1AsY0FBVSxhQURIO0FBRVAsWUFBUSxDQUFDLE1BQUQsQ0FGRDtBQUdQLGdHQUhPO0FBTVAsZ0JBQVk7QUFOTCxDQUFWLEM7Ozs7Ozs7c0NBU2lCO0FBQ1YsaUJBQUssU0FBTCxHQUFrQixLQUFLLElBQU4sWUFBcUIsS0FBSyxJQUExQixHQUFtQyxJQUFwRDtBQUNBLGlCQUFLLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLLFNBQU4sRUFBaUIsS0FBSyxJQUF0QixDQUFoQjtBQUNIOzs7bUNBRVU7QUFDUCxpQkFBSyxXQUFMO0FBQ0g7Ozs7O0lBU1EsUyxXQUFBLFMsWUFOWixxQkFBVTtBQUNQLGNBQVUsWUFESDtBQUVQO0FBRk8sQ0FBVixDOzs7SUFtQlksVyxXQUFBLFcsWUFYWixxQkFBVTtBQUNQLGNBQVUsY0FESDtBQUVQLFlBQVEsQ0FBQyxXQUFELENBRkQ7QUFHUCxVQUFNO0FBQ0YsaUNBQXlCLDBCQUR2QjtBQUVGLG1DQUEyQjtBQUZ6QixLQUhDO0FBT1A7QUFQTyxDQUFWLEM7OztJQW1CWSxPLFdBQUEsTyxZQU5aLHFCQUFVO0FBQ1AsY0FBVSxVQURIO0FBRVA7QUFGTyxDQUFWLEM7OztBQVFNLElBQU0sa0RBQXFCLENBQUMsUUFBRCxFQUFXLFlBQVgsRUFBeUIsVUFBekIsRUFBcUMsU0FBckMsRUFBZ0QsV0FBaEQsRUFBNkQsT0FBN0QsQ0FBM0IiLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUywgTmdGb3IsIE5nSWYsIE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tbGlzdCcsXG4gICAgaW5wdXRzOiBbJ2RpcmVjdGlvbiddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy52ZXJ0aWNhbC1saXN0XSc6ICdkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIicsXG4gICAgICAgICdbY2xhc3MuaG9yaXpvbnRhbC1saXN0XSc6ICdkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiJ1xuICAgIH0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgTmdGb3JdXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9MaXN0IHt9XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm92by1saXN0LWl0ZW0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIml0ZW0tYXZhdGFyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaXRlbS10aXRsZVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIml0ZW0tY29udGVudFwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIml0ZW0tZW5kXCI+PC9uZy1jb250ZW50PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgTmdGb3IsIE5nSWZdXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9MaXN0SXRlbSB7fVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2l0ZW0tYXZhdGFyJyxcbiAgICBpbnB1dHM6IFsnaWNvbiddLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpICpuZ0lmPVwiaWNvbkNsYXNzXCIgW25nQ2xhc3NdPVwiY2xhc3NNYXBcIiB0aGVtZT1cImNvbnRhaW5lZFwiPjwvaT5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtOZ0lmLCBOZ0NsYXNzXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQXZhdGFyIHtcbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5pY29uQ2xhc3MgPSAodGhpcy5pY29uKSA/IGBiaGktJHt0aGlzLmljb259YCA6IG51bGw7XG4gICAgICAgIHRoaXMuY2xhc3NNYXAgPSBbdGhpcy5pY29uQ2xhc3MsIHRoaXMuaWNvbl07XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaXRlbS10aXRsZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgzPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2gzPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgSXRlbVRpdGxlIHt9XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaXRlbS1jb250ZW50JyxcbiAgICBpbnB1dHM6IFsnZGlyZWN0aW9uJ10sXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzLnZlcnRpY2FsLWxpc3RdJzogJ2RpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiJyxcbiAgICAgICAgJ1tjbGFzcy5ob3Jpem9udGFsLWxpc3RdJzogJ2RpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCInXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ29udGVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2l0ZW0tZW5kJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtRW5kIHt9XG5cbmV4cG9ydCBjb25zdCBOT1ZPX0xJU1RfRUxFTUVOVFMgPSBbTm92b0xpc3QsIE5vdm9MaXN0SXRlbSwgSXRlbUF2YXRhciwgSXRlbVRpdGxlLCBJdGVtQ29udGVudCwgSXRlbUVuZF07XG4iXX0=

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_LOADING_ELEMENTS = exports.NovoSpinner = exports.Loading = undefined;
	
	var _dec, _class, _dec2, _class2;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Loading = exports.Loading = (_dec = (0, _core.Component)({
	    selector: 'novo-loading',
	    inputs: ['theme'],
	    host: {
	        '[class]': 'theme || ""'
	    },
	    template: '\n        <dot></dot>\n        <dot></dot>\n        <dot></dot>\n        <dot></dot>\n        <dot></dot>\n    ',
	    directives: [_common.CORE_DIRECTIVES]
	}), _dec(_class = function Loading() {
	    _classCallCheck(this, Loading);
	}) || _class);
	var NovoSpinner = exports.NovoSpinner = (_dec2 = (0, _core.Component)({
	    selector: 'novo-spinner',
	    inputs: ['theme', 'inverse'],
	    template: '\n    <svg class="bullhornSpinner" [ngClass]="theme" height="100" width="100" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" [attr.inverse]="inverse">\n        <title>Bullhorn Spinner Animation</title>\n        <desc>Spinner animation indicating loading</desc>\n        <defs>\n            <style>\n                .bullhornSpinner g.circleGroup {\n                    -webkit-filter: url({{absUrl}}#gooEffect);\n                    filter: url({{absUrl}}#gooEffect);\n                }\n            </style>\n            <filter id="gooEffect">\n                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />\n                <feColorMatrix in="blur" mode="matrix" values="\n                        1.3 0 0 0 0\n                        0 1.3 0 0 0\n                        0 0 1.3 0 0\n                        0 0 0 19 -7" result="gooEffect" />\n                <feComposite in="SourceGraphic" in2="gooEffect" operator="atop" />\n            </filter>\n        </defs>\n        <g class="circleGroup" transform="translate(7, 7)">\n            <circle />\n            <circle />\n            <circle />\n            <circle />\n            <circle />\n        </g>\n    </svg>\n    '
	}), _dec2(_class2 = function NovoSpinner() {
	    _classCallCheck(this, NovoSpinner);
	
	    this.absUrl = window.location.href;
	}) || _class2);
	var NOVO_LOADING_ELEMENTS = exports.NOVO_LOADING_ELEMENTS = [Loading, NovoSpinner];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9sb2FkaW5nL0xvYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUFtQmEsTyxXQUFBLE8sV0FqQloscUJBQVU7QUFDUCxjQUFVLGNBREg7QUFFUCxZQUFRLENBQUMsT0FBRCxDQUZEO0FBR1AsVUFBTTtBQUNGLG1CQUFXO0FBRFQsS0FIQztBQU1QLCtIQU5PO0FBYVAsZ0JBQVk7QUFiTCxDQUFWLEM7OztJQXFEWSxXLFdBQUEsVyxZQWxDWixxQkFBVTtBQUNQLGNBQVUsY0FESDtBQUVQLFlBQVEsQ0FBQyxPQUFELEVBQVUsU0FBVixDQUZEO0FBR1A7QUFITyxDQUFWLEM7OztTQW1DRyxNLEdBQVMsT0FBTyxRQUFQLENBQWdCLEk7O0FBR3RCLElBQU0sd0RBQXdCLENBQUMsT0FBRCxFQUFVLFdBQVYsQ0FBOUIiLCJmaWxlIjoiTG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm92by1sb2FkaW5nJyxcbiAgICBpbnB1dHM6IFsndGhlbWUnXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3NdJzogJ3RoZW1lIHx8IFwiXCInXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZG90PjwvZG90PlxuICAgICAgICA8ZG90PjwvZG90PlxuICAgICAgICA8ZG90PjwvZG90PlxuICAgICAgICA8ZG90PjwvZG90PlxuICAgICAgICA8ZG90PjwvZG90PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1xuICAgICAgICBDT1JFX0RJUkVDVElWRVNcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmcge31cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdub3ZvLXNwaW5uZXInLFxuICAgIGlucHV0czogWyd0aGVtZScsICdpbnZlcnNlJ10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnIGNsYXNzPVwiYnVsbGhvcm5TcGlubmVyXCIgW25nQ2xhc3NdPVwidGhlbWVcIiBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgW2F0dHIuaW52ZXJzZV09XCJpbnZlcnNlXCI+XG4gICAgICAgIDx0aXRsZT5CdWxsaG9ybiBTcGlubmVyIEFuaW1hdGlvbjwvdGl0bGU+XG4gICAgICAgIDxkZXNjPlNwaW5uZXIgYW5pbWF0aW9uIGluZGljYXRpbmcgbG9hZGluZzwvZGVzYz5cbiAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgLmJ1bGxob3JuU3Bpbm5lciBnLmNpcmNsZUdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IHVybCh7e2Fic1VybH19I2dvb0VmZmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdXJsKHt7YWJzVXJsfX0jZ29vRWZmZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGZpbHRlciBpZD1cImdvb0VmZmVjdFwiPlxuICAgICAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj1cIlNvdXJjZUdyYXBoaWNcIiBzdGREZXZpYXRpb249XCI1XCIgcmVzdWx0PVwiYmx1clwiIC8+XG4gICAgICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49XCJibHVyXCIgbW9kZT1cIm1hdHJpeFwiIHZhbHVlcz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgMS4zIDAgMCAwIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIDAgMS4zIDAgMCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAwIDAgMS4zIDAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgMCAwIDAgMTkgLTdcIiByZXN1bHQ9XCJnb29FZmZlY3RcIiAvPlxuICAgICAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJnb29FZmZlY3RcIiBvcGVyYXRvcj1cImF0b3BcIiAvPlxuICAgICAgICAgICAgPC9maWx0ZXI+XG4gICAgICAgIDwvZGVmcz5cbiAgICAgICAgPGcgY2xhc3M9XCJjaXJjbGVHcm91cFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3LCA3KVwiPlxuICAgICAgICAgICAgPGNpcmNsZSAvPlxuICAgICAgICAgICAgPGNpcmNsZSAvPlxuICAgICAgICAgICAgPGNpcmNsZSAvPlxuICAgICAgICAgICAgPGNpcmNsZSAvPlxuICAgICAgICAgICAgPGNpcmNsZSAvPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU3Bpbm5lciB7XG4gICAgYWJzVXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG59XG5cbmV4cG9ydCBjb25zdCBOT1ZPX0xPQURJTkdfRUxFTUVOVFMgPSBbTG9hZGluZywgTm92b1NwaW5uZXJdO1xuIl19

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_SELECT_ELEMENTS = exports.Select = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // eslint-disable-line
	
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(6);
	
	var _OutsideClick2 = __webpack_require__(132);
	
	var _KeyCodes = __webpack_require__(75);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Select = exports.Select = (_dec = (0, _core.Component)({
	    selector: 'novo-select',
	    directives: [_common.COMMON_DIRECTIVES],
	    inputs: ['options', 'placeholder', 'readonly'],
	    template: '\n        <button (click)="toggleActive($event)" tabIndex="-1" type="button" [ngClass]="{empty: empty}">{{selected.label}}<i class="bhi-collapse"></i></button>\n        <ul class="novo-select-list" tabIndex="-1">\n            <ng-content></ng-content>\n            <li *ngFor="let option of options; let i = index" [ngClass]="{active: option.active}" (click)="onClickOption(option, i)" [attr.data-automation-value]="option.label">\n              <span>{{option.label}}</span>\n              <i *ngIf="option.active" class="bhi-check"></i>\n            </li>\n        </ul>\n    ',
	    host: {
	        '(keydown)': 'onKeyDown($event)',
	        '[class.active]': 'active',
	        '[class.ng-untouched]': 'model.control?.untouched == true',
	        '[class.ng-touched]': 'model.control?.touched == true',
	        '[class.ng-pristine]': 'model.control?.pristine == true',
	        '[class.ng-dirty]': 'model.control?.dirty == true',
	        '[class.ng-valid]': 'model.control?.valid == true',
	        '[class.ng-invalid]': 'model.control?.valid == false'
	    }
	}), _dec(_class = function (_OutsideClick) {
	    _inherits(Select, _OutsideClick);
	
	    function Select(model, element) {
	        _classCallCheck(this, Select);
	
	        // Defaults
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, element));
	
	        _this.selectedIndex = -1;
	        _this.placeholder = 'Select...';
	        _this.empty = true;
	        _this.value = null;
	
	        _this.onChange = null;
	        _this.onTouched = null;
	        _this.onHover = new _core.EventEmitter(false);
	        _this.onLeave = new _core.EventEmitter(false);
	
	        _this.model = model || new _common.NgModel();
	        _this.model.valueAccessor = _this;
	        return _this;
	    }
	
	    _createClass(Select, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.ngOnChanges();
	        }
	    }, {
	        key: 'ngOnChanges',
	        value: function ngOnChanges() {
	            this.readonly = this.readonly === true;
	            if (this.options && this.options.length && typeof this.options[0] === 'string') {
	                this.options = this.options.map(function (item) {
	                    return { value: item, label: item }; //esfmt-ignore-line
	                });
	            }
	
	            if (!this.model.value) {
	                this.clear();
	            } else {
	                // TODO - jgodi - maybe this isn't the best?
	                this.writeValue(this.model.value);
	            }
	        }
	    }, {
	        key: 'onClickOption',
	        value: function onClickOption(option, i) {
	            this.select(option, i);
	            this.toggleActive();
	        }
	    }, {
	        key: 'select',
	        value: function select(option, i) {
	            this.selected.active = false;
	            this.selectedIndex = i;
	            this.selected = option;
	            this.selected.active = true;
	            this.empty = false;
	            this.model.viewToModelUpdate(this.selected.value);
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.selected = {
	                label: this.placeholder,
	                value: null,
	                active: false
	            };
	            this.selectedIndex = -1;
	            this.empty = true;
	        }
	
	        // TODO: Add key listener to jump to options starting with that letter.
	
	    }, {
	        key: 'onKeyDown',
	        value: function onKeyDown(event) {
	            if (this.active) {
	                // Prevent Scrolling
	                event.preventDefault();
	                // Close popup on escape key
	                if (event.keyCode === _KeyCodes.KeyCodes.ESC) {
	                    this.toggleActive();
	                    return;
	                }
	                if (event.keyCode === _KeyCodes.KeyCodes.ENTER) {
	                    this.select(this.options[this.selectedIndex], this.selectedIndex);
	                    this.toggleActive();
	                    return;
	                }
	
	                if (event.keyCode === _KeyCodes.KeyCodes.UP && this.selectedIndex > 0) {
	                    this.selectedIndex--;
	                    this.select(this.options[this.selectedIndex], this.selectedIndex);
	                    this.scrollToSelected();
	                } else if (event.keyCode === _KeyCodes.KeyCodes.DOWN && this.selectedIndex < this.options.length - 1) {
	                    this.selectedIndex++;
	                    this.select(this.options[this.selectedIndex], this.selectedIndex);
	                    this.scrollToSelected();
	                } else if (event.keyCode >= 65 && event.keyCode <= 90) {
	                    var char = String.fromCharCode(event.keyCode);
	                    var element = this.element.nativeElement;
	                    var list = element.querySelector('.novo-select-list');
	                    var item = element.querySelector('[data-automation-value^=' + char + ']');
	                    if (item) {
	                        list.scrollTop = item.offsetTop;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'scrollToSelected',
	        value: function scrollToSelected() {
	            var element = this.element.nativeElement;
	            var list = element.querySelector('.novo-select-list');
	            list.scrollTop = 48 * (this.selectedIndex - 1);
	        }
	
	        //valueAccessor Functions
	
	    }, {
	        key: 'writeValue',
	        value: function writeValue(value) {
	            this.value = value;
	            if (this.options) {
	                var item = this.options.find(function (i) {
	                    return i.value === value;
	                });
	                if (item) {
	                    this.empty = false;
	                    this.selected = item;
	                    this.selected.active = true;
	                    this.selectedIndex = this.options.indexOf(item);
	                } else {
	                    this.clear();
	                }
	            }
	        }
	    }, {
	        key: 'registerOnChange',
	        value: function registerOnChange(fn) {
	            this.onChange = fn;
	        }
	    }, {
	        key: 'registerOnTouched',
	        value: function registerOnTouched(fn) {
	            this.onTouched = fn;
	        }
	    }]);
	
	    return Select;
	}(_OutsideClick2.OutsideClick)) || _class);
	(0, _core.Optional)()(Select, null, 0);
	Reflect.defineMetadata('design:paramtypes', [_common.NgControl, _core.ElementRef], Select);
	var NOVO_SELECT_ELEMENTS = exports.NOVO_SELECT_ELEMENTS = [Select];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9zZWxlY3QvU2VsZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJQTJCYSxNLFdBQUEsTSxXQXpCWixxQkFBVTtBQUNQLGNBQVUsYUFESDtBQUVQLGdCQUFZLDJCQUZMO0FBR1AsWUFBUSxDQUFDLFNBQUQsRUFBWSxhQUFaLEVBQTJCLFVBQTNCLENBSEQ7QUFJUCxrbEJBSk87QUFjUCxVQUFNO0FBQ0YscUJBQWEsbUJBRFg7QUFFRiwwQkFBa0IsUUFGaEI7QUFHRixnQ0FBd0Isa0NBSHRCO0FBSUYsOEJBQXNCLGdDQUpwQjtBQUtGLCtCQUF1QixpQ0FMckI7QUFNRiw0QkFBb0IsOEJBTmxCO0FBT0YsNEJBQW9CLDhCQVBsQjtBQVFGLDhCQUFzQjtBQVJwQjtBQWRDLENBQVYsQzs7O0FBMEJHLG9CQUF3QixLQUF4QixFQUF5QyxPQUF6QyxFQUE2RDtBQUFBOzs7O0FBQUEsOEZBQ25ELE9BRG1EOztBQUd6RCxjQUFLLGFBQUwsR0FBcUIsQ0FBQyxDQUF0QjtBQUNBLGNBQUssV0FBTCxHQUFtQixXQUFuQjtBQUNBLGNBQUssS0FBTCxHQUFhLElBQWI7QUFDQSxjQUFLLEtBQUwsR0FBYSxJQUFiOztBQUVBLGNBQUssUUFBTCxHQUFnQixJQUFoQjtBQUNBLGNBQUssU0FBTCxHQUFpQixJQUFqQjtBQUNBLGNBQUssT0FBTCxHQUFlLHVCQUFpQixLQUFqQixDQUFmO0FBQ0EsY0FBSyxPQUFMLEdBQWUsdUJBQWlCLEtBQWpCLENBQWY7O0FBRUEsY0FBSyxLQUFMLEdBQWEsU0FBUyxxQkFBdEI7QUFDQSxjQUFLLEtBQUwsQ0FBVyxhQUFYO0FBZHlEO0FBZTVEOzs7O21DQUVVO0FBQ1AsaUJBQUssV0FBTDtBQUNIOzs7c0NBRWE7QUFDVixpQkFBSyxRQUFMLEdBQWdCLEtBQUssUUFBTCxLQUFrQixJQUFsQztBQUNBLGdCQUFJLEtBQUssT0FBTCxJQUFnQixLQUFLLE9BQUwsQ0FBYSxNQUE3QixJQUF1QyxPQUFPLEtBQUssT0FBTCxDQUFhLENBQWIsQ0FBUCxLQUEyQixRQUF0RSxFQUFnRjtBQUM1RSxxQkFBSyxPQUFMLEdBQWUsS0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQixVQUFDLElBQUQsRUFBVTtBQUN0QywyQkFBTyxFQUFFLE9BQU8sSUFBVCxFQUFlLE9BQU8sSUFBdEIsRUFBUCxDO0FBQ0gsaUJBRmMsQ0FBZjtBQUdIOztBQUVELGdCQUFJLENBQUMsS0FBSyxLQUFMLENBQVcsS0FBaEIsRUFBdUI7QUFDbkIscUJBQUssS0FBTDtBQUNILGFBRkQsTUFFTzs7QUFFSCxxQkFBSyxVQUFMLENBQWdCLEtBQUssS0FBTCxDQUFXLEtBQTNCO0FBQ0g7QUFDSjs7O3NDQUVhLE0sRUFBUSxDLEVBQUc7QUFDckIsaUJBQUssTUFBTCxDQUFZLE1BQVosRUFBb0IsQ0FBcEI7QUFDQSxpQkFBSyxZQUFMO0FBQ0g7OzsrQkFFTSxNLEVBQVEsQyxFQUFHO0FBQ2QsaUJBQUssUUFBTCxDQUFjLE1BQWQsR0FBdUIsS0FBdkI7QUFDQSxpQkFBSyxhQUFMLEdBQXFCLENBQXJCO0FBQ0EsaUJBQUssUUFBTCxHQUFnQixNQUFoQjtBQUNBLGlCQUFLLFFBQUwsQ0FBYyxNQUFkLEdBQXVCLElBQXZCO0FBQ0EsaUJBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxpQkFBSyxLQUFMLENBQVcsaUJBQVgsQ0FBNkIsS0FBSyxRQUFMLENBQWMsS0FBM0M7QUFDSDs7O2dDQUVPO0FBQ0osaUJBQUssUUFBTCxHQUFnQjtBQUNaLHVCQUFPLEtBQUssV0FEQTtBQUVaLHVCQUFPLElBRks7QUFHWix3QkFBUTtBQUhJLGFBQWhCO0FBS0EsaUJBQUssYUFBTCxHQUFxQixDQUFDLENBQXRCO0FBQ0EsaUJBQUssS0FBTCxHQUFhLElBQWI7QUFDSDs7Ozs7O2tDQUdTLEssRUFBTztBQUNiLGdCQUFJLEtBQUssTUFBVCxFQUFpQjs7QUFFYixzQkFBTSxjQUFOOztBQUVBLG9CQUFJLE1BQU0sT0FBTixLQUFrQixtQkFBUyxHQUEvQixFQUFvQztBQUNoQyx5QkFBSyxZQUFMO0FBQ0E7QUFDSDtBQUNELG9CQUFJLE1BQU0sT0FBTixLQUFrQixtQkFBUyxLQUEvQixFQUFzQztBQUNsQyx5QkFBSyxNQUFMLENBQVksS0FBSyxPQUFMLENBQWEsS0FBSyxhQUFsQixDQUFaLEVBQThDLEtBQUssYUFBbkQ7QUFDQSx5QkFBSyxZQUFMO0FBQ0E7QUFDSDs7QUFFRCxvQkFBSSxNQUFNLE9BQU4sS0FBa0IsbUJBQVMsRUFBM0IsSUFBaUMsS0FBSyxhQUFMLEdBQXFCLENBQTFELEVBQTZEO0FBQ3pELHlCQUFLLGFBQUw7QUFDQSx5QkFBSyxNQUFMLENBQVksS0FBSyxPQUFMLENBQWEsS0FBSyxhQUFsQixDQUFaLEVBQThDLEtBQUssYUFBbkQ7QUFDQSx5QkFBSyxnQkFBTDtBQUNILGlCQUpELE1BSU8sSUFBSSxNQUFNLE9BQU4sS0FBa0IsbUJBQVMsSUFBM0IsSUFBbUMsS0FBSyxhQUFMLEdBQXFCLEtBQUssT0FBTCxDQUFhLE1BQWIsR0FBc0IsQ0FBbEYsRUFBcUY7QUFDeEYseUJBQUssYUFBTDtBQUNBLHlCQUFLLE1BQUwsQ0FBWSxLQUFLLE9BQUwsQ0FBYSxLQUFLLGFBQWxCLENBQVosRUFBOEMsS0FBSyxhQUFuRDtBQUNBLHlCQUFLLGdCQUFMO0FBQ0gsaUJBSk0sTUFJQSxJQUFJLE1BQU0sT0FBTixJQUFpQixFQUFqQixJQUF1QixNQUFNLE9BQU4sSUFBaUIsRUFBNUMsRUFBZ0Q7QUFDbkQsd0JBQUksT0FBTyxPQUFPLFlBQVAsQ0FBb0IsTUFBTSxPQUExQixDQUFYO0FBQ0Esd0JBQUksVUFBVSxLQUFLLE9BQUwsQ0FBYSxhQUEzQjtBQUNBLHdCQUFJLE9BQU8sUUFBUSxhQUFSLENBQXNCLG1CQUF0QixDQUFYO0FBQ0Esd0JBQUksT0FBTyxRQUFRLGFBQVIsOEJBQWlELElBQWpELE9BQVg7QUFDQSx3QkFBSSxJQUFKLEVBQVU7QUFDTiw2QkFBSyxTQUFMLEdBQWlCLEtBQUssU0FBdEI7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7OzJDQUVrQjtBQUNmLGdCQUFJLFVBQVUsS0FBSyxPQUFMLENBQWEsYUFBM0I7QUFDQSxnQkFBSSxPQUFPLFFBQVEsYUFBUixDQUFzQixtQkFBdEIsQ0FBWDtBQUNBLGlCQUFLLFNBQUwsR0FBaUIsTUFBTSxLQUFLLGFBQUwsR0FBcUIsQ0FBM0IsQ0FBakI7QUFDSDs7Ozs7O21DQUdVLEssRUFBTztBQUNkLGlCQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsZ0JBQUksS0FBSyxPQUFULEVBQWtCO0FBQ2Qsb0JBQUksT0FBTyxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCO0FBQUEsMkJBQUssRUFBRSxLQUFGLEtBQVksS0FBakI7QUFBQSxpQkFBbEIsQ0FBWDtBQUNBLG9CQUFJLElBQUosRUFBVTtBQUNOLHlCQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EseUJBQUssUUFBTCxHQUFnQixJQUFoQjtBQUNBLHlCQUFLLFFBQUwsQ0FBYyxNQUFkLEdBQXVCLElBQXZCO0FBQ0EseUJBQUssYUFBTCxHQUFxQixLQUFLLE9BQUwsQ0FBYSxPQUFiLENBQXFCLElBQXJCLENBQXJCO0FBQ0gsaUJBTEQsTUFLTztBQUNILHlCQUFLLEtBQUw7QUFDSDtBQUNKO0FBQ0o7Ozt5Q0FFZ0IsRSxFQUFJO0FBQ2pCLGlCQUFLLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDs7OzBDQUVpQixFLEVBQUk7QUFDbEIsaUJBQUssU0FBTCxHQUFpQixFQUFqQjtBQUNIOzs7OztBQTdIWSxxQixDQURKLE07bUZBQUEsTTtBQWlJTixJQUFNLHNEQUF1QixDQUFDLE1BQUQsQ0FBN0IiLCJmaWxlIjoiU2VsZWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hc2liaWxpYS9Eb2N1bWVudHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5pbXBvcnQgeyBDT01NT05fRElSRUNUSVZFUywgTmdDb250cm9sLCBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE91dHNpZGVDbGljayB9IGZyb20gJy4vLi4vLi4vdXRpbHMvb3V0c2lkZS1jbGljay9PdXRzaWRlQ2xpY2snO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm92by1zZWxlY3QnLFxuICAgIGRpcmVjdGl2ZXM6IFtDT01NT05fRElSRUNUSVZFU10sXG4gICAgaW5wdXRzOiBbJ29wdGlvbnMnLCAncGxhY2Vob2xkZXInLCAncmVhZG9ubHknXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVBY3RpdmUoJGV2ZW50KVwiIHRhYkluZGV4PVwiLTFcIiB0eXBlPVwiYnV0dG9uXCIgW25nQ2xhc3NdPVwie2VtcHR5OiBlbXB0eX1cIj57e3NlbGVjdGVkLmxhYmVsfX08aSBjbGFzcz1cImJoaS1jb2xsYXBzZVwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgPHVsIGNsYXNzPVwibm92by1zZWxlY3QtbGlzdFwiIHRhYkluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnM7IGxldCBpID0gaW5kZXhcIiBbbmdDbGFzc109XCJ7YWN0aXZlOiBvcHRpb24uYWN0aXZlfVwiIChjbGljayk9XCJvbkNsaWNrT3B0aW9uKG9wdGlvbiwgaSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24tdmFsdWVdPVwib3B0aW9uLmxhYmVsXCI+XG4gICAgICAgICAgICAgIDxzcGFuPnt7b3B0aW9uLmxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgIDxpICpuZ0lmPVwib3B0aW9uLmFjdGl2ZVwiIGNsYXNzPVwiYmhpLWNoZWNrXCI+PC9pPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICBgLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJyhrZXlkb3duKSc6ICdvbktleURvd24oJGV2ZW50KScsXG4gICAgICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnLFxuICAgICAgICAnW2NsYXNzLm5nLXVudG91Y2hlZF0nOiAnbW9kZWwuY29udHJvbD8udW50b3VjaGVkID09IHRydWUnLFxuICAgICAgICAnW2NsYXNzLm5nLXRvdWNoZWRdJzogJ21vZGVsLmNvbnRyb2w/LnRvdWNoZWQgPT0gdHJ1ZScsXG4gICAgICAgICdbY2xhc3MubmctcHJpc3RpbmVdJzogJ21vZGVsLmNvbnRyb2w/LnByaXN0aW5lID09IHRydWUnLFxuICAgICAgICAnW2NsYXNzLm5nLWRpcnR5XSc6ICdtb2RlbC5jb250cm9sPy5kaXJ0eSA9PSB0cnVlJyxcbiAgICAgICAgJ1tjbGFzcy5uZy12YWxpZF0nOiAnbW9kZWwuY29udHJvbD8udmFsaWQgPT0gdHJ1ZScsXG4gICAgICAgICdbY2xhc3MubmctaW52YWxpZF0nOiAnbW9kZWwuY29udHJvbD8udmFsaWQgPT0gZmFsc2UnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBPdXRzaWRlQ2xpY2sge1xuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIG1vZGVsOk5nQ29udHJvbCwgZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZWZhdWx0c1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9ICdTZWxlY3QuLi4nO1xuICAgICAgICB0aGlzLmVtcHR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IG51bGw7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbkhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG4gICAgICAgIHRoaXMub25MZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbCB8fCBuZXcgTmdNb2RlbCgpO1xuICAgICAgICB0aGlzLm1vZGVsLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMucmVhZG9ubHkgPSB0aGlzLnJlYWRvbmx5ID09PSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5sZW5ndGggJiYgdHlwZW9mIHRoaXMub3B0aW9uc1swXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogaXRlbSwgbGFiZWw6IGl0ZW0gfTsgLy9lc2ZtdC1pZ25vcmUtbGluZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMubW9kZWwudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRPRE8gLSBqZ29kaSAtIG1heWJlIHRoaXMgaXNuJ3QgdGhlIGJlc3Q/XG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5tb2RlbC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrT3B0aW9uKG9wdGlvbiwgaSkge1xuICAgICAgICB0aGlzLnNlbGVjdChvcHRpb24sIGkpO1xuICAgICAgICB0aGlzLnRvZ2dsZUFjdGl2ZSgpO1xuICAgIH1cblxuICAgIHNlbGVjdChvcHRpb24sIGkpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IG9wdGlvbjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtcHR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW9kZWwudmlld1RvTW9kZWxVcGRhdGUodGhpcy5zZWxlY3RlZC52YWx1ZSk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB7XG4gICAgICAgICAgICBsYWJlbDogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5lbXB0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogQWRkIGtleSBsaXN0ZW5lciB0byBqdW1wIHRvIG9wdGlvbnMgc3RhcnRpbmcgd2l0aCB0aGF0IGxldHRlci5cbiAgICBvbktleURvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAvLyBQcmV2ZW50IFNjcm9sbGluZ1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIENsb3NlIHBvcHVwIG9uIGVzY2FwZSBrZXlcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FU0MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUFjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FTlRFUikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KHRoaXMub3B0aW9uc1t0aGlzLnNlbGVjdGVkSW5kZXhdLCB0aGlzLnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuVVAgJiYgdGhpcy5zZWxlY3RlZEluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleC0tO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KHRoaXMub3B0aW9uc1t0aGlzLnNlbGVjdGVkSW5kZXhdLCB0aGlzLnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5ET1dOICYmIHRoaXMuc2VsZWN0ZWRJbmRleCA8IHRoaXMub3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Kys7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5vcHRpb25zW3RoaXMuc2VsZWN0ZWRJbmRleF0sIHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPj0gNjUgJiYgZXZlbnQua2V5Q29kZSA8PSA5MCkge1xuICAgICAgICAgICAgICAgIGxldCBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5rZXlDb2RlKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubm92by1zZWxlY3QtbGlzdCcpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1hdXRvbWF0aW9uLXZhbHVlXj0ke2NoYXJ9XWApO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Quc2Nyb2xsVG9wID0gaXRlbS5vZmZzZXRUb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9TZWxlY3RlZCgpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGV0IGxpc3QgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3ZvLXNlbGVjdC1saXN0Jyk7XG4gICAgICAgIGxpc3Quc2Nyb2xsVG9wID0gNDggKiAodGhpcy5zZWxlY3RlZEluZGV4IC0gMSk7XG4gICAgfVxuXG4gICAgLy92YWx1ZUFjY2Vzc29yIEZ1bmN0aW9uc1xuICAgIHdyaXRlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMub3B0aW9ucy5maW5kKGkgPT4gaS52YWx1ZSA9PT0gdmFsdWUpO1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMub3B0aW9ucy5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbikge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5PVk9fU0VMRUNUX0VMRU1FTlRTID0gW1NlbGVjdF07XG4iXX0=

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switch = __webpack_require__(457);
	
	Object.defineProperty(exports, 'NOVO_SWITCH_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Switch.NOVO_SWITCH_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9zd2l0Y2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7bUJBQVMsb0IiLCJmaWxlIjoic3dpdGNoLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hc2liaWxpYS9Eb2N1bWVudHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IE5PVk9fU1dJVENIX0VMRU1FTlRTIH0gZnJvbSAnLi9zd2l0Y2gvU3dpdGNoJztcbiJdfQ==

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_SWITCH_ELEMENTS = exports.NovoSwitch = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _KeyCodes = __webpack_require__(75);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NovoSwitch = exports.NovoSwitch = (_dec = (0, _core.Component)({
	    selector: 'novo-switch',
	    inputs: ['checked', 'disabled'],
	    outputs: ['onChange'],
	    host: {
	        'role': 'checkbox',
	        '[attr.aria-checked]': 'checked',
	        '[attr.aria-disabled]': '_disabled',
	        '(keydown)': 'onKeydown($event)'
	    },
	    directives: [],
	    encapsulation: _core.ViewEncapsulation.None,
	    template: '\n        <div (click)="toggle($event)">\n            <div class="novo-switch-container">\n                <div class="novo-switch-bar"></div>\n                <div class="novo-switch-thumb-container">\n                    <div class="novo-switch-thumb"></div>\n                </div>\n            </div>\n            <div class="novo-switch-label"><ng-content></ng-content></div>\n        </div>\n    '
	}), _dec(_class = function () {
	    function NovoSwitch() {
	        _classCallCheck(this, NovoSwitch);
	
	        this.checked = false;
	        this._disabled = false;
	        this.onChange = new _core.EventEmitter();
	    }
	
	    _createClass(NovoSwitch, [{
	        key: 'onKeydown',
	        value: function onKeydown(event) {
	            if (event.keyCode === _KeyCodes.KeyCodes.SPACE) {
	                event.preventDefault();
	                this.toggle(event);
	            }
	        }
	    }, {
	        key: 'toggle',
	        value: function toggle(event) {
	            if (event) {
	                event.stopPropagation();
	                event.preventDefault();
	            }
	            if (this.disabled) {
	                return;
	            }
	
	            this.checked = !this.checked;
	            this.onChange.next(this.checked);
	        }
	    }, {
	        key: 'disabled',
	        get: function get() {
	            return this._disabled;
	        },
	        set: function set(value) {
	            this._disabled = !value;
	        }
	    }]);
	
	    return NovoSwitch;
	}()) || _class);
	var NOVO_SWITCH_ELEMENTS = exports.NOVO_SWITCH_ELEMENTS = [NovoSwitch];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9zd2l0Y2gvU3dpdGNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7SUEwQmEsVSxXQUFBLFUsV0F4QloscUJBQVU7QUFDUCxjQUFVLGFBREg7QUFFUCxZQUFRLENBQUMsU0FBRCxFQUFZLFVBQVosQ0FGRDtBQUdQLGFBQVMsQ0FBQyxVQUFELENBSEY7QUFJUCxVQUFNO0FBQ0YsZ0JBQVEsVUFETjtBQUVGLCtCQUF1QixTQUZyQjtBQUdGLGdDQUF3QixXQUh0QjtBQUlGLHFCQUFhO0FBSlgsS0FKQztBQVVQLGdCQUFZLEVBVkw7QUFXUCxtQkFBZSx3QkFBa0IsSUFYMUI7QUFZUDtBQVpPLENBQVYsQztBQXlCRywwQkFBYztBQUFBOztBQUNWLGFBQUssT0FBTCxHQUFlLEtBQWY7QUFDQSxhQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxhQUFLLFFBQUwsR0FBZ0Isd0JBQWhCO0FBQ0g7Ozs7a0NBVVMsSyxFQUFPO0FBQ2IsZ0JBQUksTUFBTSxPQUFOLEtBQWtCLG1CQUFTLEtBQS9CLEVBQXNDO0FBQ2xDLHNCQUFNLGNBQU47QUFDQSxxQkFBSyxNQUFMLENBQVksS0FBWjtBQUNIO0FBQ0o7OzsrQkFFTSxLLEVBQU87QUFDVixnQkFBSSxLQUFKLEVBQVc7QUFDUCxzQkFBTSxlQUFOO0FBQ0Esc0JBQU0sY0FBTjtBQUNIO0FBQ0QsZ0JBQUksS0FBSyxRQUFULEVBQW1CO0FBQ2Y7QUFDSDs7QUFFRCxpQkFBSyxPQUFMLEdBQWUsQ0FBQyxLQUFLLE9BQXJCO0FBQ0EsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBSyxPQUF4QjtBQUNIOzs7NEJBMUJjO0FBQ1gsbUJBQU8sS0FBSyxTQUFaO0FBQ0gsUzswQkFFWSxLLEVBQU87QUFDaEIsaUJBQUssU0FBTCxHQUFrQixDQUFDLEtBQW5CO0FBQ0g7Ozs7O0FBdUJFLElBQU0sc0RBQXVCLENBQUMsVUFBRCxDQUE3QiIsImZpbGUiOiJTd2l0Y2guanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FzaWJpbGlhL0RvY3VtZW50cy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tc3dpdGNoJyxcbiAgICBpbnB1dHM6IFsnY2hlY2tlZCcsICdkaXNhYmxlZCddLFxuICAgIG91dHB1dHM6IFsnb25DaGFuZ2UnXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdyb2xlJzogJ2NoZWNrYm94JyxcbiAgICAgICAgJ1thdHRyLmFyaWEtY2hlY2tlZF0nOiAnY2hlY2tlZCcsXG4gICAgICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdfZGlzYWJsZWQnLFxuICAgICAgICAnKGtleWRvd24pJzogJ29uS2V5ZG93bigkZXZlbnQpJ1xuICAgIH0sXG4gICAgZGlyZWN0aXZlczogW10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IChjbGljayk9XCJ0b2dnbGUoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tc3dpdGNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXN3aXRjaC1iYXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1zd2l0Y2gtdGh1bWItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXN3aXRjaC10aHVtYlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1zd2l0Y2gtbGFiZWxcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTm92b1N3aXRjaCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIH1cblxuICAgIGdldCBkaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICAgIH1cblxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9ICghdmFsdWUpO1xuICAgIH1cblxuICAgIG9uS2V5ZG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuU1BBQ0UpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgICAgIHRoaXMub25DaGFuZ2UubmV4dCh0aGlzLmNoZWNrZWQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5PVk9fU1dJVENIX0VMRU1FTlRTID0gW05vdm9Td2l0Y2hdO1xuIl19

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Table = __webpack_require__(459);
	
	Object.defineProperty(exports, 'NOVO_TABLE_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Table.NOVO_TABLE_ELEMENTS;
	  }
	});
	
	var _TableExtras = __webpack_require__(226);
	
	Object.keys(_TableExtras).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _TableExtras[key];
	    }
	  });
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztrQkFBUyxtQjs7Ozs7O0FBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InRhYmxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hc2liaWxpYS9Eb2N1bWVudHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IE5PVk9fVEFCTEVfRUxFTUVOVFMgfSBmcm9tICcuL3RhYmxlL1RhYmxlJztcbmV4cG9ydCAqIGZyb20gJy4vdGFibGUvZXh0cmFzL1RhYmxlRXh0cmFzJztcbiJdfQ==

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_TABLE_ELEMENTS = exports.NovoTable = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(6);
	
	var _lang = __webpack_require__(4);
	
	var _button = __webpack_require__(74);
	
	var _dropdown = __webpack_require__(223);
	
	var _TableExtras = __webpack_require__(226);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NovoTable = exports.NovoTable = (_dec = (0, _core.Component)({
	    selector: 'novo-table, [novoTable]',
	    inputs: ['rows', 'columns', 'config'],
	    outputs: ['onRowClick', 'onTableChange'],
	    directives: [_TableExtras.NOVO_TABLE_EXTRA_ELEMENTS, _common.NgModel, _common.CORE_DIRECTIVES, _common.FORM_DIRECTIVES, _button.NOVO_BUTTON_ELEMENTS, _dropdown.NOVO_DROPDOWN_ELEMENTS],
	    template: '\n        <table class="table table-striped dataTable" [class.table-details]="config.hasDetails" role="grid" style="width: 100%;">\n            <thead>\n                <tr role="row">\n                    <th class="row-actions" *ngIf="config.hasDetails"></th>\n                    <th *ngFor="let column of columns" [novoThOrderable]="column" (onOrderChange)="onOrderChange($event)">\n                        <div class="th-group" [attr.data-automation-id]="column.name">\n                            <div class="th-title" [novoThSortable]="config" [column]="column" (onSortChange)="onSortChange($event)">\n                                <label>{{ column.title }}</label>\n                                <div class="table-sort-icons" [ngClass]="column.sort || \'\'" *ngIf="config.sorting || column.sorting">\n                                    <i class="bhi-arrow-down"></i>\n                                    <i class="bhi-arrow-up"></i>\n                                </div>\n                            </div>\n                            <novo-dropdown side="right" *ngIf="column.filtering" class="column-filters">\n                                <button type="button" theme="icon" icon="filter" [class.filtered]="column.filter" (click)="focusInput(column.name)"></button>\n                                <list *ngIf="column.options?.length">\n                                    <item class="filter-search">\n                                        <div class="header">\n                                            <span>Filters</span>\n                                            <button theme="dialogue" color="negative" icon="times" (click)="onFilterClear(column)">Clear</button>\n                                        </div>\n                                    </item>\n                                    <item [ngClass]="{active: column.filter && column.filter.length && column.filter.includes(option)}"\n                                        *ngFor="let option of column.options" (click)="onFilterClick(column, option)"\n                                        [attr.data-automation-id]="option">\n                                        {{option}} <i class="bhi-check" *ngIf="column.filter && column.filter.length && column.filter.includes(option)"></i>\n                                    </item>\n                                </list>\n                                <list *ngIf="!column.options?.length">\n                                    <item class="filter-search">\n                                        <div class="header">\n                                            <span>Filters</span>\n                                            <button theme="dialogue" color="negative" icon="times" (click)="onFilterClear(column)">Clear</button>\n                                        </div>\n                                        <input type="text" [attr.id]="column.name + \'-input\'" [novoTableFilter]="column" (onFilterChange)="onFilterChange($event)" [(ngModel)]="column.filter"/>\n                                    </item>\n                                </list>\n                            </novo-dropdown>\n                        </div>\n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                <template ngFor let-row="$implicit" [ngForOf]="rows | slice:getPageStart():getPageEnd()">\n                    <tr class="table-row" [attr.data-automation-id]="row.id" (click)="rowClickHandler(row)" [class.active]="row.id === activeId">\n                        <td class="row-actions" *ngIf="config.hasDetails">\n                            <button theme="icon" icon="next" (click)="row._expanded=!row._expanded" *ngIf="!row._expanded"></button>\n                            <button theme="icon" icon="sort-desc" (click)="row._expanded=!row._expanded" *ngIf="row._expanded"></button>\n                        </td>\n                        <td *ngFor="let column of columns" [attr.data-automation-id]="column.name">\n                            <novo-table-cell [column]="column" [row]="row"></novo-table-cell>\n                        </td>\n                    </tr>\n                    <tr class="details-row" *ngIf="config.hasDetails" [hidden]="!row._expanded" [attr.data-automation-id]="\'details-row-\'+row.id">\n                        <td class="row-actions"></td>\n                        <td [attr.colspan]="columns.length">\n                            <novo-row-details [data]="row" [renderer]="config.detailsRenderer"></novo-row-details>\n                        </td>\n                    </tr>\n                </template>\n            </tbody>\n            <tbody *ngIf="rows.length<=0" data-automation-id="empty-table">\n                <tr>\n                    <td colspan="100%">\n                        <div class="no-matching-records">\n                            <h4><i class="bhi-search-question"></i> No matching records</h4>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    '
	}), _dec(_class = function () {
	    function NovoTable() {
	        _classCallCheck(this, NovoTable);
	
	        this.originalRows = [];
	        this.activeId = 0;
	        this.onRowClick = new _core.EventEmitter();
	        this.onTableChange = new _core.EventEmitter();
	    }
	
	    _createClass(NovoTable, [{
	        key: 'ngOnChanges',
	        value: function ngOnChanges() {
	            this.originalRows = this.originalRows.length === 0 ? this.rows : this.originalRows;
	        }
	    }, {
	        key: 'getPageStart',
	        value: function getPageStart() {
	            return this.config.paging ? (this.config.paging.current - 1) * this.config.paging.itemsPerPage : 0;
	        }
	    }, {
	        key: 'getPageEnd',
	        value: function getPageEnd() {
	            return this.config.paging && this.config.paging.itemsPerPage > -1 ? this.getPageStart() + this.config.paging.itemsPerPage : this.rows.length;
	        }
	    }, {
	        key: 'focusInput',
	        value: function focusInput(name) {
	            var element = document.getElementById(name + '-input');
	            if (element) {
	                setTimeout(function () {
	                    element.focus();
	                });
	            }
	        }
	    }, {
	        key: 'onFilterClick',
	        value: function onFilterClick(column, filter) {
	            if (Array.isArray(column.filter)) {
	                if (column.filter.includes(filter)) {
	                    // Remove filter
	                    column.filter.splice(column.filter.indexOf(filter), 1);
	
	                    if (column.filter.length === 0) {
	                        column.filter = null;
	                    }
	                } else {
	                    // Add filter
	                    column.filter.push(filter);
	                }
	            } else {
	                column.filter = [filter];
	            }
	            this.onFilterChange();
	        }
	    }, {
	        key: 'onFilterClear',
	        value: function onFilterClear(column) {
	            column.filter = null;
	            this.onFilterChange();
	        }
	    }, {
	        key: 'onFilterChange',
	        value: function onFilterChange() {
	            var _this = this;
	
	            if (this.config.filtering) {
	                (function () {
	                    var filters = _this.columns.filter(function (col) {
	                        return col.filter && col.filter.length;
	                    });
	
	                    if (filters.length) {
	                        if ((0, _lang.isFunction)(_this.config.filtering)) {
	                            // Custom filter function on the table config
	                            _this.rows = _this.config.filtering(filters, _this.originalRows);
	                        } else {
	                            _this.rows = _this.originalRows.filter(function (item) {
	                                var matched = void 0;
	                                var _iteratorNormalCompletion = true;
	                                var _didIteratorError = false;
	                                var _iteratorError = undefined;
	
	                                try {
	                                    for (var _iterator = filters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                        var column = _step.value;
	
	                                        if (Array.isArray(column.filter)) {
	                                            // If the filters are an array (multi-select), check value
	                                            matched = column.filter.includes(item[column.name]);
	                                        } else {
	                                            if (column.match && (0, _lang.isFunction)(column.match)) {
	                                                // Custom match function on the column
	                                                matched = column.match(item[column.name], column.filter);
	                                            } else if (Array.isArray(item[column.name])) {
	                                                // Value is an array
	                                                var _iteratorNormalCompletion2 = true;
	                                                var _didIteratorError2 = false;
	                                                var _iteratorError2 = undefined;
	
	                                                try {
	                                                    for (var _iterator2 = item[column.name][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                                        var value = _step2.value;
	
	                                                        matched = value.match(new RegExp(column.filter, 'gi'));
	                                                        if (!matched) break;
	                                                    }
	                                                } catch (err) {
	                                                    _didIteratorError2 = true;
	                                                    _iteratorError2 = err;
	                                                } finally {
	                                                    try {
	                                                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                                            _iterator2.return();
	                                                        }
	                                                    } finally {
	                                                        if (_didIteratorError2) {
	                                                            throw _iteratorError2;
	                                                        }
	                                                    }
	                                                }
	                                            } else {
	                                                // Basic, value is just a string
	                                                matched = JSON.stringify(item[column.name]).match(new RegExp(column.filter, 'gi'));
	                                            }
	                                        }
	                                        if (!matched) break;
	                                    }
	                                } catch (err) {
	                                    _didIteratorError = true;
	                                    _iteratorError = err;
	                                } finally {
	                                    try {
	                                        if (!_iteratorNormalCompletion && _iterator.return) {
	                                            _iterator.return();
	                                        }
	                                    } finally {
	                                        if (_didIteratorError) {
	                                            throw _iteratorError;
	                                        }
	                                    }
	                                }
	
	                                return matched;
	                            });
	                        }
	                    } else {
	                        _this.rows = _this.originalRows;
	                    }
	
	                    // Trickle down to keep sort
	                    _this.onSortChange(_this.currentSortColumn);
	
	                    // If paging, reset page
	                    if (_this.config.paging) {
	                        _this.config.paging.current = 1;
	                    }
	                })();
	            }
	        }
	    }, {
	        key: 'onSortChange',
	        value: function onSortChange(newSortColumn) {
	            this.currentSortColumn = newSortColumn;
	
	            if (newSortColumn) {
	                this.columns.map(function (column) {
	                    if (column.name !== newSortColumn.name) {
	                        delete column.sort;
	                    }
	                    return false;
	                });
	
	                if ((0, _lang.isFunction)(this.config.sorting)) {
	                    // Custom sort function on the table config
	                    this.rows = this.config.sorting(newSortColumn, this.rows);
	                } else {
	                    this.rows.sort(function (previous, current) {
	                        var columnName = newSortColumn.name;
	                        var first = previous[columnName],
	                            second = current[columnName];
	
	                        // Custom compare function on the column
	                        if (newSortColumn.compare && (0, _lang.isFunction)(newSortColumn.compare)) {
	                            return newSortColumn.compare(newSortColumn.sort, first, second);
	                        }
	
	                        if ((0, _lang.isString)(first) && (0, _lang.isString)(second)) {
	                            // Basic strings
	                            first = first.toLowerCase();
	                            second = second.toLowerCase();
	                        } else {
	                            // Numbers
	                            first = isNaN(Number(first)) ? first : Number(first);
	                            second = isNaN(Number(second)) ? second : Number(second);
	                        }
	
	                        if (first > second) {
	                            return newSortColumn.sort === 'desc' ? -1 : 1;
	                        }
	                        if (first < second) {
	                            return newSortColumn.sort === 'asc' ? -1 : 1;
	                        }
	                        return 0;
	                    });
	                }
	            }
	
	            // Fire table change event
	            this.fireTableChangeEvent();
	
	            // If paging, reset page
	            if (this.config.paging) {
	                this.config.paging.current = 1;
	            }
	        }
	    }, {
	        key: 'fireTableChangeEvent',
	        value: function fireTableChangeEvent() {
	            // Construct a table change object
	            var onTableChange = {};
	            var filters = this.columns.filter(function (col) {
	                return col.filter && col.filter.length;
	            });
	
	            onTableChange.filter = filters.length ? filters : false;
	            onTableChange.sort = this.currentSortColumn ? this.currentSortColumn : false;
	            onTableChange.rows = this.rows;
	
	            // Emit event
	            this.onTableChange.emit(onTableChange);
	        }
	    }, {
	        key: 'findColumnIndex',
	        value: function findColumnIndex(value) {
	            for (var i = 0; i < this.columns.length; i += 1) {
	                if (this.columns[i].name === value) {
	                    return i;
	                }
	            }
	            return null;
	        }
	    }, {
	        key: 'onOrderChange',
	        value: function onOrderChange(event) {
	            var oldIndex = this.findColumnIndex(event.first.name);
	            var newIndex = this.findColumnIndex(event.second.name);
	            this.columns.splice(newIndex, 0, this.columns.splice(oldIndex, 1)[0]);
	            this.onSortChange(this.currentSortColumn);
	        }
	    }, {
	        key: 'rowClickHandler',
	        value: function rowClickHandler(row) {
	            if (this.config.rowSelect) {
	                this.activeId = row.id || 0;
	                this.onRowClick.emit(row);
	            }
	        }
	    }]);
	
	    return NovoTable;
	}()) || _class);
	var NOVO_TABLE_ELEMENTS = exports.NOVO_TABLE_ELEMENTS = [NovoTable];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90YWJsZS9UYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7O0lBK0ZhLFMsV0FBQSxTLFdBN0ZaLHFCQUFVO0FBQ1AsY0FBVSx5QkFESDtBQUVQLFlBQVEsQ0FDSixNQURJLEVBRUosU0FGSSxFQUdKLFFBSEksQ0FGRDtBQU9QLGFBQVMsQ0FDTCxZQURLLEVBRUwsZUFGSyxDQVBGO0FBV1AsZ0JBQVksMktBWEw7QUFtQlA7QUFuQk8sQ0FBVixDO0FBOEZHLHlCQUFjO0FBQUE7O0FBQ1YsYUFBSyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsYUFBSyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsYUFBSyxVQUFMLEdBQWtCLHdCQUFsQjtBQUNBLGFBQUssYUFBTCxHQUFxQix3QkFBckI7QUFDSDs7OztzQ0FFYTtBQUNWLGlCQUFLLFlBQUwsR0FBb0IsS0FBSyxZQUFMLENBQWtCLE1BQWxCLEtBQTZCLENBQTdCLEdBQWlDLEtBQUssSUFBdEMsR0FBNkMsS0FBSyxZQUF0RTtBQUNIOzs7dUNBRWM7QUFDWCxtQkFBTyxLQUFLLE1BQUwsQ0FBWSxNQUFaLEdBQXFCLENBQUMsS0FBSyxNQUFMLENBQVksTUFBWixDQUFtQixPQUFuQixHQUE2QixDQUE5QixJQUFtQyxLQUFLLE1BQUwsQ0FBWSxNQUFaLENBQW1CLFlBQTNFLEdBQTBGLENBQWpHO0FBQ0g7OztxQ0FFWTtBQUNULG1CQUFPLEtBQUssTUFBTCxDQUFZLE1BQVosSUFBc0IsS0FBSyxNQUFMLENBQVksTUFBWixDQUFtQixZQUFuQixHQUFrQyxDQUFDLENBQXpELEdBQTZELEtBQUssWUFBTCxLQUFzQixLQUFLLE1BQUwsQ0FBWSxNQUFaLENBQW1CLFlBQXRHLEdBQXFILEtBQUssSUFBTCxDQUFVLE1BQXRJO0FBQ0g7OzttQ0FFVSxJLEVBQU07QUFDYixnQkFBTSxVQUFVLFNBQVMsY0FBVCxDQUEyQixJQUEzQixZQUFoQjtBQUNBLGdCQUFJLE9BQUosRUFBYTtBQUNULDJCQUFXLFlBQU07QUFDYiw0QkFBUSxLQUFSO0FBQ0gsaUJBRkQ7QUFHSDtBQUNKOzs7c0NBRWEsTSxFQUFRLE0sRUFBUTtBQUMxQixnQkFBSSxNQUFNLE9BQU4sQ0FBYyxPQUFPLE1BQXJCLENBQUosRUFBa0M7QUFDOUIsb0JBQUksT0FBTyxNQUFQLENBQWMsUUFBZCxDQUF1QixNQUF2QixDQUFKLEVBQW9DOztBQUVoQywyQkFBTyxNQUFQLENBQWMsTUFBZCxDQUFxQixPQUFPLE1BQVAsQ0FBYyxPQUFkLENBQXNCLE1BQXRCLENBQXJCLEVBQW9ELENBQXBEOztBQUVBLHdCQUFJLE9BQU8sTUFBUCxDQUFjLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDNUIsK0JBQU8sTUFBUCxHQUFnQixJQUFoQjtBQUNIO0FBQ0osaUJBUEQsTUFPTzs7QUFFSCwyQkFBTyxNQUFQLENBQWMsSUFBZCxDQUFtQixNQUFuQjtBQUNIO0FBQ0osYUFaRCxNQVlPO0FBQ0gsdUJBQU8sTUFBUCxHQUFnQixDQUFDLE1BQUQsQ0FBaEI7QUFDSDtBQUNELGlCQUFLLGNBQUw7QUFDSDs7O3NDQUVhLE0sRUFBUTtBQUNsQixtQkFBTyxNQUFQLEdBQWdCLElBQWhCO0FBQ0EsaUJBQUssY0FBTDtBQUNIOzs7eUNBRWdCO0FBQUE7O0FBQ2IsZ0JBQUksS0FBSyxNQUFMLENBQVksU0FBaEIsRUFBMkI7QUFBQTtBQUN2Qix3QkFBTSxVQUFVLE1BQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsVUFBQyxHQUFEO0FBQUEsK0JBQVMsSUFBSSxNQUFKLElBQWMsSUFBSSxNQUFKLENBQVcsTUFBbEM7QUFBQSxxQkFBcEIsQ0FBaEI7O0FBRUEsd0JBQUksUUFBUSxNQUFaLEVBQW9CO0FBQ2hCLDRCQUFJLHNCQUFXLE1BQUssTUFBTCxDQUFZLFNBQXZCLENBQUosRUFBdUM7O0FBRW5DLGtDQUFLLElBQUwsR0FBWSxNQUFLLE1BQUwsQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLE1BQUssWUFBcEMsQ0FBWjtBQUNILHlCQUhELE1BR087QUFDSCxrQ0FBSyxJQUFMLEdBQVksTUFBSyxZQUFMLENBQWtCLE1BQWxCLENBQXlCLFVBQUMsSUFBRCxFQUFVO0FBQzNDLG9DQUFJLGdCQUFKO0FBRDJDO0FBQUE7QUFBQTs7QUFBQTtBQUUzQyx5REFBcUIsT0FBckIsOEhBQThCO0FBQUEsNENBQW5CLE1BQW1COztBQUMxQiw0Q0FBSSxNQUFNLE9BQU4sQ0FBYyxPQUFPLE1BQXJCLENBQUosRUFBa0M7O0FBRTlCLHNEQUFVLE9BQU8sTUFBUCxDQUFjLFFBQWQsQ0FBdUIsS0FBSyxPQUFPLElBQVosQ0FBdkIsQ0FBVjtBQUNILHlDQUhELE1BR087QUFDSCxnREFBSSxPQUFPLEtBQVAsSUFBZ0Isc0JBQVcsT0FBTyxLQUFsQixDQUFwQixFQUE4Qzs7QUFFMUMsMERBQVUsT0FBTyxLQUFQLENBQWEsS0FBSyxPQUFPLElBQVosQ0FBYixFQUFnQyxPQUFPLE1BQXZDLENBQVY7QUFDSCw2Q0FIRCxNQUdPLElBQUksTUFBTSxPQUFOLENBQWMsS0FBSyxPQUFPLElBQVosQ0FBZCxDQUFKLEVBQXNDOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUV6QywwRUFBb0IsS0FBSyxPQUFPLElBQVosQ0FBcEIsbUlBQXVDO0FBQUEsNERBQTVCLEtBQTRCOztBQUNuQyxrRUFBVSxNQUFNLEtBQU4sQ0FBWSxJQUFJLE1BQUosQ0FBVyxPQUFPLE1BQWxCLEVBQTBCLElBQTFCLENBQVosQ0FBVjtBQUNBLDREQUFJLENBQUMsT0FBTCxFQUFjO0FBQ2pCO0FBTHdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNNUMsNkNBTk0sTUFNQTs7QUFFSCwwREFBVSxLQUFLLFNBQUwsQ0FBZSxLQUFLLE9BQU8sSUFBWixDQUFmLEVBQWtDLEtBQWxDLENBQXdDLElBQUksTUFBSixDQUFXLE9BQU8sTUFBbEIsRUFBMEIsSUFBMUIsQ0FBeEMsQ0FBVjtBQUNIO0FBQ0o7QUFDRCw0Q0FBSSxDQUFDLE9BQUwsRUFBYztBQUNqQjtBQXRCMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF1QjNDLHVDQUFPLE9BQVA7QUFDSCw2QkF4QlcsQ0FBWjtBQXlCSDtBQUNKLHFCQS9CRCxNQStCTztBQUNILDhCQUFLLElBQUwsR0FBWSxNQUFLLFlBQWpCO0FBQ0g7OztBQUdELDBCQUFLLFlBQUwsQ0FBa0IsTUFBSyxpQkFBdkI7OztBQUdBLHdCQUFJLE1BQUssTUFBTCxDQUFZLE1BQWhCLEVBQXdCO0FBQ3BCLDhCQUFLLE1BQUwsQ0FBWSxNQUFaLENBQW1CLE9BQW5CLEdBQTZCLENBQTdCO0FBQ0g7QUE1Q3NCO0FBNkMxQjtBQUNKOzs7cUNBRVksYSxFQUFlO0FBQ3hCLGlCQUFLLGlCQUFMLEdBQXlCLGFBQXpCOztBQUVBLGdCQUFJLGFBQUosRUFBbUI7QUFDZixxQkFBSyxPQUFMLENBQWEsR0FBYixDQUFpQixrQkFBVTtBQUN2Qix3QkFBSSxPQUFPLElBQVAsS0FBZ0IsY0FBYyxJQUFsQyxFQUF3QztBQUNwQywrQkFBTyxPQUFPLElBQWQ7QUFDSDtBQUNELDJCQUFPLEtBQVA7QUFDSCxpQkFMRDs7QUFPQSxvQkFBSSxzQkFBVyxLQUFLLE1BQUwsQ0FBWSxPQUF2QixDQUFKLEVBQXFDOztBQUVqQyx5QkFBSyxJQUFMLEdBQVksS0FBSyxNQUFMLENBQVksT0FBWixDQUFvQixhQUFwQixFQUFtQyxLQUFLLElBQXhDLENBQVo7QUFDSCxpQkFIRCxNQUdPO0FBQ0gseUJBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxVQUFDLFFBQUQsRUFBVyxPQUFYLEVBQXVCO0FBQ2xDLDRCQUFNLGFBQWEsY0FBYyxJQUFqQztBQUNBLDRCQUFJLFFBQVEsU0FBUyxVQUFULENBQVo7NEJBQ0ksU0FBUyxRQUFRLFVBQVIsQ0FEYjs7O0FBSUEsNEJBQUksY0FBYyxPQUFkLElBQXlCLHNCQUFXLGNBQWMsT0FBekIsQ0FBN0IsRUFBZ0U7QUFDNUQsbUNBQU8sY0FBYyxPQUFkLENBQXNCLGNBQWMsSUFBcEMsRUFBMEMsS0FBMUMsRUFBaUQsTUFBakQsQ0FBUDtBQUNIOztBQUVELDRCQUFJLG9CQUFTLEtBQVQsS0FBbUIsb0JBQVMsTUFBVCxDQUF2QixFQUF5Qzs7QUFFckMsb0NBQVEsTUFBTSxXQUFOLEVBQVI7QUFDQSxxQ0FBUyxPQUFPLFdBQVAsRUFBVDtBQUNILHlCQUpELE1BSU87O0FBRUgsb0NBQVEsTUFBTSxPQUFPLEtBQVAsQ0FBTixJQUF1QixLQUF2QixHQUErQixPQUFPLEtBQVAsQ0FBdkM7QUFDQSxxQ0FBUyxNQUFNLE9BQU8sTUFBUCxDQUFOLElBQXdCLE1BQXhCLEdBQWlDLE9BQU8sTUFBUCxDQUExQztBQUNIOztBQUVELDRCQUFJLFFBQVEsTUFBWixFQUFvQjtBQUNoQixtQ0FBTyxjQUFjLElBQWQsS0FBdUIsTUFBdkIsR0FBZ0MsQ0FBQyxDQUFqQyxHQUFxQyxDQUE1QztBQUNIO0FBQ0QsNEJBQUksUUFBUSxNQUFaLEVBQW9CO0FBQ2hCLG1DQUFPLGNBQWMsSUFBZCxLQUF1QixLQUF2QixHQUErQixDQUFDLENBQWhDLEdBQW9DLENBQTNDO0FBQ0g7QUFDRCwrQkFBTyxDQUFQO0FBQ0gscUJBM0JEO0FBNEJIO0FBQ0o7OztBQUdELGlCQUFLLG9CQUFMOzs7QUFHQSxnQkFBSSxLQUFLLE1BQUwsQ0FBWSxNQUFoQixFQUF3QjtBQUNwQixxQkFBSyxNQUFMLENBQVksTUFBWixDQUFtQixPQUFuQixHQUE2QixDQUE3QjtBQUNIO0FBQ0o7OzsrQ0FFc0I7O0FBRW5CLGdCQUFNLGdCQUFnQixFQUF0QjtBQUNBLGdCQUFNLFVBQVUsS0FBSyxPQUFMLENBQWEsTUFBYixDQUFvQixVQUFDLEdBQUQ7QUFBQSx1QkFBUyxJQUFJLE1BQUosSUFBYyxJQUFJLE1BQUosQ0FBVyxNQUFsQztBQUFBLGFBQXBCLENBQWhCOztBQUVBLDBCQUFjLE1BQWQsR0FBdUIsUUFBUSxNQUFSLEdBQWlCLE9BQWpCLEdBQTJCLEtBQWxEO0FBQ0EsMEJBQWMsSUFBZCxHQUFxQixLQUFLLGlCQUFMLEdBQXlCLEtBQUssaUJBQTlCLEdBQWtELEtBQXZFO0FBQ0EsMEJBQWMsSUFBZCxHQUFxQixLQUFLLElBQTFCOzs7QUFHQSxpQkFBSyxhQUFMLENBQW1CLElBQW5CLENBQXdCLGFBQXhCO0FBQ0g7Ozt3Q0FFZSxLLEVBQU87QUFDbkIsaUJBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxLQUFLLE9BQUwsQ0FBYSxNQUFqQyxFQUF5QyxLQUFLLENBQTlDLEVBQWlEO0FBQzdDLG9CQUFJLEtBQUssT0FBTCxDQUFhLENBQWIsRUFBZ0IsSUFBaEIsS0FBeUIsS0FBN0IsRUFBb0M7QUFDaEMsMkJBQU8sQ0FBUDtBQUNIO0FBQ0o7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7OztzQ0FFYSxLLEVBQU87QUFDakIsZ0JBQU0sV0FBVyxLQUFLLGVBQUwsQ0FBcUIsTUFBTSxLQUFOLENBQVksSUFBakMsQ0FBakI7QUFDQSxnQkFBTSxXQUFXLEtBQUssZUFBTCxDQUFxQixNQUFNLE1BQU4sQ0FBYSxJQUFsQyxDQUFqQjtBQUNBLGlCQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLFFBQXBCLEVBQThCLENBQTlCLEVBQWlDLEtBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsUUFBcEIsRUFBOEIsQ0FBOUIsRUFBaUMsQ0FBakMsQ0FBakM7QUFDQSxpQkFBSyxZQUFMLENBQWtCLEtBQUssaUJBQXZCO0FBQ0g7Ozt3Q0FFZSxHLEVBQUs7QUFDakIsZ0JBQUksS0FBSyxNQUFMLENBQVksU0FBaEIsRUFBMkI7QUFDdkIscUJBQUssUUFBTCxHQUFnQixJQUFJLEVBQUosSUFBVSxDQUExQjtBQUNBLHFCQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsR0FBckI7QUFDSDtBQUNKOzs7OztBQUdFLElBQU0sb0RBQXNCLENBQUMsU0FBRCxDQUE1QiIsImZpbGUiOiJUYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNTdHJpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9mYWNhZGUvbGFuZyc7XG5cbmltcG9ydCB7IE5PVk9fQlVUVE9OX0VMRU1FTlRTIH0gZnJvbSAnLi4vYnV0dG9uJztcbmltcG9ydCB7IE5PVk9fRFJPUERPV05fRUxFTUVOVFMgfSBmcm9tICcuLi9kcm9wZG93bic7XG5pbXBvcnQgeyBOT1ZPX1RBQkxFX0VYVFJBX0VMRU1FTlRTIH0gZnJvbSAnLi9leHRyYXMvVGFibGVFeHRyYXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tdGFibGUsIFtub3ZvVGFibGVdJyxcbiAgICBpbnB1dHM6IFtcbiAgICAgICAgJ3Jvd3MnLFxuICAgICAgICAnY29sdW1ucycsXG4gICAgICAgICdjb25maWcnXG4gICAgXSxcbiAgICBvdXRwdXRzOiBbXG4gICAgICAgICdvblJvd0NsaWNrJyxcbiAgICAgICAgJ29uVGFibGVDaGFuZ2UnXG4gICAgXSxcbiAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIE5PVk9fVEFCTEVfRVhUUkFfRUxFTUVOVFMsXG4gICAgICAgIE5nTW9kZWwsXG4gICAgICAgIENPUkVfRElSRUNUSVZFUyxcbiAgICAgICAgRk9STV9ESVJFQ1RJVkVTLFxuICAgICAgICBOT1ZPX0JVVFRPTl9FTEVNRU5UUyxcbiAgICAgICAgTk9WT19EUk9QRE9XTl9FTEVNRU5UU1xuICAgIF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZCBkYXRhVGFibGVcIiBbY2xhc3MudGFibGUtZGV0YWlsc109XCJjb25maWcuaGFzRGV0YWlsc1wiIHJvbGU9XCJncmlkXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHIgcm9sZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJyb3ctYWN0aW9uc1wiICpuZ0lmPVwiY29uZmlnLmhhc0RldGFpbHNcIj48L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW25vdm9UaE9yZGVyYWJsZV09XCJjb2x1bW5cIiAob25PcmRlckNoYW5nZSk9XCJvbk9yZGVyQ2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aC1ncm91cFwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjb2x1bW4ubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aC10aXRsZVwiIFtub3ZvVGhTb3J0YWJsZV09XCJjb25maWdcIiBbY29sdW1uXT1cImNvbHVtblwiIChvblNvcnRDaGFuZ2UpPVwib25Tb3J0Q2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7IGNvbHVtbi50aXRsZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1zb3J0LWljb25zXCIgW25nQ2xhc3NdPVwiY29sdW1uLnNvcnQgfHwgJydcIiAqbmdJZj1cImNvbmZpZy5zb3J0aW5nIHx8IGNvbHVtbi5zb3J0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1hcnJvdy1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktYXJyb3ctdXBcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWRyb3Bkb3duIHNpZGU9XCJyaWdodFwiICpuZ0lmPVwiY29sdW1uLmZpbHRlcmluZ1wiIGNsYXNzPVwiY29sdW1uLWZpbHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cImZpbHRlclwiIFtjbGFzcy5maWx0ZXJlZF09XCJjb2x1bW4uZmlsdGVyXCIgKGNsaWNrKT1cImZvY3VzSW5wdXQoY29sdW1uLm5hbWUpXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaXN0ICpuZ0lmPVwiY29sdW1uLm9wdGlvbnM/Lmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0gY2xhc3M9XCJmaWx0ZXItc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5GaWx0ZXJzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cIm5lZ2F0aXZlXCIgaWNvbj1cInRpbWVzXCIgKGNsaWNrKT1cIm9uRmlsdGVyQ2xlYXIoY29sdW1uKVwiPkNsZWFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBbbmdDbGFzc109XCJ7YWN0aXZlOiBjb2x1bW4uZmlsdGVyICYmIGNvbHVtbi5maWx0ZXIubGVuZ3RoICYmIGNvbHVtbi5maWx0ZXIuaW5jbHVkZXMob3B0aW9uKX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29sdW1uLm9wdGlvbnNcIiAoY2xpY2spPVwib25GaWx0ZXJDbGljayhjb2x1bW4sIG9wdGlvbilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJvcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e29wdGlvbn19IDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJjb2x1bW4uZmlsdGVyICYmIGNvbHVtbi5maWx0ZXIubGVuZ3RoICYmIGNvbHVtbi5maWx0ZXIuaW5jbHVkZXMob3B0aW9uKVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlzdCAqbmdJZj1cIiFjb2x1bW4ub3B0aW9ucz8ubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkZpbHRlcnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIGNvbG9yPVwibmVnYXRpdmVcIiBpY29uPVwidGltZXNcIiAoY2xpY2spPVwib25GaWx0ZXJDbGVhcihjb2x1bW4pXCI+Q2xlYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbYXR0ci5pZF09XCJjb2x1bW4ubmFtZSArICctaW5wdXQnXCIgW25vdm9UYWJsZUZpbHRlcl09XCJjb2x1bW5cIiAob25GaWx0ZXJDaGFuZ2UpPVwib25GaWx0ZXJDaGFuZ2UoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwiY29sdW1uLmZpbHRlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbm92by1kcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBuZ0ZvciBsZXQtcm93PVwiJGltcGxpY2l0XCIgW25nRm9yT2ZdPVwicm93cyB8IHNsaWNlOmdldFBhZ2VTdGFydCgpOmdldFBhZ2VFbmQoKVwiPlxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0YWJsZS1yb3dcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwicm93LmlkXCIgKGNsaWNrKT1cInJvd0NsaWNrSGFuZGxlcihyb3cpXCIgW2NsYXNzLmFjdGl2ZV09XCJyb3cuaWQgPT09IGFjdGl2ZUlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyb3ctYWN0aW9uc1wiICpuZ0lmPVwiY29uZmlnLmhhc0RldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJuZXh0XCIgKGNsaWNrKT1cInJvdy5fZXhwYW5kZWQ9IXJvdy5fZXhwYW5kZWRcIiAqbmdJZj1cIiFyb3cuX2V4cGFuZGVkXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwic29ydC1kZXNjXCIgKGNsaWNrKT1cInJvdy5fZXhwYW5kZWQ9IXJvdy5fZXhwYW5kZWRcIiAqbmdJZj1cInJvdy5fZXhwYW5kZWRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNvbHVtbi5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tdGFibGUtY2VsbCBbY29sdW1uXT1cImNvbHVtblwiIFtyb3ddPVwicm93XCI+PC9ub3ZvLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJkZXRhaWxzLXJvd1wiICpuZ0lmPVwiY29uZmlnLmhhc0RldGFpbHNcIiBbaGlkZGVuXT1cIiFyb3cuX2V4cGFuZGVkXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidkZXRhaWxzLXJvdy0nK3Jvdy5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicm93LWFjdGlvbnNcIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIFthdHRyLmNvbHNwYW5dPVwiY29sdW1ucy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm92by1yb3ctZGV0YWlscyBbZGF0YV09XCJyb3dcIiBbcmVuZGVyZXJdPVwiY29uZmlnLmRldGFpbHNSZW5kZXJlclwiPjwvbm92by1yb3ctZGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8dGJvZHkgKm5nSWY9XCJyb3dzLmxlbmd0aDw9MFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImVtcHR5LXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuby1tYXRjaGluZy1yZWNvcmRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLXNlYXJjaC1xdWVzdGlvblwiPjwvaT4gTm8gbWF0Y2hpbmcgcmVjb3JkczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxSb3dzID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlSWQgPSAwO1xuICAgICAgICB0aGlzLm9uUm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMub25UYWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFJvd3MgPSB0aGlzLm9yaWdpbmFsUm93cy5sZW5ndGggPT09IDAgPyB0aGlzLnJvd3MgOiB0aGlzLm9yaWdpbmFsUm93cztcbiAgICB9XG5cbiAgICBnZXRQYWdlU3RhcnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wYWdpbmcgPyAodGhpcy5jb25maWcucGFnaW5nLmN1cnJlbnQgLSAxKSAqIHRoaXMuY29uZmlnLnBhZ2luZy5pdGVtc1BlclBhZ2UgOiAwO1xuICAgIH1cblxuICAgIGdldFBhZ2VFbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wYWdpbmcgJiYgdGhpcy5jb25maWcucGFnaW5nLml0ZW1zUGVyUGFnZSA+IC0xID8gdGhpcy5nZXRQYWdlU3RhcnQoKSArIHRoaXMuY29uZmlnLnBhZ2luZy5pdGVtc1BlclBhZ2UgOiB0aGlzLnJvd3MubGVuZ3RoO1xuICAgIH1cblxuICAgIGZvY3VzSW5wdXQobmFtZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bmFtZX0taW5wdXRgKTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25GaWx0ZXJDbGljayhjb2x1bW4sIGZpbHRlcikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb2x1bW4uZmlsdGVyKSkge1xuICAgICAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXIuaW5jbHVkZXMoZmlsdGVyKSkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBmaWx0ZXJcbiAgICAgICAgICAgICAgICBjb2x1bW4uZmlsdGVyLnNwbGljZShjb2x1bW4uZmlsdGVyLmluZGV4T2YoZmlsdGVyKSwgMSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uLmZpbHRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLmZpbHRlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBBZGQgZmlsdGVyXG4gICAgICAgICAgICAgICAgY29sdW1uLmZpbHRlci5wdXNoKGZpbHRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2x1bW4uZmlsdGVyID0gW2ZpbHRlcl07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkZpbHRlckNoYW5nZSgpO1xuICAgIH1cblxuICAgIG9uRmlsdGVyQ2xlYXIoY29sdW1uKSB7XG4gICAgICAgIGNvbHVtbi5maWx0ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgb25GaWx0ZXJDaGFuZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2wpID0+IGNvbC5maWx0ZXIgJiYgY29sLmZpbHRlci5sZW5ndGgpO1xuXG4gICAgICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbih0aGlzLmNvbmZpZy5maWx0ZXJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEN1c3RvbSBmaWx0ZXIgZnVuY3Rpb24gb24gdGhlIHRhYmxlIGNvbmZpZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLmNvbmZpZy5maWx0ZXJpbmcoZmlsdGVycywgdGhpcy5vcmlnaW5hbFJvd3MpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IHRoaXMub3JpZ2luYWxSb3dzLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBmaWx0ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29sdW1uLmZpbHRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGZpbHRlcnMgYXJlIGFuIGFycmF5IChtdWx0aS1zZWxlY3QpLCBjaGVjayB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkID0gY29sdW1uLmZpbHRlci5pbmNsdWRlcyhpdGVtW2NvbHVtbi5uYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5tYXRjaCAmJiBpc0Z1bmN0aW9uKGNvbHVtbi5tYXRjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEN1c3RvbSBtYXRjaCBmdW5jdGlvbiBvbiB0aGUgY29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkID0gY29sdW1uLm1hdGNoKGl0ZW1bY29sdW1uLm5hbWVdLCBjb2x1bW4uZmlsdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGl0ZW1bY29sdW1uLm5hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmFsdWUgaXMgYW4gYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgaXRlbVtjb2x1bW4ubmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkID0gdmFsdWUubWF0Y2gobmV3IFJlZ0V4cChjb2x1bW4uZmlsdGVyLCAnZ2knKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaGVkKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJhc2ljLCB2YWx1ZSBpcyBqdXN0IGEgc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkID0gSlNPTi5zdHJpbmdpZnkoaXRlbVtjb2x1bW4ubmFtZV0pLm1hdGNoKG5ldyBSZWdFeHAoY29sdW1uLmZpbHRlciwgJ2dpJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hlZCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLm9yaWdpbmFsUm93cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVHJpY2tsZSBkb3duIHRvIGtlZXAgc29ydFxuICAgICAgICAgICAgdGhpcy5vblNvcnRDaGFuZ2UodGhpcy5jdXJyZW50U29ydENvbHVtbik7XG5cbiAgICAgICAgICAgIC8vIElmIHBhZ2luZywgcmVzZXQgcGFnZVxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnBhZ2luZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnBhZ2luZy5jdXJyZW50ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU29ydENoYW5nZShuZXdTb3J0Q29sdW1uKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNvcnRDb2x1bW4gPSBuZXdTb3J0Q29sdW1uO1xuXG4gICAgICAgIGlmIChuZXdTb3J0Q29sdW1uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMubWFwKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5uYW1lICE9PSBuZXdTb3J0Q29sdW1uLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNvbHVtbi5zb3J0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5jb25maWcuc29ydGluZykpIHtcbiAgICAgICAgICAgICAgICAvLyBDdXN0b20gc29ydCBmdW5jdGlvbiBvbiB0aGUgdGFibGUgY29uZmlnXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5jb25maWcuc29ydGluZyhuZXdTb3J0Q29sdW1uLCB0aGlzLnJvd3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3Muc29ydCgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sdW1uTmFtZSA9IG5ld1NvcnRDb2x1bW4ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0ID0gcHJldmlvdXNbY29sdW1uTmFtZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmQgPSBjdXJyZW50W2NvbHVtbk5hbWVdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEN1c3RvbSBjb21wYXJlIGZ1bmN0aW9uIG9uIHRoZSBjb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1NvcnRDb2x1bW4uY29tcGFyZSAmJiBpc0Z1bmN0aW9uKG5ld1NvcnRDb2x1bW4uY29tcGFyZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdTb3J0Q29sdW1uLmNvbXBhcmUobmV3U29ydENvbHVtbi5zb3J0LCBmaXJzdCwgc2Vjb25kKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZyhmaXJzdCkgJiYgaXNTdHJpbmcoc2Vjb25kKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQmFzaWMgc3RyaW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSBmaXJzdC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gc2Vjb25kLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOdW1iZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IGlzTmFOKE51bWJlcihmaXJzdCkpID8gZmlyc3QgOiBOdW1iZXIoZmlyc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gaXNOYU4oTnVtYmVyKHNlY29uZCkpID8gc2Vjb25kIDogTnVtYmVyKHNlY29uZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3QgPiBzZWNvbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdTb3J0Q29sdW1uLnNvcnQgPT09ICdkZXNjJyA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3QgPCBzZWNvbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdTb3J0Q29sdW1uLnNvcnQgPT09ICdhc2MnID8gLTEgOiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZSB0YWJsZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgdGhpcy5maXJlVGFibGVDaGFuZ2VFdmVudCgpO1xuXG4gICAgICAgIC8vIElmIHBhZ2luZywgcmVzZXQgcGFnZVxuICAgICAgICBpZiAodGhpcy5jb25maWcucGFnaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5wYWdpbmcuY3VycmVudCA9IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlVGFibGVDaGFuZ2VFdmVudCgpIHtcbiAgICAgICAgLy8gQ29uc3RydWN0IGEgdGFibGUgY2hhbmdlIG9iamVjdFxuICAgICAgICBjb25zdCBvblRhYmxlQ2hhbmdlID0ge307XG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2wpID0+IGNvbC5maWx0ZXIgJiYgY29sLmZpbHRlci5sZW5ndGgpO1xuXG4gICAgICAgIG9uVGFibGVDaGFuZ2UuZmlsdGVyID0gZmlsdGVycy5sZW5ndGggPyBmaWx0ZXJzIDogZmFsc2U7XG4gICAgICAgIG9uVGFibGVDaGFuZ2Uuc29ydCA9IHRoaXMuY3VycmVudFNvcnRDb2x1bW4gPyB0aGlzLmN1cnJlbnRTb3J0Q29sdW1uIDogZmFsc2U7XG4gICAgICAgIG9uVGFibGVDaGFuZ2Uucm93cyA9IHRoaXMucm93cztcblxuICAgICAgICAvLyBFbWl0IGV2ZW50XG4gICAgICAgIHRoaXMub25UYWJsZUNoYW5nZS5lbWl0KG9uVGFibGVDaGFuZ2UpO1xuICAgIH1cblxuICAgIGZpbmRDb2x1bW5JbmRleCh2YWx1ZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1uc1tpXS5uYW1lID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIG9uT3JkZXJDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgY29uc3Qgb2xkSW5kZXggPSB0aGlzLmZpbmRDb2x1bW5JbmRleChldmVudC5maXJzdC5uYW1lKTtcbiAgICAgICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmZpbmRDb2x1bW5JbmRleChldmVudC5zZWNvbmQubmFtZSk7XG4gICAgICAgIHRoaXMuY29sdW1ucy5zcGxpY2UobmV3SW5kZXgsIDAsIHRoaXMuY29sdW1ucy5zcGxpY2Uob2xkSW5kZXgsIDEpWzBdKTtcbiAgICAgICAgdGhpcy5vblNvcnRDaGFuZ2UodGhpcy5jdXJyZW50U29ydENvbHVtbik7XG4gICAgfVxuXG4gICAgcm93Q2xpY2tIYW5kbGVyKHJvdykge1xuICAgICAgICBpZiAodGhpcy5jb25maWcucm93U2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUlkID0gcm93LmlkIHx8IDA7XG4gICAgICAgICAgICB0aGlzLm9uUm93Q2xpY2suZW1pdChyb3cpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgTk9WT19UQUJMRV9FTEVNRU5UUyA9IFtOb3ZvVGFibGVdO1xuIl19

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Pagination = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(6);
	
	var _select = __webpack_require__(225);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Pagination = exports.Pagination = (_dec = (0, _core.Component)({
	    selector: 'novo-pagination',
	    inputs: ['page', 'totalItems', 'itemsPerPage'],
	    outputs: ['onPageChange'],
	    directives: [_common.CORE_DIRECTIVES, _select.NOVO_SELECT_ELEMENTS],
	    template: '\n        <h5 class="rows">Rows Per Page: </h5>\n        <bh-select [items]="pageOptions" placeholder="Select..." [value]="itemsPerPage" (valueChange)="onPageSizeChanged($event)" data-automation-id="pager-select"></bh-select>\n        <spacer></spacer>\n        <ul class="pager" data-automation-id="pager">\n            <li class="page" (click)="selectPage(page-1)"><i class="bhi-previous" [hidden]="noPrevious()" data-automation-id="pager-previous"></i></li>\n            <li class="page" [ngClass]="{active: p.number==page}" *ngFor="let p of pages" (click)="selectPage(p.number)">{{p.text}}</li>\n            <li class="page" (click)="selectPage(page+1)"><i class="bhi-next" [hidden]="noNext()" data-automation-id="pager-next"></i></li>\n        </ul>\n  '
	}), _dec(_class = function () {
	    function Pagination() {
	        _classCallCheck(this, Pagination);
	
	        this.maxPagesDisplayed = 5;
	        this.itemsPerPage = 10;
	        this.pageOptions = ['10', '50', '500'];
	        this.onPageChange = new _core.EventEmitter();
	    }
	
	    _createClass(Pagination, [{
	        key: 'ngOnChanges',
	        value: function ngOnChanges() {
	            this.page = this.page || 1;
	            this.totalPages = this.calculateTotalPages();
	            this.pages = this.getPages(this.page, this.totalPages);
	        }
	    }, {
	        key: 'onPageSizeChanged',
	        value: function onPageSizeChanged(event) {
	            this.page = 1;
	            this.itemsPerPage = event.selected;
	            this.totalPages = this.calculateTotalPages();
	            this.pages = this.getPages(this.page, this.totalPages);
	            this.onPageChange.emit({
	                page: this.page,
	                itemsPerPage: this.itemsPerPage
	            });
	        }
	    }, {
	        key: 'selectPage',
	        value: function selectPage(page, event) {
	            if (event) {
	                event.preventDefault();
	            }
	
	            this.page = page;
	            this.pages = this.getPages(this.page, this.totalPages);
	            this.onPageChange.emit({
	                page: this.page,
	                itemsPerPage: this.itemsPerPage
	            });
	        }
	    }, {
	        key: 'noPrevious',
	        value: function noPrevious() {
	            return this.page === 1;
	        }
	    }, {
	        key: 'noNext',
	        value: function noNext() {
	            return this.page === this.totalPages;
	        }
	
	        // Create page object used in template
	
	    }, {
	        key: 'makePage',
	        value: function makePage(number, text, isActive) {
	            return {
	                number: number,
	                text: text,
	                active: isActive
	            };
	        }
	    }, {
	        key: 'getPages',
	        value: function getPages(currentPage, totalPages) {
	            var pages = [];
	
	            // Default page limits
	            var startPage = 1;
	            var endPage = totalPages;
	            var isMaxSized = this.maxPagesDisplayed < totalPages;
	
	            // recompute if maxPagesDisplayed
	            if (isMaxSized) {
	                // Current page is displayed in the middle of the visible ones
	                startPage = Math.max(currentPage - Math.floor(this.maxPagesDisplayed / 2), 1);
	                endPage = startPage + this.maxPagesDisplayed - 1;
	
	                // Adjust if limit is exceeded
	                if (endPage > totalPages) {
	                    endPage = totalPages;
	                    startPage = endPage - this.maxPagesDisplayed + 1;
	                }
	            }
	
	            // Add page number links
	            for (var number = startPage; number <= endPage; number++) {
	                var page = this.makePage(number, number.toString(), number === currentPage);
	                pages.push(page);
	            }
	
	            return pages;
	        }
	    }, {
	        key: 'calculateTotalPages',
	        value: function calculateTotalPages() {
	            var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
	            return Math.max(totalPages || 0, 1);
	        }
	    }]);
	
	    return Pagination;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90YWJsZS9leHRyYXMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7SUF5QmEsVSxXQUFBLFUsV0F2QloscUJBQVU7QUFDUCxjQUFVLGlCQURIO0FBRVAsWUFBUSxDQUNKLE1BREksRUFFSixZQUZJLEVBR0osY0FISSxDQUZEO0FBT1AsYUFBUyxDQUFDLGNBQUQsQ0FQRjtBQVFQLGdCQUFZLHVEQVJMO0FBWVA7QUFaTyxDQUFWLEM7QUF3QkcsMEJBQWM7QUFBQTs7QUFDVixhQUFLLGlCQUFMLEdBQXlCLENBQXpCO0FBQ0EsYUFBSyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsYUFBSyxXQUFMLEdBQW1CLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxLQUFiLENBQW5CO0FBQ0EsYUFBSyxZQUFMLEdBQW9CLHdCQUFwQjtBQUNIOzs7O3NDQUVhO0FBQ1YsaUJBQUssSUFBTCxHQUFZLEtBQUssSUFBTCxJQUFhLENBQXpCO0FBQ0EsaUJBQUssVUFBTCxHQUFrQixLQUFLLG1CQUFMLEVBQWxCO0FBQ0EsaUJBQUssS0FBTCxHQUFhLEtBQUssUUFBTCxDQUFjLEtBQUssSUFBbkIsRUFBeUIsS0FBSyxVQUE5QixDQUFiO0FBQ0g7OzswQ0FFaUIsSyxFQUFPO0FBQ3JCLGlCQUFLLElBQUwsR0FBWSxDQUFaO0FBQ0EsaUJBQUssWUFBTCxHQUFvQixNQUFNLFFBQTFCO0FBQ0EsaUJBQUssVUFBTCxHQUFrQixLQUFLLG1CQUFMLEVBQWxCO0FBQ0EsaUJBQUssS0FBTCxHQUFhLEtBQUssUUFBTCxDQUFjLEtBQUssSUFBbkIsRUFBeUIsS0FBSyxVQUE5QixDQUFiO0FBQ0EsaUJBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QjtBQUNuQixzQkFBTSxLQUFLLElBRFE7QUFFbkIsOEJBQWMsS0FBSztBQUZBLGFBQXZCO0FBSUg7OzttQ0FFVSxJLEVBQU0sSyxFQUFPO0FBQ3BCLGdCQUFJLEtBQUosRUFBVztBQUNQLHNCQUFNLGNBQU47QUFDSDs7QUFFRCxpQkFBSyxJQUFMLEdBQVksSUFBWjtBQUNBLGlCQUFLLEtBQUwsR0FBYSxLQUFLLFFBQUwsQ0FBYyxLQUFLLElBQW5CLEVBQXlCLEtBQUssVUFBOUIsQ0FBYjtBQUNBLGlCQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUI7QUFDbkIsc0JBQU0sS0FBSyxJQURRO0FBRW5CLDhCQUFjLEtBQUs7QUFGQSxhQUF2QjtBQUlIOzs7cUNBRVk7QUFDVCxtQkFBTyxLQUFLLElBQUwsS0FBYyxDQUFyQjtBQUNIOzs7aUNBRVE7QUFDTCxtQkFBTyxLQUFLLElBQUwsS0FBYyxLQUFLLFVBQTFCO0FBQ0g7Ozs7OztpQ0FHUSxNLEVBQVEsSSxFQUFNLFEsRUFBVTtBQUM3QixtQkFBTztBQUNILHdCQUFRLE1BREw7QUFFSCxzQkFBTSxJQUZIO0FBR0gsd0JBQVE7QUFITCxhQUFQO0FBS0g7OztpQ0FFUSxXLEVBQWEsVSxFQUFZO0FBQzlCLGdCQUFJLFFBQVEsRUFBWjs7O0FBR0EsZ0JBQUksWUFBWSxDQUFoQjtBQUNBLGdCQUFJLFVBQVUsVUFBZDtBQUNBLGdCQUFNLGFBQWEsS0FBSyxpQkFBTCxHQUF5QixVQUE1Qzs7O0FBR0EsZ0JBQUksVUFBSixFQUFnQjs7QUFFWiw0QkFBWSxLQUFLLEdBQUwsQ0FBUyxjQUFjLEtBQUssS0FBTCxDQUFXLEtBQUssaUJBQUwsR0FBeUIsQ0FBcEMsQ0FBdkIsRUFBK0QsQ0FBL0QsQ0FBWjtBQUNBLDBCQUFVLFlBQVksS0FBSyxpQkFBakIsR0FBcUMsQ0FBL0M7OztBQUdBLG9CQUFJLFVBQVUsVUFBZCxFQUEwQjtBQUN0Qiw4QkFBVSxVQUFWO0FBQ0EsZ0NBQVksVUFBVSxLQUFLLGlCQUFmLEdBQW1DLENBQS9DO0FBQ0g7QUFDSjs7O0FBR0QsaUJBQUssSUFBSSxTQUFTLFNBQWxCLEVBQTZCLFVBQVUsT0FBdkMsRUFBZ0QsUUFBaEQsRUFBMEQ7QUFDdEQsb0JBQU0sT0FBTyxLQUFLLFFBQUwsQ0FBYyxNQUFkLEVBQXNCLE9BQU8sUUFBUCxFQUF0QixFQUF5QyxXQUFXLFdBQXBELENBQWI7QUFDQSxzQkFBTSxJQUFOLENBQVcsSUFBWDtBQUNIOztBQUVELG1CQUFPLEtBQVA7QUFDSDs7OzhDQUVxQjtBQUNsQixnQkFBTSxhQUFhLEtBQUssWUFBTCxHQUFvQixDQUFwQixHQUF3QixDQUF4QixHQUE0QixLQUFLLElBQUwsQ0FBVSxLQUFLLFVBQUwsR0FBa0IsS0FBSyxZQUFqQyxDQUEvQztBQUNBLG1CQUFPLEtBQUssR0FBTCxDQUFTLGNBQWMsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBUDtBQUNIIiwiZmlsZSI6IlBhZ2luYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FzaWJpbGlhL0RvY3VtZW50cy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOT1ZPX1NFTEVDVF9FTEVNRU5UUyB9IGZyb20gJy4uLy4uLy4uL3NlbGVjdCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm92by1wYWdpbmF0aW9uJyxcbiAgICBpbnB1dHM6IFtcbiAgICAgICAgJ3BhZ2UnLFxuICAgICAgICAndG90YWxJdGVtcycsXG4gICAgICAgICdpdGVtc1BlclBhZ2UnXG4gICAgXSxcbiAgICBvdXRwdXRzOiBbJ29uUGFnZUNoYW5nZSddLFxuICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgQ09SRV9ESVJFQ1RJVkVTLFxuICAgICAgICBOT1ZPX1NFTEVDVF9FTEVNRU5UU1xuICAgIF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGg1IGNsYXNzPVwicm93c1wiPlJvd3MgUGVyIFBhZ2U6IDwvaDU+XG4gICAgICAgIDxiaC1zZWxlY3QgW2l0ZW1zXT1cInBhZ2VPcHRpb25zXCIgcGxhY2Vob2xkZXI9XCJTZWxlY3QuLi5cIiBbdmFsdWVdPVwiaXRlbXNQZXJQYWdlXCIgKHZhbHVlQ2hhbmdlKT1cIm9uUGFnZVNpemVDaGFuZ2VkKCRldmVudClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlci1zZWxlY3RcIj48L2JoLXNlbGVjdD5cbiAgICAgICAgPHNwYWNlcj48L3NwYWNlcj5cbiAgICAgICAgPHVsIGNsYXNzPVwicGFnZXJcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlclwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZVwiIChjbGljayk9XCJzZWxlY3RQYWdlKHBhZ2UtMSlcIj48aSBjbGFzcz1cImJoaS1wcmV2aW91c1wiIFtoaWRkZW5dPVwibm9QcmV2aW91cygpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXItcHJldmlvdXNcIj48L2k+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VcIiBbbmdDbGFzc109XCJ7YWN0aXZlOiBwLm51bWJlcj09cGFnZX1cIiAqbmdGb3I9XCJsZXQgcCBvZiBwYWdlc1wiIChjbGljayk9XCJzZWxlY3RQYWdlKHAubnVtYmVyKVwiPnt7cC50ZXh0fX08L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZVwiIChjbGljayk9XCJzZWxlY3RQYWdlKHBhZ2UrMSlcIj48aSBjbGFzcz1cImJoaS1uZXh0XCIgW2hpZGRlbl09XCJub05leHQoKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInBhZ2VyLW5leHRcIj48L2k+PC9saT5cbiAgICAgICAgPC91bD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tYXhQYWdlc0Rpc3BsYXllZCA9IDU7XG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gMTA7XG4gICAgICAgIHRoaXMucGFnZU9wdGlvbnMgPSBbJzEwJywgJzUwJywgJzUwMCddO1xuICAgICAgICB0aGlzLm9uUGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlIHx8IDE7XG4gICAgICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICAgICAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgfVxuXG4gICAgb25QYWdlU2l6ZUNoYW5nZWQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gMTtcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBldmVudC5zZWxlY3RlZDtcbiAgICAgICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gICAgICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgICAgICAgdGhpcy5vblBhZ2VDaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICAgICAgICBpdGVtc1BlclBhZ2U6IHRoaXMuaXRlbXNQZXJQYWdlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGVjdFBhZ2UocGFnZSwgZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgICAgICB0aGlzLm9uUGFnZUNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgICAgICAgIGl0ZW1zUGVyUGFnZTogdGhpcy5pdGVtc1BlclBhZ2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm9QcmV2aW91cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gMTtcbiAgICB9XG5cbiAgICBub05leHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IHRoaXMudG90YWxQYWdlcztcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgcGFnZSBvYmplY3QgdXNlZCBpbiB0ZW1wbGF0ZVxuICAgIG1ha2VQYWdlKG51bWJlciwgdGV4dCwgaXNBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG51bWJlcjogbnVtYmVyLFxuICAgICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgICAgIGFjdGl2ZTogaXNBY3RpdmVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRQYWdlcyhjdXJyZW50UGFnZSwgdG90YWxQYWdlcykge1xuICAgICAgICBsZXQgcGFnZXMgPSBbXTtcblxuICAgICAgICAvLyBEZWZhdWx0IHBhZ2UgbGltaXRzXG4gICAgICAgIGxldCBzdGFydFBhZ2UgPSAxO1xuICAgICAgICBsZXQgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgIGNvbnN0IGlzTWF4U2l6ZWQgPSB0aGlzLm1heFBhZ2VzRGlzcGxheWVkIDwgdG90YWxQYWdlcztcblxuICAgICAgICAvLyByZWNvbXB1dGUgaWYgbWF4UGFnZXNEaXNwbGF5ZWRcbiAgICAgICAgaWYgKGlzTWF4U2l6ZWQpIHtcbiAgICAgICAgICAgIC8vIEN1cnJlbnQgcGFnZSBpcyBkaXNwbGF5ZWQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlzaWJsZSBvbmVzXG4gICAgICAgICAgICBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIE1hdGguZmxvb3IodGhpcy5tYXhQYWdlc0Rpc3BsYXllZCAvIDIpLCAxKTtcbiAgICAgICAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyB0aGlzLm1heFBhZ2VzRGlzcGxheWVkIC0gMTtcblxuICAgICAgICAgICAgLy8gQWRqdXN0IGlmIGxpbWl0IGlzIGV4Y2VlZGVkXG4gICAgICAgICAgICBpZiAoZW5kUGFnZSA+IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgICAgICAgICBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICAgICAgICAgICAgICBzdGFydFBhZ2UgPSBlbmRQYWdlIC0gdGhpcy5tYXhQYWdlc0Rpc3BsYXllZCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgcGFnZSBudW1iZXIgbGlua3NcbiAgICAgICAgZm9yIChsZXQgbnVtYmVyID0gc3RhcnRQYWdlOyBudW1iZXIgPD0gZW5kUGFnZTsgbnVtYmVyKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLm1ha2VQYWdlKG51bWJlciwgbnVtYmVyLnRvU3RyaW5nKCksIG51bWJlciA9PT0gY3VycmVudFBhZ2UpO1xuICAgICAgICAgICAgcGFnZXMucHVzaChwYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlcztcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVUb3RhbFBhZ2VzKCkge1xuICAgICAgICBjb25zdCB0b3RhbFBhZ2VzID0gdGhpcy5pdGVtc1BlclBhZ2UgPCAxID8gMSA6IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCh0b3RhbFBhZ2VzIHx8IDAsIDEpO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RowDetails = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _BaseRenderer = __webpack_require__(130);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RowDetails = exports.RowDetails = (_dec = (0, _core.Component)({
	    selector: 'novo-row-details',
	    inputs: ['data', 'renderer'],
	    template: '<span>{{value}}</span>'
	}), _dec(_class = function () {
	    function RowDetails(element, loader, view) {
	        _classCallCheck(this, RowDetails);
	
	        this.element = element;
	        this.loader = loader;
	        this.view = view;
	        this.value = '';
	    }
	
	    _createClass(RowDetails, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            var _this = this;
	
	            if (this.renderer) {
	                if (this.renderer.prototype instanceof _BaseRenderer.BaseRenderer) {
	                    this.loader.loadNextToLocation(this.renderer, this.view).then(function (row) {
	                        row.instance.data = _this.data;
	                    });
	                } else {
	                    this.value = this.renderer(this.data);
	                }
	            } else {
	                // this.value = this.row[this.column.name];
	            }
	        }
	    }]);
	
	    return RowDetails;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_core.ElementRef, _core.DynamicComponentLoader, _core.ViewContainerRef], RowDetails);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90YWJsZS9leHRyYXMvcm93LWRldGFpbHMvUm93RGV0YWlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBOzs7O0lBVWEsVSxXQUFBLFUsV0FSWixxQkFBVTtBQUNQLGNBQVUsa0JBREg7QUFFUCxZQUFRLENBQ0osTUFESSxFQUVKLFVBRkksQ0FGRDtBQU1QLGNBQVU7QUFOSCxDQUFWLEM7QUFTRyx3QkFBWSxPQUFaLEVBQWdDLE1BQWhDLEVBQStELElBQS9ELEVBQXNGO0FBQUE7O0FBQ2xGLGFBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxhQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsYUFBSyxJQUFMLEdBQVksSUFBWjtBQUNBLGFBQUssS0FBTCxHQUFhLEVBQWI7QUFDSDs7OzttQ0FFVTtBQUFBOztBQUNQLGdCQUFJLEtBQUssUUFBVCxFQUFtQjtBQUNmLG9CQUFJLEtBQUssUUFBTCxDQUFjLFNBQWQsc0NBQUosRUFBcUQ7QUFDakQseUJBQUssTUFBTCxDQUFZLGtCQUFaLENBQStCLEtBQUssUUFBcEMsRUFBOEMsS0FBSyxJQUFuRCxFQUF5RCxJQUF6RCxDQUE4RCxlQUFPO0FBQ2pFLDRCQUFJLFFBQUosQ0FBYSxJQUFiLEdBQW9CLE1BQUssSUFBekI7QUFDSCxxQkFGRDtBQUdILGlCQUpELE1BSU87QUFDSCx5QkFBSyxLQUFMLEdBQWEsS0FBSyxRQUFMLENBQWMsS0FBSyxJQUFuQixDQUFiO0FBQ0g7QUFDSixhQVJELE1BUU87O0FBRU47QUFDSjs7Ozs7c0hBcEJRLFUiLCJmaWxlIjoiUm93RGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIER5bmFtaWNDb21wb25lbnRMb2FkZXIsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmFzZVJlbmRlcmVyIH0gZnJvbSAnLi8uLi9iYXNlLXJlbmRlcmVyL0Jhc2VSZW5kZXJlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm92by1yb3ctZGV0YWlscycsXG4gICAgaW5wdXRzOiBbXG4gICAgICAgICdkYXRhJyxcbiAgICAgICAgJ3JlbmRlcmVyJ1xuICAgIF0sXG4gICAgdGVtcGxhdGU6ICc8c3Bhbj57e3ZhbHVlfX08L3NwYW4+J1xufSlcbmV4cG9ydCBjbGFzcyBSb3dEZXRhaWxzIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OkVsZW1lbnRSZWYsIGxvYWRlcjpEeW5hbWljQ29tcG9uZW50TG9hZGVyLCB2aWV3OlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBsb2FkZXI7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlcmVyLnByb3RvdHlwZSBpbnN0YW5jZW9mIEJhc2VSZW5kZXJlcikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmxvYWROZXh0VG9Mb2NhdGlvbih0aGlzLnJlbmRlcmVyLCB0aGlzLnZpZXcpLnRoZW4ocm93ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm93Lmluc3RhbmNlLmRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnJlbmRlcmVyKHRoaXMuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0aGlzLnZhbHVlID0gdGhpcy5yb3dbdGhpcy5jb2x1bW4ubmFtZV07XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TableCell = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _BaseRenderer = __webpack_require__(130);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TableCell = exports.TableCell = (_dec = (0, _core.Component)({
	    selector: 'novo-table-cell',
	    inputs: ['column', 'row'],
	    template: '\n        <span *ngIf="!column.type || column.type === \'text\'">{{ value }}</span>\n        <a (click)="onClick($event);" *ngIf="column.type === \'link\'">{{ value }}</a>\n    '
	}), _dec(_class = function () {
	    function TableCell(element, loader, view) {
	        _classCallCheck(this, TableCell);
	
	        this.element = element;
	        this.loader = loader;
	        this.view = view;
	        this.value = '';
	    }
	
	    _createClass(TableCell, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            var _this = this;
	
	            if (!this.column.renderer || !(this.column.renderer.prototype instanceof _BaseRenderer.BaseRenderer)) {
	                this.value = this.row[this.column.name];
	            } else if (this.column.renderer && this.column.renderer.prototype instanceof _BaseRenderer.BaseRenderer) {
	                this.column.type = 'customrenderer';
	                this.loader.loadNextToLocation(this.column.renderer, this.view).then(function (cell) {
	                    cell.instance.meta = _this.column;
	                    cell.instance.data = _this.row;
	                    cell.instance.value = _this.row[_this.column.name];
	                });
	            }
	        }
	    }, {
	        key: 'onClick',
	        value: function onClick(event) {
	            if (event) {
	                event.preventDefault();
	                event.stopPropagation();
	            }
	            if (this.column.onClick) {
	                this.column.onClick(this.row);
	            }
	        }
	    }]);
	
	    return TableCell;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_core.ElementRef, _core.DynamicComponentLoader, _core.ViewContainerRef], TableCell);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90YWJsZS9leHRyYXMvdGFibGUtY2VsbC9UYWJsZUNlbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFPQTs7OztJQWFhLFMsV0FBQSxTLFdBWFoscUJBQVU7QUFDUCxjQUFVLGlCQURIO0FBRVAsWUFBUSxDQUNKLFFBREksRUFFSixLQUZJLENBRkQ7QUFNUDtBQU5PLENBQVYsQztBQVlHLHVCQUFZLE9BQVosRUFBZ0MsTUFBaEMsRUFBK0QsSUFBL0QsRUFBc0Y7QUFBQTs7QUFDbEYsYUFBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLGFBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxhQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsYUFBSyxLQUFMLEdBQWEsRUFBYjtBQUNIOzs7O21DQUVVO0FBQUE7O0FBQ1AsZ0JBQUksQ0FBQyxLQUFLLE1BQUwsQ0FBWSxRQUFiLElBQXlCLEVBQUUsS0FBSyxNQUFMLENBQVksUUFBWixDQUFxQixTQUFyQixzQ0FBRixDQUE3QixFQUF3RjtBQUNwRixxQkFBSyxLQUFMLEdBQWEsS0FBSyxHQUFMLENBQVMsS0FBSyxNQUFMLENBQVksSUFBckIsQ0FBYjtBQUNILGFBRkQsTUFFTyxJQUFJLEtBQUssTUFBTCxDQUFZLFFBQVosSUFBd0IsS0FBSyxNQUFMLENBQVksUUFBWixDQUFxQixTQUFyQixzQ0FBNUIsRUFBb0Y7QUFDdkYscUJBQUssTUFBTCxDQUFZLElBQVosR0FBbUIsZ0JBQW5CO0FBQ0EscUJBQUssTUFBTCxDQUFZLGtCQUFaLENBQStCLEtBQUssTUFBTCxDQUFZLFFBQTNDLEVBQXFELEtBQUssSUFBMUQsRUFBZ0UsSUFBaEUsQ0FBcUUsZ0JBQVE7QUFDekUseUJBQUssUUFBTCxDQUFjLElBQWQsR0FBcUIsTUFBSyxNQUExQjtBQUNBLHlCQUFLLFFBQUwsQ0FBYyxJQUFkLEdBQXFCLE1BQUssR0FBMUI7QUFDQSx5QkFBSyxRQUFMLENBQWMsS0FBZCxHQUFzQixNQUFLLEdBQUwsQ0FBUyxNQUFLLE1BQUwsQ0FBWSxJQUFyQixDQUF0QjtBQUNILGlCQUpEO0FBS0g7QUFDSjs7O2dDQUVPLEssRUFBTztBQUNYLGdCQUFJLEtBQUosRUFBVztBQUNQLHNCQUFNLGNBQU47QUFDQSxzQkFBTSxlQUFOO0FBQ0g7QUFDRCxnQkFBSSxLQUFLLE1BQUwsQ0FBWSxPQUFoQixFQUF5QjtBQUNyQixxQkFBSyxNQUFMLENBQVksT0FBWixDQUFvQixLQUFLLEdBQXpCO0FBQ0g7QUFDSjs7Ozs7c0hBN0JRLFMiLCJmaWxlIjoiVGFibGVDZWxsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hc2liaWxpYS9Eb2N1bWVudHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRHluYW1pY0NvbXBvbmVudExvYWRlcixcbiAgICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlUmVuZGVyZXIgfSBmcm9tICcuLy4uL2Jhc2UtcmVuZGVyZXIvQmFzZVJlbmRlcmVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdub3ZvLXRhYmxlLWNlbGwnLFxuICAgIGlucHV0czogW1xuICAgICAgICAnY29sdW1uJyxcbiAgICAgICAgJ3JvdydcbiAgICBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbHVtbi50eXBlIHx8IGNvbHVtbi50eXBlID09PSAndGV4dCdcIj57eyB2YWx1ZSB9fTwvc3Bhbj5cbiAgICAgICAgPGEgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KTtcIiAqbmdJZj1cImNvbHVtbi50eXBlID09PSAnbGluaydcIj57eyB2YWx1ZSB9fTwvYT5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ2VsbCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDpFbGVtZW50UmVmLCBsb2FkZXI6RHluYW1pY0NvbXBvbmVudExvYWRlciwgdmlldzpWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubG9hZGVyID0gbG9hZGVyO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb2x1bW4ucmVuZGVyZXIgfHwgISh0aGlzLmNvbHVtbi5yZW5kZXJlci5wcm90b3R5cGUgaW5zdGFuY2VvZiBCYXNlUmVuZGVyZXIpKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5yb3dbdGhpcy5jb2x1bW4ubmFtZV07XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb2x1bW4ucmVuZGVyZXIgJiYgdGhpcy5jb2x1bW4ucmVuZGVyZXIucHJvdG90eXBlIGluc3RhbmNlb2YgQmFzZVJlbmRlcmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbi50eXBlID0gJ2N1c3RvbXJlbmRlcmVyJztcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmxvYWROZXh0VG9Mb2NhdGlvbih0aGlzLmNvbHVtbi5yZW5kZXJlciwgdGhpcy52aWV3KS50aGVuKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGNlbGwuaW5zdGFuY2UubWV0YSA9IHRoaXMuY29sdW1uO1xuICAgICAgICAgICAgICAgIGNlbGwuaW5zdGFuY2UuZGF0YSA9IHRoaXMucm93O1xuICAgICAgICAgICAgICAgIGNlbGwuaW5zdGFuY2UudmFsdWUgPSB0aGlzLnJvd1t0aGlzLmNvbHVtbi5uYW1lXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGljayhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb2x1bW4ub25DbGljaykge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW4ub25DbGljayh0aGlzLnJvdyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TableFilter = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TableFilter = exports.TableFilter = (_dec = (0, _core.Directive)({
	    selector: '[novoTableFilter]',
	    inputs: ['config: novoTableFilter'],
	    outputs: ['onFilterChange'],
	    host: {
	        '(input)': 'onChangeFilter($event)',
	        '(click)': 'onClick($event)'
	    }
	}), _dec(_class = function () {
	    function TableFilter(element, renderer) {
	        _classCallCheck(this, TableFilter);
	
	        this.element = element;
	        this.renderer = renderer;
	        this.onFilterChange = new _core.EventEmitter();
	    }
	
	    _createClass(TableFilter, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.ngOnChanges();
	        }
	    }, {
	        key: 'ngOnChanges',
	        value: function ngOnChanges() {
	            this.renderer.setElementProperty(this.element, 'value', this.config.filter);
	        }
	    }, {
	        key: 'onChangeFilter',
	        value: function onChangeFilter(event) {
	            var _this = this;
	
	            clearTimeout(this.filterThrottle);
	            this.filterThrottle = setTimeout(function () {
	                _this.config.filter = event.target.value;
	                _this.onFilterChange.emit({ filtering: _this.config });
	            }, 300);
	        }
	    }, {
	        key: 'onClick',
	        value: function onClick(event) {
	            if (event) {
	                event.preventDefault();
	                event.stopPropagation();
	            }
	        }
	    }]);
	
	    return TableFilter;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_core.ElementRef, _core.Renderer], TableFilter);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90YWJsZS9leHRyYXMvdGFibGUtZmlsdGVyL1RhYmxlRmlsdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7SUFXYSxXLFdBQUEsVyxXQVRaLHFCQUFVO0FBQ1AsY0FBVSxtQkFESDtBQUVQLFlBQVEsQ0FBQyx5QkFBRCxDQUZEO0FBR1AsYUFBUyxDQUFDLGdCQUFELENBSEY7QUFJUCxVQUFNO0FBQ0YsbUJBQVcsd0JBRFQ7QUFFRixtQkFBVztBQUZUO0FBSkMsQ0FBVixDO0FBVUcseUJBQVksT0FBWixFQUFnQyxRQUFoQyxFQUFtRDtBQUFBOztBQUMvQyxhQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsYUFBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EsYUFBSyxjQUFMLEdBQXNCLHdCQUF0QjtBQUNIOzs7O21DQUVVO0FBQ1AsaUJBQUssV0FBTDtBQUNIOzs7c0NBRWE7QUFDVixpQkFBSyxRQUFMLENBQWMsa0JBQWQsQ0FBaUMsS0FBSyxPQUF0QyxFQUErQyxPQUEvQyxFQUF3RCxLQUFLLE1BQUwsQ0FBWSxNQUFwRTtBQUNIOzs7dUNBRWMsSyxFQUFPO0FBQUE7O0FBQ2xCLHlCQUFhLEtBQUssY0FBbEI7QUFDQSxpQkFBSyxjQUFMLEdBQXNCLFdBQVcsWUFBTTtBQUNuQyxzQkFBSyxNQUFMLENBQVksTUFBWixHQUFxQixNQUFNLE1BQU4sQ0FBYSxLQUFsQztBQUNBLHNCQUFLLGNBQUwsQ0FBb0IsSUFBcEIsQ0FBeUIsRUFBRSxXQUFXLE1BQUssTUFBbEIsRUFBekI7QUFDSCxhQUhxQixFQUduQixHQUhtQixDQUF0QjtBQUlIOzs7Z0NBRU8sSyxFQUFPO0FBQ1gsZ0JBQUksS0FBSixFQUFXO0FBQ1Asc0JBQU0sY0FBTjtBQUNBLHNCQUFNLGVBQU47QUFDSDtBQUNKOzs7OztnRkE1QlEsVyIsImZpbGUiOiJUYWJsZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbm92b1RhYmxlRmlsdGVyXScsXG4gICAgaW5wdXRzOiBbJ2NvbmZpZzogbm92b1RhYmxlRmlsdGVyJ10sXG4gICAgb3V0cHV0czogWydvbkZpbHRlckNoYW5nZSddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJyhpbnB1dCknOiAnb25DaGFuZ2VGaWx0ZXIoJGV2ZW50KScsXG4gICAgICAgICcoY2xpY2spJzogJ29uQ2xpY2soJGV2ZW50KSdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OkVsZW1lbnRSZWYsIHJlbmRlcmVyOlJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5vbkZpbHRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsICd2YWx1ZScsIHRoaXMuY29uZmlnLmZpbHRlcik7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VGaWx0ZXIoZXZlbnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmlsdGVyVGhyb3R0bGUpO1xuICAgICAgICB0aGlzLmZpbHRlclRocm90dGxlID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5maWx0ZXIgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlLmVtaXQoeyBmaWx0ZXJpbmc6IHRoaXMuY29uZmlnIH0pO1xuICAgICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ThOrderable = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ThOrderable = exports.ThOrderable = (_dec = (0, _core.Directive)({
	    selector: '[novoThOrderable]',
	    inputs: ['column: novoThOrderable'],
	    outputs: ['onOrderChange'],
	    host: {
	        '(dragstart)': 'onDragStart($event)',
	        '(dragover)': 'onDragOver($event)',
	        '(dragenter)': 'onDragEnter($event)',
	        '(dragleave)': 'onDragLeave($event)',
	        '(dragend)': 'onDragEnd($event)',
	        '(drop)': 'onDrop($event)'
	    }
	}), _dec(_class = function () {
	    function ThOrderable(element) {
	        _classCallCheck(this, ThOrderable);
	
	        this.element = element;
	        this.column = null;
	        this.onOrderChange = new _core.EventEmitter();
	    }
	
	    _createClass(ThOrderable, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            if (this.column.ordering) {
	                this.element.nativeElement.setAttribute('draggable', true);
	                this.table = this.findTable(this.element.nativeElement);
	            }
	        }
	    }, {
	        key: 'onDragStart',
	        value: function onDragStart(event) {
	            if (this.column.ordering) {
	                this.element.nativeElement.classList.add('dragging');
	                event.dataTransfer.effectAllowed = 'move';
	                event.dataTransfer.setData('text/plain', JSON.stringify(this.column));
	
	                this.clone = this.table.cloneNode(true);
	                this.clone.style.position = 'absolute';
	                this.clone.style.left = '100%';
	                this.clone.style.width = '150px';
	                this.deleteColumns(this.clone);
	                document.body.appendChild(this.clone);
	                event.dataTransfer.setDragImage(this.clone, 75, 30);
	            }
	        }
	    }, {
	        key: 'deleteColumns',
	        value: function deleteColumns(tbl) {
	            var allRows = tbl.rows;
	            for (var i = 0; i < allRows.length; i++) {
	                if (i > 10) {
	                    tbl.deleteRow(-1);
	                } else {
	                    var cellLength = allRows[i].cells.length;
	                    for (var c = 0; c < cellLength; c++) {
	                        if (c < this.index) {
	                            allRows[i].deleteCell(0);
	                        } else if (c > this.index) {
	                            allRows[i].deleteCell(-1);
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'findTable',
	        value: function findTable(start) {
	            var htmlElementNode = start;
	            while (htmlElementNode) {
	                htmlElementNode = htmlElementNode.parentNode;
	                if (htmlElementNode.tagName.toLowerCase() === 'table') {
	                    return htmlElementNode;
	                }
	            }
	            return undefined;
	        }
	    }, {
	        key: 'onDrag',
	        value: function onDrag(event) {
	            if (event) {
	                event.preventDefault();
	                event.stopPropagation();
	            }
	            return false;
	        }
	    }, {
	        key: 'onDragEnd',
	        value: function onDragEnd(event) {
	            if (event) {
	                event.preventDefault();
	                event.stopPropagation();
	            }
	            this.element.nativeElement.classList.remove('over');
	            this.element.nativeElement.classList.remove('dragging');
	            document.body.removeChild(this.clone);
	            return false;
	        }
	    }, {
	        key: 'onDrop',
	        value: function onDrop(event) {
	            if (event) {
	                event.preventDefault();
	                event.stopPropagation();
	            }
	
	            this.element.nativeElement.classList.remove('over');
	            var data = JSON.parse(event.dataTransfer.getData('text/plain'));
	
	            this.onOrderChange.emit({
	                first: data,
	                second: this.column
	            });
	
	            return false;
	        }
	    }, {
	        key: 'onDragOver',
	        value: function onDragOver(event) {
	            if (event.preventDefault) {
	                event.preventDefault();
	            }
	
	            event.dataTransfer.dropEffect = 'move';
	            return false;
	        }
	    }, {
	        key: 'onDragEnter',
	        value: function onDragEnter(event) {
	            this.element.nativeElement.classList.add('over');
	            this.target = event.target;
	        }
	    }, {
	        key: 'onDragLeave',
	        value: function onDragLeave() {
	            this.element.nativeElement.classList.remove('over');
	        }
	    }, {
	        key: 'index',
	        get: function get() {
	            var children = Array.prototype.slice.call(this.element.nativeElement.parentNode.children);
	            return children.indexOf(this.element.nativeElement);
	        }
	    }]);
	
	    return ThOrderable;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_core.ElementRef], ThOrderable);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90YWJsZS9leHRyYXMvdGgtb3JkZXJhYmxlL1RoT3JkZXJhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7SUFlYSxXLFdBQUEsVyxXQWJaLHFCQUFVO0FBQ1AsY0FBVSxtQkFESDtBQUVQLFlBQVEsQ0FBQyx5QkFBRCxDQUZEO0FBR1AsYUFBUyxDQUFDLGVBQUQsQ0FIRjtBQUlQLFVBQU07QUFDRix1QkFBZSxxQkFEYjtBQUVGLHNCQUFjLG9CQUZaO0FBR0YsdUJBQWUscUJBSGI7QUFJRix1QkFBZSxxQkFKYjtBQUtGLHFCQUFhLG1CQUxYO0FBTUYsa0JBQVU7QUFOUjtBQUpDLENBQVYsQztBQWNHLHlCQUFZLE9BQVosRUFBZ0M7QUFBQTs7QUFDNUIsYUFBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLGFBQUssTUFBTCxHQUFjLElBQWQ7QUFDQSxhQUFLLGFBQUwsR0FBcUIsd0JBQXJCO0FBQ0g7Ozs7bUNBRVU7QUFDUCxnQkFBSSxLQUFLLE1BQUwsQ0FBWSxRQUFoQixFQUEwQjtBQUN0QixxQkFBSyxPQUFMLENBQWEsYUFBYixDQUEyQixZQUEzQixDQUF3QyxXQUF4QyxFQUFxRCxJQUFyRDtBQUNBLHFCQUFLLEtBQUwsR0FBYSxLQUFLLFNBQUwsQ0FBZSxLQUFLLE9BQUwsQ0FBYSxhQUE1QixDQUFiO0FBQ0g7QUFDSjs7O29DQUVXLEssRUFBTztBQUNmLGdCQUFJLEtBQUssTUFBTCxDQUFZLFFBQWhCLEVBQTBCO0FBQ3RCLHFCQUFLLE9BQUwsQ0FBYSxhQUFiLENBQTJCLFNBQTNCLENBQXFDLEdBQXJDLENBQXlDLFVBQXpDO0FBQ0Esc0JBQU0sWUFBTixDQUFtQixhQUFuQixHQUFtQyxNQUFuQztBQUNBLHNCQUFNLFlBQU4sQ0FBbUIsT0FBbkIsQ0FBMkIsWUFBM0IsRUFBeUMsS0FBSyxTQUFMLENBQWUsS0FBSyxNQUFwQixDQUF6Qzs7QUFFQSxxQkFBSyxLQUFMLEdBQWEsS0FBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixJQUFyQixDQUFiO0FBQ0EscUJBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsUUFBakIsR0FBNEIsVUFBNUI7QUFDQSxxQkFBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixJQUFqQixHQUF3QixNQUF4QjtBQUNBLHFCQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLEtBQWpCLEdBQXlCLE9BQXpCO0FBQ0EscUJBQUssYUFBTCxDQUFtQixLQUFLLEtBQXhCO0FBQ0EseUJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsS0FBSyxLQUEvQjtBQUNBLHNCQUFNLFlBQU4sQ0FBbUIsWUFBbkIsQ0FBZ0MsS0FBSyxLQUFyQyxFQUE0QyxFQUE1QyxFQUFnRCxFQUFoRDtBQUNIO0FBQ0o7OztzQ0FPYSxHLEVBQUs7QUFDZixnQkFBTSxVQUFVLElBQUksSUFBcEI7QUFDQSxpQkFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFFBQVEsTUFBNUIsRUFBb0MsR0FBcEMsRUFBeUM7QUFDckMsb0JBQUksSUFBSSxFQUFSLEVBQVk7QUFDUix3QkFBSSxTQUFKLENBQWMsQ0FBQyxDQUFmO0FBQ0gsaUJBRkQsTUFFTztBQUNILHdCQUFNLGFBQWEsUUFBUSxDQUFSLEVBQVcsS0FBWCxDQUFpQixNQUFwQztBQUNBLHlCQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksVUFBcEIsRUFBZ0MsR0FBaEMsRUFBcUM7QUFDakMsNEJBQUksSUFBSSxLQUFLLEtBQWIsRUFBb0I7QUFDaEIsb0NBQVEsQ0FBUixFQUFXLFVBQVgsQ0FBc0IsQ0FBdEI7QUFDSCx5QkFGRCxNQUVPLElBQUksSUFBSSxLQUFLLEtBQWIsRUFBb0I7QUFDdkIsb0NBQVEsQ0FBUixFQUFXLFVBQVgsQ0FBc0IsQ0FBQyxDQUF2QjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0o7OztrQ0FFUyxLLEVBQU87QUFDYixnQkFBSSxrQkFBa0IsS0FBdEI7QUFDQSxtQkFBTyxlQUFQLEVBQXdCO0FBQ3BCLGtDQUFrQixnQkFBZ0IsVUFBbEM7QUFDQSxvQkFBSSxnQkFBZ0IsT0FBaEIsQ0FBd0IsV0FBeEIsT0FBMEMsT0FBOUMsRUFBdUQ7QUFDbkQsMkJBQU8sZUFBUDtBQUNIO0FBQ0o7QUFDRCxtQkFBTyxTQUFQO0FBQ0g7OzsrQkFFTSxLLEVBQU87QUFDVixnQkFBSSxLQUFKLEVBQVc7QUFDUCxzQkFBTSxjQUFOO0FBQ0Esc0JBQU0sZUFBTjtBQUNIO0FBQ0QsbUJBQU8sS0FBUDtBQUNIOzs7a0NBRVMsSyxFQUFPO0FBQ2IsZ0JBQUksS0FBSixFQUFXO0FBQ1Asc0JBQU0sY0FBTjtBQUNBLHNCQUFNLGVBQU47QUFDSDtBQUNELGlCQUFLLE9BQUwsQ0FBYSxhQUFiLENBQTJCLFNBQTNCLENBQXFDLE1BQXJDLENBQTRDLE1BQTVDO0FBQ0EsaUJBQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsU0FBM0IsQ0FBcUMsTUFBckMsQ0FBNEMsVUFBNUM7QUFDQSxxQkFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixLQUFLLEtBQS9CO0FBQ0EsbUJBQU8sS0FBUDtBQUNIOzs7K0JBRU0sSyxFQUFPO0FBQ1YsZ0JBQUksS0FBSixFQUFXO0FBQ1Asc0JBQU0sY0FBTjtBQUNBLHNCQUFNLGVBQU47QUFDSDs7QUFFRCxpQkFBSyxPQUFMLENBQWEsYUFBYixDQUEyQixTQUEzQixDQUFxQyxNQUFyQyxDQUE0QyxNQUE1QztBQUNBLGdCQUFNLE9BQU8sS0FBSyxLQUFMLENBQVcsTUFBTSxZQUFOLENBQW1CLE9BQW5CLENBQTJCLFlBQTNCLENBQVgsQ0FBYjs7QUFFQSxpQkFBSyxhQUFMLENBQW1CLElBQW5CLENBQXdCO0FBQ3BCLHVCQUFPLElBRGE7QUFFcEIsd0JBQVEsS0FBSztBQUZPLGFBQXhCOztBQUtBLG1CQUFPLEtBQVA7QUFDSDs7O21DQUVVLEssRUFBTztBQUNkLGdCQUFJLE1BQU0sY0FBVixFQUEwQjtBQUN0QixzQkFBTSxjQUFOO0FBQ0g7O0FBRUQsa0JBQU0sWUFBTixDQUFtQixVQUFuQixHQUFnQyxNQUFoQztBQUNBLG1CQUFPLEtBQVA7QUFDSDs7O29DQUVXLEssRUFBTztBQUNmLGlCQUFLLE9BQUwsQ0FBYSxhQUFiLENBQTJCLFNBQTNCLENBQXFDLEdBQXJDLENBQXlDLE1BQXpDO0FBQ0EsaUJBQUssTUFBTCxHQUFjLE1BQU0sTUFBcEI7QUFDSDs7O3NDQUVhO0FBQ1YsaUJBQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsU0FBM0IsQ0FBcUMsTUFBckMsQ0FBNEMsTUFBNUM7QUFDSDs7OzRCQXRGVztBQUNSLGdCQUFNLFdBQVcsTUFBTSxTQUFOLENBQWdCLEtBQWhCLENBQXNCLElBQXRCLENBQTJCLEtBQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsVUFBM0IsQ0FBc0MsUUFBakUsQ0FBakI7QUFDQSxtQkFBTyxTQUFTLE9BQVQsQ0FBaUIsS0FBSyxPQUFMLENBQWEsYUFBOUIsQ0FBUDtBQUNIOzs7OztnRUFqQ1EsVyIsImZpbGUiOiJUaE9yZGVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tub3ZvVGhPcmRlcmFibGVdJyxcbiAgICBpbnB1dHM6IFsnY29sdW1uOiBub3ZvVGhPcmRlcmFibGUnXSxcbiAgICBvdXRwdXRzOiBbJ29uT3JkZXJDaGFuZ2UnXSxcbiAgICBob3N0OiB7XG4gICAgICAgICcoZHJhZ3N0YXJ0KSc6ICdvbkRyYWdTdGFydCgkZXZlbnQpJyxcbiAgICAgICAgJyhkcmFnb3ZlciknOiAnb25EcmFnT3ZlcigkZXZlbnQpJyxcbiAgICAgICAgJyhkcmFnZW50ZXIpJzogJ29uRHJhZ0VudGVyKCRldmVudCknLFxuICAgICAgICAnKGRyYWdsZWF2ZSknOiAnb25EcmFnTGVhdmUoJGV2ZW50KScsXG4gICAgICAgICcoZHJhZ2VuZCknOiAnb25EcmFnRW5kKCRldmVudCknLFxuICAgICAgICAnKGRyb3ApJzogJ29uRHJvcCgkZXZlbnQpJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgVGhPcmRlcmFibGUge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmNvbHVtbiA9IG51bGw7XG4gICAgICAgIHRoaXMub25PcmRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sdW1uLm9yZGVyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy50YWJsZSA9IHRoaXMuZmluZFRhYmxlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbHVtbi5vcmRlcmluZykge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbHVtbikpO1xuXG4gICAgICAgICAgICB0aGlzLmNsb25lID0gdGhpcy50YWJsZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRoaXMuY2xvbmUuc3R5bGUubGVmdCA9ICcxMDAlJztcbiAgICAgICAgICAgIHRoaXMuY2xvbmUuc3R5bGUud2lkdGggPSAnMTUwcHgnO1xuICAgICAgICAgICAgdGhpcy5kZWxldGVDb2x1bW5zKHRoaXMuY2xvbmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNsb25lKTtcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UodGhpcy5jbG9uZSwgNzUsIDMwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpbmRleCgpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLmNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuLmluZGV4T2YodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGRlbGV0ZUNvbHVtbnModGJsKSB7XG4gICAgICAgIGNvbnN0IGFsbFJvd3MgPSB0Ymwucm93cztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxSb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDEwKSB7XG4gICAgICAgICAgICAgICAgdGJsLmRlbGV0ZVJvdygtMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxMZW5ndGggPSBhbGxSb3dzW2ldLmNlbGxzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNlbGxMZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYyA8IHRoaXMuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFJvd3NbaV0uZGVsZXRlQ2VsbCgwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjID4gdGhpcy5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsUm93c1tpXS5kZWxldGVDZWxsKC0xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRUYWJsZShzdGFydCkge1xuICAgICAgICBsZXQgaHRtbEVsZW1lbnROb2RlID0gc3RhcnQ7XG4gICAgICAgIHdoaWxlIChodG1sRWxlbWVudE5vZGUpIHtcbiAgICAgICAgICAgIGh0bWxFbGVtZW50Tm9kZSA9IGh0bWxFbGVtZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgaWYgKGh0bWxFbGVtZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0YWJsZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbEVsZW1lbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb25EcmFnKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkRyYWdFbmQoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuY2xvbmUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb25Ecm9wKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpKTtcblxuICAgICAgICB0aGlzLm9uT3JkZXJDaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICBmaXJzdDogZGF0YSxcbiAgICAgICAgICAgIHNlY29uZDogdGhpcy5jb2x1bW5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9uRHJhZ092ZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkRyYWdFbnRlcihldmVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvdmVyJyk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIH1cblxuICAgIG9uRHJhZ0xlYXZlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XG4gICAgfVxufVxuIl19

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ThSortable = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ThSortable = exports.ThSortable = (_dec = (0, _core.Directive)({
	    selector: '[novoThSortable]',
	    inputs: ['config: novoThSortable', 'column'],
	    outputs: ['onSortChange'],
	    host: {
	        '(click)': 'onToggleSort($event, $target)'
	    }
	}), _dec(_class = function () {
	    function ThSortable() {
	        _classCallCheck(this, ThSortable);
	
	        this.config = null;
	        this.column = null;
	        this.onSortChange = new _core.EventEmitter();
	    }
	
	    _createClass(ThSortable, [{
	        key: 'onToggleSort',
	        value: function onToggleSort(event) {
	            if (event) {
	                event.preventDefault();
	            }
	
	            if (this.config && this.column && this.config.sorting !== false && this.column.sort !== false) {
	                switch (this.column.sort) {
	                    case 'asc':
	                        this.column.sort = 'desc';
	                        break;
	                    default:
	                        this.column.sort = 'asc';
	                        break;
	                }
	
	                this.onSortChange.emit(this.column);
	            }
	        }
	    }]);
	
	    return ThSortable;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90YWJsZS9leHRyYXMvdGgtc29ydGFibGUvVGhTb3J0YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0lBYWEsVSxXQUFBLFUsV0FYWixxQkFBVTtBQUNQLGNBQVUsa0JBREg7QUFFUCxZQUFRLENBQ0osd0JBREksRUFFSixRQUZJLENBRkQ7QUFNUCxhQUFTLENBQUMsY0FBRCxDQU5GO0FBT1AsVUFBTTtBQUNGLG1CQUFXO0FBRFQ7QUFQQyxDQUFWLEM7QUFZRywwQkFBYztBQUFBOztBQUNWLGFBQUssTUFBTCxHQUFjLElBQWQ7QUFDQSxhQUFLLE1BQUwsR0FBYyxJQUFkO0FBQ0EsYUFBSyxZQUFMLEdBQW9CLHdCQUFwQjtBQUNIOzs7O3FDQUVZLEssRUFBTztBQUNoQixnQkFBSSxLQUFKLEVBQVc7QUFDUCxzQkFBTSxjQUFOO0FBQ0g7O0FBRUQsZ0JBQUksS0FBSyxNQUFMLElBQWUsS0FBSyxNQUFwQixJQUE4QixLQUFLLE1BQUwsQ0FBWSxPQUFaLEtBQXdCLEtBQXRELElBQStELEtBQUssTUFBTCxDQUFZLElBQVosS0FBcUIsS0FBeEYsRUFBK0Y7QUFDM0Ysd0JBQVEsS0FBSyxNQUFMLENBQVksSUFBcEI7QUFDSSx5QkFBSyxLQUFMO0FBQ0ksNkJBQUssTUFBTCxDQUFZLElBQVosR0FBbUIsTUFBbkI7QUFDQTtBQUNKO0FBQ0ksNkJBQUssTUFBTCxDQUFZLElBQVosR0FBbUIsS0FBbkI7QUFDQTtBQU5SOztBQVNBLHFCQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsS0FBSyxNQUE1QjtBQUNIO0FBQ0oiLCJmaWxlIjoiVGhTb3J0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tub3ZvVGhTb3J0YWJsZV0nLFxuICAgIGlucHV0czogW1xuICAgICAgICAnY29uZmlnOiBub3ZvVGhTb3J0YWJsZScsXG4gICAgICAgICdjb2x1bW4nXG4gICAgXSxcbiAgICBvdXRwdXRzOiBbJ29uU29ydENoYW5nZSddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJyhjbGljayknOiAnb25Ub2dnbGVTb3J0KCRldmVudCwgJHRhcmdldCknXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBUaFNvcnRhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbHVtbiA9IG51bGw7XG4gICAgICAgIHRoaXMub25Tb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlU29ydChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb2x1bW4gJiYgdGhpcy5jb25maWcuc29ydGluZyAhPT0gZmFsc2UgJiYgdGhpcy5jb2x1bW4uc29ydCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5jb2x1bW4uc29ydCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FzYyc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uLnNvcnQgPSAnZGVzYyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uLnNvcnQgPSAnYXNjJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub25Tb3J0Q2hhbmdlLmVtaXQodGhpcy5jb2x1bW4pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tabs = __webpack_require__(467);
	
	Object.defineProperty(exports, 'NOVO_TAB_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Tabs.NOVO_TAB_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90YWJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O2lCQUFTLGlCIiwiZmlsZSI6InRhYnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FzaWJpbGlhL0RvY3VtZW50cy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgTk9WT19UQUJfRUxFTUVOVFMgfSBmcm9tICcuL3RhYnMvVGFicyc7XG4iXX0=

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_TAB_ELEMENTS = exports.NovoNavHeader = exports.NovoNavContent = exports.NovoNavOutlet = exports.NovoTabLink = exports.NovoTabButton = exports.NovoTab = exports.NovoNav = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class, _dec2, _class2, _dec3, _class3, _dec4, _class4, _dec5, _class5, _dec6, _class6, _dec7, _class7;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NovoNav = exports.NovoNav = (_dec = (0, _core.Component)({
	    selector: 'novo-nav',
	    inputs: ['theme', 'direction', 'outlet', 'router'],
	    directives: [_common.CORE_DIRECTIVES],
	    template: '<ng-content></ng-content>'
	}), _dec(_class = function () {
	    function NovoNav() {
	        _classCallCheck(this, NovoNav);
	
	        this.items = [];
	        this.theme = '';
	        this.direction = '';
	    }
	
	    _createClass(NovoNav, [{
	        key: 'select',
	        value: function select(item) {
	            /**
	             * Deactivates other tab items
	             * @param items - deactivated items
	             */
	            function _deactivateAllItems(items) {
	                items.forEach(function (t) {
	                    if (t.active === true) {
	                        // t.deselected.next();
	                    }
	                    t.active = false;
	                });
	            }
	
	            _deactivateAllItems(this.items);
	            item.active = true;
	            if (this.outlet) {
	                this.outlet.show(this.items.indexOf(item));
	            }
	
	            // TODO - remove hack to make DOM rerender
	            var element = document.querySelector('novo-tab-link.active span.indicator');
	            if (element) {
	                element.style.opacity = 0.99;
	                setTimeout(function () {
	                    element.style.opacity = 1;
	                }, 10);
	            }
	            // item.selected.next();
	        }
	    }, {
	        key: 'add',
	        value: function add(item) {
	            if (this.items.length === 0) {
	                item.active = true;
	                // item.selected.next();
	            }
	            this.items.push(item);
	        }
	    }]);
	
	    return NovoNav;
	}()) || _class);
	var NovoTab = exports.NovoTab = (_dec2 = (0, _core.Component)({
	    selector: 'novo-tab',
	    inputs: ['active'],
	    directives: [_common.CORE_DIRECTIVES],
	    host: {
	        '(click)': 'select()',
	        '[class.active]': 'active'
	    },
	    template: '\n        <div class="novo-tab-link">\n            <ng-content></ng-content>\n        </div>\n        <span class="indicator"></span>\n  '
	}), _dec2(_class2 = function () {
	    function NovoTab(nav) {
	        _classCallCheck(this, NovoTab);
	
	        this.active = this.active || false;
	        this.nav = nav;
	        this.nav.add(this);
	    }
	
	    _createClass(NovoTab, [{
	        key: 'select',
	        value: function select() {
	            this.nav.select(this);
	        }
	    }]);
	
	    return NovoTab;
	}()) || _class2);
	Reflect.defineMetadata('design:paramtypes', [NovoNav], NovoTab);
	var NovoTabButton = exports.NovoTabButton = (_dec3 = (0, _core.Component)({
	    selector: 'novo-tab-button',
	    inputs: ['active'],
	    directives: [_common.CORE_DIRECTIVES],
	    host: {
	        '(click)': 'select()',
	        '[class.active]': 'active'
	    },
	    template: '\n            <ng-content></ng-content>\n  '
	}), _dec3(_class3 = function () {
	    function NovoTabButton(nav) {
	        _classCallCheck(this, NovoTabButton);
	
	        this.active = this.active || false;
	        this.nav = nav;
	        this.nav.add(this);
	    }
	
	    _createClass(NovoTabButton, [{
	        key: 'select',
	        value: function select() {
	            this.nav.select(this);
	        }
	    }]);
	
	    return NovoTabButton;
	}()) || _class3);
	Reflect.defineMetadata('design:paramtypes', [NovoNav], NovoTabButton);
	var NovoTabLink = exports.NovoTabLink = (_dec4 = (0, _core.Component)({
	    selector: 'novo-tab-link',
	    inputs: ['active'],
	    directives: [_common.CORE_DIRECTIVES],
	    host: {
	        '(click)': 'select()',
	        '[class.active]': 'active'
	    },
	    template: '\n        <div class="novo-tab-link">\n            <ng-content></ng-content>\n        </div>\n        <span class="indicator"></span>\n  '
	}), _dec4(_class4 = function () {
	    function NovoTabLink(nav) {
	        _classCallCheck(this, NovoTabLink);
	
	        this.active = this.active || false;
	        this.nav = nav;
	        this.nav.add(this);
	    }
	
	    _createClass(NovoTabLink, [{
	        key: 'select',
	        value: function select() {
	            this.nav.select(this);
	        }
	    }]);
	
	    return NovoTabLink;
	}()) || _class4);
	Reflect.defineMetadata('design:paramtypes', [NovoNav], NovoTabLink);
	var NovoNavOutlet = exports.NovoNavOutlet = (_dec5 = (0, _core.Component)({
	    selector: 'novo-nav-outlet',
	    directives: [_common.CORE_DIRECTIVES],
	    template: '\n        <ng-content></ng-content>\n  '
	}), _dec5(_class5 = function () {
	    function NovoNavOutlet() {
	        _classCallCheck(this, NovoNavOutlet);
	
	        this.items = [];
	    }
	
	    _createClass(NovoNavOutlet, [{
	        key: 'show',
	        value: function show(index) {
	            var item = this.items[index];
	            /**
	             * Deactivates other tab items
	             * @param items - deactivated items
	             */
	            function _deactivateAllItems(items) {
	                items.forEach(function (t) {
	                    if (t.active === true) {
	                        // t.deselected.next();
	                    }
	                    t.active = false;
	                });
	            }
	
	            _deactivateAllItems(this.items);
	            item.active = true;
	        }
	    }, {
	        key: 'add',
	        value: function add(item) {
	            if (this.items.length === 0) {
	                item.active = true;
	            }
	            this.items.push(item);
	        }
	    }]);
	
	    return NovoNavOutlet;
	}()) || _class5);
	var NovoNavContent = exports.NovoNavContent = (_dec6 = (0, _core.Component)({
	    selector: 'novo-nav-content',
	    inputs: ['active'],
	    directives: [_common.CORE_DIRECTIVES],
	    host: {
	        '[class.active]': 'active'
	    },
	    template: '\n        <ng-content></ng-content>\n  '
	}), _dec6(_class6 = function NovoNavContent(outlet) {
	    _classCallCheck(this, NovoNavContent);
	
	    this.active = this.active || false;
	    outlet.add(this);
	}) || _class6);
	Reflect.defineMetadata('design:paramtypes', [NovoNavOutlet], NovoNavContent);
	var NovoNavHeader = exports.NovoNavHeader = (_dec7 = (0, _core.Component)({
	    selector: 'novo-nav-header',
	    inputs: ['active', 'for'],
	    directives: [_common.CORE_DIRECTIVES],
	    host: {
	        '[class.active]': 'active',
	        '(click)': 'show($event)'
	    },
	    template: '\n        <ng-content></ng-content>\n  '
	}), _dec7(_class7 = function () {
	    function NovoNavHeader(outlet) {
	        _classCallCheck(this, NovoNavHeader);
	
	        this.active = this.active || false;
	        this.outlet = outlet;
	    }
	
	    _createClass(NovoNavHeader, [{
	        key: 'show',
	        value: function show() {
	            try {
	                var INDEX = this.outlet.items.indexOf(this.for);
	                if (INDEX > -1) {
	                    this.outlet.show(INDEX);
	                }
	            } catch (err) {
	                // do nothing
	            }
	        }
	    }]);
	
	    return NovoNavHeader;
	}()) || _class7);
	Reflect.defineMetadata('design:paramtypes', [NovoNavOutlet], NovoNavHeader);
	var NOVO_TAB_ELEMENTS = exports.NOVO_TAB_ELEMENTS = [NovoNav, NovoTab, NovoTabLink, NovoNavOutlet, NovoNavHeader, NovoNavContent, NovoTabButton];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90YWJzL1RhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztJQVFhLE8sV0FBQSxPLFdBTloscUJBQVU7QUFDUCxjQUFVLFVBREg7QUFFUCxZQUFRLENBQUMsT0FBRCxFQUFVLFdBQVYsRUFBdUIsUUFBdkIsRUFBaUMsUUFBakMsQ0FGRDtBQUdQLGdCQUFZLHlCQUhMO0FBSVAsY0FBVTtBQUpILENBQVYsQztBQU9HLHVCQUFjO0FBQUE7O0FBQ1YsYUFBSyxLQUFMLEdBQWEsRUFBYjtBQUNBLGFBQUssS0FBTCxHQUFhLEVBQWI7QUFDQSxhQUFLLFNBQUwsR0FBaUIsRUFBakI7QUFDSDs7OzsrQkFFTSxJLEVBQU07Ozs7O0FBS1QscUJBQVMsbUJBQVQsQ0FBNkIsS0FBN0IsRUFBb0M7QUFDaEMsc0JBQU0sT0FBTixDQUFjLFVBQUMsQ0FBRCxFQUFPO0FBQ2pCLHdCQUFJLEVBQUUsTUFBRixLQUFhLElBQWpCLEVBQXVCOztBQUV0QjtBQUNELHNCQUFFLE1BQUYsR0FBVyxLQUFYO0FBQ0gsaUJBTEQ7QUFNSDs7QUFFRCxnQ0FBb0IsS0FBSyxLQUF6QjtBQUNBLGlCQUFLLE1BQUwsR0FBYyxJQUFkO0FBQ0EsZ0JBQUksS0FBSyxNQUFULEVBQWlCO0FBQ2IscUJBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixJQUFuQixDQUFqQjtBQUNIOzs7QUFHRCxnQkFBSSxVQUFVLFNBQVMsYUFBVCxDQUF1QixxQ0FBdkIsQ0FBZDtBQUNBLGdCQUFJLE9BQUosRUFBYTtBQUNULHdCQUFRLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLElBQXhCO0FBQ0EsMkJBQVcsWUFBTTtBQUNiLDRCQUFRLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLENBQXhCO0FBQ0gsaUJBRkQsRUFFRyxFQUZIO0FBR0g7O0FBRUo7Ozs0QkFFRyxJLEVBQU07QUFDTixnQkFBSSxLQUFLLEtBQUwsQ0FBVyxNQUFYLEtBQXNCLENBQTFCLEVBQTZCO0FBQ3pCLHFCQUFLLE1BQUwsR0FBYyxJQUFkOztBQUVIO0FBQ0QsaUJBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsSUFBaEI7QUFDSDs7Ozs7SUFrQlEsTyxXQUFBLE8sWUFmWixxQkFBVTtBQUNQLGNBQVUsVUFESDtBQUVQLFlBQVEsQ0FBQyxRQUFELENBRkQ7QUFHUCxnQkFBWSx5QkFITDtBQUlQLFVBQU07QUFDRixtQkFBVyxVQURUO0FBRUYsMEJBQWtCO0FBRmhCLEtBSkM7QUFRUDtBQVJPLENBQVYsQztBQWdCRyxxQkFBWSxHQUFaLEVBQXlCO0FBQUE7O0FBQ3JCLGFBQUssTUFBTCxHQUFjLEtBQUssTUFBTCxJQUFlLEtBQTdCO0FBQ0EsYUFBSyxHQUFMLEdBQVcsR0FBWDtBQUNBLGFBQUssR0FBTCxDQUFTLEdBQVQsQ0FBYSxJQUFiO0FBQ0g7Ozs7aUNBRVE7QUFDTCxpQkFBSyxHQUFMLENBQVMsTUFBVCxDQUFnQixJQUFoQjtBQUNIOzs7Ozs2Q0FSZSxPLEdBRFAsTztJQXdCQSxhLFdBQUEsYSxZQVpaLHFCQUFVO0FBQ1AsY0FBVSxpQkFESDtBQUVQLFlBQVEsQ0FBQyxRQUFELENBRkQ7QUFHUCxnQkFBWSx5QkFITDtBQUlQLFVBQU07QUFDRixtQkFBVyxVQURUO0FBRUYsMEJBQWtCO0FBRmhCLEtBSkM7QUFRUDtBQVJPLENBQVYsQztBQWFHLDJCQUFZLEdBQVosRUFBeUI7QUFBQTs7QUFDckIsYUFBSyxNQUFMLEdBQWMsS0FBSyxNQUFMLElBQWUsS0FBN0I7QUFDQSxhQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0EsYUFBSyxHQUFMLENBQVMsR0FBVCxDQUFhLElBQWI7QUFDSDs7OztpQ0FFUTtBQUNMLGlCQUFLLEdBQUwsQ0FBUyxNQUFULENBQWdCLElBQWhCO0FBQ0g7Ozs7OzZDQVJlLE8sR0FEUCxhO0lBMkJBLFcsV0FBQSxXLFlBZloscUJBQVU7QUFDUCxjQUFVLGVBREg7QUFFUCxZQUFRLENBQUMsUUFBRCxDQUZEO0FBR1AsZ0JBQVkseUJBSEw7QUFJUCxVQUFNO0FBQ0YsbUJBQVcsVUFEVDtBQUVGLDBCQUFrQjtBQUZoQixLQUpDO0FBUVA7QUFSTyxDQUFWLEM7QUFnQkcseUJBQVksR0FBWixFQUF5QjtBQUFBOztBQUNyQixhQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsSUFBZSxLQUE3QjtBQUNBLGFBQUssR0FBTCxHQUFXLEdBQVg7QUFDQSxhQUFLLEdBQUwsQ0FBUyxHQUFULENBQWEsSUFBYjtBQUNIOzs7O2lDQUVRO0FBQ0wsaUJBQUssR0FBTCxDQUFTLE1BQVQsQ0FBZ0IsSUFBaEI7QUFDSDs7Ozs7NkNBUmUsTyxHQURQLFc7SUFtQkEsYSxXQUFBLGEsWUFQWixxQkFBVTtBQUNQLGNBQVUsaUJBREg7QUFFUCxnQkFBWSx5QkFGTDtBQUdQO0FBSE8sQ0FBVixDO0FBUUcsNkJBQWM7QUFBQTs7QUFDVixhQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0g7Ozs7NkJBRUksSyxFQUFPO0FBQ1IsZ0JBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQVg7Ozs7O0FBS0EscUJBQVMsbUJBQVQsQ0FBNkIsS0FBN0IsRUFBb0M7QUFDaEMsc0JBQU0sT0FBTixDQUFjLFVBQUMsQ0FBRCxFQUFPO0FBQ2pCLHdCQUFJLEVBQUUsTUFBRixLQUFhLElBQWpCLEVBQXVCOztBQUV0QjtBQUNELHNCQUFFLE1BQUYsR0FBVyxLQUFYO0FBQ0gsaUJBTEQ7QUFNSDs7QUFFRCxnQ0FBb0IsS0FBSyxLQUF6QjtBQUNBLGlCQUFLLE1BQUwsR0FBYyxJQUFkO0FBQ0g7Ozs0QkFFRyxJLEVBQU07QUFDTixnQkFBSSxLQUFLLEtBQUwsQ0FBVyxNQUFYLEtBQXNCLENBQTFCLEVBQTZCO0FBQ3pCLHFCQUFLLE1BQUwsR0FBYyxJQUFkO0FBQ0g7QUFDRCxpQkFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixJQUFoQjtBQUNIOzs7OztJQWNRLGMsV0FBQSxjLFlBWFoscUJBQVU7QUFDUCxjQUFVLGtCQURIO0FBRVAsWUFBUSxDQUFDLFFBQUQsQ0FGRDtBQUdQLGdCQUFZLHlCQUhMO0FBSVAsVUFBTTtBQUNGLDBCQUFrQjtBQURoQixLQUpDO0FBT1A7QUFQTyxDQUFWLEMsa0JBWUcsd0JBQVksTUFBWixFQUFrQztBQUFBOztBQUM5QixTQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsSUFBZSxLQUE3QjtBQUNBLFdBQU8sR0FBUCxDQUFXLElBQVg7QUFDSCxDOzZDQUhrQixhLEdBRFYsYztJQW1CQSxhLFdBQUEsYSxZQVpaLHFCQUFVO0FBQ1AsY0FBVSxpQkFESDtBQUVQLFlBQVEsQ0FBQyxRQUFELEVBQVcsS0FBWCxDQUZEO0FBR1AsZ0JBQVkseUJBSEw7QUFJUCxVQUFNO0FBQ0YsMEJBQWtCLFFBRGhCO0FBRUYsbUJBQVc7QUFGVCxLQUpDO0FBUVA7QUFSTyxDQUFWLEM7QUFhRywyQkFBWSxNQUFaLEVBQWtDO0FBQUE7O0FBQzlCLGFBQUssTUFBTCxHQUFjLEtBQUssTUFBTCxJQUFlLEtBQTdCO0FBQ0EsYUFBSyxNQUFMLEdBQWMsTUFBZDtBQUNIOzs7OytCQUVNO0FBQ0gsZ0JBQUk7QUFDQSxvQkFBTSxRQUFRLEtBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsT0FBbEIsQ0FBMEIsS0FBSyxHQUEvQixDQUFkO0FBQ0Esb0JBQUksUUFBUSxDQUFDLENBQWIsRUFBZ0I7QUFDWix5QkFBSyxNQUFMLENBQVksSUFBWixDQUFpQixLQUFqQjtBQUNIO0FBQ0osYUFMRCxDQUtFLE9BQU8sR0FBUCxFQUFZOztBQUViO0FBQ0o7Ozs7OzZDQWRrQixhLEdBRFYsYTtBQWtCTixJQUFNLGdEQUFvQixDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLFdBQW5CLEVBQWdDLGFBQWhDLEVBQStDLGFBQS9DLEVBQThELGNBQTlELEVBQThFLGFBQTlFLENBQTFCIiwiZmlsZSI6IlRhYnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FzaWJpbGlhL0RvY3VtZW50cy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tbmF2JyxcbiAgICBpbnB1dHM6IFsndGhlbWUnLCAnZGlyZWN0aW9uJywgJ291dGxldCcsICdyb3V0ZXInXSxcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9OYXYge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMudGhlbWUgPSAnJztcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnJztcbiAgICB9XG5cbiAgICBzZWxlY3QoaXRlbSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogRGVhY3RpdmF0ZXMgb3RoZXIgdGFiIGl0ZW1zXG4gICAgICAgICAqIEBwYXJhbSBpdGVtcyAtIGRlYWN0aXZhdGVkIGl0ZW1zXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfZGVhY3RpdmF0ZUFsbEl0ZW1zKGl0ZW1zKSB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHQuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHQuZGVzZWxlY3RlZC5uZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9kZWFjdGl2YXRlQWxsSXRlbXModGhpcy5pdGVtcyk7XG4gICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMub3V0bGV0KSB7XG4gICAgICAgICAgICB0aGlzLm91dGxldC5zaG93KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPIC0gcmVtb3ZlIGhhY2sgdG8gbWFrZSBET00gcmVyZW5kZXJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLXRhYi1saW5rLmFjdGl2ZSBzcGFuLmluZGljYXRvcicpO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMC45OTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaXRlbS5zZWxlY3RlZC5uZXh0KCk7XG4gICAgfVxuXG4gICAgYWRkKGl0ZW0pIHtcbiAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyBpdGVtLnNlbGVjdGVkLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tdGFiJyxcbiAgICBpbnB1dHM6IFsnYWN0aXZlJ10sXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFU10sXG4gICAgaG9zdDoge1xuICAgICAgICAnKGNsaWNrKSc6ICdzZWxlY3QoKScsXG4gICAgICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by10YWItbGlua1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmRpY2F0b3JcIj48L3NwYW4+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYiB7XG4gICAgY29uc3RydWN0b3IobmF2Ok5vdm9OYXYpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmFjdGl2ZSB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5uYXYgPSBuYXY7XG4gICAgICAgIHRoaXMubmF2LmFkZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZWxlY3QoKSB7XG4gICAgICAgIHRoaXMubmF2LnNlbGVjdCh0aGlzKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm92by10YWItYnV0dG9uJyxcbiAgICBpbnB1dHM6IFsnYWN0aXZlJ10sXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFU10sXG4gICAgaG9zdDoge1xuICAgICAgICAnKGNsaWNrKSc6ICdzZWxlY3QoKScsXG4gICAgICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKG5hdjpOb3ZvTmF2KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy5hY3RpdmUgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMubmF2ID0gbmF2O1xuICAgICAgICB0aGlzLm5hdi5hZGQodGhpcyk7XG4gICAgfVxuXG4gICAgc2VsZWN0KCkge1xuICAgICAgICB0aGlzLm5hdi5zZWxlY3QodGhpcyk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tdGFiLWxpbmsnLFxuICAgIGlucHV0czogWydhY3RpdmUnXSxcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXSxcbiAgICBob3N0OiB7XG4gICAgICAgICcoY2xpY2spJzogJ3NlbGVjdCgpJyxcbiAgICAgICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXRhYi1saW5rXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImluZGljYXRvclwiPjwvc3Bhbj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGFiTGluayB7XG4gICAgY29uc3RydWN0b3IobmF2Ok5vdm9OYXYpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmFjdGl2ZSB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5uYXYgPSBuYXY7XG4gICAgICAgIHRoaXMubmF2LmFkZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZWxlY3QoKSB7XG4gICAgICAgIHRoaXMubmF2LnNlbGVjdCh0aGlzKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm92by1uYXYtb3V0bGV0JyxcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTm92b05hdk91dGxldCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBzaG93KGluZGV4KSB7XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtc1tpbmRleF07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWFjdGl2YXRlcyBvdGhlciB0YWIgaXRlbXNcbiAgICAgICAgICogQHBhcmFtIGl0ZW1zIC0gZGVhY3RpdmF0ZWQgaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9kZWFjdGl2YXRlQWxsSXRlbXMoaXRlbXMpIHtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodC5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdC5kZXNlbGVjdGVkLm5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgX2RlYWN0aXZhdGVBbGxJdGVtcyh0aGlzLml0ZW1zKTtcbiAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGFkZChpdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm92by1uYXYtY29udGVudCcsXG4gICAgaW5wdXRzOiBbJ2FjdGl2ZSddLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTmF2Q29udGVudCB7XG4gICAgY29uc3RydWN0b3Iob3V0bGV0Ok5vdm9OYXZPdXRsZXQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmFjdGl2ZSB8fCBmYWxzZTtcbiAgICAgICAgb3V0bGV0LmFkZCh0aGlzKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm92by1uYXYtaGVhZGVyJyxcbiAgICBpbnB1dHM6IFsnYWN0aXZlJywgJ2ZvciddLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gICAgICAgICcoY2xpY2spJzogJ3Nob3coJGV2ZW50KSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTmF2SGVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvdXRsZXQ6Tm92b05hdk91dGxldCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuYWN0aXZlIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLm91dGxldCA9IG91dGxldDtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgSU5ERVggPSB0aGlzLm91dGxldC5pdGVtcy5pbmRleE9mKHRoaXMuZm9yKTtcbiAgICAgICAgICAgIGlmIChJTkRFWCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRsZXQuc2hvdyhJTkRFWCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgTk9WT19UQUJfRUxFTUVOVFMgPSBbTm92b05hdiwgTm92b1RhYiwgTm92b1RhYkxpbmssIE5vdm9OYXZPdXRsZXQsIE5vdm9OYXZIZWFkZXIsIE5vdm9OYXZDb250ZW50LCBOb3ZvVGFiQnV0dG9uXTtcbiJdfQ==

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_TIME_PICKER_ELEMENTS = exports.TimePicker = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // eslint-disable-line
	
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(6);
	
	var _moment = __webpack_require__(2);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _Helpers = __webpack_require__(131);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TimePicker = exports.TimePicker = (_dec = (0, _core.Component)({
	    selector: 'novo-time-picker',
	    inputs: ['military'],
	    outputs: ['onSelect'],
	    directives: [_common.COMMON_DIRECTIVES],
	    template: '\n        <div class="digital">\n            <div class="digital--inner">\n                <span class="digital--clock">\n                    <span class="hours" data-automation-id="novo-time-picker-hours">{{hours}}</span>:<span class="minutes" data-automation-id="novo-time-picker-minutes">{{minutes}}</span>\n                </span>\n                <div class="control-block" *ngIf="!military">\n                    <span *ngFor="let period of MERIDIANS" class="digital--period" [class.active]="meridian==period" (click)="setPeriod($event, period, true)" [attr.data-automation-id]="period">{{period}}</span>\n                </div>\n            </div>\n        </div>\n        <div class="analog">\n            <div class="analog--inner">\n                <div class="analog--face">\n                    <span class="analog--center"></span>\n                    <span class="analog--hand--hours" [ngClass]="hoursClass">\n                        <span class="analog--ball"></span>\n                    </span>\n                    <span class="analog--hand--minutes" [ngClass]="minutesClass">\n                        <span class="analog--ball" [ngClass]="{between: inBetween}"></span>\n                    </span>\n                </div>\n                <div class="analog--hours">\n                    <span *ngFor="let hour of HOURS" class="analog--hour" [ngClass]="{active: activeHour == hour}" (click)="setHours($event, hour, true)" [attr.data-automation-id]="hour">{{hour}}</span>\n                </div>\n                <div class="analog--minutes">\n                    <span *ngFor="let minute of MINUTES" class="analog--minute" [ngClass]="{active: activeMinute == minute}" (click)="setMinutes($event, minute, true)" [attr.data-automation-id]="minute">{{minute}}</span>\n                </div>\n            </div>\n        </div>\n    ',
	    host: {
	        '[class.ng-untouched]': 'model.control?.untouched == true',
	        '[class.ng-touched]': 'model.control?.touched == true',
	        '[class.ng-pristine]': 'model.control?.pristine == true',
	        '[class.ng-dirty]': 'model.control?.dirty == true',
	        '[class.ng-valid]': 'model.control?.valid == true',
	        '[class.ng-invalid]': 'model.control?.valid == false',
	        '[class.military]': 'military'
	    }
	}), _dec(_class = function () {
	    function TimePicker(model) {
	        _classCallCheck(this, TimePicker);
	
	        this.hours = 12;
	        this.minutes = 0;
	        this.value = null;
	        this.onSelect = new _core.EventEmitter(false);
	        this.onChange = null;
	        this.onTouched = null;
	        this.MERIDIANS = ['am', 'pm'];
	        this.MINUTES = ['05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '00'];
	
	        this.model = model || new _common.NgModel();
	        this.model.valueAccessor = this;
	    }
	
	    _createClass(TimePicker, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            // Set the hours
	            this.HOURS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
	            if (this.military) {
	                this.HOURS = ['0'].concat(_toConsumableArray(this.HOURS), ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']);
	            }
	            this.ngOnChanges();
	        }
	    }, {
	        key: 'ngOnChanges',
	        value: function ngOnChanges() {
	            if (this.model.value) {
	                this.init(this.model.value, false);
	            } else {
	                this.init((0, _moment2.default)(), false);
	            }
	        }
	    }, {
	        key: 'init',
	        value: function init(value, dispatch) {
	            var momentValue = (0, _moment2.default)(value);
	            var hours = momentValue.hours();
	            var minutes = momentValue.minutes();
	
	            if (!this.military) {
	                this.meridian = hours >= 12 ? 'pm' : 'am';
	                hours = hours % 12;
	                hours = hours || 12;
	            }
	            minutes = minutes < 10 ? '0' + minutes : minutes;
	
	            this.setHours(null, hours, dispatch);
	            this.setMinutes(null, minutes, dispatch);
	            this.checkBetween(minutes);
	        }
	    }, {
	        key: 'checkBetween',
	        value: function checkBetween(value) {
	            this.inBetween = this.MINUTES.indexOf(String(value)) < 0;
	        }
	    }, {
	        key: 'setHours',
	        value: function setHours(event, hours, dispatch) {
	            (0, _Helpers.swallowEvent)(event);
	            this.hours = hours;
	            this.hoursClass = 'hour-' + hours;
	            this.activeHour = hours;
	
	            if (dispatch) {
	                this.dispatchChange();
	            }
	        }
	    }, {
	        key: 'setMinutes',
	        value: function setMinutes(event, minutes, dispatch) {
	            (0, _Helpers.swallowEvent)(event);
	            this.minutes = minutes;
	            this.minutesClass = 'min-' + minutes;
	            this.activeMinute = minutes;
	            this.checkBetween(minutes);
	
	            if (dispatch) {
	                this.dispatchChange();
	            }
	        }
	    }, {
	        key: 'setPeriod',
	        value: function setPeriod(event, period, dispatch) {
	            (0, _Helpers.swallowEvent)(event);
	            this.meridian = period;
	
	            if (dispatch) {
	                this.dispatchChange();
	            }
	        }
	    }, {
	        key: 'dispatchChange',
	        value: function dispatchChange() {
	            var hours = Number(this.hours);
	
	            if (!this.military) {
	                hours = this.meridian === 'pm' ? hours + 12 : hours;
	
	                // Special case for 12
	                if (this.meridian === 'pm' && hours === 24) {
	                    hours = 12;
	                } else if (this.meridian === 'am' && hours === 12) {
	                    hours = 0;
	                }
	            }
	
	            var value = (0, _moment2.default)().hours(hours).minutes(this.minutes).seconds(0);
	            this.onSelect.next({
	                hours: hours,
	                minutes: this.minutes,
	                meridian: this.meridian,
	                date: value.toDate(),
	                moment: value,
	                text: this.hours + ':' + this.minutes + ' ' + this.meridian
	            });
	            this.model.viewToModelUpdate(value.toDate());
	        }
	
	        // ValueAccessor Functions
	
	    }, {
	        key: 'writeValue',
	        value: function writeValue(value) {
	            this.value = value;
	            if (value) {
	                this.init(value, false);
	            }
	        }
	    }, {
	        key: 'registerOnChange',
	        value: function registerOnChange(fn) {
	            this.onChange = fn;
	        }
	    }, {
	        key: 'registerOnTouched',
	        value: function registerOnTouched(fn) {
	            this.onTouched = fn;
	        }
	    }]);
	
	    return TimePicker;
	}()) || _class);
	(0, _core.Optional)()(TimePicker, null, 0);
	Reflect.defineMetadata('design:paramtypes', [_common.NgControl], TimePicker);
	var NOVO_TIME_PICKER_ELEMENTS = exports.NOVO_TIME_PICKER_ELEMENTS = [TimePicker];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90aW1lLXBpY2tlci9UaW1lUGlja2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7Ozs7O0lBc0RhLFUsV0FBQSxVLFdBcERaLHFCQUFVO0FBQ1AsY0FBVSxrQkFESDtBQUVQLFlBQVEsQ0FDSixVQURJLENBRkQ7QUFLUCxhQUFTLENBQ0wsVUFESyxDQUxGO0FBUVAsZ0JBQVksMkJBUkw7QUFXUCx3MERBWE87QUEwQ1AsVUFBTTtBQUNGLGdDQUF3QixrQ0FEdEI7QUFFRiw4QkFBc0IsZ0NBRnBCO0FBR0YsK0JBQXVCLGlDQUhyQjtBQUlGLDRCQUFvQiw4QkFKbEI7QUFLRiw0QkFBb0IsOEJBTGxCO0FBTUYsOEJBQXNCLCtCQU5wQjtBQU9GLDRCQUFvQjtBQVBsQjtBQTFDQyxDQUFWLEM7QUErREcsd0JBQXdCLEtBQXhCLEVBQXlDO0FBQUE7O0FBQUEsYUFWekMsS0FVeUMsR0FWakMsRUFVaUM7QUFBQSxhQVR6QyxPQVN5QyxHQVQvQixDQVMrQjtBQUFBLGFBUnpDLEtBUXlDLEdBUmpDLElBUWlDO0FBQUEsYUFQekMsUUFPeUMsR0FQOUIsdUJBQWlCLEtBQWpCLENBTzhCO0FBQUEsYUFOekMsUUFNeUMsR0FOOUIsSUFNOEI7QUFBQSxhQUx6QyxTQUt5QyxHQUw3QixJQUs2QjtBQUFBLGFBSHpDLFNBR3lDLEdBSDdCLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FHNkI7QUFBQSxhQUZ6QyxPQUV5QyxHQUYvQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixFQUErQixJQUEvQixFQUFxQyxJQUFyQyxFQUEyQyxJQUEzQyxFQUFpRCxJQUFqRCxFQUF1RCxJQUF2RCxFQUE2RCxJQUE3RCxFQUFtRSxJQUFuRSxDQUUrQjs7QUFDckMsYUFBSyxLQUFMLEdBQWEsU0FBUyxxQkFBdEI7QUFDQSxhQUFLLEtBQUwsQ0FBVyxhQUFYLEdBQTJCLElBQTNCO0FBQ0g7Ozs7bUNBRVU7O0FBRVAsaUJBQUssS0FBTCxHQUFhLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDLElBQTlDLEVBQW9ELElBQXBELEVBQTBELElBQTFELENBQWI7QUFDQSxnQkFBSSxLQUFLLFFBQVQsRUFBbUI7QUFDZixxQkFBSyxLQUFMLElBQWMsR0FBZCw0QkFBc0IsS0FBSyxLQUEzQixJQUFrQyxJQUFsQyxFQUF3QyxJQUF4QyxFQUE4QyxJQUE5QyxFQUFvRCxJQUFwRCxFQUEwRCxJQUExRCxFQUFnRSxJQUFoRSxFQUFzRSxJQUF0RSxFQUE0RSxJQUE1RSxFQUFrRixJQUFsRixFQUF3RixJQUF4RixFQUE4RixJQUE5RjtBQUNIO0FBQ0QsaUJBQUssV0FBTDtBQUNIOzs7c0NBRWE7QUFDVixnQkFBSSxLQUFLLEtBQUwsQ0FBVyxLQUFmLEVBQXNCO0FBQ2xCLHFCQUFLLElBQUwsQ0FBVSxLQUFLLEtBQUwsQ0FBVyxLQUFyQixFQUE0QixLQUE1QjtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLLElBQUwsQ0FBVSx1QkFBVixFQUFvQixLQUFwQjtBQUNIO0FBQ0o7Ozs2QkFFSSxLLEVBQU8sUSxFQUFVO0FBQ2xCLGdCQUFJLGNBQWMsc0JBQU8sS0FBUCxDQUFsQjtBQUNBLGdCQUFJLFFBQVEsWUFBWSxLQUFaLEVBQVo7QUFDQSxnQkFBSSxVQUFVLFlBQVksT0FBWixFQUFkOztBQUVBLGdCQUFJLENBQUMsS0FBSyxRQUFWLEVBQW9CO0FBQ2hCLHFCQUFLLFFBQUwsR0FBZ0IsU0FBUyxFQUFULEdBQWMsSUFBZCxHQUFxQixJQUFyQztBQUNBLHdCQUFRLFFBQVEsRUFBaEI7QUFDQSx3QkFBUSxTQUFTLEVBQWpCO0FBQ0g7QUFDRCxzQkFBVSxVQUFVLEVBQVYsU0FBbUIsT0FBbkIsR0FBK0IsT0FBekM7O0FBRUEsaUJBQUssUUFBTCxDQUFjLElBQWQsRUFBb0IsS0FBcEIsRUFBMkIsUUFBM0I7QUFDQSxpQkFBSyxVQUFMLENBQWdCLElBQWhCLEVBQXNCLE9BQXRCLEVBQStCLFFBQS9CO0FBQ0EsaUJBQUssWUFBTCxDQUFrQixPQUFsQjtBQUNIOzs7cUNBRVksSyxFQUFPO0FBQ2hCLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxPQUFMLENBQWEsT0FBYixDQUFxQixPQUFPLEtBQVAsQ0FBckIsSUFBc0MsQ0FBdkQ7QUFDSDs7O2lDQUVRLEssRUFBTyxLLEVBQU8sUSxFQUFVO0FBQzdCLHVDQUFhLEtBQWI7QUFDQSxpQkFBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLGlCQUFLLFVBQUwsYUFBMEIsS0FBMUI7QUFDQSxpQkFBSyxVQUFMLEdBQWtCLEtBQWxCOztBQUVBLGdCQUFJLFFBQUosRUFBYztBQUNWLHFCQUFLLGNBQUw7QUFDSDtBQUNKOzs7bUNBRVUsSyxFQUFPLE8sRUFBUyxRLEVBQVU7QUFDakMsdUNBQWEsS0FBYjtBQUNBLGlCQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsaUJBQUssWUFBTCxZQUEyQixPQUEzQjtBQUNBLGlCQUFLLFlBQUwsR0FBb0IsT0FBcEI7QUFDQSxpQkFBSyxZQUFMLENBQWtCLE9BQWxCOztBQUVBLGdCQUFJLFFBQUosRUFBYztBQUNWLHFCQUFLLGNBQUw7QUFDSDtBQUNKOzs7a0NBRVMsSyxFQUFPLE0sRUFBUSxRLEVBQVU7QUFDL0IsdUNBQWEsS0FBYjtBQUNBLGlCQUFLLFFBQUwsR0FBZ0IsTUFBaEI7O0FBRUEsZ0JBQUksUUFBSixFQUFjO0FBQ1YscUJBQUssY0FBTDtBQUNIO0FBQ0o7Ozt5Q0FFZ0I7QUFDYixnQkFBSSxRQUFRLE9BQU8sS0FBSyxLQUFaLENBQVo7O0FBRUEsZ0JBQUksQ0FBQyxLQUFLLFFBQVYsRUFBb0I7QUFDaEIsd0JBQVEsS0FBSyxRQUFMLEtBQWtCLElBQWxCLEdBQXlCLFFBQVEsRUFBakMsR0FBc0MsS0FBOUM7OztBQUdBLG9CQUFJLEtBQUssUUFBTCxLQUFrQixJQUFsQixJQUEwQixVQUFVLEVBQXhDLEVBQTRDO0FBQ3hDLDRCQUFRLEVBQVI7QUFDSCxpQkFGRCxNQUVPLElBQUksS0FBSyxRQUFMLEtBQWtCLElBQWxCLElBQTBCLFVBQVUsRUFBeEMsRUFBNEM7QUFDL0MsNEJBQVEsQ0FBUjtBQUNIO0FBQ0o7O0FBRUQsZ0JBQUksUUFBUSx3QkFBUyxLQUFULENBQWUsS0FBZixFQUFzQixPQUF0QixDQUE4QixLQUFLLE9BQW5DLEVBQTRDLE9BQTVDLENBQW9ELENBQXBELENBQVo7QUFDQSxpQkFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQjtBQUNmLHVCQUFPLEtBRFE7QUFFZix5QkFBUyxLQUFLLE9BRkM7QUFHZiwwQkFBVSxLQUFLLFFBSEE7QUFJZixzQkFBTSxNQUFNLE1BQU4sRUFKUztBQUtmLHdCQUFRLEtBTE87QUFNZixzQkFBUyxLQUFLLEtBQWQsU0FBdUIsS0FBSyxPQUE1QixTQUF1QyxLQUFLO0FBTjdCLGFBQW5CO0FBUUEsaUJBQUssS0FBTCxDQUFXLGlCQUFYLENBQTZCLE1BQU0sTUFBTixFQUE3QjtBQUNIOzs7Ozs7bUNBR1UsSyxFQUFPO0FBQ2QsaUJBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxnQkFBSSxLQUFKLEVBQVc7QUFDUCxxQkFBSyxJQUFMLENBQVUsS0FBVixFQUFpQixLQUFqQjtBQUNIO0FBQ0o7Ozt5Q0FFZ0IsRSxFQUFJO0FBQ2pCLGlCQUFLLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDs7OzBDQUVpQixFLEVBQUk7QUFDbEIsaUJBQUssU0FBTCxHQUFpQixFQUFqQjtBQUNIOzs7OztBQW5IWSxxQixDQVhKLFU7aUVBQUEsVTtBQWlJTixJQUFNLGdFQUE0QixDQUFDLFVBQUQsQ0FBbEMiLCJmaWxlIjoiVGltZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuaW1wb3J0IHsgQ09NTU9OX0RJUkVDVElWRVMsIE5nQ29udHJvbCwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC9tb21lbnQnO1xuXG5pbXBvcnQgeyBzd2FsbG93RXZlbnQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tdGltZS1waWNrZXInLFxuICAgIGlucHV0czogW1xuICAgICAgICAnbWlsaXRhcnknXG4gICAgXSxcbiAgICBvdXRwdXRzOiBbXG4gICAgICAgICdvblNlbGVjdCdcbiAgICBdLFxuICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgQ09NTU9OX0RJUkVDVElWRVNcbiAgICBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaWdpdGFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlnaXRhbC0taW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRpZ2l0YWwtLWNsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaG91cnNcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLXRpbWUtcGlja2VyLWhvdXJzXCI+e3tob3Vyc319PC9zcGFuPjo8c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLXRpbWUtcGlja2VyLW1pbnV0ZXNcIj57e21pbnV0ZXN9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wtYmxvY2tcIiAqbmdJZj1cIiFtaWxpdGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgcGVyaW9kIG9mIE1FUklESUFOU1wiIGNsYXNzPVwiZGlnaXRhbC0tcGVyaW9kXCIgW2NsYXNzLmFjdGl2ZV09XCJtZXJpZGlhbj09cGVyaW9kXCIgKGNsaWNrKT1cInNldFBlcmlvZCgkZXZlbnQsIHBlcmlvZCwgdHJ1ZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwicGVyaW9kXCI+e3twZXJpb2R9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFuYWxvZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuYWxvZy0taW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW5hbG9nLS1mYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW5hbG9nLS1jZW50ZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW5hbG9nLS1oYW5kLS1ob3Vyc1wiIFtuZ0NsYXNzXT1cImhvdXJzQ2xhc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW5hbG9nLS1iYWxsXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW5hbG9nLS1oYW5kLS1taW51dGVzXCIgW25nQ2xhc3NdPVwibWludXRlc0NsYXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFuYWxvZy0tYmFsbFwiIFtuZ0NsYXNzXT1cIntiZXR3ZWVuOiBpbkJldHdlZW59XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuYWxvZy0taG91cnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IGhvdXIgb2YgSE9VUlNcIiBjbGFzcz1cImFuYWxvZy0taG91clwiIFtuZ0NsYXNzXT1cInthY3RpdmU6IGFjdGl2ZUhvdXIgPT0gaG91cn1cIiAoY2xpY2spPVwic2V0SG91cnMoJGV2ZW50LCBob3VyLCB0cnVlKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJob3VyXCI+e3tob3VyfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuYWxvZy0tbWludXRlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgbWludXRlIG9mIE1JTlVURVNcIiBjbGFzcz1cImFuYWxvZy0tbWludXRlXCIgW25nQ2xhc3NdPVwie2FjdGl2ZTogYWN0aXZlTWludXRlID09IG1pbnV0ZX1cIiAoY2xpY2spPVwic2V0TWludXRlcygkZXZlbnQsIG1pbnV0ZSwgdHJ1ZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwibWludXRlXCI+e3ttaW51dGV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5uZy11bnRvdWNoZWRdJzogJ21vZGVsLmNvbnRyb2w/LnVudG91Y2hlZCA9PSB0cnVlJyxcbiAgICAgICAgJ1tjbGFzcy5uZy10b3VjaGVkXSc6ICdtb2RlbC5jb250cm9sPy50b3VjaGVkID09IHRydWUnLFxuICAgICAgICAnW2NsYXNzLm5nLXByaXN0aW5lXSc6ICdtb2RlbC5jb250cm9sPy5wcmlzdGluZSA9PSB0cnVlJyxcbiAgICAgICAgJ1tjbGFzcy5uZy1kaXJ0eV0nOiAnbW9kZWwuY29udHJvbD8uZGlydHkgPT0gdHJ1ZScsXG4gICAgICAgICdbY2xhc3MubmctdmFsaWRdJzogJ21vZGVsLmNvbnRyb2w/LnZhbGlkID09IHRydWUnLFxuICAgICAgICAnW2NsYXNzLm5nLWludmFsaWRdJzogJ21vZGVsLmNvbnRyb2w/LnZhbGlkID09IGZhbHNlJyxcbiAgICAgICAgJ1tjbGFzcy5taWxpdGFyeV0nOiAnbWlsaXRhcnknXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBUaW1lUGlja2VyIHtcbiAgICBob3VycyA9IDEyO1xuICAgIG1pbnV0ZXMgPSAwO1xuICAgIHZhbHVlID0gbnVsbDtcbiAgICBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuICAgIG9uQ2hhbmdlID0gbnVsbDtcbiAgICBvblRvdWNoZWQgPSBudWxsO1xuXG4gICAgTUVSSURJQU5TID0gWydhbScsICdwbSddO1xuICAgIE1JTlVURVMgPSBbJzA1JywgJzEwJywgJzE1JywgJzIwJywgJzI1JywgJzMwJywgJzM1JywgJzQwJywgJzQ1JywgJzUwJywgJzU1JywgJzAwJ107XG5cbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBtb2RlbDpOZ0NvbnRyb2wpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsIHx8IG5ldyBOZ01vZGVsKCk7XG4gICAgICAgIHRoaXMubW9kZWwudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIFNldCB0aGUgaG91cnNcbiAgICAgICAgdGhpcy5IT1VSUyA9IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInXTtcbiAgICAgICAgaWYgKHRoaXMubWlsaXRhcnkpIHtcbiAgICAgICAgICAgIHRoaXMuSE9VUlMgPSBbJzAnLCAuLi50aGlzLkhPVVJTLCAnMTMnLCAnMTQnLCAnMTUnLCAnMTYnLCAnMTcnLCAnMTgnLCAnMTknLCAnMjAnLCAnMjEnLCAnMjInLCAnMjMnXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXQodGhpcy5tb2RlbC52YWx1ZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbml0KG1vbWVudCgpLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KHZhbHVlLCBkaXNwYXRjaCkge1xuICAgICAgICBsZXQgbW9tZW50VmFsdWUgPSBtb21lbnQodmFsdWUpO1xuICAgICAgICBsZXQgaG91cnMgPSBtb21lbnRWYWx1ZS5ob3VycygpO1xuICAgICAgICBsZXQgbWludXRlcyA9IG1vbWVudFZhbHVlLm1pbnV0ZXMoKTtcblxuICAgICAgICBpZiAoIXRoaXMubWlsaXRhcnkpIHtcbiAgICAgICAgICAgIHRoaXMubWVyaWRpYW4gPSBob3VycyA+PSAxMiA/ICdwbScgOiAnYW0nO1xuICAgICAgICAgICAgaG91cnMgPSBob3VycyAlIDEyO1xuICAgICAgICAgICAgaG91cnMgPSBob3VycyB8fCAxMjtcbiAgICAgICAgfVxuICAgICAgICBtaW51dGVzID0gbWludXRlcyA8IDEwID8gYDAke21pbnV0ZXN9YCA6IG1pbnV0ZXM7XG5cbiAgICAgICAgdGhpcy5zZXRIb3VycyhudWxsLCBob3VycywgZGlzcGF0Y2gpO1xuICAgICAgICB0aGlzLnNldE1pbnV0ZXMobnVsbCwgbWludXRlcywgZGlzcGF0Y2gpO1xuICAgICAgICB0aGlzLmNoZWNrQmV0d2VlbihtaW51dGVzKTtcbiAgICB9XG5cbiAgICBjaGVja0JldHdlZW4odmFsdWUpIHtcbiAgICAgICAgdGhpcy5pbkJldHdlZW4gPSB0aGlzLk1JTlVURVMuaW5kZXhPZihTdHJpbmcodmFsdWUpKSA8IDA7XG4gICAgfVxuXG4gICAgc2V0SG91cnMoZXZlbnQsIGhvdXJzLCBkaXNwYXRjaCkge1xuICAgICAgICBzd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgICAgICB0aGlzLmhvdXJzID0gaG91cnM7XG4gICAgICAgIHRoaXMuaG91cnNDbGFzcyA9IGBob3VyLSR7aG91cnN9YDtcbiAgICAgICAgdGhpcy5hY3RpdmVIb3VyID0gaG91cnM7XG5cbiAgICAgICAgaWYgKGRpc3BhdGNoKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRNaW51dGVzKGV2ZW50LCBtaW51dGVzLCBkaXNwYXRjaCkge1xuICAgICAgICBzd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgICAgICB0aGlzLm1pbnV0ZXMgPSBtaW51dGVzO1xuICAgICAgICB0aGlzLm1pbnV0ZXNDbGFzcyA9IGBtaW4tJHttaW51dGVzfWA7XG4gICAgICAgIHRoaXMuYWN0aXZlTWludXRlID0gbWludXRlcztcbiAgICAgICAgdGhpcy5jaGVja0JldHdlZW4obWludXRlcyk7XG5cbiAgICAgICAgaWYgKGRpc3BhdGNoKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQZXJpb2QoZXZlbnQsIHBlcmlvZCwgZGlzcGF0Y2gpIHtcbiAgICAgICAgc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgICAgdGhpcy5tZXJpZGlhbiA9IHBlcmlvZDtcblxuICAgICAgICBpZiAoZGlzcGF0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BhdGNoQ2hhbmdlKCkge1xuICAgICAgICBsZXQgaG91cnMgPSBOdW1iZXIodGhpcy5ob3Vycyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLm1pbGl0YXJ5KSB7XG4gICAgICAgICAgICBob3VycyA9IHRoaXMubWVyaWRpYW4gPT09ICdwbScgPyBob3VycyArIDEyIDogaG91cnM7XG5cbiAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgMTJcbiAgICAgICAgICAgIGlmICh0aGlzLm1lcmlkaWFuID09PSAncG0nICYmIGhvdXJzID09PSAyNCkge1xuICAgICAgICAgICAgICAgIGhvdXJzID0gMTI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWVyaWRpYW4gPT09ICdhbScgJiYgaG91cnMgPT09IDEyKSB7XG4gICAgICAgICAgICAgICAgaG91cnMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbHVlID0gbW9tZW50KCkuaG91cnMoaG91cnMpLm1pbnV0ZXModGhpcy5taW51dGVzKS5zZWNvbmRzKDApO1xuICAgICAgICB0aGlzLm9uU2VsZWN0Lm5leHQoe1xuICAgICAgICAgICAgaG91cnM6IGhvdXJzLFxuICAgICAgICAgICAgbWludXRlczogdGhpcy5taW51dGVzLFxuICAgICAgICAgICAgbWVyaWRpYW46IHRoaXMubWVyaWRpYW4sXG4gICAgICAgICAgICBkYXRlOiB2YWx1ZS50b0RhdGUoKSxcbiAgICAgICAgICAgIG1vbWVudDogdmFsdWUsXG4gICAgICAgICAgICB0ZXh0OiBgJHt0aGlzLmhvdXJzfToke3RoaXMubWludXRlc30gJHt0aGlzLm1lcmlkaWFufWBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubW9kZWwudmlld1RvTW9kZWxVcGRhdGUodmFsdWUudG9EYXRlKCkpO1xuICAgIH1cblxuICAgIC8vIFZhbHVlQWNjZXNzb3IgRnVuY3Rpb25zXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0KHZhbHVlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbikge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5PVk9fVElNRV9QSUNLRVJfRUxFTUVOVFMgPSBbVGltZVBpY2tlcl07XG4iXX0=

/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _TimePicker = __webpack_require__(468);
	
	Object.defineProperty(exports, 'NOVO_TIME_PICKER_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _TimePicker.NOVO_TIME_PICKER_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90aW1lcGlja2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O3VCQUFTLHlCIiwiZmlsZSI6InRpbWVwaWNrZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FzaWJpbGlhL0RvY3VtZW50cy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgTk9WT19USU1FX1BJQ0tFUl9FTEVNRU5UUyB9IGZyb20gJy4vdGltZS1waWNrZXIvVGltZVBpY2tlcic7XG4iXX0=

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Toast = __webpack_require__(471);
	
	Object.defineProperty(exports, 'NOVO_TOAST_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Toast.NOVO_TOAST_ELEMENTS;
	  }
	});
	Object.defineProperty(exports, 'NovoToast', {
	  enumerable: true,
	  get: function get() {
	    return _Toast.NovoToast;
	  }
	});
	
	var _ToastService = __webpack_require__(472);
	
	Object.defineProperty(exports, 'ToastService', {
	  enumerable: true,
	  get: function get() {
	    return _ToastService.ToastService;
	  }
	});
	Object.defineProperty(exports, 'TOAST_PROVIDERS', {
	  enumerable: true,
	  get: function get() {
	    return _ToastService.TOAST_PROVIDERS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90b2FzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztrQkFBUyxtQjs7Ozs7O2tCQUNBLFM7Ozs7Ozs7Ozt5QkFDQSxZOzs7Ozs7eUJBQWMsZSIsImZpbGUiOiJ0b2FzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBOT1ZPX1RPQVNUX0VMRU1FTlRTIH0gZnJvbSAnLi90b2FzdC9Ub2FzdCc7XG5leHBvcnQgeyBOb3ZvVG9hc3QgfSBmcm9tICcuL3RvYXN0L1RvYXN0JztcbmV4cG9ydCB7IFRvYXN0U2VydmljZSwgVE9BU1RfUFJPVklERVJTIH0gZnJvbSAnLi90b2FzdC9Ub2FzdFNlcnZpY2UnO1xuIl19

/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_TOAST_ELEMENTS = exports.NovoToast = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NovoToast = exports.NovoToast = (_dec = (0, _core.Component)({
	    selector: 'novo-toast',
	    inputs: ['theme', 'icon', 'title', 'message'],
	    host: {
	        '[class]': 'alertTheme',
	        '[class.show]': 'show',
	        '[class.animate]': 'animate',
	        '[class.embedded]': 'embedded',
	        '(click)': 'clickHandler($event)'
	    },
	    template: '\n        <div class="toast-icon">\n            <i [ngClass]="iconClass"></i>\n        </div>\n        <div class="toast-content">\n            <h5 *ngIf="title">{{title}}</h5>\n            <p *ngIf="message" [class.message-only]="!title">{{message}}</p>\n        </div>\n    ',
	    directives: [_common.CORE_DIRECTIVES]
	}), _dec(_class = function () {
	    function NovoToast(element) {
	        _classCallCheck(this, NovoToast);
	
	        this.show = false;
	        this.animate = false;
	        this.parent = null;
	        this.ref = element;
	    }
	
	    _createClass(NovoToast, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            if (!this.launched) {
	                // clear position and time
	                this.position = null;
	                this.time = null;
	
	                // set icon and styling
	                this.iconClass = 'bhi-' + this.icon;
	                this.alertTheme = this.theme + ' toast-container embedded';
	            }
	        }
	    }, {
	        key: 'clickHandler',
	        value: function clickHandler(event) {
	            if (event) {
	                event.stopPropagation();
	                event.preventDefault();
	            }
	            if (this.parent) {
	                this.parent.hide(this);
	            }
	        }
	    }]);
	
	    return NovoToast;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_core.ElementRef], NovoToast);
	var NOVO_TOAST_ELEMENTS = exports.NOVO_TOAST_ELEMENTS = [NovoToast];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90b2FzdC9Ub2FzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0lBdUJhLFMsV0FBQSxTLFdBckJaLHFCQUFVO0FBQ1AsY0FBVSxZQURIO0FBRVAsWUFBUSxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLE9BQWxCLEVBQTJCLFNBQTNCLENBRkQ7QUFHUCxVQUFNO0FBQ0YsbUJBQVcsWUFEVDtBQUVGLHdCQUFnQixNQUZkO0FBR0YsMkJBQW1CLFNBSGpCO0FBSUYsNEJBQW9CLFVBSmxCO0FBS0YsbUJBQVc7QUFMVCxLQUhDO0FBVVAsb1NBVk87QUFtQlAsZ0JBQVk7QUFuQkwsQ0FBVixDO0FBc0JHLHVCQUFZLE9BQVosRUFBaUM7QUFBQTs7QUFDN0IsYUFBSyxJQUFMLEdBQVksS0FBWjtBQUNBLGFBQUssT0FBTCxHQUFlLEtBQWY7QUFDQSxhQUFLLE1BQUwsR0FBYyxJQUFkO0FBQ0EsYUFBSyxHQUFMLEdBQVcsT0FBWDtBQUNIOzs7O21DQUVVO0FBQ1AsZ0JBQUksQ0FBQyxLQUFLLFFBQVYsRUFBb0I7O0FBRWhCLHFCQUFLLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxxQkFBSyxJQUFMLEdBQVksSUFBWjs7O0FBR0EscUJBQUssU0FBTCxZQUF3QixLQUFLLElBQTdCO0FBQ0EscUJBQUssVUFBTCxHQUFxQixLQUFLLEtBQTFCO0FBQ0g7QUFDSjs7O3FDQUVZLEssRUFBTztBQUNoQixnQkFBSSxLQUFKLEVBQVc7QUFDUCxzQkFBTSxlQUFOO0FBQ0Esc0JBQU0sY0FBTjtBQUNIO0FBQ0QsZ0JBQUksS0FBSyxNQUFULEVBQWlCO0FBQ2IscUJBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsSUFBakI7QUFDSDtBQUNKOzs7OztnRUE1QlEsUztBQStCTixJQUFNLG9EQUFzQixDQUFDLFNBQUQsQ0FBNUIiLCJmaWxlIjoiVG9hc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FzaWJpbGlhL0RvY3VtZW50cy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tdG9hc3QnLFxuICAgIGlucHV0czogWyd0aGVtZScsICdpY29uJywgJ3RpdGxlJywgJ21lc3NhZ2UnXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3NdJzogJ2FsZXJ0VGhlbWUnLFxuICAgICAgICAnW2NsYXNzLnNob3ddJzogJ3Nob3cnLFxuICAgICAgICAnW2NsYXNzLmFuaW1hdGVdJzogJ2FuaW1hdGUnLFxuICAgICAgICAnW2NsYXNzLmVtYmVkZGVkXSc6ICdlbWJlZGRlZCcsXG4gICAgICAgICcoY2xpY2spJzogJ2NsaWNrSGFuZGxlcigkZXZlbnQpJ1xuICAgIH0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvYXN0LWljb25cIj5cbiAgICAgICAgICAgIDxpIFtuZ0NsYXNzXT1cImljb25DbGFzc1wiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1jb250ZW50XCI+XG4gICAgICAgICAgICA8aDUgKm5nSWY9XCJ0aXRsZVwiPnt7dGl0bGV9fTwvaDU+XG4gICAgICAgICAgICA8cCAqbmdJZj1cIm1lc3NhZ2VcIiBbY2xhc3MubWVzc2FnZS1vbmx5XT1cIiF0aXRsZVwiPnt7bWVzc2FnZX19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Ub2FzdCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWYgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMubGF1bmNoZWQpIHtcbiAgICAgICAgICAgIC8vIGNsZWFyIHBvc2l0aW9uIGFuZCB0aW1lXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIHNldCBpY29uIGFuZCBzdHlsaW5nXG4gICAgICAgICAgICB0aGlzLmljb25DbGFzcyA9IGBiaGktJHt0aGlzLmljb259YDtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRUaGVtZSA9IGAke3RoaXMudGhlbWV9IHRvYXN0LWNvbnRhaW5lciBlbWJlZGRlZGA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5oaWRlKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgTk9WT19UT0FTVF9FTEVNRU5UUyA9IFtOb3ZvVG9hc3RdO1xuIl19

/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TOAST_PROVIDERS = exports.ToastService = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ToastService = exports.ToastService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
	    function ToastService(loader) {
	        _classCallCheck(this, ToastService);
	
	        this.loader = loader;
	        this.references = [];
	
	        this.positions = ['fixedTop', 'fixedBottom', 'growlTopLeft', 'growlTopRight', 'growlBottomLeft', 'growlBottomRight'];
	
	        this.themes = ['default', 'success', 'info', 'warning', 'danger'];
	
	        this.icons = {
	            default: 'bell',
	            success: 'check',
	            info: 'info',
	            warning: 'warning',
	            danger: 'remove'
	        };
	
	        this.defaults = {
	            hideDelay: 3500,
	            position: 'growlTopRight',
	            theme: 'default'
	        };
	    }
	
	    _createClass(ToastService, [{
	        key: 'alert',
	        value: function alert(component, options) {
	            var _this = this;
	
	            return new Promise(function (resolve) {
	                if (!_this._defaultContainer) {
	                    // TODO alert
	                }
	                _this.loader.loadNextToLocation(component, _this._defaultContainer).then(function (toast) {
	                    _this.references.push(toast);
	                    _this.handleAlert(toast.instance, options);
	                    resolve(toast);
	                });
	            });
	        }
	    }, {
	        key: 'isVisible',
	        value: function isVisible(toast) {
	            return toast.show;
	        }
	    }, {
	        key: 'hide',
	        value: function hide(toast) {
	            var _this2 = this;
	
	            toast.animate = false;
	            setTimeout(function () {
	                toast.show = false;
	                var REF = _this2.references.filter(function (x) {
	                    return x.instance === toast;
	                })[0];
	                if (REF) {
	                    _this2.references.splice(_this2.references.indexOf(REF), 1);
	                    REF.destroy();
	                }
	            }, 300);
	        }
	    }, {
	        key: 'handleAlert',
	        value: function handleAlert(toast, options) {
	            var _this3 = this;
	
	            this.setToastOnSession(toast, options);
	            setTimeout(function () {
	                _this3.show(toast);
	            }, 20);
	            this.toastTimer(toast);
	        }
	    }, {
	        key: 'setToastOnSession',
	        value: function setToastOnSession(toast, opts) {
	            var OPTIONS = (typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object' ? opts : {};
	
	            toast.parent = this;
	            toast.title = OPTIONS.title || '';
	            toast.message = OPTIONS.message || '';
	            toast.hideDelay = OPTIONS.hideDelay || this.defaults.hideDelay;
	
	            var CUSTOM_CLASS = OPTIONS.customClass || '';
	            var ALERT_STYLE = OPTIONS.theme || this.defaults.theme;
	            var ALERT_POSITION = OPTIONS.position || this.defaults.position;
	            var ALERT_ICON = OPTIONS.icon || this.icons.default;
	
	            toast.iconClass = 'bhi-' + ALERT_ICON;
	            toast.launched = true;
	            toast.alertTheme = ALERT_STYLE + ' ' + ALERT_POSITION + ' ' + CUSTOM_CLASS + ' toast-container launched';
	        }
	    }, {
	        key: 'show',
	        value: function show(toast) {
	            toast.show = true;
	            setTimeout(addClass, 25);
	            /**
	             * Adds animate class to be called after a timeout
	             **/
	            function addClass() {
	                toast.animate = true;
	            }
	        }
	    }, {
	        key: 'toastTimer',
	        value: function toastTimer(toast) {
	            var _this4 = this;
	
	            if (toast.hideDelay < 0) return;
	            setTimeout(function () {
	                _this4.hide(toast);
	            }, toast.hideDelay);
	        }
	    }, {
	        key: 'defaultContainer',
	        set: function set(view) {
	            this._defaultContainer = view;
	        }
	    }]);
	
	    return ToastService;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_core.DynamicComponentLoader], ToastService);
	var TOAST_PROVIDERS = exports.TOAST_PROVIDERS = [new _core.Provider(ToastService, { useClass: ToastService })];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90b2FzdC9Ub2FzdFNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0lBR2EsWSxXQUFBLFksV0FEWix1QjtBQUVHLDBCQUFZLE1BQVosRUFBMkM7QUFBQTs7QUFDdkMsYUFBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLGFBQUssVUFBTCxHQUFrQixFQUFsQjs7QUFFQSxhQUFLLFNBQUwsR0FBaUIsQ0FDYixVQURhLEVBRWIsYUFGYSxFQUdiLGNBSGEsRUFJYixlQUphLEVBS2IsaUJBTGEsRUFNYixrQkFOYSxDQUFqQjs7QUFTQSxhQUFLLE1BQUwsR0FBYyxDQUNWLFNBRFUsRUFFVixTQUZVLEVBR1YsTUFIVSxFQUlWLFNBSlUsRUFLVixRQUxVLENBQWQ7O0FBUUEsYUFBSyxLQUFMLEdBQWE7QUFDVCxxQkFBUyxNQURBO0FBRVQscUJBQVMsT0FGQTtBQUdULGtCQUFNLE1BSEc7QUFJVCxxQkFBUyxTQUpBO0FBS1Qsb0JBQVE7QUFMQyxTQUFiOztBQVFBLGFBQUssUUFBTCxHQUFnQjtBQUNaLHVCQUFXLElBREM7QUFFWixzQkFBVSxlQUZFO0FBR1osbUJBQU87QUFISyxTQUFoQjtBQUtIOzs7OzhCQU1LLFMsRUFBVyxPLEVBQVM7QUFBQTs7QUFDdEIsbUJBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQWE7QUFDNUIsb0JBQUksQ0FBQyxNQUFLLGlCQUFWLEVBQTZCOztBQUU1QjtBQUNELHNCQUFLLE1BQUwsQ0FBWSxrQkFBWixDQUErQixTQUEvQixFQUEwQyxNQUFLLGlCQUEvQyxFQUFrRSxJQUFsRSxDQUF1RSxpQkFBUztBQUM1RSwwQkFBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLEtBQXJCO0FBQ0EsMEJBQUssV0FBTCxDQUFpQixNQUFNLFFBQXZCLEVBQWlDLE9BQWpDO0FBQ0EsNEJBQVEsS0FBUjtBQUNILGlCQUpEO0FBS0gsYUFUTSxDQUFQO0FBVUg7OztrQ0FFUyxLLEVBQU87QUFDYixtQkFBTyxNQUFNLElBQWI7QUFDSDs7OzZCQUVJLEssRUFBTztBQUFBOztBQUNSLGtCQUFNLE9BQU4sR0FBZ0IsS0FBaEI7QUFDQSx1QkFBVyxZQUFNO0FBQ2Isc0JBQU0sSUFBTixHQUFhLEtBQWI7QUFDQSxvQkFBTSxNQUFNLE9BQUssVUFBTCxDQUFnQixNQUFoQixDQUF1QjtBQUFBLDJCQUFLLEVBQUUsUUFBRixLQUFlLEtBQXBCO0FBQUEsaUJBQXZCLEVBQWtELENBQWxELENBQVo7QUFDQSxvQkFBSSxHQUFKLEVBQVM7QUFDTCwyQkFBSyxVQUFMLENBQWdCLE1BQWhCLENBQXVCLE9BQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixHQUF4QixDQUF2QixFQUFxRCxDQUFyRDtBQUNBLHdCQUFJLE9BQUo7QUFDSDtBQUNKLGFBUEQsRUFPRyxHQVBIO0FBUUg7OztvQ0FFVyxLLEVBQU8sTyxFQUFTO0FBQUE7O0FBQ3hCLGlCQUFLLGlCQUFMLENBQXVCLEtBQXZCLEVBQThCLE9BQTlCO0FBQ0EsdUJBQVcsWUFBTTtBQUNiLHVCQUFLLElBQUwsQ0FBVSxLQUFWO0FBQ0gsYUFGRCxFQUVHLEVBRkg7QUFHQSxpQkFBSyxVQUFMLENBQWdCLEtBQWhCO0FBQ0g7OzswQ0FFaUIsSyxFQUFPLEksRUFBTTtBQUMzQixnQkFBTSxVQUFXLFFBQU8sSUFBUCx5Q0FBTyxJQUFQLE9BQWdCLFFBQWpCLEdBQTZCLElBQTdCLEdBQW9DLEVBQXBEOztBQUVBLGtCQUFNLE1BQU4sR0FBZSxJQUFmO0FBQ0Esa0JBQU0sS0FBTixHQUFjLFFBQVEsS0FBUixJQUFpQixFQUEvQjtBQUNBLGtCQUFNLE9BQU4sR0FBZ0IsUUFBUSxPQUFSLElBQW1CLEVBQW5DO0FBQ0Esa0JBQU0sU0FBTixHQUFrQixRQUFRLFNBQVIsSUFBcUIsS0FBSyxRQUFMLENBQWMsU0FBckQ7O0FBRUEsZ0JBQU0sZUFBZSxRQUFRLFdBQVIsSUFBdUIsRUFBNUM7QUFDQSxnQkFBTSxjQUFjLFFBQVEsS0FBUixJQUFpQixLQUFLLFFBQUwsQ0FBYyxLQUFuRDtBQUNBLGdCQUFNLGlCQUFpQixRQUFRLFFBQVIsSUFBb0IsS0FBSyxRQUFMLENBQWMsUUFBekQ7QUFDQSxnQkFBTSxhQUFhLFFBQVEsSUFBUixJQUFnQixLQUFLLEtBQUwsQ0FBVyxPQUE5Qzs7QUFFQSxrQkFBTSxTQUFOLFlBQXlCLFVBQXpCO0FBQ0Esa0JBQU0sUUFBTixHQUFpQixJQUFqQjtBQUNBLGtCQUFNLFVBQU4sR0FBc0IsV0FBdEIsU0FBcUMsY0FBckMsU0FBdUQsWUFBdkQ7QUFDSDs7OzZCQUVJLEssRUFBTztBQUNSLGtCQUFNLElBQU4sR0FBYSxJQUFiO0FBQ0EsdUJBQVcsUUFBWCxFQUFxQixFQUFyQjs7OztBQUlBLHFCQUFTLFFBQVQsR0FBb0I7QUFDaEIsc0JBQU0sT0FBTixHQUFnQixJQUFoQjtBQUNIO0FBQ0o7OzttQ0FFVSxLLEVBQU87QUFBQTs7QUFDZCxnQkFBSSxNQUFNLFNBQU4sR0FBa0IsQ0FBdEIsRUFBeUI7QUFDekIsdUJBQVcsWUFBTTtBQUNiLHVCQUFLLElBQUwsQ0FBVSxLQUFWO0FBQ0gsYUFGRCxFQUVHLE1BQU0sU0FGVDtBQUdIOzs7MEJBM0VvQixJLEVBQU07QUFDdkIsaUJBQUssaUJBQUwsR0FBeUIsSUFBekI7QUFDSDs7Ozs7NEVBdkNRLFk7QUFtSE4sSUFBTSw0Q0FBa0IsQ0FDM0IsbUJBQWEsWUFBYixFQUEyQixFQUFFLFVBQVUsWUFBWixFQUEzQixDQUQyQixDQUF4QiIsImZpbGUiOiJUb2FzdFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FzaWJpbGlhL0RvY3VtZW50cy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIsIEluamVjdGFibGUsIER5bmFtaWNDb21wb25lbnRMb2FkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XG4gICAgY29uc3RydWN0b3IobG9hZGVyOkR5bmFtaWNDb21wb25lbnRMb2FkZXIpIHtcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBsb2FkZXI7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlcyA9IFtdO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gW1xuICAgICAgICAgICAgJ2ZpeGVkVG9wJyxcbiAgICAgICAgICAgICdmaXhlZEJvdHRvbScsXG4gICAgICAgICAgICAnZ3Jvd2xUb3BMZWZ0JyxcbiAgICAgICAgICAgICdncm93bFRvcFJpZ2h0JyxcbiAgICAgICAgICAgICdncm93bEJvdHRvbUxlZnQnLFxuICAgICAgICAgICAgJ2dyb3dsQm90dG9tUmlnaHQnXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy50aGVtZXMgPSBbXG4gICAgICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICAgICAnc3VjY2VzcycsXG4gICAgICAgICAgICAnaW5mbycsXG4gICAgICAgICAgICAnd2FybmluZycsXG4gICAgICAgICAgICAnZGFuZ2VyJ1xuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuaWNvbnMgPSB7XG4gICAgICAgICAgICBkZWZhdWx0OiAnYmVsbCcsXG4gICAgICAgICAgICBzdWNjZXNzOiAnY2hlY2snLFxuICAgICAgICAgICAgaW5mbzogJ2luZm8nLFxuICAgICAgICAgICAgd2FybmluZzogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgZGFuZ2VyOiAncmVtb3ZlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBoaWRlRGVsYXk6IDM1MDAsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2dyb3dsVG9wUmlnaHQnLFxuICAgICAgICAgICAgdGhlbWU6ICdkZWZhdWx0J1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNldCBkZWZhdWx0Q29udGFpbmVyKHZpZXcpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdENvbnRhaW5lciA9IHZpZXc7XG4gICAgfVxuXG4gICAgYWxlcnQoY29tcG9uZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9kZWZhdWx0Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETyBhbGVydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2FkZXIubG9hZE5leHRUb0xvY2F0aW9uKGNvbXBvbmVudCwgdGhpcy5fZGVmYXVsdENvbnRhaW5lcikudGhlbih0b2FzdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2VzLnB1c2godG9hc3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQWxlcnQodG9hc3QuaW5zdGFuY2UsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodG9hc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzVmlzaWJsZSh0b2FzdCkge1xuICAgICAgICByZXR1cm4gdG9hc3Quc2hvdztcbiAgICB9XG5cbiAgICBoaWRlKHRvYXN0KSB7XG4gICAgICAgIHRvYXN0LmFuaW1hdGUgPSBmYWxzZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0b2FzdC5zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBSRUYgPSB0aGlzLnJlZmVyZW5jZXMuZmlsdGVyKHggPT4geC5pbnN0YW5jZSA9PT0gdG9hc3QpWzBdO1xuICAgICAgICAgICAgaWYgKFJFRikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlcy5zcGxpY2UodGhpcy5yZWZlcmVuY2VzLmluZGV4T2YoUkVGKSwgMSk7XG4gICAgICAgICAgICAgICAgUkVGLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICBoYW5kbGVBbGVydCh0b2FzdCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnNldFRvYXN0T25TZXNzaW9uKHRvYXN0LCBvcHRpb25zKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3codG9hc3QpO1xuICAgICAgICB9LCAyMCk7XG4gICAgICAgIHRoaXMudG9hc3RUaW1lcih0b2FzdCk7XG4gICAgfVxuXG4gICAgc2V0VG9hc3RPblNlc3Npb24odG9hc3QsIG9wdHMpIHtcbiAgICAgICAgY29uc3QgT1BUSU9OUyA9ICh0eXBlb2Ygb3B0cyA9PT0gJ29iamVjdCcpID8gb3B0cyA6IHt9O1xuXG4gICAgICAgIHRvYXN0LnBhcmVudCA9IHRoaXM7XG4gICAgICAgIHRvYXN0LnRpdGxlID0gT1BUSU9OUy50aXRsZSB8fCAnJztcbiAgICAgICAgdG9hc3QubWVzc2FnZSA9IE9QVElPTlMubWVzc2FnZSB8fCAnJztcbiAgICAgICAgdG9hc3QuaGlkZURlbGF5ID0gT1BUSU9OUy5oaWRlRGVsYXkgfHwgdGhpcy5kZWZhdWx0cy5oaWRlRGVsYXk7XG5cbiAgICAgICAgY29uc3QgQ1VTVE9NX0NMQVNTID0gT1BUSU9OUy5jdXN0b21DbGFzcyB8fCAnJztcbiAgICAgICAgY29uc3QgQUxFUlRfU1RZTEUgPSBPUFRJT05TLnRoZW1lIHx8IHRoaXMuZGVmYXVsdHMudGhlbWU7XG4gICAgICAgIGNvbnN0IEFMRVJUX1BPU0lUSU9OID0gT1BUSU9OUy5wb3NpdGlvbiB8fCB0aGlzLmRlZmF1bHRzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBBTEVSVF9JQ09OID0gT1BUSU9OUy5pY29uIHx8IHRoaXMuaWNvbnMuZGVmYXVsdDtcblxuICAgICAgICB0b2FzdC5pY29uQ2xhc3MgPSBgYmhpLSR7QUxFUlRfSUNPTn1gO1xuICAgICAgICB0b2FzdC5sYXVuY2hlZCA9IHRydWU7XG4gICAgICAgIHRvYXN0LmFsZXJ0VGhlbWUgPSBgJHtBTEVSVF9TVFlMRX0gJHtBTEVSVF9QT1NJVElPTn0gJHtDVVNUT01fQ0xBU1N9IHRvYXN0LWNvbnRhaW5lciBsYXVuY2hlZGA7XG4gICAgfVxuXG4gICAgc2hvdyh0b2FzdCkge1xuICAgICAgICB0b2FzdC5zaG93ID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dChhZGRDbGFzcywgMjUpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyBhbmltYXRlIGNsYXNzIHRvIGJlIGNhbGxlZCBhZnRlciBhIHRpbWVvdXRcbiAgICAgICAgICoqL1xuICAgICAgICBmdW5jdGlvbiBhZGRDbGFzcygpIHtcbiAgICAgICAgICAgIHRvYXN0LmFuaW1hdGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9hc3RUaW1lcih0b2FzdCkge1xuICAgICAgICBpZiAodG9hc3QuaGlkZURlbGF5IDwgMCkgcmV0dXJuO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSh0b2FzdCk7XG4gICAgICAgIH0sIHRvYXN0LmhpZGVEZWxheSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgVE9BU1RfUFJPVklERVJTID0gW1xuICAgIG5ldyBQcm92aWRlcihUb2FzdFNlcnZpY2UsIHsgdXNlQ2xhc3M6IFRvYXN0U2VydmljZSB9KVxuXTtcblxuIl19

/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(474);
	
	Object.defineProperty(exports, 'NOVO_TOOLTIP_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Tooltip.NOVO_TOOLTIP_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90b29sdGlwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O29CQUFTLHFCIiwiZmlsZSI6InRvb2x0aXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FzaWJpbGlhL0RvY3VtZW50cy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgTk9WT19UT09MVElQX0VMRU1FTlRTIH0gZnJvbSAnLi90b29sdGlwL1Rvb2x0aXAnO1xuIl19

/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_TOOLTIP_ELEMENTS = exports.Tooltip = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Tooltip = exports.Tooltip = (_dec = (0, _core.Directive)({
	    selector: '[tooltip]',
	    properties: ['tooltip:tooltip', 'always:tooltipAlways', 'rounded:tooltipRounded', 'noAnimate:tooltipNoAnimate', 'bounce:tooltipBounce', 'type:tooltipType', 'position:tooltipPosition'],
	    host: {
	        '[class.hint--top]': 'isPosition("top")',
	        '[class.hint--left]': 'isPosition("left")',
	        '[class.hint--right]': 'isPosition("right")',
	        '[class.hint--bottom]': 'isPosition("bottom")',
	        '[class.hint--error]': 'isType("error")',
	        '[class.hint--info]': 'isType("info")',
	        '[class.hint--warning]': 'isType("warning")',
	        '[class.hint--success]': 'isType("success")',
	        '[class.hint--always]': 'always',
	        '[class.hint--rounded]': 'rounded',
	        '[class.hint--no-animate]': 'noAnimate',
	        '[class.hint--bounce]': 'bounce',
	        '[attr.data-hint]': 'tooltip'
	    }
	}), _dec(_class = function () {
	    function Tooltip() {
	        _classCallCheck(this, Tooltip);
	    }
	
	    _createClass(Tooltip, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            if (!this.position) {
	                this.position = 'top';
	            }
	        }
	    }, {
	        key: 'isPosition',
	        value: function isPosition(position) {
	            return position.toLowerCase() === (this.position || '').toLowerCase();
	        }
	    }, {
	        key: 'isType',
	        value: function isType(type) {
	            return type.toLowerCase() === (this.type || '').toLowerCase();
	        }
	    }]);
	
	    return Tooltip;
	}()) || _class);
	var NOVO_TOOLTIP_ELEMENTS = exports.NOVO_TOOLTIP_ELEMENTS = [Tooltip];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90b29sdGlwL1Rvb2x0aXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztJQTZCYSxPLFdBQUEsTyxXQTNCWixxQkFBVTtBQUNQLGNBQVUsV0FESDtBQUVQLGdCQUFZLENBQ1IsaUJBRFEsRUFFUixzQkFGUSxFQUdSLHdCQUhRLEVBSVIsNEJBSlEsRUFLUixzQkFMUSxFQU1SLGtCQU5RLEVBT1IsMEJBUFEsQ0FGTDtBQVdQLFVBQU07QUFDRiw2QkFBcUIsbUJBRG5CO0FBRUYsOEJBQXNCLG9CQUZwQjtBQUdGLCtCQUF1QixxQkFIckI7QUFJRixnQ0FBd0Isc0JBSnRCO0FBS0YsK0JBQXVCLGlCQUxyQjtBQU1GLDhCQUFzQixnQkFOcEI7QUFPRixpQ0FBeUIsbUJBUHZCO0FBUUYsaUNBQXlCLG1CQVJ2QjtBQVNGLGdDQUF3QixRQVR0QjtBQVVGLGlDQUF5QixTQVZ2QjtBQVdGLG9DQUE0QixXQVgxQjtBQVlGLGdDQUF3QixRQVp0QjtBQWFGLDRCQUFvQjtBQWJsQjtBQVhDLENBQVYsQzs7Ozs7OzttQ0E0QmM7QUFDUCxnQkFBSSxDQUFDLEtBQUssUUFBVixFQUFvQjtBQUNoQixxQkFBSyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0g7QUFDSjs7O21DQUVVLFEsRUFBVTtBQUNqQixtQkFBTyxTQUFTLFdBQVQsT0FBMkIsQ0FBQyxLQUFLLFFBQUwsSUFBaUIsRUFBbEIsRUFBc0IsV0FBdEIsRUFBbEM7QUFDSDs7OytCQUVNLEksRUFBTTtBQUNULG1CQUFPLEtBQUssV0FBTCxPQUF1QixDQUFDLEtBQUssSUFBTCxJQUFhLEVBQWQsRUFBa0IsV0FBbEIsRUFBOUI7QUFDSDs7Ozs7QUFHRSxJQUFNLHdEQUF3QixDQUFDLE9BQUQsQ0FBOUIiLCJmaWxlIjoiVG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdG9vbHRpcF0nLFxuICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICAgJ3Rvb2x0aXA6dG9vbHRpcCcsXG4gICAgICAgICdhbHdheXM6dG9vbHRpcEFsd2F5cycsXG4gICAgICAgICdyb3VuZGVkOnRvb2x0aXBSb3VuZGVkJyxcbiAgICAgICAgJ25vQW5pbWF0ZTp0b29sdGlwTm9BbmltYXRlJyxcbiAgICAgICAgJ2JvdW5jZTp0b29sdGlwQm91bmNlJyxcbiAgICAgICAgJ3R5cGU6dG9vbHRpcFR5cGUnLFxuICAgICAgICAncG9zaXRpb246dG9vbHRpcFBvc2l0aW9uJ1xuICAgIF0sXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzLmhpbnQtLXRvcF0nOiAnaXNQb3NpdGlvbihcInRvcFwiKScsXG4gICAgICAgICdbY2xhc3MuaGludC0tbGVmdF0nOiAnaXNQb3NpdGlvbihcImxlZnRcIiknLFxuICAgICAgICAnW2NsYXNzLmhpbnQtLXJpZ2h0XSc6ICdpc1Bvc2l0aW9uKFwicmlnaHRcIiknLFxuICAgICAgICAnW2NsYXNzLmhpbnQtLWJvdHRvbV0nOiAnaXNQb3NpdGlvbihcImJvdHRvbVwiKScsXG4gICAgICAgICdbY2xhc3MuaGludC0tZXJyb3JdJzogJ2lzVHlwZShcImVycm9yXCIpJyxcbiAgICAgICAgJ1tjbGFzcy5oaW50LS1pbmZvXSc6ICdpc1R5cGUoXCJpbmZvXCIpJyxcbiAgICAgICAgJ1tjbGFzcy5oaW50LS13YXJuaW5nXSc6ICdpc1R5cGUoXCJ3YXJuaW5nXCIpJyxcbiAgICAgICAgJ1tjbGFzcy5oaW50LS1zdWNjZXNzXSc6ICdpc1R5cGUoXCJzdWNjZXNzXCIpJyxcbiAgICAgICAgJ1tjbGFzcy5oaW50LS1hbHdheXNdJzogJ2Fsd2F5cycsXG4gICAgICAgICdbY2xhc3MuaGludC0tcm91bmRlZF0nOiAncm91bmRlZCcsXG4gICAgICAgICdbY2xhc3MuaGludC0tbm8tYW5pbWF0ZV0nOiAnbm9BbmltYXRlJyxcbiAgICAgICAgJ1tjbGFzcy5oaW50LS1ib3VuY2VdJzogJ2JvdW5jZScsXG4gICAgICAgICdbYXR0ci5kYXRhLWhpbnRdJzogJ3Rvb2x0aXAnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwIHtcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gJ3RvcCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1Bvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbi50b0xvd2VyQ2FzZSgpID09PSAodGhpcy5wb3NpdGlvbiB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpc1R5cGUodHlwZSkge1xuICAgICAgICByZXR1cm4gdHlwZS50b0xvd2VyQ2FzZSgpID09PSAodGhpcy50eXBlIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5PVk9fVE9PTFRJUF9FTEVNRU5UUyA9IFtUb29sdGlwXTtcbiJdfQ==

/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PluralPipe = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _dec2, _class;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _core = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Rule storage - pluralize and singularize need to be run sequentially,
	// while other rules can be optimized using an object for instant lookups.
	var pluralRules = [];
	var singularRules = [];
	var uncountables = {};
	var irregularPlurals = {};
	var irregularSingles = {};
	
	/**
	 * Title case a string.
	 * @param {string} str
	 * @return {string}
	 */
	function toTitleCase(str) {
	    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
	}
	
	/**
	 * Sanitize a pluralization rule to a usable regular expression.
	 * @param {(RegExp|string)} rule
	 * @return {RegExp}
	 */
	function sanitizeRule(rule) {
	    if (typeof rule === 'string') {
	        return new RegExp('^' + rule + '$', 'i'); // eslint-disable-line
	    }
	    return rule;
	}
	
	/**
	 * Pass in a word token to produce a function that can replicate the case on
	 * another word.
	 * @param {string} word
	 * @param {string} token
	 * @return {String}
	 */
	function restoreCase(word, token) {
	    // Upper cased words. E.g. "HELLO".
	    if (word === word.toUpperCase()) {
	        return token.toUpperCase();
	    }
	
	    // Title cased words. E.g. "Title".
	    if (word[0] === word[0].toUpperCase()) {
	        return toTitleCase(token);
	    }
	
	    // Lower cased words. E.g. "test".
	    return token.toLowerCase();
	}
	
	/**
	 * Interpolate a regexp string.
	 * @param {string} str
	 * @param {Array} args
	 * @return {string}
	 */
	function interpolate(str, args) {
	    return str.replace(/\$(\d{1,2})/g, function (match, index) {
	        return args[index] || '';
	    });
	}
	
	/**
	 * Sanitize a word by passing in the word and sanitization rules.
	 * @param  {String}   token
	 * @param  {String}   word
	 * @param  {Array}    collection
	 * @return {String}
	 */
	function sanitizeWord(token, word, collection) {
	    // Empty string or doesn't need fixing.
	    if (!token.length || uncountables.hasOwnProperty(token)) {
	        return word;
	    }
	
	    var len = collection.length;
	    // Iterate over the sanitization rules and use the first one to match.
	
	    var _loop = function _loop() {
	        var rule = collection[len];
	        // If the rule passes, return the replacement.
	        if (rule[0].test(word)) {
	            return {
	                v: word.replace(rule[0], function (match, index, words) {
	                    var result = interpolate(rule[1], [match, index, words]);
	                    if (match === '') {
	                        return restoreCase(words[index - 1], result);
	                    }
	                    return restoreCase(match, result);
	                })
	            };
	        }
	    };
	
	    while (len--) {
	        var _ret = _loop();
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	    return word;
	}
	
	/**
	 * Replace a word with the updated word.
	 * @param {Object} replaceMap
	 * @param {Object} keepMap
	 * @param {Array} rules
	 * @return {Function}
	 */
	function replaceWord(replaceMap, keepMap, rules) {
	    return function (word) {
	        // Get the correct token and case restoration functions.
	        var token = word.toLowerCase();
	
	        // Check against the keep object map.
	        if (keepMap.hasOwnProperty(token)) {
	            return restoreCase(word, token);
	        }
	
	        // Check against the replacement map for a direct word replacement.
	        if (replaceMap.hasOwnProperty(token)) {
	            return restoreCase(word, replaceMap[token]);
	        }
	
	        // Run all the rules against the word.
	        return sanitizeWord(token, word, rules);
	    };
	}
	
	/**
	 * Pluralize or singularize a word based on the passed in count.
	 * @param {String} word
	 * @param {Number} count
	 * @param {Boolean} inclusive
	 * @return {String}
	 */
	function pluralize(word, count, inclusive) {
	    var pluralized = count === 1 ? pluralize.singular(word) : pluralize.plural(word);
	    return (inclusive ? count + ' ' : '') + pluralized;
	}
	
	/**
	 * Pluralize a word.
	 */
	pluralize.plural = replaceWord(irregularSingles, irregularPlurals, pluralRules);
	
	/**
	 * Singularize a word.
	 */
	pluralize.singular = replaceWord(irregularPlurals, irregularSingles, singularRules);
	
	/**
	 * Add a pluralization rule to the collection.
	 * @param {(string|RegExp)} rule
	 * @param {string} replacement
	 */
	pluralize.addPluralRule = function (rule, replacement) {
	    pluralRules.push([sanitizeRule(rule), replacement]);
	};
	
	/**
	 * Add a singularization rule to the collection.
	 * @param {(string|RegExp)} rule
	 * @param {string} replacement
	 */
	pluralize.addSingularRule = function (rule, replacement) {
	    singularRules.push([sanitizeRule(rule), replacement]);
	};
	
	/**
	 * Add an uncountable word rule.
	 * @param {(string|RegExp)} word
	 */
	pluralize.addUncountableRule = function (word) {
	    if (typeof word === 'string') {
	        uncountables[word.toLowerCase()] = true;
	        return;
	    }
	
	    // Set singular and plural references for the word.
	    pluralize.addPluralRule(word, '$0');
	    pluralize.addSingularRule(word, '$0');
	};
	
	/**
	 * Add an irregular word definition.
	 * @param {String} single
	 * @param {String} plural
	 */
	pluralize.addIrregularRule = function (single, plural) {
	    var one = plural.toLowerCase();
	    var many = single.toLowerCase();
	
	    irregularSingles[one] = many;
	    irregularPlurals[many] = one;
	};
	
	/**
	 * Irregular rules.
	 */
	[
	// Pronouns.
	['I', 'we'], ['me', 'us'], ['he', 'they'], ['she', 'they'], ['them', 'them'], ['myself', 'ourselves'], ['yourself', 'yourselves'], ['itself', 'themselves'], ['herself', 'themselves'], ['himself', 'themselves'], ['themself', 'themselves'], ['is', 'are'], ['this', 'these'], ['that', 'those'],
	// Words ending in with a consonant and `o`.
	['echo', 'echoes'], ['dingo', 'dingoes'], ['volcano', 'volcanoes'], ['tornado', 'tornadoes'], ['torpedo', 'torpedoes'],
	// Ends with `us`.
	['genus', 'genera'], ['viscus', 'viscera'],
	// Ends with `ma`.
	['stigma', 'stigmata'], ['stoma', 'stomata'], ['dogma', 'dogmata'], ['lemma', 'lemmata'], ['schema', 'schemata'], ['anathema', 'anathemata'],
	// Other irregular rules.
	['ox', 'oxen'], ['axe', 'axes'], ['die', 'dice'], ['yes', 'yeses'], ['foot', 'feet'], ['eave', 'eaves'], ['goose', 'geese'], ['tooth', 'teeth'], ['quiz', 'quizzes'], ['human', 'humans'], ['proof', 'proofs'], ['carve', 'carves'], ['valve', 'valves'], ['thief', 'thieves'], ['genie', 'genies'], ['groove', 'grooves'], ['pickaxe', 'pickaxes'], ['whiskey', 'whiskies']].forEach(function (rule) {
	    return pluralize.addIrregularRule(rule[0], rule[1]);
	});
	
	/**
	 * Pluralization rules.
	 */
	[[/s?$/i, 's'], [/([^aeiou]ese)$/i, '$1'], [/(ax|test)is$/i, '$1es'], [/(alias|[^aou]us|tlas|gas|ris)$/i, '$1es'], [/(e[mn]u)s?$/i, '$1s'], [/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i, '$1'], [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'], [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'], [/(seraph|cherub)(?:im)?$/i, '$1im'], [/(her|at|gr)o$/i, '$1oes'], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'], [/sis$/i, 'ses'], [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'], [/([^aeiouy]|qu)y$/i, '$1ies'], [/([^ch][ieo][ln])ey$/i, '$1ies'], [/(x|ch|ss|sh|zz)$/i, '$1es'], [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'], [/(m|l)(?:ice|ouse)$/i, '$1ice'], [/(pe)(?:rson|ople)$/i, '$1ople'], [/(child)(?:ren)?$/i, '$1ren'], [/eaux$/i, '$0'], [/m[ae]n$/i, 'men'], ['thou', 'you']].forEach(function (rule) {
	    return pluralize.addPluralRule(rule[0], rule[1]);
	});
	
	/**
	 * Singularization rules.
	 */
	[[/s$/i, ''], [/(ss)$/i, '$1'], [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(?:sis|ses)$/i, '$1sis'], [/(^analy)(?:sis|ses)$/i, '$1sis'], [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'], [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'], [/([^aeiouy]|qu)ies$/i, '$1y'], [/(^[pl]|zomb|^(?:neck)?t|[aeo][lt]|cut)ies$/i, '$1ie'], [/(\b(?:mon|smil))ies$/i, '$1ey'], [/(m|l)ice$/i, '$1ouse'], [/(seraph|cherub)im$/i, '$1'], [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i, '$1'], [/(e[mn]u)s?$/i, '$1'], [/(movie|twelve)s$/i, '$1'], [/(cris|test|diagnos)(?:is|es)$/i, '$1is'], [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'], [/(alumn|alg|vertebr)ae$/i, '$1a'], [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'], [/(matr|append)ices$/i, '$1ix'], [/(pe)(rson|ople)$/i, '$1rson'], [/(child)ren$/i, '$1'], [/(eau)x?$/i, '$1'], [/men$/i, 'man']].forEach(function (rule) {
	    return pluralize.addSingularRule(rule[0], rule[1]);
	});
	
	/**
	 * Uncountable rules.
	 */
	[
	// Singular words with no plurals.
	'advice', 'adulthood', 'agenda', 'aid', 'alcohol', 'ammo', 'athletics', 'bison', 'blood', 'bream', 'buffalo', 'butter', 'carp', 'cash', 'chassis', 'chess', 'clothing', 'commerce', 'cod', 'cooperation', 'corps', 'digestion', 'debris', 'diabetes', 'energy', 'equipment', 'elk', 'excretion', 'expertise', 'flounder', 'fun', 'gallows', 'garbage', 'graffiti', 'headquarters', 'health', 'herpes', 'highjinks', 'homework', 'housework', 'information', 'jeans', 'justice', 'kudos', 'labour', 'literature', 'machinery', 'mackerel', 'media', 'mews', 'moose', 'music', 'news', 'pike', 'plankton', 'pliers', 'pollution', 'premises', 'rain', 'research', 'rice', 'salmon', 'scissors', 'series', 'sewage', 'shambles', 'shrimp', 'species', 'staff', 'swine', 'trout', 'traffic', 'transporation', 'tuna', 'wealth', 'welfare', 'whiting', 'wildebeest', 'wildlife', 'you',
	// Regexes.
	/pox$/i, // "chickpox", "smallpox"
	/ois$/i, /deer$/i, // "deer", "reindeer"
	/fish$/i, // "fish", "blowfish", "angelfish"
	/sheep$/i, /measles$/i, /[^aeiou]ese$/i // "chinese", "japanese"
	].forEach(pluralize.addUncountableRule);
	
	var PluralPipe = exports.PluralPipe = (_dec = (0, _core.Pipe)({ name: 'plural' }), _dec2 = (0, _core.Injectable)(), _dec(_class = _dec2(_class = function () {
	    function PluralPipe() {
	        _classCallCheck(this, PluralPipe);
	    }
	
	    _createClass(PluralPipe, [{
	        key: 'transform',
	        value: function transform(value) {
	            return pluralize(value);
	        }
	    }]);
	
	    return PluralPipe;
	}()) || _class) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9waXBlcy9wbHVyYWwvUGx1cmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBSUEsSUFBSSxjQUFjLEVBQWxCO0FBQ0EsSUFBSSxnQkFBZ0IsRUFBcEI7QUFDQSxJQUFJLGVBQWUsRUFBbkI7QUFDQSxJQUFJLG1CQUFtQixFQUF2QjtBQUNBLElBQUksbUJBQW1CLEVBQXZCOzs7Ozs7O0FBT0EsU0FBUyxXQUFULENBQXFCLEdBQXJCLEVBQTBCO0FBQ3RCLFdBQU8sSUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLFdBQWQsS0FBOEIsSUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLFdBQWQsRUFBckM7QUFDSDs7Ozs7OztBQU9ELFNBQVMsWUFBVCxDQUFzQixJQUF0QixFQUE0QjtBQUN4QixRQUFJLE9BQU8sSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUMxQixlQUFPLElBQUksTUFBSixDQUFXLE1BQU0sSUFBTixHQUFhLEdBQXhCLEVBQTZCLEdBQTdCLENBQVAsQztBQUNIO0FBQ0QsV0FBTyxJQUFQO0FBQ0g7Ozs7Ozs7OztBQVNELFNBQVMsV0FBVCxDQUFxQixJQUFyQixFQUEyQixLQUEzQixFQUFrQzs7QUFFOUIsUUFBSSxTQUFTLEtBQUssV0FBTCxFQUFiLEVBQWlDO0FBQzdCLGVBQU8sTUFBTSxXQUFOLEVBQVA7QUFDSDs7O0FBR0QsUUFBSSxLQUFLLENBQUwsTUFBWSxLQUFLLENBQUwsRUFBUSxXQUFSLEVBQWhCLEVBQXVDO0FBQ25DLGVBQU8sWUFBWSxLQUFaLENBQVA7QUFDSDs7O0FBR0QsV0FBTyxNQUFNLFdBQU4sRUFBUDtBQUNIOzs7Ozs7OztBQVFELFNBQVMsV0FBVCxDQUFxQixHQUFyQixFQUEwQixJQUExQixFQUFnQztBQUM1QixXQUFPLElBQUksT0FBSixDQUFZLGNBQVosRUFBNEIsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUNqRCxlQUFPLEtBQUssS0FBTCxLQUFlLEVBQXRCO0FBQ0gsS0FGTSxDQUFQO0FBR0g7Ozs7Ozs7OztBQVNELFNBQVMsWUFBVCxDQUFzQixLQUF0QixFQUE2QixJQUE3QixFQUFtQyxVQUFuQyxFQUErQzs7QUFFM0MsUUFBSSxDQUFDLE1BQU0sTUFBUCxJQUFpQixhQUFhLGNBQWIsQ0FBNEIsS0FBNUIsQ0FBckIsRUFBeUQ7QUFDckQsZUFBTyxJQUFQO0FBQ0g7O0FBRUQsUUFBSSxNQUFNLFdBQVcsTUFBckI7OztBQU4yQztBQVN2QyxZQUFJLE9BQU8sV0FBVyxHQUFYLENBQVg7O0FBRUEsWUFBSSxLQUFLLENBQUwsRUFBUSxJQUFSLENBQWEsSUFBYixDQUFKLEVBQXdCO0FBQ3BCO0FBQUEsbUJBQU8sS0FBSyxPQUFMLENBQWEsS0FBSyxDQUFMLENBQWIsRUFBc0IsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBeUI7QUFDbEQsd0JBQUksU0FBUyxZQUFZLEtBQUssQ0FBTCxDQUFaLEVBQXFCLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLENBQXJCLENBQWI7QUFDQSx3QkFBSSxVQUFVLEVBQWQsRUFBa0I7QUFDZCwrQkFBTyxZQUFZLE1BQU0sUUFBUSxDQUFkLENBQVosRUFBOEIsTUFBOUIsQ0FBUDtBQUNIO0FBQ0QsMkJBQU8sWUFBWSxLQUFaLEVBQW1CLE1BQW5CLENBQVA7QUFDSCxpQkFOTTtBQUFQO0FBT0g7QUFuQnNDOztBQVEzQyxXQUFPLEtBQVAsRUFBYztBQUFBOztBQUFBO0FBWWI7QUFDRCxXQUFPLElBQVA7QUFDSDs7Ozs7Ozs7O0FBU0QsU0FBUyxXQUFULENBQXFCLFVBQXJCLEVBQWlDLE9BQWpDLEVBQTBDLEtBQTFDLEVBQWlEO0FBQzdDLFdBQU8sVUFBQyxJQUFELEVBQVU7O0FBRWIsWUFBSSxRQUFRLEtBQUssV0FBTCxFQUFaOzs7QUFHQSxZQUFJLFFBQVEsY0FBUixDQUF1QixLQUF2QixDQUFKLEVBQW1DO0FBQy9CLG1CQUFPLFlBQVksSUFBWixFQUFrQixLQUFsQixDQUFQO0FBQ0g7OztBQUdELFlBQUksV0FBVyxjQUFYLENBQTBCLEtBQTFCLENBQUosRUFBc0M7QUFDbEMsbUJBQU8sWUFBWSxJQUFaLEVBQWtCLFdBQVcsS0FBWCxDQUFsQixDQUFQO0FBQ0g7OztBQUdELGVBQU8sYUFBYSxLQUFiLEVBQW9CLElBQXBCLEVBQTBCLEtBQTFCLENBQVA7QUFDSCxLQWhCRDtBQWlCSDs7Ozs7Ozs7O0FBU0QsU0FBUyxTQUFULENBQW1CLElBQW5CLEVBQXlCLEtBQXpCLEVBQWdDLFNBQWhDLEVBQTJDO0FBQ3ZDLFFBQUksYUFBYSxVQUFVLENBQVYsR0FBYyxVQUFVLFFBQVYsQ0FBbUIsSUFBbkIsQ0FBZCxHQUF5QyxVQUFVLE1BQVYsQ0FBaUIsSUFBakIsQ0FBMUQ7QUFDQSxXQUFPLENBQUMsWUFBZSxLQUFmLFNBQTBCLEVBQTNCLElBQWlDLFVBQXhDO0FBQ0g7Ozs7O0FBS0QsVUFBVSxNQUFWLEdBQW1CLFlBQVksZ0JBQVosRUFBOEIsZ0JBQTlCLEVBQWdELFdBQWhELENBQW5COzs7OztBQUtBLFVBQVUsUUFBVixHQUFxQixZQUFZLGdCQUFaLEVBQThCLGdCQUE5QixFQUFnRCxhQUFoRCxDQUFyQjs7Ozs7OztBQU9BLFVBQVUsYUFBVixHQUEwQixVQUFDLElBQUQsRUFBTyxXQUFQLEVBQXVCO0FBQzdDLGdCQUFZLElBQVosQ0FBaUIsQ0FBQyxhQUFhLElBQWIsQ0FBRCxFQUFxQixXQUFyQixDQUFqQjtBQUNILENBRkQ7Ozs7Ozs7QUFTQSxVQUFVLGVBQVYsR0FBNEIsVUFBQyxJQUFELEVBQU8sV0FBUCxFQUF1QjtBQUMvQyxrQkFBYyxJQUFkLENBQW1CLENBQUMsYUFBYSxJQUFiLENBQUQsRUFBcUIsV0FBckIsQ0FBbkI7QUFDSCxDQUZEOzs7Ozs7QUFRQSxVQUFVLGtCQUFWLEdBQStCLFVBQUMsSUFBRCxFQUFVO0FBQ3JDLFFBQUksT0FBTyxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzFCLHFCQUFhLEtBQUssV0FBTCxFQUFiLElBQW1DLElBQW5DO0FBQ0E7QUFDSDs7O0FBR0QsY0FBVSxhQUFWLENBQXdCLElBQXhCLEVBQThCLElBQTlCO0FBQ0EsY0FBVSxlQUFWLENBQTBCLElBQTFCLEVBQWdDLElBQWhDO0FBQ0gsQ0FURDs7Ozs7OztBQWdCQSxVQUFVLGdCQUFWLEdBQTZCLFVBQUMsTUFBRCxFQUFTLE1BQVQsRUFBb0I7QUFDN0MsUUFBSSxNQUFNLE9BQU8sV0FBUCxFQUFWO0FBQ0EsUUFBSSxPQUFPLE9BQU8sV0FBUCxFQUFYOztBQUVBLHFCQUFpQixHQUFqQixJQUF3QixJQUF4QjtBQUNBLHFCQUFpQixJQUFqQixJQUF5QixHQUF6QjtBQUNILENBTkQ7Ozs7O0FBV0E7O0FBRUksQ0FBQyxHQUFELEVBQU0sSUFBTixDQUZKLEVBR0ksQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUhKLEVBSUksQ0FBQyxJQUFELEVBQU8sTUFBUCxDQUpKLEVBS0ksQ0FBQyxLQUFELEVBQVEsTUFBUixDQUxKLEVBTUksQ0FBQyxNQUFELEVBQVMsTUFBVCxDQU5KLEVBT0ksQ0FBQyxRQUFELEVBQVcsV0FBWCxDQVBKLEVBUUksQ0FBQyxVQUFELEVBQWEsWUFBYixDQVJKLEVBU0ksQ0FBQyxRQUFELEVBQVcsWUFBWCxDQVRKLEVBVUksQ0FBQyxTQUFELEVBQVksWUFBWixDQVZKLEVBV0ksQ0FBQyxTQUFELEVBQVksWUFBWixDQVhKLEVBWUksQ0FBQyxVQUFELEVBQWEsWUFBYixDQVpKLEVBYUksQ0FBQyxJQUFELEVBQU8sS0FBUCxDQWJKLEVBY0ksQ0FBQyxNQUFELEVBQVMsT0FBVCxDQWRKLEVBZUksQ0FBQyxNQUFELEVBQVMsT0FBVCxDQWZKOztBQWlCSSxDQUFDLE1BQUQsRUFBUyxRQUFULENBakJKLEVBa0JJLENBQUMsT0FBRCxFQUFVLFNBQVYsQ0FsQkosRUFtQkksQ0FBQyxTQUFELEVBQVksV0FBWixDQW5CSixFQW9CSSxDQUFDLFNBQUQsRUFBWSxXQUFaLENBcEJKLEVBcUJJLENBQUMsU0FBRCxFQUFZLFdBQVosQ0FyQko7O0FBdUJJLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0F2QkosRUF3QkksQ0FBQyxRQUFELEVBQVcsU0FBWCxDQXhCSjs7QUEwQkksQ0FBQyxRQUFELEVBQVcsVUFBWCxDQTFCSixFQTJCSSxDQUFDLE9BQUQsRUFBVSxTQUFWLENBM0JKLEVBNEJJLENBQUMsT0FBRCxFQUFVLFNBQVYsQ0E1QkosRUE2QkksQ0FBQyxPQUFELEVBQVUsU0FBVixDQTdCSixFQThCSSxDQUFDLFFBQUQsRUFBVyxVQUFYLENBOUJKLEVBK0JJLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0EvQko7O0FBaUNJLENBQUMsSUFBRCxFQUFPLE1BQVAsQ0FqQ0osRUFrQ0ksQ0FBQyxLQUFELEVBQVEsTUFBUixDQWxDSixFQW1DSSxDQUFDLEtBQUQsRUFBUSxNQUFSLENBbkNKLEVBb0NJLENBQUMsS0FBRCxFQUFRLE9BQVIsQ0FwQ0osRUFxQ0ksQ0FBQyxNQUFELEVBQVMsTUFBVCxDQXJDSixFQXNDSSxDQUFDLE1BQUQsRUFBUyxPQUFULENBdENKLEVBdUNJLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0F2Q0osRUF3Q0ksQ0FBQyxPQUFELEVBQVUsT0FBVixDQXhDSixFQXlDSSxDQUFDLE1BQUQsRUFBUyxTQUFULENBekNKLEVBMENJLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0ExQ0osRUEyQ0ksQ0FBQyxPQUFELEVBQVUsUUFBVixDQTNDSixFQTRDSSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBNUNKLEVBNkNJLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0E3Q0osRUE4Q0ksQ0FBQyxPQUFELEVBQVUsU0FBVixDQTlDSixFQStDSSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBL0NKLEVBZ0RJLENBQUMsUUFBRCxFQUFXLFNBQVgsQ0FoREosRUFpREksQ0FBQyxTQUFELEVBQVksVUFBWixDQWpESixFQWtESSxDQUFDLFNBQUQsRUFBWSxVQUFaLENBbERKLEVBbURFLE9BbkRGLENBbURVLFVBQUMsSUFBRCxFQUFVO0FBQ2hCLFdBQU8sVUFBVSxnQkFBVixDQUEyQixLQUFLLENBQUwsQ0FBM0IsRUFBb0MsS0FBSyxDQUFMLENBQXBDLENBQVA7QUFDSCxDQXJERDs7Ozs7QUEwREEsQ0FDSSxDQUFDLE1BQUQsRUFBUyxHQUFULENBREosRUFFSSxDQUFDLGlCQUFELEVBQW9CLElBQXBCLENBRkosRUFHSSxDQUFDLGVBQUQsRUFBa0IsTUFBbEIsQ0FISixFQUlJLENBQUMsaUNBQUQsRUFBb0MsTUFBcEMsQ0FKSixFQUtJLENBQUMsY0FBRCxFQUFpQixLQUFqQixDQUxKLEVBTUksQ0FBQyx5Q0FBRCxFQUE0QyxJQUE1QyxDQU5KLEVBT0ksQ0FBQyxpR0FBRCxFQUFvRyxLQUFwRyxDQVBKLEVBUUksQ0FBQywrQkFBRCxFQUFrQyxNQUFsQyxDQVJKLEVBU0ksQ0FBQywwQkFBRCxFQUE2QixNQUE3QixDQVRKLEVBVUksQ0FBQyxnQkFBRCxFQUFtQixPQUFuQixDQVZKLEVBV0ksQ0FBQyx1SEFBRCxFQUEwSCxLQUExSCxDQVhKLEVBWUksQ0FBQyxvR0FBRCxFQUF1RyxLQUF2RyxDQVpKLEVBYUksQ0FBQyxPQUFELEVBQVUsS0FBVixDQWJKLEVBY0ksQ0FBQywwQ0FBRCxFQUE2QyxTQUE3QyxDQWRKLEVBZUksQ0FBQyxtQkFBRCxFQUFzQixPQUF0QixDQWZKLEVBZ0JJLENBQUMsc0JBQUQsRUFBeUIsT0FBekIsQ0FoQkosRUFpQkksQ0FBQyxtQkFBRCxFQUFzQixNQUF0QixDQWpCSixFQWtCSSxDQUFDLCtDQUFELEVBQWtELFFBQWxELENBbEJKLEVBbUJJLENBQUMscUJBQUQsRUFBd0IsT0FBeEIsQ0FuQkosRUFvQkksQ0FBQyxxQkFBRCxFQUF3QixRQUF4QixDQXBCSixFQXFCSSxDQUFDLG1CQUFELEVBQXNCLE9BQXRCLENBckJKLEVBc0JJLENBQUMsUUFBRCxFQUFXLElBQVgsQ0F0QkosRUF1QkksQ0FBQyxVQUFELEVBQWEsS0FBYixDQXZCSixFQXdCSSxDQUFDLE1BQUQsRUFBUyxLQUFULENBeEJKLEVBeUJFLE9BekJGLENBeUJVLFVBQUMsSUFBRCxFQUFVO0FBQ2hCLFdBQU8sVUFBVSxhQUFWLENBQXdCLEtBQUssQ0FBTCxDQUF4QixFQUFpQyxLQUFLLENBQUwsQ0FBakMsQ0FBUDtBQUNILENBM0JEOzs7OztBQWdDQSxDQUNJLENBQUMsS0FBRCxFQUFRLEVBQVIsQ0FESixFQUVJLENBQUMsUUFBRCxFQUFXLElBQVgsQ0FGSixFQUdJLENBQUMsd0VBQUQsRUFBMkUsT0FBM0UsQ0FISixFQUlJLENBQUMsdUJBQUQsRUFBMEIsT0FBMUIsQ0FKSixFQUtJLENBQUMsK0RBQUQsRUFBa0UsTUFBbEUsQ0FMSixFQU1JLENBQUMsaUNBQUQsRUFBb0MsS0FBcEMsQ0FOSixFQU9JLENBQUMscUJBQUQsRUFBd0IsS0FBeEIsQ0FQSixFQVFJLENBQUMsNkNBQUQsRUFBZ0QsTUFBaEQsQ0FSSixFQVNJLENBQUMsdUJBQUQsRUFBMEIsTUFBMUIsQ0FUSixFQVVJLENBQUMsWUFBRCxFQUFlLFFBQWYsQ0FWSixFQVdJLENBQUMscUJBQUQsRUFBd0IsSUFBeEIsQ0FYSixFQVlJLENBQUMsZ0ZBQUQsRUFBbUYsSUFBbkYsQ0FaSixFQWFJLENBQUMsY0FBRCxFQUFpQixJQUFqQixDQWJKLEVBY0ksQ0FBQyxtQkFBRCxFQUFzQixJQUF0QixDQWRKLEVBZUksQ0FBQyxnQ0FBRCxFQUFtQyxNQUFuQyxDQWZKLEVBZ0JJLENBQUMsaUdBQUQsRUFBb0csTUFBcEcsQ0FoQkosRUFpQkksQ0FBQyx3R0FBRCxFQUEyRyxNQUEzRyxDQWpCSixFQWtCSSxDQUFDLDZGQUFELEVBQWdHLE1BQWhHLENBbEJKLEVBbUJJLENBQUMseUJBQUQsRUFBNEIsS0FBNUIsQ0FuQkosRUFvQkksQ0FBQyw4QkFBRCxFQUFpQyxNQUFqQyxDQXBCSixFQXFCSSxDQUFDLHFCQUFELEVBQXdCLE1BQXhCLENBckJKLEVBc0JJLENBQUMsbUJBQUQsRUFBc0IsUUFBdEIsQ0F0QkosRUF1QkksQ0FBQyxjQUFELEVBQWlCLElBQWpCLENBdkJKLEVBd0JJLENBQUMsV0FBRCxFQUFjLElBQWQsQ0F4QkosRUF5QkksQ0FBQyxPQUFELEVBQVUsS0FBVixDQXpCSixFQTBCRSxPQTFCRixDQTBCVSxVQUFDLElBQUQsRUFBVTtBQUNoQixXQUFPLFVBQVUsZUFBVixDQUEwQixLQUFLLENBQUwsQ0FBMUIsRUFBbUMsS0FBSyxDQUFMLENBQW5DLENBQVA7QUFDSCxDQTVCRDs7Ozs7QUFpQ0E7O0FBRUksUUFGSixFQUdJLFdBSEosRUFJSSxRQUpKLEVBS0ksS0FMSixFQU1JLFNBTkosRUFPSSxNQVBKLEVBUUksV0FSSixFQVNJLE9BVEosRUFVSSxPQVZKLEVBV0ksT0FYSixFQVlJLFNBWkosRUFhSSxRQWJKLEVBY0ksTUFkSixFQWVJLE1BZkosRUFnQkksU0FoQkosRUFpQkksT0FqQkosRUFrQkksVUFsQkosRUFtQkksVUFuQkosRUFvQkksS0FwQkosRUFxQkksYUFyQkosRUFzQkksT0F0QkosRUF1QkksV0F2QkosRUF3QkksUUF4QkosRUF5QkksVUF6QkosRUEwQkksUUExQkosRUEyQkksV0EzQkosRUE0QkksS0E1QkosRUE2QkksV0E3QkosRUE4QkksV0E5QkosRUErQkksVUEvQkosRUFnQ0ksS0FoQ0osRUFpQ0ksU0FqQ0osRUFrQ0ksU0FsQ0osRUFtQ0ksVUFuQ0osRUFvQ0ksY0FwQ0osRUFxQ0ksUUFyQ0osRUFzQ0ksUUF0Q0osRUF1Q0ksV0F2Q0osRUF3Q0ksVUF4Q0osRUF5Q0ksV0F6Q0osRUEwQ0ksYUExQ0osRUEyQ0ksT0EzQ0osRUE0Q0ksU0E1Q0osRUE2Q0ksT0E3Q0osRUE4Q0ksUUE5Q0osRUErQ0ksWUEvQ0osRUFnREksV0FoREosRUFpREksVUFqREosRUFrREksT0FsREosRUFtREksTUFuREosRUFvREksT0FwREosRUFxREksT0FyREosRUFzREksTUF0REosRUF1REksTUF2REosRUF3REksVUF4REosRUF5REksUUF6REosRUEwREksV0ExREosRUEyREksVUEzREosRUE0REksTUE1REosRUE2REksVUE3REosRUE4REksTUE5REosRUErREksUUEvREosRUFnRUksVUFoRUosRUFpRUksUUFqRUosRUFrRUksUUFsRUosRUFtRUksVUFuRUosRUFvRUksUUFwRUosRUFxRUksU0FyRUosRUFzRUksT0F0RUosRUF1RUksT0F2RUosRUF3RUksT0F4RUosRUF5RUksU0F6RUosRUEwRUksZUExRUosRUEyRUksTUEzRUosRUE0RUksUUE1RUosRUE2RUksU0E3RUosRUE4RUksU0E5RUosRUErRUksWUEvRUosRUFnRkksVUFoRkosRUFpRkksS0FqRko7O0FBbUZJLE9BbkZKLEU7QUFvRkksT0FwRkosRUFxRkksUUFyRkosRTtBQXNGSSxRQXRGSixFO0FBdUZJLFNBdkZKLEVBd0ZJLFdBeEZKLEVBeUZJLGU7QUF6RkosRUEwRkUsT0ExRkYsQ0EwRlUsVUFBVSxrQkExRnBCOztJQThGYSxVLFdBQUEsVSxXQUZaLGdCQUFLLEVBQUUsTUFBTSxRQUFSLEVBQUwsQyxVQUNBLHVCOzs7Ozs7O2tDQUVhLEssRUFBTztBQUNiLG1CQUFPLFVBQVUsS0FBVixDQUFQO0FBQ0giLCJmaWxlIjoiUGx1cmFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hc2liaWxpYS9Eb2N1bWVudHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gUnVsZSBzdG9yYWdlIC0gcGx1cmFsaXplIGFuZCBzaW5ndWxhcml6ZSBuZWVkIHRvIGJlIHJ1biBzZXF1ZW50aWFsbHksXG4vLyB3aGlsZSBvdGhlciBydWxlcyBjYW4gYmUgb3B0aW1pemVkIHVzaW5nIGFuIG9iamVjdCBmb3IgaW5zdGFudCBsb29rdXBzLlxubGV0IHBsdXJhbFJ1bGVzID0gW107XG5sZXQgc2luZ3VsYXJSdWxlcyA9IFtdO1xubGV0IHVuY291bnRhYmxlcyA9IHt9O1xubGV0IGlycmVndWxhclBsdXJhbHMgPSB7fTtcbmxldCBpcnJlZ3VsYXJTaW5nbGVzID0ge307XG5cbi8qKlxuICogVGl0bGUgY2FzZSBhIHN0cmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBTYW5pdGl6ZSBhIHBsdXJhbGl6YXRpb24gcnVsZSB0byBhIHVzYWJsZSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKiBAcGFyYW0geyhSZWdFeHB8c3RyaW5nKX0gcnVsZVxuICogQHJldHVybiB7UmVnRXhwfVxuICovXG5mdW5jdGlvbiBzYW5pdGl6ZVJ1bGUocnVsZSkge1xuICAgIGlmICh0eXBlb2YgcnVsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcnVsZSArICckJywgJ2knKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIH1cbiAgICByZXR1cm4gcnVsZTtcbn1cblxuLyoqXG4gKiBQYXNzIGluIGEgd29yZCB0b2tlbiB0byBwcm9kdWNlIGEgZnVuY3Rpb24gdGhhdCBjYW4gcmVwbGljYXRlIHRoZSBjYXNlIG9uXG4gKiBhbm90aGVyIHdvcmQuXG4gKiBAcGFyYW0ge3N0cmluZ30gd29yZFxuICogQHBhcmFtIHtzdHJpbmd9IHRva2VuXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHJlc3RvcmVDYXNlKHdvcmQsIHRva2VuKSB7XG4gICAgLy8gVXBwZXIgY2FzZWQgd29yZHMuIEUuZy4gXCJIRUxMT1wiLlxuICAgIGlmICh3b3JkID09PSB3b3JkLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgcmV0dXJuIHRva2VuLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLy8gVGl0bGUgY2FzZWQgd29yZHMuIEUuZy4gXCJUaXRsZVwiLlxuICAgIGlmICh3b3JkWzBdID09PSB3b3JkWzBdLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgcmV0dXJuIHRvVGl0bGVDYXNlKHRva2VuKTtcbiAgICB9XG5cbiAgICAvLyBMb3dlciBjYXNlZCB3b3Jkcy4gRS5nLiBcInRlc3RcIi5cbiAgICByZXR1cm4gdG9rZW4udG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBJbnRlcnBvbGF0ZSBhIHJlZ2V4cCBzdHJpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGludGVycG9sYXRlKHN0ciwgYXJncykge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFwkKFxcZHsxLDJ9KS9nLCAobWF0Y2gsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBhcmdzW2luZGV4XSB8fCAnJztcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBTYW5pdGl6ZSBhIHdvcmQgYnkgcGFzc2luZyBpbiB0aGUgd29yZCBhbmQgc2FuaXRpemF0aW9uIHJ1bGVzLlxuICogQHBhcmFtICB7U3RyaW5nfSAgIHRva2VuXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgd29yZFxuICogQHBhcmFtICB7QXJyYXl9ICAgIGNvbGxlY3Rpb25cbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc2FuaXRpemVXb3JkKHRva2VuLCB3b3JkLCBjb2xsZWN0aW9uKSB7XG4gICAgLy8gRW1wdHkgc3RyaW5nIG9yIGRvZXNuJ3QgbmVlZCBmaXhpbmcuXG4gICAgaWYgKCF0b2tlbi5sZW5ndGggfHwgdW5jb3VudGFibGVzLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuICAgICAgICByZXR1cm4gd29yZDtcbiAgICB9XG5cbiAgICBsZXQgbGVuID0gY29sbGVjdGlvbi5sZW5ndGg7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBzYW5pdGl6YXRpb24gcnVsZXMgYW5kIHVzZSB0aGUgZmlyc3Qgb25lIHRvIG1hdGNoLlxuICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICBsZXQgcnVsZSA9IGNvbGxlY3Rpb25bbGVuXTtcbiAgICAgICAgLy8gSWYgdGhlIHJ1bGUgcGFzc2VzLCByZXR1cm4gdGhlIHJlcGxhY2VtZW50LlxuICAgICAgICBpZiAocnVsZVswXS50ZXN0KHdvcmQpKSB7XG4gICAgICAgICAgICByZXR1cm4gd29yZC5yZXBsYWNlKHJ1bGVbMF0sIChtYXRjaCwgaW5kZXgsIHdvcmRzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGludGVycG9sYXRlKHJ1bGVbMV0sIFttYXRjaCwgaW5kZXgsIHdvcmRzXSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdG9yZUNhc2Uod29yZHNbaW5kZXggLSAxXSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3RvcmVDYXNlKG1hdGNoLCByZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHdvcmQ7XG59XG5cbi8qKlxuICogUmVwbGFjZSBhIHdvcmQgd2l0aCB0aGUgdXBkYXRlZCB3b3JkLlxuICogQHBhcmFtIHtPYmplY3R9IHJlcGxhY2VNYXBcbiAqIEBwYXJhbSB7T2JqZWN0fSBrZWVwTWFwXG4gKiBAcGFyYW0ge0FycmF5fSBydWxlc1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VXb3JkKHJlcGxhY2VNYXAsIGtlZXBNYXAsIHJ1bGVzKSB7XG4gICAgcmV0dXJuICh3b3JkKSA9PiB7XG4gICAgICAgIC8vIEdldCB0aGUgY29ycmVjdCB0b2tlbiBhbmQgY2FzZSByZXN0b3JhdGlvbiBmdW5jdGlvbnMuXG4gICAgICAgIGxldCB0b2tlbiA9IHdvcmQudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvLyBDaGVjayBhZ2FpbnN0IHRoZSBrZWVwIG9iamVjdCBtYXAuXG4gICAgICAgIGlmIChrZWVwTWFwLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3RvcmVDYXNlKHdvcmQsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGFnYWluc3QgdGhlIHJlcGxhY2VtZW50IG1hcCBmb3IgYSBkaXJlY3Qgd29yZCByZXBsYWNlbWVudC5cbiAgICAgICAgaWYgKHJlcGxhY2VNYXAuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdG9yZUNhc2Uod29yZCwgcmVwbGFjZU1hcFt0b2tlbl0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUnVuIGFsbCB0aGUgcnVsZXMgYWdhaW5zdCB0aGUgd29yZC5cbiAgICAgICAgcmV0dXJuIHNhbml0aXplV29yZCh0b2tlbiwgd29yZCwgcnVsZXMpO1xuICAgIH07XG59XG5cbi8qKlxuICogUGx1cmFsaXplIG9yIHNpbmd1bGFyaXplIGEgd29yZCBiYXNlZCBvbiB0aGUgcGFzc2VkIGluIGNvdW50LlxuICogQHBhcmFtIHtTdHJpbmd9IHdvcmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudFxuICogQHBhcmFtIHtCb29sZWFufSBpbmNsdXNpdmVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gcGx1cmFsaXplKHdvcmQsIGNvdW50LCBpbmNsdXNpdmUpIHtcbiAgICBsZXQgcGx1cmFsaXplZCA9IGNvdW50ID09PSAxID8gcGx1cmFsaXplLnNpbmd1bGFyKHdvcmQpIDogcGx1cmFsaXplLnBsdXJhbCh3b3JkKTtcbiAgICByZXR1cm4gKGluY2x1c2l2ZSA/IGAke2NvdW50fSBgIDogJycpICsgcGx1cmFsaXplZDtcbn1cblxuLyoqXG4gKiBQbHVyYWxpemUgYSB3b3JkLlxuICovXG5wbHVyYWxpemUucGx1cmFsID0gcmVwbGFjZVdvcmQoaXJyZWd1bGFyU2luZ2xlcywgaXJyZWd1bGFyUGx1cmFscywgcGx1cmFsUnVsZXMpO1xuXG4vKipcbiAqIFNpbmd1bGFyaXplIGEgd29yZC5cbiAqL1xucGx1cmFsaXplLnNpbmd1bGFyID0gcmVwbGFjZVdvcmQoaXJyZWd1bGFyUGx1cmFscywgaXJyZWd1bGFyU2luZ2xlcywgc2luZ3VsYXJSdWxlcyk7XG5cbi8qKlxuICogQWRkIGEgcGx1cmFsaXphdGlvbiBydWxlIHRvIHRoZSBjb2xsZWN0aW9uLlxuICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cCl9IHJ1bGVcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlbWVudFxuICovXG5wbHVyYWxpemUuYWRkUGx1cmFsUnVsZSA9IChydWxlLCByZXBsYWNlbWVudCkgPT4ge1xuICAgIHBsdXJhbFJ1bGVzLnB1c2goW3Nhbml0aXplUnVsZShydWxlKSwgcmVwbGFjZW1lbnRdKTtcbn07XG5cbi8qKlxuICogQWRkIGEgc2luZ3VsYXJpemF0aW9uIHJ1bGUgdG8gdGhlIGNvbGxlY3Rpb24uXG4gKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gcnVsZVxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VtZW50XG4gKi9cbnBsdXJhbGl6ZS5hZGRTaW5ndWxhclJ1bGUgPSAocnVsZSwgcmVwbGFjZW1lbnQpID0+IHtcbiAgICBzaW5ndWxhclJ1bGVzLnB1c2goW3Nhbml0aXplUnVsZShydWxlKSwgcmVwbGFjZW1lbnRdKTtcbn07XG5cbi8qKlxuICogQWRkIGFuIHVuY291bnRhYmxlIHdvcmQgcnVsZS5cbiAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSB3b3JkXG4gKi9cbnBsdXJhbGl6ZS5hZGRVbmNvdW50YWJsZVJ1bGUgPSAod29yZCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd29yZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdW5jb3VudGFibGVzW3dvcmQudG9Mb3dlckNhc2UoKV0gPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2V0IHNpbmd1bGFyIGFuZCBwbHVyYWwgcmVmZXJlbmNlcyBmb3IgdGhlIHdvcmQuXG4gICAgcGx1cmFsaXplLmFkZFBsdXJhbFJ1bGUod29yZCwgJyQwJyk7XG4gICAgcGx1cmFsaXplLmFkZFNpbmd1bGFyUnVsZSh3b3JkLCAnJDAnKTtcbn07XG5cbi8qKlxuICogQWRkIGFuIGlycmVndWxhciB3b3JkIGRlZmluaXRpb24uXG4gKiBAcGFyYW0ge1N0cmluZ30gc2luZ2xlXG4gKiBAcGFyYW0ge1N0cmluZ30gcGx1cmFsXG4gKi9cbnBsdXJhbGl6ZS5hZGRJcnJlZ3VsYXJSdWxlID0gKHNpbmdsZSwgcGx1cmFsKSA9PiB7XG4gICAgbGV0IG9uZSA9IHBsdXJhbC50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBtYW55ID0gc2luZ2xlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpcnJlZ3VsYXJTaW5nbGVzW29uZV0gPSBtYW55O1xuICAgIGlycmVndWxhclBsdXJhbHNbbWFueV0gPSBvbmU7XG59O1xuXG4vKipcbiAqIElycmVndWxhciBydWxlcy5cbiAqL1xuW1xuICAgIC8vIFByb25vdW5zLlxuICAgIFsnSScsICd3ZSddLFxuICAgIFsnbWUnLCAndXMnXSxcbiAgICBbJ2hlJywgJ3RoZXknXSxcbiAgICBbJ3NoZScsICd0aGV5J10sXG4gICAgWyd0aGVtJywgJ3RoZW0nXSxcbiAgICBbJ215c2VsZicsICdvdXJzZWx2ZXMnXSxcbiAgICBbJ3lvdXJzZWxmJywgJ3lvdXJzZWx2ZXMnXSxcbiAgICBbJ2l0c2VsZicsICd0aGVtc2VsdmVzJ10sXG4gICAgWydoZXJzZWxmJywgJ3RoZW1zZWx2ZXMnXSxcbiAgICBbJ2hpbXNlbGYnLCAndGhlbXNlbHZlcyddLFxuICAgIFsndGhlbXNlbGYnLCAndGhlbXNlbHZlcyddLFxuICAgIFsnaXMnLCAnYXJlJ10sXG4gICAgWyd0aGlzJywgJ3RoZXNlJ10sXG4gICAgWyd0aGF0JywgJ3Rob3NlJ10sXG4gICAgLy8gV29yZHMgZW5kaW5nIGluIHdpdGggYSBjb25zb25hbnQgYW5kIGBvYC5cbiAgICBbJ2VjaG8nLCAnZWNob2VzJ10sXG4gICAgWydkaW5nbycsICdkaW5nb2VzJ10sXG4gICAgWyd2b2xjYW5vJywgJ3ZvbGNhbm9lcyddLFxuICAgIFsndG9ybmFkbycsICd0b3JuYWRvZXMnXSxcbiAgICBbJ3RvcnBlZG8nLCAndG9ycGVkb2VzJ10sXG4gICAgLy8gRW5kcyB3aXRoIGB1c2AuXG4gICAgWydnZW51cycsICdnZW5lcmEnXSxcbiAgICBbJ3Zpc2N1cycsICd2aXNjZXJhJ10sXG4gICAgLy8gRW5kcyB3aXRoIGBtYWAuXG4gICAgWydzdGlnbWEnLCAnc3RpZ21hdGEnXSxcbiAgICBbJ3N0b21hJywgJ3N0b21hdGEnXSxcbiAgICBbJ2RvZ21hJywgJ2RvZ21hdGEnXSxcbiAgICBbJ2xlbW1hJywgJ2xlbW1hdGEnXSxcbiAgICBbJ3NjaGVtYScsICdzY2hlbWF0YSddLFxuICAgIFsnYW5hdGhlbWEnLCAnYW5hdGhlbWF0YSddLFxuICAgIC8vIE90aGVyIGlycmVndWxhciBydWxlcy5cbiAgICBbJ294JywgJ294ZW4nXSxcbiAgICBbJ2F4ZScsICdheGVzJ10sXG4gICAgWydkaWUnLCAnZGljZSddLFxuICAgIFsneWVzJywgJ3llc2VzJ10sXG4gICAgWydmb290JywgJ2ZlZXQnXSxcbiAgICBbJ2VhdmUnLCAnZWF2ZXMnXSxcbiAgICBbJ2dvb3NlJywgJ2dlZXNlJ10sXG4gICAgWyd0b290aCcsICd0ZWV0aCddLFxuICAgIFsncXVpeicsICdxdWl6emVzJ10sXG4gICAgWydodW1hbicsICdodW1hbnMnXSxcbiAgICBbJ3Byb29mJywgJ3Byb29mcyddLFxuICAgIFsnY2FydmUnLCAnY2FydmVzJ10sXG4gICAgWyd2YWx2ZScsICd2YWx2ZXMnXSxcbiAgICBbJ3RoaWVmJywgJ3RoaWV2ZXMnXSxcbiAgICBbJ2dlbmllJywgJ2dlbmllcyddLFxuICAgIFsnZ3Jvb3ZlJywgJ2dyb292ZXMnXSxcbiAgICBbJ3BpY2theGUnLCAncGlja2F4ZXMnXSxcbiAgICBbJ3doaXNrZXknLCAnd2hpc2tpZXMnXVxuXS5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgcmV0dXJuIHBsdXJhbGl6ZS5hZGRJcnJlZ3VsYXJSdWxlKHJ1bGVbMF0sIHJ1bGVbMV0pO1xufSk7XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBydWxlcy5cbiAqL1xuW1xuICAgIFsvcz8kL2ksICdzJ10sXG4gICAgWy8oW15hZWlvdV1lc2UpJC9pLCAnJDEnXSxcbiAgICBbLyhheHx0ZXN0KWlzJC9pLCAnJDFlcyddLFxuICAgIFsvKGFsaWFzfFteYW91XXVzfHRsYXN8Z2FzfHJpcykkL2ksICckMWVzJ10sXG4gICAgWy8oZVttbl11KXM/JC9pLCAnJDFzJ10sXG4gICAgWy8oW15sXWlhc3xbYWVpb3VdbGFzfFtlbWp6cl1hc3xbaXVdYW0pJC9pLCAnJDEnXSxcbiAgICBbLyhhbHVtbnxzeWxsYWJ8b2N0b3B8dmlyfHJhZGl8bnVjbGV8ZnVuZ3xjYWN0fHN0aW11bHx0ZXJtaW58YmFjaWxsfGZvY3x1dGVyfGxvY3xzdHJhdCkoPzp1c3xpKSQvaSwgJyQxaSddLFxuICAgIFsvKGFsdW1ufGFsZ3x2ZXJ0ZWJyKSg/OmF8YWUpJC9pLCAnJDFhZSddLFxuICAgIFsvKHNlcmFwaHxjaGVydWIpKD86aW0pPyQvaSwgJyQxaW0nXSxcbiAgICBbLyhoZXJ8YXR8Z3IpbyQvaSwgJyQxb2VzJ10sXG4gICAgWy8oYWdlbmR8YWRkZW5kfG1pbGxlbm5pfGRhdHxleHRyZW18YmFjdGVyaXxkZXNpZGVyYXR8c3RyYXR8Y2FuZGVsYWJyfGVycmF0fG92fHN5bXBvc2l8Y3VycmljdWx8YXV0b21hdHxxdW9yKSg/OmF8dW0pJC9pLCAnJDFhJ10sXG4gICAgWy8oYXBoZWxpfGh5cGVyYmF0fHBlcmloZWxpfGFzeW5kZXR8bm91bWVufHBoZW5vbWVufGNyaXRlcml8b3JnYW58cHJvbGVnb21lbnxoZWRyfGF1dG9tYXQpKD86YXxvbikkL2ksICckMWEnXSxcbiAgICBbL3NpcyQvaSwgJ3NlcyddLFxuICAgIFsvKD86KGtuaXx3aXxsaSlmZXwoYXJ8bHxlYXxlb3xvYXxob28pZikkL2ksICckMSQydmVzJ10sXG4gICAgWy8oW15hZWlvdXldfHF1KXkkL2ksICckMWllcyddLFxuICAgIFsvKFteY2hdW2llb11bbG5dKWV5JC9pLCAnJDFpZXMnXSxcbiAgICBbLyh4fGNofHNzfHNofHp6KSQvaSwgJyQxZXMnXSxcbiAgICBbLyhtYXRyfGNvZHxtdXJ8c2lsfHZlcnR8aW5kfGFwcGVuZCkoPzppeHxleCkkL2ksICckMWljZXMnXSxcbiAgICBbLyhtfGwpKD86aWNlfG91c2UpJC9pLCAnJDFpY2UnXSxcbiAgICBbLyhwZSkoPzpyc29ufG9wbGUpJC9pLCAnJDFvcGxlJ10sXG4gICAgWy8oY2hpbGQpKD86cmVuKT8kL2ksICckMXJlbiddLFxuICAgIFsvZWF1eCQvaSwgJyQwJ10sXG4gICAgWy9tW2FlXW4kL2ksICdtZW4nXSxcbiAgICBbJ3Rob3UnLCAneW91J11cbl0uZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgIHJldHVybiBwbHVyYWxpemUuYWRkUGx1cmFsUnVsZShydWxlWzBdLCBydWxlWzFdKTtcbn0pO1xuXG4vKipcbiAqIFNpbmd1bGFyaXphdGlvbiBydWxlcy5cbiAqL1xuW1xuICAgIFsvcyQvaSwgJyddLFxuICAgIFsvKHNzKSQvaSwgJyQxJ10sXG4gICAgWy8oKGEpbmFseXwoYilhfChkKWlhZ25vfChwKWFyZW50aGV8KHApcm9nbm98KHMpeW5vcHwodCloZSkoPzpzaXN8c2VzKSQvaSwgJyQxc2lzJ10sXG4gICAgWy8oXmFuYWx5KSg/OnNpc3xzZXMpJC9pLCAnJDFzaXMnXSxcbiAgICBbLyh3aXxrbml8KD86YWZ0ZXJ8aGFsZnxoaWdofGxvd3xtaWR8bm9ufG5pZ2h0fFteXFx3XXxeKWxpKXZlcyQvaSwgJyQxZmUnXSxcbiAgICBbLyhhcnwoPzp3b3xbYWVdKWx8W2VvXVthb10pdmVzJC9pLCAnJDFmJ10sXG4gICAgWy8oW15hZWlvdXldfHF1KWllcyQvaSwgJyQxeSddLFxuICAgIFsvKF5bcGxdfHpvbWJ8Xig/Om5lY2spP3R8W2Flb11bbHRdfGN1dClpZXMkL2ksICckMWllJ10sXG4gICAgWy8oXFxiKD86bW9ufHNtaWwpKWllcyQvaSwgJyQxZXknXSxcbiAgICBbLyhtfGwpaWNlJC9pLCAnJDFvdXNlJ10sXG4gICAgWy8oc2VyYXBofGNoZXJ1YilpbSQvaSwgJyQxJ10sXG4gICAgWy8oeHxjaHxzc3xzaHx6enx0dG98Z298Y2hvfGFsaWFzfFteYW91XXVzfHRsYXN8Z2FzfCg/OmhlcnxhdHxncilvfHJpcykoPzplcyk/JC9pLCAnJDEnXSxcbiAgICBbLyhlW21uXXUpcz8kL2ksICckMSddLFxuICAgIFsvKG1vdmllfHR3ZWx2ZSlzJC9pLCAnJDEnXSxcbiAgICBbLyhjcmlzfHRlc3R8ZGlhZ25vcykoPzppc3xlcykkL2ksICckMWlzJ10sXG4gICAgWy8oYWx1bW58c3lsbGFifG9jdG9wfHZpcnxyYWRpfG51Y2xlfGZ1bmd8Y2FjdHxzdGltdWx8dGVybWlufGJhY2lsbHxmb2N8dXRlcnxsb2N8c3RyYXQpKD86dXN8aSkkL2ksICckMXVzJ10sXG4gICAgWy8oYWdlbmR8YWRkZW5kfG1pbGxlbm5pfGRhdHxleHRyZW18YmFjdGVyaXxkZXNpZGVyYXR8c3RyYXR8Y2FuZGVsYWJyfGVycmF0fG92fHN5bXBvc2l8Y3VycmljdWx8cXVvcilhJC9pLCAnJDF1bSddLFxuICAgIFsvKGFwaGVsaXxoeXBlcmJhdHxwZXJpaGVsaXxhc3luZGV0fG5vdW1lbnxwaGVub21lbnxjcml0ZXJpfG9yZ2FufHByb2xlZ29tZW58aGVkcnxhdXRvbWF0KWEkL2ksICckMW9uJ10sXG4gICAgWy8oYWx1bW58YWxnfHZlcnRlYnIpYWUkL2ksICckMWEnXSxcbiAgICBbLyhjb2R8bXVyfHNpbHx2ZXJ0fGluZClpY2VzJC9pLCAnJDFleCddLFxuICAgIFsvKG1hdHJ8YXBwZW5kKWljZXMkL2ksICckMWl4J10sXG4gICAgWy8ocGUpKHJzb258b3BsZSkkL2ksICckMXJzb24nXSxcbiAgICBbLyhjaGlsZClyZW4kL2ksICckMSddLFxuICAgIFsvKGVhdSl4PyQvaSwgJyQxJ10sXG4gICAgWy9tZW4kL2ksICdtYW4nXVxuXS5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgcmV0dXJuIHBsdXJhbGl6ZS5hZGRTaW5ndWxhclJ1bGUocnVsZVswXSwgcnVsZVsxXSk7XG59KTtcblxuLyoqXG4gKiBVbmNvdW50YWJsZSBydWxlcy5cbiAqL1xuW1xuICAgIC8vIFNpbmd1bGFyIHdvcmRzIHdpdGggbm8gcGx1cmFscy5cbiAgICAnYWR2aWNlJyxcbiAgICAnYWR1bHRob29kJyxcbiAgICAnYWdlbmRhJyxcbiAgICAnYWlkJyxcbiAgICAnYWxjb2hvbCcsXG4gICAgJ2FtbW8nLFxuICAgICdhdGhsZXRpY3MnLFxuICAgICdiaXNvbicsXG4gICAgJ2Jsb29kJyxcbiAgICAnYnJlYW0nLFxuICAgICdidWZmYWxvJyxcbiAgICAnYnV0dGVyJyxcbiAgICAnY2FycCcsXG4gICAgJ2Nhc2gnLFxuICAgICdjaGFzc2lzJyxcbiAgICAnY2hlc3MnLFxuICAgICdjbG90aGluZycsXG4gICAgJ2NvbW1lcmNlJyxcbiAgICAnY29kJyxcbiAgICAnY29vcGVyYXRpb24nLFxuICAgICdjb3JwcycsXG4gICAgJ2RpZ2VzdGlvbicsXG4gICAgJ2RlYnJpcycsXG4gICAgJ2RpYWJldGVzJyxcbiAgICAnZW5lcmd5JyxcbiAgICAnZXF1aXBtZW50JyxcbiAgICAnZWxrJyxcbiAgICAnZXhjcmV0aW9uJyxcbiAgICAnZXhwZXJ0aXNlJyxcbiAgICAnZmxvdW5kZXInLFxuICAgICdmdW4nLFxuICAgICdnYWxsb3dzJyxcbiAgICAnZ2FyYmFnZScsXG4gICAgJ2dyYWZmaXRpJyxcbiAgICAnaGVhZHF1YXJ0ZXJzJyxcbiAgICAnaGVhbHRoJyxcbiAgICAnaGVycGVzJyxcbiAgICAnaGlnaGppbmtzJyxcbiAgICAnaG9tZXdvcmsnLFxuICAgICdob3VzZXdvcmsnLFxuICAgICdpbmZvcm1hdGlvbicsXG4gICAgJ2plYW5zJyxcbiAgICAnanVzdGljZScsXG4gICAgJ2t1ZG9zJyxcbiAgICAnbGFib3VyJyxcbiAgICAnbGl0ZXJhdHVyZScsXG4gICAgJ21hY2hpbmVyeScsXG4gICAgJ21hY2tlcmVsJyxcbiAgICAnbWVkaWEnLFxuICAgICdtZXdzJyxcbiAgICAnbW9vc2UnLFxuICAgICdtdXNpYycsXG4gICAgJ25ld3MnLFxuICAgICdwaWtlJyxcbiAgICAncGxhbmt0b24nLFxuICAgICdwbGllcnMnLFxuICAgICdwb2xsdXRpb24nLFxuICAgICdwcmVtaXNlcycsXG4gICAgJ3JhaW4nLFxuICAgICdyZXNlYXJjaCcsXG4gICAgJ3JpY2UnLFxuICAgICdzYWxtb24nLFxuICAgICdzY2lzc29ycycsXG4gICAgJ3NlcmllcycsXG4gICAgJ3Nld2FnZScsXG4gICAgJ3NoYW1ibGVzJyxcbiAgICAnc2hyaW1wJyxcbiAgICAnc3BlY2llcycsXG4gICAgJ3N0YWZmJyxcbiAgICAnc3dpbmUnLFxuICAgICd0cm91dCcsXG4gICAgJ3RyYWZmaWMnLFxuICAgICd0cmFuc3BvcmF0aW9uJyxcbiAgICAndHVuYScsXG4gICAgJ3dlYWx0aCcsXG4gICAgJ3dlbGZhcmUnLFxuICAgICd3aGl0aW5nJyxcbiAgICAnd2lsZGViZWVzdCcsXG4gICAgJ3dpbGRsaWZlJyxcbiAgICAneW91JyxcbiAgICAvLyBSZWdleGVzLlxuICAgIC9wb3gkL2ksIC8vIFwiY2hpY2twb3hcIiwgXCJzbWFsbHBveFwiXG4gICAgL29pcyQvaSxcbiAgICAvZGVlciQvaSwgLy8gXCJkZWVyXCIsIFwicmVpbmRlZXJcIlxuICAgIC9maXNoJC9pLCAvLyBcImZpc2hcIiwgXCJibG93ZmlzaFwiLCBcImFuZ2VsZmlzaFwiXG4gICAgL3NoZWVwJC9pLFxuICAgIC9tZWFzbGVzJC9pLFxuICAgIC9bXmFlaW91XWVzZSQvaSAvLyBcImNoaW5lc2VcIiwgXCJqYXBhbmVzZVwiXG5dLmZvckVhY2gocGx1cmFsaXplLmFkZFVuY291bnRhYmxlUnVsZSk7XG5cbkBQaXBlKHsgbmFtZTogJ3BsdXJhbCcgfSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQbHVyYWxQaXBlIHtcbiAgICB0cmFuc2Zvcm0odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHBsdXJhbGl6ZSh2YWx1ZSk7XG4gICAgfVxufVxuIl19

/***/ },
/* 476 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Deferred = Deferred;
	/**
	 * A Promise that uses the deferred anti-pattern
	 */
	function Deferred() {
	    var temp = {};
	    var promise = new Promise(function (resolve, reject) {
	        temp.resolve = resolve;
	        temp.reject = reject;
	    });
	    promise.resolve = temp.resolve;
	    promise.reject = temp.reject;
	    return promise;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9kZWZlcnJlZC9EZWZlcnJlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUdnQixRLEdBQUEsUTs7OztBQUFULFNBQVMsUUFBVCxHQUFvQjtBQUN2QixRQUFNLE9BQU8sRUFBYjtBQUNBLFFBQU0sVUFBVSxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQzdDLGFBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxhQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0gsS0FIZSxDQUFoQjtBQUlBLFlBQVEsT0FBUixHQUFrQixLQUFLLE9BQXZCO0FBQ0EsWUFBUSxNQUFSLEdBQWlCLEtBQUssTUFBdEI7QUFDQSxXQUFPLE9BQVA7QUFDSCIsImZpbGUiOiJEZWZlcnJlZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNpYmlsaWEvRG9jdW1lbnRzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgUHJvbWlzZSB0aGF0IHVzZXMgdGhlIGRlZmVycmVkIGFudGktcGF0dGVyblxuICovXG5leHBvcnQgZnVuY3Rpb24gRGVmZXJyZWQoKSB7XG4gICAgY29uc3QgdGVtcCA9IHt9O1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRlbXAucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIHRlbXAucmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuICAgIHByb21pc2UucmVzb2x2ZSA9IHRlbXAucmVzb2x2ZTtcbiAgICBwcm9taXNlLnJlamVjdCA9IHRlbXAucmVqZWN0O1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuIl19

/***/ },
/* 477 */,
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./af": 229,
		"./af.js": 229,
		"./ar": 233,
		"./ar-ma": 230,
		"./ar-ma.js": 230,
		"./ar-sa": 231,
		"./ar-sa.js": 231,
		"./ar-tn": 232,
		"./ar-tn.js": 232,
		"./ar.js": 233,
		"./az": 234,
		"./az.js": 234,
		"./be": 235,
		"./be.js": 235,
		"./bg": 236,
		"./bg.js": 236,
		"./bn": 237,
		"./bn.js": 237,
		"./bo": 238,
		"./bo.js": 238,
		"./br": 239,
		"./br.js": 239,
		"./bs": 240,
		"./bs.js": 240,
		"./ca": 241,
		"./ca.js": 241,
		"./cs": 242,
		"./cs.js": 242,
		"./cv": 243,
		"./cv.js": 243,
		"./cy": 244,
		"./cy.js": 244,
		"./da": 245,
		"./da.js": 245,
		"./de": 247,
		"./de-at": 246,
		"./de-at.js": 246,
		"./de.js": 247,
		"./dv": 248,
		"./dv.js": 248,
		"./el": 249,
		"./el.js": 249,
		"./en-au": 250,
		"./en-au.js": 250,
		"./en-ca": 251,
		"./en-ca.js": 251,
		"./en-gb": 252,
		"./en-gb.js": 252,
		"./en-ie": 253,
		"./en-ie.js": 253,
		"./en-nz": 254,
		"./en-nz.js": 254,
		"./eo": 255,
		"./eo.js": 255,
		"./es": 256,
		"./es.js": 256,
		"./et": 257,
		"./et.js": 257,
		"./eu": 258,
		"./eu.js": 258,
		"./fa": 259,
		"./fa.js": 259,
		"./fi": 260,
		"./fi.js": 260,
		"./fo": 261,
		"./fo.js": 261,
		"./fr": 264,
		"./fr-ca": 262,
		"./fr-ca.js": 262,
		"./fr-ch": 263,
		"./fr-ch.js": 263,
		"./fr.js": 264,
		"./fy": 265,
		"./fy.js": 265,
		"./gd": 266,
		"./gd.js": 266,
		"./gl": 267,
		"./gl.js": 267,
		"./he": 268,
		"./he.js": 268,
		"./hi": 269,
		"./hi.js": 269,
		"./hr": 270,
		"./hr.js": 270,
		"./hu": 271,
		"./hu.js": 271,
		"./hy-am": 272,
		"./hy-am.js": 272,
		"./id": 273,
		"./id.js": 273,
		"./is": 274,
		"./is.js": 274,
		"./it": 275,
		"./it.js": 275,
		"./ja": 276,
		"./ja.js": 276,
		"./jv": 277,
		"./jv.js": 277,
		"./ka": 278,
		"./ka.js": 278,
		"./kk": 279,
		"./kk.js": 279,
		"./km": 280,
		"./km.js": 280,
		"./ko": 281,
		"./ko.js": 281,
		"./ky": 282,
		"./ky.js": 282,
		"./lb": 283,
		"./lb.js": 283,
		"./lo": 284,
		"./lo.js": 284,
		"./lt": 285,
		"./lt.js": 285,
		"./lv": 286,
		"./lv.js": 286,
		"./me": 287,
		"./me.js": 287,
		"./mk": 288,
		"./mk.js": 288,
		"./ml": 289,
		"./ml.js": 289,
		"./mr": 290,
		"./mr.js": 290,
		"./ms": 292,
		"./ms-my": 291,
		"./ms-my.js": 291,
		"./ms.js": 292,
		"./my": 293,
		"./my.js": 293,
		"./nb": 294,
		"./nb.js": 294,
		"./ne": 295,
		"./ne.js": 295,
		"./nl": 296,
		"./nl.js": 296,
		"./nn": 297,
		"./nn.js": 297,
		"./pa-in": 298,
		"./pa-in.js": 298,
		"./pl": 299,
		"./pl.js": 299,
		"./pt": 301,
		"./pt-br": 300,
		"./pt-br.js": 300,
		"./pt.js": 301,
		"./ro": 302,
		"./ro.js": 302,
		"./ru": 303,
		"./ru.js": 303,
		"./se": 304,
		"./se.js": 304,
		"./si": 305,
		"./si.js": 305,
		"./sk": 306,
		"./sk.js": 306,
		"./sl": 307,
		"./sl.js": 307,
		"./sq": 308,
		"./sq.js": 308,
		"./sr": 310,
		"./sr-cyrl": 309,
		"./sr-cyrl.js": 309,
		"./sr.js": 310,
		"./ss": 311,
		"./ss.js": 311,
		"./sv": 312,
		"./sv.js": 312,
		"./sw": 313,
		"./sw.js": 313,
		"./ta": 314,
		"./ta.js": 314,
		"./te": 315,
		"./te.js": 315,
		"./th": 316,
		"./th.js": 316,
		"./tl-ph": 317,
		"./tl-ph.js": 317,
		"./tlh": 318,
		"./tlh.js": 318,
		"./tr": 319,
		"./tr.js": 319,
		"./tzl": 320,
		"./tzl.js": 320,
		"./tzm": 322,
		"./tzm-latn": 321,
		"./tzm-latn.js": 321,
		"./tzm.js": 322,
		"./uk": 323,
		"./uk.js": 323,
		"./uz": 324,
		"./uz.js": 324,
		"./vi": 325,
		"./vi.js": 325,
		"./x-pseudo": 326,
		"./x-pseudo.js": 326,
		"./zh-cn": 327,
		"./zh-cn.js": 327,
		"./zh-tw": 328,
		"./zh-tw.js": 328
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 478;


/***/ }
]);
//# sourceMappingURL=lib.47bd572c3a857e4fe199.bundle.map