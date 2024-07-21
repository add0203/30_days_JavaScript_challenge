// Day 9: DOM Manipulation
// Tasks/Activities:
// Activity 1: Selecting and Manipulating Elements
// • Task 1: Select an HTML element by its ID and change its text content.

let textBox = document.getElementById("text-box");
const changeText = () => {
  textBox.innerText = "i am here again";
};

// • Task 2: Select an HTML element by its class and change its background color.

const mainContiner = document.getElementsByClassName("main-container")[0];

const changeBackgroundColor = () => {
  mainContiner.style.backgroundColor = "#d2ff6e";
};
// Activity 2: Creating and Appending Elements
// • Task 3: Create a new div element with some text content and append it to the body.
const newEle = document.createElement("div");
const addNewElement = () => {
  newEle.innerText = "i am new Element";
  //add css to new element
  newEle.style.backgroundColor = "#ff8225";
  newEle.style.padding = "10px";
  newEle.style.margin = "10px";
  newEle.style.color = "white";
  newEle.style.fontWeight = "600";

  mainContiner.appendChild(newEle);
};
// • Task 4: Create a new li element and add it to an existing ul list.

const list = document.createElement("li");
const listItem1 = document.createElement("ul");
const listItem2 = document.createElement("ul");
const listItem3 = document.createElement("ul");

const createList = () => {
  listItem1.innerText = " item 1";
  listItem2.innerText = " item 2";
  listItem3.innerText = " item 3";

  list.style.backgroundColor = "#ff8225";
  list.style.padding = "10px";
  list.style.margin = "10px";
  list.style.color = "white";
  list.style.fontWeight = "600";
  list.setAttribute;
  list.appendChild(listItem1);
  list.appendChild(listItem2);
  list.appendChild(listItem3);

  mainContiner.appendChild(list);
};
// Activity 3: Removing Elements
// • Task 5: Select an HTML element and remove it from the DOM.
function removeElement() {
  const element = document.getElementById("removeMe");
  element.remove();
}
// • Task 6: Remove the last child of a specific HTML element.

function removeLastChild() {
  const parent = document.getElementById("parent");
  parent.removeChild(parent.lastChild);
}
// Activity 4: Modifying Attributes and Classes
// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

function changeImage() {
  const image = document.getElementById("myImage");
  image.setAttribute("src", "new_image.jpg"); // Change the src attribute
  image.setAttribute("alt", "New Image"); // Optionally change the alt attribute
}
// • Task 8: Add and remove a CSS class to/from an HTML element.
function toggleHighlight() {
  const textElement = document.getElementById("myText");
  textElement.classList.toggle("highlight");
}

function addHighlight() {
  const textElement = document.getElementById("myText");
  textElement.classList.add("highlight");
}

function removeHighlight() {
  const textElement = document.getElementById("myText");
  textElement.classList.remove("highlight");
}
// Activity 5: Event Handling
// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.
// • Task IO: Add a mouseover event listener to an element that changes its border color.
