// navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.pageYOffset > fixedNav){
        header.classList.add('nav-fixed');
    }else{
        header.classList.remove('nav-fixed');
    }
}
    //mode terang 
    const darkModeButton = document.getElementById('darkModeButton');
    const body = document.body;
    const icon = document.getElementById('icon');

    function toggleDarkMode() {
        body.classList.toggle('dark');
        const isDarkMode = body.classList.contains('dark');
        if (isDarkMode) {
            icon.className = "fas fa-moon"; 
        } else {
            icon.className = 'fas fa-sun';     
             }
    }
    const sunIcon = document.getElementById('icon');
    // hamburger button
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    hamburger.addEventListener('click',function(){
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    });
        // Temukan elemen input email
        const emailInput = document.querySelector('input[name="email"]');
    
        // Tambahkan event listener untuk memodifikasi input saat kehilangan fokus (blur)
        emailInput.addEventListener('blur', function() {
            // Periksa apakah input email tidak mengandung "@gmail.com"
            if (emailInput.value.indexOf('@') === -1) {
                // Tambahkan "@gmail.com" jika tidak ada
                emailInput.value += "@hnfbryn.com";
            }else{
                emailInput.value += " ";
            }
        });