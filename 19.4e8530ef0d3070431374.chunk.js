webpackJsonp([19],{

/***/ 1132:
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztJQU9hLFcsV0FBQSxXLFdBTFoscUJBQVU7QUFDUCxZQUFRLENBQUMsTUFBRCxDQUREO0FBRVAsY0FBVSxjQUZIO0FBR1AsY0FBVTtBQUhILENBQVYsQzs7Ozs7OzttQ0FNYztBQUNQLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxhQUFMLENBQW1CLEtBQUssSUFBeEIsRUFBOEIsS0FBL0M7QUFDSCIsImZpbGUiOiJDb2RlU25pcHBldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYnJpYW5raW1iYWxsL05vdm8vbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBpbnB1dHM6IFsnY29kZSddLFxuICAgIHNlbGVjdG9yOiAnY29kZS1zbmlwcGV0JyxcbiAgICB0ZW1wbGF0ZTogJzxwcmU+PGNvZGUgW2lubmVySHRtbF09XCJoaWdobGlnaHRcIj48L2NvZGU+PC9wcmU+J1xufSlcbmV4cG9ydCBjbGFzcyBDb2RlU25pcHBldCB7XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ID0gaGxqcy5oaWdobGlnaHRBdXRvKHRoaXMuY29kZSkudmFsdWU7XG4gICAgfVxufVxuIl19

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PipesDemo = undefined;
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(15);
	
	var _CodeSnippet = __webpack_require__(1132);
	
	var _PluralizeDemo = __webpack_require__(1181);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvcGlwZXMvUGlwZXNEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7OztBQUVBLElBQU0sdWJBQU47O0lBc0JhLFMsV0FBQSxTLFdBVloscUJBQVU7QUFDUCxjQUFVLFlBREg7QUFFUCxnQkFBWSwwQkFGTDtBQUtQLFdBQU8sMEJBTEE7QUFRUCxjQUFVO0FBUkgsQ0FBVixDLGdCQVdHLHFCQUFjO0FBQUE7O0FBQ1YsU0FBSyxnQkFBTDtBQUNILEMiLCJmaWxlIjoiUGlwZXNEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9icmlhbmtpbWJhbGwvTm92by9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVyYWxQaXBlIH0gZnJvbSAnLi8uLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbmltcG9ydCB7IENvZGVTbmlwcGV0IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQnO1xuXG5pbXBvcnQgUGx1cmFsaXplRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9QbHVyYWxpemVEZW1vLmh0bWwnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+UGlwZXM8L2gxPlxuICAgIDxwPlV0aWxpdHkgYW5kIGhlbHBmdWwgcGlwZXMuPC9wPlxuXG4gICAgPGg1PlBsdXJhbGl6ZSA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9waXBlcy9wbHVyYWxcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDU+XG4gICAgPHA+TWFrZXMgd29ya3MgcGx1cmFsIG9yIHZpY2UtdmVyc2E8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgcGlwZXMtZGVtb1wiPiR7UGx1cmFsaXplRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlBsdXJhbGl6ZURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwaXBlcy1kZW1vJyxcbiAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIENvZGVTbmlwcGV0XG4gICAgXSxcbiAgICBwaXBlczogW1xuICAgICAgICBQbHVyYWxQaXBlXG4gICAgXSxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgUGlwZXNEZW1vIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5QbHVyYWxpemVEZW1vVHBsID0gUGx1cmFsaXplRGVtb1RwbDtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 1181:
/***/ function(module, exports) {

	module.exports = "<p>{{'Kitty' | plural}}</p>\n<p>{{'Cat' | plural}}</p>\n"

/***/ }

});
//# sourceMappingURL=19.4e8530ef0d3070431374.bundle.map