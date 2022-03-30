let one = document.querySelector(".number_one");
let two = document.querySelector(".number_two");

let input = document.querySelector(".number_input");
let btn = document.querySelector(".btn");

let a = Math.trunc(Math.random() * 100 + 1);
let b = Math.trunc(Math.random() * 100 + 1);
console.log(a);
console.log(b);

one.textContent = a;
two.textContent = b;

btn.addEventListener("click", function () {
  location.reload();
  if (a + b == input.value) {
    btn.style.backgroundColor = "green";
    alert("to'g'ri topdingiz");
  } else {
    btn.style.backgroundColor = "red";
    alert("javobingiz noto'g'ri");
  }
});
