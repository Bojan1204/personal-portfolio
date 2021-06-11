
const allLinks = document.querySelectorAll('.nav-link')
const views = document.querySelectorAll('.view')



for (let i = 0; i < allLinks.length; i++) {

  allLinks[i].addEventListener('click', showView)

}




function showView(e) {
e.preventDefault();
for (let i = 0; i < views.length; i++) {

      views[i].style.display = 'none'
}

const id = `#${this.getAttribute("href")}`;
document.querySelector(id).style.display = "flex";

}








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



const jsProjectBtn = document.querySelector('.js-projects-card');
const landingpagesBtn = document.querySelector('.landingPages-projects-card');
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
