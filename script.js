// your JavaScript file

const unorderedList = document.querySelector("ul");
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", (event) => {
    event.preventDefault();

    const myItem = inputElement.value;
    inputElement.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = myItem;

    listItem.appendChild(listBtn);
    listBtn.textContent = "Delete";

    unorderedList.appendChild(listItem);

    listBtn.addEventListener("click", () => {
        unorderedList.removeChild(listItem);
    });
    inputElement.focus();
});


