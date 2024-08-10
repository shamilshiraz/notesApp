let notesApp=document.getElementsByClassName("notesApp");
let addBtn=document.getElementById("addBtn");
let notesContainer=document.getElementById("notescontainer");
let notes=document.querySelectorAll(".inputBox")


function showNotes(){
    notesContainer.innerHTML=localStorage.getItem('notes')
}
showNotes()

function updateStorage(){
    localStorage.setItem('notes',notesContainer.innerHTML)
}
updateStorage()

addBtn.addEventListener('click',()=>{
    var inputBox=document.createElement('p');
    var img=document.createElement("img")
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true") 
    img.src='delete.jpg'    
    notesContainer.appendChild(inputBox).appendChild(img)
    
})
notesContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".inputBox")
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage()
            }
        })
    }
})
