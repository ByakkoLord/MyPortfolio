//Scroll Reveal

window.sr = ScrollReveal({ reset: true})

sr.reveal('.hi_reveal_1', { rotate: {x: 0, y: 70, z: 0}, duration: 1500})
sr.reveal('.blocks', { rotate: {x: 0, y: 70, z: 0}, duration: 1500})
sr.reveal('.titles', { rotate: {x: 0, y: 70, z: 0}, duration: 2000})
sr.reveal('.anima', { rotate: {x: 0, y: 70, z: 0}, duration: 2500})
sr.reveal('.contact_effect', { rotate: {x: 0, y: 70, z: 0}, duration: 1500})
sr.reveal('.anima2', { rotate: {x: 0, y: 100, z: 70}, duration: 1500})

//Scroll Reveal


var background = document.querySelector('body')
var dlbtn = document.querySelector('#logo_icon')
var header = document.querySelectorAll('#initial_header a')
var headermec = document.querySelectorAll('.mec')
var alert = document.querySelector('#alert')
var hi = document.querySelector ('#hi')
var namer = document.querySelector ('#name')
var slogan = document.querySelector ('#slogan')
var intro = document.querySelector ('#introduce')
var intro_a = document.querySelector ('.intro_a')
var block_icon1 = document.querySelector('#block_icon1')
var block_icon2 = document.querySelector('#block_icon2')
var block_icon3 = document.querySelector('#block_icon3')
var block_icon4 = document.querySelector('#block_icon4')
var block_icon5 = document.querySelector('#block_icon5')
var block_icon6 = document.querySelector('#block_icon6')
var capa_title = document.querySelector('#capa_title')
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
        intro_a.style.color = '#da5838'

        block_icon1.style.color = '#da5838'
        block_icon2.style.color = '#da5838'
        block_icon3.style.color = '#da5838'
        block_icon4.style.color = '#da5838'
        block_icon5.style.color = '#da5838'
        block_icon6.style.color = '#da5838'

        capa_title.style.color = '#da5838'

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
        intro_a.style.color = '#17e2e9'

        block_icon2.style.color = '#17e2e9'
        block_icon1.style.color = '#17e2e9'
        block_icon3.style.color = '#17e2e9'
        block_icon4.style.color = '#17e2e9'
        block_icon5.style.color = '#17e2e9'
        block_icon6.style.color = '#17e2e9'

        capa_title.style.color = '#17e2e9'

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

var ScrollProjects = document.querySelector('#p_itens');

function ScrollToProjects() {
    ScrollProjects.scrollTo({
        top: 350,
        behavior: "smooth"
    });
}

setInterval(ScrollToProjects, 3000)

ScrollToProjects();

//Project1

ShowProject1.addEventListener('mouseenter', function(){
    ShowTitle.style.display = 'none'
    ShowDesc.style.display = 'block'
    ShowDesc.textContent = 'This is a digital clock that works based on information provided by the PC.'
    ShowCode1.style.display = 'flex'
    ShowCode2.style.display = 'none'
    ShowCode3.style.display = 'none'

    ShowIconsDiv.style.animation = ''
})

ShowProject1.addEventListener('click', function(){
    ShowTablet.style.display = 'flex'
    ShowTablet.style.animation = 'TabletEnter forwards 1.5s ease'
})

Close_iframe.addEventListener('click', function(){
    ShowTablet.style.animation = 'TabletLeave forwards 1.5s ease'
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
  
var socialbtn = document.querySelectorAll('.fa-whatsapp, .fa-linkedin, .fa-facebook')

socialbtn.forEach(function(btn){
    btn.addEventListener("click", opensite)
})

function opensite(event) {
let  clicked_btn = event.target

    if (clicked_btn.classList.contains("fa-linkedin")){
        window.open("https://www.linkedin.com/in/gui-fonseca-827818268/", "_blank")
    } else if(clicked_btn.classList.contains("fa-facebook")){
        window.open("", "_blank")
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

    let scrollThresholdIni1 = 0
    let scrollThresholdFin1 = 300
    let scrollThresholdIni2 = 1101
    let scrollThresholdFin2 = 1800
    let scrollThresholdIni3 = 1801
    let scrollThresholdFin3 = 2400
    let scrollThresholdIni4 = 2401
    let scrollThresholdFin4 = 2900
    let scrollThresholdIni5 = 301
    let scrollThresholdFin5 = 1100

    if (scrollY >= scrollThresholdIni1 && scrollY <= scrollThresholdFin1){
        anchor_apres.style.color = 'white'
    } else{
        anchor_apres.style.color = ''
    }

    if (scrollY >= scrollThresholdIni2 && scrollY <= scrollThresholdFin2){
        anchor_proj.style.color = 'white'
    } else{
        anchor_proj.style.color = ''
    }

    if (scrollY >= scrollThresholdIni3 && scrollY <= scrollThresholdFin3){
        anchor_about.style.color = 'white'
    } else{
        anchor_about.style.color = ''
    }

    if (scrollY >= scrollThresholdIni4 && scrollY <= scrollThresholdFin4){
        anchor_cont.style.color = 'white'
    } else{
        anchor_cont.style.color = ''
    }

    if (scrollY >= scrollThresholdIni5 && scrollY <= scrollThresholdFin5){
        anchor_tech.style.color = 'white'
    } else{
        anchor_tech.style.color = ''
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

