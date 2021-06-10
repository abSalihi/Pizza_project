
window.addEventListener('DOMContentLoaded', (event) => {
    const addToDoButton = document.getElementById('add');
    const list = document.getElementById('list');
    const inputField = document.getElementById('inputField');
    const form = document.getElementById('form');


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const paragraph = document.createElement('li');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = inputField.value;
        parsgraps
        if (inputField.value.length <= 0) {
            alert('Empty input');
        } else {
            list.appendChild(paragraph);
            inputField.value = '';
        }
        });
    });