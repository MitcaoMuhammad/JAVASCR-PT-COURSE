const user = {
	name: 'Ahror',
	age: 24,
	email: 'akhrorteacher@gmail.com',
	location: "Farg'ona",
	langs: ['uzbek', 'russian', 'english'],
	login: function () {
		console.log('Siz bu saytdagi sahifangiznga kirdingiz.')
	},
	logout: function () {
		console.log('Siz bu saytdagi sahifangizni tark etdingiz.')
	},
	speak: function () {},
}

user.login()
user.logout()
