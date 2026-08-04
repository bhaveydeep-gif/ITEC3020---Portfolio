document.addEventListener("DOMContentLoaded", function () {

  // ---- Read the "id" value out of the URL ----
  const params = new URLSearchParams(window.location.search);
  const postId = Number(params.get("id"));

  fetch("data/posts.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {

      // ---- Loop through every post, remember the one that matches ----
      let post = null;
      posts.forEach(function (p) {
        if (p.id === postId) {
          post = p;
        }
      });

      if (post === null) {
        document.getElementById("post-title").textContent = "Post not found";
        return;
      }

      // ---- Fill in the header fields ----
      document.getElementById("post-category").textContent = post.category;
      document.getElementById("post-readtime").textContent = post.readTime;
      document.getElementById("post-title").textContent = post.title;

      // ---- Reformat the date ----
      const postDate = new Date(post.date);
      document.getElementById("post-date").textContent = postDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });

      // ---- Fill in the full article body ----
      document.getElementById("post-article").innerHTML = post.content;
    })
    .catch(function (error) {
      console.error("Error loading post:", error);
    });
});