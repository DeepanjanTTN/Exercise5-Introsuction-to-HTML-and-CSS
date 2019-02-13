var inputstr, str, reversestr;

inputstr =  prompt("Enter the string");

str = inputstr;

str = str.split("");
str = str.reverse();
reversestr = str.join("");

console.log(reversestr);


if(inputstr == reversestr){
	alert(inputstr + " is a plaindrome!");
}else{
	alert(inputstr + " is not a plaindrome and the result is " + reversestr);
}

