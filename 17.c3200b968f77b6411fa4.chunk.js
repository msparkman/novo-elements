webpackJsonp([17],{

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

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TilesDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(5);
	
	var _novoElements = __webpack_require__(15);
	
	var _CodeSnippet = __webpack_require__(1132);
	
	var _TilesDemo = __webpack_require__(1198);
	
	var _TilesDemo2 = _interopRequireDefault(_TilesDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Tiles <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/tiles">(source)</a></small></h1>\n    <p>\n        This component is intended to behave akin to the radio button component.\n    </p>\n    <h4>Demo</h4>\n    <div>' + _TilesDemo2.default + '</div>\n    <br>\n    You have picked: <strong>{{ currentColor || \'No selection\' }}</strong>\n    <h4>Code</h4>\n    <code-snippet [code]="TilesDemoTpl"></code-snippet>\n</div>\n';
	
	var TilesDemo = exports.TilesDemo = (_dec = (0, _core.Component)({
	    selector: 'tiles-demo',
	    template: template,
	    directives: [_novoElements.NOVO_TILES_ELEMENTS, _CodeSnippet.CodeSnippet, _common.CORE_DIRECTIVES]
	}), _dec(_class = function () {
	    function TilesDemo() {
	        _classCallCheck(this, TilesDemo);
	
	        this.TilesDemoTpl = _TilesDemo2.default;
	        this.demoTiles = [{
	            label: 'Red',
	            value: 'red'
	        }, {
	            label: 'Green',
	            value: 'green'
	        }, {
	            label: 'Blue',
	            value: 'blue'
	        }];
	    }
	
	    _createClass(TilesDemo, [{
	        key: 'colorSelect',
	        value: function colorSelect(newColorValue) {
	            this.currentColor = newColorValue;
	        }
	    }]);
	
	    return TilesDemo;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdGlsZXMvVGlsZXNEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7O0FBRUEsSUFBTSwyZ0JBQU47O0lBd0JhLFMsV0FBQSxTLFdBVFoscUJBQVU7QUFDUCxjQUFVLFlBREg7QUFFUCxjQUFVLFFBRkg7QUFHUCxnQkFBWTtBQUhMLENBQVYsQztBQVVHLHlCQUFjO0FBQUE7O0FBQ1YsYUFBSyxZQUFMO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLENBQ2I7QUFDSSxtQkFBTyxLQURYO0FBRUksbUJBQU87QUFGWCxTQURhLEVBS2I7QUFDSSxtQkFBTyxPQURYO0FBRUksbUJBQU87QUFGWCxTQUxhLEVBU2I7QUFDSSxtQkFBTyxNQURYO0FBRUksbUJBQU87QUFGWCxTQVRhLENBQWpCO0FBY0g7Ozs7b0NBRVcsYSxFQUFlO0FBQ3ZCLGlCQUFLLFlBQUwsR0FBb0IsYUFBcEI7QUFDSCIsImZpbGUiOiJUaWxlc0RlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JyaWFua2ltYmFsbC9Ob3ZvL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5PVk9fVElMRVNfRUxFTUVOVFMgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuaW1wb3J0IHsgQ29kZVNuaXBwZXQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9jb2Rlc25pcHBldC9Db2RlU25pcHBldCc7XG5cbmltcG9ydCBUaWxlc0RlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVGlsZXNEZW1vLmh0bWwnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+VGlsZXMgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvdGlsZXNcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+XG4gICAgICAgIFRoaXMgY29tcG9uZW50IGlzIGludGVuZGVkIHRvIGJlaGF2ZSBha2luIHRvIHRoZSByYWRpbyBidXR0b24gY29tcG9uZW50LlxuICAgIDwvcD5cbiAgICA8aDQ+RGVtbzwvaDQ+XG4gICAgPGRpdj4ke1RpbGVzRGVtb1RwbH08L2Rpdj5cbiAgICA8YnI+XG4gICAgWW91IGhhdmUgcGlja2VkOiA8c3Ryb25nPnt7IGN1cnJlbnRDb2xvciB8fCAnTm8gc2VsZWN0aW9uJyB9fTwvc3Ryb25nPlxuICAgIDxoND5Db2RlPC9oND5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlRpbGVzRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RpbGVzLWRlbW8nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIE5PVk9fVElMRVNfRUxFTUVOVFMsXG4gICAgICAgIENvZGVTbmlwcGV0LFxuICAgICAgICBDT1JFX0RJUkVDVElWRVNcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFRpbGVzRGVtbyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuVGlsZXNEZW1vVHBsID0gVGlsZXNEZW1vVHBsO1xuICAgICAgICB0aGlzLmRlbW9UaWxlcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1JlZCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdyZWQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnR3JlZW4nLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZ3JlZW4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQmx1ZScsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdibHVlJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGNvbG9yU2VsZWN0KG5ld0NvbG9yVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29sb3IgPSBuZXdDb2xvclZhbHVlO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 1198:
/***/ function(module, exports) {

	module.exports = "<novo-tiles [options]=\"demoTiles\" (changed)=\"colorSelect($event)\" [(ngModel)]=\"value\"></novo-tiles>\n"

/***/ }

});
//# sourceMappingURL=17.c3200b968f77b6411fa4.bundle.map