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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztJQU9hLFcsV0FBQSxXLFdBTFoscUJBQVU7QUFDUCxZQUFRLENBQUMsTUFBRCxDQUREO0FBRVAsY0FBVSxjQUZIO0FBR1AsY0FBVTtBQUhILENBQVYsQzs7Ozs7OzttQ0FNYztBQUNQLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxhQUFMLENBQW1CLEtBQUssSUFBeEIsRUFBOEIsS0FBL0M7QUFDSCIsImZpbGUiOiJDb2RlU25pcHBldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYnJpYW5raW1iYWxsL05vdm8vbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBpbnB1dHM6IFsnY29kZSddLFxuICAgIHNlbGVjdG9yOiAnY29kZS1zbmlwcGV0JyxcbiAgICB0ZW1wbGF0ZTogJzxwcmU+PGNvZGUgW2lubmVySHRtbF09XCJoaWdobGlnaHRcIj48L2NvZGU+PC9wcmU+J1xufSlcbmV4cG9ydCBjbGFzcyBDb2RlU25pcHBldCB7XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ID0gaGxqcy5oaWdobGlnaHRBdXRvKHRoaXMuY29kZSkudmFsdWU7XG4gICAgfVxufVxuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdGFicy9UYWJzRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTSw0L0RBQU47O0lBeUNhLFEsV0FBQSxRLFdBTFoscUJBQVU7QUFDUCxjQUFVLFdBREg7QUFFUCxjQUFVLFFBRkg7QUFHUCxnQkFBWTtBQUhMLENBQVYsQztBQU1HLHdCQUFjO0FBQUE7O0FBQ1YsYUFBSyxZQUFMO0FBQ0EsYUFBSyxZQUFMO0FBQ0EsYUFBSyxlQUFMO0FBQ0EsYUFBSyxnQkFBTDtBQUNBLGFBQUssYUFBTDtBQUNIOzs7O3NDQUVhO0FBQ1Ysb0JBQVEsR0FBUixDQUFZLGNBQVosRTtBQUNIOzs7d0NBRWU7QUFDWixvQkFBUSxHQUFSLENBQVksZ0JBQVosRTtBQUNIIiwiZmlsZSI6IlRhYnNEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9icmlhbmtpbWJhbGwvTm92by9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOT1ZPX1RBQl9FTEVNRU5UUyB9IGZyb20gJy4vLi4vLi4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG5pbXBvcnQgeyBDb2RlU25pcHBldCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2NvZGVzbmlwcGV0L0NvZGVTbmlwcGV0JztcblxuaW1wb3J0IEJ1dHRvblRhYkRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQnV0dG9uVGFiRGVtby5odG1sJztcbmltcG9ydCBDb2xvckRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQ29sb3JEZW1vLmh0bWwnO1xuaW1wb3J0IFJvdXRlckRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvUm91dGVyRGVtby5odG1sJztcbmltcG9ydCBWZXJ0aWNhbERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVmVydGljYWxEZW1vLmh0bWwnO1xuaW1wb3J0IFdoaXRlRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9XaGl0ZURlbW8uaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5UYWJzIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL3RhYnNcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+VGFicyBtYWtlIGl0IGVhc3kgdG8gZXhwbG9yZSBhbmQgc3dpdGNoIGJldHdlZW4gZGlmZmVyZW50IHZpZXdzIG9yIGZ1bmN0aW9uYWwgYXNwZWN0cyBvZiBhbiBhcHAgb3IgdG8gYnJvd3NlIGNhdGVnb3JpemVkIGRhdGEgc2V0cy4gVGFicyBpbiBCdWxsaG9ybiBoYXZlIHR3byBkaWZmZXJlbnQgdGhlbWVzOyBBICdjb2xvcicgdGhlbWUgZm9yIHRhYmJlZCBuYXZpZ2F0aW9uIG9uIGEgY29sb3JlZCBiYWNrZ3JvdW5kLCBhbmQgYSAnd2hpdGUnIHRoZW1lIGZvciB0YWJzIG9uIGEgd2hpdGUgYmFja2dyb3VuZC48L3A+XG5cbiAgICA8aDI+VGhlbWVzPC9oMj5cblxuICAgIDxoNT5Db2xvcjwvaDU+XG4gICAgPHA+Q29sb3JlZCBiYWNrZ3JvdW5kIHRhYiBuYXZpZ2F0aW9uIGdldHMgdGhlIHRoZW1lIDxjb2RlPnRoZW1lPVwiY29sb3JcIjwvY29kZT48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgY29sb3ItdGFiLWRlbW9cIj4ke0NvbG9yRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkNvbG9yRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PldoaXRlPC9oNT5cbiAgICA8cD5XaGl0ZSBiYWNrZ3JvdW5kIHRhYiBuYXZpZ2F0aW9uIGdldHMgdGhlIHRoZW1lIDxjb2RlPnRoZW1lPVwid2hpdGVcIjwvY29kZT48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgdHJhbnNwYXJlbnQtdGFiLWRlbW9cIj4ke1doaXRlRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIldoaXRlRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGgyPlR5cGVzPC9oMj5cblxuICAgIDxoNT5WZXJ0aWNhbDwvaDU+XG4gICAgPHA+VmVydGljYWwgdGFicyBnZXQgYSBkaXJlY3Rpb24gYXR0cmlidXRlIDxjb2RlPmRpcmVjdGlvbj1cInZlcnRpY2FsXCI8L2NvZGU+PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHZlcnRpY2FsLXRhYi1kZW1vXCI+JHtWZXJ0aWNhbERlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJWZXJ0aWNhbERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5CdXR0b24gVGFiIEJhcnM8L2g1PlxuICAgIDxwPlRhYmJlZCBCdXR0b24gQmFycyBnZXQgYSBzaW1pbGFyIHN0eWxlIHRyZWF0bWVudCB0byB0aGUgPGNvZGU+XCJoZWFkZXJcIjwvY29kZT4gdGhlbWUgYnV0dG9uLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBleGFtcGxlIGJ1dHRvbi10YWItZGVtb1wiPiR7QnV0dG9uVGFiRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkJ1dHRvblRhYkRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoMj5BcyBBcHBsaWNhdGlvbiBSb3V0aW5nIE1lY2hhbmlzbTwvaDI+XG4gICAgPHA+Rm9sbG93cyB0aGUgc2FtZSBjb2xvci93aGl0ZSB0aGVtZSBhcyBhYm92ZSwgYnV0IGRvZXNuJ3QgdXNlIHRoZSBcIm5vdm8tdGFic1wiIHRhZyBhbmQgeW91IGhhdmUgdG8gYWRkIHRoZSBjbGFzc2VzIGFuZCBodG1sIGFjY29yZGluZ2x5LiBUaGUgaGVhZGVyIHdpbGwgbm93IGNvbnRyb2wgYW5kIHJvdXRlIHlvdXIgYXBwbGljYXRpb24gYW5kIHB1dCB0aGUgY29udGVudCBpbiB0aGUgXCJyb3V0ZXItb3V0bGV0XCIgYW5kIGxvb2svZmVlbCBsaWtlIG91ciB0YWJzIGNvbXBvbmVudC48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgdHJhbnNwYXJlbnQtdGFiLWRlbW9cIj4ke1JvdXRlckRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJSb3V0ZXJEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGFicy1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgZGlyZWN0aXZlczogW05PVk9fVEFCX0VMRU1FTlRTLCBDb2RlU25pcHBldF1cbn0pXG5leHBvcnQgY2xhc3MgVGFic0RlbW8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLkNvbG9yRGVtb1RwbCA9IENvbG9yRGVtb1RwbDtcbiAgICAgICAgdGhpcy5XaGl0ZURlbW9UcGwgPSBXaGl0ZURlbW9UcGw7XG4gICAgICAgIHRoaXMuVmVydGljYWxEZW1vVHBsID0gVmVydGljYWxEZW1vVHBsO1xuICAgICAgICB0aGlzLkJ1dHRvblRhYkRlbW9UcGwgPSBCdXR0b25UYWJEZW1vVHBsO1xuICAgICAgICB0aGlzLlJvdXRlckRlbW9UcGwgPSBSb3V0ZXJEZW1vVHBsO1xuICAgIH1cblxuICAgIHRhYlNlbGVjdGVkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVEFCIFNFTEVDVEVEJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9XG5cbiAgICB0YWJEZXNlbGVjdGVkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVEFCIERFU0VMRUNURUQnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIH1cbn1cbiJdfQ==

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
//# sourceMappingURL=3.3ea488bfb4f0dd1b309c.bundle.map