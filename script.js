const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];

// # Progression 1
function arraySlice(){
    var modifiedFood = [];
    modifiedFood = foods.slice(1,4);
    console.log(modifiedFood);
    return modifiedFood;
}
arraySlice();

// # Progression 2
function arraySplice(){
    foods.splice(2,0,"noodles","icecream");
    modifiedFood = foods;
    console.log(modifiedFood);
    return modifiedFood;
}
arraySplice();

// # Progression 3
function isEven(numberArray){
    var evennumbers = numberArray.filter(function(number){
        return number%2==0;
    });
    return evennumbers;    
}
console.log(isEven(numberArray));


function isPrime(numberArray){
    let primenumbers=numberArray.filter(function(number)
    { 
        for(var i = 2; i < number; i++)
            if(number % i === 0) return false;
        return number > 1;
    });
    return primenumbers;
}
console.log(isPrime(numberArray));   

// #Progression 4
function nonPrime(numberArray){
    let nonprimenumbers=numberArray.filter(function(number)
    { 
        for(var i = 2; i < number; i++)
            if(number % i === 0) return true;
    });
    return nonprimenumbers;
}
console.log(nonPrime(numberArray));  

// # Progression 5
var isEven = numberArray =>{
    var evennums = numberArray.filter(number =>{
        return number%2==0;
    });
    return evennums;
}
console.log(isEven(numberArray));

// # Progression 6
var myArray = [11, 34, 20, 5, 53, 16];
var findSquareOfNumbers= (myArray)=>{
    var square = myArray.map(x =>{
        return x*x;
    });
    return square;
}
console.log(findSquareOfNumbers(myArray));

// # Progression 7
var myArray = [2, 3, 5, 10];
var multiply = myArray =>{
    var product = myArray.reduce((prev,curr) =>{
        return prev*curr;
    });
    return product;
}
console.log(multiply(myArray))
