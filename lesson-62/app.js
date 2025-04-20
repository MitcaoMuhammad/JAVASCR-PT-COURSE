const getTodos = resurse => {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest()

		request.addEventListener('readystatechange', () => {
			if (request.readyState === 4 && request.status === 200) {
				const data = JSON.parse(request.responseText)
				resolve(data)
			} else if (request.readyState === 4) {
				reject("Ma'lumotni olishning iloji bo'lmadi !!!")
			}
		})

		request.open('GET', resurse)
		request.send()
	})
}

getTodos('todos/ahror.json')
	.then(data => {
		console.log(data)
	})
	.catch(err => {
		console.log(err)
	})

// getTodos('todos/ahror.json', (err, data) => {
// 	console.log(data)
// 	getTodos('todos/sardor.json', (err, data) => {
// 		console.log(data)
// 		getTodos('todos/doniyor.json', (err, data) => {
// 			console.log(data)
// 		})
// 	})
// })

const internet = true

const getData = () => {
	return new Promise((resolve, reject) => {
		if (internet) {
			resolve("Ma'lumotlar muvaffaqiyatli olindi")
		} else {
			reject("Ma'lumotlar olishda xatolik")
		}
	})
}

getData()
	.then(data => {
		console.log(data)
	})
	.catch(err => {
		console.log(err)
	})
