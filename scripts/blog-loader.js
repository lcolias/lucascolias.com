// List of all my posts in order of most to least recent.
const posts = [
	{
		title: "Building a Web Server from Scratch",
		description: "A journal and guide on how to build and host a website on personal server at home.",
		tags: ["Fullstack", "HTML/CSS", "JavaScript", "Raspberry PI", "Nginx", "Cloudflare"],
		author: "Lucas Colias",
		datePublished: "9/10/2025",
		image: "../images/raspberryServerImg.png",
		url: "https://lucascolias.com/blog/posts/post1-web-server-from-scratch",
	},
	{
		title: "Vibes to Strides Post 0",
		description: "What this blog is all about.",
		tags: ["Personal"],
		author: "Lucas Colias",
		datePublished: "9/1/2025",
		image: "../images/post0-min.png",
		url: "https://lucascolias.com/blog/posts/post0-vibes-to-strides",
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
						<h3 class="blog-info">By ${post.author} • ${post.datePublished}</h3>
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
