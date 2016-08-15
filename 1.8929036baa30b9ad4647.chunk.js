webpackJsonp([1],{

/***/ 1144:
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztJQU9hLFcsV0FBQSxXLFdBTFoscUJBQVU7QUFDUCxZQUFRLENBQUMsTUFBRCxDQUREO0FBRVAsY0FBVSxjQUZIO0FBR1AsY0FBVTtBQUhILENBQVYsQzs7Ozs7OzttQ0FNYztBQUNQLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxhQUFMLENBQW1CLEtBQUssSUFBeEIsRUFBOEIsS0FBL0M7QUFDSCIsImZpbGUiOiJDb2RlU25pcHBldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvZ2l0aHViL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgaW5wdXRzOiBbJ2NvZGUnXSxcbiAgICBzZWxlY3RvcjogJ2NvZGUtc25pcHBldCcsXG4gICAgdGVtcGxhdGU6ICc8cHJlPjxjb2RlIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0XCI+PC9jb2RlPjwvcHJlPidcbn0pXG5leHBvcnQgY2xhc3MgQ29kZVNuaXBwZXQge1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodCA9IGhsanMuaGlnaGxpZ2h0QXV0byh0aGlzLmNvZGUpLnZhbHVlO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PickerCustomNoRecentsTemplate = exports.PickerCustomLoadTemplate = exports.PickerCustomErrorTemplate = exports.PickerCustomNullResults = exports.FormDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class, _dec2, _class2, _dec3, _class3, _dec4, _class4, _dec5, _class5;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(14);
	
	var _CodeSnippet = __webpack_require__(1144);
	
	var _AutocompleteFieldDemo = __webpack_require__(1170);
	
	var _AutocompleteFieldDemo2 = _interopRequireDefault(_AutocompleteFieldDemo);
	
	var _AutocompleteFieldCustomDemo = __webpack_require__(1169);
	
	var _AutocompleteFieldCustomDemo2 = _interopRequireDefault(_AutocompleteFieldCustomDemo);
	
	var _CalendarPickerDemo = __webpack_require__(1171);
	
	var _CalendarPickerDemo2 = _interopRequireDefault(_CalendarPickerDemo);
	
	var _CheckboxDemo = __webpack_require__(1172);
	
	var _CheckboxDemo2 = _interopRequireDefault(_CheckboxDemo);
	
	var _DynamicFormDemo = __webpack_require__(1173);
	
	var _DynamicFormDemo2 = _interopRequireDefault(_DynamicFormDemo);
	
	var _MultiselectDemo = __webpack_require__(1174);
	
	var _MultiselectDemo2 = _interopRequireDefault(_MultiselectDemo);
	
	var _RadioButtonsDemo = __webpack_require__(1176);
	
	var _RadioButtonsDemo2 = _interopRequireDefault(_RadioButtonsDemo);
	
	var _SelectFieldDemo = __webpack_require__(1177);
	
	var _SelectFieldDemo2 = _interopRequireDefault(_SelectFieldDemo);
	
	var _TextInputDemo = __webpack_require__(1178);
	
	var _TextInputDemo2 = _interopRequireDefault(_TextInputDemo);
	
	var _QuickNoteInputDemo = __webpack_require__(1175);
	
	var _QuickNoteInputDemo2 = _interopRequireDefault(_QuickNoteInputDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Forms <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/form">(source)</a></small></h1>\n    <p>Forms use inputs and labels to submit user content. But you already knew that. What you may not know is that our forms come in two styles \'Static\' and \'Dynamic\'</p>\n\n    <h2>Static Form</h2>\n    <p>Static forms <code>&lt;novo-form /&gt;</code> are composed of a title <code>&lt;form-title /&gt;</code>, and fields <code>&lt;form-field /&gt;</code>. Fields can include a label <code>&lt;form-label /&gt;</code> and input <code>&lt;form-input /&gt;</code>.Form inputs take name, type, and options attributes <code>&lt;form-input name="gender" type="radio" options="[male, female]" /&gt;</code>. Static forms are used to manually build custom forms when you don\'t have access to a form\'s meta data.</p>\n    <p>If you\'re building a static form, you may need to utilize one of many form fields. The following form fields are supported by BH-Elements.</p>\n\n    <h5>Text Input</h5>\n    <p>This is the basic text input field.</p>\n    <div class="example form-demo text-input">' + _TextInputDemo2.default + '</div>\n    <code-snippet [code]="TextInputDemoTpl"></code-snippet>\n\n    <h5>Radio Buttons</h5>\n    <p>Radio buttons allow users to select a single item from a list.</p>\n    <div class="example form-demo">' + _RadioButtonsDemo2.default + '</div>\n    <code-snippet [code]="RadioButtonDemoTpl"></code-snippet>\n\n    <h5>Checkboxes</h5>\n    <p>Checkboxes allow users to select multiple items from a list.</p>\n    <div class="example form-demo">' + _CheckboxDemo2.default + '</div>\n    <code-snippet [code]="CheckboxDemoTpl"></code-snippet>\n\n    <h5>Calendar Picker</h5>\n    <p>Calendar pickers inside a form are alwasy inline and allow users to pick date, time, or both.</p>\n    <div class="example form-demo">' + _CalendarPickerDemo2.default + '</div>\n    <code-snippet [code]="CalendarPickerDemoTpl"></code-snippet>\n\n    <h5>Dropdown</h5>\n    <p>Dropdown select fields allow the user to select from a list of items.</p>\n    <div class="example form-demo">' + _SelectFieldDemo2.default + '</div>\n    <code-snippet [code]="SelectFieldDemoTpl"></code-snippet>\n\n    <h5>Autocomplete Picker Field</h5>\n    <p>Pickers allow a user to search for and select records in the system. When initially opened it will show the last five viewed records.</p>\n    <div class="example form-demo">' + _AutocompleteFieldDemo2.default + '</div>\n    <code-snippet [code]="AutocompleteFieldDemoTpl"></code-snippet>\n\n    <h5>Autocomplete Custom Picker Field</h5>\n    <p>CUSTOM!</p>\n    <div class="example form-demo">' + _AutocompleteFieldCustomDemo2.default + '</div>\n    <code-snippet [code]="AutocompleteFieldCustomDemoTpl"></code-snippet>\n\n    <h5>Multi-Select</h5>\n    <p>This allows the user to select multiple items from a list, or returned via search.</p>\n    <div class="example form-demo">' + _MultiselectDemo2.default + '</div>\n    <code-snippet [code]="MultiselectDemoTpl"></code-snippet>\n\n    <h5>Note</h5>\n    <p>This allows the user to add a note with references/tags.</p>\n    <div class="example form-demo quicknote">' + _QuickNoteInputDemo2.default + '</div>\n    <code-snippet [code]="QuickNoteInputDemoTpl"></code-snippet>\n\n    <h5>Required Fields</h5>\n    <p>Required fields must be filled before the page can advance. Required fields are indicated with a red dot between the label and the field. If a user attempts to advance without filling out a field, all non-required fields will be removed and required fields will be highlighted in red.</p>\n\n    <h2>Dynamic Form</h2>\n    <p>Dynamic forms are composed of one element, <code>&lt;novo-form [meta]="dynamicData"/&gt;</code> and allow you to pass in dynamic data as a <code>[meta]</code> attribute.</p>\n    <div class="example form-demo dynamic">' + _DynamicFormDemo2.default + '</div>\n    <code-snippet [code]="DynamicFormDemoTpl"></code-snippet>\n</div>\n';
	
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
	            lastName: 'Sullivan',
	            nextAction: 'task'
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
	                name: 'nextAction',
	                type: 'tiles',
	                dataType: 'String',
	                label: 'Next Action',
	                required: true,
	                options: [{
	                    value: 'none',
	                    label: 'None'
	                }, {
	                    value: 'task',
	                    label: 'Task'
	                }, {
	                    value: 'appointment',
	                    label: 'Appointment'
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZm9ybS9Gb3JtRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0seTlIQUFOOztJQXFFYSxRLFdBQUEsUSxXQUxaLHFCQUFVO0FBQ1AsY0FBVSxXQURIO0FBRVAsY0FBVSxRQUZIO0FBR1AsZ0JBQVk7QUFITCxDQUFWLEM7QUFNRyx3QkFBYztBQUFBOztBQUNWLFlBQUksU0FBUyxDQUFDLFNBQUQsRUFBWSxRQUFaLEVBQXNCLFNBQXRCLEVBQWlDLFVBQWpDLEVBQTZDLFlBQTdDLEVBQTJELFVBQTNELEVBQ1QsYUFEUyxFQUNNLFVBRE4sRUFDa0IsU0FEbEIsRUFDNkIsU0FEN0IsRUFDd0MsUUFEeEMsRUFDa0QsT0FEbEQsRUFDMkQsVUFEM0QsRUFDdUUsU0FEdkUsRUFDa0YsTUFEbEYsRUFFVCxRQUZTLEVBRUMsVUFGRCxFQUVhLFdBRmIsRUFFMEIsT0FGMUIsRUFFbUMsVUFGbkMsRUFFK0MsZUFGL0MsRUFFZ0UsVUFGaEUsRUFFNEUsV0FGNUUsRUFHVCxhQUhTLEVBR00sVUFITixFQUdrQixTQUhsQixFQUc2QixVQUg3QixFQUd5QyxRQUh6QyxFQUdtRCxlQUhuRCxFQUdvRSxZQUhwRSxFQUdrRixZQUhsRixFQUlULFVBSlMsRUFJRyxjQUpILEVBSW1CLGdCQUpuQixFQUlxQyxNQUpyQyxFQUk2QyxVQUo3QyxFQUl5RCxRQUp6RCxFQUltRSxjQUpuRSxFQUltRixjQUpuRixFQUtULGdCQUxTLEVBS1MsY0FMVCxFQUt5QixXQUx6QixFQUtzQyxPQUx0QyxFQUsrQyxNQUwvQyxFQUt1RCxTQUx2RCxFQUtrRSxVQUxsRSxFQUs4RSxZQUw5RSxFQU1ULGVBTlMsRUFNUSxXQU5SLEVBTXFCLFNBTnJCLENBQWI7QUFPQSxZQUFJLGlCQUFpQixDQUNqQjtBQUNJLDBCQUFjLGVBRGxCO0FBRUksZ0JBQUksR0FGUjtBQUdJLGtCQUFNLGFBSFY7QUFJSSxtQkFBTyxjQUpYO0FBS0ksbUJBQU8saUJBTFg7QUFNSSxvQkFBUSxRQU5aO0FBT0ksK0JBQW1CO0FBQ2Ysb0JBQUksR0FEVztBQUVmLHNCQUFNO0FBRlMsYUFQdkI7QUFXSSxxQkFBUztBQUNMLHNCQUFNLFFBREQ7QUFFTCx1QkFBTztBQUZGO0FBWGIsU0FEaUIsRUFnQmQ7QUFDQywwQkFBYyxlQURmO0FBRUMsZ0JBQUksR0FGTDtBQUdDLGtCQUFNLFlBSFA7QUFJQyxtQkFBTyxjQUpSO0FBS0MsbUJBQU8sdUJBTFI7QUFNQyxvQkFBUSxRQU5UO0FBT0MsK0JBQW1CO0FBQ2Ysb0JBQUksR0FEVztBQUVmLHNCQUFNO0FBRlMsYUFQcEI7QUFXQyxxQkFBUztBQUNMLHNCQUFNLFFBREQ7QUFFTCx1QkFBTztBQUZGO0FBWFYsU0FoQmMsRUErQmQ7QUFDQywwQkFBYyxlQURmO0FBRUMsZ0JBQUksR0FGTDtBQUdDLGtCQUFNLFlBSFA7QUFJQyxtQkFBTyxjQUpSO0FBS0MsbUJBQU8sdUJBTFI7QUFNQyxvQkFBUSxRQU5UO0FBT0MsK0JBQW1CO0FBQ2Ysb0JBQUksR0FEVztBQUVmLHNCQUFNO0FBRlMsYUFQcEI7QUFXQyxxQkFBUztBQUNMLHNCQUFNLFFBREQ7QUFFTCx1QkFBTztBQUZGO0FBWFYsU0EvQmMsRUE4Q2Q7QUFDQywwQkFBYyxlQURmO0FBRUMsZ0JBQUksR0FGTDtBQUdDLGtCQUFNLGdCQUhQO0FBSUMsbUJBQU8sY0FKUjtBQUtDLG1CQUFPLG9CQUxSO0FBTUMsb0JBQVEsUUFOVDtBQU9DLCtCQUFtQjtBQUNmLG9CQUFJLEdBRFc7QUFFZixzQkFBTTtBQUZTLGFBUHBCO0FBV0MscUJBQVM7QUFDTCxzQkFBTSxRQUREO0FBRUwsdUJBQU87QUFGRjtBQVhWLFNBOUNjLENBQXJCOztBQWdFQSxhQUFLLGdCQUFMO0FBQ0EsYUFBSyxxQkFBTDtBQUNBLGFBQUssd0JBQUw7QUFDQSxhQUFLLGVBQUw7QUFDQSxhQUFLLGtCQUFMO0FBQ0EsYUFBSyxrQkFBTDtBQUNBLGFBQUssa0JBQUw7QUFDQSxhQUFLLGtCQUFMO0FBQ0EsYUFBSyw4QkFBTDtBQUNBLGFBQUsscUJBQUw7O0FBRUEsYUFBSyxLQUFMLEdBQWEsQ0FBQyxLQUFELEVBQVEsSUFBUixDQUFiO0FBQ0EsYUFBSyxNQUFMLEdBQWMsQ0FBQyxTQUFELEVBQVksS0FBWixFQUFtQixPQUFuQixFQUE0QixXQUE1QixDQUFkO0FBQ0EsYUFBSyxlQUFMLEdBQXVCLENBQUMsU0FBRCxFQUFZLFFBQVosRUFBc0IsU0FBdEIsRUFBaUMsVUFBakMsQ0FBdkI7O0FBRUEsYUFBSyw0QkFBTCxHQUFvQztBQUNoQyxxQkFBUztBQUR1QixTQUFwQzs7QUFJQSxhQUFLLHdCQUFMLEdBQWdDO0FBQzVCLHFCQUFTLEtBQUssa0JBQUwsRUFEbUI7QUFFNUIsMEJBQWMsdUJBRmM7QUFHNUIsMkJBQWUseUJBSGE7QUFJNUIsNEJBQWdCLHdCQUpZO0FBSzVCLDRCQUFnQjtBQUxZLFNBQWhDOztBQVFBLGFBQUssbUJBQUwsR0FBMkI7QUFDdkIscUJBQVMsS0FBSztBQURTLFNBQTNCOztBQUlBLGFBQUssb0JBQUwsR0FBNEI7QUFDeEIscUJBQVMsY0FEZTtBQUV4QixtQkFBTztBQUZpQixTQUE1QjtBQUlBLGFBQUssV0FBTCxHQUFtQjtBQUNmLHNCQUFVLFVBREs7QUFFZix3QkFBWTtBQUZHLFNBQW5CO0FBSUEsYUFBSyxPQUFMLEdBQWU7QUFDWCxvQkFBUSxhQURHO0FBRVgsMkJBQWUsZ0dBRko7QUFHWCxtQkFBTyxhQUhJO0FBSVgsb0JBQVEsQ0FDSjtBQUNJLHNCQUFNLFdBRFY7QUFFSSxzQkFBTSxNQUZWO0FBR0ksdUJBQU8sWUFIWDtBQUlJLDBCQUFVO0FBSmQsYUFESSxFQU9KO0FBQ0ksc0JBQU0sVUFEVjtBQUVJLHNCQUFNLE1BRlY7QUFHSSx1QkFBTztBQUhYLGFBUEksRUFZSjtBQUNJLHNCQUFNLFFBRFY7QUFFSSxzQkFBTSxRQUZWO0FBR0ksdUJBQU8sUUFIWDtBQUlJLDBCQUFVO0FBSmQsYUFaSSxFQWtCSjtBQUNJLHNCQUFNLE9BRFY7QUFFSSxzQkFBTSxPQUZWO0FBR0ksdUJBQU8sT0FIWDtBQUlJLDBCQUFVO0FBSmQsYUFsQkksRUF3Qko7QUFDSSxzQkFBTSxVQURWO0FBRUksc0JBQU0sT0FGVjtBQUdJLHVCQUFPLE1BSFg7QUFJSSxnQ0FBZ0I7QUFKcEIsYUF4QkksRUE4Qko7QUFDSSxzQkFBTSxTQURWO0FBRUksc0JBQU0sWUFGVjtBQUdJLHVCQUFPLFlBSFg7QUFJSSwwQkFBVTtBQUpkLGFBOUJJLEVBb0NKO0FBQ0ksc0JBQU0sTUFEVjtBQUVJLHNCQUFNLE1BRlY7QUFHSSx1QkFBTyxNQUhYO0FBSUksMEJBQVU7QUFKZCxhQXBDSSxFQTBDSjtBQUNJLHNCQUFNLE1BRFY7QUFFSSxzQkFBTSxNQUZWO0FBR0ksdUJBQU8sTUFIWDtBQUlJLDBCQUFVO0FBSmQsYUExQ0ksRUFnREo7QUFDSSxzQkFBTSxRQURWO0FBRUksc0JBQU0sUUFGVjtBQUdJLDBCQUFVLFFBSGQ7QUFJSSwyQkFBVyxHQUpmO0FBS0ksOEJBQWMsS0FMbEI7QUFNSSx1QkFBTyxRQU5YO0FBT0kseUJBQVMsQ0FDTDtBQUNJLDJCQUFPLE1BRFg7QUFFSSwyQkFBTztBQUZYLGlCQURLLEVBS0w7QUFDSSwyQkFBTyxZQURYO0FBRUksMkJBQU87QUFGWCxpQkFMSyxFQVNMO0FBQ0ksMkJBQU8sYUFEWDtBQUVJLDJCQUFPO0FBRlgsaUJBVEssRUFhTDtBQUNJLDJCQUFPLFNBRFg7QUFFSSwyQkFBTztBQUZYLGlCQWJLO0FBUGIsYUFoREksRUEwRUo7QUFDSSxzQkFBTSxZQURWO0FBRUksc0JBQU0sT0FGVjtBQUdJLDBCQUFVLFFBSGQ7QUFJSSx1QkFBTyxhQUpYO0FBS0ksMEJBQVUsSUFMZDtBQU1JLHlCQUFTLENBQ0w7QUFDSSwyQkFBTyxNQURYO0FBRUksMkJBQU87QUFGWCxpQkFESyxFQUtMO0FBQ0ksMkJBQU8sTUFEWDtBQUVJLDJCQUFPO0FBRlgsaUJBTEssRUFTTDtBQUNJLDJCQUFPLGFBRFg7QUFFSSwyQkFBTztBQUZYLGlCQVRLO0FBTmIsYUExRUksRUErRko7QUFDSSxzQkFBTSxPQURWO0FBRUksc0JBQU0sUUFGVjtBQUdJLDBCQUFVLFFBSGQ7QUFJSSwyQkFBVyxHQUpmO0FBS0ksOEJBQWMsS0FMbEI7QUFNSSx1QkFBTyxPQU5YO0FBT0ksMEJBQVUsSUFQZDtBQVFJO0FBQ0E7QUFDQSx5QkFBUyxLQUFLO0FBVmxCLGFBL0ZJLEVBMEdEO0FBQ0Msc0JBQU0sV0FEUDtBQUVDLHNCQUFNLFVBRlA7QUFHQywwQkFBVSxXQUhYO0FBSUMsdUJBQU8sWUFKUjtBQUtDLDBCQUFVO0FBTFgsYUExR0MsRUFnSEQ7QUFDQyxzQkFBTSxPQURQO0FBRUMsc0JBQU0sUUFGUDtBQUdDLDBCQUFVLFNBSFg7QUFJQyx1QkFBTyxPQUpSO0FBS0MsMEJBQVU7QUFMWCxhQWhIQyxFQXNIRDtBQUNDLHNCQUFNLFFBRFA7QUFFQyxzQkFBTSxRQUZQO0FBR0MsMEJBQVUsUUFIWDtBQUlDLHVCQUFPLFlBSlI7QUFLQywwQkFBVSxJQUxYO0FBTUMsOEJBQWM7QUFOZixhQXRIQyxFQTZIRDtBQUNDLHNCQUFNLFlBRFA7QUFFQyxzQkFBTSxRQUZQO0FBR0MsOEJBQWMsS0FIZjtBQUlDLDBCQUFVLEtBSlg7QUFLQyx1QkFBTyxZQUxSO0FBTUMsMEJBQVUsS0FOWDtBQU9DLDBCQUFVLElBUFg7QUFRQyw0QkFBWSxJQVJiO0FBU0MsMkJBQVcsUUFUWjtBQVVDLHlCQUFTLENBQ0w7QUFDSSwyQkFBTyxNQURYO0FBRUksMkJBQU87QUFGWCxpQkFESyxFQUtMO0FBQ0ksMkJBQU8sWUFEWDtBQUVJLDJCQUFPO0FBRlgsaUJBTEssRUFTTDtBQUNJLDJCQUFPLGFBRFg7QUFFSSwyQkFBTztBQUZYLGlCQVRLLEVBYUw7QUFDSSwyQkFBTyxTQURYO0FBRUksMkJBQU87QUFGWCxpQkFiSztBQVZWLGFBN0hDLEVBeUpEO0FBQ0Msc0JBQU0sT0FEUDtBQUVDLHNCQUFNLFFBRlA7QUFHQyw4QkFBYyxLQUhmO0FBSUMsMEJBQVUsS0FKWDtBQUtDLHVCQUFPLE9BTFI7QUFNQywwQkFBVSxLQU5YO0FBT0MsMEJBQVUsSUFQWDtBQVFDLDRCQUFZLEtBUmI7QUFTQywyQkFBVyxRQVRaO0FBVUM7QUFDQSw2QkFBYSxlQVhkO0FBWUMsNEJBQVksd0JBWmI7QUFhQyxnQ0FBZ0IsS0FiakI7QUFjQyxrQ0FBa0I7QUFDZCw0QkFBUSxlQURNO0FBRWQsMkJBQU87QUFGTztBQWRuQixhQXpKQyxFQTJLRDtBQUNDLHNCQUFNLFNBRFA7QUFFQyxzQkFBTSxTQUZQO0FBR0MsMEJBQVUsU0FIWDtBQUlDLG9DQUFvQixRQUpyQjtBQUtDLDhCQUFjLEtBTGY7QUFNQywwQkFBVSxJQU5YO0FBT0MsdUJBQU8sU0FQUjtBQVFDLDBCQUFVLEtBUlg7QUFTQywwQkFBVSxLQVRYO0FBVUMsNEJBQVksS0FWYjtBQVdDLGdDQUFnQixJQVhqQjtBQVlDLHdCQUFRLENBQ0o7QUFDSSwwQkFBTSxVQURWO0FBRUksMEJBQU0sUUFGVjtBQUdJLDhCQUFVLFFBSGQ7QUFJSSwrQkFBVyxFQUpmO0FBS0ksa0NBQWMsS0FMbEI7QUFNSSw4QkFBVSxJQU5kO0FBT0ksMkJBQU8sWUFQWDtBQVFJLDhCQUFVLEtBUmQ7QUFTSSw4QkFBVSxLQVRkO0FBVUksZ0NBQVksS0FWaEI7QUFXSSxvQ0FBZ0I7QUFYcEIsaUJBREksRUFjSjtBQUNJLDBCQUFNLFVBRFY7QUFFSSwwQkFBTSxRQUZWO0FBR0ksOEJBQVUsUUFIZDtBQUlJLCtCQUFXLEVBSmY7QUFLSSxrQ0FBYyxLQUxsQjtBQU1JLDhCQUFVLElBTmQ7QUFPSSwyQkFBTyxXQVBYO0FBUUksOEJBQVUsS0FSZDtBQVNJLDhCQUFVLEtBVGQ7QUFVSSxnQ0FBWSxLQVZoQjtBQVdJLG9DQUFnQjtBQVhwQixpQkFkSSxFQTJCSjtBQUNJLDBCQUFNLE1BRFY7QUFFSSwwQkFBTSxRQUZWO0FBR0ksOEJBQVUsUUFIZDtBQUlJLCtCQUFXLEVBSmY7QUFLSSxrQ0FBYyxLQUxsQjtBQU1JLDhCQUFVLElBTmQ7QUFPSSwyQkFBTyxNQVBYO0FBUUksOEJBQVUsS0FSZDtBQVNJLDhCQUFVLEtBVGQ7QUFVSSxnQ0FBWSxLQVZoQjtBQVdJLG9DQUFnQjtBQVhwQixpQkEzQkksRUF3Q0o7QUFDSSwwQkFBTSxPQURWO0FBRUksMEJBQU0sUUFGVjtBQUdJLDhCQUFVLFFBSGQ7QUFJSSwrQkFBVyxFQUpmO0FBS0ksa0NBQWMsS0FMbEI7QUFNSSw4QkFBVSxJQU5kO0FBT0ksMkJBQU8sT0FQWDtBQVFJLDhCQUFVLEtBUmQ7QUFTSSw4QkFBVSxLQVRkO0FBVUksZ0NBQVksS0FWaEI7QUFXSSwrQkFBVyxRQVhmO0FBWUksaUNBQWEsV0FaakI7QUFhSSxnQ0FBWSxzRkFiaEI7QUFjSSxvQ0FBZ0I7QUFkcEIsaUJBeENJLEVBd0RKO0FBQ0ksMEJBQU0sS0FEVjtBQUVJLDBCQUFNLFFBRlY7QUFHSSw4QkFBVSxRQUhkO0FBSUksK0JBQVcsRUFKZjtBQUtJLGtDQUFjLEtBTGxCO0FBTUksOEJBQVUsSUFOZDtBQU9JLDJCQUFPLEtBUFg7QUFRSSw4QkFBVSxLQVJkO0FBU0ksOEJBQVUsS0FUZDtBQVVJLGdDQUFZLEtBVmhCO0FBV0ksb0NBQWdCO0FBWHBCLGlCQXhESSxFQXFFSjtBQUNJLDBCQUFNLFdBRFY7QUFFSSwwQkFBTSxRQUZWO0FBR0ksOEJBQVUsU0FIZDtBQUlJLGtDQUFjLEtBSmxCO0FBS0ksOEJBQVUsS0FMZDtBQU1JLDJCQUFPLFNBTlg7QUFPSSw4QkFBVSxLQVBkO0FBUUksOEJBQVUsS0FSZDtBQVNJLGdDQUFZLEtBVGhCO0FBVUksK0JBQVcsUUFWZjtBQVdJLGlDQUFhLFNBWGpCO0FBWUksZ0NBQVksb0ZBWmhCO0FBYUksa0NBQWMsSUFibEI7QUFjSSxvQ0FBZ0I7QUFkcEIsaUJBckVJLEVBcUZKO0FBQ0ksMEJBQU0sYUFEVjtBQUVJLDBCQUFNLFFBRlY7QUFHSSw4QkFBVSxRQUhkO0FBSUksK0JBQVcsQ0FKZjtBQUtJLDhCQUFVO0FBTGQsaUJBckZJLEVBNEZKO0FBQ0ksMEJBQU0sYUFEVjtBQUVJLDBCQUFNLFFBRlY7QUFHSSw4QkFBVSxRQUhkO0FBSUksK0JBQVcsQ0FKZjtBQUtJLDhCQUFVO0FBTGQsaUJBNUZJO0FBWlQsYUEzS0MsRUE0Uko7QUFDSSxzQkFBTSxVQURWO0FBRUksc0JBQU0sVUFGVjtBQUdJLHVCQUFPO0FBSFgsYUE1UkksRUFpU0o7QUFDSSxzQkFBTSxXQURWO0FBRUksc0JBQU0sV0FGVjtBQUdJLHVCQUFPLFdBSFg7QUFJSSx5QkFBUyxLQUFLLE1BSmxCO0FBS0ksMEJBQVU7QUFMZCxhQWpTSSxFQXdTSjtBQUNJLHNCQUFNLFNBRFY7QUFFSSxzQkFBTSxTQUZWO0FBR0ksdUJBQU8sU0FIWDtBQUlJLDBCQUFVO0FBSmQsYUF4U0k7QUFKRyxTQUFmO0FBb1RBLGFBQUssTUFBTCxHQUFjO0FBQ1Ysb0JBQVE7QUFERSxTQUFkO0FBR0EsYUFBSyxRQUFMLEdBQWdCLEtBQWhCOztBQUVBLGFBQUssYUFBTCxHQUFxQixDQUNqQjtBQUNJLG1CQUFPLE1BRFg7QUFFSSxtQkFBTztBQUZYLFNBRGlCLEVBSWQ7QUFDQyxtQkFBTyxZQURSO0FBRUMsbUJBQU87QUFGUixTQUpjLEVBT2Q7QUFDQyxtQkFBTyxhQURSO0FBRUMsbUJBQU87QUFGUixTQVBjLEVBVWQ7QUFDQyxtQkFBTyxTQURSO0FBRUMsbUJBQU87QUFGUixTQVZjLENBQXJCOztBQWdCQSxhQUFLLG1CQUFMLEdBQTJCLEVBQTNCO0FBQ0EsYUFBSyxnQkFBTCxHQUF3QjtBQUNwQixzQkFBVTtBQUNOLHNCQUFNLEdBREE7QUFFTiw0QkFBWTtBQUZOLGFBRFU7QUFLcEIscUJBQVM7QUFDTCxzQkFBTSxDQUFDLE1BQUQsRUFBUyxNQUFULENBREQ7QUFFTCw0QkFBWSxDQUFDLE1BQUQsRUFBUyxNQUFUO0FBRlA7QUFMVyxTQUF4QjtBQVVIOzs7O3VDQUVjO0FBQ1gsaUJBQUssd0JBQUwsQ0FBOEIsT0FBOUIsR0FBd0MsS0FBSyxrQkFBTCxFQUF4QztBQUNIOzs7NkNBRW9CO0FBQUE7O0FBQ2pCLG1CQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFhO0FBQzVCLDJCQUFXLFlBQU07QUFDYiw0QkFBUSxNQUFLLGVBQWI7QUFDSCxpQkFGRCxFQUVHLElBRkg7QUFHSCxhQUpNLENBQVA7QUFLSDs7OzZCQUVJLEksRUFBTSxJLEVBQU07QUFDYixpQkFBSyxtQkFBTDtBQUNBLG9CQUFRLEdBQVIsQ0FBWSxrQkFBWixFQUFnQyxJQUFoQyxFQUZhLENBRTBCO0FBQzFDOzs7OztJQU9RLHVCLFdBQUEsdUIsWUFKWixxQkFBVTtBQUNQLGNBQVUsNEJBREg7QUFFUCxjQUFVO0FBRkgsQ0FBVixDOzs7SUFXWSx5QixXQUFBLHlCLFlBSloscUJBQVU7QUFDUCxjQUFVLHFCQURIO0FBRVAsY0FBVTtBQUZILENBQVYsQzs7O0lBV1ksd0IsV0FBQSx3QixZQUpaLHFCQUFVO0FBQ1AsY0FBVSxzQkFESDtBQUVQLGNBQVU7QUFGSCxDQUFWLEM7OztJQVdZLDZCLFdBQUEsNkIsWUFKWixxQkFBVTtBQUNQLGNBQVUsNEJBREg7QUFFUCxjQUFVO0FBRkgsQ0FBVixDIiwiZmlsZSI6IkZvcm1EZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZ29kaS9naXRodWIvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTk9WT19GT1JNX0VMRU1FTlRTLCBOT1ZPX0JVVFRPTl9FTEVNRU5UUywgTk9WT19QSUNLRVJfRUxFTUVOVFMgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuaW1wb3J0IHsgQ29kZVNuaXBwZXQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9jb2Rlc25pcHBldC9Db2RlU25pcHBldCc7XG5cbmltcG9ydCBBdXRvY29tcGxldGVGaWVsZERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQXV0b2NvbXBsZXRlRmllbGREZW1vLmh0bWwnO1xuaW1wb3J0IEF1dG9jb21wbGV0ZUZpZWxkQ3VzdG9tRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9BdXRvY29tcGxldGVGaWVsZEN1c3RvbURlbW8uaHRtbCc7XG5pbXBvcnQgQ2FsZW5kYXJQaWNrZXJEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0NhbGVuZGFyUGlja2VyRGVtby5odG1sJztcbmltcG9ydCBDaGVja2JveERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQ2hlY2tib3hEZW1vLmh0bWwnO1xuaW1wb3J0IER5bmFtaWNGb3JtRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9EeW5hbWljRm9ybURlbW8uaHRtbCc7XG5pbXBvcnQgTXVsdGlzZWxlY3REZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL011bHRpc2VsZWN0RGVtby5odG1sJztcbmltcG9ydCBSYWRpb0J1dHRvbkRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvUmFkaW9CdXR0b25zRGVtby5odG1sJztcbmltcG9ydCBTZWxlY3RGaWVsZERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvU2VsZWN0RmllbGREZW1vLmh0bWwnO1xuaW1wb3J0IFRleHRJbnB1dERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVGV4dElucHV0RGVtby5odG1sJztcbmltcG9ydCBRdWlja05vdGVJbnB1dERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvUXVpY2tOb3RlSW5wdXREZW1vLmh0bWwnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+Rm9ybXMgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvZm9ybVwiPihzb3VyY2UpPC9hPjwvc21hbGw+PC9oMT5cbiAgICA8cD5Gb3JtcyB1c2UgaW5wdXRzIGFuZCBsYWJlbHMgdG8gc3VibWl0IHVzZXIgY29udGVudC4gQnV0IHlvdSBhbHJlYWR5IGtuZXcgdGhhdC4gV2hhdCB5b3UgbWF5IG5vdCBrbm93IGlzIHRoYXQgb3VyIGZvcm1zIGNvbWUgaW4gdHdvIHN0eWxlcyAnU3RhdGljJyBhbmQgJ0R5bmFtaWMnPC9wPlxuXG4gICAgPGgyPlN0YXRpYyBGb3JtPC9oMj5cbiAgICA8cD5TdGF0aWMgZm9ybXMgPGNvZGU+Jmx0O25vdm8tZm9ybSAvJmd0OzwvY29kZT4gYXJlIGNvbXBvc2VkIG9mIGEgdGl0bGUgPGNvZGU+Jmx0O2Zvcm0tdGl0bGUgLyZndDs8L2NvZGU+LCBhbmQgZmllbGRzIDxjb2RlPiZsdDtmb3JtLWZpZWxkIC8mZ3Q7PC9jb2RlPi4gRmllbGRzIGNhbiBpbmNsdWRlIGEgbGFiZWwgPGNvZGU+Jmx0O2Zvcm0tbGFiZWwgLyZndDs8L2NvZGU+IGFuZCBpbnB1dCA8Y29kZT4mbHQ7Zm9ybS1pbnB1dCAvJmd0OzwvY29kZT4uRm9ybSBpbnB1dHMgdGFrZSBuYW1lLCB0eXBlLCBhbmQgb3B0aW9ucyBhdHRyaWJ1dGVzIDxjb2RlPiZsdDtmb3JtLWlucHV0IG5hbWU9XCJnZW5kZXJcIiB0eXBlPVwicmFkaW9cIiBvcHRpb25zPVwiW21hbGUsIGZlbWFsZV1cIiAvJmd0OzwvY29kZT4uIFN0YXRpYyBmb3JtcyBhcmUgdXNlZCB0byBtYW51YWxseSBidWlsZCBjdXN0b20gZm9ybXMgd2hlbiB5b3UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gYSBmb3JtJ3MgbWV0YSBkYXRhLjwvcD5cbiAgICA8cD5JZiB5b3UncmUgYnVpbGRpbmcgYSBzdGF0aWMgZm9ybSwgeW91IG1heSBuZWVkIHRvIHV0aWxpemUgb25lIG9mIG1hbnkgZm9ybSBmaWVsZHMuIFRoZSBmb2xsb3dpbmcgZm9ybSBmaWVsZHMgYXJlIHN1cHBvcnRlZCBieSBCSC1FbGVtZW50cy48L3A+XG5cbiAgICA8aDU+VGV4dCBJbnB1dDwvaDU+XG4gICAgPHA+VGhpcyBpcyB0aGUgYmFzaWMgdGV4dCBpbnB1dCBmaWVsZC48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vIHRleHQtaW5wdXRcIj4ke1RleHRJbnB1dERlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJUZXh0SW5wdXREZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+UmFkaW8gQnV0dG9uczwvaDU+XG4gICAgPHA+UmFkaW8gYnV0dG9ucyBhbGxvdyB1c2VycyB0byBzZWxlY3QgYSBzaW5nbGUgaXRlbSBmcm9tIGEgbGlzdC48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vXCI+JHtSYWRpb0J1dHRvbkRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJSYWRpb0J1dHRvbkRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5DaGVja2JveGVzPC9oNT5cbiAgICA8cD5DaGVja2JveGVzIGFsbG93IHVzZXJzIHRvIHNlbGVjdCBtdWx0aXBsZSBpdGVtcyBmcm9tIGEgbGlzdC48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vXCI+JHtDaGVja2JveERlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJDaGVja2JveERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5DYWxlbmRhciBQaWNrZXI8L2g1PlxuICAgIDxwPkNhbGVuZGFyIHBpY2tlcnMgaW5zaWRlIGEgZm9ybSBhcmUgYWx3YXN5IGlubGluZSBhbmQgYWxsb3cgdXNlcnMgdG8gcGljayBkYXRlLCB0aW1lLCBvciBib3RoLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBmb3JtLWRlbW9cIj4ke0NhbGVuZGFyUGlja2VyRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkNhbGVuZGFyUGlja2VyRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PkRyb3Bkb3duPC9oNT5cbiAgICA8cD5Ecm9wZG93biBzZWxlY3QgZmllbGRzIGFsbG93IHRoZSB1c2VyIHRvIHNlbGVjdCBmcm9tIGEgbGlzdCBvZiBpdGVtcy48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vXCI+JHtTZWxlY3RGaWVsZERlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJTZWxlY3RGaWVsZERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5BdXRvY29tcGxldGUgUGlja2VyIEZpZWxkPC9oNT5cbiAgICA8cD5QaWNrZXJzIGFsbG93IGEgdXNlciB0byBzZWFyY2ggZm9yIGFuZCBzZWxlY3QgcmVjb3JkcyBpbiB0aGUgc3lzdGVtLiBXaGVuIGluaXRpYWxseSBvcGVuZWQgaXQgd2lsbCBzaG93IHRoZSBsYXN0IGZpdmUgdmlld2VkIHJlY29yZHMuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGZvcm0tZGVtb1wiPiR7QXV0b2NvbXBsZXRlRmllbGREZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQXV0b2NvbXBsZXRlRmllbGREZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+QXV0b2NvbXBsZXRlIEN1c3RvbSBQaWNrZXIgRmllbGQ8L2g1PlxuICAgIDxwPkNVU1RPTSE8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vXCI+JHtBdXRvY29tcGxldGVGaWVsZEN1c3RvbURlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJBdXRvY29tcGxldGVGaWVsZEN1c3RvbURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5NdWx0aS1TZWxlY3Q8L2g1PlxuICAgIDxwPlRoaXMgYWxsb3dzIHRoZSB1c2VyIHRvIHNlbGVjdCBtdWx0aXBsZSBpdGVtcyBmcm9tIGEgbGlzdCwgb3IgcmV0dXJuZWQgdmlhIHNlYXJjaC48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vXCI+JHtNdWx0aXNlbGVjdERlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJNdWx0aXNlbGVjdERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5Ob3RlPC9oNT5cbiAgICA8cD5UaGlzIGFsbG93cyB0aGUgdXNlciB0byBhZGQgYSBub3RlIHdpdGggcmVmZXJlbmNlcy90YWdzLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBmb3JtLWRlbW8gcXVpY2tub3RlXCI+JHtRdWlja05vdGVJbnB1dERlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJRdWlja05vdGVJbnB1dERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5SZXF1aXJlZCBGaWVsZHM8L2g1PlxuICAgIDxwPlJlcXVpcmVkIGZpZWxkcyBtdXN0IGJlIGZpbGxlZCBiZWZvcmUgdGhlIHBhZ2UgY2FuIGFkdmFuY2UuIFJlcXVpcmVkIGZpZWxkcyBhcmUgaW5kaWNhdGVkIHdpdGggYSByZWQgZG90IGJldHdlZW4gdGhlIGxhYmVsIGFuZCB0aGUgZmllbGQuIElmIGEgdXNlciBhdHRlbXB0cyB0byBhZHZhbmNlIHdpdGhvdXQgZmlsbGluZyBvdXQgYSBmaWVsZCwgYWxsIG5vbi1yZXF1aXJlZCBmaWVsZHMgd2lsbCBiZSByZW1vdmVkIGFuZCByZXF1aXJlZCBmaWVsZHMgd2lsbCBiZSBoaWdobGlnaHRlZCBpbiByZWQuPC9wPlxuXG4gICAgPGgyPkR5bmFtaWMgRm9ybTwvaDI+XG4gICAgPHA+RHluYW1pYyBmb3JtcyBhcmUgY29tcG9zZWQgb2Ygb25lIGVsZW1lbnQsIDxjb2RlPiZsdDtub3ZvLWZvcm0gW21ldGFdPVwiZHluYW1pY0RhdGFcIi8mZ3Q7PC9jb2RlPiBhbmQgYWxsb3cgeW91IHRvIHBhc3MgaW4gZHluYW1pYyBkYXRhIGFzIGEgPGNvZGU+W21ldGFdPC9jb2RlPiBhdHRyaWJ1dGUuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGZvcm0tZGVtbyBkeW5hbWljXCI+JHtEeW5hbWljRm9ybURlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJEeW5hbWljRm9ybURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cbjwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmb3JtLWRlbW8nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICBkaXJlY3RpdmVzOiBbTk9WT19GT1JNX0VMRU1FTlRTLCBOT1ZPX1BJQ0tFUl9FTEVNRU5UUywgTk9WT19CVVRUT05fRUxFTUVOVFMsIENvZGVTbmlwcGV0XVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRGVtbyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBzdGF0ZXMgPSBbJ0FsYWJhbWEnLCAnQWxhc2thJywgJ0FyaXpvbmEnLCAnQXJrYW5zYXMnLCAnQ2FsaWZvcm5pYScsICdDb2xvcmFkbycsXG4gICAgICAgICAgICAnQ29ubmVjdGljdXQnLCAnRGVsYXdhcmUnLCAnRmxvcmlkYScsICdHZW9yZ2lhJywgJ0hhd2FpaScsICdJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnLFxuICAgICAgICAgICAgJ0thbnNhcycsICdLZW50dWNreScsICdMb3Vpc2lhbmEnLCAnTWFpbmUnLCAnTWFyeWxhbmQnLCAnTWFzc2FjaHVzZXR0cycsICdNaWNoaWdhbicsICdNaW5uZXNvdGEnLFxuICAgICAgICAgICAgJ01pc3Npc3NpcHBpJywgJ01pc3NvdXJpJywgJ01vbnRhbmEnLCAnTmVicmFza2EnLCAnTmV2YWRhJywgJ05ldyBIYW1wc2hpcmUnLCAnTmV3IEplcnNleScsICdOZXcgTWV4aWNvJyxcbiAgICAgICAgICAgICdOZXcgWW9yaycsICdOb3J0aCBEYWtvdGEnLCAnTm9ydGggQ2Fyb2xpbmEnLCAnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nLCAnUGVubnN5bHZhbmlhJywgJ1Job2RlIElzbGFuZCcsXG4gICAgICAgICAgICAnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsICdUZXhhcycsICdVdGFoJywgJ1Zlcm1vbnQnLCAnVmlyZ2luaWEnLCAnV2FzaGluZ3RvbicsXG4gICAgICAgICAgICAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZyddO1xuICAgICAgICBsZXQgY29udGFjdE9wdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VhcmNoRW50aXR5OiAnQ2xpZW50Q29udGFjdCcsXG4gICAgICAgICAgICAgICAgaWQ6IDEwMSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnSmFtZXMgU21pdGgnLFxuICAgICAgICAgICAgICAgIHBob25lOiAnNjE3LTU1NS0xMjM0JyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2pzbWl0aEBhY21lLmNvbScsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcbiAgICAgICAgICAgICAgICBjbGllbnRDb3Jwb3JhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogMjEwLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQWNtZSwgSW5jJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgICAgICBjaXR5OiAnQm9zdG9uJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6ICdNQSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgc2VhcmNoRW50aXR5OiAnQ2xpZW50Q29udGFjdCcsXG4gICAgICAgICAgICAgICAgaWQ6IDEwMixcbiAgICAgICAgICAgICAgICBuYW1lOiAnSm9obiBTbWl0aCcsXG4gICAgICAgICAgICAgICAgcGhvbmU6ICc2MTctNTU1LTEyMzQnLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnanNtaXRoQGJpZ2NvbXBhbnkuY29tJyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdBY3RpdmUnLFxuICAgICAgICAgICAgICAgIGNsaWVudENvcnBvcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAyMjAsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdCaWcgQ29tcGFueSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogJ0Jvc3RvbicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiAnTUEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHNlYXJjaEVudGl0eTogJ0NsaWVudENvbnRhY3QnLFxuICAgICAgICAgICAgICAgIGlkOiAxMDMsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0phbmUgU21pdGgnLFxuICAgICAgICAgICAgICAgIHBob25lOiAnNjE3LTU1NS0xMjM0JyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2pzbWl0aEBxdWlja3N0YWZmLmNvbScsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcbiAgICAgICAgICAgICAgICBjbGllbnRDb3Jwb3JhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogMjMwLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnUXVpY2tTdGFmZiBMTEMnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNpdHk6ICdCb3N0b24nLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogJ01BJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hFbnRpdHk6ICdDbGllbnRDb250YWN0JyxcbiAgICAgICAgICAgICAgICBpZDogMTA0LFxuICAgICAgICAgICAgICAgIG5hbWU6ICdKYW1lcyBBbmRlcnNvbicsXG4gICAgICAgICAgICAgICAgcGhvbmU6ICc2MTctNTU1LTEyMzQnLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnamFuZGVyc29uQGFjbWUuY29tJyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdBY3RpdmUnLFxuICAgICAgICAgICAgICAgIGNsaWVudENvcnBvcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAyMTAsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdBY21lLCBJbmMnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNpdHk6ICdCb3N0b24nLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogJ01BJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLlRleHRJbnB1dERlbW9UcGwgPSBUZXh0SW5wdXREZW1vVHBsO1xuICAgICAgICB0aGlzLkNhbGVuZGFyUGlja2VyRGVtb1RwbCA9IENhbGVuZGFyUGlja2VyRGVtb1RwbDtcbiAgICAgICAgdGhpcy5BdXRvY29tcGxldGVGaWVsZERlbW9UcGwgPSBBdXRvY29tcGxldGVGaWVsZERlbW9UcGw7XG4gICAgICAgIHRoaXMuQ2hlY2tib3hEZW1vVHBsID0gQ2hlY2tib3hEZW1vVHBsO1xuICAgICAgICB0aGlzLkR5bmFtaWNGb3JtRGVtb1RwbCA9IER5bmFtaWNGb3JtRGVtb1RwbDtcbiAgICAgICAgdGhpcy5SYWRpb0J1dHRvbkRlbW9UcGwgPSBSYWRpb0J1dHRvbkRlbW9UcGw7XG4gICAgICAgIHRoaXMuTXVsdGlzZWxlY3REZW1vVHBsID0gTXVsdGlzZWxlY3REZW1vVHBsO1xuICAgICAgICB0aGlzLlNlbGVjdEZpZWxkRGVtb1RwbCA9IFNlbGVjdEZpZWxkRGVtb1RwbDtcbiAgICAgICAgdGhpcy5BdXRvY29tcGxldGVGaWVsZEN1c3RvbURlbW9UcGwgPSBBdXRvY29tcGxldGVGaWVsZEN1c3RvbURlbW9UcGw7XG4gICAgICAgIHRoaXMuUXVpY2tOb3RlSW5wdXREZW1vVHBsID0gUXVpY2tOb3RlSW5wdXREZW1vVHBsO1xuXG4gICAgICAgIHRoaXMueWVzTm8gPSBbJ1llcycsICdObyddO1xuICAgICAgICB0aGlzLnNoaWZ0cyA9IFsnTW9ybmluZycsICdEYXknLCAnTmlnaHQnLCAnT3Zlcm5pZ2h0J107XG4gICAgICAgIHRoaXMuc3RhdGVPYmpPcHRpb25zID0gWydBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJ107XG5cbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVGbGF0QXJyYXlPcHRpb25zID0ge1xuICAgICAgICAgICAgb3B0aW9uczogc3RhdGVzXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kZWZlcnJlZEF1dG9jb21wbGV0ZURhdGEgPSB7XG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLnVwZGF0ZURhdGFJblBpY2tlcigpLFxuICAgICAgICAgICAgbnVsbFRlbXBsYXRlOiBQaWNrZXJDdXN0b21OdWxsUmVzdWx0cyxcbiAgICAgICAgICAgIGVycm9yVGVtcGxhdGU6IFBpY2tlckN1c3RvbUVycm9yVGVtcGxhdGUsXG4gICAgICAgICAgICBsb2FkZXJUZW1wbGF0ZTogUGlja2VyQ3VzdG9tTG9hZFRlbXBsYXRlLFxuICAgICAgICAgICAgcmVjZW50VGVtcGxhdGU6IFBpY2tlckN1c3RvbU5vUmVjZW50c1RlbXBsYXRlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVPYmplY3RzID0ge1xuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5zdGF0ZU9iak9wdGlvbnNcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUNvbnRhY3RzID0ge1xuICAgICAgICAgICAgb3B0aW9uczogY29udGFjdE9wdGlvbnMsXG4gICAgICAgICAgICBmaWVsZDogJ25hbWUnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZHluYW1pY0RhdGEgPSB7XG4gICAgICAgICAgICBsYXN0TmFtZTogJ1N1bGxpdmFuJyxcbiAgICAgICAgICAgIG5leHRBY3Rpb246ICd0YXNrJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmR5bmFtaWMgPSB7XG4gICAgICAgICAgICBlbnRpdHk6ICdPcHBvcnR1bml0eScsXG4gICAgICAgICAgICBlbnRpdHlNZXRhVXJsOiAnaHR0cDovL2RldmVsb3AtYmFja2VuZC5iaC1ib3MyLmJ1bGxob3JuLmNvbTo4MTgxL3Jlc3Qtc2VydmljZXMvMXlnOHAvbWV0YS9PcHBvcnR1bml0eT9maWVsZHM9KicsXG4gICAgICAgICAgICBsYWJlbDogJ09wcG9ydHVuaXR5JyxcbiAgICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2ZpcnN0TmFtZScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdGaXJzdCBOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2xhc3ROYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0xhc3QgTmFtZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ051bWJlcicsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmbG9hdCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdmbG9hdCcsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRmxvYXQnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY3VycmVuY3knLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbW9uZXknLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Nvc3QnLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUZvcm1hdDogJ1VTRCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3BlcmNlbnQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGVyY2VudGFnZScsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUGVyY2VudGFnZScsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGUnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAndGltZScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUaW1lJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3N0YXR1cycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1N0YXR1cycsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ09wZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnT3BlbidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdRdWFsaWZ5aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1F1YWxpZnlpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnTmVnb3RpYXRpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTmVnb3RpYXRpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnVFJJR0dFUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUUklHR0VSJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICduZXh0QWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RpbGVzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ05leHQgQWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICd0YXNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1Rhc2snXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnYXBwb2ludG1lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQXBwb2ludG1lbnQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3N0YXRlJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BpY2tlcicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU3RhdGUnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQWxpZ24gcGlja2VyIHdpdGggTUVUQSBieSBwYXNzaW5nIE1FVEEgb2JqIGludG8gcGlja2VyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbnM6IFsgLyogZmxhdCBhcnJheSBvZiBzdGF0ZXMgKi8gXVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLmF1dG9jb21wbGV0ZUZsYXRBcnJheU9wdGlvbnNcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdGFydERhdGUnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZXRpbWUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ1RpbWVzdGFtcCcsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU3RhcnQgRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVvdGEnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdJbnRlZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdRdW90YScsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VjcmV0JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUb3AgU2VjcmV0JyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogJ1RoZSBzZWNyZXQgY29kZSBpczogMDgzMjInXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcmllcycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaWNrZXInLFxuICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ2F0ZWdvcmllcycsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG11bHRpVmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTogJ1NFTEVDVCcsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ09wZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnT3BlbidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdRdWFsaWZ5aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1F1YWxpZnlpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnTmVnb3RpYXRpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTmVnb3RpYXRpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnVFJJR0dFUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUUklHR0VSJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnb3duZXInLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW50aXR5JyxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ093bmVyJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTogJ1NFTEVDVCcsXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IEFsaWduIHBpY2tlciB3aXRoIE1FVEEgYnkgcGFzc2luZyBNRVRBIG9iaiBpbnRvIHBpY2tlclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zVHlwZTogJ0NvcnBvcmF0ZVVzZXInLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zVXJsOiAnL29wdGlvbnMvQ29ycG9yYXRlVXNlcicsXG4gICAgICAgICAgICAgICAgICAgIGhpZGVGcm9tU2VhcmNoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYXNzb2NpYXRlZEVudGl0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiAnQ29ycG9yYXRlVXNlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NvcnBvcmF0ZSBVc2VyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkcmVzcycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhZGRyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdBZGRyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNwZWNpYWxpemF0aW9uOiAnU1lTVEVNJyxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQWRkcmVzcycsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtdWx0aVZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaGlkZUZyb21TZWFyY2g6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRyZXNzMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NDQUxBUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FkZHJlc3N4eHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZyb21TZWFyY2g6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRyZXNzMicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NDQUxBUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FkZHJlc3MgMicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aVZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRnJvbVNlYXJjaDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NpdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTQ0FMQVInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDQwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpVmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGcm9tU2VhcmNoOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3RhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTQ0FMQVInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTdGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aVZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6ICdTRUxFQ1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNUeXBlOiAnU3RhdGVUZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zVXJsOiAnaHR0cDovL29wdGltdXMtYmFja2VuZC5iaC1ib3MyLmJ1bGxob3JuLmNvbTo4MTgxL3Jlc3Qtc2VydmljZXMvMWhzL29wdGlvbnMvU3RhdGVUZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRnJvbVNlYXJjaDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ppcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NDQUxBUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1ppcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aVZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRnJvbVNlYXJjaDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NvdW50cnlJRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NDQUxBUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdJbnRlZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOiAnU0VMRUNUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zVHlwZTogJ0NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNVcmw6ICdodHRwOi8vb3B0aW11cy1iYWNrZW5kLmJoLWJvczIuYnVsbGhvcm4uY29tOjgxODEvcmVzdC1zZXJ2aWNlcy8xaHMvb3B0aW9ucy9Db3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IDIyNjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZyb21TZWFyY2g6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjb3VudHJ5Q29kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NDQUxBUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY291bnRyeU5hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTQ0FMQVInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NoZWNrYm94J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tsaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ2hlY2tMaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5zaGlmdHMsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FkZHJlc3MnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FkZHJlc3MnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB7XG4gICAgICAgICAgICBpc29wZW46IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnN0YXR1c09wdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICdPcGVuJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ09wZW4nXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICdRdWFsaWZ5aW5nJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1F1YWxpZnlpbmcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICdOZWdvdGlhdGluZycsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdOZWdvdGlhdGluZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1RSSUdHRVInLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnVFJJR0dFUidcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnF1aWNrTm90ZVJlZmVyZW5jZXMgPSB7fTtcbiAgICAgICAgdGhpcy5xdWlja05vdGVPcHRpb25zID0ge1xuICAgICAgICAgICAgdHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgICB0YWdzOiAnQCcsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogJyMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHRhZ3M6IFsnVGVzdCcsICdUZXN0J10sXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogWydUZXN0JywgJ1Rlc3QnXVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZVNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5kZWZlcnJlZEF1dG9jb21wbGV0ZURhdGEub3B0aW9ucyA9IHRoaXMudXBkYXRlRGF0YUluUGlja2VyKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlRGF0YUluUGlja2VyKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zdGF0ZU9iak9wdGlvbnMpO1xuICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNhdmUoZm9ybSwgZGF0YSkge1xuICAgICAgICBmb3JtLmhpZGVDb21wbGV0ZWRGaWVsZHMoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0Zvcm1EZW1vIChkYXRhKTonLCBkYXRhKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwaWNrZXItY3VzdG9tLW51bGwtcmVzdWx0cycsXG4gICAgdGVtcGxhdGU6ICc8cCBjbGFzcz1cInBpY2tlci1udWxsXCI+Tm8gcmVzdWx0cyBtYXRjaCB5b3VyIHNlYXJjaCAoY3VzdG9tKS48L3A+J1xufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJDdXN0b21OdWxsUmVzdWx0cyB7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGlja2VyLWN1c3RvbS1lcnJvcicsXG4gICAgdGVtcGxhdGU6ICc8cCBjbGFzcz1cInBpY2tlci1lcnJvclwiPlRoZXJlIHdhcyBhbiBlcnJvciAoY3VzdG9tKS48L3A+J1xufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJDdXN0b21FcnJvclRlbXBsYXRlIHtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwaWNrZXItY3VzdG9tLWxvYWRlcicsXG4gICAgdGVtcGxhdGU6ICc8cCBjbGFzcz1cInBpY2tlci1sb2FkaW5nXCI+TG9hZGluZy4uLiAoY3VzdG9tKTwvcD4nXG59KVxuZXhwb3J0IGNsYXNzIFBpY2tlckN1c3RvbUxvYWRUZW1wbGF0ZSB7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGlja2VyLWN1c3RvbS1udWxsLXJlY2VudHMnLFxuICAgIHRlbXBsYXRlOiAnPHAgY2xhc3M9XCJwaWNrZXItbnVsbC1yZWNlbnRzXCI+Tm8gcmVjZW50IHJlc3VsdHMgKGN1c3RvbSk8L3A+J1xufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJDdXN0b21Ob1JlY2VudHNUZW1wbGF0ZSB7XG59XG4iXX0=

/***/ },

/***/ 1169:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Autocomplete Field With Custom Templates</form-title>\n    <form-field>\n        <form-label>States with Flags</form-label>\n        <form-input name=\"stateObjects\" type=\"picker\" [(options)]=\"autocompleteObjects\" placeholder=\"Pick a State Object\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Deferred</form-label>\n        <form-input name=\"stateDeferredObjects\" type=\"picker\" [(options)]=\"deferredAutocompleteData\" (broadcast)=\"updateSearch($event)\" placeholder=\"Pick a Deferred State Object\"></form-input>\n    </form-field>\n</novo-form>\n"

/***/ },

/***/ 1170:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Autocomplete Field</form-title>\n    <form-field>\n        <form-label>State</form-label>\n        <form-input name=\"state\" type=\"picker\" [(options)]=\"autocompleteFlatArrayOptions\" placeholder=\"Pick a State\"></form-input>\n    </form-field>\n\n    <form-field>\n        <form-label>State</form-label>\n        <form-input name=\"entity\" type=\"entity\" [(options)]=\"autocompleteContacts\" placeholder=\"Pick a Contact\"></form-input>\n    </form-field>\n</novo-form>\n\n<novo-form layout=\"vertical\">\n    <form-title>Vertical Autocomplete Field</form-title>\n    <form-field>\n        <form-label>State</form-label>\n        <form-input name=\"state\" type=\"picker\" [(options)]=\"autocompleteFlatArrayOptions\" placeholder=\"Pick a State\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>State</form-label>\n        <form-input name=\"state\" type=\"picker\" [(options)]=\"autocompleteFlatArrayOptions\"></form-input>\n    </form-field>\n</novo-form>\n"

/***/ },

/***/ 1171:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Default Calendar Picker</form-title>\n    <form-field>\n        <form-label>Start Date</form-label>\n        <form-input name=\"startDate\" type=\"date\" inline=\"true\" placeholder=\"Please select a date\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Start Time</form-label>\n        <form-input name=\"startTime\" type=\"time\" inline=\"true\" placeholder=\"Please select a time\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Start Date &amp; Time</form-label>\n        <form-input name=\"startDateTime\" type=\"datetime\" inline=\"true\" placeholder=\"Please select a date and time\"></form-input>\n    </form-field>\n</novo-form>\n<novo-form layout=\"vertical\">\n    <form-title>Vertical Calendar Picker</form-title>\n    <form-field>\n        <form-label>Please select a date</form-label>\n        <form-input name=\"startDate\" type=\"date\" inline=\"true\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Please select a time</form-label>\n        <form-input name=\"startTime\" type=\"time\" inline=\"true\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Start Date &amp; Time</form-label>\n        <form-input name=\"startDateTime\" type=\"datetime\" inline=\"true\"></form-input>\n    </form-field>\n</novo-form>\n"

/***/ },

/***/ 1172:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Default Checkboxes</form-title>\n    <form-field>\n        <!-- <form-label>Availability</form-label> -->\n        <form-input name=\"isAvailable\" label=\"Is Available?\" type=\"checkbox\" [(value)]=\"isAvailable\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Availability</form-label>\n        <form-input name=\"shifts\" type=\"checkbox\" [options]=\"shifts\" [(value)]=\"availability\"></form-input>\n    </form-field>\n</novo-form>\n<div class=\"final-value\">I am available on {{availability}}.</div>\n<novo-form layout=\"vertical\">\n    <form-title>Vertical Checkboxes</form-title>\n    <form-field>\n        <!-- <form-label>Availability</form-label> -->\n        <form-input name=\"isAvailable\" label=\"Is Available?\" type=\"checkbox\" [(value)]=\"isAvailable\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Availability</form-label>\n        <form-input name=\"shifts\" type=\"checkbox\" [options]=\"shifts\" [(value)]=\"availability\"></form-input>\n    </form-field>\n</novo-form>\n<div class=\"final-value\">I am available on {{availability}}.</div>\n"

/***/ },

/***/ 1173:
/***/ function(module, exports) {

	module.exports = "<button theme=\"standard\" (click)=\"form.showAllFields()\">Show All Fields</button>\n<br/>\n<br/>\n<novo-form layout=\"vertical\" [meta]=\"dynamic\" [data]=\"dynamicData\" #form>\n    <form-title>Add Candidate</form-title>\n</novo-form>\n<div class=\"dynamic-demo-footer\">\n    <button theme=\"standard\">Cancel</button>\n    <button theme=\"primary\" color=\"success\" icon=\"check\" (click)=\"save(form, dynamicData)\">Save</button>\n</div>\n"

/***/ },

/***/ 1174:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Multi-Picker Field</form-title>\n    <form-field>\n        <form-label>Locations</form-label>\n        <form-input name=\"locations\" type=\"picker\" [(options)]=\"autocompleteFlatArrayOptions\" [multiple]=\"true\" placeholder=\"Pick some states\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Contact</form-label>\n        <form-input name=\"entity\" type=\"entity\" [(options)]=\"autocompleteContacts\" [multiple]=\"true\" placeholder=\"Pick a Contact\"></form-input>\n    </form-field>\n</novo-form>\n<novo-form layout=\"vertical\">\n    <form-title>Vertical Multi-Picker Field</form-title>\n    <form-field>\n        <form-label>Locations</form-label>\n        <form-input name=\"locations\" type=\"picker\" [(options)]=\"autocompleteFlatArrayOptions\" [multiple]=\"true\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Contact</form-label>\n        <form-input name=\"entity\" type=\"entity\" [(options)]=\"autocompleteContacts\" [multiple]=\"true\"></form-input>\n    </form-field>\n</novo-form>\n"

/***/ },

/***/ 1175:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>QuickNote</form-title>\n    <form-field>\n        <form-label>Note</form-label>\n        <form-input [(value)]=\"quickNote\" name=\"note\" type=\"note\" [(options)]=\"quickNoteOptions\" [references]=\"quickNoteReferences\" placeholder=\"Add a Note!\"></form-input>\n    </form-field>\n</novo-form>\n<div class=\"data final-value\">\n    <p>Note: {{quickNote}}</p>\n    <p>References: {{quickNoteReferences | json}}</p>\n</div>\n\n<novo-form layout=\"vertical\">\n    <form-title>QuickNote</form-title>\n    <form-field>\n        <form-label>Note</form-label>\n        <form-input [(value)]=\"quickNote\" name=\"note\" type=\"note\" [(options)]=\"quickNoteOptions\" [references]=\"quickNoteReferences\"></form-input>\n    </form-field>\n</novo-form>\n<div class=\"data final-value\">\n    <p>Note: {{quickNote}}</p>\n    <p>References: {{quickNoteReferences | json}}</p>\n</div>\n"

/***/ },

/***/ 1176:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Default Radio Buttons</form-title>\n    <form-field>\n        <form-label>Ready to Work?</form-label>\n        <form-input name=\"isReady\" type=\"radio\" [options]=\"yesNo\" [(value)]=\"amIReady\"></form-input>\n    </form-field>\n</novo-form>\n<div class=\"final-value\">Am I Ready? {{amIReady}}.</div>\n<novo-form layout=\"vertical\">\n    <form-title>Vertical Radio Buttons</form-title>\n    <form-field>\n        <form-label>Ready to Work?</form-label>\n        <form-input name=\"isReady\" type=\"radio\" [options]=\"yesNo\" [(value)]=\"amIReady\"></form-input>\n    </form-field>\n</novo-form>\n<div class=\"final-value\">Am I Ready? {{amIReady}}.</div>\n"

/***/ },

/***/ 1177:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Default Select Field</form-title>\n    <form-field>\n        <form-label>Select</form-label>\n        <form-input name=\"status\" type=\"select\" [options]=\"statusOptions\" [(value)]=\"myStatus\" placeholder=\"Status\"></form-input>\n    </form-field>\n</novo-form>\n<div class=\"final-value\">My status is {{myStatus}}</div>\n<novo-form layout=\"vertical\">\n    <form-title>Vertical Select Field</form-title>\n    <form-field>\n        <form-label>Select</form-label>\n        <form-input name=\"status\" type=\"select\" [options]=\"statusOptions\" [(value)]=\"myStatus\"></form-input>\n    </form-field>\n</novo-form>\n<div class=\"final-value\">My status is {{myStatus}}</div>\n"

/***/ },

/***/ 1178:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Default Text Fields</form-title>\n    <form-field required>\n        <form-label>First Name</form-label>\n        <form-input name=\"firstName\" type=\"text\" placeholder=\"Jack\" [(value)]=\"firstName\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Last Name</form-label>\n        <form-input name=\"lastName\" type=\"text\" placeholder=\"White\" [(value)]=\"lastName\"></form-input>\n    </form-field>\n</novo-form>\n<div class=\"final-value\"> My name is... {{firstName}} {{lastName}}</div>\n\n<novo-form layout=\"vertical\">\n    <form-title>Vertical Text Fields</form-title>\n    <form-field required>\n        <form-label>First Name</form-label>\n        <form-input name=\"firstName\" type=\"text\" placeholder=\"Jack\" [(value)]=\"firstName\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Last Name</form-label>\n        <form-input name=\"lastName\" type=\"text\" [(value)]=\"lastName\"></form-input>\n    </form-field>\n</novo-form>\n<div class=\"final-value\"> My name is... {{firstName}} {{lastName}}</div>\n"

/***/ }

});
//# sourceMappingURL=1.8929036baa30b9ad4647.bundle.map