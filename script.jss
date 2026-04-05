function likePost(btn){

let likes = btn.parentElement.nextElementSibling

let count = parseInt(likes.innerText)

count++

likes.innerText = count + " likes"

}

function addComment(btn){

let input = btn.previousElementSibling

let text = input.value

if(text==="") return

let list = btn.parentElement.nextElementSibling

let li = document.createElement("li")

li.innerText = text

list.appendChild(li)

input.value=""

}
