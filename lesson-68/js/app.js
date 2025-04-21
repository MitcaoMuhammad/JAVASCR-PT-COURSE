const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')

changeLocation.city.focus()

function loader(state) {
	if (state) {
		overlay.classList.remove('d-none')
	} else {
		overlay.classList.add('d-none')
	}
}

const updateUI = weather => {
	details.innerHTML = `
		<h5 class="my-3">${weather.name}, ${weather.sys.country}</h5>
		<div class="my-3">${weather.weather[0].main}</div>
		<div class="display-4 my-4">
			<span>${Math.round(weather.main.temp)}</span>
			<span>&deg;C</span>
		</div>
	`
	if (card.classList.contains('d-none')) {
		card.classList.remove('d-none')
	}

	weatherIcon.src = `https://openweathermap.org/img/wn/${weather.weather[0].main.icon}`
}

const getWeather = async city => {
	const data = await getData(city)

	return data
}

changeLocation.addEventListener('submit', e => {
	e.preventDefault()
	const citeName = changeLocation.city.value.trim()
	changeLocation.reset()
	getWeather(citeName).then(data => {
		updateUI(data)
	})
})
