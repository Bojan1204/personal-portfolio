
// const allLinks = document.querySelectorAll('.nav-link')
// const views = document.querySelectorAll('.view')



// for (let i = 0; i < allLinks.length; i++) {

//   allLinks[i].addEventListener('click', showView)

// }




// function showView(e) {
// e.preventDefault();
// for (let i = 0; i < views.length; i++) {

//       views[i].style.display = 'none'
// }

// const id = `#${this.getAttribute("href")}`;
// document.querySelector(id).style.display = "flex";

// }










const  homeBtn= document.querySelector('[href="home"]')
const  aboutBtn = document.querySelector('[href="aboutme"]')
const  projectsBtn= document.querySelector('[href="projects"]')
const  contactBtn= document.querySelector('[href="contact"]')


const  homeView= document.querySelector('#home')
const  aboutView = document.querySelector('#aboutme')
const  projectsView = document.querySelector('#projects')
const contactView = document.querySelector('#contact')





aboutBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  aboutView.style.display = "flex";
  homeView.style.display = "none";
  projectsView.style.display = "none";
  contactView.style.display = "none";
  

})

homeBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  homeView.style.display = "flex";
  aboutView.style.display = "none";
  projectsView.style.display = "none";
  contactView.style.display = "none";
  

})

projectsBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  projectsView.style.display = "block";
  homeView.style.display = "none";
  aboutView.style.display = "none";
  contactView.style.display = "none";
  

})

contactBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  contactView.style.display = "flex";
  projectsView.style.display = "none";
  homeView.style.display = "none";
  aboutView.style.display = "none";
  

})
























// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}





const navigation = document.querySelector(".site-navbar");

window.onscroll = () => {
    if (window.scrollY > 10) {
        navigation.classList.add("addResizeNavigation");
    } else {
        navigation.classList.remove("addResizeNavigation");
    }
};



const jsProjectBtn = document.querySelector('.card-front');
const landingpagesBtn = document.querySelector('.project2');
const closeModal = document.querySelector('.close-modal');
const secondcloseModal = document.querySelector('.landing-close-modal');
const modal = document.querySelector('.modal-bg');
const secondModal = document.querySelector('.modal-ladning-bg');



jsProjectBtn.addEventListener('click', function(){
        modal.classList.add('modal-active')
})

closeModal.addEventListener('click', function(){
        modal.classList.remove('modal-active')
})


landingpagesBtn.addEventListener('click', function(){
  secondModal.classList.add('landing-modal-active')
})


secondcloseModal.addEventListener('click', function(){
  secondModal.classList.remove('landing-modal-active')
})

console.log(secondModal)
