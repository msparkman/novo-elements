webpackJsonp([9],{

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

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.QuickNoteDemo = exports.CustomQuickNoteResults = undefined;
	
	var _dec, _class, _dec2, _class2;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(5);
	
	var _novoElements = __webpack_require__(15);
	
	var _CodeSnippet = __webpack_require__(1132);
	
	var _BasicQuickNote = __webpack_require__(1182);
	
	var _BasicQuickNote2 = _interopRequireDefault(_BasicQuickNote);
	
	var _CustomQuickNote = __webpack_require__(1183);
	
	var _CustomQuickNote2 = _interopRequireDefault(_CustomQuickNote);
	
	var _CustomQuickNoteResults = __webpack_require__(1184);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvcXVpY2stbm90ZS9RdWlja05vdGVEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBdUJhLHNCLFdBQUEsc0IsV0FyQloscUJBQVU7QUFDUCxjQUFVLDJCQURIO0FBRVAsZ0JBQVkscUNBRkw7QUFHUCxVQUFNO0FBQ0YsaUJBQVM7QUFEUCxLQUhDO0FBTVA7QUFOTyxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUF3QkQsSUFBTSxpekJBQU47O0lBMEJhLGEsV0FBQSxhLFlBTFoscUJBQVU7QUFDUCxjQUFVLGlCQURIO0FBRVAsY0FBVSxRQUZIO0FBR1AsZ0JBQVk7QUFITCxDQUFWLEMsa0JBTUcseUJBQWM7QUFBQTs7QUFDVixTQUFLLHFCQUFMO0FBQ0EsU0FBSyxzQkFBTDtBQUNBLFNBQUssNkJBQUw7O0FBRUEsU0FBSyxXQUFMLEdBQW1CLHVKQUFuQjs7QUFFQSxTQUFLLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLLEtBQUwsR0FBYSx1QkFBYjtBQUNBLFNBQUssV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUssV0FBTCxHQUFtQixFQUFuQjs7QUFFQSxRQUFJLGFBQWE7QUFDYixjQUFNLENBQUMsRUFBRSxJQUFJLENBQU4sRUFBUyxNQUFNLFFBQWYsRUFBeUIsTUFBTSxLQUEvQixFQUFELEVBQXlDLEVBQUUsSUFBSSxDQUFOLEVBQVMsTUFBTSxVQUFmLEVBQTJCLE1BQU0sS0FBakMsRUFBekMsQ0FETztBQUViLG9CQUFZLENBQUMsRUFBRSxJQUFJLENBQU4sRUFBUyxPQUFPLG1CQUFoQixFQUFELEVBQXdDLEVBQUUsSUFBSSxDQUFOLEVBQVMsT0FBTyxVQUFoQixFQUF4QztBQUZDLEtBQWpCOztBQUtBLFNBQUssTUFBTCxHQUFjO0FBQ1Ysa0JBQVU7QUFDTixrQkFBTSxHQURBO0FBRU4sd0JBQVksR0FGTjtBQUdOLGtCQUFNO0FBSEEsU0FEQTtBQU1WLGlCQUFTO0FBQ0wsa0JBQU0sQ0FBQyxPQUFELEVBQVUsUUFBVixDQUREO0FBRUwsd0JBQVksQ0FBQyxPQUFELEVBQVUsT0FBVixDQUZQO0FBR0wsa0JBQU0sQ0FBQyxNQUFEO0FBSEQsU0FOQztBQVdWLGtCQUFVO0FBQ04sa0JBQU0sY0FBQyxNQUFELEVBQVMsSUFBVCxFQUFrQjtBQUNwQiwyQ0FBeUIsTUFBekIsR0FBa0MsS0FBSyxLQUF2QztBQUNILGFBSEs7QUFJTix3QkFBWSxvQkFBQyxNQUFELEVBQVMsSUFBVCxFQUFrQjtBQUMxQiwyQ0FBeUIsTUFBekIsR0FBa0MsS0FBSyxLQUF2QztBQUNILGFBTks7QUFPTixrQkFBTSxjQUFDLE1BQUQsRUFBUyxJQUFULEVBQWtCO0FBQ3BCLG9DQUFrQixNQUFsQixHQUEyQixLQUFLLEtBQWhDO0FBQ0g7QUFUSztBQVhBLEtBQWQ7O0FBd0JBLFNBQUssTUFBTCxHQUFjO0FBQ1Ysa0JBQVU7QUFDTixrQkFBTSxHQURBO0FBRU4sbUJBQU87QUFGRCxTQURBO0FBS1YsaUJBQVM7QUFDTCxrQkFBTSxnQkFBTTtBQUNSLHVCQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFhO0FBQzVCLCtCQUFXLFlBQU07QUFDYixnQ0FBUSxXQUFXLElBQW5CO0FBQ0gscUJBRkQsRUFFRyxHQUZIO0FBR0gsaUJBSk0sQ0FBUDtBQUtILGFBUEk7QUFRTCxtQkFBTyxpQkFBTTtBQUNULHVCQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFhO0FBQzVCLCtCQUFXLFlBQU07QUFDYixnQ0FBUSxXQUFXLFVBQW5CO0FBQ0gscUJBRkQsRUFFRyxHQUZIO0FBR0gsaUJBSk0sQ0FBUDtBQUtIO0FBZEksU0FMQztBQXFCVixnQkFBUTtBQUNKLGtCQUFNLGFBREY7QUFFSixtQkFBTztBQUZILFNBckJFO0FBeUJWLGtCQUFVO0FBQ04sa0JBQU0sY0FBQyxNQUFELEVBQVMsSUFBVCxFQUFrQjtBQUNwQiw0Q0FBMEIsTUFBMUIsR0FBbUMsS0FBSyxLQUF4QztBQUNILGFBSEs7QUFJTixtQkFBTyxlQUFDLE1BQUQsRUFBUyxJQUFULEVBQWtCO0FBQ3JCLDJDQUF5QixNQUF6QixHQUFrQyxLQUFLLEtBQXZDO0FBQ0g7QUFOSztBQXpCQSxLQUFkOztBQW1DQSxTQUFLLE9BQUwsR0FBZTtBQUNYLHlCQUFpQixzQkFETjtBQUVYLGtCQUFVO0FBQ04sbUJBQU8sR0FERDtBQUVOLGtCQUFNO0FBRkEsU0FGQztBQU1YLGlCQUFTO0FBQ0wsbUJBQU8saUJBQU07QUFDVCx1QkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBYTtBQUM1QiwrQkFBVyxZQUFNO0FBQ2IsZ0NBQVEsV0FBVyxJQUFuQjtBQUNILHFCQUZELEVBRUcsR0FGSDtBQUdILGlCQUpNLENBQVA7QUFLSCxhQVBJO0FBUUwsa0JBQU0sZ0JBQU07QUFDUix1QkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBYTtBQUM1QiwrQkFBVyxZQUFNO0FBQ2IsZ0NBQVEsV0FBVyxVQUFuQjtBQUNILHFCQUZELEVBRUcsR0FGSDtBQUdILGlCQUpNLENBQVA7QUFLSDtBQWRJLFNBTkU7QUFzQlgsZ0JBQVE7QUFDSixtQkFBTyxPQURIO0FBRUosa0JBQU07QUFGRixTQXRCRztBQTBCWCxrQkFBVTtBQUNOLG1CQUFPLGVBQUMsTUFBRCxFQUFTLElBQVQsRUFBa0I7QUFDckIsNkNBQTJCLE1BQTNCLEdBQW9DLEtBQUssS0FBekM7QUFDSCxhQUhLO0FBSU4sa0JBQU0sY0FBQyxNQUFELEVBQVMsSUFBVCxFQUFrQjtBQUNwQiw0Q0FBMEIsTUFBMUIsR0FBbUMsS0FBSyxLQUF4QztBQUNIO0FBTks7QUExQkMsS0FBZjtBQW1DSCxDIiwiZmlsZSI6IlF1aWNrTm90ZURlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JyaWFua2ltYmFsbC9Ob3ZvL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOT1ZPX1FVSUNLX05PVEVfRUxFTUVOVFMsIFF1aWNrTm90ZVJlc3VsdHMsIE5PVk9fTE9BRElOR19FTEVNRU5UUyB9IGZyb20gJy4vLi4vLi4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG5pbXBvcnQgeyBDb2RlU25pcHBldCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2NvZGVzbmlwcGV0L0NvZGVTbmlwcGV0JztcblxuaW1wb3J0IEJhc2ljUXVpY2tOb3RlRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9CYXNpY1F1aWNrTm90ZS5odG1sJztcbmltcG9ydCBDdXN0b21RdWlja05vdGVEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0N1c3RvbVF1aWNrTm90ZS5odG1sJztcbmltcG9ydCBDdXN0b21RdWlja05vdGVSZXN1bHRzRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9DdXN0b21RdWlja05vdGVSZXN1bHRzLmh0bWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2N1c3RvbS1xdWljay1ub3RlLXJlc3VsdHMnLFxuICAgIGRpcmVjdGl2ZXM6IFtOT1ZPX0xPQURJTkdfRUxFTUVOVFNdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ2NsYXNzJzogJ2FjdGl2ZSBxdWljay1ub3RlLXJlc3VsdHMnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiICpuZ0lmPVwiaXNMb2FkaW5nICYmICFtYXRjaGVzLmxlbmd0aFwiPjwvbm92by1sb2FkaW5nPlxuICAgICAgICA8dWwgKm5nSWY9XCJtYXRjaGVzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBtYXRjaGVzXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0TWF0Y2goJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaD09PWFjdGl2ZU1hdGNoXCJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCI+XG4gICAgICAgICAgICAgICAgKipDVVNUT00qKiA8YiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5sYWJlbCwgdGVybSlcIj48L2I+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8cCBjbGFzcz1cInBpY2tlci1lcnJvclwiICpuZ0lmPVwiaGFzRXJyb3JcIj5Pb3BzISBBbiBlcnJvciBvY2N1cmVkLjwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJwaWNrZXItbnVsbFwiICpuZ0lmPVwiIWlzTG9hZGluZyAmJiAhbWF0Y2hlcy5sZW5ndGggJiYgIWhhc0Vycm9yXCI+Tm8gcmVzdWx0cyB0byBkaXNwbGF5Li4uPC9wPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tUXVpY2tOb3RlUmVzdWx0cyBleHRlbmRzIFF1aWNrTm90ZVJlc3VsdHMge1xufVxuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+UXVpY2sgTm90ZSA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy9xdWljay1ub3RlXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPlRhZyBBdXRvY29tcGxldGU8L3A+XG5cbiAgICA8YnIvPlxuXG4gICAgPGg1PkJhc2ljIEV4YW1wbGVzPC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBxdWljay1ub3RlLWRlbW9cIj4ke0Jhc2ljUXVpY2tOb3RlRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkJhc2ljUXVpY2tOb3RlRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuICAgIFxuICAgIDxoNT5DdXN0b20gVHJpZ2dlcnM8L2g1PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHF1aWNrLW5vdGUtZGVtb1wiPiR7Q3VzdG9tUXVpY2tOb3RlRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkN1c3RvbVF1aWNrTm90ZURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbiAgICBcbiAgICA8aDU+Q3VzdG9tIFJlc3VsdHMgVGVtcGxhdGU8L2g1PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHF1aWNrLW5vdGUtZGVtb1wiPiR7Q3VzdG9tUXVpY2tOb3RlUmVzdWx0c0RlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJDdXN0b21RdWlja05vdGVSZXN1bHRzRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3F1aWNrLW5vdGUtZGVtbycsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgIGRpcmVjdGl2ZXM6IFtOT1ZPX1FVSUNLX05PVEVfRUxFTUVOVFMsIENPUkVfRElSRUNUSVZFUywgQ29kZVNuaXBwZXRdXG59KVxuZXhwb3J0IGNsYXNzIFF1aWNrTm90ZURlbW8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLkJhc2ljUXVpY2tOb3RlRGVtb1RwbCA9IEJhc2ljUXVpY2tOb3RlRGVtb1RwbDtcbiAgICAgICAgdGhpcy5DdXN0b21RdWlja05vdGVEZW1vVHBsID0gQ3VzdG9tUXVpY2tOb3RlRGVtb1RwbDtcbiAgICAgICAgdGhpcy5DdXN0b21RdWlja05vdGVSZXN1bHRzRGVtb1RwbCA9IEN1c3RvbVF1aWNrTm90ZVJlc3VsdHNEZW1vVHBsO1xuXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciBub3RlIHRleHQgaGVyZS4gUmVmZXJlbmNlIHBlb3BsZSBhbmQgZGlzdHJ1YnV0aW9uIGxpc3RzIHVzaW5nIEAgKGVnLiBASm9obiBTbWl0aCkuIFJlZmVyZW5jZSBvdGhlciByZWNvcmRzIHVzaW5nICMgKGUuZy4gI1Byb2plY3QgTWFuYWdlciknO1xuXG4gICAgICAgIHRoaXMucmVmZXJlbmNlcyA9IHt9O1xuICAgICAgICB0aGlzLm5vdGUyID0gJ0kgYW0gYW4gaW5pdGlhbCBub3RlISc7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlczIgPSB7fTtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzMyA9IHt9O1xuXG4gICAgICAgIGxldCBjdXN0b21EYXRhID0ge1xuICAgICAgICAgICAgdGFnczogW3sgaWQ6IDEsIG5hbWU6ICdPSCBZQSEnLCB0ZXN0OiAnVFdPJyB9LCB7IGlkOiAyLCBuYW1lOiAnVEFHR0lORyEnLCB0ZXN0OiAnT05FJyB9XSxcbiAgICAgICAgICAgIHJlZmVyZW5jZXM6IFt7IGlkOiAxLCB0aXRsZTogJ0F3ZXNvbWUgUmVmZXJlbmNlJyB9LCB7IGlkOiAyLCB0aXRsZTogJ0FuZ3VsYXIyJyB9XVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgdHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgICB0YWdzOiAnQCcsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogJyMnLFxuICAgICAgICAgICAgICAgIGJvb3M6ICdeJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB0YWdzOiBbJ0ZpcnN0JywgJ1NlY29uZCddLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZXM6IFsnVGhpcmQnLCAnRm9ydGgnXSxcbiAgICAgICAgICAgICAgICBib29zOiBbJ1Rlc3QnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbmRlcmVyOiB7XG4gICAgICAgICAgICAgICAgdGFnczogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxhIGNsYXNzPVwidGFnXCI+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxhIGNsYXNzPVwidGFnXCI+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9vczogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxzdHJvbmc+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvc3Ryb25nPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY3VzdG9tID0ge1xuICAgICAgICAgICAgdHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgICB3aG9zOiAnQCcsXG4gICAgICAgICAgICAgICAgd2hhdHM6ICcjJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB3aG9zOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjdXN0b21EYXRhLnRhZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB3aGF0czogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY3VzdG9tRGF0YS5yZWZlcmVuY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICB3aG9zOiAnJG5hbWUgJHRlc3QnLFxuICAgICAgICAgICAgICAgIHdoYXRzOiAnJHRpdGxlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbmRlcmVyOiB7XG4gICAgICAgICAgICAgICAgd2hvczogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxhIGNsYXNzPVwiV0hPU1wiPiR7c3ltYm9sfSR7aXRlbS5sYWJlbH08L2E+YDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdoYXRzOiAoc3ltYm9sLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGEgY2xhc3M9XCJ0YWdcIj4ke3N5bWJvbH0ke2l0ZW0ubGFiZWx9PC9hPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY3VzdG9tMiA9IHtcbiAgICAgICAgICAgIHJlc3VsdHNUZW1wbGF0ZTogQ3VzdG9tUXVpY2tOb3RlUmVzdWx0cyxcbiAgICAgICAgICAgIHRyaWdnZXJzOiB7XG4gICAgICAgICAgICAgICAgbmFtZXM6ICdAJyxcbiAgICAgICAgICAgICAgICB0YWdzOiAnIydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgbmFtZXM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGN1c3RvbURhdGEudGFncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRhZ3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGN1c3RvbURhdGEucmVmZXJlbmNlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgbmFtZXM6ICckbmFtZScsXG4gICAgICAgICAgICAgICAgdGFnczogJyR0aXRsZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW5kZXJlcjoge1xuICAgICAgICAgICAgICAgIG5hbWVzOiAoc3ltYm9sLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGEgY2xhc3M9XCJuYW1lc1wiPiR7c3ltYm9sfSR7aXRlbS5sYWJlbH08L2E+YDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRhZ3M6IChzeW1ib2wsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YSBjbGFzcz1cInRhZ3NcIj4ke3N5bWJvbH0ke2l0ZW0ubGFiZWx9PC9hPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 1182:
/***/ function(module, exports) {

	module.exports = "<novo-quick-note [(ngModel)]=\"note\" [references]=\"references\" [placeholder]=\"placeholder\" [config]=\"config\"></novo-quick-note>\n<div class=\"data\">\n    <p>Note: {{note}}</p>\n    <p>References: {{references | json}}</p>\n</div>\n"

/***/ },

/***/ 1183:
/***/ function(module, exports) {

	module.exports = "<novo-quick-note [(ngModel)]=\"note2\" [references]=\"references2\" [placeholder]=\"placeholder\" [config]=\"custom\"></novo-quick-note>\n<div class=\"data\">\n    <p>Note: {{note2}}</p>\n    <p>References: {{references2 | json}}</p>\n</div>\n"

/***/ },

/***/ 1184:
/***/ function(module, exports) {

	module.exports = "<novo-quick-note [(ngModel)]=\"note3\" [references]=\"references3\" [placeholder]=\"placeholder\" [config]=\"custom2\"></novo-quick-note>\n<div class=\"data\">\n    <p>Note: {{note3}}</p>\n    <p>References: {{references3 | json}}</p>\n</div>\n"

/***/ }

});
//# sourceMappingURL=9.a53407eace5d0ba44de9.bundle.map