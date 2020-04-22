const title = document.querySelector('.jumbo__title');
const description = document.querySelector('.jumbo__description');

title.textContent = 'Cursos';
description.textContent = 'Listado de Cursos';

const liList = document.querySelectorAll('li');
console.log(liList);
for (let i = 0; i < liList.length; i++) {
    if (i % 2 !== 0) {
        liList[i].style.background = '#eee';
    }
}



// 1. Obtener por id
// 2. Obtenet por clase
// 3. Obtenet por etiqueta: style.background para sombrear los pares

// 4. Obtener con reglas CSS
// querySelector (da el primero)
// querySelectorAll (da todos primero)

// 5. Obtener los hijos 
// element.children
// element.childElementCount
// element.firstElementChild
// element.lastElementChild

// 6. ancestros y hermanos
// element.parentElement
// element.nextElementSibling
// element.previousElementSibling

// 7. Nodos
// Los nodos no tienen hijos, son los textos
// element.childNodes
// element.children daria null
// element.childElementCount daria null

// los element cambian por node y no contiene element
// element.parentNode
// element.nextSibling
// element.previousSibling


// Atributos

// 1. innerHTML este es para elementos
// 2. textContent este es para nodos