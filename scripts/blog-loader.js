// List of all my posts in order of most to least recent.
const posts = [
	{
		title: "Building a Web Server from Scratch",
		description: "A journal and guide on how to build and host a website on personal server at home.",
		tags: ["Fullstack", "HTML/CSS", "JavaScript", "Raspberry PI", "Nginx", "Cloudflare"],
		author: "Lucas Colias",
		datePublished: "2025-09-01",
		image: "../images/raspberryServerImg.png",
		url: "https://lucascolias.com/blog/posts/post1-web-server-from-scratch.html",
	},
	{
		title: "My First Blog Post",
		description: "This is a description",
		tags: ["coding", "html"],
		author: "Lucas Colias",
		publishDate: "2025-08-30",
		image: "../images/post1.jpg",
		url: "/blog/post1.html"
	}
];

async function loadBlogPosts() {
	try {
		const container = document.getElementById('blog-container');

		posts.forEach(post => {
			const card = document.createElement('li');
			card.className = 'blog-item';

			const tags = post.tags.map(tag => `<li>${tag}</li>`).join("");

			card.innerHTML = `
				<a href="${post.url}">
					<div class="blog-item-bkgd"></div> <div class="blog-item-content">
						<h2 class="blog-title">${post.title}</h2>
						<h3 class="blog-info">By ${post.author} • ${new Date(post.publishDate).toLocaleDateString()}</h3>
						<p class="blog-description">${post.description}</p>	
						<ul class="blog-tags">
							${tags}
						</ul>
					</div>
					<img class="blog-item-img" src="${post.image}" alt="${post.title}">
				</a>
			`;

			container.appendChild(card);
		});

	} catch (err) {
		console.error("Error loading blog posts:", err);
	}

}

document.addEventListener("DOMContentLoaded", loadBlogPosts);
