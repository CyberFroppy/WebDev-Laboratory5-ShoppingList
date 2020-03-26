function addListItem() {
  let adding = document.querySelector(".addItem");
  let list = document.querySelector(".list");
  adding.addEventListener("click", event => {
    event.preventDefault();
    let text = document.querySelector("#listInput").value;
    if (isNaN(text)) {
      list.innerHTML += `<div class = "shopItem">
        <li class = "lis">
        <p class = "itemShop">${text}</p>
        <button class = "check" type = "text">
            Check
        </button>
        <button class = "del" type = "text">
            Delete
        </button>`;
    }
  });
}
function delItem() {
  listItem = document.querySelector(".list");
  listItem.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.matches(".del")) {
      console.log(event.target);
      event.target.parentElement.parentElement.remove();
    }
  });
}
function checkItem() {
  listCheck = document.querySelector(".list");
  listCheck.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.matches(".check")) {
      console.log(event.target);
      event.target.parentElement.classList.toggle("checked");
    }
  });
}
function init() {
  addListItem();
  delItem();
  checkItem();
}
init();
