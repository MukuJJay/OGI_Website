const header=document.querySelector("header"),sectionOne=document.querySelector(".home"),faders=document.querySelectorAll(".fade-in"),sliders=document.querySelectorAll(".slide-in"),sectionOneOptions={rootMargin:"-95% 0% 0% 0%"},sectionOneObserver=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting?header.classList.remove("scrolled"):header.classList.add("scrolled")}))}),sectionOneOptions);sectionOneObserver.observe(sectionOne);const appearOptions={threshold:0,rootMargin:"0px 0px -250px 0px"},appearOnScroll=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(e.target.classList.add("appear"),t.unobserve(e.target))}))}),appearOptions);sliders.forEach((e=>{appearOnScroll.observe(e)}));const hamburger=document.querySelector(".hamburger"),navMenu=document.querySelector("header .container ul"),body=document.querySelector("body");hamburger.addEventListener("click",(()=>{hamburger.classList.toggle("active"),navMenu.classList.toggle("active"),body.classList.toggle("hamburger-active")}));const timelineName=document.querySelectorAll(".timeline ul li a"),timeline=document.querySelectorAll(".timeline ul li"),timeRadio=document.querySelectorAll(".timeline ul li::before"),timeText=document.getElementById("time--text"),timeListOne=document.getElementById("time-list--one"),timeListTwo=document.getElementById("time-list--two"),timeListThree=document.getElementById("time-list--three"),timeListFour=document.getElementById("time-list--four");function timelineClick(){for(let e=0;e<timeline.length;e++)timeline[e].classList.remove("active");this.classList.add("active")}timeline.forEach((e=>{e.addEventListener("click",timelineClick)})),timeListOne.addEventListener("click",(()=>{timeText.innerHTML='<h2 class="text--secondary color--black-two margin-bottom--50">Timeline</h2>\n    <p class="text--quarternary color--gray margin-bottom--30">A posuere scelerisque gravida facilisi parturient magna urna donec parturient per augue a amet quam nullam a ad a. Parturient velit imperdiet in suspendisse eget a parturient adipiscing penatibus convallis himenaeos felis torquent facilisi elementum a penatibus suscipit aliquam.</p>\n    <p class="text--quarternary color--gray">Porta at at suspendisse dolor fames ullamcorper cum id per suspendisse a dignissim eu dapibus platea turpis augue mi proin lorem morbi sapien facilisis lectus.</p>'})),timeListTwo.addEventListener("click",(()=>{timeText.innerHTML='<h2 class="text--secondary color--black-two margin-bottom--50">Important Date One</h2>\n    <p class="text--quarternary color--gray margin-bottom--30">A posuere scelerisque gravida facilisi parturient magna urna donec parturient per augue a amet quam nullam a ad a. Parturient velit imperdiet in suspendisse eget a parturient adipiscing penatibus</p>\n    <p class="text--quarternary color--gray">Porta at at suspendisse dolor fames ullamcorper cum id per suspendisse a dignissim eu dapibus.</p>'})),timeListThree.addEventListener("click",(()=>{timeText.innerHTML='<h2 class="text--secondary color--black-two margin-bottom--50">Important Date Two</h2>\n    <p class="text--quarternary color--gray margin-bottom--30">A posuere scelerisque gravida facilisi parturient magna urna donec parturient per augue a amet quam nullam a ad a. Parturient velit imperdiet in suspendisse eget a parturient adipiscing penatibus convallis himenaeos felis torquent facilisi elementum a penatibus suscipit aliquam. himenaeos felis torquent facilisi elementum a penatibus suscipit aliquam.</p>\n    <p class="text--quarternary color--gray">Porta at at suspendisse dolor fames ullamcorper cum id per suspendisse a dignissim eu dapibus platea turpis augue mi proin lorem morbi sapien facilisis lectus.himenaeos felis torquent facilisi elementum a penatibus suscipit aliquam.</p>'})),timeListFour.addEventListener("click",(()=>{timeText.innerHTML='<h2 class="text--secondary color--black-two margin-bottom--50">Current Time</h2>\n    <p class="text--quarternary color--gray margin-bottom--30">A posuere scelerisque gravida facilisi parturient magna urna donec parturient per augue a amet quam nullam a ad a. Parturient velit imperdiet in suspendisse eget a parturient adipiscing penatibus convallis himenaeos felis torquent facilisi elementum a penatibus suscipit aliquam.</p>'}));const navItems=document.querySelectorAll("header ul li");navItems.forEach((e=>{e.addEventListener("click",(()=>{for(let e=0;e<navItems.length;e++)navItems[e].classList.remove("active");e.classList.add("active")}))}));
//# sourceMappingURL=script.js.map