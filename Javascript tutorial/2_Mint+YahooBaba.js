/*
console.warn("kirteeraj"); // warnring jesa print hota hai 
console.log("Kirteeraj");// simple 
console.error("Kirteeeraj");// error jesa print hota hai 
// em 3 no me text me change rahe ga 

const a=3;
console.error(3);
*/
// Object ka mtalb ek jan ki details ya information 
// Array ka mtalb bhot sare logo ki information or details
 

////// const with obj and Array////


// const a=[1,3,4,56,78]
// console.log(a);
// a[2]=100
// console.log(a);

// const b={
//     name:"kirteeraj jhala",
//     age :19,
//     course :"B.tech CSE",
//     year: "3rd"
// }
// b.name="yahhobaba"
// console.warn(b);


                           // ///////forin loop//////
// forin loop ka basically use hum object ke liye krte hai eska mtalb ye hai ki 
/*
const b={
    name:"kirteeraj jhala",
    age :19,
    course :"B.tech CSE",
    year: "3rd",
    email :"kirteerajjhala@gmail.com"
};
for (var i in b){
document.write(i ,":",b[i],"<br>")
console.log(i ,":",b[i]);
}
//console me br ni kam kerat hai 
//yaha par i name age course year ko print kr raha hai 
// name: age: course: year: email:
// b[i] assign ki hoi value ko print krta hai



/*
// /////////Array-Map()//////////
// var a=[1,3,5,7,8];
// multiply  by 10 
// new array baane ga [10 ,30 ,50, 70,80]

var c=[1,3,5,7,8];
var b= c.map(test);
document.write(b);
function test(k){
    return k*10
}

var c=[
    {name:"kirteeraj",age:19 },
    {name:"harsh",age:19 },
    {name:"raj",age:19 }
]
console.log(c);
let b =c.map(k1)
document.write(b)
function k1(k2) {
    return k2.name+""+k2.age
}
    */


////////////string method//////////

// let str="kirteerajjhala"
// let a = str.length;//lenth ki ginti 1 se start hoti hai
// document.write(a)


// method me () piche lagte hai 
// let str="kirteerajjhala"
// let a = str.toLowerCase();
// document.write(a)

// let str="kirteerajjhala"
// let a = str.toUpperCase();
// document.write(a)


// let str="kirteerajjhala"
// let a = str.includes("jhala");//ye same dekhta hai agr capital hai to vo bhi capital hi hona 
// document.write(a)// ye letter or words dono ko leta hai oeans true or flase hi deta   hai bss


// let str="kirteerajjhala"
// let a = str.startsWith("kirteeraj")// ye starting words or letter ko dhundhta hai or ans true or false me deta hai 
// document.write(a)

// let str="kirteerajjhala"
// let a = str.endsWith("jhala");//ye end me dhundhta hai 
// document.write(a)

// let str="kirteerajjhala is a very popular person in the world"
// let a = str.search("is");
// document.write(a)
// ye index batata hai or jaha se vo word start ho ga vahi ka index batye ga jese ki "is" 16 se 
//  start huva hai to vahi batye ga  or agr koi word nhi mila to -1 deta hai 


// let str="kirteerajjhala raj rajjhala"
// let a = str.match(/j/g);
// document.write(a)
// console.log(a);
// esme jo bhi repeat hota hai usse batata hai or uska ek alg aary bannana deta hai 
// jahah par /raj/ jo hai serach krna hai vo  word or g means gloabl means puri string me 
// oe esme word or letter dono search kr skte hai 


// // replace ( ) ka use kisi word ko kisi dusre word se replace krna 
// let str="kirteerajjhala is a very popular person in the world"
// let a = str.replace("a","fine");
// document.write(a) 
// /a/g eska "a " ki jahgah tab likhna hai jab puri string me "a " ki jagha fine likhna hai ye ni likhe ge to vo sirf ek hi bar chnage krenga 

// let str="kirteerajjhala raj rajjhala"
// let a = str.charAt(19);
// document.write(a)
// ye letter deta hai koii sa bhi index do ye uska letter de ga ki ye index pe hai hai 


// let str="kirteerajjhala raj rajjhala"
// let a = str.split("a");
// console.log(a);
// document.write(a)
//kirteer,jjh,l, r,j r,jjh,l, output
// split ka mtalb ek string ko alg alg array me todana 


// let str="kirteerajjhala raj rajjhala"
// let a = str.repeat(10);
// document.write(a)
// repeat () string ko repat krne ka kam krta hai yaha par 1 string 10 bar repaet hogi

// toString() // kisi ko bhi stirng me covert kr lets hsi menas unka type chnage kr deta hai 

let str="kirteerajjhala raj rajjhala"
let a = str.valueOf(10);
// document.write(a)
console.log(a);
// // valueof di hoi string ko bss print kr detaa hai 

