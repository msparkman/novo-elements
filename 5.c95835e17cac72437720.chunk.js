webpackJsonp([5],{

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

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TabsDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(14);
	
	var _CodeSnippet = __webpack_require__(1144);
	
	var _ButtonTabDemo = __webpack_require__(1208);
	
	var _ButtonTabDemo2 = _interopRequireDefault(_ButtonTabDemo);
	
	var _ColorDemo = __webpack_require__(1209);
	
	var _ColorDemo2 = _interopRequireDefault(_ColorDemo);
	
	var _RouterDemo = __webpack_require__(1210);
	
	var _RouterDemo2 = _interopRequireDefault(_RouterDemo);
	
	var _VerticalDemo = __webpack_require__(1211);
	
	var _VerticalDemo2 = _interopRequireDefault(_VerticalDemo);
	
	var _WhiteDemo = __webpack_require__(1212);
	
	var _WhiteDemo2 = _interopRequireDefault(_WhiteDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Tabs <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/tabs">(source)</a></small></h1>\n    <p>Tabs make it easy to explore and switch between different views or functional aspects of an app or to browse categorized data sets. Tabs in Bullhorn have two different themes; A \'color\' theme for tabbed navigation on a colored background, and a \'white\' theme for tabs on a white background.</p>\n\n    <h2>Themes</h2>\n\n    <h5>Color</h5>\n    <p>Colored background tab navigation gets the theme <code>theme="color"</code></p>\n    <div class="example color-tab-demo">' + _ColorDemo2.default + '</div>\n    <code-snippet [code]="ColorDemoTpl"></code-snippet>\n\n    <h5>White</h5>\n    <p>White background tab navigation gets the theme <code>theme="white"</code></p>\n    <div class="example transparent-tab-demo">' + _WhiteDemo2.default + '</div>\n    <code-snippet [code]="WhiteDemoTpl"></code-snippet>\n\n    <h2>Types</h2>\n\n    <h5>Vertical</h5>\n    <p>Vertical tabs get a direction attribute <code>direction="vertical"</code></p>\n    <div class="example vertical-tab-demo">' + _VerticalDemo2.default + '</div>\n    <code-snippet [code]="VerticalDemoTpl"></code-snippet>\n\n    <h5>Button Tab Bars</h5>\n    <p>Tabbed Button Bars get a similar style treatment to the <code>"header"</code> theme button.</p>\n    <div class="example example button-tab-demo">' + _ButtonTabDemo2.default + '</div>\n    <code-snippet [code]="ButtonTabDemoTpl"></code-snippet>\n\n    <h2>As Application Routing Mechanism</h2>\n    <p>Follows the same color/white theme as above, but doesn\'t use the "novo-tabs" tag and you have to add the classes and html accordingly. The header will now control and route your application and put the content in the "router-outlet" and look/feel like our tabs component.</p>\n    <div class="example transparent-tab-demo">' + _RouterDemo2.default + '</div>\n    <code-snippet [code]="RouterDemoTpl"></code-snippet>\n</div>\n';
	
	var TabsDemo = exports.TabsDemo = (_dec = (0, _core.Component)({
	    selector: 'tabs-demo',
	    template: template,
	    directives: [_novoElements.NOVO_TAB_ELEMENTS, _CodeSnippet.CodeSnippet]
	}), _dec(_class = function () {
	    function TabsDemo() {
	        _classCallCheck(this, TabsDemo);
	
	        this.ColorDemoTpl = _ColorDemo2.default;
	        this.WhiteDemoTpl = _WhiteDemo2.default;
	        this.VerticalDemoTpl = _VerticalDemo2.default;
	        this.ButtonTabDemoTpl = _ButtonTabDemo2.default;
	        this.RouterDemoTpl = _RouterDemo2.default;
	    }
	
	    _createClass(TabsDemo, [{
	        key: 'tabSelected',
	        value: function tabSelected() {
	            console.log('TAB SELECTED'); // eslint-disable-line
	        }
	    }, {
	        key: 'tabDeselected',
	        value: function tabDeselected() {
	            console.log('TAB DESELECTED'); // eslint-disable-line
	        }
	    }]);
	
	    return TabsDemo;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdGFicy9UYWJzRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTSw0L0RBQU47O0lBeUNhLFEsV0FBQSxRLFdBTFoscUJBQVU7QUFDUCxjQUFVLFdBREg7QUFFUCxjQUFVLFFBRkg7QUFHUCxnQkFBWTtBQUhMLENBQVYsQztBQU1HLHdCQUFjO0FBQUE7O0FBQ1YsYUFBSyxZQUFMO0FBQ0EsYUFBSyxZQUFMO0FBQ0EsYUFBSyxlQUFMO0FBQ0EsYUFBSyxnQkFBTDtBQUNBLGFBQUssYUFBTDtBQUNIOzs7O3NDQUVhO0FBQ1Ysb0JBQVEsR0FBUixDQUFZLGNBQVosRUFEVSxDQUNtQjtBQUNoQzs7O3dDQUVlO0FBQ1osb0JBQVEsR0FBUixDQUFZLGdCQUFaLEVBRFksQ0FDbUI7QUFDbEMiLCJmaWxlIjoiVGFic0RlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTk9WT19UQUJfRUxFTUVOVFMgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuaW1wb3J0IHsgQ29kZVNuaXBwZXQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9jb2Rlc25pcHBldC9Db2RlU25pcHBldCc7XG5cbmltcG9ydCBCdXR0b25UYWJEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0J1dHRvblRhYkRlbW8uaHRtbCc7XG5pbXBvcnQgQ29sb3JEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0NvbG9yRGVtby5odG1sJztcbmltcG9ydCBSb3V0ZXJEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1JvdXRlckRlbW8uaHRtbCc7XG5pbXBvcnQgVmVydGljYWxEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1ZlcnRpY2FsRGVtby5odG1sJztcbmltcG9ydCBXaGl0ZURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvV2hpdGVEZW1vLmh0bWwnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+VGFicyA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy90YWJzXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPlRhYnMgbWFrZSBpdCBlYXN5IHRvIGV4cGxvcmUgYW5kIHN3aXRjaCBiZXR3ZWVuIGRpZmZlcmVudCB2aWV3cyBvciBmdW5jdGlvbmFsIGFzcGVjdHMgb2YgYW4gYXBwIG9yIHRvIGJyb3dzZSBjYXRlZ29yaXplZCBkYXRhIHNldHMuIFRhYnMgaW4gQnVsbGhvcm4gaGF2ZSB0d28gZGlmZmVyZW50IHRoZW1lczsgQSAnY29sb3InIHRoZW1lIGZvciB0YWJiZWQgbmF2aWdhdGlvbiBvbiBhIGNvbG9yZWQgYmFja2dyb3VuZCwgYW5kIGEgJ3doaXRlJyB0aGVtZSBmb3IgdGFicyBvbiBhIHdoaXRlIGJhY2tncm91bmQuPC9wPlxuXG4gICAgPGgyPlRoZW1lczwvaDI+XG5cbiAgICA8aDU+Q29sb3I8L2g1PlxuICAgIDxwPkNvbG9yZWQgYmFja2dyb3VuZCB0YWIgbmF2aWdhdGlvbiBnZXRzIHRoZSB0aGVtZSA8Y29kZT50aGVtZT1cImNvbG9yXCI8L2NvZGU+PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGNvbG9yLXRhYi1kZW1vXCI+JHtDb2xvckRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJDb2xvckRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5XaGl0ZTwvaDU+XG4gICAgPHA+V2hpdGUgYmFja2dyb3VuZCB0YWIgbmF2aWdhdGlvbiBnZXRzIHRoZSB0aGVtZSA8Y29kZT50aGVtZT1cIndoaXRlXCI8L2NvZGU+PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHRyYW5zcGFyZW50LXRhYi1kZW1vXCI+JHtXaGl0ZURlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJXaGl0ZURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoMj5UeXBlczwvaDI+XG5cbiAgICA8aDU+VmVydGljYWw8L2g1PlxuICAgIDxwPlZlcnRpY2FsIHRhYnMgZ2V0IGEgZGlyZWN0aW9uIGF0dHJpYnV0ZSA8Y29kZT5kaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPC9jb2RlPjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSB2ZXJ0aWNhbC10YWItZGVtb1wiPiR7VmVydGljYWxEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiVmVydGljYWxEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+QnV0dG9uIFRhYiBCYXJzPC9oNT5cbiAgICA8cD5UYWJiZWQgQnV0dG9uIEJhcnMgZ2V0IGEgc2ltaWxhciBzdHlsZSB0cmVhdG1lbnQgdG8gdGhlIDxjb2RlPlwiaGVhZGVyXCI8L2NvZGU+IHRoZW1lIGJ1dHRvbi48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZXhhbXBsZSBidXR0b24tdGFiLWRlbW9cIj4ke0J1dHRvblRhYkRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJCdXR0b25UYWJEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDI+QXMgQXBwbGljYXRpb24gUm91dGluZyBNZWNoYW5pc208L2gyPlxuICAgIDxwPkZvbGxvd3MgdGhlIHNhbWUgY29sb3Ivd2hpdGUgdGhlbWUgYXMgYWJvdmUsIGJ1dCBkb2Vzbid0IHVzZSB0aGUgXCJub3ZvLXRhYnNcIiB0YWcgYW5kIHlvdSBoYXZlIHRvIGFkZCB0aGUgY2xhc3NlcyBhbmQgaHRtbCBhY2NvcmRpbmdseS4gVGhlIGhlYWRlciB3aWxsIG5vdyBjb250cm9sIGFuZCByb3V0ZSB5b3VyIGFwcGxpY2F0aW9uIGFuZCBwdXQgdGhlIGNvbnRlbnQgaW4gdGhlIFwicm91dGVyLW91dGxldFwiIGFuZCBsb29rL2ZlZWwgbGlrZSBvdXIgdGFicyBjb21wb25lbnQuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHRyYW5zcGFyZW50LXRhYi1kZW1vXCI+JHtSb3V0ZXJEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiUm91dGVyRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RhYnMtZGVtbycsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgIGRpcmVjdGl2ZXM6IFtOT1ZPX1RBQl9FTEVNRU5UUywgQ29kZVNuaXBwZXRdXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNEZW1vIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5Db2xvckRlbW9UcGwgPSBDb2xvckRlbW9UcGw7XG4gICAgICAgIHRoaXMuV2hpdGVEZW1vVHBsID0gV2hpdGVEZW1vVHBsO1xuICAgICAgICB0aGlzLlZlcnRpY2FsRGVtb1RwbCA9IFZlcnRpY2FsRGVtb1RwbDtcbiAgICAgICAgdGhpcy5CdXR0b25UYWJEZW1vVHBsID0gQnV0dG9uVGFiRGVtb1RwbDtcbiAgICAgICAgdGhpcy5Sb3V0ZXJEZW1vVHBsID0gUm91dGVyRGVtb1RwbDtcbiAgICB9XG5cbiAgICB0YWJTZWxlY3RlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RBQiBTRUxFQ1RFRCcpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfVxuXG4gICAgdGFiRGVzZWxlY3RlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RBQiBERVNFTEVDVEVEJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 1208:
/***/ function(module, exports) {

	module.exports = "<header class=\"color\">\n    <novo-nav theme=\"color\" [outlet]=\"buttonTab\" type=\"button-bar\">\n        <novo-tab-button>Button 1</novo-tab-button>\n        <novo-tab-button>Button 2</novo-tab-button>\n        <novo-tab-button>Button 3</novo-tab-button>\n    </novo-nav>\n</header>\n\n<novo-nav-outlet #buttonTab>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 3 Content</h1>\n    </novo-nav-content>\n</novo-nav-outlet>\n\n<header>\n    <novo-nav theme=\"white\" [outlet]=\"buttonTabWhite\" type=\"button-bar\">\n        <novo-tab-button>Button 1</novo-tab-button>\n        <novo-tab-button>Button 2</novo-tab-button>\n        <novo-tab-button>Button 3</novo-tab-button>\n    </novo-nav>\n</header>\n\n<novo-nav-outlet #buttonTabWhite>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 3 Content</h1>\n    </novo-nav-content>\n</novo-nav-outlet>\n"

/***/ },

/***/ 1209:
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-nav theme=\"color\" [outlet]=\"colornav\" direction=\"horizontal\">\n        <novo-tab>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 1</span>\n        </novo-tab>\n        <novo-tab>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 2</span>\n        </novo-tab>\n    </novo-nav>\n</header>\n\n<novo-nav-outlet #colornav>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n    </novo-nav-content>\n</novo-nav-outlet>\n"

/***/ },

/***/ 1210:
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-nav theme=\"white\" router>\n        <novo-tab-link>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 1</span>\n        </novo-tab-link>\n        <novo-tab-link>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 2</span>\n        </novo-tab-link>\n    </novo-nav>\n</header>\n"

/***/ },

/***/ 1211:
/***/ function(module, exports) {

	module.exports = "<novo-nav theme=\"white\" [outlet]=\"colorVert\" direction=\"vertical\">\n    <novo-tab>\n        <span>\n            <i class=\"bhi-person\"></i>Tab 1</span>\n    </novo-tab>\n    <novo-tab>\n        <span>\n            <i class=\"bhi-person\"></i>Tab 2</span>\n    </novo-tab>\n</novo-nav>\n\n<novo-nav-outlet #colorVert>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n\n        <p>\n            Synth polaroid bitters chillwave pickled. Vegan disrupt tousled,\n            Portland keffiyeh aesthetic food truck sriracha cornhole\n            single-origin coffee church-key roof party. Leggings\n            ethical McSweeney's, normcore you probably haven't\n            heard of them Marfa organic squid. Slow-carb 90's\n            ennui Godard pug asymmetrical, narwhal VHS Tonx High\n            Life. Retro dreamcatcher synth Godard pickled Etsy\n            jean shorts beard, pour-over fanny pack mumblecore.\n            Quinoa retro aesthetic polaroid, Williamsburg American\n            Apparel plaid small batch. Blue Bottle Vice fanny\n            pack, Williamsburg roof party Wes Anderson mlkshk\n            seitan brunch before they sold out lo-fi XOXO tofu\n            scenester small batch.\n        </p>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n\n        <p>\n            Synth polaroid bitters chillwave pickled.\n        </p>\n    </novo-nav-content>\n</novo-nav-outlet>\n"

/***/ },

/***/ 1212:
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-nav theme=\"white\" [outlet]=\"whitenav\">\n        <novo-tab>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 1</span>\n        </novo-tab>\n        <novo-tab>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 2</span>\n        </novo-tab>\n    </novo-nav>\n</header>\n\n<novo-nav-outlet #whitenav>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n    </novo-nav-content>\n</novo-nav-outlet>\n"

/***/ }

});
//# sourceMappingURL=5.c95835e17cac72437720.bundle.map