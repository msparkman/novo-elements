webpackJsonp([13],{

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

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LoadingDemo = undefined;
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(171);
	
	var _CodeSnippet = __webpack_require__(831);
	
	var _LoadingCircleDemo = __webpack_require__(869);
	
	var _LoadingCircleDemo2 = _interopRequireDefault(_LoadingCircleDemo);
	
	var _LoadingLineDemo = __webpack_require__(870);
	
	var _LoadingLineDemo2 = _interopRequireDefault(_LoadingLineDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Loading Animations <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/loading">(source)</a></small></h1>\n    <p>Loading animations are used to help indicate to the user that some sort of progress is taking place. These are especially helpful for intensive operations that might take extra time.</p>\n\n    <h2>Themes</h2>\n\n    <h5>Line</h5>\n    <p>The Dot Line animation is indeterminate.</p>\n    <div class="example loading-line-demo">' + _LoadingLineDemo2.default + '</div>\n    <code-snippet [code]="LoadingLineDemoTpl"></code-snippet>\n\n    <h5>Spinner</h5>\n    <p>\n        The Dot Spinner animation is used as an alternate to the loading line animation.\n    </p>\n    <div class="example loading-spinner-demo">' + _LoadingCircleDemo2.default + '</div>\n    <code-snippet [code]="LoadingCircleDemoTpl"></code-snippet>\n</div>\n';
	
	var LoadingDemo = exports.LoadingDemo = (_dec = (0, _core.Component)({
	    selector: 'loading-demo',
	    directives: [_novoElements.NOVO_LOADING_ELEMENTS, _CodeSnippet.CodeSnippet],
	    template: template
	}), _dec(_class = function LoadingDemo() {
	    _classCallCheck(this, LoadingDemo);
	
	    this.LoadingCircleDemoTpl = _LoadingCircleDemo2.default;
	    this.LoadingLineDemoTpl = _LoadingLineDemo2.default;
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvbG9hZGluZy9Mb2FkaW5nRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sdzZCQUFOOztJQTZCYSxXLFdBQUEsVyxXQVJaLHFCQUFVO0FBQ1AsY0FBVSxjQURIO0FBRVAsZ0JBQVksK0RBRkw7QUFNUCxjQUFVO0FBTkgsQ0FBVixDLGdCQVNHLHVCQUFjO0FBQUE7O0FBQ1YsU0FBSyxvQkFBTDtBQUNBLFNBQUssa0JBQUw7QUFDSCxDIiwiZmlsZSI6IkxvYWRpbmdEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9iaC9ub3ZvL2FwcHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTk9WT19MT0FESU5HX0VMRU1FTlRTIH0gZnJvbSAnLi8uLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbmltcG9ydCB7IENvZGVTbmlwcGV0IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQnO1xuXG5pbXBvcnQgTG9hZGluZ0NpcmNsZURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvTG9hZGluZ0NpcmNsZURlbW8uaHRtbCc7XG5pbXBvcnQgTG9hZGluZ0xpbmVEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0xvYWRpbmdMaW5lRGVtby5odG1sJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPkxvYWRpbmcgQW5pbWF0aW9ucyA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy9sb2FkaW5nXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPkxvYWRpbmcgYW5pbWF0aW9ucyBhcmUgdXNlZCB0byBoZWxwIGluZGljYXRlIHRvIHRoZSB1c2VyIHRoYXQgc29tZSBzb3J0IG9mIHByb2dyZXNzIGlzIHRha2luZyBwbGFjZS4gVGhlc2UgYXJlIGVzcGVjaWFsbHkgaGVscGZ1bCBmb3IgaW50ZW5zaXZlIG9wZXJhdGlvbnMgdGhhdCBtaWdodCB0YWtlIGV4dHJhIHRpbWUuPC9wPlxuXG4gICAgPGgyPlRoZW1lczwvaDI+XG5cbiAgICA8aDU+TGluZTwvaDU+XG4gICAgPHA+VGhlIERvdCBMaW5lIGFuaW1hdGlvbiBpcyBpbmRldGVybWluYXRlLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBsb2FkaW5nLWxpbmUtZGVtb1wiPiR7TG9hZGluZ0xpbmVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiTG9hZGluZ0xpbmVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+U3Bpbm5lcjwvaDU+XG4gICAgPHA+XG4gICAgICAgIFRoZSBEb3QgU3Bpbm5lciBhbmltYXRpb24gaXMgdXNlZCBhcyBhbiBhbHRlcm5hdGUgdG8gdGhlIGxvYWRpbmcgbGluZSBhbmltYXRpb24uXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGxvYWRpbmctc3Bpbm5lci1kZW1vXCI+JHtMb2FkaW5nQ2lyY2xlRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkxvYWRpbmdDaXJjbGVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbG9hZGluZy1kZW1vJyxcbiAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIE5PVk9fTE9BRElOR19FTEVNRU5UUyxcbiAgICAgICAgQ29kZVNuaXBwZXRcbiAgICBdLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nRGVtbyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuTG9hZGluZ0NpcmNsZURlbW9UcGwgPSBMb2FkaW5nQ2lyY2xlRGVtb1RwbDtcbiAgICAgICAgdGhpcy5Mb2FkaW5nTGluZURlbW9UcGwgPSBMb2FkaW5nTGluZURlbW9UcGw7XG4gICAgfVxufVxuIl19

/***/ },

/***/ 869:
/***/ function(module, exports) {

	module.exports = "<section>\n    <div class=\"whiteBg\">\n        <novo-spinner theme=\"multicolor\"></novo-spinner>\n    </div>\n    <div class=\"grayBg\">\n        <novo-spinner></novo-spinner>\n    </div>\n</section>\n<section>\n    <div class=\"blueBg\">\n        <novo-spinner inverse></novo-spinner>\n    </div>\n    <div class=\"darkBlueBg\">\n        <novo-spinner theme=\"bittersweet\"></novo-spinner>\n    </div>\n</section>\n"

/***/ },

/***/ 870:
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-loading></novo-loading>\n</header>\n<header class=\"color-container\">\n    <novo-loading inverse></novo-loading>\n</header>\n"

/***/ }

});
//# sourceMappingURL=13.fef59e593218e6e2b486.bundle.map