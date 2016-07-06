webpackJsonp([26],{

/***/ 1166:
/***/ function(module, exports) {

	module.exports = "<header class=\"design container\">\n    <div>\n        <h1 class=\"title\">Composition</h1>\n        <h2 class=\"sub-title\">A universal language</h2>\n        <p class=\"description\">\n            Comprehensive design principles and language helps maintain\n            usability and a sense of harmony across a large family\n            of products. Consistency and common elements greatly\n            reduce the user effort requred to learn a new interface.\n        </p>\n    </div>\n    <img src=\"assets/images/CompositionPageIcon.svg\" alt=\"\"/>\n</header>\n\n<section class=\"design container\">\n    <h2>Mainframe</h2>\n    <p>\n        The Mainframe refers to the permanently fixed portions of\n        the application that never change. It contains the primary\n        navigation and core functions.\n    </p>\n\n    <aside class=\"design-principle\" style=\"margin-top: 60px;\">\n        <h6>Design Principles:\n            <span>Hierarchy &amp; Unity</span>\n        </h6>\n        <p>\n            Unity implies relation through proximity, size, and color.\n            Making elements clearly distinct or unified helps\n            create a strong visual hierarchy. This is important\n            because it helps to easily differentiate the level\n            of importance between different elements, and controls\n            a user's cognitive flow.\n        </p>\n    </aside>\n\n    <article>\n        <h5>Top Frame</h5>\n        <p>\n            The top frame contains key functions (Find, Add) and navigation\n            to the Resource Center and to User Profile options.\n        </p>\n        <img src=\"assets/images/LayoutMainframeTopFrame.svg\" alt=\"mainframe\"/>\n    </article>\n\n    <article>\n        <h5>Bowling Alley</h5>\n        <p>\n            The bowling alley is where all active items are displayed, allowing\n            users to easily shift between them.\n        </p>\n        <img class=\"bowling-alley\" src=\"assets/images/LayoutMainframeBowlingAlley.svg\" alt=\"bowling alley\"/>\n    </article>\n\n    <article>\n        <h5>Menu</h5>\n        <p>\n            The menu functions as the primary navigation for the application.\n            It contains links to every list, the dashboard, admin\n            functions, tools, and third-party applications. The\n            items on the menu can be toggled, grouped, and organized\n            however the user wishes.\n        </p>\n        <img class=\"menu\" src=\"assets/images/LayoutMainframeMenu.svg\" alt=\"menu\"/>\n    </article>\n\n    <h2>Headers</h2>\n    <p>\n        Headers hold key information and controls for a page. They serve\n        as a wayfinding marker to help the user understand context\n        and easily access important actions.\n    </p>\n\n    <article>\n        <h5>Overviews &amp; Slideouts</h5>\n        <p>\n            Overview and Slideout headers are dominant features which focus\n            the user's attention to the context of a particular\n            record and contains key information on the left,\n            and actions on the right. These headers inherit the\n            color of the entity type.\n        </p>\n        <img src=\"assets/images/LayoutMainframeHeaderOverview.svg\" alt=\"overview header\"/>\n    </article>\n\n    <article>\n        <h5>List Headers</h5>\n        <p>\n            List headers contain the filter and column controls for the list\n            and the primary actions. They are fixed so that results\n            can eaily be modified and actioned regardless of\n            scrolling position.\n        </p>\n        <img src=\"assets/images/LayoutMainframeHeaderList.svg\" alt=\"list header\"/>\n    </article>\n\n    <aside class=\"design-principle\">\n        <h6>Design Principles:\n            <span>Navigation &amp; Consistency</span>\n        </h6>\n        <p>A consistent navigation structure allows users to master\n            an interface much more quickly, as they know that\n            certain functions are always in the same place. We\n            use headers to provide quick access to key functions\n            and aid findability of data in a complex system.\n        </p>\n    </aside>\n\n    <article>\n        <h5>Add &amp; Edit Pages</h5>\n        <p>\n            The headers of Add and Edit pages generally serve as a simple\n            visual element to help provide context.\n        </p>\n        <img src=\"assets/images/LayoutMainframeHeaderEditPage.svg\" alt=\"add page header\"/>\n    </article>\n\n    <h2>Cards</h2>\n    <p>\n        Essential to our design paradigm, cards are independent blocks\n        of information. They can contain text, tables, and data\n        visualizations. They offer a curated view of data. Bringing\n        the most pertinent information to the forefont, they\n        allow users to scan large amounts of data quickly.\n    </p>\n\n    <article>\n        <h5>Basic Structure</h5>\n        <p>\n            Cards have a header which contains the card title and the card\n            controls. The controls can vary depending on card\n            type, gut generally include move, refresh, configure,\n            and remove. The content area has padding by default\n            but can also run edge-to-edge. Pulse cards have a\n            special icon next to the title.\n        </p>\n        <img src=\"assets/images/LayoutMainframeCardsNPSCard.svg\" alt=\"card\"/>\n    </article>\n\n    <aside class=\"design-principle\">\n        <h6>Design Principle:\n            <span>Cards</span>\n        </h6>\n        <p>\n            The card system scales easily, both in individual size\n            and in groups. Because of this, cards are essential\n            to our design language. Cards balance and align very\n            easily, promoting findability. These handy little\n            containers also provide a contextually relevant home\n            for all content.\n        </p>\n        <div class=\"hint\">\n            <span>\n                <i class=\"bhi-idea\"></i>\n                <strong>Hint: </strong>This is a great place for third-party\n                developers to fit into the Bullhorn system.</span>\n            <!--TODO - add back in when cards are put in-->\n            <!--<a class=\"link\" [routerLink]=\"['/Cards']\">-->\n                <!--<i class=\"bhi-link\"></i>-->\n                <!--<strong>Are you a developer?</strong> Check out card-->\n                <!--markup and documentation here-->\n            <!--</a>-->\n        </div>\n    </aside>\n\n    <article>\n        <h5>Dashboard &amp; Overviews</h5>\n        <p>\n            Dashboards and Records Overviews are the primary home for our\n            cards. They offer a customizable workspace to arrange\n            and configure to most appropriately fit the user's\n            needs. Cards have a fixed height, but mildly flexible\n            width. They can also be expanded to full-screen.\n            The \"add card\" control is always located in the top\n            right, to be consistent with the placement of action\n            buttons on tables and lists.\n        </p>\n        <img class=\"dashboard\" src=\"assets/images/LayoutMainframeCardsDashboard.svg\" alt=\"dashboard cards\"/>\n    </article>\n\n    <article>\n        <h5>Slideouts and Mobile</h5>\n        <p>\n            Cards are so flexible, they also work well in a mobile setting.\n            They help users to easily scan chunks of information\n            and find what they need.\n        </p>\n        <img class=\"mobile\" src=\"assets/images/LayoutMobileCard.svg\" alt=\"mobile cards\"/>\n    </article>\n</section>\n"

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Layout = undefined;
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _Layout = __webpack_require__(1166);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Layout = exports.Layout = (_dec = (0, _core.Component)({
	    selector: 'layout',
	    template: _Layout2.default
	}), _dec(_class = function Layout() {
	    _classCallCheck(this, Layout);
	}) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvbGF5b3V0L0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7SUFNYSxNLFdBQUEsTSxXQUpaLHFCQUFVO0FBQ1AsY0FBVSxRQURIO0FBRVA7QUFGTyxDQUFWLEMiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vTGF5b3V0Lmh0bWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xheW91dCcsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXG59KVxuZXhwb3J0IGNsYXNzIExheW91dCB7XG59XG4iXX0=

/***/ }

});
//# sourceMappingURL=26.074c3111596aa21ee7fc.bundle.map