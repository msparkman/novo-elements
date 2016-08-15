webpackJsonp([10],{

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

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.QuickNoteDemo = exports.CustomQuickNoteResults = undefined;
	
	var _dec, _class, _dec2, _class2;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(5);
	
	var _novoElements = __webpack_require__(14);
	
	var _CodeSnippet = __webpack_require__(1144);
	
	var _BasicQuickNote = __webpack_require__(1197);
	
	var _BasicQuickNote2 = _interopRequireDefault(_BasicQuickNote);
	
	var _CustomQuickNote = __webpack_require__(1198);
	
	var _CustomQuickNote2 = _interopRequireDefault(_CustomQuickNote);
	
	var _CustomQuickNoteResults = __webpack_require__(1199);
	
	var _CustomQuickNoteResults2 = _interopRequireDefault(_CustomQuickNoteResults);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CustomQuickNoteResults = exports.CustomQuickNoteResults = (_dec = (0, _core.Component)({
	    selector: 'custom-quick-note-results',
	    directives: [_novoElements.NOVO_LOADING_ELEMENTS],
	    host: {
	        'class': 'active quick-note-results'
	    },
	    template: '\n        <novo-loading theme="line" *ngIf="isLoading && !matches.length"></novo-loading>\n        <ul *ngIf="matches.length > 0">\n            <li\n                *ngFor="let match of matches"\n                (click)="selectMatch($event)"\n                [class.active]="match===activeMatch"\n                (mouseenter)="selectActive(match)">\n                **CUSTOM** <b [innerHtml]="highlight(match.label, term)"></b>\n            </li>\n        </ul>\n        <p class="picker-error" *ngIf="hasError">Oops! An error occured.</p>\n        <p class="picker-null" *ngIf="!isLoading && !matches.length && !hasError">No results to display...</p>\n    '
	}), _dec(_class = function (_QuickNoteResults) {
	    _inherits(CustomQuickNoteResults, _QuickNoteResults);
	
	    function CustomQuickNoteResults() {
	        _classCallCheck(this, CustomQuickNoteResults);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CustomQuickNoteResults).apply(this, arguments));
	    }
	
	    return CustomQuickNoteResults;
	}(_novoElements.QuickNoteResults)) || _class);
	
	
	var template = '\n<div class="container">\n    <h1>Quick Note <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/quick-note">(source)</a></small></h1>\n    <p>Tag Autocomplete</p>\n\n    <br/>\n\n    <h5>Basic Examples</h5>\n    <div class="example quick-note-demo">' + _BasicQuickNote2.default + '</div>\n    <code-snippet [code]="BasicQuickNoteDemoTpl"></code-snippet>\n    \n    <h5>Custom Triggers</h5>\n    <div class="example quick-note-demo">' + _CustomQuickNote2.default + '</div>\n    <code-snippet [code]="CustomQuickNoteDemoTpl"></code-snippet>\n    \n    <h5>Custom Results Template</h5>\n    <div class="example quick-note-demo">' + _CustomQuickNoteResults2.default + '</div>\n    <code-snippet [code]="CustomQuickNoteResultsDemoTpl"></code-snippet>\n</div>\n';
	
	var QuickNoteDemo = exports.QuickNoteDemo = (_dec2 = (0, _core.Component)({
	    selector: 'quick-note-demo',
	    template: template,
	    directives: [_novoElements.NOVO_QUICK_NOTE_ELEMENTS, _common.CORE_DIRECTIVES, _CodeSnippet.CodeSnippet]
	}), _dec2(_class2 = function QuickNoteDemo() {
	    _classCallCheck(this, QuickNoteDemo);
	
	    this.BasicQuickNoteDemoTpl = _BasicQuickNote2.default;
	    this.CustomQuickNoteDemoTpl = _CustomQuickNote2.default;
	    this.CustomQuickNoteResultsDemoTpl = _CustomQuickNoteResults2.default;
	
	    this.placeholder = 'Enter your note text here. Reference people and distrubution lists using @ (eg. @John Smith). Reference other records using # (e.g. #Project Manager)';
	
	    this.references = {};
	    this.note2 = 'I am an initial note!';
	    this.references2 = {};
	    this.references3 = {};
	
	    var customData = {
	        tags: [{ id: 1, name: 'OH YA!', test: 'TWO' }, { id: 2, name: 'TAGGING!', test: 'ONE' }],
	        references: [{ id: 1, title: 'Awesome Reference' }, { id: 2, title: 'Angular2' }]
	    };
	
	    this.config = {
	        triggers: {
	            tags: '@',
	            references: '#',
	            boos: '^'
	        },
	        options: {
	            tags: ['First', 'Second'],
	            references: ['Third', 'Forth'],
	            boos: ['Test']
	        },
	        renderer: {
	            tags: function tags(symbol, item) {
	                return '<a class="tag">' + symbol + item.label + '</a>';
	            },
	            references: function references(symbol, item) {
	                return '<a class="tag">' + symbol + item.label + '</a>';
	            },
	            boos: function boos(symbol, item) {
	                return '<strong>' + symbol + item.label + '</strong>';
	            }
	        }
	    };
	
	    this.custom = {
	        triggers: {
	            whos: '@',
	            whats: '#'
	        },
	        options: {
	            whos: function whos() {
	                return new Promise(function (resolve) {
	                    setTimeout(function () {
	                        resolve(customData.tags);
	                    }, 300);
	                });
	            },
	            whats: function whats() {
	                return new Promise(function (resolve) {
	                    setTimeout(function () {
	                        resolve(customData.references);
	                    }, 300);
	                });
	            }
	        },
	        format: {
	            whos: '$name $test',
	            whats: '$title'
	        },
	        renderer: {
	            whos: function whos(symbol, item) {
	                return '<a class="WHOS">' + symbol + item.label + '</a>';
	            },
	            whats: function whats(symbol, item) {
	                return '<a class="tag">' + symbol + item.label + '</a>';
	            }
	        }
	    };
	
	    this.custom2 = {
	        resultsTemplate: CustomQuickNoteResults,
	        triggers: {
	            names: '@',
	            tags: '#'
	        },
	        options: {
	            names: function names() {
	                return new Promise(function (resolve) {
	                    setTimeout(function () {
	                        resolve(customData.tags);
	                    }, 300);
	                });
	            },
	            tags: function tags() {
	                return new Promise(function (resolve) {
	                    setTimeout(function () {
	                        resolve(customData.references);
	                    }, 300);
	                });
	            }
	        },
	        format: {
	            names: '$name',
	            tags: '$title'
	        },
	        renderer: {
	            names: function names(symbol, item) {
	                return '<a class="names">' + symbol + item.label + '</a>';
	            },
	            tags: function tags(symbol, item) {
	                return '<a class="tags">' + symbol + item.label + '</a>';
	            }
	        }
	    };
	}) || _class2);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvcXVpY2stbm90ZS9RdWlja05vdGVEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBdUJhLHNCLFdBQUEsc0IsV0FyQloscUJBQVU7QUFDUCxjQUFVLDJCQURIO0FBRVAsZ0JBQVkscUNBRkw7QUFHUCxVQUFNO0FBQ0YsaUJBQVM7QUFEUCxLQUhDO0FBTVA7QUFOTyxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUF3QkQsSUFBTSxpekJBQU47O0lBMEJhLGEsV0FBQSxhLFlBTFoscUJBQVU7QUFDUCxjQUFVLGlCQURIO0FBRVAsY0FBVSxRQUZIO0FBR1AsZ0JBQVk7QUFITCxDQUFWLEMsa0JBTUcseUJBQWM7QUFBQTs7QUFDVixTQUFLLHFCQUFMO0FBQ0EsU0FBSyxzQkFBTDtBQUNBLFNBQUssNkJBQUw7O0FBRUEsU0FBSyxXQUFMLEdBQW1CLHVKQUFuQjs7QUFFQSxTQUFLLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLLEtBQUwsR0FBYSx1QkFBYjtBQUNBLFNBQUssV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUssV0FBTCxHQUFtQixFQUFuQjs7QUFFQSxRQUFJLGFBQWE7QUFDYixjQUFNLENBQUMsRUFBRSxJQUFJLENBQU4sRUFBUyxNQUFNLFFBQWYsRUFBeUIsTUFBTSxLQUEvQixFQUFELEVBQXlDLEVBQUUsSUFBSSxDQUFOLEVBQVMsTUFBTSxVQUFmLEVBQTJCLE1BQU0sS0FBakMsRUFBekMsQ0FETztBQUViLG9CQUFZLENBQUMsRUFBRSxJQUFJLENBQU4sRUFBUyxPQUFPLG1CQUFoQixFQUFELEVBQXdDLEVBQUUsSUFBSSxDQUFOLEVBQVMsT0FBTyxVQUFoQixFQUF4QztBQUZDLEtBQWpCOztBQUtBLFNBQUssTUFBTCxHQUFjO0FBQ1Ysa0JBQVU7QUFDTixrQkFBTSxHQURBO0FBRU4sd0JBQVksR0FGTjtBQUdOLGtCQUFNO0FBSEEsU0FEQTtBQU1WLGlCQUFTO0FBQ0wsa0JBQU0sQ0FBQyxPQUFELEVBQVUsUUFBVixDQUREO0FBRUwsd0JBQVksQ0FBQyxPQUFELEVBQVUsT0FBVixDQUZQO0FBR0wsa0JBQU0sQ0FBQyxNQUFEO0FBSEQsU0FOQztBQVdWLGtCQUFVO0FBQ04sa0JBQU0sY0FBQyxNQUFELEVBQVMsSUFBVCxFQUFrQjtBQUNwQiwyQ0FBeUIsTUFBekIsR0FBa0MsS0FBSyxLQUF2QztBQUNILGFBSEs7QUFJTix3QkFBWSxvQkFBQyxNQUFELEVBQVMsSUFBVCxFQUFrQjtBQUMxQiwyQ0FBeUIsTUFBekIsR0FBa0MsS0FBSyxLQUF2QztBQUNILGFBTks7QUFPTixrQkFBTSxjQUFDLE1BQUQsRUFBUyxJQUFULEVBQWtCO0FBQ3BCLG9DQUFrQixNQUFsQixHQUEyQixLQUFLLEtBQWhDO0FBQ0g7QUFUSztBQVhBLEtBQWQ7O0FBd0JBLFNBQUssTUFBTCxHQUFjO0FBQ1Ysa0JBQVU7QUFDTixrQkFBTSxHQURBO0FBRU4sbUJBQU87QUFGRCxTQURBO0FBS1YsaUJBQVM7QUFDTCxrQkFBTSxnQkFBTTtBQUNSLHVCQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFhO0FBQzVCLCtCQUFXLFlBQU07QUFDYixnQ0FBUSxXQUFXLElBQW5CO0FBQ0gscUJBRkQsRUFFRyxHQUZIO0FBR0gsaUJBSk0sQ0FBUDtBQUtILGFBUEk7QUFRTCxtQkFBTyxpQkFBTTtBQUNULHVCQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFhO0FBQzVCLCtCQUFXLFlBQU07QUFDYixnQ0FBUSxXQUFXLFVBQW5CO0FBQ0gscUJBRkQsRUFFRyxHQUZIO0FBR0gsaUJBSk0sQ0FBUDtBQUtIO0FBZEksU0FMQztBQXFCVixnQkFBUTtBQUNKLGtCQUFNLGFBREY7QUFFSixtQkFBTztBQUZILFNBckJFO0FBeUJWLGtCQUFVO0FBQ04sa0JBQU0sY0FBQyxNQUFELEVBQVMsSUFBVCxFQUFrQjtBQUNwQiw0Q0FBMEIsTUFBMUIsR0FBbUMsS0FBSyxLQUF4QztBQUNILGFBSEs7QUFJTixtQkFBTyxlQUFDLE1BQUQsRUFBUyxJQUFULEVBQWtCO0FBQ3JCLDJDQUF5QixNQUF6QixHQUFrQyxLQUFLLEtBQXZDO0FBQ0g7QUFOSztBQXpCQSxLQUFkOztBQW1DQSxTQUFLLE9BQUwsR0FBZTtBQUNYLHlCQUFpQixzQkFETjtBQUVYLGtCQUFVO0FBQ04sbUJBQU8sR0FERDtBQUVOLGtCQUFNO0FBRkEsU0FGQztBQU1YLGlCQUFTO0FBQ0wsbUJBQU8saUJBQU07QUFDVCx1QkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBYTtBQUM1QiwrQkFBVyxZQUFNO0FBQ2IsZ0NBQVEsV0FBVyxJQUFuQjtBQUNILHFCQUZELEVBRUcsR0FGSDtBQUdILGlCQUpNLENBQVA7QUFLSCxhQVBJO0FBUUwsa0JBQU0sZ0JBQU07QUFDUix1QkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBYTtBQUM1QiwrQkFBVyxZQUFNO0FBQ2IsZ0NBQVEsV0FBVyxVQUFuQjtBQUNILHFCQUZELEVBRUcsR0FGSDtBQUdILGlCQUpNLENBQVA7QUFLSDtBQWRJLFNBTkU7QUFzQlgsZ0JBQVE7QUFDSixtQkFBTyxPQURIO0FBRUosa0JBQU07QUFGRixTQXRCRztBQTBCWCxrQkFBVTtBQUNOLG1CQUFPLGVBQUMsTUFBRCxFQUFTLElBQVQsRUFBa0I7QUFDckIsNkNBQTJCLE1BQTNCLEdBQW9DLEtBQUssS0FBekM7QUFDSCxhQUhLO0FBSU4sa0JBQU0sY0FBQyxNQUFELEVBQVMsSUFBVCxFQUFrQjtBQUNwQiw0Q0FBMEIsTUFBMUIsR0FBbUMsS0FBSyxLQUF4QztBQUNIO0FBTks7QUExQkMsS0FBZjtBQW1DSCxDIiwiZmlsZSI6IlF1aWNrTm90ZURlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2dpdGh1Yi9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTk9WT19RVUlDS19OT1RFX0VMRU1FTlRTLCBRdWlja05vdGVSZXN1bHRzLCBOT1ZPX0xPQURJTkdfRUxFTUVOVFMgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuaW1wb3J0IHsgQ29kZVNuaXBwZXQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9jb2Rlc25pcHBldC9Db2RlU25pcHBldCc7XG5cbmltcG9ydCBCYXNpY1F1aWNrTm90ZURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQmFzaWNRdWlja05vdGUuaHRtbCc7XG5pbXBvcnQgQ3VzdG9tUXVpY2tOb3RlRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9DdXN0b21RdWlja05vdGUuaHRtbCc7XG5pbXBvcnQgQ3VzdG9tUXVpY2tOb3RlUmVzdWx0c0RlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQ3VzdG9tUXVpY2tOb3RlUmVzdWx0cy5odG1sJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjdXN0b20tcXVpY2stbm90ZS1yZXN1bHRzJyxcbiAgICBkaXJlY3RpdmVzOiBbTk9WT19MT0FESU5HX0VMRU1FTlRTXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdjbGFzcyc6ICdhY3RpdmUgcXVpY2stbm90ZS1yZXN1bHRzJ1xuICAgIH0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIiAqbmdJZj1cImlzTG9hZGluZyAmJiAhbWF0Y2hlcy5sZW5ndGhcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgPHVsICpuZ0lmPVwibWF0Y2hlcy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgbWF0Y2ggb2YgbWF0Y2hlc1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE1hdGNoKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibWF0Y2g9PT1hY3RpdmVNYXRjaFwiXG4gICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwic2VsZWN0QWN0aXZlKG1hdGNoKVwiPlxuICAgICAgICAgICAgICAgICoqQ1VTVE9NKiogPGIgW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2gubGFiZWwsIHRlcm0pXCI+PC9iPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHAgY2xhc3M9XCJwaWNrZXItZXJyb3JcIiAqbmdJZj1cImhhc0Vycm9yXCI+T29wcyEgQW4gZXJyb3Igb2NjdXJlZC48L3A+XG4gICAgICAgIDxwIGNsYXNzPVwicGlja2VyLW51bGxcIiAqbmdJZj1cIiFpc0xvYWRpbmcgJiYgIW1hdGNoZXMubGVuZ3RoICYmICFoYXNFcnJvclwiPk5vIHJlc3VsdHMgdG8gZGlzcGxheS4uLjwvcD5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbVF1aWNrTm90ZVJlc3VsdHMgZXh0ZW5kcyBRdWlja05vdGVSZXN1bHRzIHtcbn1cblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPlF1aWNrIE5vdGUgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvcXVpY2stbm90ZVwiPihzb3VyY2UpPC9hPjwvc21hbGw+PC9oMT5cbiAgICA8cD5UYWcgQXV0b2NvbXBsZXRlPC9wPlxuXG4gICAgPGJyLz5cblxuICAgIDxoNT5CYXNpYyBFeGFtcGxlczwvaDU+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgcXVpY2stbm90ZS1kZW1vXCI+JHtCYXNpY1F1aWNrTm90ZURlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJCYXNpY1F1aWNrTm90ZURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbiAgICBcbiAgICA8aDU+Q3VzdG9tIFRyaWdnZXJzPC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBxdWljay1ub3RlLWRlbW9cIj4ke0N1c3RvbVF1aWNrTm90ZURlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJDdXN0b21RdWlja05vdGVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG4gICAgXG4gICAgPGg1PkN1c3RvbSBSZXN1bHRzIFRlbXBsYXRlPC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBxdWljay1ub3RlLWRlbW9cIj4ke0N1c3RvbVF1aWNrTm90ZVJlc3VsdHNEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQ3VzdG9tUXVpY2tOb3RlUmVzdWx0c0RlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdxdWljay1ub3RlLWRlbW8nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICBkaXJlY3RpdmVzOiBbTk9WT19RVUlDS19OT1RFX0VMRU1FTlRTLCBDT1JFX0RJUkVDVElWRVMsIENvZGVTbmlwcGV0XVxufSlcbmV4cG9ydCBjbGFzcyBRdWlja05vdGVEZW1vIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5CYXNpY1F1aWNrTm90ZURlbW9UcGwgPSBCYXNpY1F1aWNrTm90ZURlbW9UcGw7XG4gICAgICAgIHRoaXMuQ3VzdG9tUXVpY2tOb3RlRGVtb1RwbCA9IEN1c3RvbVF1aWNrTm90ZURlbW9UcGw7XG4gICAgICAgIHRoaXMuQ3VzdG9tUXVpY2tOb3RlUmVzdWx0c0RlbW9UcGwgPSBDdXN0b21RdWlja05vdGVSZXN1bHRzRGVtb1RwbDtcblxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgbm90ZSB0ZXh0IGhlcmUuIFJlZmVyZW5jZSBwZW9wbGUgYW5kIGRpc3RydWJ1dGlvbiBsaXN0cyB1c2luZyBAIChlZy4gQEpvaG4gU21pdGgpLiBSZWZlcmVuY2Ugb3RoZXIgcmVjb3JkcyB1c2luZyAjIChlLmcuICNQcm9qZWN0IE1hbmFnZXIpJztcblxuICAgICAgICB0aGlzLnJlZmVyZW5jZXMgPSB7fTtcbiAgICAgICAgdGhpcy5ub3RlMiA9ICdJIGFtIGFuIGluaXRpYWwgbm90ZSEnO1xuICAgICAgICB0aGlzLnJlZmVyZW5jZXMyID0ge307XG4gICAgICAgIHRoaXMucmVmZXJlbmNlczMgPSB7fTtcblxuICAgICAgICBsZXQgY3VzdG9tRGF0YSA9IHtcbiAgICAgICAgICAgIHRhZ3M6IFt7IGlkOiAxLCBuYW1lOiAnT0ggWUEhJywgdGVzdDogJ1RXTycgfSwgeyBpZDogMiwgbmFtZTogJ1RBR0dJTkchJywgdGVzdDogJ09ORScgfV0sXG4gICAgICAgICAgICByZWZlcmVuY2VzOiBbeyBpZDogMSwgdGl0bGU6ICdBd2Vzb21lIFJlZmVyZW5jZScgfSwgeyBpZDogMiwgdGl0bGU6ICdBbmd1bGFyMicgfV1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgICAgIHRyaWdnZXJzOiB7XG4gICAgICAgICAgICAgICAgdGFnczogJ0AnLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZXM6ICcjJyxcbiAgICAgICAgICAgICAgICBib29zOiAnXidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgdGFnczogWydGaXJzdCcsICdTZWNvbmQnXSxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VzOiBbJ1RoaXJkJywgJ0ZvcnRoJ10sXG4gICAgICAgICAgICAgICAgYm9vczogWydUZXN0J11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW5kZXJlcjoge1xuICAgICAgICAgICAgICAgIHRhZ3M6IChzeW1ib2wsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YSBjbGFzcz1cInRhZ1wiPiR7c3ltYm9sfSR7aXRlbS5sYWJlbH08L2E+YDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZXM6IChzeW1ib2wsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YSBjbGFzcz1cInRhZ1wiPiR7c3ltYm9sfSR7aXRlbS5sYWJlbH08L2E+YDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvb3M6IChzeW1ib2wsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8c3Ryb25nPiR7c3ltYm9sfSR7aXRlbS5sYWJlbH08L3N0cm9uZz5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmN1c3RvbSA9IHtcbiAgICAgICAgICAgIHRyaWdnZXJzOiB7XG4gICAgICAgICAgICAgICAgd2hvczogJ0AnLFxuICAgICAgICAgICAgICAgIHdoYXRzOiAnIydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgd2hvczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY3VzdG9tRGF0YS50YWdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2hhdHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGN1c3RvbURhdGEucmVmZXJlbmNlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgd2hvczogJyRuYW1lICR0ZXN0JyxcbiAgICAgICAgICAgICAgICB3aGF0czogJyR0aXRsZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW5kZXJlcjoge1xuICAgICAgICAgICAgICAgIHdob3M6IChzeW1ib2wsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YSBjbGFzcz1cIldIT1NcIj4ke3N5bWJvbH0ke2l0ZW0ubGFiZWx9PC9hPmA7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB3aGF0czogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxhIGNsYXNzPVwidGFnXCI+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmN1c3RvbTIgPSB7XG4gICAgICAgICAgICByZXN1bHRzVGVtcGxhdGU6IEN1c3RvbVF1aWNrTm90ZVJlc3VsdHMsXG4gICAgICAgICAgICB0cmlnZ2Vyczoge1xuICAgICAgICAgICAgICAgIG5hbWVzOiAnQCcsXG4gICAgICAgICAgICAgICAgdGFnczogJyMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIG5hbWVzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjdXN0b21EYXRhLnRhZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0YWdzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjdXN0b21EYXRhLnJlZmVyZW5jZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgIG5hbWVzOiAnJG5hbWUnLFxuICAgICAgICAgICAgICAgIHRhZ3M6ICckdGl0bGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVuZGVyZXI6IHtcbiAgICAgICAgICAgICAgICBuYW1lczogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxhIGNsYXNzPVwibmFtZXNcIj4ke3N5bWJvbH0ke2l0ZW0ubGFiZWx9PC9hPmA7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0YWdzOiAoc3ltYm9sLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGEgY2xhc3M9XCJ0YWdzXCI+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 1197:
/***/ function(module, exports) {

	module.exports = "<novo-quick-note [(ngModel)]=\"note\" [references]=\"references\" [placeholder]=\"placeholder\" [config]=\"config\"></novo-quick-note>\n<div class=\"data\">\n    <p>Note: {{note}}</p>\n    <p>References: {{references | json}}</p>\n</div>\n"

/***/ },

/***/ 1198:
/***/ function(module, exports) {

	module.exports = "<novo-quick-note [(ngModel)]=\"note2\" [references]=\"references2\" [placeholder]=\"placeholder\" [config]=\"custom\"></novo-quick-note>\n<div class=\"data\">\n    <p>Note: {{note2}}</p>\n    <p>References: {{references2 | json}}</p>\n</div>\n"

/***/ },

/***/ 1199:
/***/ function(module, exports) {

	module.exports = "<novo-quick-note [(ngModel)]=\"note3\" [references]=\"references3\" [placeholder]=\"placeholder\" [config]=\"custom2\"></novo-quick-note>\n<div class=\"data\">\n    <p>Note: {{note3}}</p>\n    <p>References: {{references3 | json}}</p>\n</div>\n"

/***/ }

});
//# sourceMappingURL=10.1cb21c9e7305afdf3467.bundle.map