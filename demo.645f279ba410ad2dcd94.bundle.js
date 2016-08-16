webpackJsonp([35],{

/***/ 757:
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
	
	var _browser = __webpack_require__(647);
	
	var _environment = __webpack_require__(648);
	
	var _App = __webpack_require__(643);
	
	__webpack_require__(757);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vbWFpbi5icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O1FBV2dCLEksR0FBQSxJOztBQVhoQjs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7O0FBSU8sU0FBUyxJQUFULEdBQWdCO0FBQ25CLFdBQU87QUFJUDtBQUpPLEtBS0YsS0FMRSxDQUtJO0FBQUEsZUFBTyxRQUFRLEtBQVIsQ0FBYyxHQUFkLENBQVA7QUFBQSxLQUxKLENBQVAsQ0FEbUIsQ0FNb0I7QUFDMUM7O0FBR0Q7QUFDQTtBQUNBLElBQUksUUFBUSxhQUFSLElBQXlCLFFBQVEsSUFBckMsRUFBMkM7QUFDdkM7QUFDQSxRQUFJLFFBQVEsUUFBUSxjQUFSLENBQVo7QUFDQSxVQUFNLG9CQUFOLENBQTJCLElBQTNCLEVBQWlDLE1BQWpDO0FBQ0gsQ0FKRCxNQUlPO0FBQ0g7QUFDQSxhQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QztBQUFBLGVBQU0sTUFBTjtBQUFBLEtBQTlDO0FBQ0giLCJmaWxlIjoibWFpbi5icm93c2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9naXRodWIvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5cbmltcG9ydCB7IFBMQVRGT1JNX1BST1ZJREVSUyB9IGZyb20gJy4vcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQgeyBFTlZfUFJPVklERVJTIH0gZnJvbSAnLi9wbGF0Zm9ybS9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBEZW1vQXBwIH0gZnJvbSAnLi9wYWdlcy9hcHAvQXBwJztcbmltcG9ydCAnLi9kZW1vLnNjc3MnO1xuXG4vKipcbiAqIEJvb3RzdHJhcCBvdXIgQW5ndWxhciBhcHAgd2l0aCBhIHRvcCBsZXZlbCBjb21wb25lbnQgYEFwcGAgYW5kIGluamVjdFxuICogb3VyIFNlcnZpY2VzIGFuZCBQcm92aWRlcnMgaW50byBBbmd1bGFyJ3MgZGVwZW5kZW5jeSBpbmplY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1haW4oKSB7XG4gICAgcmV0dXJuIGJvb3RzdHJhcChEZW1vQXBwLCBbXG4gICAgICAgIC4uLlBMQVRGT1JNX1BST1ZJREVSUyxcbiAgICAgICAgLi4uRU5WX1BST1ZJREVSU1xuICAgIF0pXG4gICAgLy8gLnRoZW4oZGVjb3JhdGVDb21wb25lbnRSZWYpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufVxuXG5cbi8vIEhvdCBNb2R1bGUgUmVsb2FkXG4vLyBleHBlcmltZW50YWwgdmVyc2lvbiBieSBAZ2RpMjI5MFxuaWYgKEVOViA9PT0gJ2RldmVsb3BtZW50JyAmJiBITVIgPT09IHRydWUpIHtcbiAgICAvLyBhY3RpdmF0ZSBob3QgbW9kdWxlIHJlbG9hZFxuICAgIGxldCBuZ0htciA9IHJlcXVpcmUoJ2FuZ3VsYXIyLWhtcicpO1xuICAgIG5nSG1yLmhvdE1vZHVsZVJlcGxhY2VtZW50KG1haW4sIG1vZHVsZSk7XG59IGVsc2Uge1xuICAgIC8vIGJvb3RzdHJhcCB3aGVuIGRvY3VtZW50IGlzIHJlYWR5XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IG1haW4oKSk7XG59XG4iXX0=

/***/ },

/***/ 759:
/***/ function(module, exports) {

	module.exports = "<nav class=\"main-nav\" [ngClass]=\"{open: menuOpen}\">\n    <span class=\"logo\">\n        <svg [routerLink]=\"['/Home']\" data-name=\"novo-logo\" xmlns=\"http://www.w3.org/2000/svg\"\n             viewBox=\"0 0 400 400\" class=\"{% if page.url != '/' %}site-avatar{% endif %}\">\n            <defs></defs>\n            <title>NovoBranding</title>\n            <circle class=\"center-dot\" cx=\"200.18\" cy=\"197.5\" r=\"28.65\"/>\n            <path class=\"outer-ring\" d=\"M371,178.06C362,98.75,298.92,35.6,219.6,26.65a19.88,19.88,0,0,0-38.84,0c-79.32,9-142.43,72.11-151.4,151.43a19.88,19.88,0,0,0,0,38.85c9,79.32,72.07,142.47,151.4,151.43a19.88,19.88,0,0,0,38.84,0c79.32-9,142.43-72.1,151.4-151.42A19.88,19.88,0,0,0,371,178.06ZM192.56,25.72a9.25,9.25,0,0,1,1-1.18l0.26-.27a9.31,9.31,0,0,1,1.17-1l0.24-.15a9.13,9.13,0,0,1,1.22-.66l0.26-.12a9.17,9.17,0,0,1,1.49-.46l0.34-.07a8.29,8.29,0,0,1,3.32,0l0.34,0.07a9.17,9.17,0,0,1,1.49.46l0.26,0.12a9.13,9.13,0,0,1,1.22.66l0.24,0.15a9.31,9.31,0,0,1,1.17,1l0.26,0.27a9.25,9.25,0,0,1,1,1.18,9.1,9.1,0,0,1-.29,10.68h0a9.28,9.28,0,0,1-1.27,1.36l-0.42.35a9.1,9.1,0,0,1-.89.62,9.21,9.21,0,0,1-.87.47l-0.5.22a9,9,0,0,1-1.38.43l-0.34.06a8.24,8.24,0,0,1-3.3,0l-0.34-.06a9,9,0,0,1-1.38-.43l-0.5-.22a9.21,9.21,0,0,1-.87-0.47,9.1,9.1,0,0,1-.89-0.62l-0.42-.35a9.28,9.28,0,0,1-1.27-1.36h0A9.1,9.1,0,0,1,192.56,25.72ZM28.39,205.09a9.25,9.25,0,0,1-1.14-.94l-0.3-.3a9.26,9.26,0,0,1-.94-1.14l-0.16-.26a9.09,9.09,0,0,1-.65-1.19c0-.09-0.09-0.18-0.13-0.28a9.1,9.1,0,0,1-.46-1.49c0-.11,0-0.23-0.07-0.34a8.27,8.27,0,0,1,0-3.31c0-.12,0-0.23.07-0.34a9.1,9.1,0,0,1,.46-1.49c0-.1.09-0.19,0.13-0.28a9.09,9.09,0,0,1,.65-1.19l0.16-.26a9.22,9.22,0,0,1,.94-1.14l0.3-.3a9.11,9.11,0,0,1,13.2.59c0.13,0.14.25,0.29,0.37,0.44a9.22,9.22,0,0,1,1.08,1.75c0.08,0.16.15,0.33,0.22,0.49a9.08,9.08,0,0,1,.43,1.39c0,0.11,0,.23.06,0.34a8.22,8.22,0,0,1,0,3.29c0,0.11,0,.23-0.06.34a9.08,9.08,0,0,1-.43,1.39c-0.07.17-.15,0.33-0.22,0.49a9.22,9.22,0,0,1-1.08,1.75c-0.12.15-.24,0.3-0.37,0.44A9.12,9.12,0,0,1,28.39,205.09ZM200.18,374a9.21,9.21,0,1,1,9.21-9.21A9.22,9.22,0,0,1,200.18,374ZM219,357.67a19.86,19.86,0,0,0-37.59,0A161.56,161.56,0,0,1,40,216.29a19.86,19.86,0,0,0,0-37.58A161.56,161.56,0,0,1,181.38,37.32a19.86,19.86,0,0,0,37.59,0,161.56,161.56,0,0,1,141.35,141.4,19.86,19.86,0,0,0,0,37.55A161.56,161.56,0,0,1,219,357.67Zm147.84-151A9.21,9.21,0,1,1,376,197.5,9.22,9.22,0,0,1,366.81,206.7Z\"\n            />\n            <path class=\"inner-ring\" d=\"M219.76,103.11a19.86,19.86,0,0,0-39.17,0,96.4,96.4,0,0,0,0,188.78,19.86,19.86,0,0,0,39.17,0A96.4,96.4,0,0,0,219.76,103.11Zm-19.58-5.87a9.17,9.17,0,0,1,5.9,16.22l-0.25.2a9.11,9.11,0,0,1-1,.67c-0.26.16-.53,0.31-0.8,0.44l-0.55.24a8.92,8.92,0,0,1-1.35.42l-0.33.06a8.24,8.24,0,0,1-3.3,0l-0.33-.06a8.92,8.92,0,0,1-1.35-.42l-0.55-.24c-0.28-.13-0.54-0.28-0.8-0.44a9.11,9.11,0,0,1-1-.67l-0.25-.2A9.17,9.17,0,0,1,200.18,97.24ZM207.54,294a9.21,9.21,0,0,1-.61.74c-0.13.15-.27,0.29-0.41,0.43a9.25,9.25,0,0,1-1.06.87l-0.41.26a9.11,9.11,0,0,1-1.07.58l-0.31.15a9.08,9.08,0,0,1-1.47.46l-0.38.07a8.22,8.22,0,0,1-3.29,0l-0.38-.07a9.08,9.08,0,0,1-1.47-.46l-0.31-.15a9.11,9.11,0,0,1-1.07-.58l-0.41-.26a9.25,9.25,0,0,1-1.06-.87c-0.14-.14-0.27-0.29-0.41-0.43a9.08,9.08,0,0,1,.85-13.22l0.25-.2a9.11,9.11,0,0,1,1-.67c0.26-.16.53-0.31,0.8-0.44l0.55-.24a8.92,8.92,0,0,1,1.35-.42l0.33-.06a8.24,8.24,0,0,1,3.3,0l0.33,0.06a8.92,8.92,0,0,1,1.35.42l0.55,0.24c0.28,0.13.54,0.28,0.8,0.44a9.11,9.11,0,0,1,1,.67l0.25,0.2A9.06,9.06,0,0,1,207.54,294Zm11.1-12.84a19.86,19.86,0,0,0-36.92,0,85.7,85.7,0,0,1,0-167.38,19.86,19.86,0,0,0,36.92,0A85.7,85.7,0,0,1,218.63,281.19Z\"\n            />\n        </svg>\n        <svg [routerLink]=\"['/Home']\" data-name=\"bullhorn-text\" version=\"1.1\"\n            xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n            x=\"0px\" y=\"0px\" width=\"240.2px\" height=\"48.8px\" viewBox=\"0 0 240.2 48.8\"\n            style=\"enable-background:new 0 0 240.2 48.8;\" xml:space=\"preserve\">\n            <style type=\"text/css\">\n                .st0 {\n                    fill: #FFFFFF;\n                }\n            </style>\n            <defs></defs>\n            <g>\n                <path class=\"st0\" d=\"M0,1.5c0-0.6,0.5-1.1,1.1-1.1h20c5.4,0,9.5,1.4,12.3,4.2c2.1,2.1,3.2,4.7,3.2,7.8v0.1c0,1.4-0.2,2.6-0.6,3.8\n                c-0.4,1.1-0.9,2.1-1.5,2.9c-0.6,0.8-1.3,1.6-2.1,2.2c-0.2,0.2-0.4,0.3-0.7,0.5c-0.7,0.5-0.6,1.6,0.1,1.9c1.9,0.9,3.4,1.9,4.7,3.2\n                c1.7,1.7,2.6,4.2,2.6,7.4v0.1c0,2.1-0.4,4-1.2,5.6c-0.8,1.6-2,3-3.5,4c-1.5,1.1-3.4,1.9-5.5,2.5c-2.1,0.6-4.5,0.8-7.2,0.8H1.1\n                C0.5,47.5,0,47,0,46.4V1.5z M19.4,20.3c2.7,0,4.8-0.5,6.5-1.6c1.6-1,2.4-2.6,2.4-4.8v-0.1c0-1.9-0.7-3.3-2.1-4.4\n                c-1.4-1-3.5-1.6-6.2-1.6H9.3c-0.6,0-1.1,0.5-1.1,1.1v10.2c0,0.6,0.5,1.1,1.1,1.1H19.4z M21.8,40.1c2.8,0,5-0.5,6.7-1.6\n                c1.6-1.1,2.4-2.7,2.4-4.8v-0.1c0-2-0.8-3.6-2.4-4.6c-1.6-1.1-4-1.6-7.3-1.6h-12c-0.6,0-1.1,0.5-1.1,1.1V39c0,0.6,0.5,1.1,1.1,1.1\n                H21.8z\" />\n                <path class=\"st0\" d=\"M81.3,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3h-5.9c-0.7,0-1.3-0.6-1.3-1.3v-45\n                C80.1,0.6,80.6,0,81.3,0z\" />\n                <path class=\"st0\" d=\"M96,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3H96c-0.7,0-1.3-0.6-1.3-1.3v-45\n                C94.8,0.6,95.3,0,96,0z\" />\n                <path class=\"st0\" d=\"M109.5,0l4,0c2.3,0,4.2,1.9,4.2,4.2v13.3c0.9-0.9,2.1-1.9,3.7-2.8c1.6-0.9,3.7-1.4,6.3-1.4c2,0,3.9,0.3,5.5,1\n                c1.6,0.7,3,1.6,4,2.8c1.1,1.2,1.9,2.7,2.5,4.4c0.6,1.7,0.9,3.6,0.9,5.6v19.1c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2\n                V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9c-0.7,0.8-1.3,1.7-1.7,2.8\n                c-0.4,1.1-0.6,2.2-0.6,3.5v16.9c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2V5.8V0z\"\n                />\n                <path class=\"st0\" d=\"M210.5,14.1h5.3c0.7,0,1.4,0.6,1.4,1.3l0.1,2.4c0.4-0.5,0.9-1,1.5-1.5c0.6-0.5,1.3-1,2.1-1.5\n                c0.8-0.5,1.8-0.8,2.8-1.1c1-0.3,2.2-0.4,3.6-0.4c4.2,0,7.4,1.2,9.5,3.7c2.2,2.5,3.3,5.8,3.3,10.1V46c0,0.8-0.7,1.5-1.5,1.5h-5.4\n                c-0.8,0-1.5-0.7-1.5-1.5V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9\n                c-0.7,0.8-1.3,1.7-1.7,2.8c-0.4,1.1-0.6,2.2-0.6,3.5V46c0,0.8-0.7,1.5-1.5,1.5h-5.4c-0.8,0-1.5-0.7-1.5-1.5V15.5\n                C209.1,14.7,209.7,14.1,210.5,14.1z\" />\n                <g>\n                    <path class=\"st0\" d=\"M184.5,14h5.3c0.8,0,1.4,0.6,1.4,1.4l0.1,2.8c0.4-0.5,0.9-1,1.5-1.6c0.6-0.6,1.3-1.1,2.1-1.6\n                    c0.8-0.5,1.7-0.9,2.8-1.2c1.1-0.3,2.3-0.5,3.7-0.5c0.8,0,1.5,0,2.2,0.1c0.3,0,0.5,0.1,0.8,0.2c0.6,0.2,1,0.8,0.9,1.4l-1.2,5.5\n                    c-0.1,0.7-0.8,1.1-1.5,0.9c-0.2,0-0.4-0.1-0.6-0.1c-0.6-0.1-1.3-0.1-2.1-0.1c-1.1,0-2.2,0.2-3.3,0.6c-1,0.4-1.9,0.9-2.7,1.6\n                    c-0.8,0.7-1.4,1.6-1.8,2.6c-0.5,1-0.7,2.1-0.7,3.3V46c0,0.8-0.6,1.4-1.4,1.4h-5.6c-0.8,0-1.4-0.6-1.4-1.4V15.4\n                    C183.1,14.6,183.7,14,184.5,14z\" />\n                </g>\n                <path id=\"u_1_\" class=\"st0\" d=\"M67.4,14.6c-0.7,0-1.3,0.6-1.3,1.3v16.2c0,4.4-3.2,7.4-7,7.4c-0.7,0-1.2,0-1.5,0c-3.9,0-7-3-7-7.4\n                V15.9c0-0.7-0.6-1.3-1.3-1.3H44c-0.7,0-1.3,0.6-1.3,1.3v18c0,7.8,7.2,13.3,14.7,13.3v0h0.1c0,0,0.1,0,0.1,0l0,0h1.4l0,0\n                c0,0,0.1,0,0.1,0h0.2v0c7.5-0.1,14.6-5.5,14.6-13.3v-18c0-0.7-0.6-1.3-1.3-1.3H67.4z\"\n                />\n                <g>\n                    <g>\n                        <g>\n                            <path class=\"st0\" d=\"M144,30.9c0-2.4,0.4-4.7,1.3-6.9c0.9-2.2,2.1-4,3.7-5.7c1.6-1.6,3.5-2.9,5.7-3.8c2.2-0.9,4.6-1.4,7.3-1.4\n                            c2.7,0,5.1,0.5,7.3,1.4c2.2,0.9,4.1,2.2,5.7,3.8c1.6,1.6,2.8,3.5,3.7,5.7c0.9,2.2,1.3,4.4,1.3,6.9s-0.4,4.7-1.3,6.9\n                            c-0.9,2.2-2.1,4.1-3.7,5.7c-1.6,1.6-3.5,2.9-5.7,3.9c-2.2,0.9-4.6,1.4-7.3,1.4c-2.7,0-5.1-0.5-7.3-1.4c-2.2-0.9-4.1-2.2-5.7-3.9\n                            c-1.6-1.6-2.8-3.5-3.7-5.7C144.4,35.6,144,33.3,144,30.9z M161.9,41.5c1.6,0,3-0.3,4.2-1c1.2-0.6,2.2-1.5,3-2.5\n                            c0.8-1,1.4-2.2,1.7-3.4c0.4-1.2,0.6-2.5,0.6-3.7c0-1.2-0.2-2.4-0.6-3.7c-0.4-1.3-1-2.4-1.7-3.4c-0.8-1-1.8-1.9-3-2.5\n                            c-1.2-0.6-2.6-1-4.2-1c-1.6,0-3,0.3-4.2,1c-1.2,0.6-2.2,1.5-3,2.5c-0.8,1-1.4,2.2-1.7,3.4c-0.4,1.3-0.6,2.5-0.6,3.7\n                            c0,1.2,0.2,2.5,0.6,3.7c0.4,1.2,1,2.4,1.7,3.4c0.8,1,1.8,1.9,3,2.5C158.9,41.2,160.3,41.5,161.9,41.5z\"\n                            />\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </svg>\n\n        <h5 [routerLink]=\"['/Home']\">NOVO Design System</h5>\n        <span class=\"version\">v. {{version}}</span>\n        <a href=\"https://github.com/bullhorn/novo-elements\" target=\"_blank\"\n           class=\"fork-me\">Fork Me On Github</a>\n    </span>\n    <app-nav [routes]=\"appRoutes\"></app-nav>\n    <ul class=\"menu-list\">\n        <li class=\"menu-item\" [class.current]=\"router.isRouteActive(router.generate(['/Home']))\">\n            <a [routerLink]=\"['/Home']\" class=\"menu-link\">Introduction</a>\n        </li>\n\n        <li class=\"menu-section-header\">\n            <span class=\"menu-item-header\">Design</span>\n        </li>\n        <li class=\"menu-item\" *ngFor=\"let route of designRoutes\" [class.current]=\"router.isRouteActive(router.generate(['/'+route.name]))\">\n            <a [routerLink]=\"['/' + route.name]\" class=\"menu-link\">{{route.name}}</a>\n        </li>\n        <li class=\"menu-section-header\">\n            <span class=\"menu-item-header\">Components</span>\n        </li>\n        <li class=\"menu-item\" *ngFor=\"let route of componentRoutes\" [class.current]=\"router.isRouteActive(router.generate(['/'+route.name]))\">\n            <a [routerLink]=\"['/'+route.name]\" class=\"menu-link\">{{route.name}}</a>\n        </li>\n        <li class=\"menu-section-header\">\n            <span class=\"menu-item-header\">Utils</span>\n        </li>\n        <li class=\"menu-item\" *ngFor=\"let route of utilRoutes\" [class.current]=\"router.isRouteActive(router.generate(['/'+route.name]))\">\n            <a [routerLink]=\"['/'+route.name]\" class=\"menu-link\">{{route.name}}</a>\n        </li>\n        <li class=\"menu-line\"></li>\n    </ul>\n</nav>\n<main class=\"main-content\" [ngClass]=\"{open: menuOpen}\">\n    <nav class=\"responsive-nav\">\n        <button name=\"open-menu\" (click)=\"toggleMenu()\">\n            <span>&#9776;</span>\n        </button>\n        <svg data-name=\"bullhorn-text\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n            x=\"0px\" y=\"0px\" width=\"240.2px\" height=\"48.8px\" viewBox=\"0 0 240.2 48.8\"\n            style=\"enable-background:new 0 0 240.2 48.8;\" xml:space=\"preserve\">\n            <g>\n                <path class=\"st0\" d=\"M0,1.5c0-0.6,0.5-1.1,1.1-1.1h20c5.4,0,9.5,1.4,12.3,4.2c2.1,2.1,3.2,4.7,3.2,7.8v0.1c0,1.4-0.2,2.6-0.6,3.8\n            c-0.4,1.1-0.9,2.1-1.5,2.9c-0.6,0.8-1.3,1.6-2.1,2.2c-0.2,0.2-0.4,0.3-0.7,0.5c-0.7,0.5-0.6,1.6,0.1,1.9c1.9,0.9,3.4,1.9,4.7,3.2\n            c1.7,1.7,2.6,4.2,2.6,7.4v0.1c0,2.1-0.4,4-1.2,5.6c-0.8,1.6-2,3-3.5,4c-1.5,1.1-3.4,1.9-5.5,2.5c-2.1,0.6-4.5,0.8-7.2,0.8H1.1\n            C0.5,47.5,0,47,0,46.4V1.5z M19.4,20.3c2.7,0,4.8-0.5,6.5-1.6c1.6-1,2.4-2.6,2.4-4.8v-0.1c0-1.9-0.7-3.3-2.1-4.4\n            c-1.4-1-3.5-1.6-6.2-1.6H9.3c-0.6,0-1.1,0.5-1.1,1.1v10.2c0,0.6,0.5,1.1,1.1,1.1H19.4z M21.8,40.1c2.8,0,5-0.5,6.7-1.6\n            c1.6-1.1,2.4-2.7,2.4-4.8v-0.1c0-2-0.8-3.6-2.4-4.6c-1.6-1.1-4-1.6-7.3-1.6h-12c-0.6,0-1.1,0.5-1.1,1.1V39c0,0.6,0.5,1.1,1.1,1.1\n            H21.8z\" />\n                <path class=\"st0\" d=\"M81.3,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3h-5.9c-0.7,0-1.3-0.6-1.3-1.3v-45\n            C80.1,0.6,80.6,0,81.3,0z\" />\n                <path class=\"st0\" d=\"M96,0h5.9c0.7,0,1.3,0.6,1.3,1.3v45c0,0.7-0.6,1.3-1.3,1.3H96c-0.7,0-1.3-0.6-1.3-1.3v-45\n            C94.8,0.6,95.3,0,96,0z\" />\n                <path class=\"st0\" d=\"M109.5,0l4,0c2.3,0,4.2,1.9,4.2,4.2v13.3c0.9-0.9,2.1-1.9,3.7-2.8c1.6-0.9,3.7-1.4,6.3-1.4c2,0,3.9,0.3,5.5,1\n            c1.6,0.7,3,1.6,4,2.8c1.1,1.2,1.9,2.7,2.5,4.4c0.6,1.7,0.9,3.6,0.9,5.6v19.1c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2\n            V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9c-0.7,0.8-1.3,1.7-1.7,2.8\n            c-0.4,1.1-0.6,2.2-0.6,3.5v16.9c0,0.6-0.5,1.2-1.2,1.2h-6.1c-0.6,0-1.2-0.5-1.2-1.2V5.8V0z\"\n                />\n                <path class=\"st0\" d=\"M210.5,14.1h5.3c0.7,0,1.4,0.6,1.4,1.3l0.1,2.4c0.4-0.5,0.9-1,1.5-1.5c0.6-0.5,1.3-1,2.1-1.5\n            c0.8-0.5,1.8-0.8,2.8-1.1c1-0.3,2.2-0.4,3.6-0.4c4.2,0,7.4,1.2,9.5,3.7c2.2,2.5,3.3,5.8,3.3,10.1V46c0,0.8-0.7,1.5-1.5,1.5h-5.4\n            c-0.8,0-1.5-0.7-1.5-1.5V27.3c0-2.1-0.6-3.8-1.7-4.9c-1.2-1.2-2.7-1.7-4.5-1.7c-1.1,0-2.2,0.2-3.2,0.7c-1,0.5-1.9,1.1-2.6,1.9\n            c-0.7,0.8-1.3,1.7-1.7,2.8c-0.4,1.1-0.6,2.2-0.6,3.5V46c0,0.8-0.7,1.5-1.5,1.5h-5.4c-0.8,0-1.5-0.7-1.5-1.5V15.5\n            C209.1,14.7,209.7,14.1,210.5,14.1z\" />\n                <g>\n                    <path class=\"st0\" d=\"M184.5,14h5.3c0.8,0,1.4,0.6,1.4,1.4l0.1,2.8c0.4-0.5,0.9-1,1.5-1.6c0.6-0.6,1.3-1.1,2.1-1.6\n                c0.8-0.5,1.7-0.9,2.8-1.2c1.1-0.3,2.3-0.5,3.7-0.5c0.8,0,1.5,0,2.2,0.1c0.3,0,0.5,0.1,0.8,0.2c0.6,0.2,1,0.8,0.9,1.4l-1.2,5.5\n                c-0.1,0.7-0.8,1.1-1.5,0.9c-0.2,0-0.4-0.1-0.6-0.1c-0.6-0.1-1.3-0.1-2.1-0.1c-1.1,0-2.2,0.2-3.3,0.6c-1,0.4-1.9,0.9-2.7,1.6\n                c-0.8,0.7-1.4,1.6-1.8,2.6c-0.5,1-0.7,2.1-0.7,3.3V46c0,0.8-0.6,1.4-1.4,1.4h-5.6c-0.8,0-1.4-0.6-1.4-1.4V15.4\n                C183.1,14.6,183.7,14,184.5,14z\" />\n                </g>\n                <path id=\"u_1_\" class=\"st0\" d=\"M67.4,14.6c-0.7,0-1.3,0.6-1.3,1.3v16.2c0,4.4-3.2,7.4-7,7.4c-0.7,0-1.2,0-1.5,0c-3.9,0-7-3-7-7.4\n            V15.9c0-0.7-0.6-1.3-1.3-1.3H44c-0.7,0-1.3,0.6-1.3,1.3v18c0,7.8,7.2,13.3,14.7,13.3v0h0.1c0,0,0.1,0,0.1,0l0,0h1.4l0,0\n            c0,0,0.1,0,0.1,0h0.2v0c7.5-0.1,14.6-5.5,14.6-13.3v-18c0-0.7-0.6-1.3-1.3-1.3H67.4z\"\n                />\n                <g>\n                    <g>\n                        <g>\n                            <path class=\"st0\" d=\"M144,30.9c0-2.4,0.4-4.7,1.3-6.9c0.9-2.2,2.1-4,3.7-5.7c1.6-1.6,3.5-2.9,5.7-3.8c2.2-0.9,4.6-1.4,7.3-1.4\n                        c2.7,0,5.1,0.5,7.3,1.4c2.2,0.9,4.1,2.2,5.7,3.8c1.6,1.6,2.8,3.5,3.7,5.7c0.9,2.2,1.3,4.4,1.3,6.9s-0.4,4.7-1.3,6.9\n                        c-0.9,2.2-2.1,4.1-3.7,5.7c-1.6,1.6-3.5,2.9-5.7,3.9c-2.2,0.9-4.6,1.4-7.3,1.4c-2.7,0-5.1-0.5-7.3-1.4c-2.2-0.9-4.1-2.2-5.7-3.9\n                        c-1.6-1.6-2.8-3.5-3.7-5.7C144.4,35.6,144,33.3,144,30.9z M161.9,41.5c1.6,0,3-0.3,4.2-1c1.2-0.6,2.2-1.5,3-2.5\n                        c0.8-1,1.4-2.2,1.7-3.4c0.4-1.2,0.6-2.5,0.6-3.7c0-1.2-0.2-2.4-0.6-3.7c-0.4-1.3-1-2.4-1.7-3.4c-0.8-1-1.8-1.9-3-2.5\n                        c-1.2-0.6-2.6-1-4.2-1c-1.6,0-3,0.3-4.2,1c-1.2,0.6-2.2,1.5-3,2.5c-0.8,1-1.4,2.2-1.7,3.4c-0.4,1.3-0.6,2.5-0.6,3.7\n                        c0,1.2,0.2,2.5,0.6,3.7c0.4,1.2,1,2.4,1.7,3.4c0.8,1,1.8,1.9,3,2.5C158.9,41.2,160.3,41.5,161.9,41.5z\"\n                            />\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </svg>\n        <strong>Design System</strong>\n    </nav>\n    <router-outlet></router-outlet>\n</main>\n"

/***/ },

/***/ 643:
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
	    template: __webpack_require__(759),
	    providers: [].concat(_toConsumableArray(_novoElements.TOAST_PROVIDERS), _toConsumableArray(_novoElements.MODAL_PROVIDERS)),
	    directives: [_common.CORE_DIRECTIVES]
	}), _dec2 = (0, _routerDeprecated.RouteConfig)([
	// Base Pages (design system)
	{ path: '/', name: 'Home', loader: function loader() {
	        return __webpack_require__(736)('Home');
	    }, useAsDefault: true }, { path: '/composition', name: 'Composition', loader: function loader() {
	        return __webpack_require__(738)('Layout');
	    } }, { path: '/typography', name: 'Typography', loader: function loader() {
	        return __webpack_require__(755)('Typography');
	    } }, { path: '/icons', name: 'Iconography', loader: function loader() {
	        return __webpack_require__(737)('Iconography');
	    } }, { path: '/color', name: 'Color', loader: function loader() {
	        return __webpack_require__(729)('Color');
	    } },
	
	// Element/Component/Service/etc.. Demos
	{ path: '/button', name: 'Button', loader: function loader() {
	        return __webpack_require__(725)('ButtonDemo');
	    } }, { path: '/radio', name: 'Radio', loader: function loader() {
	        return __webpack_require__(745)('RadioDemo');
	    } }, { path: '/quick-note', name: 'QuickNote', loader: function loader() {
	        return __webpack_require__(744)('QuickNoteDemo');
	    } }, { path: '/modal', name: 'Modal', loader: function loader() {
	        return __webpack_require__(741)('ModalDemo');
	    } }, { path: '/form', name: 'Form', loader: function loader() {
	        return __webpack_require__(734)('FormDemo');
	    } }, { path: '/toast', name: 'Toast', loader: function loader() {
	        return __webpack_require__(753)('ToastDemo');
	    } }, { path: '/tooltip', name: 'Tooltip', loader: function loader() {
	        return __webpack_require__(754)('TooltipDemo');
	    } }, { path: '/cards', name: 'Cards', loader: function loader() {
	        return __webpack_require__(727)('CardDemo');
	    } }, { path: '/loading', name: 'Loading', loader: function loader() {
	        return __webpack_require__(740)('LoadingDemo');
	    } }, { path: '/dropdown', name: 'Dropdown', loader: function loader() {
	        return __webpack_require__(732)('DropdownDemo');
	    } }, { path: '/picker', name: 'Picker', loader: function loader() {
	        return __webpack_require__(742)('PickerDemo');
	    } }, { path: '/chips', name: 'Chips', loader: function loader() {
	        return __webpack_require__(728)('ChipsDemo');
	    } }, { path: '/select', name: 'Select', loader: function loader() {
	        return __webpack_require__(746)('SelectDemo');
	    } }, { path: '/tabs', name: 'Tabs', loader: function loader() {
	        return __webpack_require__(750)('TabsDemo');
	    } }, { path: '/table', name: 'Table', loader: function loader() {
	        return __webpack_require__(749)('TableDemo');
	    } }, { path: '/list', name: 'List', loader: function loader() {
	        return __webpack_require__(739)('ListDemo');
	    } }, { path: '/header', name: 'Header', loader: function loader() {
	        return __webpack_require__(735)('HeaderDemo');
	    } }, { path: '/switch', name: 'Switch', loader: function loader() {
	        return __webpack_require__(748)('SwitchDemo');
	    } }, { path: '/drawer', name: 'Drawer', loader: function loader() {
	        return __webpack_require__(731)('DrawerDemo');
	    } }, { path: '/calendar', name: 'Calendar', loader: function loader() {
	        return __webpack_require__(726)('CalendarDemo');
	    } }, { path: '/dragula', name: 'Dragula', loader: function loader() {
	        return __webpack_require__(730)('DragulaDemo');
	    } }, { path: '/tiles', name: 'Tiles', loader: function loader() {
	        return __webpack_require__(751)('TilesDemo');
	    } }, { path: '/slides', name: 'Slides', loader: function loader() {
	        return __webpack_require__(747)('SlidesDemo');
	    } }, { path: '/tipwell', name: 'TipWell', loader: function loader() {
	        return __webpack_require__(752)('TipWellDemo');
	    } }, { path: '/editor', name: 'Editor', loader: function loader() {
	        return __webpack_require__(733)('EditorDemo');
	    } },
	
	// Utils
	{ path: '/utils', name: 'Utils', loader: function loader() {
	        return __webpack_require__(756)('UtilsDemo');
	    } }, { path: '/pipes', name: 'Pipes', loader: function loader() {
	        return __webpack_require__(743)('PipesDemo');
	    } }]), _dec(_class = _dec2(_class = function () {
	    function DemoApp(router, toastService, view, modalService) {
	        var _this = this;
	
	        _classCallCheck(this, DemoApp);
	
	        this.router = router;
	        this.menuOpen = false;
	        this.version = ("0.2.25");
	
	        toastService.parentViewContainer = view;
	        modalService.parentViewContainer = view;
	
	        this.designRoutes = [{ name: 'Composition', path: '/composition' }, { name: 'Typography', path: '/typography' }, { name: 'Iconography', path: '/icons' }, { name: 'Color', path: '/color' }].sort(function (a, b) {
	            if (a.name < b.name) return -1;
	            if (a.name > b.name) return 1;
	            return 0;
	        });
	
	        this.componentRoutes = [{ name: 'QuickNote', path: '/quick-note' }, { name: 'Radio', path: '/radio' }, { name: 'Toast', path: '/toast' }, { name: 'Button', path: '/button' }, { name: 'Form', path: '/form' }, { name: 'Tabs', path: '/tabs' }, { name: 'Modal', path: '/Modal' }, { name: 'Select', path: '/select' }, { name: 'Picker', path: '/picker' }, { name: 'Chips', path: '/chips' }, { name: 'Dropdown', path: '/dropdown' }, { name: 'Loading', path: '/loading' }, { name: 'Cards', path: '/cards' }, { name: 'Tooltip', path: '/tooltip' }, { name: 'Drawer', path: '/drawer' }, { name: 'Switch', path: '/switch' }, { name: 'Header', path: '/header' }, { name: 'List', path: '/list' }, { name: 'Table', path: '/table' }, { name: 'Calendar', path: '/calendar' }, { name: 'Dragula', path: '/dragula' }, { name: 'Tiles', path: '/tiles' }, { name: 'Slides', path: '/slides' }, { name: 'TipWell', path: '/tipwell' }, { name: 'Editor', path: '/editor' }].sort(function (a, b) {
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
	//# sourceMappingURL=data:application/json;base64,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QUFSO0FBQ3JCLGdCQUFJLEVBQUUsSUFBRixHQUFTLEVBQUUsSUFBZixFQUFxQixPQUFPLENBQVA7QUFDckIsbUJBQU8sQ0FBUDtBQUNILFNBOUJzQixDQUF2Qjs7QUFnQ0EsYUFBSyxVQUFMLEdBQWtCLENBQ2QsRUFBRSxNQUFNLE9BQVIsRUFBaUIsTUFBTSxRQUF2QixFQURjLEVBRWQsRUFBRSxNQUFNLE9BQVIsRUFBaUIsTUFBTSxRQUF2QixFQUZjLEVBR2hCLElBSGdCLENBR1gsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFVO0FBQ2IsZ0JBQUksRUFBRSxJQUFGLEdBQVMsRUFBRSxJQUFmLEVBQXFCLE9BQU8sQ0FBQyxDQUFSO0FBQ3JCLGdCQUFJLEVBQUUsSUFBRixHQUFTLEVBQUUsSUFBZixFQUFxQixPQUFPLENBQVA7QUFDckIsbUJBQU8sQ0FBUDtBQUNILFNBUGlCLENBQWxCOztBQVNBLGVBQU8sU0FBUCxDQUFpQixZQUFNO0FBQ25CLHFCQUFTLElBQVQsQ0FBYyxTQUFkLEdBQTBCLENBQTFCO0FBQ0Esa0JBQUssUUFBTCxHQUFnQixLQUFoQjtBQUNILFNBSEQ7QUFJSDs7OztxQ0FFWTtBQUNULGlCQUFLLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLLFFBQXRCO0FBQ0g7Ozs7O3dKQXJFUSxPIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvZ2l0aHViL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuXG5pbXBvcnQgeyBUT0FTVF9QUk9WSURFUlMsIFRvYXN0U2VydmljZSwgTU9EQUxfUFJPVklERVJTLCBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkZW1vLWFwcCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vQXBwLmh0bWwnKSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uVE9BU1RfUFJPVklERVJTLFxuICAgICAgICAuLi5NT0RBTF9QUk9WSURFUlNcbiAgICBdLFxuICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgQ09SRV9ESVJFQ1RJVkVTXG4gICAgXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gICAgLy8gQmFzZSBQYWdlcyAoZGVzaWduIHN5c3RlbSlcbiAgICB7IHBhdGg6ICcvJywgbmFtZTogJ0hvbWUnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vaG9tZS9Ib21lJykoJ0hvbWUnKSwgdXNlQXNEZWZhdWx0OiB0cnVlIH0sXG4gICAgeyBwYXRoOiAnL2NvbXBvc2l0aW9uJywgbmFtZTogJ0NvbXBvc2l0aW9uJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL2xheW91dC9MYXlvdXQnKSgnTGF5b3V0JykgfSxcbiAgICB7IHBhdGg6ICcvdHlwb2dyYXBoeScsIG5hbWU6ICdUeXBvZ3JhcGh5JywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL3R5cG9ncmFwaHkvVHlwb2dyYXBoeScpKCdUeXBvZ3JhcGh5JykgfSxcbiAgICB7IHBhdGg6ICcvaWNvbnMnLCBuYW1lOiAnSWNvbm9ncmFwaHknLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vaWNvbm9ncmFwaHkvSWNvbm9ncmFwaHknKSgnSWNvbm9ncmFwaHknKSB9LFxuICAgIHsgcGF0aDogJy9jb2xvcicsIG5hbWU6ICdDb2xvcicsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9jb2xvci9Db2xvcicpKCdDb2xvcicpIH0sXG5cbiAgICAvLyBFbGVtZW50L0NvbXBvbmVudC9TZXJ2aWNlL2V0Yy4uIERlbW9zXG4gICAgeyBwYXRoOiAnL2J1dHRvbicsIG5hbWU6ICdCdXR0b24nLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vYnV0dG9uL0J1dHRvbkRlbW8nKSgnQnV0dG9uRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL3JhZGlvJywgbmFtZTogJ1JhZGlvJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL3JhZGlvL1JhZGlvRGVtbycpKCdSYWRpb0RlbW8nKSB9LFxuICAgIHsgcGF0aDogJy9xdWljay1ub3RlJywgbmFtZTogJ1F1aWNrTm90ZScsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9xdWljay1ub3RlL1F1aWNrTm90ZURlbW8nKSgnUXVpY2tOb3RlRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL21vZGFsJywgbmFtZTogJ01vZGFsJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL21vZGFsL01vZGFsRGVtbycpKCdNb2RhbERlbW8nKSB9LFxuICAgIHsgcGF0aDogJy9mb3JtJywgbmFtZTogJ0Zvcm0nLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vZm9ybS9Gb3JtRGVtbycpKCdGb3JtRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL3RvYXN0JywgbmFtZTogJ1RvYXN0JywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL3RvYXN0L1RvYXN0RGVtbycpKCdUb2FzdERlbW8nKSB9LFxuICAgIHsgcGF0aDogJy90b29sdGlwJywgbmFtZTogJ1Rvb2x0aXAnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vdG9vbHRpcC9Ub29sdGlwRGVtbycpKCdUb29sdGlwRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL2NhcmRzJywgbmFtZTogJ0NhcmRzJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL2NhcmQvQ2FyZERlbW8nKSgnQ2FyZERlbW8nKSB9LFxuICAgIHsgcGF0aDogJy9sb2FkaW5nJywgbmFtZTogJ0xvYWRpbmcnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vLi4vbG9hZGluZy9Mb2FkaW5nRGVtbycpKCdMb2FkaW5nRGVtbycpIH0sXG4gICAgeyBwYXRoOiAnL2Ryb3Bkb3duJywgbmFtZTogJ0Ryb3Bkb3duJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL2Ryb3Bkb3duL0Ryb3Bkb3duRGVtbycpKCdEcm9wZG93bkRlbW8nKSB9LFxuICAgIHsgcGF0aDogJy9waWNrZXInLCBuYW1lOiAnUGlja2VyJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL3BpY2tlci9QaWNrZXJEZW1vJykoJ1BpY2tlckRlbW8nKSB9LFxuICAgIHsgcGF0aDogJy9jaGlwcycsIG5hbWU6ICdDaGlwcycsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9jaGlwcy9DaGlwc0RlbW8nKSgnQ2hpcHNEZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvc2VsZWN0JywgbmFtZTogJ1NlbGVjdCcsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9zZWxlY3QvU2VsZWN0RGVtbycpKCdTZWxlY3REZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvdGFicycsIG5hbWU6ICdUYWJzJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL3RhYnMvVGFic0RlbW8nKSgnVGFic0RlbW8nKSB9LFxuICAgIHsgcGF0aDogJy90YWJsZScsIG5hbWU6ICdUYWJsZScsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi90YWJsZS9UYWJsZURlbW8nKSgnVGFibGVEZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvbGlzdCcsIG5hbWU6ICdMaXN0JywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL2xpc3QvTGlzdERlbW8nKSgnTGlzdERlbW8nKSB9LFxuICAgIHsgcGF0aDogJy9oZWFkZXInLCBuYW1lOiAnSGVhZGVyJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL2hlYWRlci9IZWFkZXJEZW1vJykoJ0hlYWRlckRlbW8nKSB9LFxuICAgIHsgcGF0aDogJy9zd2l0Y2gnLCBuYW1lOiAnU3dpdGNoJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL3N3aXRjaC9Td2l0Y2hEZW1vJykoJ1N3aXRjaERlbW8nKSB9LFxuICAgIHsgcGF0aDogJy9kcmF3ZXInLCBuYW1lOiAnRHJhd2VyJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL2RyYXdlci9EcmF3ZXJEZW1vJykoJ0RyYXdlckRlbW8nKSB9LFxuICAgIHsgcGF0aDogJy9jYWxlbmRhcicsIG5hbWU6ICdDYWxlbmRhcicsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9jYWxlbmRhci9DYWxlbmRhckRlbW8nKSgnQ2FsZW5kYXJEZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvZHJhZ3VsYScsIG5hbWU6ICdEcmFndWxhJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL2RyYWd1bGEvRHJhZ3VsYURlbW8nKSgnRHJhZ3VsYURlbW8nKSB9LFxuICAgIHsgcGF0aDogJy90aWxlcycsIG5hbWU6ICdUaWxlcycsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi90aWxlcy9UaWxlc0RlbW8nKSgnVGlsZXNEZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvc2xpZGVzJywgbmFtZTogJ1NsaWRlcycsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9zbGlkZXMvU2xpZGVzRGVtbycpKCdTbGlkZXNEZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvdGlwd2VsbCcsIG5hbWU6ICdUaXBXZWxsJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL3RpcC13ZWxsL1RpcFdlbGxEZW1vJykoJ1RpcFdlbGxEZW1vJykgfSxcbiAgICB7IHBhdGg6ICcvZWRpdG9yJywgbmFtZTogJ0VkaXRvcicsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9lZGl0b3IvRWRpdG9yRGVtbycpKCdFZGl0b3JEZW1vJykgfSxcblxuICAgIC8vIFV0aWxzXG4gICAgeyBwYXRoOiAnL3V0aWxzJywgbmFtZTogJ1V0aWxzJywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuLy4uL3V0aWxzL1V0aWxzRGVtbycpKCdVdGlsc0RlbW8nKSB9LFxuICAgIHsgcGF0aDogJy9waXBlcycsIG5hbWU6ICdQaXBlcycsIGxvYWRlcjogKCkgPT4gcmVxdWlyZSgnZXM2LXByb21pc2UhLi8uLi9waXBlcy9QaXBlc0RlbW8nKSgnUGlwZXNEZW1vJykgfVxuXSlcbmV4cG9ydCBjbGFzcyBEZW1vQXBwIHtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXI6Um91dGVyLCB0b2FzdFNlcnZpY2U6VG9hc3RTZXJ2aWNlLCB2aWV3OlZpZXdDb250YWluZXJSZWYsIG1vZGFsU2VydmljZTpNb2RhbFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgICAgIHRoaXMubWVudU9wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gVkVSU0lPTjtcblxuICAgICAgICB0b2FzdFNlcnZpY2UucGFyZW50Vmlld0NvbnRhaW5lciA9IHZpZXc7XG4gICAgICAgIG1vZGFsU2VydmljZS5wYXJlbnRWaWV3Q29udGFpbmVyID0gdmlldztcblxuICAgICAgICB0aGlzLmRlc2lnblJvdXRlcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ0NvbXBvc2l0aW9uJywgcGF0aDogJy9jb21wb3NpdGlvbicgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1R5cG9ncmFwaHknLCBwYXRoOiAnL3R5cG9ncmFwaHknIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdJY29ub2dyYXBoeScsIHBhdGg6ICcvaWNvbnMnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdDb2xvcicsIHBhdGg6ICcvY29sb3InIH1cbiAgICAgICAgXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5uYW1lIDwgYi5uYW1lKSByZXR1cm4gLTE7XG4gICAgICAgICAgICBpZiAoYS5uYW1lID4gYi5uYW1lKSByZXR1cm4gMTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbXBvbmVudFJvdXRlcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ1F1aWNrTm90ZScsIHBhdGg6ICcvcXVpY2stbm90ZScgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1JhZGlvJywgcGF0aDogJy9yYWRpbycgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1RvYXN0JywgcGF0aDogJy90b2FzdCcgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0J1dHRvbicsIHBhdGg6ICcvYnV0dG9uJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRm9ybScsIHBhdGg6ICcvZm9ybScgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1RhYnMnLCBwYXRoOiAnL3RhYnMnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdNb2RhbCcsIHBhdGg6ICcvTW9kYWwnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdTZWxlY3QnLCBwYXRoOiAnL3NlbGVjdCcgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1BpY2tlcicsIHBhdGg6ICcvcGlja2VyJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnQ2hpcHMnLCBwYXRoOiAnL2NoaXBzJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRHJvcGRvd24nLCBwYXRoOiAnL2Ryb3Bkb3duJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnTG9hZGluZycsIHBhdGg6ICcvbG9hZGluZycgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0NhcmRzJywgcGF0aDogJy9jYXJkcycgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1Rvb2x0aXAnLCBwYXRoOiAnL3Rvb2x0aXAnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdEcmF3ZXInLCBwYXRoOiAnL2RyYXdlcicgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1N3aXRjaCcsIHBhdGg6ICcvc3dpdGNoJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnSGVhZGVyJywgcGF0aDogJy9oZWFkZXInIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdMaXN0JywgcGF0aDogJy9saXN0JyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnVGFibGUnLCBwYXRoOiAnL3RhYmxlJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnQ2FsZW5kYXInLCBwYXRoOiAnL2NhbGVuZGFyJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRHJhZ3VsYScsIHBhdGg6ICcvZHJhZ3VsYScgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1RpbGVzJywgcGF0aDogJy90aWxlcycgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1NsaWRlcycsIHBhdGg6ICcvc2xpZGVzJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnVGlwV2VsbCcsIHBhdGg6ICcvdGlwd2VsbCcgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0VkaXRvcicsIHBhdGg6ICcvZWRpdG9yJyB9XG4gICAgICAgIF0uc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEubmFtZSA8IGIubmFtZSkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKGEubmFtZSA+IGIubmFtZSkgcmV0dXJuIDE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51dGlsUm91dGVzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnUGlwZXMnLCBwYXRoOiAnL3BpcGVzJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnVXRpbHMnLCBwYXRoOiAnL3V0aWxzJyB9XG4gICAgICAgIF0uc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEubmFtZSA8IGIubmFtZSkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKGEubmFtZSA+IGIubmFtZSkgcmV0dXJuIDE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcm91dGVyLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICB0aGlzLm1lbnVPcGVuID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUoKSB7XG4gICAgICAgIHRoaXMubWVudU9wZW4gPSAhdGhpcy5tZW51T3BlbjtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 725:
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

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(12, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(527)[namespace]);
	      } else {
	        resolve(__webpack_require__(527));
	      }
	    });
	  });
	}

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(6, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(528)[namespace]);
	      } else {
	        resolve(__webpack_require__(528));
	      }
	    });
	  });
	}

/***/ },

/***/ 728:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(11, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(529)[namespace]);
	      } else {
	        resolve(__webpack_require__(529));
	      }
	    });
	  });
	}

/***/ },

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(32, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(530)[namespace]);
	      } else {
	        resolve(__webpack_require__(530));
	      }
	    });
	  });
	}

/***/ },

/***/ 730:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(17, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(531)[namespace]);
	      } else {
	        resolve(__webpack_require__(531));
	      }
	    });
	  });
	}

/***/ },

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(26, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(532)[namespace]);
	      } else {
	        resolve(__webpack_require__(532));
	      }
	    });
	  });
	}

/***/ },

/***/ 732:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(25, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(533)[namespace]);
	      } else {
	        resolve(__webpack_require__(533));
	      }
	    });
	  });
	}

/***/ },

/***/ 733:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(24, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(534)[namespace]);
	      } else {
	        resolve(__webpack_require__(534));
	      }
	    });
	  });
	}

/***/ },

/***/ 734:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(1, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(535)[namespace]);
	      } else {
	        resolve(__webpack_require__(535));
	      }
	    });
	  });
	}

/***/ },

/***/ 735:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(23, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(536)[namespace]);
	      } else {
	        resolve(__webpack_require__(536));
	      }
	    });
	  });
	}

/***/ },

/***/ 736:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(31, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(537)[namespace]);
	      } else {
	        resolve(__webpack_require__(537));
	      }
	    });
	  });
	}

/***/ },

/***/ 737:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(30, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(538)[namespace]);
	      } else {
	        resolve(__webpack_require__(538));
	      }
	    });
	  });
	}

/***/ },

/***/ 738:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(29, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(539)[namespace]);
	      } else {
	        resolve(__webpack_require__(539));
	      }
	    });
	  });
	}

/***/ },

/***/ 739:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(22, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(540)[namespace]);
	      } else {
	        resolve(__webpack_require__(540));
	      }
	    });
	  });
	}

/***/ },

/***/ 740:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(16, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(541)[namespace]);
	      } else {
	        resolve(__webpack_require__(541));
	      }
	    });
	  });
	}

/***/ },

/***/ 741:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(2, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(542)[namespace]);
	      } else {
	        resolve(__webpack_require__(542));
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
	        resolve(__webpack_require__(543)[namespace]);
	      } else {
	        resolve(__webpack_require__(543));
	      }
	    });
	  });
	}

/***/ },

/***/ 743:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(21, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(544)[namespace]);
	      } else {
	        resolve(__webpack_require__(544));
	      }
	    });
	  });
	}

/***/ },

/***/ 744:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(10, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(545)[namespace]);
	      } else {
	        resolve(__webpack_require__(545));
	      }
	    });
	  });
	}

/***/ },

/***/ 745:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(15, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(546)[namespace]);
	      } else {
	        resolve(__webpack_require__(546));
	      }
	    });
	  });
	}

/***/ },

/***/ 746:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(14, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(547)[namespace]);
	      } else {
	        resolve(__webpack_require__(547));
	      }
	    });
	  });
	}

/***/ },

/***/ 747:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(20, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(548)[namespace]);
	      } else {
	        resolve(__webpack_require__(548));
	      }
	    });
	  });
	}

/***/ },

/***/ 748:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(19, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(549)[namespace]);
	      } else {
	        resolve(__webpack_require__(549));
	      }
	    });
	  });
	}

/***/ },

/***/ 749:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(7, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(550)[namespace]);
	      } else {
	        resolve(__webpack_require__(550));
	      }
	    });
	  });
	}

/***/ },

/***/ 750:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(5, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(551)[namespace]);
	      } else {
	        resolve(__webpack_require__(551));
	      }
	    });
	  });
	}

/***/ },

/***/ 751:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(18, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(552)[namespace]);
	      } else {
	        resolve(__webpack_require__(552));
	      }
	    });
	  });
	}

/***/ },

/***/ 752:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(9, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(553)[namespace]);
	      } else {
	        resolve(__webpack_require__(553));
	      }
	    });
	  });
	}

/***/ },

/***/ 753:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(13, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(554)[namespace]);
	      } else {
	        resolve(__webpack_require__(554));
	      }
	    });
	  });
	}

/***/ },

/***/ 754:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(4, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(555)[namespace]);
	      } else {
	        resolve(__webpack_require__(555));
	      }
	    });
	  });
	}

/***/ },

/***/ 755:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(28, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(556)[namespace]);
	      } else {
	        resolve(__webpack_require__(556));
	      }
	    });
	  });
	}

/***/ },

/***/ 756:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(27, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(557)[namespace]);
	      } else {
	        resolve(__webpack_require__(557));
	      }
	    });
	  });
	}

/***/ },

/***/ 644:
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGxhdGZvcm0vYnJvd3Nlci1kaXJlY3RpdmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7b01BSEE7OztBQUtBO0FBQ08sSUFBTSx5S0FBTjs7QUFLQSxJQUFNLGtDQUFhLENBQ3RCLEVBQUUsa0NBQUYsRUFBZ0MsT0FBTyxJQUF2QyxFQUE2QyxVQUFVLHNCQUF2RCxFQURzQixDQUFuQiIsImZpbGUiOiJicm93c2VyLWRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2dpdGh1Yi9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlc2UgYXJlIGdsb2JhbGx5IGF2YWlsYWJsZSBkaXJlY3RpdmVzIGluIGFueSB0ZW1wbGF0ZVxuaW1wb3J0IHsgUExBVEZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBhcHBsaWNhdGlvbl9kaXJlY3RpdmVzOiBkaXJlY3RpdmVzIHRoYXQgYXJlIGdsb2JhbCB0aHJvdWdoIG91dCB0aGUgYXBwbGljYXRpb25cbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9ESVJFQ1RJVkVTID0gW1xuICAgIC4uLlJPVVRFUl9ESVJFQ1RJVkVTLFxuICAgIC4uLkZPUk1fRElSRUNUSVZFU1xuXTtcblxuZXhwb3J0IGNvbnN0IERJUkVDVElWRVMgPSBbXG4gICAgeyBwcm92aWRlOiBQTEFURk9STV9ESVJFQ1RJVkVTLCBtdWx0aTogdHJ1ZSwgdXNlVmFsdWU6IEFQUExJQ0FUSU9OX0RJUkVDVElWRVMgfVxuXTtcbiJdfQ==

/***/ },

/***/ 645:
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGxhdGZvcm0vYnJvd3Nlci1waXBlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBRUE7QUFDTyxJQUFNLGdEQUFvQixFQUExQixDLENBSlA7QUFNTyxJQUFNLHdCQUFRLENBQ2pCLEVBQUUsNkJBQUYsRUFBMkIsT0FBTyxJQUFsQyxFQUF3QyxVQUFVLGlCQUFsRCxFQURpQixDQUFkIiwiZmlsZSI6ImJyb3dzZXItcGlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2dpdGh1Yi9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlc2UgYXJlIGdsb2JhbGx5IGF2YWlsYWJsZSBwaXBlcyBpbiBhbnkgdGVtcGxhdGVcbmltcG9ydCB7IFBMQVRGT1JNX1BJUEVTIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGFwcGxpY2F0aW9uX3BpcGVzOiBwaXBlcyB0aGF0IGFyZSBnbG9iYWwgdGhyb3VnaCBvdXQgdGhlIGFwcGxpY2F0aW9uXG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fUElQRVMgPSBbXTtcblxuZXhwb3J0IGNvbnN0IFBJUEVTID0gW1xuICAgIHsgcHJvdmlkZTogUExBVEZPUk1fUElQRVMsIG11bHRpOiB0cnVlLCB1c2VWYWx1ZTogQVBQTElDQVRJT05fUElQRVMgfVxuXTtcbiJdfQ==

/***/ },

/***/ 646:
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGxhdGZvcm0vYnJvd3Nlci1wcm92aWRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOztvTUFMQTs7O0FBT0E7QUFDQTtBQUNPLElBQU0sbVJBTVQsRUFBRSxpQ0FBRixFQUE2QixzQ0FBN0IsRUFOUyxFQUFOOztBQVNBLElBQU0sNkRBQ04scUJBRE0sRUFBTiIsImZpbGUiOiJicm93c2VyLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvZ2l0aHViL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGVzZSBhcmUgZ2xvYmFsbHkgYXZhaWxhYmxlIHNlcnZpY2VzIGluIGFueSBjb21wb25lbnQgb3IgYW55IG90aGVyIHNlcnZpY2VcbmltcG9ydCB7IEhhc2hMb2NhdGlvblN0cmF0ZWd5LCBMb2NhdGlvblN0cmF0ZWd5LCBGT1JNX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcblxuaW1wb3J0IHsgTk9WT19FTEVNRU5UU19MQUJFTFNfUFJPVklERVJTIH0gZnJvbSAnLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbi8vIEFwcGxpY2F0aW9uIFByb3ZpZGVycy9EaXJlY3RpdmVzL1BpcGVzXG4vLyBwcm92aWRlcnMvZGlyZWN0aXZlcy9waXBlcyB0aGF0IG9ubHkgbGl2ZSBpbiBvdXIgYnJvd3NlciBlbnZpcm9ubWVudFxuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX1BST1ZJREVSUyA9IFtcbiAgICAuLi5ST1VURVJfUFJPVklERVJTLFxuICAgIC4uLkZPUk1fUFJPVklERVJTLFxuICAgIC4uLkhUVFBfUFJPVklERVJTLFxuICAgIC4uLk5PVk9fRUxFTUVOVFNfTEFCRUxTX1BST1ZJREVSUyxcblxuICAgIHsgcHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH1cbl07XG5cbmV4cG9ydCBjb25zdCBQUk9WSURFUlMgPSBbXG4gICAgLi4uQVBQTElDQVRJT05fUFJPVklERVJTXG5dO1xuIl19

/***/ },

/***/ 647:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PLATFORM_PROVIDERS = undefined;
	
	var _browserDirectives = __webpack_require__(644);
	
	Object.keys(_browserDirectives).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _browserDirectives[key];
	        }
	    });
	});
	
	var _browserPipes = __webpack_require__(645);
	
	Object.keys(_browserPipes).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _browserPipes[key];
	        }
	    });
	});
	
	var _browserProviders = __webpack_require__(646);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGxhdGZvcm0vYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFNTyxJQUFNLHdNQUFOIiwiZmlsZSI6ImJyb3dzZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2dpdGh1Yi9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9icm93c2VyLWRpcmVjdGl2ZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9icm93c2VyLXBpcGVzJztcbmV4cG9ydCAqIGZyb20gJy4vYnJvd3Nlci1wcm92aWRlcnMnO1xuXG5pbXBvcnQgeyBESVJFQ1RJVkVTIH0gZnJvbSAnLi9icm93c2VyLWRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgUElQRVMgfSBmcm9tICcuL2Jyb3dzZXItcGlwZXMnO1xuaW1wb3J0IHsgUFJPVklERVJTIH0gZnJvbSAnLi9icm93c2VyLXByb3ZpZGVycyc7XG5cbmV4cG9ydCBjb25zdCBQTEFURk9STV9QUk9WSURFUlMgPSBbXG4gICAgLi4uUFJPVklERVJTLFxuICAgIC4uLkRJUkVDVElWRVMsXG4gICAgLi4uUElQRVNcbl07XG4iXX0=

/***/ },

/***/ 648:
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGxhdGZvcm0vZW52aXJvbm1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztvTUFEQTs7O0FBR0E7QUFDQSxJQUFJLFlBQVk7QUFDWjtBQURZLENBQWhCOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxRQUFRLFlBQVosRUFBMEI7QUFDdEI7QUFDQTtBQUNBOztBQUVBLDZDQUNPLFNBRFA7QUFJSCxDQVREO0FBT1E7QUFFRDtBQUNIO0FBQ0E7QUFDQSxpREFDTyxTQURQO0FBSUg7O0FBRUQ7O0FBSlE7QUFLRCxJQUFNLHFFQUNOLFNBRE0sRUFBTiIsImZpbGUiOiJlbnZpcm9ubWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvZ2l0aHViL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBlbmFibGVEZWJ1Z1Rvb2xzLCBkaXNhYmxlRGVidWdUb29scyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gRW52aXJvbm1lbnQgUHJvdmlkZXJzXG5sZXQgUFJPVklERVJTID0gW1xuICAgIC8vIGNvbW1vbiBlbnYgZGlyZWN0aXZlc1xuXTtcblxuLy8gQW5ndWxhciBkZWJ1ZyB0b29scyBpbiB0aGUgZGV2IGNvbnNvbGVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi84NjQwNTM0NWI3ODFhOWRjMjQzOGMwZmJlM2U5NDA5MjQ1NjQ3MDE5L1RPT0xTX0pTLm1kXG4vLyBsZXQgX2RlY29yYXRlQ29tcG9uZW50UmVmID0gZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbi8vICAgICByZXR1cm4gdmFsdWU7XG4vLyB9O1xuXG5pZiAoRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBQcm9kdWN0aW9uXG4gICAgLy8gZGlzYWJsZURlYnVnVG9vbHMoKTtcbiAgICBlbmFibGVQcm9kTW9kZSgpO1xuXG4gICAgUFJPVklERVJTID0gW1xuICAgICAgICAuLi5QUk9WSURFUlNcbiAgICAgICAgLy8gY3VzdG9tIHByb3ZpZGVycyBpbiBwcm9kdWN0aW9uXG4gICAgXTtcbn0gZWxzZSB7XG4gICAgLy8gX2RlY29yYXRlQ29tcG9uZW50UmVmID0gKGNtcFJlZikgPT4gZW5hYmxlRGVidWdUb29scyhjbXBSZWYpO1xuICAgIC8vIERldmVsb3BtZW50XG4gICAgUFJPVklERVJTID0gW1xuICAgICAgICAuLi5QUk9WSURFUlNcbiAgICAgICAgLy8gY3VzdG9tIHByb3ZpZGVycyBpbiBkZXZlbG9wbWVudFxuICAgIF07XG59XG5cbi8vIGV4cG9ydCBjb25zdCBkZWNvcmF0ZUNvbXBvbmVudFJlZiA9IF9kZWNvcmF0ZUNvbXBvbmVudFJlZjtcbmV4cG9ydCBjb25zdCBFTlZfUFJPVklERVJTID0gW1xuICAgIC4uLlBST1ZJREVSU1xuXTtcbiJdfQ==

/***/ }

});
//# sourceMappingURL=demo.645f279ba410ad2dcd94.bundle.map