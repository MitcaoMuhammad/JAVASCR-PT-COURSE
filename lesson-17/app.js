const ism1 = prompt('Ismingizni kiriting:')
const yosh = +prompt('Yoshingizni kiriting:')

let tugilganYil = 2022 - yosh
let oy = yosh * 12
let hafta = ((yosh * 365) / 7).toFixed(0)
let kun = yosh * 365
let soat = kun * 24
let daqiqa = soat * 60
let soniya = daqiqa * 60

alert(result)

const ism2 = prompt('Ism kiriting:')

const ismlar1 = ['Ahror', 'Sardor', 'Doniyor']

if (ismlar1.includes(ism2)) {
	alert(`Ha ${ism2} bor`)
} else {
	alert(`Afsus ${ism2} yo'q`)
}

const ismlar2 = ['Ahror', 'Sardor', 'Doniyor']

for (let i = 0; i < ismlar2.length; i++) {
	let result = ismlar2[i] + 'bek'
	console.log(result)
}

let i = 0

while (i < ismlar2.length) {
	let result = ismlar2[i] + 'bek'
	console.log(result)
	i++
}

const viloyatNomi = prompt('Qaysi viloyat kerak ?')

switch (viloyatNomi) {
	case "Farg'ona":
		alert("Farg'ona viloyatida 2 mln aholi bar")
		break
	case 'Andijon':
		alert('Andijon viloyatida 1.5 mln aholi bar')
		break
	case 'Namangan':
		alert('Namangan viloyatida 1 mln aholi bar')
		break
	default:
		alert(`Hozircha ba'zada ${viloyatNomi} viloyat mavjuda emas`)
}

const belgilar = prompt('Nimadirlar yozing...😊')

let meyor = 20

if (belgilar.length > meyor) {
	alert(
		`Siz ${meyor}ta belgi kiritishingiz mumkin, lekin hozirda siz ${
			belgilar.length
		}ta belgi kiritdiz. Bu meyoridan ${belgilar.length - meyor}ta ko'p.`
	)
} else {
	alert(
		`Siz ${meyor}ta belgi kiritishingiz mumkin, va hozirda siz ${
			belgilar.length
		}ta belgi kiritdiz. Yana ${
			meyor - belgilar.length
		}ta belgi kiritishiz mumkin.`
	)
}
