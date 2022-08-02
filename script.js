let nav=document.querySelector(".navigation-warp");
window.onscroll=function (){
    if(document.documentElement.scrollTop >20){
        nav.classList.add("scroll-on")
    }else{
        nav.classList.remove("scroll-on")
    }
}
//nav hide
let navbar=document.querySelectorAll(".nav-link");
let navCollaps=document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
a.addEventListener("click",function(){
    navCollaps.classList.remove("show")
})
})
//counter
document.addEventListener('DOMContentLoaded',()=>{
function counter(id,start,end,duration){
    let obj=document.getElementById(id),
    current=start,
    range=end-start,
    incriment= end > start ? 1: -1,
    step=Math.abs(Math.floor(duration/range)),
    timer=setInterval(()=>{
        current += incriment;
        obj.textContent=current;
        if(current == end){
            clearInterval(timer);
        }
    },step);
}
counter('count1',0 ,1287,3000);
counter('count2',100 ,1520,2500);
counter('count3',0 ,1447,3000);
counter('count4',0 ,1587,3000);
})