webpackJsonp([25],{

/***/ 1204:
/***/ function(module, exports) {

	module.exports = "<header class=\"design container\">\n    <div>\n        <h1 class=\"title\">Typography</h1>\n        <h2 class=\"sub-title\">Roboto, not robotic.</h2>\n\n        <p class=\"description\">\n            Roboto's refined letterforms combine geometry with open, rounded features to create a structured, yet friendly typeface. It maintains a human-like quality while expressing a clean and modern aesthetic.\n        </p>\n        <a href=\"https://www.google.com/fonts/specimen/Roboto\" target=\"_blank\"><i class=\"bhi-link\"></i> Roboto Typeface on Google Fonts</a>\n    </div>\n    <img src=\"assets/images/TypographyPageIcon.svg\" alt=\"\"/>\n</header>\n\n<section class=\"design container\">\n    <!-- <img src=\"assets/images/TypographyPrinciplesBalance.svg\" alt=\"Right\" height=\"180\"> -->\n    <!-- <img src=\"assets/images/TypographyPrinciplesClarity.svg\" alt=\"\"/> -->\n    <aside class=\"design-principle\">\n        <h6>Design Principle: <span>Clarity</span></h6>\n        <p>Proper line length, adequate white space, and appropriate line breaks\n            are necessary to preserve readability, rhythm, and overall clarity.</p>\n    </aside>\n\n    <article class=\"line-height\">\n        <h5>Line Height</h5>\n\n        <div>\n            <p style=\"line-height: 1em;\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n\n            <p class=\"not-accepted\">\n                <i class=\"bhi-close-o\"></i>These lines are too close for comfort\n            </p>\n        </div>\n        <div>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n\n            <p class=\"accepted\">\n                <i class=\"bhi-check\"></i>Thumbs up for great readability\n            </p>\n        </div>\n        <div>\n            <p style=\"line-height: 2.8em;\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n\n            <p class=\"not-accepted\">\n                <i class=\"bhi-close-o\"></i>I'm losing focus with all this space\n            </p>\n        </div>\n    </article>\n\n    <aside class=\"design-principle\">\n        <h6>Design Principle: <span>Balance</span></h6>\n        <p>Typographic balance is critical to readability and understanding\n            information hierarchy. The weight and size of the font helps determine\n            which element on a page receives a user’s attention first.</p>\n    </aside>\n\n    <article class=\"line-length\">\n        <h5>Line Length</h5>\n\n        <div class=\"too-short\">\n            <div class=\"ruler\">\n                <hr>\n                <span>30</span>\n\n                <p class=\"not-accepted\">\n                    <i class=\"bhi-close-o\"></i>Short lines interrupt the reader's rhythm\n                </p>\n            </div>\n            <p style=\"width: 15em;\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n        </div>\n        <div class=\"just-right\">\n            <div class=\"ruler\">\n                <hr>\n                <span>55-75</span>\n\n                <p class=\"accepted\">\n                    <i class=\"bhi-check\"></i>Optimal line length for readability\n                </p>\n            </div>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n        </div>\n        <div class=\"too-long\">\n            <div class=\"ruler\">\n                <hr>\n                <span>100</span>\n\n                <p class=\"not-accepted\">\n                    <i class=\"bhi-close-o\"></i>Difficult to jump to the next line\n                </p>\n            </div>\n            <p style=\"width: 55em; max-width: 100%;\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor.\n            </p>\n        </div>\n    </article>\n\n    <aside class=\"imp-note\">\n        <h6><i class=\"bhi-mobile\"></i>How does this work with responsive design?</h6>\n        <p>\n            Line length is always relative to its font-size. This means that if a\n            font scales up or down in sizing (relative to its device's screen size) the\n            line length will automatically scale with it. Line length is about maintaining\n            a comfortable reading flow and rhythm from line to line.\n            <br><br>\n            <strong>When implementing</strong>, native line length will always be secondary to the width of\n            the text's container. This means that if a screen's width is smaller than\n            the text's native line length, the text will wrap early.\n        </p>\n    </aside>\n\n    <h2>Styles</h2>\n    <p>There a number of general styles that are present throughout the application. To maintain consistency, these styles should be adhered to as much as possible.</p>\n\n    <div class=\"example\">\n        <div class=\"type-group\">\n            <h1>Header 1</h1>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>2.5em (35px)</span>\n            <span><strong>Weight: </strong>400</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.45em 0 0.35em</span>\n        </div>\n        <div class=\"type-group\">\n            <h2>Header 2</h2>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>2em (28px)</span>\n            <span><strong>Weight: </strong>500</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.75em 0 0.3em</span>\n        </div>\n        <div class=\"type-group\">\n            <h3>Header 3</h3>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>1.75em (24px)</span>\n            <span><strong>Weight: </strong>300</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.6em 0 0.4em</span>\n        </div>\n        <div class=\"type-group\">\n            <h4>Header 4</h4>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>1.375em (19.25px)</span>\n            <span><strong>Weight: </strong>400</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.75em 0 0.5em</span>\n        </div>\n        <div class=\"type-group\">\n            <h5>Header 5</h5>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>1.125em (15.75px)</span>\n            <span><strong>Weight: </strong>700</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.75em 0 0.25em</span>\n            <span><strong>Transform: </strong>UPPERCASE</span>\n        </div>\n        <div class=\"type-group\">\n            <h6>Header 6</h6>\n            <span>Roboto</span>\n            <span><strong>Size: </strong>1.125em (15.75px)</span>\n            <span><strong>Weight: </strong>500</span>\n            <span><strong>Margin: </strong>0</span>\n            <span><strong>Padding: </strong>0.75em 0 0.25em</span>\n        </div>\n        <div class=\"type-group\">\n            <span class=\"caption\">Caption</span>\n        </div>\n    </div>\n    <pre><code>\n        &lt;h1&gt;Heading 1&lt;/h1&gt;\n        &lt;h2&gt;Heading 2&lt;/h2&gt;\n        &lt;h3&gt;Heading 3&lt;/h3&gt;\n        &lt;h4&gt;Heading 4&lt;/h4&gt;\n        &lt;h5&gt;Heading 5&lt;/h5&gt;\n        &lt;h6&gt;Heading 6&lt;/h6&gt;\n        &lt;p&gt;\n        Body\n        &lt;/p&gt;\n        &lt;hr&gt;\n        &lt;span class=\"caption\"&gt;Caption&lt;/span&gt;</code>\n    </pre>\n</section>\n"

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Typography = undefined;
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _Typography = __webpack_require__(1204);
	
	var _Typography2 = _interopRequireDefault(_Typography);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Typography = exports.Typography = (_dec = (0, _core.Component)({
	    selector: 'typography',
	    template: _Typography2.default
	}), _dec(_class = function Typography() {
	    _classCallCheck(this, Typography);
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdHlwb2dyYXBoeS9UeXBvZ3JhcGh5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7OztJQU1hLFUsV0FBQSxVLFdBSloscUJBQVU7QUFDUCxjQUFVLFlBREg7QUFFUDtBQUZPLENBQVYsQyIsImZpbGUiOiJUeXBvZ3JhcGh5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vVHlwb2dyYXBoeS5odG1sJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0eXBvZ3JhcGh5JyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgVHlwb2dyYXBoeSB7XG59XG4iXX0=

/***/ }

});
//# sourceMappingURL=25.84cdffeb51aaa51e193c.bundle.map