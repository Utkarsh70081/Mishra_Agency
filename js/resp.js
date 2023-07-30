burger = document.querySelector('.burger')
navList = document.querySelector('.nav-list')


burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class-resp');
    const banner = document.querySelector('.banner header');
    banner.classList.toggle('active');
    const ban = document.querySelector('.banner header');
    ban.classList.toggle('passive');
    const rot = document.querySelector('.banner .content');
    rot.classList.toggle('margin');
    const agency= document.querySelector('.banner header .logo');
    agency.classList.toggle('agency');
    const humbgr= document.querySelector('.burger');
    humbgr.classList.toggle('bgr');
})

