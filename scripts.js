// Interactivity demo 2


// ZOOM IN AND OUT OF THE MOON
var trigger = document.querySelector('.trigger')
var body = document.querySelector('body')

trigger.addEventListener('click', zoom)

function zoom() {
	console.log('it works')

	if (body.id != 'zoom') {
		body.id = 'zoom'
	} 
	else {
		body.id = ''
	}
}


// PARTIAL ECLIPSE ON HOVER
var earth = document.querySelector('.earth')

earth.addEventListener('mouseenter', showShadow)
earth.addEventListener('mouseleave', hideShadow)

function showShadow() {
	earth.classList.add('eclipse')
}

function hideShadow() {
	earth.classList.remove('eclipse')
}