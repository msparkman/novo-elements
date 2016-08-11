webpackJsonp([4],{

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

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TooltipDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(14);
	
	var _CodeSnippet = __webpack_require__(1144);
	
	var _TooltipOptionsDemo = __webpack_require__(1219);
	
	var _TooltipOptionsDemo2 = _interopRequireDefault(_TooltipOptionsDemo);
	
	var _TooltipPlacementDemo = __webpack_require__(1220);
	
	var _TooltipPlacementDemo2 = _interopRequireDefault(_TooltipPlacementDemo);
	
	var _TooltipAlignDemo = __webpack_require__(1218);
	
	var _TooltipAlignDemo2 = _interopRequireDefault(_TooltipAlignDemo);
	
	var _TooltipTypesDemo = __webpack_require__(1222);
	
	var _TooltipTypesDemo2 = _interopRequireDefault(_TooltipTypesDemo);
	
	var _TooltipToggleDemo = __webpack_require__(1221);
	
	var _TooltipToggleDemo2 = _interopRequireDefault(_TooltipToggleDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Tooltips <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/tooltip">(source)</a></small></h1>\n    <p>We use the <a href="http://kushagragour.in/lab/hint/">hint.css</a> module for our tooltip implementation, wrapping it inside a directive.</p>\n\n    <h2>Helper</h2>\n    <p>Helper tooltips contain basic text that provides some additional information about an element.</p>\n\n    <h5>Placement</h5>\n    <div class="example tooltip-demo">' + _TooltipPlacementDemo2.default + '</div>\n    <code-snippet [code]="TooltipPlacementDemoTpl"></code-snippet>\n\n    <h5>Alignment</h5>\n    <div class="example tooltip-demo">' + _TooltipAlignDemo2.default + '</div>\n    <code-snippet [code]="TooltipAlignDemoTpl"></code-snippet>\n\n    <h5>Types</h5>\n    <div class="example tooltip-demo">' + _TooltipTypesDemo2.default + '</div>\n    <code-snippet [code]="TooltipTypesDemoTpl"></code-snippet>\n\n    <h5>Options</h5>\n    <div class="example tooltip-demo">' + _TooltipOptionsDemo2.default + '</div>\n    <code-snippet [code]="TooltipOptionsDemoTpl"></code-snippet>\n\n    <h5>Toggle Trigger</h5>\n    <div class="example tooltip-demo">' + _TooltipToggleDemo2.default + '</div>\n    <code-snippet [code]="TooltipToggleDemoTpl"></code-snippet>\n\n    <h2>Analytic</h2>\n    <p>Analytic tooltips appear in data visualizations to help provide additional insight into a specific datapoint.</p>\n</div>\n';
	var TooltipDemo = exports.TooltipDemo = (_dec = (0, _core.Component)({
	    selector: 'tooltip-demo',
	    template: template,
	    directives: [_novoElements.NOVO_TOOLTIP_ELEMENTS, _novoElements.NOVO_BUTTON_ELEMENTS, _CodeSnippet.CodeSnippet]
	}), _dec(_class = function () {
	    function TooltipDemo() {
	        _classCallCheck(this, TooltipDemo);
	
	        this.tooltipActive = false;
	
	        this.TooltipOptionsDemoTpl = _TooltipOptionsDemo2.default;
	        this.TooltipTypesDemoTpl = _TooltipTypesDemo2.default;
	        this.TooltipPlacementDemoTpl = _TooltipPlacementDemo2.default;
	        this.TooltipAlignDemoTpl = _TooltipAlignDemo2.default;
	        this.TooltipToggleDemoTpl = _TooltipToggleDemo2.default;
	    }
	
	    _createClass(TooltipDemo, [{
	        key: 'toggleTooltip',
	        value: function toggleTooltip() {
	            this.tooltipActive = !this.tooltipActive;
	        }
	    }]);
	
	    return TooltipDemo;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdG9vbHRpcC9Ub29sdGlwRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTSxrOUNBQU47SUFxQ2EsVyxXQUFBLFcsV0FMWixxQkFBVTtBQUNQLGNBQVUsY0FESDtBQUVQLGNBQVUsUUFGSDtBQUdQLGdCQUFZO0FBSEwsQ0FBVixDO0FBUUcsMkJBQWM7QUFBQTs7QUFBQSxhQUZkLGFBRWMsR0FGRSxLQUVGOztBQUNWLGFBQUsscUJBQUw7QUFDQSxhQUFLLG1CQUFMO0FBQ0EsYUFBSyx1QkFBTDtBQUNBLGFBQUssbUJBQUw7QUFDQSxhQUFLLG9CQUFMO0FBQ0g7Ozs7d0NBRWU7QUFDWixpQkFBSyxhQUFMLEdBQXFCLENBQUMsS0FBSyxhQUEzQjtBQUNIIiwiZmlsZSI6IlRvb2x0aXBEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5PVk9fVE9PTFRJUF9FTEVNRU5UUywgTk9WT19CVVRUT05fRUxFTUVOVFMgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuaW1wb3J0IHsgQ29kZVNuaXBwZXQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9jb2Rlc25pcHBldC9Db2RlU25pcHBldCc7XG5cbmltcG9ydCBUb29sdGlwT3B0aW9uc0RlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVG9vbHRpcE9wdGlvbnNEZW1vLmh0bWwnO1xuaW1wb3J0IFRvb2x0aXBQbGFjZW1lbnREZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1Rvb2x0aXBQbGFjZW1lbnREZW1vLmh0bWwnO1xuaW1wb3J0IFRvb2x0aXBBbGlnbkRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVG9vbHRpcEFsaWduRGVtby5odG1sJztcbmltcG9ydCBUb29sdGlwVHlwZXNEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1Rvb2x0aXBUeXBlc0RlbW8uaHRtbCc7XG5pbXBvcnQgVG9vbHRpcFRvZ2dsZURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVG9vbHRpcFRvZ2dsZURlbW8uaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5Ub29sdGlwcyA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy90b29sdGlwXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPldlIHVzZSB0aGUgPGEgaHJlZj1cImh0dHA6Ly9rdXNoYWdyYWdvdXIuaW4vbGFiL2hpbnQvXCI+aGludC5jc3M8L2E+IG1vZHVsZSBmb3Igb3VyIHRvb2x0aXAgaW1wbGVtZW50YXRpb24sIHdyYXBwaW5nIGl0IGluc2lkZSBhIGRpcmVjdGl2ZS48L3A+XG5cbiAgICA8aDI+SGVscGVyPC9oMj5cbiAgICA8cD5IZWxwZXIgdG9vbHRpcHMgY29udGFpbiBiYXNpYyB0ZXh0IHRoYXQgcHJvdmlkZXMgc29tZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IGFuIGVsZW1lbnQuPC9wPlxuXG4gICAgPGg1PlBsYWNlbWVudDwvaDU+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgdG9vbHRpcC1kZW1vXCI+JHtUb29sdGlwUGxhY2VtZW50RGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlRvb2x0aXBQbGFjZW1lbnREZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+QWxpZ25tZW50PC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSB0b29sdGlwLWRlbW9cIj4ke1Rvb2x0aXBBbGlnbkRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJUb29sdGlwQWxpZ25EZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+VHlwZXM8L2g1PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHRvb2x0aXAtZGVtb1wiPiR7VG9vbHRpcFR5cGVzRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlRvb2x0aXBUeXBlc0RlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5PcHRpb25zPC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSB0b29sdGlwLWRlbW9cIj4ke1Rvb2x0aXBPcHRpb25zRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlRvb2x0aXBPcHRpb25zRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PlRvZ2dsZSBUcmlnZ2VyPC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSB0b29sdGlwLWRlbW9cIj4ke1Rvb2x0aXBUb2dnbGVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiVG9vbHRpcFRvZ2dsZURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoMj5BbmFseXRpYzwvaDI+XG4gICAgPHA+QW5hbHl0aWMgdG9vbHRpcHMgYXBwZWFyIGluIGRhdGEgdmlzdWFsaXphdGlvbnMgdG8gaGVscCBwcm92aWRlIGFkZGl0aW9uYWwgaW5zaWdodCBpbnRvIGEgc3BlY2lmaWMgZGF0YXBvaW50LjwvcD5cbjwvZGl2PlxuYDtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndG9vbHRpcC1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgZGlyZWN0aXZlczogW05PVk9fVE9PTFRJUF9FTEVNRU5UUywgTk9WT19CVVRUT05fRUxFTUVOVFMsIENvZGVTbmlwcGV0XVxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGVtbyB7XG4gICAgdG9vbHRpcEFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuVG9vbHRpcE9wdGlvbnNEZW1vVHBsID0gVG9vbHRpcE9wdGlvbnNEZW1vVHBsO1xuICAgICAgICB0aGlzLlRvb2x0aXBUeXBlc0RlbW9UcGwgPSBUb29sdGlwVHlwZXNEZW1vVHBsO1xuICAgICAgICB0aGlzLlRvb2x0aXBQbGFjZW1lbnREZW1vVHBsID0gVG9vbHRpcFBsYWNlbWVudERlbW9UcGw7XG4gICAgICAgIHRoaXMuVG9vbHRpcEFsaWduRGVtb1RwbCA9IFRvb2x0aXBBbGlnbkRlbW9UcGw7XG4gICAgICAgIHRoaXMuVG9vbHRpcFRvZ2dsZURlbW9UcGwgPSBUb29sdGlwVG9nZ2xlRGVtb1RwbDtcbiAgICB9XG5cbiAgICB0b2dnbGVUb29sdGlwKCkge1xuICAgICAgICB0aGlzLnRvb2x0aXBBY3RpdmUgPSAhdGhpcy50b29sdGlwQWN0aXZlO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 1218:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"bottom-left\" tooltipPosition=\"bottom-left\">Bottom Left</span>\n<span tooltip=\"bottom-right\" tooltipPosition=\"bottom-right\">Bottom Right</span>\n<span tooltip=\"top-left\" tooltipPosition=\"top-left\">Top Left</span>\n<span tooltip=\"top-right\" tooltipPosition=\"top-right\">Top Right</span>\n"

/***/ },

/***/ 1219:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"ALWAYS\" tooltipAlways=\"true\">Always Shown</span>\n<span tooltip=\"ROUNDED\" tooltipRounded=\"true\">Rounded</span>\n<span tooltip=\"NO ANIMATE\" tooltipNoAnimate=\"true\">No Animation</span>\n<span tooltip=\"BOUNCE\" tooltipBounce=\"true\">Bounce</span>\n"

/***/ },

/***/ 1220:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"left\" tooltipPosition=\"left\">Left</span>\n<span tooltip=\"right\" tooltipPosition=\"right\">Right</span>\n<span tooltip=\"top\" tooltipPosition=\"top\">Top</span>\n<span tooltip=\"bottom\" tooltipPosition=\"bottom\">Bottom</span>\n"

/***/ },

/***/ 1221:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"I HAVE A TOOLTIP!\" [tooltipActive]=\"tooltipActive\">\n    <span *ngIf=\"tooltipActive\">My tooltip can display!</span>\n    <span *ngIf=\"!tooltipActive\">My tooltip is disabled!</span>\n</span>\n<button theme=\"secondary\" (click)=\"toggleTooltip()\">Toggle</button>\n"

/***/ },

/***/ 1222:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"ERROR\" tooltipType=\"error\">Error</span>\n<span tooltip=\"INFO\" tooltipType=\"info\">Info</span>\n<span tooltip=\"WARNING\" tooltipType=\"warning\">Warning</span>\n<span tooltip=\"SUCCESS\" tooltipType=\"success\">Success</span>\n"

/***/ }

});
//# sourceMappingURL=4.e52009a22d492e9976fc.bundle.map