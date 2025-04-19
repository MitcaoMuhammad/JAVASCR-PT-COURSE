const getTodos = collback => {
	const request = new XMLHttpRequest()

	request.addEventListener('readystatechange', () => {
		if (request.readyState === 4 && request.status === 200) {
			collback(undefined, request.responseText)
		} else if (request.readyState === 4) {
			collback("Ma'lumotni olishning iloji bo'lmadi !!!", undefined)
		}
	})

	request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
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
