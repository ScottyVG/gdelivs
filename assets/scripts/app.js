$(document).ready(function() {

  $('.button-collapse').sideNav();
  $('.parallax').parallax();

  $('#menu').find('.card').on('click', function() {
    let price = $(this).find('.price').text()
    let title = $(this).find('.card-title').text()

    addToCart(price, title);
  });

  // addToCart(price, title)

  // find price & title
  var addToCart = function(price, title) {
    console.log(`Price: ${price} Title:${title}`);
  }

});
