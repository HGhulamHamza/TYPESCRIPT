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





