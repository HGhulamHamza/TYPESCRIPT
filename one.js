"use strict";
//this is my first file,first code of Typescript
console.log("Hello to Typescript");
//primitive and reference 
// Primitive  89  
// false
// "egg"
// He
// Hamza
// Reference  () { } []  
// let arr =[1,2,3,"hamza"]    //typescript infers so type is string | number
//Tuples
let arr = ["hamza", 21]; //fixed and pehle se bataya ha k pehla string hu and dosra number hu
//Enumes  is like key value pair laikn ham .laga k kc b value ko target kar sakte hain
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
// UserRoles.GUEST
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abandoned status code 500";
    StatusCodes["NOTFOUND"] = "not found status code 404";
})(StatusCodes || (StatusCodes = {}));
// StatusCodes.ABANDONED
let a;
let b; // ham ne isme bataya nahi ha k b ki type kia ha jaisay oper hamne a ki type bagaye k wo number ha to iski type ANY hogi
a = 12;
let h; //unknown type ha 
h = 12;
h = "hamza";
if (typeof h == "string")
    h.toUpperCase();
//VOID
function abc() {
    console.log("Ye coid fucntion ha kuch return nahi kar raha ha !");
}
//Type Inference : jab ap variable ko na bataye k type kia ha 
let w = 12; // ab pata nahi ha k w ka kia type ha 
//Type annotation 
let d; // ab ye d number b ho sakta ha boolean b ho sakta ha or string b
