const body = document.querySelector('body')
const container = document.querySelector('.container')
const colorText = document.querySelector('.color-text')
const values = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
]

function getGradient() {
	let color = '#'
	for (let i = 0; i < 6; i++) {
		const randomNumber = Math.trunc(Math.random() * values.length)
		color += values[randomNumber]
	}

	return color
}

function setGradient() {
	const color1 = getGradient()
	const color2 = getGradient()
	const color3 = getGradient()
	const color4 = getGradient()
	const color5 = getGradient()
	const color6 = getGradient()
	const color7 = getGradient()
	const color8 = getGradient()
	const color9 = getGradient()
	const color10 = getGradient()
	const color11 = getGradient()
	const color12 = getGradient()
	const randomDeg = Math.trunc(Math.random() * 360)
	const bgColor = `linear-gradient(
    ${randomDeg}deg,
    ${color1},
    ${color2},
    ${color3},
    ${color4},
    ${color5},
    ${color6},
    ${color7},
    ${color8},
    ${color9},
    ${color10},
    ${color11},
    ${color12}
  )`
	body.style.background = bgColor
	colorText.textContent = bgColor
}

setGradient()

container.addEventListener('click', setGradient)
