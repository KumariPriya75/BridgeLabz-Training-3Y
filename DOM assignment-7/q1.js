const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

addButton.addEventListener("click", addProduct);
productInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") addProduct();
});

function addProduct() {
    const productName = productInput.value.trim();
    if (productName === "") {
        alert("Please enter a product name.");
        return;
    }

    const listItem = document.createElement("li");
    const nameSpan = document.createElement("span");
    nameSpan.textContent = productName;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.dataset.action = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.dataset.action = "delete";

    listItem.append(nameSpan, editButton, deleteButton);
    productList.appendChild(listItem);
    productInput.value = "";
}

productList.addEventListener("click", function (event) {
    const action = event.target.dataset.action;
    if (!action) return;

    const listItem = event.target.closest("li");
    if (!listItem) return;

    if (action === "delete") {
        listItem.remove();
    } else if (action === "edit") {
        startEditing(listItem);
    }
});

let editingItem = null;

function saveEdit() {
    if (!editingItem) return;
    const input = editingItem.querySelector("input");
    const nameSpan = editingItem.querySelector("span");
    if (input && nameSpan) {
        nameSpan.textContent = input.value.trim() || nameSpan.dataset.oldValue;
        input.remove();
        nameSpan.hidden = false;
    }
    editingItem = null;
}

function startEditing(listItem) {
    if (editingItem === listItem) return;
    saveEdit();

    const nameSpan = listItem.querySelector("span");
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = nameSpan.textContent;
    nameSpan.dataset.oldValue = nameSpan.textContent;
    nameSpan.hidden = true;
    listItem.insertBefore(editInput, nameSpan);
    editingItem = listItem;
    editInput.focus();

    editInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") saveEdit();
        if (event.key === "Escape") {
            editInput.value = nameSpan.dataset.oldValue;
            saveEdit();
        }
    });
}

document.addEventListener("click", function (event) {
    if (editingItem && !editingItem.contains(event.target)) saveEdit();
});
