const inputTex = document.getElementById('input-box');
const button = document.querySelector('button');
const listContainer = document.querySelector('.list-container')
const alerta = document.querySelector('.is-hidden')

function addTask() {
    if (inputTex.value === '') { //Si el valor del input text esta vacio
        //console.log("No puedes agregar valores vacios")
        message();
    } else {
        let li = document.createElement('li'); //Crea un nuevo nodo(elemento html)
        li.textContent = inputTex.value //textContent coloca el texto segun el valor proporcionado
        listContainer.appendChild(li);//añade el nodo creado con los valores a nuestro container

        checkTask();
    }
}

//Crea Logica de mensaje
function message() {
    //document.getElementById('alerta').style.display = 'block';
    alerta.classList.remove('is-hidden');//classlist.remove selecciona nuestra clase y la elimina
    setTimeout(() => {
        //tiempo de espera a agregar is-hidden(elimina el bloque)
        alerta.classList.add('is-hidden')//classlist.add selecciona nuestra clase y añade
    }, 2000);

}

function checkTask() {
    listContainer.addEventListener("click", e => {

        e.target.classList.contains("checked")
            ? e.target.classList.remove('checked')
            : e.target.classList.add('checked')

    })
}