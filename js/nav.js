$("#navIcon").on("ckick", function(){
    $(".mobileNav").slideToggle();
    $(navIcon).toggleClass("fa-bars");
    $(navIcon).toggleClass("fa-xmark");
})
