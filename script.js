document.addEventListener("DOMContentLoaded", function () {

    //cursor animation

    let cursor = document.querySelector("#cursor");
    let body = document.querySelector("body");

    body.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,//dets.x aur y body ke hai jo hum cursor namak div ki animate krney me use kr rahe hai
            y: dets.y,
            duration: 1
        })
    })


    //nav bar box1 box2 animation
    var nav_box1_h3 = document.querySelectorAll("nav #box1 h3")
    var nav_box2_menu = document.querySelectorAll("nav #box2 #menu")

    let tl1 = gsap.timeline();
    tl1.from(nav_box1_h3, {
        opacity: 0,
        y: -18,
        stagger: 0.05,
    })
    tl1.from(nav_box2_menu, {
        opacity: 0,
        y: -14,
    })

    //logo animation
    var logo = document.querySelector("#navUpper #logo");
    var name = document.querySelector("#navUpper #name");
    var nccLogo = document.querySelector("#navUpper #nccLogo");



    var tl2 = gsap.timeline();
    tl2.from(logo, {
        delay: 0.2,
        opacity: 0,
    })
    tl2.from(name, {
        opacity: 0,
        y: -14,
    })
    tl2.from(nccLogo, {
        opacity: 0,
        y: -14,
    })

    //side bar and menubar
    var menu = document.querySelector("#menu");
    var sidebar = document.querySelector("#sideBar");
    var closee = document.querySelector(".close");
    var a = document.querySelectorAll("#sideBar a h3")

    let tl3 = gsap.timeline();
    tl3.from(sidebar, {
        right: "-40%",
        opacity: 0,
        duration: 0.2
    })
    tl3.from(a, {
        opacity: 0,
        x: 30,
        stagger: 0.09,//h1's ko bari bari chalayega
    })

    tl3.pause()
    menu.addEventListener("click", function () {
        sidebar.style.display = "flex";
        closee.style.display = "block";
        menu.style.display = "none";
        menu.style.right = "7%";
        menu.style.top = "1%";
        tl3.play()
    })
    closee.addEventListener("click", function () {
        // sidebar.style.display = "none";
        menu.style.display = "block";
        tl3.reverse()
    })


    // elastic string

    var initialPath = `M 10 100 Q 250 100 490 100`;
    var finalPath = `M 10 100 Q 250 100 490 100`;

    let string1 = document.querySelector("#string1");

    string1.addEventListener("mousemove", function (dets) {

        const rect = string1.getBoundingClientRect();

        let mouseX = dets.clientX - rect.left;
        let mouseY = dets.clientY - rect.top;

        let controlPointX = (mouseX / rect.width) * 480 + 10;
        let controlPointY = mouseY < rect.height / 2 ? 50 : 150;

        initialPath = `M 10 100 Q ${controlPointX} ${controlPointY} 490 100`;

        gsap.to("#string1 svg path", {
            attr: { d: initialPath },
            duration: 0.3,
            ease: "power3.out",
        });
    });
    let string2 = document.querySelector("#string2");

    string2.addEventListener("mousemove", function (dets) {

        const rect = string2.getBoundingClientRect();

        let mouseX = dets.clientX - rect.left;
        let mouseY = dets.clientY - rect.top;

        let controlPointX = (mouseX / rect.width) * 480 + 10;
        let controlPointY = mouseY < rect.height / 2 ? 50 : 150;

        initialPath = `M 10 100 Q ${controlPointX} ${controlPointY} 490 100`;

        gsap.to("#string2 svg path", {
            attr: { d: initialPath },
            duration: 0.3,
            ease: "power3.out",
        });
    });

    // Reset SVG path on mouseleave
    string2.addEventListener("mouseleave", function () {
        gsap.to("#string2 svg path", {
            attr: { d: finalPath },
            duration: 0.3,
            ease: "elastic.out(1, 0.2)",
        });
    });
    string1.addEventListener("mouseleave", function () {
        gsap.to("#string1 svg path", {
            attr: { d: finalPath },
            duration: 0.3,
            ease: "elastic.out(1, 0.2)",
        });
    });


    //greeting's small-img animation

    var small_imgs = document.querySelectorAll(".small-imgs");

    small_imgs.forEach((img) => {
        img.addEventListener("mouseenter", () => {
            // Find the sibling <h6> element within the same container
            var h6 = img.nextElementSibling;

            // Ensure the <h6> element exists and set its display property
            if (h6) {
                h6.style.display = "block"; // Show the text
            }

            // Apply GSAP animation to the image
            gsap.to(img, {
                scale: 1.3,
            });
        });

        img.addEventListener("mouseleave", () => {
            // Find the sibling <h6> element within the same container
            var h6 = img.nextElementSibling;

            // Ensure the <h6> element exists and hide it
            if (h6) {
                h6.style.display = "none"; // Hide the text
            }

            // Reset the scale of the image
            gsap.to(img, {
                scale: 1,
            });
        });
    });
});


//about us amimation

var button = document.querySelector("#AboutUs #textDiv #buttonDiv button")
var about_us_img = document.querySelector("#AboutUs #imgDiv img")
var about_us_heading = document.querySelector("#AboutUs #textDiv h1")
var about_us_para = document.querySelector("#AboutUs #textDiv p")

button.addEventListener("mouseenter", () => {
    gsap.to(button, {
        scale: 1.1,
        duration: 0.3,
    })
    gsap.to(about_us_img, {
        scale: 1.1,
        duration: 0.3,
    })
    gsap.to(about_us_heading, {
        scale: 1.03
    })
})
button.addEventListener("mouseleave", () => {
    gsap.to(button, {
        scale: 1,
        duration: 0.3,
    })
    gsap.to(about_us_img, {
        scale: 1,
        duration: 0.3,
    })
    gsap.to(about_us_heading, {
        scale: 1
    })
})

//key people animation
var kn_first_Img_div = document.querySelector("#keyPeople #imagePart #first-img-div")
var knImg = document.querySelector("#keyPeople #imagePart #first-img-div img");
var kn_info_sideBar = document.querySelector("#keyPeople #imagePart #first-img-div #knInfo")

var kn_wife_second_Img_div = document.querySelector("#keyPeople #imagePart #second-img-div")
var kn_wife_Img = document.querySelector("#keyPeople #imagePart #second-img-div img");
var kn_wife__info_sideBar = document.querySelector("#keyPeople #imagePart #second-img-div #kn-wife-Info")

var flower = document.querySelector("#flower img")

//kn
gsap.registerPlugin(ScrollTrigger);

var tl4 = gsap.timeline();
tl4.to(knImg, {
    duration: 0.4,
    x: " -5.25vw",
    scale: 1.5,
})

tl4.from(kn_info_sideBar, {
    duration: 0.3,
    opacity: 0,
    x: 30,
})
tl4.to(flower, {
    scale: 1.05,
})
tl4.pause();

kn_first_Img_div.addEventListener("mouseenter", () => {
    tl4.play();
    kn_info_sideBar.style.display = "flex";

})
kn_first_Img_div.addEventListener("mouseleave", () => {
    tl4.reverse();
})

//kn_wife
var tl5 = gsap.timeline();
tl5.to(kn_wife_Img, {
    duration: 0.4,
    x: " -5.25vw",
    scale: 1.5,
})

tl5.from(kn_wife__info_sideBar, {
    duration: 0.3,
    opacity: 0,
    x: 30,
})
tl5.to(flower, {
    scale: 1.05,
})
tl5.pause();

kn_wife_second_Img_div.addEventListener("mouseenter", () => {
    tl5.play();
    kn_wife__info_sideBar.style.display = "flex";

})
kn_wife_second_Img_div.addEventListener("mouseleave", () => {
    tl5.reverse();
})

//form animation
var inputs = document.querySelectorAll("#enqForm form input ,select")
var formImg = document.querySelector("#enqForm img")

inputs.forEach((input) => {
    input.addEventListener("mouseenter", () => {
        gsap.to(formImg, {
            scale: 1.08
        });
    });

    input.addEventListener("mouseleave", () => {
        gsap.to(formImg, {
            scale: 1
        });
    });
});

//scroll animation 
let lastTouchY = 0; // To keep track of the last touch position

function handleScroll(event) {
    event.preventDefault(); // Prevent default scrolling behavior

    let scrollDelta = 0;

    if (event.type === 'wheel') {
        // Handle mouse wheel scroll
        scrollDelta = event.deltaY;
    } else if (event.type === 'touchmove') {
        // Handle touch scroll
        const touchY = event.touches[0].clientY;
        scrollDelta = lastTouchY - touchY; // Calculate the delta
        lastTouchY = touchY; // Update lastTouchY
    }

    const choteyDabbey = document.querySelectorAll(".choteyDabbey");
    const choteyDabbeyWidth = choteyDabbey[0].offsetWidth; // Width of one .choteyDabbey
    const totalWidth = choteyDabbeyWidth * choteyDabbey.length; // Total width of all .choteyDabbey elements
    const movingTrack = document.querySelector("#movingTrack");
    const visibleWidth = movingTrack.offsetWidth; // Width of the visible track
    const maxTranslate = visibleWidth - totalWidth; // Calculate the maximum translation needed

    if (scrollDelta > 0) {
        gsap.to(".choteyDabbey", {
            x: maxTranslate + "px", // Move from 0 to the maxTranslate
            duration: 10, // Adjust duration for speed
            ease: "none",
            repeat: -1,
        });

        gsap.to(".choteyDabbey .rotateArrow", {
            rotate: 180,
        });
    } else if (scrollDelta < 0) {
        gsap.to(".choteyDabbey", {
            x: "0px", // Reset position to 0 (start)
            duration: 10, // Same duration for smooth reset
            ease: "none",
            repeat: -1,
        });

        gsap.to(".choteyDabbey .rotateArrow", {
            rotate: 0,
        });
    }
}

// Add event listeners for both PC and mobile
window.addEventListener('wheel', handleScroll);
window.addEventListener('touchstart', (event) => { lastTouchY = event.touches[0].clientY; }); // Initialize lastTouchY
window.addEventListener('touchmove', handleScroll);

//map animation
var map = document.querySelector("footer .zeroPadding iframe");

map.addEventListener("mouseenter", () => {
    console.log("entered")
    gsap.to(map, {
        scale: 1.05,
    })
})
map.addEventListener("mouseleave", () => {
    gsap.to(map, {
        scale: 1,
    })
})