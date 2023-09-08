var num1 =9
var num2 =10
var num3 =-7
let largest;
if (num1 >= num2 && num1 >= num3){
    largest=num1   
}else if(num2 >= num1 && num2 >= num3){
    largest=num2   
}else {
    largest=num3
}
console.log("the largest number is"+largest);