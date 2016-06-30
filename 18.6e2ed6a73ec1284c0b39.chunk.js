webpackJsonp([18],{

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

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SwitchDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(16);
	
	var _CodeSnippet = __webpack_require__(1129);
	
	var _SwitchDemo = __webpack_require__(1186);
	
	var _SwitchDemo2 = _interopRequireDefault(_SwitchDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Switches & Toggles <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/switch">(source)</a></small></h1>\n    <p>Loading animations are used to help indicate to the user that some sort of progress is taking place. These are especially helpful for intensive operations that might take extra time.</p>\n\n    <h2>Types</h2>\n\n    <h5>Tiles</h5>\n    <p>Similar to radio buttons, tiles are used to select a single item. Tiles have a higher visibility than radio buttons, and are used more frequently in data visualizations. Tiles stretch horizontally, so the list they pull from must be small.</p>\n\n    <h5>Switches</h5>\n    <p>Switches are a binary toggle that allow the user to select one of two options. They are most frequently used for an on-off model.</p>\n    <div class="example switch-demo">' + _SwitchDemo2.default + '</div>\n    <code-snippet [code]="SwitchDemoTpl"></code-snippet>\n</div>\n';
	
	var SwitchDemo = exports.SwitchDemo = (_dec = (0, _core.Component)({
	    selector: 'switch-demo',
	    template: template,
	    directives: [_novoElements.NOVO_SWITCH_ELEMENTS, _CodeSnippet.CodeSnippet]
	}), _dec(_class = function () {
	    function SwitchDemo() {
	        _classCallCheck(this, SwitchDemo);
	
	        this.SwitchDemoTpl = _SwitchDemo2.default;
	        this.toggleCount = 0;
	        this.checked = true;
	        this.toggledCheck = true;
	    }
	
	    _createClass(SwitchDemo, [{
	        key: 'increment',
	        value: function increment() {
	            this.toggleCount++;
	        }
	    }, {
	        key: 'toggled',
	        value: function toggled(event) {
	            this.toggledCheck = event;
	        }
	    }]);
	
	    return SwitchDemo;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvc3dpdGNoL1N3aXRjaERlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLHMrQkFBTjs7SUFzQmEsVSxXQUFBLFUsV0FMWixxQkFBVTtBQUNQLGNBQVUsYUFESDtBQUVQLGNBQVUsUUFGSDtBQUdQLGdCQUFZO0FBSEwsQ0FBVixDO0FBTUcsMEJBQWM7QUFBQTs7QUFDVixhQUFLLGFBQUw7QUFDQSxhQUFLLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxhQUFLLE9BQUwsR0FBZSxJQUFmO0FBQ0EsYUFBSyxZQUFMLEdBQW9CLElBQXBCO0FBQ0g7Ozs7b0NBRVc7QUFDUixpQkFBSyxXQUFMO0FBQ0g7OztnQ0FFTyxLLEVBQU87QUFDWCxpQkFBSyxZQUFMLEdBQW9CLEtBQXBCO0FBQ0giLCJmaWxlIjoiU3dpdGNoRGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYnJpYW5raW1iYWxsL05vdm8vbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTk9WT19TV0lUQ0hfRUxFTUVOVFMgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuaW1wb3J0IHsgQ29kZVNuaXBwZXQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9jb2Rlc25pcHBldC9Db2RlU25pcHBldCc7XG5pbXBvcnQgU3dpdGNoRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9Td2l0Y2hEZW1vLmh0bWwnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+U3dpdGNoZXMgJiBUb2dnbGVzIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL3N3aXRjaFwiPihzb3VyY2UpPC9hPjwvc21hbGw+PC9oMT5cbiAgICA8cD5Mb2FkaW5nIGFuaW1hdGlvbnMgYXJlIHVzZWQgdG8gaGVscCBpbmRpY2F0ZSB0byB0aGUgdXNlciB0aGF0IHNvbWUgc29ydCBvZiBwcm9ncmVzcyBpcyB0YWtpbmcgcGxhY2UuIFRoZXNlIGFyZSBlc3BlY2lhbGx5IGhlbHBmdWwgZm9yIGludGVuc2l2ZSBvcGVyYXRpb25zIHRoYXQgbWlnaHQgdGFrZSBleHRyYSB0aW1lLjwvcD5cblxuICAgIDxoMj5UeXBlczwvaDI+XG5cbiAgICA8aDU+VGlsZXM8L2g1PlxuICAgIDxwPlNpbWlsYXIgdG8gcmFkaW8gYnV0dG9ucywgdGlsZXMgYXJlIHVzZWQgdG8gc2VsZWN0IGEgc2luZ2xlIGl0ZW0uIFRpbGVzIGhhdmUgYSBoaWdoZXIgdmlzaWJpbGl0eSB0aGFuIHJhZGlvIGJ1dHRvbnMsIGFuZCBhcmUgdXNlZCBtb3JlIGZyZXF1ZW50bHkgaW4gZGF0YSB2aXN1YWxpemF0aW9ucy4gVGlsZXMgc3RyZXRjaCBob3Jpem9udGFsbHksIHNvIHRoZSBsaXN0IHRoZXkgcHVsbCBmcm9tIG11c3QgYmUgc21hbGwuPC9wPlxuXG4gICAgPGg1PlN3aXRjaGVzPC9oNT5cbiAgICA8cD5Td2l0Y2hlcyBhcmUgYSBiaW5hcnkgdG9nZ2xlIHRoYXQgYWxsb3cgdGhlIHVzZXIgdG8gc2VsZWN0IG9uZSBvZiB0d28gb3B0aW9ucy4gVGhleSBhcmUgbW9zdCBmcmVxdWVudGx5IHVzZWQgZm9yIGFuIG9uLW9mZiBtb2RlbC48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgc3dpdGNoLWRlbW9cIj4ke1N3aXRjaERlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJTd2l0Y2hEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc3dpdGNoLWRlbW8nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICBkaXJlY3RpdmVzOiBbTk9WT19TV0lUQ0hfRUxFTUVOVFMsIENvZGVTbmlwcGV0XVxufSlcbmV4cG9ydCBjbGFzcyBTd2l0Y2hEZW1vIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5Td2l0Y2hEZW1vVHBsID0gU3dpdGNoRGVtb1RwbDtcbiAgICAgICAgdGhpcy50b2dnbGVDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudG9nZ2xlZENoZWNrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnQoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlQ291bnQrKztcbiAgICB9XG5cbiAgICB0b2dnbGVkKGV2ZW50KSB7XG4gICAgICAgIHRoaXMudG9nZ2xlZENoZWNrID0gZXZlbnQ7XG4gICAgfVxufVxuIl19

/***/ },

/***/ 1186:
/***/ function(module, exports) {

	module.exports = "<label>Count\n    <span>{{toggleCount}}</span>\n</label>\n<label>Toggled\n    <span>{{toggledCheck}}</span>\n</label>\n<novo-switch [checked]=\"checked\" (onChange)=\"increment(); toggled($event)\"\n    data-automation-id=\"switchTest\"></novo-switch>\n<novo-switch class=\"grapefruit\"></novo-switch>\n<novo-switch disabled></novo-switch>\n"

/***/ }

});
//# sourceMappingURL=18.6e2ed6a73ec1284c0b39.bundle.map