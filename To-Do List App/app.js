const inputTex = document.getElementById('input-box');
const button = document.querySelector('button');
const listContainer = document.querySelector('.list-container')
const alerta = document.querySelector('.is-hidden')



function addTask() {
    if (inputTex.value === '') { //Si el valor del input text esta vacio
        
        //console.log("No puedes agregar valores vacios")
        message();

    } else {

        let deleteButton = document.createElement('span'); //Crea span para eliminar tarea
        let li = document.createElement('li'); //Crea un nuevo nodo(elemento html)

        li.textContent = inputTex.value //textContent coloca el texto segun el valor proporcionado
        deleteButton.textContent = '❌';//añadimos con texContent una x(donde la x se coloca en el span, deleteButton)

        deleteButton.classList.add('delete-task')//Añade clase a nuesto deleteButton

        listContainer.appendChild(li);//añade el nodo creado con los valores a nuestro container
        li.appendChild(deleteButton);//añadimos el nodo creado a nuestro li

        inputTex.value = ''//Refresca nuestro buscador y elimina el texto ingresado en el input

        checkTask();//funcion de check inchek
        deleteTask()//Funcion que contiene logica para eliminar tarea
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

//Crea Logica para seleccionar y deseleccionar tarea
function checkTask() {
    //Escuchamos el evento click de listContainer donde se encuentra nuestro li
    listContainer.addEventListener("click", e => {
        //Accedemos a e.target(etiqueta li) para comprobar si existe la clase checked en li
        e.target.classList.contains("checked")
            ? e.target.classList.remove('checked') //si existe la elimina
            : e.target.classList.add('checked') //Si no existe la añade

    })

    //classList recibe varios parametos, donde podemos hacer uso de el
}

function deleteTask() {
    listContainer.addEventListener('click', e => {
        //Comprueba si en nuestro elemento padre existe delete-task
        if (e.target.classList.contains('delete-task')) {
            e.target.parentElement.remove(); //si existe elimina el elemento padre en el que existe
        }
    })
}

//Funcion Main
function main() {
    //comprobamos si se hizo enter sobre nuestro input al ingresar un texto escuchando el evento keydown
    inputTex.addEventListener('keydown', e => {
        if (e.key === "Enter") {
            addTask(); //si se hizo enter, añade la clase
        }
    })
}

main();//Ejecuta todo el programa