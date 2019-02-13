var empNumber;
var arr = [];


(function(){
    empNumber = prompt("Enter number of Employees");

	for(var i = 0; i < empNumber; i++){
		var name = prompt("enter the name of Employee");
		var age = prompt("Enter the age of the employee");
		var salary = prompt("Enter the salary of the Employee");
		var DOB = prompt("Enter the date of birth of the employee in the format of dd/mm/year");

		var employee = {
			name: name,
			age: age,
			salary: salary,
			DOB: DOB,
		}

		arr[i] = employee;
		console.log(arr)
;	}



}());


var salaryGreaterThan5000 = function(){
	for(var i = 0; i < empNumber; i++){
	if(arr[i].salary > 5000){
		console.log(arr[i].name + "\n");

	}
}

console.log(salaryGreaterThan5000);
};





var ageGroup = function(){
	var AgeLessThan20 = [];
	var ageLessMid = [];
	var ageMoreMid = [];
	var ageMoreThan60 = [];
	
		for (var i = 0; i < empNumber; i++ ){
			
			if(arr[i].age < 20){
				AgeLessThan20.push(arr[i].name);
				
			}else if(arr[i].age >= 20 &&  arr[i].age < 40){
				ageLessMid.push(arr[i].name);
				
			}else if(arr[i].age >= 40 &&  arr[i].age < 60){
			ageMoreMid.push(arr[i].name);
			}
			else if(arr[i].age >= 60){
			ageMoreThan60.push(arr[i].name);
			}
		}

		console.log(AgeLessThan20);
		console.log(ageLessMid);
		console.log(ageMoreMid);
		console.log(ageMoreThan60);

};

var salaryIncrement = function(){
	var arrIncrement = [];
var output;

for(var i = 0; i < empNumber ; i++){
	if(arr[i].salary < 1000 && arr[i].age > 20){
    output = arr[i].salary * 5;
    console.log(output);
    arr[i].salary = output;
    arrIncrement.push(arr[i].name);
    console.log(arr[i].name  + " = " + arr[i].salary)
	}
}

console.log(arrIncrement);
};



