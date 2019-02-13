window.onload = function () {


	setTimeout(function () {
		var amount, rate, time, simpleI;

		amount = prompt("Enter principal amount");
		rate = prompt("Enter interest rate");
		time = prompt("Enter time");


		simpleI = (amount * rate * time) / 100;

		console.log(simpleI);

		document.getElementById("id1").innerHTML = simpleI;

	},250);

	


