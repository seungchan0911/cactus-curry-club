const menuDatas = [
    {
        "img": "../img/curry/IMG_1711.jpeg",
        "title": "beef curry",
        "subTitle": "mixed spices, beef, butter, heavy cream",
    },
    {
        "img": "../img/curry/IMG_1709.jpeg",
        "title": "keema curry",
        "subTitle": "mixed spices, beef, butter, heavy cream",
    },
    {
        "img": "../img/curry/IMG_1710.jpeg",
        "title": "shrimp curry",
        "subTitle": "mixed spices, beef, butter, heavy cream",
    },
    {
        "img": "../img/curry/0_DSF0486.jpg",
        "title": "spicy chicken curry",
        "subTitle": "mixed spices, beef, butter, heavy cream",
    },
    {
        "img": "../img/curry/IMG_2491.jpeg",
        "title": "keema curry maze udon",
        "subTitle": "mixed spices, beef, butter, heavy cream",
    },
    {
        "img": "../img/curry/IMG_3012.jpeg",
        "title": "karaage",
        "subTitle": "mixed spices, beef, butter, heavy cream",
    },
    {
        "img": "../img/curry/IMG_2993.jpeg",
        "title": "pork katsu",
        "subTitle": "mixed spices, beef, butter, heavy cream",
    },
    {
        "img": "../img/curry/IMG_2994.jpeg",
        "title": "fried shrimp",
        "subTitle": "mixed spices, beef, butter, heavy cream",
    },
]

function loadingMenuData() {
    const menuGroup = document.querySelector(".menu-group")

    menuDatas.forEach(menuData => {
        const div = document.createElement("div")
        div.classList.add("menu")
        div.innerHTML = `
            <div class="menu-img">
                <img src="${menuData.img}" alt="">
            </div>
            <div class="menu-info">
                <div class="menu-text-group">
                    <div class="menu-title">${menuData.title}</div>
                    <div class="menu-sub-title">${menuData.subTitle}</div>
                </div>
            </div>
        `

        menuGroup.append(div)
    })
}

loadingMenuData()

function headerMargin() {
    requestAnimationFrame(() => {
        const header = document.querySelector("header")
        const main = document.querySelector("main")

        if (header && main) {
            main.style.marginTop = header.offsetHeight + "px"
        }
    })
}

window.addEventListener("load", () => {
    headerMargin()
    window.addEventListener("resize", headerMargin)
})

function loadingAnimation() {
    const counter = document.getElementById("counter")
    const body = document.querySelector("body")
    body.style.overflow = "hidden"
    let value = 0
    const duration = 5000
    const steps = 100
    const intervalTime = duration / steps
    
    const interval = setInterval(() => {
        value++
        counter.textContent = value + "%"
        
        if (value >= 100) {
            clearInterval(interval)
            body.style.overflow = "scroll"
        }
    }, intervalTime)
}

loadingAnimation()
