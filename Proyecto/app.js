const paintRows = () => {
    const liList = document.querySelectorAll('li:nth-child(even)');
    for (let i = 0; i < liList.length; i++) {
        //if (i % 2 !== 0) {
        liList[i].style.background = '#eee';
        //}
    }
};
const addRow = title => {
    const ul = document.querySelector('.col.list-group');
    ul.innerHTML += `<li class="list-group-item">${title}</li>`;
};

const addCardInnerHTML = (title, description) => {
    const rowList = document.querySelector('.row.list');
    const newContent = `
        <div class="card col-sm-6 col-md-4 m-2" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`;
    rowList.innerHTML += newContent;
};
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.jumbo__title');
    const description = document.querySelector('.jumbo__description');

    title.textContent = 'Cursos';
    description.textContent = 'Listado de Cursos';

    const form = document.getElementById('course-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        addCardInnerHTML(title, description);
    });

    const buttonSubmit = document.getElementById('create-course');
    buttonSubmit.addEventListener('mouseenter', () => {
        buttonSubmit.className = 'btn btn-danger';
    });
    buttonSubmit.addEventListener('mouseleave', () => {
        buttonSubmit.className = 'btn btn-primary';
    });
});

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

// **Parte 5:**
// Creando elementos: createElement('div')
// Agregando contenido: element.textContent = 'contenido'
// Anidando elementos: parent.appendChild(elemento)
// Para eliminar un elemento se necesita el padre y el elmento. Usamos parent.removeChild(elemento)