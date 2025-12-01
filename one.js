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
var arr = ["hamza", 21]; //fixed and pehle se bataya ha k pehla string hu and dosra number hu
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
