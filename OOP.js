"use strict";
//Classes and Objects
class Chips {
    constructor() {
        this.flavour = "masla";
        this.price = 100;
        this.packing = "red";
    }
}
let c1 = Chips;
//Constructors
class BottleMaker {
    constructor(brand, price, material) {
        this.brand = brand;
        this.price = price;
        this.material = material;
    }
}
let bottle = new BottleMaker("Aqua", 200, "plastic");
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
class Music {
    constructor(name, artist, thumbnail = "somethumbnail.jpg", length, available) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.available = available;
        if (!thumbnail) {
            this.thumbnail = "somethumbnail.jpg"; //console ma ye show hoga q k thumbnail ka parameter empty ha 
        }
        if (!artist) {
            this.artist = "Dont know the name";
        }
    }
}
let m1 = new Music("kali kali zulfo", "NFAK", "", 1200, false);
let m3 = new Music("tu ha kaha", "", "", 1300, false);
let m2 = new Music("kali kali zulfo", "NFAK", "", 1200, false);
//ACCESS MODIFIERS
