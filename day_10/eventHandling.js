// Day 10: Event Handling
// Tasks/Activities:
// Activity 1: Basic Event Handling
// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const changesPara = () => {
  const para = document.getElementById("para");
  para.innerText = " new text ";
};
// • Task 2: Add a double-click event listener to an image that toggles its visibility.
const imageToggleClick = () => {
  const imageToggle = document.getElementById("image");
  imageToggle.classList.toggle("visible");
};
// Activity 2: Mouse Events
// • Task 3: Add a mouseover event listener to an element that changes its background color.
const mouseoverEvent = () => {
  const backgroundDiv = document.getElementById("background-color-change");
  backgroundDiv.style.backgroundColor = "pink";
};
// • Task 4: Add a mouseout event listener to an element that resets its background color.
const mouseoutEvent = () => {
  const backgroundDiv = document.getElementById("background-color-change");
  backgroundDiv.style.backgroundColor = "white";
};
// Activity 3:
// Keyboard Events
// • Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const inputField = document.getElementById("input-field");
inputField.addEventListener("keydown", (e) => {
  console.log(e.key);
});
// • Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const inputField2 = document.getElementById("input-field-2");
const para1 = document.getElementById("para-1");

inputField2.addEventListener("keyup", (e) => {
  para1.innerText = e.target.value;
});
// Activity 4: Form Events
// . Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
// const formSubmit = () => {
const formElement = document.getElementById("myForm");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formElement);

  const formEleData = {};

  formData.forEach((key, value) => {
    formEleData[key] = value;
  });

  console.log(formEleData);
});
// };
// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const selectOption = document.getElementById("mySelect");
const displayRes = document.getElementById("selectedValue");

selectOption.addEventListener("change", (e) => {
  displayRes.innerText = e.target.value;
});
// Activity 5: Event Delegation
// • Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const list = document.getElementById("list");
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});

// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const list2 = document.getElementById("list-2");
const addbutton = document.getElementById("button");
const childContainer = document.getElementById("child-container");
addbutton.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${childContainer.children.length + 1}`;
  childContainer.appendChild(newItem);
});
