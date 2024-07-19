// Tasks/Activities:
// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
  title: "best time",
  author: "karl mark",
  year: 2019,
};

console.log(book);
// • Task 2: Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book.author);
// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.returnTitleAndAuthor = function (title, author) {
  console.log(`${title} is written by ${author}`);
  //update value of object
  this.title = title;
  this.author = author;
};
book.returnTitleAndAuthor("kalki", "anand");
// console.log(book);
// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function (year) {
  this.year = year;
};
book.updateYear(2001);
// console.log(book);
// Activity 3: Nested Objects
// . Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
  name: "AK BOOKS",
  book: [
    {
      title: "book1",
      author: "auth1",
      year: 2004,
    },
    {
      title: "book2",
      author: "auth2",
      year: 2001,
    },
    {
      title: "book3",
      author: "auth3",
      year: 2002,
    },
  ],
};
// . Task 6: Access and log the name of the library and the titles of all the books in the library.
// console.log(library.name);
library.book.map((ele) => {
  //   console.log(ele.title);
});
// Activity 4: The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.displayNameAndYear = function () {
  let str = `${book.title} published in ${book.year}`;
  return str;
};

console.log(book.displayNameAndYear());

// Activity 5: Object Iteration
// • Task 8: Use a for....in loop to iterate over the properties of the book object and log each property and its value.
for (ele in book) {
  console.log(ele);
}
// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
const keys = Object.keys(book);
const values = Object.values(book);
//return array of each key
console.log(keys);
//return array of each values
console.log(values);
