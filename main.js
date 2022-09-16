const nav = document.querySelector(".navIcon");
const close = document.querySelector(".closeIcon");

nav.addEventListener("click", openNav);
function openNav() {
    const menu = document.querySelector(".mob-nav");
    menu.style.width = "100%"
}

close.addEventListener("click", closeNav)
function closeNav() {
    const menu = document.querySelector(".mob-nav");
    menu.style.width = "0%";
}

// For nav dropdown



const easySteps = document.querySelectorAll(".clipped-bg");

easySteps.forEach(easyStep => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(easyStep, {
    // clipPath: "circle(5% at 77% 40%)",
    clipPath: "circle(5% at 20% 20%)",
},
{
    // clipPath: "circle(75% at 50% 50%)",
    clipPath: "circle(75% at 50% 50%)",
    ease: "none",
    scrollTrigger: {
        trigger: easyStep,
        scrub: 1,
        start: "top center",
        end: "top center-=200",
    },
})
})


// For expanding BgImage



var duration = 10,
    cards = gsap.utils.toArray(".stepsCard"),
    cardIncrement = duration / (cards.length - 1)
        tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".cards-container",
                pin: true,
                scrub: 1,
                snap: 1 / (cards.length - 1),
                start: "top top",
                end: "+=6000"
            }
        });
    

tl.to(cards, {
    xPercent: -100 * (cards.length - 1),
    duration: duration,
    ease: "none",
});


// For fake horizontal scrolling



function coordinate() {

    const elem = document.getElementById("connectWallet");
    const rect = elem.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();
    const offsetOne = bodyRect.right - rect.right;
    console.log(`Offset value is ${offsetOne}`)
  
    for (const key in rect) {
      if (typeof rect[key] !== 'function') {
        console.log(`${key} : ${rect[key]}`);
      }
    }
  }
  document.addEventListener('scroll', coordinate);
  coordinate();
  
function secondCoordinate() {

    const elem = document.getElementById("createTicket");
    const rectTwo = elem.getBoundingClientRect();
    const bodyRECT = document.body.getBoundingClientRect();
    const offsetTwo = bodyRECT.right - rectTwo.right;
    console.log(`Offset value is ${offsetTwo}`)
  
    for (const key in rectTwo) {
      if (typeof rectTwo[key] !== 'function') {
        console.log(`${key} : ${rectTwo[key]}`);
      }
    }
}
  document.addEventListener('scroll', secondCoordinate);
  secondCoordinate();

  function thirdCoordinate() {

    const elem = document.getElementById("listTicket");
    const rectThree = elem.getBoundingClientRect();
    const bodyrect = document.body.getBoundingClientRect();
    const offset = bodyrect.right - rectThree.right;
    console.log(`Offset value is ${offset}`)
  
    for (const key in rectThree) {
      if (typeof rectThree[key] !== 'function') {
        console.log(`${key} : ${rectThree[key]}`);
      }
    }
}
  document.addEventListener('scroll', thirdCoordinate);
  thirdCoordinate();

  // Position of cards and offset value





const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        const activeAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if (activeAccordionItemHeader && activeAccordionItemHeader !== accordionItemHeader) {
            // this checks if the active class exists and if so ensure its different from the click event
            activeAccordionItemHeader.classList.toggle("active");
            activeAccordionItemHeader.nextElementSibling.style.maxHeight = 0
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});


// For FAQ




const videoWrappers = document.querySelectorAll(".video-wrapper");
const videoClips = document.querySelectorAll(".video-clip");
const posters = document.querySelectorAll(".poster");

$('.video-wrapper').each(function(i, obj) {
	let card = $(obj);
	let video = card.find('.video-clip')[0];
    let cardTop = card.find('.poster');

  card.hover(
    function() {
      video.play().catch(function(e) {
        console.log(e.message);
      }); 
      cardTop.hide();
    },
    function() {      
      video.pause();
      cardTop.show();
    }
  );
});

$('.platform-video-wrapper').each(function(i, gruveCard) {
	  let platformCard = $(gruveCard);
	  let platformVideo = platformCard.find('.platform-card-video')[0];
    let platformcardTop = platformCard.find('.platform-card-img');

    platformCard.hover(
    function() {
      platformVideo.play().catch(function(e) {
        console.log(e.message);
      }); 
      platformcardTop.hide();
    },
    function() {      
      platformVideo.pause();
      platformcardTop.show();
    }
  );
});


// For video hover




AOS.init({
    duration: 2100,
})


// For animate on scroll