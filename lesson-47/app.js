const movies = [
	{ name: 'Avatar 3D', year: 2008, rating: 9 },
	{ name: 'Titanik 4D', year: 1997, rating: 7 },
	{ name: 'Forsaj 9 3D', year: 2020, rating: 4 },
	{ name: 'Avengers', year: 2012, rating: 6 },
]

const filterMovies = movies.filter(movie => {
	return movie.name.includes('4D')
})

// console.log(filterMovies)

// const newMovies = []

// movies.forEach(() => {
// 	if (movie.year > 2010) {
// 		newMovies.push(movie)
// 	}
// })
