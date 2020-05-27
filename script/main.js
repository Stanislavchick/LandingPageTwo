$(window).scroll(function (){
    $('.img_main').each(function (){
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+300) {
            $(this).addClass('animate__pulse');
        }
    });
});

$(window).scroll(function (){
    $('.achive_img').each(function (){
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+500) {
            $(this).addClass('animate__heartBeat');
        }
    });
});

function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
        scrollTop: $(id).offset ().top - offset
    }, 700);
    return false;
}