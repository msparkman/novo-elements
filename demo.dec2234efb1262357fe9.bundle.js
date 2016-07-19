webpackJsonp([32],{

/***/ 745:
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
	
	var _platformBrowserDynamic = __webpack_require__(330);
	
	var _browser = __webpack_require__(642);
	
	var _environment = __webpack_require__(643);
	
	var _App = __webpack_require__(638);
	
	__webpack_require__(745);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vbWFpbi5icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O1FBV2dCLEksR0FBQSxJOztBQVhoQjs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7O0FBSU8sU0FBUyxJQUFULEdBQWdCO0FBQ25CLFdBQU87QUFJSDtBQUpHLEtBS0YsS0FMRSxDQUtJO0FBQUEsZUFBTyxRQUFRLEtBQVIsQ0FBYyxHQUFkLENBQVA7QUFBQSxLQUxKLENBQVAsQ0FLdUM7QUFDMUM7O0FBR0Q7QUFDQTtBQUNBLElBQUksUUFBUSxhQUFSLElBQXlCLFFBQVEsSUFBckMsRUFBMkM7QUFDdkM7QUFDQSxRQUFJLFFBQVEsUUFBUSxjQUFSLENBQVo7QUFDQSxVQUFNLG9CQUFOLENBQTJCLElBQTNCLEVBQWlDLE1BQWpDO0FBQ0gsQ0FKRCxNQUlPO0FBQ0g7QUFDQSxhQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QztBQUFBLGVBQU0sTUFBTjtBQUFBLEtBQTlDO0FBQ0giLCJmaWxlIjoibWFpbi5icm93c2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9icmlhbmtpbWJhbGwvTm92by9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcblxuaW1wb3J0IHsgUExBVEZPUk1fUFJPVklERVJTIH0gZnJvbSAnLi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7IEVOVl9QUk9WSURFUlMgfSBmcm9tICcuL3BsYXRmb3JtL2Vudmlyb25tZW50JztcbmltcG9ydCB7IERlbW9BcHAgfSBmcm9tICcuL3BhZ2VzL2FwcC9BcHAnO1xuaW1wb3J0ICcuL2RlbW8uc2Nzcyc7XG5cbi8qKlxuICogQm9vdHN0cmFwIG91ciBBbmd1bGFyIGFwcCB3aXRoIGEgdG9wIGxldmVsIGNvbXBvbmVudCBgQXBwYCBhbmQgaW5qZWN0XG4gKiBvdXIgU2VydmljZXMgYW5kIFByb3ZpZGVycyBpbnRvIEFuZ3VsYXIncyBkZXBlbmRlbmN5IGluamVjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFpbigpIHtcbiAgICByZXR1cm4gYm9vdHN0cmFwKERlbW9BcHAsIFtcbiAgICAgICAgLi4uUExBVEZPUk1fUFJPVklERVJTLFxuICAgICAgICAuLi5FTlZfUFJPVklERVJTXG4gICAgXSlcbiAgICAgICAgLy8gLnRoZW4oZGVjb3JhdGVDb21wb25lbnRSZWYpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufVxuXG5cbi8vIEhvdCBNb2R1bGUgUmVsb2FkXG4vLyBleHBlcmltZW50YWwgdmVyc2lvbiBieSBAZ2RpMjI5MFxuaWYgKEVOViA9PT0gJ2RldmVsb3BtZW50JyAmJiBITVIgPT09IHRydWUpIHtcbiAgICAvLyBhY3RpdmF0ZSBob3QgbW9kdWxlIHJlbG9hZFxuICAgIGxldCBuZ0htciA9IHJlcXVpcmUoJ2FuZ3VsYXIyLWhtcicpO1xuICAgIG5nSG1yLmhvdE1vZHVsZVJlcGxhY2VtZW50KG1haW4sIG1vZHVsZSk7XG59IGVsc2Uge1xuICAgIC8vIGJvb3RzdHJhcCB3aGVuIGRvY3VtZW50IGlzIHJlYWR5XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IG1haW4oKSk7XG59XG4iXX0=

/***/ },

/***/ 747:
/***/ function(module, exports) {

	module.exports = "<nav class=\"main-nav\" [ngClass]=\"{open: menuOpen}\">\n    <span class=\"logo\">\n        <svg [routerLink]=\"['/Home']\" data-name=\"novo-logo\" xmlns=\"http://www.w3.org/2000/svg\"\n             viewBox=\"0 0 400 400\" class=\"{% if page.url != '/' %}site-avatar{% endif %}\">\n            <defs></defs>\n            <title>NovoBranding</title>\n            <circle class=\"center-dot\" cx=\"200.18\" cy=\"197.5\" r=\"28.65\"/>\n            <path class=\"outer-ring\" d=\"M371,178.06C362,98.75,298.92,35.6,219.6,26.65a19.88,19.88,0,0,0-38.84,0c-79.32,9-142.43,72.11-151.4,151.43a19.88,19.88,0,0,0,0,38.85c9,79.32,72.07,142.47,151.4,151.43a19.88,19.88,0,0,0,38.84,0c79.32-9,142.43-72.1,151.4-151.42A19.88,19.88,0,0,0,371,178.06ZM192.56,25.72a9.25,9.25,0,0,1,1-1.18l0.26-.27a9.31,9.31,0,0,1,1.17-1l0.24-.15a9.13,9.13,0,0,1,1.22-.66l0.26-.12a9.17,9.17,0,0,1,1.49-.46l0.34-.07a8.29,8.29,0,0,1,3.32,0l0.34,0.07a9.17,9.17,0,0,1,1.49.46l0.26,0.12a9.13,9.13,0,0,1,1.22.66l0.24,0.15a9.31,9.31,0,0,1,1.17,1l0.26,0.27a9.25,9.25,0,0,1,1,1.18,9.1,9.1,0,0,1-.29,10.68h0a9.28,9.28,0,0,1-1.27,1.36l-0.42.35a9.1,9.1,0,0,1-.89.62,9.21,9.21,0,0,1-.87.47l-0.5.22a9,9,0,0,1-1.38.43l-0.34.06a8.24,8.24,0,0,1-3.3,0l-0.34-.06a9,9,0,0,1-1.38-.43l-0.5-.22a9.21,9.21,0,0,1-.87-0.47,9.1,9.1,0,0,1-.89-0.62l-0.42-.35a9.28,9.28,0,0,1-1.27-1.36h0A9.1,9.1,0,0,1,192.56,25.72ZM28.39,205.09a9.25,9.25,0,0,1-1.14-.94l-0.3-.3a9.26,9.26,0,0,1-.94-1.14l-0.16-.26a9.09,9.09,0,0,1-.65-1.19c0-.09-0.09-0.18-0.13-0.28a9.1,9.1,0,0,1-.46-1.49c0-.11,0-0.23-0.07-0.34a8.27,8.27,0,0,1,0-3.31c0-.12,0-0.23.07-0.34a9.1,9.1,0,0,1,.46-1.49c0-.1.09-0.19,0.13-0.28a9.09,9.09,0,0,1,.65-1.19l0.16-.26a9.22,9.22,0,0,1,.94-1.14l0.3-.3a9.11,9.11,0,0,1,13.2.59c0.13,0.14.25,0.29,0.37,0.44a9.22,9.22,0,0,1,1.08,1.75c0.08,0.16.15,0.33,0.22,0.49a9.08,9.08,0,0,1,.43,1.39c0,0.11,0,.23.06,0.34a8.22,8.22,0,0,1,0,3.29c0,0.11,0,.23-0.06.34a9.08,9.08,0,0,1-.43,1.39c-0.07.17-.15,0.33-0.22,0.49a9.22,9.22,0,0,1-1.08,1.75c-0.12.15-.24,0.3-0.37,0.44A9.12,9.12,0,0,1,28.39,205.09ZM200.18,374a9.21,9.21,0,1,1,9.21-9.21A9.22,9.22,0,0,1,200.18,374ZM219,357.67a19.86,19.86,0,0,0-37.59,0A161.56,161.56,0,0,1,40,216.29a19.86,19.86,0,0,0,0-37.58A161.56,161.56,0,0,1,181.38,37.32a19.86,19.86,0,0,0,37.59,0,161.56,161.56,0,0,1,141.35,141.4,19.86,19.86,0,0,0,0,37.55A161.56,161.56,0,0,1,219,357.67Zm147.84-151A9.21,9.21,0,1,1,376,197.5,9.22,9.22,0,0,1,366.81,206.7Z\"\n            />\n            <path class=\"inner-ring\" d=\"M219.76,103.11a19.86,19.86,0,0,0-39.17,0,96.4,96.4,0,0,0,0,188.78,19.86,19.86,0,0,0,39.17,0A96.4,96.4,0,0,0,219.76,103.11Zm-19.58-5.87a9.17,9.17,0,0,1,5.9,16.22l-0.25.2a9.11,9.11,0,0,1-1,.67c-0.26.16-.53,0.31-0.8,0.44l-0.55.24a8.92,8.92,0,0,1-1.35.42l-0.33.06a8.24,8.24,0,0,1-3.3,0l-0.33-.06a8.92,8.92,0,0,1-1.35-.42l-0.55-.24c-0.28-.13-0.54-0.28-0.8-0.44a9.11,9.11,0,0,1-1-.67l-0.25-.2A9.17,9.17,0,0,1,200.18,97.24ZM207.54,294a9.21,9.21,0,0,1-.61.74c-0.13.15-.27,0.29-0.41,0.43a9.25,9.25,0,0,1-1.06.87l-0.41.26a9.11,9.11,0,0,1-1.07.58l-0.31.15a9.08,9.08,0,0,1-1.47.46l-0.38.07a8.22,8.22,0,0,1-3.29,0l-0.38-.07a9.08,9.08,0,0,1-1.47-.46l-0.31-.15a9.11,9.11,0,0,1-1.07-.58l-0.41-.26a9.25,9.25,0,0,1-1.06-.87c-0.14-.14-0.27-0.29-0.41-0.43a9.08,9.08,0,0,1,.85-13.22l0.25-.2a9.11,9.11,0,0,1,1-.67c0.26-.16.53-0.31,0.8-0.44l0.55-.24a8.92,8.92,0,0,1,1.35-.42l0.33-.06a8.24,8.24,0,0,1,3.3,0l0.33,0.06a8.92,8.92,0,0,1,1.35.42l0.55,0.24c0.28,0.13.54,0.28,0.8,0.44a9.11,9.11,0,0,1,1,.67l0.25,0.2A9.06,9.06,0,0,1,207.54,294Zm11.1-12.84a19.86,19.86,0,0,0-36.92,0,85.7,85.7,0,0,1,0-167.38,19.86,19.86,0,0,0,36.92,0A85.7,85.7,0,0,1,218.63,281.19Z\"\n            />\n        </svg>\n        <svg [routerLink]=\"['/Home']\" data-name=\"bullhorn-text\" version=\"1.1\"\n            xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n            x=\"0px\" y=\"0px\" width=\"240.2px\" height=\"48.8px\" viewBox=\"0 0 240.2 48.8\"\n            style=\"enable-background:new 0 0 240.2 48.8;\" xml:space=\"preserve\">\n            <style type=\"text/css\">\n                .st0 {\n                    fill: #FFFFFF;\n                }\n            </style>\n            <defs></defs>\n            <g>\n                <path class=\"st0\" d=\"M0,1.5c0-0.6,0.5-1.1,1.1-1.1h20c5.4,0,9.5,1.4,12.3,4.2c2.1,2.1,3.2,4.7,3.2,7.8v0.1c0,1.4-0.2,2.6-0.6,3.8\n                c-0.4,1.1-0.9,2.1-1.5,2.9c-0.6,0.8-1.3,1.6-2.1,2.2c-0.2,0.2-0.4,0.3-0.7,0.5c-0.7,0.5-0.6,1.6,0.1,1.9c1.9,0.9,3.4,1.9,4.7,3.2\n                c1.7,1.7,2.6,4.2,2.6,7.4v0.1c0,2.1-0.4,4-1.2,5.6c-0.8,1.6-2,3-3.5,4c-1.5,1.1-3.4,1.9-5.5,2.5c-2.1,0.6-4.5,0.8-7.2,0.8H1.1\n                C0.5,47.5,0,47,0,46.4V1.5z M19.4,20.3c2.7,0,4.8-0.5,6.5-1.6c1.6-1,2.4-2.6,2.4-4.8v-0.1c0-1.9-0.7-3.3-2.1-4.4\n                c-1.4-1-3.5-1.6-6.2-1.6H9.3c-0.6,0-1.1,0.5-1.1,1.1v10.2c0,0.6,0.5,1.1,1.1,1.1H19.4z M21.8,40.1c2.8,0,5-0.5,6.7-1.6\n                c1.6-1.1,2.4-2.7,2.4-4.8v-0.1c0-2-0.8-3.6-2.4-4.6c-1.6-1.1-4-1.6-7.3-1.6h-12c-0.6,0-1.1,0.5-1.1,1.1V39c0,0.6,0.5,1.1,1.1,1.1\n                H21.8z\" />\n                <path class=\"st0\" d=\"M81.3,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3h-5.9c-0.7,0-1.3-0.6-1.3-1.3v-45\n                C80.1,0.6,80.6,0,81.3,0z\" />\n                <path class=\"st0\" d=\"M96,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3H96c-0.7,0-1.3-0.6-1.3-1.3v-45\n                C94.8,0.6,95.3,0,96,0z\" />\n                <path class=\"st0\" d=\"M109.5,0l4,0c2.3,0,4.2,1.9,4.2,4.2v13.3c0.9-0.9,2.1-1.9,3.7-2.8c1.6-0.9,3.7-1.4,6.3-1.4c2,0,3.9,0.3,5.5,1\n                c1.6,0.7,3,1.6,4,2.8c1.1,1.2,1.9,2.7,2.5,4.4c0.6,1.7,0.9,3.6,0.9,5.6v19.1c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2\n                V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9c-0.7,0.8-1.3,1.7-1.7,2.8\n                c-0.4,1.1-0.6,2.2-0.6,3.5v16.9c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2V5.8V0z\"\n                />\n                <path class=\"st0\" d=\"M210.5,14.1h5.3c0.7,0,1.4,0.6,1.4,1.3l0.1,2.4c0.4-0.5,0.9-1,1.5-1.5c0.6-0.5,1.3-1,2.1-1.5\n                c0.8-0.5,1.8-0.8,2.8-1.1c1-0.3,2.2-0.4,3.6-0.4c4.2,0,7.4,1.2,9.5,3.7c2.2,2.5,3.3,5.8,3.3,10.1V46c0,0.8-0.7,1.5-1.5,1.5h-5.4\n                c-0.8,0-1.5-0.7-1.5-1.5V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9\n                c-0.7,0.8-1.3,1.7-1.7,2.8c-0.4,1.1-0.6,2.2-0.6,3.5V46c0,0.8-0.7,1.5-1.5,1.5h-5.4c-0.8,0-1.5-0.7-1.5-1.5V15.5\n                C209.1,14.7,209.7,14.1,210.5,14.1z\" />\n                <g>\n                    <path class=\"st0\" d=\"M184.5,14h5.3c0.8,0,1.4,0.6,1.4,1.4l0.1,2.8c0.4-0.5,0.9-1,1.5-1.6c0.6-0.6,1.3-1.1,2.1-1.6\n                    c0.8-0.5,1.7-0.9,2.8-1.2c1.1-0.3,2.3-0.5,3.7-0.5c0.8,0,1.5,0,2.2,0.1c0.3,0,0.5,0.1,0.8,0.2c0.6,0.2,1,0.8,0.9,1.4l-1.2,5.5\n                    c-0.1,0.7-0.8,1.1-1.5,0.9c-0.2,0-0.4-0.1-0.6-0.1c-0.6-0.1-1.3-0.1-2.1-0.1c-1.1,0-2.2,0.2-3.3,0.6c-1,0.4-1.9,0.9-2.7,1.6\n                    c-0.8,0.7-1.4,1.6-1.8,2.6c-0.5,1-0.7,2.1-0.7,3.3V46c0,0.8-0.6,1.4-1.4,1.4h-5.6c-0.8,0-1.4-0.6-1.4-1.4V15.4\n                    C183.1,14.6,183.7,14,184.5,14z\" />\n                </g>\n                <path id=\"u_1_\" class=\"st0\" d=\"M67.4,14.6c-0.7,0-1.3,0.6-1.3,1.3v16.2c0,4.4-3.2,7.4-7,7.4c-0.7,0-1.2,0-1.5,0c-3.9,0-7-3-7-7.4\n                V15.9c0-0.7-0.6-1.3-1.3-1.3H44c-0.7,0-1.3,0.6-1.3,1.3v18c0,7.8,7.2,13.3,14.7,13.3v0h0.1c0,0,0.1,0,0.1,0l0,0h1.4l0,0\n                c0,0,0.1,0,0.1,0h0.2v0c7.5-0.1,14.6-5.5,14.6-13.3v-18c0-0.7-0.6-1.3-1.3-1.3H67.4z\"\n                />\n                <g>\n                    <g>\n                        <g>\n                            <path class=\"st0\" d=\"M144,30.9c0-2.4,0.4-4.7,1.3-6.9c0.9-2.2,2.1-4,3.7-5.7c1.6-1.6,3.5-2.9,5.7-3.8c2.2-0.9,4.6-1.4,7.3-1.4\n                            c2.7,0,5.1,0.5,7.3,1.4c2.2,0.9,4.1,2.2,5.7,3.8c1.6,1.6,2.8,3.5,3.7,5.7c0.9,2.2,1.3,4.4,1.3,6.9s-0.4,4.7-1.3,6.9\n                            c-0.9,2.2-2.1,4.1-3.7,5.7c-1.6,1.6-3.5,2.9-5.7,3.9c-2.2,0.9-4.6,1.4-7.3,1.4c-2.7,0-5.1-0.5-7.3-1.4c-2.2-0.9-4.1-2.2-5.7-3.9\n                            c-1.6-1.6-2.8-3.5-3.7-5.7C144.4,35.6,144,33.3,144,30.9z M161.9,41.5c1.6,0,3-0.3,4.2-1c1.2-0.6,2.2-1.5,3-2.5\n                            c0.8-1,1.4-2.2,1.7-3.4c0.4-1.2,0.6-2.5,0.6-3.7c0-1.2-0.2-2.4-0.6-3.7c-0.4-1.3-1-2.4-1.7-3.4c-0.8-1-1.8-1.9-3-2.5\n                            c-1.2-0.6-2.6-1-4.2-1c-1.6,0-3,0.3-4.2,1c-1.2,0.6-2.2,1.5-3,2.5c-0.8,1-1.4,2.2-1.7,3.4c-0.4,1.3-0.6,2.5-0.6,3.7\n                            c0,1.2,0.2,2.5,0.6,3.7c0.4,1.2,1,2.4,1.7,3.4c0.8,1,1.8,1.9,3,2.5C158.9,41.2,160.3,41.5,161.9,41.5z\"\n                            />\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </svg>\n\n        <h5 [routerLink]=\"['/Home']\">NOVO Design System</h5>\n        <span class=\"version\">v. {{version}}</span>\n        <a href=\"https://github.com/bullhorn/novo-elements\" target=\"_blank\"\n           class=\"fork-me\">Fork Me On Github</a>\n    </span>\n    <app-nav [routes]=\"appRoutes\"></app-nav>\n    <ul class=\"menu-list\">\n        <li class=\"menu-item\" [class.current]=\"router.isRouteActive(router.generate(['/Home']))\">\n            <a [routerLink]=\"['/Home']\" class=\"menu-link\">Introduction</a>\n        </li>\n\n        <li class=\"menu-section-header\">\n            <span class=\"menu-item-header\">Design</span>\n        </li>\n        <li class=\"menu-item\" *ngFor=\"let route of designRoutes\" [class.current]=\"router.isRouteActive(router.generate(['/'+route.name]))\">\n            <a [routerLink]=\"['/' + route.name]\" class=\"menu-link\">{{route.name}}</a>\n        </li>\n        <li class=\"menu-section-header\">\n            <span class=\"menu-item-header\">Components</span>\n        </li>\n        <li class=\"menu-item\" *ngFor=\"let route of componentRoutes\" [class.current]=\"router.isRouteActive(router.generate(['/'+route.name]))\">\n            <a [routerLink]=\"['/'+route.name]\" class=\"menu-link\">{{route.name}}</a>\n        </li>\n        <li class=\"menu-section-header\">\n            <span class=\"menu-item-header\">Utils</span>\n        </li>\n        <li class=\"menu-item\" *ngFor=\"let route of utilRoutes\" [class.current]=\"router.isRouteActive(router.generate(['/'+route.name]))\">\n            <a [routerLink]=\"['/'+route.name]\" class=\"menu-link\">{{route.name}}</a>\n        </li>\n        <li class=\"menu-line\"></li>\n    </ul>\n</nav>\n<main class=\"main-content\" [ngClass]=\"{open: menuOpen}\">\n    <nav class=\"responsive-nav\">\n        <button name=\"open-menu\" (click)=\"toggleMenu()\">\n            <span>&#9776;</span>\n        </button>\n        <svg data-name=\"bullhorn-text\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n            x=\"0px\" y=\"0px\" width=\"240.2px\" height=\"48.8px\" viewBox=\"0 0 240.2 48.8\"\n            style=\"enable-background:new 0 0 240.2 48.8;\" xml:space=\"preserve\">\n            <g>\n                <path class=\"st0\" d=\"M0,1.5c0-0.6,0.5-1.1,1.1-1.1h20c5.4,0,9.5,1.4,12.3,4.2c2.1,2.1,3.2,4.7,3.2,7.8v0.1c0,1.4-0.2,2.6-0.6,3.8\n            c-0.4,1.1-0.9,2.1-1.5,2.9c-0.6,0.8-1.3,1.6-2.1,2.2c-0.2,0.2-0.4,0.3-0.7,0.5c-0.7,0.5-0.6,1.6,0.1,1.9c1.9,0.9,3.4,1.9,4.7,3.2\n            c1.7,1.7,2.6,4.2,2.6,7.4v0.1c0,2.1-0.4,4-1.2,5.6c-0.8,1.6-2,3-3.5,4c-1.5,1.1-3.4,1.9-5.5,2.5c-2.1,0.6-4.5,0.8-7.2,0.8H1.1\n            C0.5,47.5,0,47,0,46.4V1.5z M19.4,20.3c2.7,0,4.8-0.5,6.5-1.6c1.6-1,2.4-2.6,2.4-4.8v-0.1c0-1.9-0.7-3.3-2.1-4.4\n            c-1.4-1-3.5-1.6-6.2-1.6H9.3c-0.6,0-1.1,0.5-1.1,1.1v10.2c0,0.6,0.5,1.1,1.1,1.1H19.4z M21.8,40.1c2.8,0,5-0.5,6.7-1.6\n            c1.6-1.1,2.4-2.7,2.4-4.8v-0.1c0-2-0.8-3.6-2.4-4.6c-1.6-1.1-4-1.6-7.3-1.6h-12c-0.6,0-1.1,0.5-1.1,1.1V39c0,0.6,0.5,1.1,1.1,1.1\n            H21.8z\" />\n                <path class=\"st0\" d=\"M81.3,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3h-5.9c-0.7,0-1.3-0.6-1.3-1.3v-45\n            C80.1,0.6,80.6,0,81.3,0z\" />\n                <path class=\"st0\" d=\"M96,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3H96c-0.7,0-1.3-0.6-1.3-1.3v-45\n            C94.8,0.6,95.3,0,96,0z\" />\n                <path class=\"st0\" d=\"M109.5,0l4,0c2.3,0,4.2,1.9,4.2,4.2v13.3c0.9-0.9,2.1-1.9,3.7-2.8c1.6-0.9,3.7-1.4,6.3-1.4c2,0,3.9,0.3,5.5,1\n            c1.6,0.7,3,1.6,4,2.8c1.1,1.2,1.9,2.7,2.5,4.4c0.6,1.7,0.9,3.6,0.9,5.6v19.1c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2\n            V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9c-0.7,0.8-1.3,1.7-1.7,2.8\n            c-0.4,1.1-0.6,2.2-0.6,3.5v16.9c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2V5.8V0z\"\n                />\n                <path class=\"st0\" d=\"M210.5,14.1h5.3c0.7,0,1.4,0.6,1.4,1.3l0.1,2.4c0.4-0.5,0.9-1,1.5-1.5c0.6-0.5,1.3-1,2.1-1.5\n            c0.8-0.5,1.8-0.8,2.8-1.1c1-0.3,2.2-0.4,3.6-0.4c4.2,0,7.4,1.2,9.5,3.7c2.2,2.5,3.3,5.8,3.3,10.1V46c0,0.8-0.7,1.5-1.5,1.5h-5.4\n            c-0.8,0-1.5-0.7-1.5-1.5V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9\n            c-0.7,0.8-1.3,1.7-1.7,2.8c-0.4,1.1-0.6,2.2-0.6,3.5V46c0,0.8-0.7,1.5-1.5,1.5h-5.4c-0.8,0-1.5-0.7-1.5-1.5V15.5\n            C209.1,14.7,209.7,14.1,210.5,14.1z\" />\n                <g>\n                    <path class=\"st0\" d=\"M184.5,14h5.3c0.8,0,1.4,0.6,1.4,1.4l0.1,2.8c0.4-0.5,0.9-1,1.5-1.6c0.6-0.6,1.3-1.1,2.1-1.6\n                c0.8-0.5,1.7-0.9,2.8-1.2c1.1-0.3,2.3-0.5,3.7-0.5c0.8,0,1.5,0,2.2,0.1c0.3,0,0.5,0.1,0.8,0.2c0.6,0.2,1,0.8,0.9,1.4l-1.2,5.5\n                c-0.1,0.7-0.8,1.1-1.5,0.9c-0.2,0-0.4-0.1-0.6-0.1c-0.6-0.1-1.3-0.1-2.1-0.1c-1.1,0-2.2,0.2-3.3,0.6c-1,0.4-1.9,0.9-2.7,1.6\n                c-0.8,0.7-1.4,1.6-1.8,2.6c-0.5,1-0.7,2.1-0.7,3.3V46c0,0.8-0.6,1.4-1.4,1.4h-5.6c-0.8,0-1.4-0.6-1.4-1.4V15.4\n                C183.1,14.6,183.7,14,184.5,14z\" />\n                </g>\n                <path id=\"u_1_\" class=\"st0\" d=\"M67.4,14.6c-0.7,0-1.3,0.6-1.3,1.3v16.2c0,4.4-3.2,7.4-7,7.4c-0.7,0-1.2,0-1.5,0c-3.9,0-7-3-7-7.4\n            V15.9c0-0.7-0.6-1.3-1.3-1.3H44c-0.7,0-1.3,0.6-1.3,1.3v18c0,7.8,7.2,13.3,14.7,13.3v0h0.1c0,0,0.1,0,0.1,0l0,0h1.4l0,0\n            c0,0,0.1,0,0.1,0h0.2v0c7.5-0.1,14.6-5.5,14.6-13.3v-18c0-0.7-0.6-1.3-1.3-1.3H67.4z\"\n                />\n                <g>\n                    <g>\n                        <g>\n                            <path class=\"st0\" d=\"M144,30.9c0-2.4,0.4-4.7,1.3-6.9c0.9-2.2,2.1-4,3.7-5.7c1.6-1.6,3.5-2.9,5.7-3.8c2.2-0.9,4.6-1.4,7.3-1.4\n                        c2.7,0,5.1,0.5,7.3,1.4c2.2,0.9,4.1,2.2,5.7,3.8c1.6,1.6,2.8,3.5,3.7,5.7c0.9,2.2,1.3,4.4,1.3,6.9s-0.4,4.7-1.3,6.9\n                        c-0.9,2.2-2.1,4.1-3.7,5.7c-1.6,1.6-3.5,2.9-5.7,3.9c-2.2,0.9-4.6,1.4-7.3,1.4c-2.7,0-5.1-0.5-7.3-1.4c-2.2-0.9-4.1-2.2-5.7-3.9\n                        c-1.6-1.6-2.8-3.5-3.7-5.7C144.4,35.6,144,33.3,144,30.9z M161.9,41.5c1.6,0,3-0.3,4.2-1c1.2-0.6,2.2-1.5,3-2.5\n                        c0.8-1,1.4-2.2,1.7-3.4c0.4-1.2,0.6-2.5,0.6-3.7c0-1.2-0.2-2.4-0.6-3.7c-0.4-1.3-1-2.4-1.7-3.4c-0.8-1-1.8-1.9-3-2.5\n                        c-1.2-0.6-2.6-1-4.2-1c-1.6,0-3,0.3-4.2,1c-1.2,0.6-2.2,1.5-3,2.5c-0.8,1-1.4,2.2-1.7,3.4c-0.4,1.3-0.6,2.5-0.6,3.7\n                        c0,1.2,0.2,2.5,0.6,3.7c0.4,1.2,1,2.4,1.7,3.4c0.8,1,1.8,1.9,3,2.5C158.9,41.2,160.3,41.5,161.9,41.5z\"\n                            />\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </svg>\n        <strong>Design System</strong>\n    </nav>\n    <router-outlet></router-outlet>\n</main>\n"

/***/ },

/***/ 638:
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
	
	var _routerDeprecated = __webpack_require__(143);
	
	var _novoElements = __webpack_require__(15);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var DemoApp = exports.DemoApp = (_dec = (0, _core.Component)({
	    selector: 'demo-app',
	    template: __webpack_require__(747),
	    providers: [].concat(_toConsumableArray(_novoElements.TOAST_PROVIDERS), _toConsumableArray(_novoElements.MODAL_PROVIDERS)),
	    directives: [_common.CORE_DIRECTIVES]
	}), _dec2 = (0, _routerDeprecated.RouteConfig)([
	// Base Pages (design system)
	{ path: '/', name: 'Home', loader: function loader() {
	        return __webpack_require__(726)('Home');
	    }, useAsDefault: true }, { path: '/composition', name: 'Composition', loader: function loader() {
	        return __webpack_require__(728)('Layout');
	    } }, { path: '/typography', name: 'Typography', loader: function loader() {
	        return __webpack_require__(743)('Typography');
	    } }, { path: '/icons', name: 'Iconography', loader: function loader() {
	        return __webpack_require__(727)('Iconography');
	    } }, { path: '/color', name: 'Color', loader: function loader() {
	        return __webpack_require__(720)('Color');
	    } },
	
	// Element/Component/Service/etc.. Demos
	{ path: '/button', name: 'Button', loader: function loader() {
	        return __webpack_require__(716)('ButtonDemo');
	    } }, { path: '/radio', name: 'Radio', loader: function loader() {
	        return __webpack_require__(735)('RadioDemo');
	    } }, { path: '/quick-note', name: 'QuickNote', loader: function loader() {
	        return __webpack_require__(734)('QuickNoteDemo');
	    } }, { path: '/modal', name: 'Modal', loader: function loader() {
	        return __webpack_require__(731)('ModalDemo');
	    } }, { path: '/form', name: 'Form', loader: function loader() {
	        return __webpack_require__(724)('FormDemo');
	    } }, { path: '/toast', name: 'Toast', loader: function loader() {
	        return __webpack_require__(741)('ToastDemo');
	    } }, { path: '/tooltip', name: 'Tooltip', loader: function loader() {
	        return __webpack_require__(742)('TooltipDemo');
	    } }, { path: '/cards', name: 'Cards', loader: function loader() {
	        return __webpack_require__(718)('CardDemo');
	    } }, { path: '/loading', name: 'Loading', loader: function loader() {
	        return __webpack_require__(730)('LoadingDemo');
	    } }, { path: '/dropdown', name: 'Dropdown', loader: function loader() {
	        return __webpack_require__(723)('DropdownDemo');
	    } }, { path: '/picker', name: 'Picker', loader: function loader() {
	        return __webpack_require__(732)('PickerDemo');
	    } }, { path: '/chips', name: 'Chips', loader: function loader() {
	        return __webpack_require__(719)('ChipsDemo');
	    } }, { path: '/select', name: 'Select', loader: function loader() {
	        return __webpack_require__(736)('SelectDemo');
	    } }, { path: '/tabs', name: 'Tabs', loader: function loader() {
	        return __webpack_require__(739)('TabsDemo');
	    } }, { path: '/table', name: 'Table', loader: function loader() {
	        return __webpack_require__(738)('TableDemo');
	    } }, { path: '/list', name: 'List', loader: function loader() {
	        return __webpack_require__(729)('ListDemo');
	    } }, { path: '/header', name: 'Header', loader: function loader() {
	        return __webpack_require__(725)('HeaderDemo');
	    } }, { path: '/switch', name: 'Switch', loader: function loader() {
	        return __webpack_require__(737)('SwitchDemo');
	    } }, { path: '/drawer', name: 'Drawer', loader: function loader() {
	        return __webpack_require__(722)('DrawerDemo');
	    } }, { path: '/calendar', name: 'Calendar', loader: function loader() {
	        return __webpack_require__(717)('CalendarDemo');
	    } }, { path: '/dragula', name: 'Dragula', loader: function loader() {
	        return __webpack_require__(721)('DragulaDemo');
	    } }, { path: '/tiles', name: 'Tiles', loader: function loader() {
	        return __webpack_require__(740)('TilesDemo');
	    } },
	
	// Utils
	{ path: '/utils', name: 'Utils', loader: function loader() {
	        return __webpack_require__(744)('UtilsDemo');
	    } }, { path: '/pipes', name: 'Pipes', loader: function loader() {
	        return __webpack_require__(733)('PipesDemo');
	    } }]), _dec(_class = _dec2(_class = function () {
	    function DemoApp(router, toastService, view, modalService) {
	        var _this = this;
	
	        _classCallCheck(this, DemoApp);
	
	        this.router = router;
	        this.menuOpen = false;
	        this.version = ("0.1.15");
	
	        toastService.parentViewContainer = view;
	        modalService.parentViewContainer = view;
	
	        this.designRoutes = [{ name: 'Composition', path: '/composition' }, { name: 'Typography', path: '/typography' }, { name: 'Iconography', path: '/icons' }, { name: 'Color', path: '/color' }].sort(function (a, b) {
	            if (a.name < b.name) return -1;
	            if (a.name > b.name) return 1;
	            return 0;
	        });
	
	        this.componentRoutes = [{ name: 'QuickNote', path: '/quick-note' }, { name: 'Radio', path: '/radio' }, { name: 'Toast', path: '/toast' }, { name: 'Button', path: '/button' }, { name: 'Form', path: '/form' }, { name: 'Tabs', path: '/tabs' }, { name: 'Modal', path: '/Modal' }, { name: 'Select', path: '/select' }, { name: 'Picker', path: '/picker' }, { name: 'Chips', path: '/chips' }, { name: 'Dropdown', path: '/dropdown' }, { name: 'Loading', path: '/loading' }, { name: 'Cards', path: '/cards' }, { name: 'Tooltip', path: '/tooltip' }, { name: 'Drawer', path: '/drawer' }, { name: 'Switch', path: '/switch' }, { name: 'Header', path: '/header' }, { name: 'List', path: '/list' }, { name: 'Table', path: '/table' }, { name: 'Calendar', path: '/calendar' }, { name: 'Dragula', path: '/dragula' }, { name: 'Tiles', path: '/tiles' }].sort(function (a, b) {
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
	//# sourceMappingURL=data:application/json;base64,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O0FBQ0Esa0JBQUssUUFBTCxHQUFnQixLQUFoQjtBQUNILFNBSEQ7QUFJSDs7OztxQ0FFWTtBQUNULGlCQUFLLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLLFFBQXRCO0FBQ0g7Ozs7O3dKQWxFUSxPIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYnJpYW5raW1iYWxsL05vdm8vbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5cbmltcG9ydCB7IFRPQVNUX1BST1ZJREVSUywgVG9hc3RTZXJ2aWNlLCBNT0RBTF9QUk9WSURFUlMsIE1vZGFsU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RlbW8tYXBwJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9BcHAuaHRtbCcpLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5UT0FTVF9QUk9WSURFUlMsXG4gICAgICAgIC4uLk1PREFMX1BST1ZJREVSU1xuICAgIF0sXG4gICAgZGlyZWN0aXZlczogW1xuICAgICAgICBDT1JFX0RJUkVDVElWRVNcbiAgICBdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgICAvLyBCYXNlIFBhZ2VzIChkZXNpZ24gc3lzdGVtKVxuICAgIHsgcGF0aDogJy8nLCBuYW1lOiAnSG9tZScsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9ob21lL0hvbWUnKSgnSG9tZScpLCB1c2VBc0RlZmF1bHQ6IHRydWUgfSxcbiAgICB7IHBhdGg6ICcvY29tcG9zaXRpb24nLCBuYW1lOiAnQ29tcG9zaXRpb24nLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vbGF5b3V0L0xheW91dCcpKCdMYXlvdXQnKSB9LFxuICAgIHsgcGF0aDogJy90eXBvZ3JhcGh5JywgbmFtZTogJ1R5cG9ncmFwaHknLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vdHlwb2dyYXBoeS9UeXBvZ3JhcGh5JykoJ1R5cG9ncmFwaHknKSB9LFxuICAgIHsgcGF0aDogJy9pY29ucycsIG5hbWU6ICdJY29ub2dyYXBoeScsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9pY29ub2dyYXBoeS9JY29ub2dyYXBoeScpKCdJY29ub2dyYXBoeScpIH0sXG4gICAgeyBwYXRoOiAnL2NvbG9yJywgbmFtZTogJ0NvbG9yJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL2NvbG9yL0NvbG9yJykoJ0NvbG9yJykgfSxcblxuICAgIC8vIEVsZW1lbnQvQ29tcG9uZW50L1NlcnZpY2UvZXRjLi4gRGVtb3NcbiAgICB7IHBhdGg6ICcvYnV0dG9uJywgbmFtZTogJ0J1dHRvbicsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9idXR0b24vQnV0dG9uRGVtbycpKCdCdXR0b25EZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvcmFkaW8nLCBuYW1lOiAnUmFkaW8nLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vcmFkaW8vUmFkaW9EZW1vJykoJ1JhZGlvRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL3F1aWNrLW5vdGUnLCBuYW1lOiAnUXVpY2tOb3RlJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL3F1aWNrLW5vdGUvUXVpY2tOb3RlRGVtbycpKCdRdWlja05vdGVEZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvbW9kYWwnLCBuYW1lOiAnTW9kYWwnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vbW9kYWwvTW9kYWxEZW1vJykoJ01vZGFsRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL2Zvcm0nLCBuYW1lOiAnRm9ybScsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9mb3JtL0Zvcm1EZW1vJykoJ0Zvcm1EZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvdG9hc3QnLCBuYW1lOiAnVG9hc3QnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vdG9hc3QvVG9hc3REZW1vJykoJ1RvYXN0RGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL3Rvb2x0aXAnLCBuYW1lOiAnVG9vbHRpcCcsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi90b29sdGlwL1Rvb2x0aXBEZW1vJykoJ1Rvb2x0aXBEZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvY2FyZHMnLCBuYW1lOiAnQ2FyZHMnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vY2FyZC9DYXJkRGVtbycpKCdDYXJkRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL2xvYWRpbmcnLCBuYW1lOiAnTG9hZGluZycsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9sb2FkaW5nL0xvYWRpbmdEZW1vJykoJ0xvYWRpbmdEZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvZHJvcGRvd24nLCBuYW1lOiAnRHJvcGRvd24nLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vZHJvcGRvd24vRHJvcGRvd25EZW1vJykoJ0Ryb3Bkb3duRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL3BpY2tlcicsIG5hbWU6ICdQaWNrZXInLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vcGlja2VyL1BpY2tlckRlbW8nKSgnUGlja2VyRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL2NoaXBzJywgbmFtZTogJ0NoaXBzJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL2NoaXBzL0NoaXBzRGVtbycpKCdDaGlwc0RlbW8nKSB9LFxuICAgIHsgcGF0aDogJy9zZWxlY3QnLCBuYW1lOiAnU2VsZWN0JywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL3NlbGVjdC9TZWxlY3REZW1vJykoJ1NlbGVjdERlbW8nKSB9LFxuICAgIHsgcGF0aDogJy90YWJzJywgbmFtZTogJ1RhYnMnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vdGFicy9UYWJzRGVtbycpKCdUYWJzRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL3RhYmxlJywgbmFtZTogJ1RhYmxlJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL3RhYmxlL1RhYmxlRGVtbycpKCdUYWJsZURlbW8nKSB9LFxuICAgIHsgcGF0aDogJy9saXN0JywgbmFtZTogJ0xpc3QnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vbGlzdC9MaXN0RGVtbycpKCdMaXN0RGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL2hlYWRlcicsIG5hbWU6ICdIZWFkZXInLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vaGVhZGVyL0hlYWRlckRlbW8nKSgnSGVhZGVyRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL3N3aXRjaCcsIG5hbWU6ICdTd2l0Y2gnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vc3dpdGNoL1N3aXRjaERlbW8nKSgnU3dpdGNoRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL2RyYXdlcicsIG5hbWU6ICdEcmF3ZXInLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vZHJhd2VyL0RyYXdlckRlbW8nKSgnRHJhd2VyRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL2NhbGVuZGFyJywgbmFtZTogJ0NhbGVuZGFyJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL2NhbGVuZGFyL0NhbGVuZGFyRGVtbycpKCdDYWxlbmRhckRlbW8nKSB9LFxuICAgIHsgcGF0aDogJy9kcmFndWxhJywgbmFtZTogJ0RyYWd1bGEnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vZHJhZ3VsYS9EcmFndWxhRGVtbycpKCdEcmFndWxhRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL3RpbGVzJywgbmFtZTogJ1RpbGVzJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL3RpbGVzL1RpbGVzRGVtbycpKCdUaWxlc0RlbW8nKSB9LFxuXG4gICAgLy8gVXRpbHNcbiAgICB7IHBhdGg6ICcvdXRpbHMnLCBuYW1lOiAnVXRpbHMnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vdXRpbHMvVXRpbHNEZW1vJykoJ1V0aWxzRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL3BpcGVzJywgbmFtZTogJ1BpcGVzJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL3BpcGVzL1BpcGVzRGVtbycpKCdQaXBlc0RlbW8nKSB9XG5dKVxuZXhwb3J0IGNsYXNzIERlbW9BcHAge1xuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjpSb3V0ZXIsIHRvYXN0U2VydmljZTpUb2FzdFNlcnZpY2UsIHZpZXc6Vmlld0NvbnRhaW5lclJlZiwgbW9kYWxTZXJ2aWNlOk1vZGFsU2VydmljZSkge1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICAgICAgdGhpcy5tZW51T3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBWRVJTSU9OO1xuXG4gICAgICAgIHRvYXN0U2VydmljZS5wYXJlbnRWaWV3Q29udGFpbmVyID0gdmlldztcbiAgICAgICAgbW9kYWxTZXJ2aWNlLnBhcmVudFZpZXdDb250YWluZXIgPSB2aWV3O1xuXG4gICAgICAgIHRoaXMuZGVzaWduUm91dGVzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnQ29tcG9zaXRpb24nLCBwYXRoOiAnL2NvbXBvc2l0aW9uJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnVHlwb2dyYXBoeScsIHBhdGg6ICcvdHlwb2dyYXBoeScgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0ljb25vZ3JhcGh5JywgcGF0aDogJy9pY29ucycgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0NvbG9yJywgcGF0aDogJy9jb2xvcicgfVxuICAgICAgICBdLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLm5hbWUgPCBiLm5hbWUpIHJldHVybiAtMTtcbiAgICAgICAgICAgIGlmIChhLm5hbWUgPiBiLm5hbWUpIHJldHVybiAxO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29tcG9uZW50Um91dGVzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnUXVpY2tOb3RlJywgcGF0aDogJy9xdWljay1ub3RlJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnUmFkaW8nLCBwYXRoOiAnL3JhZGlvJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnVG9hc3QnLCBwYXRoOiAnL3RvYXN0JyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnQnV0dG9uJywgcGF0aDogJy9idXR0b24nIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdGb3JtJywgcGF0aDogJy9mb3JtJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnVGFicycsIHBhdGg6ICcvdGFicycgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ01vZGFsJywgcGF0aDogJy9Nb2RhbCcgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1NlbGVjdCcsIHBhdGg6ICcvc2VsZWN0JyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnUGlja2VyJywgcGF0aDogJy9waWNrZXInIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdDaGlwcycsIHBhdGg6ICcvY2hpcHMnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdEcm9wZG93bicsIHBhdGg6ICcvZHJvcGRvd24nIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdMb2FkaW5nJywgcGF0aDogJy9sb2FkaW5nJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnQ2FyZHMnLCBwYXRoOiAnL2NhcmRzJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnVG9vbHRpcCcsIHBhdGg6ICcvdG9vbHRpcCcgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0RyYXdlcicsIHBhdGg6ICcvZHJhd2VyJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnU3dpdGNoJywgcGF0aDogJy9zd2l0Y2gnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdIZWFkZXInLCBwYXRoOiAnL2hlYWRlcicgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0xpc3QnLCBwYXRoOiAnL2xpc3QnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdUYWJsZScsIHBhdGg6ICcvdGFibGUnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdDYWxlbmRhcicsIHBhdGg6ICcvY2FsZW5kYXInIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdEcmFndWxhJywgcGF0aDogJy9kcmFndWxhJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnVGlsZXMnLCBwYXRoOiAnL3RpbGVzJyB9XG4gICAgICAgIF0uc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEubmFtZSA8IGIubmFtZSkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKGEubmFtZSA+IGIubmFtZSkgcmV0dXJuIDE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51dGlsUm91dGVzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnUGlwZXMnLCBwYXRoOiAnL3BpcGVzJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnVXRpbHMnLCBwYXRoOiAnL3V0aWxzJyB9XG4gICAgICAgIF0uc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEubmFtZSA8IGIubmFtZSkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKGEubmFtZSA+IGIubmFtZSkgcmV0dXJuIDE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcm91dGVyLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICB0aGlzLm1lbnVPcGVuID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUoKSB7XG4gICAgICAgIHRoaXMubWVudU9wZW4gPSAhdGhpcy5tZW51T3BlbjtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 716:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(2, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(524)[namespace]);
	      } else {
	        resolve(__webpack_require__(524));
	      }
	    });
	  });
	}

/***/ },

/***/ 717:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(16, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(525)[namespace]);
	      } else {
	        resolve(__webpack_require__(525));
	      }
	    });
	  });
	}

/***/ },

/***/ 718:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(5, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(526)[namespace]);
	      } else {
	        resolve(__webpack_require__(526));
	      }
	    });
	  });
	}

/***/ },

/***/ 719:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(10, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(527)[namespace]);
	      } else {
	        resolve(__webpack_require__(527));
	      }
	    });
	  });
	}

/***/ },

/***/ 720:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(29, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(528)[namespace]);
	      } else {
	        resolve(__webpack_require__(528));
	      }
	    });
	  });
	}

/***/ },

/***/ 721:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(15, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(529)[namespace]);
	      } else {
	        resolve(__webpack_require__(529));
	      }
	    });
	  });
	}

/***/ },

/***/ 722:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(23, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(530)[namespace]);
	      } else {
	        resolve(__webpack_require__(530));
	      }
	    });
	  });
	}

/***/ },

/***/ 723:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(22, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(531)[namespace]);
	      } else {
	        resolve(__webpack_require__(531));
	      }
	    });
	  });
	}

/***/ },

/***/ 724:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(1, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(532)[namespace]);
	      } else {
	        resolve(__webpack_require__(532));
	      }
	    });
	  });
	}

/***/ },

/***/ 725:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(21, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(533)[namespace]);
	      } else {
	        resolve(__webpack_require__(533));
	      }
	    });
	  });
	}

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(28, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(534)[namespace]);
	      } else {
	        resolve(__webpack_require__(534));
	      }
	    });
	  });
	}

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(27, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(535)[namespace]);
	      } else {
	        resolve(__webpack_require__(535));
	      }
	    });
	  });
	}

/***/ },

/***/ 728:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(26, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(536)[namespace]);
	      } else {
	        resolve(__webpack_require__(536));
	      }
	    });
	  });
	}

/***/ },

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(20, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(537)[namespace]);
	      } else {
	        resolve(__webpack_require__(537));
	      }
	    });
	  });
	}

/***/ },

/***/ 730:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(14, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(538)[namespace]);
	      } else {
	        resolve(__webpack_require__(538));
	      }
	    });
	  });
	}

/***/ },

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(4, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(539)[namespace]);
	      } else {
	        resolve(__webpack_require__(539));
	      }
	    });
	  });
	}

/***/ },

/***/ 732:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(7, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(540)[namespace]);
	      } else {
	        resolve(__webpack_require__(540));
	      }
	    });
	  });
	}

/***/ },

/***/ 733:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(19, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(541)[namespace]);
	      } else {
	        resolve(__webpack_require__(541));
	      }
	    });
	  });
	}

/***/ },

/***/ 734:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(9, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(542)[namespace]);
	      } else {
	        resolve(__webpack_require__(542));
	      }
	    });
	  });
	}

/***/ },

/***/ 735:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(13, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(543)[namespace]);
	      } else {
	        resolve(__webpack_require__(543));
	      }
	    });
	  });
	}

/***/ },

/***/ 736:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(12, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(544)[namespace]);
	      } else {
	        resolve(__webpack_require__(544));
	      }
	    });
	  });
	}

/***/ },

/***/ 737:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(18, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(545)[namespace]);
	      } else {
	        resolve(__webpack_require__(545));
	      }
	    });
	  });
	}

/***/ },

/***/ 738:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(6, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(546)[namespace]);
	      } else {
	        resolve(__webpack_require__(546));
	      }
	    });
	  });
	}

/***/ },

/***/ 739:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(3, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(547)[namespace]);
	      } else {
	        resolve(__webpack_require__(547));
	      }
	    });
	  });
	}

/***/ },

/***/ 740:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(17, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(548)[namespace]);
	      } else {
	        resolve(__webpack_require__(548));
	      }
	    });
	  });
	}

/***/ },

/***/ 741:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(11, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(549)[namespace]);
	      } else {
	        resolve(__webpack_require__(549));
	      }
	    });
	  });
	}

/***/ },

/***/ 742:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(8, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(550)[namespace]);
	      } else {
	        resolve(__webpack_require__(550));
	      }
	    });
	  });
	}

/***/ },

/***/ 743:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(25, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(551)[namespace]);
	      } else {
	        resolve(__webpack_require__(551));
	      }
	    });
	  });
	}

/***/ },

/***/ 744:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(24, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(552)[namespace]);
	      } else {
	        resolve(__webpack_require__(552));
	      }
	    });
	  });
	}

/***/ },

/***/ 639:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DIRECTIVES = exports.APPLICATION_DIRECTIVES = undefined;
	
	var _core = __webpack_require__(1);
	
	var _routerDeprecated = __webpack_require__(143);
	
	var _common = __webpack_require__(5);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // These are globally available directives in any template
	
	
	// application_directives: directives that are global through out the application
	var APPLICATION_DIRECTIVES = exports.APPLICATION_DIRECTIVES = [].concat(_toConsumableArray(_routerDeprecated.ROUTER_DIRECTIVES), _toConsumableArray(_common.FORM_DIRECTIVES));
	
	var DIRECTIVES = exports.DIRECTIVES = [{ provide: _core.PLATFORM_DIRECTIVES, multi: true, useValue: APPLICATION_DIRECTIVES }];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGxhdGZvcm0vYnJvd3Nlci1kaXJlY3RpdmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7bU1BSEE7OztBQUtBO0FBQ08sSUFBTSx5S0FBTjs7QUFLQSxJQUFNLGtDQUFhLENBQ3RCLEVBQUUsa0NBQUYsRUFBZ0MsT0FBTyxJQUF2QyxFQUE2QyxVQUFVLHNCQUF2RCxFQURzQixDQUFuQiIsImZpbGUiOiJicm93c2VyLWRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JyaWFua2ltYmFsbC9Ob3ZvL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGVzZSBhcmUgZ2xvYmFsbHkgYXZhaWxhYmxlIGRpcmVjdGl2ZXMgaW4gYW55IHRlbXBsYXRlXG5pbXBvcnQgeyBQTEFURk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8vIGFwcGxpY2F0aW9uX2RpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMgdGhhdCBhcmUgZ2xvYmFsIHRocm91Z2ggb3V0IHRoZSBhcHBsaWNhdGlvblxuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0RJUkVDVElWRVMgPSBbXG4gICAgLi4uUk9VVEVSX0RJUkVDVElWRVMsXG4gICAgLi4uRk9STV9ESVJFQ1RJVkVTXG5dO1xuXG5leHBvcnQgY29uc3QgRElSRUNUSVZFUyA9IFtcbiAgICB7IHByb3ZpZGU6IFBMQVRGT1JNX0RJUkVDVElWRVMsIG11bHRpOiB0cnVlLCB1c2VWYWx1ZTogQVBQTElDQVRJT05fRElSRUNUSVZFUyB9XG5dO1xuIl19

/***/ },

/***/ 640:
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGxhdGZvcm0vYnJvd3Nlci1waXBlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBRUE7QUFDTyxJQUFNLGdEQUFvQixFQUExQixDQUpQOzs7QUFNTyxJQUFNLHdCQUFRLENBQ2pCLEVBQUUsNkJBQUYsRUFBMkIsT0FBTyxJQUFsQyxFQUF3QyxVQUFVLGlCQUFsRCxFQURpQixDQUFkIiwiZmlsZSI6ImJyb3dzZXItcGlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JyaWFua2ltYmFsbC9Ob3ZvL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGVzZSBhcmUgZ2xvYmFsbHkgYXZhaWxhYmxlIHBpcGVzIGluIGFueSB0ZW1wbGF0ZVxuaW1wb3J0IHsgUExBVEZPUk1fUElQRVMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gYXBwbGljYXRpb25fcGlwZXM6IHBpcGVzIHRoYXQgYXJlIGdsb2JhbCB0aHJvdWdoIG91dCB0aGUgYXBwbGljYXRpb25cbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9QSVBFUyA9IFtdO1xuXG5leHBvcnQgY29uc3QgUElQRVMgPSBbXG4gICAgeyBwcm92aWRlOiBQTEFURk9STV9QSVBFUywgbXVsdGk6IHRydWUsIHVzZVZhbHVlOiBBUFBMSUNBVElPTl9QSVBFUyB9XG5dO1xuIl19

/***/ },

/***/ 641:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PROVIDERS = exports.APPLICATION_PROVIDERS = undefined;
	
	var _common = __webpack_require__(5);
	
	var _http = __webpack_require__(321);
	
	var _routerDeprecated = __webpack_require__(143);
	
	var _novoElements = __webpack_require__(15);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // These are globally available services in any component or any other service
	
	
	// Application Providers/Directives/Pipes
	// providers/directives/pipes that only live in our browser environment
	var APPLICATION_PROVIDERS = exports.APPLICATION_PROVIDERS = [].concat(_toConsumableArray(_routerDeprecated.ROUTER_PROVIDERS), _toConsumableArray(_common.FORM_PROVIDERS), _toConsumableArray(_http.HTTP_PROVIDERS), _toConsumableArray(_novoElements.NOVO_ELEMENTS_LABELS_PROVIDERS), [{ provide: _common.LocationStrategy, useClass: _common.HashLocationStrategy }]);
	
	var PROVIDERS = exports.PROVIDERS = [].concat(_toConsumableArray(APPLICATION_PROVIDERS));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGxhdGZvcm0vYnJvd3Nlci1wcm92aWRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOzttTUFMQTs7O0FBT0E7QUFDQTtBQUNPLElBQU0sbVJBTVQsRUFBRSxpQ0FBRixFQUE2QixzQ0FBN0IsRUFOUyxFQUFOOztBQVNBLElBQU0sNkRBQ04scUJBRE0sRUFBTiIsImZpbGUiOiJicm93c2VyLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYnJpYW5raW1iYWxsL05vdm8vbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZXNlIGFyZSBnbG9iYWxseSBhdmFpbGFibGUgc2VydmljZXMgaW4gYW55IGNvbXBvbmVudCBvciBhbnkgb3RoZXIgc2VydmljZVxuaW1wb3J0IHsgSGFzaExvY2F0aW9uU3RyYXRlZ3ksIExvY2F0aW9uU3RyYXRlZ3ksIEZPUk1fUFJPVklERVJTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuXG5pbXBvcnQgeyBOT1ZPX0VMRU1FTlRTX0xBQkVMU19QUk9WSURFUlMgfSBmcm9tICcuLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuLy8gQXBwbGljYXRpb24gUHJvdmlkZXJzL0RpcmVjdGl2ZXMvUGlwZXNcbi8vIHByb3ZpZGVycy9kaXJlY3RpdmVzL3BpcGVzIHRoYXQgb25seSBsaXZlIGluIG91ciBicm93c2VyIGVudmlyb25tZW50XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fUFJPVklERVJTID0gW1xuICAgIC4uLlJPVVRFUl9QUk9WSURFUlMsXG4gICAgLi4uRk9STV9QUk9WSURFUlMsXG4gICAgLi4uSFRUUF9QUk9WSURFUlMsXG4gICAgLi4uTk9WT19FTEVNRU5UU19MQUJFTFNfUFJPVklERVJTLFxuXG4gICAgeyBwcm92aWRlOiBMb2NhdGlvblN0cmF0ZWd5LCB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3kgfVxuXTtcblxuZXhwb3J0IGNvbnN0IFBST1ZJREVSUyA9IFtcbiAgICAuLi5BUFBMSUNBVElPTl9QUk9WSURFUlNcbl07XG4iXX0=

/***/ },

/***/ 642:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PLATFORM_PROVIDERS = undefined;
	
	var _browserDirectives = __webpack_require__(639);
	
	Object.keys(_browserDirectives).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _browserDirectives[key];
	        }
	    });
	});
	
	var _browserPipes = __webpack_require__(640);
	
	Object.keys(_browserPipes).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _browserPipes[key];
	        }
	    });
	});
	
	var _browserProviders = __webpack_require__(641);
	
	Object.keys(_browserProviders).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _browserProviders[key];
	        }
	    });
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var PLATFORM_PROVIDERS = exports.PLATFORM_PROVIDERS = [].concat(_toConsumableArray(_browserProviders.PROVIDERS), _toConsumableArray(_browserDirectives.DIRECTIVES), _toConsumableArray(_browserPipes.PIPES));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGxhdGZvcm0vYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFNTyxJQUFNLHdNQUFOIiwiZmlsZSI6ImJyb3dzZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JyaWFua2ltYmFsbC9Ob3ZvL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2Jyb3dzZXItZGlyZWN0aXZlcyc7XG5leHBvcnQgKiBmcm9tICcuL2Jyb3dzZXItcGlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9icm93c2VyLXByb3ZpZGVycyc7XG5cbmltcG9ydCB7IERJUkVDVElWRVMgfSBmcm9tICcuL2Jyb3dzZXItZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBQSVBFUyB9IGZyb20gJy4vYnJvd3Nlci1waXBlcyc7XG5pbXBvcnQgeyBQUk9WSURFUlMgfSBmcm9tICcuL2Jyb3dzZXItcHJvdmlkZXJzJztcblxuZXhwb3J0IGNvbnN0IFBMQVRGT1JNX1BST1ZJREVSUyA9IFtcbiAgICAuLi5QUk9WSURFUlMsXG4gICAgLi4uRElSRUNUSVZFUyxcbiAgICAuLi5QSVBFU1xuXTtcbiJdfQ==

/***/ },

/***/ 643:
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGxhdGZvcm0vZW52aXJvbm1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzttTUFEQTs7O0FBR0E7QUFDQSxJQUFJLFlBQVk7QUFDWjtBQURZLENBQWhCOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxRQUFRLFlBQVosRUFBMEI7QUFDdEI7QUFDQTtBQUNBOztBQUVBLDZDQUNPLFNBRFA7QUFJSCxDQVREO0FBT1E7QUFFRDtBQUNIO0FBQ0E7QUFDQSxpREFDTyxTQURQO0FBSUg7O0FBRUQ7O0FBSlE7QUFLRCxJQUFNLHFFQUNOLFNBRE0sRUFBTiIsImZpbGUiOiJlbnZpcm9ubWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYnJpYW5raW1iYWxsL05vdm8vbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGVuYWJsZURlYnVnVG9vbHMsIGRpc2FibGVEZWJ1Z1Rvb2xzIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBFbnZpcm9ubWVudCBQcm92aWRlcnNcbmxldCBQUk9WSURFUlMgPSBbXG4gICAgLy8gY29tbW9uIGVudiBkaXJlY3RpdmVzXG5dO1xuXG4vLyBBbmd1bGFyIGRlYnVnIHRvb2xzIGluIHRoZSBkZXYgY29uc29sZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzg2NDA1MzQ1Yjc4MWE5ZGMyNDM4YzBmYmUzZTk0MDkyNDU2NDcwMTkvVE9PTFNfSlMubWRcbi8vIGxldCBfZGVjb3JhdGVDb21wb25lbnRSZWYgPSBmdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuLy8gICAgIHJldHVybiB2YWx1ZTtcbi8vIH07XG5cbmlmIChFTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFByb2R1Y3Rpb25cbiAgICAvLyBkaXNhYmxlRGVidWdUb29scygpO1xuICAgIGVuYWJsZVByb2RNb2RlKCk7XG5cbiAgICBQUk9WSURFUlMgPSBbXG4gICAgICAgIC4uLlBST1ZJREVSU1xuICAgICAgICAvLyBjdXN0b20gcHJvdmlkZXJzIGluIHByb2R1Y3Rpb25cbiAgICBdO1xufSBlbHNlIHtcbiAgICAvLyBfZGVjb3JhdGVDb21wb25lbnRSZWYgPSAoY21wUmVmKSA9PiBlbmFibGVEZWJ1Z1Rvb2xzKGNtcFJlZik7XG4gICAgLy8gRGV2ZWxvcG1lbnRcbiAgICBQUk9WSURFUlMgPSBbXG4gICAgICAgIC4uLlBST1ZJREVSU1xuICAgICAgICAvLyBjdXN0b20gcHJvdmlkZXJzIGluIGRldmVsb3BtZW50XG4gICAgXTtcbn1cblxuLy8gZXhwb3J0IGNvbnN0IGRlY29yYXRlQ29tcG9uZW50UmVmID0gX2RlY29yYXRlQ29tcG9uZW50UmVmO1xuZXhwb3J0IGNvbnN0IEVOVl9QUk9WSURFUlMgPSBbXG4gICAgLi4uUFJPVklERVJTXG5dO1xuIl19

/***/ }

});
//# sourceMappingURL=demo.dec2234efb1262357fe9.bundle.map