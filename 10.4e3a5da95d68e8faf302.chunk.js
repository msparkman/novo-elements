webpackJsonp([10],{

/***/ 1202:
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

/***/ 578:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ChipsDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	// TODO - add tooltips back in when implemented
	
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(6);
	
	var _novoElements = __webpack_require__(21);
	
	var _CodeSnippet = __webpack_require__(1202);
	
	var _BasicChipsDemo = __webpack_require__(1218);
	
	var _BasicChipsDemo2 = _interopRequireDefault(_BasicChipsDemo);
	
	var _AsyncChipsDemo = __webpack_require__(1217);
	
	var _AsyncChipsDemo2 = _interopRequireDefault(_AsyncChipsDemo);
	
	var _FormattedChipsDemo = __webpack_require__(1219);
	
	var _FormattedChipsDemo2 = _interopRequireDefault(_FormattedChipsDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Chips <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/chips">(source)</a></small></h1>\n    <p>The chips element (<code>chips</code>) represents a control that presents a menu of options. The options\n    within are set by the <code>source</code> attribute. Options can be pre-selected for the user using the <code>ngModel</code>\n    attribute. Chips are the multi-select version of <code>pickers</code></p>\n\n    <br/>\n\n    <h5>Basic Examples</h5>\n    <p>\n        By clicking on the <code>chips</code> element, the options list will be displayed.  Select any of the options\n        by clicking on the item in the list.  The value selected will be added to the list of selected values and the options list will be removed.\n    </p>\n    <div class="example chips-demo">' + _BasicChipsDemo2.default + '</div>\n    <code-snippet [code]="BasicChipsDemoTpl"></code-snippet>\n\n    <h5>Async Examples</h5>\n    <p>\n        By clicking on the <code>chips</code> element, the options list will be displayed.  Select any of the options\n        by clicking on the item in the list.  The value selected will be added to the list of selected values and the options list will be removed.\n    </p>\n    <div class="example chips-demo">' + _AsyncChipsDemo2.default + '</div>\n    <code-snippet [code]="AsyncChipsDemoTpl"></code-snippet>\n\n    <h5>Formatted Examples</h5>\n    <p>\n        By clicking on the <code>chips</code> element, the options list will be displayed.  Select any of the options\n        by clicking on the item in the list.  The value selected will be added to the list of selected values and the options list will be removed.\n    </p>\n    <div class="example chips-demo">' + _FormattedChipsDemo2.default + '</div>\n    <code-snippet [code]="FormattedChipsDemoTpl"></code-snippet>\n\n</div>\n';
	
	var ChipsDemo = exports.ChipsDemo = (_dec = (0, _core.Component)({
	    selector: 'chips-demo',
	    template: template,
	    directives: [_novoElements.NOVO_CHIPS_ELEMENTS, _common.CORE_DIRECTIVES, _CodeSnippet.CodeSnippet]
	}), _dec(_class = function () {
	    function ChipsDemo() {
	        _classCallCheck(this, ChipsDemo);
	
	        this.BasicChipsDemoTpl = _BasicChipsDemo2.default;
	        this.AsyncChipsDemoTpl = _AsyncChipsDemo2.default;
	        this.FormattedChipsDemoTpl = _FormattedChipsDemo2.default;
	
	        this.placeholder = 'Select...';
	        this.value = ['Alabama'];
	
	        var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
	        var abbrieviated = [{
	            value: 'USA',
	            label: 'United States'
	        }, {
	            value: 'GB',
	            label: 'Great Britain'
	        }, {
	            value: 'CA',
	            label: 'Canada'
	        }, {
	            value: 'AU',
	            label: 'Austrailia'
	        }];
	        var collaborators = [{
	            id: 1,
	            firstName: 'Brian',
	            lastName: 'Kimball'
	        }, {
	            id: 2,
	            firstName: 'Josh',
	            lastName: 'Godi'
	        }, {
	            id: 3,
	            firstName: 'Alec',
	            lastName: 'Sibilia'
	        }, {
	            id: 4,
	            firstName: 'Kameron',
	            lastName: 'Sween'
	        }];
	        this.static = { options: states };
	        this.formatted = {
	            //field: 'id',
	            format: '$firstName $lastName',
	            options: collaborators
	        };
	        this.async = {
	            options: function options() {
	                return new Promise(function (resolve) {
	                    setTimeout(function () {
	                        resolve(abbrieviated);
	                    }, 300);
	                });
	            }
	        };
	    }
	
	    _createClass(ChipsDemo, [{
	        key: 'onChanged',
	        value: function onChanged() {
	            // console.log('Changed', event);
	        }
	    }]);
	
	    return ChipsDemo;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvY2hpcHMvQ2hpcHNEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sdzNEQUFOOztJQXlDYSxTLFdBQUEsUyxXQUxaLHFCQUFVO0FBQ1AsY0FBVSxZQURIO0FBRVAsY0FBVSxRQUZIO0FBR1AsZ0JBQVk7QUFITCxDQUFWLEM7QUFNRyx5QkFBYztBQUFBOztBQUNWLGFBQUssaUJBQUw7QUFDQSxhQUFLLGlCQUFMO0FBQ0EsYUFBSyxxQkFBTDs7QUFFQSxhQUFLLFdBQUwsR0FBbUIsV0FBbkI7QUFDQSxhQUFLLEtBQUwsR0FBYSxDQUFDLFNBQUQsQ0FBYjs7QUFFQSxZQUFJLFNBQVMsQ0FBQyxTQUFELEVBQVksUUFBWixFQUFzQixTQUF0QixFQUFpQyxVQUFqQyxFQUE2QyxZQUE3QyxFQUEyRCxVQUEzRCxFQUF1RSxhQUF2RSxFQUFzRixVQUF0RixFQUFrRyxTQUFsRyxFQUE2RyxTQUE3RyxFQUF3SCxRQUF4SCxFQUFrSSxPQUFsSSxFQUEySSxVQUEzSSxFQUF1SixTQUF2SixFQUFrSyxNQUFsSyxFQUEwSyxRQUExSyxFQUFvTCxVQUFwTCxFQUFnTSxXQUFoTSxFQUE2TSxPQUE3TSxFQUFzTixVQUF0TixFQUFrTyxlQUFsTyxFQUFtUCxVQUFuUCxFQUErUCxXQUEvUCxFQUE0USxhQUE1USxFQUEyUixVQUEzUixFQUF1UyxTQUF2UyxFQUFrVCxVQUFsVCxFQUE4VCxRQUE5VCxFQUF3VSxlQUF4VSxFQUF5VixZQUF6VixFQUF1VyxZQUF2VyxFQUFxWCxVQUFyWCxFQUFpWSxjQUFqWSxFQUFpWixnQkFBalosRUFBbWEsTUFBbmEsRUFBMmEsVUFBM2EsRUFBdWIsUUFBdmIsRUFBaWMsY0FBamMsRUFBaWQsY0FBamQsRUFBaWUsZ0JBQWplLEVBQW1mLGNBQW5mLEVBQW1nQixXQUFuZ0IsRUFBZ2hCLE9BQWhoQixFQUF5aEIsTUFBemhCLEVBQWlpQixTQUFqaUIsRUFBNGlCLFVBQTVpQixFQUF3akIsWUFBeGpCLEVBQXNrQixlQUF0a0IsRUFBdWxCLFdBQXZsQixFQUFvbUIsU0FBcG1CLENBQWI7QUFDQSxZQUFJLGVBQWUsQ0FBQztBQUNoQixtQkFBTyxLQURTO0FBRWhCLG1CQUFPO0FBRlMsU0FBRCxFQUdoQjtBQUNDLG1CQUFPLElBRFI7QUFFQyxtQkFBTztBQUZSLFNBSGdCLEVBTWhCO0FBQ0MsbUJBQU8sSUFEUjtBQUVDLG1CQUFPO0FBRlIsU0FOZ0IsRUFTaEI7QUFDQyxtQkFBTyxJQURSO0FBRUMsbUJBQU87QUFGUixTQVRnQixDQUFuQjtBQWFBLFlBQUksZ0JBQWdCLENBQUM7QUFDakIsZ0JBQUksQ0FEYTtBQUVqQix1QkFBVyxPQUZNO0FBR2pCLHNCQUFVO0FBSE8sU0FBRCxFQUlqQjtBQUNDLGdCQUFJLENBREw7QUFFQyx1QkFBVyxNQUZaO0FBR0Msc0JBQVU7QUFIWCxTQUppQixFQVFqQjtBQUNDLGdCQUFJLENBREw7QUFFQyx1QkFBVyxNQUZaO0FBR0Msc0JBQVU7QUFIWCxTQVJpQixFQVlqQjtBQUNDLGdCQUFJLENBREw7QUFFQyx1QkFBVyxTQUZaO0FBR0Msc0JBQVU7QUFIWCxTQVppQixDQUFwQjtBQWlCQSxhQUFLLE1BQUwsR0FBYyxFQUFFLFNBQVMsTUFBWCxFQUFkO0FBQ0EsYUFBSyxTQUFMLEdBQWlCOztBQUViLG9CQUFRLHNCQUZLO0FBR2IscUJBQVM7QUFISSxTQUFqQjtBQUtBLGFBQUssS0FBTCxHQUFhO0FBQ1QscUJBQVMsbUJBQU07QUFDWCx1QkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBYTtBQUM1QiwrQkFBVyxZQUFNO0FBQ2IsZ0NBQVEsWUFBUjtBQUNILHFCQUZELEVBRUcsR0FGSDtBQUdILGlCQUpNLENBQVA7QUFLSDtBQVBRLFNBQWI7QUFTSDs7OztvQ0FFVzs7QUFFWCIsImZpbGUiOiJDaGlwc0RlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5PVk9fQ0hJUFNfRUxFTUVOVFMgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuLy8gVE9ETyAtIGFkZCB0b29sdGlwcyBiYWNrIGluIHdoZW4gaW1wbGVtZW50ZWRcbmltcG9ydCB7IENvZGVTbmlwcGV0IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQnO1xuXG5pbXBvcnQgQmFzaWNDaGlwc0RlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQmFzaWNDaGlwc0RlbW8uaHRtbCc7XG5pbXBvcnQgQXN5bmNDaGlwc0RlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQXN5bmNDaGlwc0RlbW8uaHRtbCc7XG5pbXBvcnQgRm9ybWF0dGVkQ2hpcHNEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0Zvcm1hdHRlZENoaXBzRGVtby5odG1sJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPkNoaXBzIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL2NoaXBzXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPlRoZSBjaGlwcyBlbGVtZW50ICg8Y29kZT5jaGlwczwvY29kZT4pIHJlcHJlc2VudHMgYSBjb250cm9sIHRoYXQgcHJlc2VudHMgYSBtZW51IG9mIG9wdGlvbnMuIFRoZSBvcHRpb25zXG4gICAgd2l0aGluIGFyZSBzZXQgYnkgdGhlIDxjb2RlPnNvdXJjZTwvY29kZT4gYXR0cmlidXRlLiBPcHRpb25zIGNhbiBiZSBwcmUtc2VsZWN0ZWQgZm9yIHRoZSB1c2VyIHVzaW5nIHRoZSA8Y29kZT5uZ01vZGVsPC9jb2RlPlxuICAgIGF0dHJpYnV0ZS4gQ2hpcHMgYXJlIHRoZSBtdWx0aS1zZWxlY3QgdmVyc2lvbiBvZiA8Y29kZT5waWNrZXJzPC9jb2RlPjwvcD5cblxuICAgIDxici8+XG5cbiAgICA8aDU+QmFzaWMgRXhhbXBsZXM8L2g1PlxuICAgIDxwPlxuICAgICAgICBCeSBjbGlja2luZyBvbiB0aGUgPGNvZGU+Y2hpcHM8L2NvZGU+IGVsZW1lbnQsIHRoZSBvcHRpb25zIGxpc3Qgd2lsbCBiZSBkaXNwbGF5ZWQuICBTZWxlY3QgYW55IG9mIHRoZSBvcHRpb25zXG4gICAgICAgIGJ5IGNsaWNraW5nIG9uIHRoZSBpdGVtIGluIHRoZSBsaXN0LiAgVGhlIHZhbHVlIHNlbGVjdGVkIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGxpc3Qgb2Ygc2VsZWN0ZWQgdmFsdWVzIGFuZCB0aGUgb3B0aW9ucyBsaXN0IHdpbGwgYmUgcmVtb3ZlZC5cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgY2hpcHMtZGVtb1wiPiR7QmFzaWNDaGlwc0RlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJCYXNpY0NoaXBzRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PkFzeW5jIEV4YW1wbGVzPC9oNT5cbiAgICA8cD5cbiAgICAgICAgQnkgY2xpY2tpbmcgb24gdGhlIDxjb2RlPmNoaXBzPC9jb2RlPiBlbGVtZW50LCB0aGUgb3B0aW9ucyBsaXN0IHdpbGwgYmUgZGlzcGxheWVkLiAgU2VsZWN0IGFueSBvZiB0aGUgb3B0aW9uc1xuICAgICAgICBieSBjbGlja2luZyBvbiB0aGUgaXRlbSBpbiB0aGUgbGlzdC4gIFRoZSB2YWx1ZSBzZWxlY3RlZCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBsaXN0IG9mIHNlbGVjdGVkIHZhbHVlcyBhbmQgdGhlIG9wdGlvbnMgbGlzdCB3aWxsIGJlIHJlbW92ZWQuXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGNoaXBzLWRlbW9cIj4ke0FzeW5jQ2hpcHNEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQXN5bmNDaGlwc0RlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5Gb3JtYXR0ZWQgRXhhbXBsZXM8L2g1PlxuICAgIDxwPlxuICAgICAgICBCeSBjbGlja2luZyBvbiB0aGUgPGNvZGU+Y2hpcHM8L2NvZGU+IGVsZW1lbnQsIHRoZSBvcHRpb25zIGxpc3Qgd2lsbCBiZSBkaXNwbGF5ZWQuICBTZWxlY3QgYW55IG9mIHRoZSBvcHRpb25zXG4gICAgICAgIGJ5IGNsaWNraW5nIG9uIHRoZSBpdGVtIGluIHRoZSBsaXN0LiAgVGhlIHZhbHVlIHNlbGVjdGVkIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGxpc3Qgb2Ygc2VsZWN0ZWQgdmFsdWVzIGFuZCB0aGUgb3B0aW9ucyBsaXN0IHdpbGwgYmUgcmVtb3ZlZC5cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgY2hpcHMtZGVtb1wiPiR7Rm9ybWF0dGVkQ2hpcHNEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiRm9ybWF0dGVkQ2hpcHNEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjaGlwcy1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgZGlyZWN0aXZlczogW05PVk9fQ0hJUFNfRUxFTUVOVFMsIENPUkVfRElSRUNUSVZFUywgQ29kZVNuaXBwZXRdXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzRGVtbyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuQmFzaWNDaGlwc0RlbW9UcGwgPSBCYXNpY0NoaXBzRGVtb1RwbDtcbiAgICAgICAgdGhpcy5Bc3luY0NoaXBzRGVtb1RwbCA9IEFzeW5jQ2hpcHNEZW1vVHBsO1xuICAgICAgICB0aGlzLkZvcm1hdHRlZENoaXBzRGVtb1RwbCA9IEZvcm1hdHRlZENoaXBzRGVtb1RwbDtcblxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gJ1NlbGVjdC4uLic7XG4gICAgICAgIHRoaXMudmFsdWUgPSBbJ0FsYWJhbWEnXTtcblxuICAgICAgICBsZXQgc3RhdGVzID0gWydBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJywgJ0NhbGlmb3JuaWEnLCAnQ29sb3JhZG8nLCAnQ29ubmVjdGljdXQnLCAnRGVsYXdhcmUnLCAnRmxvcmlkYScsICdHZW9yZ2lhJywgJ0hhd2FpaScsICdJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnLCAnS2Fuc2FzJywgJ0tlbnR1Y2t5JywgJ0xvdWlzaWFuYScsICdNYWluZScsICdNYXJ5bGFuZCcsICdNYXNzYWNodXNldHRzJywgJ01pY2hpZ2FuJywgJ01pbm5lc290YScsICdNaXNzaXNzaXBwaScsICdNaXNzb3VyaScsICdNb250YW5hJywgJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJywgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsICdOZXcgWW9yaycsICdOb3J0aCBEYWtvdGEnLCAnTm9ydGggQ2Fyb2xpbmEnLCAnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nLCAnUGVubnN5bHZhbmlhJywgJ1Job2RlIElzbGFuZCcsICdTb3V0aCBDYXJvbGluYScsICdTb3V0aCBEYWtvdGEnLCAnVGVubmVzc2VlJywgJ1RleGFzJywgJ1V0YWgnLCAnVmVybW9udCcsICdWaXJnaW5pYScsICdXYXNoaW5ndG9uJywgJ1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXTtcbiAgICAgICAgbGV0IGFiYnJpZXZpYXRlZCA9IFt7XG4gICAgICAgICAgICB2YWx1ZTogJ1VTQScsXG4gICAgICAgICAgICBsYWJlbDogJ1VuaXRlZCBTdGF0ZXMnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbHVlOiAnR0InLFxuICAgICAgICAgICAgbGFiZWw6ICdHcmVhdCBCcml0YWluJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWx1ZTogJ0NBJyxcbiAgICAgICAgICAgIGxhYmVsOiAnQ2FuYWRhJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWx1ZTogJ0FVJyxcbiAgICAgICAgICAgIGxhYmVsOiAnQXVzdHJhaWxpYSdcbiAgICAgICAgfV07XG4gICAgICAgIGxldCBjb2xsYWJvcmF0b3JzID0gW3tcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgZmlyc3ROYW1lOiAnQnJpYW4nLFxuICAgICAgICAgICAgbGFzdE5hbWU6ICdLaW1iYWxsJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJ0pvc2gnLFxuICAgICAgICAgICAgbGFzdE5hbWU6ICdHb2RpJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJ0FsZWMnLFxuICAgICAgICAgICAgbGFzdE5hbWU6ICdTaWJpbGlhJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJ0thbWVyb24nLFxuICAgICAgICAgICAgbGFzdE5hbWU6ICdTd2VlbidcbiAgICAgICAgfV07XG4gICAgICAgIHRoaXMuc3RhdGljID0geyBvcHRpb25zOiBzdGF0ZXMgfTtcbiAgICAgICAgdGhpcy5mb3JtYXR0ZWQgPSB7XG4gICAgICAgICAgICAvL2ZpZWxkOiAnaWQnLFxuICAgICAgICAgICAgZm9ybWF0OiAnJGZpcnN0TmFtZSAkbGFzdE5hbWUnLFxuICAgICAgICAgICAgb3B0aW9uczogY29sbGFib3JhdG9yc1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFzeW5jID0ge1xuICAgICAgICAgICAgb3B0aW9uczogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYWJicmlldmlhdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZWQoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDaGFuZ2VkJywgZXZlbnQpO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 1217:
/***/ function(module, exports) {

	module.exports = "<div>Selected Value: {{avalue}}</div>\n<chips\n    [source]=\"async\"\n    [placeholder]=\"placeholder\"\n    [(ngModel)]=\"avalue\"\n    (changed)=\"onChanged($event)\">\n</chips>\n"

/***/ },

/***/ 1218:
/***/ function(module, exports) {

	module.exports = "<div>Selected Value: {{value}}</div>\n<chips\n    [source]=\"static\"\n    [placeholder]=\"placeholder\"\n    [(ngModel)]=\"value\"\n    (changed)=\"onChanged($event)\">\n</chips>\n"

/***/ },

/***/ 1219:
/***/ function(module, exports) {

	module.exports = "<div>Selected Value: {{fvalue}}</div>\n<chips\n    [source]=\"formatted\"\n    [placeholder]=\"placeholder\"\n    [(ngModel)]=\"fvalue\"\n    (changed)=\"onChanged($event)\">\n</chips>\n"

/***/ }

});
//# sourceMappingURL=10.4e3a5da95d68e8faf302.bundle.map