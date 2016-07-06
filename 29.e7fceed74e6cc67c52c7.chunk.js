webpackJsonp([29],{

/***/ 1148:
/***/ function(module, exports) {

	module.exports = "<header class=\"design container\" [ngClass]=\"color\">\n    <div>\n        <h1 class=\"title\">Color</h1>\n        <h2 class=\"sub-title\">Efficient and expressive</h2>\n        <p class=\"description\">Our colors are bold, fresh, and approachable. They are expressive and delightful, but selected with usability and accessibility in mind.</p>\n    </div>\n    <div class=\"background-boxes\">\n        <div class=\"bb-lead\" (mouseover)=\"changeColor('lead')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-contact\" (mouseover)=\"changeColor('contact')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-company\" (mouseover)=\"changeColor('company')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-candidate\" (mouseover)=\"changeColor('candidate')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-opportunity\" (mouseover)=\"changeColor('opportunity')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-job\" (mouseover)=\"changeColor('job')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-placement\" (mouseover)=\"changeColor('placement')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-grapefruit\" (mouseover)=\"changeColor('grapefruit')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-bittersweet\" (mouseover)=\"changeColor('bittersweet')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-sunflower\" (mouseover)=\"changeColor('sunflower')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-grass\" (mouseover)=\"changeColor('grass')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-mint\" (mouseover)=\"changeColor('mint')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-aqua\" (mouseover)=\"changeColor('aqua')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-ocean\" (mouseover)=\"changeColor('ocean')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-carnation\" (mouseover)=\"changeColor('carnation')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-lavender\" (mouseover)=\"changeColor('lavender')\" (mouseout)=\"changeColor('background')\"></div>\n    </div>\n</header>\n<section class=\"design container\">\n    <h2>Primary Colors</h2>\n    <p>These are the base colors of the application.</p>\n\n    <article class=\"color-blocks primary-colors\">\n        <div *ngFor=\"let color of primaryColors\" class=\"block {{color.name}}-cb\">\n            <div class=\"color-square\" (click)=\"copyLink(color)\"></div>\n            <h3 class=\"color-text\" (click)=\"copyLink(color)\"><span>#</span>{{color.hex}}</h3>\n            <h6>{{color.name}}</h6>\n            <span class=\"vars\" *ngFor=\"let variable of color.variables\">${{variable}}</span>\n        </div>\n    </article>\n\n    <h2>Entity Colors</h2>\n    <p>This bold palette uses carefully balanced colors to distinguish entities from one another.</p>\n\n    <article class=\"color-blocks entity-colors\">\n        <div *ngFor=\"let color of entityColors\" class=\"block {{color.name}}-cb\">\n            <div class=\"color-square\" (click)=\"copyLink(color)\"></div>\n            <h3 class=\"color-text\" (click)=\"copyLink(color)\"><span>#</span>{{color.hex}}</h3>\n            <h6>{{color.name}}</h6>\n            <span class=\"vars\" *ngFor=\"let variable of color.variables\">${{variable}}</span>\n        </div>\n    </article>\n\n    <h2>Analytics Colors</h2>\n    <p>This palette features vibrant, bold colors for use in data visualization.</p>\n\n    <article class=\"color-blocks analytics-colors\">\n        <div *ngFor=\"let color of analyticsColors\" class=\"block {{color.name}}-cb\">\n            <div class=\"color-square\" (click)=\"copyLink(color)\"></div>\n            <h3 class=\"color-text\" (click)=\"copyLink(color)\"><span>#</span>{{color.hex}}</h3>\n            <h6>{{color.name}}</h6>\n            <span class=\"vars\" *ngFor=\"let variable of color.variables\">${{variable}}</span>\n        </div>\n    </article>\n</section>\n"

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Color = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(5);
	
	var _novoElements = __webpack_require__(15);
	
	var _Color = __webpack_require__(1148);
	
	var _Color2 = _interopRequireDefault(_Color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Color = exports.Color = (_dec = (0, _core.Component)({
	    selector: 'color',
	    directives: [_common.CORE_DIRECTIVES],
	    template: _Color2.default
	}), _dec(_class = function () {
	    function Color(toaster) {
	        _classCallCheck(this, Color);
	
	        this.primaryColors = [{
	            name: 'navigation',
	            variables: ['navigation'],
	            hex: '2F383F'
	        }, {
	            name: 'action',
	            variables: ['positive'],
	            hex: '4A89DC'
	        }, {
	            name: 'text',
	            variables: ['dark', 'base-font-color'],
	            hex: '474747'
	        }, {
	            name: 'background',
	            variables: ['off-white', 'background'],
	            hex: 'F4F4F4'
	        }];
	
	        this.entityColors = [{
	            name: 'lead',
	            variables: ['lead'],
	            hex: 'AA6699'
	        }, {
	            name: 'contact',
	            variables: ['contact'],
	            hex: 'FFAA44'
	        }, {
	            name: 'company',
	            variables: ['company'],
	            hex: '3399DD'
	        }, {
	            name: 'candidate',
	            variables: ['candidate'],
	            hex: '44BB77'
	        }, {
	            name: 'opportunity',
	            variables: ['opportunity'],
	            hex: '662255'
	        }, {
	            name: 'job',
	            variables: ['job'],
	            hex: 'BB5566'
	        }, {
	            name: 'submission',
	            variables: ['submission'],
	            hex: '778899'
	        }, {
	            name: 'placement',
	            variables: ['placement'],
	            hex: '0B344F'
	        }];
	
	        this.analyticsColors = [{
	            name: 'grapefruit',
	            variables: ['grapefruit'],
	            hex: 'DA4453'
	        }, {
	            name: 'bittersweet',
	            variables: ['bittersweet'],
	            hex: 'EB6845'
	        }, {
	            name: 'sunflower',
	            variables: ['sunflower'],
	            hex: 'F6B042'
	        }, {
	            name: 'grass',
	            variables: ['grass'],
	            hex: '8CC152'
	        }, {
	            name: 'mint',
	            variables: ['mint'],
	            hex: '37BC9B'
	        }, {
	            name: 'aqua',
	            variables: ['aqua'],
	            hex: '3BAFDA'
	        }, {
	            name: 'ocean',
	            variables: ['ocean'],
	            hex: '4A89DC'
	        }, {
	            name: 'carnation',
	            variables: ['carnation'],
	            hex: 'D770AD'
	        }, {
	            name: 'lavender',
	            variables: ['lavender'],
	            hex: '967ADC'
	        }];
	
	        this.options = {
	            'title': 'Copied!',
	            'message': 'Some Message...',
	            'theme': 'success',
	            'icon': 'clipboard',
	            'position': 'growlTopRight'
	        };
	
	        this.toaster = toaster;
	    }
	
	    _createClass(Color, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.color = 'background';
	        }
	    }, {
	        key: 'changeColor',
	        value: function changeColor(color) {
	            this.color = color;
	        }
	    }, {
	        key: 'copyLink',
	        value: function copyLink(color) {
	            // Create dom element to copy from
	            var copyFrom = document.createElement('textarea');
	            copyFrom.textContent = '#' + color.hex;
	            var body = document.getElementsByTagName('body')[0];
	            body.appendChild(copyFrom);
	            copyFrom.select();
	            // Copy text
	            document.execCommand('copy');
	            // Delete element
	            body.removeChild(copyFrom);
	
	            // Set toast options
	            this.options = {
	                title: '#' + color.hex,
	                message: 'Copied to your clipboard',
	                theme: color.name,
	                icon: 'clipboard',
	                position: 'growlTopRight'
	            };
	
	            if (color.name === 'action') this.options.theme = 'ocean';
	
	            // Fire toast
	            this.toaster.alert(_novoElements.NovoToast, this.options);
	        }
	    }]);
	
	    return Color;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_novoElements.ToastService], Color);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvY29sb3IvQ29sb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7SUFPYSxLLFdBQUEsSyxXQUxaLHFCQUFVO0FBQ1AsY0FBVSxPQURIO0FBRVAsZ0JBQVkseUJBRkw7QUFHUDtBQUhPLENBQVYsQztBQU1HLG1CQUFZLE9BQVosRUFBa0M7QUFBQTs7QUFDOUIsYUFBSyxhQUFMLEdBQXFCLENBQ2pCO0FBQ0ksa0JBQU0sWUFEVjtBQUVJLHVCQUFXLENBQUMsWUFBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQURpQixFQU1qQjtBQUNJLGtCQUFNLFFBRFY7QUFFSSx1QkFBVyxDQUFDLFVBQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FOaUIsRUFXakI7QUFDSSxrQkFBTSxNQURWO0FBRUksdUJBQVcsQ0FBQyxNQUFELEVBQVMsaUJBQVQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FYaUIsRUFnQmpCO0FBQ0ksa0JBQU0sWUFEVjtBQUVJLHVCQUFXLENBQUMsV0FBRCxFQUFjLFlBQWQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FoQmlCLENBQXJCOztBQXVCQSxhQUFLLFlBQUwsR0FBb0IsQ0FDaEI7QUFDSSxrQkFBTSxNQURWO0FBRUksdUJBQVcsQ0FBQyxNQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBRGdCLEVBTWhCO0FBQ0ksa0JBQU0sU0FEVjtBQUVJLHVCQUFXLENBQUMsU0FBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQU5nQixFQVdoQjtBQUNJLGtCQUFNLFNBRFY7QUFFSSx1QkFBVyxDQUFDLFNBQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FYZ0IsRUFnQmhCO0FBQ0ksa0JBQU0sV0FEVjtBQUVJLHVCQUFXLENBQUMsV0FBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQWhCZ0IsRUFxQmhCO0FBQ0ksa0JBQU0sYUFEVjtBQUVJLHVCQUFXLENBQUMsYUFBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQXJCZ0IsRUEwQmhCO0FBQ0ksa0JBQU0sS0FEVjtBQUVJLHVCQUFXLENBQUMsS0FBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQTFCZ0IsRUErQmhCO0FBQ0ksa0JBQU0sWUFEVjtBQUVJLHVCQUFXLENBQUMsWUFBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQS9CZ0IsRUFvQ2hCO0FBQ0ksa0JBQU0sV0FEVjtBQUVJLHVCQUFXLENBQUMsV0FBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQXBDZ0IsQ0FBcEI7O0FBMkNBLGFBQUssZUFBTCxHQUF1QixDQUNuQjtBQUNJLGtCQUFNLFlBRFY7QUFFSSx1QkFBVyxDQUFDLFlBQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FEbUIsRUFNbkI7QUFDSSxrQkFBTSxhQURWO0FBRUksdUJBQVcsQ0FBQyxhQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBTm1CLEVBV25CO0FBQ0ksa0JBQU0sV0FEVjtBQUVJLHVCQUFXLENBQUMsV0FBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQVhtQixFQWdCbkI7QUFDSSxrQkFBTSxPQURWO0FBRUksdUJBQVcsQ0FBQyxPQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBaEJtQixFQXFCbkI7QUFDSSxrQkFBTSxNQURWO0FBRUksdUJBQVcsQ0FBQyxNQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBckJtQixFQTBCbkI7QUFDSSxrQkFBTSxNQURWO0FBRUksdUJBQVcsQ0FBQyxNQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBMUJtQixFQStCbkI7QUFDSSxrQkFBTSxPQURWO0FBRUksdUJBQVcsQ0FBQyxPQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBL0JtQixFQW9DbkI7QUFDSSxrQkFBTSxXQURWO0FBRUksdUJBQVcsQ0FBQyxXQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBcENtQixFQXlDbkI7QUFDSSxrQkFBTSxVQURWO0FBRUksdUJBQVcsQ0FBQyxVQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBekNtQixDQUF2Qjs7QUFnREEsYUFBSyxPQUFMLEdBQWU7QUFDWCxxQkFBUyxTQURFO0FBRVgsdUJBQVcsaUJBRkE7QUFHWCxxQkFBUyxTQUhFO0FBSVgsb0JBQVEsV0FKRztBQUtYLHdCQUFZO0FBTEQsU0FBZjs7QUFRQSxhQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0g7Ozs7bUNBRVU7QUFDUCxpQkFBSyxLQUFMLEdBQWEsWUFBYjtBQUNIOzs7b0NBRVcsSyxFQUFPO0FBQ2YsaUJBQUssS0FBTCxHQUFhLEtBQWI7QUFDSDs7O2lDQUVRLEssRUFBTzs7QUFFWixnQkFBSSxXQUFXLFNBQVMsYUFBVCxDQUF1QixVQUF2QixDQUFmO0FBQ0EscUJBQVMsV0FBVCxTQUEyQixNQUFNLEdBQWpDO0FBQ0EsZ0JBQUksT0FBTyxTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQVg7QUFDQSxpQkFBSyxXQUFMLENBQWlCLFFBQWpCO0FBQ0EscUJBQVMsTUFBVDs7QUFFQSxxQkFBUyxXQUFULENBQXFCLE1BQXJCOztBQUVBLGlCQUFLLFdBQUwsQ0FBaUIsUUFBakI7OztBQUdBLGlCQUFLLE9BQUwsR0FBZTtBQUNYLDZCQUFXLE1BQU0sR0FETjtBQUVYLHlCQUFTLDBCQUZFO0FBR1gsdUJBQU8sTUFBTSxJQUhGO0FBSVgsc0JBQU0sV0FKSztBQUtYLDBCQUFVO0FBTEMsYUFBZjs7QUFRQSxnQkFBSSxNQUFNLElBQU4sS0FBZSxRQUFuQixFQUE2QixLQUFLLE9BQUwsQ0FBYSxLQUFiLEdBQXFCLE9BQXJCOzs7QUFHN0IsaUJBQUssT0FBTCxDQUFhLEtBQWIsMEJBQThCLEtBQUssT0FBbkM7QUFDSDs7Ozs7MEVBaEtRLEsiLCJmaWxlIjoiQ29sb3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRvYXN0U2VydmljZSwgTm92b1RvYXN0IH0gZnJvbSAnLi8uLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL0NvbG9yLmh0bWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbG9yJyxcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgQ29sb3Ige1xuICAgIGNvbnN0cnVjdG9yKHRvYXN0ZXI6VG9hc3RTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMucHJpbWFyeUNvbG9ycyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbmF2aWdhdGlvbicsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ25hdmlnYXRpb24nXSxcbiAgICAgICAgICAgICAgICBoZXg6ICcyRjM4M0YnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdhY3Rpb24nLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydwb3NpdGl2ZSddLFxuICAgICAgICAgICAgICAgIGhleDogJzRBODlEQydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydkYXJrJywgJ2Jhc2UtZm9udC1jb2xvciddLFxuICAgICAgICAgICAgICAgIGhleDogJzQ3NDc0NydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2JhY2tncm91bmQnLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydvZmYtd2hpdGUnLCAnYmFja2dyb3VuZCddLFxuICAgICAgICAgICAgICAgIGhleDogJ0Y0RjRGNCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLmVudGl0eUNvbG9ycyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbGVhZCcsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2xlYWQnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICdBQTY2OTknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjb250YWN0JyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnY29udGFjdCddLFxuICAgICAgICAgICAgICAgIGhleDogJ0ZGQUE0NCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2NvbXBhbnknLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydjb21wYW55J10sXG4gICAgICAgICAgICAgICAgaGV4OiAnMzM5OUREJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2FuZGlkYXRlJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnY2FuZGlkYXRlJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnNDRCQjc3J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnb3Bwb3J0dW5pdHknLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydvcHBvcnR1bml0eSddLFxuICAgICAgICAgICAgICAgIGhleDogJzY2MjI1NSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2pvYicsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2pvYiddLFxuICAgICAgICAgICAgICAgIGhleDogJ0JCNTU2NidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3N1Ym1pc3Npb24nLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydzdWJtaXNzaW9uJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnNzc4ODk5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncGxhY2VtZW50JyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsncGxhY2VtZW50J10sXG4gICAgICAgICAgICAgICAgaGV4OiAnMEIzNDRGJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuYW5hbHl0aWNzQ29sb3JzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdncmFwZWZydWl0JyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnZ3JhcGVmcnVpdCddLFxuICAgICAgICAgICAgICAgIGhleDogJ0RBNDQ1MydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2JpdHRlcnN3ZWV0JyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnYml0dGVyc3dlZXQnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICdFQjY4NDUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdzdW5mbG93ZXInLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydzdW5mbG93ZXInXSxcbiAgICAgICAgICAgICAgICBoZXg6ICdGNkIwNDInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdncmFzcycsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2dyYXNzJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnOENDMTUyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbWludCcsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ21pbnQnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICczN0JDOUInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdhcXVhJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnYXF1YSddLFxuICAgICAgICAgICAgICAgIGhleDogJzNCQUZEQSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ29jZWFuJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnb2NlYW4nXSxcbiAgICAgICAgICAgICAgICBoZXg6ICc0QTg5REMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjYXJuYXRpb24nLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydjYXJuYXRpb24nXSxcbiAgICAgICAgICAgICAgICBoZXg6ICdENzcwQUQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdsYXZlbmRlcicsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2xhdmVuZGVyJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnOTY3QURDJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgICd0aXRsZSc6ICdDb3BpZWQhJyxcbiAgICAgICAgICAgICdtZXNzYWdlJzogJ1NvbWUgTWVzc2FnZS4uLicsXG4gICAgICAgICAgICAndGhlbWUnOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAnaWNvbic6ICdjbGlwYm9hcmQnLFxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2dyb3dsVG9wUmlnaHQnXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9ICdiYWNrZ3JvdW5kJztcbiAgICB9XG5cbiAgICBjaGFuZ2VDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxuXG4gICAgY29weUxpbmsoY29sb3IpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGRvbSBlbGVtZW50IHRvIGNvcHkgZnJvbVxuICAgICAgICBsZXQgY29weUZyb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBjb3B5RnJvbS50ZXh0Q29udGVudCA9IGAjJHtjb2xvci5oZXh9YDtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGNvcHlGcm9tKTtcbiAgICAgICAgY29weUZyb20uc2VsZWN0KCk7XG4gICAgICAgIC8vIENvcHkgdGV4dFxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgICAvLyBEZWxldGUgZWxlbWVudFxuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGNvcHlGcm9tKTtcblxuICAgICAgICAvLyBTZXQgdG9hc3Qgb3B0aW9uc1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogYCMke2NvbG9yLmhleH1gLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0NvcGllZCB0byB5b3VyIGNsaXBib2FyZCcsXG4gICAgICAgICAgICB0aGVtZTogY29sb3IubmFtZSxcbiAgICAgICAgICAgIGljb246ICdjbGlwYm9hcmQnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdncm93bFRvcFJpZ2h0J1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjb2xvci5uYW1lID09PSAnYWN0aW9uJykgdGhpcy5vcHRpb25zLnRoZW1lID0gJ29jZWFuJztcblxuICAgICAgICAvLyBGaXJlIHRvYXN0XG4gICAgICAgIHRoaXMudG9hc3Rlci5hbGVydChOb3ZvVG9hc3QsIHRoaXMub3B0aW9ucyk7XG4gICAgfVxufVxuIl19

/***/ }

});
//# sourceMappingURL=29.e7fceed74e6cc67c52c7.bundle.map