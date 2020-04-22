const paintRows = () => {
    const liList = document.querySelectorAll('li:nth-child(even)');
    for (let i = 0; i < liList.length; i++) {
        //if (i % 2 !== 0) {
        liList[i].style.background = '#eee';
        //}
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.jumbo__title');
    const description = document.querySelector('.jumbo__description');

    title.textContent = 'Cursos';
    description.textContent = 'Listado de Cursos';


    paintRows();

    const form = document.getElementById('course-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        //<li class="list-group-item">Javascript</li>
        const ul = document.querySelector('.col.list-group');
        ul.innerHTML += `<li class="list-group-item">${title}</li>`;

        paintRows();
    })

    const buttonSubmit = document.getElementById('create-course');
    buttonSubmit.addEventListener('mouseenter', () => {
        buttonSubmit.className = 'btn btn-danger';
    })
    buttonSubmit.addEventListener('mouseleave', () => {
        buttonSubmit.className = 'btn btn-primary';
    })

})

// **Obteniendo elementos**
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


// **Atributos**

// 1. innerHTML este es para elementos
// 2. textContent este es para nodos




// **Parte 4: Los eventos**
// Se ponen de dos maneras: 
// 1 mediante los atributos de las etiquetas(click, etc)
// 2 uso de addEventListener

// stopPropagation para detener la propagacion de eventos
// falto el eventBubling
// DOMContentLoaded
// setTimeOut recibe parametros en la funcion anonima se ponen despues del tiempo