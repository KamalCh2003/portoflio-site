const toggleButton = document.getElementById('toggle-button');
const body = document.body;

const mainEl = document.getElementById("main")
const aboutEl = document.getElementById("About")
const skillEl = document.getElementById("skill")
const blogEl = document.getElementById("blog")
const contactEl = document.getElementById("contact")

// Set the initial mode to dark mode and adjust button text
toggleButton.textContent = 'Light Mode';

toggleButton.addEventListener('click', function() {
    console.log(body)
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        mainEl.style.backgroundColor = "#1A3636"
        toggleButton.textContent = 'Dark Mode';
    } else {
        toggleButton.textContent = 'Light Mode';
        mainEl.style.backgroundColor = "#021526"
        aboutEl.style.color ="#000"
        skillEl.style.color ="#000"
        blogEl.style.color ="#000"
        contactEl.style.color ="#000"
    }
});

// const menuEl = document.getElementById("menu")
// menuEl.addEventListener('click', function(){

//     if{

//     }
// })



// function responsiveScript() {
//     // only run script below 767 px screen width
//     if (window.innerWidth >=766) {
//       gsap.to(".info h1",{
//         duration:1,
//         scale:1.1,
//         fontSize:20,
//         opacity:1
//    }) 
//     }
//   }
//   // run script on page load
//   responsiveScript();
//   // run script on window resize
//   window.addEventListener("resize", responsiveScript);


gsap.to("#about-me",{
    duration:1,
    scale:1.05,
    scrollTrigger:{
         trigger:"#about-me",
         scroll:"main",
         start:"top 60%",
         scrub:2
    }
}) 
// gsap.to(".feature",{
//     duration:2,
//     scale:1,
//     opacity:1,
//     scrollTrigger:{
//          trigger:"#about-me",
//          scroll:"main",
//          start:"top 50%"
//     }
//  })


gsap.to(".box0",{
    opacity:1,
    y:-300,
    x:1000,
    duration:15,
    rotate:360,
    backgroundColor:"linear-gradient(blue,red)",
    borderRadius:"50%",
    repeat:-1,
    yoyo:true 

}) 

gsap.to(".box1",{
    opacity:1,
    y:-200,
    x:400,
    duration:20,
    rotate:360,
    backgroundColor:"linear-gradient(blue,red)",
    borderRadius:"50%",
    repeat:-1,
    yoyo:true 

}) 

gsap.to(".box2",{
    opacity:1,
    y:-400,
    x:1200,
    duration:12,
    rotate:360,
    backgroundColor:"linear-gradient(blue,red)",
    borderRadius:"50%",
    repeat:-1,
    yoyo:true 

}) 

gsap.to(".box3",{
    opacity:0,
    y:200,
    x:800,
    duration:5,
    rotate:360,
    borderRadius:"50%",
    repeat:-1,
    yoyo:true 

}) 

gsap.to(".box4",{
    opacity:0,
    y:-300,
    x:200,
    duration:35,
    rotate:360,
    borderRadius:"50%",
    repeat:-1,
    yoyo:true 

}) 

gsap.to(".box5",{
    opacity:1,
    y:300,
    x:400,
    duration:8,
    rotate:360,
    borderRadius:"50%",
    repeat:-1,
    yoyo:true 

}) 

gsap.to(".box6",{
    opacity:1,
    y:-600,
    x:300,
    duration:3,
    rotate:360,
    borderRadius:"50%",
    repeat:-1,
    yoyo:true 

}) 

gsap.to(".box7",{
    opacity:1,
    y:300,
    x:-100,
    duration:5,
    rotate:360,
    borderRadius:"50%",
    repeat:-1,
    yoyo:true 

}) 

gsap.to(".box8",{
    opacity:1,
    y:-0,
    x:0,
    duration:2,
    rotate:720,
    borderRadius:"50%",
    repeat:-1,
    yoyo:true 

}) 

gsap.to(".box9",{
    opacity:1,
    y:300,
    x:1000,
    duration:20,
    rotate:360,
    borderRadius:"50%",
    repeat:-1,
    yoyo:true 

}) 

gsap.to(".box10",{
    opacity:1,
    y:-250,
    x:-100,
    duration:12,
    rotate:360,
    borderRadius:"50%",
    repeat:-1,
    yoyo:true 

}) 

gsap.to(".small1",{
    opacity:0,
    y:-200,
    x:600,
    duration:10,
    rotate:360,
    borderRadius:"50%",
    repeat:-1,
    yoyo:true 

})
gsap.to(".logo",{
    duration:10,
    opacity:1,
    delay:2

}) 
gsap.to("#clone",{
    duration:5,
    opacity:1,

}) 







