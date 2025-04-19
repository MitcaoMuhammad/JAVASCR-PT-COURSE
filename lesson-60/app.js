const getTodos = collback => {
	const request = new XMLHttpRequest()

	request.addEventListener('readystatechange', () => {
		if (request.readyState === 4 && request.status === 200) {
			const data = JSON.parse(request.responseText)
			collback(undefined, data)
		} else if (request.readyState === 4) {
			collback("Ma'lumotni olishning iloji bo'lmadi !!!", undefined)
		}
	})

	request.open('GET', 'todos.json')
	request.send()
}

getTodos((err, data) => {
	console.log('Callback function işiga tushdi !!!')
	if (err) {
		console.log(err)
	} else {
		console.log(data)
	}
})
