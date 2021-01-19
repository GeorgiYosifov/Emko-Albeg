$(document).ready(function() {
    let isPopUp = false;

    // Function to change the nav-bar on scroll
    $(window).scroll(function() {
        ($(window).scrollTop() >= 100) ? (
            $('.fixed-nav-bar').addClass('scrolled'),
            $('.the-bass').addClass('scrolled'),
            $('.fixed-nav-bar img').addClass('scrolled'),
            $('.fixed-nav-bar .logo').addClass('scrolled')
        ) : (
            $('.fixed-nav-bar').removeClass('scrolled'),
            $('.the-bass').removeClass('scrolled'),
            $('.fixed-nav-bar img').removeClass('scrolled'),
            $('.fixed-nav-bar .logo').removeClass('scrolled')
        );
    });

    // Drop Down Function
    $('#menuButton').on('change', function() {
        ($('#menuButton').is(':checked')) ? (
            $('.the-bass').addClass('dropped')
        ) : (
            $('.the-bass').removeClass('dropped')
        );
    });

    // Hover image  
    $(".image-part, .image-part *").hover(
        function() {
            if (!isPopUp) {
                $(this).find('.fa-expand-arrows-alt').addClass('expandBtn').removeClass('noneExpandBtn');
            }
        },
        function() {
            $(this).find('.fa-expand-arrows-alt').addClass('noneExpandBtn').removeClass('expandBtn');
        }
    );

    // Pop up image
    $('.image-main-img').click(function(e) {
        if (!isPopUp) {
            e.stopPropagation();
            let currParent = $(e.target).parent();
            currParent.addClass('popUp').removeClass('image-main');
            $(e.target).removeClass("image-main-img");
            currParent.children('.fa-expand-arrows-alt').addClass('noneExpandBtn').removeClass('expandBtn');
            currParent.children('i').addClass('closeBtn').removeClass('noneCloseBtn');
            isPopUp = true;
        }
    });

    //Expand image
    $('.fa-expand-arrows-alt').click(function(e) {
        if (!isPopUp) {
            e.stopPropagation();
            let currParent = $(e.target).parent();
            currParent.addClass('popUp').removeClass('image-main');
            currParent.children('img').removeClass("image-main-img");
            currParent.children('.fa-expand-arrows-alt').addClass('noneExpandBtn').removeClass('expandBtn');
            currParent.children('.fa-times').addClass('closeBtn').removeClass('noneCloseBtn');
            isPopUp = true;
        }
    });

    //Close pop up image
    $("body").click(function(e) {
        if (isPopUp && !$(e.target).is('.popUp, .popUp *')) {
            $('.popUp').children('img').addClass("image-main-img");
            $('.popUp').children('.fa-times').addClass('noneCloseBtn').removeClass('closeBtn');
            $('.popUp').children('.fa-expand-arrows-alt').addClass('expandBtn').removeClass('noneExpandBtn');
            $('.popUp').addClass('image-main').removeClass('popUp');
            isPopUp = false;
        }

    });

    //Close pop up image
    $('.fa-times').click(function(e) {
        $(e.target).parent().addClass('image-main').removeClass('popUp');
        $(e.target).parent().children('img').addClass("image-main-img");
        $(e.target).addClass('noneCloseBtn').removeClass('closeBtn');
        $(e.target).parent().children('.fa-expand-arrows-alt').addClass('expandBtn').removeClass('noneExpandBtn');
        isPopUp = false;
    });
});