const addBtn = document.querySelector('.add')
const removeBtn = document.querySelector('.delete-all')
const notePanel = document.querySelector('.note-panel')
const deleteNoteBtn = document.getElementsByClassName('delete-note')
const noteArea = document.querySelector('.note-area')

const selectNote = document.querySelector('#category')
const textNote = document.querySelector('#text')
const saveNote = document.querySelector('.save')
const cancelNote = document.querySelector('.cancel')
const errorNote = document.querySelector('.error')

let noteId = 1;

const showNoteOption = () => {
    if (notePanel.style.display === 'flex') {
        notePanel.style.display = 'none'
        selectNote.selectedIndex = 0;
        textNote.value = '';
    } else {
        notePanel.style.display = 'flex'
    }  
}

const addNewNote = () => {
    if (selectNote.value == 0 || textNote.value === '') {
        errorNote.style.visibility = 'visible';
    } else {
        errorNote.style.visibility = 'hidden';
        let choice = selectNote.options[selectNote.selectedIndex].text;

        let div = document.createElement('div')
        let div2 = document.createElement('div')
        let h3 = document.createElement('h3')
        let button = document.createElement('button')
        let div3 = document.createElement('div')

        div.classList.add('note')
        if (choice === 'Zakupy') {
            div.style.backgroundColor = 'rgb(255, 243, 0)'
        } else if(choice === 'Praca') {
            div.style.backgroundColor = 'rgb(0, 162, 255)'
        } else {
            div.style.backgroundColor = 'rgb(255, 0, 34)' 
        }
        div.setAttribute('id', noteId)

        div2.classList.add('note-header')
        h3.classList.add('note-title')
        button.classList.add('delete-note')
        div3.classList.add('note-body')

        h3.textContent = `${choice} #${noteId}`
        button.innerHTML = '<i class="fas fa-times icon"></i>'
        button.setAttribute('onclick', `deleteNote(${noteId})`)
        div3.textContent = textNote.value

        div2.append(h3, button)
        div.append(div2, div3)
        noteArea.append(div)

        noteId++

        notePanel.style.display = 'none'
        selectNote.selectedIndex = 0;
        textNote.value = '';
    }
}

const deleteNote = (e) => {
    const noteToDelete = document.getElementById(e);
    noteArea.removeChild(noteToDelete)
}

const deleteAllNotes = () => {
    noteArea.innerHTML = '';
    noteId = 1;
}

addBtn.addEventListener('click', showNoteOption)
saveNote.addEventListener('click', addNewNote)
cancelNote.addEventListener('click', showNoteOption)
removeBtn.addEventListener('click', deleteAllNotes)