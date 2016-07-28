webpackJsonp([18],{

/***/ 1136:
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

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SwitchDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(14);
	
	var _CodeSnippet = __webpack_require__(1136);
	
	var _SwitchDemo = __webpack_require__(1195);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvc3dpdGNoL1N3aXRjaERlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLHMrQkFBTjs7SUFzQmEsVSxXQUFBLFUsV0FMWixxQkFBVTtBQUNQLGNBQVUsYUFESDtBQUVQLGNBQVUsUUFGSDtBQUdQLGdCQUFZO0FBSEwsQ0FBVixDO0FBTUcsMEJBQWM7QUFBQTs7QUFDVixhQUFLLGFBQUw7QUFDQSxhQUFLLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxhQUFLLE9BQUwsR0FBZSxJQUFmO0FBQ0EsYUFBSyxZQUFMLEdBQW9CLElBQXBCO0FBQ0g7Ozs7b0NBRVc7QUFDUixpQkFBSyxXQUFMO0FBQ0g7OztnQ0FFTyxLLEVBQU87QUFDWCxpQkFBSyxZQUFMLEdBQW9CLEtBQXBCO0FBQ0giLCJmaWxlIjoiU3dpdGNoRGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOT1ZPX1NXSVRDSF9FTEVNRU5UUyB9IGZyb20gJy4vLi4vLi4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG5pbXBvcnQgeyBDb2RlU25pcHBldCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2NvZGVzbmlwcGV0L0NvZGVTbmlwcGV0JztcbmltcG9ydCBTd2l0Y2hEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1N3aXRjaERlbW8uaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5Td2l0Y2hlcyAmIFRvZ2dsZXMgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvc3dpdGNoXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPkxvYWRpbmcgYW5pbWF0aW9ucyBhcmUgdXNlZCB0byBoZWxwIGluZGljYXRlIHRvIHRoZSB1c2VyIHRoYXQgc29tZSBzb3J0IG9mIHByb2dyZXNzIGlzIHRha2luZyBwbGFjZS4gVGhlc2UgYXJlIGVzcGVjaWFsbHkgaGVscGZ1bCBmb3IgaW50ZW5zaXZlIG9wZXJhdGlvbnMgdGhhdCBtaWdodCB0YWtlIGV4dHJhIHRpbWUuPC9wPlxuXG4gICAgPGgyPlR5cGVzPC9oMj5cblxuICAgIDxoNT5UaWxlczwvaDU+XG4gICAgPHA+U2ltaWxhciB0byByYWRpbyBidXR0b25zLCB0aWxlcyBhcmUgdXNlZCB0byBzZWxlY3QgYSBzaW5nbGUgaXRlbS4gVGlsZXMgaGF2ZSBhIGhpZ2hlciB2aXNpYmlsaXR5IHRoYW4gcmFkaW8gYnV0dG9ucywgYW5kIGFyZSB1c2VkIG1vcmUgZnJlcXVlbnRseSBpbiBkYXRhIHZpc3VhbGl6YXRpb25zLiBUaWxlcyBzdHJldGNoIGhvcml6b250YWxseSwgc28gdGhlIGxpc3QgdGhleSBwdWxsIGZyb20gbXVzdCBiZSBzbWFsbC48L3A+XG5cbiAgICA8aDU+U3dpdGNoZXM8L2g1PlxuICAgIDxwPlN3aXRjaGVzIGFyZSBhIGJpbmFyeSB0b2dnbGUgdGhhdCBhbGxvdyB0aGUgdXNlciB0byBzZWxlY3Qgb25lIG9mIHR3byBvcHRpb25zLiBUaGV5IGFyZSBtb3N0IGZyZXF1ZW50bHkgdXNlZCBmb3IgYW4gb24tb2ZmIG1vZGVsLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBzd2l0Y2gtZGVtb1wiPiR7U3dpdGNoRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlN3aXRjaERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzd2l0Y2gtZGVtbycsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgIGRpcmVjdGl2ZXM6IFtOT1ZPX1NXSVRDSF9FTEVNRU5UUywgQ29kZVNuaXBwZXRdXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaERlbW8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLlN3aXRjaERlbW9UcGwgPSBTd2l0Y2hEZW1vVHBsO1xuICAgICAgICB0aGlzLnRvZ2dsZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b2dnbGVkQ2hlY2sgPSB0cnVlO1xuICAgIH1cblxuICAgIGluY3JlbWVudCgpIHtcbiAgICAgICAgdGhpcy50b2dnbGVDb3VudCsrO1xuICAgIH1cblxuICAgIHRvZ2dsZWQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy50b2dnbGVkQ2hlY2sgPSBldmVudDtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 1195:
/***/ function(module, exports) {

	module.exports = "<label>Count\n    <span>{{toggleCount}}</span>\n</label>\n<label>Toggled\n    <span>{{toggledCheck}}</span>\n</label>\n<novo-switch [checked]=\"checked\" (onChange)=\"increment(); toggled($event)\"\n             data-automation-id=\"switchTest\"></novo-switch>\n<novo-switch class=\"grapefruit\"></novo-switch>\n<novo-switch disabled></novo-switch>\n"

/***/ }

});
//# sourceMappingURL=18.1195e4ed0ef613087bf5.bundle.map