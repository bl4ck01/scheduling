// need:
 // weekday array
 // weekend array
 // holiday array

// get # of days in month
 // moment("2016-02").daysInMonth() // 29


// week days 
var getWeekdays = function(currentMonth, year){
	var monthsArray = moment.months();
	var array = [];

	var month = monthsArray.indexOf(currentMonth)+1;
	year = year || moment().year();
	var day = moment().day() + 1;
	
	var lengthOfMonth = moment(month).daysInMonth();

	for(var d=1; d<lengthOfMonth+1; d++){
		var date = moment(year+"-"+month+"-"+d);
			if(date.format("dddd") == "Monday"){
					array.push(date.format("YYYY-MM-DD"));
			}
			if(date.format("dddd") == "Tuesday"){
					array.push(date.format("YYYY-MM-DD"));
			}
			if(date.format("dddd") == "Wednesday"){
					array.push(date.format("YYYY-MM-DD"));
			}
			if(date.format("dddd") == "Thursday"){
					array.push(date.format("YYYY-MM-DD"));
			}
	}

	return array;
};


var getWeekends = function(currentMonth, year){
	var monthsArray = moment.months();
	var array = [];

	var month = monthsArray.indexOf(currentMonth)+1;
	year = year || moment().year();
	var day = moment().day() + 1;

	var lengthOfMonth = moment(month).daysInMonth();

	for(var d=1; d<lengthOfMonth+1; d++){
		var date = moment(year+"-"+month+"-"+d);
			if(date.format("dddd") == "Friday"){
					array.push(date.format("YYYY-MM-DD"));
			}
			if(date.format("dddd") == "Saturday"){
					array.push(date.format("YYYY-MM-DD"));
			}
			if(date.format("dddd") == "Sunday"){
					array.push(date.format("YYYY-MM-DD"));
			}
	}

	return array;
};

// getWeekdays('July'); --> ["2016-07-04", "2016-07-05", "2016-07-06", "2016-07-07", "2016-07-11", "2016-07-12", "2016-07-13", "2016-07-14", "2016-07-18", "2016-07-19", "2016-07-20", "2016-07-21", "2016-07-25", "2016-07-26", "2016-07-27", "2016-07-28"]
// getWeekdays('August'); --> ["2016-08-01", "2016-08-02", "2016-08-03", "2016-08-04", "2016-08-08", "2016-08-09", "2016-08-10", "2016-08-11", "2016-08-15", "2016-08-16", "2016-08-17", "2016-08-18", "2016-08-22", "2016-08-23", "2016-08-24", "2016-08-25", "2016-08-29", "2016-08-30", "2016-08-31"]
// getWeekdays('September'); --> ["2016-09-01", "2016-09-05", "2016-09-06", "2016-09-07", "2016-09-08", "2016-09-12", "2016-09-13", "2016-09-14", "2016-09-15", "2016-09-19", "2016-09-20", "2016-09-21", "2016-09-22", "2016-09-26", "2016-09-27", "2016-09-28", "2016-09-29"]
// getWeekdays('October') --> ["2016-10-10", "2016-10-11", "2016-10-12", "2016-10-13", "2016-10-17", "2016-10-18", "2016-10-19", "2016-10-20", "2016-10-24", "2016-10-25", "2016-10-26", "2016-10-27", "2016-10-31"]
// getWeekdays('November') --> ["2016-11-01", "2016-11-01", "2016-11-01", "2016-11-01", "2016-11-01", "2016-11-01", "2016-11-01", "2016-11-01", "2016-11-01", "2016-11-10", "2016-11-14", "2016-11-15", "2016-11-16", "2016-11-17", "2016-11-21", "2016-11-22", "2016-11-23", "2016-11-24", "2016-11-28", "2016-11-29", "2016-11-30"]
// getWeekdays('December') --> ["2016-12-01", "2016-12-01", "2016-12-01", "2016-12-01", "2016-12-01", "2016-12-01", "2016-12-01", "2016-12-01", "2016-12-01", "2016-12-12", "2016-12-13", "2016-12-14", "2016-12-15", "2016-12-19", "2016-12-20", "2016-12-21", "2016-12-22", "2016-12-26", "2016-12-27", "2016-12-28", "2016-12-29"]
// getWeekdays('January', 2017) --> ["2017-01-02", "2017-01-03", "2017-01-04", "2017-01-05", "2017-01-09", "2017-01-10", "2017-01-11", "2017-01-12", "2017-01-16", "2017-01-17", "2017-01-18", "2017-01-19", "2017-01-23", "2017-01-24", "2017-01-25", "2017-01-26", "2017-01-30", "2017-01-31"]
// getWeekdays('February', 2017) --> ["2017-02-01", "2017-02-02", "2017-02-06", "2017-02-07", "2017-02-08", "2017-02-09", "2017-02-13", "2017-02-14", "2017-02-15", "2017-02-16", "2017-02-20", "2017-02-21", "2017-02-22", "2017-02-23", "2017-02-27", "2017-02-28", "2017-03-01", "2017-03-02"]
// getWeekdays('March', 2017) --> ["2017-03-01", "2017-03-02", "2017-03-06", "2017-03-07", "2017-03-08", "2017-03-09", "2017-03-13", "2017-03-14", "2017-03-15", "2017-03-16", "2017-03-20", "2017-03-21", "2017-03-22", "2017-03-23", "2017-03-27", "2017-03-28", "2017-03-29", "2017-03-30"]


var employeesObject = {};

	for(var i=1; i<=41; i++){
		employeesObject[i] = [];
	}


var weekdaysJS = [
  "2016-07-05", "2016-07-06", "2016-07-07", "2016-07-11", "2016-07-12", "2016-07-13", "2016-07-14", "2016-07-18", "2016-07-19", "2016-07-20", "2016-07-21", "2016-07-25", "2016-07-26", "2016-07-27", "2016-07-28",
  "2016-08-01", "2016-08-02", "2016-08-03", "2016-08-04", "2016-08-08", "2016-08-09", "2016-08-10", "2016-08-11", "2016-08-15", "2016-08-16", "2016-08-17", "2016-08-18", "2016-08-22", "2016-08-23", "2016-08-24", "2016-08-25", "2016-08-29", "2016-08-30", "2016-08-31",
  "2016-09-01", "2016-09-06", "2016-09-07", "2016-09-08", "2016-09-12", "2016-09-13", "2016-09-14", "2016-09-15", "2016-09-19", "2016-09-20", "2016-09-21", "2016-09-22", "2016-09-26", "2016-09-27", "2016-09-28", "2016-09-29"
]; 

var weekendsJS = [
	"2016-07-08", "2016-07-09", "2016-07-09", "2016-07-10", "2016-07-10", "2016-07-15", "2016-07-16", "2016-07-16", "2016-07-17", "2016-07-17", "2016-07-22", "2016-07-23", "2016-07-23", "2016-07-24", "2016-07-24", "2016-07-29", "2016-07-30", "2016-07-30", "2016-07-31", "2016-07-31",
	"2016-08-05", "2016-08-06", "2016-08-06", "2016-08-07", "2016-08-07", "2016-08-12", "2016-08-13", "2016-08-13", "2016-08-14", "2016-08-14", "2016-08-19", "2016-08-20", "2016-08-20", "2016-08-21", "2016-08-21", "2016-08-26", "2016-08-27", "2016-08-27", "2016-08-28", "2016-08-28",
	"2016-09-09", "2016-09-10", "2016-09-10", "2016-09-11", "2016-09-11", "2016-09-16", "2016-09-17", "2016-09-17", "2016-09-18", "2016-09-18", "2016-09-23", "2016-09-24", "2016-09-24", "2016-09-25", "2016-09-25", "2016-09-30", "2016-10-01", "2016-10-01"
];



// var people = [
//   { name: 'Garan', onCall: [], conflicts: ['2016-01-02', '2016-01-05', '2016-01-06', '2016-01-08'] },
//   { name: 'Wes', onCall: [], conflicts: ['2016-01-01'] },
//   { name: 'Dan', onCall: [], conflicts: ['2016-01-03', '2016-01-05', '2016-01-08'] },
//   { name: 'Valerie', onCall: [], conflicts: ['2016-01-01', '2016-01-03'] },
//   { name: 'Aaron', onCall: [], conflicts: ['2016-01-03'] }
// ];

// var dates = [
//   '2016-01-01', '2016-01-02', '2016-01-03', '2016-01-04', '2016-01-05', '2016-01-06', '2016-01-07', '2016-01-08', '2016-01-09', '2016-01-10', '2016-01-11', '2016-01-12', '2016-01-13', '2016-01-14', '2016-01-15', '2016-01-16', '2016-01-17', '2016-01-18', '2016-01-19', '2016-01-20', '2016-01-21', '2016-01-22', '2016-01-23', '2016-01-24', '2016-01-25', '2016-01-26', '2016-01-27', '2016-01-28', '2016-01-29', '2016-01-30', '2016-01-31',
//   '2016-02-01', '2016-02-02', '2016-02-03', '2016-02-04', '2016-02-05', '2016-02-06', '2016-02-07', '2016-02-08', '2016-02-09', '2016-02-10', '2016-02-11', '2016-02-12', '2016-02-13', '2016-02-14', '2016-02-15', '2016-02-16', '2016-02-17', '2016-02-18', '2016-02-19', '2016-02-20', '2016-02-21', '2016-02-22', '2016-02-23', '2016-02-24', '2016-02-25', '2016-02-26', '2016-02-27', '2016-02-28',
//   '2016-03-01', '2016-03-02', '2016-03-03', '2016-03-04', '2016-03-05', '2016-03-06', '2016-03-07', '2016-03-08', '2016-03-09', '2016-03-10', '2016-03-11', '2016-03-12', '2016-03-13', '2016-03-14', '2016-03-15', '2016-03-16', '2016-03-17', '2016-03-18', '2016-03-19', '2016-03-20', '2016-03-21', '2016-03-22', '2016-03-23', '2016-03-24', '2016-03-25', '2016-03-26', '2016-03-27', '2016-03-28', '2016-03-29', '2016-03-30', '2016-03-31',
// ];

'use strict';

var people = [
  {"name":"George Washington","conflicts":["2016-07-09","2016-07-10","2016-07-11","2016-07-12","2016-07-13","2016-08-28","2016-08-29","2016-08-30"], "onCall": {weekdays:[], weekends:[], holidays: []} },
  {"name":"John Adams","conflicts":["2016-07-03","2016-07-04","2016-07-05","2016-07-29","2016-07-30","2016-08-29","2016-08-30","2016-09-03","2016-09-04","2016-09-23","2016-09-24"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Thomas Jefferson","conflicts":["2016-08-21","2016-08-22","2016-08-23","2016-09-21","2016-09-22","2016-09-23"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"James Madison","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-09","2016-08-10","2016-08-11"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"James Monroe","conflicts":["2016-07-29","2016-08-03","2016-08-11","2016-09-09","2016-09-10","2016-09-11"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"John QuincyAdams","conflicts":["2016-07-09","2016-08-30","2016-09-08","2016-09-09","2016-09-10","2016-09-11"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Andrew Jackson","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-09","2016-08-10","2016-08-11"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Martin VanBuren","conflicts":["2016-07-11","2016-07-12","2016-07-13","2016-08-09","2016-08-10","2016-08-11","2016-09-09","2016-09-10","2016-09-11"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"William HenryHarrison","conflicts":["2016-08-08","2016-08-09","2016-08-10","2016-08-11","2016-09-29","2016-09-30"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"John Tyler","conflicts":["2016-07-20","2016-07-21","2016-07-22","2016-08-20","2016-08-21","2016-08-22","2016-09-20","2016-09-21","2016-09-22"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"James KPolk","conflicts":["2016-08-20","2016-08-21","2016-08-22","2016-09-20","2016-09-21","2016-09-22"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Zachary Taylor","conflicts":["2016-07-26","2016-07-27","2016-07-28","2016-08-01","2016-08-02","2016-08-03","2016-09-01","2016-09-02","2016-09-03"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Millard Fillmore","conflicts":["2016-07-16","2016-07-17","2016-07-18","2016-08-01","2016-08-02","2016-08-03","2016-09-11","2016-09-12","2016-09-13"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Franklin Pierce","conflicts":["2016-07-26","2016-08-01","2016-08-02","2016-08-03","2016-08-04","2016-08-05","2016-09-10","2016-09-11","2016-09-12"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"James Buchanan","conflicts":["2016-07-08","2016-07-09","2016-07-10","2016-08-10","2016-08-11","2016-08-12","2016-09-04","2016-09-05","2016-09-06"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Abraham Lincoln","conflicts":["2016-07-22","2016-07-23","2016-07-24","2016-08-11","2016-08-12","2016-08-13","2016-09-21","2016-09-22","2016-09-23"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Andrew Johnson","conflicts":["2016-07-22","2016-07-23","2016-07-24","2016-08-11","2016-08-12","2016-08-13","2016-09-21","2016-09-22","2016-09-23"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Ulysses SGrant","conflicts":["2016-07-03","2016-07-04","2016-07-05","2016-08-01","2016-08-02","2016-08-03","2016-09-21","2016-09-22","2016-09-23"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Rutherford BHayes","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-09-27","2016-09-28"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"James AGarfield","conflicts":["2016-07-29","2016-07-30","2016-08-02","2016-08-03"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Chester AArthur","conflicts":["2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-09-27","2016-09-28"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Grover Cleveland","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-09-27","2016-09-28"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Benjamin Harrison","conflicts":["2016-07-28","2016-07-29","2016-07-30","2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-09-27","2016-09-28","2016-09-29","2016-09-30"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"William McKinley","conflicts":["2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-08-05","2016-08-06","2016-09-01","2016-09-02","2016-09-03","2016-09-05","2016-09-06","2016-09-28","2016-09-29"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Theodore Roosevelt","conflicts":["2016-07-19","2016-07-20","2016-07-31","2016-09-11","2016-09-12","2016-09-13","2016-09-30"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"William HowardTaft","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-08-05","2016-08-06","2016-09-01","2016-09-02","2016-09-03","2016-09-05","2016-09-06"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Woodrow Wilson","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-08-05","2016-08-06","2016-09-03","2016-09-05","2016-09-06"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Warren GHarding","conflicts":["2016-07-13","2016-07-14","2016-07-15","2016-07-29","2016-07-30","2016-07-31","2016-08-17","2016-08-18","2016-08-19","2016-09-21","2016-09-22","2016-09-23","2016-09-25","2016-09-26"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Calvin Coolidge","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-25","2016-08-26","2016-08-27","2016-08-15","2016-08-16","2016-09-21","2016-09-22","2016-09-23","2016-09-25","2016-09-26"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Herbert Hoover","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-08-05","2016-08-06","2016-09-29","2016-09-30"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Franklin DRoosevelt","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-17","2016-08-18","2016-08-19","2016-08-20","2016-08-21","2016-09-21","2016-09-22","2016-09-29","2016-09-30"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Harry STruman","conflicts":["2016-07-19","2016-07-20","2016-07-21","2016-08-11","2016-08-12","2016-08-13","2016-08-14","2016-08-15","2016-08-16","2016-08-17","2016-08-18","2016-08-19","2016-08-20"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Dwight DEisenhower","conflicts":["2016-07-09","2016-07-10","2016-07-11","2016-08-11","2016-08-12","2016-08-13","2016-08-15","2016-08-26","2016-09-11","2016-09-12","2016-09-13","2016-09-25","2016-09-16"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"John FKennedy","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-07-11","2016-08-22","2016-08-23","2016-08-25","2016-08-26","2016-09-11","2016-09-17","2016-09-18","2016-09-25","2016-09-26"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Lyndon BJohnson","conflicts":["2016-07-09","2016-07-10","2016-07-11","2016-08-11","2016-08-21","2016-08-23","2016-08-25","2016-08-26","2016-09-21","2016-09-22","2016-09-23","2016-09-25","2016-09-26"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Richard Nixon","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-17","2016-08-02","2016-08-03","2016-08-15","2016-08-26","2016-09-01","2016-09-02","2016-09-03","2016-09-05","2016-09-06"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Gerald Ford","conflicts":["2016-07-08","2016-07-09","2016-07-10","2016-07-29","2016-08-01","2016-08-02","2016-08-03","2016-08-05","2016-08-06","2016-08-10","2016-08-11"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Jimmy Carter","conflicts":["2016-07-08","2016-07-09","2016-07-10","2016-07-29","2016-07-30","2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-08-05","2016-09-17","2016-09-16","2016-09-15"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Ronald Reagan","conflicts":["2016-07-08","2016-07-09","2016-07-10","2016-07-29","2016-07-30"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"George HWBush","conflicts":["2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-09-05","2016-09-21","2016-09-29","2016-09-30"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Bill Clinton","conflicts":["2016-08-08","2016-08-09","2016-08-10","2016-08-29","2016-08-30","2016-09-01","2016-09-02","2016-09-03","2016-09-05","2016-09-06","2016-09-10","2016-09-11"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"George WBush","conflicts":["2016-08-01","2016-08-02","2016-08-09","2016-08-19","2016-08-28","2016-08-29","2016-09-01","2016-09-02","2016-09-03","2016-09-05","2016-09-06","2016-09-10","2016-09-11"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Barack Obama","conflicts":[],"onCall": {weekdays:[], weekends:[], holidays: []}}
];

var weekdaysJS = [
  "2016-07-05", "2016-07-06", "2016-07-07", "2016-07-11", "2016-07-12", "2016-07-13", "2016-07-14", "2016-07-18", "2016-07-19", "2016-07-20", "2016-07-21", "2016-07-25", "2016-07-26", "2016-07-27", "2016-07-28",
  "2016-08-01", "2016-08-02", "2016-08-03", "2016-08-04", "2016-08-08", "2016-08-09", "2016-08-10", "2016-08-11", "2016-08-15", "2016-08-16", "2016-08-17", "2016-08-18", "2016-08-22", "2016-08-23", "2016-08-24", "2016-08-25", "2016-08-29", "2016-08-30", "2016-08-31",
  "2016-09-01", "2016-09-06", "2016-09-07", "2016-09-08", "2016-09-12", "2016-09-13", "2016-09-14", "2016-09-15", "2016-09-19", "2016-09-20", "2016-09-21", "2016-09-22", "2016-09-26", "2016-09-27", "2016-09-28", "2016-09-29"
];

var weekendsJS = [
  "2016-07-08", "2016-07-09", "2016-07-09", "2016-07-10", "2016-07-10", "2016-07-15", "2016-07-16", "2016-07-16", "2016-07-17", "2016-07-17", "2016-07-22", "2016-07-23", "2016-07-23", "2016-07-24", "2016-07-24", "2016-07-29", "2016-07-30", "2016-07-30", "2016-07-31", "2016-07-31",
  "2016-08-05", "2016-08-06", "2016-08-06", "2016-08-07", "2016-08-07", "2016-08-12", "2016-08-13", "2016-08-13", "2016-08-14", "2016-08-14", "2016-08-19", "2016-08-20", "2016-08-20", "2016-08-21", "2016-08-21", "2016-08-26", "2016-08-27", "2016-08-27", "2016-08-28", "2016-08-28",
  "2016-09-09", "2016-09-10", "2016-09-10", "2016-09-11", "2016-09-11", "2016-09-16", "2016-09-17", "2016-09-17", "2016-09-18", "2016-09-18", "2016-09-23", "2016-09-24", "2016-09-24", "2016-09-25", "2016-09-25", "2016-09-30", "2016-10-01", "2016-10-01"
];

let findEligible = (date) => {
  return (person) => person.conflicts.indexOf(date) < 0;
};

let findShortestOnCallList = (type) => {
  return (prev, curr) => ( prev.onCall[type].length <= curr.onCall[type].length ) ? prev : curr;
};

var result = weekdaysJS.reduce((acc, date) => {
  var type = 'weekdays';
  var selected = acc.filter(findEligible(date)).reduce(findShortestOnCallList(type));

  selected.onCall[type].push(date);

  return acc;
}, people);

var resultWeekends = weekendsJS.reduce((acc, date) => {
  var type = 'weekends';
  var selected = acc.filter(findEligible(date)).reduce(findShortestOnCallList(type));

  selected.onCall[type].push(date);

  return acc;
}, people);

console.log(resultWeekends);


var holidays = [];

var getHolidays = function(year){
	holidays.push(`${year}-07-04`, `${year}-07-04`);

	if(moment(`${year}-07-04`, "YYYY-MM-DD").format("dddd") == "Friday"){
		holidays.push(`${year}-07-05`, `${year}-07-05`, `${year}-07-06`, `${year}-07-06`);
	}
	if(moment(`${year}-07-04`, "YYYY-MM-DD").format("dddd") == "Saturday"){
		holidays.push(`${year}-07-03`, `${year}-07-03`, `${year}-07-05`, `${year}-07-05`);
	}
	if(moment(`${year}-07-04`, "YYYY-MM-DD").format("dddd") == "Sunday"){
		holidays.push(`${year}-07-02`, `${year}-07-03`, `${year}-07-03`);
	}
	if(moment(`${year}-07-04`, "YYYY-MM-DD").format("dddd") == "Monday"){
		holidays.push(`${year}-07-01`, `${year}-07-02`, `${year}-07-02`, `${year}-07-03`, `${year}-07-03`);
	}

	// for labor day
	var start = moment(`${year}-09`).startOf('month');
	var counter = 1;
	// var day = moment(`${year}-09`).startOf('month').add(counter,'days').format('dddd');

		if(start != "Monday"){
			while(day != "Monday"){
				var day = moment(`${year}-09`).startOf('month').add(counter,'days').format('dddd');
				if(day == "Monday"){
					var laborDay = moment(`${year}-09`).startOf('month').add(counter,'days').format('YYYY-MM-DD');
					holidays.push(moment(laborDay,"YYYY-MM-DD").format("YYYY-MM-DD"), moment(laborDay,"YYYY-MM-DD").format("YYYY-MM-DD"));
					holidays.push(moment(laborDay,"YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"),moment(laborDay,"YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
					holidays.push(moment(laborDay,"YYYY-MM-DD").subtract(2,'days').format("YYYY-MM-DD"),moment(laborDay,"YYYY-MM-DD").subtract(2,'days').format("YYYY-MM-DD"));
				}
				counter++
			}

		}

	console.log(holidays);
};































// returns an object {day-of-week: number of occurences}
var weekdays = function(){
	var mondays = [];
	var tuesdays = [];
	var wednesdays = [];
	var thursdays = [];
	var fridays = [];
	var saturdays = [];
	var sundays = [];

	var month = String(moment().month() + 1);
	var year = String(moment().year());
	var day = moment().day() + 1;
	
	var lengthOfMonth = moment(month).daysInMonth();

	var object = {};

	for(var d=1; d<lengthOfMonth+1; d++){
		var date = moment(year+"-"+month+"-"+d);
			if(date.format("dddd") == "Monday"){
					mondays.push(date.format("YYYY-MM-DD"));
					object["Mondays"] = mondays;
			}
			if(date.format("dddd") == "Tuesday"){
					tuesdays.push(date.format("YYYY-MM-DD"));
					object["Tuesdays"] = tuesdays;
			}
			if(date.format("dddd") == "Wednesday"){
					wednesdays.push(date.format("YYYY-MM-DD"));
					object["Wednesdays"] = wednesdays;
			}
			if(date.format("dddd") == "Thursday"){
					thursdays.push(date.format("YYYY-MM-DD"));
					object["Thursdays"] = thursdays;
			}
			if(date.format("dddd") == "Friday"){
					fridays.push(date.format("YYYY-MM-DD"));
					object["Fridays"] = fridays;
			}
			if(date.format("dddd") == "Saturday"){
					saturdays.push(date.format("YYYY-MM-DD"));
					object["Saturdays"] = saturdays;
			}
			if(date.format("dddd") == "Sunday"){
					sundays.push(date.format("YYYY-MM-DD"));
					object["Sundays"] = sundays;
			}
	}

	// return array;
	return object;
};

// returns an object {day-of-week: number of occurences}
var weekdays = function(){
	var mondays = [];
	var tuesdays = [];
	var wednesdays = [];
	var thursdays = [];
	var fridays = [];
	var saturdays = [];
	var sundays = [];

	var month = String(moment().month() + 1);
	var year = String(moment().year());
	var day = moment().day() + 1;
	
	var lengthOfMonth = moment(month).daysInMonth();

	var object = {};

	for(var d=1; d<lengthOfMonth+1; d++){
		var date = moment(year+"-"+month+"-"+d);
			if(date.format("dddd") == "Monday"){
					mondays.push(date.format("YYYY-MM-DD"));
					object["Mondays"] = mondays;
			}
			if(date.format("dddd") == "Tuesday"){
					tuesdays.push(date.format("YYYY-MM-DD"));
					object["Tuesdays"] = tuesdays;
			}
			if(date.format("dddd") == "Wednesday"){
					wednesdays.push(date.format("YYYY-MM-DD"));
					object["Wednesdays"] = wednesdays;
			}
			if(date.format("dddd") == "Thursday"){
					thursdays.push(date.format("YYYY-MM-DD"));
					object["Thursdays"] = thursdays;
			}
			if(date.format("dddd") == "Friday"){
					fridays.push(date.format("YYYY-MM-DD"));
					object["Fridays"] = fridays;
			}
			if(date.format("dddd") == "Saturday"){
					saturdays.push(date.format("YYYY-MM-DD"));
					object["Saturdays"] = saturdays;
			}
			if(date.format("dddd") == "Sunday"){
					sundays.push(date.format("YYYY-MM-DD"));
					object["Sundays"] = sundays;
			}
	}

	// return array;
	return object;
};

