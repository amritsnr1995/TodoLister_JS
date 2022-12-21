const output = document.querySelector(".output");
// input element
const myInput = createMyElement(output, "input", "main");
myInput.setAttribute("type", "text");
// button element
const myBtn = createMyElement(output, "button", "btn");
myBtn.textContent = "Add New User";
// create ul
const myList = createMyElement(output, "ul", "myList");

// event listner
myBtn.addEventListener("click", (e) => {
  console.log("clicked");
  let userInput = myInput.value;
  if (userInput.length > 0) {
    const li = addNewList(userInput);
    myInput.value = "";
  }
});

// creating list item
function addNewList(userInput) {
  const li = createMyElement(myList, "li", "myList");

  const div = createMyElement(li, "div", "container");

  const span1 = createMyElement(div, "span", "info");
  span1.textContent = userInput;

  const span2 = createMyElement(div, "span", "edit");
  span2.textContent = "Edit";

  const span3 = createMyElement(div, "span", "delete");
  span3.textContent = "Delete";

  span2.addEventListener("click", (e) => {
    if (span2.textContent === "Edit") {
      span1.style.backgroundColor = "yellow";
      span1.setAttribute("contenteditable", true);
      span2.textContent = "save";
    } else {
      span1.style.backgroundColor = "white";
      span1.setAttribute("contenteditable", false);
      span2.textContent = "Edit";
    }
  });
  span3.addEventListener("click", (e) => {
    console.log("delete");
    li.remove();
  });

  return li;
}

// creating element function
function createMyElement(parent, elementType, classAdd) {
  const ele = document.createElement(elementType);
  parent.append(ele);
  ele.classList.add(classAdd);
  return ele;
}
