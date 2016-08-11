webpackJsonp([18],{

/***/ 1144:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CodeSnippet = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztJQU9hLFcsV0FBQSxXLFdBTFoscUJBQVU7QUFDUCxZQUFRLENBQUMsTUFBRCxDQUREO0FBRVAsY0FBVSxjQUZIO0FBR1AsY0FBVTtBQUhILENBQVYsQzs7Ozs7OzttQ0FNYztBQUNQLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxhQUFMLENBQW1CLEtBQUssSUFBeEIsRUFBOEIsS0FBL0M7QUFDSCIsImZpbGUiOiJDb2RlU25pcHBldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIGlucHV0czogWydjb2RlJ10sXG4gICAgc2VsZWN0b3I6ICdjb2RlLXNuaXBwZXQnLFxuICAgIHRlbXBsYXRlOiAnPHByZT48Y29kZSBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodFwiPjwvY29kZT48L3ByZT4nXG59KVxuZXhwb3J0IGNsYXNzIENvZGVTbmlwcGV0IHtcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHQgPSBobGpzLmhpZ2hsaWdodEF1dG8odGhpcy5jb2RlKS52YWx1ZTtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TilesDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(5);
	
	var _novoElements = __webpack_require__(14);
	
	var _CodeSnippet = __webpack_require__(1144);
	
	var _TilesDemo = __webpack_require__(1214);
	
	var _TilesDemo2 = _interopRequireDefault(_TilesDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Tiles <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/tiles">(source)</a></small></h1>\n    <p>\n        This component is intended to behave akin to the radio button component.\n    </p>\n    <h4>Demo</h4>\n    <div>' + _TilesDemo2.default + '</div>\n    <br>\n    You have picked: <strong>{{ currentColor || \'No selection\' }}</strong>\n    <h4>Code</h4>\n    <code-snippet [code]="TilesDemoTpl"></code-snippet>\n</div>\n';
	
	var TilesDemo = exports.TilesDemo = (_dec = (0, _core.Component)({
	    selector: 'tiles-demo',
	    template: template,
	    directives: [_novoElements.NOVO_TILES_ELEMENTS, _CodeSnippet.CodeSnippet, _common.CORE_DIRECTIVES]
	}), _dec(_class = function () {
	    function TilesDemo() {
	        _classCallCheck(this, TilesDemo);
	
	        this.TilesDemoTpl = _TilesDemo2.default;
	        this.demoTiles = [{
	            label: 'Red',
	            value: 'red'
	        }, {
	            label: 'Green',
	            value: 'green'
	        }, {
	            label: 'Blue',
	            value: 'blue'
	        }];
	    }
	
	    _createClass(TilesDemo, [{
	        key: 'colorSelect',
	        value: function colorSelect(newColorValue) {
	            this.currentColor = newColorValue;
	        }
	    }]);
	
	    return TilesDemo;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdGlsZXMvVGlsZXNEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7O0FBRUEsSUFBTSwyZ0JBQU47O0lBd0JhLFMsV0FBQSxTLFdBVFoscUJBQVU7QUFDUCxjQUFVLFlBREg7QUFFUCxjQUFVLFFBRkg7QUFHUCxnQkFBWTtBQUhMLENBQVYsQztBQVVHLHlCQUFjO0FBQUE7O0FBQ1YsYUFBSyxZQUFMO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLENBQ2I7QUFDSSxtQkFBTyxLQURYO0FBRUksbUJBQU87QUFGWCxTQURhLEVBS2I7QUFDSSxtQkFBTyxPQURYO0FBRUksbUJBQU87QUFGWCxTQUxhLEVBU2I7QUFDSSxtQkFBTyxNQURYO0FBRUksbUJBQU87QUFGWCxTQVRhLENBQWpCO0FBY0g7Ozs7b0NBRVcsYSxFQUFlO0FBQ3ZCLGlCQUFLLFlBQUwsR0FBb0IsYUFBcEI7QUFDSCIsImZpbGUiOiJUaWxlc0RlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTk9WT19USUxFU19FTEVNRU5UUyB9IGZyb20gJy4vLi4vLi4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG5pbXBvcnQgeyBDb2RlU25pcHBldCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2NvZGVzbmlwcGV0L0NvZGVTbmlwcGV0JztcblxuaW1wb3J0IFRpbGVzRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9UaWxlc0RlbW8uaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5UaWxlcyA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy90aWxlc1wiPihzb3VyY2UpPC9hPjwvc21hbGw+PC9oMT5cbiAgICA8cD5cbiAgICAgICAgVGhpcyBjb21wb25lbnQgaXMgaW50ZW5kZWQgdG8gYmVoYXZlIGFraW4gdG8gdGhlIHJhZGlvIGJ1dHRvbiBjb21wb25lbnQuXG4gICAgPC9wPlxuICAgIDxoND5EZW1vPC9oND5cbiAgICA8ZGl2PiR7VGlsZXNEZW1vVHBsfTwvZGl2PlxuICAgIDxicj5cbiAgICBZb3UgaGF2ZSBwaWNrZWQ6IDxzdHJvbmc+e3sgY3VycmVudENvbG9yIHx8ICdObyBzZWxlY3Rpb24nIH19PC9zdHJvbmc+XG4gICAgPGg0PkNvZGU8L2g0PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiVGlsZXNEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGlsZXMtZGVtbycsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgTk9WT19USUxFU19FTEVNRU5UUyxcbiAgICAgICAgQ29kZVNuaXBwZXQsXG4gICAgICAgIENPUkVfRElSRUNUSVZFU1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVGlsZXNEZW1vIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5UaWxlc0RlbW9UcGwgPSBUaWxlc0RlbW9UcGw7XG4gICAgICAgIHRoaXMuZGVtb1RpbGVzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUmVkJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3JlZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdHcmVlbicsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdncmVlbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdCbHVlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2JsdWUnXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgY29sb3JTZWxlY3QobmV3Q29sb3JWYWx1ZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRDb2xvciA9IG5ld0NvbG9yVmFsdWU7XG4gICAgfVxufVxuIl19

/***/ },

/***/ 1214:
/***/ function(module, exports) {

	module.exports = "<novo-tiles [options]=\"demoTiles\" (changed)=\"colorSelect($event)\" [(ngModel)]=\"value\"></novo-tiles>\n"

/***/ }

});
//# sourceMappingURL=18.e2f488e539e666834d81.bundle.map