

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