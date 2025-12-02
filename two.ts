//Interfaces and Type Aliases

//interface --object ka shape batana

//  interface User{
//     name:string,
//     email:string,
//     password:string
//     gender?:string   //optional beacause of "?"
//  }

 function abcd(obj:User)
 { 


 }
 abcd({name:"hamza",email:"hamza@gmail.com", password:"123"})


 //EXTENDING INTERFACES
  interface User{
    name:string,
    email:string,
    password:string
    gender?:string   //optional beacause of "?"
 }
 interface Admin extends User{
    admin:Boolean
 }

 function isAdmin(obj:Admin){   //If obj=Admin so we will show admin field also on obj.
    // obj.                    seeing option of admin too
 }




 //TYPE ALIASES
 type ha =number;

 let ha:"hamza"

type value =string | number | null;

 let q: value;    //q have to be a number or null or a string 




