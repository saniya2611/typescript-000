let cl = console.log;

//type alias
// type Person = {
//     fName : string,
//     lName : string,
//     age :number,
//     skills : string[],
//     gender? : string  //optional
// }
// let person : Person ={
//     fName : "Jhon",
//     lName : "Doe",
//     age : 33,
//     skills : ["Angular","javascript","css","typescript","HTML"]
// }

//In such case if any key is not mandetory then in type we can add question mark(?) after key

//interface

interface Iperson {
    fName : string,
    lName : string,
    age   : number,
    canDrive : boolean,
    // skills : Array<string>
    skills : string[]
}
let person1:Iperson = {
    fName : "Jhon",
    lName : "Doe",
    age   : 33,
    canDrive : true,
    skills : ["Angular", "ts" , "js" , "HTML"]
}
let person2:Iperson = {
    fName : "Jun",
    lName : "Doe",
    age   : 25,
    canDrive : true,
    skills : ["java", "python" , ".net" , "cloud"]
}

let allPerson : Iperson[] =[
    {
        fName : "Jhon",
        lName : "Doe",
        age   : 33,
        canDrive : true,
        skills : ["Angular", "ts" , "js" , "HTML"]
    },
    {
        fName : "Jun",
        lName : "Doe",
        age   : 25,
        canDrive : true,
        skills : ["java", "python" , ".net" , "cloud"]
    }
]


let skills: (string|number)[]=["abc","efg","hij","klm","nop",123,456]

let age: number[]=[2,35,4,57,6,76,98]


// type Products = {
//     mobileName : string,
//     version : string,
//     price: number,
//     rating : number
// }

// let mobile : Products = {
//     mobileName : "samsung",
//     version :"g-4",
//     price:6465743,
//     rating : 4.5
// }
interface Iproduct {
    mobileName : string,
    version : string,
    price: number,
    rating : number
}
let allProducts :Iproduct[]= [
    {
        mobileName : "samsung",
        version :"g-4",
        price:6465743,
        rating : 4.5
    },
    {
        mobileName : "Iphone",
        version :"g-6",
        price:547378689,
        rating : 5
    }
]

