webpackJsonp([21],{

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

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HeaderDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(15);
	
	var _CodeSnippet = __webpack_require__(1132);
	
	var _HeaderDemo = __webpack_require__(1165);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvaGVhZGVyL0hlYWRlckRlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUFFQSxJQUFNLDZoQkFBTjs7SUFtQmEsVSxXQUFBLFUsV0FMWixxQkFBVTtBQUNQLGNBQVUsYUFESDtBQUVQLGNBQVUsUUFGSDtBQUdQLGdCQUFZO0FBSEwsQ0FBVixDO0FBTUcsd0JBQVksT0FBWixFQUFrQztBQUFBOztBQUM5QixhQUFLLGFBQUw7QUFDQSxhQUFLLE1BQUwsR0FBYyxTQUFkOztBQUVBLGFBQUssT0FBTCxHQUFlO0FBQ1gscUJBQVMsT0FERTtBQUVYLHVCQUFXLGlCQUZBO0FBR1gscUJBQVMsT0FIRTtBQUlYLG9CQUFRLFdBSkc7QUFLWCx3QkFBWTtBQUxELFNBQWY7O0FBUUEsYUFBSyxPQUFMLEdBQWUsT0FBZjtBQUNIOzs7O2dDQUVPLEksRUFBTSxFLEVBQUk7QUFDZDtBQUNBLGlCQUFLLE9BQUwsR0FBZTtBQUNYLDRCQUFVLElBREM7QUFFWCx5QkFBWSxFQUFaLGNBRlc7QUFHWCx1QkFBTyxPQUhJO0FBSVgsMkJBQVMsSUFKRTtBQUtYLDBCQUFVO0FBTEMsYUFBZjs7QUFRQTtBQUNBLGlCQUFLLE9BQUwsQ0FBYSxLQUFiLDBCQUE4QixLQUFLLE9BQW5DO0FBQ0g7Ozs7OzBFQTVCUSxVIiwiZmlsZSI6IkhlYWRlckRlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JyaWFua2ltYmFsbC9Ob3ZvL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5PVk9fQlVUVE9OX0VMRU1FTlRTLCBOT1ZPX0hFQURFUl9FTEVNRU5UUywgTk9WT19UQUJfRUxFTUVOVFMsIFRvYXN0U2VydmljZSwgTm92b1RvYXN0IH0gZnJvbSAnLi8uLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbmltcG9ydCB7IENvZGVTbmlwcGV0IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQnO1xuXG5pbXBvcnQgSGVhZGVyRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9IZWFkZXJEZW1vLmh0bWwnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+SGVhZGVycyA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy9oZWFkZXJcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+SGVhZGVycyBhcmUgdXNlZCBpbiBNYWluZnJhbWUgUmVjb3JkIHBhZ2VzIGFuZCBzb21lIG1vZGFscy4gPC9wPlxuXG4gICAgPGgyPlR5cGVzPC9oMj5cblxuICAgIDxoNT5SZWNvcmQgSGVhZGVyPC9oNT5cbiAgICA8cD5SZWNvcmQgaGVhZGVycyBoYXZlIGRldGFpbHMgYWJvdXQgdGhlIGVudGl0eSByZWNvcmQgYW5kIHRhYmJlZCBuYXZpZ2F0aW9uLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBoZWFkZXItZGVtb1wiPiR7SGVhZGVyRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkhlYWRlckRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdoZWFkZXItZGVtbycsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgIGRpcmVjdGl2ZXM6IFtOT1ZPX0JVVFRPTl9FTEVNRU5UUywgTk9WT19IRUFERVJfRUxFTUVOVFMsIE5PVk9fVEFCX0VMRU1FTlRTLCBDb2RlU25pcHBldF1cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyRGVtbyB7XG4gICAgY29uc3RydWN0b3IodG9hc3RlcjpUb2FzdFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5IZWFkZXJEZW1vVHBsID0gSGVhZGVyRGVtb1RwbDtcbiAgICAgICAgdGhpcy5lbnRpdHkgPSAnY29tcGFueSc7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgJ3RpdGxlJzogJ1RpdGxlJyxcbiAgICAgICAgICAgICdtZXNzYWdlJzogJ1NvbWUgTWVzc2FnZS4uLicsXG4gICAgICAgICAgICAndGhlbWUnOiAnb2NlYW4nLFxuICAgICAgICAgICAgJ2ljb24nOiAnY2xpcGJvYXJkJyxcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdncm93bFRvcFJpZ2h0J1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudG9hc3RlciA9IHRvYXN0ZXI7XG4gICAgfVxuXG4gICAgY2F0Y2hFdih0eXBlLCBldikge1xuICAgICAgICAvLyBTZXQgdG9hc3Qgb3B0aW9uc1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogYCR7dHlwZX1gLFxuICAgICAgICAgICAgbWVzc2FnZTogYCR7ZXZ9IGZpcmVkLi4uYCxcbiAgICAgICAgICAgIHRoZW1lOiAnb2NlYW4nLFxuICAgICAgICAgICAgaWNvbjogYCR7dHlwZX1gLFxuICAgICAgICAgICAgcG9zaXRpb246ICdncm93bFRvcFJpZ2h0J1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEZpcmUgdG9hc3RcbiAgICAgICAgdGhpcy50b2FzdGVyLmFsZXJ0KE5vdm9Ub2FzdCwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 1165:
/***/ function(module, exports) {

	module.exports = "<header title=\"John Deere\" icon=\"person\" [theme]=\"entity\">\n    <utils>\n        <util-action icon=\"flag\" (click)=\"catchEv('pin', $event)\"></util-action>\n        <util-action icon=\"refresh\" (click)=\"catchEv('refresh', $event)\"></util-action>\n        <util-action icon=\"times\" (click)=\"catchEv('close', $event)\"></util-action>\n    </utils>\n    <section>\n        Extra Info\n    </section>\n    <novo-nav theme=\"color\" [outlet]=\"colornav\" direction=\"horizontal\">\n        <novo-tab>\n            <span>Overview</span>\n        </novo-tab>\n        <novo-tab>\n            <span>Activity</span>\n        </novo-tab>\n        <novo-tab>\n            <span>Email</span>\n        </novo-tab>\n    </novo-nav>\n</header>\n"

/***/ }

});
//# sourceMappingURL=21.2d132b739e0b7526a99f.bundle.map