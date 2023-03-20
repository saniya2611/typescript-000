let cl = console.log;

//enum
enum Role{
    Admin, //100
    Candidate,  //101
    super_Admin     //102
}

let person = { 
    fName : "James",
    lName : "Bond",
    age : 55,
    // userRole : "super_Admin"
    userRole : 2
}

cl(Role.Candidate)
cl(Role.super_Admin)
cl(Role.Admin)


if(person.userRole === 2){
    cl(`show userRole`)
}


//flipkart product delivery

enum productStatus{
    ordered,
    shipped,
    readyToDispatched,
    ArrivingTomorrow,
    delivered

}