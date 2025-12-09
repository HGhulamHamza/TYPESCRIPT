//Classes and Objects

class Chips {
    flavour="masla";
    price=100;
    packing="red";
}

let c1=Chips

//Constructors
class BottleMaker{
    constructor(public brand: string,public price:number ,public material:string){

    }
}
let bottle=new BottleMaker("Aqua",200,"plastic");

// class Music{
//     public name,
//     public artist,
//     public thumbnail,
//     public length,
//     public available,
//     constructor( name:string,  artist: string, thumbnail:string="somethumbnail.jpg", length:number ,public available:boolean){
//             this.name=name;
//             this.artist=artist;
//             this.thumbnail=thumbnail;
//             this.length=length;
//             this.available=available;

//     }
// }

//ANOTHER WAY OF DOING THE SAME THING
//THIS REDUCES THE LINE OF CODE
class Music{
    constructor(public name:string, public artist: string,public thumbnail:string="somethumbnail.jpg",public length:number ,public available:boolean){
       if(!thumbnail){
        this.thumbnail="somethumbnail.jpg";  //console ma ye show hoga q k thumbnail ka parameter empty ha 
       }
       if(!artist){
        this.artist="Dont know the name";
       }
    }

}
let m1=new Music("kali kali zulfo","NFAK","",1200,false)
let m3=new Music("tu ha kaha","","",1300,false)
let m2=new Music("kali kali zulfo","NFAK","",1200,false)



//ACCESS MODIFIERS
//public private protected
//public : uski value ko agar constructor ma change karo to koi problem nahi ha 
        // uski value ko constructor k andar kc method ma change karo to koi problem nai
        //class ma inherit karlo us k bad change karlo tab b koi problem nahi

//private : sirf aoni class ma accessable ha        
class Example{
    constructor(private name:string){

    }
}
let n=new Example("Hamza");
// n.name="Abbass"     error de raha ha k change nahi ho sakta laikn TS phr b usay run kar k name change kardega   


//private sirf us class ma use ho sakta
//protected apni class ma b use ho sakta ha aur jo class usay extend karegi usme b use ho sakta ha 

class Bottle{
    // private name ="Milton"
    protected name ="Milton"   // laikn "protected" karne pe error b nahi dega

}
class MetalBottle extends Bottle{
    public material ="metal"

    changeName(){
        this.name="NewName"      //erorr becuase name is private and we are changing it
    }
}


let b1= new MetalBottle ();
b1.changeName()


//2:22:10


class User{
    constructor(public name:string, public age:number,public gender?:string){}   //is "?" ne gender k attribute ko optional kardia warna pehle agar user gender na deta to error ata

}
let user1=new User("hamza",21,"Male")
let user2=new User("Haq",22)



//GETTERS   and     SETTERS
// class Admi{
//     constructor(public name:string, public age:number ){}
     

//     getName(){               //Getter
//         return this.name;
//     }

//     setName(value:string){           //Setter
//                this.name=value;
//     }
// }

// let admi=new Admi("hamza",22)


//BUT IN TS
class Admi{
    constructor(public _name:string, public age:number ){}
     

    get name(){               //Getter
        return this._name;
    }

     set name(value:string){    //Setter
        this._name=value;
     }
}

let admi=new Admi("hamza",22)


//2:34:20



