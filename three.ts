//Union

let u: string | null;


type Person={
   name:string,
   email:string,
}

type Addmin = Person & {
    getDetails(user: string) :void
}

//Type ka kam hota ha k type ka merger banana ya usko union karna
//Interface ka ham hota ha obj ki shape banana 