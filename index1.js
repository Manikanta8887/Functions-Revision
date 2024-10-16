//  1st Question  

var password=2008;

var inputbyuser=prompt("Enter the password:");

if(inputbyuser==password){
    console.log("You Have entered the corrected password");
    alert("You Have entered the corrected password");
}
else if(inputbyuser!=password){
    console.log("You have entered the incorrect password");
    alert("You have entered the incorrect password");
}
else{
    console.log("Please Enter Your Password");
    alert("Please Enter Your Password");
}
//  2nd Question  


var password2=1310;

do{
    var input=parseInt(prompt("enter your password"));

}while(password2 !== input);

//  3rd Question  


let a1 = "1234"; 
let accessGranted = false; 

do {
    let b = parseInt(prompt("Enter The Value:"));
    if (a1.includes(b)) {               
        console.log("Access Granted Successfully!");
        accessGranted = true;           
    } else {
        console.log("Access Denied. Try again."); 
    }
} while (!accessGranted);

//  4th Question  

var password3=2008;
do{
    var input=parseInt(prompt("Enter Your Password"));
}while(input!=password3);


//  5th Question  


let password4="2008";
let Accessgranted1=false;

do{
    let b=prompt("Enter the Password:");
    if(b==password4){
        console.log("You Have Enterred The Correct Password");
        alert("You Have Enterred The Correct Password");
        Accessgranted1=true;
    }
    else{
        if(b!=password4){
            console.log("You Have Entered The Wrong Password");
            alert("You Have Entered The Wrong Password");
        }
        else{
        console.log("Please Enter Your Password");
        alert("Please Enter Your Password");
        }
    }
}while(!Accessgranted1)


//  5th Question  

let password1=2008;
let Accessgranted=false;
let maxattempts=5;
let attempts=0;

do{
    let input1=prompt("Enter The Password:")

    if(input1===null){
        console.log("Cancelled By The User");
        alert("Cancelled");
        break;
    }

    let input=input1.trim();

    if(input==password1){
        console.log("You Have Entered THe Correct Password");
        alert("Access Granted");
        Accessgranted=true;
        break;
    }
    else{
        attempts++;
        if(input!=password1){
            console.log("You Have Entyered The Incorrect Password");
            alert("Access Denied! Try Again");
        }
        else{
            console.log("Please Enter The Password");
            alert("Please Enter The Password");
        }
        console.log("You Have Only " + (maxattempts-attempts) + " Attempts");
        alert("You Have Only " + (maxattempts-attempts) + " Attempts");
    }
}while(!Accessgranted && maxattempts > attempts);


//  6th Question  


var products=["watch","bike","belt","mobiles","laptops"];

var itemfound=false;

function addToCart(){
    var input = prompt("Enter The Input:");
    if(input){
        for(elem of products){
            if(input==elem){
                console.log(`you have added the ${input} item to the cart`);
                alert(`you have added the ${input} item to the cart`);
                itemfound=true;
                break;
            }
        }
        if(!itemfound){
            console.log(`We dont have the ${input} item in the cart`);
            alert(`we dont have the ${input} item in the cart`);
        }
    }
    else{
        console.log("Please select one item and add to cart");
        alert("Please select one item and add to cart");
    }
}

// Normal Functions

function a(t){
    console.log("a function");
    console.log(t);
    t()
}

(function b(){
    console.log("b function")
});

// Anonymous Functions  

// function (){
//     console.log("JavaScipt");
// }

// function Expression  

var a=function (){
    console.log("JavaScipt");
}

// Named Function Expression

var a=function Manikanta(){
    console.log("JavaScript");
}
a();

// Asynchronous Functions callback Functions

//  SetTimeout  

console.log("Coffee Ordered");
setTimeout(function coffee(){
    console.log("Coffee Ready")
},5000)
console.log("Coffee Ordered and meanwhile having samosa with my friend with my friends money");

// Promises

var promise=new Promise((resolve,reject) =>{
    if(true){
        resolve("Successful");
    }
    else{
        reject("Rejected");
    }
}
)
console.log(promise);

// SetInterval

setInterval(function(){
    console.log("Hello")
},2000);

//  Event Driven Callback Functions  

var products=["Watch","Mobiles","Belt","Laptops","Earbuds"];

function addToCart(){
    var input=prompt("Enter The Product:");

    if(input){
        for(elem of products){
            var itemfound=false;
            if(input==elem){
                console.log(`You Have Added ${input} to the cart`);
                alert(`You Have Added ${input} to the cart`);
                itemfound=true;
                break;
            }
        }
        if(!itemfound){
            console.log(`We dont have ${input} in our cart`);
            alert(`We dont have ${input} in our cart`);
        }
    }
    else{
        console.log("Please enter item to add in the cart");
        alert("Please enter item to add in the cart");
    }
}