$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop:true,
      nav:true,
      navText : ["",""],
      items: 1
  });
});
$(document).ready(function() {
  $('.header-burger').click(function(event) {
      $('.header-burger, .header-menu').toggleClass('active');
      $('body').toggleClass('lock');
  })
  $('.header-link').click(function(event) {
      $('.header-burger, .header-menu').removeClass('active');
      $('body').removeClass('lock');
  })
  $('.shop-item__visible').click(function(event) {
      $('.closes').toggleClass('closeup');
  })
});