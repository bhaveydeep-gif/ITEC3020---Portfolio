 document.addEventListener("DOMContentLoaded", function () {
  const blogList = document.getElementById("blog-list");

  //Fetching the JSON file
  fetch("data/posts.json")
    .then(function (response) {
      return response.json();       //converts the json to array
    })
    .then(function (posts) {        //Receive the posts

      // ---- Sort newest to oldest ----
      posts.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);     //comparing post a with post b
      });

      posts.forEach(function (post, index) {            //Looping through every post

        // The whole card is a clickable link to that post's page
        const card = document.createElement("a");
        card.classList.add("post-card");
        card.href = "post.html?id=" + post.id;

       

        // ---- Body wrapper ----
        const body = document.createElement("div");
        body.classList.add("post-body");

        // ---- Meta row: category + read time ----
        const meta = document.createElement("div");
        meta.classList.add("post-meta");

        // ---- Category badge ------
        const category = document.createElement("span");
        category.classList.add("post-category");
        category.textContent = post.category;
        meta.appendChild(category);

        // ---- Reading Time badge ------
        const readTime = document.createElement("span");
        readTime.classList.add("post-readtime");
        readTime.textContent = post.readTime;
        meta.appendChild(readTime);

        // ---- Only the newest post (index 0) gets the "Latest Post" badge ----
        if (index === 0) {
          const badge = document.createElement("span");
          badge.classList.add("latest-badge");
          badge.textContent = "Latest Post";
          meta.appendChild(badge);
        }

        body.appendChild(meta);

        // ---- Title ----
        const title = document.createElement("h3");
        title.classList.add("post-title");
        title.textContent = post.title;
        body.appendChild(title);

        // ---- Date, reformatted to be reader-friendly ----
        const postDate = new Date(post.date);       //parses the string into data object
        const date = document.createElement("p");
        date.classList.add("post-date");
        date.textContent = postDate.toLocaleDateString("en-US", {       //built-in calender method that formats data
          year: "numeric",
          month: "long",
          day: "numeric"
        });
        body.appendChild(date);

        card.appendChild(body);
        blogList.appendChild(card);
      });
    })

    //Error Handling
    .catch(function (error) {
      console.error("Error loading posts:", error);
    });
});