import "./css/main.css"
document.querySelector("#open-menu").addEventListener("click",function(){
    document.querySelector(".menu").classList.add("active")
})
document.querySelector("#close-menu").addEventListener("click",function(){
    document.querySelector(".menu").classList.remove("active")
})