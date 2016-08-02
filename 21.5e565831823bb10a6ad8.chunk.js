webpackJsonp([21],{

/***/ 1140:
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

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PipesDemo = undefined;
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(14);
	
	var _CodeSnippet = __webpack_require__(1140);
	
	var _PluralizeDemo = __webpack_require__(1190);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvcGlwZXMvUGlwZXNEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7OztBQUVBLElBQU0sdWJBQU47O0lBc0JhLFMsV0FBQSxTLFdBVloscUJBQVU7QUFDUCxjQUFVLFlBREg7QUFFUCxnQkFBWSwwQkFGTDtBQUtQLFdBQU8sMEJBTEE7QUFRUCxjQUFVO0FBUkgsQ0FBVixDLGdCQVdHLHFCQUFjO0FBQUE7O0FBQ1YsU0FBSyxnQkFBTDtBQUNILEMiLCJmaWxlIjoiUGlwZXNEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdXJhbFBpcGUgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuaW1wb3J0IHsgQ29kZVNuaXBwZXQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9jb2Rlc25pcHBldC9Db2RlU25pcHBldCc7XG5cbmltcG9ydCBQbHVyYWxpemVEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1BsdXJhbGl6ZURlbW8uaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5QaXBlczwvaDE+XG4gICAgPHA+VXRpbGl0eSBhbmQgaGVscGZ1bCBwaXBlcy48L3A+XG5cbiAgICA8aDU+UGx1cmFsaXplIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL3BpcGVzL3BsdXJhbFwiPihzb3VyY2UpPC9hPjwvc21hbGw+PC9oNT5cbiAgICA8cD5NYWtlcyB3b3JrcyBwbHVyYWwgb3IgdmljZS12ZXJzYTwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBwaXBlcy1kZW1vXCI+JHtQbHVyYWxpemVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiUGx1cmFsaXplRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BpcGVzLWRlbW8nLFxuICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgQ29kZVNuaXBwZXRcbiAgICBdLFxuICAgIHBpcGVzOiBbXG4gICAgICAgIFBsdXJhbFBpcGVcbiAgICBdLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxufSlcbmV4cG9ydCBjbGFzcyBQaXBlc0RlbW8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLlBsdXJhbGl6ZURlbW9UcGwgPSBQbHVyYWxpemVEZW1vVHBsO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 1190:
/***/ function(module, exports) {

	module.exports = "<p>{{'Kitty' | plural}}</p>\n<p>{{'Cat' | plural}}</p>\n"

/***/ }

});
//# sourceMappingURL=21.5e565831823bb10a6ad8.bundle.map