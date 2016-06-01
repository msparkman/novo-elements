webpackJsonp([1],{

/***/ 832:
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

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PickerCustomNoRecentsTemplate = exports.PickerCustomLoadTemplate = exports.PickerCustomErrorTemplate = exports.PickerCustomNullResults = exports.FormDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class, _dec2, _class2, _dec3, _class3, _dec4, _class4, _dec5, _class5;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(13);
	
	var _CodeSnippet = __webpack_require__(832);
	
	var _AutocompleteFieldDemo = __webpack_require__(856);
	
	var _AutocompleteFieldDemo2 = _interopRequireDefault(_AutocompleteFieldDemo);
	
	var _AutocompleteFieldCustomDemo = __webpack_require__(855);
	
	var _AutocompleteFieldCustomDemo2 = _interopRequireDefault(_AutocompleteFieldCustomDemo);
	
	var _CalendarPickerDemo = __webpack_require__(857);
	
	var _CalendarPickerDemo2 = _interopRequireDefault(_CalendarPickerDemo);
	
	var _CheckboxDemo = __webpack_require__(858);
	
	var _CheckboxDemo2 = _interopRequireDefault(_CheckboxDemo);
	
	var _DynamicFormDemo = __webpack_require__(859);
	
	var _DynamicFormDemo2 = _interopRequireDefault(_DynamicFormDemo);
	
	var _MultiselectDemo = __webpack_require__(860);
	
	var _MultiselectDemo2 = _interopRequireDefault(_MultiselectDemo);
	
	var _RadioButtonsDemo = __webpack_require__(862);
	
	var _RadioButtonsDemo2 = _interopRequireDefault(_RadioButtonsDemo);
	
	var _SelectFieldDemo = __webpack_require__(863);
	
	var _SelectFieldDemo2 = _interopRequireDefault(_SelectFieldDemo);
	
	var _TextInputDemo = __webpack_require__(864);
	
	var _TextInputDemo2 = _interopRequireDefault(_TextInputDemo);
	
	var _QuickNoteInputDemo = __webpack_require__(861);
	
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
	            }, {
	                name: 'address',
	                type: 'address',
	                label: 'Address',
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZm9ybS9Gb3JtRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sZzhIQUFOOztJQXFFYSxRLFdBQUEsUSxXQUxaLHFCQUFVO0FBQ1AsY0FBVSxXQURIO0FBRVAsY0FBVSxRQUZIO0FBR1AsZ0JBQVk7QUFITCxDQUFWLEM7QUFNRyx3QkFBYztBQUFBOztBQUNWLFlBQUksU0FBUyxDQUFDLFNBQUQsRUFBWSxRQUFaLEVBQXNCLFNBQXRCLEVBQWlDLFVBQWpDLEVBQTZDLFlBQTdDLEVBQTJELFVBQTNELEVBQ1QsYUFEUyxFQUNNLFVBRE4sRUFDa0IsU0FEbEIsRUFDNkIsU0FEN0IsRUFDd0MsUUFEeEMsRUFDa0QsT0FEbEQsRUFDMkQsVUFEM0QsRUFDdUUsU0FEdkUsRUFDa0YsTUFEbEYsRUFFVCxRQUZTLEVBRUMsVUFGRCxFQUVhLFdBRmIsRUFFMEIsT0FGMUIsRUFFbUMsVUFGbkMsRUFFK0MsZUFGL0MsRUFFZ0UsVUFGaEUsRUFFNEUsV0FGNUUsRUFHVCxhQUhTLEVBR00sVUFITixFQUdrQixTQUhsQixFQUc2QixVQUg3QixFQUd5QyxRQUh6QyxFQUdtRCxlQUhuRCxFQUdvRSxZQUhwRSxFQUdrRixZQUhsRixFQUlULFVBSlMsRUFJRyxjQUpILEVBSW1CLGdCQUpuQixFQUlxQyxNQUpyQyxFQUk2QyxVQUo3QyxFQUl5RCxRQUp6RCxFQUltRSxjQUpuRSxFQUltRixjQUpuRixFQUtULGdCQUxTLEVBS1MsY0FMVCxFQUt5QixXQUx6QixFQUtzQyxPQUx0QyxFQUsrQyxNQUwvQyxFQUt1RCxTQUx2RCxFQUtrRSxVQUxsRSxFQUs4RSxZQUw5RSxFQU1ULGVBTlMsRUFNUSxXQU5SLEVBTXFCLFNBTnJCLENBQWI7QUFP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eUIsWUFKWixxQkFBVTtBQUNQLGNBQVUscUJBREg7QUFFUCxjQUFVO0FBRkgsQ0FBVixDOzs7SUFXWSx3QixXQUFBLHdCLFlBSloscUJBQVU7QUFDUCxjQUFVLHNCQURIO0FBRVAsY0FBVTtBQUZILENBQVYsQzs7O0lBV1ksNkIsV0FBQSw2QixZQUpaLHFCQUFVO0FBQ1AsY0FBVSw0QkFESDtBQUVQLGNBQVU7QUFGSCxDQUFWLEMiLCJmaWxlIjoiRm9ybURlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL2JoL25vdm8vYXBwcy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOT1ZPX0ZPUk1fRUxFTUVOVFMsIE5PVk9fQlVUVE9OX0VMRU1FTlRTLCBOT1ZPX1BJQ0tFUl9FTEVNRU5UUyB9IGZyb20gJy4vLi4vLi4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG5pbXBvcnQgeyBDb2RlU25pcHBldCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2NvZGVzbmlwcGV0L0NvZGVTbmlwcGV0JztcblxuaW1wb3J0IEF1dG9jb21wbGV0ZUZpZWxkRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9BdXRvY29tcGxldGVGaWVsZERlbW8uaHRtbCc7XG5pbXBvcnQgQXV0b2NvbXBsZXRlRmllbGRDdXN0b21EZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0F1dG9jb21wbGV0ZUZpZWxkQ3VzdG9tRGVtby5odG1sJztcbmltcG9ydCBDYWxlbmRhclBpY2tlckRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQ2FsZW5kYXJQaWNrZXJEZW1vLmh0bWwnO1xuaW1wb3J0IENoZWNrYm94RGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9DaGVja2JveERlbW8uaHRtbCc7XG5pbXBvcnQgRHluYW1pY0Zvcm1EZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0R5bmFtaWNGb3JtRGVtby5odG1sJztcbmltcG9ydCBNdWx0aXNlbGVjdERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvTXVsdGlzZWxlY3REZW1vLmh0bWwnO1xuaW1wb3J0IFJhZGlvQnV0dG9uRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9SYWRpb0J1dHRvbnNEZW1vLmh0bWwnO1xuaW1wb3J0IFNlbGVjdEZpZWxkRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9TZWxlY3RGaWVsZERlbW8uaHRtbCc7XG5pbXBvcnQgVGV4dElucHV0RGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9UZXh0SW5wdXREZW1vLmh0bWwnO1xuaW1wb3J0IFF1aWNrTm90ZUlucHV0RGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9RdWlja05vdGVJbnB1dERlbW8uaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5Gb3JtcyA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy9mb3JtXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPkZvcm1zIHVzZSBpbnB1dHMgYW5kIGxhYmVscyB0byBzdWJtaXQgdXNlciBjb250ZW50LiBCdXQgeW91IGFscmVhZHkga25ldyB0aGF0LiBXaGF0IHlvdSBtYXkgbm90IGtub3cgaXMgdGhhdCBvdXIgZm9ybXMgY29tZSBpbiB0d28gc3R5bGVzICdTdGF0aWMnIGFuZCAnRHluYW1pYyc8L3A+XG5cbiAgICA8aDI+U3RhdGljIEZvcm08L2gyPlxuICAgIDxwPlN0YXRpYyBmb3JtcyA8Y29kZT4mbHQ7bm92by1mb3JtIC8mZ3Q7PC9jb2RlPiBhcmUgY29tcG9zZWQgb2YgYSB0aXRsZSA8Y29kZT4mbHQ7Zm9ybS10aXRsZSAvJmd0OzwvY29kZT4sIGFuZCBmaWVsZHMgPGNvZGU+Jmx0O2Zvcm0tZmllbGQgLyZndDs8L2NvZGU+LiBGaWVsZHMgY2FuIGluY2x1ZGUgYSBsYWJlbCA8Y29kZT4mbHQ7Zm9ybS1sYWJlbCAvJmd0OzwvY29kZT4gYW5kIGlucHV0IDxjb2RlPiZsdDtmb3JtLWlucHV0IC8mZ3Q7PC9jb2RlPi5Gb3JtIGlucHV0cyB0YWtlIG5hbWUsIHR5cGUsIGFuZCBvcHRpb25zIGF0dHJpYnV0ZXMgPGNvZGU+Jmx0O2Zvcm0taW5wdXQgbmFtZT1cImdlbmRlclwiIHR5cGU9XCJyYWRpb1wiIG9wdGlvbnM9XCJbbWFsZSwgZmVtYWxlXVwiIC8mZ3Q7PC9jb2RlPi4gU3RhdGljIGZvcm1zIGFyZSB1c2VkIHRvIG1hbnVhbGx5IGJ1aWxkIGN1c3RvbSBmb3JtcyB3aGVuIHlvdSBkb24ndCBoYXZlIGFjY2VzcyB0byBhIGZvcm0ncyBtZXRhIGRhdGEuPC9wPlxuICAgIDxwPklmIHlvdSdyZSBidWlsZGluZyBhIHN0YXRpYyBmb3JtLCB5b3UgbWF5IG5lZWQgdG8gdXRpbGl6ZSBvbmUgb2YgbWFueSBmb3JtIGZpZWxkcy4gVGhlIGZvbGxvd2luZyBmb3JtIGZpZWxkcyBhcmUgc3VwcG9ydGVkIGJ5IEJILUVsZW1lbnRzLjwvcD5cblxuICAgIDxoNT5UZXh0IElucHV0PC9oNT5cbiAgICA8cD5UaGlzIGlzIHRoZSBiYXNpYyB0ZXh0IGlucHV0IGZpZWxkLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBmb3JtLWRlbW9cIj4ke1RleHRJbnB1dERlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJUZXh0SW5wdXREZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+UmFkaW8gQnV0dG9uczwvaDU+XG4gICAgPHA+UmFkaW8gYnV0dG9ucyBhbGxvdyB1c2VycyB0byBzZWxlY3QgYSBzaW5nbGUgaXRlbSBmcm9tIGEgbGlzdC48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vXCI+JHtSYWRpb0J1dHRvbkRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJSYWRpb0J1dHRvbkRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5DaGVja2JveGVzPC9oNT5cbiAgICA8cD5DaGVja2JveGVzIGFsbG93IHVzZXJzIHRvIHNlbGVjdCBtdWx0aXBsZSBpdGVtcyBmcm9tIGEgbGlzdC48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vXCI+JHtDaGVja2JveERlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJDaGVja2JveERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5DYWxlbmRhciBQaWNrZXI8L2g1PlxuICAgIDxwPkNhbGVuZGFyIHBpY2tlcnMgaW5zaWRlIGEgZm9ybSBhcmUgYWx3YXN5IGlubGluZSBhbmQgYWxsb3cgdXNlcnMgdG8gcGljayBkYXRlLCB0aW1lLCBvciBib3RoLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBmb3JtLWRlbW9cIj4ke0NhbGVuZGFyUGlja2VyRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkNhbGVuZGFyUGlja2VyRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PkRyb3Bkb3duPC9oNT5cbiAgICA8cD5Ecm9wZG93biBzZWxlY3QgZmllbGRzIGFsbG93IHRoZSB1c2VyIHRvIHNlbGVjdCBmcm9tIGEgbGlzdCBvZiBpdGVtcy48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vXCI+JHtTZWxlY3RGaWVsZERlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJTZWxlY3RGaWVsZERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5BdXRvY29tcGxldGUgUGlja2VyIEZpZWxkPC9oNT5cbiAgICA8cD5QaWNrZXJzIGFsbG93IGEgdXNlciB0byBzZWFyY2ggZm9yIGFuZCBzZWxlY3QgcmVjb3JkcyBpbiB0aGUgc3lzdGVtLiBXaGVuIGluaXRpYWxseSBvcGVuZWQgaXQgd2lsbCBzaG93IHRoZSBsYXN0IGZpdmUgdmlld2VkIHJlY29yZHMuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGZvcm0tZGVtb1wiPiR7QXV0b2NvbXBsZXRlRmllbGREZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQXV0b2NvbXBsZXRlRmllbGREZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+QXV0b2NvbXBsZXRlIEN1c3RvbSBQaWNrZXIgRmllbGQ8L2g1PlxuICAgIDxwPkNVU1RPTSE8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vXCI+JHtBdXRvY29tcGxldGVGaWVsZEN1c3RvbURlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJBdXRvY29tcGxldGVGaWVsZEN1c3RvbURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5NdWx0aS1TZWxlY3Q8L2g1PlxuICAgIDxwPlRoaXMgYWxsb3dzIHRoZSB1c2VyIHRvIHNlbGVjdCBtdWx0aXBsZSBpdGVtcyBmcm9tIGEgbGlzdCwgb3IgcmV0dXJuZWQgdmlhIHNlYXJjaC48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vXCI+JHtNdWx0aXNlbGVjdERlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJNdWx0aXNlbGVjdERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbiAgICBcbiAgICA8aDU+Tm90ZTwvaDU+XG4gICAgPHA+VGhpcyBhbGxvd3MgdGhlIHVzZXIgdG8gYWRkIGEgbm90ZSB3aXRoIHJlZmVyZW5jZXMvdGFncy48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vXCI+JHtRdWlja05vdGVJbnB1dERlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJRdWlja05vdGVJbnB1dERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5SZXF1aXJlZCBGaWVsZHM8L2g1PlxuICAgIDxwPlJlcXVpcmVkIGZpZWxkcyBtdXN0IGJlIGZpbGxlZCBiZWZvcmUgdGhlIHBhZ2UgY2FuIGFkdmFuY2UuIFJlcXVpcmVkIGZpZWxkcyBhcmUgaW5kaWNhdGVkIHdpdGggYSByZWQgZG90IGJldHdlZW4gdGhlIGxhYmVsIGFuZCB0aGUgZmllbGQuIElmIGEgdXNlciBhdHRlbXB0cyB0byBhZHZhbmNlIHdpdGhvdXQgZmlsbGluZyBvdXQgYSBmaWVsZCwgYWxsIG5vbi1yZXF1aXJlZCBmaWVsZHMgd2lsbCBiZSByZW1vdmVkIGFuZCByZXF1aXJlZCBmaWVsZHMgd2lsbCBiZSBoaWdobGlnaHRlZCBpbiByZWQuPC9wPlxuXG4gICAgPGgyPkR5bmFtaWMgRm9ybTwvaDI+XG4gICAgPHA+RHluYW1pYyBmb3JtcyBhcmUgY29tcG9zZWQgb2Ygb25lIGVsZW1lbnQsIDxjb2RlPiZsdDtub3ZvLWZvcm0gW21ldGFdPVwiZHluYW1pY0RhdGFcIi8mZ3Q7PC9jb2RlPiBhbmQgYWxsb3cgeW91IHRvIHBhc3MgaW4gZHluYW1pYyBkYXRhIGFzIGEgPGNvZGU+W21ldGFdPC9jb2RlPiBhdHRyaWJ1dGUuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGZvcm0tZGVtb1wiPiR7RHluYW1pY0Zvcm1EZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiRHluYW1pY0Zvcm1EZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm9ybS1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgZGlyZWN0aXZlczogW05PVk9fRk9STV9FTEVNRU5UUywgTk9WT19QSUNLRVJfRUxFTUVOVFMsIE5PVk9fQlVUVE9OX0VMRU1FTlRTLCBDb2RlU25pcHBldF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybURlbW8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgc3RhdGVzID0gWydBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJywgJ0NhbGlmb3JuaWEnLCAnQ29sb3JhZG8nLFxuICAgICAgICAgICAgJ0Nvbm5lY3RpY3V0JywgJ0RlbGF3YXJlJywgJ0Zsb3JpZGEnLCAnR2VvcmdpYScsICdIYXdhaWknLCAnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJyxcbiAgICAgICAgICAgICdLYW5zYXMnLCAnS2VudHVja3knLCAnTG91aXNpYW5hJywgJ01haW5lJywgJ01hcnlsYW5kJywgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLCAnTWlubmVzb3RhJyxcbiAgICAgICAgICAgICdNaXNzaXNzaXBwaScsICdNaXNzb3VyaScsICdNb250YW5hJywgJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJywgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsXG4gICAgICAgICAgICAnTmV3IFlvcmsnLCAnTm9ydGggRGFrb3RhJywgJ05vcnRoIENhcm9saW5hJywgJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJywgJ1Blbm5zeWx2YW5pYScsICdSaG9kZSBJc2xhbmQnLFxuICAgICAgICAgICAgJ1NvdXRoIENhcm9saW5hJywgJ1NvdXRoIERha290YScsICdUZW5uZXNzZWUnLCAnVGV4YXMnLCAnVXRhaCcsICdWZXJtb250JywgJ1ZpcmdpbmlhJywgJ1dhc2hpbmd0b24nLFxuICAgICAgICAgICAgJ1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXTtcbiAgICAgICAgbGV0IGNvbnRhY3RPcHRpb25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlYXJjaEVudGl0eTogJ0NsaWVudENvbnRhY3QnLFxuICAgICAgICAgICAgICAgIGlkOiAxMDEsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0phbWVzIFNtaXRoJyxcbiAgICAgICAgICAgICAgICBwaG9uZTogJzYxNy01NTUtMTIzNCcsXG4gICAgICAgICAgICAgICAgZW1haWw6ICdqc21pdGhAYWNtZS5jb20nLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ0FjdGl2ZScsXG4gICAgICAgICAgICAgICAgY2xpZW50Q29ycG9yYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIxMCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0FjbWUsIEluYydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogJ0Jvc3RvbicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiAnTUEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHNlYXJjaEVudGl0eTogJ0NsaWVudENvbnRhY3QnLFxuICAgICAgICAgICAgICAgIGlkOiAxMDIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0pvaG4gU21pdGgnLFxuICAgICAgICAgICAgICAgIHBob25lOiAnNjE3LTU1NS0xMjM0JyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2pzbWl0aEBiaWdjb21wYW55LmNvbScsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcbiAgICAgICAgICAgICAgICBjbGllbnRDb3Jwb3JhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogMjIwLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQmlnIENvbXBhbnknXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNpdHk6ICdCb3N0b24nLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogJ01BJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hFbnRpdHk6ICdDbGllbnRDb250YWN0JyxcbiAgICAgICAgICAgICAgICBpZDogMTAzLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdKYW5lIFNtaXRoJyxcbiAgICAgICAgICAgICAgICBwaG9uZTogJzYxNy01NTUtMTIzNCcsXG4gICAgICAgICAgICAgICAgZW1haWw6ICdqc21pdGhAcXVpY2tzdGFmZi5jb20nLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ0FjdGl2ZScsXG4gICAgICAgICAgICAgICAgY2xpZW50Q29ycG9yYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIzMCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1F1aWNrU3RhZmYgTExDJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgICAgICBjaXR5OiAnQm9zdG9uJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6ICdNQSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgc2VhcmNoRW50aXR5OiAnQ2xpZW50Q29udGFjdCcsXG4gICAgICAgICAgICAgICAgaWQ6IDEwNCxcbiAgICAgICAgICAgICAgICBuYW1lOiAnSmFtZXMgQW5kZXJzb24nLFxuICAgICAgICAgICAgICAgIHBob25lOiAnNjE3LTU1NS0xMjM0JyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2phbmRlcnNvbkBhY21lLmNvbScsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcbiAgICAgICAgICAgICAgICBjbGllbnRDb3Jwb3JhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogMjEwLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQWNtZSwgSW5jJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgICAgICBjaXR5OiAnQm9zdG9uJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6ICdNQSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5UZXh0SW5wdXREZW1vVHBsID0gVGV4dElucHV0RGVtb1RwbDtcbiAgICAgICAgdGhpcy5DYWxlbmRhclBpY2tlckRlbW9UcGwgPSBDYWxlbmRhclBpY2tlckRlbW9UcGw7XG4gICAgICAgIHRoaXMuQXV0b2NvbXBsZXRlRmllbGREZW1vVHBsID0gQXV0b2NvbXBsZXRlRmllbGREZW1vVHBsO1xuICAgICAgICB0aGlzLkNoZWNrYm94RGVtb1RwbCA9IENoZWNrYm94RGVtb1RwbDtcbiAgICAgICAgdGhpcy5EeW5hbWljRm9ybURlbW9UcGwgPSBEeW5hbWljRm9ybURlbW9UcGw7XG4gICAgICAgIHRoaXMuUmFkaW9CdXR0b25EZW1vVHBsID0gUmFkaW9CdXR0b25EZW1vVHBsO1xuICAgICAgICB0aGlzLk11bHRpc2VsZWN0RGVtb1RwbCA9IE11bHRpc2VsZWN0RGVtb1RwbDtcbiAgICAgICAgdGhpcy5TZWxlY3RGaWVsZERlbW9UcGwgPSBTZWxlY3RGaWVsZERlbW9UcGw7XG4gICAgICAgIHRoaXMuQXV0b2NvbXBsZXRlRmllbGRDdXN0b21EZW1vVHBsID0gQXV0b2NvbXBsZXRlRmllbGRDdXN0b21EZW1vVHBsO1xuICAgICAgICB0aGlzLlF1aWNrTm90ZUlucHV0RGVtb1RwbCA9IFF1aWNrTm90ZUlucHV0RGVtb1RwbDtcblxuICAgICAgICB0aGlzLnllc05vID0gWydZZXMnLCAnTm8nXTtcbiAgICAgICAgdGhpcy5zaGlmdHMgPSBbJ01vcm5pbmcnLCAnRGF5JywgJ05pZ2h0JywgJ092ZXJuaWdodCddO1xuICAgICAgICB0aGlzLnN0YXRlT2JqT3B0aW9ucyA9IFsnQWxhYmFtYScsICdBbGFza2EnLCAnQXJpem9uYScsICdBcmthbnNhcyddO1xuXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlRmxhdEFycmF5T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG9wdGlvbnM6IHN0YXRlc1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZGVmZXJyZWRBdXRvY29tcGxldGVEYXRhID0ge1xuICAgICAgICAgICAgb3B0aW9uczogdGhpcy51cGRhdGVEYXRhSW5QaWNrZXIoKSxcbiAgICAgICAgICAgIG51bGxUZW1wbGF0ZTogUGlja2VyQ3VzdG9tTnVsbFJlc3VsdHMsXG4gICAgICAgICAgICBlcnJvclRlbXBsYXRlOiBQaWNrZXJDdXN0b21FcnJvclRlbXBsYXRlLFxuICAgICAgICAgICAgbG9hZGVyVGVtcGxhdGU6IFBpY2tlckN1c3RvbUxvYWRUZW1wbGF0ZSxcbiAgICAgICAgICAgIHJlY2VudFRlbXBsYXRlOiBQaWNrZXJDdXN0b21Ob1JlY2VudHNUZW1wbGF0ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlT2JqZWN0cyA9IHtcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMuc3RhdGVPYmpPcHRpb25zXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVDb250YWN0cyA9IHtcbiAgICAgICAgICAgIG9wdGlvbnM6IGNvbnRhY3RPcHRpb25zLFxuICAgICAgICAgICAgZmllbGQ6ICduYW1lJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmR5bmFtaWNEYXRhID0ge1xuICAgICAgICAgICAgbGFzdE5hbWU6ICdTdWxsaXZhbidcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5keW5hbWljID0ge1xuICAgICAgICAgICAgZW50aXR5OiAnT3Bwb3J0dW5pdHknLFxuICAgICAgICAgICAgZW50aXR5TWV0YVVybDogJ2h0dHA6Ly9kZXZlbG9wLWJhY2tlbmQuYmgtYm9zMi5idWxsaG9ybi5jb206ODE4MS9yZXN0LXNlcnZpY2VzLzF5ZzhwL21ldGEvT3Bwb3J0dW5pdHk/ZmllbGRzPSonLFxuICAgICAgICAgICAgbGFiZWw6ICdPcHBvcnR1bml0eScsXG4gICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmaXJzdE5hbWUnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRmlyc3QgTmFtZScsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdsYXN0TmFtZScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdMYXN0IE5hbWUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdOdW1iZXInLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZmxvYXQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZmxvYXQnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Zsb2F0JyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2N1cnJlbmN5JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vbmV5JyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDb3N0JyxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lGb3JtYXQ6ICdVU0QnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwZXJjZW50JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BlcmNlbnRhZ2UnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1BlcmNlbnRhZ2UnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RpbWUnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVGltZScsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdGF0dXMnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTdGF0dXMnLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdPcGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ09wZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnUXVhbGlmeWluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdRdWFsaWZ5aW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ05lZ290aWF0aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ05lZ290aWF0aW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ1RSSUdHRVInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVFJJR0dFUidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3N0YXRlJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BpY2tlcicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU3RhdGUnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQWxpZ24gcGlja2VyIHdpdGggTUVUQSBieSBwYXNzaW5nIE1FVEEgb2JqIGludG8gcGlja2VyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbnM6IFsgLyogZmxhdCBhcnJheSBvZiBzdGF0ZXMgKi8gXVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLmF1dG9jb21wbGV0ZUZsYXRBcnJheU9wdGlvbnNcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdGFydERhdGUnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZXRpbWUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ1RpbWVzdGFtcCcsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU3RhcnQgRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVvdGEnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdJbnRlZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdRdW90YScsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VjcmV0JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUb3AgU2VjcmV0JyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogJ1RoZSBzZWNyZXQgY29kZSBpczogMDgzMjInXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcmllcycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaWNrZXInLFxuICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ2F0ZWdvcmllcycsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG11bHRpVmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTogJ1NFTEVDVCcsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ09wZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnT3BlbidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdRdWFsaWZ5aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1F1YWxpZnlpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnTmVnb3RpYXRpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTmVnb3RpYXRpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnVFJJR0dFUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUUklHR0VSJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnb3duZXInLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW50aXR5JyxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ093bmVyJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTogJ1NFTEVDVCcsXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IEFsaWduIHBpY2tlciB3aXRoIE1FVEEgYnkgcGFzc2luZyBNRVRBIG9iaiBpbnRvIHBpY2tlclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zVHlwZTogJ0NvcnBvcmF0ZVVzZXInLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zVXJsOiAnL29wdGlvbnMvQ29ycG9yYXRlVXNlcicsXG4gICAgICAgICAgICAgICAgICAgIGhpZGVGcm9tU2VhcmNoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYXNzb2NpYXRlZEVudGl0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiAnQ29ycG9yYXRlVXNlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NvcnBvcmF0ZSBVc2VyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkcmVzcycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhZGRyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdBZGRyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNwZWNpYWxpemF0aW9uOiAnU1lTVEVNJyxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQWRkcmVzcycsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtdWx0aVZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaGlkZUZyb21TZWFyY2g6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRyZXNzMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NDQUxBUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FkZHJlc3N4eHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZyb21TZWFyY2g6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRyZXNzMicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NDQUxBUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FkZHJlc3MgMicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aVZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRnJvbVNlYXJjaDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NpdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTQ0FMQVInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDQwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpVmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGcm9tU2VhcmNoOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3RhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTQ0FMQVInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTdGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aVZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6ICdTRUxFQ1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNUeXBlOiAnU3RhdGVUZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zVXJsOiAnaHR0cDovL29wdGltdXMtYmFja2VuZC5iaC1ib3MyLmJ1bGxob3JuLmNvbTo4MTgxL3Jlc3Qtc2VydmljZXMvMWhzL29wdGlvbnMvU3RhdGVUZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRnJvbVNlYXJjaDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ppcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NDQUxBUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1ppcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aVZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRnJvbVNlYXJjaDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NvdW50cnlJRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NDQUxBUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdJbnRlZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOiAnU0VMRUNUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zVHlwZTogJ0NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNVcmw6ICdodHRwOi8vb3B0aW11cy1iYWNrZW5kLmJoLWJvczIuYnVsbGhvcm4uY29tOjgxODEvcmVzdC1zZXJ2aWNlcy8xaHMvb3B0aW9ucy9Db3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IDIyNjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZyb21TZWFyY2g6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjb3VudHJ5Q29kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NDQUxBUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY291bnRyeU5hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTQ0FMQVInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NoZWNrYm94J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tsaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ2hlY2tMaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5zaGlmdHMsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FkZHJlc3MnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FkZHJlc3MnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB7XG4gICAgICAgICAgICBpc29wZW46IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnN0YXR1c09wdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICdPcGVuJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ09wZW4nXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICdRdWFsaWZ5aW5nJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1F1YWxpZnlpbmcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICdOZWdvdGlhdGluZycsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdOZWdvdGlhdGluZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1RSSUdHRVInLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnVFJJR0dFUidcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnF1aWNrTm90ZSA9ICcnO1xuICAgICAgICB0aGlzLnF1aWNrTm90ZVJlZmVyZW5jZXMgPSB7fTtcbiAgICAgICAgdGhpcy5xdWlja05vdGVPcHRpb25zID0ge1xuICAgICAgICAgICAgdHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgICB0YWdzOiAnQCcsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogJyMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHRhZ3M6IFsnVGVzdCcsICdUZXN0J10sXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogWydUZXN0JywgJ1Rlc3QnXVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZVNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5kZWZlcnJlZEF1dG9jb21wbGV0ZURhdGEub3B0aW9ucyA9IHRoaXMudXBkYXRlRGF0YUluUGlja2VyKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlRGF0YUluUGlja2VyKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zdGF0ZU9iak9wdGlvbnMpO1xuICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNhdmUoZm9ybSwgZGF0YSkge1xuICAgICAgICBmb3JtLmhpZGVDb21wbGV0ZWRGaWVsZHMoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0Zvcm1EZW1vIChkYXRhKTonLCBkYXRhKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwaWNrZXItY3VzdG9tLW51bGwtcmVzdWx0cycsXG4gICAgdGVtcGxhdGU6ICc8cCBjbGFzcz1cInBpY2tlci1udWxsXCI+Tm8gcmVzdWx0cyBtYXRjaCB5b3VyIHNlYXJjaCAoY3VzdG9tKS48L3A+J1xufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJDdXN0b21OdWxsUmVzdWx0cyB7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGlja2VyLWN1c3RvbS1lcnJvcicsXG4gICAgdGVtcGxhdGU6ICc8cCBjbGFzcz1cInBpY2tlci1lcnJvclwiPlRoZXJlIHdhcyBhbiBlcnJvciAoY3VzdG9tKS48L3A+J1xufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJDdXN0b21FcnJvclRlbXBsYXRlIHtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwaWNrZXItY3VzdG9tLWxvYWRlcicsXG4gICAgdGVtcGxhdGU6ICc8cCBjbGFzcz1cInBpY2tlci1sb2FkaW5nXCI+TG9hZGluZy4uLiAoY3VzdG9tKTwvcD4nXG59KVxuZXhwb3J0IGNsYXNzIFBpY2tlckN1c3RvbUxvYWRUZW1wbGF0ZSB7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGlja2VyLWN1c3RvbS1udWxsLXJlY2VudHMnLFxuICAgIHRlbXBsYXRlOiAnPHAgY2xhc3M9XCJwaWNrZXItbnVsbC1yZWNlbnRzXCI+Tm8gcmVjZW50IHJlc3VsdHMgKGN1c3RvbSk8L3A+J1xufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJDdXN0b21Ob1JlY2VudHNUZW1wbGF0ZSB7XG59XG4iXX0=

/***/ },

/***/ 855:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Autocomplete Field With Custom Templates</form-title>\n    <form-field>\n        <form-label>States with Flags</form-label>\n        <form-input name=\"stateObjects\" type=\"picker\" [(options)]=\"autocompleteObjects\" placeholder=\"Pick a State Object\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Deferred</form-label>\n        <form-input name=\"stateDeferredObjects\" type=\"picker\" [(options)]=\"deferredAutocompleteData\" (broadcast)=\"updateSearch($event)\" placeholder=\"Pick a Deferred State Object\"></form-input>\n    </form-field>\n</novo-form>\n"

/***/ },

/***/ 856:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Autocomplete Field</form-title>\n    <form-field>\n        <form-label>State</form-label>\n        <form-input name=\"state\" type=\"picker\" [(options)]=\"autocompleteFlatArrayOptions\" placeholder=\"Pick a State\"></form-input>\n    </form-field>\n\n    <form-field>\n        <form-label>State</form-label>\n        <form-input name=\"entity\" type=\"entity\" [(options)]=\"autocompleteContacts\" placeholder=\"Pick a Contact\"></form-input>\n    </form-field>\n</novo-form>\n"

/***/ },

/***/ 857:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Calendar Picker</form-title>\n    <form-field>\n        <form-label>Start Date</form-label>\n        <form-input name=\"startDate\" type=\"date\" inline=\"true\" placeholder=\"Please select a date\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Start Time</form-label>\n        <form-input name=\"startTime\" type=\"time\" inline=\"true\" placeholder=\"Please select a time\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Start Date &amp; Time</form-label>\n        <form-input name=\"startDateTime\" type=\"datetime\" inline=\"true\" placeholder=\"Please select a date and time\"></form-input>\n    </form-field>\n</novo-form>\n"

/***/ },

/***/ 858:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Checkboxes</form-title>\n    <form-field>\n        <!-- <form-label>Availability</form-label> -->\n        <form-input name=\"isAvailable\" label=\"Is Available?\" type=\"checkbox\" [(value)]=\"isAvailable\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Availability</form-label>\n        <form-input name=\"shifts\" type=\"checkbox\" [options]=\"shifts\" [(value)]=\"availability\"></form-input>\n    </form-field>\n</novo-form>\n<div>I am available on {{availability}}.</div>\n"

/***/ },

/***/ 859:
/***/ function(module, exports) {

	module.exports = "<button theme=\"standard\" (click)=\"form.showAllFields()\">Show All Fields</button>\n<br/>\n<br/>\n<novo-form [meta]=\"dynamic\" [data]=\"dynamicData\" #form>\n<form-title>Add Candidate</form-title>\n</novo-form>\n<div class=\"dynamic-demo-footer\">\n<button theme=\"standard\">Cancel</button>\n<button theme=\"primary\" color=\"success\" icon=\"check\" (click)=\"save(form, dynamicData)\">Save</button>\n</div>\n"

/***/ },

/***/ 860:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Multi-Picker Field</form-title>\n    <form-field>\n        <form-label>Locations</form-label>\n        <form-input name=\"locations\" type=\"picker\" [(options)]=\"autocompleteFlatArrayOptions\" [multiple]=\"true\" placeholder=\"Pick some states\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Contact</form-label>\n        <form-input name=\"entity\" type=\"entity\" [(options)]=\"autocompleteContacts\" [multiple]=\"true\" placeholder=\"Pick a Contact\"></form-input>\n    </form-field>\n</novo-form>\n"

/***/ },

/***/ 861:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>QuickNote</form-title>\n    <form-field>\n        <form-label>Note</form-label>\n        <form-input [(value)]=\"quickNote\" name=\"note\" type=\"note\" [(options)]=\"quickNoteOptions\" [references]=\"quickNoteReferences\" placeholder=\"Add a Note!\"></form-input>\n    </form-field>\n</novo-form>\n<div class=\"data\">\n    <p>Note: {{quickNote}}</p>\n    <p>References: {{quickNoteReferences | json}}</p>\n</div>\n"

/***/ },

/***/ 862:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Radio Buttons</form-title>\n    <form-field>\n        <form-label>Ready to Work?</form-label>\n        <form-input name=\"isReady\" type=\"radio\" [options]=\"yesNo\" [(value)]=\"amIReady\"></form-input>\n    </form-field>\n</novo-form>\n<div>Am I Ready? {{amIReady}}.</div>\n"

/***/ },

/***/ 863:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Select Field</form-title>\n    <form-field>\n        <form-label>Select</form-label>\n        <form-input name=\"status\" type=\"select\" [options]=\"statusOptions\" [(value)]=\"myStatus\" placeholder=\"Status\"></form-input>\n    </form-field>\n</novo-form>\n<div>My status is {{myStatus}}</div>\n"

/***/ },

/***/ 864:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Text Fields</form-title>\n    <form-field required>\n        <form-label>First Name</form-label>\n        <form-input name=\"firstName\" type=\"text\" placeholder=\"Jack\" [(value)]=\"firstName\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Last Name</form-label>\n        <form-input name=\"lastName\" type=\"text\" placeholder=\"White\" [(value)]=\"lastName\"></form-input>\n    </form-field>\n</novo-form>\n<div> My name is {{firstName}} {{lastName}}</div>\n"

/***/ }

});
//# sourceMappingURL=1.26e9fdc4a438a244e741.bundle.map