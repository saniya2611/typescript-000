let cl = console.log;

// let x = 10; 

//     x = "hello";

//     x = true;

const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
const add = document.getElementById("add") as HTMLElement;
// const add =<HTMLElement> document.getElementById("add");


const addition = (n1:number,n2:number) =>{
    cl(n1 + n2)
}

add.addEventListener("click", () => {
    addition(+num1.value , +num2.value)
})