const container1 = document.querySelector(".container1");
const menu  = document.querySelector(".menu");
const burger = document.querySelector(".burger");
const burgerOne = document.querySelector(".burgerOne");
const burgerTwo = document.querySelector(".burgerTwo");
const burgerThree = document.querySelector(".burgerThree");

// for parallax effect
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    container1.style.backgroundPositionY = offset * 0.5 + "px";
});

// for navbar scroll background effect
$(function () {
    $(document).scroll(function () {
        let $nav = $(".oneTop");
        $nav.toggleClass("oneTopShow", $(this).scrollTop() > $nav.height());
    });
});

// for sidebar menu
burger.addEventListener("click", function(){
    menu.classList.toggle("menuSide");
});

// for animation of menu button
burger.addEventListener("click", function(){
    burgerOne.classList.toggle("burgerOneTog");
    burgerTwo.classList.toggle("burgerTwoTog");
    burgerThree.classList.toggle("burgerThreeTog");
});