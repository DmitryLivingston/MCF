$(document).ready(function(){

$(".cabinet-block .tabs-item").click(function() {
	$(".cabinet-block .tabs-item").removeClass("active").eq($(this).index()).addClass("active");
}).eq(0).addClass("active");

$(function () {
    // при нажатии на кнопку scrollup
    $('.scrollup').click(function () {
      // переместиться в верхнюю часть страницы
      $("html, body").animate({
        scrollTop: 0
      }, 1000);
    })
  })
  // при прокрутке окна (window)
  $(window).scroll(function () {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop() > 200) {
      // то сделать кнопку scrollup видимой
      $('.scrollup').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
      $('.scrollup').fadeOut();
    }
  });
});