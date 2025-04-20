/* const getData = resourcs => {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest()
		
		request.addEventListener('readystatechange', () => {
			if (request.readyState === 4 && request.status === 200) {
				const data = JSON.parse(request.responseText)
				resolve(data)
				} else if (request.readyState === 4) {
					reject('Error')
					}
					})
					
					request.open('GET', resourcs)
					request.send()
					})
					}
					
					getData(APİ)
					.then(data => {
		console.log(data)
	})
	.catch(err => {
		console.log(err)
		})
		*/
// fetch
/*fetch(APİ)
		.then(data => {
			return data.json
			})
			.then(dataJson => {
				console.log(dataJson)
				})
				.catch(err => {
					console.log(err)
					})
					*/

const APİ = 'https://restcountries.com/v3.1/all'

const getData = async resourcs => {
	const request = await fetch(resourcs)

	if (request.status != 200) {
		throw new Error('Error')
	}

	const data = await request.json()
	return data
}

getData(APİ)
	.then(data => {
		console.log(data)
	})
	.catch(err => {
		console.log(err)
	})
