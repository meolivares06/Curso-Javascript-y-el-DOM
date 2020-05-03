const App = () => {
    const btnCreate = document.getElementsByClassName('btn-add-movie')[0];
    const createForm = document.querySelector('.row.d-none');

    function init() {
        setEventsListeners();
    }

    function setEventsListeners() {
        btnCreate.addEventListener('click', showCreateMovieForm);
        createForm.addEventListener('click', hideCreateMovieForm);
    }

    function showCreateMovieForm() {
        createForm.className = 'row';
    }

    function hideCreateMovieForm() {
        createForm.className = 'row d-none';
    }

    function onAddMovie(data) {

    }
    functin createCard() {
        const col = document.createElement('div');
        col.className = 'col-md-4';

        const card = document.createElement('div');
        card.className = 'card mb-4 shadow-sm';

        const image = document.createElement('img');
        image.className = 'card-img-top';
        image.src = imagePath;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const hCinco = document.createElement('h5');
        hCinco.className = 'card-title';
        hCinco.textContent = title;

        const hSeis = document.createElement('h6');
        hSeis.className = 'card-subtitle  mb-2 text-muted';
        hSeis.textContent = `${duration} ${categody} ${duration}`;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = description;
        /*`
        <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img
                            class=" card-img-top"
                            width="100%"
                            height="225"
                            src=${imagePath}
                            preserveaspectratio="xMidYMid slice"
                            focusable="false"
                            role="img"
                            aria-label="Placeholder: Thumbnail"
                        />

                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                                ${year} ${category} ${duration}
                            </h6>
                            <p class="card-text">
                                ${description}
                            </p>
                            <div
                                class="d-flex justify-content-between align-items-center"
                            >
                                <div class="btn-group">
                                    <button
                                        type="button"
                                        class="btn btn-sm btn-outline-secondary"
                                    >
                                        View
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-sm btn-outline-secondary"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-sm btn-outline-secondary"
                                    >
                                        Delete
                                    </button>
                                </div>
                                <button class="btn btn-sm text-muted small">
                                    9 views +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        `*/
    }

    init();
};
document.addEventListener(
    'DOMContentLoaded',
    () => {
        App();
    },
    App
);