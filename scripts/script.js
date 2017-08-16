
window.onload = function () {
   var menuIcon =  document.querySelector('.header-top-menu-icon img');

   document.getElementsByClassName('header-top-menu-icon')[0].onclick = function() {
       var menuIconSrc = menuIcon.getAttribute('src');
       var menu = document.querySelector('.header-menu-mobile');

       if(menuIconSrc == './images/hamburger.png') {
            menuIconSrc= './images/menuIconClose.png';
            menuIcon.setAttribute('src', menuIconSrc);
            menu.style.display = 'block';
            var onresize = function(e) {
                var width = e.target.outerWidth;
                var height = e.target.outerHeight;
                if(width > 767) {
                    menu.style.display = 'none';
                    menuIconSrc = './images/hamburger.png';
                    menuIcon.setAttribute('src', menuIconSrc);
                }
            }
            window.addEventListener("resize", onresize);
           
       }
       else {
            menuIconSrc= './images/hamburger.png';
            menuIcon.setAttribute('src', menuIconSrc);
            menu.style.display = 'none';
       }
   }

   var buttonClicked = document.getElementsByClassName('main4-content-buttonRight')[0];
   buttonClicked.addEventListener("click", changeButton);

}

function changeButton() {
    var notSelect = 'main4-content-buttonRight';
    var select = 'main4-content-buttonLeft';
    var buttonNotClicked = document.getElementsByClassName('main4-content-buttonLeft')[0];

    buttonNotClicked.className = notSelect;
    buttonNotClicked.addEventListener("click", changeButton);
    
    this.className = select;
}

    