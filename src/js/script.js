// ==============header scroll effect===============
const header = document.querySelector("header");
const sectionOne = document.querySelector(".home");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
    rootMargin: "-95% 0% 0% 0%"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
) {
entries.forEach(entry => {
    if (!entry.isIntersecting) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// appear on scroll
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

//sliders on scroll
sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

//============== hamburger menu ================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("header .container ul");
const body = document.querySelector("body")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("hamburger-active");
})

//================timeline===================
const timelineName = document.querySelectorAll(".timeline ul li a");
const timeline = document.querySelectorAll(".timeline ul li");
const timeRadio = document.querySelectorAll(".timeline ul li::before");
const timeText = document.getElementById("time--text");
const timeListOne = document.getElementById("time-list--one");
const timeListTwo = document.getElementById("time-list--two");
const timeListThree = document.getElementById("time-list--three");
const timeListFour = document.getElementById("time-list--four");

function timelineClick(){
    for(let i = 0; i < timeline.length; i++){
        timeline[i].classList.remove("active");
    }
    this.classList.add("active");
}

timeline.forEach(item =>{
    item.addEventListener("click", timelineClick);
});

timeListOne.addEventListener("click", ()=>{
    timeText.innerHTML = `<h2 class="text--secondary color--black-two margin-bottom--50">Timeline</h2>
    <p class="text--quarternary color--gray margin-bottom--30">A posuere scelerisque gravida facilisi parturient magna urna donec parturient per augue a amet quam nullam a ad a. Parturient velit imperdiet in suspendisse eget a parturient adipiscing penatibus convallis himenaeos felis torquent facilisi elementum a penatibus suscipit aliquam.</p>
    <p class="text--quarternary color--gray">Porta at at suspendisse dolor fames ullamcorper cum id per suspendisse a dignissim eu dapibus platea turpis augue mi proin lorem morbi sapien facilisis lectus.</p>`;
});

timeListTwo.addEventListener("click", ()=>{
    timeText.innerHTML = `<h2 class="text--secondary color--black-two margin-bottom--50">Important Date One</h2>
    <p class="text--quarternary color--gray margin-bottom--30">A posuere scelerisque gravida facilisi parturient magna urna donec parturient per augue a amet quam nullam a ad a. Parturient velit imperdiet in suspendisse eget a parturient adipiscing penatibus</p>
    <p class="text--quarternary color--gray">Porta at at suspendisse dolor fames ullamcorper cum id per suspendisse a dignissim eu dapibus.</p>`;
});

timeListThree.addEventListener("click", ()=>{
    timeText.innerHTML = `<h2 class="text--secondary color--black-two margin-bottom--50">Important Date Two</h2>
    <p class="text--quarternary color--gray margin-bottom--30">A posuere scelerisque gravida facilisi parturient magna urna donec parturient per augue a amet quam nullam a ad a. Parturient velit imperdiet in suspendisse eget a parturient adipiscing penatibus convallis himenaeos felis torquent facilisi elementum a penatibus suscipit aliquam. himenaeos felis torquent facilisi elementum a penatibus suscipit aliquam.</p>
    <p class="text--quarternary color--gray">Porta at at suspendisse dolor fames ullamcorper cum id per suspendisse a dignissim eu dapibus platea turpis augue mi proin lorem morbi sapien facilisis lectus.himenaeos felis torquent facilisi elementum a penatibus suscipit aliquam.</p>`;
});
timeListFour.addEventListener("click", ()=>{
    timeText.innerHTML = `<h2 class="text--secondary color--black-two margin-bottom--50">Current Time</h2>
    <p class="text--quarternary color--gray margin-bottom--30">A posuere scelerisque gravida facilisi parturient magna urna donec parturient per augue a amet quam nullam a ad a. Parturient velit imperdiet in suspendisse eget a parturient adipiscing penatibus convallis himenaeos felis torquent facilisi elementum a penatibus suscipit aliquam.</p>`;
});

//==============navmenu items click====================

const navItems = document.querySelectorAll("header ul li");

navItems.forEach(item =>{
    item.addEventListener("click", () =>{
        for(let i = 0; i < navItems.length; i++){
            navItems[i].classList.remove("active");
        }
        item.classList.add("active");
    })
})

//=============form validations================

const fName = document.getElementById("name");
const fEmail = document.getElementById("email");
const fMsg = document.getElementById("message");
const form = document.getElementById("form");
const errorElem = document.getElementById("error");
const ip1 = document.getElementById("ip1");
const ip2 = document.getElementById("ip2");
const ip3 = document.getElementById("ip3");
const thanks = document.getElementById("thanks");

form.addEventListener("submit", (e) =>{
    let messages = [];
    if (fName.value.length < 6){
        messages.push("Name should be atleast 6 characters");
    }
    if (fMsg.value.length<15){
        messages.push("Message should be atleast 15 characters");
    }
    if(messages.length > 0){
        e.preventDefault();
        errorElem.innerText = messages.join(', ');
    }
    localStorage.setItem("Name", fName.value);
    localStorage.setItem("Email", fEmail.value);
    localStorage.setItem("Message", fMsg.value);
    thanks.innerHTML=`<h2 class="text--secondary color--white margin-bottom--50">Thank you</h2>
    <p class="text--quarternary color--white">We respect your time for contacting us. We will get to you soon. For the time being you can browse our website for more details.</p>`;
})

fName.addEventListener("input", () =>{
    if(fName.value.length>=6){
        ip1.classList.add("tick--active");
    }
    else{
        ip1.classList.remove("tick--active");
    }
});

fEmail.addEventListener("input", () =>{
    if (fEmail.validity.valid === true){
        ip2.classList.add("tick--active");
    }
    else{
        ip2.classList.remove("tick--active");
    }
})

fMsg.addEventListener("input", () =>{
    if(fMsg.value.length >=15){
        ip3.classList.add("tick--active");
    }
    else{
        ip3.classList.remove("tick--active");
    }
})
    
    