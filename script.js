// active hamburger menu 
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist")
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// remove navlist
navlist.addEventListener("click",()=>{
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
})



// rotate text js code 
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");


// switch between about buttons 

const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    contents.forEach(content => content.style.display = 'none');
    contents[index].style.display = 'block';
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});



// portfolio fillter 

var mixer = mixitup('.portfolio-gallery',{
    selectors: {
        target: '.portfolio-box'
    },
    animation: {
        duration: 500
    }
});


// Initialize swiperjs 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    breakpoints: {
        576:{
            slidesPerView:2,
            spaceBetween:10,
        },
        1200:{
            slidesPerView:3,
            spaceBetween:20,
        },
    }
  });



//   skill Progress bar 

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll",()=>{
    if(!skillsPlayed)
    skillsCounter();
})


function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >= topPosition + el.offsetHeight)return true;
    return false;
}

function updateCount(num,maxNum){
    let currentNum = +num.innerText;

    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(()=>{
            updateCount(num,maxNum)
        },12)
    }
}


let skillsPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skill))return;
    skillsPlayed = true;
    sk_counters.forEach((counter,i)=>{
        let target = +counter.dataset.target;
        let strokeValue = 465 - 465 * (target / 100);

        progress_bars[i].style.setProperty("--target",strokeValue);

        setTimeout(()=>{
            updateCount(counter,target);
        },400)
    });

    progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards");
}


// side progress bar 

let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);

    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#088178 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// active menu 

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll('aayush');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

// scroll reveal

ScrollReveal({ 
    distance:"0px",
    duration:2000,
    delay:100,
    // reset: true ,
});


ScrollReveal().reveal('.hero-info,.main-text,.proposal,.heading', { origin: "top" });
ScrollReveal().reveal('.about-img,.fillter-buttons,.contact-info', { origin: "left" });
ScrollReveal().reveal('.about-content,.skills', { origin: "right" });
ScrollReveal().reveal('.allServices,.portfolio-gallery,.blog-box,footer,.img-hero', { origin: "bottom" });



// Services ReadMore

  const serviceItems = document.querySelector(".allServices");

  const popup = document.querySelector(".popup-box")

  const popupCloseBtn = popup.querySelector(".popup-close-rbtn");

  const popupCloseIcon = popup.querySelector(".popup-close-icon");



  serviceItems.addEventListener("click",function(event){

    if(event.target.tagName.toLowerCase() == "button"){

       const servicesItem =event.target.parentElement;

       const h3 = servicesItem.querySelector("h3").innerHTML;

       const readMoreCont = servicesItem.querySelector(".readMore").innerHTML;

       popup.querySelector("h3").innerHTML = h3;

       popup.querySelector(".popup-body").innerHTML = readMoreCont;

       popupBox();

    }



  })



  popupCloseBtn.addEventListener("click", popupBox);

  popupCloseIcon.addEventListener("click", popupBox);



  popup.addEventListener("click", function(event){

     if(event.target == popup){

        popupBox();

     }

  })



  function popupBox(){

    popup.classList.toggle("open");

  }






//Form Sumbit

 const form = document.querySelector("form");

 const fname = document.getElementById("fname");
 const lname = document.getElementById("lname");
 const email = document.getElementById("email");
 const phone = document.getElementById("phone");
 const subject = document.getElementById("subject");
 const message = document.getElementById("message");


 function sendEmail() {

   const bodyMessage = `Full Name: ${fname.value} \n ${lname.value} <br/> Email: ${email.value} <br/> Phone: ${phone.value} <br/> Subject: ${subject.value} <br/> Message: ${message.value}`;

   Email.send({
     SecureToken : "8bf5037e-c301-4986-9c11-1bdc4c62fd28",
       To : 'mdnasibulrain4@gmail.com',
       From : "mdnasibulrain4@gmail.com",
       Subject : "New Message From Portfolio Website",
       Body : bodyMessage
   }).then(
     message => {
       if (message == "OK") {
         Swal.fire({
           title: "Success!",
           text: "Message send successfully!",
           icon: "success"
         });
       }
     }
   );

 }

 function checkInputs() {
   const inputs = document.querySelectorAll(".input");

   for (const input of inputs) {
     if (input.value == "") {
       input.classList.add("error");
   input.parentElement.classList.add("error");
     }

     if (inputs[1].value != "") {
       chekEmail();
     }

  inputs[1].addEventListener("keyup", () => {
      chekEmail();
     });

     input.addEventListener("keyup", () => {
       if (input.value != "") {
         input.classList.remove("error"); input.parentElement.classList.remove("error");
       }
       else {
         input.classList.add("error"); input.parentElement.classList.add("error");
       }
     });
   }
 }

 function chekEmail() {
     const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
     if (!email.value.match(emailRegex)) {
       email.classList.add("error");
   email.parentElement.classList.add("error");
     }
     else{
       email.classList.remove("error");
 email.parentElement.classList.remove("error");
     }
 }

 form.addEventListener("submit", (e) => {
   e.preventDefault();

   checkInputs();

   if (!fname.classList.contains("error") && !lname.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {

     
   sendEmail();
     form.reset();
     return false;

   }

 });
