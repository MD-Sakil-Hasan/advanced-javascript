//every string is true except empty string
//falsy values
// 0
// ""
// undefined
// null
//lNaN

// const name = "0"
let name = 12;
// console.log(name);

// if(name){
//     console.log("condition is true")
// }
// else{
//     console.log("condition is false")
// }

if(name || name == 0){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}