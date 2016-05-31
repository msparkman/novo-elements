webpackJsonp([9],{

/***/ 831:
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztJQU9hLFcsV0FBQSxXLFdBTFoscUJBQVU7QUFDUCxZQUFRLENBQUMsTUFBRCxDQUREO0FBRVAsY0FBVSxjQUZIO0FBR1AsY0FBVTtBQUhILENBQVYsQzs7Ozs7OzttQ0FNYztBQUNQLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxhQUFMLENBQW1CLEtBQUssSUFBeEIsRUFBOEIsS0FBL0M7QUFDSCIsImZpbGUiOiJDb2RlU25pcHBldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgaW5wdXRzOiBbJ2NvZGUnXSxcbiAgICBzZWxlY3RvcjogJ2NvZGUtc25pcHBldCcsXG4gICAgdGVtcGxhdGU6ICc8cHJlPjxjb2RlIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0XCI+PC9jb2RlPjwvcHJlPidcbn0pXG5leHBvcnQgY2xhc3MgQ29kZVNuaXBwZXQge1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodCA9IGhsanMuaGlnaGxpZ2h0QXV0byh0aGlzLmNvZGUpLnZhbHVlO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.QuickNoteDemo = exports.CustomQuickNoteResults = undefined;
	
	var _dec, _class, _dec2, _class2;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(5);
	
	var _novoElements = __webpack_require__(171);
	
	var _CodeSnippet = __webpack_require__(831);
	
	var _BasicQuickNote = __webpack_require__(881);
	
	var _BasicQuickNote2 = _interopRequireDefault(_BasicQuickNote);
	
	var _CustomQuickNote = __webpack_require__(882);
	
	var _CustomQuickNote2 = _interopRequireDefault(_CustomQuickNote);
	
	var _CustomQuickNoteResults = __webpack_require__(883);
	
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
	
	    this.note = '';
	    this.references = {};
	
	    this.note2 = 'I am an initial note!';
	    this.references2 = {};
	
	    this.note3 = '';
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvcXVpY2stbm90ZS9RdWlja05vdGVEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBdUJhLHNCLFdBQUEsc0IsV0FyQloscUJBQVU7QUFDUCxjQUFVLDJCQURIO0FBRVAsZ0JBQVkscUNBRkw7QUFHUCxVQUFNO0FBQ0YsaUJBQVM7QUFEUCxLQUhDO0FBTVA7QUFOTyxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUF3QkQsSUFBTSxpekJBQU47O0lBMEJhLGEsV0FBQSxhLFlBTFoscUJBQVU7QUFDUCxjQUFVLGlCQURIO0FBRVAsY0FBVSxRQUZIO0FBR1AsZ0JBQVk7QUFITCxDQUFWLEMsa0JBTUcseUJBQWM7QUFBQTs7QUFDVixTQUFLLHFCQUFMO0FBQ0EsU0FBSyxzQkFBTDtBQUNBLFNBQUssNkJBQUw7O0FBRUEsU0FBSyxXQUFMLEdBQW1CLHVKQUFuQjs7QUFFQSxTQUFLLElBQUwsR0FBWSxFQUFaO0FBQ0EsU0FBSyxVQUFMLEdBQWtCLEVBQWxCOztBQUVBLFNBQUssS0FBTCxHQUFhLHVCQUFiO0FBQ0EsU0FBSyxXQUFMLEdBQW1CLEVBQW5COztBQUVBLFNBQUssS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLLFdBQUwsR0FBbUIsRUFBbkI7O0FBRUEsUUFBSSxhQUFhO0FBQ2IsY0FBTSxDQUFDLEVBQUUsSUFBSSxDQUFOLEVBQVMsTUFBTSxRQUFmLEVBQXlCLE1BQU0sS0FBL0IsRUFBRCxFQUF5QyxFQUFFLElBQUksQ0FBTixFQUFTLE1BQU0sVUFBZixFQUEyQixNQUFNLEtBQWpDLEVBQXpDLENBRE87QUFFYixvQkFBWSxDQUFDLEVBQUUsSUFBSSxDQUFOLEVBQVMsT0FBTyxtQkFBaEIsRUFBRCxFQUF3QyxFQUFFLElBQUksQ0FBTixFQUFTLE9BQU8sVUFBaEIsRUFBeEM7QUFGQyxLQUFqQjs7QUFLQSxTQUFLLE1BQUwsR0FBYztBQUNWLGtCQUFVO0FBQ04sa0JBQU0sR0FEQTtBQUVOLHdCQUFZLEdBRk47QUFHTixrQkFBTTtBQUhBLFNBREE7QUFNVixpQkFBUztBQUNMLGtCQUFNLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FERDtBQUVMLHdCQUFZLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FGUDtBQUdMLGtCQUFNLENBQUMsTUFBRDtBQUhELFNBTkM7QUFXVixrQkFBVTtBQUNOLGtCQUFNLGNBQUMsTUFBRCxFQUFTLElBQVQsRUFBa0I7QUFDcEIsMkNBQXlCLE1BQXpCLEdBQWtDLEtBQUssS0FBdkM7QUFDSCxhQUhLO0FBSU4sd0JBQVksb0JBQUMsTUFBRCxFQUFTLElBQVQsRUFBa0I7QUFDMUIsMkNBQXlCLE1BQXpCLEdBQWtDLEtBQUssS0FBdkM7QUFDSCxhQU5LO0FBT04sa0JBQU0sY0FBQyxNQUFELEVBQVMsSUFBVCxFQUFrQjtBQUNwQixvQ0FBa0IsTUFBbEIsR0FBMkIsS0FBSyxLQUFoQztBQUNIO0FBVEs7QUFYQSxLQUFkOztBQXdCQSxTQUFLLE1BQUwsR0FBYztBQUNWLGtCQUFVO0FBQ04sa0JBQU0sR0FEQTtBQUVOLG1CQUFPO0FBRkQsU0FEQTtBQUtWLGlCQUFTO0FBQ0wsa0JBQU0sZ0JBQU07QUFDUix1QkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBYTtBQUM1QiwrQkFBVyxZQUFNO0FBQ2IsZ0NBQVEsV0FBVyxJQUFuQjtBQUNILHFCQUZELEVBRUcsR0FGSDtBQUdILGlCQUpNLENBQVA7QUFLSCxhQVBJO0FBUUwsbUJBQU8saUJBQU07QUFDVCx1QkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBYTtBQUM1QiwrQkFBVyxZQUFNO0FBQ2IsZ0NBQVEsV0FBVyxVQUFuQjtBQUNILHFCQUZELEVBRUcsR0FGSDtBQUdILGlCQUpNLENBQVA7QUFLSDtBQWRJLFNBTEM7QUFxQlYsZ0JBQVE7QUFDSixrQkFBTSxhQURGO0FBRUosbUJBQU87QUFGSCxTQXJCRTtBQXlCVixrQkFBVTtBQUNOLGtCQUFNLGNBQUMsTUFBRCxFQUFTLElBQVQsRUFBa0I7QUFDcEIsNENBQTBCLE1BQTFCLEdBQW1DLEtBQUssS0FBeEM7QUFDSCxhQUhLO0FBSU4sbUJBQU8sZUFBQyxNQUFELEVBQVMsSUFBVCxFQUFrQjtBQUNyQiwyQ0FBeUIsTUFBekIsR0FBa0MsS0FBSyxLQUF2QztBQUNIO0FBTks7QUF6QkEsS0FBZDs7QUFtQ0EsU0FBSyxPQUFMLEdBQWU7QUFDWCx5QkFBaUIsc0JBRE47QUFFWCxrQkFBVTtBQUNOLG1CQUFPLEdBREQ7QUFFTixrQkFBTTtBQUZBLFNBRkM7QUFNWCxpQkFBUztBQUNMLG1CQUFPLGlCQUFNO0FBQ1QsdUJBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQWE7QUFDNUIsK0JBQVcsWUFBTTtBQUNiLGdDQUFRLFdBQVcsSUFBbkI7QUFDSCxxQkFGRCxFQUVHLEdBRkg7QUFHSCxpQkFKTSxDQUFQO0FBS0gsYUFQSTtBQVFMLGtCQUFNLGdCQUFNO0FBQ1IsdUJBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQWE7QUFDNUIsK0JBQVcsWUFBTTtBQUNiLGdDQUFRLFdBQVcsVUFBbkI7QUFDSCxxQkFGRCxFQUVHLEdBRkg7QUFHSCxpQkFKTSxDQUFQO0FBS0g7QUFkSSxTQU5FO0FBc0JYLGdCQUFRO0FBQ0osbUJBQU8sT0FESDtBQUVKLGtCQUFNO0FBRkYsU0F0Qkc7QUEwQlgsa0JBQVU7QUFDTixtQkFBTyxlQUFDLE1BQUQsRUFBUyxJQUFULEVBQWtCO0FBQ3JCLDZDQUEyQixNQUEzQixHQUFvQyxLQUFLLEtBQXpDO0FBQ0gsYUFISztBQUlOLGtCQUFNLGNBQUMsTUFBRCxFQUFTLElBQVQsRUFBa0I7QUFDcEIsNENBQTBCLE1BQTFCLEdBQW1DLEtBQUssS0FBeEM7QUFDSDtBQU5LO0FBMUJDLEtBQWY7QUFtQ0gsQyIsImZpbGUiOiJRdWlja05vdGVEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9iaC9ub3ZvL2FwcHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5PVk9fUVVJQ0tfTk9URV9FTEVNRU5UUywgUXVpY2tOb3RlUmVzdWx0cywgTk9WT19MT0FESU5HX0VMRU1FTlRTIH0gZnJvbSAnLi8uLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbmltcG9ydCB7IENvZGVTbmlwcGV0IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQnO1xuXG5pbXBvcnQgQmFzaWNRdWlja05vdGVEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0Jhc2ljUXVpY2tOb3RlLmh0bWwnO1xuaW1wb3J0IEN1c3RvbVF1aWNrTm90ZURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQ3VzdG9tUXVpY2tOb3RlLmh0bWwnO1xuaW1wb3J0IEN1c3RvbVF1aWNrTm90ZVJlc3VsdHNEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0N1c3RvbVF1aWNrTm90ZVJlc3VsdHMuaHRtbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY3VzdG9tLXF1aWNrLW5vdGUtcmVzdWx0cycsXG4gICAgZGlyZWN0aXZlczogW05PVk9fTE9BRElOR19FTEVNRU5UU10sXG4gICAgaG9zdDoge1xuICAgICAgICAnY2xhc3MnOiAnYWN0aXZlIHF1aWNrLW5vdGUtcmVzdWx0cydcbiAgICB9LFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgIW1hdGNoZXMubGVuZ3RoXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDx1bCAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG1hdGNoIG9mIG1hdGNoZXNcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RNYXRjaCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIm1hdGNoPT09YWN0aXZlTWF0Y2hcIlxuICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIj5cbiAgICAgICAgICAgICAgICAqKkNVU1RPTSoqIDxiIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmxhYmVsLCB0ZXJtKVwiPjwvYj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxwIGNsYXNzPVwicGlja2VyLWVycm9yXCIgKm5nSWY9XCJoYXNFcnJvclwiPk9vcHMhIEFuIGVycm9yIG9jY3VyZWQuPC9wPlxuICAgICAgICA8cCBjbGFzcz1cInBpY2tlci1udWxsXCIgKm5nSWY9XCIhaXNMb2FkaW5nICYmICFtYXRjaGVzLmxlbmd0aCAmJiAhaGFzRXJyb3JcIj5ObyByZXN1bHRzIHRvIGRpc3BsYXkuLi48L3A+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21RdWlja05vdGVSZXN1bHRzIGV4dGVuZHMgUXVpY2tOb3RlUmVzdWx0cyB7XG59XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5RdWljayBOb3RlIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL3F1aWNrLW5vdGVcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+VGFnIEF1dG9jb21wbGV0ZTwvcD5cblxuICAgIDxici8+XG5cbiAgICA8aDU+QmFzaWMgRXhhbXBsZXM8L2g1PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHF1aWNrLW5vdGUtZGVtb1wiPiR7QmFzaWNRdWlja05vdGVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQmFzaWNRdWlja05vdGVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG4gICAgXG4gICAgPGg1PkN1c3RvbSBUcmlnZ2VyczwvaDU+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgcXVpY2stbm90ZS1kZW1vXCI+JHtDdXN0b21RdWlja05vdGVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQ3VzdG9tUXVpY2tOb3RlRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuICAgIFxuICAgIDxoNT5DdXN0b20gUmVzdWx0cyBUZW1wbGF0ZTwvaDU+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgcXVpY2stbm90ZS1kZW1vXCI+JHtDdXN0b21RdWlja05vdGVSZXN1bHRzRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkN1c3RvbVF1aWNrTm90ZVJlc3VsdHNEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncXVpY2stbm90ZS1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgZGlyZWN0aXZlczogW05PVk9fUVVJQ0tfTk9URV9FTEVNRU5UUywgQ09SRV9ESVJFQ1RJVkVTLCBDb2RlU25pcHBldF1cbn0pXG5leHBvcnQgY2xhc3MgUXVpY2tOb3RlRGVtbyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuQmFzaWNRdWlja05vdGVEZW1vVHBsID0gQmFzaWNRdWlja05vdGVEZW1vVHBsO1xuICAgICAgICB0aGlzLkN1c3RvbVF1aWNrTm90ZURlbW9UcGwgPSBDdXN0b21RdWlja05vdGVEZW1vVHBsO1xuICAgICAgICB0aGlzLkN1c3RvbVF1aWNrTm90ZVJlc3VsdHNEZW1vVHBsID0gQ3VzdG9tUXVpY2tOb3RlUmVzdWx0c0RlbW9UcGw7XG5cbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIG5vdGUgdGV4dCBoZXJlLiBSZWZlcmVuY2UgcGVvcGxlIGFuZCBkaXN0cnVidXRpb24gbGlzdHMgdXNpbmcgQCAoZWcuIEBKb2huIFNtaXRoKS4gUmVmZXJlbmNlIG90aGVyIHJlY29yZHMgdXNpbmcgIyAoZS5nLiAjUHJvamVjdCBNYW5hZ2VyKSc7XG5cbiAgICAgICAgdGhpcy5ub3RlID0gJyc7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlcyA9IHt9O1xuXG4gICAgICAgIHRoaXMubm90ZTIgPSAnSSBhbSBhbiBpbml0aWFsIG5vdGUhJztcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzMiA9IHt9O1xuXG4gICAgICAgIHRoaXMubm90ZTMgPSAnJztcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzMyA9IHt9O1xuXG4gICAgICAgIGxldCBjdXN0b21EYXRhID0ge1xuICAgICAgICAgICAgdGFnczogW3sgaWQ6IDEsIG5hbWU6ICdPSCBZQSEnLCB0ZXN0OiAnVFdPJyB9LCB7IGlkOiAyLCBuYW1lOiAnVEFHR0lORyEnLCB0ZXN0OiAnT05FJyB9XSxcbiAgICAgICAgICAgIHJlZmVyZW5jZXM6IFt7IGlkOiAxLCB0aXRsZTogJ0F3ZXNvbWUgUmVmZXJlbmNlJyB9LCB7IGlkOiAyLCB0aXRsZTogJ0FuZ3VsYXIyJyB9XVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgdHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgICB0YWdzOiAnQCcsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogJyMnLFxuICAgICAgICAgICAgICAgIGJvb3M6ICdeJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB0YWdzOiBbJ0ZpcnN0JywgJ1NlY29uZCddLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZXM6IFsnVGhpcmQnLCAnRm9ydGgnXSxcbiAgICAgICAgICAgICAgICBib29zOiBbJ1Rlc3QnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbmRlcmVyOiB7XG4gICAgICAgICAgICAgICAgdGFnczogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxhIGNsYXNzPVwidGFnXCI+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxhIGNsYXNzPVwidGFnXCI+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9vczogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxzdHJvbmc+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvc3Ryb25nPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY3VzdG9tID0ge1xuICAgICAgICAgICAgdHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgICB3aG9zOiAnQCcsXG4gICAgICAgICAgICAgICAgd2hhdHM6ICcjJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB3aG9zOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjdXN0b21EYXRhLnRhZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB3aGF0czogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY3VzdG9tRGF0YS5yZWZlcmVuY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICB3aG9zOiAnJG5hbWUgJHRlc3QnLFxuICAgICAgICAgICAgICAgIHdoYXRzOiAnJHRpdGxlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbmRlcmVyOiB7XG4gICAgICAgICAgICAgICAgd2hvczogKHN5bWJvbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxhIGNsYXNzPVwiV0hPU1wiPiR7c3ltYm9sfSR7aXRlbS5sYWJlbH08L2E+YDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdoYXRzOiAoc3ltYm9sLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGEgY2xhc3M9XCJ0YWdcIj4ke3N5bWJvbH0ke2l0ZW0ubGFiZWx9PC9hPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY3VzdG9tMiA9IHtcbiAgICAgICAgICAgIHJlc3VsdHNUZW1wbGF0ZTogQ3VzdG9tUXVpY2tOb3RlUmVzdWx0cyxcbiAgICAgICAgICAgIHRyaWdnZXJzOiB7XG4gICAgICAgICAgICAgICAgbmFtZXM6ICdAJyxcbiAgICAgICAgICAgICAgICB0YWdzOiAnIydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgbmFtZXM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGN1c3RvbURhdGEudGFncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRhZ3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGN1c3RvbURhdGEucmVmZXJlbmNlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgbmFtZXM6ICckbmFtZScsXG4gICAgICAgICAgICAgICAgdGFnczogJyR0aXRsZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW5kZXJlcjoge1xuICAgICAgICAgICAgICAgIG5hbWVzOiAoc3ltYm9sLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGEgY2xhc3M9XCJuYW1lc1wiPiR7c3ltYm9sfSR7aXRlbS5sYWJlbH08L2E+YDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRhZ3M6IChzeW1ib2wsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YSBjbGFzcz1cInRhZ3NcIj4ke3N5bWJvbH0ke2l0ZW0ubGFiZWx9PC9hPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 881:
/***/ function(module, exports) {

	module.exports = "<novo-quick-note [(ngModel)]=\"note\" [references]=\"references\" [placeholder]=\"placeholder\" [config]=\"config\"></novo-quick-note>\n<div class=\"data\">\n    <p>Note: {{note}}</p>\n    <p>References: {{references | json}}</p>\n</div>\n"

/***/ },

/***/ 882:
/***/ function(module, exports) {

	module.exports = "<novo-quick-note [(ngModel)]=\"note2\" [references]=\"references2\" [placeholder]=\"placeholder\" [config]=\"custom\"></novo-quick-note>\n<div class=\"data\">\n    <p>Note: {{note2}}</p>\n    <p>References: {{references2 | json}}</p>\n</div>\n"

/***/ },

/***/ 883:
/***/ function(module, exports) {

	module.exports = "<novo-quick-note [(ngModel)]=\"note3\" [references]=\"references3\" [placeholder]=\"placeholder\" [config]=\"custom2\"></novo-quick-note>\n<div class=\"data\">\n    <p>Note: {{note3}}</p>\n    <p>References: {{references3 | json}}</p>\n</div>\n"

/***/ }

});
//# sourceMappingURL=9.837d3e023d20a54cc6f6.bundle.map