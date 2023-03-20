let cl = console.log;



type Person = {
   fName : string , 
   lName : string , 
   age  : number,
   skills  : string[]  //array of string
}
let person : Person = {
   fName : "Jhon",
   lName : "Doe",
   age  : 30,
   skills  : ["HTML", "css", "Javascript","Typescript","Angular"]
}


for ( const i of person.skills){
   cl(i.toUpperCase())
}


//tupels = A fixed length array..
type person = {
    fName: string;
    lName: string;
    age: number;
    userRole: [number , string];
}
let person1: person= {
    fName : "James",
    lName : "Bond",
    age  : 47,
    userRole : [2, "Admin"]
}

//person1.userRole[0] = "Admin"
person1.userRole.push("Hello");
person1.userRole.pop();

cl(person1);