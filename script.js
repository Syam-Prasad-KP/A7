const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const mulBtn = document.getElementById("mulBtn");
const divBtn = document.getElementById("divBtn");
const sqrBtn = document.getElementById("sqrBtn");
const cubBtn = document.getElementById("cubBtn");
const output = document.getElementById("output");

const add = () => {
     output.textContent = Number(n1.value)+Number(n2.value);
}
addBtn.addEventListener("click", add);

const sub = () => {
     output.textContent = Number(n1.value)-Number(n2.value);
}
subBtn.addEventListener("click", sub);

const mul = () => {
     output.textContent = Number(n1.value)*Number(n2.value);
}
mulBtn.addEventListener("click", mul);

const div = () => {
     output.textContent = Number(n1.value)/Number(n2.value);
}
divBtn.addEventListener("click", div);

const sqr = () => {
     output.textContent = Number(n1.value)**2
}
sqrBtn.addEventListener("click", sqr);

const cub = () => {
     output.textContent = Number(n1.value)**3
}
cubBtn.addEventListener("click", cub);