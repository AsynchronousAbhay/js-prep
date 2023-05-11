const atag = document.querySelector("a");
const line = document.querySelector("hr");


atag.addEventListener("mouseenter", function(){
    line.style.transformOrigin = "left";
    line.style.transform = "scalex(1)";
})

atag.addEventListener("mouseleave", function(){
    line.style.transformOrigin = "right";
    line.style.transform = "scalex(0)";
})

