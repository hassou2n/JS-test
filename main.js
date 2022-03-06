// 1. Programming Basics

const dishes = [
  "Spaghetti",
  "Lasagne",
  "Beans on toast",
  "Porridge",
  "Tomato soup",
  "Salmon",
];

for (let i = 0; i < dishes.length; i++) {
  console.log(dishes[i]);
}

//2. DOM manipulation

let myBut = document.querySelector(".myBut");
myBut.onclick = function myFunction() {
  const h1 = document.querySelector(".h1");
  h1.innerHTML = "Javascript test";
};

// 3. Async API calls

let f1name = document.querySelector(".f1name");
const apiUri = `https://reqres.in/api/users`;

async function calls() {
  const response = await fetch(apiUri);
  const date = await response.json();
  console.log(date);

  let f1name1 = ` ${date["data"][0]["first_name"]}`;

  f1name.innerHTML = f1name1;
}
calls();

// 4. Class

const peter = new Person("peter");

peter.sayHello(); // 'Hello my name is Peter'
