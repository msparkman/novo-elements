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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztJQU9hLFcsV0FBQSxXLFdBTFoscUJBQVU7QUFDUCxZQUFRLENBQUMsTUFBRCxDQUREO0FBRVAsY0FBVSxjQUZIO0FBR1AsY0FBVTtBQUhILENBQVYsQzs7Ozs7OzttQ0FNYztBQUNQLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxhQUFMLENBQW1CLEtBQUssSUFBeEIsRUFBOEIsS0FBL0M7QUFDSCIsImZpbGUiOiJDb2RlU25pcHBldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvZ2l0aHViL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgaW5wdXRzOiBbJ2NvZGUnXSxcbiAgICBzZWxlY3RvcjogJ2NvZGUtc25pcHBldCcsXG4gICAgdGVtcGxhdGU6ICc8cHJlPjxjb2RlIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0XCI+PC9jb2RlPjwvcHJlPidcbn0pXG5leHBvcnQgY2xhc3MgQ29kZVNuaXBwZXQge1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodCA9IGhsanMuaGlnaGxpZ2h0QXV0byh0aGlzLmNvZGUpLnZhbHVlO1xuICAgIH1cbn1cbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdGlsZXMvVGlsZXNEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7O0FBRUEsSUFBTSwyZ0JBQU47O0lBd0JhLFMsV0FBQSxTLFdBVFoscUJBQVU7QUFDUCxjQUFVLFlBREg7QUFFUCxjQUFVLFFBRkg7QUFHUCxnQkFBWTtBQUhMLENBQVYsQztBQVVHLHlCQUFjO0FBQUE7O0FBQ1YsYUFBSyxZQUFMO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLENBQ2I7QUFDSSxtQkFBTyxLQURYO0FBRUksbUJBQU87QUFGWCxTQURhLEVBS2I7QUFDSSxtQkFBTyxPQURYO0FBRUksbUJBQU87QUFGWCxTQUxhLEVBU2I7QUFDSSxtQkFBTyxNQURYO0FBRUksbUJBQU87QUFGWCxTQVRhLENBQWpCO0FBY0g7Ozs7b0NBRVcsYSxFQUFlO0FBQ3ZCLGlCQUFLLFlBQUwsR0FBb0IsYUFBcEI7QUFDSCIsImZpbGUiOiJUaWxlc0RlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2dpdGh1Yi9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBOT1ZPX1RJTEVTX0VMRU1FTlRTIH0gZnJvbSAnLi8uLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbmltcG9ydCB7IENvZGVTbmlwcGV0IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQnO1xuXG5pbXBvcnQgVGlsZXNEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1RpbGVzRGVtby5odG1sJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPlRpbGVzIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL3RpbGVzXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPlxuICAgICAgICBUaGlzIGNvbXBvbmVudCBpcyBpbnRlbmRlZCB0byBiZWhhdmUgYWtpbiB0byB0aGUgcmFkaW8gYnV0dG9uIGNvbXBvbmVudC5cbiAgICA8L3A+XG4gICAgPGg0PkRlbW88L2g0PlxuICAgIDxkaXY+JHtUaWxlc0RlbW9UcGx9PC9kaXY+XG4gICAgPGJyPlxuICAgIFlvdSBoYXZlIHBpY2tlZDogPHN0cm9uZz57eyBjdXJyZW50Q29sb3IgfHwgJ05vIHNlbGVjdGlvbicgfX08L3N0cm9uZz5cbiAgICA8aDQ+Q29kZTwvaDQ+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJUaWxlc0RlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0aWxlcy1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgZGlyZWN0aXZlczogW1xuICAgICAgICBOT1ZPX1RJTEVTX0VMRU1FTlRTLFxuICAgICAgICBDb2RlU25pcHBldCxcbiAgICAgICAgQ09SRV9ESVJFQ1RJVkVTXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaWxlc0RlbW8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLlRpbGVzRGVtb1RwbCA9IFRpbGVzRGVtb1RwbDtcbiAgICAgICAgdGhpcy5kZW1vVGlsZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdSZWQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAncmVkJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0dyZWVuJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2dyZWVuJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0JsdWUnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnYmx1ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBjb2xvclNlbGVjdChuZXdDb2xvclZhbHVlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENvbG9yID0gbmV3Q29sb3JWYWx1ZTtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 1214:
/***/ function(module, exports) {

	module.exports = "<novo-tiles [options]=\"demoTiles\" (changed)=\"colorSelect($event)\" [(ngModel)]=\"value\"></novo-tiles>\n"

/***/ }

});
//# sourceMappingURL=18.2e1a6204a44dbbaef2ee.bundle.map