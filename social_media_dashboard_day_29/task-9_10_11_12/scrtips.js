//task-9

function likePost(index) {
  posts[index].likes++;
  displayPosts();
}

function toggleComments(index) {
  const commentsSection = document.getElementById(`comments-${index}`);
  commentsSection.style.display =
    commentsSection.style.display === "none" ? "block" : "none";
}

function addComment(index) {
  const commentText = document.getElementById(`comment-text-${index}`).value;
  if (commentText) {
    posts[index].comments.push(commentText);
    document.getElementById(`comment-text-${index}`).value = "";
    displayPosts();
  }
}

// task - 10 Update the display when users interact with the posts by calling displayPosts() after each interaction.

//task -11

// .post[data-user="current-user"] {
//     border: 2px solid #007bff;
//     background-color: #e9f7ff;
// }

//task-12

// .post {
//     transition: transform 0.3s ease;
// }

// .post:hover {
//     transform: scale(1.02);
// }

// .post-actions button {
//     transition: background-color 0.3s ease;
// }
