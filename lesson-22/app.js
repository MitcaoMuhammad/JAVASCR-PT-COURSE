// const calcArea = function (radius) {
// 	return 3.14 * radius ** 2
// }

// const calcArea = radius => 3.14 * radius ** 2

// const area = calcArea(5)
// console.log(area)

// const greet = function (ism) {
// 	return `hello ${ism}`
// }

// const greet = (ism, familya) => `hello ${ism} ${familya}`

// const result = greet('Danil', 'Sultanov')

// console.log(greet())

// const bill = function (products, tax) {
// 	let total = 0

// 	for (let i = 0; i < products.lengt; i++) {
// 		total += products[i] + products[i] * tax
// 	}

// 	return total
// }

const bill = (products, tax) => {
	let total = 0

	for (let i = 0; i < products.lengt; i++) {
		total += products[i] + products[i] * tax
	}

	return total
}

const result = bill([10, 13, 45], 0.2)

console.log(result)
