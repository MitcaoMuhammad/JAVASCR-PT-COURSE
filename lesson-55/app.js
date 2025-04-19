let a = 2
let b = a

console.log('a:', a)
console.log('b:', b)

const person = {
	name: 'Ahror',
	age: 25,
}

const newPerson = { ...person }

newPerson.name = 'Ali'
newPerson.age = 30

console.log('person:', person)
console.log('newPerson:', newPerson)

const [bir, ...qolgani] = [1, 2, 3]
console.log(qolgani)
