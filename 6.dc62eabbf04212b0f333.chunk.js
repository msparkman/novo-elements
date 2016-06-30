webpackJsonp([6],{

/***/ 1129:
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

/***/ 1130:
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
	    'startDate': '2015/08/19',
	    'salary': 208178,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Pearl Crosby',
	    'position': 'In PC',
	    'office': 'Cambodia',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/10/08',
	    'salary': 114367,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Colette Foley',
	    'position': 'Lorem Inc.',
	    'office': 'Korea, North',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/07/19',
	    'salary': 721473,
	    'status': 'Archived',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Anastasia Shaffer',
	    'position': 'Dolor Nulla Semper LLC',
	    'office': 'Suriname',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/04/20',
	    'salary': 264620,
	    'status': 'New Lead',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Gabriel Castro',
	    'position': 'Sed Limited',
	    'office': 'Bahrain',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/03/04',
	    'salary': 651350,
	    'status': 'New Lead',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Cherokee Ware',
	    'position': 'Tincidunt LLC',
	    'office': 'United Kingdom (Great Britain)',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/06/17',
	    'salary': 666259,
	    'status': 'New Lead',
	    'description': 'It’s been a long time coming, but tonight, because of what we did on this day, in this election, at this defining moment, change has come to America.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Barry Moss',
	    'position': 'Sociis Industries',
	    'office': 'Western Sahara',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/08/13',
	    'salary': 541631,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Maryam Tucker',
	    'position': 'Elit Pede Malesuada Inc.',
	    'office': 'Brazil',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/10/02',
	    'salary': 182294,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Constance Clayton',
	    'position': 'Auctor Velit Aliquam LLP',
	    'office': 'United Arab Emirates',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/08/01',
	    'salary': 218597,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Rogan Tucker',
	    'position': 'Arcu Vestibulum Ante Associates',
	    'office': 'Jersey',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/01/04',
	    'salary': 861632,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Emery Mcdowell',
	    'position': 'Gravida Company',
	    'office': 'New Zealand',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/06/02',
	    'salary': 413568,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Yael Greer',
	    'position': 'Orci Limited',
	    'office': 'Madagascar',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/12/04',
	    'salary': 121831,
	    'status': 'New Lead',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Jared Burgess',
	    'position': 'Auctor Incorporated',
	    'office': 'Burundi',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/01/12',
	    'salary': 62243,
	    'status': 'Active',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Sharon Campbell',
	    'position': 'Elit Curabitur Sed Consulting',
	    'office': 'Comoros',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/09/14',
	    'salary': 200854,
	    'status': 'Active',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Finance']
	}, {
	    'name': 'Yeo Church',
	    'position': 'Donec Vitae Erat PC',
	    'office': 'Saudi Arabia',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/06/07',
	    'salary': 581193,
	    'status': 'Active',
	    'description': 'To my campaign manager David Plouffe, my chief strategist David Axelrod, and the best campaign team ever assembled in the history of politics – you made this happen, and I am forever grateful for what you’ve sacrificed to get it done.',
	    'categories': ['Temporary', 'Finance']
	}, {
	    'name': 'Kylie Barlow',
	    'position': 'Fermentum Risus Corporation',
	    'office': 'Papua New Guinea',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/12/03',
	    'salary': 418115,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Temporary', 'Finance']
	}, {
	    'name': 'Nell Leonard',
	    'position': 'Vestibulum Consulting',
	    'office': 'Saudi Arabia',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/05/29',
	    'salary': 466201,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Temporary', 'Finance']
	}, {
	    'name': 'Brandon Fleming',
	    'position': 'Donec Egestas Associates',
	    'office': 'Poland',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/01/22',
	    'salary': 800011,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Temporary', 'Finance']
	}, {
	    'name': 'Inga Pena',
	    'position': 'Et Magnis Dis Limited',
	    'office': 'Belgium',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/05/18',
	    'salary': 564245,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Finance']
	}, {
	    'name': 'Arden Russo',
	    'position': 'Est Tempor Bibendum Corp.',
	    'office': 'Dominican Republic',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/07/23',
	    'salary': 357222,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Finance']
	}, {
	    'name': 'Liberty Gallegos',
	    'position': 'Nec Diam LLC',
	    'office': 'Ghana',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/06/18',
	    'salary': 554375,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Dennis York',
	    'position': 'Nullam Suscipit Foundation',
	    'office': 'Namibia',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/03/20',
	    'salary': 90417,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Petra Chandler',
	    'position': 'Pede Nonummy Inc.',
	    'office': 'Namibia',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/03/26',
	    'salary': 598915,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Aurelia Marshall',
	    'position': 'Donec Consulting',
	    'office': 'Nicaragua',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/08/18',
	    'salary': 201680,
	    'status': 'Active',
	    'description': 'And to all those watching tonight from beyond our shores, from parliaments and palaces to those who are huddled around radios in the forgotten corners of our world – our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those who would tear this world down – we will defeat you. To those who seek peace and security – we support you. And to all those who have wondered if America’s beacon still burns as bright – tonight we proved once more that the true strength of our nation comes not from our the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity, and unyielding hope.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Rose Carter',
	    'position': 'Enim Consequat Purus Industries',
	    'office': 'Morocco',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/03/06',
	    'salary': 220187,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Denton Atkins',
	    'position': 'Non Vestibulum PC',
	    'office': 'Mali',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/04/19',
	    'salary': 324588,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Permenant', 'Developer']
	}, {
	    'name': 'Germaine Osborn',
	    'position': 'Tristique Aliquet PC',
	    'office': 'Lesotho',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/01/19',
	    'salary': 351108,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Nell Butler',
	    'position': 'Sit Amet Dapibus Industries',
	    'office': 'Cuba',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/01/06',
	    'salary': 230072,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Marketing']
	}, {
	    'name': 'Brent Stein',
	    'position': 'Eu Augue Porttitor LLP',
	    'office': 'Cyprus',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/11/02',
	    'salary': 853413,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Marketing']
	}, {
	    'name': 'Alexandra Shaw',
	    'position': 'Aenean Gravida Limited',
	    'office': 'Uruguay',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/05/16',
	    'salary': 401970,
	    'status': 'Archived',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Marketing']
	}, {
	    'name': 'Veronica Allison',
	    'position': 'Aliquet Diam Sed Institute',
	    'office': 'Samoa',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/05/17',
	    'salary': 79193,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Marketing']
	}, {
	    'name': 'Katelyn Gamble',
	    'position': 'Sed Associates',
	    'office': 'Mauritius',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/03/20',
	    'salary': 484299,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Marketing']
	}, {
	    'name': 'James Greer',
	    'position': 'A Dui Incorporated',
	    'office': 'Norway',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/02/21',
	    'salary': 333518,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Marketing']
	}, {
	    'name': 'Cain Vasquez',
	    'position': 'Nulla Facilisis Suspendisse Institute',
	    'office': 'China',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/05/27',
	    'salary': 651761,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Marketing']
	}, {
	    'name': 'Shaeleigh Barr',
	    'position': 'Eleifend Cras Institute',
	    'office': 'Ghana',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/04/01',
	    'salary': 627095,
	    'status': 'Archived',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Developer']
	}, {
	    'name': 'Baker Mckay',
	    'position': 'Ut Sagittis Associates',
	    'office': 'Isle of Man',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/01/12',
	    'salary': 742247,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Developer']
	}, {
	    'name': 'Jayme Pace',
	    'position': 'Cras Eu Tellus Associates',
	    'office': 'Bouvet Island',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/08/12',
	    'salary': 591588,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Developer']
	}, {
	    'name': 'Reuben Albert',
	    'position': 'Lobortis Institute',
	    'office': 'Zambia',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/04/04',
	    'salary': 791408,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Developer']
	}, {
	    'name': 'Idola Burns',
	    'position': 'Non Industries',
	    'office': 'Myanmar',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/06/24',
	    'salary': 142906,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Contractor', 'Developer']
	}, {
	    'name': 'Laura Macias',
	    'position': 'Phasellus Inc.',
	    'office': 'Mauritania',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/11/21',
	    'salary': 226591,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Nichole Salas',
	    'position': 'Duis PC',
	    'office': 'Madagascar',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/01/18',
	    'salary': 234196,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Hunter Walter',
	    'position': 'Ullamcorper Duis Cursus Foundation',
	    'office': 'Brazil',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/02/28',
	    'salary': 655052,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Asher Rich',
	    'position': 'Mauris Ipsum LLP',
	    'office': 'Paraguay',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/08/08',
	    'salary': 222946,
	    'status': 'Archived',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Angela Carlson',
	    'position': 'Donec Tempor Institute',
	    'office': 'Papua New Guinea',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/02/12',
	    'salary': 562194,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'James Dorsey',
	    'position': 'Ipsum Leo Associates',
	    'office': 'Congo (Brazzaville)',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/01/10',
	    'salary': 629925,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Wesley Cobb',
	    'position': 'Nunc Est Incorporated',
	    'office': 'Australia',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/01/30',
	    'salary': 343476,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Meghan Stephens',
	    'position': 'Interdum PC',
	    'office': 'Turkey',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/10/11',
	    'salary': 469305,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Bertha Herrera',
	    'position': 'Amet Limited',
	    'office': 'Kenya',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/11/22',
	    'salary': 56606,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Karina Key',
	    'position': 'Quisque Varius Nam Company',
	    'office': 'France',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/03/26',
	    'salary': 314260,
	    'status': 'Active',
	    'description': 'I want to thank my partner in this journey, a man who campaigned from his heart and spoke for the men and women he grew up with on the streets of Scranton and rode with on that train home to Delaware, the Vice President-elect of the United States, Joe Biden.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Uriel Carson',
	    'position': 'Penatibus PC',
	    'office': 'Venezuela',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/01/07',
	    'salary': 106335,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Mira Baird',
	    'position': 'Felis Orci PC',
	    'office': 'Niue',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/08/25',
	    'salary': 515671,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Ursula Parrish',
	    'position': 'Ac Corporation',
	    'office': 'Macao',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/06/30',
	    'salary': 72295,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Josephine Sykes',
	    'position': 'Blandit Congue Limited',
	    'office': 'Holy See (Vatican City State)',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/12/22',
	    'salary': 694656,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Maggie Sims',
	    'position': 'Vulputate Posuere Industries',
	    'office': 'Sudan',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/11/22',
	    'salary': 363743,
	    'status': 'New Lead',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Rogan Fuentes',
	    'position': 'Vestibulum Accumsan Neque Company',
	    'office': 'Jersey',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/07/29',
	    'salary': 606004,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Maya Haney',
	    'position': 'Ac Foundation',
	    'office': 'Falkland Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/09/03',
	    'salary': 745500,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Aquila Battle',
	    'position': 'Sociis Natoque Penatibus Foundation',
	    'office': 'Azerbaijan',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/03/06',
	    'salary': 582265,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Connor Coleman',
	    'position': 'Orci Lacus Vestibulum Foundation',
	    'office': 'Croatia',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/10/21',
	    'salary': 416958,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Charity Thomas',
	    'position': 'Convallis Ligula Donec Inc.',
	    'office': 'Benin',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/07/12',
	    'salary': 540999,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Developer']
	}, {
	    'name': 'Blythe Powers',
	    'position': 'Amet Orci Limited',
	    'office': 'Falkland Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/01/23',
	    'salary': 480067,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Human Resources']
	}, {
	    'name': 'Adria Battle',
	    'position': 'Ornare Lectus Incorporated',
	    'office': 'British Indian Ocean Territory',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/05/28',
	    'salary': 257937,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Human Resources']
	}, {
	    'name': 'Melanie Mcintyre',
	    'position': 'Nunc Corp.',
	    'office': 'Mongolia',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/01/06',
	    'salary': 359737,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Human Resources']
	}, {
	    'name': 'Keely Bauer',
	    'position': 'Nec Tempus Institute',
	    'office': 'Somalia',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/03/09',
	    'salary': 99718,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Human Resources']
	}, {
	    'name': 'Noelani Strong',
	    'position': 'Nec LLP',
	    'office': 'Iran',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/08/24',
	    'salary': 480718,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Communications', 'Human Resources']
	}, {
	    'name': 'Jeanette Henderson',
	    'position': 'Eu Elit Nulla Corporation',
	    'office': 'Italy',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/06/19',
	    'salary': 253772,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Candace Huber',
	    'position': 'Sed Institute',
	    'office': 'Uganda',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/06/16',
	    'salary': 388879,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Bethany Potter',
	    'position': 'Vivamus Nibh Dolor Incorporated',
	    'office': 'Puerto Rico',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/11/12',
	    'salary': 747310,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Whoopi Burks',
	    'position': 'Justo Inc.',
	    'office': 'Fiji',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/09/24',
	    'salary': 803037,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Sheila Long',
	    'position': 'Diam Associates',
	    'office': 'Sao Tome and Principe',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/12/21',
	    'salary': 674379,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Sonya Church',
	    'position': 'Laoreet Institute',
	    'office': 'Grenada',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/06/03',
	    'salary': 625147,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Shaine Forbes',
	    'position': 'Eu Arcu LLP',
	    'office': 'Cyprus',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/01/18',
	    'salary': 208100,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Alexandra Patrick',
	    'position': 'Ligula Donec Inc.',
	    'office': 'Viet Nam',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/04/09',
	    'salary': 104063,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Patience Vincent',
	    'position': 'Sem Molestie Associates',
	    'office': 'Philippines',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/07/04',
	    'salary': 673556,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Evelyn Smith',
	    'position': 'Fusce Industries',
	    'office': 'Togo',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/08/15',
	    'salary': 737284,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Kieran Gonzalez',
	    'position': 'Non Corp.',
	    'office': 'Equatorial Guinea',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/08/24',
	    'salary': 90195,
	    'status': 'New Lead',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Molly Oneil',
	    'position': 'Non Dui Consulting',
	    'office': 'Belize',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/10/28',
	    'salary': 140767,
	    'status': 'Archived',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Nigel Davenport',
	    'position': 'Ullamcorper Velit In Industries',
	    'office': 'Vanuatu',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/03/16',
	    'salary': 70536,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Thor Young',
	    'position': 'Malesuada Consulting',
	    'office': 'French Southern Territories',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/01/28',
	    'salary': 75501,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Finn Delacruz',
	    'position': 'Lorem Industries',
	    'office': 'Cocos (Keeling) Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/12/11',
	    'salary': 754967,
	    'status': 'Archived',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Lane Henderson',
	    'position': 'Pede Foundation',
	    'office': 'Kazakhstan',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/07/02',
	    'salary': 842050,
	    'status': 'Archived',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Shea Potter',
	    'position': 'Curabitur Limited',
	    'office': 'Timor-Leste',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/05/07',
	    'salary': 263629,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Brynn Yang',
	    'position': 'Ut Limited',
	    'office': 'Mayotte',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/01/17',
	    'salary': 74292,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Kylan Fuentes',
	    'position': 'Sapien Aenean Associates',
	    'office': 'Brazil',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/12/28',
	    'salary': 108632,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Lionel Mcbride',
	    'position': 'Ipsum PC',
	    'office': 'Portugal',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/07/11',
	    'salary': 34244,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Paul Lucas',
	    'position': 'Eget LLP',
	    'office': 'Nicaragua',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/09/30',
	    'salary': 690834,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Lareina Williamson',
	    'position': 'Imperdiet Ullamcorper Ltd',
	    'office': 'Cocos (Keeling) Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/12/01',
	    'salary': 603498,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Amy Acevedo',
	    'position': 'Id Institute',
	    'office': 'Cook Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/02/04',
	    'salary': 125165,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Nomlanga Silva',
	    'position': 'Eget LLC',
	    'office': 'Belize',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/01/31',
	    'salary': 268509,
	    'status': 'Archived',
	    'description': 'Labore sit nulla amet enim reprehenderit esse laborum Lorem quis in eu.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Amena Stone',
	    'position': 'Enim Incorporated',
	    'office': 'Guinea',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/09/23',
	    'salary': 214381,
	    'status': 'Active',
	    'description': 'There was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Danielle Coffey',
	    'position': 'Feugiat Placerat Corp.',
	    'office': 'Sao Tome and Principe',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/06/17',
	    'salary': 137423,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Temporary', 'Developer']
	}, {
	    'name': 'Buffy Russell',
	    'position': 'Lacus Quisque Ltd',
	    'office': 'Ecuador',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/10/17',
	    'salary': 612184,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Kaitlin Lamb',
	    'position': 'Malesuada Fringilla Est Associates',
	    'office': 'Algeria',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/10/18',
	    'salary': 327367,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Leilani Yates',
	    'position': 'Mus Proin LLC',
	    'office': 'South Sudan',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/05/27',
	    'salary': 743493,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Jemima Moon',
	    'position': 'Phasellus Corp.',
	    'office': 'South Georgia and The South Sandwich Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/05/21',
	    'salary': 496067,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Hiroko Schwartz',
	    'position': 'Neque Institute',
	    'office': 'Saint Vincent and The Grenadines',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/03/13',
	    'salary': 178782,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Nathaniel Jensen',
	    'position': 'Mi Tempor Limited',
	    'office': 'Dominica',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/12/05',
	    'salary': 37441,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Silas Sweeney',
	    'position': 'Ultrices Institute',
	    'office': 'Turkmenistan',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/11/13',
	    'salary': 152980,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Jermaine Barry',
	    'position': 'Dapibus Corporation',
	    'office': 'Uzbekistan',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/03/06',
	    'salary': 409463,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Tatiana Nichols',
	    'position': 'Nec Diam Industries',
	    'office': 'Cook Islands',
	    'ext': { 'obj': '8262' },
	    'startDate': '2015/05/22',
	    'salary': 51155,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}, {
	    'name': 'Rama Waller',
	    'position': 'Sem Pellentesque LLC',
	    'office': 'Andorra',
	    'ext': { 'obj': '8262' },
	    'startDate': '2014/12/01',
	    'salary': 223227,
	    'status': 'Active',
	    'description': 'When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs and a new sense of common purpose. Yes we can.',
	    'categories': ['Office Skills']
	}];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdGFibGUvVGFibGVEYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTSxnQ0FBWSxDQUNyQjtBQUNJLFlBQVEsbUJBRFo7QUFFSSxnQkFBWSxxQkFGaEI7QUFHSSxjQUFVLFNBSGQ7QUFJSSxXQUFPLEVBQUUsT0FBTyxNQUFULEVBSlg7QUFLSSxpQkFBYSxZQUxqQjtBQU1JLGNBQVUsTUFOZDtBQU9JLGNBQVUsVUFQZDtBQVFJLG1CQUFlLHVMQVJuQjtBQVNJLGtCQUFjLENBQUMsV0FBRCxFQUFjLFdBQWQ7QUFUbEIsQ0FEcUIsRUFXbEI7QUFDQyxZQUFRLGNBRFQ7QUFFQyxnQkFBWSxPQUZiO0FBR0MsY0FBVSxVQUhYO0FBSUMsV0FBTyxFQUFFLE9BQU8sTUFBVCxFQUpSO0FBS0MsaUJBQWEsWUFMZDtBQU1DLGNBQVUsTUFOWDtBQU9DLGNBQVUsUUFQWDtBQVFDLG1CQUFlLHVMQVJoQjtBQVNDLGtCQUFjLENBQUMsV0FBRCxFQUFjLFdBQWQ7QUFUZixDQVhrQixFQXFCbEI7QUFDQyxZQUFRLGVBRFQ7QUFFQyxnQkFBWSxZQUZiO0FBR0MsY0FBVSxjQUhYO0FBSUMsV0FBTyxFQUFFLE9BQU8sTUFBVCxFQUpSO0FBS0MsaUJBQWEsWUFMZDtBQU1DLGNBQVUsTUFOWDtBQU9DLGNBQVUsVUFQWDtBQVFDLG1CQUFlLDRPQVJoQjtBQVNDLGtCQUFjLENBQUMsV0FBRCxFQUFjLFdBQWQ7QUFUZixDQXJCa0IsRUErQmxCO0FBQ0MsWUFBUSxtQkFEVDtBQUVDLGdCQUFZLHdCQUZiO0FBR0MsY0FBVSxVQUhYO0FBSUMsV0FBTyxFQUFFLE9BQU8sTUFBVCxFQUpSO0FBS0MsaUJBQWEsWUFMZDtBQU1DLGNBQVUsTUFOWDtBQU9DLGNBQVUsVUFQWDtBQVFDLG1CQUFlLHlyQkFSaEI7QUFTQyxrQkFBYyxDQUFDLFdBQUQsRUFBYyxXQUFkO0FBVGYsQ0EvQmtCLEVBeUNsQjtBQUNDLFlBQVEsZ0JBRFQ7QUFFQyxnQkFBWSxh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O0FBU0Msa0JBQWMsQ0FBQyxlQUFEO0FBVGYsQ0EzOEJrQixFQXE5QmxCO0FBQ0MsWUFBUSxpQkFEVDtBQUVDLGdCQUFZLHFCQUZiO0FBR0MsY0FBVSxjQUhYO0FBSUMsV0FBTyxFQUFFLE9BQU8sTUFBVCxFQUpSO0FBS0MsaUJBQWEsWUFMZDtBQU1DLGNBQVUsS0FOWDtBQU9DLGNBQVUsUUFQWDtBQVFDLG1CQUFlLHVMQVJoQjtBQVNDLGtCQUFjLENBQUMsZUFBRDtBQVRmLENBcjlCa0IsRUErOUJsQjtBQUNDLFlBQVEsYUFEVDtBQUVDLGdCQUFZLHNCQUZiO0FBR0MsY0FBVSxTQUhYO0FBSUMsV0FBTyxFQUFFLE9BQU8sTUFBVCxFQUpSO0FBS0MsaUJBQWEsWUFMZDtBQU1DLGNBQVUsTUFOWDtBQU9DLGNBQVUsUUFQWDtBQVFDLG1CQUFlLHVMQVJoQjtBQVNDLGtCQUFjLENBQUMsZUFBRDtBQVRmLENBLzlCa0IsQ0FBbEIiLCJmaWxlIjoiVGFibGVEYXRhLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9icmlhbmtpbWJhbGwvTm92by9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFRhYmxlRGF0YSA9IFtcbiAgICB7XG4gICAgICAgICduYW1lJzogJ1ZpY3RvcmlhIENhbnRyZWxsJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0ludGVnZXIgQ29ycG9yYXRpb24nLFxuICAgICAgICAnb2ZmaWNlJzogJ0Nyb2F0aWEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wOC8xOScsXG4gICAgICAgICdzYWxhcnknOiAyMDgxNzgsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1BlYXJsIENyb3NieScsXG4gICAgICAgICdwb3NpdGlvbic6ICdJbiBQQycsXG4gICAgICAgICdvZmZpY2UnOiAnQ2FtYm9kaWEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNC8xMC8wOCcsXG4gICAgICAgICdzYWxhcnknOiAxMTQzNjcsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdDb2xldHRlIEZvbGV5JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0xvcmVtIEluYy4nLFxuICAgICAgICAnb2ZmaWNlJzogJ0tvcmVhLCBOb3J0aCcsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA3LzE5JyxcbiAgICAgICAgJ3NhbGFyeSc6IDcyMTQ3MyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBcmNoaXZlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUbyBteSBjYW1wYWlnbiBtYW5hZ2VyIERhdmlkIFBsb3VmZmUsIG15IGNoaWVmIHN0cmF0ZWdpc3QgRGF2aWQgQXhlbHJvZCwgYW5kIHRoZSBiZXN0IGNhbXBhaWduIHRlYW0gZXZlciBhc3NlbWJsZWQgaW4gdGhlIGhpc3Rvcnkgb2YgcG9saXRpY3Mg4oCTIHlvdSBtYWRlIHRoaXMgaGFwcGVuLCBhbmQgSSBhbSBmb3JldmVyIGdyYXRlZnVsIGZvciB3aGF0IHlvdeKAmXZlIHNhY3JpZmljZWQgdG8gZ2V0IGl0IGRvbmUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQW5hc3Rhc2lhIFNoYWZmZXInLFxuICAgICAgICAncG9zaXRpb24nOiAnRG9sb3IgTnVsbGEgU2VtcGVyIExMQycsXG4gICAgICAgICdvZmZpY2UnOiAnU3VyaW5hbWUnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNC8yMCcsXG4gICAgICAgICdzYWxhcnknOiAyNjQ2MjAsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQW5kIHRvIGFsbCB0aG9zZSB3YXRjaGluZyB0b25pZ2h0IGZyb20gYmV5b25kIG91ciBzaG9yZXMsIGZyb20gcGFybGlhbWVudHMgYW5kIHBhbGFjZXMgdG8gdGhvc2Ugd2hvIGFyZSBodWRkbGVkIGFyb3VuZCByYWRpb3MgaW4gdGhlIGZvcmdvdHRlbiBjb3JuZXJzIG9mIG91ciB3b3JsZCDigJMgb3VyIHN0b3JpZXMgYXJlIHNpbmd1bGFyLCBidXQgb3VyIGRlc3RpbnkgaXMgc2hhcmVkLCBhbmQgYSBuZXcgZGF3biBvZiBBbWVyaWNhbiBsZWFkZXJzaGlwIGlzIGF0IGhhbmQuIFRvIHRob3NlIHdobyB3b3VsZCB0ZWFyIHRoaXMgd29ybGQgZG93biDigJMgd2Ugd2lsbCBkZWZlYXQgeW91LiBUbyB0aG9zZSB3aG8gc2VlayBwZWFjZSBhbmQgc2VjdXJpdHkg4oCTIHdlIHN1cHBvcnQgeW91LiBBbmQgdG8gYWxsIHRob3NlIHdobyBoYXZlIHdvbmRlcmVkIGlmIEFtZXJpY2HigJlzIGJlYWNvbiBzdGlsbCBidXJucyBhcyBicmlnaHQg4oCTIHRvbmlnaHQgd2UgcHJvdmVkIG9uY2UgbW9yZSB0aGF0IHRoZSB0cnVlIHN0cmVuZ3RoIG9mIG91ciBuYXRpb24gY29tZXMgbm90IGZyb20gb3VyIHRoZSBtaWdodCBvZiBvdXIgYXJtcyBvciB0aGUgc2NhbGUgb2Ygb3VyIHdlYWx0aCwgYnV0IGZyb20gdGhlIGVuZHVyaW5nIHBvd2VyIG9mIG91ciBpZGVhbHM6IGRlbW9jcmFjeSwgbGliZXJ0eSwgb3Bwb3J0dW5pdHksIGFuZCB1bnlpZWxkaW5nIGhvcGUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnR2FicmllbCBDYXN0cm8nLFxuICAgICAgICAncG9zaXRpb24nOiAnU2VkIExpbWl0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ0JhaHJhaW4nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMy8wNCcsXG4gICAgICAgICdzYWxhcnknOiA2NTEzNTAsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSSB3YW50IHRvIHRoYW5rIG15IHBhcnRuZXIgaW4gdGhpcyBqb3VybmV5LCBhIG1hbiB3aG8gY2FtcGFpZ25lZCBmcm9tIGhpcyBoZWFydCBhbmQgc3Bva2UgZm9yIHRoZSBtZW4gYW5kIHdvbWVuIGhlIGdyZXcgdXAgd2l0aCBvbiB0aGUgc3RyZWV0cyBvZiBTY3JhbnRvbiBhbmQgcm9kZSB3aXRoIG9uIHRoYXQgdHJhaW4gaG9tZSB0byBEZWxhd2FyZSwgdGhlIFZpY2UgUHJlc2lkZW50LWVsZWN0IG9mIHRoZSBVbml0ZWQgU3RhdGVzLCBKb2UgQmlkZW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQ2hlcm9rZWUgV2FyZScsXG4gICAgICAgICdwb3NpdGlvbic6ICdUaW5jaWR1bnQgTExDJyxcbiAgICAgICAgJ29mZmljZSc6ICdVbml0ZWQgS2luZ2RvbSAoR3JlYXQgQnJpdGFpbiknLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNi8xNycsXG4gICAgICAgICdzYWxhcnknOiA2NjYyNTksXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSXTigJlzIGJlZW4gYSBsb25nIHRpbWUgY29taW5nLCBidXQgdG9uaWdodCwgYmVjYXVzZSBvZiB3aGF0IHdlIGRpZCBvbiB0aGlzIGRheSwgaW4gdGhpcyBlbGVjdGlvbiwgYXQgdGhpcyBkZWZpbmluZyBtb21lbnQsIGNoYW5nZSBoYXMgY29tZSB0byBBbWVyaWNhLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0JhcnJ5IE1vc3MnLFxuICAgICAgICAncG9zaXRpb24nOiAnU29jaWlzIEluZHVzdHJpZXMnLFxuICAgICAgICAnb2ZmaWNlJzogJ1dlc3Rlcm4gU2FoYXJhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDgvMTMnLFxuICAgICAgICAnc2FsYXJ5JzogNTQxNjMxLFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RvIG15IGNhbXBhaWduIG1hbmFnZXIgRGF2aWQgUGxvdWZmZSwgbXkgY2hpZWYgc3RyYXRlZ2lzdCBEYXZpZCBBeGVscm9kLCBhbmQgdGhlIGJlc3QgY2FtcGFpZ24gdGVhbSBldmVyIGFzc2VtYmxlZCBpbiB0aGUgaGlzdG9yeSBvZiBwb2xpdGljcyDigJMgeW91IG1hZGUgdGhpcyBoYXBwZW4sIGFuZCBJIGFtIGZvcmV2ZXIgZ3JhdGVmdWwgZm9yIHdoYXQgeW914oCZdmUgc2FjcmlmaWNlZCB0byBnZXQgaXQgZG9uZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdNYXJ5YW0gVHVja2VyJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0VsaXQgUGVkZSBNYWxlc3VhZGEgSW5jLicsXG4gICAgICAgICdvZmZpY2UnOiAnQnJhemlsJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTAvMDInLFxuICAgICAgICAnc2FsYXJ5JzogMTgyMjk0LFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RvIG15IGNhbXBhaWduIG1hbmFnZXIgRGF2aWQgUGxvdWZmZSwgbXkgY2hpZWYgc3RyYXRlZ2lzdCBEYXZpZCBBeGVscm9kLCBhbmQgdGhlIGJlc3QgY2FtcGFpZ24gdGVhbSBldmVyIGFzc2VtYmxlZCBpbiB0aGUgaGlzdG9yeSBvZiBwb2xpdGljcyDigJMgeW91IG1hZGUgdGhpcyBoYXBwZW4sIGFuZCBJIGFtIGZvcmV2ZXIgZ3JhdGVmdWwgZm9yIHdoYXQgeW914oCZdmUgc2FjcmlmaWNlZCB0byBnZXQgaXQgZG9uZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdDb25zdGFuY2UgQ2xheXRvbicsXG4gICAgICAgICdwb3NpdGlvbic6ICdBdWN0b3IgVmVsaXQgQWxpcXVhbSBMTFAnLFxuICAgICAgICAnb2ZmaWNlJzogJ1VuaXRlZCBBcmFiIEVtaXJhdGVzJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDgvMDEnLFxuICAgICAgICAnc2FsYXJ5JzogMjE4NTk3LFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RvIG15IGNhbXBhaWduIG1hbmFnZXIgRGF2aWQgUGxvdWZmZSwgbXkgY2hpZWYgc3RyYXRlZ2lzdCBEYXZpZCBBeGVscm9kLCBhbmQgdGhlIGJlc3QgY2FtcGFpZ24gdGVhbSBldmVyIGFzc2VtYmxlZCBpbiB0aGUgaGlzdG9yeSBvZiBwb2xpdGljcyDigJMgeW91IG1hZGUgdGhpcyBoYXBwZW4sIGFuZCBJIGFtIGZvcmV2ZXIgZ3JhdGVmdWwgZm9yIHdoYXQgeW914oCZdmUgc2FjcmlmaWNlZCB0byBnZXQgaXQgZG9uZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdSb2dhbiBUdWNrZXInLFxuICAgICAgICAncG9zaXRpb24nOiAnQXJjdSBWZXN0aWJ1bHVtIEFudGUgQXNzb2NpYXRlcycsXG4gICAgICAgICdvZmZpY2UnOiAnSmVyc2V5JyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDEvMDQnLFxuICAgICAgICAnc2FsYXJ5JzogODYxNjMyLFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RvIG15IGNhbXBhaWduIG1hbmFnZXIgRGF2aWQgUGxvdWZmZSwgbXkgY2hpZWYgc3RyYXRlZ2lzdCBEYXZpZCBBeGVscm9kLCBhbmQgdGhlIGJlc3QgY2FtcGFpZ24gdGVhbSBldmVyIGFzc2VtYmxlZCBpbiB0aGUgaGlzdG9yeSBvZiBwb2xpdGljcyDigJMgeW91IG1hZGUgdGhpcyBoYXBwZW4sIGFuZCBJIGFtIGZvcmV2ZXIgZ3JhdGVmdWwgZm9yIHdoYXQgeW914oCZdmUgc2FjcmlmaWNlZCB0byBnZXQgaXQgZG9uZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdFbWVyeSBNY2Rvd2VsbCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdHcmF2aWRhIENvbXBhbnknLFxuICAgICAgICAnb2ZmaWNlJzogJ05ldyBaZWFsYW5kJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDYvMDInLFxuICAgICAgICAnc2FsYXJ5JzogNDEzNTY4LFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RvIG15IGNhbXBhaWduIG1hbmFnZXIgRGF2aWQgUGxvdWZmZSwgbXkgY2hpZWYgc3RyYXRlZ2lzdCBEYXZpZCBBeGVscm9kLCBhbmQgdGhlIGJlc3QgY2FtcGFpZ24gdGVhbSBldmVyIGFzc2VtYmxlZCBpbiB0aGUgaGlzdG9yeSBvZiBwb2xpdGljcyDigJMgeW91IG1hZGUgdGhpcyBoYXBwZW4sIGFuZCBJIGFtIGZvcmV2ZXIgZ3JhdGVmdWwgZm9yIHdoYXQgeW914oCZdmUgc2FjcmlmaWNlZCB0byBnZXQgaXQgZG9uZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdZYWVsIEdyZWVyJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ09yY2kgTGltaXRlZCcsXG4gICAgICAgICdvZmZpY2UnOiAnTWFkYWdhc2NhcicsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzEyLzA0JyxcbiAgICAgICAgJ3NhbGFyeSc6IDEyMTgzMSxcbiAgICAgICAgJ3N0YXR1cyc6ICdOZXcgTGVhZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUbyBteSBjYW1wYWlnbiBtYW5hZ2VyIERhdmlkIFBsb3VmZmUsIG15IGNoaWVmIHN0cmF0ZWdpc3QgRGF2aWQgQXhlbHJvZCwgYW5kIHRoZSBiZXN0IGNhbXBhaWduIHRlYW0gZXZlciBhc3NlbWJsZWQgaW4gdGhlIGhpc3Rvcnkgb2YgcG9saXRpY3Mg4oCTIHlvdSBtYWRlIHRoaXMgaGFwcGVuLCBhbmQgSSBhbSBmb3JldmVyIGdyYXRlZnVsIGZvciB3aGF0IHlvdeKAmXZlIHNhY3JpZmljZWQgdG8gZ2V0IGl0IGRvbmUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnSmFyZWQgQnVyZ2VzcycsXG4gICAgICAgICdwb3NpdGlvbic6ICdBdWN0b3IgSW5jb3Jwb3JhdGVkJyxcbiAgICAgICAgJ29mZmljZSc6ICdCdXJ1bmRpJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDEvMTInLFxuICAgICAgICAnc2FsYXJ5JzogNjIyNDMsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RvIG15IGNhbXBhaWduIG1hbmFnZXIgRGF2aWQgUGxvdWZmZSwgbXkgY2hpZWYgc3RyYXRlZ2lzdCBEYXZpZCBBeGVscm9kLCBhbmQgdGhlIGJlc3QgY2FtcGFpZ24gdGVhbSBldmVyIGFzc2VtYmxlZCBpbiB0aGUgaGlzdG9yeSBvZiBwb2xpdGljcyDigJMgeW91IG1hZGUgdGhpcyBoYXBwZW4sIGFuZCBJIGFtIGZvcmV2ZXIgZ3JhdGVmdWwgZm9yIHdoYXQgeW914oCZdmUgc2FjcmlmaWNlZCB0byBnZXQgaXQgZG9uZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdTaGFyb24gQ2FtcGJlbGwnLFxuICAgICAgICAncG9zaXRpb24nOiAnRWxpdCBDdXJhYml0dXIgU2VkIENvbnN1bHRpbmcnLFxuICAgICAgICAnb2ZmaWNlJzogJ0NvbW9yb3MnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNC8wOS8xNCcsXG4gICAgICAgICdzYWxhcnknOiAyMDA4NTQsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RvIG15IGNhbXBhaWduIG1hbmFnZXIgRGF2aWQgUGxvdWZmZSwgbXkgY2hpZWYgc3RyYXRlZ2lzdCBEYXZpZCBBeGVscm9kLCBhbmQgdGhlIGJlc3QgY2FtcGFpZ24gdGVhbSBldmVyIGFzc2VtYmxlZCBpbiB0aGUgaGlzdG9yeSBvZiBwb2xpdGljcyDigJMgeW91IG1hZGUgdGhpcyBoYXBwZW4sIGFuZCBJIGFtIGZvcmV2ZXIgZ3JhdGVmdWwgZm9yIHdoYXQgeW914oCZdmUgc2FjcmlmaWNlZCB0byBnZXQgaXQgZG9uZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0ZpbmFuY2UnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnWWVvIENodXJjaCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdEb25lYyBWaXRhZSBFcmF0IFBDJyxcbiAgICAgICAgJ29mZmljZSc6ICdTYXVkaSBBcmFiaWEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNi8wNycsXG4gICAgICAgICdzYWxhcnknOiA1ODExOTMsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RvIG15IGNhbXBhaWduIG1hbmFnZXIgRGF2aWQgUGxvdWZmZSwgbXkgY2hpZWYgc3RyYXRlZ2lzdCBEYXZpZCBBeGVscm9kLCBhbmQgdGhlIGJlc3QgY2FtcGFpZ24gdGVhbSBldmVyIGFzc2VtYmxlZCBpbiB0aGUgaGlzdG9yeSBvZiBwb2xpdGljcyDigJMgeW91IG1hZGUgdGhpcyBoYXBwZW4sIGFuZCBJIGFtIGZvcmV2ZXIgZ3JhdGVmdWwgZm9yIHdoYXQgeW914oCZdmUgc2FjcmlmaWNlZCB0byBnZXQgaXQgZG9uZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0ZpbmFuY2UnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnS3lsaWUgQmFybG93JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0Zlcm1lbnR1bSBSaXN1cyBDb3Jwb3JhdGlvbicsXG4gICAgICAgICdvZmZpY2UnOiAnUGFwdWEgTmV3IEd1aW5lYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzEyLzAzJyxcbiAgICAgICAgJ3NhbGFyeSc6IDQxODExNSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQW5kIHRvIGFsbCB0aG9zZSB3YXRjaGluZyB0b25pZ2h0IGZyb20gYmV5b25kIG91ciBzaG9yZXMsIGZyb20gcGFybGlhbWVudHMgYW5kIHBhbGFjZXMgdG8gdGhvc2Ugd2hvIGFyZSBodWRkbGVkIGFyb3VuZCByYWRpb3MgaW4gdGhlIGZvcmdvdHRlbiBjb3JuZXJzIG9mIG91ciB3b3JsZCDigJMgb3VyIHN0b3JpZXMgYXJlIHNpbmd1bGFyLCBidXQgb3VyIGRlc3RpbnkgaXMgc2hhcmVkLCBhbmQgYSBuZXcgZGF3biBvZiBBbWVyaWNhbiBsZWFkZXJzaGlwIGlzIGF0IGhhbmQuIFRvIHRob3NlIHdobyB3b3VsZCB0ZWFyIHRoaXMgd29ybGQgZG93biDigJMgd2Ugd2lsbCBkZWZlYXQgeW91LiBUbyB0aG9zZSB3aG8gc2VlayBwZWFjZSBhbmQgc2VjdXJpdHkg4oCTIHdlIHN1cHBvcnQgeW91LiBBbmQgdG8gYWxsIHRob3NlIHdobyBoYXZlIHdvbmRlcmVkIGlmIEFtZXJpY2HigJlzIGJlYWNvbiBzdGlsbCBidXJucyBhcyBicmlnaHQg4oCTIHRvbmlnaHQgd2UgcHJvdmVkIG9uY2UgbW9yZSB0aGF0IHRoZSB0cnVlIHN0cmVuZ3RoIG9mIG91ciBuYXRpb24gY29tZXMgbm90IGZyb20gb3VyIHRoZSBtaWdodCBvZiBvdXIgYXJtcyBvciB0aGUgc2NhbGUgb2Ygb3VyIHdlYWx0aCwgYnV0IGZyb20gdGhlIGVuZHVyaW5nIHBvd2VyIG9mIG91ciBpZGVhbHM6IGRlbW9jcmFjeSwgbGliZXJ0eSwgb3Bwb3J0dW5pdHksIGFuZCB1bnlpZWxkaW5nIGhvcGUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdGaW5hbmNlJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ05lbGwgTGVvbmFyZCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdWZXN0aWJ1bHVtIENvbnN1bHRpbmcnLFxuICAgICAgICAnb2ZmaWNlJzogJ1NhdWRpIEFyYWJpYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA1LzI5JyxcbiAgICAgICAgJ3NhbGFyeSc6IDQ2NjIwMSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQW5kIHRvIGFsbCB0aG9zZSB3YXRjaGluZyB0b25pZ2h0IGZyb20gYmV5b25kIG91ciBzaG9yZXMsIGZyb20gcGFybGlhbWVudHMgYW5kIHBhbGFjZXMgdG8gdGhvc2Ugd2hvIGFyZSBodWRkbGVkIGFyb3VuZCByYWRpb3MgaW4gdGhlIGZvcmdvdHRlbiBjb3JuZXJzIG9mIG91ciB3b3JsZCDigJMgb3VyIHN0b3JpZXMgYXJlIHNpbmd1bGFyLCBidXQgb3VyIGRlc3RpbnkgaXMgc2hhcmVkLCBhbmQgYSBuZXcgZGF3biBvZiBBbWVyaWNhbiBsZWFkZXJzaGlwIGlzIGF0IGhhbmQuIFRvIHRob3NlIHdobyB3b3VsZCB0ZWFyIHRoaXMgd29ybGQgZG93biDigJMgd2Ugd2lsbCBkZWZlYXQgeW91LiBUbyB0aG9zZSB3aG8gc2VlayBwZWFjZSBhbmQgc2VjdXJpdHkg4oCTIHdlIHN1cHBvcnQgeW91LiBBbmQgdG8gYWxsIHRob3NlIHdobyBoYXZlIHdvbmRlcmVkIGlmIEFtZXJpY2HigJlzIGJlYWNvbiBzdGlsbCBidXJucyBhcyBicmlnaHQg4oCTIHRvbmlnaHQgd2UgcHJvdmVkIG9uY2UgbW9yZSB0aGF0IHRoZSB0cnVlIHN0cmVuZ3RoIG9mIG91ciBuYXRpb24gY29tZXMgbm90IGZyb20gb3VyIHRoZSBtaWdodCBvZiBvdXIgYXJtcyBvciB0aGUgc2NhbGUgb2Ygb3VyIHdlYWx0aCwgYnV0IGZyb20gdGhlIGVuZHVyaW5nIHBvd2VyIG9mIG91ciBpZGVhbHM6IGRlbW9jcmFjeSwgbGliZXJ0eSwgb3Bwb3J0dW5pdHksIGFuZCB1bnlpZWxkaW5nIGhvcGUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdGaW5hbmNlJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0JyYW5kb24gRmxlbWluZycsXG4gICAgICAgICdwb3NpdGlvbic6ICdEb25lYyBFZ2VzdGFzIEFzc29jaWF0ZXMnLFxuICAgICAgICAnb2ZmaWNlJzogJ1BvbGFuZCcsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAxLzIyJyxcbiAgICAgICAgJ3NhbGFyeSc6IDgwMDAxMSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQW5kIHRvIGFsbCB0aG9zZSB3YXRjaGluZyB0b25pZ2h0IGZyb20gYmV5b25kIG91ciBzaG9yZXMsIGZyb20gcGFybGlhbWVudHMgYW5kIHBhbGFjZXMgdG8gdGhvc2Ugd2hvIGFyZSBodWRkbGVkIGFyb3VuZCByYWRpb3MgaW4gdGhlIGZvcmdvdHRlbiBjb3JuZXJzIG9mIG91ciB3b3JsZCDigJMgb3VyIHN0b3JpZXMgYXJlIHNpbmd1bGFyLCBidXQgb3VyIGRlc3RpbnkgaXMgc2hhcmVkLCBhbmQgYSBuZXcgZGF3biBvZiBBbWVyaWNhbiBsZWFkZXJzaGlwIGlzIGF0IGhhbmQuIFRvIHRob3NlIHdobyB3b3VsZCB0ZWFyIHRoaXMgd29ybGQgZG93biDigJMgd2Ugd2lsbCBkZWZlYXQgeW91LiBUbyB0aG9zZSB3aG8gc2VlayBwZWFjZSBhbmQgc2VjdXJpdHkg4oCTIHdlIHN1cHBvcnQgeW91LiBBbmQgdG8gYWxsIHRob3NlIHdobyBoYXZlIHdvbmRlcmVkIGlmIEFtZXJpY2HigJlzIGJlYWNvbiBzdGlsbCBidXJucyBhcyBicmlnaHQg4oCTIHRvbmlnaHQgd2UgcHJvdmVkIG9uY2UgbW9yZSB0aGF0IHRoZSB0cnVlIHN0cmVuZ3RoIG9mIG91ciBuYXRpb24gY29tZXMgbm90IGZyb20gb3VyIHRoZSBtaWdodCBvZiBvdXIgYXJtcyBvciB0aGUgc2NhbGUgb2Ygb3VyIHdlYWx0aCwgYnV0IGZyb20gdGhlIGVuZHVyaW5nIHBvd2VyIG9mIG91ciBpZGVhbHM6IGRlbW9jcmFjeSwgbGliZXJ0eSwgb3Bwb3J0dW5pdHksIGFuZCB1bnlpZWxkaW5nIGhvcGUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdGaW5hbmNlJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0luZ2EgUGVuYScsXG4gICAgICAgICdwb3NpdGlvbic6ICdFdCBNYWduaXMgRGlzIExpbWl0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ0JlbGdpdW0nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNS8xOCcsXG4gICAgICAgICdzYWxhcnknOiA1NjQyNDUsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0FuZCB0byBhbGwgdGhvc2Ugd2F0Y2hpbmcgdG9uaWdodCBmcm9tIGJleW9uZCBvdXIgc2hvcmVzLCBmcm9tIHBhcmxpYW1lbnRzIGFuZCBwYWxhY2VzIHRvIHRob3NlIHdobyBhcmUgaHVkZGxlZCBhcm91bmQgcmFkaW9zIGluIHRoZSBmb3Jnb3R0ZW4gY29ybmVycyBvZiBvdXIgd29ybGQg4oCTIG91ciBzdG9yaWVzIGFyZSBzaW5ndWxhciwgYnV0IG91ciBkZXN0aW55IGlzIHNoYXJlZCwgYW5kIGEgbmV3IGRhd24gb2YgQW1lcmljYW4gbGVhZGVyc2hpcCBpcyBhdCBoYW5kLiBUbyB0aG9zZSB3aG8gd291bGQgdGVhciB0aGlzIHdvcmxkIGRvd24g4oCTIHdlIHdpbGwgZGVmZWF0IHlvdS4gVG8gdGhvc2Ugd2hvIHNlZWsgcGVhY2UgYW5kIHNlY3VyaXR5IOKAkyB3ZSBzdXBwb3J0IHlvdS4gQW5kIHRvIGFsbCB0aG9zZSB3aG8gaGF2ZSB3b25kZXJlZCBpZiBBbWVyaWNh4oCZcyBiZWFjb24gc3RpbGwgYnVybnMgYXMgYnJpZ2h0IOKAkyB0b25pZ2h0IHdlIHByb3ZlZCBvbmNlIG1vcmUgdGhhdCB0aGUgdHJ1ZSBzdHJlbmd0aCBvZiBvdXIgbmF0aW9uIGNvbWVzIG5vdCBmcm9tIG91ciB0aGUgbWlnaHQgb2Ygb3VyIGFybXMgb3IgdGhlIHNjYWxlIG9mIG91ciB3ZWFsdGgsIGJ1dCBmcm9tIHRoZSBlbmR1cmluZyBwb3dlciBvZiBvdXIgaWRlYWxzOiBkZW1vY3JhY3ksIGxpYmVydHksIG9wcG9ydHVuaXR5LCBhbmQgdW55aWVsZGluZyBob3BlLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydQZXJtZW5hbnQnLCAnRmluYW5jZSddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdBcmRlbiBSdXNzbycsXG4gICAgICAgICdwb3NpdGlvbic6ICdFc3QgVGVtcG9yIEJpYmVuZHVtIENvcnAuJyxcbiAgICAgICAgJ29mZmljZSc6ICdEb21pbmljYW4gUmVwdWJsaWMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNy8yMycsXG4gICAgICAgICdzYWxhcnknOiAzNTcyMjIsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0FuZCB0byBhbGwgdGhvc2Ugd2F0Y2hpbmcgdG9uaWdodCBmcm9tIGJleW9uZCBvdXIgc2hvcmVzLCBmcm9tIHBhcmxpYW1lbnRzIGFuZCBwYWxhY2VzIHRvIHRob3NlIHdobyBhcmUgaHVkZGxlZCBhcm91bmQgcmFkaW9zIGluIHRoZSBmb3Jnb3R0ZW4gY29ybmVycyBvZiBvdXIgd29ybGQg4oCTIG91ciBzdG9yaWVzIGFyZSBzaW5ndWxhciwgYnV0IG91ciBkZXN0aW55IGlzIHNoYXJlZCwgYW5kIGEgbmV3IGRhd24gb2YgQW1lcmljYW4gbGVhZGVyc2hpcCBpcyBhdCBoYW5kLiBUbyB0aG9zZSB3aG8gd291bGQgdGVhciB0aGlzIHdvcmxkIGRvd24g4oCTIHdlIHdpbGwgZGVmZWF0IHlvdS4gVG8gdGhvc2Ugd2hvIHNlZWsgcGVhY2UgYW5kIHNlY3VyaXR5IOKAkyB3ZSBzdXBwb3J0IHlvdS4gQW5kIHRvIGFsbCB0aG9zZSB3aG8gaGF2ZSB3b25kZXJlZCBpZiBBbWVyaWNh4oCZcyBiZWFjb24gc3RpbGwgYnVybnMgYXMgYnJpZ2h0IOKAkyB0b25pZ2h0IHdlIHByb3ZlZCBvbmNlIG1vcmUgdGhhdCB0aGUgdHJ1ZSBzdHJlbmd0aCBvZiBvdXIgbmF0aW9uIGNvbWVzIG5vdCBmcm9tIG91ciB0aGUgbWlnaHQgb2Ygb3VyIGFybXMgb3IgdGhlIHNjYWxlIG9mIG91ciB3ZWFsdGgsIGJ1dCBmcm9tIHRoZSBlbmR1cmluZyBwb3dlciBvZiBvdXIgaWRlYWxzOiBkZW1vY3JhY3ksIGxpYmVydHksIG9wcG9ydHVuaXR5LCBhbmQgdW55aWVsZGluZyBob3BlLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydQZXJtZW5hbnQnLCAnRmluYW5jZSddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdMaWJlcnR5IEdhbGxlZ29zJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ05lYyBEaWFtIExMQycsXG4gICAgICAgICdvZmZpY2UnOiAnR2hhbmEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNi8xOCcsXG4gICAgICAgICdzYWxhcnknOiA1NTQzNzUsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0FuZCB0byBhbGwgdGhvc2Ugd2F0Y2hpbmcgdG9uaWdodCBmcm9tIGJleW9uZCBvdXIgc2hvcmVzLCBmcm9tIHBhcmxpYW1lbnRzIGFuZCBwYWxhY2VzIHRvIHRob3NlIHdobyBhcmUgaHVkZGxlZCBhcm91bmQgcmFkaW9zIGluIHRoZSBmb3Jnb3R0ZW4gY29ybmVycyBvZiBvdXIgd29ybGQg4oCTIG91ciBzdG9yaWVzIGFyZSBzaW5ndWxhciwgYnV0IG91ciBkZXN0aW55IGlzIHNoYXJlZCwgYW5kIGEgbmV3IGRhd24gb2YgQW1lcmljYW4gbGVhZGVyc2hpcCBpcyBhdCBoYW5kLiBUbyB0aG9zZSB3aG8gd291bGQgdGVhciB0aGlzIHdvcmxkIGRvd24g4oCTIHdlIHdpbGwgZGVmZWF0IHlvdS4gVG8gdGhvc2Ugd2hvIHNlZWsgcGVhY2UgYW5kIHNlY3VyaXR5IOKAkyB3ZSBzdXBwb3J0IHlvdS4gQW5kIHRvIGFsbCB0aG9zZSB3aG8gaGF2ZSB3b25kZXJlZCBpZiBBbWVyaWNh4oCZcyBiZWFjb24gc3RpbGwgYnVybnMgYXMgYnJpZ2h0IOKAkyB0b25pZ2h0IHdlIHByb3ZlZCBvbmNlIG1vcmUgdGhhdCB0aGUgdHJ1ZSBzdHJlbmd0aCBvZiBvdXIgbmF0aW9uIGNvbWVzIG5vdCBmcm9tIG91ciB0aGUgbWlnaHQgb2Ygb3VyIGFybXMgb3IgdGhlIHNjYWxlIG9mIG91ciB3ZWFsdGgsIGJ1dCBmcm9tIHRoZSBlbmR1cmluZyBwb3dlciBvZiBvdXIgaWRlYWxzOiBkZW1vY3JhY3ksIGxpYmVydHksIG9wcG9ydHVuaXR5LCBhbmQgdW55aWVsZGluZyBob3BlLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydQZXJtZW5hbnQnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0Rlbm5pcyBZb3JrJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ051bGxhbSBTdXNjaXBpdCBGb3VuZGF0aW9uJyxcbiAgICAgICAgJ29mZmljZSc6ICdOYW1pYmlhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDMvMjAnLFxuICAgICAgICAnc2FsYXJ5JzogOTA0MTcsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0FuZCB0byBhbGwgdGhvc2Ugd2F0Y2hpbmcgdG9uaWdodCBmcm9tIGJleW9uZCBvdXIgc2hvcmVzLCBmcm9tIHBhcmxpYW1lbnRzIGFuZCBwYWxhY2VzIHRvIHRob3NlIHdobyBhcmUgaHVkZGxlZCBhcm91bmQgcmFkaW9zIGluIHRoZSBmb3Jnb3R0ZW4gY29ybmVycyBvZiBvdXIgd29ybGQg4oCTIG91ciBzdG9yaWVzIGFyZSBzaW5ndWxhciwgYnV0IG91ciBkZXN0aW55IGlzIHNoYXJlZCwgYW5kIGEgbmV3IGRhd24gb2YgQW1lcmljYW4gbGVhZGVyc2hpcCBpcyBhdCBoYW5kLiBUbyB0aG9zZSB3aG8gd291bGQgdGVhciB0aGlzIHdvcmxkIGRvd24g4oCTIHdlIHdpbGwgZGVmZWF0IHlvdS4gVG8gdGhvc2Ugd2hvIHNlZWsgcGVhY2UgYW5kIHNlY3VyaXR5IOKAkyB3ZSBzdXBwb3J0IHlvdS4gQW5kIHRvIGFsbCB0aG9zZSB3aG8gaGF2ZSB3b25kZXJlZCBpZiBBbWVyaWNh4oCZcyBiZWFjb24gc3RpbGwgYnVybnMgYXMgYnJpZ2h0IOKAkyB0b25pZ2h0IHdlIHByb3ZlZCBvbmNlIG1vcmUgdGhhdCB0aGUgdHJ1ZSBzdHJlbmd0aCBvZiBvdXIgbmF0aW9uIGNvbWVzIG5vdCBmcm9tIG91ciB0aGUgbWlnaHQgb2Ygb3VyIGFybXMgb3IgdGhlIHNjYWxlIG9mIG91ciB3ZWFsdGgsIGJ1dCBmcm9tIHRoZSBlbmR1cmluZyBwb3dlciBvZiBvdXIgaWRlYWxzOiBkZW1vY3JhY3ksIGxpYmVydHksIG9wcG9ydHVuaXR5LCBhbmQgdW55aWVsZGluZyBob3BlLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydQZXJtZW5hbnQnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1BldHJhIENoYW5kbGVyJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1BlZGUgTm9udW1teSBJbmMuJyxcbiAgICAgICAgJ29mZmljZSc6ICdOYW1pYmlhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDMvMjYnLFxuICAgICAgICAnc2FsYXJ5JzogNTk4OTE1LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdBbmQgdG8gYWxsIHRob3NlIHdhdGNoaW5nIHRvbmlnaHQgZnJvbSBiZXlvbmQgb3VyIHNob3JlcywgZnJvbSBwYXJsaWFtZW50cyBhbmQgcGFsYWNlcyB0byB0aG9zZSB3aG8gYXJlIGh1ZGRsZWQgYXJvdW5kIHJhZGlvcyBpbiB0aGUgZm9yZ290dGVuIGNvcm5lcnMgb2Ygb3VyIHdvcmxkIOKAkyBvdXIgc3RvcmllcyBhcmUgc2luZ3VsYXIsIGJ1dCBvdXIgZGVzdGlueSBpcyBzaGFyZWQsIGFuZCBhIG5ldyBkYXduIG9mIEFtZXJpY2FuIGxlYWRlcnNoaXAgaXMgYXQgaGFuZC4gVG8gdGhvc2Ugd2hvIHdvdWxkIHRlYXIgdGhpcyB3b3JsZCBkb3duIOKAkyB3ZSB3aWxsIGRlZmVhdCB5b3UuIFRvIHRob3NlIHdobyBzZWVrIHBlYWNlIGFuZCBzZWN1cml0eSDigJMgd2Ugc3VwcG9ydCB5b3UuIEFuZCB0byBhbGwgdGhvc2Ugd2hvIGhhdmUgd29uZGVyZWQgaWYgQW1lcmljYeKAmXMgYmVhY29uIHN0aWxsIGJ1cm5zIGFzIGJyaWdodCDigJMgdG9uaWdodCB3ZSBwcm92ZWQgb25jZSBtb3JlIHRoYXQgdGhlIHRydWUgc3RyZW5ndGggb2Ygb3VyIG5hdGlvbiBjb21lcyBub3QgZnJvbSBvdXIgdGhlIG1pZ2h0IG9mIG91ciBhcm1zIG9yIHRoZSBzY2FsZSBvZiBvdXIgd2VhbHRoLCBidXQgZnJvbSB0aGUgZW5kdXJpbmcgcG93ZXIgb2Ygb3VyIGlkZWFsczogZGVtb2NyYWN5LCBsaWJlcnR5LCBvcHBvcnR1bml0eSwgYW5kIHVueWllbGRpbmcgaG9wZS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnUGVybWVuYW50JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdBdXJlbGlhIE1hcnNoYWxsJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0RvbmVjIENvbnN1bHRpbmcnLFxuICAgICAgICAnb2ZmaWNlJzogJ05pY2FyYWd1YScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA4LzE4JyxcbiAgICAgICAgJ3NhbGFyeSc6IDIwMTY4MCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQW5kIHRvIGFsbCB0aG9zZSB3YXRjaGluZyB0b25pZ2h0IGZyb20gYmV5b25kIG91ciBzaG9yZXMsIGZyb20gcGFybGlhbWVudHMgYW5kIHBhbGFjZXMgdG8gdGhvc2Ugd2hvIGFyZSBodWRkbGVkIGFyb3VuZCByYWRpb3MgaW4gdGhlIGZvcmdvdHRlbiBjb3JuZXJzIG9mIG91ciB3b3JsZCDigJMgb3VyIHN0b3JpZXMgYXJlIHNpbmd1bGFyLCBidXQgb3VyIGRlc3RpbnkgaXMgc2hhcmVkLCBhbmQgYSBuZXcgZGF3biBvZiBBbWVyaWNhbiBsZWFkZXJzaGlwIGlzIGF0IGhhbmQuIFRvIHRob3NlIHdobyB3b3VsZCB0ZWFyIHRoaXMgd29ybGQgZG93biDigJMgd2Ugd2lsbCBkZWZlYXQgeW91LiBUbyB0aG9zZSB3aG8gc2VlayBwZWFjZSBhbmQgc2VjdXJpdHkg4oCTIHdlIHN1cHBvcnQgeW91LiBBbmQgdG8gYWxsIHRob3NlIHdobyBoYXZlIHdvbmRlcmVkIGlmIEFtZXJpY2HigJlzIGJlYWNvbiBzdGlsbCBidXJucyBhcyBicmlnaHQg4oCTIHRvbmlnaHQgd2UgcHJvdmVkIG9uY2UgbW9yZSB0aGF0IHRoZSB0cnVlIHN0cmVuZ3RoIG9mIG91ciBuYXRpb24gY29tZXMgbm90IGZyb20gb3VyIHRoZSBtaWdodCBvZiBvdXIgYXJtcyBvciB0aGUgc2NhbGUgb2Ygb3VyIHdlYWx0aCwgYnV0IGZyb20gdGhlIGVuZHVyaW5nIHBvd2VyIG9mIG91ciBpZGVhbHM6IGRlbW9jcmFjeSwgbGliZXJ0eSwgb3Bwb3J0dW5pdHksIGFuZCB1bnlpZWxkaW5nIGhvcGUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1Blcm1lbmFudCcsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnUm9zZSBDYXJ0ZXInLFxuICAgICAgICAncG9zaXRpb24nOiAnRW5pbSBDb25zZXF1YXQgUHVydXMgSW5kdXN0cmllcycsXG4gICAgICAgICdvZmZpY2UnOiAnTW9yb2NjbycsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAzLzA2JyxcbiAgICAgICAgJ3NhbGFyeSc6IDIyMDE4NyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydQZXJtZW5hbnQnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0RlbnRvbiBBdGtpbnMnLFxuICAgICAgICAncG9zaXRpb24nOiAnTm9uIFZlc3RpYnVsdW0gUEMnLFxuICAgICAgICAnb2ZmaWNlJzogJ01hbGknLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNC8xOScsXG4gICAgICAgICdzYWxhcnknOiAzMjQ1ODgsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnUGVybWVuYW50JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdHZXJtYWluZSBPc2Jvcm4nLFxuICAgICAgICAncG9zaXRpb24nOiAnVHJpc3RpcXVlIEFsaXF1ZXQgUEMnLFxuICAgICAgICAnb2ZmaWNlJzogJ0xlc290aG8nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMS8xOScsXG4gICAgICAgICdzYWxhcnknOiAzNTExMDgsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdOZWxsIEJ1dGxlcicsXG4gICAgICAgICdwb3NpdGlvbic6ICdTaXQgQW1ldCBEYXBpYnVzIEluZHVzdHJpZXMnLFxuICAgICAgICAnb2ZmaWNlJzogJ0N1YmEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMS8wNicsXG4gICAgICAgICdzYWxhcnknOiAyMzAwNzIsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ01hcmtldGluZyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdCcmVudCBTdGVpbicsXG4gICAgICAgICdwb3NpdGlvbic6ICdFdSBBdWd1ZSBQb3J0dGl0b3IgTExQJyxcbiAgICAgICAgJ29mZmljZSc6ICdDeXBydXMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNC8xMS8wMicsXG4gICAgICAgICdzYWxhcnknOiA4NTM0MTMsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnTWFya2V0aW5nJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0FsZXhhbmRyYSBTaGF3JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0FlbmVhbiBHcmF2aWRhIExpbWl0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ1VydWd1YXknLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNS8xNicsXG4gICAgICAgICdzYWxhcnknOiA0MDE5NzAsXG4gICAgICAgICdzdGF0dXMnOiAnQXJjaGl2ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnTWFya2V0aW5nJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1Zlcm9uaWNhIEFsbGlzb24nLFxuICAgICAgICAncG9zaXRpb24nOiAnQWxpcXVldCBEaWFtIFNlZCBJbnN0aXR1dGUnLFxuICAgICAgICAnb2ZmaWNlJzogJ1NhbW9hJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDUvMTcnLFxuICAgICAgICAnc2FsYXJ5JzogNzkxOTMsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnTWFya2V0aW5nJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0thdGVseW4gR2FtYmxlJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1NlZCBBc3NvY2lhdGVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdNYXVyaXRpdXMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMy8yMCcsXG4gICAgICAgICdzYWxhcnknOiA0ODQyOTksXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnTWFya2V0aW5nJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0phbWVzIEdyZWVyJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0EgRHVpIEluY29ycG9yYXRlZCcsXG4gICAgICAgICdvZmZpY2UnOiAnTm9yd2F5JyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDIvMjEnLFxuICAgICAgICAnc2FsYXJ5JzogMzMzNTE4LFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29udHJhY3RvcicsICdNYXJrZXRpbmcnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQ2FpbiBWYXNxdWV6JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ051bGxhIEZhY2lsaXNpcyBTdXNwZW5kaXNzZSBJbnN0aXR1dGUnLFxuICAgICAgICAnb2ZmaWNlJzogJ0NoaW5hJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDUvMjcnLFxuICAgICAgICAnc2FsYXJ5JzogNjUxNzYxLFxuICAgICAgICAnc3RhdHVzJzogJ05ldyBMZWFkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29udHJhY3RvcicsICdNYXJrZXRpbmcnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnU2hhZWxlaWdoIEJhcnInLFxuICAgICAgICAncG9zaXRpb24nOiAnRWxlaWZlbmQgQ3JhcyBJbnN0aXR1dGUnLFxuICAgICAgICAnb2ZmaWNlJzogJ0doYW5hJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDQvMDEnLFxuICAgICAgICAnc2FsYXJ5JzogNjI3MDk1LFxuICAgICAgICAnc3RhdHVzJzogJ0FyY2hpdmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29udHJhY3RvcicsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQmFrZXIgTWNrYXknLFxuICAgICAgICAncG9zaXRpb24nOiAnVXQgU2FnaXR0aXMgQXNzb2NpYXRlcycsXG4gICAgICAgICdvZmZpY2UnOiAnSXNsZSBvZiBNYW4nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMS8xMicsXG4gICAgICAgICdzYWxhcnknOiA3NDIyNDcsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb250cmFjdG9yJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdKYXltZSBQYWNlJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0NyYXMgRXUgVGVsbHVzIEFzc29jaWF0ZXMnLFxuICAgICAgICAnb2ZmaWNlJzogJ0JvdXZldCBJc2xhbmQnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wOC8xMicsXG4gICAgICAgICdzYWxhcnknOiA1OTE1ODgsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb250cmFjdG9yJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdSZXViZW4gQWxiZXJ0JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0xvYm9ydGlzIEluc3RpdHV0ZScsXG4gICAgICAgICdvZmZpY2UnOiAnWmFtYmlhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDQvMDQnLFxuICAgICAgICAnc2FsYXJ5JzogNzkxNDA4LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbnRyYWN0b3InLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0lkb2xhIEJ1cm5zJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ05vbiBJbmR1c3RyaWVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdNeWFubWFyJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDYvMjQnLFxuICAgICAgICAnc2FsYXJ5JzogMTQyOTA2LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbnRyYWN0b3InLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0xhdXJhIE1hY2lhcycsXG4gICAgICAgICdwb3NpdGlvbic6ICdQaGFzZWxsdXMgSW5jLicsXG4gICAgICAgICdvZmZpY2UnOiAnTWF1cml0YW5pYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzExLzIxJyxcbiAgICAgICAgJ3NhbGFyeSc6IDIyNjU5MSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ05pY2hvbGUgU2FsYXMnLFxuICAgICAgICAncG9zaXRpb24nOiAnRHVpcyBQQycsXG4gICAgICAgICdvZmZpY2UnOiAnTWFkYWdhc2NhcicsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAxLzE4JyxcbiAgICAgICAgJ3NhbGFyeSc6IDIzNDE5NixcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSSB3YW50IHRvIHRoYW5rIG15IHBhcnRuZXIgaW4gdGhpcyBqb3VybmV5LCBhIG1hbiB3aG8gY2FtcGFpZ25lZCBmcm9tIGhpcyBoZWFydCBhbmQgc3Bva2UgZm9yIHRoZSBtZW4gYW5kIHdvbWVuIGhlIGdyZXcgdXAgd2l0aCBvbiB0aGUgc3RyZWV0cyBvZiBTY3JhbnRvbiBhbmQgcm9kZSB3aXRoIG9uIHRoYXQgdHJhaW4gaG9tZSB0byBEZWxhd2FyZSwgdGhlIFZpY2UgUHJlc2lkZW50LWVsZWN0IG9mIHRoZSBVbml0ZWQgU3RhdGVzLCBKb2UgQmlkZW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnSHVudGVyIFdhbHRlcicsXG4gICAgICAgICdwb3NpdGlvbic6ICdVbGxhbWNvcnBlciBEdWlzIEN1cnN1cyBGb3VuZGF0aW9uJyxcbiAgICAgICAgJ29mZmljZSc6ICdCcmF6aWwnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMi8yOCcsXG4gICAgICAgICdzYWxhcnknOiA2NTUwNTIsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0kgd2FudCB0byB0aGFuayBteSBwYXJ0bmVyIGluIHRoaXMgam91cm5leSwgYSBtYW4gd2hvIGNhbXBhaWduZWQgZnJvbSBoaXMgaGVhcnQgYW5kIHNwb2tlIGZvciB0aGUgbWVuIGFuZCB3b21lbiBoZSBncmV3IHVwIHdpdGggb24gdGhlIHN0cmVldHMgb2YgU2NyYW50b24gYW5kIHJvZGUgd2l0aCBvbiB0aGF0IHRyYWluIGhvbWUgdG8gRGVsYXdhcmUsIHRoZSBWaWNlIFByZXNpZGVudC1lbGVjdCBvZiB0aGUgVW5pdGVkIFN0YXRlcywgSm9lIEJpZGVuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0FzaGVyIFJpY2gnLFxuICAgICAgICAncG9zaXRpb24nOiAnTWF1cmlzIElwc3VtIExMUCcsXG4gICAgICAgICdvZmZpY2UnOiAnUGFyYWd1YXknLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wOC8wOCcsXG4gICAgICAgICdzYWxhcnknOiAyMjI5NDYsXG4gICAgICAgICdzdGF0dXMnOiAnQXJjaGl2ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSSB3YW50IHRvIHRoYW5rIG15IHBhcnRuZXIgaW4gdGhpcyBqb3VybmV5LCBhIG1hbiB3aG8gY2FtcGFpZ25lZCBmcm9tIGhpcyBoZWFydCBhbmQgc3Bva2UgZm9yIHRoZSBtZW4gYW5kIHdvbWVuIGhlIGdyZXcgdXAgd2l0aCBvbiB0aGUgc3RyZWV0cyBvZiBTY3JhbnRvbiBhbmQgcm9kZSB3aXRoIG9uIHRoYXQgdHJhaW4gaG9tZSB0byBEZWxhd2FyZSwgdGhlIFZpY2UgUHJlc2lkZW50LWVsZWN0IG9mIHRoZSBVbml0ZWQgU3RhdGVzLCBKb2UgQmlkZW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQW5nZWxhIENhcmxzb24nLFxuICAgICAgICAncG9zaXRpb24nOiAnRG9uZWMgVGVtcG9yIEluc3RpdHV0ZScsXG4gICAgICAgICdvZmZpY2UnOiAnUGFwdWEgTmV3IEd1aW5lYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAyLzEyJyxcbiAgICAgICAgJ3NhbGFyeSc6IDU2MjE5NCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSSB3YW50IHRvIHRoYW5rIG15IHBhcnRuZXIgaW4gdGhpcyBqb3VybmV5LCBhIG1hbiB3aG8gY2FtcGFpZ25lZCBmcm9tIGhpcyBoZWFydCBhbmQgc3Bva2UgZm9yIHRoZSBtZW4gYW5kIHdvbWVuIGhlIGdyZXcgdXAgd2l0aCBvbiB0aGUgc3RyZWV0cyBvZiBTY3JhbnRvbiBhbmQgcm9kZSB3aXRoIG9uIHRoYXQgdHJhaW4gaG9tZSB0byBEZWxhd2FyZSwgdGhlIFZpY2UgUHJlc2lkZW50LWVsZWN0IG9mIHRoZSBVbml0ZWQgU3RhdGVzLCBKb2UgQmlkZW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnSmFtZXMgRG9yc2V5JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0lwc3VtIExlbyBBc3NvY2lhdGVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdDb25nbyAoQnJhenphdmlsbGUpJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDEvMTAnLFxuICAgICAgICAnc2FsYXJ5JzogNjI5OTI1LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdJIHdhbnQgdG8gdGhhbmsgbXkgcGFydG5lciBpbiB0aGlzIGpvdXJuZXksIGEgbWFuIHdobyBjYW1wYWlnbmVkIGZyb20gaGlzIGhlYXJ0IGFuZCBzcG9rZSBmb3IgdGhlIG1lbiBhbmQgd29tZW4gaGUgZ3JldyB1cCB3aXRoIG9uIHRoZSBzdHJlZXRzIG9mIFNjcmFudG9uIGFuZCByb2RlIHdpdGggb24gdGhhdCB0cmFpbiBob21lIHRvIERlbGF3YXJlLCB0aGUgVmljZSBQcmVzaWRlbnQtZWxlY3Qgb2YgdGhlIFVuaXRlZCBTdGF0ZXMsIEpvZSBCaWRlbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdXZXNsZXkgQ29iYicsXG4gICAgICAgICdwb3NpdGlvbic6ICdOdW5jIEVzdCBJbmNvcnBvcmF0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ0F1c3RyYWxpYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAxLzMwJyxcbiAgICAgICAgJ3NhbGFyeSc6IDM0MzQ3NixcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSSB3YW50IHRvIHRoYW5rIG15IHBhcnRuZXIgaW4gdGhpcyBqb3VybmV5LCBhIG1hbiB3aG8gY2FtcGFpZ25lZCBmcm9tIGhpcyBoZWFydCBhbmQgc3Bva2UgZm9yIHRoZSBtZW4gYW5kIHdvbWVuIGhlIGdyZXcgdXAgd2l0aCBvbiB0aGUgc3RyZWV0cyBvZiBTY3JhbnRvbiBhbmQgcm9kZSB3aXRoIG9uIHRoYXQgdHJhaW4gaG9tZSB0byBEZWxhd2FyZSwgdGhlIFZpY2UgUHJlc2lkZW50LWVsZWN0IG9mIHRoZSBVbml0ZWQgU3RhdGVzLCBKb2UgQmlkZW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdNZWdoYW4gU3RlcGhlbnMnLFxuICAgICAgICAncG9zaXRpb24nOiAnSW50ZXJkdW0gUEMnLFxuICAgICAgICAnb2ZmaWNlJzogJ1R1cmtleScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzEwLzExJyxcbiAgICAgICAgJ3NhbGFyeSc6IDQ2OTMwNSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSSB3YW50IHRvIHRoYW5rIG15IHBhcnRuZXIgaW4gdGhpcyBqb3VybmV5LCBhIG1hbiB3aG8gY2FtcGFpZ25lZCBmcm9tIGhpcyBoZWFydCBhbmQgc3Bva2UgZm9yIHRoZSBtZW4gYW5kIHdvbWVuIGhlIGdyZXcgdXAgd2l0aCBvbiB0aGUgc3RyZWV0cyBvZiBTY3JhbnRvbiBhbmQgcm9kZSB3aXRoIG9uIHRoYXQgdHJhaW4gaG9tZSB0byBEZWxhd2FyZSwgdGhlIFZpY2UgUHJlc2lkZW50LWVsZWN0IG9mIHRoZSBVbml0ZWQgU3RhdGVzLCBKb2UgQmlkZW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdCZXJ0aGEgSGVycmVyYScsXG4gICAgICAgICdwb3NpdGlvbic6ICdBbWV0IExpbWl0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ0tlbnlhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTEvMjInLFxuICAgICAgICAnc2FsYXJ5JzogNTY2MDYsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0kgd2FudCB0byB0aGFuayBteSBwYXJ0bmVyIGluIHRoaXMgam91cm5leSwgYSBtYW4gd2hvIGNhbXBhaWduZWQgZnJvbSBoaXMgaGVhcnQgYW5kIHNwb2tlIGZvciB0aGUgbWVuIGFuZCB3b21lbiBoZSBncmV3IHVwIHdpdGggb24gdGhlIHN0cmVldHMgb2YgU2NyYW50b24gYW5kIHJvZGUgd2l0aCBvbiB0aGF0IHRyYWluIGhvbWUgdG8gRGVsYXdhcmUsIHRoZSBWaWNlIFByZXNpZGVudC1lbGVjdCBvZiB0aGUgVW5pdGVkIFN0YXRlcywgSm9lIEJpZGVuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnS2FyaW5hIEtleScsXG4gICAgICAgICdwb3NpdGlvbic6ICdRdWlzcXVlIFZhcml1cyBOYW0gQ29tcGFueScsXG4gICAgICAgICdvZmZpY2UnOiAnRnJhbmNlJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDMvMjYnLFxuICAgICAgICAnc2FsYXJ5JzogMzE0MjYwLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdJIHdhbnQgdG8gdGhhbmsgbXkgcGFydG5lciBpbiB0aGlzIGpvdXJuZXksIGEgbWFuIHdobyBjYW1wYWlnbmVkIGZyb20gaGlzIGhlYXJ0IGFuZCBzcG9rZSBmb3IgdGhlIG1lbiBhbmQgd29tZW4gaGUgZ3JldyB1cCB3aXRoIG9uIHRoZSBzdHJlZXRzIG9mIFNjcmFudG9uIGFuZCByb2RlIHdpdGggb24gdGhhdCB0cmFpbiBob21lIHRvIERlbGF3YXJlLCB0aGUgVmljZSBQcmVzaWRlbnQtZWxlY3Qgb2YgdGhlIFVuaXRlZCBTdGF0ZXMsIEpvZSBCaWRlbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29tbXVuaWNhdGlvbnMnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1VyaWVsIENhcnNvbicsXG4gICAgICAgICdwb3NpdGlvbic6ICdQZW5hdGlidXMgUEMnLFxuICAgICAgICAnb2ZmaWNlJzogJ1ZlbmV6dWVsYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAxLzA3JyxcbiAgICAgICAgJ3NhbGFyeSc6IDEwNjMzNSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTWlyYSBCYWlyZCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdGZWxpcyBPcmNpIFBDJyxcbiAgICAgICAgJ29mZmljZSc6ICdOaXVlJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDgvMjUnLFxuICAgICAgICAnc2FsYXJ5JzogNTE1NjcxLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdVcnN1bGEgUGFycmlzaCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdBYyBDb3Jwb3JhdGlvbicsXG4gICAgICAgICdvZmZpY2UnOiAnTWFjYW8nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNi8zMCcsXG4gICAgICAgICdzYWxhcnknOiA3MjI5NSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnSm9zZXBoaW5lIFN5a2VzJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0JsYW5kaXQgQ29uZ3VlIExpbWl0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ0hvbHkgU2VlIChWYXRpY2FuIENpdHkgU3RhdGUpJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTIvMjInLFxuICAgICAgICAnc2FsYXJ5JzogNjk0NjU2LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdNYWdnaWUgU2ltcycsXG4gICAgICAgICdwb3NpdGlvbic6ICdWdWxwdXRhdGUgUG9zdWVyZSBJbmR1c3RyaWVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdTdWRhbicsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzExLzIyJyxcbiAgICAgICAgJ3NhbGFyeSc6IDM2Mzc0MyxcbiAgICAgICAgJ3N0YXR1cyc6ICdOZXcgTGVhZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdSb2dhbiBGdWVudGVzJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1Zlc3RpYnVsdW0gQWNjdW1zYW4gTmVxdWUgQ29tcGFueScsXG4gICAgICAgICdvZmZpY2UnOiAnSmVyc2V5JyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDcvMjknLFxuICAgICAgICAnc2FsYXJ5JzogNjA2MDA0LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdNYXlhIEhhbmV5JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0FjIEZvdW5kYXRpb24nLFxuICAgICAgICAnb2ZmaWNlJzogJ0ZhbGtsYW5kIElzbGFuZHMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wOS8wMycsXG4gICAgICAgICdzYWxhcnknOiA3NDU1MDAsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29tbXVuaWNhdGlvbnMnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0FxdWlsYSBCYXR0bGUnLFxuICAgICAgICAncG9zaXRpb24nOiAnU29jaWlzIE5hdG9xdWUgUGVuYXRpYnVzIEZvdW5kYXRpb24nLFxuICAgICAgICAnb2ZmaWNlJzogJ0F6ZXJiYWlqYW4nLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMy8wNicsXG4gICAgICAgICdzYWxhcnknOiA1ODIyNjUsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnQ29tbXVuaWNhdGlvbnMnLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0Nvbm5vciBDb2xlbWFuJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ09yY2kgTGFjdXMgVmVzdGlidWx1bSBGb3VuZGF0aW9uJyxcbiAgICAgICAgJ29mZmljZSc6ICdDcm9hdGlhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTAvMjEnLFxuICAgICAgICAnc2FsYXJ5JzogNDE2OTU4LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdDaGFyaXR5IFRob21hcycsXG4gICAgICAgICdwb3NpdGlvbic6ICdDb252YWxsaXMgTGlndWxhIERvbmVjIEluYy4nLFxuICAgICAgICAnb2ZmaWNlJzogJ0JlbmluJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDcvMTInLFxuICAgICAgICAnc2FsYXJ5JzogNTQwOTk5LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdCbHl0aGUgUG93ZXJzJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0FtZXQgT3JjaSBMaW1pdGVkJyxcbiAgICAgICAgJ29mZmljZSc6ICdGYWxrbGFuZCBJc2xhbmRzJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDEvMjMnLFxuICAgICAgICAnc2FsYXJ5JzogNDgwMDY3LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ0NvbW11bmljYXRpb25zJywgJ0h1bWFuIFJlc291cmNlcyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdBZHJpYSBCYXR0bGUnLFxuICAgICAgICAncG9zaXRpb24nOiAnT3JuYXJlIExlY3R1cyBJbmNvcnBvcmF0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ0JyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA1LzI4JyxcbiAgICAgICAgJ3NhbGFyeSc6IDI1NzkzNyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdIdW1hbiBSZXNvdXJjZXMnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTWVsYW5pZSBNY2ludHlyZScsXG4gICAgICAgICdwb3NpdGlvbic6ICdOdW5jIENvcnAuJyxcbiAgICAgICAgJ29mZmljZSc6ICdNb25nb2xpYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAxLzA2JyxcbiAgICAgICAgJ3NhbGFyeSc6IDM1OTczNyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdIdW1hbiBSZXNvdXJjZXMnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnS2VlbHkgQmF1ZXInLFxuICAgICAgICAncG9zaXRpb24nOiAnTmVjIFRlbXB1cyBJbnN0aXR1dGUnLFxuICAgICAgICAnb2ZmaWNlJzogJ1NvbWFsaWEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMy8wOScsXG4gICAgICAgICdzYWxhcnknOiA5OTcxOCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdIdW1hbiBSZXNvdXJjZXMnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTm9lbGFuaSBTdHJvbmcnLFxuICAgICAgICAncG9zaXRpb24nOiAnTmVjIExMUCcsXG4gICAgICAgICdvZmZpY2UnOiAnSXJhbicsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA4LzI0JyxcbiAgICAgICAgJ3NhbGFyeSc6IDQ4MDcxOCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydDb21tdW5pY2F0aW9ucycsICdIdW1hbiBSZXNvdXJjZXMnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnSmVhbmV0dGUgSGVuZGVyc29uJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0V1IEVsaXQgTnVsbGEgQ29ycG9yYXRpb24nLFxuICAgICAgICAnb2ZmaWNlJzogJ0l0YWx5JyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDYvMTknLFxuICAgICAgICAnc2FsYXJ5JzogMjUzNzcyLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQ2FuZGFjZSBIdWJlcicsXG4gICAgICAgICdwb3NpdGlvbic6ICdTZWQgSW5zdGl0dXRlJyxcbiAgICAgICAgJ29mZmljZSc6ICdVZ2FuZGEnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNi8xNicsXG4gICAgICAgICdzYWxhcnknOiAzODg4NzksXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdCZXRoYW55IFBvdHRlcicsXG4gICAgICAgICdwb3NpdGlvbic6ICdWaXZhbXVzIE5pYmggRG9sb3IgSW5jb3Jwb3JhdGVkJyxcbiAgICAgICAgJ29mZmljZSc6ICdQdWVydG8gUmljbycsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzExLzEyJyxcbiAgICAgICAgJ3NhbGFyeSc6IDc0NzMxMCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1dob29waSBCdXJrcycsXG4gICAgICAgICdwb3NpdGlvbic6ICdKdXN0byBJbmMuJyxcbiAgICAgICAgJ29mZmljZSc6ICdGaWppJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMDkvMjQnLFxuICAgICAgICAnc2FsYXJ5JzogODAzMDM3LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1NoZWlsYSBMb25nJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0RpYW0gQXNzb2NpYXRlcycsXG4gICAgICAgICdvZmZpY2UnOiAnU2FvIFRvbWUgYW5kIFByaW5jaXBlJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTIvMjEnLFxuICAgICAgICAnc2FsYXJ5JzogNjc0Mzc5LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1NvbnlhIENodXJjaCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdMYW9yZWV0IEluc3RpdHV0ZScsXG4gICAgICAgICdvZmZpY2UnOiAnR3JlbmFkYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA2LzAzJyxcbiAgICAgICAgJ3NhbGFyeSc6IDYyNTE0NyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdTaGFpbmUgRm9yYmVzJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0V1IEFyY3UgTExQJyxcbiAgICAgICAgJ29mZmljZSc6ICdDeXBydXMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMS8xOCcsXG4gICAgICAgICdzYWxhcnknOiAyMDgxMDAsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQWxleGFuZHJhIFBhdHJpY2snLFxuICAgICAgICAncG9zaXRpb24nOiAnTGlndWxhIERvbmVjIEluYy4nLFxuICAgICAgICAnb2ZmaWNlJzogJ1ZpZXQgTmFtJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDQvMDknLFxuICAgICAgICAnc2FsYXJ5JzogMTA0MDYzLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1BhdGllbmNlIFZpbmNlbnQnLFxuICAgICAgICAncG9zaXRpb24nOiAnU2VtIE1vbGVzdGllIEFzc29jaWF0ZXMnLFxuICAgICAgICAnb2ZmaWNlJzogJ1BoaWxpcHBpbmVzJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDcvMDQnLFxuICAgICAgICAnc2FsYXJ5JzogNjczNTU2LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0V2ZWx5biBTbWl0aCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdGdXNjZSBJbmR1c3RyaWVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdUb2dvJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDgvMTUnLFxuICAgICAgICAnc2FsYXJ5JzogNzM3Mjg0LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0tpZXJhbiBHb256YWxleicsXG4gICAgICAgICdwb3NpdGlvbic6ICdOb24gQ29ycC4nLFxuICAgICAgICAnb2ZmaWNlJzogJ0VxdWF0b3JpYWwgR3VpbmVhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDgvMjQnLFxuICAgICAgICAnc2FsYXJ5JzogOTAxOTUsXG4gICAgICAgICdzdGF0dXMnOiAnTmV3IExlYWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdNb2xseSBPbmVpbCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdOb24gRHVpIENvbnN1bHRpbmcnLFxuICAgICAgICAnb2ZmaWNlJzogJ0JlbGl6ZScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzEwLzI4JyxcbiAgICAgICAgJ3NhbGFyeSc6IDE0MDc2NyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBcmNoaXZlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ05pZ2VsIERhdmVucG9ydCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdVbGxhbWNvcnBlciBWZWxpdCBJbiBJbmR1c3RyaWVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdWYW51YXR1JyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDMvMTYnLFxuICAgICAgICAnc2FsYXJ5JzogNzA1MzYsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnVGhvciBZb3VuZycsXG4gICAgICAgICdwb3NpdGlvbic6ICdNYWxlc3VhZGEgQ29uc3VsdGluZycsXG4gICAgICAgICdvZmZpY2UnOiAnRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDEvMjgnLFxuICAgICAgICAnc2FsYXJ5JzogNzU1MDEsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnRmlubiBEZWxhY3J1eicsXG4gICAgICAgICdwb3NpdGlvbic6ICdMb3JlbSBJbmR1c3RyaWVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdDb2NvcyAoS2VlbGluZykgSXNsYW5kcycsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzEyLzExJyxcbiAgICAgICAgJ3NhbGFyeSc6IDc1NDk2NyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBcmNoaXZlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0xhbmUgSGVuZGVyc29uJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1BlZGUgRm91bmRhdGlvbicsXG4gICAgICAgICdvZmZpY2UnOiAnS2F6YWtoc3RhbicsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA3LzAyJyxcbiAgICAgICAgJ3NhbGFyeSc6IDg0MjA1MCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBcmNoaXZlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1NoZWEgUG90dGVyJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0N1cmFiaXR1ciBMaW1pdGVkJyxcbiAgICAgICAgJ29mZmljZSc6ICdUaW1vci1MZXN0ZScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA1LzA3JyxcbiAgICAgICAgJ3NhbGFyeSc6IDI2MzYyOSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBcmNoaXZlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdMYWJvcmUgc2l0IG51bGxhIGFtZXQgZW5pbSByZXByZWhlbmRlcml0IGVzc2UgbGFib3J1bSBMb3JlbSBxdWlzIGluIGV1LicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0JyeW5uIFlhbmcnLFxuICAgICAgICAncG9zaXRpb24nOiAnVXQgTGltaXRlZCcsXG4gICAgICAgICdvZmZpY2UnOiAnTWF5b3R0ZScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAxLzE3JyxcbiAgICAgICAgJ3NhbGFyeSc6IDc0MjkyLFxuICAgICAgICAnc3RhdHVzJzogJ0FyY2hpdmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0xhYm9yZSBzaXQgbnVsbGEgYW1ldCBlbmltIHJlcHJlaGVuZGVyaXQgZXNzZSBsYWJvcnVtIExvcmVtIHF1aXMgaW4gZXUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnS3lsYW4gRnVlbnRlcycsXG4gICAgICAgICdwb3NpdGlvbic6ICdTYXBpZW4gQWVuZWFuIEFzc29jaWF0ZXMnLFxuICAgICAgICAnb2ZmaWNlJzogJ0JyYXppbCcsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzEyLzI4JyxcbiAgICAgICAgJ3NhbGFyeSc6IDEwODYzMixcbiAgICAgICAgJ3N0YXR1cyc6ICdBcmNoaXZlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdMYWJvcmUgc2l0IG51bGxhIGFtZXQgZW5pbSByZXByZWhlbmRlcml0IGVzc2UgbGFib3J1bSBMb3JlbSBxdWlzIGluIGV1LicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydUZW1wb3JhcnknLCAnRGV2ZWxvcGVyJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0xpb25lbCBNY2JyaWRlJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0lwc3VtIFBDJyxcbiAgICAgICAgJ29mZmljZSc6ICdQb3J0dWdhbCcsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA3LzExJyxcbiAgICAgICAgJ3NhbGFyeSc6IDM0MjQ0LFxuICAgICAgICAnc3RhdHVzJzogJ0FyY2hpdmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0xhYm9yZSBzaXQgbnVsbGEgYW1ldCBlbmltIHJlcHJlaGVuZGVyaXQgZXNzZSBsYWJvcnVtIExvcmVtIHF1aXMgaW4gZXUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnUGF1bCBMdWNhcycsXG4gICAgICAgICdwb3NpdGlvbic6ICdFZ2V0IExMUCcsXG4gICAgICAgICdvZmZpY2UnOiAnTmljYXJhZ3VhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMDkvMzAnLFxuICAgICAgICAnc2FsYXJ5JzogNjkwODM0LFxuICAgICAgICAnc3RhdHVzJzogJ0FyY2hpdmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0xhYm9yZSBzaXQgbnVsbGEgYW1ldCBlbmltIHJlcHJlaGVuZGVyaXQgZXNzZSBsYWJvcnVtIExvcmVtIHF1aXMgaW4gZXUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTGFyZWluYSBXaWxsaWFtc29uJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0ltcGVyZGlldCBVbGxhbWNvcnBlciBMdGQnLFxuICAgICAgICAnb2ZmaWNlJzogJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTIvMDEnLFxuICAgICAgICAnc2FsYXJ5JzogNjAzNDk4LFxuICAgICAgICAnc3RhdHVzJzogJ0FyY2hpdmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0xhYm9yZSBzaXQgbnVsbGEgYW1ldCBlbmltIHJlcHJlaGVuZGVyaXQgZXNzZSBsYWJvcnVtIExvcmVtIHF1aXMgaW4gZXUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQW15IEFjZXZlZG8nLFxuICAgICAgICAncG9zaXRpb24nOiAnSWQgSW5zdGl0dXRlJyxcbiAgICAgICAgJ29mZmljZSc6ICdDb29rIElzbGFuZHMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMi8wNCcsXG4gICAgICAgICdzYWxhcnknOiAxMjUxNjUsXG4gICAgICAgICdzdGF0dXMnOiAnQXJjaGl2ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnTGFib3JlIHNpdCBudWxsYSBhbWV0IGVuaW0gcmVwcmVoZW5kZXJpdCBlc3NlIGxhYm9ydW0gTG9yZW0gcXVpcyBpbiBldS4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdOb21sYW5nYSBTaWx2YScsXG4gICAgICAgICdwb3NpdGlvbic6ICdFZ2V0IExMQycsXG4gICAgICAgICdvZmZpY2UnOiAnQmVsaXplJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDEvMzEnLFxuICAgICAgICAnc2FsYXJ5JzogMjY4NTA5LFxuICAgICAgICAnc3RhdHVzJzogJ0FyY2hpdmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0xhYm9yZSBzaXQgbnVsbGEgYW1ldCBlbmltIHJlcHJlaGVuZGVyaXQgZXNzZSBsYWJvcnVtIExvcmVtIHF1aXMgaW4gZXUuJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQW1lbmEgU3RvbmUnLFxuICAgICAgICAncG9zaXRpb24nOiAnRW5pbSBJbmNvcnBvcmF0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ0d1aW5lYScsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzA5LzIzJyxcbiAgICAgICAgJ3NhbGFyeSc6IDIxNDM4MSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnVGVtcG9yYXJ5JywgJ0RldmVsb3BlciddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdEYW5pZWxsZSBDb2ZmZXknLFxuICAgICAgICAncG9zaXRpb24nOiAnRmV1Z2lhdCBQbGFjZXJhdCBDb3JwLicsXG4gICAgICAgICdvZmZpY2UnOiAnU2FvIFRvbWUgYW5kIFByaW5jaXBlJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDYvMTcnLFxuICAgICAgICAnc2FsYXJ5JzogMTM3NDIzLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ1RlbXBvcmFyeScsICdEZXZlbG9wZXInXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnQnVmZnkgUnVzc2VsbCcsXG4gICAgICAgICdwb3NpdGlvbic6ICdMYWN1cyBRdWlzcXVlIEx0ZCcsXG4gICAgICAgICdvZmZpY2UnOiAnRWN1YWRvcicsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzEwLzE3JyxcbiAgICAgICAgJ3NhbGFyeSc6IDYxMjE4NCxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydPZmZpY2UgU2tpbGxzJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0thaXRsaW4gTGFtYicsXG4gICAgICAgICdwb3NpdGlvbic6ICdNYWxlc3VhZGEgRnJpbmdpbGxhIEVzdCBBc3NvY2lhdGVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdBbGdlcmlhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTAvMTgnLFxuICAgICAgICAnc2FsYXJ5JzogMzI3MzY3LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ09mZmljZSBTa2lsbHMnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnTGVpbGFuaSBZYXRlcycsXG4gICAgICAgICdwb3NpdGlvbic6ICdNdXMgUHJvaW4gTExDJyxcbiAgICAgICAgJ29mZmljZSc6ICdTb3V0aCBTdWRhbicsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA1LzI3JyxcbiAgICAgICAgJ3NhbGFyeSc6IDc0MzQ5MyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydPZmZpY2UgU2tpbGxzJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ0plbWltYSBNb29uJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1BoYXNlbGx1cyBDb3JwLicsXG4gICAgICAgICdvZmZpY2UnOiAnU291dGggR2VvcmdpYSBhbmQgVGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNS8yMScsXG4gICAgICAgICdzYWxhcnknOiA0OTYwNjcsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnT2ZmaWNlIFNraWxscyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdIaXJva28gU2Nod2FydHonLFxuICAgICAgICAncG9zaXRpb24nOiAnTmVxdWUgSW5zdGl0dXRlJyxcbiAgICAgICAgJ29mZmljZSc6ICdTYWludCBWaW5jZW50IGFuZCBUaGUgR3JlbmFkaW5lcycsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAzLzEzJyxcbiAgICAgICAgJ3NhbGFyeSc6IDE3ODc4MixcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydPZmZpY2UgU2tpbGxzJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ05hdGhhbmllbCBKZW5zZW4nLFxuICAgICAgICAncG9zaXRpb24nOiAnTWkgVGVtcG9yIExpbWl0ZWQnLFxuICAgICAgICAnb2ZmaWNlJzogJ0RvbWluaWNhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTIvMDUnLFxuICAgICAgICAnc2FsYXJ5JzogMzc0NDEsXG4gICAgICAgICdzdGF0dXMnOiAnQWN0aXZlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1doZW4gdGhlcmUgd2FzIGRlc3BhaXIgaW4gdGhlIGR1c3QgYm93bCBhbmQgZGVwcmVzc2lvbiBhY3Jvc3MgdGhlIGxhbmQsIHNoZSBzYXcgYSBuYXRpb24gY29ucXVlciBmZWFyIGl0c2VsZiB3aXRoIGEgTmV3IERlYWwsIG5ldyBqb2JzIGFuZCBhIG5ldyBzZW5zZSBvZiBjb21tb24gcHVycG9zZS4gWWVzIHdlIGNhbi4nLFxuICAgICAgICAnY2F0ZWdvcmllcyc6IFsnT2ZmaWNlIFNraWxscyddXG4gICAgfSwge1xuICAgICAgICAnbmFtZSc6ICdTaWxhcyBTd2VlbmV5JyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1VsdHJpY2VzIEluc3RpdHV0ZScsXG4gICAgICAgICdvZmZpY2UnOiAnVHVya21lbmlzdGFuJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTEvMTMnLFxuICAgICAgICAnc2FsYXJ5JzogMTUyOTgwLFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ09mZmljZSBTa2lsbHMnXVxuICAgIH0sIHtcbiAgICAgICAgJ25hbWUnOiAnSmVybWFpbmUgQmFycnknLFxuICAgICAgICAncG9zaXRpb24nOiAnRGFwaWJ1cyBDb3Jwb3JhdGlvbicsXG4gICAgICAgICdvZmZpY2UnOiAnVXpiZWtpc3RhbicsXG4gICAgICAgICdleHQnOiB7ICdvYmonOiAnODI2MicgfSxcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAzLzA2JyxcbiAgICAgICAgJ3NhbGFyeSc6IDQwOTQ2MyxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydPZmZpY2UgU2tpbGxzJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1RhdGlhbmEgTmljaG9scycsXG4gICAgICAgICdwb3NpdGlvbic6ICdOZWMgRGlhbSBJbmR1c3RyaWVzJyxcbiAgICAgICAgJ29mZmljZSc6ICdDb29rIElzbGFuZHMnLFxuICAgICAgICAnZXh0JzogeyAnb2JqJzogJzgyNjInIH0sXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNS8yMicsXG4gICAgICAgICdzYWxhcnknOiA1MTE1NSxcbiAgICAgICAgJ3N0YXR1cyc6ICdBY3RpdmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2hlbiB0aGVyZSB3YXMgZGVzcGFpciBpbiB0aGUgZHVzdCBib3dsIGFuZCBkZXByZXNzaW9uIGFjcm9zcyB0aGUgbGFuZCwgc2hlIHNhdyBhIG5hdGlvbiBjb25xdWVyIGZlYXIgaXRzZWxmIHdpdGggYSBOZXcgRGVhbCwgbmV3IGpvYnMgYW5kIGEgbmV3IHNlbnNlIG9mIGNvbW1vbiBwdXJwb3NlLiBZZXMgd2UgY2FuLicsXG4gICAgICAgICdjYXRlZ29yaWVzJzogWydPZmZpY2UgU2tpbGxzJ11cbiAgICB9LCB7XG4gICAgICAgICduYW1lJzogJ1JhbWEgV2FsbGVyJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1NlbSBQZWxsZW50ZXNxdWUgTExDJyxcbiAgICAgICAgJ29mZmljZSc6ICdBbmRvcnJhJyxcbiAgICAgICAgJ2V4dCc6IHsgJ29iaic6ICc4MjYyJyB9LFxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTIvMDEnLFxuICAgICAgICAnc2FsYXJ5JzogMjIzMjI3LFxuICAgICAgICAnc3RhdHVzJzogJ0FjdGl2ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXaGVuIHRoZXJlIHdhcyBkZXNwYWlyIGluIHRoZSBkdXN0IGJvd2wgYW5kIGRlcHJlc3Npb24gYWNyb3NzIHRoZSBsYW5kLCBzaGUgc2F3IGEgbmF0aW9uIGNvbnF1ZXIgZmVhciBpdHNlbGYgd2l0aCBhIE5ldyBEZWFsLCBuZXcgam9icyBhbmQgYSBuZXcgc2Vuc2Ugb2YgY29tbW9uIHB1cnBvc2UuIFllcyB3ZSBjYW4uJyxcbiAgICAgICAgJ2NhdGVnb3JpZXMnOiBbJ09mZmljZSBTa2lsbHMnXVxuICAgIH1dO1xuIl19

/***/ },

/***/ 544:
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
	
	var _novoElements = __webpack_require__(16);
	
	var _TableData = __webpack_require__(1130);
	
	var _CodeSnippet = __webpack_require__(1129);
	
	var _TableDemo = __webpack_require__(1189);
	
	var _TableDemo2 = _interopRequireDefault(_TableDemo);
	
	var _DetailsTableDemo = __webpack_require__(1187);
	
	var _DetailsTableDemo2 = _interopRequireDefault(_DetailsTableDemo);
	
	var _SelectAllTableDemo = __webpack_require__(1188);
	
	var _SelectAllTableDemo2 = _interopRequireDefault(_SelectAllTableDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var template = '\n<div class="container">\n    <h1>Table <small><a target="_blank" href="https://bullhorn.github.io/novo-elements/tree/master/src/elements/table">(source)</a></small></h1>\n    <p>Tables allow users to view date in a tabular format and perform actions such as Sorting and Filtering. Different configuration are possible for pagination or infinite scroll. Feature to be added include: Custom Item Renderers, etc...</p>\n\n    <h2>Types</h2>\n\n    <h5>Basic Table</h5>\n    <p>This is the most basic table.</p>\n    <div class="example table-demo">' + _TableDemo2.default + '</div>\n    <code-snippet [code]="TableDemoTpl"></code-snippet>\n\n    <h5>Details Table</h5>\n    <p>This has a row renderer to show a new details row that is expanded when you click on the action column.</p>\n    <div class="example table-demo">' + _DetailsTableDemo2.default + '</div>\n    <code-snippet [code]="DetailsTableDemoTpl"></code-snippet>\n    \n    <h5>Select All Table</h5>\n    <p>This has checkboxes for selection.</p>\n    <div class="example table-demo">' + _SelectAllTableDemo2.default + '</div>\n    <code-snippet [code]="SelectAllTableDemoTpl"></code-snippet>\n</div>\n';
	
	var HEADER_COLORS = ['blue', 'green', 'yellow', 'orange', 'red', 'purple'];
	
	var StatusCell = exports.StatusCell = (_dec = (0, _core.Component)({
	    selector: 'status-cell',
	    template: '\n        <div class="status-cell">\n            <i class="bhi-info"></i>\n            <label>{{value}}</label>\n        </div>\n    '
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
	    template: '\n        <div class="extra-data">\n            <label><i class="bhi-info"></i>Description</label>\n            <p>{{data.description}}</p>\n            <label><i class="bhi-info"></i>Categories</label>\n            <p>{{data.categories}}</p>\n        </div>\n    '
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
	        }, { title: 'Start date', name: 'startDate', ordering: true }, {
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
	                        // console.log('P', event);
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
	                // console.log('Table Change', event);
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
	                        // console.log('P', event);
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
	                // console.log('Table Change', event);
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
	                        // console.log('P', event);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvdGFibGUvVGFibGVEZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLDBwQ0FBTjs7QUF3QkEsSUFBTSxnQkFBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixRQUE1QixFQUFzQyxLQUF0QyxFQUE2QyxRQUE3QyxDQUF0Qjs7SUFXYSxVLFdBQUEsVSxXQVRaLHFCQUFVO0FBQ1AsY0FBVSxhQURIO0FBRVA7QUFGTyxDQUFWLEM7Ozs7Ozs7Ozs7O0lBdUJZLFksV0FBQSxZLFlBWFoscUJBQVU7QUFDUCxjQUFVLGVBREg7QUFFUDtBQUZPLENBQVYsQzs7Ozs7Ozs7Ozs7SUFtQlksUyxXQUFBLFMsWUFMWixxQkFBVTtBQUNQLGNBQVUsWUFESDtBQUVQLGNBQVUsUUFGSDtBQUdQLGdCQUFZO0FBSEwsQ0FBVixDO0FBTUcseUJBQWM7QUFBQTs7QUFBQTs7QUFDVixhQUFLLFlBQUw7QUFDQSxhQUFLLG1CQUFMO0FBQ0EsYUFBSyxxQkFBTDs7QUFFQSxZQUFJLFVBQVUsQ0FDVixFQUFFLE9BQU8sTUFBVCxFQUFpQixNQUFNLE1BQXZCLEVBQStCLFVBQVUsSUFBekMsRUFBK0MsTUFBTSxNQUFyRCxFQUE2RCxXQUFXLElBQXhFLEVBRFUsRUFFVixFQUFFLE9BQU8sVUFBVCxFQUFxQixNQUFNLFVBQTNCLEVBQXVDLFVBQVUsSUFBakQsRUFBdUQsV0FBVyxJQUFsRSxFQUZVLEVBR1Y7QUFDSSxtQkFBTyxPQURYO0FBRUksa0JBQU0sS0FGVjtBQUdJLHNCQUFVLElBSGQ7QUFJSSxzQkFBVSwwQkFBVTtBQUNoQix1QkFBTyxPQUFPLEdBQVAsQ0FBVyxHQUFsQjtBQUNILGFBTkw7QUFPSSxxQkFBUyxpQkFBQyxJQUFELEVBQU8sUUFBUCxFQUFpQixPQUFqQixFQUE2QjtBQUNs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QixNQUFwQixDQUEyQixZQUEzQixHQUEwQyxNQUFNLFlBQWhEO0FBQ0g7QUFQRyxpQkFESjtBQVVKLHlCQUFTLElBVkw7QUFXSiwyQkFBVyxJQVhQO0FBWUosMEJBQVUsSUFaTjtBQWFKLDBCQUFVLElBYk47QUFjSixtQ0FBbUI7QUFkZjtBQUhLLFNBQWpCO0FBb0JIOzs7O21DQUVVO0FBQ1AsaUJBQUssS0FBTCxHQUFhLE1BQWI7QUFDSDs7O3NDQUVhO0FBQ1YsZ0JBQUksTUFBTSxjQUFjLE9BQWQsQ0FBc0IsS0FBSyxLQUEzQixDQUFWO0FBQ0EsaUJBQUssS0FBTCxHQUFhLGNBQWMsTUFBTSxDQUFwQixDQUFiO0FBQ0giLCJmaWxlIjoiVGFibGVEZW1vLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9icmlhbmtpbWJhbGwvTm92by9ub3ZvLWVsZW1lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOT1ZPX1RBQkxFX0VMRU1FTlRTLCBOT1ZPX1RBQkxFX0VYVFJBX0VMRU1FTlRTLCBOT1ZPX1RPT0xUSVBfRUxFTUVOVFMsIEJhc2VSZW5kZXJlciB9IGZyb20gJy4vLi4vLi4vLi4vc3JjL25vdm8tZWxlbWVudHMnO1xuXG5pbXBvcnQgeyBUYWJsZURhdGEgfSBmcm9tICcuL1RhYmxlRGF0YSc7XG5pbXBvcnQgeyBDb2RlU25pcHBldCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2NvZGVzbmlwcGV0L0NvZGVTbmlwcGV0JztcblxuaW1wb3J0IFRhYmxlRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9UYWJsZURlbW8uaHRtbCc7XG5pbXBvcnQgRGV0YWlsc1RhYmxlRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9EZXRhaWxzVGFibGVEZW1vLmh0bWwnO1xuaW1wb3J0IFNlbGVjdEFsbFRhYmxlRGVtb1RwbCBmcm9tICcuL3RlbXBsYXRlcy9TZWxlY3RBbGxUYWJsZURlbW8uaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5UYWJsZSA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vYnVsbGhvcm4uZ2l0aHViLmlvL25vdm8tZWxlbWVudHMvdHJlZS9tYXN0ZXIvc3JjL2VsZW1lbnRzL3RhYmxlXCI+KHNvdXJjZSk8L2E+PC9zbWFsbD48L2gxPlxuICAgIDxwPlRhYmxlcyBhbGxvdyB1c2VycyB0byB2aWV3IGRhdGUgaW4gYSB0YWJ1bGFyIGZvcm1hdCBhbmQgcGVyZm9ybSBhY3Rpb25zIHN1Y2ggYXMgU29ydGluZyBhbmQgRmlsdGVyaW5nLiBEaWZmZXJlbnQgY29uZmlndXJhdGlvbiBhcmUgcG9zc2libGUgZm9yIHBhZ2luYXRpb24gb3IgaW5maW5pdGUgc2Nyb2xsLiBGZWF0dXJlIHRvIGJlIGFkZGVkIGluY2x1ZGU6IEN1c3RvbSBJdGVtIFJlbmRlcmVycywgZXRjLi4uPC9wPlxuXG4gICAgPGgyPlR5cGVzPC9oMj5cblxuICAgIDxoNT5CYXNpYyBUYWJsZTwvaDU+XG4gICAgPHA+VGhpcyBpcyB0aGUgbW9zdCBiYXNpYyB0YWJsZS48L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUgdGFibGUtZGVtb1wiPiR7VGFibGVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiVGFibGVEZW1vVHBsXCI+PC9jb2RlLXNuaXBwZXQ+XG5cbiAgICA8aDU+RGV0YWlscyBUYWJsZTwvaDU+XG4gICAgPHA+VGhpcyBoYXMgYSByb3cgcmVuZGVyZXIgdG8gc2hvdyBhIG5ldyBkZXRhaWxzIHJvdyB0aGF0IGlzIGV4cGFuZGVkIHdoZW4geW91IGNsaWNrIG9uIHRoZSBhY3Rpb24gY29sdW1uLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZSB0YWJsZS1kZW1vXCI+JHtEZXRhaWxzVGFibGVEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiRGV0YWlsc1RhYmxlRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuICAgIFxuICAgIDxoNT5TZWxlY3QgQWxsIFRhYmxlPC9oNT5cbiAgICA8cD5UaGlzIGhhcyBjaGVja2JveGVzIGZvciBzZWxlY3Rpb24uPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHRhYmxlLWRlbW9cIj4ke1NlbGVjdEFsbFRhYmxlRGVtb1RwbH08L2Rpdj5cbiAgICA8Y29kZS1zbmlwcGV0IFtjb2RlXT1cIlNlbGVjdEFsbFRhYmxlRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5gO1xuXG5jb25zdCBIRUFERVJfQ09MT1JTID0gWydibHVlJywgJ2dyZWVuJywgJ3llbGxvdycsICdvcmFuZ2UnLCAncmVkJywgJ3B1cnBsZSddO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N0YXR1cy1jZWxsJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzLWNlbGxcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWluZm9cIj48L2k+XG4gICAgICAgICAgICA8bGFiZWw+e3t2YWx1ZX19PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBTdGF0dXNDZWxsIGV4dGVuZHMgQmFzZVJlbmRlcmVyIHtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdleHRyYS1kZXRhaWxzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtZGF0YVwiPlxuICAgICAgICAgICAgPGxhYmVsPjxpIGNsYXNzPVwiYmhpLWluZm9cIj48L2k+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgPHA+e3tkYXRhLmRlc2NyaXB0aW9ufX08L3A+XG4gICAgICAgICAgICA8bGFiZWw+PGkgY2xhc3M9XCJiaGktaW5mb1wiPjwvaT5DYXRlZ29yaWVzPC9sYWJlbD5cbiAgICAgICAgICAgIDxwPnt7ZGF0YS5jYXRlZ29yaWVzfX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgRXh0cmFEZXRhaWxzIGV4dGVuZHMgQmFzZVJlbmRlcmVyIHtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0YWJsZS1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgZGlyZWN0aXZlczogW05PVk9fVEFCTEVfRUxFTUVOVFMsIE5PVk9fVEFCTEVfRVhUUkFfRUxFTUVOVFMsIENPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBOT1ZPX1RPT0xUSVBfRUxFTUVOVFMsIENvZGVTbmlwcGV0XVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZURlbW8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLlRhYmxlRGVtb1RwbCA9IFRhYmxlRGVtb1RwbDtcbiAgICAgICAgdGhpcy5EZXRhaWxzVGFibGVEZW1vVHBsID0gRGV0YWlsc1RhYmxlRGVtb1RwbDtcbiAgICAgICAgdGhpcy5TZWxlY3RBbGxUYWJsZURlbW9UcGwgPSBTZWxlY3RBbGxUYWJsZURlbW9UcGw7XG5cbiAgICAgICAgbGV0IGNvbHVtbnMgPSBbXG4gICAgICAgICAgICB7IHRpdGxlOiAnTmFtZScsIG5hbWU6ICduYW1lJywgb3JkZXJpbmc6IHRydWUsIHR5cGU6ICdsaW5rJywgZmlsdGVyaW5nOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiAnUG9zaXRpb24nLCBuYW1lOiAncG9zaXRpb24nLCBvcmRlcmluZzogdHJ1ZSwgZmlsdGVyaW5nOiB0cnVlIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdFeHRuLicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2V4dCcsXG4gICAgICAgICAgICAgICAgb3JkZXJpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyZXI6IG9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QuZXh0Lm9iajtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbXBhcmU6IChzb3J0LCBwcmV2aW91cywgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3QgPSBwcmV2aW91cy5vYmosXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmQgPSBjdXJyZW50Lm9iajtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3QgPiBzZWNvbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzb3J0ID09PSAnZGVzYycgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0IDwgc2Vjb25kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29ydCA9PT0gJ2FzYycgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6ICdTdGFydCBkYXRlJywgbmFtZTogJ3N0YXJ0RGF0ZScsIG9yZGVyaW5nOiB0cnVlIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTYWxhcnknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzYWxhcnknLFxuICAgICAgICAgICAgICAgIG9yZGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJCAke051bWJlcihvYmplY3Quc2FsYXJ5KS50b0ZpeGVkKDIpfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N0YXR1cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3N0YXR1cycsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogWydOZXcgTGVhZCcsICdBY3RpdmUnLCAnQXJjaGl2ZWQnXSxcbiAgICAgICAgICAgICAgICBvcmRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXJlcjogU3RhdHVzQ2VsbCxcbiAgICAgICAgICAgICAgICBmaWx0ZXJpbmc6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLmJhc2ljID0ge1xuICAgICAgICAgICAgY29sdW1uczogY29sdW1ucy5zbGljZSgpLFxuICAgICAgICAgICAgcm93czogVGFibGVEYXRhLnNsaWNlKCksXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBwYWdpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDogMSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNQZXJQYWdlOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnUCcsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzaWMuY29uZmlnLnBhZ2luZy5jdXJyZW50ID0gZXZlbnQucGFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzaWMuY29uZmlnLnBhZ2luZy5pdGVtc1BlclBhZ2UgPSBldmVudC5pdGVtc1BlclBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZpbHRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzb3J0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9yZGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlc2l6aW5nOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25UYWJsZUNoYW5nZTogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1RhYmxlIENoYW5nZScsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2ljLnJvd3MgPSBldmVudC5yb3dzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZGV0YWlscyA9IHtcbiAgICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbnMuc2xpY2UoKSxcbiAgICAgICAgICAgIHJvd3M6IFRhYmxlRGF0YS5zbGljZSgpLFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgcGFnaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zUGVyUGFnZTogMTAsXG4gICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZTogZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1AnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHMuY29uZmlnLnBhZ2luZy5jdXJyZW50ID0gZXZlbnQucGFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5jb25maWcucGFnaW5nLml0ZW1zUGVyUGFnZSA9IGV2ZW50Lml0ZW1zUGVyUGFnZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc29ydGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgb3JkZXJpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVzaXppbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFzRGV0YWlsczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkZXRhaWxzUmVuZGVyZXI6IEV4dHJhRGV0YWlsc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uVGFibGVDaGFuZ2U6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdUYWJsZSBDaGFuZ2UnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLnJvd3MgPSBldmVudC5yb3dzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsID0ge1xuICAgICAgICAgICAgY29sdW1uczogY29sdW1ucy5zbGljZSgpLFxuICAgICAgICAgICAgcm93czogVGFibGVEYXRhLnNsaWNlKCksXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBwYWdpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDogMSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNQZXJQYWdlOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnUCcsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5jb25maWcucGFnaW5nLmN1cnJlbnQgPSBldmVudC5wYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLmNvbmZpZy5wYWdpbmcuaXRlbXNQZXJQYWdlID0gZXZlbnQuaXRlbXNQZXJQYWdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzb3J0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZpbHRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvcmRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZXNpemluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByb3dTZWxlY3Rpb25TdHlsZTogJ2NoZWNrYm94J1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbG9yID0gJ2JsdWUnO1xuICAgIH1cblxuICAgIGNoYW5nZUNvbG9yKCkge1xuICAgICAgICBsZXQgaWR4ID0gSEVBREVSX0NPTE9SUy5pbmRleE9mKHRoaXMuY29sb3IpO1xuICAgICAgICB0aGlzLmNvbG9yID0gSEVBREVSX0NPTE9SU1tpZHggKyAxXTtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 1187:
/***/ function(module, exports) {

	module.exports = "<header [ngClass]=\"color\" (click)=\"changeColor()\" tooltip=\"Click Me!\" tooltipPlacement=\"top\">\n    <div class=\"header-row\">\n        <h1><i class=\"bhi-email\"></i>Email ({{details.rows.length}})</h1>\n        <div>\n            <h5>Last Activity</h5>\n            <span>12/15/2015</span>\n        </div>\n    </div>\n    <novo-pagination *ngIf=\"details.config.paging\"\n                     [page]=\"details.config.paging.current\"\n                     [totalItems]=\"details.rows.length\"\n                     [itemsPerPage]=\"details.config.paging.itemsPerPage\"\n                     (onPageChange)=\"details.config.paging.onPageChange($event)\">\n    </novo-pagination>\n</header>\n\n<novo-table [rows]=\"details.rows\" [columns]=\"details.columns\" [config]=\"details.config\" (onTableChange)=\"details.onTableChange($event)\"></novo-table>\n"

/***/ },

/***/ 1188:
/***/ function(module, exports) {

	module.exports = "<header [ngClass]=\"color\" (click)=\"changeColor()\" bhTooltip=\"Click Me!\" bhTooltipPlacement=\"top\">\n    <div class=\"header-row\">\n        <h1><i class=\"bhi-email\"></i>Email ({{selectAll.rows.length}})</h1>\n        <div>\n            <h5>Last Activity</h5>\n            <span>12/15/2015</span>\n        </div>\n    </div>\n    <novo-pagination *ngIf=\"selectAll.config.paging\"\n                     [page]=\"selectAll.config.paging.current\"\n                     [totalItems]=\"selectAll.rows.length\"\n                     [itemsPerPage]=\"selectAll.config.paging.itemsPerPage\"\n                     (onPageChange)=\"selectAll.config.paging.onPageChange($event)\">\n    </novo-pagination>\n</header>\n\n<novo-table [rows]=\"selectAll.rows\" [columns]=\"selectAll.columns\" [config]=\"selectAll.config\" (onTableChange)=\"selectAll.onTableChange($event)\"></novo-table>\n"

/***/ },

/***/ 1189:
/***/ function(module, exports) {

	module.exports = "<header [ngClass]=\"color\" (click)=\"changeColor()\" tooltip=\"Click Me!\" tooltipPlacement=\"top\">\n    <div class=\"header-row\">\n        <h1><i class=\"bhi-email\"></i>Email ({{basic.rows.length}})</h1>\n        <div>\n            <h5>Last Activity</h5>\n            <span>12/15/2015</span>\n        </div>\n    </div>\n    <novo-pagination *ngIf=\"basic.config.paging\"\n                     [page]=\"basic.config.paging.current\"\n                     [totalItems]=\"basic.rows.length\"\n                     [itemsPerPage]=\"basic.config.paging.itemsPerPage\"\n                     (onPageChange)=\"basic.config.paging.onPageChange($event)\">\n    </novo-pagination>\n</header>\n\n<novo-table [rows]=\"basic.rows\" [columns]=\"basic.columns\" [config]=\"basic.config\" (onTableChange)=\"basic.onTableChange($event)\"></novo-table>\n"

/***/ }

});
//# sourceMappingURL=6.dc62eabbf04212b0f333.bundle.map