function take(){
var tl = gsap.timeline();
tl.from(".navbar",{
    opacity:0,
    // stagger:4,
    delay:1,
})
tl.from(".nav-elements",{
    y:-20,
    opacity:0,
    stagger:0.8,
    // delay:1,
    duration:1
})
}
take();
function imgchange(){
    var box2 = document.querySelector(".box2");
    var a = document.querySelector("#a");
    var b = document.querySelector("#b");
    var c = document.querySelector("#c");
    var d = document.querySelector("#d");
    var e = document.querySelector("#e");
    var one =document.querySelector("#one");
    var two =document.querySelector("#two");
    var three =document.querySelector("#three");
    var four =document.querySelector("#four");
    var five =document.querySelector("#five");
    a.addEventListener("click",function(){
        one.style.height ="fit-content";
        two.style.height="6%";
        three.style.height="6%";
        four.style.height="6%";
        five.style.height="6%";



        box2.innerHTML=`<img src="ACM 3.jpg" alt="">`


    })
    b.addEventListener("click",function(){
        two.style.height ="fit-content";
        one.style.height="6%";
        three.style.height="6%";
        four.style.height="6%";
        five.style.height="6%";

        box2.innerHTML=`<img src="ACM 4.jpg" alt="">`

    })
    c.addEventListener("click",function(){
        three.style.height ="fit-content";
        two.style.height="6%";
        one.style.height="6%";
        four.style.height="6%";
        five.style.height="6%";

        box2.innerHTML=`<img src="ACM 1.jpg" alt="">`

    })
    d.addEventListener("click",function(){
        four.style.height ="fit-content";
        two.style.height="6%";
        three.style.height="6%";
        one.style.height="6%";
        five.style.height="6%";

        box2.innerHTML=`<img src="ACM py.jpg" alt="">`

    })
    e.addEventListener("click",function(){
        five.style.height ="fit-content";
        two.style.height="6%";
        three.style.height="6%";
        four.style.height="6%";
        one.style.height="6%";

        box2.innerHTML=`<img src="ACM 2.jpg" alt="">`

    })












}
imgchange();