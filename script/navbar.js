function showMenu(){
    const navbarMobile=document.querySelector('.navbar-mobile');
    const hamburger=document.querySelector('.hamburger');
    console.log(navbarMobile);
    if(navbarMobile.classList.value==='navbar-mobile')
    {
        hamburger.innerHTML='<i class="fa fa-close"></i>';
        navbarMobile.classList.add("navbar-active");
    }
    else{
        hamburger.innerHTML='<i class="fa fa-bars"></i>';
        navbarMobile.classList.remove("navbar-active");
    }
}