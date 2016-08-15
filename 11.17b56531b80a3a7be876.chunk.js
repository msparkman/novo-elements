webpackJsonp([11],{

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztJQU9hLFcsV0FBQSxXLFdBTFoscUJBQVU7QUFDUCxZQUFRLENBQUMsTUFBRCxDQUREO0FBRVAsY0FBVSxjQUZIO0FBR1AsY0FBVTtBQUhILENBQVYsQzs7Ozs7OzttQ0FNYztBQUNQLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxhQUFMLENBQW1CLEtBQUssSUFBeEIsRUFBOEIsS0FBL0M7QUFDSCIsImZpbGUiOiJDb2RlU25pcHBldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvZ2l0aHViL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgaW5wdXRzOiBbJ2NvZGUnXSxcbiAgICBzZWxlY3RvcjogJ2NvZGUtc25pcHBldCcsXG4gICAgdGVtcGxhdGU6ICc8cHJlPjxjb2RlIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0XCI+PC9jb2RlPjwvcHJlPidcbn0pXG5leHBvcnQgY2xhc3MgQ29kZVNuaXBwZXQge1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodCA9IGhsanMuaGlnaGxpZ2h0QXV0byh0aGlzLmNvZGUpLnZhbHVlO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 529:
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
	
	var _novoElements = __webpack_require__(14);
	
	var _CodeSnippet = __webpack_require__(1144);
	
	var _BasicChipsDemo = __webpack_require__(1161);
	
	var _BasicChipsDemo2 = _interopRequireDefault(_BasicChipsDemo);
	
	var _AsyncChipsDemo = __webpack_require__(1160);
	
	var _AsyncChipsDemo2 = _interopRequireDefault(_AsyncChipsDemo);
	
	var _FormattedChipsDemo = __webpack_require__(1162);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvY2hpcHMvQ2hpcHNEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUE7OztBQUpBOztBQUNBOztBQUNBOztBQUdBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLHczREFBTjs7SUF5Q2EsUyxXQUFBLFMsV0FMWixxQkFBVTtBQUNQLGNBQVUsWUFESDtBQUVQLGNBQVUsUUFGSDtBQUdQLGdCQUFZO0FBSEwsQ0FBVixDO0FBTUcseUJBQWM7QUFBQTs7QUFDVixhQUFLLGlCQUFMO0FBQ0EsYUFBSyxpQkFBTDtBQUNBLGFBQUsscUJBQUw7O0FBRUEsYUFBSyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0EsYUFBSyxLQUFMLEdBQWEsQ0FBQyxTQUFELENBQWI7O0FBRUEsWUFBSSxTQUFTLENBQUMsU0FBRCxFQUFZLFFBQVosRUFBc0IsU0FBdEIsRUFBaUMsVUFBakMsRUFBNkMsWUFBN0MsRUFBMkQsVUFBM0QsRUFBdUUsYUFBdkUsRUFBc0YsVUFBdEYsRUFBa0csU0FBbEcsRUFBNkcsU0FBN0csRUFBd0gsUUFBeEgsRUFBa0ksT0FBbEksRUFBMkksVUFBM0ksRUFBdUosU0FBdkosRUFBa0ssTUFBbEssRUFBMEssUUFBMUssRUFBb0wsVUFBcEwsRUFBZ00sV0FBaE0sRUFBNk0sT0FBN00sRUFBc04sVUFBdE4sRUFBa08sZUFBbE8sRUFBbVAsVUFBblAsRUFBK1AsV0FBL1AsRUFBNFEsYUFBNVEsRUFBMlIsVUFBM1IsRUFBdVMsU0FBdlMsRUFBa1QsVUFBbFQsRUFBOFQsUUFBOVQsRUFBd1UsZUFBeFUsRUFBeVYsWUFBelYsRUFBdVcsWUFBdlcsRUFBcVgsVUFBclgsRUFBaVksY0FBalksRUFBaVosZ0JBQWpaLEVBQW1hLE1BQW5hLEVBQTJhLFVBQTNhLEVBQXViLFFBQXZiLEVBQWljLGNBQWpjLEVBQWlkLGNBQWpkLEVBQWllLGdCQUFqZSxFQUFtZixjQUFuZixFQUFtZ0IsV0FBbmdCLEVBQWdoQixPQUFoaEIsRUFBeWhCLE1BQXpoQixFQUFpaUIsU0FBamlCLEVBQTRpQixVQUE1aUIsRUFBd2pCLFlBQXhqQixFQUFza0IsZUFBdGtCLEVBQXVsQixXQUF2bEIsRUFBb21CLFNBQXBtQixDQUFiO0FBQ0EsWUFBSSxlQUFlLENBQUM7QUFDaEIsbUJBQU8sS0FEUztBQUVoQixtQkFBTztBQUZTLFNBQUQsRUFHaEI7QUFDQyxtQkFBTyxJQURSO0FBRUMsbUJBQU87QUFGUixTQUhnQixFQU1oQjtBQUNDLG1CQUFPLElBRFI7QUFFQyxtQkFBTztBQUZSLFNBTmdCLEVBU2hCO0FBQ0MsbUJBQU8sSUFEUjtBQUVDLG1CQUFPO0FBRlIsU0FUZ0IsQ0FBbkI7QUFhQSxZQUFJLGdCQUFnQixDQUFDO0FBQ2pCLGdCQUFJLENBRGE7QUFFakIsdUJBQVcsT0FGTTtBQUdqQixzQkFBVTtBQUhPLFNBQUQsRUFJakI7QUFDQyxnQkFBSSxDQURMO0FBRUMsdUJBQVcsTUFGWjtBQUdDLHNCQUFVO0FBSFgsU0FKaUIsRUFRakI7QUFDQyxnQkFBSSxDQURMO0FBRUMsdUJBQVcsTUFGWjtBQUdDLHNCQUFVO0FBSFgsU0FSaUIsRUFZakI7QUFDQyxnQkFBSSxDQURMO0FBRUMsdUJBQVcsU0FGWjtBQUdDLHNCQUFVO0FBSFgsU0FaaUIsQ0FBcEI7QUFpQkEsYUFBSyxNQUFMLEdBQWMsRUFBRSxTQUFTLE1BQVgsRUFBZDtBQUNBLGFBQUssU0FBTCxHQUFpQjtBQUNiO0FBQ0Esb0JBQVEsc0JBRks7QUFHYixxQkFBUztBQUhJLFNBQWpCO0FBS0EsYUFBSyxLQUFMLEdBQWE7QUFDVCxxQkFBUyxtQkFBTTtBQUNYLHVCQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFhO0FBQzVCLCtCQUFXLFlBQU07QUFDYixnQ0FBUSxZQUFSO0FBQ0gscUJBRkQsRUFFRyxHQUZIO0FBR0gsaUJBSk0sQ0FBUDtBQUtIO0FBUFEsU0FBYjtBQVNIOzs7O29DQUVXO0FBQ1I7QUFDSCIsImZpbGUiOiJDaGlwc0RlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2dpdGh1Yi9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTk9WT19DSElQU19FTEVNRU5UUyB9IGZyb20gJy4vLi4vLi4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG4vLyBUT0RPIC0gYWRkIHRvb2x0aXBzIGJhY2sgaW4gd2hlbiBpbXBsZW1lbnRlZFxuaW1wb3J0IHsgQ29kZVNuaXBwZXQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9jb2Rlc25pcHBldC9Db2RlU25pcHBldCc7XG5cbmltcG9ydCBCYXNpY0NoaXBzRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9CYXNpY0NoaXBzRGVtby5odG1sJztcbmltcG9ydCBBc3luY0NoaXBzRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9Bc3luY0NoaXBzRGVtby5odG1sJztcbmltcG9ydCBGb3JtYXR0ZWRDaGlwc0RlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvRm9ybWF0dGVkQ2hpcHNEZW1vLmh0bWwnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+Q2hpcHMgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvY2hpcHNcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+VGhlIGNoaXBzIGVsZW1lbnQgKDxjb2RlPmNoaXBzPC9jb2RlPikgcmVwcmVzZW50cyBhIGNvbnRyb2wgdGhhdCBwcmVzZW50cyBhIG1lbnUgb2Ygb3B0aW9ucy4gVGhlIG9wdGlvbnNcbiAgICB3aXRoaW4gYXJlIHNldCBieSB0aGUgPGNvZGU+c291cmNlPC9jb2RlPiBhdHRyaWJ1dGUuIE9wdGlvbnMgY2FuIGJlIHByZS1zZWxlY3RlZCBmb3IgdGhlIHVzZXIgdXNpbmcgdGhlIDxjb2RlPm5nTW9kZWw8L2NvZGU+XG4gICAgYXR0cmlidXRlLiBDaGlwcyBhcmUgdGhlIG11bHRpLXNlbGVjdCB2ZXJzaW9uIG9mIDxjb2RlPnBpY2tlcnM8L2NvZGU+PC9wPlxuXG4gICAgPGJyLz5cblxuICAgIDxoNT5CYXNpYyBFeGFtcGxlczwvaDU+XG4gICAgPHA+XG4gICAgICAgIEJ5IGNsaWNraW5nIG9uIHRoZSA8Y29kZT5jaGlwczwvY29kZT4gZWxlbWVudCwgdGhlIG9wdGlvbnMgbGlzdCB3aWxsIGJlIGRpc3BsYXllZC4gIFNlbGVjdCBhbnkgb2YgdGhlIG9wdGlvbnNcbiAgICAgICAgYnkgY2xpY2tpbmcgb24gdGhlIGl0ZW0gaW4gdGhlIGxpc3QuICBUaGUgdmFsdWUgc2VsZWN0ZWQgd2lsbCBiZSBhZGRlZCB0byB0aGUgbGlzdCBvZiBzZWxlY3RlZCB2YWx1ZXMgYW5kIHRoZSBvcHRpb25zIGxpc3Qgd2lsbCBiZSByZW1vdmVkLlxuICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBjaGlwcy1kZW1vXCI+JHtCYXNpY0NoaXBzRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkJhc2ljQ2hpcHNEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+QXN5bmMgRXhhbXBsZXM8L2g1PlxuICAgIDxwPlxuICAgICAgICBCeSBjbGlja2luZyBvbiB0aGUgPGNvZGU+Y2hpcHM8L2NvZGU+IGVsZW1lbnQsIHRoZSBvcHRpb25zIGxpc3Qgd2lsbCBiZSBkaXNwbGF5ZWQuICBTZWxlY3QgYW55IG9mIHRoZSBvcHRpb25zXG4gICAgICAgIGJ5IGNsaWNraW5nIG9uIHRoZSBpdGVtIGluIHRoZSBsaXN0LiAgVGhlIHZhbHVlIHNlbGVjdGVkIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGxpc3Qgb2Ygc2VsZWN0ZWQgdmFsdWVzIGFuZCB0aGUgb3B0aW9ucyBsaXN0IHdpbGwgYmUgcmVtb3ZlZC5cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgY2hpcHMtZGVtb1wiPiR7QXN5bmNDaGlwc0RlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJBc3luY0NoaXBzRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PkZvcm1hdHRlZCBFeGFtcGxlczwvaDU+XG4gICAgPHA+XG4gICAgICAgIEJ5IGNsaWNraW5nIG9uIHRoZSA8Y29kZT5jaGlwczwvY29kZT4gZWxlbWVudCwgdGhlIG9wdGlvbnMgbGlzdCB3aWxsIGJlIGRpc3BsYXllZC4gIFNlbGVjdCBhbnkgb2YgdGhlIG9wdGlvbnNcbiAgICAgICAgYnkgY2xpY2tpbmcgb24gdGhlIGl0ZW0gaW4gdGhlIGxpc3QuICBUaGUgdmFsdWUgc2VsZWN0ZWQgd2lsbCBiZSBhZGRlZCB0byB0aGUgbGlzdCBvZiBzZWxlY3RlZCB2YWx1ZXMgYW5kIHRoZSBvcHRpb25zIGxpc3Qgd2lsbCBiZSByZW1vdmVkLlxuICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBjaGlwcy1kZW1vXCI+JHtGb3JtYXR0ZWRDaGlwc0RlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJGb3JtYXR0ZWRDaGlwc0RlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuPC9kaXY+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NoaXBzLWRlbW8nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICBkaXJlY3RpdmVzOiBbTk9WT19DSElQU19FTEVNRU5UUywgQ09SRV9ESVJFQ1RJVkVTLCBDb2RlU25pcHBldF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNEZW1vIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5CYXNpY0NoaXBzRGVtb1RwbCA9IEJhc2ljQ2hpcHNEZW1vVHBsO1xuICAgICAgICB0aGlzLkFzeW5jQ2hpcHNEZW1vVHBsID0gQXN5bmNDaGlwc0RlbW9UcGw7XG4gICAgICAgIHRoaXMuRm9ybWF0dGVkQ2hpcHNEZW1vVHBsID0gRm9ybWF0dGVkQ2hpcHNEZW1vVHBsO1xuXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAnU2VsZWN0Li4uJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IFsnQWxhYmFtYSddO1xuXG4gICAgICAgIGxldCBzdGF0ZXMgPSBbJ0FsYWJhbWEnLCAnQWxhc2thJywgJ0FyaXpvbmEnLCAnQXJrYW5zYXMnLCAnQ2FsaWZvcm5pYScsICdDb2xvcmFkbycsICdDb25uZWN0aWN1dCcsICdEZWxhd2FyZScsICdGbG9yaWRhJywgJ0dlb3JnaWEnLCAnSGF3YWlpJywgJ0lkYWhvJywgJ0lsbGlub2lzJywgJ0luZGlhbmEnLCAnSW93YScsICdLYW5zYXMnLCAnS2VudHVja3knLCAnTG91aXNpYW5hJywgJ01haW5lJywgJ01hcnlsYW5kJywgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLCAnTWlubmVzb3RhJywgJ01pc3Npc3NpcHBpJywgJ01pc3NvdXJpJywgJ01vbnRhbmEnLCAnTmVicmFza2EnLCAnTmV2YWRhJywgJ05ldyBIYW1wc2hpcmUnLCAnTmV3IEplcnNleScsICdOZXcgTWV4aWNvJywgJ05ldyBZb3JrJywgJ05vcnRoIERha290YScsICdOb3J0aCBDYXJvbGluYScsICdPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbicsICdQZW5uc3lsdmFuaWEnLCAnUmhvZGUgSXNsYW5kJywgJ1NvdXRoIENhcm9saW5hJywgJ1NvdXRoIERha290YScsICdUZW5uZXNzZWUnLCAnVGV4YXMnLCAnVXRhaCcsICdWZXJtb250JywgJ1ZpcmdpbmlhJywgJ1dhc2hpbmd0b24nLCAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZyddO1xuICAgICAgICBsZXQgYWJicmlldmlhdGVkID0gW3tcbiAgICAgICAgICAgIHZhbHVlOiAnVVNBJyxcbiAgICAgICAgICAgIGxhYmVsOiAnVW5pdGVkIFN0YXRlcydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsdWU6ICdHQicsXG4gICAgICAgICAgICBsYWJlbDogJ0dyZWF0IEJyaXRhaW4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbHVlOiAnQ0EnLFxuICAgICAgICAgICAgbGFiZWw6ICdDYW5hZGEnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbHVlOiAnQVUnLFxuICAgICAgICAgICAgbGFiZWw6ICdBdXN0cmFpbGlhJ1xuICAgICAgICB9XTtcbiAgICAgICAgbGV0IGNvbGxhYm9yYXRvcnMgPSBbe1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICdCcmlhbicsXG4gICAgICAgICAgICBsYXN0TmFtZTogJ0tpbWJhbGwnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgZmlyc3ROYW1lOiAnSm9zaCcsXG4gICAgICAgICAgICBsYXN0TmFtZTogJ0dvZGknXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgZmlyc3ROYW1lOiAnQWxlYycsXG4gICAgICAgICAgICBsYXN0TmFtZTogJ1NpYmlsaWEnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgZmlyc3ROYW1lOiAnS2FtZXJvbicsXG4gICAgICAgICAgICBsYXN0TmFtZTogJ1N3ZWVuJ1xuICAgICAgICB9XTtcbiAgICAgICAgdGhpcy5zdGF0aWMgPSB7IG9wdGlvbnM6IHN0YXRlcyB9O1xuICAgICAgICB0aGlzLmZvcm1hdHRlZCA9IHtcbiAgICAgICAgICAgIC8vZmllbGQ6ICdpZCcsXG4gICAgICAgICAgICBmb3JtYXQ6ICckZmlyc3ROYW1lICRsYXN0TmFtZScsXG4gICAgICAgICAgICBvcHRpb25zOiBjb2xsYWJvcmF0b3JzXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYXN5bmMgPSB7XG4gICAgICAgICAgICBvcHRpb25zOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhYmJyaWV2aWF0ZWQpO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uQ2hhbmdlZCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0NoYW5nZWQnLCBldmVudCk7XG4gICAgfVxufVxuIl19

/***/ },

/***/ 1160:
/***/ function(module, exports) {

	module.exports = "<div>Selected Value: {{avalue}}</div>\n<chips\n    [source]=\"async\"\n    [placeholder]=\"placeholder\"\n    [(ngModel)]=\"avalue\"\n    (changed)=\"onChanged($event)\">\n</chips>\n"

/***/ },

/***/ 1161:
/***/ function(module, exports) {

	module.exports = "<div>Selected Value: {{value}}</div>\n<chips\n    [source]=\"static\"\n    [placeholder]=\"placeholder\"\n    [(ngModel)]=\"value\"\n    (changed)=\"onChanged($event)\">\n</chips>\n"

/***/ },

/***/ 1162:
/***/ function(module, exports) {

	module.exports = "<div>Selected Value: {{fvalue}}</div>\n<chips\n    [source]=\"formatted\"\n    [placeholder]=\"placeholder\"\n    [(ngModel)]=\"fvalue\"\n    (changed)=\"onChanged($event)\">\n</chips>\n"

/***/ }

});
//# sourceMappingURL=11.17b56531b80a3a7be876.bundle.map