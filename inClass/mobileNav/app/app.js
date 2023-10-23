// var mobileButton = document.getElementById('hamburger-icon');

// mobileButton.addEventListener('click', toggleMenu)

// function toggleMenu(){
//     mobileButton.classList.toggle('open');
// }

$(".hamburger-icon").on("click", () => {
    $(".hamburger-icon").toggleClass("open");
})