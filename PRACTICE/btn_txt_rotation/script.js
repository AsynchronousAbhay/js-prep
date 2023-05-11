const btn_wrapper = document.querySelector("#btn_wrapper");
const btn_innertxt_1 = document.querySelector("#btn_inner_txt_1");
const btn_innertxt_2 = document.querySelector("#btn_inner_txt_2");


btn_wrapper.addEventListener("mouseenter", function(){
    btn_innertxt_2.style.transformOrigin = "top";
    btn_innertxt_2.style.transform = "scaley(0)"
    setTimeout(function(){
        btn_innertxt_1.style.transformOrigin = "bottom";
        btn_innertxt_1.style.transform = "scaley(1)"
    },300)
})

btn_wrapper.addEventListener("mouseleave", function(){
    btn_innertxt_1.style.transformOrigin = "bottom";
    btn_innertxt_1.style.transform = "scaley(0)"
    setTimeout(function(){
        btn_innertxt_2.style.transformOrigin = "top";
        btn_innertxt_2.style.transform = "scaley(1)"
    },300)
})
