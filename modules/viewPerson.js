export const viewPerson = (data, cont) => {
    data.forEach(person => {
        const { name, species, status, image } = person;
        const div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.setAttribute('style', 'width: 18rem;');
        div.innerHTML = `
        <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${species}</p>
                <p class="card-text">${status}</p>
            </div>
        `

        cont.appendChild(div);
    });
}