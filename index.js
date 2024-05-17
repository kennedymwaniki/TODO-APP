const form = document.getElementById("form");
const todo = document.getElementById("todos");
const list = document.getElementById("todo-list");
const deletes = document.getElementById("delete");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (todo.value === "") {
    alert("please enter something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = todo.value;
    const deleteBtn = document.createElement("button");
    const crossbtn = document.createElement("button");
    const radio = document.createElement("input");
    radio.type = "radio";
    // list.insertAdjacentHTML("beforebegin", "radio");
    radio.classList.add("radio");
    deleteBtn.textContent = "❌";
    crossbtn.textContent = "";
    deleteBtn.classList.add("delete");
    crossbtn.classList.add("cross");

    li.classList.add("li");
    list.appendChild(li);
    li.appendChild(deleteBtn);
    li.appendChild(crossbtn);
    // list.appendChild(deleteBtn);
    todo.value = "";

    deleteBtn.addEventListener("click", function () {
      this.parentElement.remove(); // Remove the li element when deleteBtn is clicked
    });

    crossbtn.addEventListener("click", (e) => {
      const cross = e.target.parentElement; // Get the parent li element
      cross.style.textDecoration = "line-through";
      cross.style.textContent = "✔";
      crossbtn.style.background = "purple";
      //   cross.style.color = "purple";
      deleteBtn.style.display = "none";
    });
  }
});
