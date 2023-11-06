let numbers = [111, 222, 333]
console.log("original: ", numbers);

//adds a 444 to the end of the array 
function push(number){
   numbers[numbers.length] =  number; 
}
push(444);
console.log("push: ", numbers);

//will remove the 333 from the end of the array 
function pop(){
    let numero = [];
    for(let i = 0; i<numbers.length - 1; i++){
        numero[i] = numbers[i];
    }
    numbers = numero;
}
pop()
console.log("pop ", numbers);

//This function will add commas into the array 
function toString (){
    //later you will add the comma in between the quotaions 
    let string = "";
    for(let i = 0; i<numbers.length; i++){
        
        if (i === numbers.length - 1){
            string += numbers[i];
        }
        else {
            string += numbers[i] + ", ";
        }
    }
    return string 
}

console.log("toString", toString())

 function join (){
    let slash = "";
    for(let i = 0 ; i <numbers.length; i++){
       
        if (i === numbers.length -1){
            slash += numbers[i] ;
        }
        else{
            slash += numbers[i] + "/";
        }
    }
    return slash 
 }
console.log("join ", join());

let colors = [444, 555, 666]

function concat (){
for(i = 0; i<colors.length; i++){
    push(colors[i]);
}
}

concat();
console.log(numbers)


