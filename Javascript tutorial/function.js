
/*

function introductionOfMe(username="raj ", profession ,age){// yaha se bhi value de skte hai  default bolte ahi esko 



    console.log("hii,");
console.log("my name is  " ,username);
console.log("i am a ",profession);
console.log(`i am ${age} years old`);

return "mission succeful"
}


let value= introductionOfMe("kirteeraj","software engineer",45);//call ek bar 

// hii,
// my name is   Kirteeraj
// i am a web devloper

console.log("return value is " , value);///output jo retutn kiya haia "misssion succeful aaaye gaa"
introductionOfMe(" civil enginner",100); //defult bolte hai esko 
introductionOfMe("Savita " ,"machnical enginner",20)

// hii,
// my name is   Savita
// i am a web devloper

*/

/*
function addTwoNumbers(k1, k2){
return k1+k2;

}


const result=addTwoNumbers(10,10)
console.log(result,"vaule  is");

*/


////////////////global exection context//////////
// debugger
// sayhii()
// const username="kirteeraj";
// const userage=34;

// function sayhii(){
//     const a=4;
//     const b=10;
//     console.log(a,b);
// }

// global exection context do chijo se mil kr banana hota 
// first memery creation phase me variable define hote hai or unki value undefined hoti hai 
// second code exection phase me varibeles me kuch value assing ho jati hai  or ye global me aate hai 

// or global exection me function pahle chalta hia uske bad ye sab chalte hai memroy creations phase or 
// code exections phase or function local me aata hia baki sab same process hoti hai


/*
function a(b){
    console.log(b);
    return" kirteeraj"
}

c=a({
    Name :"kirteeraj jhala",
    age:19,
    profession :"engineering",

})

a([1,23,4,56,6,64,33])
console.log(c);

console.dir(a); //ye function ko obejct banana deta hai 
console.dir(1234);// dir number ko object nhi bannaa skta hai 
console.dir("a"); //dir string ko object nhi bannaa skta hai

// object or array ko bhi passed kr skte hai function me 

 
*/

/////////////// Ab function ke under function ko call krenge //////////
// esko higher oder function bolte hai 
// function a(b){
//     console.log(b);
//     b()

    
// }

// function sayhii() {
//     console.log("Hii KIrteeraj");
// }
//  //call back function bolte hai esko/////
// a(sayhii)
//         //call back function bolte hai esko/////
//         // call back ka mtalb hai kisi function ko function ke under rakh kr call krnaa 
// a(function(){
//     console.log("Hii KIrteeraj");
// })

// odd even 
// function iseven(number) {
//     if (2%number===0) {
//         console.log("the number is even");
//     } else {
//         console.log("theee number is not even");
//     }
//     return 10200
// }

// const a= iseven(2)
// console.log(a);


// input : string 
// output: firstcharacter 

// function firstcharacter(anystring) {
//     return anystring[0]
// }
// const k1=firstcharacter("kirteeraj jhala")
// console.log(k1);

function target (arraynumber,targetee) {
   for (let index = 0; index < arraynumber.length; index++) {
    if (arraynumber[index]===targetee) {
        return index;
    }
    return -1;
   }

   
}
 const myArray= [2,4,6,8,9]
const k2= target( myArray,6)
console.log(k2);



















