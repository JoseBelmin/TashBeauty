// Assigning a variable
let student = {
    first_name: 'Errol',
    last_name: 'Tate',
    age: 69,
    email: 'Erroltate@gmail.com'
}
// To print "Student"
console.log(student)
let i = 12
if(i%12){
    console.log('The number is even.')
}
else{
    console.log('The number is odd.')
}
// For loops
for(i = 1; i <= 100; i++){   
    console.log(i)
}
// Finding the factorial
const num = 6;
let factorial = 1;

for(i = 1; i <= num; i++){
    factorial *= i
}

console.log("Factorial of 6 is: ", factorial)
// Creating a function
function AddThreeNumber(a,b,c){
    return a + b + c;
}

console.log(AddThreeNumber(4,5,6))