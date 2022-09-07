
const menuHamburger = document.querySelector(".menu_ham")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=> (navLinks.classList.toggle('mobile-menu')))
const Headertitle = document.querySelector(".header_title")

menuHamburger.addEventListener('click',()=> (Headertitle.classList.toggle('little_vanish')))






const hr_tags = document.getElementsByClassName("seperate_pages")
const title_Pages = document.getElementsByClassName("title_pages")
const title_Header = document.querySelector(".logo")
const logo_ln = document.querySelector(".ph_ln")
const logo_insta = document.querySelector(".ph_insta")

window.addEventListener('scroll' , () => {
    const {scrollTop, clientHeight} = document.documentElement;
    
        const topPh_InstaToTopViewport = logo_insta.getBoundingClientRect().top;

        if(scrollTop > (scrollTop + topPh_InstaToTopViewport).toFixed() - clientHeight * 1){
            logo_insta.classList.add("fade_In_Left")
            logo_ln.classList.add("fade_In_Right")      
        }
})

window.addEventListener('scroll' , () => {
    const {scrollTop, clientHeight} = document.documentElement;
    for (var i = 0; i < hr_tags.length; i++) {
        const hr = hr_tags[i]; // i-ème élément du tableau d'éléments
        const title = title_Pages[i]

        const topHRToTopViewport = hr.getBoundingClientRect().top;
        const topTITLEPToTopViewport = title.getBoundingClientRect().top;

        if(scrollTop > (scrollTop + topHRToTopViewport).toFixed() - clientHeight * 1){
            hr.classList.add("active_hr")      
        }

        if(scrollTop > (scrollTop + topTITLEPToTopViewport).toFixed() - clientHeight * 1){
            title.classList.add("active_title_Pages")      
        }

        if(scrollTop > (scrollTop + topHRToTopViewport).toFixed() - clientHeight* 0.2){
            title_Header.classList.add("supp_logo")
        }
        
    }  
})