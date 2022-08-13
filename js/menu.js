const navList = document.querySelector('.nav-list');
const navItem=document.querySelectorAll('.nav-item');
const navLink=document.querySelectorAll('.nav-link');
const changeClass = el => {
    for (let i = 0; i < navList.children.length; i++) {
        navLink[i].classList.remove('active');
        console.log('active');
    }
    el.classList.add('active');
  
}

navList.addEventListener('click', e => {
 
    changeClass(e.target);
  
})
