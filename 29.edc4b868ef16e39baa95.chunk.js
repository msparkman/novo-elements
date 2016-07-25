webpackJsonp([29],{

/***/ 1149:
/***/ function(module, exports) {

	module.exports = "<header class=\"design container\" [ngClass]=\"color\">\n    <div>\n        <h1 class=\"title\">Color</h1>\n        <h2 class=\"sub-title\">Efficient and expressive</h2>\n        <p class=\"description\">Our colors are bold, fresh, and approachable. They are expressive and delightful, but selected with usability and accessibility in mind.</p>\n    </div>\n    <div class=\"background-boxes\">\n        <div class=\"bb-lead\" (mouseover)=\"changeColor('lead')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-contact\" (mouseover)=\"changeColor('contact')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-company\" (mouseover)=\"changeColor('company')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-candidate\" (mouseover)=\"changeColor('candidate')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-opportunity\" (mouseover)=\"changeColor('opportunity')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-job\" (mouseover)=\"changeColor('job')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-placement\" (mouseover)=\"changeColor('placement')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-grapefruit\" (mouseover)=\"changeColor('grapefruit')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-bittersweet\" (mouseover)=\"changeColor('bittersweet')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-sunflower\" (mouseover)=\"changeColor('sunflower')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-grass\" (mouseover)=\"changeColor('grass')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-mint\" (mouseover)=\"changeColor('mint')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-aqua\" (mouseover)=\"changeColor('aqua')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-ocean\" (mouseover)=\"changeColor('ocean')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-carnation\" (mouseover)=\"changeColor('carnation')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-lavender\" (mouseover)=\"changeColor('lavender')\" (mouseout)=\"changeColor('background')\"></div>\n    </div>\n</header>\n<section class=\"design container\">\n    <h2>Primary Colors</h2>\n    <p>These are the base colors of the application.</p>\n\n    <article class=\"color-blocks primary-colors\">\n        <div *ngFor=\"let color of primaryColors\" class=\"block {{color.name}}-cb\">\n            <div class=\"color-square\" (click)=\"copyLink(color)\"></div>\n            <h3 class=\"color-text\" (click)=\"copyLink(color)\"><span>#</span>{{color.hex}}</h3>\n            <h6>{{color.name}}</h6>\n            <span class=\"vars\" *ngFor=\"let variable of color.variables\">${{variable}}</span>\n        </div>\n    </article>\n\n    <h2>Entity Colors</h2>\n    <p>This bold palette uses carefully balanced colors to distinguish entities from one another.</p>\n\n    <article class=\"color-blocks entity-colors\">\n        <div *ngFor=\"let color of entityColors\" class=\"block {{color.name}}-cb\">\n            <div class=\"color-square\" (click)=\"copyLink(color)\"></div>\n            <h3 class=\"color-text\" (click)=\"copyLink(color)\"><span>#</span>{{color.hex}}</h3>\n            <h6>{{color.name}}</h6>\n            <span class=\"vars\" *ngFor=\"let variable of color.variables\">${{variable}}</span>\n        </div>\n    </article>\n\n    <h2>Analytics Colors</h2>\n    <p>This palette features vibrant, bold colors for use in data visualization.</p>\n\n    <article class=\"color-blocks analytics-colors\">\n        <div *ngFor=\"let color of analyticsColors\" class=\"block {{color.name}}-cb\">\n            <div class=\"color-square\" (click)=\"copyLink(color)\"></div>\n            <h3 class=\"color-text\" (click)=\"copyLink(color)\"><span>#</span>{{color.hex}}</h3>\n            <h6>{{color.name}}</h6>\n            <span class=\"vars\" *ngFor=\"let variable of color.variables\">${{variable}}</span>\n        </div>\n    </article>\n</section>\n"

/***/ },

/***/ 528:
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
	
	var _Color = __webpack_require__(1149);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvY29sb3IvQ29sb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7SUFPYSxLLFdBQUEsSyxXQUxaLHFCQUFVO0FBQ1AsY0FBVSxPQURIO0FBRVAsZ0JBQVkseUJBRkw7QUFHUDtBQUhPLENBQVYsQztBQU1HLG1CQUFZLE9BQVosRUFBa0M7QUFBQTs7QUFDOUIsYUFBSyxhQUFMLEdBQXFCLENBQ2pCO0FBQ0ksa0JBQU0sWUFEVjtBQUVJLHVCQUFXLENBQUMsWUFBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQURpQixFQU1qQjtBQUNJLGtCQUFNLFFBRFY7QUFFSSx1QkFBVyxDQUFDLFVBQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FOaUIsRUFXakI7QUFDSSxrQkFBTSxNQURWO0FBRUksdUJBQVcsQ0FBQyxNQUFELEVBQVMsaUJBQVQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FYaUIsRUFnQmpCO0FBQ0ksa0JBQU0sWUFEVjtBQUVJLHVCQUFXLENBQUMsV0FBRCxFQUFjLFlBQWQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FoQmlCLENBQXJCOztBQXVCQSxhQUFLLFlBQUwsR0FBb0IsQ0FDaEI7QUFDSSxrQkFBTSxNQURWO0FBRUksdUJBQVcsQ0FBQyxNQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBRGdCLEVBTWhCO0FBQ0ksa0JBQU0sU0FEVjtBQUVJLHVCQUFXLENBQUMsU0FBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQU5nQixFQVdoQjtBQUNJLGtCQUFNLFNBRFY7QUFFSSx1QkFBVyxDQUFDLFNBQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FYZ0IsRUFnQmhCO0FBQ0ksa0JBQU0sV0FEVjtBQUVJLHVCQUFXLENBQUMsV0FBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQWhCZ0IsRUFxQmhCO0FBQ0ksa0JBQU0sYUFEVjtBQUVJLHVCQUFXLENBQUMsYUFBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQXJCZ0IsRUEwQmhCO0FBQ0ksa0JBQU0sS0FEVjtBQUVJLHVCQUFXLENBQUMsS0FBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQTFCZ0IsRUErQmhCO0FBQ0ksa0JBQU0sWUFEVjtBQUVJLHVCQUFXLENBQUMsWUFBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQS9CZ0IsRUFvQ2hCO0FBQ0ksa0JBQU0sV0FEVjtBQUVJLHVCQUFXLENBQUMsV0FBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQXBDZ0IsQ0FBcEI7O0FBMkNBLGFBQUssZUFBTCxHQUF1QixDQUNuQjtBQUNJLGtCQUFNLFlBRFY7QUFFSSx1QkFBVyxDQUFDLFlBQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FEbUIsRUFNbkI7QUFDSSxrQkFBTSxhQURWO0FBRUksdUJBQVcsQ0FBQyxhQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBTm1CLEVBV25CO0FBQ0ksa0JBQU0sV0FEVjtBQUVJLHVCQUFXLENBQUMsV0FBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQVhtQixFQWdCbkI7QUFDSSxrQkFBTSxPQURWO0FBRUksdUJBQVcsQ0FBQyxPQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBaEJtQixFQXFCbkI7QUFDSSxrQkFBTSxNQURWO0FBRUksdUJBQVcsQ0FBQyxNQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBckJtQixFQTBCbkI7QUFDSSxrQkFBTSxNQURWO0FBRUksdUJBQVcsQ0FBQyxNQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBMUJtQixFQStCbkI7QUFDSSxrQkFBTSxPQURWO0FBRUksdUJBQVcsQ0FBQyxPQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBL0JtQixFQW9DbkI7QUFDSSxrQkFBTSxXQURWO0FBRUksdUJBQVcsQ0FBQyxXQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBcENtQixFQXlDbkI7QUFDSSxrQkFBTSxVQURWO0FBRUksdUJBQVcsQ0FBQyxVQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBekNtQixDQUF2Qjs7QUFnREEsYUFBSyxPQUFMLEdBQWU7QUFDWCxxQkFBUyxTQURFO0FBRVgsdUJBQVcsaUJBRkE7QUFHWCxxQkFBUyxTQUhFO0FBSVgsb0JBQVEsV0FKRztBQUtYLHdCQUFZO0FBTEQsU0FBZjs7QUFRQSxhQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0g7Ozs7bUNBRVU7QUFDUCxpQkFBSyxLQUFMLEdBQWEsWUFBYjtBQUNIOzs7b0NBRVcsSyxFQUFPO0FBQ2YsaUJBQUssS0FBTCxHQUFhLEtBQWI7QUFDSDs7O2lDQUVRLEssRUFBTztBQUNaO0FBQ0EsZ0JBQUksV0FBVyxTQUFTLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZjtBQUNBLHFCQUFTLFdBQVQsU0FBMkIsTUFBTSxHQUFqQztBQUNBLGdCQUFJLE9BQU8sU0FBUyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUFYO0FBQ0EsaUJBQUssV0FBTCxDQUFpQixRQUFqQjtBQUNBLHFCQUFTLE1BQVQ7QUFDQTtBQUNBLHFCQUFTLFdBQVQsQ0FBcUIsTUFBckI7QUFDQTtBQUNBLGlCQUFLLFdBQUwsQ0FBaUIsUUFBakI7O0FBRUE7QUFDQSxpQkFBSyxPQUFMLEdBQWU7QUFDWCw2QkFBVyxNQUFNLEdBRE47QUFFWCx5QkFBUywwQkFGRTtBQUdYLHVCQUFPLE1BQU0sSUFIRjtBQUlYLHNCQUFNLFdBSks7QUFLWCwwQkFBVTtBQUxDLGFBQWY7O0FBUUEsZ0JBQUksTUFBTSxJQUFOLEtBQWUsUUFBbkIsRUFBNkIsS0FBSyxPQUFMLENBQWEsS0FBYixHQUFxQixPQUFyQjs7QUFFN0I7QUFDQSxpQkFBSyxPQUFMLENBQWEsS0FBYiwwQkFBOEIsS0FBSyxPQUFuQztBQUNIOzs7OzswRUFoS1EsSyIsImZpbGUiOiJDb2xvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlLCBOb3ZvVG9hc3QgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vQ29sb3IuaHRtbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29sb3InLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvciB7XG4gICAgY29uc3RydWN0b3IodG9hc3RlcjpUb2FzdFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5wcmltYXJ5Q29sb3JzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICduYXZpZ2F0aW9uJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnbmF2aWdhdGlvbiddLFxuICAgICAgICAgICAgICAgIGhleDogJzJGMzgzRidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2FjdGlvbicsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ3Bvc2l0aXZlJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnNEE4OURDJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2RhcmsnLCAnYmFzZS1mb250LWNvbG9yJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnNDc0NzQ3J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnYmFja2dyb3VuZCcsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ29mZi13aGl0ZScsICdiYWNrZ3JvdW5kJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnRjRGNEY0J1xuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuZW50aXR5Q29sb3JzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdsZWFkJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnbGVhZCddLFxuICAgICAgICAgICAgICAgIGhleDogJ0FBNjY5OSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2NvbnRhY3QnLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydjb250YWN0J10sXG4gICAgICAgICAgICAgICAgaGV4OiAnRkZBQTQ0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnY29tcGFueScsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2NvbXBhbnknXSxcbiAgICAgICAgICAgICAgICBoZXg6ICczMzk5REQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjYW5kaWRhdGUnLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydjYW5kaWRhdGUnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICc0NEJCNzcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdvcHBvcnR1bml0eScsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ29wcG9ydHVuaXR5J10sXG4gICAgICAgICAgICAgICAgaGV4OiAnNjYyMjU1J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnam9iJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnam9iJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnQkI1NTY2J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3VibWlzc2lvbicsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ3N1Ym1pc3Npb24nXSxcbiAgICAgICAgICAgICAgICBoZXg6ICc3Nzg4OTknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwbGFjZW1lbnQnLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydwbGFjZW1lbnQnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICcwQjM0NEYnXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5hbmFseXRpY3NDb2xvcnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2dyYXBlZnJ1aXQnLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydncmFwZWZydWl0J10sXG4gICAgICAgICAgICAgICAgaGV4OiAnREE0NDUzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnYml0dGVyc3dlZXQnLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydiaXR0ZXJzd2VldCddLFxuICAgICAgICAgICAgICAgIGhleDogJ0VCNjg0NSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3N1bmZsb3dlcicsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ3N1bmZsb3dlciddLFxuICAgICAgICAgICAgICAgIGhleDogJ0Y2QjA0MidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2dyYXNzJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnZ3Jhc3MnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICc4Q0MxNTInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdtaW50JyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnbWludCddLFxuICAgICAgICAgICAgICAgIGhleDogJzM3QkM5QidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2FxdWEnLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydhcXVhJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnM0JBRkRBJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnb2NlYW4nLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydvY2VhbiddLFxuICAgICAgICAgICAgICAgIGhleDogJzRBODlEQydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2Nhcm5hdGlvbicsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2Nhcm5hdGlvbiddLFxuICAgICAgICAgICAgICAgIGhleDogJ0Q3NzBBRCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2xhdmVuZGVyJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnbGF2ZW5kZXInXSxcbiAgICAgICAgICAgICAgICBoZXg6ICc5NjdBREMnXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgJ3RpdGxlJzogJ0NvcGllZCEnLFxuICAgICAgICAgICAgJ21lc3NhZ2UnOiAnU29tZSBNZXNzYWdlLi4uJyxcbiAgICAgICAgICAgICd0aGVtZSc6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICdpY29uJzogJ2NsaXBib2FyZCcsXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZ3Jvd2xUb3BSaWdodCdcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnRvYXN0ZXIgPSB0b2FzdGVyO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbG9yID0gJ2JhY2tncm91bmQnO1xuICAgIH1cblxuICAgIGNoYW5nZUNvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBjb3B5TGluayhjb2xvcikge1xuICAgICAgICAvLyBDcmVhdGUgZG9tIGVsZW1lbnQgdG8gY29weSBmcm9tXG4gICAgICAgIGxldCBjb3B5RnJvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGNvcHlGcm9tLnRleHRDb250ZW50ID0gYCMke2NvbG9yLmhleH1gO1xuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29weUZyb20pO1xuICAgICAgICBjb3B5RnJvbS5zZWxlY3QoKTtcbiAgICAgICAgLy8gQ29weSB0ZXh0XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICAgIC8vIERlbGV0ZSBlbGVtZW50XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoY29weUZyb20pO1xuXG4gICAgICAgIC8vIFNldCB0b2FzdCBvcHRpb25zXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBgIyR7Y29sb3IuaGV4fWAsXG4gICAgICAgICAgICBtZXNzYWdlOiAnQ29waWVkIHRvIHlvdXIgY2xpcGJvYXJkJyxcbiAgICAgICAgICAgIHRoZW1lOiBjb2xvci5uYW1lLFxuICAgICAgICAgICAgaWNvbjogJ2NsaXBib2FyZCcsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2dyb3dsVG9wUmlnaHQnXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNvbG9yLm5hbWUgPT09ICdhY3Rpb24nKSB0aGlzLm9wdGlvbnMudGhlbWUgPSAnb2NlYW4nO1xuXG4gICAgICAgIC8vIEZpcmUgdG9hc3RcbiAgICAgICAgdGhpcy50b2FzdGVyLmFsZXJ0KE5vdm9Ub2FzdCwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG59XG4iXX0=

/***/ }

});
//# sourceMappingURL=29.edc4b868ef16e39baa95.bundle.map