import { getData } from "../helpers/getData.js";
import { viewPerson } from "../modules/viewPerson.js";


const cont = document.querySelector('.cont');

document.addEventListener('DOMContentLoaded', async () => {
    const data = await getData();
    console.log(data);

    viewPerson(data, cont)
})