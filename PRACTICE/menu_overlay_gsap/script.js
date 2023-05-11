const button = document.querySelector("button");
const cross = document.querySelector(".cross");
const overlay = document.querySelector(".overlay");

button.addEventListener("click", function () {
    overlay.style.transform = "translateX(0)";
});

cross.addEventListener("click", function () {
    overlay.style.transform = "translateX(100%)";
});


button.addEventListener("click", function(){
    gsap.from(".left",{
        opacity:0,
        duration:1,
        delay:1
    })
})
