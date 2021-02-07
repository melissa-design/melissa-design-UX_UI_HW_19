$(document).ready(function() {

    $(".burger").click(function() {
        $("header").toggleClass("mobileNav");
        $(".burger").hide();
        $(".cross").show();
    });

    $(".cross").click(function() {
        $("header").toggleClass("mobileNav");
        $(".cross").hide();
        $(".burger").show();
    });

});