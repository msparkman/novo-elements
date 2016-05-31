webpackJsonp([17],{

/***/ 831:
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztJQU9hLFcsV0FBQSxXLFdBTFoscUJBQVU7QUFDUCxZQUFRLENBQUMsTUFBRCxDQUREO0FBRVAsY0FBVSxjQUZIO0FBR1AsY0FBVTtBQUhILENBQVYsQzs7Ozs7OzttQ0FNYztBQUNQLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxhQUFMLENBQW1CLEtBQUssSUFBeEIsRUFBOEIsS0FBL0M7QUFDSCIsImZpbGUiOiJDb2RlU25pcHBldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgaW5wdXRzOiBbJ2NvZGUnXSxcbiAgICBzZWxlY3RvcjogJ2NvZGUtc25pcHBldCcsXG4gICAgdGVtcGxhdGU6ICc8cHJlPjxjb2RlIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0XCI+PC9jb2RlPjwvcHJlPidcbn0pXG5leHBvcnQgY2xhc3MgQ29kZVNuaXBwZXQge1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodCA9IGhsanMuaGlnaGxpZ2h0QXV0byh0aGlzLmNvZGUpLnZhbHVlO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PipesDemo = undefined;
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(171);
	
	var _CodeSnippet = __webpack_require__(831);
	
	var _PluralizeDemo = __webpack_require__(880);
	
	var _PluralizeDemo2 = _interopRequireDefault(_PluralizeDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Pipes</h1>\n    <p>Utility and helpful pipes.</p>\n\n    <h5>Pluralize <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/pipes/plural">(source)</a></small></h5>\n    <p>Makes works plural or vice-versa</p>\n    <div class="example pipes-demo">' + _PluralizeDemo2.default + '</div>\n    <code-snippet [code]="PluralizeDemoTpl"></code-snippet>\n</div>\n';
	
	var PipesDemo = exports.PipesDemo = (_dec = (0, _core.Component)({
	    selector: 'pipes-demo',
	    directives: [_CodeSnippet.CodeSnippet],
	    pipes: [_novoElements.PluralPipe],
	    template: template
	}), _dec(_class = function PipesDemo() {
	    _classCallCheck(this, PipesDemo);
	
	    this.PluralizeDemoTpl = _PluralizeDemo2.default;
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvcGlwZXMvUGlwZXNEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7OztBQUVBLElBQU0sdWJBQU47O0lBc0JhLFMsV0FBQSxTLFdBVloscUJBQVU7QUFDUCxjQUFVLFlBREg7QUFFUCxnQkFBWSwwQkFGTDtBQUtQLFdBQU8sMEJBTEE7QUFRUCxjQUFVO0FBUkgsQ0FBVixDLGdCQVdHLHFCQUFjO0FBQUE7O0FBQ1YsU0FBSyxnQkFBTDtBQUNILEMiLCJmaWxlIjoiUGlwZXNEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9iaC9ub3ZvL2FwcHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1cmFsUGlwZSB9IGZyb20gJy4vLi4vLi4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG5pbXBvcnQgeyBDb2RlU25pcHBldCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2NvZGVzbmlwcGV0L0NvZGVTbmlwcGV0JztcblxuaW1wb3J0IFBsdXJhbGl6ZURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvUGx1cmFsaXplRGVtby5odG1sJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPlBpcGVzPC9oMT5cbiAgICA8cD5VdGlsaXR5IGFuZCBoZWxwZnVsIHBpcGVzLjwvcD5cblxuICAgIDxoNT5QbHVyYWxpemUgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvcGlwZXMvcGx1cmFsXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2g1PlxuICAgIDxwPk1ha2VzIHdvcmtzIHBsdXJhbCBvciB2aWNlLXZlcnNhPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHBpcGVzLWRlbW9cIj4ke1BsdXJhbGl6ZURlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJQbHVyYWxpemVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGlwZXMtZGVtbycsXG4gICAgZGlyZWN0aXZlczogW1xuICAgICAgICBDb2RlU25pcHBldFxuICAgIF0sXG4gICAgcGlwZXM6IFtcbiAgICAgICAgUGx1cmFsUGlwZVxuICAgIF0sXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXG59KVxuZXhwb3J0IGNsYXNzIFBpcGVzRGVtbyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuUGx1cmFsaXplRGVtb1RwbCA9IFBsdXJhbGl6ZURlbW9UcGw7XG4gICAgfVxufVxuIl19

/***/ },

/***/ 880:
/***/ function(module, exports) {

	module.exports = "<p>{{'Kitty' | plural}}</p>\n<p>{{'Cat' | plural}}</p>\n"

/***/ }

});
//# sourceMappingURL=17.3818a85200ed265ed919.bundle.map