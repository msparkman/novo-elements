webpackJsonp([9],{

/***/ 1121:
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

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.QuickNoteDemo = exports.CustomQuickNoteResults = undefined;
	
	var _dec, _class, _dec2, _class2;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(6);
	
	var _novoElements = __webpack_require__(18);
	
	var _CodeSnippet = __webpack_require__(1121);
	
	var _BasicQuickNote = __webpack_require__(1171);
	
	var _BasicQuickNote2 = _interopRequireDefault(_BasicQuickNote);
	
	var _CustomQuickNote = __webpack_require__(1172);
	
	var _CustomQuickNote2 = _interopRequireDefault(_CustomQuickNote);
	
	var _CustomQuickNoteResults = __webpack_require__(1173);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvcXVpY2stbm90ZS9RdWlja05vdGVEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBdUJhLHNCLFdBQUEsc0IsV0FyQloscUJBQVU7QUFDUCxjQUFVLDJCQURIO0FBRVAsZ0JBQVkscUNBRkw7QUFHUCxVQUFNO0FBQ0YsaUJBQVM7QUFEUCxLQUhDO0FBTVA7QUFOTyxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUF3QkQsSUFBTSxpekJBQU47O0lBMEJhLGEsV0FBQSxhLFlBTFoscUJBQVU7QUFDUCxjQUFVLGlCQURIO0FBRVAsY0FBVSxRQUZIO0FBR1AsZ0JBQVk7QUFITCxDQUFWLEMsa0JBTUcseUJBQWM7QUFBQTs7QUFDVixTQUFLLHFCQUFMO0FBQ0EsU0FBSyxzQkFBTDtBQUNBLFNBQUssNkJBQUw7O0FBRUEsU0FBSyxXQUFMLEdBQW1CLHVKQUFuQjs7QUFFQSxTQUFLLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLLEtBQUwsR0FBYSx1QkFBYjtBQUNBLFNBQUssV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUssV0FBTCxHQUFtQixFQUFuQjs7QUFFQSxRQUFJLGFBQWE7QUFDYixjQUFNLENBQUMsRUFBRSxJQUFJLENBQU4sRUFBUyxNQUFNLFFBQWYsRUFBeUIsTUFBTSxLQUEvQixFQUFELEVBQXlDLEVBQUUsSUFBSSxDQUFOLEVBQVMsTUFBTSxVQUFmLEVBQTJCLE1BQU0sS0FBakMsRUFBekMsQ0FETztBQUViLG9CQUFZLENBQUMsRUFBRSxJQUFJLENBQU4sRUFBUyxPQUFPLG1CQUFoQixFQUFELEVBQXdDLEVBQUUsSUFBSSxDQUFOLEVBQVMsT0FBTyxVQUFoQixFQUF4QztBQUZDLEtBQWpCOztBQUtBLFNBQUssTUFBTCxHQUFjO0FBQ1Ysa0JBQVU7QUFDTixrQkFBTSxHQURBO0FBRU4sd0JBQVksR0FGTjtBQUdOLGtCQUFNO0FBSEEsU0FEQTtBQU1WLGlCQUFTO0FBQ0wsa0JBQU0sQ0FBQyxPQUFELEVBQVUsUUFBVixDQUREO0FBRUwsd0JBQVksQ0FBQyxPQUFELEVBQVUsT0FBVixDQUZQO0FBR0wsa0JBQU0sQ0FBQyxNQUFEO0FBSEQsU0FOQztBQVdWLGtCQUFVO0FBQ04sa0JBQU0sY0FBQyxNQUFELEVBQVMsSUFBVCxFQUFrQjtBQUNwQiwyQ0FBeUIsTUFBekIsR0FBa0MsS0FBSyxLQUF2QztBQUNILGFBSEs7QUFJTix3QkFBWSxvQkFBQyxNQUFELEVBQVMsSUFBVCxFQUFrQjtBQUMxQiwyQ0FBeUIsTUFBekIsR0FBa0MsS0FBSyxLQUF2QztBQUNILGFBTks7QUFPTixrQkFBTSxjQUFDLE1BQUQsRUFBUyxJQUFULEVBQWtCO0FBQ3BCLG9DQUFrQixNQUFsQixHQUEyQixLQUFLLEtBQWhDO0FBQ0g7QUFUSztBQVhBLEtBQWQ7O0FBd0JBLFNBQUssTUFBTCxHQUFjO0FBQ1Ysa0JBQVU7QUFDTixrQkFBTSxHQURBO0FBRU4sbUJBQU87QUFGRCxTQURBO0FBS1YsaUJBQVM7QUFDTCxrQkFBTSxnQkFBTTtBQUNSLHVCQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFhO0FBQzVCLCtCQUFXLFlBQU07QUFDYixnQ0FBUSxXQUFXLElBQW5CO0FBQ0gscUJBRkQsRUFFRyxHQUZIO0FBR0gsaUJBSk0sQ0FBUDtBQUtILGFBUEk7QUFRTCxtQkFBTyxpQkFBTTtBQUNULHVCQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFhO0FBQzVCLCtCQUFXLFlBQU07QUFDYixnQ0FBUSxXQUFXLFVBQW5CO0FBQ0gscUJBRkQsRUFFRyxHQUZIO0FBR0gsaUJBSk0sQ0FBUDtBQUtIO0FBZEksU0FMQztBQXFCVixnQkFBUTtBQUNKLGtCQUFNLGFBREY7QUFFSixtQkFBTztBQUZILFNBckJFO0FBeUJWLGtCQUFVO0FBQ04sa0JBQU0sY0FBQyxNQUFELEVBQVMsSUFBVCxFQUFrQjtBQUNwQiw0Q0FBMEIsTUFBMUIsR0FBbUMsS0FBSyxLQUF4QztBQUNILGFBSEs7QUFJTixtQkFBTyxlQUFDLE1BQUQsRUFBUyxJQUFULEVBQWtCO0FBQ3JCLDJDQUF5QixNQUF6QixHQUFrQyxLQUFLLEtBQXZDO0FBQ0g7QUFOSztBQXpCQSxLQUFkOztBQW1DQSxTQUFLLE9BQUwsR0FBZTtBQUNYLHlCQUFpQixzQkFETjtBQUVYLGtCQUFVO0FBQ04sbUJBQU8sR0FERDtBQUVOLGtCQUFNO0FBRkEsU0FGQztBQU1YLGlCQUFTO0FBQ0wsbUJBQU8saUJBQU07QUFDVCx1QkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBYTtBQUM1QiwrQkFBVyxZQUFNO0FBQ2IsZ0NBQVEsV0FBVyxJQUFuQjtBQUNILHFCQUZELEVBRUcsR0FGSDtBQUdILGlCQUpNLENBQVA7QUFLSCxhQVBJO0FBUUwsa0JBQU0sZ0JBQU07QUFDUix1QkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBYTtBQUM1QiwrQkFBVyxZQUFNO0FBQ2IsZ0NBQVEsV0FBVyxVQUFuQjtBQUNILHFCQUZELEVBRUcsR0FGSDtBQUdILGlCQUpNLENBQVA7QUFLSDtBQWRJLFNBTkU7QUFzQlgsZ0JBQVE7QUFDSixtQkFBTyxPQURIO0FBRUosa0JBQU07QUFGRixTQXRCRztBQTBCWCxrQkFBVTtBQUNOLG1CQUFPLGVBQUMsTUFBRCxFQUFTLElBQVQsRUFBa0I7QUFDckIsNkNBQTJCLE1BQTNCLEdBQW9DLEtBQUssS0FBekM7QUFDSCxhQUhLO0FBSU4sa0JBQU0sY0FBQyxNQUFELEVBQVMsSUFBVCxFQUFrQjtBQUNwQiw0Q0FBMEIsTUFBMUIsR0FBbUMsS0FBSyxLQUF4QztBQUNIO0FBTks7QUExQkMsS0FBZjtBQW1DSCxDIiwiZmlsZSI6IlF1aWNrTm90ZURlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5PVk9fUVVJQ0tfTk9URV9FTEVNRU5UUywgUXVpY2tOb3RlUmVzdWx0cywgTk9WT19MT0FESU5HX0VMRU1FTlRTIH0gZnJvbSAnLi8uLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbmltcG9ydCB7IENvZGVTbmlwcGV0IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQnO1xuXG5pbXBvcnQgQmFzaWNRdWlja05vdGVEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0Jhc2ljUXVpY2tOb3RlLmh0bWwnO1xuaW1wb3J0IEN1c3RvbVF1aWNrTm90ZURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQ3VzdG9tUXVpY2tOb3RlLmh0bWwnO1xuaW1wb3J0IEN1c3RvbVF1aWNrTm90ZVJlc3VsdHNEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0N1c3RvbVF1aWNrTm90ZVJlc3VsdHMuaHRtbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY3VzdG9tLXF1aWNrLW5vdGUtcmVzdWx0cycsXG4gICAgZGlyZWN0aXZlczogW05PVk9fTE9BRElOR19FTEVNRU5UU10sXG4gICAgaG9zdDoge1xuICAgICAgICAnY2xhc3MnOiAnYWN0aXZlIHF1aWNrLW5vdGUtcmVzdWx0cydcbiAgICB9LFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgIW1hdGNoZXMubGVuZ3RoXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDx1bCAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG1hdGNoIG9mIG1hdGNoZXNcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RNYXRjaCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIm1hdGNoPT09YWN0aXZlTWF0Y2hcIlxuICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIj5cbiAgICAgICAgICAgICAgICAqKkNVU1RPTSoqIDxiIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmxhYmVsLCB0ZXJtKVwiPjwvYj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxwIGNsYXNzPVwicGlja2VyLWVycm9yXCIgKm5nSWY9XCJoYXNFcnJvclwiPk9vcHMhIEFuIGVycm9yIG9jY3VyZWQuPC9wPlxuICAgICAgICA8cCBjbGFzcz1cInBpY2tlci1udWxsXCIgKm5nSWY9XCIhaXNMb2FkaW5nICYmICFtYXRjaGVzLmxlbmd0aCAmJiAhaGFzRXJyb3JcIj5ObyByZXN1bHRzIHRvIGRpc3BsYXkuLi48L3A+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21RdWlja05vdGVSZXN1bHRzIGV4dGVuZHMgUXVpY2tOb3RlUmVzdWx0cyB7XG59XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5RdWljayBOb3RlIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL3F1aWNrLW5vdGVcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+VGFnIEF1dG9jb21wbGV0ZTwvcD5cblxuICAgIDxici8+XG5cbiAgICA8aDU+QmFzaWMgRXhhbXBsZXM8L2g1PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHF1aWNrLW5vdGUtZGVtb1wiPiR7QmFzaWNRdWlja05vdGVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQmFzaWNRdWlja05vdGVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG4gICAgXG4gICAgPGg1PkN1c3RvbSBUcmlnZ2VyczwvaDU+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgcXVpY2stbm90ZS1kZW1vXCI+JHtDdXN0b21RdWlja05vdGVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQ3VzdG9tUXVpY2tOb3RlRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuICAgIFxuICAgIDxoNT5DdXN0b20gUmVzdWx0cyBUZW1wbGF0ZTwvaDU+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgcXVpY2stbm90ZS1kZW1vXCI+JHtDdXN0b21RdWlja05vdGVSZXN1bHRzRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkN1c3RvbVF1aWNrTm90ZVJlc3VsdHNEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncXVpY2stbm90ZS1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgZGlyZWN0aXZlczogW05PVk9fUVVJQ0tfTk9URV9FTEVNRU5UUywgQ09SRV9ESVJFQ1RJVkVTLCBDb2RlU25pcHBldF1cbn0pXG5leHBvcnQgY2xhc3MgUXVpY2tOb3RlRGVtbyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuQmFzaWNRdWlja05vdGVEZW1vVHBsID0gQmFzaWNRdWlja05vdGVEZW1vVHBsO1xuICAgICAgICB0aGlzLkN1c3RvbVF1aWNrTm90ZURlbW9UcGwgPSBDdXN0b21RdWlja05vdGVEZW1vVHBsO1xuICAgICAgICB0aGlzLkN1c3RvbVF1aWNrTm90ZVJlc3VsdHNEZW1vVHBsID0gQ3VzdG9tUXVpY2tOb3RlUmVzdWx0c0RlbW9UcGw7XG5cbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIG5vdGUgdGV4dCBoZXJlLiBSZWZlcmVuY2UgcGVvcGxlIGFuZCBkaXN0cnVidXRpb24gbGlzdHMgdXNpbmcgQCAoZWcuIEBKb2huIFNtaXRoKS4gUmVmZXJlbmNlIG90aGVyIHJlY29yZHMgdXNpbmcgIyAoZS5nLiAjUHJvamVjdCBNYW5hZ2VyKSc7XG5cbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzID0ge307XG4gICAgICAgIHRoaXMubm90ZTIgPSAnSSBhbSBhbiBpbml0aWFsIG5vdGUhJztcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzMiA9IHt9O1xuICAgICAgICB0aGlzLnJlZmVyZW5jZXMzID0ge307XG5cbiAgICAgICAgbGV0IGN1c3RvbURhdGEgPSB7XG4gICAgICAgICAgICB0YWdzOiBbeyBpZDogMSwgbmFtZTogJ09IIFlBIScsIHRlc3Q6ICdUV08nIH0sIHsgaWQ6IDIsIG5hbWU6ICdUQUdHSU5HIScsIHRlc3Q6ICdPTkUnIH1dLFxuICAgICAgICAgICAgcmVmZXJlbmNlczogW3sgaWQ6IDEsIHRpdGxlOiAnQXdlc29tZSBSZWZlcmVuY2UnIH0sIHsgaWQ6IDIsIHRpdGxlOiAnQW5ndWxhcjInIH1dXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgICAgICB0cmlnZ2Vyczoge1xuICAgICAgICAgICAgICAgIHRhZ3M6ICdAJyxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VzOiAnIycsXG4gICAgICAgICAgICAgICAgYm9vczogJ14nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHRhZ3M6IFsnRmlyc3QnLCAnU2Vjb25kJ10sXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogWydUaGlyZCcsICdGb3J0aCddLFxuICAgICAgICAgICAgICAgIGJvb3M6IFsnVGVzdCddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVuZGVyZXI6IHtcbiAgICAgICAgICAgICAgICB0YWdzOiAoc3ltYm9sLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGEgY2xhc3M9XCJ0YWdcIj4ke3N5bWJvbH0ke2l0ZW0ubGFiZWx9PC9hPmA7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VzOiAoc3ltYm9sLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGEgY2xhc3M9XCJ0YWdcIj4ke3N5bWJvbH0ke2l0ZW0ubGFiZWx9PC9hPmA7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib29zOiAoc3ltYm9sLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPHN0cm9uZz4ke3N5bWJvbH0ke2l0ZW0ubGFiZWx9PC9zdHJvbmc+YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jdXN0b20gPSB7XG4gICAgICAgICAgICB0cmlnZ2Vyczoge1xuICAgICAgICAgICAgICAgIHdob3M6ICdAJyxcbiAgICAgICAgICAgICAgICB3aGF0czogJyMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHdob3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGN1c3RvbURhdGEudGFncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdoYXRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjdXN0b21EYXRhLnJlZmVyZW5jZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgIHdob3M6ICckbmFtZSAkdGVzdCcsXG4gICAgICAgICAgICAgICAgd2hhdHM6ICckdGl0bGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVuZGVyZXI6IHtcbiAgICAgICAgICAgICAgICB3aG9zOiAoc3ltYm9sLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGEgY2xhc3M9XCJXSE9TXCI+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2hhdHM6IChzeW1ib2wsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YSBjbGFzcz1cInRhZ1wiPiR7c3ltYm9sfSR7aXRlbS5sYWJlbH08L2E+YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jdXN0b20yID0ge1xuICAgICAgICAgICAgcmVzdWx0c1RlbXBsYXRlOiBDdXN0b21RdWlja05vdGVSZXN1bHRzLFxuICAgICAgICAgICAgdHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lczogJ0AnLFxuICAgICAgICAgICAgICAgIHRhZ3M6ICcjJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY3VzdG9tRGF0YS50YWdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGFnczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY3VzdG9tRGF0YS5yZWZlcmVuY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICBuYW1lczogJyRuYW1lJyxcbiAgICAgICAgICAgICAgICB0YWdzOiAnJHRpdGxlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbmRlcmVyOiB7XG4gICAgICAgICAgICAgICAgbmFtZXM6IChzeW1ib2wsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YSBjbGFzcz1cIm5hbWVzXCI+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGFnczogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxhIGNsYXNzPVwidGFnc1wiPiR7c3ltYm9sfSR7aXRlbS5sYWJlbH08L2E+YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuIl19

/***/ },

/***/ 1171:
/***/ function(module, exports) {

	module.exports = "<novo-quick-note [(ngModel)]=\"note\" [references]=\"references\" [placeholder]=\"placeholder\" [config]=\"config\"></novo-quick-note>\n<div class=\"data\">\n    <p>Note: {{note}}</p>\n    <p>References: {{references | json}}</p>\n</div>\n"

/***/ },

/***/ 1172:
/***/ function(module, exports) {

	module.exports = "<novo-quick-note [(ngModel)]=\"note2\" [references]=\"references2\" [placeholder]=\"placeholder\" [config]=\"custom\"></novo-quick-note>\n<div class=\"data\">\n    <p>Note: {{note2}}</p>\n    <p>References: {{references2 | json}}</p>\n</div>\n"

/***/ },

/***/ 1173:
/***/ function(module, exports) {

	module.exports = "<novo-quick-note [(ngModel)]=\"note3\" [references]=\"references3\" [placeholder]=\"placeholder\" [config]=\"custom2\"></novo-quick-note>\n<div class=\"data\">\n    <p>Note: {{note3}}</p>\n    <p>References: {{references3 | json}}</p>\n</div>\n"

/***/ }

});
//# sourceMappingURL=9.f124b6237ee544bea4da.bundle.map