webpackJsonp([21],{

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

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HeaderDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(16);
	
	var _CodeSnippet = __webpack_require__(1129);
	
	var _HeaderDemo = __webpack_require__(1162);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvaGVhZGVyL0hlYWRlckRlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUFFQSxJQUFNLDZoQkFBTjs7SUFtQmEsVSxXQUFBLFUsV0FMWixxQkFBVTtBQUNQLGNBQVUsYUFESDtBQUVQLGNBQVUsUUFGSDtBQUdQLGdCQUFZO0FBSEwsQ0FBVixDO0FBTUcsd0JBQVksT0FBWixFQUFrQztBQUFBOztBQUM5QixhQUFLLGFBQUw7QUFDQSxhQUFLLE1BQUwsR0FBYyxTQUFkOztBQUVBLGFBQUssT0FBTCxHQUFlO0FBQ1gscUJBQVMsT0FERTtBQUVYLHVCQUFXLGlCQUZBO0FBR1gscUJBQVMsT0FIRTtBQUlYLG9CQUFRLFdBSkc7QUFLWCx3QkFBWTtBQUxELFNBQWY7O0FBUUEsYUFBSyxPQUFMLEdBQWUsT0FBZjtBQUNIOzs7O2dDQUVPLEksRUFBTSxFLEVBQUk7O0FBRWQsaUJBQUssT0FBTCxHQUFlO0FBQ1gsNEJBQVUsSUFEQztBQUVYLHlCQUFZLEVBQVosY0FGVztBQUdYLHVCQUFPLE9BSEk7QUFJWCwyQkFBUyxJQUpFO0FBS1gsMEJBQVU7QUFMQyxhQUFmOzs7QUFTQSxpQkFBSyxPQUFMLENBQWEsS0FBYiwwQkFBOEIsS0FBSyxPQUFuQztBQUNIOzs7OzswRUE1QlEsVSIsImZpbGUiOiJIZWFkZXJEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9icmlhbmtpbWJhbGwvTm92by9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOT1ZPX0JVVFRPTl9FTEVNRU5UUywgTk9WT19IRUFERVJfRUxFTUVOVFMsIE5PVk9fVEFCX0VMRU1FTlRTLCBUb2FzdFNlcnZpY2UsIE5vdm9Ub2FzdCB9IGZyb20gJy4vLi4vLi4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG5pbXBvcnQgeyBDb2RlU25pcHBldCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2NvZGVzbmlwcGV0L0NvZGVTbmlwcGV0JztcblxuaW1wb3J0IEhlYWRlckRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvSGVhZGVyRGVtby5odG1sJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPkhlYWRlcnMgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvaGVhZGVyXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPkhlYWRlcnMgYXJlIHVzZWQgaW4gTWFpbmZyYW1lIFJlY29yZCBwYWdlcyBhbmQgc29tZSBtb2RhbHMuIDwvcD5cblxuICAgIDxoMj5UeXBlczwvaDI+XG5cbiAgICA8aDU+UmVjb3JkIEhlYWRlcjwvaDU+XG4gICAgPHA+UmVjb3JkIGhlYWRlcnMgaGF2ZSBkZXRhaWxzIGFib3V0IHRoZSBlbnRpdHkgcmVjb3JkIGFuZCB0YWJiZWQgbmF2aWdhdGlvbi48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgaGVhZGVyLWRlbW9cIj4ke0hlYWRlckRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJIZWFkZXJEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaGVhZGVyLWRlbW8nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICBkaXJlY3RpdmVzOiBbTk9WT19CVVRUT05fRUxFTUVOVFMsIE5PVk9fSEVBREVSX0VMRU1FTlRTLCBOT1ZPX1RBQl9FTEVNRU5UUywgQ29kZVNuaXBwZXRdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckRlbW8ge1xuICAgIGNvbnN0cnVjdG9yKHRvYXN0ZXI6VG9hc3RTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuSGVhZGVyRGVtb1RwbCA9IEhlYWRlckRlbW9UcGw7XG4gICAgICAgIHRoaXMuZW50aXR5ID0gJ2NvbXBhbnknO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgICd0aXRsZSc6ICdUaXRsZScsXG4gICAgICAgICAgICAnbWVzc2FnZSc6ICdTb21lIE1lc3NhZ2UuLi4nLFxuICAgICAgICAgICAgJ3RoZW1lJzogJ29jZWFuJyxcbiAgICAgICAgICAgICdpY29uJzogJ2NsaXBib2FyZCcsXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZ3Jvd2xUb3BSaWdodCdcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnRvYXN0ZXIgPSB0b2FzdGVyO1xuICAgIH1cblxuICAgIGNhdGNoRXYodHlwZSwgZXYpIHtcbiAgICAgICAgLy8gU2V0IHRvYXN0IG9wdGlvbnNcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IGAke3R5cGV9YCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGAke2V2fSBmaXJlZC4uLmAsXG4gICAgICAgICAgICB0aGVtZTogJ29jZWFuJyxcbiAgICAgICAgICAgIGljb246IGAke3R5cGV9YCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZ3Jvd2xUb3BSaWdodCdcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBGaXJlIHRvYXN0XG4gICAgICAgIHRoaXMudG9hc3Rlci5hbGVydChOb3ZvVG9hc3QsIHRoaXMub3B0aW9ucyk7XG4gICAgfVxufVxuIl19

/***/ },

/***/ 1162:
/***/ function(module, exports) {

	module.exports = "<header title=\"John Deere\" icon=\"person\" [theme]=\"entity\">\n    <utils>\n        <util-action icon=\"flag\" (click)=\"catchEv('pin', $event)\"></util-action>\n        <util-action icon=\"refresh\" (click)=\"catchEv('refresh', $event)\"></util-action>\n        <util-action icon=\"times\" (click)=\"catchEv('close', $event)\"></util-action>\n    </utils>\n    <section>\n        Extra Info\n    </section>\n    <novo-nav theme=\"color\" [outlet]=\"colornav\" direction=\"horizontal\">\n        <novo-tab>\n            <span>Overview</span>\n        </novo-tab>\n        <novo-tab>\n            <span>Activity</span>\n        </novo-tab>\n        <novo-tab>\n            <span>Email</span>\n        </novo-tab>\n    </novo-nav>\n</header>\n"

/***/ }

});
//# sourceMappingURL=21.4d51c3011826ceba43dd.bundle.map