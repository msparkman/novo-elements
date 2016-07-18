webpackJsonp([6],{

/***/ 1132:
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztJQU9hLFcsV0FBQSxXLFdBTFoscUJBQVU7QUFDUCxZQUFRLENBQUMsTUFBRCxDQUREO0FBRVAsY0FBVSxjQUZIO0FBR1AsY0FBVTtBQUhILENBQVYsQzs7Ozs7OzttQ0FNYztBQUNQLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxhQUFMLENBQW1CLEtBQUssSUFBeEIsRUFBOEIsS0FBL0M7QUFDSCIsImZpbGUiOiJDb2RlU25pcHBldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYnJpYW5raW1iYWxsL05vdm8vbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBpbnB1dHM6IFsnY29kZSddLFxuICAgIHNlbGVjdG9yOiAnY29kZS1zbmlwcGV0JyxcbiAgICB0ZW1wbGF0ZTogJzxwcmU+PGNvZGUgW2lubmVySHRtbF09XCJoaWdobGlnaHRcIj48L2NvZGU+PC9wcmU+J1xufSlcbmV4cG9ydCBjbGFzcyBDb2RlU25pcHBldCB7XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ID0gaGxqcy5oaWdobGlnaHRBdXRvKHRoaXMuY29kZSkudmFsdWU7XG4gICAgfVxufVxuIl19

/***/ },

/***/ 1133:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var TableData = exports.TableData = [{
	    'name': 'Victoria Cantrell',
	    'position': 'Integer Corporation',
	    'office': 'Croatia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/19'),
	    'salary': 208178,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Pearl Crosby',
	    'position': 'In PC',
	    'office': 'Cambodia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/10/08'),
	    'salary': 114367,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Colette Foley',
	    'position': 'Lorem Inc.',
	    'office': 'Korea, North',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/07/19'),
	    'salary': 721473,
	    'status': 'Archived',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Anastasia Shaffer',
	    'position': 'Dolor Nulla Semper LLC',
	    'office': 'Suriname',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/04/20'),
	    'salary': 264620,
	    'status': 'New Lead',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Gabriel Castro',
	    'position': 'Sed Limited',
	    'office': 'Bahrain',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/04'),
	    'salary': 651350,
	    'status': 'New Lead',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Cherokee Ware',
	    'position': 'Tincidunt LLC',
	    'office': 'United Kingdom (Great Britain)',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/17'),
	    'salary': 666259,
	    'status': 'New Lead',
	    'description': 'It’s been a long time coming, but tonight, because of what we did on this day, in this election, at this defining moment, change has come to America.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Barry Moss',
	    'position': 'Sociis Industries',
	    'office': 'Western Sahara',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/13'),
	    'salary': 541631,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Maryam Tucker',
	    'position': 'Elit Pede Malesuada Inc.',
	    'office': 'Brazil',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/10/02'),
	    'salary': 182294,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Constance Clayton',
	    'position': 'Auctor Velit Aliquam LLP',
	    'office': 'United Arab Emirates',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/01'),
	    'salary': 218597,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Rogan Tucker',
	    'position': 'Arcu Vestibulum Ante Associates',
	    'office': 'Jersey',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/04'),
	    'salary': 861632,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Emery Mcdowell',
	    'position': 'Gravida Company',
	    'office': 'New Zealand',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/02'),
	    'salary': 413568,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Yael Greer',
	    'position': 'Orci Limited',
	    'office': 'Madagascar',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/04'),
	    'salary': 121831,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Jared Burgess',
	    'position': 'Auctor Incorporated',
	    'office': 'Burundi',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/12'),
	    'salary': 62243,
	    'status': 'Active',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Sharon Campbell',
	    'position': 'Elit Curabitur Sed Consulting',
	    'office': 'Comoros',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/09/14'),
	    'salary': 200854,
	    'status': 'Active',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Finance']
	}, {
	    'name': 'Yeo Church',
	    'position': 'Donec Vitae Erat PC',
	    'office': 'Saudi Arabia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/07'),
	    'salary': 581193,
	    'status': 'Active',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Finance']
	}, {
	    'name': 'Kylie Barlow',
	    'position': 'Fermentum Risus Corporation',
	    'office': 'Papua New Guinea',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/03'),
	    'salary': 418115,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Temporary', 'Finance']
	}, {
	    'name': 'Nell Leonard',
	    'position': 'Vestibulum Consulting',
	    'office': 'Saudi Arabia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/29'),
	    'salary': 466201,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Temporary', 'Finance']
	}, {
	    'name': 'Brandon Fleming',
	    'position': 'Donec Egestas Associates',
	    'office': 'Poland',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/22'),
	    'salary': 800011,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Temporary', 'Finance']
	}, {
	    'name': 'Inga Pena',
	    'position': 'Et Magnis Dis Limited',
	    'office': 'Belgium',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/18'),
	    'salary': 564245,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Finance']
	}, {
	    'name': 'Arden Russo',
	    'position': 'Est Tempor Bibendum Corp.',
	    'office': 'Dominican Republic',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/07/23'),
	    'salary': 357222,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Finance']
	}, {
	    'name': 'Liberty Gallegos',
	    'position': 'Nec Diam LLC',
	    'office': 'Ghana',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/18'),
	    'salary': 554375,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Dennis York',
	    'position': 'Nullam Suscipit Foundation',
	    'office': 'Namibia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/20'),
	    'salary': 90417,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Petra Chandler',
	    'position': 'Pede Nonummy Inc.',
	    'office': 'Namibia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/26'),
	    'salary': 598915,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Aurelia Marshall',
	    'position': 'Donec Consulting',
	    'office': 'Nicaragua',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/18'),
	    'salary': 201680,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Rose Carter',
	    'position': 'Enim Consequat Purus Industries',
	    'office': 'Morocco',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/06'),
	    'salary': 220187,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Denton Atkins',
	    'position': 'Non Vestibulum PC',
	    'office': 'Mali',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/04/19'),
	    'salary': 324588,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Germaine Osborn',
	    'position': 'Tristique Aliquet PC',
	    'office': 'Lesotho',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/19'),
	    'salary': 351108,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Nell Butler',
	    'position': 'Sit Amet Dapibus Industries',
	    'office': 'Cuba',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/06'),
	    'salary': 230072,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Marketing']
	}, {
	    'name': 'Brent Stein',
	    'position': 'Eu Augue Porttitor LLP',
	    'office': 'Cyprus',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/11/02'),
	    'salary': 853413,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Marketing']
	}, {
	    'name': 'Alexandra Shaw',
	    'position': 'Aenean Gravida Limited',
	    'office': 'Uruguay',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/16'),
	    'salary': 401970,
	    'status': 'Archived',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Marketing']
	}, {
	    'name': 'Veronica Allison',
	    'position': 'Aliquet Diam Sed Institute',
	    'office': 'Samoa',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/17'),
	    'salary': 79193,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Marketing']
	}, {
	    'name': 'Katelyn Gamble',
	    'position': 'Sed Associates',
	    'office': 'Mauritius',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/20'),
	    'salary': 484299,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Marketing']
	}, {
	    'name': 'James Greer',
	    'position': 'A Dui Incorporated',
	    'office': 'Norway',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/02/21'),
	    'salary': 333518,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Marketing']
	}, {
	    'name': 'Cain Vasquez',
	    'position': 'Nulla Facilisis Suspendisse Institute',
	    'office': 'China',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/27'),
	    'salary': 651761,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Marketing']
	}, {
	    'name': 'Shaeleigh Barr',
	    'position': 'Eleifend Cras Institute',
	    'office': 'Ghana',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/04/01'),
	    'salary': 627095,
	    'status': 'Archived',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Developer']
	}, {
	    'name': 'Baker Mckay',
	    'position': 'Ut Sagittis Associates',
	    'office': 'Isle of Man',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/12'),
	    'salary': 742247,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Developer']
	}, {
	    'name': 'Jayme Pace',
	    'position': 'Cras Eu Tellus Associates',
	    'office': 'Bouvet Island',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/12'),
	    'salary': 591588,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Developer']
	}, {
	    'name': 'Reuben Albert',
	    'position': 'Lobortis Institute',
	    'office': 'Zambia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/04/04'),
	    'salary': 791408,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Developer']
	}, {
	    'name': 'Idola Burns',
	    'position': 'Non Industries',
	    'office': 'Myanmar',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/24'),
	    'salary': 142906,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Developer']
	}, {
	    'name': 'Laura Macias',
	    'position': 'Phasellus Inc.',
	    'office': 'Mauritania',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/11/21'),
	    'salary': 226591,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Nichole Salas',
	    'position': 'Duis PC',
	    'office': 'Madagascar',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/18'),
	    'salary': 234196,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Hunter Walter',
	    'position': 'Ullamcorper Duis Cursus Foundation',
	    'office': 'Brazil',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/02/28'),
	    'salary': 655052,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Asher Rich',
	    'position': 'Mauris Ipsum LLP',
	    'office': 'Paraguay',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/08'),
	    'salary': 222946,
	    'status': 'Archived',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Angela Carlson',
	    'position': 'Donec Tempor Institute',
	    'office': 'Papua New Guinea',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/02/12'),
	    'salary': 562194,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'James Dorsey',
	    'position': 'Ipsum Leo Associates',
	    'office': 'Congo (Brazzaville)',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/10'),
	    'salary': 629925,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Wesley Cobb',
	    'position': 'Nunc Est Incorporated',
	    'office': 'Australia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/30'),
	    'salary': 343476,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Meghan Stephens',
	    'position': 'Interdum PC',
	    'office': 'Turkey',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/10/11'),
	    'salary': 469305,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Bertha Herrera',
	    'position': 'Amet Limited',
	    'office': 'Kenya',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/11/22'),
	    'salary': 56606,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Karina Key',
	    'position': 'Quisque Varius Nam Company',
	    'office': 'France',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/26'),
	    'salary': 314260,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Uriel Carson',
	    'position': 'Penatibus PC',
	    'office': 'Venezuela',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/07'),
	    'salary': 106335,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Mira Baird',
	    'position': 'Felis Orci PC',
	    'office': 'Niue',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/25'),
	    'salary': 515671,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Ursula Parrish',
	    'position': 'Ac Corporation',
	    'office': 'Macao',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/30'),
	    'salary': 72295,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Josephine Sykes',
	    'position': 'Blandit Congue Limited',
	    'office': 'Holy See (Vatican City State)',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/22'),
	    'salary': 694656,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Maggie Sims',
	    'position': 'Vulputate Posuere Industries',
	    'office': 'Sudan',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/11/22'),
	    'salary': 363743,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Rogan Fuentes',
	    'position': 'Vestibulum Accumsan Neque Company',
	    'office': 'Jersey',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/07/29'),
	    'salary': 606004,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Maya Haney',
	    'position': 'Ac Foundation',
	    'office': 'Falkland Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/09/03'),
	    'salary': 745500,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Aquila Battle',
	    'position': 'Sociis Natoque Penatibus Foundation',
	    'office': 'Azerbaijan',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/06'),
	    'salary': 582265,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Connor Coleman',
	    'position': 'Orci Lacus Vestibulum Foundation',
	    'office': 'Croatia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/10/21'),
	    'salary': 416958,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Charity Thomas',
	    'position': 'Convallis Ligula Donec Inc.',
	    'office': 'Benin',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/07/12'),
	    'salary': 540999,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Blythe Powers',
	    'position': 'Amet Orci Limited',
	    'office': 'Falkland Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/23'),
	    'salary': 480067,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Human Resources']
	}, {
	    'name': 'Adria Battle',
	    'position': 'Ornare Lectus Incorporated',
	    'office': 'British Indian Ocean Territory',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/28'),
	    'salary': 257937,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Human Resources']
	}, {
	    'name': 'Melanie Mcintyre',
	    'position': 'Nunc Corp.',
	    'office': 'Mongolia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/06'),
	    'salary': 359737,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Human Resources']
	}, {
	    'name': 'Keely Bauer',
	    'position': 'Nec Tempus Institute',
	    'office': 'Somalia',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/09'),
	    'salary': 99718,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Human Resources']
	}, {
	    'name': 'Noelani Strong',
	    'position': 'Nec LLP',
	    'office': 'Iran',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/24'),
	    'salary': 480718,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Human Resources']
	}, {
	    'name': 'Jeanette Henderson',
	    'position': 'Eu Elit Nulla Corporation',
	    'office': 'Italy',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/19'),
	    'salary': 253772,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Candace Huber',
	    'position': 'Sed Institute',
	    'office': 'Uganda',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/16'),
	    'salary': 388879,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Bethany Potter',
	    'position': 'Vivamus Nibh Dolor Incorporated',
	    'office': 'Puerto Rico',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/11/12'),
	    'salary': 747310,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Whoopi Burks',
	    'position': 'Justo Inc.',
	    'office': 'Fiji',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/09/24'),
	    'salary': 803037,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Sheila Long',
	    'position': 'Diam Associates',
	    'office': 'Sao Tome and Principe',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/21'),
	    'salary': 674379,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Sonya Church',
	    'position': 'Laoreet Institute',
	    'office': 'Grenada',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/03'),
	    'salary': 625147,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Shaine Forbes',
	    'position': 'Eu Arcu LLP',
	    'office': 'Cyprus',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/18'),
	    'salary': 208100,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Alexandra Patrick',
	    'position': 'Ligula Donec Inc.',
	    'office': 'Viet Nam',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/04/09'),
	    'salary': 104063,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Patience Vincent',
	    'position': 'Sem Molestie Associates',
	    'office': 'Philippines',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/07/04'),
	    'salary': 673556,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Evelyn Smith',
	    'position': 'Fusce Industries',
	    'office': 'Togo',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/15'),
	    'salary': 737284,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Kieran Gonzalez',
	    'position': 'Non Corp.',
	    'office': 'Equatorial Guinea',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/08/24'),
	    'salary': 90195,
	    'status': 'New Lead',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Molly Oneil',
	    'position': 'Non Dui Consulting',
	    'office': 'Belize',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/10/28'),
	    'salary': 140767,
	    'status': 'Archived',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Nigel Davenport',
	    'position': 'Ullamcorper Velit In Industries',
	    'office': 'Vanuatu',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/16'),
	    'salary': 70536,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Thor Young',
	    'position': 'Malesuada Consulting',
	    'office': 'French Southern Territories',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/28'),
	    'salary': 75501,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Finn Delacruz',
	    'position': 'Lorem Industries',
	    'office': 'Cocos (Keeling) Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/11'),
	    'salary': 754967,
	    'status': 'Archived',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Lane Henderson',
	    'position': 'Pede Foundation',
	    'office': 'Kazakhstan',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/07/02'),
	    'salary': 842050,
	    'status': 'Archived',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Shea Potter',
	    'position': 'Curabitur Limited',
	    'office': 'Timor-Leste',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/07'),
	    'salary': 263629,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Brynn Yang',
	    'position': 'Ut Limited',
	    'office': 'Mayotte',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/17'),
	    'salary': 74292,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Kylan Fuentes',
	    'position': 'Sapien Aenean Associates',
	    'office': 'Brazil',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/28'),
	    'salary': 108632,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Lionel Mcbride',
	    'position': 'Ipsum PC',
	    'office': 'Portugal',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/07/11'),
	    'salary': 34244,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Paul Lucas',
	    'position': 'Eget LLP',
	    'office': 'Nicaragua',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/09/30'),
	    'salary': 690834,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Lareina Williamson',
	    'position': 'Imperdiet Ullamcorper Ltd',
	    'office': 'Cocos (Keeling) Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/01'),
	    'salary': 603498,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Amy Acevedo',
	    'position': 'Id Institute',
	    'office': 'Cook Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/02/04'),
	    'salary': 125165,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Nomlanga Silva',
	    'position': 'Eget LLC',
	    'office': 'Belize',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/01/31'),
	    'salary': 268509,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Amena Stone',
	    'position': 'Enim Incorporated',
	    'office': 'Guinea',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/09/23'),
	    'salary': 214381,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Danielle Coffey',
	    'position': 'Feugiat Placerat Corp.',
	    'office': 'Sao Tome and Principe',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/06/17'),
	    'salary': 137423,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Buffy Russell',
	    'position': 'Lacus Quisque Ltd',
	    'office': 'Ecuador',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/10/17'),
	    'salary': 612184,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Kaitlin Lamb',
	    'position': 'Malesuada Fringilla Est Associates',
	    'office': 'Algeria',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/10/18'),
	    'salary': 327367,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Leilani Yates',
	    'position': 'Mus Proin LLC',
	    'office': 'South Sudan',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/27'),
	    'salary': 743493,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Jemima Moon',
	    'position': 'Phasellus Corp.',
	    'office': 'South Georgia and The South Sandwich Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/21'),
	    'salary': 496067,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Hiroko Schwartz',
	    'position': 'Neque Institute',
	    'office': 'Saint Vincent and The Grenadines',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/13'),
	    'salary': 178782,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Nathaniel Jensen',
	    'position': 'Mi Tempor Limited',
	    'office': 'Dominica',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/05'),
	    'salary': 37441,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Silas Sweeney',
	    'position': 'Ultrices Institute',
	    'office': 'Turkmenistan',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/11/13'),
	    'salary': 152980,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Jermaine Barry',
	    'position': 'Dapibus Corporation',
	    'office': 'Uzbekistan',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/03/06'),
	    'salary': 409463,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Tatiana Nichols',
	    'position': 'Nec Diam Industries',
	    'office': 'Cook Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/05/22'),
	    'salary': 51155,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Rama Waller',
	    'position': 'Sem Pellentesque LLC',
	    'office': 'Andorra',
	    'ext': { 'obj': '8262' },
	    'startDate': new Date('2016/12/01'),
	    'salary': 223227,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdGFibGUvVGFibGVEYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTSxnQ0FBWSxDQUNyQjtBQUNJLFlBQVEsbUJBRFo7QUFFSSxnQkFBWSxxQkFGaEI7QUFHSSxjQUFVLFNBSGQ7QUFJSSxXQUFPLEVBQUUsT0FBTyxNQUFULEVBSlg7QUFLSSxpQkFBYSxJQUFJLElBQUosQ0FBUyxZQUFULENBTGpCO0FBTUksY0FBVSxNQU5kO0FBT0ksY0FBVSxVQVBkO0FBUUksbUJBQWUsdUxBUm5CO0FBU0ksa0JBQWMsQ0FBQyxXQUFELEVBQWMsV0FBZDtBQVRsQixDQURxQixFQVdsQjtBQUNDLFlBQVEsY0FEVDtBQUVDLGdCQUFZLE9BRmI7QUFHQyxjQUFVLFVBSFg7QUFJQyxXQUFPLEVBQUUsT0FBTyxNQUFULEVBSlI7QUFLQyxpQkFBYSxJQUFJLElBQUosQ0FBUyxZQUFULENBTGQ7QUFNQyxjQUFVLE1BTlg7QUFPQyxjQUFVLFFBUFg7QUFRQyxtQkFBZSx1TEFSaEI7QUFTQyxrQkFBYyxDQUFDLFdBQUQsRUFBYyxXQUFkO0FBVGYsQ0FYa0IsRUFxQmxCO0FBQ0MsWUFBUSxlQURUO0FBRUMsZ0JBQVksWUFGYjtBQUdDLGNBQVUsY0FIWDtBQUlDLFdBQU8sRUFBRSxPQUFPLE1BQVQsRUFKUjtBQUtDLGlCQUFhLElBQUksSUFBSixDQUFTLFlBQVQsQ0FMZDtBQU1DLGNBQVUsTUFOWDtBQU9DLGNBQVUsVUFQWDtBQVFDLG1CQUFlLDRPQVJoQjtBQVNDLGtCQUFjLENBQUMsV0FBRCxFQUFjLFdBQWQ7QUFUZixDQXJCa0IsRUErQmxCO0FBQ0MsWUFBUSxtQkFEVDtBQUVDLGdCQUFZLHdCQUZiO0FBR0MsY0FBVSxVQUhYO0FBSUMsV0FBTyxFQUFFLE9BQU8sTUFBVCxFQUpSO0FBS0MsaUJBQWEsSUFBSSxJQUFKLENBQVMsWUFBVCxDQUxkO0FBTUMsY0FBVSxNQU5YO0FBT0MsY0FBVSxVQVBYO0FBUUMsbUJBQWUseXJCQVJo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QUNDLFlBQVEsZ0JBRFQ7QUFFQyxnQkFBWSxxQkFGYjtBQUdDLGNBQVUsWUFIWDtBQUlDLFdBQU8sRUFBRSxPQUFPLE1BQVQsRUFKUjtBQUtDLGlCQUFhLElBQUksSUFBSixDQUFTLFlBQVQsQ0FMZDtBQU1DLGNBQVUsTUFOWDtBQU9DLGNBQVUsUUFQWDtBQVFDLG1CQUFlLHVMQVJoQjtBQVNDLGtCQUFjLENBQUMsZUFBRDtBQVRmLENBMzhCa0IsRUFxOUJsQjtBQUNDLFlBQVEsaUJBRFQ7QUFFQyxnQkFBWSxxQkFGYjtBQUdDLGNBQVUsY0FIWDtBQUlDLFdBQU8sRUFBRSxPQUFPLE1BQVQsRUFKUjtBQUtDLGlCQUFhLElBQUksSUFBSixDQUFTLFlBQVQsQ0FMZDtBQU1DLGNBQVUsS0FOWDtBQU9DLGNBQVUsUUFQWDtBQVFDLG1CQUFlLHVMQVJoQjtBQVNDLGtCQUFjLENBQUMsZUFBRDtBQVRmLENBcjlCa0IsRUErOUJsQjtBQUNDLFlBQVEsYUFEVDtBQUVDLGdCQUFZLHNCQUZiO0FBR0MsY0FBVSxTQUhYO0FBSUMsV0FBTyxFQUFFLE9BQU8sTUFBVCxFQUpSO0FBS0MsaUJBQWEsSUFBSSxJQUFKLENBQVMsWUFBVCxDQUxkO0FBTUMsY0FBVSxNQU5YO0FBT0MsY0FBVSxRQVBYO0FBUUMsbUJBQWUsdUxBUmhCO0FBU0Msa0JBQWMsQ0FBQyxlQUFEO0FBVGYsQ0EvOUJrQixDQUFsQiIsImZpbGUiOiJUYWJsZURhdGEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JyaWFua2ltYmFsbC9Ob3ZvL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVGFibGVEYXRhID0gW1xuICAgIHtcbiAgICAgICAgJ25hbWUnOiAnVmljdG9yaWEgQ2FudHJlbGwnLFxuICAgICAgICAncG9zaXRpb24nOiAnSW50ZWdlciBDb3Jwb3JhdGlvbicsXG4gICAgICAgICdvZmZpY2UnOiAnQ3JvYXRpYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA4LzE5JyksXG4gICAgICAgICdzYWxhcnknOiAyMDgxNzgsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1BlYXJsIENyb3NieScsXG4gICAgICAgICdwb3NpdGlvbic6ICdJbiBQQycsXG4gICAgICAgICdvZmZpY2UnOiAnQ2FtYm9kaWEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8xMC8wOCcpLFxuICAgICAgICAnc2FsYXJ5JzogMTE0MzY3LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQ29sZXR0ZSBGb2xleScsXG4gICAgICAgICdwb3NpdGlvbic6ICdMb3JlbSBJbmMuJyxcbiAgICAgICAgJ29mZmljZSc6ICdLb3JlYSwgTm9ydGgnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNy8xOScpLFxuICAgICAgICAnc2FsYXJ5JzogNzIxNDczLFxuICAgICAgICAnc3RhdHVzJzogJ0FyY2hpdmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RvIG15IGNhbXBhaWduIG1hbmFnZXIgRGF2aWQgUGxvdWZmZSwgbXkgY2hpZWYgc3RyYXRlZ2lzdCBEYXZpZCBBeGVscm9kLCBhbmQgdGhlIGJlc3QgY2FtcGFpZ24gdGVhbSBldmVyIGFzc2VtYmxlZCBpbiB0aGUgaGlzdG9yeSBvZiBwb2xpdGljcyDigJMgeW91IG1hZGUgdGhpcyBoYXBwZW4sIGFuZCBJIGFtIGZvcmV2ZXIgZ3JhdGVmdWwgZm9yIHdoYXQgeW914oCZdmUgc2FjcmlmaWNlZCB0byBnZXQgaXQgZG9uZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdBbmFzdGFzaWEgU2hhZmZlcicsXG4gICAgICAgICdwb3NpdGlvbic6ICdEb2xvciBOdWxsYSBTZW1wZXIgTExDJyxcbiAgICAgICAgJ29mZmljZSc6ICdTdXJpbmFtZScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA0LzIwJyksXG4gICAgICAgICdzYWxhcnknOiAyNjQ2MjAsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQW5kIHRvIGFsbCB0aG9zZSB3YXRjaGluZyB0b25pZ2h0IGZyb20gYmV5b25kIG91ciBzaG9yZXMsIGZyb20gcGFybGlhbWVudHMgYW5kIHBhbGFjZXMgdG8gdGhvc2Ugd2hvIGFyZSBodWRkbGVkIGFyb3VuZCByYWRpb3MgaW4gdGhlIGZvcmdvdHRlbiBjb3JuZXJzIG9mIG91ciB3b3JsZCDigJMgb3VyIHN0b3JpZXMgYXJlIHNpbmd1bGFyLCBidXQgb3VyIGRlc3RpbnkgaXMgc2hhcmVkLCBhbmQgYSBuZXcgZGF3biBvZiBBbWVyaWNhbiBsZWFkZXJzaGlwIGlzIGF0IGhhbmQuIFRvIHRob3NlIHdobyB3b3VsZCB0ZWFyIHRoaXMgd29ybGQgZG93biDigJMgd2Ugd2lsbCBkZWZlYXQgeW91LiBUbyB0aG9zZSB3aG8gc2VlayBwZWFjZSBhbmQgc2VjdXJpdHkg4oCTIHdlIHN1cHBvcnQgeW91LiBBbmQgdG8gYWxsIHRob3NlIHdobyBoYXZlIHdvbmRlcmVkIGlmIEFtZXJpY2HigJlzIGJlYWNvbiBzdGlsbCBidXJucyBhcyBicmlnaHQg4oCTIHRvbmlnaHQgd2UgcHJvdmVkIG9uY2UgbW9yZSB0aGF0IHRoZSB0cnVlIHN0cmVuZ3RoIG9mIG91ciBuYXRpb24gY29tZXMgbm90IGZyb20gb3VyIHRoZSBtaWdodCBvZiBvdXIgYXJtcyBvciB0aGUgc2NhbGUgb2Ygb3VyIHdlYWx0aCwgYnV0IGZyb20gdGhlIGVuZHVyaW5nIHBvd2VyIG9mIG91ciBpZGVhbHM6IGRlbW9jcmFjeSwgbGliZXJ0eSwgb3Bwb3J0dW5pdHksIGFuZCB1bnlpZWxkaW5nIGhvcGUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnR2FicmllbCBDYXN0cm8nLFxuICAgICAgICAncG9zaXRpb24nOiAnU2VkIExpbWl0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ0JhaHJhaW4nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMy8wNCcpLFxuICAgICAgICAnc2FsYXJ5JzogNjUxMzUwLFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0kgd2FudCB0byB0aGFuayBteSBwYXJ0bmVyIGluIHRoaXMgam91cm5leSwgYSBtYW4gd2hvIGNhbXBhaWduZWQgZnJvbSBoaXMgaGVhcnQgYW5kIHNwb2tlIGZvciB0aGUgbWVuIGFuZCB3b21lbiBoZSBncmV3IHVwIHdpdGggb24gdGhlIHN0cmVldHMgb2YgU2NyYW50b24gYW5kIHJvZGUgd2l0aCBvbiB0aGF0IHRyYWluIGhvbWUgdG8gRGVsYXdhcmUsIHRoZSBWaWNlIFByZXNpZGVudC1lbGVjdCBvZiB0aGUgVW5pdGVkIFN0YXRlcywgSm9lIEJpZGVuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0NoZXJva2VlIFdhcmUnLFxuICAgICAgICAncG9zaXRpb24nOiAnVGluY2lkdW50IExMQycsXG4gICAgICAgICdvZmZpY2UnOiAnVW5pdGVkIEtpbmdkb20gKEdyZWF0IEJyaXRhaW4pJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDYvMTcnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDY2NjI1OSxcbiAgICAgICAgJ3N0YXR1cyc6ICdOZXcgTGVhZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdJdOKAmXMgYmVlbiBhIGxvbmcgdGltZSBjb21pbmcsIGJ1dCB0b25pZ2h0LCBiZWNhdXNlIG9mIHdoYXQgd2UgZGlkIG9uIHRoaXMgZGF5LCBpbiB0aGlzIGVsZWN0aW9uLCBhdCB0aGlzIGRlZmluaW5nIG1vbWVudCwgY2hhbmdlIGhhcyBjb21lIHRvIEFtZXJpY2EuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQmFycnkgTW9zcycsXG4gICAgICAgICdwb3NpdGlvbic6ICdTb2NpaXMgSW5kdXN0cmllcycsXG4gICAgICAgICdvZmZpY2UnOiAnV2VzdGVybiBTYWhhcmEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wOC8xMycpLFxuICAgICAgICAnc2FsYXJ5JzogNTQxNjMxLFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RvIG15IGNhbXBhaWduIG1hbmFnZXIgRGF2aWQgUGxvdWZmZSwgbXkgY2hpZWYgc3RyYXRlZ2lzdCBEYXZpZCBBeGVscm9kLCBhbmQgdGhlIGJlc3QgY2FtcGFpZ24gdGVhbSBldmVyIGFzc2VtYmxlZCBpbiB0aGUgaGlzdG9yeSBvZiBwb2xpdGljcyDigJMgeW91IG1hZGUgdGhpcyBoYXBwZW4sIGFuZCBJIGFtIGZvcmV2ZXIgZ3JhdGVmdWwgZm9yIHdoYXQgeW914oCZdmUgc2FjcmlmaWNlZCB0byBnZXQgaXQgZG9uZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdNYXJ5YW0gVHVja2VyJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0VsaXQgUGVkZSBNYWxlc3VhZGEgSW5jLicsXG4gICAgICAgICdvZmZpY2UnOiAnQnJhemlsJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMTAvMDInKSxcbiAgICAgICAgJ3NhbGFyeSc6IDE4MjI5NCxcbiAgICAgICAgJ3N0YXR1cyc6ICdOZXcgTGVhZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUbyBteSBjYW1wYWlnbiBtYW5hZ2VyIERhdmlkIFBsb3VmZmUsIG15IGNoaWVmIHN0cmF0ZWdpc3QgRGF2aWQgQXhlbHJvZCwgYW5kIHRoZSBiZXN0IGNhbXBhaWduIHRlYW0gZXZlciBhc3NlbWJsZWQgaW4gdGhlIGhpc3Rvcnkgb2YgcG9saXRpY3Mg4oCTIHlvdSBtYWRlIHRoaXMgaGFwcGVuLCBhbmQgSSBhbSBmb3JldmVyIGdyYXRlZnVsIGZvciB3aGF0IHlvdeKAmXZlIHNhY3JpZmljZWQgdG8gZ2V0IGl0IGRvbmUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQ29uc3RhbmNlIENsYXl0b24nLFxuICAgICAgICAncG9zaXRpb24nOiAnQXVjdG9yIFZlbGl0IEFsaXF1YW0gTExQJyxcbiAgICAgICAgJ29mZmljZSc6ICdVbml0ZWQgQXJhYiBFbWlyYXRlcycsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA4LzAxJyksXG4gICAgICAgICdzYWxhcnknOiAyMTg1OTcsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVG8gbXkgY2FtcGFpZ24gbWFuYWdlciBEYXZpZCBQbG91ZmZlLCBteSBjaGllZiBzdHJhdGVnaXN0IERhdmlkIEF4ZWxyb2QsIGFuZCB0aGUgYmVzdCBjYW1wYWlnbiB0ZWFtIGV2ZXIgYXNzZW1ibGVkIGluIHRoZSBoaXN0b3J5IG9mIHBvbGl0aWNzIOKAkyB5b3UgbWFkZSB0aGlzIGhhcHBlbiwgYW5kIEkgYW0gZm9yZXZlciBncmF0ZWZ1bCBmb3Igd2hhdCB5b3XigJl2ZSBzYWNyaWZpY2VkIHRvIGdldCBpdCBkb25lLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1JvZ2FuIFR1Y2tlcicsXG4gICAgICAgICdwb3NpdGlvbic6ICdBcmN1IFZlc3RpYnVsdW0gQW50ZSBBc3NvY2lhdGVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdKZXJzZXknLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMS8wNCcpLFxuICAgICAgICAnc2FsYXJ5JzogODYxNjMyLFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RvIG15IGNhbXBhaWduIG1hbmFnZXIgRGF2aWQgUGxvdWZmZSwgbXkgY2hpZWYgc3RyYXRlZ2lzdCBEYXZpZCBBeGVscm9kLCBhbmQgdGhlIGJlc3QgY2FtcGFpZ24gdGVhbSBldmVyIGFzc2VtYmxlZCBpbiB0aGUgaGlzdG9yeSBvZiBwb2xpdGljcyDigJMgeW91IG1hZGUgdGhpcyBoYXBwZW4sIGFuZCBJIGFtIGZvcmV2ZXIgZ3JhdGVmdWwgZm9yIHdoYXQgeW914oCZdmUgc2FjcmlmaWNlZCB0byBnZXQgaXQgZG9uZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdFbWVyeSBNY2Rvd2VsbCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdHcmF2aWRhIENvbXBhbnknLFxuICAgICAgICAnb2ZmaWNlJzogJ05ldyBaZWFsYW5kJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDYvMDInKSxcbiAgICAgICAgJ3NhbGFyeSc6IDQxMzU2OCxcbiAgICAgICAgJ3N0YXR1cyc6ICdOZXcgTGVhZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUbyBteSBjYW1wYWlnbiBtYW5hZ2VyIERhdmlkIFBsb3VmZmUsIG15IGNoaWVmIHN0cmF0ZWdpc3QgRGF2aWQgQXhlbHJvZCwgYW5kIHRoZSBiZXN0IGNhbXBhaWduIHRlYW0gZXZlciBhc3NlbWJsZWQgaW4gdGhlIGhpc3Rvcnkgb2YgcG9saXRpY3Mg4oCTIHlvdSBtYWRlIHRoaXMgaGFwcGVuLCBhbmQgSSBhbSBmb3JldmVyIGdyYXRlZnVsIGZvciB3aGF0IHlvdeKAmXZlIHNhY3JpZmljZWQgdG8gZ2V0IGl0IGRvbmUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnWWFlbCBHcmVlcicsXG4gICAgICAgICdwb3NpdGlvbic6ICdPcmNpIExpbWl0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ01hZGFnYXNjYXInLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8xMi8wNCcpLFxuICAgICAgICAnc2FsYXJ5JzogMTIxODMxLFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RvIG15IGNhbXBhaWduIG1hbmFnZXIgRGF2aWQgUGxvdWZmZSwgbXkgY2hpZWYgc3RyYXRlZ2lzdCBEYXZpZCBBeGVscm9kLCBhbmQgdGhlIGJlc3QgY2FtcGFpZ24gdGVhbSBldmVyIGFzc2VtYmxlZCBpbiB0aGUgaGlzdG9yeSBvZiBwb2xpdGljcyDigJMgeW91IG1hZGUgdGhpcyBoYXBwZW4sIGFuZCBJIGFtIGZvcmV2ZXIgZ3JhdGVmdWwgZm9yIHdoYXQgeW914oCZdmUgc2FjcmlmaWNlZCB0byBnZXQgaXQgZG9uZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdKYXJlZCBCdXJnZXNzJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0F1Y3RvciBJbmNvcnBvcmF0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ0J1cnVuZGknLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMS8xMicpLFxuICAgICAgICAnc2FsYXJ5JzogNjIyNDMsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RvIG15IGNhbXBhaWduIG1hbmFnZXIgRGF2aWQgUGxvdWZmZSwgbXkgY2hpZWYgc3RyYXRlZ2lzdCBEYXZpZCBBeGVscm9kLCBhbmQgdGhlIGJlc3QgY2FtcGFpZ24gdGVhbSBldmVyIGFzc2VtYmxlZCBpbiB0aGUgaGlzdG9yeSBvZiBwb2xpdGljcyDigJMgeW91IG1hZGUgdGhpcyBoYXBwZW4sIGFuZCBJIGFtIGZvcmV2ZXIgZ3JhdGVmdWwgZm9yIHdoYXQgeW914oCZdmUgc2FjcmlmaWNlZCB0byBnZXQgaXQgZG9uZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdTaGFyb24gQ2FtcGJlbGwnLFxuICAgICAgICAncG9zaXRpb24nOiAnRWxpdCBDdXJhYml0dXIgU2VkIENvbnN1bHRpbmcnLFxuICAgICAgICAnb2ZmaWNlJzogJ0NvbW9yb3MnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wOS8xNCcpLFxuICAgICAgICAnc2FsYXJ5JzogMjAwODU0LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUbyBteSBjYW1wYWlnbiBtYW5hZ2VyIERhdmlkIFBsb3VmZmUsIG15IGNoaWVmIHN0cmF0ZWdpc3QgRGF2aWQgQXhlbHJvZCwgYW5kIHRoZSBiZXN0IGNhbXBhaWduIHRlYW0gZXZlciBhc3NlbWJsZWQgaW4gdGhlIGhpc3Rvcnkgb2YgcG9saXRpY3Mg4oCTIHlvdSBtYWRlIHRoaXMgaGFwcGVuLCBhbmQgSSBhbSBmb3JldmVyIGdyYXRlZnVsIGZvciB3aGF0IHlvdeKAmXZlIHNhY3JpZmljZWQgdG8gZ2V0IGl0IGRvbmUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdGaW5hbmNlJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1llbyBDaHVyY2gnLFxuICAgICAgICAncG9zaXRpb24nOiAnRG9uZWMgVml0YWUgRXJhdCBQQycsXG4gICAgICAgICdvZmZpY2UnOiAnU2F1ZGkgQXJhYmlhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDYvMDcnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDU4MTE5MyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVG8gbXkgY2FtcGFpZ24gbWFuYWdlciBEYXZpZCBQbG91ZmZlLCBteSBjaGllZiBzdHJhdGVnaXN0IERhdmlkIEF4ZWxyb2QsIGFuZCB0aGUgYmVzdCBjYW1wYWlnbiB0ZWFtIGV2ZXIgYXNzZW1ibGVkIGluIHRoZSBoaXN0b3J5IG9mIHBvbGl0aWNzIOKAkyB5b3UgbWFkZSB0aGlzIGhhcHBlbiwgYW5kIEkgYW0gZm9yZXZlciBncmF0ZWZ1bCBmb3Igd2hhdCB5b3XigJl2ZSBzYWNyaWZpY2VkIHRvIGdldCBpdCBkb25lLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRmluYW5jZSddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdLeWxpZSBCYXJsb3cnLFxuICAgICAgICAncG9zaXRpb24nOiAnRmVybWVudHVtIFJpc3VzIENvcnBvcmF0aW9uJyxcbiAgICAgICAgJ29mZmljZSc6ICdQYXB1YSBOZXcgR3VpbmVhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMTIvMDMnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDQxODExNSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQW5kIHRvIGFsbCB0aG9zZSB3YXRjaGluZyB0b25pZ2h0IGZyb20gYmV5b25kIG91ciBzaG9yZXMsIGZyb20gcGFybGlhbWVudHMgYW5kIHBhbGFjZXMgdG8gdGhvc2Ugd2hvIGFyZSBodWRkbGVkIGFyb3VuZCByYWRpb3MgaW4gdGhlIGZvcmdvdHRlbiBjb3JuZXJzIG9mIG91ciB3b3JsZCDigJMgb3VyIHN0b3JpZXMgYXJlIHNpbmd1bGFyLCBidXQgb3VyIGRlc3RpbnkgaXMgc2hhcmVkLCBhbmQgYSBuZXcgZGF3biBvZiBBbWVyaWNhbiBsZWFkZXJzaGlwIGlzIGF0IGhhbmQuIFRvIHRob3NlIHdobyB3b3VsZCB0ZWFyIHRoaXMgd29ybGQgZG93biDigJMgd2Ugd2lsbCBkZWZlYXQgeW91LiBUbyB0aG9zZSB3aG8gc2VlayBwZWFjZSBhbmQgc2VjdXJpdHkg4oCTIHdlIHN1cHBvcnQgeW91LiBBbmQgdG8gYWxsIHRob3NlIHdobyBoYXZlIHdvbmRlcmVkIGlmIEFtZXJpY2HigJlzIGJlYWNvbiBzdGlsbCBidXJucyBhcyBicmlnaHQg4oCTIHRvbmlnaHQgd2UgcHJvdmVkIG9uY2UgbW9yZSB0aGF0IHRoZSB0cnVlIHN0cmVuZ3RoIG9mIG91ciBuYXRpb24gY29tZXMgbm90IGZyb20gb3VyIHRoZSBtaWdodCBvZiBvdXIgYXJtcyBvciB0aGUgc2NhbGUgb2Ygb3VyIHdlYWx0aCwgYnV0IGZyb20gdGhlIGVuZHVyaW5nIHBvd2VyIG9mIG91ciBpZGVhbHM6IGRlbW9jcmFjeSwgbGliZXJ0eSwgb3Bwb3J0dW5pdHksIGFuZCB1bnlpZWxkaW5nIGhvcGUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdGaW5hbmNlJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ05lbGwgTGVvbmFyZCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdWZXN0aWJ1bHVtIENvbnN1bHRpbmcnLFxuICAgICAgICAnb2ZmaWNlJzogJ1NhdWRpIEFyYWJpYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA1LzI5JyksXG4gICAgICAgICdzYWxhcnknOiA0NjYyMDEsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0FuZCB0byBhbGwgdGhvc2Ugd2F0Y2hpbmcgdG9uaWdodCBmcm9tIGJleW9uZCBvdXIgc2hvcmVzLCBmcm9tIHBhcmxpYW1lbnRzIGFuZCBwYWxhY2VzIHRvIHRob3NlIHdobyBhcmUgaHVkZGxlZCBhcm91bmQgcmFkaW9zIGluIHRoZSBmb3Jnb3R0ZW4gY29ybmVycyBvZiBvdXIgd29ybGQg4oCTIG91ciBzdG9yaWVzIGFyZSBzaW5ndWxhciwgYnV0IG91ciBkZXN0aW55IGlzIHNoYXJlZCwgYW5kIGEgbmV3IGRhd24gb2YgQW1lcmljYW4gbGVhZGVyc2hpcCBpcyBhdCBoYW5kLiBUbyB0aG9zZSB3aG8gd291bGQgdGVhciB0aGlzIHdvcmxkIGRvd24g4oCTIHdlIHdpbGwgZGVmZWF0IHlvdS4gVG8gdGhvc2Ugd2hvIHNlZWsgcGVhY2UgYW5kIHNlY3VyaXR5IOKAkyB3ZSBzdXBwb3J0IHlvdS4gQW5kIHRvIGFsbCB0aG9zZSB3aG8gaGF2ZSB3b25kZXJlZCBpZiBBbWVyaWNh4oCZcyBiZWFjb24gc3RpbGwgYnVybnMgYXMgYnJpZ2h0IOKAkyB0b25pZ2h0IHdlIHByb3ZlZCBvbmNlIG1vcmUgdGhhdCB0aGUgdHJ1ZSBzdHJlbmd0aCBvZiBvdXIgbmF0aW9uIGNvbWVzIG5vdCBmcm9tIG91ciB0aGUgbWlnaHQgb2Ygb3VyIGFybXMgb3IgdGhlIHNjYWxlIG9mIG91ciB3ZWFsdGgsIGJ1dCBmcm9tIHRoZSBlbmR1cmluZyBwb3dlciBvZiBvdXIgaWRlYWxzOiBkZW1vY3JhY3ksIGxpYmVydHksIG9wcG9ydHVuaXR5LCBhbmQgdW55aWVsZGluZyBob3BlLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRmluYW5jZSddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdCcmFuZG9uIEZsZW1pbmcnLFxuICAgICAgICAncG9zaXRpb24nOiAnRG9uZWMgRWdlc3RhcyBBc3NvY2lhdGVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdQb2xhbmQnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMS8yMicpLFxuICAgICAgICAnc2FsYXJ5JzogODAwMDExLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdBbmQgdG8gYWxsIHRob3NlIHdhdGNoaW5nIHRvbmlnaHQgZnJvbSBiZXlvbmQgb3VyIHNob3JlcywgZnJvbSBwYXJsaWFtZW50cyBhbmQgcGFsYWNlcyB0byB0aG9zZSB3aG8gYXJlIGh1ZGRsZWQgYXJvdW5kIHJhZGlvcyBpbiB0aGUgZm9yZ290dGVuIGNvcm5lcnMgb2Ygb3VyIHdvcmxkIOKAkyBvdXIgc3RvcmllcyBhcmUgc2luZ3VsYXIsIGJ1dCBvdXIgZGVzdGlueSBpcyBzaGFyZWQsIGFuZCBhIG5ldyBkYXduIG9mIEFtZXJpY2FuIGxlYWRlcnNoaXAgaXMgYXQgaGFuZC4gVG8gdGhvc2Ugd2hvIHdvdWxkIHRlYXIgdGhpcyB3b3JsZCBkb3duIOKAkyB3ZSB3aWxsIGRlZmVhdCB5b3UuIFRvIHRob3NlIHdobyBzZWVrIHBlYWNlIGFuZCBzZWN1cml0eSDigJMgd2Ugc3VwcG9ydCB5b3UuIEFuZCB0byBhbGwgdGhvc2Ugd2hvIGhhdmUgd29uZGVyZWQgaWYgQW1lcmljYeKAmXMgYmVhY29uIHN0aWxsIGJ1cm5zIGFzIGJyaWdodCDigJMgdG9uaWdodCB3ZSBwcm92ZWQgb25jZSBtb3JlIHRoYXQgdGhlIHRydWUgc3RyZW5ndGggb2Ygb3VyIG5hdGlvbiBjb21lcyBub3QgZnJvbSBvdXIgdGhlIG1pZ2h0IG9mIG91ciBhcm1zIG9yIHRoZSBzY2FsZSBvZiBvdXIgd2VhbHRoLCBidXQgZnJvbSB0aGUgZW5kdXJpbmcgcG93ZXIgb2Ygb3VyIGlkZWFsczogZGVtb2NyYWN5LCBsaWJlcnR5LCBvcHBvcnR1bml0eSwgYW5kIHVueWllbGRpbmcgaG9wZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0ZpbmFuY2UnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnSW5nYSBQZW5hJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0V0IE1hZ25pcyBEaXMgTGltaXRlZCcsXG4gICAgICAgICdvZmZpY2UnOiAnQmVsZ2l1bScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA1LzE4JyksXG4gICAgICAgICdzYWxhcnknOiA1NjQyNDUsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0FuZCB0byBhbGwgdGhvc2Ugd2F0Y2hpbmcgdG9uaWdodCBmcm9tIGJleW9uZCBvdXIgc2hvcmVzLCBmcm9tIHBhcmxpYW1lbnRzIGFuZCBwYWxhY2VzIHRvIHRob3NlIHdobyBhcmUgaHVkZGxlZCBhcm91bmQgcmFkaW9zIGluIHRoZSBmb3Jnb3R0ZW4gY29ybmVycyBvZiBvdXIgd29ybGQg4oCTIG91ciBzdG9yaWVzIGFyZSBzaW5ndWxhciwgYnV0IG91ciBkZXN0aW55IGlzIHNoYXJlZCwgYW5kIGEgbmV3IGRhd24gb2YgQW1lcmljYW4gbGVhZGVyc2hpcCBpcyBhdCBoYW5kLiBUbyB0aG9zZSB3aG8gd291bGQgdGVhciB0aGlzIHdvcmxkIGRvd24g4oCTIHdlIHdpbGwgZGVmZWF0IHlvdS4gVG8gdGhvc2Ugd2hvIHNlZWsgcGVhY2UgYW5kIHNlY3VyaXR5IOKAkyB3ZSBzdXBwb3J0IHlvdS4gQW5kIHRvIGFsbCB0aG9zZSB3aG8gaGF2ZSB3b25kZXJlZCBpZiBBbWVyaWNh4oCZcyBiZWFjb24gc3RpbGwgYnVybnMgYXMgYnJpZ2h0IOKAkyB0b25pZ2h0IHdlIHByb3ZlZCBvbmNlIG1vcmUgdGhhdCB0aGUgdHJ1ZSBzdHJlbmd0aCBvZiBvdXIgbmF0aW9uIGNvbWVzIG5vdCBmcm9tIG91ciB0aGUgbWlnaHQgb2Ygb3VyIGFybXMgb3IgdGhlIHNjYWxlIG9mIG91ciB3ZWFsdGgsIGJ1dCBmcm9tIHRoZSBlbmR1cmluZyBwb3dlciBvZiBvdXIgaWRlYWxzOiBkZW1vY3JhY3ksIGxpYmVydHksIG9wcG9ydHVuaXR5LCBhbmQgdW55aWVsZGluZyBob3BlLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydQZXJtZW5hbnQnLCAnRmluYW5jZSddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdBcmRlbiBSdXNzbycsXG4gICAgICAgICdwb3NpdGlvbic6ICdFc3QgVGVtcG9yIEJpYmVuZHVtIENvcnAuJyxcbiAgICAgICAgJ29mZmljZSc6ICdEb21pbmljYW4gUmVwdWJsaWMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNy8yMycpLFxuICAgICAgICAnc2FsYXJ5JzogMzU3MjIyLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdBbmQgdG8gYWxsIHRob3NlIHdhdGNoaW5nIHRvbmlnaHQgZnJvbSBiZXlvbmQgb3VyIHNob3JlcywgZnJvbSBwYXJsaWFtZW50cyBhbmQgcGFsYWNlcyB0byB0aG9zZSB3aG8gYXJlIGh1ZGRsZWQgYXJvdW5kIHJhZGlvcyBpbiB0aGUgZm9yZ290dGVuIGNvcm5lcnMgb2Ygb3VyIHdvcmxkIOKAkyBvdXIgc3RvcmllcyBhcmUgc2luZ3VsYXIsIGJ1dCBvdXIgZGVzdGlueSBpcyBzaGFyZWQsIGFuZCBhIG5ldyBkYXduIG9mIEFtZXJpY2FuIGxlYWRlcnNoaXAgaXMgYXQgaGFuZC4gVG8gdGhvc2Ugd2hvIHdvdWxkIHRlYXIgdGhpcyB3b3JsZCBkb3duIOKAkyB3ZSB3aWxsIGRlZmVhdCB5b3UuIFRvIHRob3NlIHdobyBzZWVrIHBlYWNlIGFuZCBzZWN1cml0eSDigJMgd2Ugc3VwcG9ydCB5b3UuIEFuZCB0byBhbGwgdGhvc2Ugd2hvIGhhdmUgd29uZGVyZWQgaWYgQW1lcmljYeKAmXMgYmVhY29uIHN0aWxsIGJ1cm5zIGFzIGJyaWdodCDigJMgdG9uaWdodCB3ZSBwcm92ZWQgb25jZSBtb3JlIHRoYXQgdGhlIHRydWUgc3RyZW5ndGggb2Ygb3VyIG5hdGlvbiBjb21lcyBub3QgZnJvbSBvdXIgdGhlIG1pZ2h0IG9mIG91ciBhcm1zIG9yIHRoZSBzY2FsZSBvZiBvdXIgd2VhbHRoLCBidXQgZnJvbSB0aGUgZW5kdXJpbmcgcG93ZXIgb2Ygb3VyIGlkZWFsczogZGVtb2NyYWN5LCBsaWJlcnR5LCBvcHBvcnR1bml0eSwgYW5kIHVueWllbGRpbmcgaG9wZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnUGVybWVuYW50JywgJ0ZpbmFuY2UnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTGliZXJ0eSBHYWxsZWdvcycsXG4gICAgICAgICdwb3NpdGlvbic6ICdOZWMgRGlhbSBMTEMnLFxuICAgICAgICAnb2ZmaWNlJzogJ0doYW5hJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDYvMTgnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDU1NDM3NSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQW5kIHRvIGFsbCB0aG9zZSB3YXRjaGluZyB0b25pZ2h0IGZyb20gYmV5b25kIG91ciBzaG9yZXMsIGZyb20gcGFybGlhbWVudHMgYW5kIHBhbGFjZXMgdG8gdGhvc2Ugd2hvIGFyZSBodWRkbGVkIGFyb3VuZCByYWRpb3MgaW4gdGhlIGZvcmdvdHRlbiBjb3JuZXJzIG9mIG91ciB3b3JsZCDigJMgb3VyIHN0b3JpZXMgYXJlIHNpbmd1bGFyLCBidXQgb3VyIGRlc3RpbnkgaXMgc2hhcmVkLCBhbmQgYSBuZXcgZGF3biBvZiBBbWVyaWNhbiBsZWFkZXJzaGlwIGlzIGF0IGhhbmQuIFRvIHRob3NlIHdobyB3b3VsZCB0ZWFyIHRoaXMgd29ybGQgZG93biDigJMgd2Ugd2lsbCBkZWZlYXQgeW91LiBUbyB0aG9zZSB3aG8gc2VlayBwZWFjZSBhbmQgc2VjdXJpdHkg4oCTIHdlIHN1cHBvcnQgeW91LiBBbmQgdG8gYWxsIHRob3NlIHdobyBoYXZlIHdvbmRlcmVkIGlmIEFtZXJpY2HigJlzIGJlYWNvbiBzdGlsbCBidXJucyBhcyBicmlnaHQg4oCTIHRvbmlnaHQgd2UgcHJvdmVkIG9uY2UgbW9yZSB0aGF0IHRoZSB0cnVlIHN0cmVuZ3RoIG9mIG91ciBuYXRpb24gY29tZXMgbm90IGZyb20gb3VyIHRoZSBtaWdodCBvZiBvdXIgYXJtcyBvciB0aGUgc2NhbGUgb2Ygb3VyIHdlYWx0aCwgYnV0IGZyb20gdGhlIGVuZHVyaW5nIHBvd2VyIG9mIG91ciBpZGVhbHM6IGRlbW9jcmFjeSwgbGliZXJ0eSwgb3Bwb3J0dW5pdHksIGFuZCB1bnlpZWxkaW5nIGhvcGUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1Blcm1lbmFudCcsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnRGVubmlzIFlvcmsnLFxuICAgICAgICAncG9zaXRpb24nOiAnTnVsbGFtIFN1c2NpcGl0IEZvdW5kYXRpb24nLFxuICAgICAgICAnb2ZmaWNlJzogJ05hbWliaWEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMy8yMCcpLFxuICAgICAgICAnc2FsYXJ5JzogOTA0MTcsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0FuZCB0byBhbGwgdGhvc2Ugd2F0Y2hpbmcgdG9uaWdodCBmcm9tIGJleW9uZCBvdXIgc2hvcmVzLCBmcm9tIHBhcmxpYW1lbnRzIGFuZCBwYWxhY2VzIHRvIHRob3NlIHdobyBhcmUgaHVkZGxlZCBhcm91bmQgcmFkaW9zIGluIHRoZSBmb3Jnb3R0ZW4gY29ybmVycyBvZiBvdXIgd29ybGQg4oCTIG91ciBzdG9yaWVzIGFyZSBzaW5ndWxhciwgYnV0IG91ciBkZXN0aW55IGlzIHNoYXJlZCwgYW5kIGEgbmV3IGRhd24gb2YgQW1lcmljYW4gbGVhZGVyc2hpcCBpcyBhdCBoYW5kLiBUbyB0aG9zZSB3aG8gd291bGQgdGVhciB0aGlzIHdvcmxkIGRvd24g4oCTIHdlIHdpbGwgZGVmZWF0IHlvdS4gVG8gdGhvc2Ugd2hvIHNlZWsgcGVhY2UgYW5kIHNlY3VyaXR5IOKAkyB3ZSBzdXBwb3J0IHlvdS4gQW5kIHRvIGFsbCB0aG9zZSB3aG8gaGF2ZSB3b25kZXJlZCBpZiBBbWVyaWNh4oCZcyBiZWFjb24gc3RpbGwgYnVybnMgYXMgYnJpZ2h0IOKAkyB0b25pZ2h0IHdlIHByb3ZlZCBvbmNlIG1vcmUgdGhhdCB0aGUgdHJ1ZSBzdHJlbmd0aCBvZiBvdXIgbmF0aW9uIGNvbWVzIG5vdCBmcm9tIG91ciB0aGUgbWlnaHQgb2Ygb3VyIGFybXMgb3IgdGhlIHNjYWxlIG9mIG91ciB3ZWFsdGgsIGJ1dCBmcm9tIHRoZSBlbmR1cmluZyBwb3dlciBvZiBvdXIgaWRlYWxzOiBkZW1vY3JhY3ksIGxpYmVydHksIG9wcG9ydHVuaXR5LCBhbmQgdW55aWVsZGluZyBob3BlLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydQZXJtZW5hbnQnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1BldHJhIENoYW5kbGVyJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1BlZGUgTm9udW1teSBJbmMuJyxcbiAgICAgICAgJ29mZmljZSc6ICdOYW1pYmlhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDMvMjYnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDU5ODkxNSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQW5kIHRvIGFsbCB0aG9zZSB3YXRjaGluZyB0b25pZ2h0IGZyb20gYmV5b25kIG91ciBzaG9yZXMsIGZyb20gcGFybGlhbWVudHMgYW5kIHBhbGFjZXMgdG8gdGhvc2Ugd2hvIGFyZSBodWRkbGVkIGFyb3VuZCByYWRpb3MgaW4gdGhlIGZvcmdvdHRlbiBjb3JuZXJzIG9mIG91ciB3b3JsZCDigJMgb3VyIHN0b3JpZXMgYXJlIHNpbmd1bGFyLCBidXQgb3VyIGRlc3RpbnkgaXMgc2hhcmVkLCBhbmQgYSBuZXcgZGF3biBvZiBBbWVyaWNhbiBsZWFkZXJzaGlwIGlzIGF0IGhhbmQuIFRvIHRob3NlIHdobyB3b3VsZCB0ZWFyIHRoaXMgd29ybGQgZG93biDigJMgd2Ugd2lsbCBkZWZlYXQgeW91LiBUbyB0aG9zZSB3aG8gc2VlayBwZWFjZSBhbmQgc2VjdXJpdHkg4oCTIHdlIHN1cHBvcnQgeW91LiBBbmQgdG8gYWxsIHRob3NlIHdobyBoYXZlIHdvbmRlcmVkIGlmIEFtZXJpY2HigJlzIGJlYWNvbiBzdGlsbCBidXJucyBhcyBicmlnaHQg4oCTIHRvbmlnaHQgd2UgcHJvdmVkIG9uY2UgbW9yZSB0aGF0IHRoZSB0cnVlIHN0cmVuZ3RoIG9mIG91ciBuYXRpb24gY29tZXMgbm90IGZyb20gb3VyIHRoZSBtaWdodCBvZiBvdXIgYXJtcyBvciB0aGUgc2NhbGUgb2Ygb3VyIHdlYWx0aCwgYnV0IGZyb20gdGhlIGVuZHVyaW5nIHBvd2VyIG9mIG91ciBpZGVhbHM6IGRlbW9jcmFjeSwgbGliZXJ0eSwgb3Bwb3J0dW5pdHksIGFuZCB1bnlpZWxkaW5nIGhvcGUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1Blcm1lbmFudCcsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQXVyZWxpYSBNYXJzaGFsbCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdEb25lYyBDb25zdWx0aW5nJyxcbiAgICAgICAgJ29mZmljZSc6ICdOaWNhcmFndWEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wOC8xOCcpLFxuICAgICAgICAnc2FsYXJ5JzogMjAxNjgwLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdBbmQgdG8gYWxsIHRob3NlIHdhdGNoaW5nIHRvbmlnaHQgZnJvbSBiZXlvbmQgb3VyIHNob3JlcywgZnJvbSBwYXJsaWFtZW50cyBhbmQgcGFsYWNlcyB0byB0aG9zZSB3aG8gYXJlIGh1ZGRsZWQgYXJvdW5kIHJhZGlvcyBpbiB0aGUgZm9yZ290dGVuIGNvcm5lcnMgb2Ygb3VyIHdvcmxkIOKAkyBvdXIgc3RvcmllcyBhcmUgc2luZ3VsYXIsIGJ1dCBvdXIgZGVzdGlueSBpcyBzaGFyZWQsIGFuZCBhIG5ldyBkYXduIG9mIEFtZXJpY2FuIGxlYWRlcnNoaXAgaXMgYXQgaGFuZC4gVG8gdGhvc2Ugd2hvIHdvdWxkIHRlYXIgdGhpcyB3b3JsZCBkb3duIOKAkyB3ZSB3aWxsIGRlZmVhdCB5b3UuIFRvIHRob3NlIHdobyBzZWVrIHBlYWNlIGFuZCBzZWN1cml0eSDigJMgd2Ugc3VwcG9ydCB5b3UuIEFuZCB0byBhbGwgdGhvc2Ugd2hvIGhhdmUgd29uZGVyZWQgaWYgQW1lcmljYeKAmXMgYmVhY29uIHN0aWxsIGJ1cm5zIGFzIGJyaWdodCDigJMgdG9uaWdodCB3ZSBwcm92ZWQgb25jZSBtb3JlIHRoYXQgdGhlIHRydWUgc3RyZW5ndGggb2Ygb3VyIG5hdGlvbiBjb21lcyBub3QgZnJvbSBvdXIgdGhlIG1pZ2h0IG9mIG91ciBhcm1zIG9yIHRoZSBzY2FsZSBvZiBvdXIgd2VhbHRoLCBidXQgZnJvbSB0aGUgZW5kdXJpbmcgcG93ZXIgb2Ygb3VyIGlkZWFsczogZGVtb2NyYWN5LCBsaWJlcnR5LCBvcHBvcnR1bml0eSwgYW5kIHVueWllbGRpbmcgaG9wZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnUGVybWVuYW50JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdSb3NlIENhcnRlcicsXG4gICAgICAgICdwb3NpdGlvbic6ICdFbmltIENvbnNlcXVhdCBQdXJ1cyBJbmR1c3RyaWVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdNb3JvY2NvJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDMvMDYnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDIyMDE4NyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydQZXJtZW5hbnQnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0RlbnRvbiBBdGtpbnMnLFxuICAgICAgICAncG9zaXRpb24nOiAnTm9uIFZlc3RpYnVsdW0gUEMnLFxuICAgICAgICAnb2ZmaWNlJzogJ01hbGknLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNC8xOScpLFxuICAgICAgICAnc2FsYXJ5JzogMzI0NTg4LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1Blcm1lbmFudCcsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnR2VybWFpbmUgT3Nib3JuJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1RyaXN0aXF1ZSBBbGlxdWV0IFBDJyxcbiAgICAgICAgJ29mZmljZSc6ICdMZXNvdGhvJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDEvMTknKSxcbiAgICAgICAgJ3NhbGFyeSc6IDM1MTEwOCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ05lbGwgQnV0bGVyJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1NpdCBBbWV0IERhcGlidXMgSW5kdXN0cmllcycsXG4gICAgICAgICdvZmZpY2UnOiAnQ3ViYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAxLzA2JyksXG4gICAgICAgICdzYWxhcnknOiAyMzAwNzIsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ01hcmtldGluZyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdCcmVudCBTdGVpbicsXG4gICAgICAgICdwb3NpdGlvbic6ICdFdSBBdWd1ZSBQb3J0dGl0b3IgTExQJyxcbiAgICAgICAgJ29mZmljZSc6ICdDeXBydXMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8xMS8wMicpLFxuICAgICAgICAnc2FsYXJ5JzogODUzNDEzLFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ01hcmtldGluZyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdBbGV4YW5kcmEgU2hhdycsXG4gICAgICAgICdwb3NpdGlvbic6ICdBZW5lYW4gR3JhdmlkYSBMaW1pdGVkJyxcbiAgICAgICAgJ29mZmljZSc6ICdVcnVndWF5JyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDUvMTYnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDQwMTk3MCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBcmNoaXZlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdNYXJrZXRpbmcnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnVmVyb25pY2EgQWxsaXNvbicsXG4gICAgICAgICdwb3NpdGlvbic6ICdBbGlxdWV0IERpYW0gU2VkIEluc3RpdHV0ZScsXG4gICAgICAgICdvZmZpY2UnOiAnU2Ftb2EnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNS8xNycpLFxuICAgICAgICAnc2FsYXJ5JzogNzkxOTMsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnTWFya2V0aW5nJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0thdGVseW4gR2FtYmxlJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1NlZCBBc3NvY2lhdGVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdNYXVyaXRpdXMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMy8yMCcpLFxuICAgICAgICAnc2FsYXJ5JzogNDg0Mjk5LFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ01hcmtldGluZyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdKYW1lcyBHcmVlcicsXG4gICAgICAgICdwb3NpdGlvbic6ICdBIER1aSBJbmNvcnBvcmF0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ05vcndheScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAyLzIxJyksXG4gICAgICAgICdzYWxhcnknOiAzMzM1MTgsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb250cmFjdG9yJywgJ01hcmtldGluZyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdDYWluIFZhc3F1ZXonLFxuICAgICAgICAncG9zaXRpb24nOiAnTnVsbGEgRmFjaWxpc2lzIFN1c3BlbmRpc3NlIEluc3RpdHV0ZScsXG4gICAgICAgICdvZmZpY2UnOiAnQ2hpbmEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNS8yNycpLFxuICAgICAgICAnc2FsYXJ5JzogNjUxNzYxLFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29udHJhY3RvcicsICdNYXJrZXRpbmcnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnU2hhZWxlaWdoIEJhcnInLFxuICAgICAgICAncG9zaXRpb24nOiAnRWxlaWZlbmQgQ3JhcyBJbnN0aXR1dGUnLFxuICAgICAgICAnb2ZmaWNlJzogJ0doYW5hJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDQvMDEnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDYyNzA5NSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBcmNoaXZlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbnRyYWN0b3InLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0Jha2VyIE1ja2F5JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1V0IFNhZ2l0dGlzIEFzc29jaWF0ZXMnLFxuICAgICAgICAnb2ZmaWNlJzogJ0lzbGUgb2YgTWFuJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDEvMTInKSxcbiAgICAgICAgJ3NhbGFyeSc6IDc0MjI0NyxcbiAgICAgICAgJ3N0YXR1cyc6ICdOZXcgTGVhZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbnRyYWN0b3InLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0pheW1lIFBhY2UnLFxuICAgICAgICAncG9zaXRpb24nOiAnQ3JhcyBFdSBUZWxsdXMgQXNzb2NpYXRlcycsXG4gICAgICAgICdvZmZpY2UnOiAnQm91dmV0IElzbGFuZCcsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA4LzEyJyksXG4gICAgICAgICdzYWxhcnknOiA1OTE1ODgsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb250cmFjdG9yJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdSZXViZW4gQWxiZXJ0JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0xvYm9ydGlzIEluc3RpdHV0ZScsXG4gICAgICAgICdvZmZpY2UnOiAnWmFtYmlhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDQvMDQnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDc5MTQwOCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb250cmFjdG9yJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdJZG9sYSBCdXJucycsXG4gICAgICAgICdwb3NpdGlvbic6ICdOb24gSW5kdXN0cmllcycsXG4gICAgICAgICdvZmZpY2UnOiAnTXlhbm1hcicsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA2LzI0JyksXG4gICAgICAgICdzYWxhcnknOiAxNDI5MDYsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29udHJhY3RvcicsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTGF1cmEgTWFjaWFzJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1BoYXNlbGx1cyBJbmMuJyxcbiAgICAgICAgJ29mZmljZSc6ICdNYXVyaXRhbmlhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMTEvMjEnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDIyNjU5MSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ05pY2hvbGUgU2FsYXMnLFxuICAgICAgICAncG9zaXRpb24nOiAnRHVpcyBQQycsXG4gICAgICAgICdvZmZpY2UnOiAnTWFkYWdhc2NhcicsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAxLzE4JyksXG4gICAgICAgICdzYWxhcnknOiAyMzQxOTYsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0kgd2FudCB0byB0aGFuayBteSBwYXJ0bmVyIGluIHRoaXMgam91cm5leSwgYSBtYW4gd2hvIGNhbXBhaWduZWQgZnJvbSBoaXMgaGVhcnQgYW5kIHNwb2tlIGZvciB0aGUgbWVuIGFuZCB3b21lbiBoZSBncmV3IHVwIHdpdGggb24gdGhlIHN0cmVldHMgb2YgU2NyYW50b24gYW5kIHJvZGUgd2l0aCBvbiB0aGF0IHRyYWluIGhvbWUgdG8gRGVsYXdhcmUsIHRoZSBWaWNlIFByZXNpZGVudC1lbGVjdCBvZiB0aGUgVW5pdGVkIFN0YXRlcywgSm9lIEJpZGVuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0h1bnRlciBXYWx0ZXInLFxuICAgICAgICAncG9zaXRpb24nOiAnVWxsYW1jb3JwZXIgRHVpcyBDdXJzdXMgRm91bmRhdGlvbicsXG4gICAgICAgICdvZmZpY2UnOiAnQnJhemlsJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDIvMjgnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDY1NTA1MixcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSSB3YW50IHRvIHRoYW5rIG15IHBhcnRuZXIgaW4gdGhpcyBqb3VybmV5LCBhIG1hbiB3aG8gY2FtcGFpZ25lZCBmcm9tIGhpcyBoZWFydCBhbmQgc3Bva2UgZm9yIHRoZSBtZW4gYW5kIHdvbWVuIGhlIGdyZXcgdXAgd2l0aCBvbiB0aGUgc3RyZWV0cyBvZiBTY3JhbnRvbiBhbmQgcm9kZSB3aXRoIG9uIHRoYXQgdHJhaW4gaG9tZSB0byBEZWxhd2FyZSwgdGhlIFZpY2UgUHJlc2lkZW50LWVsZWN0IG9mIHRoZSBVbml0ZWQgU3RhdGVzLCBKb2UgQmlkZW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQXNoZXIgUmljaCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdNYXVyaXMgSXBzdW0gTExQJyxcbiAgICAgICAgJ29mZmljZSc6ICdQYXJhZ3VheScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA4LzA4JyksXG4gICAgICAgICdzYWxhcnknOiAyMjI5NDYsXG4gICAgICAgICdzdGF0dXMnOiAnQXJjaGl2ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSSB3YW50IHRvIHRoYW5rIG15IHBhcnRuZXIgaW4gdGhpcyBqb3VybmV5LCBhIG1hbiB3aG8gY2FtcGFpZ25lZCBmcm9tIGhpcyBoZWFydCBhbmQgc3Bva2UgZm9yIHRoZSBtZW4gYW5kIHdvbWVuIGhlIGdyZXcgdXAgd2l0aCBvbiB0aGUgc3RyZWV0cyBvZiBTY3JhbnRvbiBhbmQgcm9kZSB3aXRoIG9uIHRoYXQgdHJhaW4gaG9tZSB0byBEZWxhd2FyZSwgdGhlIFZpY2UgUHJlc2lkZW50LWVsZWN0IG9mIHRoZSBVbml0ZWQgU3RhdGVzLCBKb2UgQmlkZW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQW5nZWxhIENhcmxzb24nLFxuICAgICAgICAncG9zaXRpb24nOiAnRG9uZWMgVGVtcG9yIEluc3RpdHV0ZScsXG4gICAgICAgICdvZmZpY2UnOiAnUGFwdWEgTmV3IEd1aW5lYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAyLzEyJyksXG4gICAgICAgICdzYWxhcnknOiA1NjIxOTQsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0kgd2FudCB0byB0aGFuayBteSBwYXJ0bmVyIGluIHRoaXMgam91cm5leSwgYSBtYW4gd2hvIGNhbXBhaWduZWQgZnJvbSBoaXMgaGVhcnQgYW5kIHNwb2tlIGZvciB0aGUgbWVuIGFuZCB3b21lbiBoZSBncmV3IHVwIHdpdGggb24gdGhlIHN0cmVldHMgb2YgU2NyYW50b24gYW5kIHJvZGUgd2l0aCBvbiB0aGF0IHRyYWluIGhvbWUgdG8gRGVsYXdhcmUsIHRoZSBWaWNlIFByZXNpZGVudC1lbGVjdCBvZiB0aGUgVW5pdGVkIFN0YXRlcywgSm9lIEJpZGVuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0phbWVzIERvcnNleScsXG4gICAgICAgICdwb3NpdGlvbic6ICdJcHN1bSBMZW8gQXNzb2NpYXRlcycsXG4gICAgICAgICdvZmZpY2UnOiAnQ29uZ28gKEJyYXp6YXZpbGxlKScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAxLzEwJyksXG4gICAgICAgICdzYWxhcnknOiA2Mjk5MjUsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0kgd2FudCB0byB0aGFuayBteSBwYXJ0bmVyIGluIHRoaXMgam91cm5leSwgYSBtYW4gd2hvIGNhbXBhaWduZWQgZnJvbSBoaXMgaGVhcnQgYW5kIHNwb2tlIGZvciB0aGUgbWVuIGFuZCB3b21lbiBoZSBncmV3IHVwIHdpdGggb24gdGhlIHN0cmVldHMgb2YgU2NyYW50b24gYW5kIHJvZGUgd2l0aCBvbiB0aGF0IHRyYWluIGhvbWUgdG8gRGVsYXdhcmUsIHRoZSBWaWNlIFByZXNpZGVudC1lbGVjdCBvZiB0aGUgVW5pdGVkIFN0YXRlcywgSm9lIEJpZGVuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1dlc2xleSBDb2JiJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ051bmMgRXN0IEluY29ycG9yYXRlZCcsXG4gICAgICAgICdvZmZpY2UnOiAnQXVzdHJhbGlhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDEvMzAnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDM0MzQ3NixcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSSB3YW50IHRvIHRoYW5rIG15IHBhcnRuZXIgaW4gdGhpcyBqb3VybmV5LCBhIG1hbiB3aG8gY2FtcGFpZ25lZCBmcm9tIGhpcyBoZWFydCBhbmQgc3Bva2UgZm9yIHRoZSBtZW4gYW5kIHdvbWVuIGhlIGdyZXcgdXAgd2l0aCBvbiB0aGUgc3RyZWV0cyBvZiBTY3JhbnRvbiBhbmQgcm9kZSB3aXRoIG9uIHRoYXQgdHJhaW4gaG9tZSB0byBEZWxhd2FyZSwgdGhlIFZpY2UgUHJlc2lkZW50LWVsZWN0IG9mIHRoZSBVbml0ZWQgU3RhdGVzLCBKb2UgQmlkZW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdNZWdoYW4gU3RlcGhlbnMnLFxuICAgICAgICAncG9zaXRpb24nOiAnSW50ZXJkdW0gUEMnLFxuICAgICAgICAnb2ZmaWNlJzogJ1R1cmtleScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzEwLzExJyksXG4gICAgICAgICdzYWxhcnknOiA0NjkzMDUsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0kgd2FudCB0byB0aGFuayBteSBwYXJ0bmVyIGluIHRoaXMgam91cm5leSwgYSBtYW4gd2hvIGNhbXBhaWduZWQgZnJvbSBoaXMgaGVhcnQgYW5kIHNwb2tlIGZvciB0aGUgbWVuIGFuZCB3b21lbiBoZSBncmV3IHVwIHdpdGggb24gdGhlIHN0cmVldHMgb2YgU2NyYW50b24gYW5kIHJvZGUgd2l0aCBvbiB0aGF0IHRyYWluIGhvbWUgdG8gRGVsYXdhcmUsIHRoZSBWaWNlIFByZXNpZGVudC1lbGVjdCBvZiB0aGUgVW5pdGVkIFN0YXRlcywgSm9lIEJpZGVuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQmVydGhhIEhlcnJlcmEnLFxuICAgICAgICAncG9zaXRpb24nOiAnQW1ldCBMaW1pdGVkJyxcbiAgICAgICAgJ29mZmljZSc6ICdLZW55YScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzExLzIyJyksXG4gICAgICAgICdzYWxhcnknOiA1NjYwNixcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSSB3YW50IHRvIHRoYW5rIG15IHBhcnRuZXIgaW4gdGhpcyBqb3VybmV5LCBhIG1hbiB3aG8gY2FtcGFpZ25lZCBmcm9tIGhpcyBoZWFydCBhbmQgc3Bva2UgZm9yIHRoZSBtZW4gYW5kIHdvbWVuIGhlIGdyZXcgdXAgd2l0aCBvbiB0aGUgc3RyZWV0cyBvZiBTY3JhbnRvbiBhbmQgcm9kZSB3aXRoIG9uIHRoYXQgdHJhaW4gaG9tZSB0byBEZWxhd2FyZSwgdGhlIFZpY2UgUHJlc2lkZW50LWVsZWN0IG9mIHRoZSBVbml0ZWQgU3RhdGVzLCBKb2UgQmlkZW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdLYXJpbmEgS2V5JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1F1aXNxdWUgVmFyaXVzIE5hbSBDb21wYW55JyxcbiAgICAgICAgJ29mZmljZSc6ICdGcmFuY2UnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMy8yNicpLFxuICAgICAgICAnc2FsYXJ5JzogMzE0MjYwLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdJIHdhbnQgdG8gdGhhbmsgbXkgcGFydG5lciBpbiB0aGlzIGpvdXJuZXksIGEgbWFuIHdobyBjYW1wYWlnbmVkIGZyb20gaGlzIGhlYXJ0IGFuZCBzcG9rZSBmb3IgdGhlIG1lbiBhbmQgd29tZW4gaGUgZ3JldyB1cCB3aXRoIG9uIHRoZSBzdHJlZXRzIG9mIFNjcmFudG9uIGFuZCByb2RlIHdpdGggb24gdGhhdCB0cmFpbiBob21lIHRvIERlbGF3YXJlLCB0aGUgVmljZSBQcmVzaWRlbnQtZWxlY3Qgb2YgdGhlIFVuaXRlZCBTdGF0ZXMsIEpvZSBCaWRlbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29tbXVuaWNhdGlvbnMnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1VyaWVsIENhcnNvbicsXG4gICAgICAgICdwb3NpdGlvbic6ICdQZW5hdGlidXMgUEMnLFxuICAgICAgICAnb2ZmaWNlJzogJ1ZlbmV6dWVsYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAxLzA3JyksXG4gICAgICAgICdzYWxhcnknOiAxMDYzMzUsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29tbXVuaWNhdGlvbnMnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ01pcmEgQmFpcmQnLFxuICAgICAgICAncG9zaXRpb24nOiAnRmVsaXMgT3JjaSBQQycsXG4gICAgICAgICdvZmZpY2UnOiAnTml1ZScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA4LzI1JyksXG4gICAgICAgICdzYWxhcnknOiA1MTU2NzEsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29tbXVuaWNhdGlvbnMnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1Vyc3VsYSBQYXJyaXNoJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0FjIENvcnBvcmF0aW9uJyxcbiAgICAgICAgJ29mZmljZSc6ICdNYWNhbycsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA2LzMwJyksXG4gICAgICAgICdzYWxhcnknOiA3MjI5NSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnSm9zZXBoaW5lIFN5a2VzJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0JsYW5kaXQgQ29uZ3VlIExpbWl0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ0hvbHkgU2VlIChWYXRpY2FuIENpdHkgU3RhdGUpJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMTIvMjInKSxcbiAgICAgICAgJ3NhbGFyeSc6IDY5NDY1NixcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTWFnZ2llIFNpbXMnLFxuICAgICAgICAncG9zaXRpb24nOiAnVnVscHV0YXRlIFBvc3VlcmUgSW5kdXN0cmllcycsXG4gICAgICAgICdvZmZpY2UnOiAnU3VkYW4nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8xMS8yMicpLFxuICAgICAgICAnc2FsYXJ5JzogMzYzNzQzLFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29tbXVuaWNhdGlvbnMnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1JvZ2FuIEZ1ZW50ZXMnLFxuICAgICAgICAncG9zaXRpb24nOiAnVmVzdGlidWx1bSBBY2N1bXNhbiBOZXF1ZSBDb21wYW55JyxcbiAgICAgICAgJ29mZmljZSc6ICdKZXJzZXknLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNy8yOScpLFxuICAgICAgICAnc2FsYXJ5JzogNjA2MDA0LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdNYXlhIEhhbmV5JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0FjIEZvdW5kYXRpb24nLFxuICAgICAgICAnb2ZmaWNlJzogJ0ZhbGtsYW5kIElzbGFuZHMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wOS8wMycpLFxuICAgICAgICAnc2FsYXJ5JzogNzQ1NTAwLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdBcXVpbGEgQmF0dGxlJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1NvY2lpcyBOYXRvcXVlIFBlbmF0aWJ1cyBGb3VuZGF0aW9uJyxcbiAgICAgICAgJ29mZmljZSc6ICdBemVyYmFpamFuJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDMvMDYnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDU4MjI2NSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQ29ubm9yIENvbGVtYW4nLFxuICAgICAgICAncG9zaXRpb24nOiAnT3JjaSBMYWN1cyBWZXN0aWJ1bHVtIEZvdW5kYXRpb24nLFxuICAgICAgICAnb2ZmaWNlJzogJ0Nyb2F0aWEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8xMC8yMScpLFxuICAgICAgICAnc2FsYXJ5JzogNDE2OTU4LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdDaGFyaXR5IFRob21hcycsXG4gICAgICAgICdwb3NpdGlvbic6ICdDb252YWxsaXMgTGlndWxhIERvbmVjIEluYy4nLFxuICAgICAgICAnb2ZmaWNlJzogJ0JlbmluJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDcvMTInKSxcbiAgICAgICAgJ3NhbGFyeSc6IDU0MDk5OSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQmx5dGhlIFBvd2VycycsXG4gICAgICAgICdwb3NpdGlvbic6ICdBbWV0IE9yY2kgTGltaXRlZCcsXG4gICAgICAgICdvZmZpY2UnOiAnRmFsa2xhbmQgSXNsYW5kcycsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAxLzIzJyksXG4gICAgICAgICdzYWxhcnknOiA0ODAwNjcsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29tbXVuaWNhdGlvbnMnLCAnSHVtYW4gUmVzb3VyY2VzJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0FkcmlhIEJhdHRsZScsXG4gICAgICAgICdwb3NpdGlvbic6ICdPcm5hcmUgTGVjdHVzIEluY29ycG9yYXRlZCcsXG4gICAgICAgICdvZmZpY2UnOiAnQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5JyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDUvMjgnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDI1NzkzNyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdIdW1hbiBSZXNvdXJjZXMnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTWVsYW5pZSBNY2ludHlyZScsXG4gICAgICAgICdwb3NpdGlvbic6ICdOdW5jIENvcnAuJyxcbiAgICAgICAgJ29mZmljZSc6ICdNb25nb2xpYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAxLzA2JyksXG4gICAgICAgICdzYWxhcnknOiAzNTk3MzcsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29tbXVuaWNhdGlvbnMnLCAnSHVtYW4gUmVzb3VyY2VzJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0tlZWx5IEJhdWVyJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ05lYyBUZW1wdXMgSW5zdGl0dXRlJyxcbiAgICAgICAgJ29mZmljZSc6ICdTb21hbGlhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDMvMDknKSxcbiAgICAgICAgJ3NhbGFyeSc6IDk5NzE4LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0h1bWFuIFJlc291cmNlcyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdOb2VsYW5pIFN0cm9uZycsXG4gICAgICAgICdwb3NpdGlvbic6ICdOZWMgTExQJyxcbiAgICAgICAgJ29mZmljZSc6ICdJcmFuJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDgvMjQnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDQ4MDcxOCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdIdW1hbiBSZXNvdXJjZXMnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnSmVhbmV0dGUgSGVuZGVyc29uJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0V1IEVsaXQgTnVsbGEgQ29ycG9yYXRpb24nLFxuICAgICAgICAnb2ZmaWNlJzogJ0l0YWx5JyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDYvMTknKSxcbiAgICAgICAgJ3NhbGFyeSc6IDI1Mzc3MixcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0NhbmRhY2UgSHViZXInLFxuICAgICAgICAncG9zaXRpb24nOiAnU2VkIEluc3RpdHV0ZScsXG4gICAgICAgICdvZmZpY2UnOiAnVWdhbmRhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDYvMTYnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDM4ODg3OSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0JldGhhbnkgUG90dGVyJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1ZpdmFtdXMgTmliaCBEb2xvciBJbmNvcnBvcmF0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ1B1ZXJ0byBSaWNvJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMTEvMTInKSxcbiAgICAgICAgJ3NhbGFyeSc6IDc0NzMxMCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1dob29waSBCdXJrcycsXG4gICAgICAgICdwb3NpdGlvbic6ICdKdXN0byBJbmMuJyxcbiAgICAgICAgJ29mZmljZSc6ICdGaWppJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDkvMjQnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDgwMzAzNyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdTaGVpbGEgTG9uZycsXG4gICAgICAgICdwb3NpdGlvbic6ICdEaWFtIEFzc29jaWF0ZXMnLFxuICAgICAgICAnb2ZmaWNlJzogJ1NhbyBUb21lIGFuZCBQcmluY2lwZScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzEyLzIxJyksXG4gICAgICAgICdzYWxhcnknOiA2NzQzNzksXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnU29ueWEgQ2h1cmNoJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0xhb3JlZXQgSW5zdGl0dXRlJyxcbiAgICAgICAgJ29mZmljZSc6ICdHcmVuYWRhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDYvMDMnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDYyNTE0NyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdTaGFpbmUgRm9yYmVzJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0V1IEFyY3UgTExQJyxcbiAgICAgICAgJ29mZmljZSc6ICdDeXBydXMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMS8xOCcpLFxuICAgICAgICAnc2FsYXJ5JzogMjA4MTAwLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0FsZXhhbmRyYSBQYXRyaWNrJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0xpZ3VsYSBEb25lYyBJbmMuJyxcbiAgICAgICAgJ29mZmljZSc6ICdWaWV0IE5hbScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA0LzA5JyksXG4gICAgICAgICdzYWxhcnknOiAxMDQwNjMsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnUGF0aWVuY2UgVmluY2VudCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdTZW0gTW9sZXN0aWUgQXNzb2NpYXRlcycsXG4gICAgICAgICdvZmZpY2UnOiAnUGhpbGlwcGluZXMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNy8wNCcpLFxuICAgICAgICAnc2FsYXJ5JzogNjczNTU2LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0V2ZWx5biBTbWl0aCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdGdXNjZSBJbmR1c3RyaWVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdUb2dvJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDgvMTUnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDczNzI4NCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdLaWVyYW4gR29uemFsZXonLFxuICAgICAgICAncG9zaXRpb24nOiAnTm9uIENvcnAuJyxcbiAgICAgICAgJ29mZmljZSc6ICdFcXVhdG9yaWFsIEd1aW5lYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA4LzI0JyksXG4gICAgICAgICdzYWxhcnknOiA5MDE5NSxcbiAgICAgICAgJ3N0YXR1cyc6ICdOZXcgTGVhZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ01vbGx5IE9uZWlsJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ05vbiBEdWkgQ29uc3VsdGluZycsXG4gICAgICAgICdvZmZpY2UnOiAnQmVsaXplJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMTAvMjgnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDE0MDc2NyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBcmNoaXZlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ05pZ2VsIERhdmVucG9ydCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdVbGxhbWNvcnBlciBWZWxpdCBJbiBJbmR1c3RyaWVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdWYW51YXR1JyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDMvMTYnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDcwNTM2LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1Rob3IgWW91bmcnLFxuICAgICAgICAncG9zaXRpb24nOiAnTWFsZXN1YWRhIENvbnN1bHRpbmcnLFxuICAgICAgICAnb2ZmaWNlJzogJ0ZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllcycsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAxLzI4JyksXG4gICAgICAgICdzYWxhcnknOiA3NTUwMSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdGaW5uIERlbGFjcnV6JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0xvcmVtIEluZHVzdHJpZXMnLFxuICAgICAgICAnb2ZmaWNlJzogJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMTIvMTEnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDc1NDk2NyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBcmNoaXZlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0xhbmUgSGVuZGVyc29uJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1BlZGUgRm91bmRhdGlvbicsXG4gICAgICAgICdvZmZpY2UnOiAnS2F6YWtoc3RhbicsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA3LzAyJyksXG4gICAgICAgICdzYWxhcnknOiA4NDIwNTAsXG4gICAgICAgICdzdGF0dXMnOiAnQXJjaGl2ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdTaGVhIFBvdHRlcicsXG4gICAgICAgICdwb3NpdGlvbic6ICdDdXJhYml0dXIgTGltaXRlZCcsXG4gICAgICAgICdvZmZpY2UnOiAnVGltb3ItTGVzdGUnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNS8wNycpLFxuICAgICAgICAnc2FsYXJ5JzogMjYzNjI5LFxuICAgICAgICAnc3RhdHVzJzogJ0FyY2hpdmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0xhYm9yZSBzaXQgbnVsbGEgYW1ldCBlbmltIHJlcHJlaGVuZGVyaXQgZXNzZSBsYWJvcnVtIExvcmVtIHF1aXMgaW4gZXUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQnJ5bm4gWWFuZycsXG4gICAgICAgICdwb3NpdGlvbic6ICdVdCBMaW1pdGVkJyxcbiAgICAgICAgJ29mZmljZSc6ICdNYXlvdHRlJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDEvMTcnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDc0MjkyLFxuICAgICAgICAnc3RhdHVzJzogJ0FyY2hpdmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0xhYm9yZSBzaXQgbnVsbGEgYW1ldCBlbmltIHJlcHJlaGVuZGVyaXQgZXNzZSBsYWJvcnVtIExvcmVtIHF1aXMgaW4gZXUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnS3lsYW4gRnVlbnRlcycsXG4gICAgICAgICdwb3NpdGlvbic6ICdTYXBpZW4gQWVuZWFuIEFzc29jaWF0ZXMnLFxuICAgICAgICAnb2ZmaWNlJzogJ0JyYXppbCcsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzEyLzI4JyksXG4gICAgICAgICdzYWxhcnknOiAxMDg2MzIsXG4gICAgICAgICdzdGF0dXMnOiAnQXJjaGl2ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnTGFib3JlIHNpdCBudWxsYSBhbWV0IGVuaW0gcmVwcmVoZW5kZXJpdCBlc3NlIGxhYm9ydW0gTG9yZW0gcXVpcyBpbiBldS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdMaW9uZWwgTWNicmlkZScsXG4gICAgICAgICdwb3NpdGlvbic6ICdJcHN1bSBQQycsXG4gICAgICAgICdvZmZpY2UnOiAnUG9ydHVnYWwnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNy8xMScpLFxuICAgICAgICAnc2FsYXJ5JzogMzQyNDQsXG4gICAgICAgICdzdGF0dXMnOiAnQXJjaGl2ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnTGFib3JlIHNpdCBudWxsYSBhbWV0IGVuaW0gcmVwcmVoZW5kZXJpdCBlc3NlIGxhYm9ydW0gTG9yZW0gcXVpcyBpbiBldS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdQYXVsIEx1Y2FzJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0VnZXQgTExQJyxcbiAgICAgICAgJ29mZmljZSc6ICdOaWNhcmFndWEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wOS8zMCcpLFxuICAgICAgICAnc2FsYXJ5JzogNjkwODM0LFxuICAgICAgICAnc3RhdHVzJzogJ0FyY2hpdmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0xhYm9yZSBzaXQgbnVsbGEgYW1ldCBlbmltIHJlcHJlaGVuZGVyaXQgZXNzZSBsYWJvcnVtIExvcmVtIHF1aXMgaW4gZXUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTGFyZWluYSBXaWxsaWFtc29uJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0ltcGVyZGlldCBVbGxhbWNvcnBlciBMdGQnLFxuICAgICAgICAnb2ZmaWNlJzogJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMTIvMDEnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDYwMzQ5OCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBcmNoaXZlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdMYWJvcmUgc2l0IG51bGxhIGFtZXQgZW5pbSByZXByZWhlbmRlcml0IGVzc2UgbGFib3J1bSBMb3JlbSBxdWlzIGluIGV1LicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0FteSBBY2V2ZWRvJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0lkIEluc3RpdHV0ZScsXG4gICAgICAgICdvZmZpY2UnOiAnQ29vayBJc2xhbmRzJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDIvMDQnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDEyNTE2NSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBcmNoaXZlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdMYWJvcmUgc2l0IG51bGxhIGFtZXQgZW5pbSByZXByZWhlbmRlcml0IGVzc2UgbGFib3J1bSBMb3JlbSBxdWlzIGluIGV1LicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ05vbWxhbmdhIFNpbHZhJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0VnZXQgTExDJyxcbiAgICAgICAgJ29mZmljZSc6ICdCZWxpemUnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wMS8zMScpLFxuICAgICAgICAnc2FsYXJ5JzogMjY4NTA5LFxuICAgICAgICAnc3RhdHVzJzogJ0FyY2hpdmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0xhYm9yZSBzaXQgbnVsbGEgYW1ldCBlbmltIHJlcHJlaGVuZGVyaXQgZXNzZSBsYWJvcnVtIExvcmVtIHF1aXMgaW4gZXUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQW1lbmEgU3RvbmUnLFxuICAgICAgICAncG9zaXRpb24nOiAnRW5pbSBJbmNvcnBvcmF0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ0d1aW5lYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA5LzIzJyksXG4gICAgICAgICdzYWxhcnknOiAyMTQzODEsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnRGFuaWVsbGUgQ29mZmV5JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0ZldWdpYXQgUGxhY2VyYXQgQ29ycC4nLFxuICAgICAgICAnb2ZmaWNlJzogJ1NhbyBUb21lIGFuZCBQcmluY2lwZScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA2LzE3JyksXG4gICAgICAgICdzYWxhcnknOiAxMzc0MjMsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdCdWZmeSBSdXNzZWxsJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0xhY3VzIFF1aXNxdWUgTHRkJyxcbiAgICAgICAgJ29mZmljZSc6ICdFY3VhZG9yJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMTAvMTcnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDYxMjE4NCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydPZmZpY2UgU2tpbGxzJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0thaXRsaW4gTGFtYicsXG4gICAgICAgICdwb3NpdGlvbic6ICdNYWxlc3VhZGEgRnJpbmdpbGxhIEVzdCBBc3NvY2lhdGVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdBbGdlcmlhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMTAvMTgnKSxcbiAgICAgICAgJ3NhbGFyeSc6IDMyNzM2NyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydPZmZpY2UgU2tpbGxzJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0xlaWxhbmkgWWF0ZXMnLFxuICAgICAgICAncG9zaXRpb24nOiAnTXVzIFByb2luIExMQycsXG4gICAgICAgICdvZmZpY2UnOiAnU291dGggU3VkYW4nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8wNS8yNycpLFxuICAgICAgICAnc2FsYXJ5JzogNzQzNDkzLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ09mZmljZSBTa2lsbHMnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnSmVtaW1hIE1vb24nLFxuICAgICAgICAncG9zaXRpb24nOiAnUGhhc2VsbHVzIENvcnAuJyxcbiAgICAgICAgJ29mZmljZSc6ICdTb3V0aCBHZW9yZ2lhIGFuZCBUaGUgU291dGggU2FuZHdpY2ggSXNsYW5kcycsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzA1LzIxJyksXG4gICAgICAgICdzYWxhcnknOiA0OTYwNjcsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnT2ZmaWNlIFNraWxscyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdIaXJva28gU2Nod2FydHonLFxuICAgICAgICAncG9zaXRpb24nOiAnTmVxdWUgSW5zdGl0dXRlJyxcbiAgICAgICAgJ29mZmljZSc6ICdTYWludCBWaW5jZW50IGFuZCBUaGUgR3JlbmFkaW5lcycsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAzLzEzJyksXG4gICAgICAgICdzYWxhcnknOiAxNzg3ODIsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnT2ZmaWNlIFNraWxscyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdOYXRoYW5pZWwgSmVuc2VuJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ01pIFRlbXBvciBMaW1pdGVkJyxcbiAgICAgICAgJ29mZmljZSc6ICdEb21pbmljYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzEyLzA1JyksXG4gICAgICAgICdzYWxhcnknOiAzNzQ0MSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydPZmZpY2UgU2tpbGxzJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1NpbGFzIFN3ZWVuZXknLFxuICAgICAgICAncG9zaXRpb24nOiAnVWx0cmljZXMgSW5zdGl0dXRlJyxcbiAgICAgICAgJ29mZmljZSc6ICdUdXJrbWVuaXN0YW4nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8xMS8xMycpLFxuICAgICAgICAnc2FsYXJ5JzogMTUyOTgwLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ09mZmljZSBTa2lsbHMnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnSmVybWFpbmUgQmFycnknLFxuICAgICAgICAncG9zaXRpb24nOiAnRGFwaWJ1cyBDb3Jwb3JhdGlvbicsXG4gICAgICAgICdvZmZpY2UnOiAnVXpiZWtpc3RhbicsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6IG5ldyBEYXRlKCcyMDE2LzAzLzA2JyksXG4gICAgICAgICdzYWxhcnknOiA0MDk0NjMsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnT2ZmaWNlIFNraWxscyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdUYXRpYW5hIE5pY2hvbHMnLFxuICAgICAgICAncG9zaXRpb24nOiAnTmVjIERpYW0gSW5kdXN0cmllcycsXG4gICAgICAgICdvZmZpY2UnOiAnQ29vayBJc2xhbmRzJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogbmV3IERhdGUoJzIwMTYvMDUvMjInKSxcbiAgICAgICAgJ3NhbGFyeSc6IDUxMTU1LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ09mZmljZSBTa2lsbHMnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnUmFtYSBXYWxsZXInLFxuICAgICAgICAncG9zaXRpb24nOiAnU2VtIFBlbGxlbnRlc3F1ZSBMTEMnLFxuICAgICAgICAnb2ZmaWNlJzogJ0FuZG9ycmEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiBuZXcgRGF0ZSgnMjAxNi8xMi8wMScpLFxuICAgICAgICAnc2FsYXJ5JzogMjIzMjI3LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ09mZmljZSBTa2lsbHMnXVxuICAgIH1dO1xuIl19

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TableDemo = exports.ExtraDetails = exports.StatusCell = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class, _dec2, _class2, _dec3, _class3;
	
	var _core = __webpack_require__(1);
	
	var _common = __webpack_require__(5);
	
	var _novoElements = __webpack_require__(15);
	
	var _TableExtras = __webpack_require__(261);
	
	var _TableData = __webpack_require__(1133);
	
	var _CodeSnippet = __webpack_require__(1132);
	
	var _TableDemo = __webpack_require__(1192);
	
	var _TableDemo2 = _interopRequireDefault(_TableDemo);
	
	var _DetailsTableDemo = __webpack_require__(1190);
	
	var _DetailsTableDemo2 = _interopRequireDefault(_DetailsTableDemo);
	
	var _SelectAllTableDemo = __webpack_require__(1191);
	
	var _SelectAllTableDemo2 = _interopRequireDefault(_SelectAllTableDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var template = '\n<div class="container">\n    <h1>Table <small><a target="_blank" href="https://bullhorn.github.io/novo-elements/tree/master/src/elements/table">(source)</a></small></h1>\n    <p>Tables allow users to view date in a tabular format and perform actions such as Sorting and Filtering. Different configuration are possible for pagination or infinite scroll. Feature to be added include: Custom Item Renderers, etc...</p>\n\n    <h2>Types</h2>\n\n    <h5>Basic Table</h5>\n    <p>This is the most basic table.</p>\n    <div class="example table-demo">' + _TableDemo2.default + '</div>\n    <code-snippet [code]="TableDemoTpl"></code-snippet>\n\n    <h5>Details Table</h5>\n    <p>This has a row renderer to show a new details row that is expanded when you click on the action column.</p>\n    <div class="example table-demo">' + _DetailsTableDemo2.default + '</div>\n    <code-snippet [code]="DetailsTableDemoTpl"></code-snippet>\n    \n    <h5>Select All Table</h5>\n    <p>This has checkboxes for selection.</p>\n    <div class="example table-demo">' + _SelectAllTableDemo2.default + '</div>\n    <code-snippet [code]="SelectAllTableDemoTpl"></code-snippet>\n</div>\n';
	
	var HEADER_COLORS = ['blue', 'green', 'yellow', 'orange', 'red', 'purple'];
	
	var StatusCell = exports.StatusCell = (_dec = (0, _core.Component)({
	    selector: 'status-cell',
	    template: '\n        <div class="status-cell">\n            <i class="bhi-info"></i>\n            <label>{{ value }}</label>\n        </div>\n    '
	}), _dec(_class = function (_BaseRenderer) {
	    _inherits(StatusCell, _BaseRenderer);
	
	    function StatusCell() {
	        _classCallCheck(this, StatusCell);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(StatusCell).apply(this, arguments));
	    }
	
	    return StatusCell;
	}(_novoElements.BaseRenderer)) || _class);
	var ExtraDetails = exports.ExtraDetails = (_dec2 = (0, _core.Component)({
	    selector: 'extra-details',
	    template: '\n        <div class="extra-data">\n            <label><i class="bhi-info"></i>Description</label>\n            <p>{{ data.description }}</p>\n            <label><i class="bhi-info"></i>Categories</label>\n            <p>{{ data.categories }}</p>\n        </div>\n    '
	}), _dec2(_class2 = function (_BaseRenderer2) {
	    _inherits(ExtraDetails, _BaseRenderer2);
	
	    function ExtraDetails() {
	        _classCallCheck(this, ExtraDetails);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ExtraDetails).apply(this, arguments));
	    }
	
	    return ExtraDetails;
	}(_novoElements.BaseRenderer)) || _class2);
	var TableDemo = exports.TableDemo = (_dec3 = (0, _core.Component)({
	    selector: 'table-demo',
	    template: template,
	    directives: [_novoElements.NOVO_TABLE_ELEMENTS, _novoElements.NOVO_TABLE_EXTRA_ELEMENTS, _common.CORE_DIRECTIVES, _common.FORM_DIRECTIVES, _novoElements.NOVO_TOOLTIP_ELEMENTS, _CodeSnippet.CodeSnippet]
	}), _dec3(_class3 = function () {
	    function TableDemo() {
	        var _this3 = this;
	
	        _classCallCheck(this, TableDemo);
	
	        this.TableDemoTpl = _TableDemo2.default;
	        this.DetailsTableDemoTpl = _DetailsTableDemo2.default;
	        this.SelectAllTableDemoTpl = _SelectAllTableDemo2.default;
	
	        this.customPageOptions = [{ label: '10', value: 10 }, { label: '20', value: 20 }, { label: '30', value: 30 }, { label: '40', value: 40 }];
	
	        var columns = [{ title: 'Name', name: 'name', ordering: true, type: 'link', filtering: true }, { title: 'Position', name: 'position', ordering: true, filtering: true }, {
	            title: 'Extn.',
	            name: 'ext',
	            ordering: true,
	            renderer: function renderer(object) {
	                return object.ext.obj;
	            },
	            compare: function compare(sort, previous, current) {
	                var first = previous.obj,
	                    second = current.obj;
	
	                if (first > second) {
	                    return sort === 'desc' ? -1 : 1;
	                }
	                if (first < second) {
	                    return sort === 'asc' ? -1 : 1;
	                }
	                return 0;
	            }
	        }, {
	            title: 'Start date',
	            type: 'date',
	            name: 'startDate',
	            renderer: _TableExtras.DateCell,
	            ordering: true,
	            filtering: true
	        }, {
	            title: 'Salary',
	            name: 'salary',
	            ordering: true,
	            renderer: function renderer(object) {
	                return '$ ' + Number(object.salary).toFixed(2);
	            }
	        }, {
	            title: 'Status',
	            name: 'status',
	            options: ['New Lead', 'Active', 'Archived'],
	            ordering: true,
	            renderer: StatusCell,
	            filtering: true
	        }];
	
	        this.basic = {
	            columns: columns.slice(),
	            rows: _TableData.TableData.slice(),
	            config: {
	                paging: {
	                    current: 1,
	                    itemsPerPage: 10,
	                    onPageChange: function onPageChange(event) {
	                        _this3.basic.config.paging.current = event.page;
	                        _this3.basic.config.paging.itemsPerPage = event.itemsPerPage;
	                    }
	                },
	                filtering: true,
	                sorting: true,
	                ordering: true,
	                resizing: true
	            },
	            onTableChange: function onTableChange(event) {
	                _this3.basic.rows = event.rows;
	            }
	        };
	
	        this.details = {
	            columns: columns.slice(),
	            rows: _TableData.TableData.slice(),
	            config: {
	                paging: {
	                    current: 1,
	                    itemsPerPage: 10,
	                    onPageChange: function onPageChange(event) {
	                        _this3.details.config.paging.current = event.page;
	                        _this3.details.config.paging.itemsPerPage = event.itemsPerPage;
	                    }
	                },
	                sorting: true,
	                filtering: true,
	                ordering: true,
	                resizing: true,
	                hasDetails: true,
	                detailsRenderer: ExtraDetails
	            },
	            onTableChange: function onTableChange(event) {
	                _this3.details.rows = event.rows;
	            }
	        };
	
	        this.selectAll = {
	            columns: columns.slice(),
	            rows: _TableData.TableData.slice(),
	            config: {
	                paging: {
	                    current: 1,
	                    itemsPerPage: 10,
	                    onPageChange: function onPageChange(event) {
	                        _this3.details.config.paging.current = event.page;
	                        _this3.details.config.paging.itemsPerPage = event.itemsPerPage;
	                    }
	                },
	                sorting: true,
	                filtering: true,
	                ordering: true,
	                resizing: true,
	                rowSelectionStyle: 'checkbox'
	            }
	        };
	    }
	
	    _createClass(TableDemo, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.color = 'blue';
	        }
	    }, {
	        key: 'changeColor',
	        value: function changeColor() {
	            var idx = HEADER_COLORS.indexOf(this.color);
	            this.color = HEADER_COLORS[idx + 1];
	        }
	    }]);
	
	    return TableDemo;
	}()) || _class3);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdGFibGUvVGFibGVEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLDBwQ0FBTjs7QUF3QkEsSUFBTSxnQkFBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixRQUE1QixFQUFzQyxLQUF0QyxFQUE2QyxRQUE3QyxDQUF0Qjs7SUFXYSxVLFdBQUEsVSxXQVRaLHFCQUFVO0FBQ1AsY0FBVSxhQURIO0FBRVA7QUFGTyxDQUFWLEM7Ozs7Ozs7Ozs7O0lBdUJZLFksV0FBQSxZLFlBWFoscUJBQVU7QUFDUCxjQUFVLGVBREg7QUFFUDtBQUZPLENBQVYsQzs7Ozs7Ozs7Ozs7SUFtQlksUyxXQUFBLFMsWUFMWixxQkFBVTtBQUNQLGNBQVUsWUFESDtBQUVQLGNBQVUsUUFGSDtBQUdQLGdCQUFZO0FBSEwsQ0FBVixDO0FBTUcseUJBQWM7QUFBQTs7QUFBQTs7QUFDVixhQUFLLFlBQUw7QUFDQSxhQUFLLG1CQUFMO0FBQ0EsYUFBSyxxQkFBTDs7QUFFQSxhQUFLLGlCQUFMLEdBQXlCLENBQ3JCLEVBQUUsT0FBTyxJQUFULEVBQWUsT0FBTyxFQUF0QixFQURxQixFQUVyQixFQUFFLE9BQU8sSUFBVCxFQUFlLE9BQU8sRUFBdEIsRUFGcUIsRUFHckIsRUFBRSxPQUFPLElBQVQsRUFBZSxPQUFPLEVBQXRCLEVBSHFCLEVBSXJCLEVBQUUsT0FBTyxJQUFULEVBQWUsT0FBTyxFQUF0QixFQUpxQixDQUF6Qjs7QUFPQSxZQUFJLFVBQVUsQ0FDVixFQUFFLE9BQU8sTUFBVCxFQUFpQixNQUFNLE1BQXZCLEVBQStCLFVBQVUsSUFBekMsRUFBK0MsTUFBTSxNQUFyRCxFQUE2RCxXQUFXLElBQXhFLEVBRFUsRUFFVixFQUFFLE9BQU8sVUFBVCxFQUFxQixNQUFNLFVBQTNC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QUF3QkEsYUFBSyxTQUFMLEdBQWlCO0FBQ2IscUJBQVMsUUFBUSxLQUFSLEVBREk7QUFFYixrQkFBTSxxQkFBVSxLQUFWLEVBRk87QUFHYixvQkFBUTtBQUNKLHdCQUFRO0FBQ0osNkJBQVMsQ0FETDtBQUVKLGtDQUFjLEVBRlY7QUFHSixrQ0FBYyw2QkFBUztBQUNuQiwrQkFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixNQUFwQixDQUEyQixPQUEzQixHQUFxQyxNQUFNLElBQTNDO0FBQ0EsK0JBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsTUFBcEIsQ0FBMkIsWUFBM0IsR0FBMEMsTUFBTSxZQUFoRDtBQUNIO0FBTkcsaUJBREo7QUFTSix5QkFBUyxJQVRMO0FBVUosMkJBQVcsSUFWUDtBQVdKLDBCQUFVLElBWE47QUFZSiwwQkFBVSxJQVpOO0FBYUosbUNBQW1CO0FBYmY7QUFISyxTQUFqQjtBQW1CSDs7OzttQ0FFVTtBQUNQLGlCQUFLLEtBQUwsR0FBYSxNQUFiO0FBQ0g7OztzQ0FFYTtBQUNWLGdCQUFJLE1BQU0sY0FBYyxPQUFkLENBQXNCLEtBQUssS0FBM0IsQ0FBVjtBQUNBLGlCQUFLLEtBQUwsR0FBYSxjQUFjLE1BQU0sQ0FBcEIsQ0FBYjtBQUNIIiwiZmlsZSI6IlRhYmxlRGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYnJpYW5raW1iYWxsL05vdm8vbm92by1lbGVtZW50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTk9WT19UQUJMRV9FTEVNRU5UUywgTk9WT19UQUJMRV9FWFRSQV9FTEVNRU5UUywgTk9WT19UT09MVElQX0VMRU1FTlRTLCBCYXNlUmVuZGVyZXIgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9ub3ZvLWVsZW1lbnRzJztcbmltcG9ydCB7IERhdGVDZWxsIH0gZnJvbSAnLi4vLi4vLi4vc3JjL2VsZW1lbnRzL3RhYmxlL2V4dHJhcy9UYWJsZUV4dHJhcyc7XG5cbmltcG9ydCB7IFRhYmxlRGF0YSB9IGZyb20gJy4vVGFibGVEYXRhJztcbmltcG9ydCB7IENvZGVTbmlwcGV0IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQnO1xuXG5pbXBvcnQgVGFibGVEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1RhYmxlRGVtby5odG1sJztcbmltcG9ydCBEZXRhaWxzVGFibGVEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL0RldGFpbHNUYWJsZURlbW8uaHRtbCc7XG5pbXBvcnQgU2VsZWN0QWxsVGFibGVEZW1vVHBsIGZyb20gJy4vdGVtcGxhdGVzL1NlbGVjdEFsbFRhYmxlRGVtby5odG1sJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPlRhYmxlIDxzbWFsbD48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9idWxsaG9ybi5naXRodWIuaW8vbm92by1lbGVtZW50cy90cmVlL21hc3Rlci9zcmMvZWxlbWVudHMvdGFibGVcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+VGFibGVzIGFsbG93IHVzZXJzIHRvIHZpZXcgZGF0ZSBpbiBhIHRhYnVsYXIgZm9ybWF0IGFuZCBwZXJmb3JtIGFjdGlvbnMgc3VjaCBhcyBTb3J0aW5nIGFuZCBGaWx0ZXJpbmcuIERpZmZlcmVudCBjb25maWd1cmF0aW9uIGFyZSBwb3NzaWJsZSBmb3IgcGFnaW5hdGlvbiBvciBpbmZpbml0ZSBzY3JvbGwuIEZlYXR1cmUgdG8gYmUgYWRkZWQgaW5jbHVkZTogQ3VzdG9tIEl0ZW0gUmVuZGVyZXJzLCBldGMuLi48L3A+XG5cbiAgICA8aDI+VHlwZXM8L2gyPlxuXG4gICAgPGg1PkJhc2ljIFRhYmxlPC9oNT5cbiAgICA8cD5UaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHRhYmxlLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSB0YWJsZS1kZW1vXCI+JHtUYWJsZURlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJUYWJsZURlbW9UcGxcIj48L2NvZGUtc25pcHBldD5cblxuICAgIDxoNT5EZXRhaWxzIFRhYmxlPC9oNT5cbiAgICA8cD5UaGlzIGhhcyBhIHJvdyByZW5kZXJlciB0byBzaG93IGEgbmV3IGRldGFpbHMgcm93IHRoYXQgaXMgZXhwYW5kZWQgd2hlbiB5b3UgY2xpY2sgb24gdGhlIGFjdGlvbiBjb2x1bW4uPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHRhYmxlLWRlbW9cIj4ke0RldGFpbHNUYWJsZURlbW9UcGx9PC9kaXY+XG4gICAgPGNvZGUtc25pcHBldCBbY29kZV09XCJEZXRhaWxzVGFibGVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG4gICAgXG4gICAgPGg1PlNlbGVjdCBBbGwgVGFibGU8L2g1PlxuICAgIDxwPlRoaXMgaGFzIGNoZWNrYm94ZXMgZm9yIHNlbGVjdGlvbi48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgdGFibGUtZGVtb1wiPiR7U2VsZWN0QWxsVGFibGVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiU2VsZWN0QWxsVGFibGVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cbmA7XG5cbmNvbnN0IEhFQURFUl9DT0xPUlMgPSBbJ2JsdWUnLCAnZ3JlZW4nLCAneWVsbG93JywgJ29yYW5nZScsICdyZWQnLCAncHVycGxlJ107XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc3RhdHVzLWNlbGwnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXMtY2VsbFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktaW5mb1wiPjwvaT5cbiAgICAgICAgICAgIDxsYWJlbD57eyB2YWx1ZSB9fTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgU3RhdHVzQ2VsbCBleHRlbmRzIEJhc2VSZW5kZXJlciB7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXh0cmEtZGV0YWlscycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLWRhdGFcIj5cbiAgICAgICAgICAgIDxsYWJlbD48aSBjbGFzcz1cImJoaS1pbmZvXCI+PC9pPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDxwPnt7IGRhdGEuZGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICA8bGFiZWw+PGkgY2xhc3M9XCJiaGktaW5mb1wiPjwvaT5DYXRlZ29yaWVzPC9sYWJlbD5cbiAgICAgICAgICAgIDxwPnt7IGRhdGEuY2F0ZWdvcmllcyB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBFeHRyYURldGFpbHMgZXh0ZW5kcyBCYXNlUmVuZGVyZXIge1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RhYmxlLWRlbW8nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICBkaXJlY3RpdmVzOiBbTk9WT19UQUJMRV9FTEVNRU5UUywgTk9WT19UQUJMRV9FWFRSQV9FTEVNRU5UUywgQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIE5PVk9fVE9PTFRJUF9FTEVNRU5UUywgQ29kZVNuaXBwZXRdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRGVtbyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuVGFibGVEZW1vVHBsID0gVGFibGVEZW1vVHBsO1xuICAgICAgICB0aGlzLkRldGFpbHNUYWJsZURlbW9UcGwgPSBEZXRhaWxzVGFibGVEZW1vVHBsO1xuICAgICAgICB0aGlzLlNlbGVjdEFsbFRhYmxlRGVtb1RwbCA9IFNlbGVjdEFsbFRhYmxlRGVtb1RwbDtcblxuICAgICAgICB0aGlzLmN1c3RvbVBhZ2VPcHRpb25zID0gW1xuICAgICAgICAgICAgeyBsYWJlbDogJzEwJywgdmFsdWU6IDEwIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiAnMjAnLCB2YWx1ZTogMjAgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICczMCcsIHZhbHVlOiAzMCB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJzQwJywgdmFsdWU6IDQwIH1cbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgY29sdW1ucyA9IFtcbiAgICAgICAgICAgIHsgdGl0bGU6ICdOYW1lJywgbmFtZTogJ25hbWUnLCBvcmRlcmluZzogdHJ1ZSwgdHlwZTogJ2xpbmsnLCBmaWx0ZXJpbmc6IHRydWUgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6ICdQb3NpdGlvbicsIG5hbWU6ICdwb3NpdGlvbicsIG9yZGVyaW5nOiB0cnVlLCBmaWx0ZXJpbmc6IHRydWUgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0V4dG4uJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZXh0JyxcbiAgICAgICAgICAgICAgICBvcmRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXJlcjogb2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5leHQub2JqO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29tcGFyZTogKHNvcnQsIHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdCA9IHByZXZpb3VzLm9iaixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZCA9IGN1cnJlbnQub2JqO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdCA+IHNlY29uZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvcnQgPT09ICdkZXNjJyA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3QgPCBzZWNvbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzb3J0ID09PSAnYXNjJyA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3RhcnQgZGF0ZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzdGFydERhdGUnLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiBEYXRlQ2VsbCxcbiAgICAgICAgICAgICAgICBvcmRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJpbmc6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTYWxhcnknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzYWxhcnknLFxuICAgICAgICAgICAgICAgIG9yZGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJCAke051bWJlcihvYmplY3Quc2FsYXJ5KS50b0ZpeGVkKDIpfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N0YXR1cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3N0YXR1cycsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogWydOZXcgTGVhZCcsICdBY3RpdmUnLCAnQXJjaGl2ZWQnXSxcbiAgICAgICAgICAgICAgICBvcmRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXJlcjogU3RhdHVzQ2VsbCxcbiAgICAgICAgICAgICAgICBmaWx0ZXJpbmc6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLmJhc2ljID0ge1xuICAgICAgICAgICAgY29sdW1uczogY29sdW1ucy5zbGljZSgpLFxuICAgICAgICAgICAgcm93czogVGFibGVEYXRhLnNsaWNlKCksXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBwYWdpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDogMSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNQZXJQYWdlOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2ljLmNvbmZpZy5wYWdpbmcuY3VycmVudCA9IGV2ZW50LnBhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2ljLmNvbmZpZy5wYWdpbmcuaXRlbXNQZXJQYWdlID0gZXZlbnQuaXRlbXNQZXJQYWdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgc29ydGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvcmRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZXNpemluZzogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uVGFibGVDaGFuZ2U6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFzaWMucm93cyA9IGV2ZW50LnJvd3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kZXRhaWxzID0ge1xuICAgICAgICAgICAgY29sdW1uczogY29sdW1ucy5zbGljZSgpLFxuICAgICAgICAgICAgcm93czogVGFibGVEYXRhLnNsaWNlKCksXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBwYWdpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDogMSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNQZXJQYWdlOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHMuY29uZmlnLnBhZ2luZy5jdXJyZW50ID0gZXZlbnQucGFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5jb25maWcucGFnaW5nLml0ZW1zUGVyUGFnZSA9IGV2ZW50Lml0ZW1zUGVyUGFnZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc29ydGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgb3JkZXJpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVzaXppbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFzRGV0YWlsczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkZXRhaWxzUmVuZGVyZXI6IEV4dHJhRGV0YWlsc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uVGFibGVDaGFuZ2U6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5yb3dzID0gZXZlbnQucm93cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNlbGVjdEFsbCA9IHtcbiAgICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbnMuc2xpY2UoKSxcbiAgICAgICAgICAgIHJvd3M6IFRhYmxlRGF0YS5zbGljZSgpLFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgcGFnaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zUGVyUGFnZTogMTAsXG4gICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZTogZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLmNvbmZpZy5wYWdpbmcuY3VycmVudCA9IGV2ZW50LnBhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHMuY29uZmlnLnBhZ2luZy5pdGVtc1BlclBhZ2UgPSBldmVudC5pdGVtc1BlclBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNvcnRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgZmlsdGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9yZGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlc2l6aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvblN0eWxlOiAnY2hlY2tib3gnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSAnYmx1ZSc7XG4gICAgfVxuXG4gICAgY2hhbmdlQ29sb3IoKSB7XG4gICAgICAgIGxldCBpZHggPSBIRUFERVJfQ09MT1JTLmluZGV4T2YodGhpcy5jb2xvcik7XG4gICAgICAgIHRoaXMuY29sb3IgPSBIRUFERVJfQ09MT1JTW2lkeCArIDFdO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 1190:
/***/ function(module, exports) {

	module.exports = "<header [ngClass]=\"color\" (click)=\"changeColor()\" tooltip=\"Click Me!\" tooltipPlacement=\"top\">\n    <div class=\"header-row\">\n        <h1><i class=\"bhi-email\"></i>Email ({{details.rows.length}})</h1>\n        <div>\n            <h5>Last Activity</h5>\n            <span>12/15/2015</span>\n        </div>\n    </div>\n    <novo-pagination *ngIf=\"details.config.paging\"\n                     [page]=\"details.config.paging.current\"\n                     [totalItems]=\"details.rows.length\"\n                     [itemsPerPage]=\"details.config.paging.itemsPerPage\"\n                     (onPageChange)=\"details.config.paging.onPageChange($event)\">\n    </novo-pagination>\n</header>\n\n<novo-table [rows]=\"details.rows\" [columns]=\"details.columns\" [config]=\"details.config\" (onTableChange)=\"details.onTableChange($event)\"></novo-table>\n"

/***/ },

/***/ 1191:
/***/ function(module, exports) {

	module.exports = "<header [ngClass]=\"color\" (click)=\"changeColor()\" bhTooltip=\"Click Me!\" bhTooltipPlacement=\"top\">\n    <div class=\"header-row\">\n        <h1><i class=\"bhi-email\"></i>Email ({{selectAll.rows.length}})</h1>\n        <div>\n            <h5>Last Activity</h5>\n            <span>12/15/2015</span>\n        </div>\n    </div>\n    <novo-pagination *ngIf=\"selectAll.config.paging\"\n                     [page]=\"selectAll.config.paging.current\"\n                     [totalItems]=\"selectAll.rows.length\"\n                     [itemsPerPage]=\"selectAll.config.paging.itemsPerPage\"\n                     (onPageChange)=\"selectAll.config.paging.onPageChange($event)\">\n    </novo-pagination>\n</header>\n\n<novo-table [rows]=\"selectAll.rows\" [columns]=\"selectAll.columns\" [config]=\"selectAll.config\" (onTableChange)=\"selectAll.onTableChange($event)\"></novo-table>\n"

/***/ },

/***/ 1192:
/***/ function(module, exports) {

	module.exports = "<header [ngClass]=\"color\" (click)=\"changeColor()\" tooltip=\"Click Me!\" tooltipPlacement=\"top\">\n    <div class=\"header-row\">\n        <h1><i class=\"bhi-email\"></i>Email ({{basic.rows.length}})</h1>\n        <div>\n            <h5>Last Activity</h5>\n            <span>12/15/2015</span>\n        </div>\n    </div>\n    <novo-pagination *ngIf=\"basic.config.paging\"\n                     [page]=\"basic.config.paging.current\"\n                     [pageOptions]=\"customPageOptions\"\n                     [totalItems]=\"basic.rows.length\"\n                     [itemsPerPage]=\"basic.config.paging.itemsPerPage\"\n                     (onPageChange)=\"basic.config.paging.onPageChange($event)\">\n    </novo-pagination>\n</header>\n\n<novo-table [rows]=\"basic.rows\" [columns]=\"basic.columns\" [config]=\"basic.config\" (onTableChange)=\"basic.onTableChange($event)\"></novo-table>\n"

/***/ }

});
//# sourceMappingURL=6.23562f6a8def24c6ff49.bundle.map