webpackJsonp([19],{

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

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HeaderDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(171);
	
	var _CodeSnippet = __webpack_require__(831);
	
	var _HeaderDemo = __webpack_require__(864);
	
	var _HeaderDemo2 = _interopRequireDefault(_HeaderDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Headers <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/header">(source)</a></small></h1>\n    <p>Headers are used in Mainframe Record pages and some modals. </p>\n\n    <h2>Types</h2>\n\n    <h5>Record Header</h5>\n    <p>Record headers have details about the entity record and tabbed navigation.</p>\n    <div class="example header-demo">' + _HeaderDemo2.default + '</div>\n    <code-snippet [code]="HeaderDemoTpl"></code-snippet>\n</div>\n';
	
	var HeaderDemo = exports.HeaderDemo = (_dec = (0, _core.Component)({
	    selector: 'header-demo',
	    template: template,
	    directives: [_novoElements.NOVO_BUTTON_ELEMENTS, _novoElements.NOVO_HEADER_ELEMENTS, _novoElements.NOVO_TAB_ELEMENTS, _CodeSnippet.CodeSnippet]
	}), _dec(_class = function () {
	    function HeaderDemo(toaster) {
	        _classCallCheck(this, HeaderDemo);
	
	        this.HeaderDemoTpl = _HeaderDemo2.default;
	        this.entity = 'company';
	
	        this.options = {
	            'title': 'Title',
	            'message': 'Some Message...',
	            'theme': 'ocean',
	            'icon': 'clipboard',
	            'position': 'growlTopRight'
	        };
	
	        this.toaster = toaster;
	    }
	
	    _createClass(HeaderDemo, [{
	        key: 'catchEv',
	        value: function catchEv(type, ev) {
	            // Set toast options
	            this.options = {
	                title: '' + type,
	                message: ev + ' fired...',
	                theme: 'ocean',
	                icon: '' + type,
	                position: 'growlTopRight'
	            };
	
	            // Fire toast
	            this.toaster.alert(_novoElements.NovoToast, this.options);
	        }
	    }]);
	
	    return HeaderDemo;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_novoElements.ToastService], HeaderDemo);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvaGVhZGVyL0hlYWRlckRlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUFFQSxJQUFNLDZoQkFBTjs7SUFtQmEsVSxXQUFBLFUsV0FMWixxQkFBVTtBQUNQLGNBQVUsYUFESDtBQUVQLGNBQVUsUUFGSDtBQUdQLGdCQUFZO0FBSEwsQ0FBVixDO0FBTUcsd0JBQVksT0FBWixFQUFrQztBQUFBOztBQUM5QixhQUFLLGFBQUw7QUFDQSxhQUFLLE1BQUwsR0FBYyxTQUFkOztBQUVBLGFBQUssT0FBTCxHQUFlO0FBQ1gscUJBQVMsT0FERTtBQUVYLHVCQUFXLGlCQUZBO0FBR1gscUJBQVMsT0FIRTtBQUlYLG9CQUFRLFdBSkc7QUFLWCx3QkFBWTtBQUxELFNBQWY7O0FBUUEsYUFBSyxPQUFMLEdBQWUsT0FBZjtBQUNIOzs7O2dDQUVPLEksRUFBTSxFLEVBQUk7O0FBRWQsaUJBQUssT0FBTCxHQUFlO0FBQ1gsNEJBQVUsSUFEQztBQUVYLHlCQUFZLEVBQVosY0FGVztBQUdYLHVCQUFPLE9BSEk7QUFJWCwyQkFBUyxJQUpFO0FBS1gsMEJBQVU7QUFMQyxhQUFmOzs7QUFTQSxpQkFBSyxPQUFMLENBQWEsS0FBYiwwQkFBOEIsS0FBSyxPQUFuQztBQUNIOzs7OzswRUE1QlEsVSIsImZpbGUiOiJIZWFkZXJEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9iaC9ub3ZvL2FwcHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTk9WT19CVVRUT05fRUxFTUVOVFMsIE5PVk9fSEVBREVSX0VMRU1FTlRTLCBOT1ZPX1RBQl9FTEVNRU5UUywgVG9hc3RTZXJ2aWNlLCBOb3ZvVG9hc3QgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuaW1wb3J0IHsgQ29kZVNuaXBwZXQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9jb2Rlc25pcHBldC9Db2RlU25pcHBldCc7XG5cbmltcG9ydCBIZWFkZXJEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0hlYWRlckRlbW8uaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5IZWFkZXJzIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL2hlYWRlclwiPihzb3VyY2UpPC9hPjwvc21hbGw+PC9oMT5cbiAgICA8cD5IZWFkZXJzIGFyZSB1c2VkIGluIE1haW5mcmFtZSBSZWNvcmQgcGFnZXMgYW5kIHNvbWUgbW9kYWxzLiA8L3A+XG5cbiAgICA8aDI+VHlwZXM8L2gyPlxuXG4gICAgPGg1PlJlY29yZCBIZWFkZXI8L2g1PlxuICAgIDxwPlJlY29yZCBoZWFkZXJzIGhhdmUgZGV0YWlscyBhYm91dCB0aGUgZW50aXR5IHJlY29yZCBhbmQgdGFiYmVkIG5hdmlnYXRpb24uPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGhlYWRlci1kZW1vXCI+JHtIZWFkZXJEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiSGVhZGVyRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hlYWRlci1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgZGlyZWN0aXZlczogW05PVk9fQlVUVE9OX0VMRU1FTlRTLCBOT1ZPX0hFQURFUl9FTEVNRU5UUywgTk9WT19UQUJfRUxFTUVOVFMsIENvZGVTbmlwcGV0XVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJEZW1vIHtcbiAgICBjb25zdHJ1Y3Rvcih0b2FzdGVyOlRvYXN0U2VydmljZSkge1xuICAgICAgICB0aGlzLkhlYWRlckRlbW9UcGwgPSBIZWFkZXJEZW1vVHBsO1xuICAgICAgICB0aGlzLmVudGl0eSA9ICdjb21wYW55JztcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAndGl0bGUnOiAnVGl0bGUnLFxuICAgICAgICAgICAgJ21lc3NhZ2UnOiAnU29tZSBNZXNzYWdlLi4uJyxcbiAgICAgICAgICAgICd0aGVtZSc6ICdvY2VhbicsXG4gICAgICAgICAgICAnaWNvbic6ICdjbGlwYm9hcmQnLFxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2dyb3dsVG9wUmlnaHQnXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcbiAgICB9XG5cbiAgICBjYXRjaEV2KHR5cGUsIGV2KSB7XG4gICAgICAgIC8vIFNldCB0b2FzdCBvcHRpb25zXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBgJHt0eXBlfWAsXG4gICAgICAgICAgICBtZXNzYWdlOiBgJHtldn0gZmlyZWQuLi5gLFxuICAgICAgICAgICAgdGhlbWU6ICdvY2VhbicsXG4gICAgICAgICAgICBpY29uOiBgJHt0eXBlfWAsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2dyb3dsVG9wUmlnaHQnXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gRmlyZSB0b2FzdFxuICAgICAgICB0aGlzLnRvYXN0ZXIuYWxlcnQoTm92b1RvYXN0LCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 864:
/***/ function(module, exports) {

	module.exports = "<header title=\"John Deere\" icon=\"person\" [theme]=\"entity\">\n    <utils>\n        <util-action icon=\"flag\" (click)=\"catchEv('pin', $event)\"></util-action>\n        <util-action icon=\"refresh\" (click)=\"catchEv('refresh', $event)\"></util-action>\n        <util-action icon=\"times\" (click)=\"catchEv('close', $event)\"></util-action>\n    </utils>\n    <section>\n        Extra Info\n    </section>\n    <novo-nav theme=\"color\" [outlet]=\"colornav\" direction=\"horizontal\">\n        <novo-tab>\n            <span>Overview</span>\n        </novo-tab>\n        <novo-tab>\n            <span>Activity</span>\n        </novo-tab>\n        <novo-tab>\n            <span>Email</span>\n        </novo-tab>\n    </novo-nav>\n</header>\n"

/***/ }

});
//# sourceMappingURL=19.c5dd2317492e98860d88.bundle.map