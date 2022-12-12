let menubar = document.getElementById('menubar')
let closebtn = document.getElementById('closebtn')
let popup = document.getElementById('menupopup')

menubar.addEventListener('click', ()=>{
    popup.classList.add('openpopup')
})

closebtn.addEventListener('click', ()=>{
    popup.classList.remove('openpopup')
})