const inputTex = document.getElementById('input-box');
const button = document.querySelector('button');
const listContainer = document.querySelector('.list-container')

function addTask() {
    if (inputTex.value === '') { //Si el valor del input text esta vacio
        console.log("No puedes agregar valores vacios")
    } else {
        let li = document.createElement('li'); //Crea un nuevo nodo(elemento html)
        li.textContent = inputTex.value //textContent coloca el texto segun el valor proporcionado
        listContainer.appendChild(li);//añade el nodo creado con los valores a nuestro container
    }
}