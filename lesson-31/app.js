const listItem = document.getElementsByTagName('li')
listItem.forEach(li => {
	console.log(li)
})

const listItem1 = document.getElementsByClassName('list-item')
console.log(listItem1[0])

const clickBtn = document.getElementById('click-btn')
console.log(clickBtn)

const listItem2 = document.querySelector('#title')
console.log(listItem2)

listItem.forEach(item => {
	console.log(item)
})
