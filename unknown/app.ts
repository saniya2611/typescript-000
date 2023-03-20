let cl= console.log;

// UNKNOWN

let userDetails : unknown;

let userName : string;

userDetails = 123;
userDetails = true;
userDetails ="Jhon";

//userDetails = userName

if(typeof userDetails === "string"){
    userName = userDetails;
    cl(userName);
}