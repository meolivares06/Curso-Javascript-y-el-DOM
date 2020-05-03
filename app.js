(function() {
    const title = document.getElementById('title');
    title.innerHTML = 'Cursos';

    const description = document.getElementById('description');
    description.innerHTML = 'Listado de cursos';

    const liList = document.getElementsByTagName('li');
    for (let i = 0; i < liList.length; i++) {
        let liItem = liList[i];
        if (i % 2 === 0) {
            liItem.style.backgroundColor = '#f2f2f2';
        }
    }
}());