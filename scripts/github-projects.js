const username = 'lcolias'
const projectGrid = document.getElementById('project-grid')

fetch(`https://api.github.com/users/${username}/repos?type=owner&sort=updated`)
	.then(response => response.json())
	.then(repos => {
		repos.forEach(repo => {
			if (repo.fork) return;


			const projectItem = document.createElement('li')
			projectItem.classList.add('project-item')

			projectItem.innerHTML = `
				<h3><a href="${repo.html_url}" target="_blank"> ${repo.name}</a></h3>
				<p>${repo.description || 'No description provided.'}</p>
				<p>⭐ ${repo.stargazers_count} | 🛠 ${repo.language || 'Unknown'}</p>
			`;

			projectGrid.appendChild(projectItem)
		});
	})
	.catch(error => {
		console.error('Error fetching Github repositiries:', error)
		projectGrid.innerHTML = '<p>Failed to load projects</p>'
	})
