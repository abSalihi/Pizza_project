
window.addEventListener('DOMContentLoaded', (event) => {
    let addToDoButton = document.getElementById('add');
    let list = document.getElementById('list');
    let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    list.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('dblclick', function(){
        list.removeChild(paragraph);
    })
});
});