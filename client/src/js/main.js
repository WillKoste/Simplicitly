const signUpButton = document.querySelector('#signUp');
const signInButton = document.querySelector('#signIn');
const container = document.querySelector('#container');



signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

const toggleBtn = document.querySelector('#nav-bars');
const sideNav = document.querySelector('#side-nav');
const body = document.body;
const homeLeft = document.querySelector('.home-left');
const homeRight = document.querySelector('.home-right');
const navbar = document.querySelector('.navbar');

const toggleSideNav = () => {
  sideNav.classList.toggle('toggled');
}

toggleBtn.addEventListener('click', toggleSideNav);
homeLeft.addEventListener('click', () => {
  sideNav.classList.remove('toggled');
});
homeRight.addEventListener('click', () => {
  sideNav.classList.remove('toggled');
});