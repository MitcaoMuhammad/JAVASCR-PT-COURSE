console.log('Hello world +!')

let email = 'mitcao.0000@gmail.com'
console.log(email)

let firstName = 'Mit'
let lastName = 'Cao'

let fullName = firstName + ' ' + lastName
console.log(fullName)

console.log(fullName[2])

console.log(fullName.length)

console.log(fullName.toLowerCase())

let result = fullName.toLowerCase()
console.log(result)

let index = fullName.indexOf()
console.log(index)

let result2 = email.lastIndexOf(o)
console.log(result2)

let result3 = email.slice(0, 1)
console.log(result3)

let result4 = email.substring(1, 10)
console.log(result4)

let result5 = email.replace('a', 'b')
console.log(result5)

let result6 = email.charAt()
console.log(result6)

let result7 = email.trim()
console.log(result7.length, email.length)

let result8 = email.split()
console.log(result8)

const title = 'Rastamojka qachon ochiladi ?! yohud Monopoliya Respublikasi !'
const author = "Lag'mon makazi"
const likes = 35000000

let result9 =
	'Bu post nomi ' +
	title +
	' ' +
	author +
	' tomonidan yozilgan. ' +
	'va bu postda ' +
	likes +
	' ta like bor'

let result10 = `Bu post nomi ${title}, ${author} tomonidan yozilgan. Va bu postda ${likes} ta like bor`

let result11 = `
     <h2>${title}</h2>
     <p>${author} tomonidan yozilgan</p>
     <span>${title}</span>
 `
console.log(result9)
console.log(result10)
console.log(result11)
