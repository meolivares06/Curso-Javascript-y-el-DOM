(function() {
    const title = document.getElementById('title');
    title.innerHTML = 'Cursos';

    const description = document.getElementById('description');
    description.innerHTML = 'Listado de cursos';

    const liList = document.querySelectorAll('li:nth-child(odd)');
    for (element of liList) {
        element.style.backgroundColor = '#f2f2f2';
    }

    const firstCourse = document.querySelector('div.row > ul.col > li');
}());