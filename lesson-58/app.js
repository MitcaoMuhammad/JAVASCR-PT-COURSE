const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
	if (request.readyState === 4 && request.status === 200) {
		console.log(request.responseText)
	} else if (request.readyState === 4) {
		console.log("Ma'lumotni olishning iloji bo'lmadi !!!")
	}
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
request.send()
