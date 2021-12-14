import "bootstrap/dist/css/bootstrap.min.css";
import { add } from '@monorepo-demo/math';

const numberA = document.getElementById("exampleFormControlInput1");
const numberB = document.getElementById("exampleFormControlInput2");
const form = document.getElementById("addForm");
const result = document.getElementById("addResult");

form.addEventListener("submit", (e)=> {
  e.preventDefault();
  const a = parseInt(numberA.value, 10);
  const b = parseInt(numberB.value, 10);
  result.innerText = add(a, b);
}, false)
