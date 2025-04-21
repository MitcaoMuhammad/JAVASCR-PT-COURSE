/* const greeting = () => {
	return 'Hello'
}

const sayHello = (func, name) => {
	return func() + ' ' + name
}

const result = sayHello(greeting, 'Ahror') // berilyotgan argumentlar cheksiz bo'lishi mumkin
console.log(result)

function sayHello() {
	return () => {
		return 'Hello!'
	}
}

console.log(sayHello()())

const foo = () => {
	console.log('foobar')
}

foo() // bu yerda funcksiya o'zgaruvchi nomi orqali ishga tushirilyapti;
*/

const movies = [
	{
		name: 'Spider-Man: Across The Spider-Verse',
		year: 2023,
		rate: 8.8,
		genre: ['Adventure', 'Action', 'Comedy'],
		country: ['United States'],
		isAdult: false,
	},
	{
		name: 'Titanic',
		year: 2008,
		rate: 7.5,
		genre: ['Adventure', 'Drama', 'Thriller', 'Comedy'],
		country: ['United States', 'England'],
		isAdult: true,
	},
	{
		name: 'The Godfather',
		year: 1972,
		rate: 9.2,
		genre: ['Mafia', 'Crime Film', 'Drama'],
		country: ['United States', 'Italy'],
		isAdult: true,
	},
	{
		name: 'T-34',
		year: 2018,
		rate: 5.9,
		genre: ['Adventure', 'Drama', 'War', 'Action'],
		country: ['Russia'],
		isAdult: true,
	},
	{
		name: 'Parasite',
		year: 2019,
		rate: 7.5,
		genre: ['Adventure', 'Drama', 'War', 'Action'],
		country: ['South Korea'],
		isAdult: true,
	},
	{
		name: 'Titanic',
		year: 1997,
		rate: 7.5,
		genre: ['Adventure', 'Drama', 'Thriller', 'Comedy'],
		country: ['United States', 'England'],
		isAdult: true,
	},
	{
		name: 'Paddington',
		year: 2014,
		rate: 4.5,
		genre: ['Adventure', 'Fantasy', 'Animation', 'Comedy'],
		country: ['France', 'England'],
		isAdult: false,
	},
]

// for (let i = 0; i < movies.length; i++) {
// 	console.log(`Name: ${movies[i].name}, Year: ${movies[i].year}`)
// }

// movies.forEach((item, index, arr) => {
// 	console.log(index, `Name: ${item.name}, Year: ${item.year}`)
// })

// const someMovies = movies.some(movie => {
// 	return movie.year > 2020
// })

// movies.filter(movie => {
// 	return movie.rate > 6 && movie.rate < 8
// })

// const decriseRates = movies.map(movie => {
// 	return { ...movie, rate: movie.rate - 1, name: movie.name + 'UZ' }
// })

// console.log(movies)
// console.log(decriseRates)

// const findeMovie = movies.find(movie => {
// 	return movie.name === 'Titanic'
// })
// console.log(findeMovie)

let arr1 = [10, 20, [30, 40, 50], [60, 70, 80, 90], 100]
let arr2 = [10, 20, [30, [40, 50]], [[60, 70, 80], 90], 100]
let arr3 = [10, 20, [30, [40, 50]], [[[60, 70], 80], 90], 100]

// const arr2Example = arr2.flat(2)
// console.log(arr2Example)

let employee = [
	{ id: 101, name: 'John', skills: ['HTML', 'CSS', 'JAVASCRIPT'] },
	{ id: 101, name: 'John', skills: ['C#', 'SQL'] },
	{ id: 101, name: 'John', skills: ['ANGULAR', 'REACT'] },
]

// let employee2 = employee
// 	.map(emloyer => {
// 		return emloyer.skills
// 	})
// 	.flat()

// console.log(employee2)

// let employee2 = employee.flatMap(emloyer => {
// 	return emloyer.skills
// })

// console.log(employee2)

// const sortedMovies = movies.sort((a, b) => {
// 	return a.rate - b.rate
// })

// console.log(sortedMovies)
// console.log(movies)

// const arr = [1, 2, 3, 4, 5]

// const sum = arr.reduce((acc, curVal) => {
// 	return acc + curVal
// })

// console.log(sum)

const allMoviesGenres = movies.flatMap(movie => {
	return movie.genre
})
console.log(allMoviesGenres)

const sumAllGenres = allMoviesGenres.reduce((acc, curVal) => {
	if (!acc[curVal]) {
		acc[curVal] = 1
	} else {
		acc[curVal] += 1
	}
	return acc
}, {})

console.log(sumAllGenres)
