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
	
	var _TooltipOptionsDemo = __webpack_require__(1218);
	
	var _TooltipOptionsDemo2 = _interopRequireDefault(_TooltipOptionsDemo);
	
	var _TooltipPlacementDemo = __webpack_require__(1219);
	
	var _TooltipPlacementDemo2 = _interopRequireDefault(_TooltipPlacementDemo);
	
	var _TooltipAlignDemo = __webpack_require__(1217);
	
	var _TooltipAlignDemo2 = _interopRequireDefault(_TooltipAlignDemo);
	
	var _TooltipTypesDemo = __webpack_require__(1221);
	
	var _TooltipTypesDemo2 = _interopRequireDefault(_TooltipTypesDemo);
	
	var _TooltipToggleDemo = __webpack_require__(1220);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdG9vbHRpcC9Ub29sdGlwRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTSxrOUNBQU47SUFxQ2EsVyxXQUFBLFcsV0FMWixxQkFBVTtBQUNQLGNBQVUsY0FESDtBQUVQLGNBQVUsUUFGSDtBQUdQLGdCQUFZO0FBSEwsQ0FBVixDO0FBTUcsMkJBQWM7QUFBQTs7QUFDVixhQUFLLHFCQUFMO0FBQ0EsYUFBSyxtQkFBTDtBQUNBLGFBQUssdUJBQUw7QUFDQSxhQUFLLG1CQUFMO0FBQ0EsYUFBSyxvQkFBTDtBQUNIOzs7O3dDQUVlO0FBQ1osaUJBQUssYUFBTCxHQUFxQixDQUFDLEtBQUssYUFBM0I7QUFDSCIsImZpbGUiOiJUb29sdGlwRGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOT1ZPX1RPT0xUSVBfRUxFTUVOVFMsIE5PVk9fQlVUVE9OX0VMRU1FTlRTIH0gZnJvbSAnLi8uLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbmltcG9ydCB7IENvZGVTbmlwcGV0IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQnO1xuXG5pbXBvcnQgVG9vbHRpcE9wdGlvbnNEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1Rvb2x0aXBPcHRpb25zRGVtby5odG1sJztcbmltcG9ydCBUb29sdGlwUGxhY2VtZW50RGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9Ub29sdGlwUGxhY2VtZW50RGVtby5odG1sJztcbmltcG9ydCBUb29sdGlwQWxpZ25EZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1Rvb2x0aXBBbGlnbkRlbW8uaHRtbCc7XG5pbXBvcnQgVG9vbHRpcFR5cGVzRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9Ub29sdGlwVHlwZXNEZW1vLmh0bWwnO1xuaW1wb3J0IFRvb2x0aXBUb2dnbGVEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1Rvb2x0aXBUb2dnbGVEZW1vLmh0bWwnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+VG9vbHRpcHMgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvdG9vbHRpcFwiPihzb3VyY2UpPC9hPjwvc21hbGw+PC9oMT5cbiAgICA8cD5XZSB1c2UgdGhlIDxhIGhyZWY9XCJodHRwOi8va3VzaGFncmFnb3VyLmluL2xhYi9oaW50L1wiPmhpbnQuY3NzPC9hPiBtb2R1bGUgZm9yIG91ciB0b29sdGlwIGltcGxlbWVudGF0aW9uLCB3cmFwcGluZyBpdCBpbnNpZGUgYSBkaXJlY3RpdmUuPC9wPlxuXG4gICAgPGgyPkhlbHBlcjwvaDI+XG4gICAgPHA+SGVscGVyIHRvb2x0aXBzIGNvbnRhaW4gYmFzaWMgdGV4dCB0aGF0IHByb3ZpZGVzIHNvbWUgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCBhbiBlbGVtZW50LjwvcD5cblxuICAgIDxoNT5QbGFjZW1lbnQ8L2g1PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHRvb2x0aXAtZGVtb1wiPiR7VG9vbHRpcFBsYWNlbWVudERlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJUb29sdGlwUGxhY2VtZW50RGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PkFsaWdubWVudDwvaDU+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgdG9vbHRpcC1kZW1vXCI+JHtUb29sdGlwQWxpZ25EZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiVG9vbHRpcEFsaWduRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PlR5cGVzPC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSB0b29sdGlwLWRlbW9cIj4ke1Rvb2x0aXBUeXBlc0RlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJUb29sdGlwVHlwZXNEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+T3B0aW9uczwvaDU+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgdG9vbHRpcC1kZW1vXCI+JHtUb29sdGlwT3B0aW9uc0RlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJUb29sdGlwT3B0aW9uc0RlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5Ub2dnbGUgVHJpZ2dlcjwvaDU+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgdG9vbHRpcC1kZW1vXCI+JHtUb29sdGlwVG9nZ2xlRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlRvb2x0aXBUb2dnbGVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDI+QW5hbHl0aWM8L2gyPlxuICAgIDxwPkFuYWx5dGljIHRvb2x0aXBzIGFwcGVhciBpbiBkYXRhIHZpc3VhbGl6YXRpb25zIHRvIGhlbHAgcHJvdmlkZSBhZGRpdGlvbmFsIGluc2lnaHQgaW50byBhIHNwZWNpZmljIGRhdGFwb2ludC48L3A+XG48L2Rpdj5cbmA7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Rvb2x0aXAtZGVtbycsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgIGRpcmVjdGl2ZXM6IFtOT1ZPX1RPT0xUSVBfRUxFTUVOVFMsIE5PVk9fQlVUVE9OX0VMRU1FTlRTLCBDb2RlU25pcHBldF1cbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERlbW8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLlRvb2x0aXBPcHRpb25zRGVtb1RwbCA9IFRvb2x0aXBPcHRpb25zRGVtb1RwbDtcbiAgICAgICAgdGhpcy5Ub29sdGlwVHlwZXNEZW1vVHBsID0gVG9vbHRpcFR5cGVzRGVtb1RwbDtcbiAgICAgICAgdGhpcy5Ub29sdGlwUGxhY2VtZW50RGVtb1RwbCA9IFRvb2x0aXBQbGFjZW1lbnREZW1vVHBsO1xuICAgICAgICB0aGlzLlRvb2x0aXBBbGlnbkRlbW9UcGwgPSBUb29sdGlwQWxpZ25EZW1vVHBsO1xuICAgICAgICB0aGlzLlRvb2x0aXBUb2dnbGVEZW1vVHBsID0gVG9vbHRpcFRvZ2dsZURlbW9UcGw7XG4gICAgfVxuXG4gICAgdG9nZ2xlVG9vbHRpcCgpIHtcbiAgICAgICAgdGhpcy50b29sdGlwQWN0aXZlID0gIXRoaXMudG9vbHRpcEFjdGl2ZTtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 1217:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"bottom-left\" tooltipPosition=\"bottom-left\">Bottom Left</span>\n<span tooltip=\"bottom-right\" tooltipPosition=\"bottom-right\">Bottom Right</span>\n<span tooltip=\"top-left\" tooltipPosition=\"top-left\">Top Left</span>\n<span tooltip=\"top-right\" tooltipPosition=\"top-right\">Top Right</span>\n"

/***/ },

/***/ 1218:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"ALWAYS\" tooltipAlways=\"true\">Always Shown</span>\n<span tooltip=\"ROUNDED\" tooltipRounded=\"true\">Rounded</span>\n<span tooltip=\"NO ANIMATE\" tooltipNoAnimate=\"true\">No Animation</span>\n<span tooltip=\"BOUNCE\" tooltipBounce=\"true\">Bounce</span>\n"

/***/ },

/***/ 1219:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"left\" tooltipPosition=\"left\">Left</span>\n<span tooltip=\"right\" tooltipPosition=\"right\">Right</span>\n<span tooltip=\"top\" tooltipPosition=\"top\">Top</span>\n<span tooltip=\"bottom\" tooltipPosition=\"bottom\">Bottom</span>\n"

/***/ },

/***/ 1220:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"I HAVE A TOOLTIP!\" [tooltipActive]=\"tooltipActive\">\n    <span *ngIf=\"tooltipActive\">My tooltip can display!</span>\n    <span *ngIf=\"!tooltipActive\">My tooltip is disabled!</span>\n</span>\n<button theme=\"secondary\" (click)=\"toggleTooltip()\">Toggle</button>\n"

/***/ },

/***/ 1221:
/***/ function(module, exports) {

	module.exports = "<span tooltip=\"ERROR\" tooltipType=\"error\">Error</span>\n<span tooltip=\"INFO\" tooltipType=\"info\">Info</span>\n<span tooltip=\"WARNING\" tooltipType=\"warning\">Warning</span>\n<span tooltip=\"SUCCESS\" tooltipType=\"success\">Success</span>\n"

/***/ }

});
//# sourceMappingURL=4.b736f21cf0209b233181.bundle.map