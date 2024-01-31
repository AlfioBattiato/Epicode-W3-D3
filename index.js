let form = document.querySelector("form");
const btnSubmit = document.getElementById("btn-submit");
const secondDiv = document.getElementsByClassName("second-div");
const ul = document.querySelector("ul");

form.onsubmit = function (e) {
  e.preventDefault();
};

const add = function () {
  const input = document.getElementById("input-text");
  if (input.value !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
    const btn = document.createElement("button");
    btn.textContent = "x";
    btn.style =
      "color:white;background-color:red; border:none;margin-left:10px";
    li.appendChild(btn);
    btn.onclick = () => li.remove();
    li.onclick = () => li.classList.add("line");
  }
};

btnSubmit.onclick = add;
