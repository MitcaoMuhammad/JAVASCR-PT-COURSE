const getTodos = (resurse, collback) => {
	const request = new XMLHttpRequest()

	request.addEventListener('readystatechange', () => {
		if (request.readyState === 4 && request.status === 200) {
			const data = JSON.parse(request.responseText)
			collback(undefined, data)
		} else if (request.readyState === 4) {
			collback("Ma'lumotni olishning iloji bo'lmadi !!!", undefined)
		}
	})

	request.open('GET', resurse)
	request.send()
}

getTodos('todos/ahror.json', (err, data) => {
	console.log(data)
	getTodos('todos/sardor.json', (err, data) => {
		console.log(data)
		getTodos('todos/doniyor.json', (err, data) => {
			console.log(data)
		})
	})
})
