

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var imageCon = document.querySelector("#elem-container");
var fixedImg = document.querySelector("#fixed-image");

imageCon.addEventListener("mouseenter", function () {
    fixedImg.style.display = "block";
    fixedImg.style.objectFit = "cover";
});


var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var img = e.getAttribute("data-img")
        fixedImg.style.backgroundImage = `url(${img})`
    })
})


imageCon.addEventListener("mouseleave", function () {
    fixedImg.style.display = "none";
});

function swiperAnimation(){
    
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    
  });
}
swiperAnimation()



// var icon = document.getElementById("#icon")
// mouseAnime.addEventListener("mousemove",function(dets){
//     icon.style.left = dets.x +"px"
//     icon.style.top = dets.y + "px"

// })
// var pointer = document.getElementById("icon")
// mouseAnime.addEventListener("mousemove",function(dets){
    
//     pointer.style.top =( dets.y  )+ "px" 
//     pointer.style.left =( dets.x) + "px"
   


// })

var full = document.querySelector("#full-scr")
var menu = document.querySelector("#menu")
var half = document.querySelector("#half-scr")
var flag = 0


var navImg = document.querySelector("#navimg")
menu.addEventListener("click" ,function(){
    if(flag === 0){
        full.style.top = 0
        
        navImg.style.opacity= 0
        flag = 1
        console.log("Menu clicked");
        console.log("Flag value:", flag);
    }else{
        full.style.top = "-110%"
        navImg.style.opacity= 1
       
        flag=0
        console.log("Menu clicked");
        console.log("Flag value:", flag);
    }
   
}) 

var load =document.querySelector("#loader")

setTimeout(function(){
    load.style.top="-100%"
},3500)
