function displayPosts() {
  const feedSection = document.getElementById("feed-section");
  feedSection.innerHTML = "";

  posts.forEach((post, index) => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `
            <div class="post-details">
                <span>${post.username}</span>
                <span>${post.timestamp}</span>
            </div>
            <p>${post.text}</p>
            ${
              post.imageUrl
                ? `<img src="${post.imageUrl}" alt="Post Image">`
                : ""
            }
            <div class="post-actions">
                <button onclick="likePost(${index})">Like (${
      post.likes
    })</button>
                <button onclick="toggleComments(${index})">Comment (${
      post.comments.length
    })</button>
            </div>
            <div class="comments" id="comments-${index}" style="display:none;">
                <textarea id="comment-text-${index}" placeholder="Add a comment"></textarea>
                <button onclick="addComment(${index})">Post Comment</button>
                <div id="comment-list-${index}">
                    ${post.comments
                      .map((comment) => `<p>${comment}</p>`)
                      .join("")}
                </div>
            </div>
        `;
    feedSection.appendChild(postElement);
  });
}
