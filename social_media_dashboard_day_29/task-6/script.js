const posts = [];

document.getElementById("post-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const text = document.getElementById("post-text").value;
  const imageUrl = document.getElementById("post-image").value;
  const username = sessionStorage.getItem("loggedInUser");
  const timestamp = new Date().toLocaleString();

  const newPost = {
    text,
    imageUrl,
    username,
    timestamp,
    likes: 0,
    comments: [],
  };
  posts.push(newPost);

  document.getElementById("post-text").value = "";
  document.getElementById("post-image").value = "";

  displayPosts();
});
