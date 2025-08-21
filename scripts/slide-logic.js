document.addEventListener('DOMContentLoaded', () => {
	const stages = document.querySelectorAll('.education-stage')
	const nextBtn = document.getElementById('next-btn')
	const prevBtn = document.getElementById('prev-btn')
	let currentIndex = 0;

	function showStage(index, direction) {
		if (index === currentIndex) return;

		const current = stages[currentIndex]
		const next = stages[index]

		current.style.transition = 'transform 0.5 ease, opacity 0.5s ease'
		current.style.transform = `translateX(${direction === 'next' ? '-100%' : '100%'})`
		current.style.opacity = 0;
		current.classList.remove('active')

		next.style.transition = 'none';
		next.style.transform = `translateX(${direction === 'next' ? '100%' : '-100%'})`;
		next.style.opacity = 0;
		next.classList.add('active');

		void next.offsetWidth;

		next.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
		next.style.transform = 'translateX(0%)';
		next.style.opacity = 1;

		currentIndex = index;
	}

	nextBtn.addEventListener('click', () => {
		const nextIndex = (currentIndex + 1) % stages.length;
		//console.log(`currentIndex: ${currentIndex}, nextIndex: ${nextIndex} \n`)
		showStage(nextIndex, 'next');
	})

	prevBtn.addEventListener('click', () => {
		const prevIndex = (currentIndex - 1 + stages.length) % stages.length;
		//console.log(`currentIndex: ${currentIndex}, nextIndex: ${prevIndex} \n`)
		showStage(prevIndex, 'prev');
	})
})
