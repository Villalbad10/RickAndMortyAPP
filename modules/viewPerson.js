export const viewPerson = (data, cont) => {
    data.forEach(person => {
        const { name, species, status, image, location, episode } = person;
        const div = document.createElement('div');
        div.setAttribute('class', 'card mb-3 bg-dark');

        let clase;
        status == "Alive" ? clase = "verde" : clase = "gris";

        fetch(episode[0])
            .then((result) => result.json())
            .then(e => {
                div.innerHTML = `
                <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${image}" class="img-fluid imagen">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <section class="estado">
                                    <div class="${clase}"></div><label>${status} - ${species}</label>
                                </section>
                                <p><small class="text-muted">Last known location:</small><br>
                                    <label>${location.name}</label>
                                </p>
                                <p><small class="text-muted">First seen in:</small><br>
                                    <label>${e.name}</label>
                                </p>
                            </div>
                        </div>
                </div>
                `

                cont.appendChild(div);
            })


    });
}