function add(num1, num2){
    console.log([...arguments])  //[] used to make array.
    return num1 + num2 + arguments[2];
}
const result = add(2, 3, 5, 7);
console.log(result)