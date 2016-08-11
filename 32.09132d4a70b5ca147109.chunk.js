webpackJsonp([32],{

/***/ 1163:
/***/ function(module, exports) {

	module.exports = "<header class=\"design container\" [ngClass]=\"color\">\n    <div>\n        <h1 class=\"title\">Color</h1>\n        <h2 class=\"sub-title\">Efficient and expressive</h2>\n        <p class=\"description\">Our colors are bold, fresh, and approachable. They are expressive and delightful, but selected with usability and accessibility in mind.</p>\n    </div>\n    <div class=\"background-boxes\">\n        <div class=\"bb-lead\" (mouseover)=\"changeColor('lead')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-contact\" (mouseover)=\"changeColor('contact')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-company\" (mouseover)=\"changeColor('company')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-candidate\" (mouseover)=\"changeColor('candidate')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-opportunity\" (mouseover)=\"changeColor('opportunity')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-job\" (mouseover)=\"changeColor('job')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-placement\" (mouseover)=\"changeColor('placement')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-grapefruit\" (mouseover)=\"changeColor('grapefruit')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-bittersweet\" (mouseover)=\"changeColor('bittersweet')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-sunflower\" (mouseover)=\"changeColor('sunflower')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-grass\" (mouseover)=\"changeColor('grass')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-mint\" (mouseover)=\"changeColor('mint')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-aqua\" (mouseover)=\"changeColor('aqua')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-ocean\" (mouseover)=\"changeColor('ocean')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-carnation\" (mouseover)=\"changeColor('carnation')\" (mouseout)=\"changeColor('background')\"></div>\n        <div class=\"bb-lavender\" (mouseover)=\"changeColor('lavender')\" (mouseout)=\"changeColor('background')\"></div>\n    </div>\n</header>\n<section class=\"design container\">\n    <h2>Primary Colors</h2>\n    <p>These are the base colors of the application.</p>\n\n    <article class=\"color-blocks primary-colors\">\n        <div *ngFor=\"let color of primaryColors\" class=\"block {{color.name}}-cb\">\n            <div class=\"color-square\" (click)=\"copyLink(color)\"></div>\n            <h3 class=\"color-text\" (click)=\"copyLink(color)\"><span>#</span>{{color.hex}}</h3>\n            <h6>{{color.name}}</h6>\n            <span class=\"vars\" *ngFor=\"let variable of color.variables\">${{variable}}</span>\n        </div>\n    </article>\n\n    <h2>Entity Colors</h2>\n    <p>This bold palette uses carefully balanced colors to distinguish entities from one another.</p>\n\n    <article class=\"color-blocks entity-colors\">\n        <div *ngFor=\"let color of entityColors\" class=\"block {{color.name}}-cb\">\n            <div class=\"color-square\" (click)=\"copyLink(color)\"></div>\n            <h3 class=\"color-text\" (click)=\"copyLink(color)\"><span>#</span>{{color.hex}}</h3>\n            <h6>{{color.name}}</h6>\n            <span class=\"vars\" *ngFor=\"let variable of color.variables\">${{variable}}</span>\n        </div>\n    </article>\n\n    <h2>Analytics Colors</h2>\n    <p>This palette features vibrant, bold colors for use in data visualization.</p>\n\n    <article class=\"color-blocks analytics-colors\">\n        <div *ngFor=\"let color of analyticsColors\" class=\"block {{color.name}}-cb\">\n            <div class=\"color-square\" (click)=\"copyLink(color)\"></div>\n            <h3 class=\"color-text\" (click)=\"copyLink(color)\"><span>#</span>{{color.hex}}</h3>\n            <h6>{{color.name}}</h6>\n            <span class=\"vars\" *ngFor=\"let variable of color.variables\">${{variable}}</span>\n        </div>\n    </article>\n</section>\n"

/***/ },

/***/ 530:
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
	
	var _novoElements = __webpack_require__(14);
	
	var _Color = __webpack_require__(1163);
	
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
	        }, {
	            name: 'neutral',
	            variables: ['neutral'],
	            hex: '747884'
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvY29sb3IvQ29sb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7SUFPYSxLLFdBQUEsSyxXQUxaLHFCQUFVO0FBQ1AsY0FBVSxPQURIO0FBRVAsZ0JBQVkseUJBRkw7QUFHUDtBQUhPLENBQVYsQztBQU1HLG1CQUFZLE9BQVosRUFBa0M7QUFBQTs7QUFDOUIsYUFBSyxhQUFMLEdBQXFCLENBQ2pCO0FBQ0ksa0JBQU0sWUFEVjtBQUVJLHVCQUFXLENBQUMsWUFBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQURpQixFQU1qQjtBQUNJLGtCQUFNLFFBRFY7QUFFSSx1QkFBVyxDQUFDLFVBQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FOaUIsRUFXakI7QUFDSSxrQkFBTSxNQURWO0FBRUksdUJBQVcsQ0FBQyxNQUFELEVBQVMsaUJBQVQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FYaUIsRUFnQmpCO0FBQ0ksa0JBQU0sWUFEVjtBQUVJLHVCQUFXLENBQUMsV0FBRCxFQUFjLFlBQWQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FoQmlCLEVBcUJqQjtBQUNJLGtCQUFNLFNBRFY7QUFFSSx1QkFBVyxDQUFDLFNBQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FyQmlCLENBQXJCOztBQTRCQSxhQUFLLFlBQUwsR0FBb0IsQ0FDaEI7QUFDSSxrQkFBTSxNQURWO0FBRUksdUJBQVcsQ0FBQyxNQUFELENBRmY7QUFHSSxpQkFBSztBQUhULFNBRGdCLEVBTWhCO0FBQ0ksa0JBQU0sU0FEVjtBQUVJLHVCQUFXLENBQUMsU0FBRCxDQUZmO0FBR0ksaUJBQUs7QUFIVCxTQU5nQixFQVdoQjtBQUNJLGtCQUFNLFNBRFY7QUFFSSx1QkFBVyxDQUFDLFNBQUQsQ0FGZjtBQUdJLGlCQUFLO0FBSFQsU0FYZ0IsRUFnQmhCO0FBQ0ksa0JBQU0sV0FEVjtBQUVJLHVCQUFXLENBQUMsV0FBRCxD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cy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlLCBOb3ZvVG9hc3QgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vQ29sb3IuaHRtbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29sb3InLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvciB7XG4gICAgY29uc3RydWN0b3IodG9hc3RlcjpUb2FzdFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5wcmltYXJ5Q29sb3JzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICduYXZpZ2F0aW9uJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnbmF2aWdhdGlvbiddLFxuICAgICAgICAgICAgICAgIGhleDogJzJGMzgzRidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2FjdGlvbicsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ3Bvc2l0aXZlJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnNEE4OURDJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2RhcmsnLCAnYmFzZS1mb250LWNvbG9yJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnNDc0NzQ3J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnYmFja2dyb3VuZCcsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ29mZi13aGl0ZScsICdiYWNrZ3JvdW5kJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnRjRGNEY0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbmV1dHJhbCcsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ25ldXRyYWwnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICc3NDc4ODQnXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5lbnRpdHlDb2xvcnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2xlYWQnLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydsZWFkJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnQUE2Njk5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnY29udGFjdCcsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2NvbnRhY3QnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICdGRkFBNDQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjb21wYW55JyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnY29tcGFueSddLFxuICAgICAgICAgICAgICAgIGhleDogJzMzOTlERCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2NhbmRpZGF0ZScsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2NhbmRpZGF0ZSddLFxuICAgICAgICAgICAgICAgIGhleDogJzQ0QkI3NydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ29wcG9ydHVuaXR5JyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnb3Bwb3J0dW5pdHknXSxcbiAgICAgICAgICAgICAgICBoZXg6ICc2NjIyNTUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdqb2InLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydqb2InXSxcbiAgICAgICAgICAgICAgICBoZXg6ICdCQjU1NjYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdzdWJtaXNzaW9uJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnc3VibWlzc2lvbiddLFxuICAgICAgICAgICAgICAgIGhleDogJzc3ODg5OSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3BsYWNlbWVudCcsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ3BsYWNlbWVudCddLFxuICAgICAgICAgICAgICAgIGhleDogJzBCMzQ0RidcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLmFuYWx5dGljc0NvbG9ycyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ3JhcGVmcnVpdCcsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2dyYXBlZnJ1aXQnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICdEQTQ0NTMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdiaXR0ZXJzd2VldCcsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2JpdHRlcnN3ZWV0J10sXG4gICAgICAgICAgICAgICAgaGV4OiAnRUI2ODQ1J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3VuZmxvd2VyJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnc3VuZmxvd2VyJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnRjZCMDQyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ3Jhc3MnLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydncmFzcyddLFxuICAgICAgICAgICAgICAgIGhleDogJzhDQzE1MidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ21pbnQnLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydtaW50J10sXG4gICAgICAgICAgICAgICAgaGV4OiAnMzdCQzlCJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnYXF1YScsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ2FxdWEnXSxcbiAgICAgICAgICAgICAgICBoZXg6ICczQkFGREEnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdvY2VhbicsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBbJ29jZWFuJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnNEE4OURDJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2FybmF0aW9uJyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IFsnY2FybmF0aW9uJ10sXG4gICAgICAgICAgICAgICAgaGV4OiAnRDc3MEFEJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbGF2ZW5kZXInLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogWydsYXZlbmRlciddLFxuICAgICAgICAgICAgICAgIGhleDogJzk2N0FEQydcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAndGl0bGUnOiAnQ29waWVkIScsXG4gICAgICAgICAgICAnbWVzc2FnZSc6ICdTb21lIE1lc3NhZ2UuLi4nLFxuICAgICAgICAgICAgJ3RoZW1lJzogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgJ2ljb24nOiAnY2xpcGJvYXJkJyxcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdncm93bFRvcFJpZ2h0J1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudG9hc3RlciA9IHRvYXN0ZXI7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSAnYmFja2dyb3VuZCc7XG4gICAgfVxuXG4gICAgY2hhbmdlQ29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cblxuICAgIGNvcHlMaW5rKGNvbG9yKSB7XG4gICAgICAgIC8vIENyZWF0ZSBkb20gZWxlbWVudCB0byBjb3B5IGZyb21cbiAgICAgICAgbGV0IGNvcHlGcm9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgY29weUZyb20udGV4dENvbnRlbnQgPSBgIyR7Y29sb3IuaGV4fWA7XG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChjb3B5RnJvbSk7XG4gICAgICAgIGNvcHlGcm9tLnNlbGVjdCgpO1xuICAgICAgICAvLyBDb3B5IHRleHRcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgLy8gRGVsZXRlIGVsZW1lbnRcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChjb3B5RnJvbSk7XG5cbiAgICAgICAgLy8gU2V0IHRvYXN0IG9wdGlvbnNcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IGAjJHtjb2xvci5oZXh9YCxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdDb3BpZWQgdG8geW91ciBjbGlwYm9hcmQnLFxuICAgICAgICAgICAgdGhlbWU6IGNvbG9yLm5hbWUsXG4gICAgICAgICAgICBpY29uOiAnY2xpcGJvYXJkJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZ3Jvd2xUb3BSaWdodCdcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY29sb3IubmFtZSA9PT0gJ2FjdGlvbicpIHRoaXMub3B0aW9ucy50aGVtZSA9ICdvY2Vhbic7XG5cbiAgICAgICAgLy8gRmlyZSB0b2FzdFxuICAgICAgICB0aGlzLnRvYXN0ZXIuYWxlcnQoTm92b1RvYXN0LCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }

});
//# sourceMappingURL=32.09132d4a70b5ca147109.bundle.map