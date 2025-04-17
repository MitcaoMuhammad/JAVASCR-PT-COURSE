/* function callMe() {
	alert('Hello JavaScript !')
}

setTimeout(callMe, 3000)
*/

let a = 0
const timeInterval = setInterval(() => {
	a++
	console.log(a)
}, 1000)

setTimeout(() => {
	clearInterval(timeInterval)
}, 10000)
