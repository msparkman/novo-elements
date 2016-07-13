webpackJsonp([10],{

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

/***/ 527:
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
	
	var _common = __webpack_require__(5);
	
	var _novoElements = __webpack_require__(15);
	
	var _CodeSnippet = __webpack_require__(1132);
	
	var _BasicChipsDemo = __webpack_require__(1148);
	
	var _BasicChipsDemo2 = _interopRequireDefault(_BasicChipsDemo);
	
	var _AsyncChipsDemo = __webpack_require__(1147);
	
	var _AsyncChipsDemo2 = _interopRequireDefault(_AsyncChipsDemo);
	
	var _FormattedChipsDemo = __webpack_require__(1149);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvY2hpcHMvQ2hpcHNEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUE7OztBQUpBOztBQUNBOztBQUNBOztBQUdBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLHczREFBTjs7SUF5Q2EsUyxXQUFBLFMsV0FMWixxQkFBVTtBQUNQLGNBQVUsWUFESDtBQUVQLGNBQVUsUUFGSDtBQUdQLGdCQUFZO0FBSEwsQ0FBVixDO0FBTUcseUJBQWM7QUFBQTs7QUFDVixhQUFLLGlCQUFMO0FBQ0EsYUFBSyxpQkFBTDtBQUNBLGFBQUsscUJBQUw7O0FBRUEsYUFBSyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0EsYUFBSyxLQUFMLEdBQWEsQ0FBQyxTQUFELENBQWI7O0FBRUEsWUFBSSxTQUFTLENBQUMsU0FBRCxFQUFZLFFBQVosRUFBc0IsU0FBdEIsRUFBaUMsVUFBakMsRUFBNkMsWUFBN0MsRUFBMkQsVUFBM0QsRUFBdUUsYUFBdkUsRUFBc0YsVUFBdEYsRUFBa0csU0FBbEcsRUFBNkcsU0FBN0csRUFBd0gsUUFBeEgsRUFBa0ksT0FBbEksRUFBMkksVUFBM0ksRUFBdUosU0FBdkosRUFBa0ssTUFBbEssRUFBMEssUUFBMUssRUFBb0wsVUFBcEwsRUFBZ00sV0FBaE0sRUFBNk0sT0FBN00sRUFBc04sVUFBdE4sRUFBa08sZUFBbE8sRUFBbVAsVUFBblAsRUFBK1AsV0FBL1AsRUFBNFEsYUFBNVEsRUFBMlIsVUFBM1IsRUFBdVMsU0FBdlMsRUFBa1QsVUFBbFQsRUFBOFQsUUFBOVQsRUFBd1UsZUFBeFUsRUFBeVYsWUFBelYsRUFBdVcsWUFBdlcsRUFBcVgsVUFBclgsRUFBaVksY0FBalksRUFBaVosZ0JBQWpaLEVBQW1hLE1BQW5hLEVBQTJhLFVBQTNhLEVBQXViLFFBQXZiLEVBQWljLGNBQWpjLEVBQWlkLGNBQWpkLEVBQWllLGdCQUFqZSxFQUFtZixjQUFuZixFQUFtZ0IsV0FBbmdCLEVBQWdoQixPQUFoaEIsRUFBeWhCLE1BQXpoQixFQUFpaUIsU0FBamlCLEVBQTRpQixVQUE1aUIsRUFBd2pCLFlBQXhqQixFQUFza0IsZUFBdGtCLEVBQXVsQixXQUF2bEIsRUFBb21CLFNBQXBtQixDQUFiO0FBQ0EsWUFBSSxlQUFlLENBQUM7QUFDaEIsbUJBQU8sS0FEUztBQUVoQixtQkFBTztBQUZTLFNBQUQsRUFHaEI7QUFDQyxtQkFBTyxJQURSO0FBRUMsbUJBQU87QUFGUixTQUhnQixFQU1oQjtBQUNDLG1CQUFPLElBRFI7QUFFQyxtQkFBTztBQUZSLFNBTmdCLEVBU2hCO0FBQ0MsbUJBQU8sSUFEUjtBQUVDLG1CQUFPO0FBRlIsU0FUZ0IsQ0FBbkI7QUFhQSxZQUFJLGdCQUFnQixDQUFDO0FBQ2pCLGdCQUFJLENBRGE7QUFFakIsdUJBQVcsT0FGTTtBQUdqQixzQkFBVTtBQUhPLFNBQUQsRUFJakI7QUFDQyxnQkFBSSxDQURMO0FBRUMsdUJBQVcsTUFGWjtBQUdDLHNCQUFVO0FBSFgsU0FKaUIsRUFRakI7QUFDQyxnQkFBSSxDQURMO0FBRUMsdUJBQVcsTUFGWjtBQUdDLHNCQUFVO0FBSFgsU0FSaUIsRUFZakI7QUFDQyxnQkFBSSxDQURMO0FBRUMsdUJBQVcsU0FGWjtBQUdDLHNCQUFVO0FBSFgsU0FaaUIsQ0FBcEI7QUFpQkEsYUFBSyxNQUFMLEdBQWMsRUFBRSxTQUFTLE1BQVgsRUFBZDtBQUNBLGFBQUssU0FBTCxHQUFpQjtBQUNiO0FBQ0Esb0JBQVEsc0JBRks7QUFHYixxQkFBUztBQUhJLFNBQWpCO0FBS0EsYUFBSyxLQUFMLEdBQWE7QUFDVCxxQkFBUyxtQkFBTTtBQUNYLHVCQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFhO0FBQzVCLCtCQUFXLFlBQU07QUFDYixnQ0FBUSxZQUFSO0FBQ0gscUJBRkQsRUFFRyxHQUZIO0FBR0gsaUJBSk0sQ0FBUDtBQUtIO0FBUFEsU0FBYjtBQVNIOzs7O29DQUVXO0FBQ1I7QUFDSCIsImZpbGUiOiJDaGlwc0RlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JyaWFua2ltYmFsbC9Ob3ZvL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOT1ZPX0NISVBTX0VMRU1FTlRTIH0gZnJvbSAnLi8uLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbi8vIFRPRE8gLSBhZGQgdG9vbHRpcHMgYmFjayBpbiB3aGVuIGltcGxlbWVudGVkXG5pbXBvcnQgeyBDb2RlU25pcHBldCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2NvZGVzbmlwcGV0L0NvZGVTbmlwcGV0JztcblxuaW1wb3J0IEJhc2ljQ2hpcHNEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0Jhc2ljQ2hpcHNEZW1vLmh0bWwnO1xuaW1wb3J0IEFzeW5jQ2hpcHNEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0FzeW5jQ2hpcHNEZW1vLmh0bWwnO1xuaW1wb3J0IEZvcm1hdHRlZENoaXBzRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9Gb3JtYXR0ZWRDaGlwc0RlbW8uaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5DaGlwcyA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy9jaGlwc1wiPihzb3VyY2UpPC9hPjwvc21hbGw+PC9oMT5cbiAgICA8cD5UaGUgY2hpcHMgZWxlbWVudCAoPGNvZGU+Y2hpcHM8L2NvZGU+KSByZXByZXNlbnRzIGEgY29udHJvbCB0aGF0IHByZXNlbnRzIGEgbWVudSBvZiBvcHRpb25zLiBUaGUgb3B0aW9uc1xuICAgIHdpdGhpbiBhcmUgc2V0IGJ5IHRoZSA8Y29kZT5zb3VyY2U8L2NvZGU+IGF0dHJpYnV0ZS4gT3B0aW9ucyBjYW4gYmUgcHJlLXNlbGVjdGVkIGZvciB0aGUgdXNlciB1c2luZyB0aGUgPGNvZGU+bmdNb2RlbDwvY29kZT5cbiAgICBhdHRyaWJ1dGUuIENoaXBzIGFyZSB0aGUgbXVsdGktc2VsZWN0IHZlcnNpb24gb2YgPGNvZGU+cGlja2VyczwvY29kZT48L3A+XG5cbiAgICA8YnIvPlxuXG4gICAgPGg1PkJhc2ljIEV4YW1wbGVzPC9oNT5cbiAgICA8cD5cbiAgICAgICAgQnkgY2xpY2tpbmcgb24gdGhlIDxjb2RlPmNoaXBzPC9jb2RlPiBlbGVtZW50LCB0aGUgb3B0aW9ucyBsaXN0IHdpbGwgYmUgZGlzcGxheWVkLiAgU2VsZWN0IGFueSBvZiB0aGUgb3B0aW9uc1xuICAgICAgICBieSBjbGlja2luZyBvbiB0aGUgaXRlbSBpbiB0aGUgbGlzdC4gIFRoZSB2YWx1ZSBzZWxlY3RlZCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBsaXN0IG9mIHNlbGVjdGVkIHZhbHVlcyBhbmQgdGhlIG9wdGlvbnMgbGlzdCB3aWxsIGJlIHJlbW92ZWQuXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGNoaXBzLWRlbW9cIj4ke0Jhc2ljQ2hpcHNEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQmFzaWNDaGlwc0RlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5Bc3luYyBFeGFtcGxlczwvaDU+XG4gICAgPHA+XG4gICAgICAgIEJ5IGNsaWNraW5nIG9uIHRoZSA8Y29kZT5jaGlwczwvY29kZT4gZWxlbWVudCwgdGhlIG9wdGlvbnMgbGlzdCB3aWxsIGJlIGRpc3BsYXllZC4gIFNlbGVjdCBhbnkgb2YgdGhlIG9wdGlvbnNcbiAgICAgICAgYnkgY2xpY2tpbmcgb24gdGhlIGl0ZW0gaW4gdGhlIGxpc3QuICBUaGUgdmFsdWUgc2VsZWN0ZWQgd2lsbCBiZSBhZGRlZCB0byB0aGUgbGlzdCBvZiBzZWxlY3RlZCB2YWx1ZXMgYW5kIHRoZSBvcHRpb25zIGxpc3Qgd2lsbCBiZSByZW1vdmVkLlxuICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBjaGlwcy1kZW1vXCI+JHtBc3luY0NoaXBzRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkFzeW5jQ2hpcHNEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+Rm9ybWF0dGVkIEV4YW1wbGVzPC9oNT5cbiAgICA8cD5cbiAgICAgICAgQnkgY2xpY2tpbmcgb24gdGhlIDxjb2RlPmNoaXBzPC9jb2RlPiBlbGVtZW50LCB0aGUgb3B0aW9ucyBsaXN0IHdpbGwgYmUgZGlzcGxheWVkLiAgU2VsZWN0IGFueSBvZiB0aGUgb3B0aW9uc1xuICAgICAgICBieSBjbGlja2luZyBvbiB0aGUgaXRlbSBpbiB0aGUgbGlzdC4gIFRoZSB2YWx1ZSBzZWxlY3RlZCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBsaXN0IG9mIHNlbGVjdGVkIHZhbHVlcyBhbmQgdGhlIG9wdGlvbnMgbGlzdCB3aWxsIGJlIHJlbW92ZWQuXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGNoaXBzLWRlbW9cIj4ke0Zvcm1hdHRlZENoaXBzRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkZvcm1hdHRlZENoaXBzRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG48L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY2hpcHMtZGVtbycsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgIGRpcmVjdGl2ZXM6IFtOT1ZPX0NISVBTX0VMRU1FTlRTLCBDT1JFX0RJUkVDVElWRVMsIENvZGVTbmlwcGV0XVxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0RlbW8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLkJhc2ljQ2hpcHNEZW1vVHBsID0gQmFzaWNDaGlwc0RlbW9UcGw7XG4gICAgICAgIHRoaXMuQXN5bmNDaGlwc0RlbW9UcGwgPSBBc3luY0NoaXBzRGVtb1RwbDtcbiAgICAgICAgdGhpcy5Gb3JtYXR0ZWRDaGlwc0RlbW9UcGwgPSBGb3JtYXR0ZWRDaGlwc0RlbW9UcGw7XG5cbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9ICdTZWxlY3QuLi4nO1xuICAgICAgICB0aGlzLnZhbHVlID0gWydBbGFiYW1hJ107XG5cbiAgICAgICAgbGV0IHN0YXRlcyA9IFsnQWxhYmFtYScsICdBbGFza2EnLCAnQXJpem9uYScsICdBcmthbnNhcycsICdDYWxpZm9ybmlhJywgJ0NvbG9yYWRvJywgJ0Nvbm5lY3RpY3V0JywgJ0RlbGF3YXJlJywgJ0Zsb3JpZGEnLCAnR2VvcmdpYScsICdIYXdhaWknLCAnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJywgJ0thbnNhcycsICdLZW50dWNreScsICdMb3Vpc2lhbmEnLCAnTWFpbmUnLCAnTWFyeWxhbmQnLCAnTWFzc2FjaHVzZXR0cycsICdNaWNoaWdhbicsICdNaW5uZXNvdGEnLCAnTWlzc2lzc2lwcGknLCAnTWlzc291cmknLCAnTW9udGFuYScsICdOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsICdOZXcgSmVyc2V5JywgJ05ldyBNZXhpY28nLCAnTmV3IFlvcmsnLCAnTm9ydGggRGFrb3RhJywgJ05vcnRoIENhcm9saW5hJywgJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJywgJ1Blbm5zeWx2YW5pYScsICdSaG9kZSBJc2xhbmQnLCAnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsICdUZXhhcycsICdVdGFoJywgJ1Zlcm1vbnQnLCAnVmlyZ2luaWEnLCAnV2FzaGluZ3RvbicsICdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ107XG4gICAgICAgIGxldCBhYmJyaWV2aWF0ZWQgPSBbe1xuICAgICAgICAgICAgdmFsdWU6ICdVU0EnLFxuICAgICAgICAgICAgbGFiZWw6ICdVbml0ZWQgU3RhdGVzJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWx1ZTogJ0dCJyxcbiAgICAgICAgICAgIGxhYmVsOiAnR3JlYXQgQnJpdGFpbidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsdWU6ICdDQScsXG4gICAgICAgICAgICBsYWJlbDogJ0NhbmFkYSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsdWU6ICdBVScsXG4gICAgICAgICAgICBsYWJlbDogJ0F1c3RyYWlsaWEnXG4gICAgICAgIH1dO1xuICAgICAgICBsZXQgY29sbGFib3JhdG9ycyA9IFt7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJ0JyaWFuJyxcbiAgICAgICAgICAgIGxhc3ROYW1lOiAnS2ltYmFsbCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICdKb3NoJyxcbiAgICAgICAgICAgIGxhc3ROYW1lOiAnR29kaSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICdBbGVjJyxcbiAgICAgICAgICAgIGxhc3ROYW1lOiAnU2liaWxpYSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICdLYW1lcm9uJyxcbiAgICAgICAgICAgIGxhc3ROYW1lOiAnU3dlZW4nXG4gICAgICAgIH1dO1xuICAgICAgICB0aGlzLnN0YXRpYyA9IHsgb3B0aW9uczogc3RhdGVzIH07XG4gICAgICAgIHRoaXMuZm9ybWF0dGVkID0ge1xuICAgICAgICAgICAgLy9maWVsZDogJ2lkJyxcbiAgICAgICAgICAgIGZvcm1hdDogJyRmaXJzdE5hbWUgJGxhc3ROYW1lJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IGNvbGxhYm9yYXRvcnNcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hc3luYyA9IHtcbiAgICAgICAgICAgIG9wdGlvbnM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFiYnJpZXZpYXRlZCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25DaGFuZ2VkKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnQ2hhbmdlZCcsIGV2ZW50KTtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 1147:
/***/ function(module, exports) {

	module.exports = "<div>Selected Value: {{avalue}}</div>\n<chips\n    [source]=\"async\"\n    [placeholder]=\"placeholder\"\n    [(ngModel)]=\"avalue\"\n    (changed)=\"onChanged($event)\">\n</chips>\n"

/***/ },

/***/ 1148:
/***/ function(module, exports) {

	module.exports = "<div>Selected Value: {{value}}</div>\n<chips\n    [source]=\"static\"\n    [placeholder]=\"placeholder\"\n    [(ngModel)]=\"value\"\n    (changed)=\"onChanged($event)\">\n</chips>\n"

/***/ },

/***/ 1149:
/***/ function(module, exports) {

	module.exports = "<div>Selected Value: {{fvalue}}</div>\n<chips\n    [source]=\"formatted\"\n    [placeholder]=\"placeholder\"\n    [(ngModel)]=\"fvalue\"\n    (changed)=\"onChanged($event)\">\n</chips>\n"

/***/ }

});
//# sourceMappingURL=10.b57e3370a0f92c30417e.bundle.map