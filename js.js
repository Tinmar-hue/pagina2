const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById('menu')

hamburguer.addEventListener("click",function(){
  menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})

var dou = document.querySelectorAll("n-expert");

dou.addEventListener("click",function(){
  dou.style.color = "red";
})
