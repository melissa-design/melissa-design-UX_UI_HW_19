const mediaQuery = window.matchMedia('(max-width: 1023px)')

$(document).ready(function() {

    $(".cross").hide();
    $(".navcontainer").hide();
    $(".burger").click(function() {
        $(".navcontainer").slideToggle("slow", function() {
            $(".burger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function() {
        $(".navcontainer").slideToggle("slow", function() {
            $(".cross").hide();
            $(".burger").show();
        });
    });

});