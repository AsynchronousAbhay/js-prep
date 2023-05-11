const cursor = document.querySelector("#cursor");


document.addEventListener("mousemove", function(move){
    // console.log(move.clientY)
    // console.log(move.clientX);
    // console.log(move)
    
    var x = move.clientX
    var y = move.clientY
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});