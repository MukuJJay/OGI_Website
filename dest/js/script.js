const header=document.querySelector("header"),sectionOne=document.querySelector(".home"),faders=document.querySelectorAll(".fade-in"),sliders=document.querySelectorAll(".slide-in"),sectionOneOptions={rootMargin:"-95% 0% 0% 0%"},sectionOneObserver=new IntersectionObserver((function(e,r){e.forEach((e=>{e.isIntersecting?header.classList.remove("scrolled"):header.classList.add("scrolled")}))}),sectionOneOptions);sectionOneObserver.observe(sectionOne);const appearOptions={threshold:0,rootMargin:"0px 0px -250px 0px"},appearOnScroll=new IntersectionObserver((function(e,r){e.forEach((e=>{e.isIntersecting&&(e.target.classList.add("appear"),r.unobserve(e.target))}))}),appearOptions);sliders.forEach((e=>{appearOnScroll.observe(e)}));const hamburger=document.querySelector(".hamburger"),navMenu=document.querySelector("header .container ul"),body=document.querySelector("body");hamburger.addEventListener("click",(()=>{hamburger.classList.toggle("active"),navMenu.classList.toggle("active"),body.classList.toggle("hamburger-active")}));
//# sourceMappingURL=script.js.map