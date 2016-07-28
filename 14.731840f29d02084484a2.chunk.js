webpackJsonp([14],{

/***/ 1136:
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

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LoadingDemo = undefined;
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(14);
	
	var _CodeSnippet = __webpack_require__(1136);
	
	var _LoadingCircleDemo = __webpack_require__(1174);
	
	var _LoadingCircleDemo2 = _interopRequireDefault(_LoadingCircleDemo);
	
	var _LoadingLineDemo = __webpack_require__(1175);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvbG9hZGluZy9Mb2FkaW5nRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sdzZCQUFOOztJQTZCYSxXLFdBQUEsVyxXQVJaLHFCQUFVO0FBQ1AsY0FBVSxjQURIO0FBRVAsZ0JBQVksK0RBRkw7QUFNUCxjQUFVO0FBTkgsQ0FBVixDLGdCQVNHLHVCQUFjO0FBQUE7O0FBQ1YsU0FBSyxvQkFBTDtBQUNBLFNBQUssa0JBQUw7QUFDSCxDIiwiZmlsZSI6IkxvYWRpbmdEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5PVk9fTE9BRElOR19FTEVNRU5UUyB9IGZyb20gJy4vLi4vLi4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG5pbXBvcnQgeyBDb2RlU25pcHBldCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2NvZGVzbmlwcGV0L0NvZGVTbmlwcGV0JztcblxuaW1wb3J0IExvYWRpbmdDaXJjbGVEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0xvYWRpbmdDaXJjbGVEZW1vLmh0bWwnO1xuaW1wb3J0IExvYWRpbmdMaW5lRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9Mb2FkaW5nTGluZURlbW8uaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5Mb2FkaW5nIEFuaW1hdGlvbnMgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvbG9hZGluZ1wiPihzb3VyY2UpPC9hPjwvc21hbGw+PC9oMT5cbiAgICA8cD5Mb2FkaW5nIGFuaW1hdGlvbnMgYXJlIHVzZWQgdG8gaGVscCBpbmRpY2F0ZSB0byB0aGUgdXNlciB0aGF0IHNvbWUgc29ydCBvZiBwcm9ncmVzcyBpcyB0YWtpbmcgcGxhY2UuIFRoZXNlIGFyZSBlc3BlY2lhbGx5IGhlbHBmdWwgZm9yIGludGVuc2l2ZSBvcGVyYXRpb25zIHRoYXQgbWlnaHQgdGFrZSBleHRyYSB0aW1lLjwvcD5cblxuICAgIDxoMj5UaGVtZXM8L2gyPlxuXG4gICAgPGg1PkxpbmU8L2g1PlxuICAgIDxwPlRoZSBEb3QgTGluZSBhbmltYXRpb24gaXMgaW5kZXRlcm1pbmF0ZS48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgbG9hZGluZy1saW5lLWRlbW9cIj4ke0xvYWRpbmdMaW5lRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkxvYWRpbmdMaW5lRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PlNwaW5uZXI8L2g1PlxuICAgIDxwPlxuICAgICAgICBUaGUgRG90IFNwaW5uZXIgYW5pbWF0aW9uIGlzIHVzZWQgYXMgYW4gYWx0ZXJuYXRlIHRvIHRoZSBsb2FkaW5nIGxpbmUgYW5pbWF0aW9uLlxuICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBsb2FkaW5nLXNwaW5uZXItZGVtb1wiPiR7TG9hZGluZ0NpcmNsZURlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJMb2FkaW5nQ2lyY2xlRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xvYWRpbmctZGVtbycsXG4gICAgZGlyZWN0aXZlczogW1xuICAgICAgICBOT1ZPX0xPQURJTkdfRUxFTUVOVFMsXG4gICAgICAgIENvZGVTbmlwcGV0XG4gICAgXSxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0RlbW8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLkxvYWRpbmdDaXJjbGVEZW1vVHBsID0gTG9hZGluZ0NpcmNsZURlbW9UcGw7XG4gICAgICAgIHRoaXMuTG9hZGluZ0xpbmVEZW1vVHBsID0gTG9hZGluZ0xpbmVEZW1vVHBsO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 1174:
/***/ function(module, exports) {

	module.exports = "<section>\n    <div class=\"whiteBg\">\n        <novo-spinner theme=\"multicolor\"></novo-spinner>\n    </div>\n    <div class=\"grayBg\">\n        <novo-spinner></novo-spinner>\n    </div>\n</section>\n<section>\n    <div class=\"blueBg\">\n        <novo-spinner inverse></novo-spinner>\n    </div>\n    <div class=\"darkBlueBg\">\n        <novo-spinner theme=\"bittersweet\"></novo-spinner>\n    </div>\n</section>\n"

/***/ },

/***/ 1175:
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-loading></novo-loading>\n</header>\n<header class=\"color-container\">\n    <novo-loading inverse></novo-loading>\n</header>\n"

/***/ }

});
//# sourceMappingURL=14.731840f29d02084484a2.bundle.map