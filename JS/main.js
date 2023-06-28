var background = document.querySelector('body')
var dlbtn = document.querySelector('#logo_icon')
var header = document.querySelectorAll('#initial_header a')
var headermec = document.querySelectorAll('.mec')
var alert = document.querySelector('#alert')
var hi = document.querySelector ('#hi')
var namer = document.querySelector ('#name')
var slogan = document.querySelector ('#slogan')
var intro = document.querySelector ('#introduce')
var intro_a = document.querySelector ('#intro_a')
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