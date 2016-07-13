webpackJsonp([14],{

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

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LoadingDemo = undefined;
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(15);
	
	var _CodeSnippet = __webpack_require__(1132);
	
	var _LoadingCircleDemo = __webpack_require__(1170);
	
	var _LoadingCircleDemo2 = _interopRequireDefault(_LoadingCircleDemo);
	
	var _LoadingLineDemo = __webpack_require__(1171);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvbG9hZGluZy9Mb2FkaW5nRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sdzZCQUFOOztJQTZCYSxXLFdBQUEsVyxXQVJaLHFCQUFVO0FBQ1AsY0FBVSxjQURIO0FBRVAsZ0JBQVksK0RBRkw7QUFNUCxjQUFVO0FBTkgsQ0FBVixDLGdCQVNHLHVCQUFjO0FBQUE7O0FBQ1YsU0FBSyxvQkFBTDtBQUNBLFNBQUssa0JBQUw7QUFDSCxDIiwiZmlsZSI6IkxvYWRpbmdEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9icmlhbmtpbWJhbGwvTm92by9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOT1ZPX0xPQURJTkdfRUxFTUVOVFMgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuaW1wb3J0IHsgQ29kZVNuaXBwZXQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9jb2Rlc25pcHBldC9Db2RlU25pcHBldCc7XG5cbmltcG9ydCBMb2FkaW5nQ2lyY2xlRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9Mb2FkaW5nQ2lyY2xlRGVtby5odG1sJztcbmltcG9ydCBMb2FkaW5nTGluZURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvTG9hZGluZ0xpbmVEZW1vLmh0bWwnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+TG9hZGluZyBBbmltYXRpb25zIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL2xvYWRpbmdcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+TG9hZGluZyBhbmltYXRpb25zIGFyZSB1c2VkIHRvIGhlbHAgaW5kaWNhdGUgdG8gdGhlIHVzZXIgdGhhdCBzb21lIHNvcnQgb2YgcHJvZ3Jlc3MgaXMgdGFraW5nIHBsYWNlLiBUaGVzZSBhcmUgZXNwZWNpYWxseSBoZWxwZnVsIGZvciBpbnRlbnNpdmUgb3BlcmF0aW9ucyB0aGF0IG1pZ2h0IHRha2UgZXh0cmEgdGltZS48L3A+XG5cbiAgICA8aDI+VGhlbWVzPC9oMj5cblxuICAgIDxoNT5MaW5lPC9oNT5cbiAgICA8cD5UaGUgRG90IExpbmUgYW5pbWF0aW9uIGlzIGluZGV0ZXJtaW5hdGUuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGxvYWRpbmctbGluZS1kZW1vXCI+JHtMb2FkaW5nTGluZURlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJMb2FkaW5nTGluZURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5TcGlubmVyPC9oNT5cbiAgICA8cD5cbiAgICAgICAgVGhlIERvdCBTcGlubmVyIGFuaW1hdGlvbiBpcyB1c2VkIGFzIGFuIGFsdGVybmF0ZSB0byB0aGUgbG9hZGluZyBsaW5lIGFuaW1hdGlvbi5cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgbG9hZGluZy1zcGlubmVyLWRlbW9cIj4ke0xvYWRpbmdDaXJjbGVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiTG9hZGluZ0NpcmNsZURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsb2FkaW5nLWRlbW8nLFxuICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgTk9WT19MT0FESU5HX0VMRU1FTlRTLFxuICAgICAgICBDb2RlU25pcHBldFxuICAgIF0sXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdEZW1vIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5Mb2FkaW5nQ2lyY2xlRGVtb1RwbCA9IExvYWRpbmdDaXJjbGVEZW1vVHBsO1xuICAgICAgICB0aGlzLkxvYWRpbmdMaW5lRGVtb1RwbCA9IExvYWRpbmdMaW5lRGVtb1RwbDtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 1170:
/***/ function(module, exports) {

	module.exports = "<section>\n    <div class=\"whiteBg\">\n        <novo-spinner theme=\"multicolor\"></novo-spinner>\n    </div>\n    <div class=\"grayBg\">\n        <novo-spinner></novo-spinner>\n    </div>\n</section>\n<section>\n    <div class=\"blueBg\">\n        <novo-spinner inverse></novo-spinner>\n    </div>\n    <div class=\"darkBlueBg\">\n        <novo-spinner theme=\"bittersweet\"></novo-spinner>\n    </div>\n</section>\n"

/***/ },

/***/ 1171:
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-loading></novo-loading>\n</header>\n<header class=\"color-container\">\n    <novo-loading inverse></novo-loading>\n</header>\n"

/***/ }

});
//# sourceMappingURL=14.a8cf2ac6a9d89546dfa3.bundle.map