let form = document.querySelector("form");
const btnSubmit = document.getElementById("btn-submit");
const secondDiv = document.getElementsByClassName("second-div")[0];
const ul = document.querySelector("ul");

form.onsubmit = function (e) {
  e.preventDefault();
};

const add = function () {
   
  const input = document.getElementById("input-text");
  if (input.value !== "") {
    const div = document.createElement("div")
    div.classList.add("div");
    secondDiv.appendChild(div);
    const p = document.createElement("p");
    p.innerText = input.value.toUpperCase();
    div.appendChild(p);

    input.value = "";
    const btn = document.createElement("button");
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
  </svg>`;

    btn.classList.add("btn");
    div.appendChild(btn);
    btn.onclick = () => (p.remove(),btn.remove());
    p.onclick = () => {
      if (p.classList.contains("line")) {
        p.classList.remove("line");
      } else {
        p.classList.add("line");
      }
    };
  }
};

btnSubmit.onclick = add;
