$(document).ready(function() {

    $(".burger").click(function() {
        $("header").toggleClass("mobileNav");
        $(".burger").hide();
        $(".cross").show();
    });

    $(".cross,.menuitem").click(function() {
        $("header").toggleClass("mobileNav");
        $(".cross").hide();
        $(".burger").show();
    });

});