import AOS  from "aos";
import "aos/dist/aos.css"


AOS.init({
    duration: 1000,
    offset: 100,
});

// bmi calculator

document.querySelector("#show-calc").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});


document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});


