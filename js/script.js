const products = [
    {
        id: 1, name: "Habits Fashion", prix: 2500, description: "Habbits bien sognez bien cali bien propre", img: "/assets/dna-mens-repel-8-basketball-shorts-FThX1R.png"
    },
    {
        id: 2, name: "Nike air max", prix: 12500, description: "Chaussures air max de grande qualites", img: "/assets/c1.png"
    },
    {
        id: 3, name: "Chauusures NIke", prix: 3500, description: "Chaussures de la marque Nike Tres confortable", img: "/assets/ch1.png"
    },
    {
        id: 4, name: "Hauts Pour Femmes", prix: 3500, description: "Hauts pour femmes bien propre", img: "/assets/f1.png"
    },
    {
        id: 5, name: "Pulls Fashion", prix: 5000, description: "Pulls bien propre", img: "/assets/f2.png"
    },
    {
        id: 6, name: "Joggins Fashion", prix: 5000, description: "Joggins Confrotable de la marques Nike", img: "/assets/f3.png"
    },
    {
        id: 7, name: "Chaussures NIke", prix: 15000, description: "Chauusures Tres cali", img: "/assets/fs1.png"
    },
    {
        id: 8, name: "Chaussures NIke", prix: 12500, description: "Chauusures Tres cali", img: "/assets/fs2.png"
    },
    {
        id: 9, name: "Chaussures NIke", prix: 13500, description: "Chauusures Tres cali", img: "/assets/fs3.png"
    },
    {
        id: 10, name: "Shorts Pour Enfants", prix: 3500, description: "Shorts Pour Enfants tres bonnes qualite", img: "/assets/kids1.png"
    }, {
        id: 11, name: "Collants Pour Enfants", prix: 1500, description: "Collants de bonne qualites", img: "/assets/kids2.png"
    }, {
        id: 12, name: "Pulls Pour Enfants", prix: 1500, description: "Pulls confortable et durable", img: "/assets/kids3.png"
    }, {
        id: 14, name: "Chaussures NIke", prix: 13500, description: "Chauusures Tres cali", img: "/assets/ks1.png"
    }, {
        id: 15, name: "Chaussures NIke", prix: 13500, description: "Chauusures Tres cali", img: "/assets/ks2.png"
    }, {
        id: 16, name: "Chaussures NIke", prix: 13500, description: "Chauusures Tres cali", img: "/assets/ks3.png"
    }, {
        id: 17, name: "Joggins Hommes", prix: 13500, description: "Joggins Confortable", img: "/assets/p1.png"
    }, {
        id: 18, name: "Joggins Hommes", prix: 10500, description: "Joggins Hommes", img: "/assets/p2.png"
    }, {
        id: 19, name: "Ensemble Hommes", prix: 13500, description: "Ensemble pour hommes", img: "/assets/p3.png"
    }, {
        id: 20, name: "Chaussures NIke", prix: 13500, description: "Chauusures Tres cali", img: "/assets/sh.png"
    }, {
        id: 21, name: "Chaussures NIke", prix: 13500, description: "Chauusures Tres cali", img: "/assets/sh2.png"
    },  {
        id: 22, name: "Pulls Hommes", prix: 10500, description: "Chauusures Tres cali", img: "/assets/th2.png"
    },
]




let menuBar = document.querySelector(".menu-bar")

let menuOpen = document.querySelector(".nav-menu")

menuBar.addEventListener("click", () => {
    menuOpen.classList.toggle("active")
})

function afficherBox(){
    let container = document.querySelector(".produit-content")

    products.forEach((produits) => {
        let box = document.createElement("div")
        box.classList = "box-p"

        box.innerHTML = ` <div class="box-img">
                                <img src=${produits.img} alt="">
                            </div>

                            <div class="box-content">
                                <h3>${produits.name}</h3>
                                <p>${produits.prix} FCFA</p>
                                <p>${produits.description}</p>
                            </div>`

        container.appendChild(box)
    })
}

afficherBox()

const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   breakpoints : {
    0 :{
        slidesPerView: 1
    },
    768 :{
        slidesPerView: 2
    },
    1024 :{
        slidesPerView: 3
    },
   }
  });