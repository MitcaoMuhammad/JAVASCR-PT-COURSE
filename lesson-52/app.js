const [olma, gilos, ...boshqaMevalar] = ['olma', 'gilos', 'uzum', 'nok']
console.log(olma, gilos, boshqaMevalar)

/* const olma = mevalar[0]
const gilos = mevalar[0]
const uzum = mevalar[0]
const nok = mevalar[0] */

const { name: ism, ...boshqaMalumotlar } = {
	name: 'Ahror',
	age: '24',
	job: 'developer',
}

console.log(ism, boshqaMalumotlar)
