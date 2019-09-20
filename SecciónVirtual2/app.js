let tem = `<h1>Hola mundo</h1>`
const main = document.getElementById("main")

main.insertAdjacentHTML("afterbegin", tem)

document.getElementById('btn').addEventListener ('click', e => {
    alert('Hola mundo')
})