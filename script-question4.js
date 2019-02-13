/*var Obj1 = {
	
}
console.log("Obj1:")
console.log(Obj1);

console.log("============================================================");

console.log("Copying obj1 to Obj2");

var Obj2 = Obj1;
console.log("Obj2:")
console.log(Obj2);
*/

(function copyObject(){
	var obj1 = {
		name: "Deepanjan",
		age: 22,
		address: "F2976",
		cab: true,
	};

	console.log(obj1);

	var obj2 = {};	

	for(var i in obj1){
		obj2[i] = obj1[i];
	}

	console.log(obj2);
}());	

