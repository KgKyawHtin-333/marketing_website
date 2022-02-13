// Menu-bar show-hide 
$("#btnMode").on("click", () => {
    $("#navbarNav").toggleClass("show-hide-menu");

    $(".menu-icon").toggleClass("fa-xmark"); // fa-xmark will appear like this <i class="fa-solid fa-bars fa-xmark"></i>
    // As css propriety nauture <i class="fa-soid fa-bars fa-xmark"></i>
    // fa-xmark will display instead of fa-bars
})

// Menu-bar scroll
let screen_height = $(window).height();

$(window).scroll(function() {
    let current_position = $(this).scrollTop();

    if (current_position >= screen_height - 100) {
        $(".header").addClass("header-scroll");
    } else {
        $(".header").removeClass("header-scroll");
    }
})

// For Loading screen 
$(window).on("load", function() {
    $(".loader-container").fadeOut(500, function() {
        $(this).remove();
    });

})

