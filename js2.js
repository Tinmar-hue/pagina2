const img = document.getElementById("img");
const img2 = document.getElementById("img2");
const img3= document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const color = document.getElementsByTagName("BODY")[0];


img.addEventListener("click",function(){
  img.classList.toggle("agrandar");
})

img2.addEventListener("click",function(){
  img2.classList.toggle("agrandar");
})

img3.addEventListener("click",function(){
  img3.classList.toggle("agrandar");
})

img4.addEventListener("click",function(){
  img4.classList.toggle("agrandar");
})

img5.addEventListener("click",function(){
  img5.classList.toggle("agrandar");
})

img6.addEventListener("click",function(){
  img6.classList.toggle("agrandar");
})
