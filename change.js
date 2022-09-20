var bigpic=document.querySelector("#big");
var smallpics=document.querySelectorAll(".small");

for(var i=0; i<smallpics.length;i++){
    smallpics[i].addEventListener("click",chenaepic)
}

function chenaepic(){
    var smallpicAttribure=this.getAttribute("src");
    bigpic.setAttribute("src",smallpicAttribure);
}