/*
// example 2023/02/10
let root1, root2;
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");
let detal = b * b - 4 * a * c;
if (detal > 0) {
  root1 = (-b + Math.sqrt(detal)) / (2 * a);
  root2 = (-b - Math.sqrt(detal)) / (2 * a);
  console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
} else if (detal == 0) {
  root1 = root2 = -b / (2 * a);
  console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
} else {
  let realPart = (-b / (2 * a)).toFixed(2);
  let imagPart = (Math.sqrt(-detal) / (2 * a)).toFixed(2);
  console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
*/

/*
//Example 2023/02/13
function ShowMessage(firstName)
{
    function SayHello() {
        console.log("Hello " + firstName);
    }
    return SayHello();
}
ShowMessage("Steve");
*/

/*
//Example 2023/02/14
const student = {
  firstName: "dao",
  lastName: "huy",
  position: "intern",
  ages: 22,
};


const submit = document.getElementById("btn-primary");
submit.addEventListener("click", () => {
  console.log(student);
});
*/

/*
// Example 2023/02/17
const User = [
  {
    userName: 'daoanhhuy26012001',
    password: '0775529135',
  },
  {
    userName: 'dophamanhthu25082002',
    password: '0776324384',
  },
];

function getUser() {
  setTimeout(() => {
    User.forEach((user, index) => {
      console.log(user.userName);
      console.log(user.password);
    });
  }, 1000);
}

function createUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      User.push(user);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong!");
      }
    }, 2000);
  });
}

async function init() {
  await createUser({
    userName: 'huydao26012001',
    password: `0775529135Hhuy`,
  });

  getUser();
}

init();
*/

// Example 2023/02/20
function person([name, age]) {
  console.log(name, age);
}
person(["huydao", 22]);

const parity = (pram) => {
  return pram.filter(x => x % 2 === 0)
}

const add = [100, 1001 , 2000]
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...add]
const callFunction = parity(arr)
console.log(callFunction);

