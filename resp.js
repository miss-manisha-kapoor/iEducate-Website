 burger = document.querySelector('.burger')
 navbar= document.querySelector('.navbar');
 navList = document.querySelector('.nav-list');
 rightNav = document.querySelector('.rightnav');



burger.addEventListener('click' , ()=>{
    rightNav.ClassList.toggle('v-Class-resp');
    NavList.ClassList.toggle('v-Class-resp');
    navbar.ClassList.toggle('h-nav-resp');

}
);
