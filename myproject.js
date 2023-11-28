
let listContainer= document.getElementById("list-container")
let count=0
function deleteList(listId) {
    let a = document.getElementById(listId)
    listContainer.removeChild(a)
}
function strike(labelId) {
    let b = document.getElementById(labelId)
    b.classList.toggle("strike-1")
}

function addTodo() {
    count+=1
    let listId = "list" + count
    let labelId = "label" + count
    let checkId = "check" + count
    let userInput = document.getElementById("user-input").value 
    let listElement = document.createElement("li")
    listElement.id = listId

    
    listContainer.appendChild(listElement)

    let check = document.createElement("input")
    check.id = checkId
    check.onclick = function() {
        strike(labelId)
    } 
    check.type="checkbox"
    listElement.appendChild(check)
    let labelElement = document.createElement("label")
    labelElement.id= labelId

    labelElement.textContent=userInput
    listElement.appendChild(labelElement)
    let btn = document.createElement("button")
    btn.onclick = function() {
        deleteList(listId)
    }
    btn.textContent="-"
    btn.classList.add("btn-2")
    listElement.appendChild(btn)

}