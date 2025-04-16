const movies = [
	{ name: 'Avatar 3D', year: 2008, rating: 9 },
	{ name: 'Titanik 4D', year: 1997, rating: 7 },
	{ name: 'Forsaj 9 3D', year: 2020, rating: 4 },
	{ name: 'Avengers', year: 2012, rating: 6 },
]

const mapMovies = movies.map(movie => {
	return { name: movie.name, year: movie.year, rating: movie.rating + 1 }
})

console.log(mapMovies)
console.log(movies)

// const numbers = [2, 3, 4, 5]

// const mapNubers = numbers.map(num => num ** 2)

// console.log(mapNubers)

// const newNumbers = []

// numbers.forEach(num => {
// 	newNumbers.push(num ** 2)
// })

// console.log(newNumbers)
