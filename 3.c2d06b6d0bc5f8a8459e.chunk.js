webpackJsonp([3],{

/***/ 1129:
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

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TabsDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(16);
	
	var _CodeSnippet = __webpack_require__(1129);
	
	var _ButtonTabDemo = __webpack_require__(1190);
	
	var _ButtonTabDemo2 = _interopRequireDefault(_ButtonTabDemo);
	
	var _ColorDemo = __webpack_require__(1191);
	
	var _ColorDemo2 = _interopRequireDefault(_ColorDemo);
	
	var _RouterDemo = __webpack_require__(1192);
	
	var _RouterDemo2 = _interopRequireDefault(_RouterDemo);
	
	var _VerticalDemo = __webpack_require__(1193);
	
	var _VerticalDemo2 = _interopRequireDefault(_VerticalDemo);
	
	var _WhiteDemo = __webpack_require__(1194);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdGFicy9UYWJzRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTSw0L0RBQU47O0lBeUNhLFEsV0FBQSxRLFdBTFoscUJBQVU7QUFDUCxjQUFVLFdBREg7QUFFUCxjQUFVLFFBRkg7QUFHUCxnQkFBWTtBQUhMLENBQVYsQztBQU1HLHdCQUFjO0FBQUE7O0FBQ1YsYUFBSyxZQUFMO0FBQ0EsYUFBSyxZQUFMO0FBQ0EsYUFBSyxlQUFMO0FBQ0EsYUFBSyxnQkFBTDtBQUNBLGFBQUssYUFBTDtBQUNIOzs7O3NDQUVhO0FBQ1Ysb0JBQVEsR0FBUixDQUFZLGNBQVosRTtBQUNIOzs7d0NBRWU7QUFDWixvQkFBUSxHQUFSLENBQVksZ0JBQVosRTtBQUNIIiwiZmlsZSI6IlRhYnNEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5PVk9fVEFCX0VMRU1FTlRTIH0gZnJvbSAnLi8uLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbmltcG9ydCB7IENvZGVTbmlwcGV0IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQnO1xuXG5pbXBvcnQgQnV0dG9uVGFiRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9CdXR0b25UYWJEZW1vLmh0bWwnO1xuaW1wb3J0IENvbG9yRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9Db2xvckRlbW8uaHRtbCc7XG5pbXBvcnQgUm91dGVyRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9Sb3V0ZXJEZW1vLmh0bWwnO1xuaW1wb3J0IFZlcnRpY2FsRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9WZXJ0aWNhbERlbW8uaHRtbCc7XG5pbXBvcnQgV2hpdGVEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1doaXRlRGVtby5odG1sJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPlRhYnMgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvdGFic1wiPihzb3VyY2UpPC9hPjwvc21hbGw+PC9oMT5cbiAgICA8cD5UYWJzIG1ha2UgaXQgZWFzeSB0byBleHBsb3JlIGFuZCBzd2l0Y2ggYmV0d2VlbiBkaWZmZXJlbnQgdmlld3Mgb3IgZnVuY3Rpb25hbCBhc3BlY3RzIG9mIGFuIGFwcCBvciB0byBicm93c2UgY2F0ZWdvcml6ZWQgZGF0YSBzZXRzLiBUYWJzIGluIEJ1bGxob3JuIGhhdmUgdHdvIGRpZmZlcmVudCB0aGVtZXM7IEEgJ2NvbG9yJyB0aGVtZSBmb3IgdGFiYmVkIG5hdmlnYXRpb24gb24gYSBjb2xvcmVkIGJhY2tncm91bmQsIGFuZCBhICd3aGl0ZScgdGhlbWUgZm9yIHRhYnMgb24gYSB3aGl0ZSBiYWNrZ3JvdW5kLjwvcD5cblxuICAgIDxoMj5UaGVtZXM8L2gyPlxuXG4gICAgPGg1PkNvbG9yPC9oNT5cbiAgICA8cD5Db2xvcmVkIGJhY2tncm91bmQgdGFiIG5hdmlnYXRpb24gZ2V0cyB0aGUgdGhlbWUgPGNvZGU+dGhlbWU9XCJjb2xvclwiPC9jb2RlPjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBjb2xvci10YWItZGVtb1wiPiR7Q29sb3JEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQ29sb3JEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+V2hpdGU8L2g1PlxuICAgIDxwPldoaXRlIGJhY2tncm91bmQgdGFiIG5hdmlnYXRpb24gZ2V0cyB0aGUgdGhlbWUgPGNvZGU+dGhlbWU9XCJ3aGl0ZVwiPC9jb2RlPjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSB0cmFuc3BhcmVudC10YWItZGVtb1wiPiR7V2hpdGVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiV2hpdGVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDI+VHlwZXM8L2gyPlxuXG4gICAgPGg1PlZlcnRpY2FsPC9oNT5cbiAgICA8cD5WZXJ0aWNhbCB0YWJzIGdldCBhIGRpcmVjdGlvbiBhdHRyaWJ1dGUgPGNvZGU+ZGlyZWN0aW9uPVwidmVydGljYWxcIjwvY29kZT48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgdmVydGljYWwtdGFiLWRlbW9cIj4ke1ZlcnRpY2FsRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlZlcnRpY2FsRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PkJ1dHRvbiBUYWIgQmFyczwvaDU+XG4gICAgPHA+VGFiYmVkIEJ1dHRvbiBCYXJzIGdldCBhIHNpbWlsYXIgc3R5bGUgdHJlYXRtZW50IHRvIHRoZSA8Y29kZT5cImhlYWRlclwiPC9jb2RlPiB0aGVtZSBidXR0b24uPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGV4YW1wbGUgYnV0dG9uLXRhYi1kZW1vXCI+JHtCdXR0b25UYWJEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQnV0dG9uVGFiRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGgyPkFzIEFwcGxpY2F0aW9uIFJvdXRpbmcgTWVjaGFuaXNtPC9oMj5cbiAgICA8cD5Gb2xsb3dzIHRoZSBzYW1lIGNvbG9yL3doaXRlIHRoZW1lIGFzIGFib3ZlLCBidXQgZG9lc24ndCB1c2UgdGhlIFwibm92by10YWJzXCIgdGFnIGFuZCB5b3UgaGF2ZSB0byBhZGQgdGhlIGNsYXNzZXMgYW5kIGh0bWwgYWNjb3JkaW5nbHkuIFRoZSBoZWFkZXIgd2lsbCBub3cgY29udHJvbCBhbmQgcm91dGUgeW91ciBhcHBsaWNhdGlvbiBhbmQgcHV0IHRoZSBjb250ZW50IGluIHRoZSBcInJvdXRlci1vdXRsZXRcIiBhbmQgbG9vay9mZWVsIGxpa2Ugb3VyIHRhYnMgY29tcG9uZW50LjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSB0cmFuc3BhcmVudC10YWItZGVtb1wiPiR7Um91dGVyRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlJvdXRlckRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0YWJzLWRlbW8nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICBkaXJlY3RpdmVzOiBbTk9WT19UQUJfRUxFTUVOVFMsIENvZGVTbmlwcGV0XVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzRGVtbyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuQ29sb3JEZW1vVHBsID0gQ29sb3JEZW1vVHBsO1xuICAgICAgICB0aGlzLldoaXRlRGVtb1RwbCA9IFdoaXRlRGVtb1RwbDtcbiAgICAgICAgdGhpcy5WZXJ0aWNhbERlbW9UcGwgPSBWZXJ0aWNhbERlbW9UcGw7XG4gICAgICAgIHRoaXMuQnV0dG9uVGFiRGVtb1RwbCA9IEJ1dHRvblRhYkRlbW9UcGw7XG4gICAgICAgIHRoaXMuUm91dGVyRGVtb1RwbCA9IFJvdXRlckRlbW9UcGw7XG4gICAgfVxuXG4gICAgdGFiU2VsZWN0ZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUQUIgU0VMRUNURUQnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIH1cblxuICAgIHRhYkRlc2VsZWN0ZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUQUIgREVTRUxFQ1RFRCcpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfVxufVxuIl19

/***/ },

/***/ 1190:
/***/ function(module, exports) {

	module.exports = "<header class=\"color\">\n    <novo-nav theme=\"color\" [outlet]=\"buttonTab\" type=\"button-bar\">\n        <novo-tab-button>Button 1</novo-tab-button>\n        <novo-tab-button>Button 2</novo-tab-button>\n        <novo-tab-button>Button 3</novo-tab-button>\n    </novo-nav>\n</header>\n\n<novo-nav-outlet #buttonTab>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 3 Content</h1>\n    </novo-nav-content>\n</novo-nav-outlet>\n\n<header>\n    <novo-nav theme=\"white\" [outlet]=\"buttonTabWhite\" type=\"button-bar\">\n        <novo-tab-button>Button 1</novo-tab-button>\n        <novo-tab-button>Button 2</novo-tab-button>\n        <novo-tab-button>Button 3</novo-tab-button>\n    </novo-nav>\n</header>\n\n<novo-nav-outlet #buttonTabWhite>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 3 Content</h1>\n    </novo-nav-content>\n</novo-nav-outlet>\n"

/***/ },

/***/ 1191:
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-nav theme=\"color\" [outlet]=\"colornav\" direction=\"horizontal\">\n        <novo-tab>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 1</span>\n        </novo-tab>\n        <novo-tab>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 2</span>\n        </novo-tab>\n    </novo-nav>\n</header>\n\n<novo-nav-outlet #colornav>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n    </novo-nav-content>\n</novo-nav-outlet>\n"

/***/ },

/***/ 1192:
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-nav theme=\"white\" router>\n        <novo-tab-link>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 1</span>\n        </novo-tab-link>\n        <novo-tab-link>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 2</span>\n        </novo-tab-link>\n    </novo-nav>\n</header>\n"

/***/ },

/***/ 1193:
/***/ function(module, exports) {

	module.exports = "<novo-nav theme=\"white\" [outlet]=\"colorVert\" direction=\"vertical\">\n    <novo-tab>\n        <span>\n            <i class=\"bhi-person\"></i>Tab 1</span>\n    </novo-tab>\n    <novo-tab>\n        <span>\n            <i class=\"bhi-person\"></i>Tab 2</span>\n    </novo-tab>\n</novo-nav>\n\n<novo-nav-outlet #colorVert>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n\n        <p>\n            Synth polaroid bitters chillwave pickled. Vegan disrupt tousled,\n            Portland keffiyeh aesthetic food truck sriracha cornhole\n            single-origin coffee church-key roof party. Leggings\n            ethical McSweeney's, normcore you probably haven't\n            heard of them Marfa organic squid. Slow-carb 90's\n            ennui Godard pug asymmetrical, narwhal VHS Tonx High\n            Life. Retro dreamcatcher synth Godard pickled Etsy\n            jean shorts beard, pour-over fanny pack mumblecore.\n            Quinoa retro aesthetic polaroid, Williamsburg American\n            Apparel plaid small batch. Blue Bottle Vice fanny\n            pack, Williamsburg roof party Wes Anderson mlkshk\n            seitan brunch before they sold out lo-fi XOXO tofu\n            scenester small batch.\n        </p>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n\n        <p>\n            Synth polaroid bitters chillwave pickled.\n        </p>\n    </novo-nav-content>\n</novo-nav-outlet>\n"

/***/ },

/***/ 1194:
/***/ function(module, exports) {

	module.exports = "<header>\n    <novo-nav theme=\"white\" [outlet]=\"whitenav\">\n        <novo-tab>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 1</span>\n        </novo-tab>\n        <novo-tab>\n            <span>\n                <i class=\"bhi-person\"></i>Tab 2</span>\n        </novo-tab>\n    </novo-nav>\n</header>\n\n<novo-nav-outlet #whitenav>\n    <novo-nav-content>\n        <h1>Tab 1 Content</h1>\n    </novo-nav-content>\n    <novo-nav-content>\n        <h1>Tab 2 Content</h1>\n    </novo-nav-content>\n</novo-nav-outlet>\n"

/***/ }

});
//# sourceMappingURL=3.c2d06b6d0bc5f8a8459e.bundle.map