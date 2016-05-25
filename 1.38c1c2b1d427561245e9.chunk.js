webpackJsonp([1],{

/***/ 831:
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztJQU9hLFcsV0FBQSxXLFdBTFoscUJBQVU7QUFDUCxZQUFRLENBQUMsTUFBRCxDQUREO0FBRVAsY0FBVSxjQUZIO0FBR1AsY0FBVTtBQUhILENBQVYsQzs7Ozs7OzttQ0FNYztBQUNQLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxhQUFMLENBQW1CLEtBQUssSUFBeEIsRUFBOEIsS0FBL0M7QUFDSCIsImZpbGUiOiJDb2RlU25pcHBldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgaW5wdXRzOiBbJ2NvZGUnXSxcbiAgICBzZWxlY3RvcjogJ2NvZGUtc25pcHBldCcsXG4gICAgdGVtcGxhdGU6ICc8cHJlPjxjb2RlIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0XCI+PC9jb2RlPjwvcHJlPidcbn0pXG5leHBvcnQgY2xhc3MgQ29kZVNuaXBwZXQge1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodCA9IGhsanMuaGlnaGxpZ2h0QXV0byh0aGlzLmNvZGUpLnZhbHVlO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PickerCustomNoRecentsTemplate = exports.PickerCustomLoadTemplate = exports.PickerCustomErrorTemplate = exports.PickerCustomNullResults = exports.FormDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class, _dec2, _class2, _dec3, _class3, _dec4, _class4, _dec5, _class5;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(171);
	
	var _CodeSnippet = __webpack_require__(831);
	
	var _AutocompleteFieldDemo = __webpack_require__(855);
	
	var _AutocompleteFieldDemo2 = _interopRequireDefault(_AutocompleteFieldDemo);
	
	var _AutocompleteFieldCustomDemo = __webpack_require__(854);
	
	var _AutocompleteFieldCustomDemo2 = _interopRequireDefault(_AutocompleteFieldCustomDemo);
	
	var _CalendarPickerDemo = __webpack_require__(856);
	
	var _CalendarPickerDemo2 = _interopRequireDefault(_CalendarPickerDemo);
	
	var _CheckboxDemo = __webpack_require__(857);
	
	var _CheckboxDemo2 = _interopRequireDefault(_CheckboxDemo);
	
	var _DynamicFormDemo = __webpack_require__(858);
	
	var _DynamicFormDemo2 = _interopRequireDefault(_DynamicFormDemo);
	
	var _MultiselectDemo = __webpack_require__(859);
	
	var _MultiselectDemo2 = _interopRequireDefault(_MultiselectDemo);
	
	var _RadioButtonsDemo = __webpack_require__(861);
	
	var _RadioButtonsDemo2 = _interopRequireDefault(_RadioButtonsDemo);
	
	var _SelectFieldDemo = __webpack_require__(862);
	
	var _SelectFieldDemo2 = _interopRequireDefault(_SelectFieldDemo);
	
	var _TextInputDemo = __webpack_require__(863);
	
	var _TextInputDemo2 = _interopRequireDefault(_TextInputDemo);
	
	var _QuickNoteInputDemo = __webpack_require__(860);
	
	var _QuickNoteInputDemo2 = _interopRequireDefault(_QuickNoteInputDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Forms <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/form">(source)</a></small></h1>\n    <p>Forms use inputs and labels to submit user content. But you already knew that. What you may not know is that our forms come in two styles \'Static\' and \'Dynamic\'</p>\n\n    <h2>Static Form</h2>\n    <p>Static forms <code>&lt;novo-form /&gt;</code> are composed of a title <code>&lt;form-title /&gt;</code>, and fields <code>&lt;form-field /&gt;</code>. Fields can include a label <code>&lt;form-label /&gt;</code> and input <code>&lt;form-input /&gt;</code>.Form inputs take name, type, and options attributes <code>&lt;form-input name="gender" type="radio" options="[male, female]" /&gt;</code>. Static forms are used to manually build custom forms when you don\'t have access to a form\'s meta data.</p>\n    <p>If you\'re building a static form, you may need to utilize one of many form fields. The following form fields are supported by BH-Elements.</p>\n\n    <h5>Text Input</h5>\n    <p>This is the basic text input field.</p>\n    <div class="example form-demo">' + _TextInputDemo2.default + '</div>\n    <code-snippet [code]="TextInputDemoTpl"></code-snippet>\n\n    <h5>Radio Buttons</h5>\n    <p>Radio buttons allow users to select a single item from a list.</p>\n    <div class="example form-demo">' + _RadioButtonsDemo2.default + '</div>\n    <code-snippet [code]="RadioButtonDemoTpl"></code-snippet>\n\n    <h5>Checkboxes</h5>\n    <p>Checkboxes allow users to select multiple items from a list.</p>\n    <div class="example form-demo">' + _CheckboxDemo2.default + '</div>\n    <code-snippet [code]="CheckboxDemoTpl"></code-snippet>\n\n    <h5>Calendar Picker</h5>\n    <p>Calendar pickers inside a form are alwasy inline and allow users to pick date, time, or both.</p>\n    <div class="example form-demo">' + _CalendarPickerDemo2.default + '</div>\n    <code-snippet [code]="CalendarPickerDemoTpl"></code-snippet>\n\n    <h5>Dropdown</h5>\n    <p>Dropdown select fields allow the user to select from a list of items.</p>\n    <div class="example form-demo">' + _SelectFieldDemo2.default + '</div>\n    <code-snippet [code]="SelectFieldDemoTpl"></code-snippet>\n\n    <h5>Autocomplete Picker Field</h5>\n    <p>Pickers allow a user to search for and select records in the system. When initially opened it will show the last five viewed records.</p>\n    <div class="example form-demo">' + _AutocompleteFieldDemo2.default + '</div>\n    <code-snippet [code]="AutocompleteFieldDemoTpl"></code-snippet>\n\n    <h5>Autocomplete Custom Picker Field</h5>\n    <p>CUSTOM!</p>\n    <div class="example form-demo">' + _AutocompleteFieldCustomDemo2.default + '</div>\n    <code-snippet [code]="AutocompleteFieldCustomDemoTpl"></code-snippet>\n\n    <h5>Multi-Select</h5>\n    <p>This allows the user to select multiple items from a list, or returned via search.</p>\n    <div class="example form-demo">' + _MultiselectDemo2.default + '</div>\n    <code-snippet [code]="MultiselectDemoTpl"></code-snippet>\n    \n    <h5>Note</h5>\n    <p>This allows the user to add a note with references/tags.</p>\n    <div class="example form-demo">' + _QuickNoteInputDemo2.default + '</div>\n    <code-snippet [code]="QuickNoteInputDemoTpl"></code-snippet>\n\n    <h5>Required Fields</h5>\n    <p>Required fields must be filled before the page can advance. Required fields are indicated with a red dot between the label and the field. If a user attempts to advance without filling out a field, all non-required fields will be removed and required fields will be highlighted in red.</p>\n\n    <h2>Dynamic Form</h2>\n    <p>Dynamic forms are composed of one element, <code>&lt;novo-form [meta]="dynamicData"/&gt;</code> and allow you to pass in dynamic data as a <code>[meta]</code> attribute.</p>\n    <div class="example form-demo">' + _DynamicFormDemo2.default + '</div>\n    <code-snippet [code]="DynamicFormDemoTpl"></code-snippet>\n</div>\n';
	
	var FormDemo = exports.FormDemo = (_dec = (0, _core.Component)({
	    selector: 'form-demo',
	    template: template,
	    directives: [_novoElements.NOVO_FORM_ELEMENTS, _novoElements.NOVO_PICKER_ELEMENTS, _novoElements.NOVO_BUTTON_ELEMENTS, _CodeSnippet.CodeSnippet]
	}), _dec(_class = function () {
	    function FormDemo() {
	        _classCallCheck(this, FormDemo);
	
	        var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
	        var contactOptions = [{
	            searchEntity: 'ClientContact',
	            id: 101,
	            name: 'James Smith',
	            phone: '617-555-1234',
	            email: 'jsmith@acme.com',
	            status: 'Active',
	            clientCorporation: {
	                id: 210,
	                name: 'Acme, Inc'
	            },
	            address: {
	                city: 'Boston',
	                state: 'MA'
	            }
	        }, {
	            searchEntity: 'ClientContact',
	            id: 102,
	            name: 'John Smith',
	            phone: '617-555-1234',
	            email: 'jsmith@bigcompany.com',
	            status: 'Active',
	            clientCorporation: {
	                id: 220,
	                name: 'Big Company'
	            },
	            address: {
	                city: 'Boston',
	                state: 'MA'
	            }
	        }, {
	            searchEntity: 'ClientContact',
	            id: 103,
	            name: 'Jane Smith',
	            phone: '617-555-1234',
	            email: 'jsmith@quickstaff.com',
	            status: 'Active',
	            clientCorporation: {
	                id: 230,
	                name: 'QuickStaff LLC'
	            },
	            address: {
	                city: 'Boston',
	                state: 'MA'
	            }
	        }, {
	            searchEntity: 'ClientContact',
	            id: 104,
	            name: 'James Anderson',
	            phone: '617-555-1234',
	            email: 'janderson@acme.com',
	            status: 'Active',
	            clientCorporation: {
	                id: 210,
	                name: 'Acme, Inc'
	            },
	            address: {
	                city: 'Boston',
	                state: 'MA'
	            }
	        }];
	
	        this.TextInputDemoTpl = _TextInputDemo2.default;
	        this.CalendarPickerDemoTpl = _CalendarPickerDemo2.default;
	        this.AutocompleteFieldDemoTpl = _AutocompleteFieldDemo2.default;
	        this.CheckboxDemoTpl = _CheckboxDemo2.default;
	        this.DynamicFormDemoTpl = _DynamicFormDemo2.default;
	        this.RadioButtonDemoTpl = _RadioButtonsDemo2.default;
	        this.MultiselectDemoTpl = _MultiselectDemo2.default;
	        this.SelectFieldDemoTpl = _SelectFieldDemo2.default;
	        this.AutocompleteFieldCustomDemoTpl = _AutocompleteFieldCustomDemo2.default;
	        this.QuickNoteInputDemoTpl = _QuickNoteInputDemo2.default;
	
	        this.yesNo = ['Yes', 'No'];
	        this.shifts = ['Morning', 'Day', 'Night', 'Overnight'];
	        this.stateObjOptions = ['Alabama', 'Alaska', 'Arizona', 'Arkansas'];
	
	        this.autocompleteFlatArrayOptions = {
	            options: states
	        };
	
	        this.deferredAutocompleteData = {
	            options: this.updateDataInPicker(),
	            nullTemplate: PickerCustomNullResults,
	            errorTemplate: PickerCustomErrorTemplate,
	            loaderTemplate: PickerCustomLoadTemplate,
	            recentTemplate: PickerCustomNoRecentsTemplate
	        };
	
	        this.autocompleteObjects = {
	            options: this.stateObjOptions
	        };
	
	        this.autocompleteContacts = {
	            options: contactOptions,
	            field: 'name'
	        };
	        this.dynamicData = {
	            lastName: 'Sullivan'
	        };
	        this.dynamic = {
	            entity: 'Opportunity',
	            entityMetaUrl: 'http://develop-backend.bh-bos2.bullhorn.com:8181/rest-services/1yg8p/meta/Opportunity?fields=*',
	            label: 'Opportunity',
	            fields: [{
	                name: 'firstName',
	                type: 'text',
	                label: 'First Name',
	                required: true
	            }, {
	                name: 'lastName',
	                type: 'text',
	                label: 'Last Name'
	            }, {
	                name: 'number',
	                type: 'number',
	                label: 'Number',
	                required: true
	            }, {
	                name: 'float',
	                type: 'float',
	                label: 'Float',
	                required: true
	            }, {
	                name: 'currency',
	                type: 'money',
	                label: 'Cost',
	                currencyFormat: 'USD'
	            }, {
	                name: 'percent',
	                type: 'percentage',
	                label: 'Percentage',
	                required: true
	            }, {
	                name: 'date',
	                type: 'date',
	                label: 'Date',
	                required: true
	            }, {
	                name: 'time',
	                type: 'time',
	                label: 'Time',
	                required: true
	            }, {
	                name: 'status',
	                type: 'select',
	                dataType: 'String',
	                maxLength: 200,
	                confidential: false,
	                label: 'Status',
	                options: [{
	                    value: 'Open',
	                    label: 'Open'
	                }, {
	                    value: 'Qualifying',
	                    label: 'Qualifying'
	                }, {
	                    value: 'Negotiating',
	                    label: 'Negotiating'
	                }, {
	                    value: 'TRIGGER',
	                    label: 'TRIGGER'
	                }]
	            }, {
	                name: 'state',
	                type: 'picker',
	                dataType: 'String',
	                maxLength: 200,
	                confidential: false,
	                label: 'State',
	                required: true,
	                // TODO: Align picker with META by passing META obj into picker
	                // options: [ /* flat array of states */ ]
	                options: this.autocompleteFlatArrayOptions
	            }, {
	                name: 'startDate',
	                type: 'datetime',
	                dataType: 'Timestamp',
	                label: 'Start Date',
	                required: true
	            }, {
	                name: 'quota',
	                type: 'number',
	                dataType: 'Integer',
	                label: 'Quota',
	                required: true
	            }, {
	                name: 'secret',
	                type: 'hidden',
	                dataType: 'String',
	                label: 'Top Secret',
	                required: true,
	                defaultValue: 'The secret code is: 08322'
	            }, {
	                name: 'categories',
	                type: 'picker',
	                confidential: false,
	                optional: false,
	                label: 'Categories',
	                required: false,
	                readOnly: true,
	                multiValue: true,
	                inputType: 'SELECT',
	                options: [{
	                    value: 'Open',
	                    label: 'Open'
	                }, {
	                    value: 'Qualifying',
	                    label: 'Qualifying'
	                }, {
	                    value: 'Negotiating',
	                    label: 'Negotiating'
	                }, {
	                    value: 'TRIGGER',
	                    label: 'TRIGGER'
	                }]
	            }, {
	                name: 'owner',
	                type: 'entity',
	                confidential: false,
	                optional: false,
	                label: 'Owner',
	                required: false,
	                readOnly: true,
	                multiValue: false,
	                inputType: 'SELECT',
	                // TODO: Align picker with META by passing META obj into picker
	                optionsType: 'CorporateUser',
	                optionsUrl: '/options/CorporateUser',
	                hideFromSearch: false,
	                associatedEntity: {
	                    entity: 'CorporateUser',
	                    label: 'Corporate User'
	                }
	            }, {
	                name: 'address',
	                type: 'address',
	                dataType: 'Address',
	                dataSpecialization: 'SYSTEM',
	                confidential: false,
	                optional: true,
	                label: 'Address',
	                required: false,
	                readOnly: false,
	                multiValue: false,
	                hideFromSearch: true,
	                fields: [{
	                    name: 'address1',
	                    type: 'SCALAR',
	                    dataType: 'String',
	                    maxLength: 40,
	                    confidential: false,
	                    optional: true,
	                    label: 'Addressxxx',
	                    required: false,
	                    readOnly: false,
	                    multiValue: false,
	                    hideFromSearch: false
	                }, {
	                    name: 'address2',
	                    type: 'SCALAR',
	                    dataType: 'String',
	                    maxLength: 40,
	                    confidential: false,
	                    optional: true,
	                    label: 'Address 2',
	                    required: false,
	                    readOnly: false,
	                    multiValue: false,
	                    hideFromSearch: false
	                }, {
	                    name: 'city',
	                    type: 'SCALAR',
	                    dataType: 'String',
	                    maxLength: 40,
	                    confidential: false,
	                    optional: true,
	                    label: 'City',
	                    required: false,
	                    readOnly: false,
	                    multiValue: false,
	                    hideFromSearch: false
	                }, {
	                    name: 'state',
	                    type: 'SCALAR',
	                    dataType: 'String',
	                    maxLength: 30,
	                    confidential: false,
	                    optional: true,
	                    label: 'State',
	                    required: false,
	                    readOnly: false,
	                    multiValue: false,
	                    inputType: 'SELECT',
	                    optionsType: 'StateText',
	                    optionsUrl: 'http://optimus-backend.bh-bos2.bullhorn.com:8181/rest-services/1hs/options/StateText',
	                    hideFromSearch: false
	                }, {
	                    name: 'zip',
	                    type: 'SCALAR',
	                    dataType: 'String',
	                    maxLength: 15,
	                    confidential: false,
	                    optional: true,
	                    label: 'Zip',
	                    required: false,
	                    readOnly: false,
	                    multiValue: false,
	                    hideFromSearch: false
	                }, {
	                    name: 'countryID',
	                    type: 'SCALAR',
	                    dataType: 'Integer',
	                    confidential: false,
	                    optional: false,
	                    label: 'Country',
	                    required: false,
	                    readOnly: false,
	                    multiValue: false,
	                    inputType: 'SELECT',
	                    optionsType: 'Country',
	                    optionsUrl: 'http://optimus-backend.bh-bos2.bullhorn.com:8181/rest-services/1hs/options/Country',
	                    defaultValue: 2260,
	                    hideFromSearch: false
	                }, {
	                    name: 'countryCode',
	                    type: 'SCALAR',
	                    dataType: 'String',
	                    maxLength: 0,
	                    optional: true
	                }, {
	                    name: 'countryName',
	                    type: 'SCALAR',
	                    dataType: 'String',
	                    maxLength: 0,
	                    optional: true
	                }]
	            }, {
	                name: 'checkbox',
	                type: 'checkbox',
	                label: 'Checkbox'
	            }, {
	                name: 'checklist',
	                type: 'checklist',
	                label: 'CheckList',
	                options: this.shifts,
	                required: true
	            }]
	        };
	        this.status = {
	            isopen: false
	        };
	        this.disabled = false;
	
	        this.statusOptions = [{
	            value: 'Open',
	            label: 'Open'
	        }, {
	            value: 'Qualifying',
	            label: 'Qualifying'
	        }, {
	            value: 'Negotiating',
	            label: 'Negotiating'
	        }, {
	            value: 'TRIGGER',
	            label: 'TRIGGER'
	        }];
	
	        this.quickNote = '';
	        this.quickNoteReferences = {};
	        this.quickNoteOptions = {
	            triggers: {
	                tags: '@',
	                references: '#'
	            },
	            options: {
	                tags: ['Test', 'Test'],
	                references: ['Test', 'Test']
	            }
	        };
	    }
	
	    _createClass(FormDemo, [{
	        key: 'updateSearch',
	        value: function updateSearch() {
	            this.deferredAutocompleteData.options = this.updateDataInPicker();
	        }
	    }, {
	        key: 'updateDataInPicker',
	        value: function updateDataInPicker() {
	            var _this = this;
	
	            return new Promise(function (resolve) {
	                setTimeout(function () {
	                    resolve(_this.stateObjOptions);
	                }, 1500);
	            });
	        }
	    }, {
	        key: 'save',
	        value: function save(form, data) {
	            form.hideCompletedFields();
	            console.log('FormDemo (data):', data); // eslint-disable-line
	        }
	    }]);
	
	    return FormDemo;
	}()) || _class);
	var PickerCustomNullResults = exports.PickerCustomNullResults = (_dec2 = (0, _core.Component)({
	    selector: 'picker-custom-null-results',
	    template: '<p class="picker-null">No results match your search (custom).</p>'
	}), _dec2(_class2 = function PickerCustomNullResults() {
	    _classCallCheck(this, PickerCustomNullResults);
	}) || _class2);
	var PickerCustomErrorTemplate = exports.PickerCustomErrorTemplate = (_dec3 = (0, _core.Component)({
	    selector: 'picker-custom-error',
	    template: '<p class="picker-error">There was an error (custom).</p>'
	}), _dec3(_class3 = function PickerCustomErrorTemplate() {
	    _classCallCheck(this, PickerCustomErrorTemplate);
	}) || _class3);
	var PickerCustomLoadTemplate = exports.PickerCustomLoadTemplate = (_dec4 = (0, _core.Component)({
	    selector: 'picker-custom-loader',
	    template: '<p class="picker-loading">Loading... (custom)</p>'
	}), _dec4(_class4 = function PickerCustomLoadTemplate() {
	    _classCallCheck(this, PickerCustomLoadTemplate);
	}) || _class4);
	var PickerCustomNoRecentsTemplate = exports.PickerCustomNoRecentsTemplate = (_dec5 = (0, _core.Component)({
	    selector: 'picker-custom-null-recents',
	    template: '<p class="picker-null-recents">No recent results (custom)</p>'
	}), _dec5(_class5 = function PickerCustomNoRecentsTemplate() {
	    _classCallCheck(this, PickerCustomNoRecentsTemplate);
	}) || _class5);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZm9ybS9Gb3JtRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sZzhIQUFOOztJQXFFYSxRLFdBQUEsUSxXQUxaLHFCQUFVO0FBQ1AsY0FBVSxXQURIO0FBRVAsY0FBVSxRQUZIO0FBR1AsZ0JBQVk7QUFITCxDQUFWLEM7QUFNRyx3QkFBYztBQUFBOztBQUNWLFlBQUksU0FBUyxDQUFDLFNBQUQsRUFBWSxRQUFaLEVBQXNCLFNBQXRCLEVBQWlDLFVBQWpDLEVBQTZDLFlBQTdDLEVBQTJELFVBQTNELEVBQ1QsYUFEUyxFQUNNLFVBRE4sRUFDa0IsU0FEbEIsRUFDNkIsU0FEN0IsRUFDd0MsUUFEeEMsRUFDa0QsT0FEbEQsRUFDMkQsVUFEM0QsRUFDdUUsU0FEdkUsRUFDa0YsTUFEbEYsRUFFVCxRQUZTLEVBRUMsVUFGRCxFQUVhLFdBRmIsRUFFMEIsT0FGMUIsRUFFbUMsVUFGbkMsRUFFK0MsZUFGL0MsRUFFZ0UsVUFGaEUsRUFFNEUsV0FGNUUsRUFHVCxhQUhTLEVBR00sVUFITixFQUdrQixTQUhsQixFQUc2QixVQUg3QixFQUd5QyxRQUh6QyxFQUdtRCxlQUhuRCxFQUdvRSxZQUhwRSxFQUdrRixZQUhsRixFQUlULFVBSlMsRUFJRyxjQUpILEVBSW1CLGdCQUpuQixFQUlxQyxNQUpyQyxFQUk2QyxVQUo3QyxFQUl5RCxRQUp6RCxFQUltRSxjQUpuRSxFQUltRixjQUpuRixFQUtULGdCQUxTLEVBS1MsY0FMVCxFQUt5QixXQUx6QixFQUtzQyxPQUx0QyxFQUsrQyxNQUwvQyxFQUt1RCxTQUx2RCxFQUtrRSxVQUxsRSxFQUs4RSxZQUw5RSxFQU1ULGVBTlMsRUFNUSxXQU5SLEVBTXFCLFNBTnJCLENBQWI7QUFP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QkFBVTtBQUNQLGNBQVUsc0JBREg7QUFFUCxjQUFVO0FBRkgsQ0FBVixDOzs7SUFXWSw2QixXQUFBLDZCLFlBSloscUJBQVU7QUFDUCxjQUFVLDRCQURIO0FBRVAsY0FBVTtBQUZILENBQVYsQyIsImZpbGUiOiJGb3JtRGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5PVk9fRk9STV9FTEVNRU5UUywgTk9WT19CVVRUT05fRUxFTUVOVFMsIE5PVk9fUElDS0VSX0VMRU1FTlRTIH0gZnJvbSAnLi8uLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbmltcG9ydCB7IENvZGVTbmlwcGV0IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQnO1xuXG5pbXBvcnQgQXV0b2NvbXBsZXRlRmllbGREZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0F1dG9jb21wbGV0ZUZpZWxkRGVtby5odG1sJztcbmltcG9ydCBBdXRvY29tcGxldGVGaWVsZEN1c3RvbURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQXV0b2NvbXBsZXRlRmllbGRDdXN0b21EZW1vLmh0bWwnO1xuaW1wb3J0IENhbGVuZGFyUGlja2VyRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9DYWxlbmRhclBpY2tlckRlbW8uaHRtbCc7XG5pbXBvcnQgQ2hlY2tib3hEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0NoZWNrYm94RGVtby5odG1sJztcbmltcG9ydCBEeW5hbWljRm9ybURlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvRHluYW1pY0Zvcm1EZW1vLmh0bWwnO1xuaW1wb3J0IE11bHRpc2VsZWN0RGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9NdWx0aXNlbGVjdERlbW8uaHRtbCc7XG5pbXBvcnQgUmFkaW9CdXR0b25EZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1JhZGlvQnV0dG9uc0RlbW8uaHRtbCc7XG5pbXBvcnQgU2VsZWN0RmllbGREZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1NlbGVjdEZpZWxkRGVtby5odG1sJztcbmltcG9ydCBUZXh0SW5wdXREZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1RleHRJbnB1dERlbW8uaHRtbCc7XG5pbXBvcnQgUXVpY2tOb3RlSW5wdXREZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1F1aWNrTm90ZUlucHV0RGVtby5odG1sJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPkZvcm1zIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL2Zvcm1cIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+Rm9ybXMgdXNlIGlucHV0cyBhbmQgbGFiZWxzIHRvIHN1Ym1pdCB1c2VyIGNvbnRlbnQuIEJ1dCB5b3UgYWxyZWFkeSBrbmV3IHRoYXQuIFdoYXQgeW91IG1heSBub3Qga25vdyBpcyB0aGF0IG91ciBmb3JtcyBjb21lIGluIHR3byBzdHlsZXMgJ1N0YXRpYycgYW5kICdEeW5hbWljJzwvcD5cblxuICAgIDxoMj5TdGF0aWMgRm9ybTwvaDI+XG4gICAgPHA+U3RhdGljIGZvcm1zIDxjb2RlPiZsdDtub3ZvLWZvcm0gLyZndDs8L2NvZGU+IGFyZSBjb21wb3NlZCBvZiBhIHRpdGxlIDxjb2RlPiZsdDtmb3JtLXRpdGxlIC8mZ3Q7PC9jb2RlPiwgYW5kIGZpZWxkcyA8Y29kZT4mbHQ7Zm9ybS1maWVsZCAvJmd0OzwvY29kZT4uIEZpZWxkcyBjYW4gaW5jbHVkZSBhIGxhYmVsIDxjb2RlPiZsdDtmb3JtLWxhYmVsIC8mZ3Q7PC9jb2RlPiBhbmQgaW5wdXQgPGNvZGU+Jmx0O2Zvcm0taW5wdXQgLyZndDs8L2NvZGU+LkZvcm0gaW5wdXRzIHRha2UgbmFtZSwgdHlwZSwgYW5kIG9wdGlvbnMgYXR0cmlidXRlcyA8Y29kZT4mbHQ7Zm9ybS1pbnB1dCBuYW1lPVwiZ2VuZGVyXCIgdHlwZT1cInJhZGlvXCIgb3B0aW9ucz1cIlttYWxlLCBmZW1hbGVdXCIgLyZndDs8L2NvZGU+LiBTdGF0aWMgZm9ybXMgYXJlIHVzZWQgdG8gbWFudWFsbHkgYnVpbGQgY3VzdG9tIGZvcm1zIHdoZW4geW91IGRvbid0IGhhdmUgYWNjZXNzIHRvIGEgZm9ybSdzIG1ldGEgZGF0YS48L3A+XG4gICAgPHA+SWYgeW91J3JlIGJ1aWxkaW5nIGEgc3RhdGljIGZvcm0sIHlvdSBtYXkgbmVlZCB0byB1dGlsaXplIG9uZSBvZiBtYW55IGZvcm0gZmllbGRzLiBUaGUgZm9sbG93aW5nIGZvcm0gZmllbGRzIGFyZSBzdXBwb3J0ZWQgYnkgQkgtRWxlbWVudHMuPC9wPlxuXG4gICAgPGg1PlRleHQgSW5wdXQ8L2g1PlxuICAgIDxwPlRoaXMgaXMgdGhlIGJhc2ljIHRleHQgaW5wdXQgZmllbGQuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGZvcm0tZGVtb1wiPiR7VGV4dElucHV0RGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlRleHRJbnB1dERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5SYWRpbyBCdXR0b25zPC9oNT5cbiAgICA8cD5SYWRpbyBidXR0b25zIGFsbG93IHVzZXJzIHRvIHNlbGVjdCBhIHNpbmdsZSBpdGVtIGZyb20gYSBsaXN0LjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBmb3JtLWRlbW9cIj4ke1JhZGlvQnV0dG9uRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlJhZGlvQnV0dG9uRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PkNoZWNrYm94ZXM8L2g1PlxuICAgIDxwPkNoZWNrYm94ZXMgYWxsb3cgdXNlcnMgdG8gc2VsZWN0IG11bHRpcGxlIGl0ZW1zIGZyb20gYSBsaXN0LjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBmb3JtLWRlbW9cIj4ke0NoZWNrYm94RGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkNoZWNrYm94RGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PkNhbGVuZGFyIFBpY2tlcjwvaDU+XG4gICAgPHA+Q2FsZW5kYXIgcGlja2VycyBpbnNpZGUgYSBmb3JtIGFyZSBhbHdhc3kgaW5saW5lIGFuZCBhbGxvdyB1c2VycyB0byBwaWNrIGRhdGUsIHRpbWUsIG9yIGJvdGguPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGZvcm0tZGVtb1wiPiR7Q2FsZW5kYXJQaWNrZXJEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQ2FsZW5kYXJQaWNrZXJEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+RHJvcGRvd248L2g1PlxuICAgIDxwPkRyb3Bkb3duIHNlbGVjdCBmaWVsZHMgYWxsb3cgdGhlIHVzZXIgdG8gc2VsZWN0IGZyb20gYSBsaXN0IG9mIGl0ZW1zLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBmb3JtLWRlbW9cIj4ke1NlbGVjdEZpZWxkRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlNlbGVjdEZpZWxkRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PkF1dG9jb21wbGV0ZSBQaWNrZXIgRmllbGQ8L2g1PlxuICAgIDxwPlBpY2tlcnMgYWxsb3cgYSB1c2VyIHRvIHNlYXJjaCBmb3IgYW5kIHNlbGVjdCByZWNvcmRzIGluIHRoZSBzeXN0ZW0uIFdoZW4gaW5pdGlhbGx5IG9wZW5lZCBpdCB3aWxsIHNob3cgdGhlIGxhc3QgZml2ZSB2aWV3ZWQgcmVjb3Jkcy48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vXCI+JHtBdXRvY29tcGxldGVGaWVsZERlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJBdXRvY29tcGxldGVGaWVsZERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5BdXRvY29tcGxldGUgQ3VzdG9tIFBpY2tlciBGaWVsZDwvaDU+XG4gICAgPHA+Q1VTVE9NITwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBmb3JtLWRlbW9cIj4ke0F1dG9jb21wbGV0ZUZpZWxkQ3VzdG9tRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkF1dG9jb21wbGV0ZUZpZWxkQ3VzdG9tRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1Pk11bHRpLVNlbGVjdDwvaDU+XG4gICAgPHA+VGhpcyBhbGxvd3MgdGhlIHVzZXIgdG8gc2VsZWN0IG11bHRpcGxlIGl0ZW1zIGZyb20gYSBsaXN0LCBvciByZXR1cm5lZCB2aWEgc2VhcmNoLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBmb3JtLWRlbW9cIj4ke011bHRpc2VsZWN0RGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIk11bHRpc2VsZWN0RGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuICAgIFxuICAgIDxoNT5Ob3RlPC9oNT5cbiAgICA8cD5UaGlzIGFsbG93cyB0aGUgdXNlciB0byBhZGQgYSBub3RlIHdpdGggcmVmZXJlbmNlcy90YWdzLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBmb3JtLWRlbW9cIj4ke1F1aWNrTm90ZUlucHV0RGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlF1aWNrTm90ZUlucHV0RGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PlJlcXVpcmVkIEZpZWxkczwvaDU+XG4gICAgPHA+UmVxdWlyZWQgZmllbGRzIG11c3QgYmUgZmlsbGVkIGJlZm9yZSB0aGUgcGFnZSBjYW4gYWR2YW5jZS4gUmVxdWlyZWQgZmllbGRzIGFyZSBpbmRpY2F0ZWQgd2l0aCBhIHJlZCBkb3QgYmV0d2VlbiB0aGUgbGFiZWwgYW5kIHRoZSBmaWVsZC4gSWYgYSB1c2VyIGF0dGVtcHRzIHRvIGFkdmFuY2Ugd2l0aG91dCBmaWxsaW5nIG91dCBhIGZpZWxkLCBhbGwgbm9uLXJlcXVpcmVkIGZpZWxkcyB3aWxsIGJlIHJlbW92ZWQgYW5kIHJlcXVpcmVkIGZpZWxkcyB3aWxsIGJlIGhpZ2hsaWdodGVkIGluIHJlZC48L3A+XG5cbiAgICA8aDI+RHluYW1pYyBGb3JtPC9oMj5cbiAgICA8cD5EeW5hbWljIGZvcm1zIGFyZSBjb21wb3NlZCBvZiBvbmUgZWxlbWVudCwgPGNvZGU+Jmx0O25vdm8tZm9ybSBbbWV0YV09XCJkeW5hbWljRGF0YVwiLyZndDs8L2NvZGU+IGFuZCBhbGxvdyB5b3UgdG8gcGFzcyBpbiBkeW5hbWljIGRhdGEgYXMgYSA8Y29kZT5bbWV0YV08L2NvZGU+IGF0dHJpYnV0ZS48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vXCI+JHtEeW5hbWljRm9ybURlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJEeW5hbWljRm9ybURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmb3JtLWRlbW8nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICBkaXJlY3RpdmVzOiBbTk9WT19GT1JNX0VMRU1FTlRTLCBOT1ZPX1BJQ0tFUl9FTEVNRU5UUywgTk9WT19CVVRUT05fRUxFTUVOVFMsIENvZGVTbmlwcGV0XVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRGVtbyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBzdGF0ZXMgPSBbJ0FsYWJhbWEnLCAnQWxhc2thJywgJ0FyaXpvbmEnLCAnQXJrYW5zYXMnLCAnQ2FsaWZvcm5pYScsICdDb2xvcmFkbycsXG4gICAgICAgICAgICAnQ29ubmVjdGljdXQnLCAnRGVsYXdhcmUnLCAnRmxvcmlkYScsICdHZW9yZ2lhJywgJ0hhd2FpaScsICdJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnLFxuICAgICAgICAgICAgJ0thbnNhcycsICdLZW50dWNreScsICdMb3Vpc2lhbmEnLCAnTWFpbmUnLCAnTWFyeWxhbmQnLCAnTWFzc2FjaHVzZXR0cycsICdNaWNoaWdhbicsICdNaW5uZXNvdGEnLFxuICAgICAgICAgICAgJ01pc3Npc3NpcHBpJywgJ01pc3NvdXJpJywgJ01vbnRhbmEnLCAnTmVicmFza2EnLCAnTmV2YWRhJywgJ05ldyBIYW1wc2hpcmUnLCAnTmV3IEplcnNleScsICdOZXcgTWV4aWNvJyxcbiAgICAgICAgICAgICdOZXcgWW9yaycsICdOb3J0aCBEYWtvdGEnLCAnTm9ydGggQ2Fyb2xpbmEnLCAnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nLCAnUGVubnN5bHZhbmlhJywgJ1Job2RlIElzbGFuZCcsXG4gICAgICAgICAgICAnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsICdUZXhhcycsICdVdGFoJywgJ1Zlcm1vbnQnLCAnVmlyZ2luaWEnLCAnV2FzaGluZ3RvbicsXG4gICAgICAgICAgICAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZyddO1xuICAgICAgICBsZXQgY29udGFjdE9wdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VhcmNoRW50aXR5OiAnQ2xpZW50Q29udGFjdCcsXG4gICAgICAgICAgICAgICAgaWQ6IDEwMSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnSmFtZXMgU21pdGgnLFxuICAgICAgICAgICAgICAgIHBob25lOiAnNjE3LTU1NS0xMjM0JyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2pzbWl0aEBhY21lLmNvbScsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcbiAgICAgICAgICAgICAgICBjbGllbnRDb3Jwb3JhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogMjEwLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQWNtZSwgSW5jJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgICAgICBjaXR5OiAnQm9zdG9uJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6ICdNQSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgc2VhcmNoRW50aXR5OiAnQ2xpZW50Q29udGFjdCcsXG4gICAgICAgICAgICAgICAgaWQ6IDEwMixcbiAgICAgICAgICAgICAgICBuYW1lOiAnSm9obiBTbWl0aCcsXG4gICAgICAgICAgICAgICAgcGhvbmU6ICc2MTctNTU1LTEyMzQnLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnanNtaXRoQGJpZ2NvbXBhbnkuY29tJyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdBY3RpdmUnLFxuICAgICAgICAgICAgICAgIGNsaWVudENvcnBvcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAyMjAsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdCaWcgQ29tcGFueSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogJ0Jvc3RvbicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiAnTUEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHNlYXJjaEVudGl0eTogJ0NsaWVudENvbnRhY3QnLFxuICAgICAgICAgICAgICAgIGlkOiAxMDMsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0phbmUgU21pdGgnLFxuICAgICAgICAgICAgICAgIHBob25lOiAnNjE3LTU1NS0xMjM0JyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2pzbWl0aEBxdWlja3N0YWZmLmNvbScsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcbiAgICAgICAgICAgICAgICBjbGllbnRDb3Jwb3JhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogMjMwLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnUXVpY2tTdGFmZiBMTEMnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNpdHk6ICdCb3N0b24nLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogJ01BJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hFbnRpdHk6ICdDbGllbnRDb250YWN0JyxcbiAgICAgICAgICAgICAgICBpZDogMTA0LFxuICAgICAgICAgICAgICAgIG5hbWU6ICdKYW1lcyBBbmRlcnNvbicsXG4gICAgICAgICAgICAgICAgcGhvbmU6ICc2MTctNTU1LTEyMzQnLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnamFuZGVyc29uQGFjbWUuY29tJyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdBY3RpdmUnLFxuICAgICAgICAgICAgICAgIGNsaWVudENvcnBvcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAyMTAsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdBY21lLCBJbmMnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNpdHk6ICdCb3N0b24nLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogJ01BJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLlRleHRJbnB1dERlbW9UcGwgPSBUZXh0SW5wdXREZW1vVHBsO1xuICAgICAgICB0aGlzLkNhbGVuZGFyUGlja2VyRGVtb1RwbCA9IENhbGVuZGFyUGlja2VyRGVtb1RwbDtcbiAgICAgICAgdGhpcy5BdXRvY29tcGxldGVGaWVsZERlbW9UcGwgPSBBdXRvY29tcGxldGVGaWVsZERlbW9UcGw7XG4gICAgICAgIHRoaXMuQ2hlY2tib3hEZW1vVHBsID0gQ2hlY2tib3hEZW1vVHBsO1xuICAgICAgICB0aGlzLkR5bmFtaWNGb3JtRGVtb1RwbCA9IER5bmFtaWNGb3JtRGVtb1RwbDtcbiAgICAgICAgdGhpcy5SYWRpb0J1dHRvbkRlbW9UcGwgPSBSYWRpb0J1dHRvbkRlbW9UcGw7XG4gICAgICAgIHRoaXMuTXVsdGlzZWxlY3REZW1vVHBsID0gTXVsdGlzZWxlY3REZW1vVHBsO1xuICAgICAgICB0aGlzLlNlbGVjdEZpZWxkRGVtb1RwbCA9IFNlbGVjdEZpZWxkRGVtb1RwbDtcbiAgICAgICAgdGhpcy5BdXRvY29tcGxldGVGaWVsZEN1c3RvbURlbW9UcGwgPSBBdXRvY29tcGxldGVGaWVsZEN1c3RvbURlbW9UcGw7XG4gICAgICAgIHRoaXMuUXVpY2tOb3RlSW5wdXREZW1vVHBsID0gUXVpY2tOb3RlSW5wdXREZW1vVHBsO1xuXG4gICAgICAgIHRoaXMueWVzTm8gPSBbJ1llcycsICdObyddO1xuICAgICAgICB0aGlzLnNoaWZ0cyA9IFsnTW9ybmluZycsICdEYXknLCAnTmlnaHQnLCAnT3Zlcm5pZ2h0J107XG4gICAgICAgIHRoaXMuc3RhdGVPYmpPcHRpb25zID0gWydBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJ107XG5cbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVGbGF0QXJyYXlPcHRpb25zID0ge1xuICAgICAgICAgICAgb3B0aW9uczogc3RhdGVzXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kZWZlcnJlZEF1dG9jb21wbGV0ZURhdGEgPSB7XG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLnVwZGF0ZURhdGFJblBpY2tlcigpLFxuICAgICAgICAgICAgbnVsbFRlbXBsYXRlOiBQaWNrZXJDdXN0b21OdWxsUmVzdWx0cyxcbiAgICAgICAgICAgIGVycm9yVGVtcGxhdGU6IFBpY2tlckN1c3RvbUVycm9yVGVtcGxhdGUsXG4gICAgICAgICAgICBsb2FkZXJUZW1wbGF0ZTogUGlja2VyQ3VzdG9tTG9hZFRlbXBsYXRlLFxuICAgICAgICAgICAgcmVjZW50VGVtcGxhdGU6IFBpY2tlckN1c3RvbU5vUmVjZW50c1RlbXBsYXRlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVPYmplY3RzID0ge1xuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5zdGF0ZU9iak9wdGlvbnNcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUNvbnRhY3RzID0ge1xuICAgICAgICAgICAgb3B0aW9uczogY29udGFjdE9wdGlvbnMsXG4gICAgICAgICAgICBmaWVsZDogJ25hbWUnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZHluYW1pY0RhdGEgPSB7XG4gICAgICAgICAgICBsYXN0TmFtZTogJ1N1bGxpdmFuJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmR5bmFtaWMgPSB7XG4gICAgICAgICAgICBlbnRpdHk6ICdPcHBvcnR1bml0eScsXG4gICAgICAgICAgICBlbnRpdHlNZXRhVXJsOiAnaHR0cDovL2RldmVsb3AtYmFja2VuZC5iaC1ib3MyLmJ1bGxob3JuLmNvbTo4MTgxL3Jlc3Qtc2VydmljZXMvMXlnOHAvbWV0YS9PcHBvcnR1bml0eT9maWVsZHM9KicsXG4gICAgICAgICAgICBsYWJlbDogJ09wcG9ydHVuaXR5JyxcbiAgICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2ZpcnN0TmFtZScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdGaXJzdCBOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2xhc3ROYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0xhc3QgTmFtZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ051bWJlcicsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmbG9hdCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdmbG9hdCcsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRmxvYXQnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY3VycmVuY3knLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbW9uZXknLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Nvc3QnLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUZvcm1hdDogJ1VTRCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3BlcmNlbnQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGVyY2VudGFnZScsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUGVyY2VudGFnZScsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGUnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAndGltZScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUaW1lJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3N0YXR1cycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1N0YXR1cycsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ09wZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnT3BlbidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdRdWFsaWZ5aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1F1YWxpZnlpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnTmVnb3RpYXRpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTmVnb3RpYXRpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnVFJJR0dFUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUUklHR0VSJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3RhdGUnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGlja2VyJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTdGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBBbGlnbiBwaWNrZXIgd2l0aCBNRVRBIGJ5IHBhc3NpbmcgTUVUQSBvYmogaW50byBwaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uczogWyAvKiBmbGF0IGFycmF5IG9mIHN0YXRlcyAqLyBdXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMuYXV0b2NvbXBsZXRlRmxhdEFycmF5T3B0aW9uc1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3N0YXJ0RGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYXRldGltZScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnVGltZXN0YW1wJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTdGFydCBEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdW90YScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ0ludGVnZXInLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1F1b3RhJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWNyZXQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1RvcCBTZWNyZXQnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAnVGhlIHNlY3JldCBjb2RlIGlzOiAwODMyMidcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYXRlZ29yaWVzJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BpY2tlcicsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDYXRlZ29yaWVzJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOiAnU0VMRUNUJyxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnT3BlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdPcGVuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ1F1YWxpZnlpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUXVhbGlmeWluZydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdOZWdvdGlhdGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdOZWdvdGlhdGluZydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdUUklHR0VSJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1RSSUdHRVInXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdvd25lcicsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbnRpdHknLFxuICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnT3duZXInLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtdWx0aVZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOiAnU0VMRUNUJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQWxpZ24gcGlja2VyIHdpdGggTUVUQSBieSBwYXNzaW5nIE1FVEEgb2JqIGludG8gcGlja2VyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNUeXBlOiAnQ29ycG9yYXRlVXNlcicsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNVcmw6ICcvb3B0aW9ucy9Db3Jwb3JhdGVVc2VyJyxcbiAgICAgICAgICAgICAgICAgICAgaGlkZUZyb21TZWFyY2g6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBhc3NvY2lhdGVkRW50aXR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6ICdDb3Jwb3JhdGVVc2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ29ycG9yYXRlIFVzZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FkZHJlc3MnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ0FkZHJlc3MnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhU3BlY2lhbGl6YXRpb246ICdTWVNURU0nLFxuICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBZGRyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG11bHRpVmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBoaWRlRnJvbVNlYXJjaDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZHJlc3MxJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0NBTEFSJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA0MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQWRkcmVzc3h4eCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aVZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRnJvbVNlYXJjaDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZHJlc3MyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0NBTEFSJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA0MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQWRkcmVzcyAyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpVmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGcm9tU2VhcmNoOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2l0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NDQUxBUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NpdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZyb21TZWFyY2g6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NDQUxBUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1N0YXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpVmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTogJ1NFTEVDVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1R5cGU6ICdTdGF0ZVRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNVcmw6ICdodHRwOi8vb3B0aW11cy1iYWNrZW5kLmJoLWJvczIuYnVsbGhvcm4uY29tOjgxODEvcmVzdC1zZXJ2aWNlcy8xaHMvb3B0aW9ucy9TdGF0ZVRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGcm9tU2VhcmNoOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnemlwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0NBTEFSJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnWmlwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpVmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGcm9tU2VhcmNoOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY291bnRyeUlEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0NBTEFSJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ0ludGVnZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aVZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6ICdTRUxFQ1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNUeXBlOiAnQ291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1VybDogJ2h0dHA6Ly9vcHRpbXVzLWJhY2tlbmQuYmgtYm9zMi5idWxsaG9ybi5jb206ODE4MS9yZXN0LXNlcnZpY2VzLzFocy9vcHRpb25zL0NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogMjI2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRnJvbVNlYXJjaDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NvdW50cnlDb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0NBTEFSJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjb3VudHJ5TmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NDQUxBUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ2hlY2tib3gnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tsaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDaGVja0xpc3QnLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLnNoaWZ0cyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RhdHVzID0ge1xuICAgICAgICAgICAgaXNvcGVuOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zdGF0dXNPcHRpb25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAnT3BlbicsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdPcGVuJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAnUXVhbGlmeWluZycsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdRdWFsaWZ5aW5nJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAnTmVnb3RpYXRpbmcnLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnTmVnb3RpYXRpbmcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICdUUklHR0VSJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1RSSUdHRVInXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5xdWlja05vdGUgPSAnJztcbiAgICAgICAgdGhpcy5xdWlja05vdGVSZWZlcmVuY2VzID0ge307XG4gICAgICAgIHRoaXMucXVpY2tOb3RlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRyaWdnZXJzOiB7XG4gICAgICAgICAgICAgICAgdGFnczogJ0AnLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZXM6ICcjJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB0YWdzOiBbJ1Rlc3QnLCAnVGVzdCddLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZXM6IFsnVGVzdCcsICdUZXN0J11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB1cGRhdGVTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuZGVmZXJyZWRBdXRvY29tcGxldGVEYXRhLm9wdGlvbnMgPSB0aGlzLnVwZGF0ZURhdGFJblBpY2tlcigpO1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGFJblBpY2tlcigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuc3RhdGVPYmpPcHRpb25zKTtcbiAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlKGZvcm0sIGRhdGEpIHtcbiAgICAgICAgZm9ybS5oaWRlQ29tcGxldGVkRmllbGRzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGb3JtRGVtbyAoZGF0YSk6JywgZGF0YSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGlja2VyLWN1c3RvbS1udWxsLXJlc3VsdHMnLFxuICAgIHRlbXBsYXRlOiAnPHAgY2xhc3M9XCJwaWNrZXItbnVsbFwiPk5vIHJlc3VsdHMgbWF0Y2ggeW91ciBzZWFyY2ggKGN1c3RvbSkuPC9wPidcbn0pXG5leHBvcnQgY2xhc3MgUGlja2VyQ3VzdG9tTnVsbFJlc3VsdHMge1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BpY2tlci1jdXN0b20tZXJyb3InLFxuICAgIHRlbXBsYXRlOiAnPHAgY2xhc3M9XCJwaWNrZXItZXJyb3JcIj5UaGVyZSB3YXMgYW4gZXJyb3IgKGN1c3RvbSkuPC9wPidcbn0pXG5leHBvcnQgY2xhc3MgUGlja2VyQ3VzdG9tRXJyb3JUZW1wbGF0ZSB7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGlja2VyLWN1c3RvbS1sb2FkZXInLFxuICAgIHRlbXBsYXRlOiAnPHAgY2xhc3M9XCJwaWNrZXItbG9hZGluZ1wiPkxvYWRpbmcuLi4gKGN1c3RvbSk8L3A+J1xufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJDdXN0b21Mb2FkVGVtcGxhdGUge1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BpY2tlci1jdXN0b20tbnVsbC1yZWNlbnRzJyxcbiAgICB0ZW1wbGF0ZTogJzxwIGNsYXNzPVwicGlja2VyLW51bGwtcmVjZW50c1wiPk5vIHJlY2VudCByZXN1bHRzIChjdXN0b20pPC9wPidcbn0pXG5leHBvcnQgY2xhc3MgUGlja2VyQ3VzdG9tTm9SZWNlbnRzVGVtcGxhdGUge1xufVxuIl19

/***/ },

/***/ 854:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Autocomplete Field With Custom Templates</form-title>\n    <form-field>\n        <form-label>States with Flags</form-label>\n        <form-input name=\"stateObjects\" type=\"picker\" [(options)]=\"autocompleteObjects\" placeholder=\"Pick a State Object\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Deferred</form-label>\n        <form-input name=\"stateDeferredObjects\" type=\"picker\" [(options)]=\"deferredAutocompleteData\" (broadcast)=\"updateSearch($event)\" placeholder=\"Pick a Deferred State Object\"></form-input>\n    </form-field>\n</novo-form>\n"

/***/ },

/***/ 855:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Autocomplete Field</form-title>\n    <form-field>\n        <form-label>State</form-label>\n        <form-input name=\"state\" type=\"picker\" [(options)]=\"autocompleteFlatArrayOptions\" placeholder=\"Pick a State\"></form-input>\n    </form-field>\n\n    <form-field>\n        <form-label>State</form-label>\n        <form-input name=\"entity\" type=\"entity\" [(options)]=\"autocompleteContacts\" placeholder=\"Pick a Contact\"></form-input>\n    </form-field>\n</novo-form>\n"

/***/ },

/***/ 856:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Calendar Picker</form-title>\n    <form-field>\n        <form-label>Start Date</form-label>\n        <form-input name=\"startDate\" type=\"date\" inline=\"true\" placeholder=\"Please select a date\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Start Time</form-label>\n        <form-input name=\"startTime\" type=\"time\" inline=\"true\" placeholder=\"Please select a time\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Start Date &amp; Time</form-label>\n        <form-input name=\"startDateTime\" type=\"datetime\" inline=\"true\" placeholder=\"Please select a date and time\"></form-input>\n    </form-field>\n</novo-form>\n"

/***/ },

/***/ 857:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Checkboxes</form-title>\n    <form-field>\n        <!-- <form-label>Availability</form-label> -->\n        <form-input name=\"isAvailable\" label=\"Is Available?\" type=\"checkbox\" [(value)]=\"isAvailable\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Availability</form-label>\n        <form-input name=\"shifts\" type=\"checkbox\" [options]=\"shifts\" [(value)]=\"availability\"></form-input>\n    </form-field>\n</novo-form>\n<div>I am available on {{availability}}.</div>\n"

/***/ },

/***/ 858:
/***/ function(module, exports) {

	module.exports = "<button theme=\"standard\" (click)=\"form.showAllFields()\">Show All Fields</button>\n<br/>\n<br/>\n<novo-form [meta]=\"dynamic\" [data]=\"dynamicData\" #form>\n<form-title>Add Candidate</form-title>\n</novo-form>\n<div class=\"dynamic-demo-footer\">\n<button theme=\"standard\">Cancel</button>\n<button theme=\"primary\" color=\"success\" icon=\"check\" (click)=\"save(form, dynamicData)\">Save</button>\n</div>\n"

/***/ },

/***/ 859:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Multi-Picker Field</form-title>\n    <form-field>\n        <form-label>Locations</form-label>\n        <form-input name=\"locations\" type=\"picker\" [(options)]=\"autocompleteFlatArrayOptions\" [multiple]=\"true\" placeholder=\"Pick some states\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Contact</form-label>\n        <form-input name=\"entity\" type=\"entity\" [(options)]=\"autocompleteContacts\" [multiple]=\"true\" placeholder=\"Pick a Contact\"></form-input>\n    </form-field>\n</novo-form>\n"

/***/ },

/***/ 860:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>QuickNote</form-title>\n    <form-field>\n        <form-label>Note</form-label>\n        <form-input [(value)]=\"quickNote\" name=\"note\" type=\"note\" [(options)]=\"quickNoteOptions\" [references]=\"quickNoteReferences\" placeholder=\"Add a Note!\"></form-input>\n    </form-field>\n</novo-form>\n<div class=\"data\">\n    <p>Note: {{quickNote}}</p>\n    <p>References: {{quickNoteReferences | json}}</p>\n</div>\n"

/***/ },

/***/ 861:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Radio Buttons</form-title>\n    <form-field>\n        <form-label>Ready to Work?</form-label>\n        <form-input name=\"isReady\" type=\"radio\" [options]=\"yesNo\" [(value)]=\"amIReady\"></form-input>\n    </form-field>\n</novo-form>\n<div>Am I Ready? {{amIReady}}.</div>\n"

/***/ },

/***/ 862:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Select Field</form-title>\n    <form-field>\n        <form-label>Select</form-label>\n        <form-input name=\"status\" type=\"select\" [options]=\"statusOptions\" [(value)]=\"myStatus\" placeholder=\"Status\"></form-input>\n    </form-field>\n</novo-form>\n<div>My status is {{myStatus}}</div>\n"

/***/ },

/***/ 863:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Text Fields</form-title>\n    <form-field required>\n        <form-label>First Name</form-label>\n        <form-input name=\"firstName\" type=\"text\" placeholder=\"Jack\" [(value)]=\"firstName\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Last Name</form-label>\n        <form-input name=\"lastName\" type=\"text\" placeholder=\"White\" [(value)]=\"lastName\"></form-input>\n    </form-field>\n</novo-form>\n<div> My name is {{firstName}} {{lastName}}</div>\n"

/***/ }

});
//# sourceMappingURL=1.38c1c2b1d427561245e9.bundle.map