const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
	header.innerHTML =
		'<img src="https://pbs.twimg.com/media/FRzVITxXsAE6dDr?format=jpg&name=4096x4096" alt="EU"/>'
	title.innerHTML = 'Lorem ipsum dolor sit amet.'
	excerpt.innerHTML =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
	profile_img.innerHTML =
		'<img src="https://pbs.twimg.com/media/FQyqi7WVgAAkVR4?format=jpg&name=large" alt="women"/>'
	name.innerHTML = 'Park Jiwon'
	date.innerHTML = 'September 21, 2020'

	animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
	animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}
