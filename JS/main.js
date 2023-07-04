//Scroll Reveal

window.sr = ScrollReveal({ reset: true})

sr.reveal('.hi_reveal_1', { rotate: {x: 0, y: 70, z: 0}, duration: 1500})
sr.reveal('.blocks', { rotate: {x: 0, y: 70, z: 0}, duration: 1500})
sr.reveal('.titles', { rotate: {x: 0, y: 70, z: 0}, duration: 2000})
sr.reveal('.anima', { rotate: {x: 0, y: 70, z: 0}, duration: 2500})
sr.reveal('.contact_effect', { rotate: {x: 0, y: 70, z: 0}, duration: 1500})
sr.reveal('.anima2', { rotate: {x: 0, y: 100, z: 70}, duration: 1500})

//Scroll Reveal

const menuFront = document.querySelector('#menu_front');
var linksMenu = menuFront.querySelectorAll('a')
const menuBack = document.querySelector('#menu_back');
const hamburguer = document.querySelector('#hamburguer');


hamburguer.addEventListener('click', function() {
  menuFront.style.animation = 'menu_back_forwards forwards 1.1s';
  menuBack.style.animation = 'menu_back_forwards forwards 0.6s';
  

  setTimeout(function() {
    document.addEventListener('click', closeMenu);
  }, 100);
});

function closeMenu(event) {
  if (!menuFront.contains(event.target)) {
    menuFront.style.animation = 'menu_back_backwards forwards 0.6s';
    menuBack.style.animation = 'menu_back_backwards forwards 1.1s';
   
    document.removeEventListener('click', closeMenu);
  }
}

var background = document.querySelector('body')
var dlbtn = document.querySelector('#logo_icon')
var header = document.querySelectorAll('#initial_header a')
var headermec = document.querySelectorAll('.mec')
var alert = document.querySelector('#alert')
var hi = document.querySelector('#hi')
var namer = document.querySelector('#name')
var slogan = document.querySelector('#slogan')
var intro = document.querySelector('#introduce')
var intro_a = document.querySelectorAll('.intro_a')
var block_icon1 = document.querySelector('#block_icon1')
var block_icon2 = document.querySelector('#block_icon2')
var block_icon3 = document.querySelector('#block_icon3')
var block_icon4 = document.querySelector('#block_icon4')
var block_icon5 = document.querySelector('#block_icon5')
var block_icon6 = document.querySelector('#block_icon6')
var block_icon7 = document.querySelector('#block_icon7')
var block_icon8 = document.querySelector('#block_icon8')
var capa_title = document.querySelector('#capa_title')
var anim_blocks = document.querySelectorAll('.anima_block')
var about_title = document.querySelector('#about_title')
var foot = document.querySelector('footer')
var foot_p = document.querySelector('#foot_p')
var up_real_btn = document.querySelector('#up_real_btn')
var up_btn = document.querySelector('#up_btn')

var isAlternate = false

function alternate(){
    if (!isAlternate){
        background.style.animation = 'lighttheme forwards 1s ease-in-out'
        dlbtn.style.color = "#da5838"
        alert.style.display = 'none'
        dlbtn.addEventListener('mouseenter', function(){
            dlbtn.style.color = "#17e2e9"
        })
        dlbtn.addEventListener('mouseleave', function(){
            dlbtn.style.color = "#da5838"
        })
        header.forEach(function(link){
            link.style.color = '#da5838'
        })
        headermec.forEach(function(link){
            link.addEventListener('mouseenter', function(){
                link.style.borderBottom = '2px solid #da5838'
            })
            link.addEventListener('mouseleave', function(){
                link.style.borderBottom = 'none'
            })
            
        })

        hi.style.color = '#da5838'
        namer.style.color = 'black'
        slogan.style.color = '#A6442B'
        intro.style.color = 'black'

        hamburguer.style.color = '#da5838'

        menuBack.style.background = '#da5838'

        linksMenu.forEach(function(links){
            links.style.borderBottom = '2px solid #da5838'
        })

        about_title.style.color = '#da5838'

        capa_title.style.color = '#da5838'

        anim_blocks.forEach(function(blocks){
            blocks.style.background = 'linear-gradient(to right, #da5838, #17e2e9, #17e2e9, #17e2e9)'
        })

        intro_a.forEach(function(links){
            links.style.color = '#da5838'
        })

        socialbtn.forEach(function(links){
            links.style.color = '#da5838'
        })

        foot.style.borderTop = '2px dashed #da5838'
        foot_p.style.color = 'black'
        up_real_btn.style.color = '#da5838'
        up_btn.style.border = '3px solid #da5838'

        isAlternate = true
    }else{
        background.style.animation = 'darktheme backwards 1s ease-in-out'
        dlbtn.addEventListener('mouseenter', function(){
            dlbtn.style.color = "#da5838"
        })
        dlbtn.addEventListener('mouseleave', function(){
            dlbtn.style.color = "#17e2e9"
        })
        header.forEach(function(link){
            link.style.color = '#17e2e9'
        })
        headermec.forEach(function(link){
            link.addEventListener('mouseenter', function(){
                link.style.borderBottom = '2px solid #17e2e9'
            })
            link.addEventListener('mouseleave', function(){
                link.style.borderBottom = 'none'
        })

        hi.style.color = '#17e2e9'
        namer.style.color = '#e6e6e6'
        slogan.style.color = '#A8AABD'
        intro.style.color = '#b4b4b4'
        foot.style.borderTop = '2px dashed #17e2e9'
        foot_p.style.color = 'white'

        hamburguer.style.color = '#17e2e9'

        menuBack.style.background = '#17e2e9'

        linksMenu.forEach(function(links){
            links.style.borderBottom = '2px solid #17e2e9'
        })

        block_icon2.style.color = '#17e2e9'
        block_icon1.style.color = '#17e2e9'
        block_icon3.style.color = '#17e2e9'
        block_icon4.style.color = '#17e2e9'
        block_icon5.style.color = '#17e2e9'
        block_icon6.style.color = '#17e2e9'
        block_icon7.style.color = '#17e2e9'
        block_icon8.style.color = '#17e2e9'
        about_title.style.color = '#17e2e9'
        capa_title.style.color = '#17e2e9'
        
        anim_blocks.forEach(function(blocks){
            blocks.style.background = 'linear-gradient(to right, #17e2e9, #da5838, #da5838,#da5838)'
        })

        intro_a.forEach(function(links){
            links.style.color = '#17e2e9'
        })

        socialbtn.forEach(function(links){
            links.style.color = '#17e2e9'
        })

        up_real_btn.style.color = '#17e2e9'
        up_btn.style.border = '3px solid #17e2e9'

        isAlternate = false
    })}}

var ShowProject1 = document.querySelector('#project_img1')
var ShowProject2 = document.querySelector('#project_img2')
var ShowProject3 = document.querySelector('#project_img3')
var ShowProject4 = document.querySelector('#project_img4')
var ShowDesc = document.querySelector('#descrip_real')
var ShowTitle = document.querySelector('#descrip_h3')
var ShowCode1 = document.querySelector('#code_btn1')
var ShowCode2 = document.querySelector('#code_btn2')
var ShowCode3 = document.querySelector('#code_btn3')
var ShowCode4 = document.querySelector('#code_btn4')
var ShowIconsDiv = document.querySelector('#project_icons')
var ShowIcon1 = document.querySelector('#proj_icon1')
var ShowIcon2 = document.querySelector('#proj_icon2')
var ShowIcon3 = document.querySelector('#proj_icon3')
var ShowBox = document.querySelector('#p_itens')

var ShowTablet = document.querySelector('#iframe_back')
var Close_iframe = document.querySelector('#close_iframe')
var tablet1 = document.querySelector('#isite1')
var tablet2 = document.querySelector('#isite2')
var tablet3 = document.querySelector('#isite3')
var tablet4 = document.querySelector('#isite4')

Close_iframe.addEventListener('click', function(){
    ShowTablet.style.animation = 'TabletLeave forwards 1.5s ease'
})

//Project1

ShowProject1.addEventListener('mouseenter', function(){
    ShowTitle.style.display = 'none'
    ShowDesc.style.display = 'block'
    ShowDesc.textContent = 'This is a digital clock that works based on information provided by the PC.'
    ShowCode1.style.display = 'flex'
    ShowCode2.style.display = 'none'
    ShowCode3.style.display = 'none' 
    ShowCode4.style.display = 'none' 

    ShowIconsDiv.style.animation = ''
})

ShowProject1.addEventListener('click', function(){
    ShowTablet.style.display = 'flex'
    tablet1.style.display = 'flex'
    ShowTablet.style.animation = 'TabletEnter forwards 1.5s ease'
    tablet2.style.display = 'none'
    tablet3.style.display = 'none'
    tablet4.style.display = 'none'

})



//Project1

//Project2

ShowProject2.addEventListener('mouseenter', function(){
    ShowTitle.style.display = 'none'
    ShowDesc.style.display = 'block'
    ShowDesc.textContent = 'This is a login page with Dark Theme and Light Theme function, + Digital Clock'
    ShowCode2.style.display = 'flex'
    ShowCode1.style.display = 'none'
    ShowCode3.style.display = 'none'
    ShowCode4.style.display = 'none'
})

ShowProject4.addEventListener('click', function(){
    ShowTablet.style.display = 'flex'
    tablet2.style.display = 'flex'
    ShowTablet.style.animation = 'TabletEnter forwards 1.5s ease'
    tablet1.style.display = 'none'
    tablet3.style.display = 'none'
    tablet4.style.display = 'none'

})

//Project2

//Project3

ShowProject3.addEventListener('mouseenter', function(){
    ShowTitle.style.display = 'none'
    ShowDesc.style.display = 'block'
    ShowDesc.textContent = 'This is a Digital Stopwatch with start, reset and pause functions.'
    ShowCode3.style.display = 'flex'
    ShowCode1.style.display = 'none'
    ShowCode4.style.display = 'none'
    ShowCode2.style.display = 'none'
})

ShowProject2.addEventListener('click', function(){
    ShowTablet.style.display = 'flex'
    tablet4.style.display = 'flex'
    ShowTablet.style.animation = 'TabletEnter forwards 1.5s ease'
    tablet2.style.display = 'none'
    tablet3.style.display = 'none'
    tablet1.style.display = 'none'
})

//Project3

//Project4

ShowProject4.addEventListener('mouseenter', function(){
    ShowTitle.style.display = 'none'
    ShowDesc.style.display = 'block'
    ShowDesc.textContent = 'This is a Web Market made in conjunction with other programmers, it explores product search functions, filters, cart, among others.'
    ShowCode4.style.display = 'flex'
    ShowCode1.style.display = 'none'
    ShowCode2.style.display = 'none'
    ShowCode3.style.display = 'none'
})

ShowProject3.addEventListener('click', function(){
    ShowTablet.style.display = 'flex'
    tablet3.style.display = 'flex'
    ShowTablet.style.animation = 'TabletEnter forwards 1.5s ease'
    tablet2.style.display = 'none'
    tablet1.style.display = 'none'
    tablet4.style.display = 'none'
})

//Project4

//Colocar um timer para após retirar o mouse do projects ele voltar ao estado inicial
//Digitar cada letra do #apresentation h2, uma por uma 

function typeText(elementId, text, delay) {
    var element = document.getElementById(elementId)
    var index = 0
  
    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index)
        index++
        setTimeout(type, delay)
      }
    }
  
    type();
  }
  
  typeText("hi", "Hi, my name is", 90);
  
var socialbtn = document.querySelectorAll('.fa-whatsapp, .fa-linkedin, .fa-github')

socialbtn.forEach(function(btn){
    btn.addEventListener("click", opensite)
})

function opensite(event) {
let  clicked_btn = event.target

    if (clicked_btn.classList.contains("fa-linkedin")){
        window.open("https://www.linkedin.com/in/gui-fonseca-827818268/", "_blank")
    } else if(clicked_btn.classList.contains("fa-github")){
        window.open("https://github.com/ByakkoLord", "_blank")
    }else if(clicked_btn.contains("fa-whatsapp")){
        window.open("", "_blank")
    }
}

var ScrollTop_btn = document.querySelector('#up_btn')

ScrollTop_btn.addEventListener("click", ScrollToTop)

function ScrollToTop(){
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    })
    
}

var anchor_apres = document.querySelector('#anc_apres')
var anchor_tech = document.querySelector('#anc_tech')
var anchor_proj = document.querySelector('#anc_proj')
var anchor_about = document.querySelector('#anc_about')
var anchor_cont = document.querySelector('#anc_cont')

function HomeFix(){
    anchor_apres.style.color = 'white'
}

window.addEventListener("scroll", function(){
    let scrollY = window.scrollY

    var scrollThresholdIni1 = 0
    var scrollThresholdFin1 = 300
    var scrollThresholdIni2 = 1101
    var scrollThresholdFin2 = 1800
    var scrollThresholdIni3 = 1801
    var scrollThresholdFin3 = 2400
    var scrollThresholdIni4 = 2401
    var scrollThresholdFin4 = 2900
    var scrollThresholdIni5 = 301
    var scrollThresholdFin5 = 1100

    if (window.matchMedia("(max-width: 768px)").matches) {
        var scrollThresholdIni1 = 0
        var scrollThresholdFin1 = 500
        var scrollThresholdIni2 = 1201
        var scrollThresholdFin2 = 1900
        var scrollThresholdIni3 = 1901
        var scrollThresholdFin3 = 3100
        var scrollThresholdIni4 = 3101
        var scrollThresholdFin4 = 4000
        var scrollThresholdIni5 = 501
        var scrollThresholdFin5 = 1200
        console.log("A media query está ativa!");
      }

    if (scrollY >= scrollThresholdIni1 && scrollY <= scrollThresholdFin1){
        anchor_apres.style.color = 'white'
    } else{
        if (isAlternate == true){
            anchor_apres.style.color = '#da5838'
        }
        else{
            anchor_apres.style.color = '#17e2e9'
        }
    }

    if (scrollY >= scrollThresholdIni2 && scrollY <= scrollThresholdFin2){
        anchor_proj.style.color = 'white'
    } else{
        if (isAlternate == true){
            anchor_proj.style.color = '#da5838'
        }
        else{
            anchor_proj.style.color = '#17e2e9'
        }
    }

    if (scrollY >= scrollThresholdIni3 && scrollY <= scrollThresholdFin3){
        anchor_about.style.color = 'white'
    } else{
        if (isAlternate == true){
            anchor_about.style.color = '#da5838'
        }
        else{
            anchor_about.style.color = '#17e2e9'
        }
    }

    if (scrollY >= scrollThresholdIni4 && scrollY <= scrollThresholdFin4){
        anchor_cont.style.color = 'white'
    } else{
        if (isAlternate == true){
            anchor_cont.style.color = '#da5838'
        }
        else{
            anchor_cont.style.color = '#17e2e9'
        }
    }

    if (scrollY >= scrollThresholdIni5 && scrollY <= scrollThresholdFin5){
        anchor_tech.style.color = 'white'
    } else{
        if (isAlternate == true){
            anchor_tech.style.color = '#da5838'
        }
        else{
            anchor_tech.style.color = '#17e2e9'
        }
    }
})

anchor_apres.addEventListener('click', ScrollToTop)

var close_number = document.querySelector('#close_number')
var box_wpp = document.querySelector('#box_wpp')
var wpp = document.querySelector('.fa-whatsapp')

wpp.addEventListener('click', function(){
    box_wpp.style.display = 'flex'
})

close_number.addEventListener('click', function(){
    box_wpp.style.display = 'none'
})

