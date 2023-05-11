const slide_1 = document.querySelector("#wiskey_4");
const slide_2 = document.querySelector("#wiskey_5");
const slide_3 = document.querySelector("#wiskey_6");
const slide_4 = document.querySelector("#wiskey_7");
const slide_5 = document.querySelector("#wiskey_8");
const slide_6 = document.querySelector("#wiskey_9");
const slide_7 = document.querySelector("#wiskey_10");
const slide_8 = document.querySelector("#wiskey_11");
const slide_9 = document.querySelector("#wiskey_12");
const slide_10 = document.querySelector("#wiskey_13");
const slide_11 = document.querySelector("#wiskey_3");
const slide_12 = document.querySelector("#wiskey_2");
const slide_13 = document.querySelector("#wiskey_1");
const scrolltoright = document.querySelector(".scrolltoright");
const scrolltoleft = document.querySelector(".scrolltoleft");

var scroll = 13;

const scrollRight = () => {
    if(scroll===13){
        slide_1.scrollIntoView({behavior : "smooth"});
        scroll = 12;
    }
    else if(scroll===12){
        slide_2.scrollIntoView({behavior : "smooth"});
        scroll = 11;
    }
    else if(scroll===11){
        slide_3.scrollIntoView({behavior : "smooth"});
        scroll = 10;
    }
    else if(scroll===10){
        slide_4.scrollIntoView({behavior : "smooth"});
        scroll = 9;
    }
    else if(scroll===9){
        slide_5.scrollIntoView({behavior : "smooth"});
        scroll = 8;
    }
    else if(scroll===8){
        slide_6.scrollIntoView({behavior : "smooth"});
        scroll = 7;
    }
    else if(scroll===7){
        slide_7.scrollIntoView({behavior : "smooth"});
        scroll = 6;
    }
    else if(scroll===6){
        slide_8.scrollIntoView({behavior : "smooth"});
        scroll = 5;
    }
    else if(scroll===5){
        slide_9.scrollIntoView({behavior : "smooth"});
        scroll = 4;
    }
    else if(scroll===4){
        slide_10.scrollIntoView({behavior : "smooth"});
        scroll = 3;
    }
    else{
        scroll = 13;
    }

};

scrolltoright.addEventListener("click", scrollRight);

var num = 13;
const scrollLeft = () => {
    if(num===13){
        slide_7.scrollIntoView({behavior : "smooth"});
        num = 12;
    }
    else if(num===12){
        slide_6.scrollIntoView({behavior : "smooth"});
        num = 11;
    }
    else if(num===11){
        slide_5.scrollIntoView({behavior : "smooth"});
        num = 10;
    }
    else if(num===10){
        slide_4.scrollIntoView({behavior : "smooth"});
        num = 9;
    }
    else if(num===9){
        slide_3.scrollIntoView({behavior : "smooth"});
        num = 8;
    }
    else if(num===8){
        slide_2.scrollIntoView({behavior : "smooth"});
        num = 7;
    }
    else if(num===7){
        slide_1.scrollIntoView({behavior : "smooth"});
        num = 6;
    }
    else if(num===6){
        slide_11.scrollIntoView({behavior : "smooth"});
        num = 5;
    }
    else if(num===5){
        slide_12.scrollIntoView({behavior : "smooth"});
        num = 4;
    }
    else if(num===4){
        slide_13.scrollIntoView({behavior : "smooth"});
        num = 3;
    }
    else{
        num = 13;
    }

};

scrolltoleft.addEventListener("click", scrollLeft);