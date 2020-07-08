const toggleBtn = document.querySelector('#nav-bars');
const sideNav = document.querySelector('#side-nav');
const body = document.body;
const rightSideSecondary = document.querySelector('.right-side-secondary');
const navbar = document.querySelector('.navbar');

const toggleSideNav = () => {
  sideNav.classList.toggle('toggled');
}

toggleBtn.addEventListener('click', toggleSideNav);
rightSideSecondary.addEventListener('click', () => {
  sideNav.classList.remove('toggled');
});