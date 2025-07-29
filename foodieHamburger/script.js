const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')
const nav = document.querySelector('nav')


hamburgerIcon.addEventListener('click' , (e) => {
    e.stopPropagation()
    headerContent.classList.add('menu-open')
})

nav.addEventListener('click' , (e) => {
    e.stopPropagation()
})
// headerContent.addEventListener('click' , (e) => {
//     e.stopPropagation()
// })

closeIcon.addEventListener('click' , () => {
    headerContent.classList.remove('menu-open')
})

document.addEventListener('click', () => {
  headerContent.classList.remove('menu-open');
});

document.addEventListener('click', (e) => {
  if (!headerContent.contains(e.target)) {
    headerContent.classList.remove('menu-open');
  }
});



const go_to = document.querySelector('.top')
const main = document.querySelector('.main-content')

go_to.addEventListener('click',()=>{
    main.scrollTo(0,0)
})