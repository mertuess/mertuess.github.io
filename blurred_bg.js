$(window).scroll(function() {
    var s = $(window).scrollTop(),
    opacityVal = (s / 150.0);
    $('.blurred-img').css('opacity', opacityVal);
});

alert('Скрипт работает');
