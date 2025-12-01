//this is my first file,first code of Typescript
console.log("Hello to Typescript")




//primitive and reference 
// Primitive  89  
// false
// "egg"
// He
// Hamza

// Reference  () { } []  



// let arr =[1,2,3,"hamza"]    //typescript infers so type is string | number

//Tuples
let arr :[string,number]=["hamza",21]   //fixed and pehle se bataya ha k pehla string hu and dosra number hu


//Enumes  is like key value pair laikn ham .laga k kc b value ko target kar sakte hain
enum UserRoles{
    ADMIN="admin",
    GUEST="guest",
    SUPER_ADMIN="super_admin"
}
// UserRoles.GUEST

enum StatusCodes{
    ABANDONED="abandoned status code 500",
    NOTFOUND="not found status code 404"
}
// StatusCodes.ABANDONED

let a:number;

let b;   // ham ne isme bataya nahi ha k b ki type kia ha jaisay oper hamne a ki type bagaye k wo number ha to iski type ANY hogi

a=12;

let h:unknown;       //unknown type ha 
h=12;
h="hamza";
if (typeof h=="string")
    h.toUpperCase();



//VOID

function abcd(): void{
       console.log("Ye coid fucntion ha kuch return nahi kar raha ha !")
}


