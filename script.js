const notesContainer = document.querySelector('.notes_container');
const btn = document.querySelector('.create_note');

let notes = document.querySelectorAll('.input-box');

function show(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

show();
function savedata(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}
btn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute("contenteditable", "true");
    img.src= 'Delete.png';
    notesContainer.appendChild(inputBox).appendChild(img);
    savedata();     
})

notesContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG'){
        e.target.parentNode.remove();
        savedata();
    }else if(e.target.tagName === 'p'){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function(){
                savedata();
            }
        })
    }
})

show();
// document.addEventListener('keydown', event => {
//     if (event.key === 'Enter') {
//     navigator.clipboard.writeText('insertLineBreak');
//     event.preventDefault();
// })
