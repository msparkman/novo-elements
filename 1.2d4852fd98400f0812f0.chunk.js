webpackJsonp([1],{

/***/ 1130:
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztJQU9hLFcsV0FBQSxXLFdBTFoscUJBQVU7QUFDUCxZQUFRLENBQUMsTUFBRCxDQUREO0FBRVAsY0FBVSxjQUZIO0FBR1AsY0FBVTtBQUhILENBQVYsQzs7Ozs7OzttQ0FNYztBQUNQLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxhQUFMLENBQW1CLEtBQUssSUFBeEIsRUFBOEIsS0FBL0M7QUFDSCIsImZpbGUiOiJDb2RlU25pcHBldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvbm92by1kZXYvbGlicy9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIGlucHV0czogWydjb2RlJ10sXG4gICAgc2VsZWN0b3I6ICdjb2RlLXNuaXBwZXQnLFxuICAgIHRlbXBsYXRlOiAnPHByZT48Y29kZSBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodFwiPjwvY29kZT48L3ByZT4nXG59KVxuZXhwb3J0IGNsYXNzIENvZGVTbmlwcGV0IHtcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHQgPSBobGpzLmhpZ2hsaWdodEF1dG8odGhpcy5jb2RlKS52YWx1ZTtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PickerCustomNoRecentsTemplate = exports.PickerCustomLoadTemplate = exports.PickerCustomErrorTemplate = exports.PickerCustomNullResults = exports.FormDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class, _dec2, _class2, _dec3, _class3, _dec4, _class4, _dec5, _class5;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(15);
	
	var _CodeSnippet = __webpack_require__(1130);
	
	var _AutocompleteFieldDemo = __webpack_require__(1154);
	
	var _AutocompleteFieldDemo2 = _interopRequireDefault(_AutocompleteFieldDemo);
	
	var _AutocompleteFieldCustomDemo = __webpack_require__(1153);
	
	var _AutocompleteFieldCustomDemo2 = _interopRequireDefault(_AutocompleteFieldCustomDemo);
	
	var _CalendarPickerDemo = __webpack_require__(1155);
	
	var _CalendarPickerDemo2 = _interopRequireDefault(_CalendarPickerDemo);
	
	var _CheckboxDemo = __webpack_require__(1156);
	
	var _CheckboxDemo2 = _interopRequireDefault(_CheckboxDemo);
	
	var _DynamicFormDemo = __webpack_require__(1157);
	
	var _DynamicFormDemo2 = _interopRequireDefault(_DynamicFormDemo);
	
	var _MultiselectDemo = __webpack_require__(1158);
	
	var _MultiselectDemo2 = _interopRequireDefault(_MultiselectDemo);
	
	var _RadioButtonsDemo = __webpack_require__(1160);
	
	var _RadioButtonsDemo2 = _interopRequireDefault(_RadioButtonsDemo);
	
	var _SelectFieldDemo = __webpack_require__(1161);
	
	var _SelectFieldDemo2 = _interopRequireDefault(_SelectFieldDemo);
	
	var _TextInputDemo = __webpack_require__(1162);
	
	var _TextInputDemo2 = _interopRequireDefault(_TextInputDemo);
	
	var _QuickNoteInputDemo = __webpack_require__(1159);
	
	var _QuickNoteInputDemo2 = _interopRequireDefault(_QuickNoteInputDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Forms <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/form">(source)</a></small></h1>\n    <p>Forms use inputs and labels to submit user content. But you already knew that. What you may not know is that our forms come in two styles \'Static\' and \'Dynamic\'</p>\n\n    <h2>Static Form</h2>\n    <p>Static forms <code>&lt;novo-form /&gt;</code> are composed of a title <code>&lt;form-title /&gt;</code>, and fields <code>&lt;form-field /&gt;</code>. Fields can include a label <code>&lt;form-label /&gt;</code> and input <code>&lt;form-input /&gt;</code>.Form inputs take name, type, and options attributes <code>&lt;form-input name="gender" type="radio" options="[male, female]" /&gt;</code>. Static forms are used to manually build custom forms when you don\'t have access to a form\'s meta data.</p>\n    <p>If you\'re building a static form, you may need to utilize one of many form fields. The following form fields are supported by BH-Elements.</p>\n\n    <h5>Text Input</h5>\n    <p>This is the basic text input field.</p>\n    <div class="example form-demo">' + _TextInputDemo2.default + '</div>\n    <code-snippet [code]="TextInputDemoTpl"></code-snippet>\n\n    <h5>Radio Buttons</h5>\n    <p>Radio buttons allow users to select a single item from a list.</p>\n    <div class="example form-demo">' + _RadioButtonsDemo2.default + '</div>\n    <code-snippet [code]="RadioButtonDemoTpl"></code-snippet>\n\n    <h5>Checkboxes</h5>\n    <p>Checkboxes allow users to select multiple items from a list.</p>\n    <div class="example form-demo">' + _CheckboxDemo2.default + '</div>\n    <code-snippet [code]="CheckboxDemoTpl"></code-snippet>\n\n    <h5>Calendar Picker</h5>\n    <p>Calendar pickers inside a form are alwasy inline and allow users to pick date, time, or both.</p>\n    <div class="example form-demo">' + _CalendarPickerDemo2.default + '</div>\n    <code-snippet [code]="CalendarPickerDemoTpl"></code-snippet>\n\n    <h5>Dropdown</h5>\n    <p>Dropdown select fields allow the user to select from a list of items.</p>\n    <div class="example form-demo">' + _SelectFieldDemo2.default + '</div>\n    <code-snippet [code]="SelectFieldDemoTpl"></code-snippet>\n\n    <h5>Autocomplete Picker Field</h5>\n    <p>Pickers allow a user to search for and select records in the system. When initially opened it will show the last five viewed records.</p>\n    <div class="example form-demo">' + _AutocompleteFieldDemo2.default + '</div>\n    <code-snippet [code]="AutocompleteFieldDemoTpl"></code-snippet>\n\n    <h5>Autocomplete Custom Picker Field</h5>\n    <p>CUSTOM!</p>\n    <div class="example form-demo">' + _AutocompleteFieldCustomDemo2.default + '</div>\n    <code-snippet [code]="AutocompleteFieldCustomDemoTpl"></code-snippet>\n\n    <h5>Multi-Select</h5>\n    <p>This allows the user to select multiple items from a list, or returned via search.</p>\n    <div class="example form-demo">' + _MultiselectDemo2.default + '</div>\n    <code-snippet [code]="MultiselectDemoTpl"></code-snippet>\n\n    <h5>Note</h5>\n    <p>This allows the user to add a note with references/tags.</p>\n    <div class="example form-demo">' + _QuickNoteInputDemo2.default + '</div>\n    <code-snippet [code]="QuickNoteInputDemoTpl"></code-snippet>\n\n    <h5>Required Fields</h5>\n    <p>Required fields must be filled before the page can advance. Required fields are indicated with a red dot between the label and the field. If a user attempts to advance without filling out a field, all non-required fields will be removed and required fields will be highlighted in red.</p>\n\n    <h2>Dynamic Form</h2>\n    <p>Dynamic forms are composed of one element, <code>&lt;novo-form [meta]="dynamicData"/&gt;</code> and allow you to pass in dynamic data as a <code>[meta]</code> attribute.</p>\n    <div class="example form-demo">' + _DynamicFormDemo2.default + '</div>\n    <code-snippet [code]="DynamicFormDemoTpl"></code-snippet>\n</div>\n';
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvZm9ybS9Gb3JtRGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sNDdIQUFOOztJQXFFYSxRLFdBQUEsUSxXQUxaLHFCQUFVO0FBQ1AsY0FBVSxXQURIO0FBRVAsY0FBVSxRQUZIO0FBR1AsZ0JBQVk7QUFITCxDQUFWLEM7QUFNRyx3QkFBYztBQUFBOztBQUNWLFlBQUksU0FBUyxDQUFDLFNBQUQsRUFBWSxRQUFaLEVBQXNCLFNBQXRCLEVBQWlDLFVBQWpDLEVBQTZDLFlBQTdDLEVBQTJELFVBQTNELEVBQ1QsYUFEUyxFQUNNLFVBRE4sRUFDa0IsU0FEbEIsRUFDNkIsU0FEN0IsRUFDd0MsUUFEeEMsRUFDa0QsT0FEbEQsRUFDMkQsVUFEM0QsRUFDdUUsU0FEdkUsRUFDa0YsTUFEbEYsRUFFVCxRQUZTLEVBRUMsVUFGRCxFQUVhLFdBRmIsRUFFMEIsT0FGMUIsRUFFbUMsVUFGbkMsRUFFK0MsZUFGL0MsRUFFZ0UsVUFGaEUsRUFFNEUsV0FGNUUsRUFHVCxhQUhTLEVBR00sVUFITixFQUdrQixTQUhsQixFQUc2QixVQUg3QixFQUd5QyxRQUh6QyxFQUdtRCxlQUhuRCxFQUdvRSxZQUhwRSxFQUdrRixZQUhsRixFQUlULFVBSlMsRUFJRyxjQUpILEVBSW1CLGdCQUpuQixFQUlxQyxNQUpyQyxFQUk2QyxVQUo3QyxFQUl5RCxRQUp6RCxFQUltRSxjQUpuRSxFQUltRixjQUpuRixFQUtULGdCQUxTLEVBS1MsY0FMVCxFQUt5QixXQUx6QixFQUtzQyxPQUx0QyxFQUsrQyxNQUwvQyxFQUt1RCxTQUx2RCxFQUtrRSxVQUxsRSxFQUs4RSxZQUw5RSxFQU1ULGVBTlMsRUFNUSxXQU5SLEVBTXFCLFNBTnJCLENBQWI7QUFP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Yiw0QkFBUSxNQUFLLGVBQWI7QUFDSCxpQkFGRCxFQUVHLElBRkg7QUFHSCxhQUpNLENBQVA7QUFLSDs7OzZCQUVJLEksRUFBTSxJLEVBQU07QUFDYixpQkFBSyxtQkFBTDtBQUNBLG9CQUFRLEdBQVIsQ0FBWSxrQkFBWixFQUFnQyxJQUFoQyxFO0FBQ0g7Ozs7O0lBT1EsdUIsV0FBQSx1QixZQUpaLHFCQUFVO0FBQ1AsY0FBVSw0QkFESDtBQUVQLGNBQVU7QUFGSCxDQUFWLEM7OztJQVdZLHlCLFdBQUEseUIsWUFKWixxQkFBVTtBQUNQLGNBQVUscUJBREg7QUFFUCxjQUFVO0FBRkgsQ0FBVixDOzs7SUFXWSx3QixXQUFBLHdCLFlBSloscUJBQVU7QUFDUCxjQUFVLHNCQURIO0FBRVAsY0FBVTtBQUZILENBQVYsQzs7O0lBV1ksNkIsV0FBQSw2QixZQUpaLHFCQUFVO0FBQ1AsY0FBVSw0QkFESDtBQUVQLGNBQVU7QUFGSCxDQUFWLEMiLCJmaWxlIjoiRm9ybURlbW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pnb2RpL25vdm8tZGV2L2xpYnMvbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTk9WT19GT1JNX0VMRU1FTlRTLCBOT1ZPX0JVVFRPTl9FTEVNRU5UUywgTk9WT19QSUNLRVJfRUxFTUVOVFMgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcblxuaW1wb3J0IHsgQ29kZVNuaXBwZXQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9jb2Rlc25pcHBldC9Db2RlU25pcHBldCc7XG5cbmltcG9ydCBBdXRvY29tcGxldGVGaWVsZERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQXV0b2NvbXBsZXRlRmllbGREZW1vLmh0bWwnO1xuaW1wb3J0IEF1dG9jb21wbGV0ZUZpZWxkQ3VzdG9tRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9BdXRvY29tcGxldGVGaWVsZEN1c3RvbURlbW8uaHRtbCc7XG5pbXBvcnQgQ2FsZW5kYXJQaWNrZXJEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0NhbGVuZGFyUGlja2VyRGVtby5odG1sJztcbmltcG9ydCBDaGVja2JveERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvQ2hlY2tib3hEZW1vLmh0bWwnO1xuaW1wb3J0IER5bmFtaWNGb3JtRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9EeW5hbWljRm9ybURlbW8uaHRtbCc7XG5pbXBvcnQgTXVsdGlzZWxlY3REZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL011bHRpc2VsZWN0RGVtby5odG1sJztcbmltcG9ydCBSYWRpb0J1dHRvbkRlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvUmFkaW9CdXR0b25zRGVtby5odG1sJztcbmltcG9ydCBTZWxlY3RGaWVsZERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvU2VsZWN0RmllbGREZW1vLmh0bWwnO1xuaW1wb3J0IFRleHRJbnB1dERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvVGV4dElucHV0RGVtby5odG1sJztcbmltcG9ydCBRdWlja05vdGVJbnB1dERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvUXVpY2tOb3RlSW5wdXREZW1vLmh0bWwnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+Rm9ybXMgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvZm9ybVwiPihzb3VyY2UpPC9hPjwvc21hbGw+PC9oMT5cbiAgICA8cD5Gb3JtcyB1c2UgaW5wdXRzIGFuZCBsYWJlbHMgdG8gc3VibWl0IHVzZXIgY29udGVudC4gQnV0IHlvdSBhbHJlYWR5IGtuZXcgdGhhdC4gV2hhdCB5b3UgbWF5IG5vdCBrbm93IGlzIHRoYXQgb3VyIGZvcm1zIGNvbWUgaW4gdHdvIHN0eWxlcyAnU3RhdGljJyBhbmQgJ0R5bmFtaWMnPC9wPlxuXG4gICAgPGgyPlN0YXRpYyBGb3JtPC9oMj5cbiAgICA8cD5TdGF0aWMgZm9ybXMgPGNvZGU+Jmx0O25vdm8tZm9ybSAvJmd0OzwvY29kZT4gYXJlIGNvbXBvc2VkIG9mIGEgdGl0bGUgPGNvZGU+Jmx0O2Zvcm0tdGl0bGUgLyZndDs8L2NvZGU+LCBhbmQgZmllbGRzIDxjb2RlPiZsdDtmb3JtLWZpZWxkIC8mZ3Q7PC9jb2RlPi4gRmllbGRzIGNhbiBpbmNsdWRlIGEgbGFiZWwgPGNvZGU+Jmx0O2Zvcm0tbGFiZWwgLyZndDs8L2NvZGU+IGFuZCBpbnB1dCA8Y29kZT4mbHQ7Zm9ybS1pbnB1dCAvJmd0OzwvY29kZT4uRm9ybSBpbnB1dHMgdGFrZSBuYW1lLCB0eXBlLCBhbmQgb3B0aW9ucyBhdHRyaWJ1dGVzIDxjb2RlPiZsdDtmb3JtLWlucHV0IG5hbWU9XCJnZW5kZXJcIiB0eXBlPVwicmFkaW9cIiBvcHRpb25zPVwiW21hbGUsIGZlbWFsZV1cIiAvJmd0OzwvY29kZT4uIFN0YXRpYyBmb3JtcyBhcmUgdXNlZCB0byBtYW51YWxseSBidWlsZCBjdXN0b20gZm9ybXMgd2hlbiB5b3UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gYSBmb3JtJ3MgbWV0YSBkYXRhLjwvcD5cbiAgICA8cD5JZiB5b3UncmUgYnVpbGRpbmcgYSBzdGF0aWMgZm9ybSwgeW91IG1heSBuZWVkIHRvIHV0aWxpemUgb25lIG9mIG1hbnkgZm9ybSBmaWVsZHMuIFRoZSBmb2xsb3dpbmcgZm9ybSBmaWVsZHMgYXJlIHN1cHBvcnRlZCBieSBCSC1FbGVtZW50cy48L3A+XG5cbiAgICA8aDU+VGV4dCBJbnB1dDwvaDU+XG4gICAgPHA+VGhpcyBpcyB0aGUgYmFzaWMgdGV4dCBpbnB1dCBmaWVsZC48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vXCI+JHtUZXh0SW5wdXREZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiVGV4dElucHV0RGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PlJhZGlvIEJ1dHRvbnM8L2g1PlxuICAgIDxwPlJhZGlvIGJ1dHRvbnMgYWxsb3cgdXNlcnMgdG8gc2VsZWN0IGEgc2luZ2xlIGl0ZW0gZnJvbSBhIGxpc3QuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGZvcm0tZGVtb1wiPiR7UmFkaW9CdXR0b25EZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiUmFkaW9CdXR0b25EZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+Q2hlY2tib3hlczwvaDU+XG4gICAgPHA+Q2hlY2tib3hlcyBhbGxvdyB1c2VycyB0byBzZWxlY3QgbXVsdGlwbGUgaXRlbXMgZnJvbSBhIGxpc3QuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGZvcm0tZGVtb1wiPiR7Q2hlY2tib3hEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQ2hlY2tib3hEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+Q2FsZW5kYXIgUGlja2VyPC9oNT5cbiAgICA8cD5DYWxlbmRhciBwaWNrZXJzIGluc2lkZSBhIGZvcm0gYXJlIGFsd2FzeSBpbmxpbmUgYW5kIGFsbG93IHVzZXJzIHRvIHBpY2sgZGF0ZSwgdGltZSwgb3IgYm90aC48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vXCI+JHtDYWxlbmRhclBpY2tlckRlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJDYWxlbmRhclBpY2tlckRlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5Ecm9wZG93bjwvaDU+XG4gICAgPHA+RHJvcGRvd24gc2VsZWN0IGZpZWxkcyBhbGxvdyB0aGUgdXNlciB0byBzZWxlY3QgZnJvbSBhIGxpc3Qgb2YgaXRlbXMuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGZvcm0tZGVtb1wiPiR7U2VsZWN0RmllbGREZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiU2VsZWN0RmllbGREZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+QXV0b2NvbXBsZXRlIFBpY2tlciBGaWVsZDwvaDU+XG4gICAgPHA+UGlja2VycyBhbGxvdyBhIHVzZXIgdG8gc2VhcmNoIGZvciBhbmQgc2VsZWN0IHJlY29yZHMgaW4gdGhlIHN5c3RlbS4gV2hlbiBpbml0aWFsbHkgb3BlbmVkIGl0IHdpbGwgc2hvdyB0aGUgbGFzdCBmaXZlIHZpZXdlZCByZWNvcmRzLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSBmb3JtLWRlbW9cIj4ke0F1dG9jb21wbGV0ZUZpZWxkRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIkF1dG9jb21wbGV0ZUZpZWxkRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuXG4gICAgPGg1PkF1dG9jb21wbGV0ZSBDdXN0b20gUGlja2VyIEZpZWxkPC9oNT5cbiAgICA8cD5DVVNUT00hPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGZvcm0tZGVtb1wiPiR7QXV0b2NvbXBsZXRlRmllbGRDdXN0b21EZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiQXV0b2NvbXBsZXRlRmllbGRDdXN0b21EZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+TXVsdGktU2VsZWN0PC9oNT5cbiAgICA8cD5UaGlzIGFsbG93cyB0aGUgdXNlciB0byBzZWxlY3QgbXVsdGlwbGUgaXRlbXMgZnJvbSBhIGxpc3QsIG9yIHJldHVybmVkIHZpYSBzZWFyY2guPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGZvcm0tZGVtb1wiPiR7TXVsdGlzZWxlY3REZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiTXVsdGlzZWxlY3REZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+Tm90ZTwvaDU+XG4gICAgPHA+VGhpcyBhbGxvd3MgdGhlIHVzZXIgdG8gYWRkIGEgbm90ZSB3aXRoIHJlZmVyZW5jZXMvdGFncy48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgZm9ybS1kZW1vXCI+JHtRdWlja05vdGVJbnB1dERlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJRdWlja05vdGVJbnB1dERlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5SZXF1aXJlZCBGaWVsZHM8L2g1PlxuICAgIDxwPlJlcXVpcmVkIGZpZWxkcyBtdXN0IGJlIGZpbGxlZCBiZWZvcmUgdGhlIHBhZ2UgY2FuIGFkdmFuY2UuIFJlcXVpcmVkIGZpZWxkcyBhcmUgaW5kaWNhdGVkIHdpdGggYSByZWQgZG90IGJldHdlZW4gdGhlIGxhYmVsIGFuZCB0aGUgZmllbGQuIElmIGEgdXNlciBhdHRlbXB0cyB0byBhZHZhbmNlIHdpdGhvdXQgZmlsbGluZyBvdXQgYSBmaWVsZCwgYWxsIG5vbi1yZXF1aXJlZCBmaWVsZHMgd2lsbCBiZSByZW1vdmVkIGFuZCByZXF1aXJlZCBmaWVsZHMgd2lsbCBiZSBoaWdobGlnaHRlZCBpbiByZWQuPC9wPlxuXG4gICAgPGgyPkR5bmFtaWMgRm9ybTwvaDI+XG4gICAgPHA+RHluYW1pYyBmb3JtcyBhcmUgY29tcG9zZWQgb2Ygb25lIGVsZW1lbnQsIDxjb2RlPiZsdDtub3ZvLWZvcm0gW21ldGFdPVwiZHluYW1pY0RhdGFcIi8mZ3Q7PC9jb2RlPiBhbmQgYWxsb3cgeW91IHRvIHBhc3MgaW4gZHluYW1pYyBkYXRhIGFzIGEgPGNvZGU+W21ldGFdPC9jb2RlPiBhdHRyaWJ1dGUuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIGZvcm0tZGVtb1wiPiR7RHluYW1pY0Zvcm1EZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiRHluYW1pY0Zvcm1EZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm9ybS1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgZGlyZWN0aXZlczogW05PVk9fRk9STV9FTEVNRU5UUywgTk9WT19QSUNLRVJfRUxFTUVOVFMsIE5PVk9fQlVUVE9OX0VMRU1FTlRTLCBDb2RlU25pcHBldF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybURlbW8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgc3RhdGVzID0gWydBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJywgJ0NhbGlmb3JuaWEnLCAnQ29sb3JhZG8nLFxuICAgICAgICAgICAgJ0Nvbm5lY3RpY3V0JywgJ0RlbGF3YXJlJywgJ0Zsb3JpZGEnLCAnR2VvcmdpYScsICdIYXdhaWknLCAnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJyxcbiAgICAgICAgICAgICdLYW5zYXMnLCAnS2VudHVja3knLCAnTG91aXNpYW5hJywgJ01haW5lJywgJ01hcnlsYW5kJywgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLCAnTWlubmVzb3RhJyxcbiAgICAgICAgICAgICdNaXNzaXNzaXBwaScsICdNaXNzb3VyaScsICdNb250YW5hJywgJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJywgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsXG4gICAgICAgICAgICAnTmV3IFlvcmsnLCAnTm9ydGggRGFrb3RhJywgJ05vcnRoIENhcm9saW5hJywgJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJywgJ1Blbm5zeWx2YW5pYScsICdSaG9kZSBJc2xhbmQnLFxuICAgICAgICAgICAgJ1NvdXRoIENhcm9saW5hJywgJ1NvdXRoIERha290YScsICdUZW5uZXNzZWUnLCAnVGV4YXMnLCAnVXRhaCcsICdWZXJtb250JywgJ1ZpcmdpbmlhJywgJ1dhc2hpbmd0b24nLFxuICAgICAgICAgICAgJ1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXTtcbiAgICAgICAgbGV0IGNvbnRhY3RPcHRpb25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlYXJjaEVudGl0eTogJ0NsaWVudENvbnRhY3QnLFxuICAgICAgICAgICAgICAgIGlkOiAxMDEsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0phbWVzIFNtaXRoJyxcbiAgICAgICAgICAgICAgICBwaG9uZTogJzYxNy01NTUtMTIzNCcsXG4gICAgICAgICAgICAgICAgZW1haWw6ICdqc21pdGhAYWNtZS5jb20nLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ0FjdGl2ZScsXG4gICAgICAgICAgICAgICAgY2xpZW50Q29ycG9yYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIxMCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0FjbWUsIEluYydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogJ0Jvc3RvbicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiAnTUEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHNlYXJjaEVudGl0eTogJ0NsaWVudENvbnRhY3QnLFxuICAgICAgICAgICAgICAgIGlkOiAxMDIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0pvaG4gU21pdGgnLFxuICAgICAgICAgICAgICAgIHBob25lOiAnNjE3LTU1NS0xMjM0JyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2pzbWl0aEBiaWdjb21wYW55LmNvbScsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcbiAgICAgICAgICAgICAgICBjbGllbnRDb3Jwb3JhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogMjIwLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQmlnIENvbXBhbnknXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNpdHk6ICdCb3N0b24nLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogJ01BJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hFbnRpdHk6ICdDbGllbnRDb250YWN0JyxcbiAgICAgICAgICAgICAgICBpZDogMTAzLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdKYW5lIFNtaXRoJyxcbiAgICAgICAgICAgICAgICBwaG9uZTogJzYxNy01NTUtMTIzNCcsXG4gICAgICAgICAgICAgICAgZW1haWw6ICdqc21pdGhAcXVpY2tzdGFmZi5jb20nLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ0FjdGl2ZScsXG4gICAgICAgICAgICAgICAgY2xpZW50Q29ycG9yYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIzMCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1F1aWNrU3RhZmYgTExDJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgICAgICBjaXR5OiAnQm9zdG9uJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6ICdNQSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgc2VhcmNoRW50aXR5OiAnQ2xpZW50Q29udGFjdCcsXG4gICAgICAgICAgICAgICAgaWQ6IDEwNCxcbiAgICAgICAgICAgICAgICBuYW1lOiAnSmFtZXMgQW5kZXJzb24nLFxuICAgICAgICAgICAgICAgIHBob25lOiAnNjE3LTU1NS0xMjM0JyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2phbmRlcnNvbkBhY21lLmNvbScsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcbiAgICAgICAgICAgICAgICBjbGllbnRDb3Jwb3JhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogMjEwLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQWNtZSwgSW5jJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgICAgICBjaXR5OiAnQm9zdG9uJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6ICdNQSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5UZXh0SW5wdXREZW1vVHBsID0gVGV4dElucHV0RGVtb1RwbDtcbiAgICAgICAgdGhpcy5DYWxlbmRhclBpY2tlckRlbW9UcGwgPSBDYWxlbmRhclBpY2tlckRlbW9UcGw7XG4gICAgICAgIHRoaXMuQXV0b2NvbXBsZXRlRmllbGREZW1vVHBsID0gQXV0b2NvbXBsZXRlRmllbGREZW1vVHBsO1xuICAgICAgICB0aGlzLkNoZWNrYm94RGVtb1RwbCA9IENoZWNrYm94RGVtb1RwbDtcbiAgICAgICAgdGhpcy5EeW5hbWljRm9ybURlbW9UcGwgPSBEeW5hbWljRm9ybURlbW9UcGw7XG4gICAgICAgIHRoaXMuUmFkaW9CdXR0b25EZW1vVHBsID0gUmFkaW9CdXR0b25EZW1vVHBsO1xuICAgICAgICB0aGlzLk11bHRpc2VsZWN0RGVtb1RwbCA9IE11bHRpc2VsZWN0RGVtb1RwbDtcbiAgICAgICAgdGhpcy5TZWxlY3RGaWVsZERlbW9UcGwgPSBTZWxlY3RGaWVsZERlbW9UcGw7XG4gICAgICAgIHRoaXMuQXV0b2NvbXBsZXRlRmllbGRDdXN0b21EZW1vVHBsID0gQXV0b2NvbXBsZXRlRmllbGRDdXN0b21EZW1vVHBsO1xuICAgICAgICB0aGlzLlF1aWNrTm90ZUlucHV0RGVtb1RwbCA9IFF1aWNrTm90ZUlucHV0RGVtb1RwbDtcblxuICAgICAgICB0aGlzLnllc05vID0gWydZZXMnLCAnTm8nXTtcbiAgICAgICAgdGhpcy5zaGlmdHMgPSBbJ01vcm5pbmcnLCAnRGF5JywgJ05pZ2h0JywgJ092ZXJuaWdodCddO1xuICAgICAgICB0aGlzLnN0YXRlT2JqT3B0aW9ucyA9IFsnQWxhYmFtYScsICdBbGFza2EnLCAnQXJpem9uYScsICdBcmthbnNhcyddO1xuXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlRmxhdEFycmF5T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG9wdGlvbnM6IHN0YXRlc1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZGVmZXJyZWRBdXRvY29tcGxldGVEYXRhID0ge1xuICAgICAgICAgICAgb3B0aW9uczogdGhpcy51cGRhdGVEYXRhSW5QaWNrZXIoKSxcbiAgICAgICAgICAgIG51bGxUZW1wbGF0ZTogUGlja2VyQ3VzdG9tTnVsbFJlc3VsdHMsXG4gICAgICAgICAgICBlcnJvclRlbXBsYXRlOiBQaWNrZXJDdXN0b21FcnJvclRlbXBsYXRlLFxuICAgICAgICAgICAgbG9hZGVyVGVtcGxhdGU6IFBpY2tlckN1c3RvbUxvYWRUZW1wbGF0ZSxcbiAgICAgICAgICAgIHJlY2VudFRlbXBsYXRlOiBQaWNrZXJDdXN0b21Ob1JlY2VudHNUZW1wbGF0ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlT2JqZWN0cyA9IHtcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMuc3RhdGVPYmpPcHRpb25zXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVDb250YWN0cyA9IHtcbiAgICAgICAgICAgIG9wdGlvbnM6IGNvbnRhY3RPcHRpb25zLFxuICAgICAgICAgICAgZmllbGQ6ICduYW1lJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmR5bmFtaWNEYXRhID0ge1xuICAgICAgICAgICAgbGFzdE5hbWU6ICdTdWxsaXZhbicsXG4gICAgICAgICAgICBuZXh0QWN0aW9uOiAndGFzaydcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5keW5hbWljID0ge1xuICAgICAgICAgICAgZW50aXR5OiAnT3Bwb3J0dW5pdHknLFxuICAgICAgICAgICAgZW50aXR5TWV0YVVybDogJ2h0dHA6Ly9kZXZlbG9wLWJhY2tlbmQuYmgtYm9zMi5idWxsaG9ybi5jb206ODE4MS9yZXN0LXNlcnZpY2VzLzF5ZzhwL21ldGEvT3Bwb3J0dW5pdHk/ZmllbGRzPSonLFxuICAgICAgICAgICAgbGFiZWw6ICdPcHBvcnR1bml0eScsXG4gICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmaXJzdE5hbWUnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRmlyc3QgTmFtZScsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdsYXN0TmFtZScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdMYXN0IE5hbWUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdOdW1iZXInLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZmxvYXQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZmxvYXQnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Zsb2F0JyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2N1cnJlbmN5JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vbmV5JyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDb3N0JyxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lGb3JtYXQ6ICdVU0QnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwZXJjZW50JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BlcmNlbnRhZ2UnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1BlcmNlbnRhZ2UnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RpbWUnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVGltZScsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdGF0dXMnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTdGF0dXMnLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdPcGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ09wZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnUXVhbGlmeWluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdRdWFsaWZ5aW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ05lZ290aWF0aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ05lZ290aWF0aW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ1RSSUdHRVInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVFJJR0dFUidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbmV4dEFjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0aWxlcycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdOZXh0IEFjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ05vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAndGFzaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUYXNrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2FwcG9pbnRtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FwcG9pbnRtZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaWNrZXInLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1N0YXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IEFsaWduIHBpY2tlciB3aXRoIE1FVEEgYnkgcGFzc2luZyBNRVRBIG9iaiBpbnRvIHBpY2tlclxuICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25zOiBbIC8qIGZsYXQgYXJyYXkgb2Ygc3RhdGVzICovIF1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5hdXRvY29tcGxldGVGbGF0QXJyYXlPcHRpb25zXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3RhcnREYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhdGV0aW1lJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdUaW1lc3RhbXAnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1N0YXJ0IERhdGUnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1b3RhJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnSW50ZWdlcicsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUXVvdGEnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlY3JldCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVG9wIFNlY3JldCcsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICdUaGUgc2VjcmV0IGNvZGUgaXM6IDA4MzIyJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3JpZXMnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGlja2VyJyxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NhdGVnb3JpZXMnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtdWx0aVZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6ICdTRUxFQ1QnLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdPcGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ09wZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnUXVhbGlmeWluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdRdWFsaWZ5aW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ05lZ290aWF0aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ05lZ290aWF0aW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ1RSSUdHRVInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVFJJR0dFUidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ293bmVyJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2VudGl0eScsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdPd25lcicsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG11bHRpVmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6ICdTRUxFQ1QnLFxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBBbGlnbiBwaWNrZXIgd2l0aCBNRVRBIGJ5IHBhc3NpbmcgTUVUQSBvYmogaW50byBwaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1R5cGU6ICdDb3Jwb3JhdGVVc2VyJyxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1VybDogJy9vcHRpb25zL0NvcnBvcmF0ZVVzZXInLFxuICAgICAgICAgICAgICAgICAgICBoaWRlRnJvbVNlYXJjaDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGFzc29jaWF0ZWRFbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eTogJ0NvcnBvcmF0ZVVzZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDb3Jwb3JhdGUgVXNlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZHJlc3MnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYWRkcmVzcycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnQWRkcmVzcycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTcGVjaWFsaXphdGlvbjogJ1NZU1RFTScsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FkZHJlc3MnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGhpZGVGcm9tU2VhcmNoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkcmVzczEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTQ0FMQVInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDQwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBZGRyZXNzeHh4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpVmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGcm9tU2VhcmNoOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkcmVzczInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTQ0FMQVInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDQwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBZGRyZXNzIDInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZyb21TZWFyY2g6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0NBTEFSJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA0MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ2l0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aVZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRnJvbVNlYXJjaDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3N0YXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0NBTEFSJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU3RhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOiAnU0VMRUNUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zVHlwZTogJ1N0YXRlVGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1VybDogJ2h0dHA6Ly9vcHRpbXVzLWJhY2tlbmQuYmgtYm9zMi5idWxsaG9ybi5jb206ODE4MS9yZXN0LXNlcnZpY2VzLzFocy9vcHRpb25zL1N0YXRlVGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZyb21TZWFyY2g6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd6aXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTQ0FMQVInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdaaXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZyb21TZWFyY2g6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjb3VudHJ5SUQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTQ0FMQVInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnSW50ZWdlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpVmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTogJ1NFTEVDVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1R5cGU6ICdDb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zVXJsOiAnaHR0cDovL29wdGltdXMtYmFja2VuZC5iaC1ib3MyLmJ1bGxob3JuLmNvbTo4MTgxL3Jlc3Qtc2VydmljZXMvMWhzL29wdGlvbnMvQ291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAyMjYwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGcm9tU2VhcmNoOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY291bnRyeUNvZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTQ0FMQVInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NvdW50cnlOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0NBTEFSJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDaGVja2JveCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NoZWNrTGlzdCcsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMuc2hpZnRzLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkcmVzcycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhZGRyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBZGRyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RhdHVzID0ge1xuICAgICAgICAgICAgaXNvcGVuOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zdGF0dXNPcHRpb25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAnT3BlbicsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdPcGVuJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAnUXVhbGlmeWluZycsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdRdWFsaWZ5aW5nJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAnTmVnb3RpYXRpbmcnLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnTmVnb3RpYXRpbmcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICdUUklHR0VSJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1RSSUdHRVInXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5xdWlja05vdGVSZWZlcmVuY2VzID0ge307XG4gICAgICAgIHRoaXMucXVpY2tOb3RlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRyaWdnZXJzOiB7XG4gICAgICAgICAgICAgICAgdGFnczogJ0AnLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZXM6ICcjJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB0YWdzOiBbJ1Rlc3QnLCAnVGVzdCddLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZXM6IFsnVGVzdCcsICdUZXN0J11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB1cGRhdGVTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuZGVmZXJyZWRBdXRvY29tcGxldGVEYXRhLm9wdGlvbnMgPSB0aGlzLnVwZGF0ZURhdGFJblBpY2tlcigpO1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGFJblBpY2tlcigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuc3RhdGVPYmpPcHRpb25zKTtcbiAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlKGZvcm0sIGRhdGEpIHtcbiAgICAgICAgZm9ybS5oaWRlQ29tcGxldGVkRmllbGRzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGb3JtRGVtbyAoZGF0YSk6JywgZGF0YSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGlja2VyLWN1c3RvbS1udWxsLXJlc3VsdHMnLFxuICAgIHRlbXBsYXRlOiAnPHAgY2xhc3M9XCJwaWNrZXItbnVsbFwiPk5vIHJlc3VsdHMgbWF0Y2ggeW91ciBzZWFyY2ggKGN1c3RvbSkuPC9wPidcbn0pXG5leHBvcnQgY2xhc3MgUGlja2VyQ3VzdG9tTnVsbFJlc3VsdHMge1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BpY2tlci1jdXN0b20tZXJyb3InLFxuICAgIHRlbXBsYXRlOiAnPHAgY2xhc3M9XCJwaWNrZXItZXJyb3JcIj5UaGVyZSB3YXMgYW4gZXJyb3IgKGN1c3RvbSkuPC9wPidcbn0pXG5leHBvcnQgY2xhc3MgUGlja2VyQ3VzdG9tRXJyb3JUZW1wbGF0ZSB7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGlja2VyLWN1c3RvbS1sb2FkZXInLFxuICAgIHRlbXBsYXRlOiAnPHAgY2xhc3M9XCJwaWNrZXItbG9hZGluZ1wiPkxvYWRpbmcuLi4gKGN1c3RvbSk8L3A+J1xufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJDdXN0b21Mb2FkVGVtcGxhdGUge1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BpY2tlci1jdXN0b20tbnVsbC1yZWNlbnRzJyxcbiAgICB0ZW1wbGF0ZTogJzxwIGNsYXNzPVwicGlja2VyLW51bGwtcmVjZW50c1wiPk5vIHJlY2VudCByZXN1bHRzIChjdXN0b20pPC9wPidcbn0pXG5leHBvcnQgY2xhc3MgUGlja2VyQ3VzdG9tTm9SZWNlbnRzVGVtcGxhdGUge1xufVxuIl19

/***/ },

/***/ 1153:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Autocomplete Field With Custom Templates</form-title>\n    <form-field>\n        <form-label>States with Flags</form-label>\n        <form-input name=\"stateObjects\" type=\"picker\" [(options)]=\"autocompleteObjects\" placeholder=\"Pick a State Object\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Deferred</form-label>\n        <form-input name=\"stateDeferredObjects\" type=\"picker\" [(options)]=\"deferredAutocompleteData\" (broadcast)=\"updateSearch($event)\" placeholder=\"Pick a Deferred State Object\"></form-input>\n    </form-field>\n</novo-form>\n"

/***/ },

/***/ 1154:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Autocomplete Field</form-title>\n    <form-field>\n        <form-label>State</form-label>\n        <form-input name=\"state\" type=\"picker\" [(options)]=\"autocompleteFlatArrayOptions\" placeholder=\"Pick a State\"></form-input>\n    </form-field>\n\n    <form-field>\n        <form-label>State</form-label>\n        <form-input name=\"entity\" type=\"entity\" [(options)]=\"autocompleteContacts\" placeholder=\"Pick a Contact\"></form-input>\n    </form-field>\n</novo-form>\n"

/***/ },

/***/ 1155:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Calendar Picker</form-title>\n    <form-field>\n        <form-label>Start Date</form-label>\n        <form-input name=\"startDate\" type=\"date\" inline=\"true\" placeholder=\"Please select a date\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Start Time</form-label>\n        <form-input name=\"startTime\" type=\"time\" inline=\"true\" placeholder=\"Please select a time\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Start Date &amp; Time</form-label>\n        <form-input name=\"startDateTime\" type=\"datetime\" inline=\"true\" placeholder=\"Please select a date and time\"></form-input>\n    </form-field>\n</novo-form>\n"

/***/ },

/***/ 1156:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Checkboxes</form-title>\n    <form-field>\n        <!-- <form-label>Availability</form-label> -->\n        <form-input name=\"isAvailable\" label=\"Is Available?\" type=\"checkbox\" [(value)]=\"isAvailable\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Availability</form-label>\n        <form-input name=\"shifts\" type=\"checkbox\" [options]=\"shifts\" [(value)]=\"availability\"></form-input>\n    </form-field>\n</novo-form>\n<div>I am available on {{availability}}.</div>\n"

/***/ },

/***/ 1157:
/***/ function(module, exports) {

	module.exports = "<button theme=\"standard\" (click)=\"form.showAllFields()\">Show All Fields</button>\n<br/>\n<br/>\n<novo-form [meta]=\"dynamic\" [data]=\"dynamicData\" #form>\n<form-title>Add Candidate</form-title>\n</novo-form>\n<div class=\"dynamic-demo-footer\">\n<button theme=\"standard\">Cancel</button>\n<button theme=\"primary\" color=\"success\" icon=\"check\" (click)=\"save(form, dynamicData)\">Save</button>\n</div>\n"

/***/ },

/***/ 1158:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Multi-Picker Field</form-title>\n    <form-field>\n        <form-label>Locations</form-label>\n        <form-input name=\"locations\" type=\"picker\" [(options)]=\"autocompleteFlatArrayOptions\" [multiple]=\"true\" placeholder=\"Pick some states\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Contact</form-label>\n        <form-input name=\"entity\" type=\"entity\" [(options)]=\"autocompleteContacts\" [multiple]=\"true\" placeholder=\"Pick a Contact\"></form-input>\n    </form-field>\n</novo-form>\n"

/***/ },

/***/ 1159:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>QuickNote</form-title>\n    <form-field>\n        <form-label>Note</form-label>\n        <form-input [(value)]=\"quickNote\" name=\"note\" type=\"note\" [(options)]=\"quickNoteOptions\" [references]=\"quickNoteReferences\" placeholder=\"Add a Note!\"></form-input>\n    </form-field>\n</novo-form>\n<div class=\"data\">\n    <p>Note: {{quickNote}}</p>\n    <p>References: {{quickNoteReferences | json}}</p>\n</div>\n"

/***/ },

/***/ 1160:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Radio Buttons</form-title>\n    <form-field>\n        <form-label>Ready to Work?</form-label>\n        <form-input name=\"isReady\" type=\"radio\" [options]=\"yesNo\" [(value)]=\"amIReady\"></form-input>\n    </form-field>\n</novo-form>\n<div>Am I Ready? {{amIReady}}.</div>\n"

/***/ },

/***/ 1161:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Select Field</form-title>\n    <form-field>\n        <form-label>Select</form-label>\n        <form-input name=\"status\" type=\"select\" [options]=\"statusOptions\" [(value)]=\"myStatus\" placeholder=\"Status\"></form-input>\n    </form-field>\n</novo-form>\n<div>My status is {{myStatus}}</div>\n"

/***/ },

/***/ 1162:
/***/ function(module, exports) {

	module.exports = "<novo-form>\n    <form-title>Text Fields</form-title>\n    <form-field required>\n        <form-label>First Name</form-label>\n        <form-input name=\"firstName\" type=\"text\" placeholder=\"Jack\" [(value)]=\"firstName\"></form-input>\n    </form-field>\n    <form-field>\n        <form-label>Last Name</form-label>\n        <form-input name=\"lastName\" type=\"text\" placeholder=\"White\" [(value)]=\"lastName\"></form-input>\n    </form-field>\n</novo-form>\n<div> My name is {{firstName}} {{lastName}}</div>\n"

/***/ }

});
//# sourceMappingURL=1.2d4852fd98400f0812f0.bundle.map