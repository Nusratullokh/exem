document.addEventListener("DOMContentLoaded", () => {
    const API_URL = "https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs";
    
    async function fetchPosts() {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            
            console.log(data);

            if (data && Array.isArray(data.blogs)) {
                displayPosts(data.blogs);
            } else {
                console.error("Unexpected data format:", data);
                displayError("Unexpected data format received from the server.");
            }
        } catch (error) {
            console.error("Error fetching blog posts:", error);
            displayError("Failed to fetch blog posts. Please try again later.");
        }
    }

    function displayPosts(posts) {
        const container = document.getElementById("posts-container");
        container.innerHTML = posts.map(post => `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.content.substring(0, 100)}...</p>
                <a href="${post.url}" target="_blank">Read more</a>
            </div>
        `).join('');
    }

    function displayError(message) {
        const container = document.getElementById("posts-container");
        container.innerHTML = `<p class="error">${message}</p>`;
    }

    fetchPosts();
});