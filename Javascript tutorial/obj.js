/*
datatype of javascript 
1) primitive data types  is also call        (value types)
 ye sab types hai primitive data tyes ke =>null ,undefined string number boolean BigInt


2) non primitive data types is also called  ( referance type)
nono primtive ke types bss ek hi (object) 

orr object are further divided into three categories
1 object literals 
2 Array 
3 Functions

*/

/*
const obj = {
name :"kirteeeraj jhala",
age: 19,
year :3,
collegeName:"chameli devi group of intitions"

};
obj.surname="jhala"// ye new add bhi kr skte hai 
obj.["is-student"]=true

console.log(obj);
console.log(obj.name);
console.log(obj["na"+"me"]);// yese bhi call kr skte hai ki bhi elment ya iteam ko 

oe esme obj ke under obj bhi create kr skte hai
*/

//// inside object
// 1: Object can conatian primitives like number and String
// 2: Object can contain other Object and are called nested Object
// 3: function can be object properties
// functioninside an object are called methods
// exmaple

let product={
    company :'mango',
    price:861,
    iteamName:'T-shirt',
    // yaha par obej ke under function banaa skte hai 
    displayprice:function(){ /// displayprice function ka name
        console.log(`price of the product is ${product.price
}` );

    }
   

}
console.log(product);
console.log(product.displayprice());
