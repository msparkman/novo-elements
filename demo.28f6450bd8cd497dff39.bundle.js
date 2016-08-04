webpackJsonp([34],{

/***/ 753:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.main = main;
	
	var _platformBrowserDynamic = __webpack_require__(329);
	
	var _browser = __webpack_require__(646);
	
	var _environment = __webpack_require__(647);
	
	var _App = __webpack_require__(642);
	
	__webpack_require__(753);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * Bootstrap our Angular app with a top level component `App` and inject
	 * our Services and Providers into Angular's dependency injection
	 */
	function main() {
	    return (0, _platformBrowserDynamic.bootstrap)(_App.DemoApp, [].concat(_toConsumableArray(_browser.PLATFORM_PROVIDERS), _toConsumableArray(_environment.ENV_PROVIDERS)))
	    // .then(decorateComponentRef)
	    .catch(function (err) {
	        return console.error(err);
	    }); // eslint-disable-line
	}
	
	// Hot Module Reload
	// experimental version by @gdi2290
	if (false) {
	    // activate hot module reload
	    var ngHmr = require('angular2-hmr');
	    ngHmr.hotModuleReplacement(main, module);
	} else {
	    // bootstrap when document is ready
	    document.addEventListener('DOMContentLoaded', function () {
	        return main();
	    });
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vbWFpbi5icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O1FBV2dCLEksR0FBQSxJOztBQVhoQjs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7O0FBSU8sU0FBUyxJQUFULEdBQWdCO0FBQ25CLFdBQU87QUFJUDtBQUpPLEtBS0YsS0FMRSxDQUtJO0FBQUEsZUFBTyxRQUFRLEtBQVIsQ0FBYyxHQUFkLENBQVA7QUFBQSxLQUxKLENBQVAsQ0FEbUIsQ0FNb0I7QUFDMUM7O0FBR0Q7QUFDQTtBQUNBLElBQUksUUFBUSxhQUFSLElBQXlCLFFBQVEsSUFBckMsRUFBMkM7QUFDdkM7QUFDQSxRQUFJLFFBQVEsUUFBUSxjQUFSLENBQVo7QUFDQSxVQUFNLG9CQUFOLENBQTJCLElBQTNCLEVBQWlDLE1BQWpDO0FBQ0gsQ0FKRCxNQUlPO0FBQ0g7QUFDQSxhQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QztBQUFBLGVBQU0sTUFBTjtBQUFBLEtBQTlDO0FBQ0giLCJmaWxlIjoibWFpbi5icm93c2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9ub3ZvLWRldi9saWJzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290c3RyYXAgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuXG5pbXBvcnQgeyBQTEFURk9STV9QUk9WSURFUlMgfSBmcm9tICcuL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHsgRU5WX1BST1ZJREVSUyB9IGZyb20gJy4vcGxhdGZvcm0vZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgRGVtb0FwcCB9IGZyb20gJy4vcGFnZXMvYXBwL0FwcCc7XG5pbXBvcnQgJy4vZGVtby5zY3NzJztcblxuLyoqXG4gKiBCb290c3RyYXAgb3VyIEFuZ3VsYXIgYXBwIHdpdGggYSB0b3AgbGV2ZWwgY29tcG9uZW50IGBBcHBgIGFuZCBpbmplY3RcbiAqIG91ciBTZXJ2aWNlcyBhbmQgUHJvdmlkZXJzIGludG8gQW5ndWxhcidzIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuICAgIHJldHVybiBib290c3RyYXAoRGVtb0FwcCwgW1xuICAgICAgICAuLi5QTEFURk9STV9QUk9WSURFUlMsXG4gICAgICAgIC4uLkVOVl9QUk9WSURFUlNcbiAgICBdKVxuICAgIC8vIC50aGVuKGRlY29yYXRlQ29tcG9uZW50UmVmKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn1cblxuXG4vLyBIb3QgTW9kdWxlIFJlbG9hZFxuLy8gZXhwZXJpbWVudGFsIHZlcnNpb24gYnkgQGdkaTIyOTBcbmlmIChFTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgSE1SID09PSB0cnVlKSB7XG4gICAgLy8gYWN0aXZhdGUgaG90IG1vZHVsZSByZWxvYWRcbiAgICBsZXQgbmdIbXIgPSByZXF1aXJlKCdhbmd1bGFyMi1obXInKTtcbiAgICBuZ0htci5ob3RNb2R1bGVSZXBsYWNlbWVudChtYWluLCBtb2R1bGUpO1xufSBlbHNlIHtcbiAgICAvLyBib290c3RyYXAgd2hlbiBkb2N1bWVudCBpcyByZWFkeVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiBtYWluKCkpO1xufVxuIl19

/***/ },

/***/ 755:
/***/ function(module, exports) {

	module.exports = "<nav class=\"main-nav\" [ngClass]=\"{open: menuOpen}\">\n    <span class=\"logo\">\n        <svg [routerLink]=\"['/Home']\" data-name=\"novo-logo\" xmlns=\"http://www.w3.org/2000/svg\"\n             viewBox=\"0 0 400 400\" class=\"{% if page.url != '/' %}site-avatar{% endif %}\">\n            <defs></defs>\n            <title>NovoBranding</title>\n            <circle class=\"center-dot\" cx=\"200.18\" cy=\"197.5\" r=\"28.65\"/>\n            <path class=\"outer-ring\" d=\"M371,178.06C362,98.75,298.92,35.6,219.6,26.65a19.88,19.88,0,0,0-38.84,0c-79.32,9-142.43,72.11-151.4,151.43a19.88,19.88,0,0,0,0,38.85c9,79.32,72.07,142.47,151.4,151.43a19.88,19.88,0,0,0,38.84,0c79.32-9,142.43-72.1,151.4-151.42A19.88,19.88,0,0,0,371,178.06ZM192.56,25.72a9.25,9.25,0,0,1,1-1.18l0.26-.27a9.31,9.31,0,0,1,1.17-1l0.24-.15a9.13,9.13,0,0,1,1.22-.66l0.26-.12a9.17,9.17,0,0,1,1.49-.46l0.34-.07a8.29,8.29,0,0,1,3.32,0l0.34,0.07a9.17,9.17,0,0,1,1.49.46l0.26,0.12a9.13,9.13,0,0,1,1.22.66l0.24,0.15a9.31,9.31,0,0,1,1.17,1l0.26,0.27a9.25,9.25,0,0,1,1,1.18,9.1,9.1,0,0,1-.29,10.68h0a9.28,9.28,0,0,1-1.27,1.36l-0.42.35a9.1,9.1,0,0,1-.89.62,9.21,9.21,0,0,1-.87.47l-0.5.22a9,9,0,0,1-1.38.43l-0.34.06a8.24,8.24,0,0,1-3.3,0l-0.34-.06a9,9,0,0,1-1.38-.43l-0.5-.22a9.21,9.21,0,0,1-.87-0.47,9.1,9.1,0,0,1-.89-0.62l-0.42-.35a9.28,9.28,0,0,1-1.27-1.36h0A9.1,9.1,0,0,1,192.56,25.72ZM28.39,205.09a9.25,9.25,0,0,1-1.14-.94l-0.3-.3a9.26,9.26,0,0,1-.94-1.14l-0.16-.26a9.09,9.09,0,0,1-.65-1.19c0-.09-0.09-0.18-0.13-0.28a9.1,9.1,0,0,1-.46-1.49c0-.11,0-0.23-0.07-0.34a8.27,8.27,0,0,1,0-3.31c0-.12,0-0.23.07-0.34a9.1,9.1,0,0,1,.46-1.49c0-.1.09-0.19,0.13-0.28a9.09,9.09,0,0,1,.65-1.19l0.16-.26a9.22,9.22,0,0,1,.94-1.14l0.3-.3a9.11,9.11,0,0,1,13.2.59c0.13,0.14.25,0.29,0.37,0.44a9.22,9.22,0,0,1,1.08,1.75c0.08,0.16.15,0.33,0.22,0.49a9.08,9.08,0,0,1,.43,1.39c0,0.11,0,.23.06,0.34a8.22,8.22,0,0,1,0,3.29c0,0.11,0,.23-0.06.34a9.08,9.08,0,0,1-.43,1.39c-0.07.17-.15,0.33-0.22,0.49a9.22,9.22,0,0,1-1.08,1.75c-0.12.15-.24,0.3-0.37,0.44A9.12,9.12,0,0,1,28.39,205.09ZM200.18,374a9.21,9.21,0,1,1,9.21-9.21A9.22,9.22,0,0,1,200.18,374ZM219,357.67a19.86,19.86,0,0,0-37.59,0A161.56,161.56,0,0,1,40,216.29a19.86,19.86,0,0,0,0-37.58A161.56,161.56,0,0,1,181.38,37.32a19.86,19.86,0,0,0,37.59,0,161.56,161.56,0,0,1,141.35,141.4,19.86,19.86,0,0,0,0,37.55A161.56,161.56,0,0,1,219,357.67Zm147.84-151A9.21,9.21,0,1,1,376,197.5,9.22,9.22,0,0,1,366.81,206.7Z\"\n            />\n            <path class=\"inner-ring\" d=\"M219.76,103.11a19.86,19.86,0,0,0-39.17,0,96.4,96.4,0,0,0,0,188.78,19.86,19.86,0,0,0,39.17,0A96.4,96.4,0,0,0,219.76,103.11Zm-19.58-5.87a9.17,9.17,0,0,1,5.9,16.22l-0.25.2a9.11,9.11,0,0,1-1,.67c-0.26.16-.53,0.31-0.8,0.44l-0.55.24a8.92,8.92,0,0,1-1.35.42l-0.33.06a8.24,8.24,0,0,1-3.3,0l-0.33-.06a8.92,8.92,0,0,1-1.35-.42l-0.55-.24c-0.28-.13-0.54-0.28-0.8-0.44a9.11,9.11,0,0,1-1-.67l-0.25-.2A9.17,9.17,0,0,1,200.18,97.24ZM207.54,294a9.21,9.21,0,0,1-.61.74c-0.13.15-.27,0.29-0.41,0.43a9.25,9.25,0,0,1-1.06.87l-0.41.26a9.11,9.11,0,0,1-1.07.58l-0.31.15a9.08,9.08,0,0,1-1.47.46l-0.38.07a8.22,8.22,0,0,1-3.29,0l-0.38-.07a9.08,9.08,0,0,1-1.47-.46l-0.31-.15a9.11,9.11,0,0,1-1.07-.58l-0.41-.26a9.25,9.25,0,0,1-1.06-.87c-0.14-.14-0.27-0.29-0.41-0.43a9.08,9.08,0,0,1,.85-13.22l0.25-.2a9.11,9.11,0,0,1,1-.67c0.26-.16.53-0.31,0.8-0.44l0.55-.24a8.92,8.92,0,0,1,1.35-.42l0.33-.06a8.24,8.24,0,0,1,3.3,0l0.33,0.06a8.92,8.92,0,0,1,1.35.42l0.55,0.24c0.28,0.13.54,0.28,0.8,0.44a9.11,9.11,0,0,1,1,.67l0.25,0.2A9.06,9.06,0,0,1,207.54,294Zm11.1-12.84a19.86,19.86,0,0,0-36.92,0,85.7,85.7,0,0,1,0-167.38,19.86,19.86,0,0,0,36.92,0A85.7,85.7,0,0,1,218.63,281.19Z\"\n            />\n        </svg>\n        <svg [routerLink]=\"['/Home']\" data-name=\"bullhorn-text\" version=\"1.1\"\n            xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n            x=\"0px\" y=\"0px\" width=\"240.2px\" height=\"48.8px\" viewBox=\"0 0 240.2 48.8\"\n            style=\"enable-background:new 0 0 240.2 48.8;\" xml:space=\"preserve\">\n            <style type=\"text/css\">\n                .st0 {\n                    fill: #FFFFFF;\n                }\n            </style>\n            <defs></defs>\n            <g>\n                <path class=\"st0\" d=\"M0,1.5c0-0.6,0.5-1.1,1.1-1.1h20c5.4,0,9.5,1.4,12.3,4.2c2.1,2.1,3.2,4.7,3.2,7.8v0.1c0,1.4-0.2,2.6-0.6,3.8\n                c-0.4,1.1-0.9,2.1-1.5,2.9c-0.6,0.8-1.3,1.6-2.1,2.2c-0.2,0.2-0.4,0.3-0.7,0.5c-0.7,0.5-0.6,1.6,0.1,1.9c1.9,0.9,3.4,1.9,4.7,3.2\n                c1.7,1.7,2.6,4.2,2.6,7.4v0.1c0,2.1-0.4,4-1.2,5.6c-0.8,1.6-2,3-3.5,4c-1.5,1.1-3.4,1.9-5.5,2.5c-2.1,0.6-4.5,0.8-7.2,0.8H1.1\n                C0.5,47.5,0,47,0,46.4V1.5z M19.4,20.3c2.7,0,4.8-0.5,6.5-1.6c1.6-1,2.4-2.6,2.4-4.8v-0.1c0-1.9-0.7-3.3-2.1-4.4\n                c-1.4-1-3.5-1.6-6.2-1.6H9.3c-0.6,0-1.1,0.5-1.1,1.1v10.2c0,0.6,0.5,1.1,1.1,1.1H19.4z M21.8,40.1c2.8,0,5-0.5,6.7-1.6\n                c1.6-1.1,2.4-2.7,2.4-4.8v-0.1c0-2-0.8-3.6-2.4-4.6c-1.6-1.1-4-1.6-7.3-1.6h-12c-0.6,0-1.1,0.5-1.1,1.1V39c0,0.6,0.5,1.1,1.1,1.1\n                H21.8z\" />\n                <path class=\"st0\" d=\"M81.3,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3h-5.9c-0.7,0-1.3-0.6-1.3-1.3v-45\n                C80.1,0.6,80.6,0,81.3,0z\" />\n                <path class=\"st0\" d=\"M96,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3H96c-0.7,0-1.3-0.6-1.3-1.3v-45\n                C94.8,0.6,95.3,0,96,0z\" />\n                <path class=\"st0\" d=\"M109.5,0l4,0c2.3,0,4.2,1.9,4.2,4.2v13.3c0.9-0.9,2.1-1.9,3.7-2.8c1.6-0.9,3.7-1.4,6.3-1.4c2,0,3.9,0.3,5.5,1\n                c1.6,0.7,3,1.6,4,2.8c1.1,1.2,1.9,2.7,2.5,4.4c0.6,1.7,0.9,3.6,0.9,5.6v19.1c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2\n                V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9c-0.7,0.8-1.3,1.7-1.7,2.8\n                c-0.4,1.1-0.6,2.2-0.6,3.5v16.9c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2V5.8V0z\"\n                />\n                <path class=\"st0\" d=\"M210.5,14.1h5.3c0.7,0,1.4,0.6,1.4,1.3l0.1,2.4c0.4-0.5,0.9-1,1.5-1.5c0.6-0.5,1.3-1,2.1-1.5\n                c0.8-0.5,1.8-0.8,2.8-1.1c1-0.3,2.2-0.4,3.6-0.4c4.2,0,7.4,1.2,9.5,3.7c2.2,2.5,3.3,5.8,3.3,10.1V46c0,0.8-0.7,1.5-1.5,1.5h-5.4\n                c-0.8,0-1.5-0.7-1.5-1.5V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9\n                c-0.7,0.8-1.3,1.7-1.7,2.8c-0.4,1.1-0.6,2.2-0.6,3.5V46c0,0.8-0.7,1.5-1.5,1.5h-5.4c-0.8,0-1.5-0.7-1.5-1.5V15.5\n                C209.1,14.7,209.7,14.1,210.5,14.1z\" />\n                <g>\n                    <path class=\"st0\" d=\"M184.5,14h5.3c0.8,0,1.4,0.6,1.4,1.4l0.1,2.8c0.4-0.5,0.9-1,1.5-1.6c0.6-0.6,1.3-1.1,2.1-1.6\n                    c0.8-0.5,1.7-0.9,2.8-1.2c1.1-0.3,2.3-0.5,3.7-0.5c0.8,0,1.5,0,2.2,0.1c0.3,0,0.5,0.1,0.8,0.2c0.6,0.2,1,0.8,0.9,1.4l-1.2,5.5\n                    c-0.1,0.7-0.8,1.1-1.5,0.9c-0.2,0-0.4-0.1-0.6-0.1c-0.6-0.1-1.3-0.1-2.1-0.1c-1.1,0-2.2,0.2-3.3,0.6c-1,0.4-1.9,0.9-2.7,1.6\n                    c-0.8,0.7-1.4,1.6-1.8,2.6c-0.5,1-0.7,2.1-0.7,3.3V46c0,0.8-0.6,1.4-1.4,1.4h-5.6c-0.8,0-1.4-0.6-1.4-1.4V15.4\n                    C183.1,14.6,183.7,14,184.5,14z\" />\n                </g>\n                <path id=\"u_1_\" class=\"st0\" d=\"M67.4,14.6c-0.7,0-1.3,0.6-1.3,1.3v16.2c0,4.4-3.2,7.4-7,7.4c-0.7,0-1.2,0-1.5,0c-3.9,0-7-3-7-7.4\n                V15.9c0-0.7-0.6-1.3-1.3-1.3H44c-0.7,0-1.3,0.6-1.3,1.3v18c0,7.8,7.2,13.3,14.7,13.3v0h0.1c0,0,0.1,0,0.1,0l0,0h1.4l0,0\n                c0,0,0.1,0,0.1,0h0.2v0c7.5-0.1,14.6-5.5,14.6-13.3v-18c0-0.7-0.6-1.3-1.3-1.3H67.4z\"\n                />\n                <g>\n                    <g>\n                        <g>\n                            <path class=\"st0\" d=\"M144,30.9c0-2.4,0.4-4.7,1.3-6.9c0.9-2.2,2.1-4,3.7-5.7c1.6-1.6,3.5-2.9,5.7-3.8c2.2-0.9,4.6-1.4,7.3-1.4\n                            c2.7,0,5.1,0.5,7.3,1.4c2.2,0.9,4.1,2.2,5.7,3.8c1.6,1.6,2.8,3.5,3.7,5.7c0.9,2.2,1.3,4.4,1.3,6.9s-0.4,4.7-1.3,6.9\n                            c-0.9,2.2-2.1,4.1-3.7,5.7c-1.6,1.6-3.5,2.9-5.7,3.9c-2.2,0.9-4.6,1.4-7.3,1.4c-2.7,0-5.1-0.5-7.3-1.4c-2.2-0.9-4.1-2.2-5.7-3.9\n                            c-1.6-1.6-2.8-3.5-3.7-5.7C144.4,35.6,144,33.3,144,30.9z M161.9,41.5c1.6,0,3-0.3,4.2-1c1.2-0.6,2.2-1.5,3-2.5\n                            c0.8-1,1.4-2.2,1.7-3.4c0.4-1.2,0.6-2.5,0.6-3.7c0-1.2-0.2-2.4-0.6-3.7c-0.4-1.3-1-2.4-1.7-3.4c-0.8-1-1.8-1.9-3-2.5\n                            c-1.2-0.6-2.6-1-4.2-1c-1.6,0-3,0.3-4.2,1c-1.2,0.6-2.2,1.5-3,2.5c-0.8,1-1.4,2.2-1.7,3.4c-0.4,1.3-0.6,2.5-0.6,3.7\n                            c0,1.2,0.2,2.5,0.6,3.7c0.4,1.2,1,2.4,1.7,3.4c0.8,1,1.8,1.9,3,2.5C158.9,41.2,160.3,41.5,161.9,41.5z\"\n                            />\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </svg>\n\n        <h5 [routerLink]=\"['/Home']\">NOVO Design System</h5>\n        <span class=\"version\">v. {{version}}</span>\n        <a href=\"https://github.com/bullhorn/novo-elements\" target=\"_blank\"\n           class=\"fork-me\">Fork Me On Github</a>\n    </span>\n    <app-nav [routes]=\"appRoutes\"></app-nav>\n    <ul class=\"menu-list\">\n        <li class=\"menu-item\" [class.current]=\"router.isRouteActive(router.generate(['/Home']))\">\n            <a [routerLink]=\"['/Home']\" class=\"menu-link\">Introduction</a>\n        </li>\n\n        <li class=\"menu-section-header\">\n            <span class=\"menu-item-header\">Design</span>\n        </li>\n        <li class=\"menu-item\" *ngFor=\"let route of designRoutes\" [class.current]=\"router.isRouteActive(router.generate(['/'+route.name]))\">\n            <a [routerLink]=\"['/' + route.name]\" class=\"menu-link\">{{route.name}}</a>\n        </li>\n        <li class=\"menu-section-header\">\n            <span class=\"menu-item-header\">Components</span>\n        </li>\n        <li class=\"menu-item\" *ngFor=\"let route of componentRoutes\" [class.current]=\"router.isRouteActive(router.generate(['/'+route.name]))\">\n            <a [routerLink]=\"['/'+route.name]\" class=\"menu-link\">{{route.name}}</a>\n        </li>\n        <li class=\"menu-section-header\">\n            <span class=\"menu-item-header\">Utils</span>\n        </li>\n        <li class=\"menu-item\" *ngFor=\"let route of utilRoutes\" [class.current]=\"router.isRouteActive(router.generate(['/'+route.name]))\">\n            <a [routerLink]=\"['/'+route.name]\" class=\"menu-link\">{{route.name}}</a>\n        </li>\n        <li class=\"menu-line\"></li>\n    </ul>\n</nav>\n<main class=\"main-content\" [ngClass]=\"{open: menuOpen}\">\n    <nav class=\"responsive-nav\">\n        <button name=\"open-menu\" (click)=\"toggleMenu()\">\n            <span>&#9776;</span>\n        </button>\n        <svg data-name=\"bullhorn-text\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n            x=\"0px\" y=\"0px\" width=\"240.2px\" height=\"48.8px\" viewBox=\"0 0 240.2 48.8\"\n            style=\"enable-background:new 0 0 240.2 48.8;\" xml:space=\"preserve\">\n            <g>\n                <path class=\"st0\" d=\"M0,1.5c0-0.6,0.5-1.1,1.1-1.1h20c5.4,0,9.5,1.4,12.3,4.2c2.1,2.1,3.2,4.7,3.2,7.8v0.1c0,1.4-0.2,2.6-0.6,3.8\n            c-0.4,1.1-0.9,2.1-1.5,2.9c-0.6,0.8-1.3,1.6-2.1,2.2c-0.2,0.2-0.4,0.3-0.7,0.5c-0.7,0.5-0.6,1.6,0.1,1.9c1.9,0.9,3.4,1.9,4.7,3.2\n            c1.7,1.7,2.6,4.2,2.6,7.4v0.1c0,2.1-0.4,4-1.2,5.6c-0.8,1.6-2,3-3.5,4c-1.5,1.1-3.4,1.9-5.5,2.5c-2.1,0.6-4.5,0.8-7.2,0.8H1.1\n            C0.5,47.5,0,47,0,46.4V1.5z M19.4,20.3c2.7,0,4.8-0.5,6.5-1.6c1.6-1,2.4-2.6,2.4-4.8v-0.1c0-1.9-0.7-3.3-2.1-4.4\n            c-1.4-1-3.5-1.6-6.2-1.6H9.3c-0.6,0-1.1,0.5-1.1,1.1v10.2c0,0.6,0.5,1.1,1.1,1.1H19.4z M21.8,40.1c2.8,0,5-0.5,6.7-1.6\n            c1.6-1.1,2.4-2.7,2.4-4.8v-0.1c0-2-0.8-3.6-2.4-4.6c-1.6-1.1-4-1.6-7.3-1.6h-12c-0.6,0-1.1,0.5-1.1,1.1V39c0,0.6,0.5,1.1,1.1,1.1\n            H21.8z\" />\n                <path class=\"st0\" d=\"M81.3,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3h-5.9c-0.7,0-1.3-0.6-1.3-1.3v-45\n            C80.1,0.6,80.6,0,81.3,0z\" />\n                <path class=\"st0\" d=\"M96,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3H96c-0.7,0-1.3-0.6-1.3-1.3v-45\n            C94.8,0.6,95.3,0,96,0z\" />\n                <path class=\"st0\" d=\"M109.5,0l4,0c2.3,0,4.2,1.9,4.2,4.2v13.3c0.9-0.9,2.1-1.9,3.7-2.8c1.6-0.9,3.7-1.4,6.3-1.4c2,0,3.9,0.3,5.5,1\n            c1.6,0.7,3,1.6,4,2.8c1.1,1.2,1.9,2.7,2.5,4.4c0.6,1.7,0.9,3.6,0.9,5.6v19.1c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2\n            V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9c-0.7,0.8-1.3,1.7-1.7,2.8\n            c-0.4,1.1-0.6,2.2-0.6,3.5v16.9c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2V5.8V0z\"\n                />\n                <path class=\"st0\" d=\"M210.5,14.1h5.3c0.7,0,1.4,0.6,1.4,1.3l0.1,2.4c0.4-0.5,0.9-1,1.5-1.5c0.6-0.5,1.3-1,2.1-1.5\n            c0.8-0.5,1.8-0.8,2.8-1.1c1-0.3,2.2-0.4,3.6-0.4c4.2,0,7.4,1.2,9.5,3.7c2.2,2.5,3.3,5.8,3.3,10.1V46c0,0.8-0.7,1.5-1.5,1.5h-5.4\n            c-0.8,0-1.5-0.7-1.5-1.5V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9\n            c-0.7,0.8-1.3,1.7-1.7,2.8c-0.4,1.1-0.6,2.2-0.6,3.5V46c0,0.8-0.7,1.5-1.5,1.5h-5.4c-0.8,0-1.5-0.7-1.5-1.5V15.5\n            C209.1,14.7,209.7,14.1,210.5,14.1z\" />\n                <g>\n                    <path class=\"st0\" d=\"M184.5,14h5.3c0.8,0,1.4,0.6,1.4,1.4l0.1,2.8c0.4-0.5,0.9-1,1.5-1.6c0.6-0.6,1.3-1.1,2.1-1.6\n                c0.8-0.5,1.7-0.9,2.8-1.2c1.1-0.3,2.3-0.5,3.7-0.5c0.8,0,1.5,0,2.2,0.1c0.3,0,0.5,0.1,0.8,0.2c0.6,0.2,1,0.8,0.9,1.4l-1.2,5.5\n                c-0.1,0.7-0.8,1.1-1.5,0.9c-0.2,0-0.4-0.1-0.6-0.1c-0.6-0.1-1.3-0.1-2.1-0.1c-1.1,0-2.2,0.2-3.3,0.6c-1,0.4-1.9,0.9-2.7,1.6\n                c-0.8,0.7-1.4,1.6-1.8,2.6c-0.5,1-0.7,2.1-0.7,3.3V46c0,0.8-0.6,1.4-1.4,1.4h-5.6c-0.8,0-1.4-0.6-1.4-1.4V15.4\n                C183.1,14.6,183.7,14,184.5,14z\" />\n                </g>\n                <path id=\"u_1_\" class=\"st0\" d=\"M67.4,14.6c-0.7,0-1.3,0.6-1.3,1.3v16.2c0,4.4-3.2,7.4-7,7.4c-0.7,0-1.2,0-1.5,0c-3.9,0-7-3-7-7.4\n            V15.9c0-0.7-0.6-1.3-1.3-1.3H44c-0.7,0-1.3,0.6-1.3,1.3v18c0,7.8,7.2,13.3,14.7,13.3v0h0.1c0,0,0.1,0,0.1,0l0,0h1.4l0,0\n            c0,0,0.1,0,0.1,0h0.2v0c7.5-0.1,14.6-5.5,14.6-13.3v-18c0-0.7-0.6-1.3-1.3-1.3H67.4z\"\n                />\n                <g>\n                    <g>\n                        <g>\n                            <path class=\"st0\" d=\"M144,30.9c0-2.4,0.4-4.7,1.3-6.9c0.9-2.2,2.1-4,3.7-5.7c1.6-1.6,3.5-2.9,5.7-3.8c2.2-0.9,4.6-1.4,7.3-1.4\n                        c2.7,0,5.1,0.5,7.3,1.4c2.2,0.9,4.1,2.2,5.7,3.8c1.6,1.6,2.8,3.5,3.7,5.7c0.9,2.2,1.3,4.4,1.3,6.9s-0.4,4.7-1.3,6.9\n                        c-0.9,2.2-2.1,4.1-3.7,5.7c-1.6,1.6-3.5,2.9-5.7,3.9c-2.2,0.9-4.6,1.4-7.3,1.4c-2.7,0-5.1-0.5-7.3-1.4c-2.2-0.9-4.1-2.2-5.7-3.9\n                        c-1.6-1.6-2.8-3.5-3.7-5.7C144.4,35.6,144,33.3,144,30.9z M161.9,41.5c1.6,0,3-0.3,4.2-1c1.2-0.6,2.2-1.5,3-2.5\n                        c0.8-1,1.4-2.2,1.7-3.4c0.4-1.2,0.6-2.5,0.6-3.7c0-1.2-0.2-2.4-0.6-3.7c-0.4-1.3-1-2.4-1.7-3.4c-0.8-1-1.8-1.9-3-2.5\n                        c-1.2-0.6-2.6-1-4.2-1c-1.6,0-3,0.3-4.2,1c-1.2,0.6-2.2,1.5-3,2.5c-0.8,1-1.4,2.2-1.7,3.4c-0.4,1.3-0.6,2.5-0.6,3.7\n                        c0,1.2,0.2,2.5,0.6,3.7c0.4,1.2,1,2.4,1.7,3.4c0.8,1,1.8,1.9,3,2.5C158.9,41.2,160.3,41.5,161.9,41.5z\"\n                            />\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </svg>\n        <strong>Design System</strong>\n    </nav>\n    <router-outlet></router-outlet>\n</main>\n"

/***/ },

/***/ 642:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DemoApp = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _dec2, _class;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(5);
	
	var _routerDeprecated = __webpack_require__(144);
	
	var _novoElements = __webpack_require__(14);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var DemoApp = exports.DemoApp = (_dec = (0, _core.Component)({
	    selector: 'demo-app',
	    template: __webpack_require__(755),
	    providers: [].concat(_toConsumableArray(_novoElements.TOAST_PROVIDERS), _toConsumableArray(_novoElements.MODAL_PROVIDERS)),
	    directives: [_common.CORE_DIRECTIVES]
	}), _dec2 = (0, _routerDeprecated.RouteConfig)([
	// Base Pages (design system)
	{ path: '/', name: 'Home', loader: function loader() {
	        return __webpack_require__(732)('Home');
	    }, useAsDefault: true }, { path: '/composition', name: 'Composition', loader: function loader() {
	        return __webpack_require__(734)('Layout');
	    } }, { path: '/typography', name: 'Typography', loader: function loader() {
	        return __webpack_require__(751)('Typography');
	    } }, { path: '/icons', name: 'Iconography', loader: function loader() {
	        return __webpack_require__(733)('Iconography');
	    } }, { path: '/color', name: 'Color', loader: function loader() {
	        return __webpack_require__(726)('Color');
	    } },
	
	// Element/Component/Service/etc.. Demos
	{ path: '/button', name: 'Button', loader: function loader() {
	        return __webpack_require__(722)('ButtonDemo');
	    } }, { path: '/radio', name: 'Radio', loader: function loader() {
	        return __webpack_require__(741)('RadioDemo');
	    } }, { path: '/quick-note', name: 'QuickNote', loader: function loader() {
	        return __webpack_require__(740)('QuickNoteDemo');
	    } }, { path: '/modal', name: 'Modal', loader: function loader() {
	        return __webpack_require__(737)('ModalDemo');
	    } }, { path: '/form', name: 'Form', loader: function loader() {
	        return __webpack_require__(730)('FormDemo');
	    } }, { path: '/toast', name: 'Toast', loader: function loader() {
	        return __webpack_require__(749)('ToastDemo');
	    } }, { path: '/tooltip', name: 'Tooltip', loader: function loader() {
	        return __webpack_require__(750)('TooltipDemo');
	    } }, { path: '/cards', name: 'Cards', loader: function loader() {
	        return __webpack_require__(724)('CardDemo');
	    } }, { path: '/loading', name: 'Loading', loader: function loader() {
	        return __webpack_require__(736)('LoadingDemo');
	    } }, { path: '/dropdown', name: 'Dropdown', loader: function loader() {
	        return __webpack_require__(729)('DropdownDemo');
	    } }, { path: '/picker', name: 'Picker', loader: function loader() {
	        return __webpack_require__(738)('PickerDemo');
	    } }, { path: '/chips', name: 'Chips', loader: function loader() {
	        return __webpack_require__(725)('ChipsDemo');
	    } }, { path: '/select', name: 'Select', loader: function loader() {
	        return __webpack_require__(742)('SelectDemo');
	    } }, { path: '/tabs', name: 'Tabs', loader: function loader() {
	        return __webpack_require__(746)('TabsDemo');
	    } }, { path: '/table', name: 'Table', loader: function loader() {
	        return __webpack_require__(745)('TableDemo');
	    } }, { path: '/list', name: 'List', loader: function loader() {
	        return __webpack_require__(735)('ListDemo');
	    } }, { path: '/header', name: 'Header', loader: function loader() {
	        return __webpack_require__(731)('HeaderDemo');
	    } }, { path: '/switch', name: 'Switch', loader: function loader() {
	        return __webpack_require__(744)('SwitchDemo');
	    } }, { path: '/drawer', name: 'Drawer', loader: function loader() {
	        return __webpack_require__(728)('DrawerDemo');
	    } }, { path: '/calendar', name: 'Calendar', loader: function loader() {
	        return __webpack_require__(723)('CalendarDemo');
	    } }, { path: '/dragula', name: 'Dragula', loader: function loader() {
	        return __webpack_require__(727)('DragulaDemo');
	    } }, { path: '/tiles', name: 'Tiles', loader: function loader() {
	        return __webpack_require__(747)('TilesDemo');
	    } }, { path: '/slides', name: 'Slides', loader: function loader() {
	        return __webpack_require__(743)('SlidesDemo');
	    } }, { path: '/tipwell', name: 'TipWell', loader: function loader() {
	        return __webpack_require__(748)('TipWellDemo');
	    } },
	
	// Utils
	{ path: '/utils', name: 'Utils', loader: function loader() {
	        return __webpack_require__(752)('UtilsDemo');
	    } }, { path: '/pipes', name: 'Pipes', loader: function loader() {
	        return __webpack_require__(739)('PipesDemo');
	    } }]), _dec(_class = _dec2(_class = function () {
	    function DemoApp(router, toastService, view, modalService) {
	        var _this = this;
	
	        _classCallCheck(this, DemoApp);
	
	        this.router = router;
	        this.menuOpen = false;
	        this.version = ("0.2.10");
	
	        toastService.parentViewContainer = view;
	        modalService.parentViewContainer = view;
	
	        this.designRoutes = [{ name: 'Composition', path: '/composition' }, { name: 'Typography', path: '/typography' }, { name: 'Iconography', path: '/icons' }, { name: 'Color', path: '/color' }].sort(function (a, b) {
	            if (a.name < b.name) return -1;
	            if (a.name > b.name) return 1;
	            return 0;
	        });
	
	        this.componentRoutes = [{ name: 'QuickNote', path: '/quick-note' }, { name: 'Radio', path: '/radio' }, { name: 'Toast', path: '/toast' }, { name: 'Button', path: '/button' }, { name: 'Form', path: '/form' }, { name: 'Tabs', path: '/tabs' }, { name: 'Modal', path: '/Modal' }, { name: 'Select', path: '/select' }, { name: 'Picker', path: '/picker' }, { name: 'Chips', path: '/chips' }, { name: 'Dropdown', path: '/dropdown' }, { name: 'Loading', path: '/loading' }, { name: 'Cards', path: '/cards' }, { name: 'Tooltip', path: '/tooltip' }, { name: 'Drawer', path: '/drawer' }, { name: 'Switch', path: '/switch' }, { name: 'Header', path: '/header' }, { name: 'List', path: '/list' }, { name: 'Table', path: '/table' }, { name: 'Calendar', path: '/calendar' }, { name: 'Dragula', path: '/dragula' }, { name: 'Tiles', path: '/tiles' }, { name: 'Slides', path: '/slides' }, { name: 'TipWell', path: '/tipwell' }].sort(function (a, b) {
	            if (a.name < b.name) return -1;
	            if (a.name > b.name) return 1;
	            return 0;
	        });
	
	        this.utilRoutes = [{ name: 'Pipes', path: '/pipes' }, { name: 'Utils', path: '/utils' }].sort(function (a, b) {
	            if (a.name < b.name) return -1;
	            if (a.name > b.name) return 1;
	            return 0;
	        });
	
	        router.subscribe(function () {
	            document.body.scrollTop = 0;
	            _this.menuOpen = false;
	        });
	    }
	
	    _createClass(DemoApp, [{
	        key: 'toggleMenu',
	        value: function toggleMenu() {
	            this.menuOpen = !this.menuOpen;
	        }
	    }]);
	
	    return DemoApp;
	}()) || _class) || _class);
	Reflect.defineMetadata('design:paramtypes', [_routerDeprecated.Router, _novoElements.ToastService, _core.ViewContainerRef, _novoElements.ModalService], DemoApp);
	//# sourceMappingURL=data:application/json;base64,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QixFQURjLEVBRWQsRUFBRSxNQUFNLE9BQVIsRUFBaUIsTUFBTSxRQUF2QixFQUZjLEVBR2hCLElBSGdCLENBR1gsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFVO0FBQ2IsZ0JBQUksRUFBRSxJQUFGLEdBQVMsRUFBRSxJQUFmLEVBQXFCLE9BQU8sQ0FBQyxDQUFSO0FBQ3JCLGdCQUFJLEVBQUUsSUFBRixHQUFTLEVBQUUsSUFBZixFQUFxQixPQUFPLENBQVA7QUFDckIsbUJBQU8sQ0FBUDtBQUNILFNBUGlCLENBQWxCOztBQVNBLGVBQU8sU0FBUCxDQUFpQixZQUFNO0FBQ25CLHFCQUFTLElBQVQsQ0FBYyxTQUFkLEdBQTBCLENBQTFCO0FBQ0Esa0JBQUssUUFBTCxHQUFnQixLQUFoQjtBQUNILFNBSEQ7QUFJSDs7OztxQ0FFWTtBQUNULGlCQUFLLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLLFFBQXRCO0FBQ0g7Ozs7O3dKQXBFUSxPIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVDb25maWcsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcblxuaW1wb3J0IHsgVE9BU1RfUFJPVklERVJTLCBUb2FzdFNlcnZpY2UsIE1PREFMX1BST1ZJREVSUywgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZGVtby1hcHAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL0FwcC5odG1sJyksXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLlRPQVNUX1BST1ZJREVSUyxcbiAgICAgICAgLi4uTU9EQUxfUFJPVklERVJTXG4gICAgXSxcbiAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIENPUkVfRElSRUNUSVZFU1xuICAgIF1cbn0pXG5AUm91dGVDb25maWcoW1xuICAgIC8vIEJhc2UgUGFnZXMgKGRlc2lnbiBzeXN0ZW0pXG4gICAgeyBwYXRoOiAnLycsIG5hbWU6ICdIb21lJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL2hvbWUvSG9tZScpKCdIb21lJyksIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuICAgIHsgcGF0aDogJy9jb21wb3NpdGlvbicsIG5hbWU6ICdDb21wb3NpdGlvbicsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9sYXlvdXQvTGF5b3V0JykoJ0xheW91dCcpIH0sXG4gICAgeyBwYXRoOiAnL3R5cG9ncmFwaHknLCBuYW1lOiAnVHlwb2dyYXBoeScsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi90eXBvZ3JhcGh5L1R5cG9ncmFwaHknKSgnVHlwb2dyYXBoeScpIH0sXG4gICAgeyBwYXRoOiAnL2ljb25zJywgbmFtZTogJ0ljb25vZ3JhcGh5JywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL2ljb25vZ3JhcGh5L0ljb25vZ3JhcGh5JykoJ0ljb25vZ3JhcGh5JykgfSxcbiAgICB7IHBhdGg6ICcvY29sb3InLCBuYW1lOiAnQ29sb3InLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vY29sb3IvQ29sb3InKSgnQ29sb3InKSB9LFxuXG4gICAgLy8gRWxlbWVudC9Db21wb25lbnQvU2VydmljZS9ldGMuLiBEZW1vc1xuICAgIHsgcGF0aDogJy9idXR0b24nLCBuYW1lOiAnQnV0dG9uJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL2J1dHRvbi9CdXR0b25EZW1vJykoJ0J1dHRvbkRlbW8nKSB9LFxuICAgIHsgcGF0aDogJy9yYWRpbycsIG5hbWU6ICdSYWRpbycsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9yYWRpby9SYWRpb0RlbW8nKSgnUmFkaW9EZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvcXVpY2stbm90ZScsIG5hbWU6ICdRdWlja05vdGUnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vcXVpY2stbm90ZS9RdWlja05vdGVEZW1vJykoJ1F1aWNrTm90ZURlbW8nKSB9LFxuICAgIHsgcGF0aDogJy9tb2RhbCcsIG5hbWU6ICdNb2RhbCcsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9tb2RhbC9Nb2RhbERlbW8nKSgnTW9kYWxEZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvZm9ybScsIG5hbWU6ICdGb3JtJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL2Zvcm0vRm9ybURlbW8nKSgnRm9ybURlbW8nKSB9LFxuICAgIHsgcGF0aDogJy90b2FzdCcsIG5hbWU6ICdUb2FzdCcsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi90b2FzdC9Ub2FzdERlbW8nKSgnVG9hc3REZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvdG9vbHRpcCcsIG5hbWU6ICdUb29sdGlwJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL3Rvb2x0aXAvVG9vbHRpcERlbW8nKSgnVG9vbHRpcERlbW8nKSB9LFxuICAgIHsgcGF0aDogJy9jYXJkcycsIG5hbWU6ICdDYXJkcycsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9jYXJkL0NhcmREZW1vJykoJ0NhcmREZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvbG9hZGluZycsIG5hbWU6ICdMb2FkaW5nJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL2xvYWRpbmcvTG9hZGluZ0RlbW8nKSgnTG9hZGluZ0RlbW8nKSB9LFxuICAgIHsgcGF0aDogJy9kcm9wZG93bicsIG5hbWU6ICdEcm9wZG93bicsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9kcm9wZG93bi9Ecm9wZG93bkRlbW8nKSgnRHJvcGRvd25EZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvcGlja2VyJywgbmFtZTogJ1BpY2tlcicsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9waWNrZXIvUGlja2VyRGVtbycpKCdQaWNrZXJEZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvY2hpcHMnLCBuYW1lOiAnQ2hpcHMnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vY2hpcHMvQ2hpcHNEZW1vJykoJ0NoaXBzRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL3NlbGVjdCcsIG5hbWU6ICdTZWxlY3QnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vc2VsZWN0L1NlbGVjdERlbW8nKSgnU2VsZWN0RGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL3RhYnMnLCBuYW1lOiAnVGFicycsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi90YWJzL1RhYnNEZW1vJykoJ1RhYnNEZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvdGFibGUnLCBuYW1lOiAnVGFibGUnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vdGFibGUvVGFibGVEZW1vJykoJ1RhYmxlRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL2xpc3QnLCBuYW1lOiAnTGlzdCcsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9saXN0L0xpc3REZW1vJykoJ0xpc3REZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvaGVhZGVyJywgbmFtZTogJ0hlYWRlcicsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9oZWFkZXIvSGVhZGVyRGVtbycpKCdIZWFkZXJEZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvc3dpdGNoJywgbmFtZTogJ1N3aXRjaCcsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9zd2l0Y2gvU3dpdGNoRGVtbycpKCdTd2l0Y2hEZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvZHJhd2VyJywgbmFtZTogJ0RyYXdlcicsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9kcmF3ZXIvRHJhd2VyRGVtbycpKCdEcmF3ZXJEZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvY2FsZW5kYXInLCBuYW1lOiAnQ2FsZW5kYXInLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vY2FsZW5kYXIvQ2FsZW5kYXJEZW1vJykoJ0NhbGVuZGFyRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL2RyYWd1bGEnLCBuYW1lOiAnRHJhZ3VsYScsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9kcmFndWxhL0RyYWd1bGFEZW1vJykoJ0RyYWd1bGFEZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvdGlsZXMnLCBuYW1lOiAnVGlsZXMnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vdGlsZXMvVGlsZXNEZW1vJykoJ1RpbGVzRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL3NsaWRlcycsIG5hbWU6ICdTbGlkZXMnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vc2xpZGVzL1NsaWRlc0RlbW8nKSgnU2xpZGVzRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL3RpcHdlbGwnLCBuYW1lOiAnVGlwV2VsbCcsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi90aXAtd2VsbC9UaXBXZWxsRGVtbycpKCdUaXBXZWxsRGVtbycpIH0sXG5cbiAgICAvLyBVdGlsc1xuICAgIHsgcGF0aDogJy91dGlscycsIG5hbWU6ICdVdGlscycsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi91dGlscy9VdGlsc0RlbW8nKSgnVXRpbHNEZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvcGlwZXMnLCBuYW1lOiAnUGlwZXMnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vcGlwZXMvUGlwZXNEZW1vJykoJ1BpcGVzRGVtbycpIH1cbl0pXG5leHBvcnQgY2xhc3MgRGVtb0FwcCB7XG4gICAgY29uc3RydWN0b3Iocm91dGVyOlJvdXRlciwgdG9hc3RTZXJ2aWNlOlRvYXN0U2VydmljZSwgdmlldzpWaWV3Q29udGFpbmVyUmVmLCBtb2RhbFNlcnZpY2U6TW9kYWxTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLm1lbnVPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IFZFUlNJT047XG5cbiAgICAgICAgdG9hc3RTZXJ2aWNlLnBhcmVudFZpZXdDb250YWluZXIgPSB2aWV3O1xuICAgICAgICBtb2RhbFNlcnZpY2UucGFyZW50Vmlld0NvbnRhaW5lciA9IHZpZXc7XG5cbiAgICAgICAgdGhpcy5kZXNpZ25Sb3V0ZXMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdDb21wb3NpdGlvbicsIHBhdGg6ICcvY29tcG9zaXRpb24nIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdUeXBvZ3JhcGh5JywgcGF0aDogJy90eXBvZ3JhcGh5JyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnSWNvbm9ncmFwaHknLCBwYXRoOiAnL2ljb25zJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnQ29sb3InLCBwYXRoOiAnL2NvbG9yJyB9XG4gICAgICAgIF0uc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEubmFtZSA8IGIubmFtZSkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKGEubmFtZSA+IGIubmFtZSkgcmV0dXJuIDE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnRSb3V0ZXMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdRdWlja05vdGUnLCBwYXRoOiAnL3F1aWNrLW5vdGUnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdSYWRpbycsIHBhdGg6ICcvcmFkaW8nIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdUb2FzdCcsIHBhdGg6ICcvdG9hc3QnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdCdXR0b24nLCBwYXRoOiAnL2J1dHRvbicgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0Zvcm0nLCBwYXRoOiAnL2Zvcm0nIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdUYWJzJywgcGF0aDogJy90YWJzJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnTW9kYWwnLCBwYXRoOiAnL01vZGFsJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnU2VsZWN0JywgcGF0aDogJy9zZWxlY3QnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdQaWNrZXInLCBwYXRoOiAnL3BpY2tlcicgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0NoaXBzJywgcGF0aDogJy9jaGlwcycgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0Ryb3Bkb3duJywgcGF0aDogJy9kcm9wZG93bicgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0xvYWRpbmcnLCBwYXRoOiAnL2xvYWRpbmcnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdDYXJkcycsIHBhdGg6ICcvY2FyZHMnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdUb29sdGlwJywgcGF0aDogJy90b29sdGlwJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRHJhd2VyJywgcGF0aDogJy9kcmF3ZXInIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdTd2l0Y2gnLCBwYXRoOiAnL3N3aXRjaCcgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0hlYWRlcicsIHBhdGg6ICcvaGVhZGVyJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnTGlzdCcsIHBhdGg6ICcvbGlzdCcgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1RhYmxlJywgcGF0aDogJy90YWJsZScgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0NhbGVuZGFyJywgcGF0aDogJy9jYWxlbmRhcicgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0RyYWd1bGEnLCBwYXRoOiAnL2RyYWd1bGEnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdUaWxlcycsIHBhdGg6ICcvdGlsZXMnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdTbGlkZXMnLCBwYXRoOiAnL3NsaWRlcycgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1RpcFdlbGwnLCBwYXRoOiAnL3RpcHdlbGwnIH1cbiAgICAgICAgXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5uYW1lIDwgYi5uYW1lKSByZXR1cm4gLTE7XG4gICAgICAgICAgICBpZiAoYS5uYW1lID4gYi5uYW1lKSByZXR1cm4gMTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnV0aWxSb3V0ZXMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdQaXBlcycsIHBhdGg6ICcvcGlwZXMnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdVdGlscycsIHBhdGg6ICcvdXRpbHMnIH1cbiAgICAgICAgXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5uYW1lIDwgYi5uYW1lKSByZXR1cm4gLTE7XG4gICAgICAgICAgICBpZiAoYS5uYW1lID4gYi5uYW1lKSByZXR1cm4gMTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICAgICAgICByb3V0ZXIuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIHRoaXMubWVudU9wZW4gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudSgpIHtcbiAgICAgICAgdGhpcy5tZW51T3BlbiA9ICF0aGlzLm1lbnVPcGVuO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 722:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(3, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(526)[namespace]);
	      } else {
	        resolve(__webpack_require__(526));
	      }
	    });
	  });
	}

/***/ },

/***/ 723:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(16, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(527)[namespace]);
	      } else {
	        resolve(__webpack_require__(527));
	      }
	    });
	  });
	}

/***/ },

/***/ 724:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(5, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(528)[namespace]);
	      } else {
	        resolve(__webpack_require__(528));
	      }
	    });
	  });
	}

/***/ },

/***/ 725:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(10, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(529)[namespace]);
	      } else {
	        resolve(__webpack_require__(529));
	      }
	    });
	  });
	}

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(31, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(530)[namespace]);
	      } else {
	        resolve(__webpack_require__(530));
	      }
	    });
	  });
	}

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(15, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(531)[namespace]);
	      } else {
	        resolve(__webpack_require__(531));
	      }
	    });
	  });
	}

/***/ },

/***/ 728:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(25, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(532)[namespace]);
	      } else {
	        resolve(__webpack_require__(532));
	      }
	    });
	  });
	}

/***/ },

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(24, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(533)[namespace]);
	      } else {
	        resolve(__webpack_require__(533));
	      }
	    });
	  });
	}

/***/ },

/***/ 730:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(1, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(534)[namespace]);
	      } else {
	        resolve(__webpack_require__(534));
	      }
	    });
	  });
	}

/***/ },

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(23, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(535)[namespace]);
	      } else {
	        resolve(__webpack_require__(535));
	      }
	    });
	  });
	}

/***/ },

/***/ 732:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(30, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(536)[namespace]);
	      } else {
	        resolve(__webpack_require__(536));
	      }
	    });
	  });
	}

/***/ },

/***/ 733:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(29, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(537)[namespace]);
	      } else {
	        resolve(__webpack_require__(537));
	      }
	    });
	  });
	}

/***/ },

/***/ 734:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(28, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(538)[namespace]);
	      } else {
	        resolve(__webpack_require__(538));
	      }
	    });
	  });
	}

/***/ },

/***/ 735:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(22, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(539)[namespace]);
	      } else {
	        resolve(__webpack_require__(539));
	      }
	    });
	  });
	}

/***/ },

/***/ 736:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(14, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(540)[namespace]);
	      } else {
	        resolve(__webpack_require__(540));
	      }
	    });
	  });
	}

/***/ },

/***/ 737:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(2, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(541)[namespace]);
	      } else {
	        resolve(__webpack_require__(541));
	      }
	    });
	  });
	}

/***/ },

/***/ 738:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(8, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(542)[namespace]);
	      } else {
	        resolve(__webpack_require__(542));
	      }
	    });
	  });
	}

/***/ },

/***/ 739:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(21, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(543)[namespace]);
	      } else {
	        resolve(__webpack_require__(543));
	      }
	    });
	  });
	}

/***/ },

/***/ 740:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(9, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(544)[namespace]);
	      } else {
	        resolve(__webpack_require__(544));
	      }
	    });
	  });
	}

/***/ },

/***/ 741:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(13, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(545)[namespace]);
	      } else {
	        resolve(__webpack_require__(545));
	      }
	    });
	  });
	}

/***/ },

/***/ 742:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(12, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(546)[namespace]);
	      } else {
	        resolve(__webpack_require__(546));
	      }
	    });
	  });
	}

/***/ },

/***/ 743:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(20, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(547)[namespace]);
	      } else {
	        resolve(__webpack_require__(547));
	      }
	    });
	  });
	}

/***/ },

/***/ 744:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(19, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(548)[namespace]);
	      } else {
	        resolve(__webpack_require__(548));
	      }
	    });
	  });
	}

/***/ },

/***/ 745:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(7, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(549)[namespace]);
	      } else {
	        resolve(__webpack_require__(549));
	      }
	    });
	  });
	}

/***/ },

/***/ 746:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(4, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(550)[namespace]);
	      } else {
	        resolve(__webpack_require__(550));
	      }
	    });
	  });
	}

/***/ },

/***/ 747:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(18, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(551)[namespace]);
	      } else {
	        resolve(__webpack_require__(551));
	      }
	    });
	  });
	}

/***/ },

/***/ 748:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(17, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(552)[namespace]);
	      } else {
	        resolve(__webpack_require__(552));
	      }
	    });
	  });
	}

/***/ },

/***/ 749:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(11, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(553)[namespace]);
	      } else {
	        resolve(__webpack_require__(553));
	      }
	    });
	  });
	}

/***/ },

/***/ 750:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(6, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(554)[namespace]);
	      } else {
	        resolve(__webpack_require__(554));
	      }
	    });
	  });
	}

/***/ },

/***/ 751:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(27, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(555)[namespace]);
	      } else {
	        resolve(__webpack_require__(555));
	      }
	    });
	  });
	}

/***/ },

/***/ 752:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(26, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(556)[namespace]);
	      } else {
	        resolve(__webpack_require__(556));
	      }
	    });
	  });
	}

/***/ },

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DIRECTIVES = exports.APPLICATION_DIRECTIVES = undefined;
	
	var _core = __webpack_require__(1);
	
	var _routerDeprecated = __webpack_require__(144);
	
	var _common = __webpack_require__(5);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // These are globally available directives in any template
	
	
	// application_directives: directives that are global through out the application
	var APPLICATION_DIRECTIVES = exports.APPLICATION_DIRECTIVES = [].concat(_toConsumableArray(_routerDeprecated.ROUTER_DIRECTIVES), _toConsumableArray(_common.FORM_DIRECTIVES));
	
	var DIRECTIVES = exports.DIRECTIVES = [{ provide: _core.PLATFORM_DIRECTIVES, multi: true, useValue: APPLICATION_DIRECTIVES }];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGxhdGZvcm0vYnJvd3Nlci1kaXJlY3RpdmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7b01BSEE7OztBQUtBO0FBQ08sSUFBTSx5S0FBTjs7QUFLQSxJQUFNLGtDQUFhLENBQ3RCLEVBQUUsa0NBQUYsRUFBZ0MsT0FBTyxJQUF2QyxFQUE2QyxVQUFVLHNCQUF2RCxFQURzQixDQUFuQiIsImZpbGUiOiJicm93c2VyLWRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZXNlIGFyZSBnbG9iYWxseSBhdmFpbGFibGUgZGlyZWN0aXZlcyBpbiBhbnkgdGVtcGxhdGVcbmltcG9ydCB7IFBMQVRGT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuaW1wb3J0IHsgRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLy8gYXBwbGljYXRpb25fZGlyZWN0aXZlczogZGlyZWN0aXZlcyB0aGF0IGFyZSBnbG9iYWwgdGhyb3VnaCBvdXQgdGhlIGFwcGxpY2F0aW9uXG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fRElSRUNUSVZFUyA9IFtcbiAgICAuLi5ST1VURVJfRElSRUNUSVZFUyxcbiAgICAuLi5GT1JNX0RJUkVDVElWRVNcbl07XG5cbmV4cG9ydCBjb25zdCBESVJFQ1RJVkVTID0gW1xuICAgIHsgcHJvdmlkZTogUExBVEZPUk1fRElSRUNUSVZFUywgbXVsdGk6IHRydWUsIHVzZVZhbHVlOiBBUFBMSUNBVElPTl9ESVJFQ1RJVkVTIH1cbl07XG4iXX0=

/***/ },

/***/ 644:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PIPES = exports.APPLICATION_PIPES = undefined;
	
	var _core = __webpack_require__(1);
	
	// application_pipes: pipes that are global through out the application
	var APPLICATION_PIPES = exports.APPLICATION_PIPES = []; // These are globally available pipes in any template
	var PIPES = exports.PIPES = [{ provide: _core.PLATFORM_PIPES, multi: true, useValue: APPLICATION_PIPES }];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGxhdGZvcm0vYnJvd3Nlci1waXBlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBRUE7QUFDTyxJQUFNLGdEQUFvQixFQUExQixDLENBSlA7QUFNTyxJQUFNLHdCQUFRLENBQ2pCLEVBQUUsNkJBQUYsRUFBMkIsT0FBTyxJQUFsQyxFQUF3QyxVQUFVLGlCQUFsRCxFQURpQixDQUFkIiwiZmlsZSI6ImJyb3dzZXItcGlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZXNlIGFyZSBnbG9iYWxseSBhdmFpbGFibGUgcGlwZXMgaW4gYW55IHRlbXBsYXRlXG5pbXBvcnQgeyBQTEFURk9STV9QSVBFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBhcHBsaWNhdGlvbl9waXBlczogcGlwZXMgdGhhdCBhcmUgZ2xvYmFsIHRocm91Z2ggb3V0IHRoZSBhcHBsaWNhdGlvblxuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX1BJUEVTID0gW107XG5cbmV4cG9ydCBjb25zdCBQSVBFUyA9IFtcbiAgICB7IHByb3ZpZGU6IFBMQVRGT1JNX1BJUEVTLCBtdWx0aTogdHJ1ZSwgdXNlVmFsdWU6IEFQUExJQ0FUSU9OX1BJUEVTIH1cbl07XG4iXX0=

/***/ },

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PROVIDERS = exports.APPLICATION_PROVIDERS = undefined;
	
	var _common = __webpack_require__(5);
	
	var _http = __webpack_require__(320);
	
	var _routerDeprecated = __webpack_require__(144);
	
	var _novoElements = __webpack_require__(14);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // These are globally available services in any component or any other service
	
	
	// Application Providers/Directives/Pipes
	// providers/directives/pipes that only live in our browser environment
	var APPLICATION_PROVIDERS = exports.APPLICATION_PROVIDERS = [].concat(_toConsumableArray(_routerDeprecated.ROUTER_PROVIDERS), _toConsumableArray(_common.FORM_PROVIDERS), _toConsumableArray(_http.HTTP_PROVIDERS), _toConsumableArray(_novoElements.NOVO_ELEMENTS_LABELS_PROVIDERS), [{ provide: _common.LocationStrategy, useClass: _common.HashLocationStrategy }]);
	
	var PROVIDERS = exports.PROVIDERS = [].concat(_toConsumableArray(APPLICATION_PROVIDERS));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGxhdGZvcm0vYnJvd3Nlci1wcm92aWRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOztvTUFMQTs7O0FBT0E7QUFDQTtBQUNPLElBQU0sbVJBTVQsRUFBRSxpQ0FBRixFQUE2QixzQ0FBN0IsRUFOUyxFQUFOOztBQVNBLElBQU0sNkRBQ04scUJBRE0sRUFBTiIsImZpbGUiOiJicm93c2VyLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlc2UgYXJlIGdsb2JhbGx5IGF2YWlsYWJsZSBzZXJ2aWNlcyBpbiBhbnkgY29tcG9uZW50IG9yIGFueSBvdGhlciBzZXJ2aWNlXG5pbXBvcnQgeyBIYXNoTG9jYXRpb25TdHJhdGVneSwgTG9jYXRpb25TdHJhdGVneSwgRk9STV9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5cbmltcG9ydCB7IE5PVk9fRUxFTUVOVFNfTEFCRUxTX1BST1ZJREVSUyB9IGZyb20gJy4vLi4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG4vLyBBcHBsaWNhdGlvbiBQcm92aWRlcnMvRGlyZWN0aXZlcy9QaXBlc1xuLy8gcHJvdmlkZXJzL2RpcmVjdGl2ZXMvcGlwZXMgdGhhdCBvbmx5IGxpdmUgaW4gb3VyIGJyb3dzZXIgZW52aXJvbm1lbnRcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9QUk9WSURFUlMgPSBbXG4gICAgLi4uUk9VVEVSX1BST1ZJREVSUyxcbiAgICAuLi5GT1JNX1BST1ZJREVSUyxcbiAgICAuLi5IVFRQX1BST1ZJREVSUyxcbiAgICAuLi5OT1ZPX0VMRU1FTlRTX0xBQkVMU19QUk9WSURFUlMsXG5cbiAgICB7IHByb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneSB9XG5dO1xuXG5leHBvcnQgY29uc3QgUFJPVklERVJTID0gW1xuICAgIC4uLkFQUExJQ0FUSU9OX1BST1ZJREVSU1xuXTtcbiJdfQ==

/***/ },

/***/ 646:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PLATFORM_PROVIDERS = undefined;
	
	var _browserDirectives = __webpack_require__(643);
	
	Object.keys(_browserDirectives).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _browserDirectives[key];
	        }
	    });
	});
	
	var _browserPipes = __webpack_require__(644);
	
	Object.keys(_browserPipes).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _browserPipes[key];
	        }
	    });
	});
	
	var _browserProviders = __webpack_require__(645);
	
	Object.keys(_browserProviders).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _browserProviders[key];
	        }
	    });
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var PLATFORM_PROVIDERS = exports.PLATFORM_PROVIDERS = [].concat(_toConsumableArray(_browserProviders.PROVIDERS), _toConsumableArray(_browserDirectives.DIRECTIVES), _toConsumableArray(_browserPipes.PIPES));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGxhdGZvcm0vYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFNTyxJQUFNLHdNQUFOIiwiZmlsZSI6ImJyb3dzZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYnJvd3Nlci1kaXJlY3RpdmVzJztcbmV4cG9ydCAqIGZyb20gJy4vYnJvd3Nlci1waXBlcyc7XG5leHBvcnQgKiBmcm9tICcuL2Jyb3dzZXItcHJvdmlkZXJzJztcblxuaW1wb3J0IHsgRElSRUNUSVZFUyB9IGZyb20gJy4vYnJvd3Nlci1kaXJlY3RpdmVzJztcbmltcG9ydCB7IFBJUEVTIH0gZnJvbSAnLi9icm93c2VyLXBpcGVzJztcbmltcG9ydCB7IFBST1ZJREVSUyB9IGZyb20gJy4vYnJvd3Nlci1wcm92aWRlcnMnO1xuXG5leHBvcnQgY29uc3QgUExBVEZPUk1fUFJPVklERVJTID0gW1xuICAgIC4uLlBST1ZJREVSUyxcbiAgICAuLi5ESVJFQ1RJVkVTLFxuICAgIC4uLlBJUEVTXG5dO1xuIl19

/***/ },

/***/ 647:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ENV_PROVIDERS = undefined;
	
	var _core = __webpack_require__(1);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';
	
	
	// Environment Providers
	var PROVIDERS = [
	    // common env directives
	];
	
	// Angular debug tools in the dev console
	// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
	// let _decorateComponentRef = function identity(value) {
	//     return value;
	// };
	
	if (true) {
	    // Production
	    // disableDebugTools();
	    (0, _core.enableProdMode)();
	
	    PROVIDERS = [].concat(_toConsumableArray(PROVIDERS));
	} else
	    // custom providers in production
	    {
	        // _decorateComponentRef = (cmpRef) => enableDebugTools(cmpRef);
	        // Development
	        PROVIDERS = [].concat(_toConsumableArray(PROVIDERS));
	    }
	
	// export const decorateComponentRef = _decorateComponentRef;
	
	// custom providers in development
	var ENV_PROVIDERS = exports.ENV_PROVIDERS = [].concat(_toConsumableArray(PROVIDERS));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGxhdGZvcm0vZW52aXJvbm1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztvTUFEQTs7O0FBR0E7QUFDQSxJQUFJLFlBQVk7QUFDWjtBQURZLENBQWhCOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxRQUFRLFlBQVosRUFBMEI7QUFDdEI7QUFDQTtBQUNBOztBQUVBLDZDQUNPLFNBRFA7QUFJSCxDQVREO0FBT1E7QUFFRDtBQUNIO0FBQ0E7QUFDQSxpREFDTyxTQURQO0FBSUg7O0FBRUQ7O0FBSlE7QUFLRCxJQUFNLHFFQUNOLFNBRE0sRUFBTiIsImZpbGUiOiJlbnZpcm9ubWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgZW5hYmxlRGVidWdUb29scywgZGlzYWJsZURlYnVnVG9vbHMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEVudmlyb25tZW50IFByb3ZpZGVyc1xubGV0IFBST1ZJREVSUyA9IFtcbiAgICAvLyBjb21tb24gZW52IGRpcmVjdGl2ZXNcbl07XG5cbi8vIEFuZ3VsYXIgZGVidWcgdG9vbHMgaW4gdGhlIGRldiBjb25zb2xlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvODY0MDUzNDViNzgxYTlkYzI0MzhjMGZiZTNlOTQwOTI0NTY0NzAxOS9UT09MU19KUy5tZFxuLy8gbGV0IF9kZWNvcmF0ZUNvbXBvbmVudFJlZiA9IGZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4vLyAgICAgcmV0dXJuIHZhbHVlO1xuLy8gfTtcblxuaWYgKEVOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gUHJvZHVjdGlvblxuICAgIC8vIGRpc2FibGVEZWJ1Z1Rvb2xzKCk7XG4gICAgZW5hYmxlUHJvZE1vZGUoKTtcblxuICAgIFBST1ZJREVSUyA9IFtcbiAgICAgICAgLi4uUFJPVklERVJTXG4gICAgICAgIC8vIGN1c3RvbSBwcm92aWRlcnMgaW4gcHJvZHVjdGlvblxuICAgIF07XG59IGVsc2Uge1xuICAgIC8vIF9kZWNvcmF0ZUNvbXBvbmVudFJlZiA9IChjbXBSZWYpID0+IGVuYWJsZURlYnVnVG9vbHMoY21wUmVmKTtcbiAgICAvLyBEZXZlbG9wbWVudFxuICAgIFBST1ZJREVSUyA9IFtcbiAgICAgICAgLi4uUFJPVklERVJTXG4gICAgICAgIC8vIGN1c3RvbSBwcm92aWRlcnMgaW4gZGV2ZWxvcG1lbnRcbiAgICBdO1xufVxuXG4vLyBleHBvcnQgY29uc3QgZGVjb3JhdGVDb21wb25lbnRSZWYgPSBfZGVjb3JhdGVDb21wb25lbnRSZWY7XG5leHBvcnQgY29uc3QgRU5WX1BST1ZJREVSUyA9IFtcbiAgICAuLi5QUk9WSURFUlNcbl07XG4iXX0=

/***/ }

});
//# sourceMappingURL=demo.28f6450bd8cd497dff39.bundle.map