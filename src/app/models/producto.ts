export class Producto{
    _id?:number;
    name:string;
    age:string;
    image:string;

    constructor(name:string,age:string,image:string){
        this.name =name;
        this.age =age;
        this.image =image;

    }
}