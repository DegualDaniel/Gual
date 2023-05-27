const slider = ()=>{

    let hamburger = document.querySelector('.menu-icon');
    let navi = document.querySelector('.navbar')
    hamburger.addEventListener('click',()=>{ 
        navi.classList.toggle("nav-active")


               //BURGER ANIMATION 
               hamburger.classList.toggle("toggle")
    })



    window.onscroll = () => {
        navi.classList.remove("nav-active")
        hamburger.classList.remove("toggle")
    }
}
slider()