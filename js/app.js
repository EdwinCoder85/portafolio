const menu = document.querySelector('.nav__menu');
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');

menu.addEventListener('click', function(){
  menuList.classList.toggle('nav__list--show');
});

links.forEach(function(link){
  link.addEventListener('click', function(){
    menuList.classList.remove('nav__list--show')
  })
})


document.addEventListener('DOMContentLoaded', function() {
  const swictherTheme = document.querySelector('.nav__check');
  const root = document.documentElement;

  if(root.getAttribute('data-theme') === 'dark'){
    swictherTheme.checked = true;      
  } 

  function toggleTheme(){
    const setTheme = this.checked ? 'dark' : 'light';
    root.setAttribute('data-theme', setTheme);
    localStorage.setItem('theme', setTheme);
  }
  
  swictherTheme.addEventListener('click', toggleTheme);
});

const storageTheme = localStorage.getItem('theme');
const systemColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const newTheme = storageTheme ?? systemColorScheme;

document.documentElement.setAttribute('data-theme', newTheme);