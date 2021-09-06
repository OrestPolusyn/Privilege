 const filtersBtn = document.querySelector('.filters__btn'),
   filtersClose = document.querySelector('.sidebar__close');

 if (filtersBtn !== null && filtersClose) {
   filtersBtn.addEventListener('click', function () {
     document.querySelector('.sidebar').classList.add('sidebar-active');
     document.querySelector('body').style.height = 'auto';
   });

   filtersClose.addEventListener('click', function () {
     document.querySelector('.sidebar').classList.remove('sidebar-active');
     document.querySelector('body').style.height = '100%';
   });
 }
