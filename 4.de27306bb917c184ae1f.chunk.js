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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztJQU9hLFcsV0FBQSxXLFdBTFoscUJBQVU7QUFDUCxZQUFRLENBQUMsTUFBRCxDQUREO0FBRVAsY0FBVSxjQUZIO0FBR1AsY0FBVTtBQUhILENBQVYsQzs7Ozs7OzttQ0FNYztBQUNQLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxhQUFMLENBQW1CLEtBQUssSUFBeEIsRUFBOEIsS0FBL0M7QUFDSCIsImZpbGUiOiJDb2RlU25pcHBldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvZ2l0aHViL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgaW5wdXRzOiBbJ2NvZGUnXSxcbiAgICBzZWxlY3RvcjogJ2NvZGUtc25pcHBldCcsXG4gICAgdGVtcGxhdGU6ICc8cHJlPjxjb2RlIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0XCI+PC9jb2RlPjwvcHJlPidcbn0pXG5leHBvcnQgY2xhc3MgQ29kZVNuaXBwZXQge1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodCA9IGhsanMuaGlnaGxpZ2h0QXV0byh0aGlzLmNvZGUpLnZhbHVlO1xuICAgIH1cbn1cbiJdfQ==

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
	
	var _TooltipOptionsDemo = __webpack_require__(1221);
	
	var _TooltipOptionsDemo2 = _interopRequireDefault(_TooltipOptionsDemo);
	
	var _TooltipPlacementDemo = __webpack_require__(1222);
	
	var _TooltipPlacementDemo2 = _interopRequireDefault(_TooltipPlacementDemo);
	
	var _TooltipAlignDemo = __webpack_require__(1220);
	
	var _TooltipAlignDemo2 = _interopRequireDefault(_TooltipAlignDemo);
	
	var _TooltipTypesDemo = __webpack_require__(1224);
	
	var _TooltipTypesDemo2 = _interopRequireDefault(_TooltipTypesDemo);
	
	var _TooltipToggleDemo = __webpack_require__(1223);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdG9vbHRpcC9Ub29sdGlwRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTSxrOUNBQU47SUFxQ2EsVyxXQUFBLFcsV0FMWixxQkFBVTtBQUNQLGNBQVUsY0FESDtBQUVQLGNBQVUsUUFGSDtBQUdQLGdCQUFZO0FBSEwsQ0FBVixDO0FBUUcsMkJBQWM7QUFBQTs7QUFBQSxhQUZkLGFBRWMsR0FGRSxLQUVGOztBQUNWLGFBQUsscUJBQUw7QUFDQSxhQUFLLG1CQUFMO0FBQ0EsYUFBSyx1QkFBTDtBQUNBLGFBQUssbUJBQUw7QUFDQSxhQUFLLG9CQUFMO0FBQ0g7Ozs7d0NBRWU7QUFDWixpQkFBSyxhQUFMLEdBQXFCLENBQUMsS0FBSyxhQUEzQjtBQUNIIiwiZmlsZSI6IlRvb2x0aXBEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9naXRodWIvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTk9WT19UT09MVElQX0VMRU1FTlRTLCBOT1ZPX0JVVFRPTl9FTEVNRU5UUyB9IGZyb20gJy4vLi4vLi4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG5pbXBvcnQgeyBDb2RlU25pcHBldCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2NvZGVzbmlwcGV0L0NvZGVTbmlwcGV0JztcblxuaW1wb3J0IFRvb2x0aXBPcHRpb25zRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9Ub29sdGlwT3B0aW9uc0RlbW8uaHRtbCc7XG5pbXBvcnQgVG9vbHRpcFBsYWNlbWVudERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVG9vbHRpcFBsYWNlbWVudERlbW8uaHRtbCc7XG5pbXBvcnQgVG9vbHRpcEFsaWduRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9Ub29sdGlwQWxpZ25EZW1vLmh0bWwnO1xuaW1wb3J0IFRvb2x0aXBUeXBlc0RlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVG9vbHRpcFR5cGVzRGVtby5odG1sJztcbmltcG9ydCBUb29sdGlwVG9nZ2xlRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9Ub29sdGlwVG9nZ2xlRGVtby5odG1sJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPlRvb2x0aXBzIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL3Rvb2x0aXBcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+V2UgdXNlIHRoZSA8YSBocmVmPVwiaHR0cDovL2t1c2hhZ3JhZ291ci5pbi9sYWIvaGludC9cIj5oaW50LmNzczwvYT4gbW9kdWxlIGZvciBvdXIgdG9vbHRpcCBpbXBsZW1lbnRhdGlvbiwgd3JhcHBpbmcgaXQgaW5zaWRlIGEgZGlyZWN0aXZlLjwvcD5cblxuICAgIDxoMj5IZWxwZXI8L2gyPlxuICAgIDxwPkhlbHBlciB0b29sdGlwcyBjb250YWluIGJhc2ljIHRleHQgdGhhdCBwcm92aWRlcyBzb21lIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgYW4gZWxlbWVudC48L3A+XG5cbiAgICA8aDU+UGxhY2VtZW50PC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSB0b29sdGlwLWRlbW9cIj4ke1Rvb2x0aXBQbGFjZW1lbnREZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiVG9vbHRpcFBsYWNlbWVudERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5BbGlnbm1lbnQ8L2g1PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHRvb2x0aXAtZGVtb1wiPiR7VG9vbHRpcEFsaWduRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlRvb2x0aXBBbGlnbkRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5UeXBlczwvaDU+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgdG9vbHRpcC1kZW1vXCI+JHtUb29sdGlwVHlwZXNEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiVG9vbHRpcFR5cGVzRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1Pk9wdGlvbnM8L2g1PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHRvb2x0aXAtZGVtb1wiPiR7VG9vbHRpcE9wdGlvbnNEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiVG9vbHRpcE9wdGlvbnNEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+VG9nZ2xlIFRyaWdnZXI8L2g1PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHRvb2x0aXAtZGVtb1wiPiR7VG9vbHRpcFRvZ2dsZURlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJUb29sdGlwVG9nZ2xlRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGgyPkFuYWx5dGljPC9oMj5cbiAgICA8cD5BbmFseXRpYyB0b29sdGlwcyBhcHBlYXIgaW4gZGF0YSB2aXN1YWxpemF0aW9ucyB0byBoZWxwIHByb3ZpZGUgYWRkaXRpb25hbCBpbnNpZ2h0IGludG8gYSBzcGVjaWZpYyBkYXRhcG9pbnQuPC9wPlxuPC9kaXY+XG5gO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0b29sdGlwLWRlbW8nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICBkaXJlY3RpdmVzOiBbTk9WT19UT09MVElQX0VMRU1FTlRTLCBOT1ZPX0JVVFRPTl9FTEVNRU5UUywgQ29kZVNuaXBwZXRdXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEZW1vIHtcbiAgICB0b29sdGlwQWN0aXZlID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5Ub29sdGlwT3B0aW9uc0RlbW9UcGwgPSBUb29sdGlwT3B0aW9uc0RlbW9UcGw7XG4gICAgICAgIHRoaXMuVG9vbHRpcFR5cGVzRGVtb1RwbCA9IFRvb2x0aXBUeXBlc0RlbW9UcGw7XG4gICAgICAgIHRoaXMuVG9vbHRpcFBsYWNlbWVudERlbW9UcGwgPSBUb29sdGlwUGxhY2VtZW50RGVtb1RwbDtcbiAgICAgICAgdGhpcy5Ub29sdGlwQWxpZ25EZW1vVHBsID0gVG9vbHRpcEFsaWduRGVtb1RwbDtcbiAgICAgICAgdGhpcy5Ub29sdGlwVG9nZ2xlRGVtb1RwbCA9IFRvb2x0aXBUb2dnbGVEZW1vVHBsO1xuICAgIH1cblxuICAgIHRvZ2dsZVRvb2x0aXAoKSB7XG4gICAgICAgIHRoaXMudG9vbHRpcEFjdGl2ZSA9ICF0aGlzLnRvb2x0aXBBY3RpdmU7XG4gICAgfVxufVxuIl19

/***/ },

/***/ 1220:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"bottom-left\" tooltipPosition=\"bottom-left\">Bottom Left</span>\n<span tooltip=\"bottom-right\" tooltipPosition=\"bottom-right\">Bottom Right</span>\n<span tooltip=\"top-left\" tooltipPosition=\"top-left\">Top Left</span>\n<span tooltip=\"top-right\" tooltipPosition=\"top-right\">Top Right</span>\n"

/***/ },

/***/ 1221:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"ALWAYS\" tooltipAlways=\"true\">Always Shown</span>\n<span tooltip=\"ROUNDED\" tooltipRounded=\"true\">Rounded</span>\n<span tooltip=\"NO ANIMATE\" tooltipNoAnimate=\"true\">No Animation</span>\n<span tooltip=\"BOUNCE\" tooltipBounce=\"true\">Bounce</span>\n"

/***/ },

/***/ 1222:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"left\" tooltipPosition=\"left\">Left</span>\n<span tooltip=\"right\" tooltipPosition=\"right\">Right</span>\n<span tooltip=\"top\" tooltipPosition=\"top\">Top</span>\n<span tooltip=\"bottom\" tooltipPosition=\"bottom\">Bottom</span>\n"

/***/ },

/***/ 1223:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"I HAVE A TOOLTIP!\" [tooltipActive]=\"tooltipActive\">\n    <span *ngIf=\"tooltipActive\">My tooltip can display!</span>\n    <span *ngIf=\"!tooltipActive\">My tooltip is disabled!</span>\n</span>\n<button theme=\"secondary\" (click)=\"toggleTooltip()\">Toggle</button>\n"

/***/ },

/***/ 1224:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"ERROR\" tooltipType=\"error\">Error</span>\n<span tooltip=\"INFO\" tooltipType=\"info\">Info</span>\n<span tooltip=\"WARNING\" tooltipType=\"warning\">Warning</span>\n<span tooltip=\"SUCCESS\" tooltipType=\"success\">Success</span>\n"

/***/ }

});
//# sourceMappingURL=4.de27306bb917c184ae1f.bundle.map