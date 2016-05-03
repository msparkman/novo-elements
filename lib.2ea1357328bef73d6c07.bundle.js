webpackJsonp([2],{

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_DRAWER_ELEMENTS = exports.DrawerToggle = exports.DrawerContent = exports.Drawer = exports.POSITION_BOTTOM = exports.POSITION_TOP = exports.POSITION_RIGHT = exports.POSITION_LEFT = exports.OUTSIDE_CLICK = exports.DISABLED = exports.ALWAYS = undefined;
	
	var _dec, _class, _dec2, _class2, _dec3, _class3;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ALWAYS = exports.ALWAYS = 'always';
	var DISABLED = exports.DISABLED = 'disabled';
	var OUTSIDE_CLICK = exports.OUTSIDE_CLICK = 'outsideClick';
	
	var POSITION_LEFT = exports.POSITION_LEFT = 'left';
	var POSITION_RIGHT = exports.POSITION_RIGHT = 'right';
	var POSITION_TOP = exports.POSITION_TOP = 'top';
	var POSITION_BOTTOM = exports.POSITION_BOTTOM = 'bottom';
	
	var DrawerService = function () {
	    function DrawerService() {
	        _classCallCheck(this, DrawerService);
	
	        this.closeDrawerBind = this.closeDrawer.bind(this);
	    }
	
	    _createClass(DrawerService, [{
	        key: 'open',
	        value: function open(scope) {
	            if (!this.openScope) {
	                window.document.addEventListener('click', this.closeDrawerBind);
	            }
	
	            if (this.openScope && this.openScope !== this.scope) {
	                this.openScope.isOpen = false;
	            }
	
	            this.openScope = scope;
	        }
	    }, {
	        key: 'close',
	        value: function close(scope) {
	            if (this.openScope !== scope) {
	                return;
	            }
	
	            this.openScope = null;
	            window.document.removeEventListener('click', this.closeDrawerBind);
	        }
	    }, {
	        key: 'closeDrawer',
	        value: function closeDrawer(event) {
	            if (!this.openScope) {
	                return;
	            }
	
	            if (event && this.openScope.autoClose === DISABLED) {
	                return;
	            }
	
	            if (event && this.openScope.toggleEl && this.openScope.toggleEl.nativeElement === event.target) {
	                return;
	            }
	
	            if (event && this.openScope.autoClose === OUTSIDE_CLICK && this.openScope.drawerEl && this.openScope.drawerEl.nativeElement === event.target) {
	                return;
	            }
	
	            this.openScope.isOpen = false;
	        }
	    }]);
	
	    return DrawerService;
	}();
	
	var drawerService = new DrawerService();
	
	var Drawer = exports.Drawer = (_dec = (0, _core.Directive)({
	    selector: '[drawer]',
	    properties: ['isOpen', 'autoClose', 'position'],
	    outputs: ['onDrawerToggle'],
	    host: {
	        '[class.drawer]': 'true',
	        '[class.open]': 'isOpen'
	    }
	}), _dec(_class = function () {
	    function Drawer(el) {
	        _classCallCheck(this, Drawer);
	
	        this.el = el;
	        this.onDrawerToggle = new _core.EventEmitter();
	    }
	
	    _createClass(Drawer, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.autoClose = this.autoClose || OUTSIDE_CLICK;
	            this.position = this.position || POSITION_LEFT;
	        }
	    }, {
	        key: 'toggle',
	        value: function toggle(open) {
	            return this.isOpen = open ? !!open : !this.isOpen;
	        }
	    }, {
	        key: 'focusToggleElement',
	        value: function focusToggleElement() {
	            if (this.toggleEl) {
	                this.toggleEl.nativeElement.focus();
	            }
	        }
	    }, {
	        key: 'drawer',
	        set: function set(drawer) {
	            // init drop down menu
	            this.drawerEl = drawer.el;
	
	            // add class name for the position
	            this.drawerEl.nativeElement.classList.add(this.position);
	        }
	    }, {
	        key: 'drawerToggle',
	        set: function set(drawerToggle) {
	            // init toggle element
	            this.toggleEl = drawerToggle.el;
	        }
	    }, {
	        key: 'isOpen',
	        get: function get() {
	            return this._isOpen;
	        },
	        set: function set(value) {
	            this._isOpen = !!value;
	
	            if (this.isOpen) {
	                this.focusToggleElement();
	                drawerService.open(this);
	            } else {
	                drawerService.close(this);
	            }
	            this.onDrawerToggle.next(this.isOpen);
	        }
	    }]);
	
	    return Drawer;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_core.ElementRef], Drawer);
	var DrawerContent = exports.DrawerContent = (_dec2 = (0, _core.Directive)({
	    selector: '[drawerContent], .drawer-content'
	}), _dec2(_class2 = function () {
	    function DrawerContent(drawer, el) {
	        _classCallCheck(this, DrawerContent);
	
	        this.drawer = drawer;
	        this.el = el;
	    }
	
	    _createClass(DrawerContent, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.drawer.drawer = this;
	        }
	    }]);
	
	    return DrawerContent;
	}()) || _class2);
	Reflect.defineMetadata('design:paramtypes', [Drawer, _core.ElementRef], DrawerContent);
	var DrawerToggle = exports.DrawerToggle = (_dec3 = (0, _core.Directive)({
	    selector: '[drawerToggle]',
	    properties: ['disabled'],
	    host: {
	        '(click)': 'toggleDrawer($event)',
	        '[class.drawer-toggle]': 'true',
	        '[class.disabled]': 'disabled'
	    }
	}), _dec3(_class3 = function () {
	    function DrawerToggle(drawer, el) {
	        _classCallCheck(this, DrawerToggle);
	
	        this.el = el;
	        this.disabled = false;
	        this.drawer = drawer;
	    }
	
	    _createClass(DrawerToggle, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.drawer.drawerToggle = this;
	        }
	    }, {
	        key: 'toggleDrawer',
	        value: function toggleDrawer(event) {
	            event.preventDefault();
	            event.stopPropagation();
	
	            if (!this.disabled) {
	                this.drawer.toggle();
	            }
	        }
	    }, {
	        key: 'isOpen',
	        get: function get() {
	            return this.drawer.isOpen;
	        }
	    }]);
	
	    return DrawerToggle;
	}()) || _class3);
	Reflect.defineMetadata('design:paramtypes', [Drawer, _core.ElementRef], DrawerToggle);
	var NOVO_DRAWER_ELEMENTS = exports.NOVO_DRAWER_ELEMENTS = [Drawer, DrawerContent, DrawerToggle];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9kcmF3ZXIvRHJhd2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFTyxJQUFNLDBCQUFTLFFBQWY7QUFDQSxJQUFNLDhCQUFXLFVBQWpCO0FBQ0EsSUFBTSx3Q0FBZ0IsY0FBdEI7O0FBRUEsSUFBTSx3Q0FBZ0IsTUFBdEI7QUFDQSxJQUFNLDBDQUFpQixPQUF2QjtBQUNBLElBQU0sc0NBQWUsS0FBckI7QUFDQSxJQUFNLDRDQUFrQixRQUF4Qjs7SUFFRCxhO0FBQ0YsNkJBQWM7QUFBQTs7QUFDVixhQUFLLGVBQUwsR0FBdUIsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLElBQXRCLENBQXZCO0FBQ0g7Ozs7NkJBRUksSyxFQUFPO0FBQ1IsZ0JBQUksQ0FBQyxLQUFLLFNBQVYsRUFBcUI7QUFDakIsdUJBQU8sUUFBUCxDQUFnQixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsS0FBSyxlQUEvQztBQUNIOztBQUVELGdCQUFJLEtBQUssU0FBTCxJQUFrQixLQUFLLFNBQUwsS0FBbUIsS0FBSyxLQUE5QyxFQUFxRDtBQUNqRCxxQkFBSyxTQUFMLENBQWUsTUFBZixHQUF3QixLQUF4QjtBQUNIOztBQUVELGlCQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDSDs7OzhCQUVLLEssRUFBTztBQUNULGdCQUFJLEtBQUssU0FBTCxLQUFtQixLQUF2QixFQUE4QjtBQUMxQjtBQUNIOztBQUVELGlCQUFLLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxtQkFBTyxRQUFQLENBQWdCLG1CQUFoQixDQUFvQyxPQUFwQyxFQUE2QyxLQUFLLGVBQWxEO0FBQ0g7OztvQ0FFVyxLLEVBQU87QUFDZixnQkFBSSxDQUFDLEtBQUssU0FBVixFQUFxQjtBQUNqQjtBQUNIOztBQUVELGdCQUFJLFNBQVMsS0FBSyxTQUFMLENBQWUsU0FBZixLQUE2QixRQUExQyxFQUFvRDtBQUNoRDtBQUNIOztBQUVELGdCQUFJLFNBQVMsS0FB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UCxpQkFBSyxNQUFMLENBQVksWUFBWixHQUEyQixJQUEzQjtBQUNIOzs7cUNBTVksSyxFQUFPO0FBQ2hCLGtCQUFNLGNBQU47QUFDQSxrQkFBTSxlQUFOOztBQUVBLGdCQUFJLENBQUMsS0FBSyxRQUFWLEVBQW9CO0FBQ2hCLHFCQUFLLE1BQUwsQ0FBWSxNQUFaO0FBQ0g7QUFDSjs7OzRCQVhZO0FBQ1QsbUJBQU8sS0FBSyxNQUFMLENBQVksTUFBbkI7QUFDSDs7Ozs7NkNBWmtCLE0scUJBRFYsWTtBQXlCTixJQUFNLHNEQUF1QixDQUFDLE1BQUQsRUFBUyxhQUFULEVBQXdCLFlBQXhCLENBQTdCIiwiZmlsZSI6IkRyYXdlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuZXhwb3J0IGNvbnN0IEFMV0FZUyA9ICdhbHdheXMnO1xuZXhwb3J0IGNvbnN0IERJU0FCTEVEID0gJ2Rpc2FibGVkJztcbmV4cG9ydCBjb25zdCBPVVRTSURFX0NMSUNLID0gJ291dHNpZGVDbGljayc7XG5cbmV4cG9ydCBjb25zdCBQT1NJVElPTl9MRUZUID0gJ2xlZnQnO1xuZXhwb3J0IGNvbnN0IFBPU0lUSU9OX1JJR0hUID0gJ3JpZ2h0JztcbmV4cG9ydCBjb25zdCBQT1NJVElPTl9UT1AgPSAndG9wJztcbmV4cG9ydCBjb25zdCBQT1NJVElPTl9CT1RUT00gPSAnYm90dG9tJztcblxuY2xhc3MgRHJhd2VyU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VEcmF3ZXJCaW5kID0gdGhpcy5jbG9zZURyYXdlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9wZW4oc2NvcGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wZW5TY29wZSkge1xuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyYXdlckJpbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3BlblNjb3BlICYmIHRoaXMub3BlblNjb3BlICE9PSB0aGlzLnNjb3BlKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5TY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3BlblNjb3BlID0gc2NvcGU7XG4gICAgfVxuXG4gICAgY2xvc2Uoc2NvcGUpIHtcbiAgICAgICAgaWYgKHRoaXMub3BlblNjb3BlICE9PSBzY29wZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcGVuU2NvcGUgPSBudWxsO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlRHJhd2VyQmluZCk7XG4gICAgfVxuXG4gICAgY2xvc2VEcmF3ZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wZW5TY29wZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50ICYmIHRoaXMub3BlblNjb3BlLmF1dG9DbG9zZSA9PT0gRElTQUJMRUQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudCAmJiB0aGlzLm9wZW5TY29wZS50b2dnbGVFbCAmJiB0aGlzLm9wZW5TY29wZS50b2dnbGVFbC5uYXRpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudCAmJiB0aGlzLm9wZW5TY29wZS5hdXRvQ2xvc2UgPT09IE9VVFNJREVfQ0xJQ0sgJiYgdGhpcy5vcGVuU2NvcGUuZHJhd2VyRWwgJiYgdGhpcy5vcGVuU2NvcGUuZHJhd2VyRWwubmF0aXZlRWxlbWVudCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wZW5TY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBkcmF3ZXJTZXJ2aWNlID0gbmV3IERyYXdlclNlcnZpY2UoKTtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbZHJhd2VyXScsXG4gICAgcHJvcGVydGllczogWydpc09wZW4nLCAnYXV0b0Nsb3NlJywgJ3Bvc2l0aW9uJ10sXG4gICAgb3V0cHV0czogWydvbkRyYXdlclRvZ2dsZSddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5kcmF3ZXJdJzogJ3RydWUnLFxuICAgICAgICAnW2NsYXNzLm9wZW5dJzogJ2lzT3BlbidcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIERyYXdlciBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBjb25zdHJ1Y3RvcihlbDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgdGhpcy5vbkRyYXdlclRvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hdXRvQ2xvc2UgPSB0aGlzLmF1dG9DbG9zZSB8fCBPVVRTSURFX0NMSUNLO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiB8fCBQT1NJVElPTl9MRUZUO1xuICAgIH1cblxuICAgIHNldCBkcmF3ZXIoZHJhd2VyKSB7XG4gICAgICAgIC8vIGluaXQgZHJvcCBkb3duIG1lbnVcbiAgICAgICAgdGhpcy5kcmF3ZXJFbCA9IGRyYXdlci5lbDtcblxuICAgICAgICAvLyBhZGQgY2xhc3MgbmFtZSBmb3IgdGhlIHBvc2l0aW9uXG4gICAgICAgIHRoaXMuZHJhd2VyRWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIHNldCBkcmF3ZXJUb2dnbGUoZHJhd2VyVG9nZ2xlKSB7XG4gICAgICAgIC8vIGluaXQgdG9nZ2xlIGVsZW1lbnRcbiAgICAgICAgdGhpcy50b2dnbGVFbCA9IGRyYXdlclRvZ2dsZS5lbDtcbiAgICB9XG5cbiAgICB0b2dnbGUob3Blbikge1xuICAgICAgICByZXR1cm4gdGhpcy5pc09wZW4gPSBvcGVuID8gISFvcGVuIDogIXRoaXMuaXNPcGVuO1xuICAgIH1cblxuICAgIGdldCBpc09wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gICAgfVxuXG4gICAgc2V0IGlzT3Blbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9pc09wZW4gPSAhIXZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5mb2N1c1RvZ2dsZUVsZW1lbnQoKTtcbiAgICAgICAgICAgIGRyYXdlclNlcnZpY2Uub3Blbih0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyYXdlclNlcnZpY2UuY2xvc2UodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkRyYXdlclRvZ2dsZS5uZXh0KHRoaXMuaXNPcGVuKTtcbiAgICB9XG5cbiAgICBmb2N1c1RvZ2dsZUVsZW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZUVsKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbZHJhd2VyQ29udGVudF0sIC5kcmF3ZXItY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgRHJhd2VyQ29udGVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IoZHJhd2VyOkRyYXdlciwgZWw6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmRyYXdlciA9IGRyYXdlcjtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmRyYXdlci5kcmF3ZXIgPSB0aGlzO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbZHJhd2VyVG9nZ2xlXScsXG4gICAgcHJvcGVydGllczogWydkaXNhYmxlZCddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJyhjbGljayknOiAndG9nZ2xlRHJhd2VyKCRldmVudCknLFxuICAgICAgICAnW2NsYXNzLmRyYXdlci10b2dnbGVdJzogJ3RydWUnLFxuICAgICAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIERyYXdlclRvZ2dsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IoZHJhd2VyOkRyYXdlciwgZWw6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmVsID0gZWw7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSBkcmF3ZXI7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLmRyYXdlclRvZ2dsZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IGlzT3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhd2VyLmlzT3BlbjtcbiAgICB9XG5cbiAgICB0b2dnbGVEcmF3ZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdlci50b2dnbGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5PVk9fRFJBV0VSX0VMRU1FTlRTID0gW0RyYXdlciwgRHJhd2VyQ29udGVudCwgRHJhd2VyVG9nZ2xlXTtcbiJdfQ==

/***/ },

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);


/***/ },

/***/ 68:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// Helper to keep track of key codes
	var KeyCodes = exports.KeyCodes = {
	    BACKSPACE: 8,
	    TAB: 9,
	    NUM_CENTER: 12,
	    ENTER: 13,
	    RETURN: 13,
	    SHIFT: 16,
	    CTRL: 17,
	    ALT: 18,
	    PAUSE: 19,
	    CAPS_LOCK: 20,
	    ESC: 27,
	    SPACE: 32,
	    PAGE_UP: 33,
	    PAGE_DOWN: 34,
	    END: 35,
	    HOME: 36,
	    LEFT: 37,
	    UP: 38,
	    RIGHT: 39,
	    DOWN: 40,
	    PRINT_SCREEN: 44,
	    INSERT: 45,
	    DELETE: 46,
	    ZERO: 48,
	    ONE: 49,
	    TWO: 50,
	    THREE: 51,
	    FOUR: 52,
	    FIVE: 53,
	    SIX: 54,
	    SEVEN: 55,
	    EIGHT: 56,
	    NINE: 57,
	    A: 65,
	    B: 66,
	    C: 67,
	    D: 68,
	    E: 69,
	    F: 70,
	    G: 71,
	    H: 72,
	    I: 73,
	    J: 74,
	    K: 75,
	    L: 76,
	    M: 77,
	    N: 78,
	    O: 79,
	    P: 80,
	    Q: 81,
	    R: 82,
	    S: 83,
	    T: 84,
	    U: 85,
	    V: 86,
	    W: 87,
	    X: 88,
	    Y: 89,
	    Z: 90,
	    CONTEXT_MENU: 93,
	    NUM_ZERO: 96,
	    NUM_ONE: 97,
	    NUM_TWO: 98,
	    NUM_THREE: 99,
	    NUM_FOUR: 100,
	    NUM_FIVE: 101,
	    NUM_SIX: 102,
	    NUM_SEVEN: 103,
	    NUM_EIGHT: 104,
	    NUM_NINE: 105,
	    NUM_MULTIPLY: 106,
	    NUM_PLUS: 107,
	    NUM_MINUS: 109,
	    NUM_PERIOD: 110,
	    NUM_DIVISION: 111,
	    F1: 112,
	    F2: 113,
	    F3: 114,
	    F4: 115,
	    F5: 116,
	    F6: 117,
	    F7: 118,
	    F8: 119,
	    F9: 120,
	    F10: 121,
	    F11: 122,
	    F12: 123,
	    DASH: 189,
	    PERIOD: 190,
	    FORWARD_SLASH: 191
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9rZXktY29kZXMvS2V5Q29kZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ08sSUFBTSw4QkFBVztBQUNwQixlQUFXLENBRFM7QUFFcEIsU0FBSyxDQUZlO0FBR3BCLGdCQUFZLEVBSFE7QUFJcEIsV0FBTyxFQUphO0FBS3BCLFlBQVEsRUFMWTtBQU1wQixXQUFPLEVBTmE7QUFPcEIsVUFBTSxFQVBjO0FBUXBCLFNBQUssRUFSZTtBQVNwQixXQUFPLEVBVGE7QUFVcEIsZUFBVyxFQVZTO0FBV3BCLFNBQUssRUFYZTtBQVlwQixXQUFPLEVBWmE7QUFhcEIsYUFBUyxFQWJXO0FBY3BCLGVBQVcsRUFkUztBQWVwQixTQUFLLEVBZmU7QUFnQnBCLFVBQU0sRUFoQmM7QUFpQnBCLFVBQU0sRUFqQmM7QUFrQnBCLFFBQUksRUFsQmdCO0FBbUJwQixXQUFPLEVBbkJhO0FBb0JwQixVQUFNLEVBcEJjO0FBcUJwQixrQkFBYyxFQXJCTTtBQXNCcEIsWUFBUSxFQXRCWTtBQXVCcEIsWUFBUSxFQXZCWTtBQXdCcEIsVUFBTSxFQXhCYztBQXlCcEIsU0FBSyxFQXpCZTtBQTBCcEIsU0FBSyxFQTFCZTtBQTJCcEIsV0FBTyxFQTNCYTtBQTRCcEIsVUFBTSxFQTVCYztBQTZCcEIsVUFBTSxFQTdCYztBQThCcEIsU0FBSyxFQTlCZTtBQStCcEIsV0FBTyxFQS9CYTtBQWdDcEIsV0FBTyxFQWhDYTtBQWlDcEIsVUFBTSxFQWpDYztBQWtDcEIsT0FBRyxFQWxDaUI7QUFtQ3BCLE9BQUcsRUFuQ2lCO0FBb0NwQixPQUFHLEVBcENpQjtBQXFDcEIsT0FBRyxFQXJDaUI7QUFzQ3BCLE9BQUcsRUF0Q2lCO0FBdUNwQixPQUFHLEVBdkNpQjtBQXdDcEIsT0FBRyxFQXhDaUI7QUF5Q3BCLE9BQUcsRUF6Q2lCO0FBMENwQixPQUFHLEVBMUNpQjtBQTJDcEIsT0FBRyxFQTNDaUI7QUE0Q3BCLE9BQUcsRUE1Q2lCO0FBNkNwQixPQUFHLEVBN0NpQjtBQThDcEIsT0FBRyxFQTlDaUI7QUErQ3BCLE9BQUcsRUEvQ2lCO0FBZ0RwQixPQUFHLEVBaERpQjtBQWlEcEIsT0FBRyxFQWpEaUI7QUFrRHBCLE9BQUcsRUFsRGlCO0FBbURwQixPQUFHLEVBbkRpQjtBQW9EcEIsT0FBRyxFQXBEaUI7QUFxRHBCLE9BQUcsRUFyRGlCO0FBc0RwQixPQUFHLEVBdERpQjtBQXVEcEIsT0FBRyxFQXZEaUI7QUF3RHBCLE9BQUcsRUF4RGlCO0FBeURwQixPQUFHLEVBekRpQjtBQTBEcEIsT0FBRyxFQTFEaUI7QUEyRHBCLE9BQUcsRUEzRGlCO0FBNERwQixrQkFBYyxFQTVETTtBQTZEcEIsY0FBVSxFQTdEVTtBQThEcEIsYUFBUyxFQTlEVztBQStEcEIsYUFBUyxFQS9EVztBQWdFcEIsZUFBVyxFQWhFUztBQWlFcEIsY0FBVSxHQWpFVTtBQWtFcEIsY0FBVSxHQWxFVTtBQW1FcEIsYUFBUyxHQW5FVztBQW9FcEIsZUFBVyxHQXBFUztBQXFFcEIsZUFBVyxHQXJFUztBQXNFcEIsY0FBVSxHQXRFVTtBQXVFcEIsa0JBQWMsR0F2RU07QUF3RXBCLGNBQVUsR0F4RVU7QUF5RXBCLGVBQVcsR0F6RVM7QUEwRXBCLGdCQUFZLEdBMUVRO0FBMkVwQixrQkFBYyxHQTNFTTtBQTRFcEIsUUFBSSxHQTVFZ0I7QUE2RXBCLFFBQUksR0E3RWdCO0FBOEVwQixRQUFJLEdBOUVnQjtBQStFcEIsUUFBSSxHQS9FZ0I7QUFnRnBCLFFBQUksR0FoRmdCO0FBaUZwQixRQUFJLEdBakZnQjtBQWtGcEIsUUFBSSxHQWxGZ0I7QUFtRnBCLFFBQUksR0FuRmdCO0FBb0ZwQixRQUFJLEdBcEZnQjtBQXFGcEIsU0FBSyxHQXJGZTtBQXNGcEIsU0FBSyxHQXRGZTtBQXVGcEIsU0FBSyxHQXZGZTtBQXdGcEIsVUFBTSxHQXhGYztBQXlGcEIsWUFBUSxHQXpGWTtBQTBGcEIsbUJBQWU7QUExRkssQ0FBakIiLCJmaWxlIjoiS2V5Q29kZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVscGVyIHRvIGtlZXAgdHJhY2sgb2Yga2V5IGNvZGVzXG5leHBvcnQgY29uc3QgS2V5Q29kZXMgPSB7XG4gICAgQkFDS1NQQUNFOiA4LFxuICAgIFRBQjogOSxcbiAgICBOVU1fQ0VOVEVSOiAxMixcbiAgICBFTlRFUjogMTMsXG4gICAgUkVUVVJOOiAxMyxcbiAgICBTSElGVDogMTYsXG4gICAgQ1RSTDogMTcsXG4gICAgQUxUOiAxOCxcbiAgICBQQVVTRTogMTksXG4gICAgQ0FQU19MT0NLOiAyMCxcbiAgICBFU0M6IDI3LFxuICAgIFNQQUNFOiAzMixcbiAgICBQQUdFX1VQOiAzMyxcbiAgICBQQUdFX0RPV046IDM0LFxuICAgIEVORDogMzUsXG4gICAgSE9NRTogMzYsXG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcbiAgICBQUklOVF9TQ1JFRU46IDQ0LFxuICAgIElOU0VSVDogNDUsXG4gICAgREVMRVRFOiA0NixcbiAgICBaRVJPOiA0OCxcbiAgICBPTkU6IDQ5LFxuICAgIFRXTzogNTAsXG4gICAgVEhSRUU6IDUxLFxuICAgIEZPVVI6IDUyLFxuICAgIEZJVkU6IDUzLFxuICAgIFNJWDogNTQsXG4gICAgU0VWRU46IDU1LFxuICAgIEVJR0hUOiA1NixcbiAgICBOSU5FOiA1NyxcbiAgICBBOiA2NSxcbiAgICBCOiA2NixcbiAgICBDOiA2NyxcbiAgICBEOiA2OCxcbiAgICBFOiA2OSxcbiAgICBGOiA3MCxcbiAgICBHOiA3MSxcbiAgICBIOiA3MixcbiAgICBJOiA3MyxcbiAgICBKOiA3NCxcbiAgICBLOiA3NSxcbiAgICBMOiA3NixcbiAgICBNOiA3NyxcbiAgICBOOiA3OCxcbiAgICBPOiA3OSxcbiAgICBQOiA4MCxcbiAgICBROiA4MSxcbiAgICBSOiA4MixcbiAgICBTOiA4MyxcbiAgICBUOiA4NCxcbiAgICBVOiA4NSxcbiAgICBWOiA4NixcbiAgICBXOiA4NyxcbiAgICBYOiA4OCxcbiAgICBZOiA4OSxcbiAgICBaOiA5MCxcbiAgICBDT05URVhUX01FTlU6IDkzLFxuICAgIE5VTV9aRVJPOiA5NixcbiAgICBOVU1fT05FOiA5NyxcbiAgICBOVU1fVFdPOiA5OCxcbiAgICBOVU1fVEhSRUU6IDk5LFxuICAgIE5VTV9GT1VSOiAxMDAsXG4gICAgTlVNX0ZJVkU6IDEwMSxcbiAgICBOVU1fU0lYOiAxMDIsXG4gICAgTlVNX1NFVkVOOiAxMDMsXG4gICAgTlVNX0VJR0hUOiAxMDQsXG4gICAgTlVNX05JTkU6IDEwNSxcbiAgICBOVU1fTVVMVElQTFk6IDEwNixcbiAgICBOVU1fUExVUzogMTA3LFxuICAgIE5VTV9NSU5VUzogMTA5LFxuICAgIE5VTV9QRVJJT0Q6IDExMCxcbiAgICBOVU1fRElWSVNJT046IDExMSxcbiAgICBGMTogMTEyLFxuICAgIEYyOiAxMTMsXG4gICAgRjM6IDExNCxcbiAgICBGNDogMTE1LFxuICAgIEY1OiAxMTYsXG4gICAgRjY6IDExNyxcbiAgICBGNzogMTE4LFxuICAgIEY4OiAxMTksXG4gICAgRjk6IDEyMCxcbiAgICBGMTA6IDEyMSxcbiAgICBGMTE6IDEyMixcbiAgICBGMTI6IDEyMyxcbiAgICBEQVNIOiAxODksXG4gICAgUEVSSU9EOiAxOTAsXG4gICAgRk9SV0FSRF9TTEFTSDogMTkxXG59O1xuIl19

/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Button = __webpack_require__(211);
	
	Object.defineProperty(exports, 'NOVO_BUTTON_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Button.NOVO_BUTTON_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7bUJBQVMsb0IiLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9iaC9ub3ZvL2FwcHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IE5PVk9fQlVUVE9OX0VMRU1FTlRTIH0gZnJvbSAnLi9idXR0b24vQnV0dG9uJztcbiJdfQ==

/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Loading = __webpack_require__(220);
	
	Object.defineProperty(exports, 'NOVO_LOADING_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Loading.NOVO_LOADING_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9sb2FkaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O29CQUFTLHFCIiwiZmlsZSI6ImxvYWRpbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgTk9WT19MT0FESU5HX0VMRU1FTlRTIH0gZnJvbSAnLi9sb2FkaW5nL0xvYWRpbmcnO1xuIl19

/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.OutsideClick = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Outside click helper, makes to set the element as inactive when clicking outside of it
	 */
	
	var OutsideClick = exports.OutsideClick = function () {
	    function OutsideClick(element) {
	        _classCallCheck(this, OutsideClick);
	
	        // Component element
	        this.element = element;
	        // Active flag
	        this.active = false;
	        // Outside click handler
	        // Property because `this.func.bind(this)` returns a new function each time
	        this.onOutsideClick = this.handleOutsideClick.bind(this);
	        // Emits an active change event
	        this.onActiveChange = new _core.EventEmitter();
	    }
	
	    /**
	     * Toggles the element as active and adds/removes the outside click handler
	     * @param event
	     * @param forceValue
	     */
	
	
	    _createClass(OutsideClick, [{
	        key: 'toggleActive',
	        value: function toggleActive(event, forceValue) {
	            // Reverse the active property (if forceValue, use that)
	            this.active = forceValue || !this.active;
	            // Bind window click events to hide on outside click
	            if (this.active) {
	                window.addEventListener('click', this.onOutsideClick);
	            } else {
	                window.removeEventListener('click', this.onOutsideClick);
	            }
	            // Fire the active change event
	            this.onActiveChange.emit(this.active);
	        }
	
	        /**
	         * When the element is destroyed, make sure to remove the handler
	         */
	
	    }, {
	        key: 'ngOnDestroy',
	        value: function ngOnDestroy() {
	            window.removeEventListener('click', this.onOutsideClick);
	        }
	
	        /**
	         * When clicking outside, checks the element and closes if outside
	         * @param event
	         */
	
	    }, {
	        key: 'handleOutsideClick',
	        value: function handleOutsideClick(event) {
	            // If the elements doesn't contain the target element, it is an outside click
	            if (!this.element.nativeElement.contains(event.target)) {
	                this.toggleActive(event, false);
	            }
	        }
	    }]);
	
	    return OutsideClick;
	}();
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9vdXRzaWRlLWNsaWNrL091dHNpZGVDbGljay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFLYSxZLFdBQUEsWTtBQUNULDBCQUFZLE9BQVosRUFBcUI7QUFBQTs7O0FBRWpCLGFBQUssT0FBTCxHQUFlLE9BQWY7O0FBRUEsYUFBSyxNQUFMLEdBQWMsS0FBZDs7O0FBR0EsYUFBSyxjQUFMLEdBQXNCLEtBQUssa0JBQUwsQ0FBd0IsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBdEI7O0FBRUEsYUFBSyxjQUFMLEdBQXNCLHdCQUF0QjtBQUNIOzs7Ozs7Ozs7OztxQ0FPWSxLLEVBQU8sVSxFQUFZOztBQUU1QixpQkFBSyxNQUFMLEdBQWMsY0FBYyxDQUFDLEtBQUssTUFBbEM7O0FBRUEsZ0JBQUksS0FBSyxNQUFULEVBQWlCO0FBQ2IsdUJBQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsS0FBSyxjQUF0QztBQUNILGFBRkQsTUFFTztBQUNILHVCQUFPLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9DLEtBQUssY0FBekM7QUFDSDs7QUFFRCxpQkFBSyxjQUFMLENBQW9CLElBQXBCLENBQXlCLEtBQUssTUFBOUI7QUFDSDs7Ozs7Ozs7c0NBS2E7QUFDVixtQkFBTyxtQkFBUCxDQUEyQixPQUEzQixFQUFvQyxLQUFLLGNBQXpDO0FBQ0g7Ozs7Ozs7OzsyQ0FNa0IsSyxFQUFPOztBQUV0QixnQkFBSSxDQUFDLEtBQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsUUFBM0IsQ0FBb0MsTUFBTSxNQUExQyxDQUFMLEVBQXdEO0FBQ3BELHFCQUFLLFlBQUwsQ0FBa0IsS0FBbEIsRUFBeUIsS0FBekI7QUFDSDtBQUNKIiwiZmlsZSI6Ik91dHNpZGVDbGljay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuLyoqXG4gKiBPdXRzaWRlIGNsaWNrIGhlbHBlciwgbWFrZXMgdG8gc2V0IHRoZSBlbGVtZW50IGFzIGluYWN0aXZlIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSBvZiBpdFxuICovXG5leHBvcnQgY2xhc3MgT3V0c2lkZUNsaWNrIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIC8vIENvbXBvbmVudCBlbGVtZW50XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIC8vIEFjdGl2ZSBmbGFnXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIE91dHNpZGUgY2xpY2sgaGFuZGxlclxuICAgICAgICAvLyBQcm9wZXJ0eSBiZWNhdXNlIGB0aGlzLmZ1bmMuYmluZCh0aGlzKWAgcmV0dXJucyBhIG5ldyBmdW5jdGlvbiBlYWNoIHRpbWVcbiAgICAgICAgdGhpcy5vbk91dHNpZGVDbGljayA9IHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIEVtaXRzIGFuIGFjdGl2ZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgdGhpcy5vbkFjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSBlbGVtZW50IGFzIGFjdGl2ZSBhbmQgYWRkcy9yZW1vdmVzIHRoZSBvdXRzaWRlIGNsaWNrIGhhbmRsZXJcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gZm9yY2VWYWx1ZVxuICAgICAqL1xuICAgIHRvZ2dsZUFjdGl2ZShldmVudCwgZm9yY2VWYWx1ZSkge1xuICAgICAgICAvLyBSZXZlcnNlIHRoZSBhY3RpdmUgcHJvcGVydHkgKGlmIGZvcmNlVmFsdWUsIHVzZSB0aGF0KVxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZvcmNlVmFsdWUgfHwgIXRoaXMuYWN0aXZlO1xuICAgICAgICAvLyBCaW5kIHdpbmRvdyBjbGljayBldmVudHMgdG8gaGlkZSBvbiBvdXRzaWRlIGNsaWNrXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk91dHNpZGVDbGljayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3V0c2lkZUNsaWNrKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJlIHRoZSBhY3RpdmUgY2hhbmdlIGV2ZW50XG4gICAgICAgIHRoaXMub25BY3RpdmVDaGFuZ2UuZW1pdCh0aGlzLmFjdGl2ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgZWxlbWVudCBpcyBkZXN0cm95ZWQsIG1ha2Ugc3VyZSB0byByZW1vdmUgdGhlIGhhbmRsZXJcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk91dHNpZGVDbGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiBjbGlja2luZyBvdXRzaWRlLCBjaGVja3MgdGhlIGVsZW1lbnQgYW5kIGNsb3NlcyBpZiBvdXRzaWRlXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgaGFuZGxlT3V0c2lkZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIC8vIElmIHRoZSBlbGVtZW50cyBkb2Vzbid0IGNvbnRhaW4gdGhlIHRhcmdldCBlbGVtZW50LCBpdCBpcyBhbiBvdXRzaWRlIGNsaWNrXG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVBY3RpdmUoZXZlbnQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_BUTTON_ELEMENTS = exports.Button = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(2);
	
	var _common = __webpack_require__(8);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Button = exports.Button = (_dec = (0, _core.Component)({
	    selector: 'button[theme]',
	    inputs: ['theme', 'icon', 'side', 'color'],
	    host: {
	        '[attr.theme]': 'theme',
	        '[attr.color]': 'color',
	        '[attr.icon]': 'icon'
	    },
	    template: '\n        <!--Flex wrapper for cross-browser support-->\n        <div [class]="flex">\n            <!--Left Icon-->\n            <i *ngIf="icon && iconClass && leftSide" [ngClass]="iconClass"></i>\n            <!--Transcluded Content-->\n            <ng-content></ng-content>\n            <!--Right Icon-->\n            <i *ngIf="icon && iconClass && (rightSide || !leftSide)" [ngClass]="iconClass"></i>\n        </div>\n    ',
	    directives: [_common.CORE_DIRECTIVES]
	}), _dec(_class = function () {
	    function Button() {
	        _classCallCheck(this, Button);
	    }
	
	    _createClass(Button, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.iconClass = this.icon ? 'bhi-' + this.icon : '';
	            this.flex = this.theme ? 'flex-wrapper' : '';
	            if (this.side !== null) {
	                this.leftSide = this.side === 'left' && this.theme !== 'primary';
	                this.rightSide = this.side === 'right' || this.theme === 'primary';
	            }
	        }
	    }]);
	
	    return Button;
	}()) || _class);
	var NOVO_BUTTON_ELEMENTS = exports.NOVO_BUTTON_ELEMENTS = [Button];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9idXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUF1QmEsTSxXQUFBLE0sV0FyQloscUJBQVU7QUFDUCxjQUFVLGVBREg7QUFFUCxZQUFRLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsTUFBbEIsRUFBMEIsT0FBMUIsQ0FGRDtBQUdQLFVBQU07QUFDRix3QkFBZ0IsT0FEZDtBQUVGLHdCQUFnQixPQUZkO0FBR0YsdUJBQWU7QUFIYixLQUhDO0FBUVAseWJBUk87QUFtQlAsZ0JBQVk7QUFuQkwsQ0FBVixDOzs7Ozs7O21DQXNCYztBQUNQLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxJQUFMLFlBQW1CLEtBQUssSUFBeEIsR0FBaUMsRUFBbEQ7QUFDQSxpQkFBSyxJQUFMLEdBQVksS0FBSyxLQUFMLEdBQWEsY0FBYixHQUE4QixFQUExQztBQUNBLGdCQUFJLEtBQUssSUFBTCxLQUFjLElBQWxCLEVBQXdCO0FBQ3BCLHFCQUFLLFFBQUwsR0FBZ0IsS0FBSyxJQUFMLEtBQWMsTUFBZCxJQUF3QixLQUFLLEtBQUwsS0FBZSxTQUF2RDtBQUNBLHFCQUFLLFNBQUwsR0FBaUIsS0FBSyxJQUFMLEtBQWMsT0FBZCxJQUF5QixLQUFLLEtBQUwsS0FBZSxTQUF6RDtBQUNIO0FBQ0o7Ozs7O0FBR0UsSUFBTSxzREFBdUIsQ0FBQyxNQUFELENBQTdCIiwiZmlsZSI6IkJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYnV0dG9uW3RoZW1lXScsXG4gICAgaW5wdXRzOiBbJ3RoZW1lJywgJ2ljb24nLCAnc2lkZScsICdjb2xvciddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1thdHRyLnRoZW1lXSc6ICd0aGVtZScsXG4gICAgICAgICdbYXR0ci5jb2xvcl0nOiAnY29sb3InLFxuICAgICAgICAnW2F0dHIuaWNvbl0nOiAnaWNvbidcbiAgICB9LFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDwhLS1GbGV4IHdyYXBwZXIgZm9yIGNyb3NzLWJyb3dzZXIgc3VwcG9ydC0tPlxuICAgICAgICA8ZGl2IFtjbGFzc109XCJmbGV4XCI+XG4gICAgICAgICAgICA8IS0tTGVmdCBJY29uLS0+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImljb24gJiYgaWNvbkNsYXNzICYmIGxlZnRTaWRlXCIgW25nQ2xhc3NdPVwiaWNvbkNsYXNzXCI+PC9pPlxuICAgICAgICAgICAgPCEtLVRyYW5zY2x1ZGVkIENvbnRlbnQtLT5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwhLS1SaWdodCBJY29uLS0+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImljb24gJiYgaWNvbkNsYXNzICYmIChyaWdodFNpZGUgfHwgIWxlZnRTaWRlKVwiIFtuZ0NsYXNzXT1cImljb25DbGFzc1wiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b24ge1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmljb25DbGFzcyA9IHRoaXMuaWNvbiA/IGBiaGktJHt0aGlzLmljb259YCA6ICcnO1xuICAgICAgICB0aGlzLmZsZXggPSB0aGlzLnRoZW1lID8gJ2ZsZXgtd3JhcHBlcicgOiAnJztcbiAgICAgICAgaWYgKHRoaXMuc2lkZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5sZWZ0U2lkZSA9IHRoaXMuc2lkZSA9PT0gJ2xlZnQnICYmIHRoaXMudGhlbWUgIT09ICdwcmltYXJ5JztcbiAgICAgICAgICAgIHRoaXMucmlnaHRTaWRlID0gdGhpcy5zaWRlID09PSAncmlnaHQnIHx8IHRoaXMudGhlbWUgPT09ICdwcmltYXJ5JztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5PVk9fQlVUVE9OX0VMRU1FTlRTID0gW0J1dHRvbl07XG4iXX0=

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Card = __webpack_require__(213);
	
	Object.defineProperty(exports, 'NOVO_CARD_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Card.NOVO_CARD_ELEMENTS;
	  }
	});
	
	var _CardExtras = __webpack_require__(214);
	
	Object.defineProperty(exports, 'NOVO_CARD_EXTRA_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _CardExtras.NOVO_CARD_EXTRA_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9jYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O2lCQUFTLGtCOzs7Ozs7Ozs7dUJBQ0Esd0IiLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBOT1ZPX0NBUkRfRUxFTUVOVFMgfSBmcm9tICcuL2NhcmQvQ2FyZCc7XG5leHBvcnQgeyBOT1ZPX0NBUkRfRVhUUkFfRUxFTUVOVFMgfSBmcm9tICcuL2NhcmQvZXh0cmFzL0NhcmRFeHRyYXMnO1xuIl19

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_CARD_ELEMENTS = exports.Card = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(2);
	
	var _common = __webpack_require__(8);
	
	var _button = __webpack_require__(113);
	
	var _loading = __webpack_require__(114);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Card = exports.Card = (_dec = (0, _core.Component)({
	    selector: 'novo-card',
	    inputs: ['loading', 'title', 'icon', 'config', 'message', 'messageIcon', 'refresh', 'close', 'move', 'padding'],
	    outputs: ['onClose', 'onRefresh'],
	    template: '\n        <div class="novo-card" [attr.data-automation-id]="cardAutomationId" [ngClass]="{\'no-padding\': !padding}">\n            <!--Card Header-->\n            <header>\n                <div class="title">\n                    <!--Grabber Icon-->\n                    <i *ngIf="move || config.move" class="bhi-move" [attr.data-automation-id]="cardAutomationId + \'-move\'"></i>\n                    <!--Card Title-->\n                    <h3 [attr.data-automation-id]="cardAutomationId + \'-title\'"><i *ngIf="icon" [ngClass]="iconClass"></i> {{title || config.title}}</h3>\n                </div>\n                <!--Card Actions-->\n                <div class="actions" [attr.data-automation-id]="cardAutomationId + \'-actions\'">\n                    <button theme="icon" icon="refresh-o"  (click)="toggleRefresh()" *ngIf="refresh || config.refresh" [attr.data-automation-id]="cardAutomationId + \'-refresh\'"></button>\n                    <button theme="icon" icon="close-o" (click)="toggleClose()" *ngIf="close || config.close" [attr.data-automation-id]="cardAutomationId + \'-close\'"></button>\n                </div>\n            </header>\n            <!--Card Main-->\n            <main>\n                <!--Content (transcluded)-->\n                <ng-content *ngIf="!(loading || config.loading) && !(message || config.message)"></ng-content>\n                <!--Error/Empty Message-->\n                <p class="card-message" *ngIf="!(loading || config.loading) && (message || config.message)" [attr.data-automation-id]="cardAutomationId + \'-message\'"><i *ngIf="messageIconClass" [ngClass]="messageIconClass"></i> <span [innerHtml]="message || config.message"></span></p>\n                <!--Loading-->\n                <novo-loading *ngIf="loading || config.loading" theme="line"  [attr.data-automation-id]="cardAutomationId + \'-loading\'"></novo-loading>\n            </main>\n            <!--Card Footer-->\n            <ng-content *ngIf="!(loading || config.loading) && !(message || config.message)" select="footer"></ng-content>\n        </div>\n    ',
	    directives: [_common.CORE_DIRECTIVES, _button.NOVO_BUTTON_ELEMENTS, _loading.NOVO_LOADING_ELEMENTS]
	}), _dec(_class = function () {
	    function Card() {
	        _classCallCheck(this, Card);
	
	        this.onClose = new _core.EventEmitter();
	        this.onRefresh = new _core.EventEmitter();
	        this.padding = true;
	    }
	
	    _createClass(Card, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.config = this.config || {};
	        }
	    }, {
	        key: 'ngOnChanges',
	        value: function ngOnChanges() {
	            this.config = this.config || {};
	            this.cardAutomationId = (this.title || this.config.title || 'no-title').toLowerCase().replace(/\s/g, '-') + '-card';
	
	            var newIcon = this.icon || this.config.icon;
	            var newMessageIcon = this.messageIcon || this.config.messageIcon;
	            this.iconClass = newIcon ? 'bhi-' + newIcon : null;
	            this.messageIconClass = newMessageIcon ? 'bhi-' + newMessageIcon : null;
	        }
	    }, {
	        key: 'toggleClose',
	        value: function toggleClose() {
	            if (!this.config.onClose) {
	                this.onClose.next();
	            } else {
	                this.config.onClose();
	            }
	        }
	    }, {
	        key: 'toggleRefresh',
	        value: function toggleRefresh() {
	            if (!this.config.onRefresh) {
	                this.onRefresh.next();
	            } else {
	                this.config.onRefresh();
	            }
	        }
	    }]);
	
	    return Card;
	}()) || _class);
	var NOVO_CARD_ELEMENTS = exports.NOVO_CARD_ELEMENTS = [Card];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9jYXJkL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztJQXVEYSxJLFdBQUEsSSxXQXJEWixxQkFBVTtBQUNQLGNBQVUsV0FESDtBQUVQLFlBQVEsQ0FDSixTQURJLEVBRUosT0FGSSxFQUdKLE1BSEksRUFJSixRQUpJLEVBS0osU0FMSSxFQU1KLGFBTkksRUFPSixTQVBJLEVBUUosT0FSSSxFQVNKLE1BVEksRUFVSixTQVZJLENBRkQ7QUFjUCxhQUFTLENBQ0wsU0FESyxFQUVMLFdBRkssQ0FkRjtBQWtCUCwraUVBbEJPO0FBK0NQLGdCQUFZO0FBL0NMLENBQVYsQztBQXNERyxvQkFBYztBQUFBOztBQUNWLGFBQUssT0FBTCxHQUFlLHdCQUFmO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLHdCQUFqQjtBQUNBLGFBQUssT0FBTCxHQUFlLElBQWY7QUFDSDs7OzttQ0FFVTtBQUNQLGlCQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsSUFBZSxFQUE3QjtBQUNIOzs7c0NBRWE7QUFDVixpQkFBSyxNQUFMLEdBQWMsS0FBSyxNQUFMLElBQWUsRUFBN0I7QUFDQSxpQkFBSyxnQkFBTCxHQUEyQixDQUFDLEtBQUssS0FBTCxJQUFjLEtBQUssTUFBTCxDQUFZLEtBQTFCLElBQW1DLFVBQXBDLEVBQWdELFdBQWhELEdBQThELE9BQTlELENBQXNFLEtBQXRFLEVBQTZFLEdBQTdFLENBQTNCOztBQUVBLGdCQUFJLFVBQVUsS0FBSyxJQUFMLElBQWEsS0FBSyxNQUFMLENBQVksSUFBdkM7QUFDQSxnQkFBSSxpQkFBaUIsS0FBSyxXQUFMLElBQW9CLEtBQUssTUFBTCxDQUFZLFdBQXJEO0FBQ0EsaUJBQUssU0FBTCxHQUFpQixtQkFBaUIsT0FBakIsR0FBNkIsSUFBOUM7QUFDQSxpQkFBSyxnQkFBTCxHQUF3QiwwQkFBd0IsY0FBeEIsR0FBMkMsSUFBbkU7QUFDSDs7O3NDQUVhO0FBQ1YsZ0JBQUksQ0FBQyxLQUFLLE1BQUwsQ0FBWSxPQUFqQixFQUEwQjtBQUN0QixxQkFBSyxPQUFMLENBQWEsSUFBYjtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLLE1BQUwsQ0FBWSxPQUFaO0FBQ0g7QUFDSjs7O3dDQUVlO0FBQ1osZ0JBQUksQ0FBQyxLQUFLLE1BQUwsQ0FBWSxTQUFqQixFQUE0QjtBQUN4QixxQkFBSyxTQUFMLENBQWUsSUFBZjtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLLE1BQUwsQ0FBWSxTQUFaO0FBQ0g7QUFDSjs7Ozs7QUFHRSxJQUFNLGtEQUFxQixDQUFDLElBQUQsQ0FBM0IiLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuaW1wb3J0IHsgTk9WT19CVVRUT05fRUxFTUVOVFMgfSBmcm9tICcuLy4uL2J1dHRvbic7XG5pbXBvcnQgeyBOT1ZPX0xPQURJTkdfRUxFTUVOVFMgfSBmcm9tICcuLy4uL2xvYWRpbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tY2FyZCcsXG4gICAgaW5wdXRzOiBbXG4gICAgICAgICdsb2FkaW5nJyxcbiAgICAgICAgJ3RpdGxlJyxcbiAgICAgICAgJ2ljb24nLFxuICAgICAgICAnY29uZmlnJyxcbiAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAnbWVzc2FnZUljb24nLFxuICAgICAgICAncmVmcmVzaCcsXG4gICAgICAgICdjbG9zZScsXG4gICAgICAgICdtb3ZlJyxcbiAgICAgICAgJ3BhZGRpbmcnXG4gICAgXSxcbiAgICBvdXRwdXRzOiBbXG4gICAgICAgICdvbkNsb3NlJyxcbiAgICAgICAgJ29uUmVmcmVzaCdcbiAgICBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNhcmRcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZFwiIFtuZ0NsYXNzXT1cInsnbm8tcGFkZGluZyc6ICFwYWRkaW5nfVwiPlxuICAgICAgICAgICAgPCEtLUNhcmQgSGVhZGVyLS0+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tR3JhYmJlciBJY29uLS0+XG4gICAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwibW92ZSB8fCBjb25maWcubW92ZVwiIGNsYXNzPVwiYmhpLW1vdmVcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctbW92ZSdcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwhLS1DYXJkIFRpdGxlLS0+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctdGl0bGUnXCI+PGkgKm5nSWY9XCJpY29uXCIgW25nQ2xhc3NdPVwiaWNvbkNsYXNzXCI+PC9pPiB7e3RpdGxlIHx8IGNvbmZpZy50aXRsZX19PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tQ2FyZCBBY3Rpb25zLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctYWN0aW9ucydcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwicmVmcmVzaC1vXCIgIChjbGljayk9XCJ0b2dnbGVSZWZyZXNoKClcIiAqbmdJZj1cInJlZnJlc2ggfHwgY29uZmlnLnJlZnJlc2hcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctcmVmcmVzaCdcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwiY2xvc2Utb1wiIChjbGljayk9XCJ0b2dnbGVDbG9zZSgpXCIgKm5nSWY9XCJjbG9zZSB8fCBjb25maWcuY2xvc2VcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctY2xvc2UnXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDwhLS1DYXJkIE1haW4tLT5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDwhLS1Db250ZW50ICh0cmFuc2NsdWRlZCktLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCAqbmdJZj1cIiEobG9hZGluZyB8fCBjb25maWcubG9hZGluZykgJiYgIShtZXNzYWdlIHx8IGNvbmZpZy5tZXNzYWdlKVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8IS0tRXJyb3IvRW1wdHkgTWVzc2FnZS0tPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1tZXNzYWdlXCIgKm5nSWY9XCIhKGxvYWRpbmcgfHwgY29uZmlnLmxvYWRpbmcpICYmIChtZXNzYWdlIHx8IGNvbmZpZy5tZXNzYWdlKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy1tZXNzYWdlJ1wiPjxpICpuZ0lmPVwibWVzc2FnZUljb25DbGFzc1wiIFtuZ0NsYXNzXT1cIm1lc3NhZ2VJY29uQ2xhc3NcIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwibWVzc2FnZSB8fCBjb25maWcubWVzc2FnZVwiPjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPCEtLUxvYWRpbmctLT5cbiAgICAgICAgICAgICAgICA8bm92by1sb2FkaW5nICpuZ0lmPVwibG9hZGluZyB8fCBjb25maWcubG9hZGluZ1wiIHRoZW1lPVwibGluZVwiICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctbG9hZGluZydcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwhLS1DYXJkIEZvb3Rlci0tPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhKGxvYWRpbmcgfHwgY29uZmlnLmxvYWRpbmcpICYmICEobWVzc2FnZSB8fCBjb25maWcubWVzc2FnZSlcIiBzZWxlY3Q9XCJmb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1xuICAgICAgICBDT1JFX0RJUkVDVElWRVMsXG4gICAgICAgIE5PVk9fQlVUVE9OX0VMRU1FTlRTLFxuICAgICAgICBOT1ZPX0xPQURJTkdfRUxFTUVOVFNcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENhcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMub25SZWZyZXNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLnBhZGRpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlnIHx8IHt9O1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlnIHx8IHt9O1xuICAgICAgICB0aGlzLmNhcmRBdXRvbWF0aW9uSWQgPSBgJHsodGhpcy50aXRsZSB8fCB0aGlzLmNvbmZpZy50aXRsZSB8fCAnbm8tdGl0bGUnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnLScpfS1jYXJkYDtcblxuICAgICAgICBsZXQgbmV3SWNvbiA9IHRoaXMuaWNvbiB8fCB0aGlzLmNvbmZpZy5pY29uO1xuICAgICAgICBsZXQgbmV3TWVzc2FnZUljb24gPSB0aGlzLm1lc3NhZ2VJY29uIHx8IHRoaXMuY29uZmlnLm1lc3NhZ2VJY29uO1xuICAgICAgICB0aGlzLmljb25DbGFzcyA9IG5ld0ljb24gPyBgYmhpLSR7bmV3SWNvbn1gIDogbnVsbDtcbiAgICAgICAgdGhpcy5tZXNzYWdlSWNvbkNsYXNzID0gbmV3TWVzc2FnZUljb24gPyBgYmhpLSR7bmV3TWVzc2FnZUljb259YCA6IG51bGw7XG4gICAgfVxuXG4gICAgdG9nZ2xlQ2xvc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcub25DbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNsb3NlLm5leHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVJlZnJlc2goKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcub25SZWZyZXNoKSB7XG4gICAgICAgICAgICB0aGlzLm9uUmVmcmVzaC5uZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5vblJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5PVk9fQ0FSRF9FTEVNRU5UUyA9IFtDYXJkXTtcbiJdfQ==

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NOVO_CARD_EXTRA_ELEMENTS = undefined;
	
	var _CardBestTime = __webpack_require__(215);
	
	var _CardDonutChart = __webpack_require__(216);
	
	var _CardTimeline = __webpack_require__(217);
	
	var NOVO_CARD_EXTRA_ELEMENTS = exports.NOVO_CARD_EXTRA_ELEMENTS = [_CardBestTime.CardBestTime, _CardDonutChart.CardDonutChart, _CardTimeline.CardTimeline];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9jYXJkL2V4dHJhcy9DYXJkRXh0cmFzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFTyxJQUFNLDhEQUEyQix3RkFBakMiLCJmaWxlIjoiQ2FyZEV4dHJhcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkQmVzdFRpbWUgfSBmcm9tICcuL2Jlc3QtdGltZS9DYXJkQmVzdFRpbWUnO1xuaW1wb3J0IHsgQ2FyZERvbnV0Q2hhcnQgfSBmcm9tICcuL2RvbnV0LWNoYXJ0L0NhcmREb251dENoYXJ0JztcbmltcG9ydCB7IENhcmRUaW1lbGluZSB9IGZyb20gJy4vdGltZWxpbmUvQ2FyZFRpbWVsaW5lJztcblxuZXhwb3J0IGNvbnN0IE5PVk9fQ0FSRF9FWFRSQV9FTEVNRU5UUyA9IFtDYXJkQmVzdFRpbWUsIENhcmREb251dENoYXJ0LCBDYXJkVGltZWxpbmVdO1xuIl19

/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CardBestTime = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(2);
	
	var _common = __webpack_require__(8);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CardBestTime = exports.CardBestTime = (_dec = (0, _core.Component)({
	    selector: 'novo-card-best-time',
	    inputs: ['label', 'time', 'day', 'hideLabel'],
	    template: '\n        <label *ngIf="!hideLabel" [attr.data-automation-id]="dataAutomationId + \'-label\'">{{ label }}</label>\n        <div class="best-time">\n            <i [attr.data-automation-id]="dataAutomationId + \'-icon\'" [ngClass]="[timeIcon, timeStyle]"></i>\n            <div class="time-and-day">\n                <span class="time" [ngClass]="timeStyle" [attr.data-automation-id]="dataAutomationId + \'-time\'">{{ time }}</span>\n                <div class="days" [attr.data-automation-id]="dataAutomationId + \'-days\'">\n                    <span class="day" [class.active]="dayLowerCase === \'sunday\'" [attr.data-automation-id]="\'sunday\'">S</span>\n                    <span class="day" [class.active]="dayLowerCase === \'monday\'" [attr.data-automation-id]="\'monday\'">M</span>\n                    <span class="day" [class.active]="dayLowerCase === \'tuesday\'" [attr.data-automation-id]="\'tuesday\'">T</span>\n                    <span class="day" [class.active]="dayLowerCase === \'wednesday\'" [attr.data-automation-id]="\'wednesday\'">W</span>\n                    <span class="day" [class.active]="dayLowerCase === \'thursday\'" [attr.data-automation-id]="\'thursday\'">T</span>\n                    <span class="day" [class.active]="dayLowerCase === \'friday\'" [attr.data-automation-id]="\'friday\'">F</span>\n                    <span class="day" [class.active]="dayLowerCase === \'saturday\'" [attr.data-automation-id]="\'saturday\'">S</span>\n                </div>\n            </div>\n        </div>\n    ',
	    directives: [_common.CORE_DIRECTIVES]
	}), _dec(_class = function () {
	    function CardBestTime() {
	        _classCallCheck(this, CardBestTime);
	    }
	
	    _createClass(CardBestTime, [{
	        key: 'ngOnChanges',
	        value: function ngOnChanges() {
	            if (this.time) {
	                var timeIconAndStyle = this.getTimeOfDayStyleAndIcon(this.time);
	                this.timeIcon = timeIconAndStyle.icon;
	                this.timeStyle = timeIconAndStyle.style;
	                this.dayLowerCase = (this.day || '').toLowerCase();
	                this.dataAutomationId = this.label ? this.label.replace(/\s+/g, '-').toLowerCase() : '';
	            }
	        }
	    }, {
	        key: 'getTimeOfDayStyleAndIcon',
	        value: function getTimeOfDayStyleAndIcon(time) {
	            var icon = null;
	            var style = null;
	            var transformedTime = time.replace(/\s+/g, '-').toUpperCase();
	
	            var TIMES = {
	                morningTimes: {
	                    times: ['5-AM', '6-AM', '7-AM', '8-AM', '9-AM', '10-AM'],
	                    icon: 'bhi-coffee'
	                },
	                dayTimes: {
	                    times: ['11-AM', '12-PM', '1-PM', '2-PM', '3-PM', '4-PM', '5-PM', '6-PM'],
	                    icon: 'bhi-day'
	                },
	                eveningTimes: {
	                    times: ['7-PM', '8-PM', '9-PM', '10-PM', '11-PM', '12-AM', '1-AM', '2-AM', '3-AM', '4-AM'],
	                    icon: 'bhi-evening'
	                }
	            };
	
	            for (var prop in TIMES) {
	                if (TIMES[prop].times.indexOf(transformedTime) > -1) {
	                    icon = TIMES[prop].icon;
	                    if (icon === 'bhi-coffee') {
	                        style = 'morning';
	                    } else if (icon === 'bhi-day') {
	                        style = 'day';
	                    } else if (icon === 'bhi-evening') {
	                        style = 'evening';
	                    }
	                }
	            }
	            return { icon: icon, style: style };
	        }
	    }]);
	
	    return CardBestTime;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9jYXJkL2V4dHJhcy9iZXN0LXRpbWUvQ2FyZEJlc3RUaW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUE4QmEsWSxXQUFBLFksV0E1QloscUJBQVU7QUFDUCxjQUFVLHFCQURIO0FBRVAsWUFBUSxDQUNKLE9BREksRUFFSixNQUZJLEVBR0osS0FISSxFQUlKLFdBSkksQ0FGRDtBQVFQLDBnREFSTztBQTBCUCxnQkFBWTtBQTFCTCxDQUFWLEM7Ozs7Ozs7c0NBNkJpQjtBQUNWLGdCQUFJLEtBQUssSUFBVCxFQUFlO0FBQ1gsb0JBQUksbUJBQW1CLEtBQUssd0JBQUwsQ0FBOEIsS0FBSyxJQUFuQyxDQUF2QjtBQUNBLHFCQUFLLFFBQUwsR0FBZ0IsaUJBQWlCLElBQWpDO0FBQ0EscUJBQUssU0FBTCxHQUFpQixpQkFBaUIsS0FBbEM7QUFDQSxxQkFBSyxZQUFMLEdBQW9CLENBQUMsS0FBSyxHQUFMLElBQVksRUFBYixFQUFpQixXQUFqQixFQUFwQjtBQUNBLHFCQUFLLGdCQUFMLEdBQXdCLEtBQUssS0FBTCxHQUFhLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsTUFBbkIsRUFBMkIsR0FBM0IsRUFBZ0MsV0FBaEMsRUFBYixHQUE2RCxFQUFyRjtBQUNIO0FBQ0o7OztpREFFd0IsSSxFQUFNO0FBQzNCLGdCQUFJLE9BQU8sSUFBWDtBQUNBLGdCQUFJLFFBQVEsSUFBWjtBQUNBLGdCQUFJLGtCQUFrQixLQUFLLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLEdBQXJCLEVBQTBCLFdBQTFCLEVBQXRCOztBQUVBLGdCQUFNLFFBQVE7QUFDViw4QkFBYztBQUNWLDJCQUFPLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsTUFBekIsRUFBaUMsTUFBakMsRUFBeUMsT0FBekMsQ0FERztBQUVWLDBCQUFNO0FBRkksaUJBREo7QUFLViwwQkFBVTtBQUNOLDJCQUFPLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsTUFBbkIsRUFBMkIsTUFBM0IsRUFBbUMsTUFBbkMsRUFBMkMsTUFBM0MsRUFBbUQsTUFBbkQsRUFBMkQsTUFBM0QsQ0FERDtBQUVOLDBCQUFNO0FBRkEsaUJBTEE7QUFTViw4QkFBYztBQUNWLDJCQUFPLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsT0FBekIsRUFBa0MsT0FBbEMsRUFBMkMsT0FBM0MsRUFBb0QsTUFBcEQsRUFBNEQsTUFBNUQsRUFBb0UsTUFBcEUsRUFBNEUsTUFBNUUsQ0FERztBQUVWLDBCQUFNO0FBRkk7QUFUSixhQUFkOztBQWVBLGlCQUFLLElBQUksSUFBVCxJQUFpQixLQUFqQixFQUF3QjtBQUNwQixvQkFBSSxNQUFNLElBQU4sRUFBWSxLQUFaLENBQWtCLE9BQWxCLENBQTBCLGVBQTFCLElBQTZDLENBQUMsQ0FBbEQsRUFBcUQ7QUFDakQsMkJBQU8sTUFBTSxJQUFOLEVBQVksSUFBbkI7QUFDQSx3QkFBSSxTQUFTLFlBQWIsRUFBMkI7QUFDdkIsZ0NBQVEsU0FBUjtBQUNILHFCQUZELE1BRU8sSUFBSSxTQUFTLFNBQWIsRUFBd0I7QUFDM0IsZ0NBQVEsS0FBUjtBQUNILHFCQUZNLE1BRUEsSUFBSSxTQUFTLGFBQWIsRUFBNEI7QUFDL0IsZ0NBQVEsU0FBUjtBQUNIO0FBQ0o7QUFDSjtBQUNELG1CQUFPLEVBQUUsVUFBRixFQUFRLFlBQVIsRUFBUDtBQUNIIiwiZmlsZSI6IkNhcmRCZXN0VGltZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm92by1jYXJkLWJlc3QtdGltZScsXG4gICAgaW5wdXRzOiBbXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgICd0aW1lJyxcbiAgICAgICAgJ2RheScsXG4gICAgICAgICdoaWRlTGFiZWwnXG4gICAgXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bGFiZWwgKm5nSWY9XCIhaGlkZUxhYmVsXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImRhdGFBdXRvbWF0aW9uSWQgKyAnLWxhYmVsJ1wiPnt7IGxhYmVsIH19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJlc3QtdGltZVwiPlxuICAgICAgICAgICAgPGkgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImRhdGFBdXRvbWF0aW9uSWQgKyAnLWljb24nXCIgW25nQ2xhc3NdPVwiW3RpbWVJY29uLCB0aW1lU3R5bGVdXCI+PC9pPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWUtYW5kLWRheVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGltZVwiIFtuZ0NsYXNzXT1cInRpbWVTdHlsZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJkYXRhQXV0b21hdGlvbklkICsgJy10aW1lJ1wiPnt7IHRpbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRheXNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiZGF0YUF1dG9tYXRpb25JZCArICctZGF5cydcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXlcIiBbY2xhc3MuYWN0aXZlXT1cImRheUxvd2VyQ2FzZSA9PT0gJ3N1bmRheSdcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ3N1bmRheSdcIj5TPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRheVwiIFtjbGFzcy5hY3RpdmVdPVwiZGF5TG93ZXJDYXNlID09PSAnbW9uZGF5J1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbW9uZGF5J1wiPk08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF5XCIgW2NsYXNzLmFjdGl2ZV09XCJkYXlMb3dlckNhc2UgPT09ICd0dWVzZGF5J1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCIndHVlc2RheSdcIj5UPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRheVwiIFtjbGFzcy5hY3RpdmVdPVwiZGF5TG93ZXJDYXNlID09PSAnd2VkbmVzZGF5J1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInd2VkbmVzZGF5J1wiPlc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF5XCIgW2NsYXNzLmFjdGl2ZV09XCJkYXlMb3dlckNhc2UgPT09ICd0aHVyc2RheSdcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ3RodXJzZGF5J1wiPlQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF5XCIgW2NsYXNzLmFjdGl2ZV09XCJkYXlMb3dlckNhc2UgPT09ICdmcmlkYXknXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmcmlkYXknXCI+Rjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXlcIiBbY2xhc3MuYWN0aXZlXT1cImRheUxvd2VyQ2FzZSA9PT0gJ3NhdHVyZGF5J1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInc2F0dXJkYXknXCI+Uzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIENhcmRCZXN0VGltZSB7XG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWUpIHtcbiAgICAgICAgICAgIGxldCB0aW1lSWNvbkFuZFN0eWxlID0gdGhpcy5nZXRUaW1lT2ZEYXlTdHlsZUFuZEljb24odGhpcy50aW1lKTtcbiAgICAgICAgICAgIHRoaXMudGltZUljb24gPSB0aW1lSWNvbkFuZFN0eWxlLmljb247XG4gICAgICAgICAgICB0aGlzLnRpbWVTdHlsZSA9IHRpbWVJY29uQW5kU3R5bGUuc3R5bGU7XG4gICAgICAgICAgICB0aGlzLmRheUxvd2VyQ2FzZSA9ICh0aGlzLmRheSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YUF1dG9tYXRpb25JZCA9IHRoaXMubGFiZWwgPyB0aGlzLmxhYmVsLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpIDogJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUaW1lT2ZEYXlTdHlsZUFuZEljb24odGltZSkge1xuICAgICAgICBsZXQgaWNvbiA9IG51bGw7XG4gICAgICAgIGxldCBzdHlsZSA9IG51bGw7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1lZFRpbWUgPSB0aW1lLnJlcGxhY2UoL1xccysvZywgJy0nKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGNvbnN0IFRJTUVTID0ge1xuICAgICAgICAgICAgbW9ybmluZ1RpbWVzOiB7XG4gICAgICAgICAgICAgICAgdGltZXM6IFsnNS1BTScsICc2LUFNJywgJzctQU0nLCAnOC1BTScsICc5LUFNJywgJzEwLUFNJ10sXG4gICAgICAgICAgICAgICAgaWNvbjogJ2JoaS1jb2ZmZWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF5VGltZXM6IHtcbiAgICAgICAgICAgICAgICB0aW1lczogWycxMS1BTScsICcxMi1QTScsICcxLVBNJywgJzItUE0nLCAnMy1QTScsICc0LVBNJywgJzUtUE0nLCAnNi1QTSddLFxuICAgICAgICAgICAgICAgIGljb246ICdiaGktZGF5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW5pbmdUaW1lczoge1xuICAgICAgICAgICAgICAgIHRpbWVzOiBbJzctUE0nLCAnOC1QTScsICc5LVBNJywgJzEwLVBNJywgJzExLVBNJywgJzEyLUFNJywgJzEtQU0nLCAnMi1BTScsICczLUFNJywgJzQtQU0nXSxcbiAgICAgICAgICAgICAgICBpY29uOiAnYmhpLWV2ZW5pbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBUSU1FUykge1xuICAgICAgICAgICAgaWYgKFRJTUVTW3Byb3BdLnRpbWVzLmluZGV4T2YodHJhbnNmb3JtZWRUaW1lKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgaWNvbiA9IFRJTUVTW3Byb3BdLmljb247XG4gICAgICAgICAgICAgICAgaWYgKGljb24gPT09ICdiaGktY29mZmVlJykge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9ICdtb3JuaW5nJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGljb24gPT09ICdiaGktZGF5Jykge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9ICdkYXknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaWNvbiA9PT0gJ2JoaS1ldmVuaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9ICdldmVuaW5nJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgaWNvbiwgc3R5bGUgfTtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CardDonutChart = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CardDonutChart = exports.CardDonutChart = (_dec = (0, _core.Component)({
	    selector: 'novo-card-chart-donut',
	    inputs: ['value', 'label', 'color'],
	    template: '\n        <aside id="chart-percent-{{ uid }}">\n            <!-- COLORED FILL -->\n            <svg viewBox="-10 -10 220 220">\n                <g fill="none" stroke-width="20" transform="translate(100,100)">\n                    <path class="fill" d="M 0,-100 A 100,100 0 0,1 86.6,-50" />\n                    <path class="fill" d="M 86.6,-50 A 100,100 0 0,1 86.6,50" />\n                    <path class="fill" d="M 86.6,50 A 100,100 0 0,1 0,100" />\n                    <path class="fill" d="M 0,100 A 100,100 0 0,1 -86.6,50" />\n                    <path class="fill" d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" />\n                    <path class="fill" d="M -86.6,-50 A 100,100 0 0,1 0,-100" />\n                </g>\n            </svg>\n            <!-- GREY BEZEL -->\n            <svg viewBox="-10 -10 220 220">\n                <path id="chart-fill-{{uid}}" d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"></path>\n            </svg>\n        </aside>\n    '
	}), _dec(_class = function () {
	    function CardDonutChart(element) {
	        _classCallCheck(this, CardDonutChart);
	
	        this.element = element;
	        // Geometric number that represents 100% of the chart area
	        this.chartFillMax = 629;
	        // Unique ID for instance
	        this.uid = Math.round(Math.random() * 1000);
	        // Prevent Collision
	        this.isChartDrawing = false;
	    }
	
	    _createClass(CardDonutChart, [{
	        key: 'ngOnChanges',
	        value: function ngOnChanges() {
	            if (!this.isChartDrawing) {
	                this.drawChart();
	            }
	        }
	    }, {
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            if (!this.isChartDrawing) {
	                this.drawChart();
	            }
	            this.color = this.color || '#662255';
	        }
	    }, {
	        key: 'drawChart',
	        value: function drawChart() {
	            var _this = this;
	
	            this.isChartDrawing = true;
	            setTimeout(function () {
	                var chartContainer = _this.element.nativeElement.querySelector('#chart-percent-' + _this.uid);
	                var fillElements = _this.element.nativeElement.querySelectorAll('.fill');
	                for (var i = 0; i < fillElements.length; i++) {
	                    fillElements[i].setAttribute('stroke', _this.color);
	                }
	                // Set fill amount
	                _this.element.nativeElement.querySelector('#chart-fill-' + _this.uid).setAttribute('stroke-dashoffset', (_this.chartFillMax * _this.value).toString());
	                // Set Text Color
	                chartContainer.style.color = _this.color;
	                // Set percentage for chart
	                chartContainer.setAttribute('data-percent', Math.round(_this.value * 100).toString() + '%');
	                // Set Label
	                chartContainer.setAttribute('data-name', _this.label);
	                _this.isChartDrawing = false;
	            });
	        }
	    }]);
	
	    return CardDonutChart;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_core.ElementRef], CardDonutChart);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9jYXJkL2V4dHJhcy9kb251dC1jaGFydC9DYXJkRG9udXRDaGFydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0lBNkJhLGMsV0FBQSxjLFdBM0JaLHFCQUFVO0FBQ1AsY0FBVSx1QkFESDtBQUVQLFlBQVEsQ0FDSixPQURJLEVBRUosT0FGSSxFQUdKLE9BSEksQ0FGRDtBQU9QO0FBUE8sQ0FBVixDO0FBNEJHLDRCQUFZLE9BQVosRUFBZ0M7QUFBQTs7QUFDNUIsYUFBSyxPQUFMLEdBQWUsT0FBZjs7QUFFQSxhQUFLLFlBQUwsR0FBb0IsR0FBcEI7O0FBRUEsYUFBSyxHQUFMLEdBQVcsS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWdCLElBQTNCLENBQVg7O0FBRUEsYUFBSyxjQUFMLEdBQXNCLEtBQXRCO0FBQ0g7Ozs7c0NBRWE7QUFDVixnQkFBSSxDQUFDLEtBQUssY0FBVixFQUEwQjtBQUN0QixxQkFBSyxTQUFMO0FBQ0g7QUFDSjs7O21DQUVVO0FBQ1AsZ0JBQUksQ0FBQyxLQUFLLGNBQVYsRUFBMEI7QUFDdEIscUJBQUssU0FBTDtBQUNIO0FBQ0QsaUJBQUssS0FBTCxHQUFhLEtBQUssS0FBTCxJQUFjLFNBQTNCO0FBQ0g7OztvQ0FFVztBQUFBOztBQUNSLGlCQUFLLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSx1QkFBVyxZQUFNO0FBQ2Isb0JBQUksaUJBQWlCLE1BQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsYUFBM0IscUJBQTJELE1BQUssR0FBaEUsQ0FBckI7QUFDQSxvQkFBSSxlQUFlLE1BQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsZ0JBQTNCLENBQTRDLE9BQTVDLENBQW5CO0FBQ0EscUJBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxhQUFhLE1BQWpDLEVBQXlDLEdBQXpDLEVBQThDO0FBQzFDLGlDQUFhLENBQWIsRUFBZ0IsWUFBaEIsQ0FBNkIsUUFBN0IsRUFBdUMsTUFBSyxLQUE1QztBQUNIOztBQUVELHNCQUFLLE9BQUwsQ0FBYSxhQUFiLENBQTJCLGFBQTNCLGtCQUF3RCxNQUFLLEdBQTdELEVBQW9FLFlBQXBFLENBQWlGLG1CQUFqRixFQUFzRyxDQUFDLE1BQUssWUFBTCxHQUFvQixNQUFLLEtBQTFCLEVBQWlDLFFBQWpDLEVBQXRHOztBQUVBLCtCQUFlLEtBQWYsQ0FBcUIsS0FBckIsR0FBNkIsTUFBSyxLQUFsQzs7QUFFQSwrQkFBZSxZQUFmLENBQTRCLGNBQTVCLEVBQWdELEtBQUssS0FBTCxDQUFXLE1BQUssS0FBTCxHQUFhLEdBQXhCLENBQUQsQ0FBK0IsUUFBL0IsRUFBL0M7O0FBRUEsK0JBQWUsWUFBZixDQUE0QixXQUE1QixFQUF5QyxNQUFLLEtBQTlDO0FBQ0Esc0JBQUssY0FBTCxHQUFzQixLQUF0QjtBQUNILGFBZkQ7QUFnQkg7Ozs7O2dFQTFDUSxjIiwiZmlsZSI6IkNhcmREb251dENoYXJ0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9iaC9ub3ZvL2FwcHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tY2FyZC1jaGFydC1kb251dCcsXG4gICAgaW5wdXRzOiBbXG4gICAgICAgICd2YWx1ZScsXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgICdjb2xvcidcbiAgICBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxhc2lkZSBpZD1cImNoYXJ0LXBlcmNlbnQte3sgdWlkIH19XCI+XG4gICAgICAgICAgICA8IS0tIENPTE9SRUQgRklMTCAtLT5cbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIi0xMCAtMTAgMjIwIDIyMFwiPlxuICAgICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTAwLDEwMClcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJmaWxsXCIgZD1cIk0gMCwtMTAwIEEgMTAwLDEwMCAwIDAsMSA4Ni42LC01MFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiZmlsbFwiIGQ9XCJNIDg2LjYsLTUwIEEgMTAwLDEwMCAwIDAsMSA4Ni42LDUwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJmaWxsXCIgZD1cIk0gODYuNiw1MCBBIDEwMCwxMDAgMCAwLDEgMCwxMDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImZpbGxcIiBkPVwiTSAwLDEwMCBBIDEwMCwxMDAgMCAwLDEgLTg2LjYsNTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImZpbGxcIiBkPVwiTSAtODYuNiw1MCBBIDEwMCwxMDAgMCAwLDEgLTg2LjYsLTUwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJmaWxsXCIgZD1cIk0gLTg2LjYsLTUwIEEgMTAwLDEwMCAwIDAsMSAwLC0xMDBcIiAvPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPCEtLSBHUkVZIEJFWkVMIC0tPlxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiLTEwIC0xMCAyMjAgMjIwXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJjaGFydC1maWxsLXt7dWlkfX1cIiBkPVwiTTIwMCwxMDAgQzIwMCw0NC43NzE1MjUgMTU1LjIyODQ3NSwwIDEwMCwwIEM0NC43NzE1MjUsMCAwLDQ0Ljc3MTUyNSAwLDEwMCBDMCwxNTUuMjI4NDc1IDQ0Ljc3MTUyNSwyMDAgMTAwLDIwMCBDMTU1LjIyODQ3NSwyMDAgMjAwLDE1NS4yMjg0NzUgMjAwLDEwMCBaXCI+PC9wYXRoPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkRG9udXRDaGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIC8vIEdlb21ldHJpYyBudW1iZXIgdGhhdCByZXByZXNlbnRzIDEwMCUgb2YgdGhlIGNoYXJ0IGFyZWFcbiAgICAgICAgdGhpcy5jaGFydEZpbGxNYXggPSA2Mjk7XG4gICAgICAgIC8vIFVuaXF1ZSBJRCBmb3IgaW5zdGFuY2VcbiAgICAgICAgdGhpcy51aWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgICAgICAgLy8gUHJldmVudCBDb2xsaXNpb25cbiAgICAgICAgdGhpcy5pc0NoYXJ0RHJhd2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNDaGFydERyYXdpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2hhcnREcmF3aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdDaGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmNvbG9yIHx8ICcjNjYyMjU1JztcbiAgICB9XG5cbiAgICBkcmF3Q2hhcnQoKSB7XG4gICAgICAgIHRoaXMuaXNDaGFydERyYXdpbmcgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBjaGFydENvbnRhaW5lciA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjaGFydC1wZXJjZW50LSR7dGhpcy51aWR9YCk7XG4gICAgICAgICAgICBsZXQgZmlsbEVsZW1lbnRzID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbGwnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsbEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZmlsbEVsZW1lbnRzW2ldLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgZmlsbCBhbW91bnRcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjaGFydC1maWxsLSR7dGhpcy51aWR9YCkuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaG9mZnNldCcsICh0aGlzLmNoYXJ0RmlsbE1heCAqIHRoaXMudmFsdWUpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgLy8gU2V0IFRleHQgQ29sb3JcbiAgICAgICAgICAgIGNoYXJ0Q29udGFpbmVyLnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIC8vIFNldCBwZXJjZW50YWdlIGZvciBjaGFydFxuICAgICAgICAgICAgY2hhcnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBlcmNlbnQnLCBgJHsoTWF0aC5yb3VuZCh0aGlzLnZhbHVlICogMTAwKSkudG9TdHJpbmcoKX0lYCk7XG4gICAgICAgICAgICAvLyBTZXQgTGFiZWxcbiAgICAgICAgICAgIGNoYXJ0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgdGhpcy5sYWJlbCk7XG4gICAgICAgICAgICB0aGlzLmlzQ2hhcnREcmF3aW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CardTimeline = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(2);
	
	var _common = __webpack_require__(8);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CardTimeline = exports.CardTimeline = (_dec = (0, _core.Component)({
	    selector: 'novo-card-timeline',
	    inputs: ['start', 'end', 'created'],
	    template: '\n        <div class="timeline-container">\n            <div class="timeline-background">\n                <div class="timeline" [style.width]="length + \'%\'" [style.margin-left]="offset + \'%\'" data-automation-id="timeline">\n                    <div class="first annotate" [class.one]="start == end" [class.reverse]="start != end && ((end - start) < 3 || length < 22)" [class.overlap]="length < 22" data-automation-id="timeline-first">{{start}}</div>\n                    <div class="last annotate" *ngIf="start != end" [class.reverse]="(end - start) < 3 && end != now && length >= 22" [class.smoosh]="length < 22" data-automation-id="timeline-last">{{end}}</div>\n                    <div class="hidden-width" data-automation-id="timeline-hidden">{{length}}</div>\n                </div>\n            </div>\n        </div>\n    ',
	    directives: [_common.CORE_DIRECTIVES]
	}), _dec(_class = function () {
	    function CardTimeline() {
	        _classCallCheck(this, CardTimeline);
	
	        this.now = new Date().getFullYear();
	    }
	
	    _createClass(CardTimeline, [{
	        key: 'ngOnChanges',
	        value: function ngOnChanges() {
	            this.length = (this.end - this.start) / (this.now - this.created) * 100;
	            this.offset = (this.start - this.created) * (100 / (this.now - this.created));
	        }
	    }]);
	
	    return CardTimeline;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9jYXJkL2V4dHJhcy90aW1lbGluZS9DYXJkVGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztJQXNCYSxZLFdBQUEsWSxXQXBCWixxQkFBVTtBQUNQLGNBQVUsb0JBREg7QUFFUCxZQUFRLENBQ0osT0FESSxFQUVKLEtBRkksRUFHSixTQUhJLENBRkQ7QUFPUCxrMUJBUE87QUFrQlAsZ0JBQVk7QUFsQkwsQ0FBVixDO0FBcUJHLDRCQUFjO0FBQUE7O0FBQ1YsYUFBSyxHQUFMLEdBQVcsSUFBSSxJQUFKLEdBQVcsV0FBWCxFQUFYO0FBQ0g7Ozs7c0NBRWE7QUFDVixpQkFBSyxNQUFMLEdBQWUsQ0FBQyxLQUFLLEdBQUwsR0FBVyxLQUFLLEtBQWpCLEtBQTJCLEtBQUssR0FBTCxHQUFXLEtBQUssT0FBM0MsQ0FBRCxHQUF3RCxHQUF0RTtBQUNBLGlCQUFLLE1BQUwsR0FBZSxDQUFDLEtBQUssS0FBTCxHQUFhLEtBQUssT0FBbkIsS0FBK0IsT0FBTyxLQUFLLEdBQUwsR0FBVyxLQUFLLE9BQXZCLENBQS9CLENBQWY7QUFDSCIsImZpbGUiOiJDYXJkVGltZWxpbmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tY2FyZC10aW1lbGluZScsXG4gICAgaW5wdXRzOiBbXG4gICAgICAgICdzdGFydCcsXG4gICAgICAgICdlbmQnLFxuICAgICAgICAnY3JlYXRlZCdcbiAgICBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lXCIgW3N0eWxlLndpZHRoXT1cImxlbmd0aCArICclJ1wiIFtzdHlsZS5tYXJnaW4tbGVmdF09XCJvZmZzZXQgKyAnJSdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJ0aW1lbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3QgYW5ub3RhdGVcIiBbY2xhc3Mub25lXT1cInN0YXJ0ID09IGVuZFwiIFtjbGFzcy5yZXZlcnNlXT1cInN0YXJ0ICE9IGVuZCAmJiAoKGVuZCAtIHN0YXJ0KSA8IDMgfHwgbGVuZ3RoIDwgMjIpXCIgW2NsYXNzLm92ZXJsYXBdPVwibGVuZ3RoIDwgMjJcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJ0aW1lbGluZS1maXJzdFwiPnt7c3RhcnR9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFzdCBhbm5vdGF0ZVwiICpuZ0lmPVwic3RhcnQgIT0gZW5kXCIgW2NsYXNzLnJldmVyc2VdPVwiKGVuZCAtIHN0YXJ0KSA8IDMgJiYgZW5kICE9IG5vdyAmJiBsZW5ndGggPj0gMjJcIiBbY2xhc3Muc21vb3NoXT1cImxlbmd0aCA8IDIyXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwidGltZWxpbmUtbGFzdFwiPnt7ZW5kfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpZGRlbi13aWR0aFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInRpbWVsaW5lLWhpZGRlblwiPnt7bGVuZ3RofX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIENhcmRUaW1lbGluZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubm93ID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9ICgodGhpcy5lbmQgLSB0aGlzLnN0YXJ0KSAvICh0aGlzLm5vdyAtIHRoaXMuY3JlYXRlZCkpICogMTAwO1xuICAgICAgICB0aGlzLm9mZnNldCA9ICgodGhpcy5zdGFydCAtIHRoaXMuY3JlYXRlZCkgKiAoMTAwIC8gKHRoaXMubm93IC0gdGhpcy5jcmVhdGVkKSkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Drawer = __webpack_require__(219);
	
	Object.defineProperty(exports, 'NOVO_DRAWER_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Drawer.NOVO_DRAWER_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9kcmF3ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7bUJBQVMsb0IiLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9iaC9ub3ZvL2FwcHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IE5PVk9fRFJBV0VSX0VMRU1FTlRTIH0gZnJvbSAnLi9kcmF3ZXIvRHJhd2VyJztcbiJdfQ==

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_ELEMENTS = undefined;
	
	var _button = __webpack_require__(113);
	
	Object.keys(_button).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _button[key];
	        }
	    });
	});
	
	var _tabs = __webpack_require__(225);
	
	Object.keys(_tabs).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _tabs[key];
	        }
	    });
	});
	
	var _toast = __webpack_require__(227);
	
	Object.keys(_toast).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _toast[key];
	        }
	    });
	});
	
	var _switch = __webpack_require__(223);
	
	Object.keys(_switch).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _switch[key];
	        }
	    });
	});
	
	var _card = __webpack_require__(212);
	
	Object.keys(_card).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _card[key];
	        }
	    });
	});
	
	var _loading = __webpack_require__(114);
	
	Object.keys(_loading).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _loading[key];
	        }
	    });
	});
	
	var _select = __webpack_require__(221);
	
	Object.keys(_select).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _select[key];
	        }
	    });
	});
	
	var _tooltip = __webpack_require__(230);
	
	Object.keys(_tooltip).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _tooltip[key];
	        }
	    });
	});
	
	var _drawer = __webpack_require__(218);
	
	Object.keys(_drawer).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _drawer[key];
	        }
	    });
	});
	
	var _Plural = __webpack_require__(232);
	
	Object.keys(_Plural).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _Plural[key];
	        }
	    });
	});
	
	var _OutsideClick = __webpack_require__(115);
	
	Object.keys(_OutsideClick).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _OutsideClick[key];
	        }
	    });
	});
	
	var _KeyCodes = __webpack_require__(68);
	
	Object.keys(_KeyCodes).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _KeyCodes[key];
	        }
	    });
	});
	
	var _Deferred = __webpack_require__(233);
	
	Object.keys(_Deferred).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _Deferred[key];
	        }
	    });
	});
	
	
	// Pipes
	var NOVO_ELEMENTS = exports.NOVO_ELEMENTS = [_button.NOVO_BUTTON_ELEMENTS, _tabs.NOVO_TAB_ELEMENTS, _toast.NOVO_TOAST_ELEMENTS, _switch.NOVO_SWITCH_ELEMENTS, _card.NOVO_CARD_ELEMENTS, _card.NOVO_CARD_EXTRA_ELEMENTS, _loading.NOVO_LOADING_ELEMENTS, _select.NOVO_SELECT_ELEMENTS, _tooltip.NOVO_TOOLTIP_ELEMENTS, _drawer.NOVO_DRAWER_ELEMENTS];
	
	// Utils
	
	
	// Elements
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9ub3ZvLWVsZW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVkE7O0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVZBOztBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFWQTs7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVkE7O0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVZBOztBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFSQTs7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBWEE7O0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVhBOztBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUVPLElBQU0sd0NBQWdCLHVTQUF0QiIsImZpbGUiOiJub3ZvLWVsZW1lbnRzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9iaC9ub3ZvL2FwcHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5PVk9fQlVUVE9OX0VMRU1FTlRTIH0gZnJvbSAnLi9lbGVtZW50cy9idXR0b24nO1xuaW1wb3J0IHsgTk9WT19UQUJfRUxFTUVOVFMgfSBmcm9tICcuL2VsZW1lbnRzL3RhYnMnO1xuaW1wb3J0IHsgTk9WT19UT0FTVF9FTEVNRU5UUyB9IGZyb20gJy4vZWxlbWVudHMvdG9hc3QnO1xuaW1wb3J0IHsgTk9WT19TV0lUQ0hfRUxFTUVOVFMgfSBmcm9tICcuL2VsZW1lbnRzL3N3aXRjaCc7XG5pbXBvcnQgeyBOT1ZPX0NBUkRfRUxFTUVOVFMsIE5PVk9fQ0FSRF9FWFRSQV9FTEVNRU5UUyB9IGZyb20gJy4vZWxlbWVudHMvY2FyZCc7XG5pbXBvcnQgeyBOT1ZPX0xPQURJTkdfRUxFTUVOVFMgfSBmcm9tICcuL2VsZW1lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IHsgTk9WT19UT09MVElQX0VMRU1FTlRTIH0gZnJvbSAnLi9lbGVtZW50cy90b29sdGlwJztcbmltcG9ydCB7IE5PVk9fRFJBV0VSX0VMRU1FTlRTIH0gZnJvbSAnLi9lbGVtZW50cy9kcmF3ZXInO1xuaW1wb3J0IHsgTk9WT19TRUxFQ1RfRUxFTUVOVFMgfSBmcm9tICcuL2VsZW1lbnRzL3NlbGVjdCc7XG5cbi8vIEVsZW1lbnRzXG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnRzL2J1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnRzL3RhYnMnO1xuZXhwb3J0ICogZnJvbSAnLi9lbGVtZW50cy90b2FzdCc7XG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnRzL3N3aXRjaCc7XG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnRzL2NhcmQnO1xuZXhwb3J0ICogZnJvbSAnLi9lbGVtZW50cy9sb2FkaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vZWxlbWVudHMvc2VsZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vZWxlbWVudHMvdG9vbHRpcCc7XG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnRzL2RyYXdlcic7XG5cbi8vIFBpcGVzXG5leHBvcnQgKiBmcm9tICcuL3BpcGVzL3BsdXJhbC9QbHVyYWwnO1xuXG4vLyBVdGlsc1xuZXhwb3J0ICogZnJvbSAnLi91dGlscy9vdXRzaWRlLWNsaWNrL091dHNpZGVDbGljayc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzL2RlZmVycmVkL0RlZmVycmVkJztcblxuZXhwb3J0IGNvbnN0IE5PVk9fRUxFTUVOVFMgPSBbXG4gICAgTk9WT19CVVRUT05fRUxFTUVOVFMsXG4gICAgTk9WT19UQUJfRUxFTUVOVFMsXG4gICAgTk9WT19UT0FTVF9FTEVNRU5UUyxcbiAgICBOT1ZPX1NXSVRDSF9FTEVNRU5UUyxcbiAgICBOT1ZPX0NBUkRfRUxFTUVOVFMsXG4gICAgTk9WT19DQVJEX0VYVFJBX0VMRU1FTlRTLFxuICAgIE5PVk9fTE9BRElOR19FTEVNRU5UUyxcbiAgICBOT1ZPX1NFTEVDVF9FTEVNRU5UUyxcbiAgICBOT1ZPX1RPT0xUSVBfRUxFTUVOVFMsXG4gICAgTk9WT19EUkFXRVJfRUxFTUVOVFNcbl07XG4iXX0=

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_LOADING_ELEMENTS = exports.Loading = undefined;
	
	var _dec, _class;
	
	var _core = __webpack_require__(2);
	
	var _common = __webpack_require__(8);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Loading = exports.Loading = (_dec = (0, _core.Component)({
	    selector: 'novo-loading',
	    inputs: ['theme', 'stage'],
	    template: '\n        <!--Circle-->\n        <div *ngIf="theme == \'circle\'" [class]="stage">\n            <div><dot [class]="stage"></dot></div>\n            <div><dot [class]="stage"></dot></div>\n            <div><dot [class]="stage"></dot></div>\n            <div><dot [class]="stage"></dot></div>\n            <div><dot [class]="stage"></dot></div>\n        </div>\n        <!--Line-->\n        <dot *ngIf="theme==\'line\'"></dot>\n        <dot *ngIf="theme==\'line\'"></dot>\n        <dot *ngIf="theme==\'line\'"></dot>\n        <dot *ngIf="theme==\'line\'"></dot>\n        <dot *ngIf="theme==\'line\'"></dot>\n    ',
	    directives: [_common.CORE_DIRECTIVES]
	}), _dec(_class = function Loading() {
	    _classCallCheck(this, Loading);
	
	    this.stage = '';
	}) || _class);
	var NOVO_LOADING_ELEMENTS = exports.NOVO_LOADING_ELEMENTS = [Loading];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9sb2FkaW5nL0xvYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUE0QmEsTyxXQUFBLE8sV0ExQloscUJBQVU7QUFDUCxjQUFVLGNBREg7QUFFUCxZQUFRLENBQ0osT0FESSxFQUVKLE9BRkksQ0FGRDtBQU1QLGtuQkFOTztBQXNCUCxnQkFBWTtBQXRCTCxDQUFWLEMsZ0JBMkJHLG1CQUFjO0FBQUE7O0FBQ1YsU0FBSyxLQUFMLEdBQWEsRUFBYjtBQUNILEM7QUFHRSxJQUFNLHdEQUF3QixDQUFDLE9BQUQsQ0FBOUIiLCJmaWxlIjoiTG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm92by1sb2FkaW5nJyxcbiAgICBpbnB1dHM6IFtcbiAgICAgICAgJ3RoZW1lJyxcbiAgICAgICAgJ3N0YWdlJ1xuICAgIF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPCEtLUNpcmNsZS0tPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwidGhlbWUgPT0gJ2NpcmNsZSdcIiBbY2xhc3NdPVwic3RhZ2VcIj5cbiAgICAgICAgICAgIDxkaXY+PGRvdCBbY2xhc3NdPVwic3RhZ2VcIj48L2RvdD48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PGRvdCBbY2xhc3NdPVwic3RhZ2VcIj48L2RvdD48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PGRvdCBbY2xhc3NdPVwic3RhZ2VcIj48L2RvdD48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PGRvdCBbY2xhc3NdPVwic3RhZ2VcIj48L2RvdD48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PGRvdCBbY2xhc3NdPVwic3RhZ2VcIj48L2RvdD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS1MaW5lLS0+XG4gICAgICAgIDxkb3QgKm5nSWY9XCJ0aGVtZT09J2xpbmUnXCI+PC9kb3Q+XG4gICAgICAgIDxkb3QgKm5nSWY9XCJ0aGVtZT09J2xpbmUnXCI+PC9kb3Q+XG4gICAgICAgIDxkb3QgKm5nSWY9XCJ0aGVtZT09J2xpbmUnXCI+PC9kb3Q+XG4gICAgICAgIDxkb3QgKm5nSWY9XCJ0aGVtZT09J2xpbmUnXCI+PC9kb3Q+XG4gICAgICAgIDxkb3QgKm5nSWY9XCJ0aGVtZT09J2xpbmUnXCI+PC9kb3Q+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIENPUkVfRElSRUNUSVZFU1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RhZ2UgPSAnJztcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBOT1ZPX0xPQURJTkdfRUxFTUVOVFMgPSBbTG9hZGluZ107XG4iXX0=

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Select = __webpack_require__(222);
	
	Object.defineProperty(exports, 'NOVO_SELECT_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Select.NOVO_SELECT_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9zZWxlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7bUJBQVMsb0IiLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9iaC9ub3ZvL2FwcHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IE5PVk9fU0VMRUNUX0VMRU1FTlRTIH0gZnJvbSAnLi9zZWxlY3QvU2VsZWN0JztcbiJdfQ==

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_SELECT_ELEMENTS = exports.Select = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _dec2, _class;
	
	var _core = __webpack_require__(2);
	
	var _common = __webpack_require__(8);
	
	var _OutsideClick2 = __webpack_require__(115);
	
	var _KeyCodes = __webpack_require__(68);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Select = exports.Select = (_dec = (0, _core.Component)({
	    selector: 'novo-select',
	    directives: [_common.COMMON_DIRECTIVES],
	    inputs: ['options', 'placeholder', 'readonly'],
	    template: '\n        <button (click)="toggleActive($event)" tabIndex="-1" type="button" [ngClass]="{empty: empty}">{{selected.label}}<i class="bhi-collapse"></i></button>\n        <ul class="novo-select-list" tabIndex="-1">\n            <ng-content></ng-content>\n            <li *ngFor="#option of options; #i = index" [ngClass]="{active: option.active}" (click)="onClickOption(option, i)" [attr.data-automation-value]="option.label">\n              <span>{{option.label}}</span>\n              <i *ngIf="option.active" class="bhi-check"></i>\n            </li>\n        </ul>\n    ',
	    host: {
	        '(keydown)': 'onKeyDown($event)',
	        '[class.active]': 'active',
	        '[class.ng-untouched]': 'model.control?.untouched == true',
	        '[class.ng-touched]': 'model.control?.touched == true',
	        '[class.ng-pristine]': 'model.control?.pristine == true',
	        '[class.ng-dirty]': 'model.control?.dirty == true',
	        '[class.ng-valid]': 'model.control?.valid == true',
	        '[class.ng-invalid]': 'model.control?.valid == false'
	    }
	}), _dec2 = Reflect.metadata('parameters', [[new _core.OptionalMetadata()]]), _dec(_class = _dec2(_class = function (_OutsideClick) {
	    _inherits(Select, _OutsideClick);
	
	    function Select(model, element) {
	        _classCallCheck(this, Select);
	
	        // Defaults
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, element));
	
	        _this.selectedIndex = -1;
	        _this.placeholder = 'Select...';
	        _this.empty = true;
	        _this.value = null;
	
	        _this.onChange = null;
	        _this.onTouched = null;
	        _this.onHover = new _core.EventEmitter(false);
	        _this.onLeave = new _core.EventEmitter(false);
	
	        _this.model = model || new _common.NgModel();
	        _this.model.valueAccessor = _this;
	        return _this;
	    }
	
	    _createClass(Select, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.ngOnChanges();
	        }
	    }, {
	        key: 'ngOnChanges',
	        value: function ngOnChanges() {
	            this.readonly = this.readonly === true;
	            if (this.options && this.options.length && typeof this.options[0] === 'string') {
	                this.options = this.options.map(function (item) {
	                    return { value: item, label: item }; //esfmt-ignore-line
	                });
	            }
	
	            if (!this.model.value) {
	                this.clear();
	            }
	        }
	    }, {
	        key: 'onClickOption',
	        value: function onClickOption(option, i) {
	            this.select(option, i);
	            this.toggleActive();
	        }
	    }, {
	        key: 'select',
	        value: function select(option, i) {
	            this.selected.active = false;
	            this.selectedIndex = i;
	            this.selected = option;
	            this.selected.active = true;
	            this.empty = false;
	            this.model.viewToModelUpdate(this.selected.value);
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.selected = {
	                label: this.placeholder,
	                value: null,
	                active: false
	            };
	            this.selectedIndex = -1;
	            this.empty = true;
	        }
	
	        // TODO: Add key listener to jump to options starting with that letter.
	
	    }, {
	        key: 'onKeyDown',
	        value: function onKeyDown(event) {
	            if (this.active) {
	                // Prevent Scrolling
	                event.preventDefault();
	                // Close popup on escape key
	                if (event.keyCode === _KeyCodes.KeyCodes.ESC) {
	                    this.toggleActive();
	                    return;
	                }
	                if (event.keyCode === _KeyCodes.KeyCodes.ENTER) {
	                    this.select(this.options[this.selectedIndex], this.selectedIndex);
	                    this.toggleActive();
	                    return;
	                }
	
	                if (event.keyCode === _KeyCodes.KeyCodes.UP && this.selectedIndex > 0) {
	                    this.selectedIndex--;
	                    this.select(this.options[this.selectedIndex], this.selectedIndex);
	                    this.scrollToSelected();
	                } else if (event.keyCode === _KeyCodes.KeyCodes.DOWN && this.selectedIndex < this.options.length - 1) {
	                    this.selectedIndex++;
	                    this.select(this.options[this.selectedIndex], this.selectedIndex);
	                    this.scrollToSelected();
	                } else if (event.keyCode >= 65 && event.keyCode <= 90) {
	                    var char = String.fromCharCode(event.keyCode);
	                    var element = this.element.nativeElement;
	                    var list = element.querySelector('.novo-select-list');
	                    var item = element.querySelector('[data-automation-value^=' + char + ']');
	                    if (item) {
	                        list.scrollTop = item.offsetTop;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'scrollToSelected',
	        value: function scrollToSelected() {
	            var element = this.element.nativeElement;
	            var list = element.querySelector('.novo-select-list');
	            list.scrollTop = 48 * (this.selectedIndex - 1);
	        }
	
	        //valueAccessor Functions
	
	    }, {
	        key: 'writeValue',
	        value: function writeValue(value) {
	            this.value = value;
	            var item = this.options.find(function (i) {
	                return i.value === value;
	            });
	            if (item) {
	                this.empty = false;
	                this.selected = item;
	                this.selected.active = true;
	                this.selectedIndex = this.options.indexOf(item);
	            } else {
	                this.clear();
	            }
	        }
	    }, {
	        key: 'registerOnChange',
	        value: function registerOnChange(fn) {
	            this.onChange = fn;
	        }
	    }, {
	        key: 'registerOnTouched',
	        value: function registerOnTouched(fn) {
	            this.onTouched = fn;
	        }
	    }]);
	
	    return Select;
	}(_OutsideClick2.OutsideClick)) || _class) || _class);
	Reflect.defineMetadata('design:paramtypes', [_common.NgControl, _core.ElementRef], Select);
	var NOVO_SELECT_ELEMENTS = exports.NOVO_SELECT_ELEMENTS = [Select];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9zZWxlY3QvU2VsZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBNEJhLE0sV0FBQSxNLFdBMUJaLHFCQUFVO0FBQ1AsY0FBVSxhQURIO0FBRVAsZ0JBQVksMkJBRkw7QUFHUCxZQUFRLENBQUMsU0FBRCxFQUFZLGFBQVosRUFBMkIsVUFBM0IsQ0FIRDtBQUlQLDRrQkFKTztBQWNQLFVBQU07QUFDRixxQkFBYSxtQkFEWDtBQUVGLDBCQUFrQixRQUZoQjtBQUdGLGdDQUF3QixrQ0FIdEI7QUFJRiw4QkFBc0IsZ0NBSnBCO0FBS0YsK0JBQXVCLGlDQUxyQjtBQU1GLDRCQUFvQiw4QkFObEI7QUFPRiw0QkFBb0IsOEJBUGxCO0FBUUYsOEJBQXNCO0FBUnBCO0FBZEMsQ0FBVixDLFVBeUJBLFFBQVEsUUFBUixDQUFpQixZQUFqQixFQUErQixDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUEvQixDOzs7QUFFRyxvQkFBWSxLQUFaLEVBQTZCLE9BQTdCLEVBQWlEO0FBQUE7Ozs7QUFBQSw4RkFDdkMsT0FEdUM7O0FBRzdDLGNBQUssYUFBTCxHQUFxQixDQUFDLENBQXRCO0FBQ0EsY0FBSyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0EsY0FBSyxLQUFMLEdBQWEsSUFBYjtBQUNBLGNBQUssS0FBTCxHQUFhLElBQWI7O0FBRUEsY0FBSyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsY0FBSyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsY0FBSyxPQUFMLEdBQWUsdUJBQWlCLEtBQWpCLENBQWY7QUFDQSxjQUFLLE9BQUwsR0FBZSx1QkFBaUIsS0FBakIsQ0FBZjs7QUFFQSxjQUFLLEtBQUwsR0FBYSxTQUFTLHFCQUF0QjtBQUNBLGNBQUssS0FBTCxDQUFXLGFBQVg7QUFkNkM7QUFlaEQ7Ozs7bUNBRVU7QUFDUCxpQkFBSyxXQUFMO0FBQ0g7OztzQ0FFYTtBQUNWLGlCQUFLLFFBQUws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OzJDQUVrQjtBQUNmLGdCQUFJLFVBQVUsS0FBSyxPQUFMLENBQWEsYUFBM0I7QUFDQSxnQkFBSSxPQUFPLFFBQVEsYUFBUixDQUFzQixtQkFBdEIsQ0FBWDtBQUNBLGlCQUFLLFNBQUwsR0FBaUIsTUFBTSxLQUFLLGFBQUwsR0FBcUIsQ0FBM0IsQ0FBakI7QUFDSDs7Ozs7O21DQUdVLEssRUFBTztBQUNkLGlCQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsZ0JBQUksT0FBTyxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCO0FBQUEsdUJBQUssRUFBRSxLQUFGLEtBQVksS0FBakI7QUFBQSxhQUFsQixDQUFYO0FBQ0EsZ0JBQUksSUFBSixFQUFVO0FBQ04scUJBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxxQkFBSyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EscUJBQUssUUFBTCxDQUFjLE1BQWQsR0FBdUIsSUFBdkI7QUFDQSxxQkFBSyxhQUFMLEdBQXFCLEtBQUssT0FBTCxDQUFhLE9BQWIsQ0FBcUIsSUFBckIsQ0FBckI7QUFDSCxhQUxELE1BS087QUFDSCxxQkFBSyxLQUFMO0FBQ0g7QUFDSjs7O3lDQUVnQixFLEVBQUk7QUFDakIsaUJBQUssUUFBTCxHQUFnQixFQUFoQjtBQUNIOzs7MENBRWlCLEUsRUFBSTtBQUNsQixpQkFBSyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0g7Ozs7O21GQXpIUSxNO0FBNEhOLElBQU0sc0RBQXVCLENBQUMsTUFBRCxDQUE3QiIsImZpbGUiOiJTZWxlY3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9wdGlvbmFsTWV0YWRhdGEgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IENPTU1PTl9ESVJFQ1RJVkVTLCBOZ0NvbnRyb2wsIE5nTW9kZWwgfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHsgT3V0c2lkZUNsaWNrIH0gZnJvbSAnLi8uLi8uLi91dGlscy9vdXRzaWRlLWNsaWNrL091dHNpZGVDbGljayc7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gJy4vLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdub3ZvLXNlbGVjdCcsXG4gICAgZGlyZWN0aXZlczogW0NPTU1PTl9ESVJFQ1RJVkVTXSxcbiAgICBpbnB1dHM6IFsnb3B0aW9ucycsICdwbGFjZWhvbGRlcicsICdyZWFkb25seSddLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZUFjdGl2ZSgkZXZlbnQpXCIgdGFiSW5kZXg9XCItMVwiIHR5cGU9XCJidXR0b25cIiBbbmdDbGFzc109XCJ7ZW1wdHk6IGVtcHR5fVwiPnt7c2VsZWN0ZWQubGFiZWx9fTxpIGNsYXNzPVwiYmhpLWNvbGxhcHNlXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8dWwgY2xhc3M9XCJub3ZvLXNlbGVjdC1saXN0XCIgdGFiSW5kZXg9XCItMVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cIiNvcHRpb24gb2Ygb3B0aW9uczsgI2kgPSBpbmRleFwiIFtuZ0NsYXNzXT1cInthY3RpdmU6IG9wdGlvbi5hY3RpdmV9XCIgKGNsaWNrKT1cIm9uQ2xpY2tPcHRpb24ob3B0aW9uLCBpKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi12YWx1ZV09XCJvcHRpb24ubGFiZWxcIj5cbiAgICAgICAgICAgICAgPHNwYW4+e3tvcHRpb24ubGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGkgKm5nSWY9XCJvcHRpb24uYWN0aXZlXCIgY2xhc3M9XCJiaGktY2hlY2tcIj48L2k+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIGAsXG4gICAgaG9zdDoge1xuICAgICAgICAnKGtleWRvd24pJzogJ29uS2V5RG93bigkZXZlbnQpJyxcbiAgICAgICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gICAgICAgICdbY2xhc3MubmctdW50b3VjaGVkXSc6ICdtb2RlbC5jb250cm9sPy51bnRvdWNoZWQgPT0gdHJ1ZScsXG4gICAgICAgICdbY2xhc3MubmctdG91Y2hlZF0nOiAnbW9kZWwuY29udHJvbD8udG91Y2hlZCA9PSB0cnVlJyxcbiAgICAgICAgJ1tjbGFzcy5uZy1wcmlzdGluZV0nOiAnbW9kZWwuY29udHJvbD8ucHJpc3RpbmUgPT0gdHJ1ZScsXG4gICAgICAgICdbY2xhc3MubmctZGlydHldJzogJ21vZGVsLmNvbnRyb2w/LmRpcnR5ID09IHRydWUnLFxuICAgICAgICAnW2NsYXNzLm5nLXZhbGlkXSc6ICdtb2RlbC5jb250cm9sPy52YWxpZCA9PSB0cnVlJyxcbiAgICAgICAgJ1tjbGFzcy5uZy1pbnZhbGlkXSc6ICdtb2RlbC5jb250cm9sPy52YWxpZCA9PSBmYWxzZSdcbiAgICB9XG59KVxuQFJlZmxlY3QubWV0YWRhdGEoJ3BhcmFtZXRlcnMnLCBbW25ldyBPcHRpb25hbE1ldGFkYXRhKCldXSlcbmV4cG9ydCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBPdXRzaWRlQ2xpY2sge1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsOk5nQ29udHJvbCwgZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZWZhdWx0c1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9ICdTZWxlY3QuLi4nO1xuICAgICAgICB0aGlzLmVtcHR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IG51bGw7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbkhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG4gICAgICAgIHRoaXMub25MZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbCB8fCBuZXcgTmdNb2RlbCgpO1xuICAgICAgICB0aGlzLm1vZGVsLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMucmVhZG9ubHkgPSB0aGlzLnJlYWRvbmx5ID09PSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5sZW5ndGggJiYgdHlwZW9mIHRoaXMub3B0aW9uc1swXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogaXRlbSwgbGFiZWw6IGl0ZW0gfTsgLy9lc2ZtdC1pZ25vcmUtbGluZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMubW9kZWwudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2tPcHRpb24ob3B0aW9uLCBpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KG9wdGlvbiwgaSk7XG4gICAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0KG9wdGlvbiwgaSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gb3B0aW9uO1xuICAgICAgICB0aGlzLnNlbGVjdGVkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb2RlbC52aWV3VG9Nb2RlbFVwZGF0ZSh0aGlzLnNlbGVjdGVkLnZhbHVlKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHtcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLmVtcHR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBBZGQga2V5IGxpc3RlbmVyIHRvIGp1bXAgdG8gb3B0aW9ucyBzdGFydGluZyB3aXRoIHRoYXQgbGV0dGVyLlxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgU2Nyb2xsaW5nXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gQ2xvc2UgcG9wdXAgb24gZXNjYXBlIGtleVxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVTQykge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5vcHRpb25zW3RoaXMuc2VsZWN0ZWRJbmRleF0sIHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVBY3RpdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5VUCAmJiB0aGlzLnNlbGVjdGVkSW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4LS07XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5vcHRpb25zW3RoaXMuc2VsZWN0ZWRJbmRleF0sIHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkRPV04gJiYgdGhpcy5zZWxlY3RlZEluZGV4IDwgdGhpcy5vcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXgrKztcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLm9wdGlvbnNbdGhpcy5zZWxlY3RlZEluZGV4XSwgdGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA+PSA2NSAmJiBldmVudC5rZXlDb2RlIDw9IDkwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmtleUNvZGUpO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3ZvLXNlbGVjdC1saXN0Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWF1dG9tYXRpb24tdmFsdWVePSR7Y2hhcn1dYCk7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5zY3JvbGxUb3AgPSBpdGVtLm9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxUb1NlbGVjdGVkKCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBsZXQgbGlzdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5vdm8tc2VsZWN0LWxpc3QnKTtcbiAgICAgICAgbGlzdC5zY3JvbGxUb3AgPSA0OCAqICh0aGlzLnNlbGVjdGVkSW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICAvL3ZhbHVlQWNjZXNzb3IgRnVuY3Rpb25zXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5vcHRpb25zLmZpbmQoaSA9PiBpLnZhbHVlID09PSB2YWx1ZSk7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLmVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gaXRlbTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMub3B0aW9ucy5pbmRleE9mKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBOT1ZPX1NFTEVDVF9FTEVNRU5UUyA9IFtTZWxlY3RdO1xuIl19

/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switch = __webpack_require__(224);
	
	Object.defineProperty(exports, 'NOVO_SWITCH_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Switch.NOVO_SWITCH_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9zd2l0Y2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7bUJBQVMsb0IiLCJmaWxlIjoic3dpdGNoLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9iaC9ub3ZvL2FwcHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IE5PVk9fU1dJVENIX0VMRU1FTlRTIH0gZnJvbSAnLi9zd2l0Y2gvU3dpdGNoJztcbiJdfQ==

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_SWITCH_ELEMENTS = exports.NovoSwitch = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(2);
	
	var _KeyCodes = __webpack_require__(68);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NovoSwitch = exports.NovoSwitch = (_dec = (0, _core.Component)({
	    selector: 'novo-switch',
	    inputs: ['checked', 'disabled'],
	    outputs: ['onChange'],
	    host: {
	        'role': 'checkbox',
	        '[attr.aria-checked]': 'checked',
	        '[attr.aria-disabled]': '_disabled',
	        '(keydown)': 'onKeydown($event)'
	    },
	    directives: [],
	    encapsulation: _core.ViewEncapsulation.None,
	    template: '\n        <div (click)="toggle($event)">\n            <div class="novo-switch-container">\n                <div class="novo-switch-bar"></div>\n                <div class="novo-switch-thumb-container">\n                    <div class="novo-switch-thumb"></div>\n                </div>\n            </div>\n            <div class="novo-switch-label"><ng-content></ng-content></div>\n        </div>\n    '
	}), _dec(_class = function () {
	    function NovoSwitch() {
	        _classCallCheck(this, NovoSwitch);
	
	        this.checked = false;
	        this._disabled = false;
	        this.onChange = new _core.EventEmitter();
	    }
	
	    _createClass(NovoSwitch, [{
	        key: 'onKeydown',
	        value: function onKeydown(event) {
	            if (event.keyCode === _KeyCodes.KeyCodes.SPACE) {
	                event.preventDefault();
	                this.toggle(event);
	            }
	        }
	    }, {
	        key: 'toggle',
	        value: function toggle(event) {
	            if (event) {
	                event.stopPropagation();
	                event.preventDefault();
	            }
	            if (this.disabled) {
	                return;
	            }
	
	            this.checked = !this.checked;
	            this.onChange.next(this.checked);
	        }
	    }, {
	        key: 'disabled',
	        get: function get() {
	            return this._disabled;
	        },
	        set: function set(value) {
	            this._disabled = !value;
	        }
	    }]);
	
	    return NovoSwitch;
	}()) || _class);
	var NOVO_SWITCH_ELEMENTS = exports.NOVO_SWITCH_ELEMENTS = [NovoSwitch];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy9zd2l0Y2gvU3dpdGNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7SUEwQmEsVSxXQUFBLFUsV0F4QloscUJBQVU7QUFDUCxjQUFVLGFBREg7QUFFUCxZQUFRLENBQUMsU0FBRCxFQUFZLFVBQVosQ0FGRDtBQUdQLGFBQVMsQ0FBQyxVQUFELENBSEY7QUFJUCxVQUFNO0FBQ0YsZ0JBQVEsVUFETjtBQUVGLCtCQUF1QixTQUZyQjtBQUdGLGdDQUF3QixXQUh0QjtBQUlGLHFCQUFhO0FBSlgsS0FKQztBQVVQLGdCQUFZLEVBVkw7QUFXUCxtQkFBZSx3QkFBa0IsSUFYMUI7QUFZUDtBQVpPLENBQVYsQztBQXlCRywwQkFBYztBQUFBOztBQUNWLGFBQUssT0FBTCxHQUFlLEtBQWY7QUFDQSxhQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxhQUFLLFFBQUwsR0FBZ0Isd0JBQWhCO0FBQ0g7Ozs7a0NBVVMsSyxFQUFPO0FBQ2IsZ0JBQUksTUFBTSxPQUFOLEtBQWtCLG1CQUFTLEtBQS9CLEVBQXNDO0FBQ2xDLHNCQUFNLGNBQU47QUFDQSxxQkFBSyxNQUFMLENBQVksS0FBWjtBQUNIO0FBQ0o7OzsrQkFFTSxLLEVBQU87QUFDVixnQkFBSSxLQUFKLEVBQVc7QUFDUCxzQkFBTSxlQUFOO0FBQ0Esc0JBQU0sY0FBTjtBQUNIO0FBQ0QsZ0JBQUksS0FBSyxRQUFULEVBQW1CO0FBQ2Y7QUFDSDs7QUFFRCxpQkFBSyxPQUFMLEdBQWUsQ0FBQyxLQUFLLE9BQXJCO0FBQ0EsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBSyxPQUF4QjtBQUNIOzs7NEJBMUJjO0FBQ1gsbUJBQU8sS0FBSyxTQUFaO0FBQ0gsUzswQkFFWSxLLEVBQU87QUFDaEIsaUJBQUssU0FBTCxHQUFrQixDQUFDLEtBQW5CO0FBQ0g7Ozs7O0FBdUJFLElBQU0sc0RBQXVCLENBQUMsVUFBRCxDQUE3QiIsImZpbGUiOiJTd2l0Y2guanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tc3dpdGNoJyxcbiAgICBpbnB1dHM6IFsnY2hlY2tlZCcsICdkaXNhYmxlZCddLFxuICAgIG91dHB1dHM6IFsnb25DaGFuZ2UnXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdyb2xlJzogJ2NoZWNrYm94JyxcbiAgICAgICAgJ1thdHRyLmFyaWEtY2hlY2tlZF0nOiAnY2hlY2tlZCcsXG4gICAgICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdfZGlzYWJsZWQnLFxuICAgICAgICAnKGtleWRvd24pJzogJ29uS2V5ZG93bigkZXZlbnQpJ1xuICAgIH0sXG4gICAgZGlyZWN0aXZlczogW10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IChjbGljayk9XCJ0b2dnbGUoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tc3dpdGNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXN3aXRjaC1iYXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1zd2l0Y2gtdGh1bWItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXN3aXRjaC10aHVtYlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1zd2l0Y2gtbGFiZWxcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTm92b1N3aXRjaCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIH1cblxuICAgIGdldCBkaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICAgIH1cblxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9ICghdmFsdWUpO1xuICAgIH1cblxuICAgIG9uS2V5ZG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuU1BBQ0UpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgICAgIHRoaXMub25DaGFuZ2UubmV4dCh0aGlzLmNoZWNrZWQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5PVk9fU1dJVENIX0VMRU1FTlRTID0gW05vdm9Td2l0Y2hdO1xuIl19

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tabs = __webpack_require__(226);
	
	Object.defineProperty(exports, 'NOVO_TAB_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Tabs.NOVO_TAB_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90YWJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O2lCQUFTLGlCIiwiZmlsZSI6InRhYnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgTk9WT19UQUJfRUxFTUVOVFMgfSBmcm9tICcuL3RhYnMvVGFicyc7XG4iXX0=

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_TAB_ELEMENTS = exports.NovoNavHeader = exports.NovoNavContent = exports.NovoNavOutlet = exports.NovoTabLink = exports.NovoTabButton = exports.NovoTab = exports.NovoNav = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class, _dec2, _class2, _dec3, _class3, _dec4, _class4, _dec5, _class5, _dec6, _class6, _dec7, _class7;
	
	var _core = __webpack_require__(2);
	
	var _common = __webpack_require__(8);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NovoNav = exports.NovoNav = (_dec = (0, _core.Component)({
	    selector: 'novo-nav',
	    inputs: ['theme', 'direction', 'outlet', 'router'],
	    directives: [_common.CORE_DIRECTIVES],
	    template: '<ng-content></ng-content>'
	}), _dec(_class = function () {
	    function NovoNav() {
	        _classCallCheck(this, NovoNav);
	
	        this.items = [];
	        this.theme = '';
	        this.direction = '';
	    }
	
	    _createClass(NovoNav, [{
	        key: 'select',
	        value: function select(item) {
	            /**
	             * Deactivates other tab items
	             * @param items - deactivated items
	             */
	            function _deactivateAllItems(items) {
	                items.forEach(function (t) {
	                    if (t.active === true) {
	                        // t.deselected.next();
	                    }
	                    t.active = false;
	                });
	            }
	
	            _deactivateAllItems(this.items);
	            item.active = true;
	            if (this.outlet) {
	                this.outlet.show(this.items.indexOf(item));
	            }
	
	            // TODO - remove hack to make DOM rerender
	            var element = document.querySelector('novo-tab-link.active span.indicator');
	            if (element) {
	                element.style.opacity = 0.99;
	                setTimeout(function () {
	                    element.style.opacity = 1;
	                }, 10);
	            }
	            // item.selected.next();
	        }
	    }, {
	        key: 'add',
	        value: function add(item) {
	            if (this.items.length === 0) {
	                item.active = true;
	                // item.selected.next();
	            }
	            this.items.push(item);
	        }
	    }]);
	
	    return NovoNav;
	}()) || _class);
	var NovoTab = exports.NovoTab = (_dec2 = (0, _core.Component)({
	    selector: 'novo-tab',
	    inputs: ['active'],
	    directives: [_common.CORE_DIRECTIVES],
	    host: {
	        '(click)': 'select()',
	        '[class.active]': 'active'
	    },
	    template: '\n        <div class="novo-tab-link">\n            <ng-content></ng-content>\n        </div>\n        <span class="indicator"></span>\n  '
	}), _dec2(_class2 = function () {
	    function NovoTab(nav) {
	        _classCallCheck(this, NovoTab);
	
	        this.active = this.active || false;
	        this.nav = nav;
	        this.nav.add(this);
	    }
	
	    _createClass(NovoTab, [{
	        key: 'select',
	        value: function select() {
	            this.nav.select(this);
	        }
	    }]);
	
	    return NovoTab;
	}()) || _class2);
	Reflect.defineMetadata('design:paramtypes', [NovoNav], NovoTab);
	var NovoTabButton = exports.NovoTabButton = (_dec3 = (0, _core.Component)({
	    selector: 'novo-tab-button',
	    inputs: ['active'],
	    directives: [_common.CORE_DIRECTIVES],
	    host: {
	        '(click)': 'select()',
	        '[class.active]': 'active'
	    },
	    template: '\n            <ng-content></ng-content>\n  '
	}), _dec3(_class3 = function () {
	    function NovoTabButton(nav) {
	        _classCallCheck(this, NovoTabButton);
	
	        this.active = this.active || false;
	        this.nav = nav;
	        this.nav.add(this);
	    }
	
	    _createClass(NovoTabButton, [{
	        key: 'select',
	        value: function select() {
	            this.nav.select(this);
	        }
	    }]);
	
	    return NovoTabButton;
	}()) || _class3);
	Reflect.defineMetadata('design:paramtypes', [NovoNav], NovoTabButton);
	var NovoTabLink = exports.NovoTabLink = (_dec4 = (0, _core.Component)({
	    selector: 'novo-tab-link',
	    inputs: ['active'],
	    directives: [_common.CORE_DIRECTIVES],
	    host: {
	        '(click)': 'select()',
	        '[class.active]': 'active'
	    },
	    template: '\n        <div class="novo-tab-link">\n            <ng-content></ng-content>\n        </div>\n        <span class="indicator"></span>\n  '
	}), _dec4(_class4 = function () {
	    function NovoTabLink(nav) {
	        _classCallCheck(this, NovoTabLink);
	
	        this.active = this.active || false;
	        this.nav = nav;
	        this.nav.add(this);
	    }
	
	    _createClass(NovoTabLink, [{
	        key: 'select',
	        value: function select() {
	            this.nav.select(this);
	        }
	    }]);
	
	    return NovoTabLink;
	}()) || _class4);
	Reflect.defineMetadata('design:paramtypes', [NovoNav], NovoTabLink);
	var NovoNavOutlet = exports.NovoNavOutlet = (_dec5 = (0, _core.Component)({
	    selector: 'novo-nav-outlet',
	    directives: [_common.CORE_DIRECTIVES],
	    template: '\n        <ng-content></ng-content>\n  '
	}), _dec5(_class5 = function () {
	    function NovoNavOutlet() {
	        _classCallCheck(this, NovoNavOutlet);
	
	        this.items = [];
	    }
	
	    _createClass(NovoNavOutlet, [{
	        key: 'show',
	        value: function show(index) {
	            var item = this.items[index];
	            /**
	             * Deactivates other tab items
	             * @param items - deactivated items
	             */
	            function _deactivateAllItems(items) {
	                items.forEach(function (t) {
	                    if (t.active === true) {
	                        // t.deselected.next();
	                    }
	                    t.active = false;
	                });
	            }
	
	            _deactivateAllItems(this.items);
	            item.active = true;
	        }
	    }, {
	        key: 'add',
	        value: function add(item) {
	            if (this.items.length === 0) {
	                item.active = true;
	            }
	            this.items.push(item);
	        }
	    }]);
	
	    return NovoNavOutlet;
	}()) || _class5);
	var NovoNavContent = exports.NovoNavContent = (_dec6 = (0, _core.Component)({
	    selector: 'novo-nav-content',
	    inputs: ['active'],
	    directives: [_common.CORE_DIRECTIVES],
	    host: {
	        '[class.active]': 'active'
	    },
	    template: '\n        <ng-content></ng-content>\n  '
	}), _dec6(_class6 = function NovoNavContent(outlet) {
	    _classCallCheck(this, NovoNavContent);
	
	    this.active = this.active || false;
	    outlet.add(this);
	}) || _class6);
	Reflect.defineMetadata('design:paramtypes', [NovoNavOutlet], NovoNavContent);
	var NovoNavHeader = exports.NovoNavHeader = (_dec7 = (0, _core.Component)({
	    selector: 'novo-nav-header',
	    inputs: ['active', 'for'],
	    directives: [_common.CORE_DIRECTIVES],
	    host: {
	        '[class.active]': 'active',
	        '(click)': 'show($event)'
	    },
	    template: '\n        <ng-content></ng-content>\n  '
	}), _dec7(_class7 = function () {
	    function NovoNavHeader(outlet) {
	        _classCallCheck(this, NovoNavHeader);
	
	        this.active = this.active || false;
	        this.outlet = outlet;
	    }
	
	    _createClass(NovoNavHeader, [{
	        key: 'show',
	        value: function show() {
	            try {
	                var INDEX = this.outlet.items.indexOf(this.for);
	                if (INDEX > -1) {
	                    this.outlet.show(INDEX);
	                }
	            } catch (err) {
	                // do nothing
	            }
	        }
	    }]);
	
	    return NovoNavHeader;
	}()) || _class7);
	Reflect.defineMetadata('design:paramtypes', [NovoNavOutlet], NovoNavHeader);
	var NOVO_TAB_ELEMENTS = exports.NOVO_TAB_ELEMENTS = [NovoNav, NovoTab, NovoTabLink, NovoNavOutlet, NovoNavHeader, NovoNavContent, NovoTabButton];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90YWJzL1RhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztJQVFhLE8sV0FBQSxPLFdBTloscUJBQVU7QUFDUCxjQUFVLFVBREg7QUFFUCxZQUFRLENBQUMsT0FBRCxFQUFVLFdBQVYsRUFBdUIsUUFBdkIsRUFBaUMsUUFBakMsQ0FGRDtBQUdQLGdCQUFZLHlCQUhMO0FBSVAsY0FBVTtBQUpILENBQVYsQztBQU9HLHVCQUFjO0FBQUE7O0FBQ1YsYUFBSyxLQUFMLEdBQWEsRUFBYjtBQUNBLGFBQUssS0FBTCxHQUFhLEVBQWI7QUFDQSxhQUFLLFNBQUwsR0FBaUIsRUFBakI7QUFDSDs7OzsrQkFFTSxJLEVBQU07Ozs7O0FBS1QscUJBQVMsbUJBQVQsQ0FBNkIsS0FBN0IsRUFBb0M7QUFDaEMsc0JBQU0sT0FBTixDQUFjLFVBQUMsQ0FBRCxFQUFPO0FBQ2pCLHdCQUFJLEVBQUUsTUFBRixLQUFhLElBQWpCLEVBQXVCOztBQUV0QjtBQUNELHNCQUFFLE1BQUYsR0FBVyxLQUFYO0FBQ0gsaUJBTEQ7QUFNSDs7QUFFRCxnQ0FBb0IsS0FBSyxLQUF6QjtBQUNBLGlCQUFLLE1BQUwsR0FBYyxJQUFkO0FBQ0EsZ0JBQUksS0FBSyxNQUFULEVBQWlCO0FBQ2IscUJBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixJQUFuQixDQUFqQjtBQUNIOzs7QUFHRCxnQkFBSSxVQUFVLFNBQVMsYUFBVCxDQUF1QixxQ0FBdkIsQ0FBZDtBQUNBLGdCQUFJLE9BQUosRUFBYTtBQUNULHdCQUFRLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLElBQXhCO0FBQ0EsMkJBQVcsWUFBTTtBQUNiLDRCQUFRLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLENBQXhCO0FBQ0gsaUJBRkQsRUFFRyxFQUZIO0FBR0g7O0FBRUo7Ozs0QkFFRyxJLEVBQU07QUFDTixnQkFBSSxLQUFLLEtBQUwsQ0FB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SVAsVUFBTTtBQUNGLDBCQUFrQjtBQURoQixLQUpDO0FBT1A7QUFQTyxDQUFWLEMsa0JBWUcsd0JBQVksTUFBWixFQUFrQztBQUFBOztBQUM5QixTQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsSUFBZSxLQUE3QjtBQUNBLFdBQU8sR0FBUCxDQUFXLElBQVg7QUFDSCxDOzZDQUhrQixhLEdBRFYsYztJQW1CQSxhLFdBQUEsYSxZQVpaLHFCQUFVO0FBQ1AsY0FBVSxpQkFESDtBQUVQLFlBQVEsQ0FBQyxRQUFELEVBQVcsS0FBWCxDQUZEO0FBR1AsZ0JBQVkseUJBSEw7QUFJUCxVQUFNO0FBQ0YsMEJBQWtCLFFBRGhCO0FBRUYsbUJBQVc7QUFGVCxLQUpDO0FBUVA7QUFSTyxDQUFWLEM7QUFhRywyQkFBWSxNQUFaLEVBQWtDO0FBQUE7O0FBQzlCLGFBQUssTUFBTCxHQUFjLEtBQUssTUFBTCxJQUFlLEtBQTdCO0FBQ0EsYUFBSyxNQUFMLEdBQWMsTUFBZDtBQUNIOzs7OytCQUVNO0FBQ0gsZ0JBQUk7QUFDQSxvQkFBTSxRQUFRLEtBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsT0FBbEIsQ0FBMEIsS0FBSyxHQUEvQixDQUFkO0FBQ0Esb0JBQUksUUFBUSxDQUFDLENBQWIsRUFBZ0I7QUFDWix5QkFBSyxNQUFMLENBQVksSUFBWixDQUFpQixLQUFqQjtBQUNIO0FBQ0osYUFMRCxDQUtFLE9BQU8sR0FBUCxFQUFZOztBQUViO0FBQ0o7Ozs7OzZDQWRrQixhLEdBRFYsYTtBQWtCTixJQUFNLGdEQUFvQixDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLFdBQW5CLEVBQWdDLGFBQWhDLEVBQStDLGFBQS9DLEVBQThELGNBQTlELEVBQThFLGFBQTlFLENBQTFCIiwiZmlsZSI6IlRhYnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tbmF2JyxcbiAgICBpbnB1dHM6IFsndGhlbWUnLCAnZGlyZWN0aW9uJywgJ291dGxldCcsICdyb3V0ZXInXSxcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9OYXYge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMudGhlbWUgPSAnJztcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnJztcbiAgICB9XG5cbiAgICBzZWxlY3QoaXRlbSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogRGVhY3RpdmF0ZXMgb3RoZXIgdGFiIGl0ZW1zXG4gICAgICAgICAqIEBwYXJhbSBpdGVtcyAtIGRlYWN0aXZhdGVkIGl0ZW1zXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfZGVhY3RpdmF0ZUFsbEl0ZW1zKGl0ZW1zKSB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHQuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHQuZGVzZWxlY3RlZC5uZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9kZWFjdGl2YXRlQWxsSXRlbXModGhpcy5pdGVtcyk7XG4gICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMub3V0bGV0KSB7XG4gICAgICAgICAgICB0aGlzLm91dGxldC5zaG93KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPIC0gcmVtb3ZlIGhhY2sgdG8gbWFrZSBET00gcmVyZW5kZXJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLXRhYi1saW5rLmFjdGl2ZSBzcGFuLmluZGljYXRvcicpO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMC45OTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaXRlbS5zZWxlY3RlZC5uZXh0KCk7XG4gICAgfVxuXG4gICAgYWRkKGl0ZW0pIHtcbiAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyBpdGVtLnNlbGVjdGVkLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tdGFiJyxcbiAgICBpbnB1dHM6IFsnYWN0aXZlJ10sXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFU10sXG4gICAgaG9zdDoge1xuICAgICAgICAnKGNsaWNrKSc6ICdzZWxlY3QoKScsXG4gICAgICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by10YWItbGlua1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmRpY2F0b3JcIj48L3NwYW4+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYiB7XG4gICAgY29uc3RydWN0b3IobmF2Ok5vdm9OYXYpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmFjdGl2ZSB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5uYXYgPSBuYXY7XG4gICAgICAgIHRoaXMubmF2LmFkZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZWxlY3QoKSB7XG4gICAgICAgIHRoaXMubmF2LnNlbGVjdCh0aGlzKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm92by10YWItYnV0dG9uJyxcbiAgICBpbnB1dHM6IFsnYWN0aXZlJ10sXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFU10sXG4gICAgaG9zdDoge1xuICAgICAgICAnKGNsaWNrKSc6ICdzZWxlY3QoKScsXG4gICAgICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKG5hdjpOb3ZvTmF2KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy5hY3RpdmUgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMubmF2ID0gbmF2O1xuICAgICAgICB0aGlzLm5hdi5hZGQodGhpcyk7XG4gICAgfVxuXG4gICAgc2VsZWN0KCkge1xuICAgICAgICB0aGlzLm5hdi5zZWxlY3QodGhpcyk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tdGFiLWxpbmsnLFxuICAgIGlucHV0czogWydhY3RpdmUnXSxcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXSxcbiAgICBob3N0OiB7XG4gICAgICAgICcoY2xpY2spJzogJ3NlbGVjdCgpJyxcbiAgICAgICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXRhYi1saW5rXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImluZGljYXRvclwiPjwvc3Bhbj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGFiTGluayB7XG4gICAgY29uc3RydWN0b3IobmF2Ok5vdm9OYXYpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmFjdGl2ZSB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5uYXYgPSBuYXY7XG4gICAgICAgIHRoaXMubmF2LmFkZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZWxlY3QoKSB7XG4gICAgICAgIHRoaXMubmF2LnNlbGVjdCh0aGlzKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm92by1uYXYtb3V0bGV0JyxcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTm92b05hdk91dGxldCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBzaG93KGluZGV4KSB7XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtc1tpbmRleF07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWFjdGl2YXRlcyBvdGhlciB0YWIgaXRlbXNcbiAgICAgICAgICogQHBhcmFtIGl0ZW1zIC0gZGVhY3RpdmF0ZWQgaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9kZWFjdGl2YXRlQWxsSXRlbXMoaXRlbXMpIHtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodC5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdC5kZXNlbGVjdGVkLm5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgX2RlYWN0aXZhdGVBbGxJdGVtcyh0aGlzLml0ZW1zKTtcbiAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGFkZChpdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm92by1uYXYtY29udGVudCcsXG4gICAgaW5wdXRzOiBbJ2FjdGl2ZSddLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTmF2Q29udGVudCB7XG4gICAgY29uc3RydWN0b3Iob3V0bGV0Ok5vdm9OYXZPdXRsZXQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmFjdGl2ZSB8fCBmYWxzZTtcbiAgICAgICAgb3V0bGV0LmFkZCh0aGlzKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm92by1uYXYtaGVhZGVyJyxcbiAgICBpbnB1dHM6IFsnYWN0aXZlJywgJ2ZvciddLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gICAgICAgICcoY2xpY2spJzogJ3Nob3coJGV2ZW50KSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTmF2SGVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvdXRsZXQ6Tm92b05hdk91dGxldCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuYWN0aXZlIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLm91dGxldCA9IG91dGxldDtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgSU5ERVggPSB0aGlzLm91dGxldC5pdGVtcy5pbmRleE9mKHRoaXMuZm9yKTtcbiAgICAgICAgICAgIGlmIChJTkRFWCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRsZXQuc2hvdyhJTkRFWCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgTk9WT19UQUJfRUxFTUVOVFMgPSBbTm92b05hdiwgTm92b1RhYiwgTm92b1RhYkxpbmssIE5vdm9OYXZPdXRsZXQsIE5vdm9OYXZIZWFkZXIsIE5vdm9OYXZDb250ZW50LCBOb3ZvVGFiQnV0dG9uXTtcbiJdfQ==

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Toast = __webpack_require__(228);
	
	Object.defineProperty(exports, 'NOVO_TOAST_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Toast.NOVO_TOAST_ELEMENTS;
	  }
	});
	Object.defineProperty(exports, 'NovoToast', {
	  enumerable: true,
	  get: function get() {
	    return _Toast.NovoToast;
	  }
	});
	
	var _ToastService = __webpack_require__(229);
	
	Object.defineProperty(exports, 'ToastService', {
	  enumerable: true,
	  get: function get() {
	    return _ToastService.ToastService;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90b2FzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztrQkFBUyxtQjs7Ozs7O2tCQUNBLFM7Ozs7Ozs7Ozt5QkFDQSxZIiwiZmlsZSI6InRvYXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9iaC9ub3ZvL2FwcHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IE5PVk9fVE9BU1RfRUxFTUVOVFMgfSBmcm9tICcuL3RvYXN0L1RvYXN0JztcbmV4cG9ydCB7IE5vdm9Ub2FzdCB9IGZyb20gJy4vdG9hc3QvVG9hc3QnO1xuZXhwb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdC9Ub2FzdFNlcnZpY2UnO1xuIl19

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_TOAST_ELEMENTS = exports.NovoToast = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(2);
	
	var _common = __webpack_require__(8);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NovoToast = exports.NovoToast = (_dec = (0, _core.Component)({
	    selector: 'novo-toast',
	    inputs: ['theme', 'icon', 'title', 'message'],
	    host: {
	        '[class]': 'alertTheme',
	        '[class.show]': 'show',
	        '[class.animate]': 'animate',
	        '[class.embedded]': 'embedded',
	        '(click)': 'clickHandler($event)'
	    },
	    template: '\n        <div class="toast-icon">\n            <i [ngClass]="iconClass"></i>\n        </div>\n        <div class="toast-content">\n            <h5 *ngIf="title">{{title}}</h5>\n            <p *ngIf="message" [class.message-only]="!title">{{message}}</p>\n        </div>\n    ',
	    directives: [_common.CORE_DIRECTIVES]
	}), _dec(_class = function () {
	    function NovoToast(element) {
	        _classCallCheck(this, NovoToast);
	
	        this.show = false;
	        this.animate = false;
	        this.parent = null;
	        this.ref = element;
	    }
	
	    _createClass(NovoToast, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            if (!this.launched) {
	                // clear position and time
	                this.position = null;
	                this.time = null;
	
	                // set icon and styling
	                this.iconClass = 'bhi-' + this.icon;
	                this.alertTheme = this.theme + ' toast-container embedded';
	            }
	        }
	    }, {
	        key: 'clickHandler',
	        value: function clickHandler(event) {
	            if (event) {
	                event.stopPropagation();
	                event.preventDefault();
	            }
	            if (this.parent) {
	                this.parent.hide(this);
	            }
	        }
	    }]);
	
	    return NovoToast;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_core.ElementRef], NovoToast);
	var NOVO_TOAST_ELEMENTS = exports.NOVO_TOAST_ELEMENTS = [NovoToast];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90b2FzdC9Ub2FzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0lBdUJhLFMsV0FBQSxTLFdBckJaLHFCQUFVO0FBQ1AsY0FBVSxZQURIO0FBRVAsWUFBUSxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLE9BQWxCLEVBQTJCLFNBQTNCLENBRkQ7QUFHUCxVQUFNO0FBQ0YsbUJBQVcsWUFEVDtBQUVGLHdCQUFnQixNQUZkO0FBR0YsMkJBQW1CLFNBSGpCO0FBSUYsNEJBQW9CLFVBSmxCO0FBS0YsbUJBQVc7QUFMVCxLQUhDO0FBVVAsb1NBVk87QUFtQlAsZ0JBQVk7QUFuQkwsQ0FBVixDO0FBc0JHLHVCQUFZLE9BQVosRUFBaUM7QUFBQTs7QUFDN0IsYUFBSyxJQUFMLEdBQVksS0FBWjtBQUNBLGFBQUssT0FBTCxHQUFlLEtBQWY7QUFDQSxhQUFLLE1BQUwsR0FBYyxJQUFkO0FBQ0EsYUFBSyxHQUFMLEdBQVcsT0FBWDtBQUNIOzs7O21DQUVVO0FBQ1AsZ0JBQUksQ0FBQyxLQUFLLFFBQVYsRUFBb0I7O0FBRWhCLHFCQUFLLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxxQkFBSyxJQUFMLEdBQVksSUFBWjs7O0FBR0EscUJBQUssU0FBTCxZQUF3QixLQUFLLElBQTdCO0FBQ0EscUJBQUssVUFBTCxHQUFxQixLQUFLLEtBQTFCO0FBQ0g7QUFDSjs7O3FDQUVZLEssRUFBTztBQUNoQixnQkFBSSxLQUFKLEVBQVc7QUFDUCxzQkFBTSxlQUFOO0FBQ0Esc0JBQU0sY0FBTjtBQUNIO0FBQ0QsZ0JBQUksS0FBSyxNQUFULEVBQWlCO0FBQ2IscUJBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsSUFBakI7QUFDSDtBQUNKOzs7OztnRUE1QlEsUztBQStCTixJQUFNLG9EQUFzQixDQUFDLFNBQUQsQ0FBNUIiLCJmaWxlIjoiVG9hc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdm8tdG9hc3QnLFxuICAgIGlucHV0czogWyd0aGVtZScsICdpY29uJywgJ3RpdGxlJywgJ21lc3NhZ2UnXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3NdJzogJ2FsZXJ0VGhlbWUnLFxuICAgICAgICAnW2NsYXNzLnNob3ddJzogJ3Nob3cnLFxuICAgICAgICAnW2NsYXNzLmFuaW1hdGVdJzogJ2FuaW1hdGUnLFxuICAgICAgICAnW2NsYXNzLmVtYmVkZGVkXSc6ICdlbWJlZGRlZCcsXG4gICAgICAgICcoY2xpY2spJzogJ2NsaWNrSGFuZGxlcigkZXZlbnQpJ1xuICAgIH0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvYXN0LWljb25cIj5cbiAgICAgICAgICAgIDxpIFtuZ0NsYXNzXT1cImljb25DbGFzc1wiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1jb250ZW50XCI+XG4gICAgICAgICAgICA8aDUgKm5nSWY9XCJ0aXRsZVwiPnt7dGl0bGV9fTwvaDU+XG4gICAgICAgICAgICA8cCAqbmdJZj1cIm1lc3NhZ2VcIiBbY2xhc3MubWVzc2FnZS1vbmx5XT1cIiF0aXRsZVwiPnt7bWVzc2FnZX19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Ub2FzdCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWYgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMubGF1bmNoZWQpIHtcbiAgICAgICAgICAgIC8vIGNsZWFyIHBvc2l0aW9uIGFuZCB0aW1lXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIHNldCBpY29uIGFuZCBzdHlsaW5nXG4gICAgICAgICAgICB0aGlzLmljb25DbGFzcyA9IGBiaGktJHt0aGlzLmljb259YDtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRUaGVtZSA9IGAke3RoaXMudGhlbWV9IHRvYXN0LWNvbnRhaW5lciBlbWJlZGRlZGA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5oaWRlKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgTk9WT19UT0FTVF9FTEVNRU5UUyA9IFtOb3ZvVG9hc3RdO1xuIl19

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ToastService = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ToastService = exports.ToastService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
	    function ToastService(loader, appRef, injector) {
	        _classCallCheck(this, ToastService);
	
	        this.loader = loader;
	        this.injector = injector;
	        this.app = appRef;
	        this.references = [];
	
	        this.positions = ['fixedTop', 'fixedBottom', 'growlTopLeft', 'growlTopRight', 'growlBottomLeft', 'growlBottomRight'];
	
	        this.themes = ['default', 'success', 'info', 'warning', 'danger'];
	
	        this.icons = {
	            default: 'bell',
	            success: 'check',
	            info: 'info',
	            warning: 'warning',
	            danger: 'remove'
	        };
	
	        this.defaults = {
	            hideDelay: 3500,
	            position: 'growlTopRight',
	            theme: 'default'
	        };
	    }
	
	    _createClass(ToastService, [{
	        key: 'register',
	        value: function register(root, location) {
	            this.root = root;
	            if (location) {
	                this.location = location;
	            }
	        }
	    }, {
	        key: 'alert',
	        value: function alert(component, options) {
	            var _this = this;
	
	            return new Promise(function (resolve) {
	                if (!_this.root) {
	                    _this.root = _this.app._rootComponents[0].location;
	                }
	                if (_this.location) {
	                    _this.loader.loadIntoLocation(component, _this.root, _this.location).then(function (toast) {
	                        toast.instance.embedded = true;
	                        _this.references.push(toast);
	                        _this.handleAlert(toast.instance, options);
	                        resolve(toast);
	                    });
	                } else {
	                    _this.loader.loadNextToLocation(component, _this.root).then(function (toast) {
	                        _this.references.push(toast);
	                        _this.handleAlert(toast.instance, options);
	                        resolve(toast);
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'isVisible',
	        value: function isVisible(toast) {
	            return toast.show;
	        }
	    }, {
	        key: 'hide',
	        value: function hide(toast) {
	            var _this2 = this;
	
	            toast.animate = false;
	            setTimeout(function () {
	                toast.show = false;
	                var REF = _this2.references.filter(function (x) {
	                    return x.instance === toast;
	                })[0];
	                if (REF) {
	                    _this2.references.splice(_this2.references.indexOf(REF), 1);
	                    REF.dispose();
	                }
	            }, 300);
	        }
	    }, {
	        key: 'handleAlert',
	        value: function handleAlert(toast, options) {
	            var _this3 = this;
	
	            this.setToastOnSession(toast, options);
	            setTimeout(function () {
	                _this3.show(toast);
	            }, 20);
	            this.toastTimer(toast);
	        }
	    }, {
	        key: 'setToastOnSession',
	        value: function setToastOnSession(toast, opts) {
	            var OPTIONS = (typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object' ? opts : {};
	
	            toast.parent = this;
	            toast.title = OPTIONS.title || '';
	            toast.message = OPTIONS.message || '';
	            toast.hideDelay = OPTIONS.hideDelay || this.defaults.hideDelay;
	
	            var CUSTOM_CLASS = OPTIONS.customClass || '';
	            var ALERT_STYLE = OPTIONS.theme || this.defaults.theme;
	            var ALERT_POSITION = OPTIONS.position || this.defaults.position;
	            var ALERT_ICON = OPTIONS.icon || this.icons.default;
	
	            toast.iconClass = 'bhi-' + ALERT_ICON;
	            toast.launched = true;
	            toast.alertTheme = ALERT_STYLE + ' ' + ALERT_POSITION + ' ' + CUSTOM_CLASS + ' toast-container launched';
	        }
	    }, {
	        key: 'show',
	        value: function show(toast) {
	            toast.show = true;
	            setTimeout(addClass, 25);
	            /**
	            * Adds animate class to be called after a timeout
	            **/
	            function addClass() {
	                toast.animate = true;
	            }
	        }
	    }, {
	        key: 'toastTimer',
	        value: function toastTimer(toast) {
	            var _this4 = this;
	
	            if (toast.hideDelay < 0) return;
	            setTimeout(function () {
	                _this4.hide(toast);
	            }, toast.hideDelay);
	        }
	    }]);
	
	    return ToastService;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_core.DynamicComponentLoader, _core.ApplicationRef, _core.Injector], ToastService);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90b2FzdC9Ub2FzdFNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0lBR2EsWSxXQUFBLFksV0FEWix1QjtBQUVHLDBCQUFZLE1BQVosRUFBMkMsTUFBM0MsRUFBa0UsUUFBbEUsRUFBcUY7QUFBQTs7QUFDakYsYUFBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLGFBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNBLGFBQUssR0FBTCxHQUFXLE1BQVg7QUFDQSxhQUFLLFVBQUwsR0FBa0IsRUFBbEI7O0FBRUEsYUFBSyxTQUFMLEdBQWlCLENBQ2IsVUFEYSxFQUViLGFBRmEsRUFHYixjQUhhLEVBSWIsZUFKYSxFQUtiLGlCQUxhLEVBTWIsa0JBTmEsQ0FBakI7O0FBU0EsYUFBSyxNQUFMLEdBQWMsQ0FDVixTQURVLEVBRVYsU0FGVSxFQUdWLE1BSFUsRUFJVixTQUpVLEVBS1YsUUFMVSxDQUFkOztBQVFBLGFBQUssS0FBTCxHQUFhO0FBQ1QscUJBQVMsTUFEQTtBQUVULHFCQUFTLE9BRkE7QUFHVCxrQkFBTSxNQUhHO0FBSVQscUJBQVMsU0FKQTtBQUtULG9CQUFRO0FBTEMsU0FBYjs7QUFRQSxhQUFLLFFBQUwsR0FBZ0I7QUFDWix1QkFBVyxJQURDO0FBRVosc0JBQVUsZUFGRTtBQUdaLG1CQUFPO0FBSEssU0FBaEI7QUFLSDs7OztpQ0FFUSxJLEVBQU0sUSxFQUFVO0FBQ3JCLGlCQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsZ0JBQUksUUFBSixFQUFjO0FBQ1YscUJBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNIO0FBQ0o7Ozs4QkFFSyxTLEVBQVcsTyxFQUFTO0FBQUE7O0FBQ3RCLG1CQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFhO0FBQzVCLG9CQUFJLENBQUMsTUFBSyxJQUFWLEVBQWdCO0FBQ1osMEJBQUssSUFBTCxHQUFZLE1BQUssR0FBTCxDQUFTLGVBQVQsQ0FBeUIsQ0FBekIsRUFBNEIsUUFBeEM7QUFDSDtBQUNELG9CQUFJLE1BQUssUUFBVCxFQUFtQjtBQUNmLDBCQUFLLE1BQUwsQ0FBWSxnQkFBWixDQUE2QixTQUE3QixFQUF3QyxNQUFLLElBQTdDLEVBQW1ELE1BQUssUUFBeEQsRUFBa0UsSUFBbEUsQ0FBdUUsaUJBQVM7QUFDNUUsOEJBQU0sUUFBTixDQUFlLFFBQWYsR0FBMEIsSUFBMUI7QUFDQSw4QkFBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLEtBQXJCO0FBQ0EsOEJBQUssV0FBTCxDQUFpQixNQUFNLFFBQXZCLEVBQWlDLE9BQWpDO0FBQ0EsZ0NBQVEsS0FBUjtBQUNILHFCQUxEO0FBTUgsaUJBUEQsTUFPTztBQUNILDBCQUFLLE1BQUwsQ0FBWSxrQkFBWixDQUErQixTQUEvQixFQUEwQyxNQUFLLElBQS9DLEVBQXFELElBQXJELENBQTBELGlCQUFTO0FBQy9ELDhCQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsS0FBckI7QUFDQSw4QkFBSyxXQUFMLENBQWlCLE1BQU0sUUFBdkIsRUFBaUMsT0FBakM7QUFDQSxnQ0FBUSxLQUFSO0FBQ0gscUJBSkQ7QUFLSDtBQUNKLGFBbEJNLENBQVA7QUFtQkg7OztrQ0FFUyxLLEVBQU87QUFDYixtQkFBTyxNQUFNLElBQWI7QUFDSDs7OzZCQUVJLEssRUFBTztBQUFBOztBQUNSLGtCQUFNLE9BQU4sR0FBZ0IsS0FBaEI7QUFDQSx1QkFBVyxZQUFNO0FBQ2Isc0JBQU0sSUFBTixHQUFhLEtBQWI7QUFDQSxvQkFBTSxNQUFNLE9BQUssVUFBTCxDQUFnQixNQUFoQixDQUF1QjtBQUFBLDJCQUFLLEVBQUUsUUFBRixLQUFlLEtBQXBCO0FBQUEsaUJBQXZCLEVBQWtELENBQWxELENBQVo7QUFDQSxvQkFBSSxHQUFKLEVBQVM7QUFDTCwyQkFBSyxVQUFMLENBQWdCLE1BQWhCLENBQXVCLE9BQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixHQUF4QixDQUF2QixFQUFxRCxDQUFyRDtBQUNBLHdCQUFJLE9BQUo7QUFDSDtBQUNKLGFBUEQsRUFPRyxHQVBIO0FBUUg7OztvQ0FFVyxLLEVBQU8sTyxFQUFTO0FBQUE7O0FBQ3hCLGlCQUFLLGlCQUFMLENBQXVCLEtBQXZCLEVBQThCLE9BQTlCO0FBQ0EsdUJBQVcsWUFBTTtBQUNiLHVCQUFLLElBQUwsQ0FBVSxLQUFWO0FBQ0gsYUFGRCxFQUVHLEVBRkg7QUFHQSxpQkFBSyxVQUFMLENBQWdCLEtBQWhCO0FBQ0g7OzswQ0FFaUIsSyxFQUFPLEksRUFBTTtBQUMzQixnQkFBTSxVQUFXLFFBQU8sSUFBUCx5Q0FBTyxJQUFQLE9BQWdCLFFBQWpCLEdBQTZCLElBQTdCLEdBQW9DLEVBQXBEOztBQUVBLGtCQUFNLE1BQU4sR0FBZSxJQUFmO0FBQ0Esa0JBQU0sS0FBTixHQUFjLFFBQVEsS0FBUixJQUFpQixFQUEvQjtBQUNBLGtCQUFNLE9BQU4sR0FBZ0IsUUFBUSxPQUFSLElBQW1CLEVBQW5DO0FBQ0Esa0JBQU0sU0FBTixHQUFrQixRQUFRLFNBQVIsSUFBcUIsS0FBSyxRQUFMLENBQWMsU0FBckQ7O0FBRUEsZ0JBQU0sZUFBZSxRQUFRLFdBQVIsSUFBdUIsRUFBNUM7QUFDQSxnQkFBTSxjQUFjLFFBQVEsS0FBUixJQUFpQixLQUFLLFFBQUwsQ0FBYyxLQUFuRDtBQUNBLGdCQUFNLGlCQUFpQixRQUFRLFFBQVIsSUFBb0IsS0FBSyxRQUFMLENBQWMsUUFBekQ7QUFDQSxnQkFBTSxhQUFhLFFBQVEsSUFBUixJQUFnQixLQUFLLEtBQUwsQ0FBVyxPQUE5Qzs7QUFFQSxrQkFBTSxTQUFOLFlBQXlCLFVBQXpCO0FBQ0Esa0JBQU0sUUFBTixHQUFpQixJQUFqQjtBQUNBLGtCQUFNLFVBQU4sR0FBc0IsV0FBdEIsU0FBcUMsY0FBckMsU0FBdUQsWUFBdkQ7QUFDSDs7OzZCQUVJLEssRUFBTztBQUNSLGtCQUFNLElBQU4sR0FBYSxJQUFiO0FBQ0EsdUJBQVcsUUFBWCxFQUFxQixFQUFyQjs7OztBQUlBLHFCQUFTLFFBQVQsR0FBb0I7QUFDaEIsc0JBQU0sT0FBTixHQUFnQixJQUFoQjtBQUNIO0FBQ0o7OzttQ0FFVSxLLEVBQU87QUFBQTs7QUFDZCxnQkFBSSxNQUFNLFNBQU4sR0FBa0IsQ0FBdEIsRUFBeUI7QUFDekIsdUJBQVcsWUFBTTtBQUNiLHVCQUFLLElBQUwsQ0FBVSxLQUFWO0FBQ0gsYUFGRCxFQUVHLE1BQU0sU0FGVDtBQUdIOzs7OztrSEE5SFEsWSIsImZpbGUiOiJUb2FzdFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQXBwbGljYXRpb25SZWYsIER5bmFtaWNDb21wb25lbnRMb2FkZXIsIEluamVjdG9yIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2FzdFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjpEeW5hbWljQ29tcG9uZW50TG9hZGVyLCBhcHBSZWY6QXBwbGljYXRpb25SZWYsIGluamVjdG9yOkluamVjdG9yKSB7XG4gICAgICAgIHRoaXMubG9hZGVyID0gbG9hZGVyO1xuICAgICAgICB0aGlzLmluamVjdG9yID0gaW5qZWN0b3I7XG4gICAgICAgIHRoaXMuYXBwID0gYXBwUmVmO1xuICAgICAgICB0aGlzLnJlZmVyZW5jZXMgPSBbXTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IFtcbiAgICAgICAgICAgICdmaXhlZFRvcCcsXG4gICAgICAgICAgICAnZml4ZWRCb3R0b20nLFxuICAgICAgICAgICAgJ2dyb3dsVG9wTGVmdCcsXG4gICAgICAgICAgICAnZ3Jvd2xUb3BSaWdodCcsXG4gICAgICAgICAgICAnZ3Jvd2xCb3R0b21MZWZ0JyxcbiAgICAgICAgICAgICdncm93bEJvdHRvbVJpZ2h0J1xuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMudGhlbWVzID0gW1xuICAgICAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAgICAgJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgJ2luZm8nLFxuICAgICAgICAgICAgJ3dhcm5pbmcnLFxuICAgICAgICAgICAgJ2RhbmdlcidcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLmljb25zID0ge1xuICAgICAgICAgICAgZGVmYXVsdDogJ2JlbGwnLFxuICAgICAgICAgICAgc3VjY2VzczogJ2NoZWNrJyxcbiAgICAgICAgICAgIGluZm86ICdpbmZvJyxcbiAgICAgICAgICAgIHdhcm5pbmc6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgIGRhbmdlcjogJ3JlbW92ZSdcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgaGlkZURlbGF5OiAzNTAwLFxuICAgICAgICAgICAgcG9zaXRpb246ICdncm93bFRvcFJpZ2h0JyxcbiAgICAgICAgICAgIHRoZW1lOiAnZGVmYXVsdCdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcihyb290LCBsb2NhdGlvbikge1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFsZXJ0KGNvbXBvbmVudCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5yb290KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb290ID0gdGhpcy5hcHAuX3Jvb3RDb21wb25lbnRzWzBdLmxvY2F0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5sb2FkSW50b0xvY2F0aW9uKGNvbXBvbmVudCwgdGhpcy5yb290LCB0aGlzLmxvY2F0aW9uKS50aGVuKHRvYXN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuaW5zdGFuY2UuZW1iZWRkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZmVyZW5jZXMucHVzaCh0b2FzdCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQWxlcnQodG9hc3QuaW5zdGFuY2UsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRvYXN0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIubG9hZE5leHRUb0xvY2F0aW9uKGNvbXBvbmVudCwgdGhpcy5yb290KS50aGVuKHRvYXN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2VzLnB1c2godG9hc3QpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUFsZXJ0KHRvYXN0Lmluc3RhbmNlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0b2FzdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzVmlzaWJsZSh0b2FzdCkge1xuICAgICAgICByZXR1cm4gdG9hc3Quc2hvdztcbiAgICB9XG5cbiAgICBoaWRlKHRvYXN0KSB7XG4gICAgICAgIHRvYXN0LmFuaW1hdGUgPSBmYWxzZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0b2FzdC5zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBSRUYgPSB0aGlzLnJlZmVyZW5jZXMuZmlsdGVyKHggPT4geC5pbnN0YW5jZSA9PT0gdG9hc3QpWzBdO1xuICAgICAgICAgICAgaWYgKFJFRikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlcy5zcGxpY2UodGhpcy5yZWZlcmVuY2VzLmluZGV4T2YoUkVGKSwgMSk7XG4gICAgICAgICAgICAgICAgUkVGLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICBoYW5kbGVBbGVydCh0b2FzdCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnNldFRvYXN0T25TZXNzaW9uKHRvYXN0LCBvcHRpb25zKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3codG9hc3QpO1xuICAgICAgICB9LCAyMCk7XG4gICAgICAgIHRoaXMudG9hc3RUaW1lcih0b2FzdCk7XG4gICAgfVxuXG4gICAgc2V0VG9hc3RPblNlc3Npb24odG9hc3QsIG9wdHMpIHtcbiAgICAgICAgY29uc3QgT1BUSU9OUyA9ICh0eXBlb2Ygb3B0cyA9PT0gJ29iamVjdCcpID8gb3B0cyA6IHt9O1xuXG4gICAgICAgIHRvYXN0LnBhcmVudCA9IHRoaXM7XG4gICAgICAgIHRvYXN0LnRpdGxlID0gT1BUSU9OUy50aXRsZSB8fCAnJztcbiAgICAgICAgdG9hc3QubWVzc2FnZSA9IE9QVElPTlMubWVzc2FnZSB8fCAnJztcbiAgICAgICAgdG9hc3QuaGlkZURlbGF5ID0gT1BUSU9OUy5oaWRlRGVsYXkgfHwgdGhpcy5kZWZhdWx0cy5oaWRlRGVsYXk7XG5cbiAgICAgICAgY29uc3QgQ1VTVE9NX0NMQVNTID0gT1BUSU9OUy5jdXN0b21DbGFzcyB8fCAnJztcbiAgICAgICAgY29uc3QgQUxFUlRfU1RZTEUgPSBPUFRJT05TLnRoZW1lIHx8IHRoaXMuZGVmYXVsdHMudGhlbWU7XG4gICAgICAgIGNvbnN0IEFMRVJUX1BPU0lUSU9OID0gT1BUSU9OUy5wb3NpdGlvbiB8fCB0aGlzLmRlZmF1bHRzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBBTEVSVF9JQ09OID0gT1BUSU9OUy5pY29uIHx8IHRoaXMuaWNvbnMuZGVmYXVsdDtcblxuICAgICAgICB0b2FzdC5pY29uQ2xhc3MgPSBgYmhpLSR7QUxFUlRfSUNPTn1gO1xuICAgICAgICB0b2FzdC5sYXVuY2hlZCA9IHRydWU7XG4gICAgICAgIHRvYXN0LmFsZXJ0VGhlbWUgPSBgJHtBTEVSVF9TVFlMRX0gJHtBTEVSVF9QT1NJVElPTn0gJHtDVVNUT01fQ0xBU1N9IHRvYXN0LWNvbnRhaW5lciBsYXVuY2hlZGA7XG4gICAgfVxuXG4gICAgc2hvdyh0b2FzdCkge1xuICAgICAgICB0b2FzdC5zaG93ID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dChhZGRDbGFzcywgMjUpO1xuICAgICAgICAvKipcbiAgICAgICAgKiBBZGRzIGFuaW1hdGUgY2xhc3MgdG8gYmUgY2FsbGVkIGFmdGVyIGEgdGltZW91dFxuICAgICAgICAqKi9cbiAgICAgICAgZnVuY3Rpb24gYWRkQ2xhc3MoKSB7XG4gICAgICAgICAgICB0b2FzdC5hbmltYXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvYXN0VGltZXIodG9hc3QpIHtcbiAgICAgICAgaWYgKHRvYXN0LmhpZGVEZWxheSA8IDApIHJldHVybjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGUodG9hc3QpO1xuICAgICAgICB9LCB0b2FzdC5oaWRlRGVsYXkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(231);
	
	Object.defineProperty(exports, 'NOVO_TOOLTIP_ELEMENTS', {
	  enumerable: true,
	  get: function get() {
	    return _Tooltip.NOVO_TOOLTIP_ELEMENTS;
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90b29sdGlwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O29CQUFTLHFCIiwiZmlsZSI6InRvb2x0aXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgTk9WT19UT09MVElQX0VMRU1FTlRTIH0gZnJvbSAnLi90b29sdGlwL1Rvb2x0aXAnO1xuIl19

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NOVO_TOOLTIP_ELEMENTS = exports.Tooltip = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Tooltip = exports.Tooltip = (_dec = (0, _core.Directive)({
	    selector: '[tooltip]',
	    properties: ['tooltip:tooltip', 'always:tooltipAlways', 'rounded:tooltipRounded', 'noAnimate:tooltipNoAnimate', 'bounce:tooltipBounce', 'type:tooltipType', 'position:tooltipPosition'],
	    host: {
	        '[class.hint--top]': 'isPosition("top")',
	        '[class.hint--left]': 'isPosition("left")',
	        '[class.hint--right]': 'isPosition("right")',
	        '[class.hint--bottom]': 'isPosition("bottom")',
	        '[class.hint--error]': 'isType("error")',
	        '[class.hint--info]': 'isType("info")',
	        '[class.hint--warning]': 'isType("warning")',
	        '[class.hint--success]': 'isType("success")',
	        '[class.hint--always]': 'always',
	        '[class.hint--rounded]': 'rounded',
	        '[class.hint--no-animate]': 'noAnimate',
	        '[class.hint--bounce]': 'bounce',
	        '[attr.data-hint]': 'tooltip'
	    }
	}), _dec(_class = function () {
	    function Tooltip() {
	        _classCallCheck(this, Tooltip);
	    }
	
	    _createClass(Tooltip, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            if (!this.position) {
	                this.position = 'top';
	            }
	        }
	    }, {
	        key: 'isPosition',
	        value: function isPosition(position) {
	            return position.toLowerCase() === (this.position || '').toLowerCase();
	        }
	    }, {
	        key: 'isType',
	        value: function isType(type) {
	            return type.toLowerCase() === (this.type || '').toLowerCase();
	        }
	    }]);
	
	    return Tooltip;
	}()) || _class);
	var NOVO_TOOLTIP_ELEMENTS = exports.NOVO_TOOLTIP_ELEMENTS = [Tooltip];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbGVtZW50cy90b29sdGlwL1Rvb2x0aXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztJQTZCYSxPLFdBQUEsTyxXQTNCWixxQkFBVTtBQUNQLGNBQVUsV0FESDtBQUVQLGdCQUFZLENBQ1IsaUJBRFEsRUFFUixzQkFGUSxFQUdSLHdCQUhRLEVBSVIsNEJBSlEsRUFLUixzQkFMUSxFQU1SLGtCQU5RLEVBT1IsMEJBUFEsQ0FGTDtBQVdQLFVBQU07QUFDRiw2QkFBcUIsbUJBRG5CO0FBRUYsOEJBQXNCLG9CQUZwQjtBQUdGLCtCQUF1QixxQkFIckI7QUFJRixnQ0FBd0Isc0JBSnRCO0FBS0YsK0JBQXVCLGlCQUxyQjtBQU1GLDhCQUFzQixnQkFOcEI7QUFPRixpQ0FBeUIsbUJBUHZCO0FBUUYsaUNBQXlCLG1CQVJ2QjtBQVNGLGdDQUF3QixRQVR0QjtBQVVGLGlDQUF5QixTQVZ2QjtBQVdGLG9DQUE0QixXQVgxQjtBQVlGLGdDQUF3QixRQVp0QjtBQWFGLDRCQUFvQjtBQWJsQjtBQVhDLENBQVYsQzs7Ozs7OzttQ0E0QmM7QUFDUCxnQkFBSSxDQUFDLEtBQUssUUFBVixFQUFvQjtBQUNoQixxQkFBSyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0g7QUFDSjs7O21DQUVVLFEsRUFBVTtBQUNqQixtQkFBTyxTQUFTLFdBQVQsT0FBMkIsQ0FBQyxLQUFLLFFBQUwsSUFBaUIsRUFBbEIsRUFBc0IsV0FBdEIsRUFBbEM7QUFDSDs7OytCQUVNLEksRUFBTTtBQUNULG1CQUFPLEtBQUssV0FBTCxPQUF1QixDQUFDLEtBQUssSUFBTCxJQUFhLEVBQWQsRUFBa0IsV0FBbEIsRUFBOUI7QUFDSDs7Ozs7QUFHRSxJQUFNLHdEQUF3QixDQUFDLE9BQUQsQ0FBOUIiLCJmaWxlIjoiVG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdG9vbHRpcF0nLFxuICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICAgJ3Rvb2x0aXA6dG9vbHRpcCcsXG4gICAgICAgICdhbHdheXM6dG9vbHRpcEFsd2F5cycsXG4gICAgICAgICdyb3VuZGVkOnRvb2x0aXBSb3VuZGVkJyxcbiAgICAgICAgJ25vQW5pbWF0ZTp0b29sdGlwTm9BbmltYXRlJyxcbiAgICAgICAgJ2JvdW5jZTp0b29sdGlwQm91bmNlJyxcbiAgICAgICAgJ3R5cGU6dG9vbHRpcFR5cGUnLFxuICAgICAgICAncG9zaXRpb246dG9vbHRpcFBvc2l0aW9uJ1xuICAgIF0sXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzLmhpbnQtLXRvcF0nOiAnaXNQb3NpdGlvbihcInRvcFwiKScsXG4gICAgICAgICdbY2xhc3MuaGludC0tbGVmdF0nOiAnaXNQb3NpdGlvbihcImxlZnRcIiknLFxuICAgICAgICAnW2NsYXNzLmhpbnQtLXJpZ2h0XSc6ICdpc1Bvc2l0aW9uKFwicmlnaHRcIiknLFxuICAgICAgICAnW2NsYXNzLmhpbnQtLWJvdHRvbV0nOiAnaXNQb3NpdGlvbihcImJvdHRvbVwiKScsXG4gICAgICAgICdbY2xhc3MuaGludC0tZXJyb3JdJzogJ2lzVHlwZShcImVycm9yXCIpJyxcbiAgICAgICAgJ1tjbGFzcy5oaW50LS1pbmZvXSc6ICdpc1R5cGUoXCJpbmZvXCIpJyxcbiAgICAgICAgJ1tjbGFzcy5oaW50LS13YXJuaW5nXSc6ICdpc1R5cGUoXCJ3YXJuaW5nXCIpJyxcbiAgICAgICAgJ1tjbGFzcy5oaW50LS1zdWNjZXNzXSc6ICdpc1R5cGUoXCJzdWNjZXNzXCIpJyxcbiAgICAgICAgJ1tjbGFzcy5oaW50LS1hbHdheXNdJzogJ2Fsd2F5cycsXG4gICAgICAgICdbY2xhc3MuaGludC0tcm91bmRlZF0nOiAncm91bmRlZCcsXG4gICAgICAgICdbY2xhc3MuaGludC0tbm8tYW5pbWF0ZV0nOiAnbm9BbmltYXRlJyxcbiAgICAgICAgJ1tjbGFzcy5oaW50LS1ib3VuY2VdJzogJ2JvdW5jZScsXG4gICAgICAgICdbYXR0ci5kYXRhLWhpbnRdJzogJ3Rvb2x0aXAnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwIHtcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gJ3RvcCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1Bvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbi50b0xvd2VyQ2FzZSgpID09PSAodGhpcy5wb3NpdGlvbiB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpc1R5cGUodHlwZSkge1xuICAgICAgICByZXR1cm4gdHlwZS50b0xvd2VyQ2FzZSgpID09PSAodGhpcy50eXBlIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5PVk9fVE9PTFRJUF9FTEVNRU5UUyA9IFtUb29sdGlwXTtcbiJdfQ==

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PluralPipe = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _dec2, _class;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _core = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Rule storage - pluralize and singularize need to be run sequentially,
	// while other rules can be optimized using an object for instant lookups.
	var pluralRules = [];
	var singularRules = [];
	var uncountables = {};
	var irregularPlurals = {};
	var irregularSingles = {};
	
	/**
	 * Title case a string.
	 * @param {string} str
	 * @return {string}
	 */
	function toTitleCase(str) {
	    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
	}
	
	/**
	 * Sanitize a pluralization rule to a usable regular expression.
	 * @param {(RegExp|string)} rule
	 * @return {RegExp}
	 */
	function sanitizeRule(rule) {
	    if (typeof rule === 'string') {
	        return new RegExp('^' + rule + '$', 'i'); // eslint-disable-line
	    }
	    return rule;
	}
	
	/**
	 * Pass in a word token to produce a function that can replicate the case on
	 * another word.
	 * @param {string} word
	 * @param {string} token
	 * @return {String}
	 */
	function restoreCase(word, token) {
	    // Upper cased words. E.g. "HELLO".
	    if (word === word.toUpperCase()) {
	        return token.toUpperCase();
	    }
	
	    // Title cased words. E.g. "Title".
	    if (word[0] === word[0].toUpperCase()) {
	        return toTitleCase(token);
	    }
	
	    // Lower cased words. E.g. "test".
	    return token.toLowerCase();
	}
	
	/**
	 * Interpolate a regexp string.
	 * @param {string} str
	 * @param {Array} args
	 * @return {string}
	 */
	function interpolate(str, args) {
	    return str.replace(/\$(\d{1,2})/g, function (match, index) {
	        return args[index] || '';
	    });
	}
	
	/**
	 * Sanitize a word by passing in the word and sanitization rules.
	 * @param  {String}   token
	 * @param  {String}   word
	 * @param  {Array}    collection
	 * @return {String}
	 */
	function sanitizeWord(token, word, collection) {
	    // Empty string or doesn't need fixing.
	    if (!token.length || uncountables.hasOwnProperty(token)) {
	        return word;
	    }
	
	    var len = collection.length;
	    // Iterate over the sanitization rules and use the first one to match.
	
	    var _loop = function _loop() {
	        var rule = collection[len];
	        // If the rule passes, return the replacement.
	        if (rule[0].test(word)) {
	            return {
	                v: word.replace(rule[0], function (match, index, words) {
	                    var result = interpolate(rule[1], [match, index, words]);
	                    if (match === '') {
	                        return restoreCase(words[index - 1], result);
	                    }
	                    return restoreCase(match, result);
	                })
	            };
	        }
	    };
	
	    while (len--) {
	        var _ret = _loop();
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	    return word;
	}
	
	/**
	 * Replace a word with the updated word.
	 * @param {Object} replaceMap
	 * @param {Object} keepMap
	 * @param {Array} rules
	 * @return {Function}
	 */
	function replaceWord(replaceMap, keepMap, rules) {
	    return function (word) {
	        // Get the correct token and case restoration functions.
	        var token = word.toLowerCase();
	
	        // Check against the keep object map.
	        if (keepMap.hasOwnProperty(token)) {
	            return restoreCase(word, token);
	        }
	
	        // Check against the replacement map for a direct word replacement.
	        if (replaceMap.hasOwnProperty(token)) {
	            return restoreCase(word, replaceMap[token]);
	        }
	
	        // Run all the rules against the word.
	        return sanitizeWord(token, word, rules);
	    };
	}
	
	/**
	 * Pluralize or singularize a word based on the passed in count.
	 * @param {String} word
	 * @param {Number} count
	 * @param {Boolean} inclusive
	 * @return {String}
	 */
	function pluralize(word, count, inclusive) {
	    var pluralized = count === 1 ? pluralize.singular(word) : pluralize.plural(word);
	    return (inclusive ? count + ' ' : '') + pluralized;
	}
	
	/**
	 * Pluralize a word.
	 */
	pluralize.plural = replaceWord(irregularSingles, irregularPlurals, pluralRules);
	
	/**
	 * Singularize a word.
	 */
	pluralize.singular = replaceWord(irregularPlurals, irregularSingles, singularRules);
	
	/**
	 * Add a pluralization rule to the collection.
	 * @param {(string|RegExp)} rule
	 * @param {string} replacement
	 */
	pluralize.addPluralRule = function (rule, replacement) {
	    pluralRules.push([sanitizeRule(rule), replacement]);
	};
	
	/**
	 * Add a singularization rule to the collection.
	 * @param {(string|RegExp)} rule
	 * @param {string} replacement
	 */
	pluralize.addSingularRule = function (rule, replacement) {
	    singularRules.push([sanitizeRule(rule), replacement]);
	};
	
	/**
	 * Add an uncountable word rule.
	 * @param {(string|RegExp)} word
	 */
	pluralize.addUncountableRule = function (word) {
	    if (typeof word === 'string') {
	        uncountables[word.toLowerCase()] = true;
	        return;
	    }
	
	    // Set singular and plural references for the word.
	    pluralize.addPluralRule(word, '$0');
	    pluralize.addSingularRule(word, '$0');
	};
	
	/**
	 * Add an irregular word definition.
	 * @param {String} single
	 * @param {String} plural
	 */
	pluralize.addIrregularRule = function (single, plural) {
	    var one = plural.toLowerCase();
	    var many = single.toLowerCase();
	
	    irregularSingles[one] = many;
	    irregularPlurals[many] = one;
	};
	
	/**
	 * Irregular rules.
	 */
	[
	// Pronouns.
	['I', 'we'], ['me', 'us'], ['he', 'they'], ['she', 'they'], ['them', 'them'], ['myself', 'ourselves'], ['yourself', 'yourselves'], ['itself', 'themselves'], ['herself', 'themselves'], ['himself', 'themselves'], ['themself', 'themselves'], ['is', 'are'], ['this', 'these'], ['that', 'those'],
	// Words ending in with a consonant and `o`.
	['echo', 'echoes'], ['dingo', 'dingoes'], ['volcano', 'volcanoes'], ['tornado', 'tornadoes'], ['torpedo', 'torpedoes'],
	// Ends with `us`.
	['genus', 'genera'], ['viscus', 'viscera'],
	// Ends with `ma`.
	['stigma', 'stigmata'], ['stoma', 'stomata'], ['dogma', 'dogmata'], ['lemma', 'lemmata'], ['schema', 'schemata'], ['anathema', 'anathemata'],
	// Other irregular rules.
	['ox', 'oxen'], ['axe', 'axes'], ['die', 'dice'], ['yes', 'yeses'], ['foot', 'feet'], ['eave', 'eaves'], ['goose', 'geese'], ['tooth', 'teeth'], ['quiz', 'quizzes'], ['human', 'humans'], ['proof', 'proofs'], ['carve', 'carves'], ['valve', 'valves'], ['thief', 'thieves'], ['genie', 'genies'], ['groove', 'grooves'], ['pickaxe', 'pickaxes'], ['whiskey', 'whiskies']].forEach(function (rule) {
	    return pluralize.addIrregularRule(rule[0], rule[1]);
	});
	
	/**
	 * Pluralization rules.
	 */
	[[/s?$/i, 's'], [/([^aeiou]ese)$/i, '$1'], [/(ax|test)is$/i, '$1es'], [/(alias|[^aou]us|tlas|gas|ris)$/i, '$1es'], [/(e[mn]u)s?$/i, '$1s'], [/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i, '$1'], [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'], [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'], [/(seraph|cherub)(?:im)?$/i, '$1im'], [/(her|at|gr)o$/i, '$1oes'], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'], [/sis$/i, 'ses'], [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'], [/([^aeiouy]|qu)y$/i, '$1ies'], [/([^ch][ieo][ln])ey$/i, '$1ies'], [/(x|ch|ss|sh|zz)$/i, '$1es'], [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'], [/(m|l)(?:ice|ouse)$/i, '$1ice'], [/(pe)(?:rson|ople)$/i, '$1ople'], [/(child)(?:ren)?$/i, '$1ren'], [/eaux$/i, '$0'], [/m[ae]n$/i, 'men'], ['thou', 'you']].forEach(function (rule) {
	    return pluralize.addPluralRule(rule[0], rule[1]);
	});
	
	/**
	 * Singularization rules.
	 */
	[[/s$/i, ''], [/(ss)$/i, '$1'], [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(?:sis|ses)$/i, '$1sis'], [/(^analy)(?:sis|ses)$/i, '$1sis'], [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'], [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'], [/([^aeiouy]|qu)ies$/i, '$1y'], [/(^[pl]|zomb|^(?:neck)?t|[aeo][lt]|cut)ies$/i, '$1ie'], [/(\b(?:mon|smil))ies$/i, '$1ey'], [/(m|l)ice$/i, '$1ouse'], [/(seraph|cherub)im$/i, '$1'], [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i, '$1'], [/(e[mn]u)s?$/i, '$1'], [/(movie|twelve)s$/i, '$1'], [/(cris|test|diagnos)(?:is|es)$/i, '$1is'], [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'], [/(alumn|alg|vertebr)ae$/i, '$1a'], [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'], [/(matr|append)ices$/i, '$1ix'], [/(pe)(rson|ople)$/i, '$1rson'], [/(child)ren$/i, '$1'], [/(eau)x?$/i, '$1'], [/men$/i, 'man']].forEach(function (rule) {
	    return pluralize.addSingularRule(rule[0], rule[1]);
	});
	
	/**
	 * Uncountable rules.
	 */
	[
	// Singular words with no plurals.
	'advice', 'adulthood', 'agenda', 'aid', 'alcohol', 'ammo', 'athletics', 'bison', 'blood', 'bream', 'buffalo', 'butter', 'carp', 'cash', 'chassis', 'chess', 'clothing', 'commerce', 'cod', 'cooperation', 'corps', 'digestion', 'debris', 'diabetes', 'energy', 'equipment', 'elk', 'excretion', 'expertise', 'flounder', 'fun', 'gallows', 'garbage', 'graffiti', 'headquarters', 'health', 'herpes', 'highjinks', 'homework', 'housework', 'information', 'jeans', 'justice', 'kudos', 'labour', 'literature', 'machinery', 'mackerel', 'media', 'mews', 'moose', 'music', 'news', 'pike', 'plankton', 'pliers', 'pollution', 'premises', 'rain', 'research', 'rice', 'salmon', 'scissors', 'series', 'sewage', 'shambles', 'shrimp', 'species', 'staff', 'swine', 'trout', 'traffic', 'transporation', 'tuna', 'wealth', 'welfare', 'whiting', 'wildebeest', 'wildlife', 'you',
	// Regexes.
	/pox$/i, // "chickpox", "smallpox"
	/ois$/i, /deer$/i, // "deer", "reindeer"
	/fish$/i, // "fish", "blowfish", "angelfish"
	/sheep$/i, /measles$/i, /[^aeiou]ese$/i // "chinese", "japanese"
	].forEach(pluralize.addUncountableRule);
	
	var PluralPipe = exports.PluralPipe = (_dec = (0, _core.Pipe)({ name: 'plural' }), _dec2 = (0, _core.Injectable)(), _dec(_class = _dec2(_class = function () {
	    function PluralPipe() {
	        _classCallCheck(this, PluralPipe);
	    }
	
	    _createClass(PluralPipe, [{
	        key: 'transform',
	        value: function transform(value) {
	            return pluralize(value);
	        }
	    }]);
	
	    return PluralPipe;
	}()) || _class) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9waXBlcy9wbHVyYWwvUGx1cmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBSUEsSUFBSSxjQUFjLEVBQWxCO0FBQ0EsSUFBSSxnQkFBZ0IsRUFBcEI7QUFDQSxJQUFJLGVBQWUsRUFBbkI7QUFDQSxJQUFJLG1CQUFtQixFQUF2QjtBQUNBLElBQUksbUJBQW1CLEVBQXZCOzs7Ozs7O0FBT0EsU0FBUyxXQUFULENBQXFCLEdBQXJCLEVBQTBCO0FBQ3RCLFdBQU8sSUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLFdBQWQsS0FBOEIsSUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLFdBQWQsRUFBckM7QUFDSDs7Ozs7OztBQU9ELFNBQVMsWUFBVCxDQUFzQixJQUF0QixFQUE0QjtBQUN4QixRQUFJLE9BQU8sSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUMxQixlQUFPLElBQUksTUFBSixDQUFXLE1BQU0sSUFBTixHQUFhLEdBQXhCLEVBQTZCLEdBQTdCLENBQVAsQztBQUNIO0FBQ0QsV0FBTyxJQUFQO0FBQ0g7Ozs7Ozs7OztBQVNELFNBQVMsV0FBVCxDQUFxQixJQUFyQixFQUEyQixLQUEzQixFQUFrQzs7QUFFOUIsUUFBSSxTQUFTLEtBQUssV0FBTCxFQUFiLEVBQWlDO0FBQzdCLGVBQU8sTUFBTSxXQUFOLEVBQVA7QUFDSDs7O0FBR0QsUUFBSSxLQUFLLENBQUwsTUFBWSxLQUFLLENBQUwsRUFBUSxXQUFSLEVBQWhCLEVBQXVDO0FBQ25DLGVBQU8sWUFBWSxLQUFaLENBQVA7QUFDSDs7O0FBR0QsV0FBTyxNQUFNLFdBQU4sRUFBUDtBQUNIOzs7Ozs7OztBQVFELFNBQVMsV0FBVCxDQUFxQixHQUFyQixFQUEwQixJQUExQixFQUFnQztBQUM1QixXQUFPLElBQUksT0FBSixDQUFZLGNBQVosRUFBNEIsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUNqRCxlQUFPLEtBQUssS0FBTCxLQUFlLEVBQXRCO0FBQ0gsS0FGTSxDQUFQO0FBR0g7Ozs7Ozs7OztBQVNELFNBQVMsWUFBVCxDQUFzQixLQUF0QixFQUE2QixJQUE3QixFQUFtQyxVQUFuQyxFQUErQzs7QUFFM0MsUUFBSSxDQUFDLE1BQU0sTUFBUCxJQUFpQixhQUFhLGNBQWIsQ0FBNEIsS0FBNUIsQ0FBckIsRUFBeUQ7QUFDckQsZUFBTyxJQUFQO0FBQ0g7O0FBRUQsUUFBSSxNQUFNLFdBQVcsTUFBckI7OztBQU4yQztBQVN2QyxZQUFJLE9BQU8sV0FBVyxHQUFYLENBQVg7O0FBRUEsWUFBSSxLQUFLLENBQUwsRUFBUSxJQUFSLENBQWEsSUFBYixDQUFKLEVBQXdCO0FBQ3BCO0FBQUEsbUJBQU8sS0FBSyxPQUFMLENBQWEsS0FBSyxDQUFMLENBQWIsRUFBc0IsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBeUI7QUFDbEQsd0JBQUksU0FBUyxZQUFZLEtBQUssQ0FBTCxDQUFaLEVBQXFCLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLENBQXJCLENBQWI7QUFDQSx3QkFBSSxVQUFVLEVBQWQsRUFBa0I7QUFDZCwrQkFBTyxZQUFZLE1BQU0sUUFBUSxDQUFkLENBQVosRUFBOEIsTUFBOUIsQ0FBUDtBQUNIO0FBQ0QsMkJBQU8sWUFBWSxLQUFaLEVBQW1CLE1BQW5CLENBQVA7QUFDSCxpQkFOTTtBQUFQO0FBT0g7QUFuQnNDOztBQVEzQyxXQUFPLEtBQVAsRUFBYztBQUFBOztBQUFBO0FBWWI7QUFDRCxXQUFPLElBQVA7QUFDSDs7Ozs7Ozs7O0FBU0QsU0FBUyxXQUFULENBQXFCLFVBQXJCLEVBQWlDLE9BQWpDLEVBQTBDLEtBQTFDLEVBQWlEO0FBQzdDLFdBQU8sVUFBQyxJQUFELEVBQVU7O0FBRWIsWUFBSSxRQUFRLEtBQUssV0FBTCxFQUFaOzs7QUFHQSxZQUFJLFFBQVEsY0FBUixDQUF1QixLQUF2QixDQUFKLEVBQW1DO0FBQy9CLG1CQUFPLFlBQVksSUFBWixFQUFrQixLQUFsQixDQUFQO0FBQ0g7OztBQUdELFlBQUksV0FBVyxjQUFYLENBQTBCLEtBQTFCLENBQUosRUFBc0M7QUFDbEMsbUJBQU8sWUFBWSxJQUFaLEVBQWtCLFdBQVcsS0FBWCxDQUFsQixDQUFQO0FBQ0g7OztBQUdELGVBQU8sYUFBYSxLQUFiLEVBQW9CLElBQXBCLEVBQTBCLEtBQTFCLENBQVA7QUFDSCxLQWhCRDtBQWlCSDs7Ozs7Ozs7O0FBU0QsU0FBUyxTQUFULENBQW1CLElBQW5CLEVBQXlCLEtBQXpCLEVBQWdDLFNBQWhDLEVBQTJDO0FBQ3ZDLFFBQUksYUFBYSxVQUFVLENBQVYsR0FBYyxVQUFVLFFBQVYsQ0FBbUIsSUFBbkIsQ0FBZCxHQUF5QyxVQUFVLE1BQVYsQ0FBaUIsSUFBakIsQ0FBMUQ7QUFDQSxXQUFPLENBQUMsWUFBZSxLQUFmLFNBQTBCLEVBQTNCLElBQWlDLFVBQXhDO0FBQ0g7Ozs7O0FBS0QsVUFBVSxNQUFWLEdBQW1CLFlBQVksZ0JBQVosRUFBOEIsZ0JBQTlCLEVBQWdELFdBQWhELENBQW5COzs7OztBQUtBLFVBQVUsUUFBVixHQUFxQixZQUFZLGdCQUFaLEVBQThCLGdCQUE5QixFQUFnRCxhQUFoRCxDQUFyQjs7Ozs7OztBQU9BLFVBQVUsYUFBVixHQUEwQixVQUFDLElBQUQsRUFBTyxXQUFQLEVBQXVCO0FBQzdDLGdCQUFZLElBQVosQ0FBaUIsQ0FBQyxhQUFhLElBQWIsQ0FBRCxFQUFxQixXQUFyQixDQUFqQjtBQUNILENBRkQ7Ozs7Ozs7QUFTQSxVQUFVLGVBQVYsR0FBNEIsVUFBQyxJQUFELEVBQU8sV0FBUCxFQUF1QjtBQUMvQyxrQkFBYyxJQUFkLENBQW1CLENBQUMsYUFBYSxJQUFiLENBQUQsRUFBcUIsV0FBckIsQ0FBbkI7QUFDSCxDQUZEOzs7Ozs7QUFRQSxVQUFVLGtCQUFWLEdBQStCLFVBQUMsSUFBRCxFQUFVO0FBQ3JDLFFBQUksT0FBTyxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzFCLHFCQUFhLEtBQUssV0FBTCxFQUFiLElBQW1DLElBQW5DO0FBQ0E7QUFDSDs7O0FBR0QsY0FBVSxhQUFWLENBQXdCLElBQXhCLEVBQThCLElBQTlCO0FBQ0EsY0FBVSxlQUFWLENBQTBCLElBQTFCLEVBQWdDLElBQWhDO0FBQ0gsQ0FURDs7Ozs7OztBQWdCQSxVQUFVLGdCQUFWLEdBQTZCLFVBQUMsTUFBRCxFQUFTLE1BQVQsRUFBb0I7QUFDN0MsUUFBSSxNQUFNLE9BQU8sV0FBUCxFQUFWO0FBQ0EsUUFBSSxPQUFPLE9BQU8sV0FBUCxFQUFYOztBQUVBLHFCQUFpQixHQUFqQixJQUF3QixJQUF4QjtBQUNBLHFCQUFpQixJQUFqQixJQUF5QixHQUF6QjtBQUNILENBTkQ7Ozs7O0FBV0E7O0FBRUksQ0FBQyxHQUFELEVBQU0sSUFBTixDQUZKLEVBR0ksQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUhKLEVBSUksQ0FBQyxJQUFELEVBQU8sTUFBUCxDQUpKLEVBS0ksQ0FBQyxLQUFELEVBQVEsTUFBUixDQUxKLEVBTUksQ0FBQyxNQUFELEVBQVMsTUFBVCxDQU5KLEVBT0ksQ0FBQyxRQUFELEVBQVcsV0FBWCxDQVBKLEVBUUksQ0FBQyxVQUFELEVBQWEsWUFBYixDQVJKLEVBU0ksQ0FBQyxRQUFELEVBQVcsWUFBWCxDQVRKLEVBVUksQ0FBQyxTQUFELEVBQVksWUFBWixDQVZKLEVBV0ksQ0FBQyxTQUFELEVBQVksWUFBWixDQVhKLEVBWUksQ0FBQyxVQUFELEVBQWEsWUFBYixDQVpKLEVBYUksQ0FBQyxJQUFELEVBQU8sS0FBUCxDQWJKLEVBY0ksQ0FBQyxNQUFELEVBQVMsT0FBVCxDQWRKLEVBZUksQ0FBQyxNQUFELEVBQVMsT0FBVCxDQWZKOztBQWlCSSxDQUFDLE1BQUQsRUFBUyxRQUFULENBakJKLEVBa0JJLENBQUMsT0FBRCxFQUFVLFNBQVYsQ0FsQkosRUFtQkksQ0FBQyxTQUFELEVBQVksV0FBWixDQW5CSixFQW9CSSxDQUFDLFNBQUQsRUFBWSxXQUFaLENBcEJKLEVBcUJJLENBQUMsU0FBRCxFQUFZLFdBQVosQ0FyQko7O0FBdUJJLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0F2QkosRUF3QkksQ0FBQyxRQUFELEVBQVcsU0FBWCxDQXhCSjs7QUEwQkksQ0FBQyxRQUFELEVBQVcsVUFBWCxDQTFCSixFQTJCSSxDQUFDLE9BQUQsRUFBVSxTQUFWLENBM0JKLEVBNEJJLENBQUMsT0FBRCxFQUFVLFNBQVYsQ0E1QkosRUE2QkksQ0FBQyxPQUFELEVBQVUsU0FBVixDQTdCSixFQThCSSxDQUFDLFFBQUQsRUFBVyxVQUFYLENBOUJKLEVBK0JJLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0EvQko7O0FBaUNJLENBQUMsSUFBRCxFQUFPLE1BQVAsQ0FqQ0osRUFrQ0ksQ0FBQyxLQUFELEVBQVEsTUFBUixDQWxDSixFQW1DSSxDQUFDLEtBQUQsRUFBUSxNQUFSLENBbkNKLEVBb0NJLENBQUMsS0FBRCxFQUFRLE9BQVIsQ0FwQ0osRUFxQ0ksQ0FBQyxNQUFELEVBQVMsTUFBVCxDQXJDSixFQXNDSSxDQUFDLE1BQUQsRUFBUyxPQUFULENBdENKLEVBdUNJLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0F2Q0osRUF3Q0ksQ0FBQyxPQUFELEVBQVUsT0FBVixDQXhDSixFQXlDSSxDQUFDLE1BQUQsRUFBUyxTQUFULENBekNKLEVBMENJLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0ExQ0osRUEyQ0ksQ0FBQyxPQUFELEVBQVUsUUFBVixDQTNDSixFQTRDSSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBNUNKLEVBNkNJLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0E3Q0osRUE4Q0ksQ0FBQyxPQUFELEVBQVUsU0FBVixDQTlDSixFQStDSSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBL0NKLEVBZ0RJLENBQUMsUUFBRCxFQUFXLFNBQVgsQ0FoREosRUFpREksQ0FBQyxTQUFELEVBQVksVUFBWixDQWpESixFQWtESSxDQUFDLFNBQUQsRUFBWSxVQUFaLENBbERKLEVBbURFLE9BbkRGLENBbURVLFVBQUMsSUFBRCxFQUFVO0FBQ2hCLFdBQU8sVUFBVSxnQkFBVixDQUEyQixLQUFLLENBQUwsQ0FBM0IsRUFBb0MsS0FBSyxDQUFMLENBQXBDLENBQVA7QUFDSCxDQXJERDs7Ozs7QUEwREEsQ0FDSSxDQUFDLE1BQUQsRUFBUyxHQUFULENBREosRUFFSSxDQUFDLGlCQUFELEVBQW9CLElBQXBCLENBRkosRUFHSSxDQUFDLGVBQUQsRUFBa0IsTUFBbEIsQ0FISixFQUlJLENBQUMsaUNBQUQsRUFBb0MsTUFBcEMsQ0FKSixFQUtJLENBQUMsY0FBRCxFQUFpQixLQUFqQixDQUxKLEVBTUksQ0FBQyx5Q0FBRCxFQUE0QyxJQUE1QyxDQU5KLEVBT0ksQ0FBQyxpR0FBRCxFQUFvRyxLQUFwRyxDQVBKLEVBUUksQ0FBQywrQkFBRCxFQUFrQyxNQUFsQyxDQVJKLEVBU0ksQ0FBQywwQkFBRCxFQUE2QixNQUE3QixDQVRKLEVBVUksQ0FBQyxnQkFBRCxFQUFtQixPQUFuQixDQVZKLEVBV0ksQ0FBQyx1SEFBRCxFQUEwSCxLQUExSCxDQVhKLEVBWUksQ0FBQyxvR0FBRCxFQUF1RyxLQUF2RyxDQVpKLEVBYUksQ0FBQyxPQUFELEVBQVUsS0FBVixDQWJKLEVBY0ksQ0FBQywwQ0FBRCxFQUE2QyxTQUE3QyxDQWRKLEVBZUksQ0FBQyxtQkFBRCxFQUFzQixPQUF0QixDQWZKLEVBZ0JJLENBQUMsc0JBQUQsRUFBeUIsT0FBekIsQ0FoQkosRUFpQkksQ0FBQyxtQkFBRCxFQUFzQixNQUF0QixDQWpCSixFQWtCSSxDQUFDLCtDQUFELEVBQWtELFFBQWxELENBbEJKLEVBbUJJLENBQUMscUJBQUQsRUFBd0IsT0FBeEIsQ0FuQkosRUFvQkksQ0FBQyxxQkFBRCxFQUF3QixRQUF4QixDQXBCSixFQXFCSSxDQUFDLG1CQUFELEVBQXNCLE9BQXRCLENBckJKLEVBc0JJLENBQUMsUUFBRCxFQUFXLElBQVgsQ0F0QkosRUF1QkksQ0FBQyxVQUFELEVBQWEsS0FBYixDQXZCSixFQXdCSSxDQUFDLE1BQUQsRUFBUyxLQUFULENBeEJKLEVBeUJFLE9BekJGLENBeUJVLFVBQUMsSUFBRCxFQUFVO0FBQ2hCLFdBQU8sVUFBVSxhQUFWLENBQXdCLEtBQUssQ0FBTCxDQUF4QixFQUFpQyxLQUFLLENBQUwsQ0FBakMsQ0FBUDtBQUNILENBM0JEOzs7OztBQWdDQSxDQUNJLENBQUMsS0FBRCxFQUFRLEVBQVIsQ0FESixFQUVJLENBQUMsUUFBRCxFQUFXLElBQVgsQ0FGSixFQUdJLENBQUMsd0VBQUQsRUFBMkUsT0FBM0UsQ0FISixFQUlJLENBQUMsdUJBQUQsRUFBMEIsT0FBMUIsQ0FKSixFQUtJLENBQUMsK0RBQUQsRUFBa0UsTUFBbEUsQ0FMSixFQU1JLENBQUMsaUNBQUQsRUFBb0MsS0FBcEMsQ0FOSixFQU9JLENBQUMscUJBQUQsRUFBd0IsS0FBeEIsQ0FQSixFQVFJLENBQUMsNkNBQUQsRUFBZ0QsTUFBaEQsQ0FSSixFQVNJLENBQUMsdUJBQUQsRUFBMEIsTUFBMUIsQ0FUSixFQVVJLENBQUMsWUFBRCxFQUFlLFFBQWYsQ0FWSixFQVdJLENBQUMscUJBQUQsRUFBd0IsSUFBeEIsQ0FYSixFQVlJLENBQUMsZ0ZBQUQsRUFBbUYsSUFBbkYsQ0FaSixFQWFJLENBQUMsY0FBRCxFQUFpQixJQUFqQixDQWJKLEVBY0ksQ0FBQyxtQkFBRCxFQUFzQixJQUF0QixDQWRKLEVBZUksQ0FBQyxnQ0FBRCxFQUFtQyxNQUFuQyxDQWZKLEVBZ0JJLENBQUMsaUdBQUQsRUFBb0csTUFBcEcsQ0FoQkosRUFpQkksQ0FBQyx3R0FBRCxFQUEyRyxNQUEzRyxDQWpCSixFQWtCSSxDQUFDLDZGQUFELEVBQWdHLE1BQWhHLENBbEJKLEVBbUJJLENBQUMseUJBQUQsRUFBNEIsS0FBNUIsQ0FuQkosRUFvQkksQ0FBQyw4QkFBRCxFQUFpQyxNQUFqQyxDQXBCSixFQXFCSSxDQUFDLHFCQUFELEVBQXdCLE1BQXhCLENBckJKLEVBc0JJLENBQUMsbUJBQUQsRUFBc0IsUUFBdEIsQ0F0QkosRUF1QkksQ0FBQyxjQUFELEVBQWlCLElBQWpCLENBdkJKLEVBd0JJLENBQUMsV0FBRCxFQUFjLElBQWQsQ0F4QkosRUF5QkksQ0FBQyxPQUFELEVBQVUsS0FBVixDQXpCSixFQTBCRSxPQTFCRixDQTBCVSxVQUFDLElBQUQsRUFBVTtBQUNoQixXQUFPLFVBQVUsZUFBVixDQUEwQixLQUFLLENBQUwsQ0FBMUIsRUFBbUMsS0FBSyxDQUFMLENBQW5DLENBQVA7QUFDSCxDQTVCRDs7Ozs7QUFpQ0E7O0FBRUksUUFGSixFQUdJLFdBSEosRUFJSSxRQUpKLEVBS0ksS0FMSixFQU1JLFNBTkosRUFPSSxNQVBKLEVBUUksV0FSSixFQVNJLE9BVEosRUFVSSxPQVZKLEVBV0ksT0FYSixFQVlJLFNBWkosRUFhSSxRQWJKLEVBY0ksTUFkSixFQWVJLE1BZkosRUFnQkksU0FoQkosRUFpQkksT0FqQkosRUFrQkksVUFsQkosRUFtQkksVUFuQkosRUFvQkksS0FwQkosRUFxQkksYUFyQkosRUFzQkksT0F0QkosRUF1QkksV0F2QkosRUF3QkksUUF4QkosRUF5QkksVUF6QkosRUEwQkksUUExQkosRUEyQkksV0EzQkosRUE0QkksS0E1QkosRUE2QkksV0E3QkosRUE4QkksV0E5QkosRUErQkksVUEvQkosRUFnQ0ksS0FoQ0osRUFpQ0ksU0FqQ0osRUFrQ0ksU0FsQ0osRUFtQ0ksVUFuQ0osRUFvQ0ksY0FwQ0osRUFxQ0ksUUFyQ0osRUFzQ0ksUUF0Q0osRUF1Q0ksV0F2Q0osRUF3Q0ksVUF4Q0osRUF5Q0ksV0F6Q0osRUEwQ0ksYUExQ0osRUEyQ0ksT0EzQ0osRUE0Q0ksU0E1Q0osRUE2Q0ksT0E3Q0osRUE4Q0ksUUE5Q0osRUErQ0ksWUEvQ0osRUFnREksV0FoREosRUFpREksVUFqREosRUFrREksT0FsREosRUFtREksTUFuREosRUFvREksT0FwREosRUFxREksT0FyREosRUFzREksTUF0REosRUF1REksTUF2REosRUF3REksVUF4REosRUF5REksUUF6REosRUEwREksV0ExREosRUEyREksVUEzREosRUE0REksTUE1REosRUE2REksVUE3REosRUE4REksTUE5REosRUErREksUUEvREosRUFnRUksVUFoRUosRUFpRUksUUFqRUosRUFrRUksUUFsRUosRUFtRUksVUFuRUosRUFvRUksUUFwRUosRUFxRUksU0FyRUosRUFzRUksT0F0RUosRUF1RUksT0F2RUosRUF3RUksT0F4RUosRUF5RUksU0F6RUosRUEwRUksZUExRUosRUEyRUksTUEzRUosRUE0RUksUUE1RUosRUE2RUksU0E3RUosRUE4RUksU0E5RUosRUErRUksWUEvRUosRUFnRkksVUFoRkosRUFpRkksS0FqRko7O0FBbUZJLE9BbkZKLEU7QUFvRkksT0FwRkosRUFxRkksUUFyRkosRTtBQXNGSSxRQXRGSixFO0FBdUZJLFNBdkZKLEVBd0ZJLFdBeEZKLEVBeUZJLGU7QUF6RkosRUEwRkUsT0ExRkYsQ0EwRlUsVUFBVSxrQkExRnBCOztJQThGYSxVLFdBQUEsVSxXQUZaLGdCQUFLLEVBQUUsTUFBTSxRQUFSLEVBQUwsQyxVQUNBLHVCOzs7Ozs7O2tDQUVhLEssRUFBTztBQUNiLG1CQUFPLFVBQVUsS0FBVixDQUFQO0FBQ0giLCJmaWxlIjoiUGx1cmFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9iaC9ub3ZvL2FwcHMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuLy8gUnVsZSBzdG9yYWdlIC0gcGx1cmFsaXplIGFuZCBzaW5ndWxhcml6ZSBuZWVkIHRvIGJlIHJ1biBzZXF1ZW50aWFsbHksXG4vLyB3aGlsZSBvdGhlciBydWxlcyBjYW4gYmUgb3B0aW1pemVkIHVzaW5nIGFuIG9iamVjdCBmb3IgaW5zdGFudCBsb29rdXBzLlxubGV0IHBsdXJhbFJ1bGVzID0gW107XG5sZXQgc2luZ3VsYXJSdWxlcyA9IFtdO1xubGV0IHVuY291bnRhYmxlcyA9IHt9O1xubGV0IGlycmVndWxhclBsdXJhbHMgPSB7fTtcbmxldCBpcnJlZ3VsYXJTaW5nbGVzID0ge307XG5cbi8qKlxuICogVGl0bGUgY2FzZSBhIHN0cmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBTYW5pdGl6ZSBhIHBsdXJhbGl6YXRpb24gcnVsZSB0byBhIHVzYWJsZSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKiBAcGFyYW0geyhSZWdFeHB8c3RyaW5nKX0gcnVsZVxuICogQHJldHVybiB7UmVnRXhwfVxuICovXG5mdW5jdGlvbiBzYW5pdGl6ZVJ1bGUocnVsZSkge1xuICAgIGlmICh0eXBlb2YgcnVsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcnVsZSArICckJywgJ2knKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIH1cbiAgICByZXR1cm4gcnVsZTtcbn1cblxuLyoqXG4gKiBQYXNzIGluIGEgd29yZCB0b2tlbiB0byBwcm9kdWNlIGEgZnVuY3Rpb24gdGhhdCBjYW4gcmVwbGljYXRlIHRoZSBjYXNlIG9uXG4gKiBhbm90aGVyIHdvcmQuXG4gKiBAcGFyYW0ge3N0cmluZ30gd29yZFxuICogQHBhcmFtIHtzdHJpbmd9IHRva2VuXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHJlc3RvcmVDYXNlKHdvcmQsIHRva2VuKSB7XG4gICAgLy8gVXBwZXIgY2FzZWQgd29yZHMuIEUuZy4gXCJIRUxMT1wiLlxuICAgIGlmICh3b3JkID09PSB3b3JkLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgcmV0dXJuIHRva2VuLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLy8gVGl0bGUgY2FzZWQgd29yZHMuIEUuZy4gXCJUaXRsZVwiLlxuICAgIGlmICh3b3JkWzBdID09PSB3b3JkWzBdLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgcmV0dXJuIHRvVGl0bGVDYXNlKHRva2VuKTtcbiAgICB9XG5cbiAgICAvLyBMb3dlciBjYXNlZCB3b3Jkcy4gRS5nLiBcInRlc3RcIi5cbiAgICByZXR1cm4gdG9rZW4udG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBJbnRlcnBvbGF0ZSBhIHJlZ2V4cCBzdHJpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGludGVycG9sYXRlKHN0ciwgYXJncykge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFwkKFxcZHsxLDJ9KS9nLCAobWF0Y2gsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBhcmdzW2luZGV4XSB8fCAnJztcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBTYW5pdGl6ZSBhIHdvcmQgYnkgcGFzc2luZyBpbiB0aGUgd29yZCBhbmQgc2FuaXRpemF0aW9uIHJ1bGVzLlxuICogQHBhcmFtICB7U3RyaW5nfSAgIHRva2VuXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgd29yZFxuICogQHBhcmFtICB7QXJyYXl9ICAgIGNvbGxlY3Rpb25cbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc2FuaXRpemVXb3JkKHRva2VuLCB3b3JkLCBjb2xsZWN0aW9uKSB7XG4gICAgLy8gRW1wdHkgc3RyaW5nIG9yIGRvZXNuJ3QgbmVlZCBmaXhpbmcuXG4gICAgaWYgKCF0b2tlbi5sZW5ndGggfHwgdW5jb3VudGFibGVzLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuICAgICAgICByZXR1cm4gd29yZDtcbiAgICB9XG5cbiAgICBsZXQgbGVuID0gY29sbGVjdGlvbi5sZW5ndGg7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBzYW5pdGl6YXRpb24gcnVsZXMgYW5kIHVzZSB0aGUgZmlyc3Qgb25lIHRvIG1hdGNoLlxuICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICBsZXQgcnVsZSA9IGNvbGxlY3Rpb25bbGVuXTtcbiAgICAgICAgLy8gSWYgdGhlIHJ1bGUgcGFzc2VzLCByZXR1cm4gdGhlIHJlcGxhY2VtZW50LlxuICAgICAgICBpZiAocnVsZVswXS50ZXN0KHdvcmQpKSB7XG4gICAgICAgICAgICByZXR1cm4gd29yZC5yZXBsYWNlKHJ1bGVbMF0sIChtYXRjaCwgaW5kZXgsIHdvcmRzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGludGVycG9sYXRlKHJ1bGVbMV0sIFttYXRjaCwgaW5kZXgsIHdvcmRzXSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdG9yZUNhc2Uod29yZHNbaW5kZXggLSAxXSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3RvcmVDYXNlKG1hdGNoLCByZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHdvcmQ7XG59XG5cbi8qKlxuICogUmVwbGFjZSBhIHdvcmQgd2l0aCB0aGUgdXBkYXRlZCB3b3JkLlxuICogQHBhcmFtIHtPYmplY3R9IHJlcGxhY2VNYXBcbiAqIEBwYXJhbSB7T2JqZWN0fSBrZWVwTWFwXG4gKiBAcGFyYW0ge0FycmF5fSBydWxlc1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VXb3JkKHJlcGxhY2VNYXAsIGtlZXBNYXAsIHJ1bGVzKSB7XG4gICAgcmV0dXJuICh3b3JkKSA9PiB7XG4gICAgICAgIC8vIEdldCB0aGUgY29ycmVjdCB0b2tlbiBhbmQgY2FzZSByZXN0b3JhdGlvbiBmdW5jdGlvbnMuXG4gICAgICAgIGxldCB0b2tlbiA9IHdvcmQudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvLyBDaGVjayBhZ2FpbnN0IHRoZSBrZWVwIG9iamVjdCBtYXAuXG4gICAgICAgIGlmIChrZWVwTWFwLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3RvcmVDYXNlKHdvcmQsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGFnYWluc3QgdGhlIHJlcGxhY2VtZW50IG1hcCBmb3IgYSBkaXJlY3Qgd29yZCByZXBsYWNlbWVudC5cbiAgICAgICAgaWYgKHJlcGxhY2VNYXAuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdG9yZUNhc2Uod29yZCwgcmVwbGFjZU1hcFt0b2tlbl0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUnVuIGFsbCB0aGUgcnVsZXMgYWdhaW5zdCB0aGUgd29yZC5cbiAgICAgICAgcmV0dXJuIHNhbml0aXplV29yZCh0b2tlbiwgd29yZCwgcnVsZXMpO1xuICAgIH07XG59XG5cbi8qKlxuICogUGx1cmFsaXplIG9yIHNpbmd1bGFyaXplIGEgd29yZCBiYXNlZCBvbiB0aGUgcGFzc2VkIGluIGNvdW50LlxuICogQHBhcmFtIHtTdHJpbmd9IHdvcmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudFxuICogQHBhcmFtIHtCb29sZWFufSBpbmNsdXNpdmVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gcGx1cmFsaXplKHdvcmQsIGNvdW50LCBpbmNsdXNpdmUpIHtcbiAgICBsZXQgcGx1cmFsaXplZCA9IGNvdW50ID09PSAxID8gcGx1cmFsaXplLnNpbmd1bGFyKHdvcmQpIDogcGx1cmFsaXplLnBsdXJhbCh3b3JkKTtcbiAgICByZXR1cm4gKGluY2x1c2l2ZSA/IGAke2NvdW50fSBgIDogJycpICsgcGx1cmFsaXplZDtcbn1cblxuLyoqXG4gKiBQbHVyYWxpemUgYSB3b3JkLlxuICovXG5wbHVyYWxpemUucGx1cmFsID0gcmVwbGFjZVdvcmQoaXJyZWd1bGFyU2luZ2xlcywgaXJyZWd1bGFyUGx1cmFscywgcGx1cmFsUnVsZXMpO1xuXG4vKipcbiAqIFNpbmd1bGFyaXplIGEgd29yZC5cbiAqL1xucGx1cmFsaXplLnNpbmd1bGFyID0gcmVwbGFjZVdvcmQoaXJyZWd1bGFyUGx1cmFscywgaXJyZWd1bGFyU2luZ2xlcywgc2luZ3VsYXJSdWxlcyk7XG5cbi8qKlxuICogQWRkIGEgcGx1cmFsaXphdGlvbiBydWxlIHRvIHRoZSBjb2xsZWN0aW9uLlxuICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cCl9IHJ1bGVcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlbWVudFxuICovXG5wbHVyYWxpemUuYWRkUGx1cmFsUnVsZSA9IChydWxlLCByZXBsYWNlbWVudCkgPT4ge1xuICAgIHBsdXJhbFJ1bGVzLnB1c2goW3Nhbml0aXplUnVsZShydWxlKSwgcmVwbGFjZW1lbnRdKTtcbn07XG5cbi8qKlxuICogQWRkIGEgc2luZ3VsYXJpemF0aW9uIHJ1bGUgdG8gdGhlIGNvbGxlY3Rpb24uXG4gKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gcnVsZVxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VtZW50XG4gKi9cbnBsdXJhbGl6ZS5hZGRTaW5ndWxhclJ1bGUgPSAocnVsZSwgcmVwbGFjZW1lbnQpID0+IHtcbiAgICBzaW5ndWxhclJ1bGVzLnB1c2goW3Nhbml0aXplUnVsZShydWxlKSwgcmVwbGFjZW1lbnRdKTtcbn07XG5cbi8qKlxuICogQWRkIGFuIHVuY291bnRhYmxlIHdvcmQgcnVsZS5cbiAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSB3b3JkXG4gKi9cbnBsdXJhbGl6ZS5hZGRVbmNvdW50YWJsZVJ1bGUgPSAod29yZCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd29yZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdW5jb3VudGFibGVzW3dvcmQudG9Mb3dlckNhc2UoKV0gPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2V0IHNpbmd1bGFyIGFuZCBwbHVyYWwgcmVmZXJlbmNlcyBmb3IgdGhlIHdvcmQuXG4gICAgcGx1cmFsaXplLmFkZFBsdXJhbFJ1bGUod29yZCwgJyQwJyk7XG4gICAgcGx1cmFsaXplLmFkZFNpbmd1bGFyUnVsZSh3b3JkLCAnJDAnKTtcbn07XG5cbi8qKlxuICogQWRkIGFuIGlycmVndWxhciB3b3JkIGRlZmluaXRpb24uXG4gKiBAcGFyYW0ge1N0cmluZ30gc2luZ2xlXG4gKiBAcGFyYW0ge1N0cmluZ30gcGx1cmFsXG4gKi9cbnBsdXJhbGl6ZS5hZGRJcnJlZ3VsYXJSdWxlID0gKHNpbmdsZSwgcGx1cmFsKSA9PiB7XG4gICAgbGV0IG9uZSA9IHBsdXJhbC50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBtYW55ID0gc2luZ2xlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpcnJlZ3VsYXJTaW5nbGVzW29uZV0gPSBtYW55O1xuICAgIGlycmVndWxhclBsdXJhbHNbbWFueV0gPSBvbmU7XG59O1xuXG4vKipcbiAqIElycmVndWxhciBydWxlcy5cbiAqL1xuW1xuICAgIC8vIFByb25vdW5zLlxuICAgIFsnSScsICd3ZSddLFxuICAgIFsnbWUnLCAndXMnXSxcbiAgICBbJ2hlJywgJ3RoZXknXSxcbiAgICBbJ3NoZScsICd0aGV5J10sXG4gICAgWyd0aGVtJywgJ3RoZW0nXSxcbiAgICBbJ215c2VsZicsICdvdXJzZWx2ZXMnXSxcbiAgICBbJ3lvdXJzZWxmJywgJ3lvdXJzZWx2ZXMnXSxcbiAgICBbJ2l0c2VsZicsICd0aGVtc2VsdmVzJ10sXG4gICAgWydoZXJzZWxmJywgJ3RoZW1zZWx2ZXMnXSxcbiAgICBbJ2hpbXNlbGYnLCAndGhlbXNlbHZlcyddLFxuICAgIFsndGhlbXNlbGYnLCAndGhlbXNlbHZlcyddLFxuICAgIFsnaXMnLCAnYXJlJ10sXG4gICAgWyd0aGlzJywgJ3RoZXNlJ10sXG4gICAgWyd0aGF0JywgJ3Rob3NlJ10sXG4gICAgLy8gV29yZHMgZW5kaW5nIGluIHdpdGggYSBjb25zb25hbnQgYW5kIGBvYC5cbiAgICBbJ2VjaG8nLCAnZWNob2VzJ10sXG4gICAgWydkaW5nbycsICdkaW5nb2VzJ10sXG4gICAgWyd2b2xjYW5vJywgJ3ZvbGNhbm9lcyddLFxuICAgIFsndG9ybmFkbycsICd0b3JuYWRvZXMnXSxcbiAgICBbJ3RvcnBlZG8nLCAndG9ycGVkb2VzJ10sXG4gICAgLy8gRW5kcyB3aXRoIGB1c2AuXG4gICAgWydnZW51cycsICdnZW5lcmEnXSxcbiAgICBbJ3Zpc2N1cycsICd2aXNjZXJhJ10sXG4gICAgLy8gRW5kcyB3aXRoIGBtYWAuXG4gICAgWydzdGlnbWEnLCAnc3RpZ21hdGEnXSxcbiAgICBbJ3N0b21hJywgJ3N0b21hdGEnXSxcbiAgICBbJ2RvZ21hJywgJ2RvZ21hdGEnXSxcbiAgICBbJ2xlbW1hJywgJ2xlbW1hdGEnXSxcbiAgICBbJ3NjaGVtYScsICdzY2hlbWF0YSddLFxuICAgIFsnYW5hdGhlbWEnLCAnYW5hdGhlbWF0YSddLFxuICAgIC8vIE90aGVyIGlycmVndWxhciBydWxlcy5cbiAgICBbJ294JywgJ294ZW4nXSxcbiAgICBbJ2F4ZScsICdheGVzJ10sXG4gICAgWydkaWUnLCAnZGljZSddLFxuICAgIFsneWVzJywgJ3llc2VzJ10sXG4gICAgWydmb290JywgJ2ZlZXQnXSxcbiAgICBbJ2VhdmUnLCAnZWF2ZXMnXSxcbiAgICBbJ2dvb3NlJywgJ2dlZXNlJ10sXG4gICAgWyd0b290aCcsICd0ZWV0aCddLFxuICAgIFsncXVpeicsICdxdWl6emVzJ10sXG4gICAgWydodW1hbicsICdodW1hbnMnXSxcbiAgICBbJ3Byb29mJywgJ3Byb29mcyddLFxuICAgIFsnY2FydmUnLCAnY2FydmVzJ10sXG4gICAgWyd2YWx2ZScsICd2YWx2ZXMnXSxcbiAgICBbJ3RoaWVmJywgJ3RoaWV2ZXMnXSxcbiAgICBbJ2dlbmllJywgJ2dlbmllcyddLFxuICAgIFsnZ3Jvb3ZlJywgJ2dyb292ZXMnXSxcbiAgICBbJ3BpY2theGUnLCAncGlja2F4ZXMnXSxcbiAgICBbJ3doaXNrZXknLCAnd2hpc2tpZXMnXVxuXS5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgcmV0dXJuIHBsdXJhbGl6ZS5hZGRJcnJlZ3VsYXJSdWxlKHJ1bGVbMF0sIHJ1bGVbMV0pO1xufSk7XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBydWxlcy5cbiAqL1xuW1xuICAgIFsvcz8kL2ksICdzJ10sXG4gICAgWy8oW15hZWlvdV1lc2UpJC9pLCAnJDEnXSxcbiAgICBbLyhheHx0ZXN0KWlzJC9pLCAnJDFlcyddLFxuICAgIFsvKGFsaWFzfFteYW91XXVzfHRsYXN8Z2FzfHJpcykkL2ksICckMWVzJ10sXG4gICAgWy8oZVttbl11KXM/JC9pLCAnJDFzJ10sXG4gICAgWy8oW15sXWlhc3xbYWVpb3VdbGFzfFtlbWp6cl1hc3xbaXVdYW0pJC9pLCAnJDEnXSxcbiAgICBbLyhhbHVtbnxzeWxsYWJ8b2N0b3B8dmlyfHJhZGl8bnVjbGV8ZnVuZ3xjYWN0fHN0aW11bHx0ZXJtaW58YmFjaWxsfGZvY3x1dGVyfGxvY3xzdHJhdCkoPzp1c3xpKSQvaSwgJyQxaSddLFxuICAgIFsvKGFsdW1ufGFsZ3x2ZXJ0ZWJyKSg/OmF8YWUpJC9pLCAnJDFhZSddLFxuICAgIFsvKHNlcmFwaHxjaGVydWIpKD86aW0pPyQvaSwgJyQxaW0nXSxcbiAgICBbLyhoZXJ8YXR8Z3IpbyQvaSwgJyQxb2VzJ10sXG4gICAgWy8oYWdlbmR8YWRkZW5kfG1pbGxlbm5pfGRhdHxleHRyZW18YmFjdGVyaXxkZXNpZGVyYXR8c3RyYXR8Y2FuZGVsYWJyfGVycmF0fG92fHN5bXBvc2l8Y3VycmljdWx8YXV0b21hdHxxdW9yKSg/OmF8dW0pJC9pLCAnJDFhJ10sXG4gICAgWy8oYXBoZWxpfGh5cGVyYmF0fHBlcmloZWxpfGFzeW5kZXR8bm91bWVufHBoZW5vbWVufGNyaXRlcml8b3JnYW58cHJvbGVnb21lbnxoZWRyfGF1dG9tYXQpKD86YXxvbikkL2ksICckMWEnXSxcbiAgICBbL3NpcyQvaSwgJ3NlcyddLFxuICAgIFsvKD86KGtuaXx3aXxsaSlmZXwoYXJ8bHxlYXxlb3xvYXxob28pZikkL2ksICckMSQydmVzJ10sXG4gICAgWy8oW15hZWlvdXldfHF1KXkkL2ksICckMWllcyddLFxuICAgIFsvKFteY2hdW2llb11bbG5dKWV5JC9pLCAnJDFpZXMnXSxcbiAgICBbLyh4fGNofHNzfHNofHp6KSQvaSwgJyQxZXMnXSxcbiAgICBbLyhtYXRyfGNvZHxtdXJ8c2lsfHZlcnR8aW5kfGFwcGVuZCkoPzppeHxleCkkL2ksICckMWljZXMnXSxcbiAgICBbLyhtfGwpKD86aWNlfG91c2UpJC9pLCAnJDFpY2UnXSxcbiAgICBbLyhwZSkoPzpyc29ufG9wbGUpJC9pLCAnJDFvcGxlJ10sXG4gICAgWy8oY2hpbGQpKD86cmVuKT8kL2ksICckMXJlbiddLFxuICAgIFsvZWF1eCQvaSwgJyQwJ10sXG4gICAgWy9tW2FlXW4kL2ksICdtZW4nXSxcbiAgICBbJ3Rob3UnLCAneW91J11cbl0uZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgIHJldHVybiBwbHVyYWxpemUuYWRkUGx1cmFsUnVsZShydWxlWzBdLCBydWxlWzFdKTtcbn0pO1xuXG4vKipcbiAqIFNpbmd1bGFyaXphdGlvbiBydWxlcy5cbiAqL1xuW1xuICAgIFsvcyQvaSwgJyddLFxuICAgIFsvKHNzKSQvaSwgJyQxJ10sXG4gICAgWy8oKGEpbmFseXwoYilhfChkKWlhZ25vfChwKWFyZW50aGV8KHApcm9nbm98KHMpeW5vcHwodCloZSkoPzpzaXN8c2VzKSQvaSwgJyQxc2lzJ10sXG4gICAgWy8oXmFuYWx5KSg/OnNpc3xzZXMpJC9pLCAnJDFzaXMnXSxcbiAgICBbLyh3aXxrbml8KD86YWZ0ZXJ8aGFsZnxoaWdofGxvd3xtaWR8bm9ufG5pZ2h0fFteXFx3XXxeKWxpKXZlcyQvaSwgJyQxZmUnXSxcbiAgICBbLyhhcnwoPzp3b3xbYWVdKWx8W2VvXVthb10pdmVzJC9pLCAnJDFmJ10sXG4gICAgWy8oW15hZWlvdXldfHF1KWllcyQvaSwgJyQxeSddLFxuICAgIFsvKF5bcGxdfHpvbWJ8Xig/Om5lY2spP3R8W2Flb11bbHRdfGN1dClpZXMkL2ksICckMWllJ10sXG4gICAgWy8oXFxiKD86bW9ufHNtaWwpKWllcyQvaSwgJyQxZXknXSxcbiAgICBbLyhtfGwpaWNlJC9pLCAnJDFvdXNlJ10sXG4gICAgWy8oc2VyYXBofGNoZXJ1YilpbSQvaSwgJyQxJ10sXG4gICAgWy8oeHxjaHxzc3xzaHx6enx0dG98Z298Y2hvfGFsaWFzfFteYW91XXVzfHRsYXN8Z2FzfCg/OmhlcnxhdHxncilvfHJpcykoPzplcyk/JC9pLCAnJDEnXSxcbiAgICBbLyhlW21uXXUpcz8kL2ksICckMSddLFxuICAgIFsvKG1vdmllfHR3ZWx2ZSlzJC9pLCAnJDEnXSxcbiAgICBbLyhjcmlzfHRlc3R8ZGlhZ25vcykoPzppc3xlcykkL2ksICckMWlzJ10sXG4gICAgWy8oYWx1bW58c3lsbGFifG9jdG9wfHZpcnxyYWRpfG51Y2xlfGZ1bmd8Y2FjdHxzdGltdWx8dGVybWlufGJhY2lsbHxmb2N8dXRlcnxsb2N8c3RyYXQpKD86dXN8aSkkL2ksICckMXVzJ10sXG4gICAgWy8oYWdlbmR8YWRkZW5kfG1pbGxlbm5pfGRhdHxleHRyZW18YmFjdGVyaXxkZXNpZGVyYXR8c3RyYXR8Y2FuZGVsYWJyfGVycmF0fG92fHN5bXBvc2l8Y3VycmljdWx8cXVvcilhJC9pLCAnJDF1bSddLFxuICAgIFsvKGFwaGVsaXxoeXBlcmJhdHxwZXJpaGVsaXxhc3luZGV0fG5vdW1lbnxwaGVub21lbnxjcml0ZXJpfG9yZ2FufHByb2xlZ29tZW58aGVkcnxhdXRvbWF0KWEkL2ksICckMW9uJ10sXG4gICAgWy8oYWx1bW58YWxnfHZlcnRlYnIpYWUkL2ksICckMWEnXSxcbiAgICBbLyhjb2R8bXVyfHNpbHx2ZXJ0fGluZClpY2VzJC9pLCAnJDFleCddLFxuICAgIFsvKG1hdHJ8YXBwZW5kKWljZXMkL2ksICckMWl4J10sXG4gICAgWy8ocGUpKHJzb258b3BsZSkkL2ksICckMXJzb24nXSxcbiAgICBbLyhjaGlsZClyZW4kL2ksICckMSddLFxuICAgIFsvKGVhdSl4PyQvaSwgJyQxJ10sXG4gICAgWy9tZW4kL2ksICdtYW4nXVxuXS5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgcmV0dXJuIHBsdXJhbGl6ZS5hZGRTaW5ndWxhclJ1bGUocnVsZVswXSwgcnVsZVsxXSk7XG59KTtcblxuLyoqXG4gKiBVbmNvdW50YWJsZSBydWxlcy5cbiAqL1xuW1xuICAgIC8vIFNpbmd1bGFyIHdvcmRzIHdpdGggbm8gcGx1cmFscy5cbiAgICAnYWR2aWNlJyxcbiAgICAnYWR1bHRob29kJyxcbiAgICAnYWdlbmRhJyxcbiAgICAnYWlkJyxcbiAgICAnYWxjb2hvbCcsXG4gICAgJ2FtbW8nLFxuICAgICdhdGhsZXRpY3MnLFxuICAgICdiaXNvbicsXG4gICAgJ2Jsb29kJyxcbiAgICAnYnJlYW0nLFxuICAgICdidWZmYWxvJyxcbiAgICAnYnV0dGVyJyxcbiAgICAnY2FycCcsXG4gICAgJ2Nhc2gnLFxuICAgICdjaGFzc2lzJyxcbiAgICAnY2hlc3MnLFxuICAgICdjbG90aGluZycsXG4gICAgJ2NvbW1lcmNlJyxcbiAgICAnY29kJyxcbiAgICAnY29vcGVyYXRpb24nLFxuICAgICdjb3JwcycsXG4gICAgJ2RpZ2VzdGlvbicsXG4gICAgJ2RlYnJpcycsXG4gICAgJ2RpYWJldGVzJyxcbiAgICAnZW5lcmd5JyxcbiAgICAnZXF1aXBtZW50JyxcbiAgICAnZWxrJyxcbiAgICAnZXhjcmV0aW9uJyxcbiAgICAnZXhwZXJ0aXNlJyxcbiAgICAnZmxvdW5kZXInLFxuICAgICdmdW4nLFxuICAgICdnYWxsb3dzJyxcbiAgICAnZ2FyYmFnZScsXG4gICAgJ2dyYWZmaXRpJyxcbiAgICAnaGVhZHF1YXJ0ZXJzJyxcbiAgICAnaGVhbHRoJyxcbiAgICAnaGVycGVzJyxcbiAgICAnaGlnaGppbmtzJyxcbiAgICAnaG9tZXdvcmsnLFxuICAgICdob3VzZXdvcmsnLFxuICAgICdpbmZvcm1hdGlvbicsXG4gICAgJ2plYW5zJyxcbiAgICAnanVzdGljZScsXG4gICAgJ2t1ZG9zJyxcbiAgICAnbGFib3VyJyxcbiAgICAnbGl0ZXJhdHVyZScsXG4gICAgJ21hY2hpbmVyeScsXG4gICAgJ21hY2tlcmVsJyxcbiAgICAnbWVkaWEnLFxuICAgICdtZXdzJyxcbiAgICAnbW9vc2UnLFxuICAgICdtdXNpYycsXG4gICAgJ25ld3MnLFxuICAgICdwaWtlJyxcbiAgICAncGxhbmt0b24nLFxuICAgICdwbGllcnMnLFxuICAgICdwb2xsdXRpb24nLFxuICAgICdwcmVtaXNlcycsXG4gICAgJ3JhaW4nLFxuICAgICdyZXNlYXJjaCcsXG4gICAgJ3JpY2UnLFxuICAgICdzYWxtb24nLFxuICAgICdzY2lzc29ycycsXG4gICAgJ3NlcmllcycsXG4gICAgJ3Nld2FnZScsXG4gICAgJ3NoYW1ibGVzJyxcbiAgICAnc2hyaW1wJyxcbiAgICAnc3BlY2llcycsXG4gICAgJ3N0YWZmJyxcbiAgICAnc3dpbmUnLFxuICAgICd0cm91dCcsXG4gICAgJ3RyYWZmaWMnLFxuICAgICd0cmFuc3BvcmF0aW9uJyxcbiAgICAndHVuYScsXG4gICAgJ3dlYWx0aCcsXG4gICAgJ3dlbGZhcmUnLFxuICAgICd3aGl0aW5nJyxcbiAgICAnd2lsZGViZWVzdCcsXG4gICAgJ3dpbGRsaWZlJyxcbiAgICAneW91JyxcbiAgICAvLyBSZWdleGVzLlxuICAgIC9wb3gkL2ksIC8vIFwiY2hpY2twb3hcIiwgXCJzbWFsbHBveFwiXG4gICAgL29pcyQvaSxcbiAgICAvZGVlciQvaSwgLy8gXCJkZWVyXCIsIFwicmVpbmRlZXJcIlxuICAgIC9maXNoJC9pLCAvLyBcImZpc2hcIiwgXCJibG93ZmlzaFwiLCBcImFuZ2VsZmlzaFwiXG4gICAgL3NoZWVwJC9pLFxuICAgIC9tZWFzbGVzJC9pLFxuICAgIC9bXmFlaW91XWVzZSQvaSAvLyBcImNoaW5lc2VcIiwgXCJqYXBhbmVzZVwiXG5dLmZvckVhY2gocGx1cmFsaXplLmFkZFVuY291bnRhYmxlUnVsZSk7XG5cbkBQaXBlKHsgbmFtZTogJ3BsdXJhbCcgfSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQbHVyYWxQaXBlIHtcbiAgICB0cmFuc2Zvcm0odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHBsdXJhbGl6ZSh2YWx1ZSk7XG4gICAgfVxufVxuIl19

/***/ },

/***/ 233:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Deferred = Deferred;
	/**
	 * A Promise that uses the deferred anti-pattern
	 */
	function Deferred() {
	    var temp = {};
	    var promise = new Promise(function (resolve, reject) {
	        temp.resolve = resolve;
	        temp.reject = reject;
	    });
	    promise.resolve = temp.resolve;
	    promise.reject = temp.reject;
	    return promise;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9kZWZlcnJlZC9EZWZlcnJlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUdnQixRLEdBQUEsUTs7OztBQUFULFNBQVMsUUFBVCxHQUFvQjtBQUN2QixRQUFNLE9BQU8sRUFBYjtBQUNBLFFBQU0sVUFBVSxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQzdDLGFBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxhQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0gsS0FIZSxDQUFoQjtBQUlBLFlBQVEsT0FBUixHQUFrQixLQUFLLE9BQXZCO0FBQ0EsWUFBUSxNQUFSLEdBQWlCLEtBQUssTUFBdEI7QUFDQSxXQUFPLE9BQVA7QUFDSCIsImZpbGUiOiJEZWZlcnJlZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgUHJvbWlzZSB0aGF0IHVzZXMgdGhlIGRlZmVycmVkIGFudGktcGF0dGVyblxuICovXG5leHBvcnQgZnVuY3Rpb24gRGVmZXJyZWQoKSB7XG4gICAgY29uc3QgdGVtcCA9IHt9O1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRlbXAucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIHRlbXAucmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuICAgIHByb21pc2UucmVzb2x2ZSA9IHRlbXAucmVzb2x2ZTtcbiAgICBwcm9taXNlLnJlamVjdCA9IHRlbXAucmVqZWN0O1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuIl19

/***/ }

});
//# sourceMappingURL=lib.2ea1357328bef73d6c07.bundle.map