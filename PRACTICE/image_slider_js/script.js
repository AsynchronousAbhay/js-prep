const slide_end = document.querySelector(".slide_3");
const scrollElementRight = document.querySelector(".scroll_element_right");

const scrollRight = () => {
    slide_end.scrollIntoView({ behavior: "smooth"});
};

scrollElementRight.addEventListener("click", scrollRight)


const slide_start = document.querySelector(".slide_1");
const scrollElementleft = document.querySelector(".scroll_element_left");

const scrollLeft = () => {
    slide_start.scrollIntoView({ behavior: "smooth"});
};

scrollElementleft.addEventListener("click", scrollLeft)

