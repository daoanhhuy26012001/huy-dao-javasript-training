// example 2023/02/10
// let root1, root2;
// let a = prompt("Enter the first number: ");
// let b = prompt("Enter the second number: ");
// let c = prompt("Enter the third number: ");
// let detal = b * b - 4 * a * c;
// if (detal > 0) {
//   root1 = (-b + Math.sqrt(detal)) / (2 * a);
//   root2 = (-b - Math.sqrt(detal)) / (2 * a);
//   console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// } else if (detal == 0) {
//   root1 = root2 = -b / (2 * a);
//   console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// } else {
//   let realPart = (-b / (2 * a)).toFixed(2);
//   let imagPart = (Math.sqrt(-detal) / (2 * a)).toFixed(2);
//   console.log(
//     `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
//   );
// }

//Example 2023/02/13
function ShowMessage(firstName)
{
    function SayHello() {
        console.log("Hello " + firstName);
    }
    return SayHello();
}
ShowMessage("Steve");