function initListeners() {
    $(window).on("resize", (e) => {
        if($(window).width() > 768) {
            $(".links").removeClass("hide")
        } else {
            $(".links").addClass("hide")
        }
    })

    $(".m-nav").on("click", () => {
        $(".links").addClass(".m-links")
    });
}
 
$(document).ready(function () { 
    initListeners(); 
});