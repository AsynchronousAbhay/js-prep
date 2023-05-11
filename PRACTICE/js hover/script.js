const div1 = document.querySelector('#div1');
const div2  = document.querySelector('#div2');

div1.addEventListener("mouseenter", ()=>{
        div2.style.backgroundColor = 'green';
        div2.style.transform = 'scale(2)';
        div2.style.borderRadius = '50%';
});
div1.addEventListener("mouseleave", ()=>{
    div2.style.backgroundColor = 'red';
    div2.style.transform = 'scale(1)';
    div2.style.borderRadius = 'none';
});