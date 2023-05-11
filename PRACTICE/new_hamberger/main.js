const btn=document.querySelector(".button");
const cross=document.querySelector(".cross");
const media_queries=document.querySelector(".media-queries");


btn.addEventListener("click", function(){
    media_queries.style.transform = "translate(0%)";
});


cross.addEventListener("click", function(){
    media_queries.style.transform = "translatex(100%)";
});

