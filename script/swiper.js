import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

const ello = document.querySelector("#ello");
const link_for_p = document.querySelector("#link_for_p");
const desc_pro = document.querySelector("#desc_pro");

new Typewriter(ello, {
    loop: true
})
.typeString("ola")
.pauseFor(300)
.deleteChars(10)
.pauseFor(300)
.typeString("ello")
.pauseFor(300)
.deleteChars(10)
.pauseFor(300)
.typeString("allo")
.pauseFor(300)
.deleteChars(10)
.pauseFor(300)
.start()

const swiper = new Swiper('.swiper', {
    speed: 350,
    spaceBetween: 10,
    effect: 'creative',
    creativeEffect: {
        prev: {
        translate: [0, 0, -400],
        rotate : [0, 0, 10],
        },
        next: {
        translate: ['100%', 0, 0],
        },
    },
    pagination:{
        el: '.swiper-pagination',
        type: "custom",
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

swiper.on('slideChange', function (){
    var index = (swiper.snapIndex)
    if(index == 0){
        desc_pro.innerHTML = "Ce projet à été codé dans le but d'un défi de code ou l'ont devaient choisir une couleur aléatoirement et en faire un site";
        link_for_p.href = "https://smokelord9.github.io/ColorPicker/";
    }else if(index == 1){
        desc_pro.innerHTML = "Ce projet à été codé dans le but de m'informer sur l'intéligence artificielle";
        link_for_p.href = "https://github.com/SmokeLord9/Perceptrons/";
    }else{
        desc_pro.innerHTML = "Ce projet est un mini jeu coup prierre feuille sciseau";
        link_for_p.href = "https://smokelord9.github.io/ROCKPAPERSCISSORS/";
    }
})
