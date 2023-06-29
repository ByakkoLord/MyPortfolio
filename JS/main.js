//Scroll Reveal

window.sr = ScrollReveal({ reset: true})

sr.reveal('.hi_reveal_1', { rotate: {x: 0, y: 70, z: 0}, duration: 1500})
sr.reveal('.blocks', { rotate: {x: 0, y: 70, z: 0}, duration: 1500})
sr.reveal('.titles', { rotate: {x: 0, y: 70, z: 0}, duration: 2000})

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
        slogan.style.color = 'rgb(75, 75, 75)'
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

//Project1

ShowProject1.addEventListener('mouseenter', function(){
    ShowTitle.style.display = 'none'
    ShowDesc.style.display = 'block'
    ShowDesc.textContent = '1Lorem Lorem oremLor mLo remLo remLorem LoremLorem Lorem Lorem Lorem LoremLor emLoremLorem'
    ShowCode1.style.display = 'flex'
    ShowCode2.style.display = 'none'
    ShowCode3.style.display = 'none'
})

//Project1

//Project2

ShowProject2.addEventListener('mouseenter', function(){
    ShowTitle.style.display = 'none'
    ShowDesc.style.display = 'block'
    ShowDesc.textContent = '2Lorem Lorem oremLor mLo remLo remLorem LoremLorem Lorem Lorem Lorem LoremLor emLoremLorem'
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
    ShowDesc.textContent = '3Lorem Lorem oremLor mLo remLo remLorem LoremLorem Lorem Lorem Lorem LoremLor emLoremLorem'
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
    ShowDesc.textContent = '4Lorem Lorem oremLor mLo remLo remLorem LoremLorem Lorem Lorem Lorem LoremLor emLoremLorem'
    ShowCode4.style.display = 'flex'
    ShowCode1.style.display = 'none'
    ShowCode2.style.display = 'none'
    ShowCode3.style.display = 'none'
})

//Project4