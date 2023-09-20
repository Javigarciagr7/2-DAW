function cambiarcolor(){
    var nuevocolor ="#"+ Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = nuevocolor;
}

var botoncambiocolor = document.getElementById("colorbtn");
botoncambiocolor.addEventListener("click",cambiarcolor);
